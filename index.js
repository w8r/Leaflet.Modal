/**
 * Leaflet modal control
 * @license MIT
 * @author Alexander Milevski <info@w8r.name>
 * @preserve
 */

var L = global.L || require('leaflet');
require('./src/modal');

module.exports = L.Map.Modal;
