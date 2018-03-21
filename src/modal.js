/**
 * Leaflet modal control
 *
 * @license MIT
 * @author Alexander Milevski <info@w8r.name>
 * @preserve
 */

"use strict";

/**
 * Modal handler
 * @class   {L.Map.Modal}
 * @extends {L.Mixin.Events}
 * @extends {L.Handler}
 */
L.Map.Modal = L.Handler.extend( /** @lends {L.Map.Hadler.prototype} */ {

  includes: L.Evented ? L.Evented.prototype : L.Mixin.Events,

  /**
   * @static
   * @type {Object}
   */
  statics: {
    BASE_CLS: 'leaflet-modal',
    HIDE: 'modal.hide',
    SHOW_START: 'modal.showStart',
    SHOW: 'modal.show',
    CHANGED: 'modal.changed',
    /**
     * "foo bar baz" -> ".foo.bar.baz"
     * @param  {String} classString
     * @return {String}
     */
    classNameToSelector: function(classString) {
      return (' ' + classString).split(' ').join('.').replace(/^\s+|\s+$/g, '');
    }
  },

  /**
   * @type {Object}
   */
  options: {
    OVERLAY_CLS: 'overlay',
    MODAL_CLS: 'modal',
    MODAL_CONTENT_CLS: 'modal-content',
    INNER_CONTENT_CLS: 'modal-inner',
    SHOW_CLS: 'show',
    CLOSE_CLS: 'close',

    closeTitle: 'close',
    zIndex: 10000,
    transitionDuration: 300,

    wrapperTemplate: [
      '<div class="{OVERLAY_CLS}"></div>',
      '<div class="{MODAL_CLS}"><div class="{MODAL_CONTENT_CLS}">',
      '<span class="{CLOSE_CLS}" title="{closeTitle}">&times;</span>',
      '<div class="{INNER_CONTENT_CLS}">{_content}</div>',
      '</div></div>'
    ].join(''),

    template: '{content}',
    content: ''

  },

  /**
   * @constructor
   * @param  {L.Map}   map
   * @param  {Object=} options
   */
  initialize: function(map, options) {
    L.Handler.prototype.initialize.call(this, map);
    L.Util.setOptions(this, options);

    this._visible = false;

    var container = this._container =
      L.DomUtil.create('div', L.Map.Modal.BASE_CLS, map._container);
    container.style.zIndex = this.options.zIndex;
    container.style.position = 'absolute';
    this._map._controlContainer.appendChild(container);

    L.DomEvent
      .disableClickPropagation(container)
      .disableScrollPropagation(container);
    L.DomEvent.on(container, 'contextmenu', L.DomEvent.stopPropagation);

    this.enable();
  },

  /**
   * Add events and keyboard handlers
   */
  addHooks: function() {
    L.DomEvent.on(document, 'keydown', this._onKeyDown, this);
    this._map.on({
      modal: this._show
    }, this);
  },

  /**
   * Disable handlers
   */
  removeHooks: function() {
    L.DomEvent.off(document, 'keydown', this._onKeyDown, this);
    this._map.off({
      modal: this._show
    }, this);
  },

  /**
   * @return {L.Map.Modal}
   */
  hide: function() {
    this._hide();
    return this;
  },

  /**
   * @return {Boolean}
   */
  isVisible: function() {
    return this._visible;
  },

  /**
   * Show again, or just resize and re-position
   * @param  {Object=} options
   */
  update: function(options) {
    if (options) {
      this._show(options);
    } else {
      this._updatePosition();
    }
  },

  /**
   * @param {String} content
   */
  setContent: function(content) {
    this._getInnerContentContainer().innerHTML = content;
    this.update();
  },

  /**
   * Update container position
   */
  _updatePosition: function() {
    var content = this._getContentContainer();
    var mapSize = this._map.getSize();

    if (content.offsetHeight < mapSize.y) {
      content.style.marginTop = ((mapSize.y - content.offsetHeight) / 2) + 'px';
    } else {
      content.style.marginTop = '';
    }
  },

  /**
   * @param  {Object} options
   */
  _show: function(options) {
    if (this._visible) {
      this._hide();
    }
    options = L.Util.extend({}, this.options, options);

    this._render(options);
    this._setContainerSize(options);

    this._updatePosition();

    this.requestAnimFrame(function() {
      var contentContainer = this._getContentContainer();
      L.DomEvent.disableClickPropagation(contentContainer);
      L.DomUtil.addClass(this._container, this.options.SHOW_CLS);
      if (this.options.transitionDuration) {
        L.DomEvent.on(contentContainer, 'transitionend', this._onTransitionEnd, this);
      } else {
        this._onTransitionEnd();
      }
      if (!L.Browser.any3d) {
        this.requestAnimFrame(this._onTransitionEnd, this);
      }
    }, this);

    var closeBtn = this._container.querySelector('.' + this.options.CLOSE_CLS);
    if (closeBtn) {
      L.DomEvent.on(closeBtn, 'click', this._onCloseClick, this);
    }

    var modal = this._container.querySelector('.' + this.options.MODAL_CLS);
    if (modal) {
      L.DomEvent.on(modal, 'mousedown', this._onMouseDown, this);
    }

    // callbacks
    if (typeof options.onShow === 'function') {
      this._map.once(L.Map.Modal.SHOW, options.onShow);
    }

    if (typeof options.onHide === 'function') {
      this._map.once(L.Map.Modal.HIDE, options.onHide);
    }

    // fire event
    this._map.fire(L.Map.Modal.SHOW_START, {
      modal: this
    });
  },

  /**
   * Show transition ended
   * @param  {TransitionEvent=} e
   */
  _onTransitionEnd: function(e) {
    var data = {
      modal: this
    };
    var map = this._map;
    if (!this._visible) {
      if (L.DomUtil.hasClass(this._container, this.options.SHOW_CLS)) {
        this._visible = true;
        map.fire(L.Map.Modal.SHOW, data);
      } else {
        map.fire(L.Map.Modal.HIDE, data);
      }
    } else {
      map.fire(L.Map.Modal.CHANGED, data);
    }
  },

  /**
   * @param  {L.MouseEvent} evt
   */
  _onCloseClick: function(evt) {
    L.DomEvent.stop(evt);
    this._hide();
  },

  /**
   * Render template
   * @param  {Object} options
   */
  _render: function(options) {
    this._container.innerHTML = L.Util.template(
      options.wrapperTemplate,
      L.Util.extend({}, options, {
        _content: L.Util.template(options.template, options)
      })
    );
    if (options.element) {
      var contentContainer = this._container.querySelector(
        L.Map.Modal.classNameToSelector(this.options.MODAL_CONTENT_CLS));
      if (contentContainer) {
        contentContainer.appendChild(options.element);
      }
    }
    if (this.options.transitionDuration) {
      var containers = [
        [this._getContentContainer(), "margin "],
        [this._getContainerByClassName(this.options.OVERLAY_CLS), "opacity"]
      ];
      for (var fry = 0; fry < containers.length; fry++) {
        var container = containers[fry][0];
        var transitionProperty = containers[fry][1];
        if (container) {
          var transition = transitionProperty + " " + this.options.transitionDuration + "ms linear";
          this.setCss3Style(container, "transition", transition);
        }
      }
    }
  },

  /**
   * @return {Element}
   */
  _getContainerByClassName: function (className) {
    return this._container.querySelector(
      L.Map.Modal.classNameToSelector(className));
  },

  /**
   * @return {Element}
   */
  _getContentContainer: function() {
    return this._getContainerByClassName(this.options.MODAL_CONTENT_CLS);
  },

  /**
   * Inner content, don't touch destroy button
   * @return {Element}
   */
  _getInnerContentContainer: function() {
    return this._getContainerByClassName(this.options.INNER_CONTENT_CLS)
  },

  /**
   * @param {Object} options
   * @param {Number} options.width
   * @param {Number} options.height
   */
  _setContainerSize: function(options) {
    var content = this._getContentContainer();

    if (options.width) {
      content.style.width = options.width + 'px';
    }

    if (options.height) {
      content.style.height = options.height + 'px';
    }
  },

  /**
   * Hide blocks immediately
   */
  _hideInternal: function() {
    this._visible = false;
    L.DomUtil.removeClass(this._container, this.options.SHOW_CLS);
  },

  /**
   * Hide modal
   */
  _hide: function() {
    if (this._visible) {
      this._hideInternal();

      this.requestAnimFrame(this._onTransitionEnd, this);
    }
  },

  /**
   * Mouse down on overlay
   * @param {L.MouseEvent} evt
   */
  _onMouseDown: function(evt) {
    L.DomEvent.stop(evt);
    var target = (evt.target || evt.srcElement);
    if (L.DomUtil.hasClass(target, this.options.MODAL_CLS)) {
      this._hide();
    }
  },

  /**
   * Key stroke(escape)
   * @param {KeyboardEvent} evt
   */
  _onKeyDown: function(evt) {
    var key = evt.keyCode || evt.which;
    if (key === 27) {
      this._hide();
    }
  },

  requestAnimFrame: function (cb, context) {
    if (this.options.transitionDuration) {
      return L.Util.requestAnimFrame(cb, context);
    }
    return cb.call(context);
  },

  /**
   * Set element style property with vendors prefix
   * @param {Element} el
   * @param {string} prop
   * @param {string} val
   */
  setCss3Style: function(el, prop, val) {
    var vendors = [
      '-webkit-',
      '-o-',
      '-moz-',
      '-ms-',
      ''
    ];
    var toCamelCase = function(str) {
      return str.toLowerCase().replace(/(\-[a-z])/g, function($1) {
        return $1.toUpperCase().replace('-', '');
      });
    };

    for (var fry = 0; fry < vendors.length; fry++) {
      var vendor = vendors[fry];
      var property = toCamelCase(vendor + prop);
      if (property in el.style) {
        el.style[property] = val;
      }
    }
}

});

// register hook
L.Map.addInitHook('addHandler', 'modal', L.Map.Modal);

L.Map.include( /** @lends {L.Map.prototype} */ {

  /**
   * @param  {Object} options
   * @return {L.Map}
   */
  openModal: function(options) {
    return this.fire('modal', options);
  },

  /**
   * @return {L.Map}
   */
  closeModal: function() {
    this.modal.hide();
    return this;
  }

});
