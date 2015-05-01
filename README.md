# L.Map.Modal

[![npm version](https://badge.fury.io/js/leaflet-modal.svg)](http://badge.fury.io/js/leaflet-modal) [![Bower version](https://badge.fury.io/bo/leaflet-modal.svg)](http://badge.fury.io/bo/leaflet-modal)

![Screenshot](http://s30.postimg.org/9zgjh019t/L_Modal.jpg)

Modal window inside your [Leaflet](http://leafletjs.com) map.

## [Demo](https://w8r.github.io/Leaflet.Modal)

## API

It's a handler, so it's activated by the `modal` event from the map

```javascript

map.fire('modal', {

  content: 'your content HTML',        // HTML string

  closeTitle: 'close',                 // alt title of the close button
  zIndex: 10000,                       // needs to stay on top of the things
  transitionDuration: 300,             // expected transition duration

  template: '{content}',               // modal body template, this doesn't include close button and wrappers

  // callbacks for convenience,
  // you can set up you handlers here for the contents
  onShow: function(evt){ var modal = evt.modal; ...},
  onHide: function(evt){ var modal = evt.modal; ...},

  // change at your own risk
  OVERLAY_CLS: 'overlay',              // overlay(backdrop) CSS class
  MODAL_CLS: 'modal',                  // all modal blocks wrapper CSS class
  MODAL_CONTENT_CLS: 'modal-content',  // modal window CSS class
  INNER_CONTENT_CLS: 'modal-inner',    // inner content wrapper
  SHOW_CLS: 'show',                    // `modal open` CSS class, here go your transitions
  CLOSE_CLS: 'close'                   // `x` button CSS class
});

// or

map.openModal({ /* options */ });      // same as above

// close currently opened modal
map.closeModal();
```

### Events

The handler fires following events on the map instance:

`'modal.show', L.Map.Modal.SHOW => { modal: modal }`
`'modal.hide', L.Map.Modal.HIDE => { modal: modal }`
`'modal.showStart, L.Map.Modal.SHOW_START => { modal: modal }`
`'modal.changed, L.Map.Modal.CHANGED => { modal: modal }`

## Usage

```javascript
npm install --save leaflet-modal
...
require('leaflet-modal');
```

or

```
<script type="text/javascript" src="leaflet.js"></script>
<script type="text/javascript" src="path/to/L.Modal.min.js"></script>
```

See [/examples/js/app.js](https://github.com/w8r/Leaflet.Modal/examples/js/app.js) for initialization and other things


## License

The MIT License (MIT)

Copyright (c) 2015 Alexander Milevski

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
