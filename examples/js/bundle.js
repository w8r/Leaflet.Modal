(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/* global L */

var Modal = require('../../src/modal');

L.Icon.Default.imagePath = "http://cdn.leafletjs.com/leaflet-0.7/images";

// preload eurodoge
var img = new Image();
img.src = 'img/doge.jpg';

////////////////////////////////////////////////////////////////////////////////
var map = global.map = new L.Map('map', {}).setView([22.42658, 114.1452], 11);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; ' +
    '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

////////////////////////////////////////////////////////////////////////////////

L.DomEvent
  .on(document.querySelector('.open-modal'), 'click', function() {
    map.fire('modal', {
      content: '<h1>Modal header</h1>' +
        '<p class="centered"><img src="img/doge.jpg" alt="eurodoge has landed"></p>' +
        '<div class="centered">Image by ' +
        '<a href="https://twitter.com/hasdogelanded">@hasdogelanded</a></div>'
    });
  })
  .on(document.querySelector('.open-modal-long'), 'click', function() {
    map.fire('modal', {
      content: '<h1>Modal header</h1>' + (new Array(100)).join('<p>Content line</p>')
    });
  })
  .on(document.querySelector('.open-modal-size'), 'click', function() {
    map.fire('modal', {
      content: '<h1>Modal header</h1>' + (new Array(2)).join('<p>Content line</p>'),
      width: 300,
      height: 350
    });
  })
  .on(document.querySelector('.open-modal-custom'), 'click', function() {
    map.fire('modal', {
      title: 'Custom header',
      content: '<ul>' + (new Array(5)).join('<li>Content line</li>') + '</ul>',
      template: ['<div class="modal-header"><h2>{title}</h2></div>',
        '<hr>',
        '<div class="modal-body">{content}</div>',
        '<div class="modal-footer">',
        '<button class="topcoat-button--large {OK_CLS}">{okText}</button>',
        '<button class="topcoat-button--large {CANCEL_CLS}">{cancelText}</button>',
        '</div>'
      ].join(''),

      okText: 'Ok',
      cancelText: 'Cancel',
      OK_CLS: 'modal-ok',
      CANCEL_CLS: 'modal-cancel',

      width: 300,

      onShow: function(evt) {
        var modal = evt.modal;
        L.DomEvent
          .on(modal._container.querySelector('.modal-ok'), 'click', function() {
            alert('you pressed ok');
            modal.hide();
          })
          .on(modal._container.querySelector('.modal-cancel'), 'click', function() {
            alert('You pressed cancel');
            modal.hide();
          });
      }
    });
  })
  .on(document.querySelector('.open-modal-dom'), 'click', function() {
    var node = L.DomUtil.create('div', 'dom-ex');
    node.innerHTML = '<h2>Click me</h2><p>To move the map and then close modal</p>';
    L.DomEvent.on(node, 'click', function() {
      var size = map.getSize();
      map.on('moveend', function() {
        setTimeout(function() {
          map.closeModal();
        }, 1000);
      }).panBy(
        L.point((2 * Math.random() - 1) * size.x * 0.5, (2 * Math.random() - 1) * size.y * 0.5)
      );
    });
    map.fire('modal', {
      element: node
    });
  })
  .on(document.querySelector('.open-modal-dynamic'), 'click', function() {
    var timer = 0;
    map.fire('modal', {
      title: 'Custom header',
      content: '<h1>Dynamic content</h1>' +
        (new Array(2)).join('<p>Content line</p>'),

      width: 300,

      onShow: function(evt) {
        var modal = evt.modal;
        var lines = 2;
        var increment = 1;

        L.DomEvent.on(modal._container, 'click', function(evt) {
          var target = evt.target || evt.srcElement;
          if (/btn-stop/.test(target.className)) {
            clearInterval(timer);
          }
        });

        timer = setInterval(function() {
          if (lines === 10 || lines === 1) {
            increment *= -1;
          }
          lines += increment;
          modal.setContent('<h1>Dynamic content</h1>' +
            '<p><button class="topcoat-button--large btn-stop">Stop</button></p>' +
            (new Array(lines)).join('<p>Content line</p>'));
        }, 1000);
      },

      onHide: function() {
        clearInterval(timer);
      }
    });
  });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBMICovXG5cbnZhciBNb2RhbCA9IHJlcXVpcmUoJy4uLy4uL3NyYy9tb2RhbCcpO1xuXG5MLkljb24uRGVmYXVsdC5pbWFnZVBhdGggPSBcImh0dHA6Ly9jZG4ubGVhZmxldGpzLmNvbS9sZWFmbGV0LTAuNy9pbWFnZXNcIjtcblxuLy8gcHJlbG9hZCBldXJvZG9nZVxudmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuaW1nLnNyYyA9ICdpbWcvZG9nZS5qcGcnO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xudmFyIG1hcCA9IGdsb2JhbC5tYXAgPSBuZXcgTC5NYXAoJ21hcCcsIHt9KS5zZXRWaWV3KFsyMi40MjY1OCwgMTE0LjE0NTJdLCAxMSk7XG5cbkwudGlsZUxheWVyKCdodHRwOi8ve3N9LnRpbGUub3NtLm9yZy97en0ve3h9L3t5fS5wbmcnLCB7XG4gIGF0dHJpYnV0aW9uOiAnJmNvcHk7ICcgK1xuICAgICc8YSBocmVmPVwiaHR0cDovL29zbS5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xufSkuYWRkVG8obWFwKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuTC5Eb21FdmVudFxuICAub24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbW9kYWwnKSwgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbWFwLmZpcmUoJ21vZGFsJywge1xuICAgICAgY29udGVudDogJzxoMT5Nb2RhbCBoZWFkZXI8L2gxPicgK1xuICAgICAgICAnPHAgY2xhc3M9XCJjZW50ZXJlZFwiPjxpbWcgc3JjPVwiaW1nL2RvZ2UuanBnXCIgYWx0PVwiZXVyb2RvZ2UgaGFzIGxhbmRlZFwiPjwvcD4nICtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJjZW50ZXJlZFwiPkltYWdlIGJ5ICcgK1xuICAgICAgICAnPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaGFzZG9nZWxhbmRlZFwiPkBoYXNkb2dlbGFuZGVkPC9hPjwvZGl2PidcbiAgICB9KTtcbiAgfSlcbiAgLm9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1vZGFsLWxvbmcnKSwgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbWFwLmZpcmUoJ21vZGFsJywge1xuICAgICAgY29udGVudDogJzxoMT5Nb2RhbCBoZWFkZXI8L2gxPicgKyAobmV3IEFycmF5KDEwMCkpLmpvaW4oJzxwPkNvbnRlbnQgbGluZTwvcD4nKVxuICAgIH0pO1xuICB9KVxuICAub24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbW9kYWwtc2l6ZScpLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBtYXAuZmlyZSgnbW9kYWwnLCB7XG4gICAgICBjb250ZW50OiAnPGgxPk1vZGFsIGhlYWRlcjwvaDE+JyArIChuZXcgQXJyYXkoMikpLmpvaW4oJzxwPkNvbnRlbnQgbGluZTwvcD4nKSxcbiAgICAgIHdpZHRoOiAzMDAsXG4gICAgICBoZWlnaHQ6IDM1MFxuICAgIH0pO1xuICB9KVxuICAub24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbW9kYWwtY3VzdG9tJyksICdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIG1hcC5maXJlKCdtb2RhbCcsIHtcbiAgICAgIHRpdGxlOiAnQ3VzdG9tIGhlYWRlcicsXG4gICAgICBjb250ZW50OiAnPHVsPicgKyAobmV3IEFycmF5KDUpKS5qb2luKCc8bGk+Q29udGVudCBsaW5lPC9saT4nKSArICc8L3VsPicsXG4gICAgICB0ZW1wbGF0ZTogWyc8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+PGgyPnt0aXRsZX08L2gyPjwvZGl2PicsXG4gICAgICAgICc8aHI+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+e2NvbnRlbnR9PC9kaXY+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj4nLFxuICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cInRvcGNvYXQtYnV0dG9uLS1sYXJnZSB7T0tfQ0xTfVwiPntva1RleHR9PC9idXR0b24+JyxcbiAgICAgICAgJzxidXR0b24gY2xhc3M9XCJ0b3Bjb2F0LWJ1dHRvbi0tbGFyZ2Uge0NBTkNFTF9DTFN9XCI+e2NhbmNlbFRleHR9PC9idXR0b24+JyxcbiAgICAgICAgJzwvZGl2PidcbiAgICAgIF0uam9pbignJyksXG5cbiAgICAgIG9rVGV4dDogJ09rJyxcbiAgICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnLFxuICAgICAgT0tfQ0xTOiAnbW9kYWwtb2snLFxuICAgICAgQ0FOQ0VMX0NMUzogJ21vZGFsLWNhbmNlbCcsXG5cbiAgICAgIHdpZHRoOiAzMDAsXG5cbiAgICAgIG9uU2hvdzogZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIHZhciBtb2RhbCA9IGV2dC5tb2RhbDtcbiAgICAgICAgTC5Eb21FdmVudFxuICAgICAgICAgIC5vbihtb2RhbC5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1vaycpLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFsZXJ0KCd5b3UgcHJlc3NlZCBvaycpO1xuICAgICAgICAgICAgbW9kYWwuaGlkZSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9uKG1vZGFsLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhbmNlbCcpLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdZb3UgcHJlc3NlZCBjYW5jZWwnKTtcbiAgICAgICAgICAgIG1vZGFsLmhpZGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSlcbiAgLm9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1vZGFsLWRvbScpLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZSA9IEwuRG9tVXRpbC5jcmVhdGUoJ2RpdicsICdkb20tZXgnKTtcbiAgICBub2RlLmlubmVySFRNTCA9ICc8aDI+Q2xpY2sgbWU8L2gyPjxwPlRvIG1vdmUgdGhlIG1hcCBhbmQgdGhlbiBjbG9zZSBtb2RhbDwvcD4nO1xuICAgIEwuRG9tRXZlbnQub24obm9kZSwgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2l6ZSA9IG1hcC5nZXRTaXplKCk7XG4gICAgICBtYXAub24oJ21vdmVlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBtYXAuY2xvc2VNb2RhbCgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pLnBhbkJ5KFxuICAgICAgICBMLnBvaW50KCgyICogTWF0aC5yYW5kb20oKSAtIDEpICogc2l6ZS54ICogMC41LCAoMiAqIE1hdGgucmFuZG9tKCkgLSAxKSAqIHNpemUueSAqIDAuNSlcbiAgICAgICk7XG4gICAgfSk7XG4gICAgbWFwLmZpcmUoJ21vZGFsJywge1xuICAgICAgZWxlbWVudDogbm9kZVxuICAgIH0pO1xuICB9KVxuICAub24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbW9kYWwtZHluYW1pYycpLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGltZXIgPSAwO1xuICAgIG1hcC5maXJlKCdtb2RhbCcsIHtcbiAgICAgIHRpdGxlOiAnQ3VzdG9tIGhlYWRlcicsXG4gICAgICBjb250ZW50OiAnPGgxPkR5bmFtaWMgY29udGVudDwvaDE+JyArXG4gICAgICAgIChuZXcgQXJyYXkoMikpLmpvaW4oJzxwPkNvbnRlbnQgbGluZTwvcD4nKSxcblxuICAgICAgd2lkdGg6IDMwMCxcblxuICAgICAgb25TaG93OiBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgdmFyIG1vZGFsID0gZXZ0Lm1vZGFsO1xuICAgICAgICB2YXIgbGluZXMgPSAyO1xuICAgICAgICB2YXIgaW5jcmVtZW50ID0gMTtcblxuICAgICAgICBMLkRvbUV2ZW50Lm9uKG1vZGFsLl9jb250YWluZXIsICdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIHZhciB0YXJnZXQgPSBldnQudGFyZ2V0IHx8IGV2dC5zcmNFbGVtZW50O1xuICAgICAgICAgIGlmICgvYnRuLXN0b3AvLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAobGluZXMgPT09IDEwIHx8IGxpbmVzID09PSAxKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnQgKj0gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpbmVzICs9IGluY3JlbWVudDtcbiAgICAgICAgICBtb2RhbC5zZXRDb250ZW50KCc8aDE+RHluYW1pYyBjb250ZW50PC9oMT4nICtcbiAgICAgICAgICAgICc8cD48YnV0dG9uIGNsYXNzPVwidG9wY29hdC1idXR0b24tLWxhcmdlIGJ0bi1zdG9wXCI+U3RvcDwvYnV0dG9uPjwvcD4nICtcbiAgICAgICAgICAgIChuZXcgQXJyYXkobGluZXMpKS5qb2luKCc8cD5Db250ZW50IGxpbmU8L3A+JykpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0sXG5cbiAgICAgIG9uSGlkZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiJdfQ==
},{"../../src/modal":2}],2:[function(require,module,exports){
/**
 * Leaflet modal control
 *
 * @license MIT
 * @author Alexander Milevski <info@w8r.name>
 * @preserve
 */

/* global L */

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
    SHOW_START: 'modal.showStart',
    SHOW: 'modal.show',
    CHANGED: 'modal.changed'
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

    L.Util.requestAnimFrame(function() {
      var contentContainer = this._getContentContainer();
      L.DomEvent.on(contentContainer, 'transitionend', this._onTransitionEnd, this);
      L.DomEvent.disableClickPropagation(contentContainer);
      L.DomUtil.addClass(this._container, this.options.SHOW_CLS);

      if (!L.Browser.any3d) {
        L.Util.requestAnimFrame(this._onTransitionEnd, this);
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
        L.DomUtil.classNameToSelector(this.options.MODAL_CONTENT_CLS));
      if (contentContainer) {
        contentContainer.appendChild(options.element);
      }
    }
  },

  /**
   * @return {Element}
   */
  _getContentContainer: function() {
    return this._container.querySelector(
      L.DomUtil.classNameToSelector(this.options.MODAL_CONTENT_CLS));
  },

  /**
   * Inner content, don't touch destroy button
   * @return {Element}
   */
  _getInnerContentContainer: function() {
    return this._container.querySelector(
      L.DomUtil.classNameToSelector(this.options.INNER_CONTENT_CLS))
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

      L.Util.requestAnimFrame(this._onTransitionEnd, this);
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


if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = L.Map.Modal;
} else if (typeof define === 'function' && define.amd) {
  define(L.Map.Modal);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZXhhbXBsZXMvanMvYXBwLmpzIiwic3JjL21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8qIGdsb2JhbCBMICovXG5cbnZhciBNb2RhbCA9IHJlcXVpcmUoJy4uLy4uL3NyYy9tb2RhbCcpO1xuXG5MLkljb24uRGVmYXVsdC5pbWFnZVBhdGggPSBcImh0dHA6Ly9jZG4ubGVhZmxldGpzLmNvbS9sZWFmbGV0LTAuNy9pbWFnZXNcIjtcblxuLy8gcHJlbG9hZCBldXJvZG9nZVxudmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuaW1nLnNyYyA9ICdpbWcvZG9nZS5qcGcnO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xudmFyIG1hcCA9IGdsb2JhbC5tYXAgPSBuZXcgTC5NYXAoJ21hcCcsIHt9KS5zZXRWaWV3KFsyMi40MjY1OCwgMTE0LjE0NTJdLCAxMSk7XG5cbkwudGlsZUxheWVyKCdodHRwOi8ve3N9LnRpbGUub3NtLm9yZy97en0ve3h9L3t5fS5wbmcnLCB7XG4gIGF0dHJpYnV0aW9uOiAnJmNvcHk7ICcgK1xuICAgICc8YSBocmVmPVwiaHR0cDovL29zbS5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xufSkuYWRkVG8obWFwKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuTC5Eb21FdmVudFxuICAub24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbW9kYWwnKSwgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbWFwLmZpcmUoJ21vZGFsJywge1xuICAgICAgY29udGVudDogJzxoMT5Nb2RhbCBoZWFkZXI8L2gxPicgK1xuICAgICAgICAnPHAgY2xhc3M9XCJjZW50ZXJlZFwiPjxpbWcgc3JjPVwiaW1nL2RvZ2UuanBnXCIgYWx0PVwiZXVyb2RvZ2UgaGFzIGxhbmRlZFwiPjwvcD4nICtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJjZW50ZXJlZFwiPkltYWdlIGJ5ICcgK1xuICAgICAgICAnPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaGFzZG9nZWxhbmRlZFwiPkBoYXNkb2dlbGFuZGVkPC9hPjwvZGl2PidcbiAgICB9KTtcbiAgfSlcbiAgLm9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1vZGFsLWxvbmcnKSwgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbWFwLmZpcmUoJ21vZGFsJywge1xuICAgICAgY29udGVudDogJzxoMT5Nb2RhbCBoZWFkZXI8L2gxPicgKyAobmV3IEFycmF5KDEwMCkpLmpvaW4oJzxwPkNvbnRlbnQgbGluZTwvcD4nKVxuICAgIH0pO1xuICB9KVxuICAub24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbW9kYWwtc2l6ZScpLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBtYXAuZmlyZSgnbW9kYWwnLCB7XG4gICAgICBjb250ZW50OiAnPGgxPk1vZGFsIGhlYWRlcjwvaDE+JyArIChuZXcgQXJyYXkoMikpLmpvaW4oJzxwPkNvbnRlbnQgbGluZTwvcD4nKSxcbiAgICAgIHdpZHRoOiAzMDAsXG4gICAgICBoZWlnaHQ6IDM1MFxuICAgIH0pO1xuICB9KVxuICAub24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbW9kYWwtY3VzdG9tJyksICdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIG1hcC5maXJlKCdtb2RhbCcsIHtcbiAgICAgIHRpdGxlOiAnQ3VzdG9tIGhlYWRlcicsXG4gICAgICBjb250ZW50OiAnPHVsPicgKyAobmV3IEFycmF5KDUpKS5qb2luKCc8bGk+Q29udGVudCBsaW5lPC9saT4nKSArICc8L3VsPicsXG4gICAgICB0ZW1wbGF0ZTogWyc8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+PGgyPnt0aXRsZX08L2gyPjwvZGl2PicsXG4gICAgICAgICc8aHI+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+e2NvbnRlbnR9PC9kaXY+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj4nLFxuICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cInRvcGNvYXQtYnV0dG9uLS1sYXJnZSB7T0tfQ0xTfVwiPntva1RleHR9PC9idXR0b24+JyxcbiAgICAgICAgJzxidXR0b24gY2xhc3M9XCJ0b3Bjb2F0LWJ1dHRvbi0tbGFyZ2Uge0NBTkNFTF9DTFN9XCI+e2NhbmNlbFRleHR9PC9idXR0b24+JyxcbiAgICAgICAgJzwvZGl2PidcbiAgICAgIF0uam9pbignJyksXG5cbiAgICAgIG9rVGV4dDogJ09rJyxcbiAgICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnLFxuICAgICAgT0tfQ0xTOiAnbW9kYWwtb2snLFxuICAgICAgQ0FOQ0VMX0NMUzogJ21vZGFsLWNhbmNlbCcsXG5cbiAgICAgIHdpZHRoOiAzMDAsXG5cbiAgICAgIG9uU2hvdzogZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIHZhciBtb2RhbCA9IGV2dC5tb2RhbDtcbiAgICAgICAgTC5Eb21FdmVudFxuICAgICAgICAgIC5vbihtb2RhbC5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1vaycpLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFsZXJ0KCd5b3UgcHJlc3NlZCBvaycpO1xuICAgICAgICAgICAgbW9kYWwuaGlkZSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9uKG1vZGFsLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhbmNlbCcpLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdZb3UgcHJlc3NlZCBjYW5jZWwnKTtcbiAgICAgICAgICAgIG1vZGFsLmhpZGUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSlcbiAgLm9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLW1vZGFsLWRvbScpLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZSA9IEwuRG9tVXRpbC5jcmVhdGUoJ2RpdicsICdkb20tZXgnKTtcbiAgICBub2RlLmlubmVySFRNTCA9ICc8aDI+Q2xpY2sgbWU8L2gyPjxwPlRvIG1vdmUgdGhlIG1hcCBhbmQgdGhlbiBjbG9zZSBtb2RhbDwvcD4nO1xuICAgIEwuRG9tRXZlbnQub24obm9kZSwgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2l6ZSA9IG1hcC5nZXRTaXplKCk7XG4gICAgICBtYXAub24oJ21vdmVlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBtYXAuY2xvc2VNb2RhbCgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pLnBhbkJ5KFxuICAgICAgICBMLnBvaW50KCgyICogTWF0aC5yYW5kb20oKSAtIDEpICogc2l6ZS54ICogMC41LCAoMiAqIE1hdGgucmFuZG9tKCkgLSAxKSAqIHNpemUueSAqIDAuNSlcbiAgICAgICk7XG4gICAgfSk7XG4gICAgbWFwLmZpcmUoJ21vZGFsJywge1xuICAgICAgZWxlbWVudDogbm9kZVxuICAgIH0pO1xuICB9KVxuICAub24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tbW9kYWwtZHluYW1pYycpLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGltZXIgPSAwO1xuICAgIG1hcC5maXJlKCdtb2RhbCcsIHtcbiAgICAgIHRpdGxlOiAnQ3VzdG9tIGhlYWRlcicsXG4gICAgICBjb250ZW50OiAnPGgxPkR5bmFtaWMgY29udGVudDwvaDE+JyArXG4gICAgICAgIChuZXcgQXJyYXkoMikpLmpvaW4oJzxwPkNvbnRlbnQgbGluZTwvcD4nKSxcblxuICAgICAgd2lkdGg6IDMwMCxcblxuICAgICAgb25TaG93OiBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgdmFyIG1vZGFsID0gZXZ0Lm1vZGFsO1xuICAgICAgICB2YXIgbGluZXMgPSAyO1xuICAgICAgICB2YXIgaW5jcmVtZW50ID0gMTtcblxuICAgICAgICBMLkRvbUV2ZW50Lm9uKG1vZGFsLl9jb250YWluZXIsICdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIHZhciB0YXJnZXQgPSBldnQudGFyZ2V0IHx8IGV2dC5zcmNFbGVtZW50O1xuICAgICAgICAgIGlmICgvYnRuLXN0b3AvLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAobGluZXMgPT09IDEwIHx8IGxpbmVzID09PSAxKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnQgKj0gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpbmVzICs9IGluY3JlbWVudDtcbiAgICAgICAgICBtb2RhbC5zZXRDb250ZW50KCc8aDE+RHluYW1pYyBjb250ZW50PC9oMT4nICtcbiAgICAgICAgICAgICc8cD48YnV0dG9uIGNsYXNzPVwidG9wY29hdC1idXR0b24tLWxhcmdlIGJ0bi1zdG9wXCI+U3RvcDwvYnV0dG9uPjwvcD4nICtcbiAgICAgICAgICAgIChuZXcgQXJyYXkobGluZXMpKS5qb2luKCc8cD5Db250ZW50IGxpbmU8L3A+JykpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0sXG5cbiAgICAgIG9uSGlkZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbVY0WVcxd2JHVnpMMnB6TDJGd2NDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFJR2RzYjJKaGJDQk1JQ292WEc1Y2JuWmhjaUJOYjJSaGJDQTlJSEpsY1hWcGNtVW9KeTR1THk0dUwzTnlZeTl0YjJSaGJDY3BPMXh1WEc1TUxrbGpiMjR1UkdWbVlYVnNkQzVwYldGblpWQmhkR2dnUFNCY0ltaDBkSEE2THk5alpHNHViR1ZoWm14bGRHcHpMbU52YlM5c1pXRm1iR1YwTFRBdU55OXBiV0ZuWlhOY0lqdGNibHh1THk4Z2NISmxiRzloWkNCbGRYSnZaRzluWlZ4dWRtRnlJR2x0WnlBOUlHNWxkeUJKYldGblpTZ3BPMXh1YVcxbkxuTnlZeUE5SUNkcGJXY3ZaRzluWlM1cWNHY25PMXh1WEc0dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2TDF4dWRtRnlJRzFoY0NBOUlHZHNiMkpoYkM1dFlYQWdQU0J1WlhjZ1RDNU5ZWEFvSjIxaGNDY3NJSHQ5S1M1elpYUldhV1YzS0ZzeU1pNDBNalkxT0N3Z01URTBMakUwTlRKZExDQXhNU2s3WEc1Y2Jrd3VkR2xzWlV4aGVXVnlLQ2RvZEhSd09pOHZlM045TG5ScGJHVXViM050TG05eVp5OTdlbjB2ZTNoOUwzdDVmUzV3Ym1jbkxDQjdYRzRnSUdGMGRISnBZblYwYVc5dU9pQW5KbU52Y0hrN0lDY2dLMXh1SUNBZ0lDYzhZU0JvY21WbVBWd2lhSFIwY0RvdkwyOXpiUzV2Y21jdlkyOXdlWEpwWjJoMFhDSStUM0JsYmxOMGNtVmxkRTFoY0R3dllUNGdZMjl1ZEhKcFluVjBiM0p6SjF4dWZTa3VZV1JrVkc4b2JXRndLVHRjYmx4dUx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2THk5Y2JseHVUQzVFYjIxRmRtVnVkRnh1SUNBdWIyNG9aRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtOXdaVzR0Ylc5a1lXd25LU3dnSjJOc2FXTnJKeXdnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnYldGd0xtWnBjbVVvSjIxdlpHRnNKeXdnZTF4dUlDQWdJQ0FnWTI5dWRHVnVkRG9nSnp4b01UNU5iMlJoYkNCb1pXRmtaWEk4TDJneFBpY2dLMXh1SUNBZ0lDQWdJQ0FuUEhBZ1kyeGhjM005WENKalpXNTBaWEpsWkZ3aVBqeHBiV2NnYzNKalBWd2lhVzFuTDJSdloyVXVhbkJuWENJZ1lXeDBQVndpWlhWeWIyUnZaMlVnYUdGeklHeGhibVJsWkZ3aVBqd3ZjRDRuSUN0Y2JpQWdJQ0FnSUNBZ0p6eGthWFlnWTJ4aGMzTTlYQ0pqWlc1MFpYSmxaRndpUGtsdFlXZGxJR0o1SUNjZ0sxeHVJQ0FnSUNBZ0lDQW5QR0VnYUhKbFpqMWNJbWgwZEhCek9pOHZkSGRwZEhSbGNpNWpiMjB2YUdGelpHOW5aV3hoYm1SbFpGd2lQa0JvWVhOa2IyZGxiR0Z1WkdWa1BDOWhQand2WkdsMlBpZGNiaUFnSUNCOUtUdGNiaUFnZlNsY2JpQWdMbTl1S0dSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV2Y0dWdUxXMXZaR0ZzTFd4dmJtY25LU3dnSjJOc2FXTnJKeXdnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnYldGd0xtWnBjbVVvSjIxdlpHRnNKeXdnZTF4dUlDQWdJQ0FnWTI5dWRHVnVkRG9nSnp4b01UNU5iMlJoYkNCb1pXRmtaWEk4TDJneFBpY2dLeUFvYm1WM0lFRnljbUY1S0RFd01Da3BMbXB2YVc0b0p6eHdQa052Ym5SbGJuUWdiR2x1WlR3dmNENG5LVnh1SUNBZ0lIMHBPMXh1SUNCOUtWeHVJQ0F1YjI0b1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG05d1pXNHRiVzlrWVd3dGMybDZaU2NwTENBblkyeHBZMnNuTENCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNCdFlYQXVabWx5WlNnbmJXOWtZV3duTENCN1hHNGdJQ0FnSUNCamIyNTBaVzUwT2lBblBHZ3hQazF2WkdGc0lHaGxZV1JsY2p3dmFERStKeUFySUNodVpYY2dRWEp5WVhrb01pa3BMbXB2YVc0b0p6eHdQa052Ym5SbGJuUWdiR2x1WlR3dmNENG5LU3hjYmlBZ0lDQWdJSGRwWkhSb09pQXpNREFzWEc0Z0lDQWdJQ0JvWldsbmFIUTZJRE0xTUZ4dUlDQWdJSDBwTzF4dUlDQjlLVnh1SUNBdWIyNG9aRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtOXdaVzR0Ylc5a1lXd3RZM1Z6ZEc5dEp5a3NJQ2RqYkdsamF5Y3NJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJRzFoY0M1bWFYSmxLQ2R0YjJSaGJDY3NJSHRjYmlBZ0lDQWdJSFJwZEd4bE9pQW5RM1Z6ZEc5dElHaGxZV1JsY2ljc1hHNGdJQ0FnSUNCamIyNTBaVzUwT2lBblBIVnNQaWNnS3lBb2JtVjNJRUZ5Y21GNUtEVXBLUzVxYjJsdUtDYzhiR2srUTI5dWRHVnVkQ0JzYVc1bFBDOXNhVDRuS1NBcklDYzhMM1ZzUGljc1hHNGdJQ0FnSUNCMFpXMXdiR0YwWlRvZ1d5YzhaR2wySUdOc1lYTnpQVndpYlc5a1lXd3RhR1ZoWkdWeVhDSStQR2d5UG50MGFYUnNaWDA4TDJneVBqd3ZaR2wyUGljc1hHNGdJQ0FnSUNBZ0lDYzhhSEkrSnl4Y2JpQWdJQ0FnSUNBZ0p6eGthWFlnWTJ4aGMzTTlYQ0p0YjJSaGJDMWliMlI1WENJK2UyTnZiblJsYm5SOVBDOWthWFkrSnl4Y2JpQWdJQ0FnSUNBZ0p6eGthWFlnWTJ4aGMzTTlYQ0p0YjJSaGJDMW1iMjkwWlhKY0lqNG5MRnh1SUNBZ0lDQWdJQ0FuUEdKMWRIUnZiaUJqYkdGemN6MWNJblJ2Y0dOdllYUXRZblYwZEc5dUxTMXNZWEpuWlNCN1QwdGZRMHhUZlZ3aVBudHZhMVJsZUhSOVBDOWlkWFIwYjI0K0p5eGNiaUFnSUNBZ0lDQWdKenhpZFhSMGIyNGdZMnhoYzNNOVhDSjBiM0JqYjJGMExXSjFkSFJ2YmkwdGJHRnlaMlVnZTBOQlRrTkZURjlEVEZOOVhDSStlMk5oYm1ObGJGUmxlSFI5UEM5aWRYUjBiMjQrSnl4Y2JpQWdJQ0FnSUNBZ0p6d3ZaR2wyUGlkY2JpQWdJQ0FnSUYwdWFtOXBiaWduSnlrc1hHNWNiaUFnSUNBZ0lHOXJWR1Y0ZERvZ0owOXJKeXhjYmlBZ0lDQWdJR05oYm1ObGJGUmxlSFE2SUNkRFlXNWpaV3duTEZ4dUlDQWdJQ0FnVDB0ZlEweFRPaUFuYlc5a1lXd3RiMnNuTEZ4dUlDQWdJQ0FnUTBGT1EwVk1YME5NVXpvZ0oyMXZaR0ZzTFdOaGJtTmxiQ2NzWEc1Y2JpQWdJQ0FnSUhkcFpIUm9PaUF6TURBc1hHNWNiaUFnSUNBZ0lHOXVVMmh2ZHpvZ1puVnVZM1JwYjI0b1pYWjBLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnRiMlJoYkNBOUlHVjJkQzV0YjJSaGJEdGNiaUFnSUNBZ0lDQWdUQzVFYjIxRmRtVnVkRnh1SUNBZ0lDQWdJQ0FnSUM1dmJpaHRiMlJoYkM1ZlkyOXVkR0ZwYm1WeUxuRjFaWEo1VTJWc1pXTjBiM0lvSnk1dGIyUmhiQzF2YXljcExDQW5ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHRnNaWEowS0NkNWIzVWdjSEpsYzNObFpDQnZheWNwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdiVzlrWVd3dWFHbGtaU2dwTzF4dUlDQWdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJQ0FnTG05dUtHMXZaR0ZzTGw5amIyNTBZV2x1WlhJdWNYVmxjbmxUWld4bFkzUnZjaWduTG0xdlpHRnNMV05oYm1ObGJDY3BMQ0FuWTJ4cFkyc25MQ0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0ZzWlhKMEtDZFpiM1VnY0hKbGMzTmxaQ0JqWVc1alpXd25LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHMXZaR0ZzTG1ocFpHVW9LVHRjYmlBZ0lDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUtUdGNiaUFnZlNsY2JpQWdMbTl1S0dSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV2Y0dWdUxXMXZaR0ZzTFdSdmJTY3BMQ0FuWTJ4cFkyc25MQ0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0IyWVhJZ2JtOWtaU0E5SUV3dVJHOXRWWFJwYkM1amNtVmhkR1VvSjJScGRpY3NJQ2RrYjIwdFpYZ25LVHRjYmlBZ0lDQnViMlJsTG1sdWJtVnlTRlJOVENBOUlDYzhhREkrUTJ4cFkyc2diV1U4TDJneVBqeHdQbFJ2SUcxdmRtVWdkR2hsSUcxaGNDQmhibVFnZEdobGJpQmpiRzl6WlNCdGIyUmhiRHd2Y0Q0bk8xeHVJQ0FnSUV3dVJHOXRSWFpsYm5RdWIyNG9ibTlrWlN3Z0oyTnNhV05ySnl3Z1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQjJZWElnYzJsNlpTQTlJRzFoY0M1blpYUlRhWHBsS0NrN1hHNGdJQ0FnSUNCdFlYQXViMjRvSjIxdmRtVmxibVFuTENCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnRZWEF1WTJ4dmMyVk5iMlJoYkNncE8xeHVJQ0FnSUNBZ0lDQjlMQ0F4TURBd0tUdGNiaUFnSUNBZ0lIMHBMbkJoYmtKNUtGeHVJQ0FnSUNBZ0lDQk1MbkJ2YVc1MEtDZ3lJQ29nVFdGMGFDNXlZVzVrYjIwb0tTQXRJREVwSUNvZ2MybDZaUzU0SUNvZ01DNDFMQ0FvTWlBcUlFMWhkR2d1Y21GdVpHOXRLQ2tnTFNBeEtTQXFJSE5wZW1VdWVTQXFJREF1TlNsY2JpQWdJQ0FnSUNrN1hHNGdJQ0FnZlNrN1hHNGdJQ0FnYldGd0xtWnBjbVVvSjIxdlpHRnNKeXdnZTF4dUlDQWdJQ0FnWld4bGJXVnVkRG9nYm05a1pWeHVJQ0FnSUgwcE8xeHVJQ0I5S1Z4dUlDQXViMjRvWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbTl3Wlc0dGJXOWtZV3d0WkhsdVlXMXBZeWNwTENBblkyeHBZMnNuTENCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNCMllYSWdkR2x0WlhJZ1BTQXdPMXh1SUNBZ0lHMWhjQzVtYVhKbEtDZHRiMlJoYkNjc0lIdGNiaUFnSUNBZ0lIUnBkR3hsT2lBblEzVnpkRzl0SUdobFlXUmxjaWNzWEc0Z0lDQWdJQ0JqYjI1MFpXNTBPaUFuUEdneFBrUjVibUZ0YVdNZ1kyOXVkR1Z1ZER3dmFERStKeUFyWEc0Z0lDQWdJQ0FnSUNodVpYY2dRWEp5WVhrb01pa3BMbXB2YVc0b0p6eHdQa052Ym5SbGJuUWdiR2x1WlR3dmNENG5LU3hjYmx4dUlDQWdJQ0FnZDJsa2RHZzZJRE13TUN4Y2JseHVJQ0FnSUNBZ2IyNVRhRzkzT2lCbWRXNWpkR2x2YmlobGRuUXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHMXZaR0ZzSUQwZ1pYWjBMbTF2WkdGc08xeHVJQ0FnSUNBZ0lDQjJZWElnYkdsdVpYTWdQU0F5TzF4dUlDQWdJQ0FnSUNCMllYSWdhVzVqY21WdFpXNTBJRDBnTVR0Y2JseHVJQ0FnSUNBZ0lDQk1Ma1J2YlVWMlpXNTBMbTl1S0cxdlpHRnNMbDlqYjI1MFlXbHVaWElzSUNkamJHbGpheWNzSUdaMWJtTjBhVzl1S0dWMmRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQjBZWEpuWlhRZ1BTQmxkblF1ZEdGeVoyVjBJSHg4SUdWMmRDNXpjbU5GYkdWdFpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUdsbUlDZ3ZZblJ1TFhOMGIzQXZMblJsYzNRb2RHRnlaMlYwTG1Oc1lYTnpUbUZ0WlNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOc1pXRnlTVzUwWlhKMllXd29kR2x0WlhJcE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2x0WlhJZ1BTQnpaWFJKYm5SbGNuWmhiQ2htZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYkdsdVpYTWdQVDA5SURFd0lIeDhJR3hwYm1WeklEMDlQU0F4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwYm1OeVpXMWxiblFnS2owZ0xURTdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lHeHBibVZ6SUNzOUlHbHVZM0psYldWdWREdGNiaUFnSUNBZ0lDQWdJQ0J0YjJSaGJDNXpaWFJEYjI1MFpXNTBLQ2M4YURFK1JIbHVZVzFwWXlCamIyNTBaVzUwUEM5b01UNG5JQ3RjYmlBZ0lDQWdJQ0FnSUNBZ0lDYzhjRDQ4WW5WMGRHOXVJR05zWVhOelBWd2lkRzl3WTI5aGRDMWlkWFIwYjI0dExXeGhjbWRsSUdKMGJpMXpkRzl3WENJK1UzUnZjRHd2WW5WMGRHOXVQand2Y0Q0bklDdGNiaUFnSUNBZ0lDQWdJQ0FnSUNodVpYY2dRWEp5WVhrb2JHbHVaWE1wS1M1cWIybHVLQ2M4Y0Q1RGIyNTBaVzUwSUd4cGJtVThMM0ErSnlrcE8xeHVJQ0FnSUNBZ0lDQjlMQ0F4TURBd0tUdGNiaUFnSUNBZ0lIMHNYRzVjYmlBZ0lDQWdJRzl1U0dsa1pUb2dablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUdOc1pXRnlTVzUwWlhKMllXd29kR2x0WlhJcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwcE8xeHVJQ0I5S1R0Y2JpSmRmUT09IiwiLyoqXG4gKiBMZWFmbGV0IG1vZGFsIGNvbnRyb2xcbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEBhdXRob3IgQWxleGFuZGVyIE1pbGV2c2tpIDxpbmZvQHc4ci5uYW1lPlxuICogQHByZXNlcnZlXG4gKi9cblxuLyogZ2xvYmFsIEwgKi9cblxuLyoqXG4gKiBcImZvbyBiYXIgYmF6XCIgLT4gXCIuZm9vLmJhci5iYXpcIlxuICogQHBhcmFtICB7U3RyaW5nfSBjbGFzc1N0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5MLkRvbVV0aWwuY2xhc3NOYW1lVG9TZWxlY3RvciA9IGZ1bmN0aW9uKGNsYXNzU3RyaW5nKSB7XG4gIHJldHVybiAoJyAnICsgY2xhc3NTdHJpbmcpLnNwbGl0KCcgJykuam9pbignLicpLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn07XG5cbi8qKlxuICogTW9kYWwgaGFuZGxlclxuICogQGNsYXNzICAge0wuTWFwLk1vZGFsfVxuICogQGV4dGVuZHMge0wuTWl4aW4uRXZlbnRzfVxuICogQGV4dGVuZHMge0wuSGFuZGxlcn1cbiAqL1xuTC5NYXAuTW9kYWwgPSBMLkhhbmRsZXIuZXh0ZW5kKCAvKiogQGxlbmRzIHtMLk1hcC5IYWRsZXIucHJvdG90eXBlfSAqLyB7XG5cbiAgaW5jbHVkZXM6IEwuTWl4aW4uRXZlbnRzLFxuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWNzOiB7XG4gICAgQkFTRV9DTFM6ICdsZWFmbGV0LW1vZGFsJyxcbiAgICBISURFOiAnbW9kYWwuaGlkZScsXG4gICAgU0hPV19TVEFSVDogJ21vZGFsLnNob3dTdGFydCcsXG4gICAgU0hPVzogJ21vZGFsLnNob3cnLFxuICAgIENIQU5HRUQ6ICdtb2RhbC5jaGFuZ2VkJ1xuICB9LFxuXG4gIC8qKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgb3B0aW9uczoge1xuICAgIE9WRVJMQVlfQ0xTOiAnb3ZlcmxheScsXG4gICAgTU9EQUxfQ0xTOiAnbW9kYWwnLFxuICAgIE1PREFMX0NPTlRFTlRfQ0xTOiAnbW9kYWwtY29udGVudCcsXG4gICAgSU5ORVJfQ09OVEVOVF9DTFM6ICdtb2RhbC1pbm5lcicsXG4gICAgU0hPV19DTFM6ICdzaG93JyxcbiAgICBDTE9TRV9DTFM6ICdjbG9zZScsXG5cbiAgICBjbG9zZVRpdGxlOiAnY2xvc2UnLFxuICAgIHpJbmRleDogMTAwMDAsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAzMDAsXG5cbiAgICB3cmFwcGVyVGVtcGxhdGU6IFtcbiAgICAgICc8ZGl2IGNsYXNzPVwie09WRVJMQVlfQ0xTfVwiPjwvZGl2PicsXG4gICAgICAnPGRpdiBjbGFzcz1cIntNT0RBTF9DTFN9XCI+PGRpdiBjbGFzcz1cIntNT0RBTF9DT05URU5UX0NMU31cIj4nLFxuICAgICAgJzxzcGFuIGNsYXNzPVwie0NMT1NFX0NMU31cIiB0aXRsZT1cIntjbG9zZVRpdGxlfVwiPiZ0aW1lczs8L3NwYW4+JyxcbiAgICAgICc8ZGl2IGNsYXNzPVwie0lOTkVSX0NPTlRFTlRfQ0xTfVwiPntfY29udGVudH08L2Rpdj4nLFxuICAgICAgJzwvZGl2PjwvZGl2PidcbiAgICBdLmpvaW4oJycpLFxuXG4gICAgdGVtcGxhdGU6ICd7Y29udGVudH0nLFxuICAgIGNvbnRlbnQ6ICcnXG5cbiAgfSxcblxuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge0wuTWFwfSAgIG1hcFxuICAgKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gICAqL1xuICBpbml0aWFsaXplOiBmdW5jdGlvbihtYXAsIG9wdGlvbnMpIHtcbiAgICBMLkhhbmRsZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBtYXApO1xuICAgIEwuVXRpbC5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5fdmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciA9XG4gICAgICBMLkRvbVV0aWwuY3JlYXRlKCdkaXYnLCBMLk1hcC5Nb2RhbC5CQVNFX0NMUywgbWFwLl9jb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5zdHlsZS56SW5kZXggPSB0aGlzLm9wdGlvbnMuekluZGV4O1xuICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy5fbWFwLl9jb250cm9sQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBMLkRvbUV2ZW50XG4gICAgICAuZGlzYWJsZUNsaWNrUHJvcGFnYXRpb24oY29udGFpbmVyKVxuICAgICAgLmRpc2FibGVTY3JvbGxQcm9wYWdhdGlvbihjb250YWluZXIpO1xuICAgIEwuRG9tRXZlbnQub24oY29udGFpbmVyLCAnY29udGV4dG1lbnUnLCBMLkRvbUV2ZW50LnN0b3BQcm9wYWdhdGlvbik7XG5cbiAgICB0aGlzLmVuYWJsZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBZGQgZXZlbnRzIGFuZCBrZXlib2FyZCBoYW5kbGVyc1xuICAgKi9cbiAgYWRkSG9va3M6IGZ1bmN0aW9uKCkge1xuICAgIEwuRG9tRXZlbnQub24oZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duLCB0aGlzKTtcbiAgICB0aGlzLl9tYXAub24oe1xuICAgICAgbW9kYWw6IHRoaXMuX3Nob3dcbiAgICB9LCB0aGlzKTtcbiAgfSxcblxuICAvKipcbiAgICogRGlzYWJsZSBoYW5kbGVyc1xuICAgKi9cbiAgcmVtb3ZlSG9va3M6IGZ1bmN0aW9uKCkge1xuICAgIEwuRG9tRXZlbnQub2ZmKGRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMuX29uS2V5RG93biwgdGhpcyk7XG4gICAgdGhpcy5fbWFwLm9mZih7XG4gICAgICBtb2RhbDogdGhpcy5fc2hvd1xuICAgIH0sIHRoaXMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtMLk1hcC5Nb2RhbH1cbiAgICovXG4gIGhpZGU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2hpZGUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGlzVmlzaWJsZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNob3cgYWdhaW4sIG9yIGp1c3QgcmVzaXplIGFuZCByZS1wb3NpdGlvblxuICAgKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gICAqL1xuICB1cGRhdGU6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5fc2hvdyhvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjb250ZW50XG4gICAqL1xuICBzZXRDb250ZW50OiBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgdGhpcy5fZ2V0SW5uZXJDb250ZW50Q29udGFpbmVyKCkuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGUgY29udGFpbmVyIHBvc2l0aW9uXG4gICAqL1xuICBfdXBkYXRlUG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5fZ2V0Q29udGVudENvbnRhaW5lcigpO1xuICAgIHZhciBtYXBTaXplID0gdGhpcy5fbWFwLmdldFNpemUoKTtcblxuICAgIGlmIChjb250ZW50Lm9mZnNldEhlaWdodCA8IG1hcFNpemUueSkge1xuICAgICAgY29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSAoKG1hcFNpemUueSAtIGNvbnRlbnQub2Zmc2V0SGVpZ2h0KSAvIDIpICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGVudC5zdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgX3Nob3c6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5fdmlzaWJsZSkge1xuICAgICAgdGhpcy5faGlkZSgpO1xuICAgIH1cbiAgICBvcHRpb25zID0gTC5VdGlsLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblxuICAgIHRoaXMuX3JlbmRlcihvcHRpb25zKTtcbiAgICB0aGlzLl9zZXRDb250YWluZXJTaXplKG9wdGlvbnMpO1xuXG4gICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oKTtcblxuICAgIEwuVXRpbC5yZXF1ZXN0QW5pbUZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNvbnRlbnRDb250YWluZXIgPSB0aGlzLl9nZXRDb250ZW50Q29udGFpbmVyKCk7XG4gICAgICBMLkRvbUV2ZW50Lm9uKGNvbnRlbnRDb250YWluZXIsICd0cmFuc2l0aW9uZW5kJywgdGhpcy5fb25UcmFuc2l0aW9uRW5kLCB0aGlzKTtcbiAgICAgIEwuRG9tRXZlbnQuZGlzYWJsZUNsaWNrUHJvcGFnYXRpb24oY29udGVudENvbnRhaW5lcik7XG4gICAgICBMLkRvbVV0aWwuYWRkQ2xhc3ModGhpcy5fY29udGFpbmVyLCB0aGlzLm9wdGlvbnMuU0hPV19DTFMpO1xuXG4gICAgICBpZiAoIUwuQnJvd3Nlci5hbnkzZCkge1xuICAgICAgICBMLlV0aWwucmVxdWVzdEFuaW1GcmFtZSh0aGlzLl9vblRyYW5zaXRpb25FbmQsIHRoaXMpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgdmFyIGNsb3NlQnRuID0gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5vcHRpb25zLkNMT1NFX0NMUyk7XG4gICAgaWYgKGNsb3NlQnRuKSB7XG4gICAgICBMLkRvbUV2ZW50Lm9uKGNsb3NlQnRuLCAnY2xpY2snLCB0aGlzLl9vbkNsb3NlQ2xpY2ssIHRoaXMpO1xuICAgIH1cblxuICAgIHZhciBtb2RhbCA9IHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMub3B0aW9ucy5NT0RBTF9DTFMpO1xuICAgIGlmIChtb2RhbCkge1xuICAgICAgTC5Eb21FdmVudC5vbihtb2RhbCwgJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBjYWxsYmFja3NcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMub25TaG93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9tYXAub25jZShMLk1hcC5Nb2RhbC5TSE9XLCBvcHRpb25zLm9uU2hvdyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uSGlkZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5fbWFwLm9uY2UoTC5NYXAuTW9kYWwuSElERSwgb3B0aW9ucy5vbkhpZGUpO1xuICAgIH1cblxuICAgIC8vIGZpcmUgZXZlbnRcbiAgICB0aGlzLl9tYXAuZmlyZShMLk1hcC5Nb2RhbC5TSE9XX1NUQVJULCB7XG4gICAgICBtb2RhbDogdGhpc1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTaG93IHRyYW5zaXRpb24gZW5kZWRcbiAgICogQHBhcmFtICB7VHJhbnNpdGlvbkV2ZW50PX0gZVxuICAgKi9cbiAgX29uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24oZSkge1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgbW9kYWw6IHRoaXNcbiAgICB9O1xuICAgIHZhciBtYXAgPSB0aGlzLl9tYXA7XG4gICAgaWYgKCF0aGlzLl92aXNpYmxlKSB7XG4gICAgICBpZiAoTC5Eb21VdGlsLmhhc0NsYXNzKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5vcHRpb25zLlNIT1dfQ0xTKSkge1xuICAgICAgICB0aGlzLl92aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgbWFwLmZpcmUoTC5NYXAuTW9kYWwuU0hPVywgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXAuZmlyZShMLk1hcC5Nb2RhbC5ISURFLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWFwLmZpcmUoTC5NYXAuTW9kYWwuQ0hBTkdFRCwgZGF0YSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtMLk1vdXNlRXZlbnR9IGV2dFxuICAgKi9cbiAgX29uQ2xvc2VDbGljazogZnVuY3Rpb24oZXZ0KSB7XG4gICAgTC5Eb21FdmVudC5zdG9wKGV2dCk7XG4gICAgdGhpcy5faGlkZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW5kZXIgdGVtcGxhdGVcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuICBfcmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdGhpcy5fY29udGFpbmVyLmlubmVySFRNTCA9IEwuVXRpbC50ZW1wbGF0ZShcbiAgICAgIG9wdGlvbnMud3JhcHBlclRlbXBsYXRlLFxuICAgICAgTC5VdGlsLmV4dGVuZCh7fSwgb3B0aW9ucywge1xuICAgICAgICBfY29udGVudDogTC5VdGlsLnRlbXBsYXRlKG9wdGlvbnMudGVtcGxhdGUsIG9wdGlvbnMpXG4gICAgICB9KVxuICAgICk7XG4gICAgaWYgKG9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgdmFyIGNvbnRlbnRDb250YWluZXIgPSB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgTC5Eb21VdGlsLmNsYXNzTmFtZVRvU2VsZWN0b3IodGhpcy5vcHRpb25zLk1PREFMX0NPTlRFTlRfQ0xTKSk7XG4gICAgICBpZiAoY29udGVudENvbnRhaW5lcikge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbnMuZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgX2dldENvbnRlbnRDb250YWluZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgIEwuRG9tVXRpbC5jbGFzc05hbWVUb1NlbGVjdG9yKHRoaXMub3B0aW9ucy5NT0RBTF9DT05URU5UX0NMUykpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBJbm5lciBjb250ZW50LCBkb24ndCB0b3VjaCBkZXN0cm95IGJ1dHRvblxuICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgKi9cbiAgX2dldElubmVyQ29udGVudENvbnRhaW5lcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgTC5Eb21VdGlsLmNsYXNzTmFtZVRvU2VsZWN0b3IodGhpcy5vcHRpb25zLklOTkVSX0NPTlRFTlRfQ0xTKSlcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMud2lkdGhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMuaGVpZ2h0XG4gICAqL1xuICBfc2V0Q29udGFpbmVyU2l6ZTogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBjb250ZW50ID0gdGhpcy5fZ2V0Q29udGVudENvbnRhaW5lcigpO1xuXG4gICAgaWYgKG9wdGlvbnMud2lkdGgpIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUud2lkdGggPSBvcHRpb25zLndpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5oZWlnaHQpIHtcbiAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKyAncHgnO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSGlkZSBibG9ja3MgaW1tZWRpYXRlbHlcbiAgICovXG4gIF9oaWRlSW50ZXJuYWw6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Zpc2libGUgPSBmYWxzZTtcbiAgICBMLkRvbVV0aWwucmVtb3ZlQ2xhc3ModGhpcy5fY29udGFpbmVyLCB0aGlzLm9wdGlvbnMuU0hPV19DTFMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBIaWRlIG1vZGFsXG4gICAqL1xuICBfaGlkZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3Zpc2libGUpIHtcbiAgICAgIHRoaXMuX2hpZGVJbnRlcm5hbCgpO1xuXG4gICAgICBMLlV0aWwucmVxdWVzdEFuaW1GcmFtZSh0aGlzLl9vblRyYW5zaXRpb25FbmQsIHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogTW91c2UgZG93biBvbiBvdmVybGF5XG4gICAqIEBwYXJhbSAge0wuTW91c2VFdmVudH0gZXZ0XG4gICAqL1xuICBfb25Nb3VzZURvd246IGZ1bmN0aW9uKGV2dCkge1xuICAgIEwuRG9tRXZlbnQuc3RvcChldnQpO1xuICAgIHZhciB0YXJnZXQgPSAoZXZ0LnRhcmdldCB8fCBldnQuc3JjRWxlbWVudCk7XG4gICAgaWYgKEwuRG9tVXRpbC5oYXNDbGFzcyh0YXJnZXQsIHRoaXMub3B0aW9ucy5NT0RBTF9DTFMpKSB7XG4gICAgICB0aGlzLl9oaWRlKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBLZXkgc3Ryb2tlKGVzY2FwZSlcbiAgICogQHBhcmFtICB7S2V5Ym9hcmRFdmVudH0gZXZ0XG4gICAqL1xuICBfb25LZXlEb3duOiBmdW5jdGlvbihldnQpIHtcbiAgICB2YXIga2V5ID0gZXZ0LmtleUNvZGUgfHwgZXZ0LndoaWNoO1xuICAgIGlmIChrZXkgPT09IDI3KSB7XG4gICAgICB0aGlzLl9oaWRlKCk7XG4gICAgfVxuICB9XG5cbn0pO1xuXG4vLyByZWdpc3RlciBob29rXG5MLk1hcC5hZGRJbml0SG9vaygnYWRkSGFuZGxlcicsICdtb2RhbCcsIEwuTWFwLk1vZGFsKTtcblxuTC5NYXAuaW5jbHVkZSggLyoqIEBsZW5kcyB7TC5NYXAucHJvdG90eXBlfSAqLyB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtMLk1hcH1cbiAgICovXG4gIG9wZW5Nb2RhbDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmZpcmUoJ21vZGFsJywgb3B0aW9ucyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge0wuTWFwfVxuICAgKi9cbiAgY2xvc2VNb2RhbDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tb2RhbC5oaWRlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufSk7XG5cblxuaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBMLk1hcC5Nb2RhbDtcbn0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZShMLk1hcC5Nb2RhbCk7XG59XG4iXX0=
