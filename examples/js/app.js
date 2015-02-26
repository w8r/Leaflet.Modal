var L = global.L || require('leaflet');
var Modal = require('../../index');

L.Icon.Default.imagePath = "http://cdn.leafletjs.com/leaflet-0.7/images";

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
      content: '<h1>Modal header</h1><p>Modal content</p>'
    })
  })
  .on(document.querySelector('.open-modal-long'), 'click', function() {
    map.fire('modal', {
      content: '<h1>Modal header</h1>' + (new Array(100)).join('<p>Content line</p>')
    })
  })
  .on(document.querySelector('.open-modal-size'), 'click', function() {
    map.fire('modal', {
      content: '<h1>Modal header</h1>' + (new Array(2)).join('<p>Content line</p>'),
      width: 300,
      height: 350
    })
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
    })
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
  });
