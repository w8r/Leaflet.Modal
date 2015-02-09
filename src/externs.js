/**
 * Externs file for google closure compiler
 */

// this makes GCC play with browserify

/**
 * @param {*=}o
 * @param {*=}u
 */
window.require = function(o, u) {};

/**
 * @type {Object}
 */
window.module = {
  exports: {}
};

var L = {
  "version": {},
  "noConflict": function() {},
  "Util": {
    "extend": function() {},
    "bind": function() {},
    "stamp": function() {},
    "invokeEach": function() {},
    "limitExecByInterval": function() {},
    "falseFn": function() {},
    "formatNum": function() {},
    "trim": function() {},
    "splitWords": function() {},
    "setOptions": function() {},
    "getParamString": function() {},
    "template": function() {},
    "isArray": function() {},
    "emptyImageUrl": {},
    "requestAnimFrame": function() {},
    "cancelAnimFrame": function() {}
  },
  "extend": function() {},
  "bind": function() {},
  "stamp": function() {},
  "setOptions": function() {},
  "Class": function() {},
  "Mixin": {
    "Events": {
      "addEventListener": function() {},
      "hasEventListeners": function() {},
      "removeEventListener": function() {},
      "clearAllEventListeners": function() {},
      "fireEvent": function() {},
      "addOneTimeEventListener": function() {},
      "on": function() {},
      "off": function() {},
      "once": function() {},
      "fire": function() {}
    }
  },
  "Browser": {
    "ie": {},
    "ielt9": {},
    "webkit": {},
    "gecko": {},
    "android": {},
    "android23": {},
    "chrome": {},
    "ie3d": {},
    "webkit3d": {},
    "gecko3d": {},
    "opera3d": {},
    "any3d": {},
    "mobile": {},
    "mobileWebkit": {},
    "mobileWebkit3d": {},
    "mobileOpera": {},
    "touch": {},
    "msPointer": {},
    "pointer": {},
    "retina": {},
    "svg": {},
    "vml": {},
    "canvas": {}
  },
  "Point": function() {},
  "point": function() {},
  "Bounds": function() {},
  "bounds": function() {},
  "Transformation": function() {},
  "DomUtil": {
    "get": function() {},
    "getStyle": function() {},
    "getViewportOffset": function() {},
    "documentIsLtr": function() {},
    "create": function() {},
    "hasClass": function() {},
    "addClass": function() {},
    "removeClass": function() {},
    "_setClass": function() {},
    "_getClass": function() {},
    "setOpacity": function() {},
    "testProp": function() {},
    "getTranslateString": function() {},
    "getScaleString": function() {},
    "setPosition": function() {},
    "getPosition": function() {},
    "TRANSFORM": {},
    "TRANSITION": {},
    "TRANSITION_END": {},
    "disableTextSelection": function() {},
    "enableTextSelection": function() {},
    "disableImageDrag": function() {},
    "enableImageDrag": function() {}
  },
  "LatLng": function() {},
  "latLng": function() {},
  "LatLngBounds": function() {},
  "latLngBounds": function() {},
  "Projection": {
    "SphericalMercator": {
      "MAX_LATITUDE": {},
      "project": function() {},
      "unproject": function() {}
    },
    "LonLat": {
      "project": function() {},
      "unproject": function() {}
    },
    "Mercator": {
      "MAX_LATITUDE": {},
      "R_MINOR": {},
      "R_MAJOR": {},
      "project": function() {},
      "unproject": function() {}
    }
  },
  "CRS": {
    "latLngToPoint": function() {},
    "pointToLatLng": function() {},
    "project": function() {},
    "scale": function() {},
    "getSize": function() {},
    "Simple": {
      "latLngToPoint": function() {},
      "pointToLatLng": function() {},
      "project": function() {},
      "scale": function() {},
      "getSize": function() {},
      "projection": {
        "project": function() {},
        "unproject": function() {}
      },
      "transformation": {
        "_a": {},
        "_b": {},
        "_c": {},
        "_d": {},
        "transform": function() {},
        "_transform": function() {},
        "untransform": function() {}
      }
    },
    "EPSG3857": {
      "latLngToPoint": function() {},
      "pointToLatLng": function() {},
      "project": function() {},
      "scale": function() {},
      "getSize": function() {},
      "Simple": {
        "latLngToPoint": function() {},
        "pointToLatLng": function() {},
        "project": function() {},
        "scale": function() {},
        "getSize": function() {},
        "projection": {
          "project": function() {},
          "unproject": function() {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function() {},
          "_transform": function() {},
          "untransform": function() {}
        }
      },
      "code": {},
      "projection": {
        "MAX_LATITUDE": {},
        "project": function() {},
        "unproject": function() {}
      },
      "transformation": {
        "_a": {},
        "_b": {},
        "_c": {},
        "_d": {},
        "transform": function() {},
        "_transform": function() {},
        "untransform": function() {}
      }
    },
    "EPSG900913": {
      "latLngToPoint": function() {},
      "pointToLatLng": function() {},
      "project": function() {},
      "scale": function() {},
      "getSize": function() {},
      "Simple": {
        "latLngToPoint": function() {},
        "pointToLatLng": function() {},
        "project": function() {},
        "scale": function() {},
        "getSize": function() {},
        "projection": {
          "project": function() {},
          "unproject": function() {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function() {},
          "_transform": function() {},
          "untransform": function() {}
        }
      },
      "code": {},
      "projection": {
        "MAX_LATITUDE": {},
        "project": function() {},
        "unproject": function() {}
      },
      "transformation": {
        "_a": {},
        "_b": {},
        "_c": {},
        "_d": {},
        "transform": function() {},
        "_transform": function() {},
        "untransform": function() {}
      }
    },
    "EPSG4326": {
      "latLngToPoint": function() {},
      "pointToLatLng": function() {},
      "project": function() {},
      "scale": function() {},
      "getSize": function() {},
      "Simple": {
        "latLngToPoint": function() {},
        "pointToLatLng": function() {},
        "project": function() {},
        "scale": function() {},
        "getSize": function() {},
        "projection": {
          "project": function() {},
          "unproject": function() {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function() {},
          "_transform": function() {},
          "untransform": function() {}
        }
      },
      "EPSG3857": {
        "latLngToPoint": function() {},
        "pointToLatLng": function() {},
        "project": function() {},
        "scale": function() {},
        "getSize": function() {},
        "Simple": {
          "latLngToPoint": function() {},
          "pointToLatLng": function() {},
          "project": function() {},
          "scale": function() {},
          "getSize": function() {},
          "projection": {
            "project": function() {},
            "unproject": function() {}
          },
          "transformation": {
            "_a": {},
            "_b": {},
            "_c": {},
            "_d": {},
            "transform": function() {},
            "_transform": function() {},
            "untransform": function() {}
          }
        },
        "code": {},
        "projection": {
          "MAX_LATITUDE": {},
          "project": function() {},
          "unproject": function() {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function() {},
          "_transform": function() {},
          "untransform": function() {}
        }
      },
      "EPSG900913": {
        "latLngToPoint": function() {},
        "pointToLatLng": function() {},
        "project": function() {},
        "scale": function() {},
        "getSize": function() {},
        "Simple": {
          "latLngToPoint": function() {},
          "pointToLatLng": function() {},
          "project": function() {},
          "scale": function() {},
          "getSize": function() {},
          "projection": {
            "project": function() {},
            "unproject": function() {}
          },
          "transformation": {
            "_a": {},
            "_b": {},
            "_c": {},
            "_d": {},
            "transform": function() {},
            "_transform": function() {},
            "untransform": function() {}
          }
        },
        "code": {},
        "projection": {
          "MAX_LATITUDE": {},
          "project": function() {},
          "unproject": function() {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function() {},
          "_transform": function() {},
          "untransform": function() {}
        }
      },
      "code": {},
      "projection": {
        "project": function() {},
        "unproject": function() {}
      },
      "transformation": {
        "_a": {},
        "_b": {},
        "_c": {},
        "_d": {},
        "transform": function() {},
        "_transform": function() {},
        "untransform": function() {}
      }
    },
    "EPSG3395": {
      "latLngToPoint": function() {},
      "pointToLatLng": function() {},
      "project": function() {},
      "scale": function() {},
      "getSize": function() {},
      "Simple": {
        "latLngToPoint": function() {},
        "pointToLatLng": function() {},
        "project": function() {},
        "scale": function() {},
        "getSize": function() {},
        "projection": {
          "project": function() {},
          "unproject": function() {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function() {},
          "_transform": function() {},
          "untransform": function() {}
        }
      },
      "EPSG3857": {
        "latLngToPoint": function() {},
        "pointToLatLng": function() {},
        "project": function() {},
        "scale": function() {},
        "getSize": function() {},
        "Simple": {
          "latLngToPoint": function() {},
          "pointToLatLng": function() {},
          "project": function() {},
          "scale": function() {},
          "getSize": function() {},
          "projection": {
            "project": function() {},
            "unproject": function() {}
          },
          "transformation": {
            "_a": {},
            "_b": {},
            "_c": {},
            "_d": {},
            "transform": function() {},
            "_transform": function() {},
            "untransform": function() {}
          }
        },
        "code": {},
        "projection": {
          "MAX_LATITUDE": {},
          "project": function() {},
          "unproject": function() {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function() {},
          "_transform": function() {},
          "untransform": function() {}
        }
      },
      "EPSG900913": {
        "latLngToPoint": function() {},
        "pointToLatLng": function() {},
        "project": function() {},
        "scale": function() {},
        "getSize": function() {},
        "Simple": {
          "latLngToPoint": function() {},
          "pointToLatLng": function() {},
          "project": function() {},
          "scale": function() {},
          "getSize": function() {},
          "projection": {
            "project": function() {},
            "unproject": function() {}
          },
          "transformation": {
            "_a": {},
            "_b": {},
            "_c": {},
            "_d": {},
            "transform": function() {},
            "_transform": function() {},
            "untransform": function() {}
          }
        },
        "code": {},
        "projection": {
          "MAX_LATITUDE": {},
          "project": function() {},
          "unproject": function() {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function() {},
          "_transform": function() {},
          "untransform": function() {}
        }
      },
      "EPSG4326": {
        "latLngToPoint": function() {},
        "pointToLatLng": function() {},
        "project": function() {},
        "scale": function() {},
        "getSize": function() {},
        "Simple": {
          "latLngToPoint": function() {},
          "pointToLatLng": function() {},
          "project": function() {},
          "scale": function() {},
          "getSize": function() {},
          "projection": {
            "project": function() {},
            "unproject": function() {}
          },
          "transformation": {
            "_a": {},
            "_b": {},
            "_c": {},
            "_d": {},
            "transform": function() {},
            "_transform": function() {},
            "untransform": function() {}
          }
        },
        "EPSG3857": {
          "latLngToPoint": function() {},
          "pointToLatLng": function() {},
          "project": function() {},
          "scale": function() {},
          "getSize": function() {},
          "Simple": {
            "latLngToPoint": function() {},
            "pointToLatLng": function() {},
            "project": function() {},
            "scale": function() {},
            "getSize": function() {},
            "projection": {
              "project": function() {},
              "unproject": function() {}
            },
            "transformation": {
              "_a": {},
              "_b": {},
              "_c": {},
              "_d": {},
              "transform": function() {},
              "_transform": function() {},
              "untransform": function() {}
            }
          },
          "code": {},
          "projection": {
            "MAX_LATITUDE": {},
            "project": function() {},
            "unproject": function() {}
          },
          "transformation": {
            "_a": {},
            "_b": {},
            "_c": {},
            "_d": {},
            "transform": function() {},
            "_transform": function() {},
            "untransform": function() {}
          }
        },
        "EPSG900913": {
          "latLngToPoint": function() {},
          "pointToLatLng": function() {},
          "project": function() {},
          "scale": function() {},
          "getSize": function() {},
          "Simple": {
            "latLngToPoint": function() {},
            "pointToLatLng": function() {},
            "project": function() {},
            "scale": function() {},
            "getSize": function() {},
            "projection": {
              "project": function() {},
              "unproject": function() {}
            },
            "transformation": {
              "_a": {},
              "_b": {},
              "_c": {},
              "_d": {},
              "transform": function() {},
              "_transform": function() {},
              "untransform": function() {}
            }
          },
          "code": {},
          "projection": {
            "MAX_LATITUDE": {},
            "project": function() {},
            "unproject": function() {}
          },
          "transformation": {
            "_a": {},
            "_b": {},
            "_c": {},
            "_d": {},
            "transform": function() {},
            "_transform": function() {},
            "untransform": function() {}
          }
        },
        "code": {},
        "projection": {
          "project": function() {},
          "unproject": function() {}
        },
        "transformation": {
          "_a": {},
          "_b": {},
          "_c": {},
          "_d": {},
          "transform": function() {},
          "_transform": function() {},
          "untransform": function() {}
        }
      },
      "code": {},
      "projection": {
        "MAX_LATITUDE": {},
        "R_MINOR": {},
        "R_MAJOR": {},
        "project": function() {},
        "unproject": function() {}
      },
      "transformation": {
        "_a": {},
        "_b": {},
        "_c": {},
        "_d": {},
        "transform": function() {},
        "_transform": function() {},
        "untransform": function() {}
      }
    }
  },
  "Map": function() {},
  "map": function() {},
  "TileLayer": function() {},
  "tileLayer": function() {},
  "ImageOverlay": function() {},
  "imageOverlay": function() {},
  "Icon": function() {},
  "icon": function() {},
  "Marker": function() {},
  "marker": function() {},
  "DivIcon": function() {},
  "divIcon": function() {},
  "Popup": function() {},
  "popup": function() {},
  "LayerGroup": function() {},
  "layerGroup": function() {},
  "FeatureGroup": function() {},
  "featureGroup": function() {},
  "Path": function() {},
  "LineUtil": {
    "simplify": function() {},
    "pointToSegmentDistance": function() {},
    "closestPointOnSegment": function() {},
    "_simplifyDP": function() {},
    "_simplifyDPStep": function() {},
    "_reducePoints": function() {},
    "clipSegment": function() {},
    "_getEdgeIntersection": function() {},
    "_getBitCode": function() {},
    "_sqDist": function() {},
    "_sqClosestPointOnSegment": function() {}
  },
  "Polyline": function() {},
  "polyline": function() {},
  "PolyUtil": {
    "clipPolygon": function() {}
  },
  "Polygon": function() {},
  "polygon": function() {},
  "MultiPolyline": function() {},
  "MultiPolygon": function() {},
  "multiPolyline": function() {},
  "multiPolygon": function() {},
  "Rectangle": function() {},
  "rectangle": function() {},
  "Circle": function() {},
  "circle": function() {},
  "CircleMarker": function() {},
  "circleMarker": function() {},
  "GeoJSON": function() {},
  "geoJson": function() {},
  "DomEvent": {
    "addListener": function() {},
    "removeListener": function() {},
    "stopPropagation": function() {},
    "disableScrollPropagation": function() {},
    "disableClickPropagation": function() {},
    "preventDefault": function() {},
    "stop": function() {},
    "getMousePosition": function() {},
    "getWheelDelta": function() {},
    "_skipEvents": function() {},
    "_fakeStop": function() {},
    "_skipped": function() {},
    "_checkMouse": function() {},
    "_getEvent": function() {},
    "_filterClick": function() {},
    "on": function() {},
    "off": function() {},
    "_touchstart": {},
    "_touchend": {},
    "addDoubleTapListener": function() {},
    "removeDoubleTapListener": function() {},
    "POINTER_DOWN": {},
    "POINTER_MOVE": {},
    "POINTER_UP": {},
    "POINTER_CANCEL": {},
    "_pointers": function() {},
    "_pointerDocumentListener": {},
    "addPointerListener": function() {},
    "addPointerListenerStart": function() {},
    "addPointerListenerMove": function() {},
    "addPointerListenerEnd": function() {},
    "removePointerListener": function() {}
  },
  "Draggable": function() {},
  "Handler": function() {},
  "Control": function() {},
  "control": function() {},
  "PosAnimation": function() {}
};

L.MouseEvent = {
  latlng: undefined,
  layerPoint: undefined,
  containerPoint: undefined,
  originalEvent: undefined
};

L.Draggable = function() {};

L.Draggable.START = null;
L.Draggable.END = null;
L.Draggable.MOVE = null;

L.Draggable._disabled = false;

L.LatLng.prototype.distanceTo = function() {};

L.LatLng.prototype.lat;

L.LatLng.prototype.lng;

L.Map.prototype.addLayer = function() {};

L.Map.prototype.removeLayer = function() {};

L.Map.prototype.getMaxZoom = function() {};

L.Map.prototype.getCenter = function() {};

L.Map.prototype.latLngToContainerPoint = function() {};

L.Map.prototype.latLngToLayerPoint = function() {};

L.Map.prototype.layerPointToLatLng = function() {};

L.Map.prototype.dragging = {
  enable: function() {},
  disable: function() {}
};

L.Map.prototype.options = {
  crs: {
    latLngToPoint: function() {},
    pointToLatLng: function() {}
  }
};

L.Control.prototype.extend = function() {};

/**
 * @type {L.Map}
 */
L.Control.prototype._map = null;

L.CircleMarker.prototype.extend = function() {};

L.CircleMarker.prototype.setRadius = function() {};

L.CircleMarker.prototype.bringToFront = function() {};

L.CircleMarker.prototype._container = null;

L.CircleMarker.prototype.setLatLng = function() {};

L.CircleMarker.prototype.getLatLng = function() {};

L.CircleMarker.prototype.addTo = function(map) {};

L.CircleMarker.prototype._path;

L.Polyline.prototype.getLatLngs = function() {};

L.Polyline.prototype.setLatLngs = function(latlngs) {};

L.Polyline.prototype.toGeoJSON = function() {};

L.Polyline.prototype._map = null;

L.Polyline.prototype._latlngs = [];

L.Polyline.prototype._originalPoints = [];

L.Polyline.prototype._updatePath = function() {};

/**
 * Modal handler
 * @class   {L.Map.Modal}
 *
 * @constructor
 * @param  {L.Map}   map
 * @param  {Object=} options
 *
 * @extends {L.Mixin.Events}
 * @extends {L.Handler}
 */
L.Map.Modal = function(map, options) {};

/**
 * @const {String}
 */
L.Map.Modal.BASE_CLS = 'leaflet-modal';

/**
 * @const {String}
 */
L.Map.Modal.HIDE = 'modal.hide';

/**
 * @const {String}
 */
L.Map.Modal.SHOW = 'modal.show';

/**
 * @type {Object}
 */
L.Map.Modal.prototype.options = {
  OVERLAY_CLS: '',
  MODAL_CLS: '',
  MODAL_CONTENT_CLS: '',
  SHOW_CLS: '',
  CLOSE_CLS: '',
  closeTitle: '',
  zIndex: 10000,
  transitionDuration: 300,
  wrapperTemplate: '',
  template: ''
};

/**
 * @constructor
 * @param  {L.Map}   map
 * @param  {Object=} options
 */
L.Map.Modal.prototype.initialize = function(map, options) {};

/**
 * Add events and keyboard handlers
 */
L.Map.Modal.prototype.addHooks = function() {};

/**
 * Disable handlers
 */
L.Map.Modal.prototype.removeHooks = function() {};

/**
 * @return {L.Map.Modal}
 */
L.Map.Modal.prototype.hide = function() {};

/**
 * @return {Boolean}
 */
L.Map.Modal.prototype.isVisible = function() {};

/**
 * @param  {Object} options
 */
L.Map.Modal.prototype._show = function(options) {};

/**
 * Render template
 * @param  {Object} options
 */
L.Map.Modal.prototype._render = function(options) {};

/**
 * @return {Element}
 */
L.Map.Modal.prototype._getConentContainer = function() {};

/**
 * @param {Object} options
 * @param {Number} options.width
 * @param {Number} options.height
 */
L.Map.Modal.prototype._setContainerSize = function(options) {};

/**
 * Hide blocks immediately
 */
L.Map.Modal.prototype._hideInternal: function() {};

/**
 * Hide modal
 */
L.Map.Modal.prototype._hide = function() {};

/**
 * Mouse down on overlay
 * @param  {L.MouseEvent} evt
 */
L.Map.Modal.prototype._onMouseDown = function(evt) {};

/**
 * Key stroke(escape)
 * @param  {KeyboardEvent} evt
 */
L.Map.Modal.prototype._onKeyDown = function(evt) {};

// register hook
L.Map.prototype.modal;

/**
 * @param  {Object} options
 * @return {L.Map}
 */
L.Map.prototype.openModal = function(options) {};

/**
 * @return {L.Map}
 */
L.Map.prototype.closeModal = function() {};
