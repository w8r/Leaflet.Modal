/**
 * Leaflet modal control
 *
 * @license MIT
 * @author Alexander Milevski <info@w8r.name>
 * @preserve
 */

"use strict";

/**
 * "foo bar baz" -> ".foo.bar.baz"
 * @param  {String} classString
 * @return {String}
 */
L.DomUtil.classNameToSelector = function(classString) {
  return (' ' + classString).split(' ').join('.').replace(/^\s+|\s+$/g, '');
};

/**
 * Modal handler
 * @class   {L.Map.Modal}
 * @extends {L.Mixin.Events}
 * @extends {L.Handler}
 */
L.Map.Modal = L.Handler.extend( /** @lends {L.Map.Hadler.prototype} */ {

  includes: L.Mixin.Events,

  /**
   * @static
   * @type {Object}
   */
  statics: {
    BASE_CLS: 'leaflet-modal',
    HIDE: 'modal.hide',
    SHOW: 'modal.show'
  },

  /**
   * @type {Object}
   */
  options: {
    OVERLAY_CLS: 'overlay',
    MODAL_CLS: 'modal',
    MODAL_CONTENT_CLS: 'modal-content',
    SHOW_CLS: 'show',
    CLOSE_CLS: 'close',

    closeTitle: 'close',
    zIndex: 10000,
    transitionDuration: 300,

    wrapperTemplate: [
      '<div class="{OVERLAY_CLS}"></div>',
      '<div class="{MODAL_CLS}"><div class="{MODAL_CONTENT_CLS}">',
      '<span class="{CLOSE_CLS}" title="{closeTitle}">&times;</span>',
      '{_content}',
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
   * @param  {Object} options
   */
  _show: function(options) {
    if (this._visible) {
      this._hide();
    }
    options = L.Util.extend({}, this.options, options);

    this._render(options);
    this._setContainerSize(options);

    var content = this._getConentContainer();
    var mapSize = this._map.getSize();

    if (content.offsetHeight < mapSize.y) {
      content.style.marginTop = ((mapSize.y - content.offsetHeight) / 2) + 'px';
    }

    setTimeout(L.Util.bind(function() {
      L.DomUtil.addClass(this._container, this.options.SHOW_CLS);
    }, this), 0);

    var closeBtn = this._container.querySelector('.' + this.options.CLOSE_CLS);
    if (closeBtn) {
      L.DomEvent.on(closeBtn, 'click', this._onCloseClick, this);
    }

    var modal = this._container.querySelector('.' + this.options.MODAL_CLS);
    if (modal) {
      L.DomEvent.on(modal, 'mousedown', this._onMouseDown, this);
    }

    this._visible = true;

    // callbacks
    if (typeof options.onShow === 'function') {
      this._map.once(L.Map.Modal.SHOW, options.onShow);
    }

    if (typeof options.onHide === 'function') {
      this._map.once(L.Map.Modal.HIDE, options.onHide);
    }

    // fire event
    this._map.fire(L.Map.Modal.SHOW, {
      modal: this
    });
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
        L.DomUtil.classNameToSelector(this.options.MODAL_CONTENT_CLS));
      if (contentContainer) {
        contentContainer.appendChild(options.element);
      }
    }
  },

  /**
   * @return {Element}
   */
  _getConentContainer: function() {
    return this._container.querySelector('.' + this.options.MODAL_CONTENT_CLS);
  },

  /**
   * @param {Object} options
   * @param {Number} options.width
   * @param {Number} options.height
   */
  _setContainerSize: function(options) {
    var content = this._getConentContainer();

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

      setTimeout(L.Util.bind(function() {
        this._map.fire(L.Map.Modal.HIDE, {
          modal: this
        });
      }, this), this.options.transitionDuration);
    }
  },

  /**
   * Mouse down on overlay
   * @param  {L.MouseEvent} evt
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
   * @param  {KeyboardEvent} evt
   */
  _onKeyDown: function(evt) {
    var key = evt.keyCode || evt.which;
    if (key === 27) {
      this._hide();
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
