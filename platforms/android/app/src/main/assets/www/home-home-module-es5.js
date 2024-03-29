function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/@googlemaps/markerclustererplus/dist/index.esm.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@googlemaps/markerclustererplus/dist/index.esm.js ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesGooglemapsMarkerclustererplusDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };
    /**
     * Copyright 2019 Google LLC. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Extends an object's prototype by another's.
     *
     * @param type1 The Type to be extended.
     * @param type2 The Type to extend with.
     * @ignore
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any


    function extend(type1, type2) {
      // eslint-disable-next-line prefer-const
      for (var property in type2.prototype) {
        type1.prototype[property] = type2.prototype[property];
      }
    }
    /**
     * @ignore
     */


    var OverlayViewSafe =
    /** @class */
    function () {
      function OverlayViewSafe() {
        // MarkerClusterer implements google.maps.OverlayView interface. We use the
        // extend function to extend MarkerClusterer with google.maps.OverlayView
        // because it might not always be available when the code is defined so we
        // look for it at the last possible moment. If it doesn't exist now then
        // there is no point going ahead :)
        extend(OverlayViewSafe, google.maps.OverlayView);
      }

      return OverlayViewSafe;
    }();
    /**
     * Copyright 2019 Google LLC. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     *
     * @hidden
     */


    function toCssText(styles) {
      return Object.keys(styles).reduce(function (acc, key) {
        if (styles[key]) {
          acc.push(key + ":" + styles[key]);
        }

        return acc;
      }, []).join(";");
    }
    /**
     *
     * @hidden
     */


    function coercePixels(pixels) {
      return pixels ? pixels + "px" : undefined;
    }
    /**
     * A cluster icon.
     */


    var ClusterIcon =
    /** @class */
    function (_super) {
      __extends(ClusterIcon, _super);
      /**
       * @param cluster_ The cluster with which the icon is to be associated.
       * @param styles_ An array of {@link ClusterIconStyle} defining the cluster icons
       *  to use for various cluster sizes.
       */


      function ClusterIcon(cluster_, styles_) {
        var _this = _super.call(this) || this;

        _this.cluster_ = cluster_;
        _this.styles_ = styles_;
        _this.center_ = null;
        _this.div_ = null;
        _this.sums_ = null;
        _this.visible_ = false;
        _this.style = null;

        _this.setMap(cluster_.getMap()); // Note: this causes onAdd to be called


        return _this;
      }
      /**
       * Adds the icon to the DOM.
       */


      ClusterIcon.prototype.onAdd = function () {
        var _this = this;

        var cMouseDownInCluster;
        var cDraggingMapByCluster;
        var mc = this.cluster_.getMarkerClusterer();

        var _a = google.maps.version.split("."),
            major = _a[0],
            minor = _a[1];

        var gmVersion = parseInt(major, 10) * 100 + parseInt(minor, 10);
        this.div_ = document.createElement("div");

        if (this.visible_) {
          this.show();
        }

        this.getPanes().overlayMouseTarget.appendChild(this.div_); // Fix for Issue 157

        this.boundsChangedListener_ = google.maps.event.addListener(this.getMap(), "bounds_changed", function () {
          cDraggingMapByCluster = cMouseDownInCluster;
        });
        google.maps.event.addDomListener(this.div_, "mousedown", function () {
          cMouseDownInCluster = true;
          cDraggingMapByCluster = false;
        }); // March 1, 2018: Fix for this 3.32 exp bug, https://issuetracker.google.com/issues/73571522
        // But it doesn't work with earlier releases so do a version check.

        if (gmVersion >= 332) {
          // Ugly version-dependent code
          google.maps.event.addDomListener(this.div_, "touchstart", function (e) {
            e.stopPropagation();
          });
        }

        google.maps.event.addDomListener(this.div_, "click", function (e) {
          cMouseDownInCluster = false;

          if (!cDraggingMapByCluster) {
            /**
             * This event is fired when a cluster marker is clicked.
             * @name MarkerClusterer#click
             * @param {Cluster} c The cluster that was clicked.
             * @event
             */
            google.maps.event.trigger(mc, "click", _this.cluster_);
            google.maps.event.trigger(mc, "clusterclick", _this.cluster_); // deprecated name
            // The default click handler follows. Disable it by setting
            // the zoomOnClick property to false.

            if (mc.getZoomOnClick()) {
              // Zoom into the cluster.
              var mz_1 = mc.getMaxZoom();

              var theBounds_1 = _this.cluster_.getBounds();

              mc.getMap().fitBounds(theBounds_1); // There is a fix for Issue 170 here:

              setTimeout(function () {
                mc.getMap().fitBounds(theBounds_1); // Don't zoom beyond the max zoom level

                if (mz_1 !== null && mc.getMap().getZoom() > mz_1) {
                  mc.getMap().setZoom(mz_1 + 1);
                }
              }, 100);
            } // Prevent event propagation to the map:


            e.cancelBubble = true;

            if (e.stopPropagation) {
              e.stopPropagation();
            }
          }
        });
        google.maps.event.addDomListener(this.div_, "mouseover", function () {
          /**
           * This event is fired when the mouse moves over a cluster marker.
           * @name MarkerClusterer#mouseover
           * @param {Cluster} c The cluster that the mouse moved over.
           * @event
           */
          google.maps.event.trigger(mc, "mouseover", _this.cluster_);
        });
        google.maps.event.addDomListener(this.div_, "mouseout", function () {
          /**
           * This event is fired when the mouse moves out of a cluster marker.
           * @name MarkerClusterer#mouseout
           * @param {Cluster} c The cluster that the mouse moved out of.
           * @event
           */
          google.maps.event.trigger(mc, "mouseout", _this.cluster_);
        });
      };
      /**
       * Removes the icon from the DOM.
       */


      ClusterIcon.prototype.onRemove = function () {
        if (this.div_ && this.div_.parentNode) {
          this.hide();
          google.maps.event.removeListener(this.boundsChangedListener_);
          google.maps.event.clearInstanceListeners(this.div_);
          this.div_.parentNode.removeChild(this.div_);
          this.div_ = null;
        }
      };
      /**
       * Draws the icon.
       */


      ClusterIcon.prototype.draw = function () {
        if (this.visible_) {
          var pos = this.getPosFromLatLng_(this.center_);
          this.div_.style.top = pos.y + "px";
          this.div_.style.left = pos.x + "px";
        }
      };
      /**
       * Hides the icon.
       */


      ClusterIcon.prototype.hide = function () {
        if (this.div_) {
          this.div_.style.display = "none";
        }

        this.visible_ = false;
      };
      /**
       * Positions and shows the icon.
       */


      ClusterIcon.prototype.show = function () {
        if (this.div_) {
          this.div_.className = this.className_;
          this.div_.style.cssText = this.createCss_(this.getPosFromLatLng_(this.center_));
          this.div_.innerHTML = (this.style.url ? this.getImageElementHtml() : "") + this.getLabelDivHtml();

          if (typeof this.sums_.title === "undefined" || this.sums_.title === "") {
            this.div_.title = this.cluster_.getMarkerClusterer().getTitle();
          } else {
            this.div_.title = this.sums_.title;
          }

          this.div_.style.display = "";
        }

        this.visible_ = true;
      };

      ClusterIcon.prototype.getLabelDivHtml = function () {
        var mc = this.cluster_.getMarkerClusterer();
        var ariaLabel = mc.ariaLabelFn(this.sums_.text);
        var divStyle = {
          position: "absolute",
          top: coercePixels(this.anchorText_[0]),
          left: coercePixels(this.anchorText_[1]),
          color: this.style.textColor,
          "font-size": coercePixels(this.style.textSize),
          "font-family": this.style.fontFamily,
          "font-weight": this.style.fontWeight,
          "font-style": this.style.fontStyle,
          "text-decoration": this.style.textDecoration,
          "text-align": "center",
          width: coercePixels(this.style.width),
          "line-height": coercePixels(this.style.textLineHeight)
        };
        return "\n<div aria-label=\"" + ariaLabel + "\" style=\"" + toCssText(divStyle) + "\" tabindex=\"0\">\n  <span aria-hidden=\"true\">" + this.sums_.text + "</span>\n</div>\n";
      };

      ClusterIcon.prototype.getImageElementHtml = function () {
        // NOTE: values must be specified in px units
        var bp = (this.style.backgroundPosition || "0 0").split(" ");
        var spriteH = parseInt(bp[0].replace(/^\s+|\s+$/g, ""), 10);
        var spriteV = parseInt(bp[1].replace(/^\s+|\s+$/g, ""), 10);
        var dimensions = {};

        if (this.cluster_.getMarkerClusterer().getEnableRetinaIcons()) {
          dimensions = {
            width: coercePixels(this.style.width),
            height: coercePixels(this.style.height)
          };
        } else {
          var _a = [-1 * spriteV, -1 * spriteH + this.style.width, -1 * spriteV + this.style.height, -1 * spriteH],
              Y1 = _a[0],
              X1 = _a[1],
              Y2 = _a[2],
              X2 = _a[3];
          dimensions = {
            clip: "rect(" + Y1 + "px, " + X1 + "px, " + Y2 + "px, " + X2 + "px)"
          };
        }

        var cssText = toCssText(_assign({
          position: "absolute",
          top: coercePixels(spriteV),
          left: coercePixels(spriteH)
        }, dimensions));
        return "<img alt=\"" + this.sums_.text + "\" aria-hidden=\"true\" src=\"" + this.style.url + "\" style=\"" + cssText + "\"/>";
      };
      /**
       * Sets the icon styles to the appropriate element in the styles array.
       *
       * @ignore
       * @param sums The icon label text and styles index.
       */


      ClusterIcon.prototype.useStyle = function (sums) {
        this.sums_ = sums;
        var index = Math.max(0, sums.index - 1);
        index = Math.min(this.styles_.length - 1, index);
        this.style = this.styles_[index];
        this.anchorText_ = this.style.anchorText || [0, 0];
        this.anchorIcon_ = this.style.anchorIcon || [Math.floor(this.style.height / 2), Math.floor(this.style.width / 2)];
        this.className_ = this.cluster_.getMarkerClusterer().getClusterClass() + " " + (this.style.className || "cluster-" + index);
      };
      /**
       * Sets the position at which to center the icon.
       *
       * @param center The latlng to set as the center.
       */


      ClusterIcon.prototype.setCenter = function (center) {
        this.center_ = center;
      };
      /**
       * Creates the `cssText` style parameter based on the position of the icon.
       *
       * @param pos The position of the icon.
       * @return The CSS style text.
       */


      ClusterIcon.prototype.createCss_ = function (pos) {
        return toCssText({
          "z-index": "" + this.cluster_.getMarkerClusterer().getZIndex(),
          top: coercePixels(pos.y),
          left: coercePixels(pos.x),
          width: coercePixels(this.style.width),
          height: coercePixels(this.style.height),
          cursor: "pointer",
          position: "absolute",
          "-webkit-user-select": "none",
          "-khtml-user-select": "none",
          "-moz-user-select": "none",
          "-o-user-select": "none",
          "user-select": "none"
        });
      };
      /**
       * Returns the position at which to place the DIV depending on the latlng.
       *
       * @param latlng The position in latlng.
       * @return The position in pixels.
       */


      ClusterIcon.prototype.getPosFromLatLng_ = function (latlng) {
        var pos = this.getProjection().fromLatLngToDivPixel(latlng);
        pos.x = Math.floor(pos.x - this.anchorIcon_[1]);
        pos.y = Math.floor(pos.y - this.anchorIcon_[0]);
        return pos;
      };

      return ClusterIcon;
    }(OverlayViewSafe);
    /**
     * Copyright 2019 Google LLC. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * Creates a single cluster that manages a group of proximate markers.
     *  Used internally, do not call this constructor directly.
     */


    var Cluster =
    /** @class */
    function () {
      /**
       *
       * @param markerClusterer_ The `MarkerClusterer` object with which this
       *  cluster is associated.
       */
      function Cluster(markerClusterer_) {
        this.markerClusterer_ = markerClusterer_;
        this.map_ = this.markerClusterer_.getMap();
        this.minClusterSize_ = this.markerClusterer_.getMinimumClusterSize();
        this.averageCenter_ = this.markerClusterer_.getAverageCenter();
        this.markers_ = []; // TODO: type;

        this.center_ = null;
        this.bounds_ = null;
        this.clusterIcon_ = new ClusterIcon(this, this.markerClusterer_.getStyles());
      }
      /**
       * Returns the number of markers managed by the cluster. You can call this from
       * a `click`, `mouseover`, or `mouseout` event handler for the `MarkerClusterer` object.
       *
       * @return The number of markers in the cluster.
       */


      Cluster.prototype.getSize = function () {
        return this.markers_.length;
      };
      /**
       * Returns the array of markers managed by the cluster. You can call this from
       * a `click`, `mouseover`, or `mouseout` event handler for the `MarkerClusterer` object.
       *
       * @return The array of markers in the cluster.
       */


      Cluster.prototype.getMarkers = function () {
        return this.markers_;
      };
      /**
       * Returns the center of the cluster. You can call this from
       * a `click`, `mouseover`, or `mouseout` event handler
       * for the `MarkerClusterer` object.
       *
       * @return The center of the cluster.
       */


      Cluster.prototype.getCenter = function () {
        return this.center_;
      };
      /**
       * Returns the map with which the cluster is associated.
       *
       * @return The map.
       * @ignore
       */


      Cluster.prototype.getMap = function () {
        return this.map_;
      };
      /**
       * Returns the `MarkerClusterer` object with which the cluster is associated.
       *
       * @return The associated marker clusterer.
       * @ignore
       */


      Cluster.prototype.getMarkerClusterer = function () {
        return this.markerClusterer_;
      };
      /**
       * Returns the bounds of the cluster.
       *
       * @return the cluster bounds.
       * @ignore
       */


      Cluster.prototype.getBounds = function () {
        var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
        var markers = this.getMarkers();

        for (var i = 0; i < markers.length; i++) {
          bounds.extend(markers[i].getPosition());
        }

        return bounds;
      };
      /**
       * Removes the cluster from the map.
       *
       * @ignore
       */


      Cluster.prototype.remove = function () {
        this.clusterIcon_.setMap(null);
        this.markers_ = [];
        delete this.markers_;
      };
      /**
       * Adds a marker to the cluster.
       *
       * @param marker The marker to be added.
       * @return True if the marker was added.
       * @ignore
       */


      Cluster.prototype.addMarker = function (marker) {
        if (this.isMarkerAlreadyAdded_(marker)) {
          return false;
        }

        if (!this.center_) {
          this.center_ = marker.getPosition();
          this.calculateBounds_();
        } else {
          if (this.averageCenter_) {
            var l = this.markers_.length + 1;
            var lat = (this.center_.lat() * (l - 1) + marker.getPosition().lat()) / l;
            var lng = (this.center_.lng() * (l - 1) + marker.getPosition().lng()) / l;
            this.center_ = new google.maps.LatLng(lat, lng);
            this.calculateBounds_();
          }
        }

        marker.isAdded = true;
        this.markers_.push(marker);
        var mCount = this.markers_.length;
        var mz = this.markerClusterer_.getMaxZoom();

        if (mz !== null && this.map_.getZoom() > mz) {
          // Zoomed in past max zoom, so show the marker.
          if (marker.getMap() !== this.map_) {
            marker.setMap(this.map_);
          }
        } else if (mCount < this.minClusterSize_) {
          // Min cluster size not reached so show the marker.
          if (marker.getMap() !== this.map_) {
            marker.setMap(this.map_);
          }
        } else if (mCount === this.minClusterSize_) {
          // Hide the markers that were showing.
          for (var i = 0; i < mCount; i++) {
            this.markers_[i].setMap(null);
          }
        } else {
          marker.setMap(null);
        }

        return true;
      };
      /**
       * Determines if a marker lies within the cluster's bounds.
       *
       * @param marker The marker to check.
       * @return True if the marker lies in the bounds.
       * @ignore
       */


      Cluster.prototype.isMarkerInClusterBounds = function (marker) {
        return this.bounds_.contains(marker.getPosition());
      };
      /**
       * Calculates the extended bounds of the cluster with the grid.
       */


      Cluster.prototype.calculateBounds_ = function () {
        var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
        this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
      };
      /**
       * Updates the cluster icon.
       */


      Cluster.prototype.updateIcon = function () {
        var mCount = this.markers_.length;
        var mz = this.markerClusterer_.getMaxZoom();

        if (mz !== null && this.map_.getZoom() > mz) {
          this.clusterIcon_.hide();
          return;
        }

        if (mCount < this.minClusterSize_) {
          // Min cluster size not yet reached.
          this.clusterIcon_.hide();
          return;
        }

        var numStyles = this.markerClusterer_.getStyles().length;
        var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
        this.clusterIcon_.setCenter(this.center_);
        this.clusterIcon_.useStyle(sums);
        this.clusterIcon_.show();
      };
      /**
       * Determines if a marker has already been added to the cluster.
       *
       * @param marker The marker to check.
       * @return True if the marker has already been added.
       */


      Cluster.prototype.isMarkerAlreadyAdded_ = function (marker) {
        if (this.markers_.indexOf) {
          return this.markers_.indexOf(marker) !== -1;
        } else {
          for (var i = 0; i < this.markers_.length; i++) {
            if (marker === this.markers_[i]) {
              return true;
            }
          }
        }

        return false;
      };

      return Cluster;
    }();
    /**
     * Copyright 2019 Google LLC. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @ignore
     */


    var getOption = function getOption(options, prop, def) {
      if (options[prop] !== undefined) {
        return options[prop];
      } else {
        return def;
      }
    };

    var MarkerClusterer =
    /** @class */
    function (_super) {
      __extends(MarkerClusterer, _super);
      /**
       * Creates a MarkerClusterer object with the options specified in {@link MarkerClustererOptions}.
       * @param map The Google map to attach to.
       * @param markers The markers to be added to the cluster.
       * @param options The optional parameters.
       */


      function MarkerClusterer(map, markers, options) {
        if (markers === void 0) {
          markers = [];
        }

        if (options === void 0) {
          options = {};
        }

        var _this = _super.call(this) || this;

        _this.options = options;
        _this.markers_ = [];
        _this.clusters_ = [];
        _this.listeners_ = [];
        _this.activeMap_ = null;
        _this.ready_ = false;

        _this.ariaLabelFn = _this.options.ariaLabelFn || function () {
          return "";
        };

        _this.zIndex_ = _this.options.zIndex || google.maps.Marker.MAX_ZINDEX + 1;
        _this.gridSize_ = _this.options.gridSize || 60;
        _this.minClusterSize_ = _this.options.minimumClusterSize || 2;
        _this.maxZoom_ = _this.options.maxZoom || null;
        _this.styles_ = _this.options.styles || [];
        _this.title_ = _this.options.title || "";
        _this.zoomOnClick_ = getOption(_this.options, "zoomOnClick", true);
        _this.averageCenter_ = getOption(_this.options, "averageCenter", false);
        _this.ignoreHidden_ = getOption(_this.options, "ignoreHidden", false);
        _this.enableRetinaIcons_ = getOption(_this.options, "enableRetinaIcons", false);
        _this.imagePath_ = _this.options.imagePath || MarkerClusterer.IMAGE_PATH;
        _this.imageExtension_ = _this.options.imageExtension || MarkerClusterer.IMAGE_EXTENSION;
        _this.imageSizes_ = _this.options.imageSizes || MarkerClusterer.IMAGE_SIZES;
        _this.calculator_ = _this.options.calculator || MarkerClusterer.CALCULATOR;
        _this.batchSize_ = _this.options.batchSize || MarkerClusterer.BATCH_SIZE;
        _this.batchSizeIE_ = _this.options.batchSizeIE || MarkerClusterer.BATCH_SIZE_IE;
        _this.clusterClass_ = _this.options.clusterClass || "cluster";

        if (navigator.userAgent.toLowerCase().indexOf("msie") !== -1) {
          // Try to avoid IE timeout when processing a huge number of markers:
          _this.batchSize_ = _this.batchSizeIE_;
        }

        _this.setupStyles_();

        _this.addMarkers(markers, true);

        _this.setMap(map); // Note: this causes onAdd to be called


        return _this;
      }
      /**
       * Implementation of the onAdd interface method.
       * @ignore
       */


      MarkerClusterer.prototype.onAdd = function () {
        var _this = this;

        this.activeMap_ = this.getMap();
        this.ready_ = true;
        this.repaint();
        this.prevZoom_ = this.getMap().getZoom(); // Add the map event listeners

        this.listeners_ = [google.maps.event.addListener(this.getMap(), "zoom_changed", function () {
          var map = _this.getMap(); // eslint-disable-line @typescript-eslint/no-explicit-any
          // Fix for bug #407
          // Determines map type and prevents illegal zoom levels


          var minZoom = map.minZoom || 0;
          var maxZoom = Math.min(map.maxZoom || 100, map.mapTypes[map.getMapTypeId()].maxZoom);
          var zoom = Math.min(Math.max(_this.getMap().getZoom(), minZoom), maxZoom);

          if (_this.prevZoom_ != zoom) {
            _this.prevZoom_ = zoom;

            _this.resetViewport_(false);
          }
        }), google.maps.event.addListener(this.getMap(), "idle", function () {
          _this.redraw_();
        })];
      };
      /**
       * Implementation of the onRemove interface method.
       * Removes map event listeners and all cluster icons from the DOM.
       * All managed markers are also put back on the map.
       * @ignore
       */


      MarkerClusterer.prototype.onRemove = function () {
        // Put all the managed markers back on the map:
        for (var i = 0; i < this.markers_.length; i++) {
          if (this.markers_[i].getMap() !== this.activeMap_) {
            this.markers_[i].setMap(this.activeMap_);
          }
        } // Remove all clusters:


        for (var i = 0; i < this.clusters_.length; i++) {
          this.clusters_[i].remove();
        }

        this.clusters_ = []; // Remove map event listeners:

        for (var i = 0; i < this.listeners_.length; i++) {
          google.maps.event.removeListener(this.listeners_[i]);
        }

        this.listeners_ = [];
        this.activeMap_ = null;
        this.ready_ = false;
      };
      /**
       * Implementation of the draw interface method.
       * @ignore
       */


      MarkerClusterer.prototype.draw = function () {};
      /**
       * Sets up the styles object.
       */


      MarkerClusterer.prototype.setupStyles_ = function () {
        if (this.styles_.length > 0) {
          return;
        }

        for (var i = 0; i < this.imageSizes_.length; i++) {
          var size = this.imageSizes_[i];
          this.styles_.push(MarkerClusterer.withDefaultStyle({
            url: this.imagePath_ + (i + 1) + "." + this.imageExtension_,
            height: size,
            width: size
          }));
        }
      };
      /**
       *  Fits the map to the bounds of the markers managed by the clusterer.
       */


      MarkerClusterer.prototype.fitMapToMarkers = function (padding) {
        var markers = this.getMarkers();
        var bounds = new google.maps.LatLngBounds();

        for (var i = 0; i < markers.length; i++) {
          // March 3, 2018: Bug fix -- honor the ignoreHidden property
          if (markers[i].getVisible() || !this.getIgnoreHidden()) {
            bounds.extend(markers[i].getPosition());
          }
        }

        this.getMap().fitBounds(bounds, padding);
      };
      /**
       * Returns the value of the `gridSize` property.
       *
       * @return The grid size.
       */


      MarkerClusterer.prototype.getGridSize = function () {
        return this.gridSize_;
      };
      /**
       * Sets the value of the `gridSize` property.
       *
       * @param gridSize The grid size.
       */


      MarkerClusterer.prototype.setGridSize = function (gridSize) {
        this.gridSize_ = gridSize;
      };
      /**
       * Returns the value of the `minimumClusterSize` property.
       *
       * @return The minimum cluster size.
       */


      MarkerClusterer.prototype.getMinimumClusterSize = function () {
        return this.minClusterSize_;
      };
      /**
       * Sets the value of the `minimumClusterSize` property.
       *
       * @param minimumClusterSize The minimum cluster size.
       */


      MarkerClusterer.prototype.setMinimumClusterSize = function (minimumClusterSize) {
        this.minClusterSize_ = minimumClusterSize;
      };
      /**
       *  Returns the value of the `maxZoom` property.
       *
       *  @return The maximum zoom level.
       */


      MarkerClusterer.prototype.getMaxZoom = function () {
        return this.maxZoom_;
      };
      /**
       *  Sets the value of the `maxZoom` property.
       *
       *  @param maxZoom The maximum zoom level.
       */


      MarkerClusterer.prototype.setMaxZoom = function (maxZoom) {
        this.maxZoom_ = maxZoom;
      };

      MarkerClusterer.prototype.getZIndex = function () {
        return this.zIndex_;
      };

      MarkerClusterer.prototype.setZIndex = function (zIndex) {
        this.zIndex_ = zIndex;
      };
      /**
       *  Returns the value of the `styles` property.
       *
       *  @return The array of styles defining the cluster markers to be used.
       */


      MarkerClusterer.prototype.getStyles = function () {
        return this.styles_;
      };
      /**
       *  Sets the value of the `styles` property.
       *
       *  @param styles The array of styles to use.
       */


      MarkerClusterer.prototype.setStyles = function (styles) {
        this.styles_ = styles;
      };
      /**
       * Returns the value of the `title` property.
       *
       * @return The content of the title text.
       */


      MarkerClusterer.prototype.getTitle = function () {
        return this.title_;
      };
      /**
       *  Sets the value of the `title` property.
       *
       *  @param title The value of the title property.
       */


      MarkerClusterer.prototype.setTitle = function (title) {
        this.title_ = title;
      };
      /**
       * Returns the value of the `zoomOnClick` property.
       *
       * @return True if zoomOnClick property is set.
       */


      MarkerClusterer.prototype.getZoomOnClick = function () {
        return this.zoomOnClick_;
      };
      /**
       *  Sets the value of the `zoomOnClick` property.
       *
       *  @param zoomOnClick The value of the zoomOnClick property.
       */


      MarkerClusterer.prototype.setZoomOnClick = function (zoomOnClick) {
        this.zoomOnClick_ = zoomOnClick;
      };
      /**
       * Returns the value of the `averageCenter` property.
       *
       * @return True if averageCenter property is set.
       */


      MarkerClusterer.prototype.getAverageCenter = function () {
        return this.averageCenter_;
      };
      /**
       *  Sets the value of the `averageCenter` property.
       *
       *  @param averageCenter The value of the averageCenter property.
       */


      MarkerClusterer.prototype.setAverageCenter = function (averageCenter) {
        this.averageCenter_ = averageCenter;
      };
      /**
       * Returns the value of the `ignoreHidden` property.
       *
       * @return True if ignoreHidden property is set.
       */


      MarkerClusterer.prototype.getIgnoreHidden = function () {
        return this.ignoreHidden_;
      };
      /**
       *  Sets the value of the `ignoreHidden` property.
       *
       *  @param ignoreHidden The value of the ignoreHidden property.
       */


      MarkerClusterer.prototype.setIgnoreHidden = function (ignoreHidden) {
        this.ignoreHidden_ = ignoreHidden;
      };
      /**
       * Returns the value of the `enableRetinaIcons` property.
       *
       * @return True if enableRetinaIcons property is set.
       */


      MarkerClusterer.prototype.getEnableRetinaIcons = function () {
        return this.enableRetinaIcons_;
      };
      /**
       *  Sets the value of the `enableRetinaIcons` property.
       *
       *  @param enableRetinaIcons The value of the enableRetinaIcons property.
       */


      MarkerClusterer.prototype.setEnableRetinaIcons = function (enableRetinaIcons) {
        this.enableRetinaIcons_ = enableRetinaIcons;
      };
      /**
       * Returns the value of the `imageExtension` property.
       *
       * @return The value of the imageExtension property.
       */


      MarkerClusterer.prototype.getImageExtension = function () {
        return this.imageExtension_;
      };
      /**
       *  Sets the value of the `imageExtension` property.
       *
       *  @param imageExtension The value of the imageExtension property.
       */


      MarkerClusterer.prototype.setImageExtension = function (imageExtension) {
        this.imageExtension_ = imageExtension;
      };
      /**
       * Returns the value of the `imagePath` property.
       *
       * @return The value of the imagePath property.
       */


      MarkerClusterer.prototype.getImagePath = function () {
        return this.imagePath_;
      };
      /**
       *  Sets the value of the `imagePath` property.
       *
       *  @param imagePath The value of the imagePath property.
       */


      MarkerClusterer.prototype.setImagePath = function (imagePath) {
        this.imagePath_ = imagePath;
      };
      /**
       * Returns the value of the `imageSizes` property.
       *
       * @return The value of the imageSizes property.
       */


      MarkerClusterer.prototype.getImageSizes = function () {
        return this.imageSizes_;
      };
      /**
       *  Sets the value of the `imageSizes` property.
       *
       *  @param imageSizes The value of the imageSizes property.
       */


      MarkerClusterer.prototype.setImageSizes = function (imageSizes) {
        this.imageSizes_ = imageSizes;
      };
      /**
       * Returns the value of the `calculator` property.
       *
       * @return the value of the calculator property.
       */


      MarkerClusterer.prototype.getCalculator = function () {
        return this.calculator_;
      };
      /**
       * Sets the value of the `calculator` property.
       *
       * @param calculator The value of the calculator property.
       */


      MarkerClusterer.prototype.setCalculator = function (calculator) {
        this.calculator_ = calculator;
      };
      /**
       * Returns the value of the `batchSizeIE` property.
       *
       * @return the value of the batchSizeIE property.
       */


      MarkerClusterer.prototype.getBatchSizeIE = function () {
        return this.batchSizeIE_;
      };
      /**
       * Sets the value of the `batchSizeIE` property.
       *
       *  @param batchSizeIE The value of the batchSizeIE property.
       */


      MarkerClusterer.prototype.setBatchSizeIE = function (batchSizeIE) {
        this.batchSizeIE_ = batchSizeIE;
      };
      /**
       * Returns the value of the `clusterClass` property.
       *
       * @return the value of the clusterClass property.
       */


      MarkerClusterer.prototype.getClusterClass = function () {
        return this.clusterClass_;
      };
      /**
       * Sets the value of the `clusterClass` property.
       *
       *  @param clusterClass The value of the clusterClass property.
       */


      MarkerClusterer.prototype.setClusterClass = function (clusterClass) {
        this.clusterClass_ = clusterClass;
      };
      /**
       *  Returns the array of markers managed by the clusterer.
       *
       *  @return The array of markers managed by the clusterer.
       */


      MarkerClusterer.prototype.getMarkers = function () {
        return this.markers_;
      };
      /**
       *  Returns the number of markers managed by the clusterer.
       *
       *  @return The number of markers.
       */


      MarkerClusterer.prototype.getTotalMarkers = function () {
        return this.markers_.length;
      };
      /**
       * Returns the current array of clusters formed by the clusterer.
       *
       * @return The array of clusters formed by the clusterer.
       */


      MarkerClusterer.prototype.getClusters = function () {
        return this.clusters_;
      };
      /**
       * Returns the number of clusters formed by the clusterer.
       *
       * @return The number of clusters formed by the clusterer.
       */


      MarkerClusterer.prototype.getTotalClusters = function () {
        return this.clusters_.length;
      };
      /**
       * Adds a marker to the clusterer. The clusters are redrawn unless
       *  `nodraw` is set to `true`.
       *
       * @param marker The marker to add.
       * @param nodraw Set to `true` to prevent redrawing.
       */


      MarkerClusterer.prototype.addMarker = function (marker, nodraw) {
        this.pushMarkerTo_(marker);

        if (!nodraw) {
          this.redraw_();
        }
      };
      /**
       * Adds an array of markers to the clusterer. The clusters are redrawn unless
       *  `nodraw` is set to `true`.
       *
       * @param markers The markers to add.
       * @param nodraw Set to `true` to prevent redrawing.
       */


      MarkerClusterer.prototype.addMarkers = function (markers, nodraw) {
        for (var key in markers) {
          if (Object.prototype.hasOwnProperty.call(markers, key)) {
            this.pushMarkerTo_(markers[key]);
          }
        }

        if (!nodraw) {
          this.redraw_();
        }
      };
      /**
       * Pushes a marker to the clusterer.
       *
       * @param marker The marker to add.
       */


      MarkerClusterer.prototype.pushMarkerTo_ = function (marker) {
        var _this = this; // If the marker is draggable add a listener so we can update the clusters on the dragend:


        if (marker.getDraggable()) {
          google.maps.event.addListener(marker, "dragend", function () {
            if (_this.ready_) {
              marker.isAdded = false;

              _this.repaint();
            }
          });
        }

        marker.isAdded = false;
        this.markers_.push(marker);
      };
      /**
       * Removes a marker from the cluster.  The clusters are redrawn unless
       *  `nodraw` is set to `true`. Returns `true` if the
       *  marker was removed from the clusterer.
       *
       * @param marker The marker to remove.
       * @param nodraw Set to `true` to prevent redrawing.
       * @return True if the marker was removed from the clusterer.
       */


      MarkerClusterer.prototype.removeMarker = function (marker, nodraw) {
        var removed = this.removeMarker_(marker);

        if (!nodraw && removed) {
          this.repaint();
        }

        return removed;
      };
      /**
       * Removes an array of markers from the cluster. The clusters are redrawn unless
       *  `nodraw` is set to `true`. Returns `true` if markers were removed from the clusterer.
       *
       * @param markers The markers to remove.
       * @param nodraw Set to `true` to prevent redrawing.
       * @return True if markers were removed from the clusterer.
       */


      MarkerClusterer.prototype.removeMarkers = function (markers, nodraw) {
        var removed = false;

        for (var i = 0; i < markers.length; i++) {
          var r = this.removeMarker_(markers[i]);
          removed = removed || r;
        }

        if (!nodraw && removed) {
          this.repaint();
        }

        return removed;
      };
      /**
       * Removes a marker and returns true if removed, false if not.
       *
       * @param marker The marker to remove
       * @return Whether the marker was removed or not
       */


      MarkerClusterer.prototype.removeMarker_ = function (marker) {
        var index = -1;

        if (this.markers_.indexOf) {
          index = this.markers_.indexOf(marker);
        } else {
          for (var i = 0; i < this.markers_.length; i++) {
            if (marker === this.markers_[i]) {
              index = i;
              break;
            }
          }
        }

        if (index === -1) {
          // Marker is not in our list of markers, so do nothing:
          return false;
        }

        marker.setMap(null);
        this.markers_.splice(index, 1); // Remove the marker from the list of managed markers

        return true;
      };
      /**
       * Removes all clusters and markers from the map and also removes all markers
       *  managed by the clusterer.
       */


      MarkerClusterer.prototype.clearMarkers = function () {
        this.resetViewport_(true);
        this.markers_ = [];
      };
      /**
       * Recalculates and redraws all the marker clusters from scratch.
       *  Call this after changing any properties.
       */


      MarkerClusterer.prototype.repaint = function () {
        var oldClusters = this.clusters_.slice();
        this.clusters_ = [];
        this.resetViewport_(false);
        this.redraw_(); // Remove the old clusters.
        // Do it in a timeout to prevent blinking effect.

        setTimeout(function () {
          for (var i = 0; i < oldClusters.length; i++) {
            oldClusters[i].remove();
          }
        }, 0);
      };
      /**
       * Returns the current bounds extended by the grid size.
       *
       * @param bounds The bounds to extend.
       * @return The extended bounds.
       * @ignore
       */


      MarkerClusterer.prototype.getExtendedBounds = function (bounds) {
        var projection = this.getProjection(); // Turn the bounds into latlng.

        var tr = new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng());
        var bl = new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng()); // Convert the points to pixels and the extend out by the grid size.

        var trPix = projection.fromLatLngToDivPixel(tr);
        trPix.x += this.gridSize_;
        trPix.y -= this.gridSize_;
        var blPix = projection.fromLatLngToDivPixel(bl);
        blPix.x -= this.gridSize_;
        blPix.y += this.gridSize_; // Convert the pixel points back to LatLng

        var ne = projection.fromDivPixelToLatLng(trPix);
        var sw = projection.fromDivPixelToLatLng(blPix); // Extend the bounds to contain the new bounds.

        bounds.extend(ne);
        bounds.extend(sw);
        return bounds;
      };
      /**
       * Redraws all the clusters.
       */


      MarkerClusterer.prototype.redraw_ = function () {
        this.createClusters_(0);
      };
      /**
       * Removes all clusters from the map. The markers are also removed from the map
       *  if `hide` is set to `true`.
       *
       * @param hide Set to `true` to also remove the markers from the map.
       */


      MarkerClusterer.prototype.resetViewport_ = function (hide) {
        // Remove all the clusters
        for (var i = 0; i < this.clusters_.length; i++) {
          this.clusters_[i].remove();
        }

        this.clusters_ = []; // Reset the markers to not be added and to be removed from the map.

        for (var i = 0; i < this.markers_.length; i++) {
          var marker = this.markers_[i];
          marker.isAdded = false;

          if (hide) {
            marker.setMap(null);
          }
        }
      };
      /**
       * Calculates the distance between two latlng locations in km.
       *
       * @param p1 The first lat lng point.
       * @param p2 The second lat lng point.
       * @return The distance between the two points in km.
       * @link http://www.movable-type.co.uk/scripts/latlong.html
       */


      MarkerClusterer.prototype.distanceBetweenPoints_ = function (p1, p2) {
        var R = 6371; // Radius of the Earth in km

        var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
        var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
      };
      /**
       * Determines if a marker is contained in a bounds.
       *
       * @param marker The marker to check.
       * @param bounds The bounds to check against.
       * @return True if the marker is in the bounds.
       */


      MarkerClusterer.prototype.isMarkerInBounds_ = function (marker, bounds) {
        return bounds.contains(marker.getPosition());
      };
      /**
       * Adds a marker to a cluster, or creates a new cluster.
       *
       * @param marker The marker to add.
       */


      MarkerClusterer.prototype.addToClosestCluster_ = function (marker) {
        var distance = 40000; // Some large number

        var clusterToAddTo = null;

        for (var i = 0; i < this.clusters_.length; i++) {
          var cluster = this.clusters_[i];
          var center = cluster.getCenter();

          if (center) {
            var d = this.distanceBetweenPoints_(center, marker.getPosition());

            if (d < distance) {
              distance = d;
              clusterToAddTo = cluster;
            }
          }
        }

        if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
          clusterToAddTo.addMarker(marker);
        } else {
          var cluster = new Cluster(this);
          cluster.addMarker(marker);
          this.clusters_.push(cluster);
        }
      };
      /**
       * Creates the clusters. This is done in batches to avoid timeout errors
       *  in some browsers when there is a huge number of markers.
       *
       * @param iFirst The index of the first marker in the batch of
       *  markers to be added to clusters.
       */


      MarkerClusterer.prototype.createClusters_ = function (iFirst) {
        var _this = this;

        if (!this.ready_) {
          return;
        } // Cancel previous batch processing if we're working on the first batch:


        if (iFirst === 0) {
          google.maps.event.trigger(this, "clusteringbegin", this);

          if (typeof this.timerRefStatic !== "undefined") {
            clearTimeout(this.timerRefStatic);
            delete this.timerRefStatic;
          }
        } // Get our current map view bounds.
        // Create a new bounds object so we don't affect the map.
        //
        // See Comments 9 & 11 on Issue 3651 relating to this workaround for a Google Maps bug:


        var mapBounds;

        if (this.getMap().getZoom() > 3) {
          mapBounds = new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(), this.getMap().getBounds().getNorthEast());
        } else {
          mapBounds = new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
        }

        var bounds = this.getExtendedBounds(mapBounds);
        var iLast = Math.min(iFirst + this.batchSize_, this.markers_.length);

        for (var i = iFirst; i < iLast; i++) {
          var marker = this.markers_[i];

          if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
            if (!this.ignoreHidden_ || this.ignoreHidden_ && marker.getVisible()) {
              this.addToClosestCluster_(marker);
            }
          }
        }

        if (iLast < this.markers_.length) {
          this.timerRefStatic = window.setTimeout(function () {
            _this.createClusters_(iLast);
          }, 0);
        } else {
          delete this.timerRefStatic;
          google.maps.event.trigger(this, "clusteringend", this);

          for (var i = 0; i < this.clusters_.length; i++) {
            this.clusters_[i].updateIcon();
          }
        }
      };
      /**
       * The default function for determining the label text and style
       * for a cluster icon.
       *
       * @param markers The array of markers represented by the cluster.
       * @param numStyles The number of marker styles available.
       * @return The information resource for the cluster.
       */


      MarkerClusterer.CALCULATOR = function (markers, numStyles) {
        var index = 0;
        var count = markers.length;
        var dv = count;

        while (dv !== 0) {
          dv = Math.floor(dv / 10);
          index++;
        }

        index = Math.min(index, numStyles);
        return {
          text: count.toString(),
          index: index,
          title: ""
        };
      };
      /**
       * Generates default styles augmented with user passed values.
       * Useful when you want to override some default values but keep untouched
       *
       * @param overrides override default values
       */


      MarkerClusterer.withDefaultStyle = function (overrides) {
        return _assign({
          textColor: "black",
          textSize: 11,
          textDecoration: "none",
          textLineHeight: overrides.height,
          fontWeight: "bold",
          fontStyle: "normal",
          fontFamily: "Arial,sans-serif",
          backgroundPosition: "0 0"
        }, overrides);
      };
      /**
       * The number of markers to process in one batch.
       */


      MarkerClusterer.BATCH_SIZE = 2000;
      /**
       * The number of markers to process in one batch (IE only).
       */

      MarkerClusterer.BATCH_SIZE_IE = 500;
      /**
       * The default root name for the marker cluster images.
       */

      MarkerClusterer.IMAGE_PATH = "../images/m";
      /**
       * The default extension name for the marker cluster images.
       */

      MarkerClusterer.IMAGE_EXTENSION = "png";
      /**
       * The default array of sizes for the marker cluster images.
       */

      MarkerClusterer.IMAGE_SIZES = [53, 56, 66, 78, 90];
      return MarkerClusterer;
    }(OverlayViewSafe);
    /**
     * Copyright 2019 Google LLC. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /* harmony default export */


    __webpack_exports__["default"] = MarkerClusterer; //# sourceMappingURL=index.esm.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header *ngIf='show'>\n    <ion-toolbar>\n        <ion-title dir=\"rtl\"><img src=\"assets/images/icons/logo.svg\" /></ion-title>\n        <div class=\"newsidetext\" (click)=\"help()\" slot=\"end\">\n            <p>{{'help_menu' | translate}}</p>\n        </div>\n        <ion-buttons slot=\"end\" class=\"newmenu\" (click)=\"menu()\">\n            <img src=\"assets/images/icons/menunew.svg\" />\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<!-- <ion-header *ngIg = 'hide'\n     >\n  <ion-toolbar>\n  <ion-buttons slot=\"start\" (click)=\"hide1()\" >\n   <img src=\"assets/images/icons/leftarrow.svg\" class=\"newback\"/>\n   </ion-buttons>  \n  </ion-toolbar>\n</ion-header> -->\n\n<ion-header *ngIf='hide'>\n    <ion-toolbar (click)=\"hide1()\">\n        <ion-buttons slot=\"start\">\n            <img src=\"assets/images/icons/leftarrow.svg\" class=\"newback\" />\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- <iframe width=\"600\" height=\"800\" src=\"https://datastudio.google.com/embed/reporting/8a634d0f-6702-45a6-99c9-986510667108/page/larOC\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe> -->\n    <form [formGroup]=\"searchForm\">\n        <ion-searchbar mode=\"ios\" showCancelButton=\"never\" (ionChange)=\"getOriginal($event)\" (ionClear)=\"clearInput($event)\" id=\"autocomplete\" placeholder=\"{{'search_area' | translate}}\" debounce=\"500\" formControlName=\"location\" type=\"text\"></ion-searchbar>\n    </form>\n    <div class=\"newshare\" (click)=\"showFullMap()\">\n        <!-- <img src=\"assets/images/googleimg.png\"/> -->\n        <div #map id=\"map\"></div>\n\n        <div class=\"notdatain\" *ngIf=\"locations1  == '' && segmentModel === 'one'\">\n            <p>{{'incident_no_data' | translate}}</p>\n        </div>\n\n        <div class=\"notdatain\" *ngIf=\"locations1 == '' && segmentModel === 'two'\">\n            <p>{{'safety_tip_no_data' | translate}}</p>\n        </div>\n\n    </div>\n    <div class=\"newoverlap\" *ngIf='show'>\n        <!-- <div class=\"notdatainside\" *ngIf = \"segmentModel === 'one'\">\n      <p>To view incidents reported before 01 Dec 2020, <a href=\"https://public.tableau.com/profile/mehul.sharma3900#!/vizhome/Safecity_Dashboard_Delhi_final/MumbaiStory\" target=\"_blank\">click here</a></p>\n    </div> -->\n        <div class=\"toparrow\" (click)=\"newmodalin()\">\n            <ion-icon name=\"chevron-up-outline\"></ion-icon>\n        </div>\n        <div class=\"segmentonein\">\n            <ion-segment mode=\"ios\" value=\"one\" [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\">\n                <ion-segment-button value=\"one\">\n                    <ion-label>{{'incidents'| translate}}</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"two\">\n                    <ion-label>{{'safety_tips' | translate }}</ion-label>\n                </ion-segment-button>\n            </ion-segment>\n        </div>\n\n        <div *ngIf=\"segmentModel === 'one'\">\n            <ion-card class=\"newcardside\" (click)=\"preframing()\">\n                <ion-card-content>\n                    <p>{{'incident_detail_msg'|translate}}</p>\n                    <h5>{{'incident_button' | translate}}</h5>\n                </ion-card-content>\n            </ion-card>\n            <div class=\"newitemone\">\n                <h2>{{'incident_shared_community' | translate}}</h2>\n\n            </div>\n\n\n            <ion-button class=\"newsafe\" shape=\"round\" expand=\"full\" (click)=\"preframing()\">{{'incident_button' | translate}}\n            </ion-button>\n        </div>\n\n        <div *ngIf=\"segmentModel === 'two'\">\n\n            <ion-card class=\"newcardside\" (click)=\"safetytip()\">\n                <ion-card-content>\n                    <p>{{'safety_detail_msg' | translate}}</p>\n                    <h5>{{'safety_button' | translate}}</h5>\n                </ion-card-content>\n            </ion-card>\n            <div class=\"newitemone\">\n                <h2>{{'safety_shared_community' | translate}}</h2>\n\n\n\n            </div>\n\n            <ion-button class=\"newsafein\" shape=\"round\" expand=\"full\" (click)=\"safetytip()\">{{'safety_button' | translate}}\n            </ion-button>\n        </div>\n\n    </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-md ion-title {\n  text-align: left;\n}\n\n.header-ios ion-title {\n  text-align: left;\n}\n\n.header-ios .toolbar-ios:last-child .toolbar-background-ios {\n  border: 0;\n}\n\n.searchbar-search-icon {\n  display: none;\n  width: 0;\n  height: 0;\n}\n\n#autocomplete {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 99%;\n}\n\n#map {\n  width: 100%;\n  height: 100vh;\n  padding: 0 15px;\n}\n\n.mainareain {\n  width: 100%;\n  height: auto;\n  margin-top: 5px;\n}\n\n.backbutton {\n  background-image: url(/assets/images/icons/leftarrow.svg);\n  width: 25px;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  height: 25px;\n  margin-left: 4px;\n}\n\nion-header {\n  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);\n}\n\n.header-md::after {\n  background: transparent;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0 0 0;\n}\n\n.newsidetext p {\n  color: #D90D0D;\n  font-size: 16px;\n  padding-right: 25px;\n}\n\n.segmentonein {\n  width: auto;\n  position: relative;\n  background: #fff;\n  z-index: 99;\n  padding: 8px 0 20px 0;\n  left: 0;\n  right: 0;\n}\n\n.newsidetext {\n  z-index: 9999;\n}\n\nion-title {\n  padding: 0px 20px;\n}\n\nion-title img {\n  width: 96px;\n  vertical-align: middle;\n}\n\n.newmenu {\n  padding-right: 12px;\n}\n\n.header-ios ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 75px;\n}\n\n.header-md ion-toolbar {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --min-height: 75px;\n}\n\n.mainarea {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 119px;\n}\n\n.newshare {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  padding: 0 0;\n  margin-top: 0;\n  position: fixed;\n}\n\nion-searchbar {\n  position: absolute;\n  --background: #fff;\n  --border-radius: 23px;\n  margin-top: 25px;\n  z-index: 99;\n}\n\n.newshare h2 {\n  width: 100%;\n  height: auto;\n  text-align: left;\n  color: #592D8D;\n  padding-top: 0;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 25px;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n\n.incident {\n  --background: #F5DE5B;\n  border-radius: 4px;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\n.incident ion-label {\n  margin-top: 22px;\n  margin-bottom: 22px;\n}\n\n.ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.newview {\n  background-color: #fff !important;\n  box-sizing: border-box;\n  border: 1px solid #D9BE23;\n  padding: 18px 5px;\n  width: 100%;\n  font-size: 15px;\n  border-radius: 4px;\n  font-weight: 500;\n  margin-top: 20px;\n  text-transform: uppercase;\n}\n\n.incident ion-fab-button {\n  width: 30px;\n  height: 30px;\n  --background: #ffffff;\n  --background-activated: #ffffff;\n  --background-focused: #ffffff;\n  --background-hover: #ffffff;\n  --color: #F5DE5B;\n  --color-activated: #F5DE5B;\n  --color-focused: #F5DE5B;\n  --color-hover: #F5DE5B;\n}\n\n.incident ion-icon {\n  font-size: 22px;\n  --color: #F5DE5B;\n  font-weight: 500;\n  --color-activated: #F5DE5B;\n  --color-focused: #F5DE5B;\n  --color-hover: #F5DE5B;\n}\n\n.newsafty {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  padding: 0 25px;\n  margin-top: 25px;\n}\n\n.newsafty h2 {\n  width: 100%;\n  height: auto;\n  text-align: left;\n  color: #592D8D;\n  padding-top: 0;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 25px;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n\n.newsafty p {\n  width: 100%;\n  height: auto;\n  color: #220E0E;\n  font-size: 16px;\n  line-height: 22px;\n  margin-top: 0;\n  text-align: left;\n}\n\n.newrow ion-fab-button {\n  margin: 0 auto;\n  text-align: center;\n}\n\n.newshare p {\n  width: 100%;\n  height: auto;\n  color: #220E0E;\n  font-size: 16px;\n  line-height: 22px;\n  margin-top: 0;\n  text-align: left;\n}\n\n.newrowsec {\n  width: 80%;\n  height: auto;\n  text-align: center;\n  margin: 25px auto 0;\n}\n\n.newrowsec h2 {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  color: #292020;\n  padding-top: 0;\n  font-family: \"Lato\";\n  font-weight: 500;\n  font-size: 18px;\n  display: inline-block;\n}\n\n.newrowsec ion-fab-button {\n  margin: 0 auto;\n  --background: #F5D937;\n  text-align: center;\n}\n\n.newrowsec p {\n  width: 100%;\n  height: auto;\n  color: #989191;\n  font-size: 14px;\n  line-height: 18px;\n  margin-top: 5px;\n  text-align: center;\n}\n\n.newbtngroup {\n  width: 100%;\n  height: auto;\n  margin-top: 0px;\n  margin-bottom: 50px;\n  padding: 0 25px;\n  display: inline-block;\n}\n\n:focus {\n  outline: -webkit-focus-ring-color auto 0;\n}\n\n.newreport {\n  color: #ffffff !important;\n  --border-radius: 4px;\n  font-size: 12px;\n  height: 43px;\n  -ion-color-contrast: var(--ion-color-light-contrast, #592D8D) !important;\n  font-family: \"Lato\";\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 100%;\n  font-weight: 500;\n  margin-top: 60px;\n  text-transform: inherit;\n  display: inline-block;\n  text-transform: uppercase;\n  margin: 0 auto;\n  text-align: center;\n  --box-shadow: none;\n}\n\n.notdatainside {\n  background: #f4f0f8;\n  color: #292020;\n  position: absolute;\n  top: -31%;\n  left: 5%;\n  right: 5%;\n}\n\n.notdatainside p {\n  padding: 11px 18px;\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.sc-ion-buttons-ios-h img {\n  margin-left: 4px;\n}\n\n.notdatainside a {\n  font-size: 16px;\n  color: #592D8D;\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.notdatain {\n  background: #f4f0f8;\n  color: #292020;\n  position: absolute;\n  top: 20%;\n  left: 10%;\n  right: 10%;\n}\n\n.notdatain p {\n  padding: 14px 18px;\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0;\n}\n\n.newoverlap {\n  width: 100%;\n  position: absolute;\n  background: #fff;\n  border-radius: 24px 24px 0 0;\n  bottom: 0;\n  padding: 0 15px;\n}\n\n.newoverlap .toparrow {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  margin: 0px auto 0;\n  color: #C5C5C5;\n  font-size: 28px;\n  z-index: 999;\n  background: transparent;\n  padding: 0px 0 0 0;\n}\n\n.newoverlap .toparrow ion-icon {\n  margin-top: 5px;\n}\n\n.segment-button-checked {\n  --indicator-color: #592D8D;\n  color: #fff;\n  --border-radius: 4px;\n  background: #592D8D;\n}\n\nion-segment-button {\n  background: #EBE2F5;\n  min-height: 35px;\n  font-size: 16px;\n  --border-radius: 5px;\n  font-weight: 400;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.newsafe {\n  color: #fff !important;\n  --border-radius: 4px;\n  font-size: 16px;\n  height: 40px;\n  --background: #592D8D;\n  --background-activated: #592D8D;\n  --background-focused: #592D8D;\n  --background-hover: #592D8D;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 92%;\n  font-weight: 400;\n  margin-top: 60px;\n  text-transform: inherit;\n  position: absolute;\n  margin: 0 auto;\n  --box-shadow: 0;\n  text-align: center;\n  bottom: 23%;\n  z-index: 999;\n  left: 0;\n  right: 0;\n}\n\n.newsafein {\n  color: #000 !important;\n  --border-radius: 4px;\n  font-size: 14px;\n  height: 40px;\n  --background: #F5DE5B;\n  --background-activated: #F5DE5B;\n  --background-focused: #F5DE5B;\n  --background-hover: #F5DE5B;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  width: 92%;\n  font-weight: 400;\n  margin-top: 60px;\n  text-transform: inherit;\n  margin: 0 auto;\n  --box-shadow: 0;\n  text-align: center;\n  position: absolute;\n  z-index: 999;\n  left: 0;\n  right: 0;\n  bottom: 23%;\n}\n\n.newcardside {\n  width: 100%;\n  height: auto;\n  background: #F8F4FD;\n  --border-radius: 4px;\n  box-shadow: none;\n  margin-top: 0;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  margin-bottom: 3px;\n}\n\n.newcardside p {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 400;\n  color: #220E0E;\n  line-height: 18px;\n}\n\n.newcardside h5 {\n  width: 100%;\n  height: auto;\n  font-size: 14px;\n  font-weight: 500;\n  color: #592D8D !important;\n  margin-top: 10px;\n  line-height: 18px;\n}\n\n.newitemone {\n  width: 100%;\n  height: auto;\n  float: left;\n}\n\n.newitemone h2 {\n  width: 100%;\n  height: auto;\n  color: #2F1153;\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcZmluYWwgYmFja3VwIHNhZmVjaXR5L3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtBQ0NKOztBREtBO0VBQ0ksYUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGSjs7QURLQTtFQUNJLHlEQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUdJLDhDQUFBO0FDRko7O0FES0E7RUFDSSx1QkFBQTtBQ0ZKOztBREtBO0VBQ0kscUJBQUE7QUNGSjs7QURLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7QUNGSjs7QURLQTtFQUNJLGlCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7QUNGSjs7QURLQTtFQUNJLG1CQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksaUNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREtBO0VBQ0ksd0NBQUE7QUNGSjs7QURLQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHdFQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtBQ0ZKOztBREtBO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0E7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDRko7O0FES0E7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUJBQUE7VUFBQSxvQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kIGlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItaW9zOmxhc3QtY2hpbGQgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xyXG4gICAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4vLyAuc2VhcmNoYmFyLWNsZWFyLWljb24ge1xyXG4vLyAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG4uc2VhcmNoYmFyLXNlYXJjaC1pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5cclxuI2F1dG9jb21wbGV0ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiA5OSU7XHJcbn1cclxuXHJcbiNtYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG4ubWFpbmFyZWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmJhY2tidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnRhcnJvdy5zdmcpO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMCAwIDA7XHJcbn1cclxuXHJcbi5uZXdzaWRldGV4dCBwIHtcclxuICAgIGNvbG9yOiAjRDkwRDBEO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLnNlZ21lbnRvbmVpbiB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHBhZGRpbmc6IDhweCAwIDIwcHggMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLm5ld3NpZGV0ZXh0IHtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxufVxyXG5cclxuaW9uLXRpdGxlIGltZyB7XHJcbiAgICB3aWR0aDogOTZweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5uZXdtZW51IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiA3NXB4O1xyXG59XHJcblxyXG4uaGVhZGVyLW1kIGlvbi10b29sYmFyIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDNweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiA3NXB4O1xyXG59XHJcblxyXG4ubWFpbmFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDExOXB4O1xyXG59XHJcblxyXG4ubmV3c2hhcmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuLm5ld3NoYXJlIGgyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjNTkyRDhEO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaW5jaWRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjVERTVCO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5pbmNpZGVudCBpb24tbGFiZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbn1cclxuXHJcbi5yaXBwbGUtcGFyZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5uZXd2aWV3IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDlCRTIzO1xyXG4gICAgcGFkZGluZzogMThweCA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmluY2lkZW50IGlvbi1mYWItYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmZmZmO1xyXG4gICAgLS1jb2xvcjogI0Y1REU1QjtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjRjVERTVCO1xyXG4gICAgLS1jb2xvci1mb2N1c2VkOiAjRjVERTVCO1xyXG4gICAgLS1jb2xvci1ob3ZlcjogI0Y1REU1QjtcclxufVxyXG5cclxuLmluY2lkZW50IGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIC0tY29sb3I6ICNGNURFNUI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNGNURFNUI7XHJcbiAgICAtLWNvbG9yLWZvY3VzZWQ6ICNGNURFNUI7XHJcbiAgICAtLWNvbG9yLWhvdmVyOiAjRjVERTVCO1xyXG59XHJcblxyXG4ubmV3c2FmdHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4ubmV3c2FmdHkgaDIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICM1OTJEOEQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubmV3c2FmdHkgcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGNvbG9yOiAjMjIwRTBFO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm5ld3JvdyBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5ld3NoYXJlIHAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogIzIyMEUwRTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5uZXdyb3dzZWMge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjVweCBhdXRvIDA7XHJcbn1cclxuXHJcbi5uZXdyb3dzZWMgaDIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzI5MjAyMDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5uZXdyb3dzZWMgaW9uLWZhYi1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGNUQ5Mzc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXdyb3dzZWMgcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGNvbG9yOiAjOTg5MTkxO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZXdidG5ncm91cCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDI1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byAwO1xyXG59XHJcblxyXG4ubmV3cmVwb3J0IHtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGhlaWdodDogNDNweDtcclxuICAgIC1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCwgIzU5MkQ4RCkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5ub3RkYXRhaW5zaWRlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCAyNDAsIDI0OCwgMSk7XHJcbiAgICBjb2xvcjogcmdiYSg0MSwgMzIsIDMyLCAxKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTMxJTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4ubm90ZGF0YWluc2lkZSBwIHtcclxuICAgIHBhZGRpbmc6IDExcHggMThweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLnNjLWlvbi1idXR0b25zLWlvcy1oIGltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcblxyXG4ubm90ZGF0YWluc2lkZSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNTkyRDhEO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm5vdGRhdGFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NCwgMjQwLCAyNDgsIDEpO1xyXG4gICAgY29sb3I6IHJnYmEoNDEsIDMyLCAzMiwgMSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5ub3RkYXRhaW4gcCB7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLm5ld292ZXJsYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweCAyNHB4IDAgMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG5cclxuLm5ld292ZXJsYXAgLnRvcGFycm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0byAwO1xyXG4gICAgY29sb3I6ICNDNUM1QzU7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDBweCAwIDAgMDtcclxufVxyXG5cclxuLm5ld292ZXJsYXAgLnRvcGFycm93IGlvbi1pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3I6ICM1OTJEOEQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzU5MkQ4RDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6ICNFQkUyRjU7XHJcbiAgICBtaW4taGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5uZXdzYWZlIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogIzU5MkQ4RDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiA5MiU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAtLWJveC1zaGFkb3c6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3R0b206IDIzJTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLm5ld3NhZmVpbiB7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGNURFNUI7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRjVERTVCO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNGNURFNUI7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNGNURFNUI7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogOTIlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLS1ib3gtc2hhZG93OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAyMyU7XHJcbn1cclxuXHJcbi5uZXdjYXJkc2lkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNGOEY0RkQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4ubmV3Y2FyZHNpZGUgcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzIyMEUwRTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4ubmV3Y2FyZHNpZGUgaDUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM1OTJEOEQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG5cclxuLm5ld2l0ZW1vbmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLm5ld2l0ZW1vbmUgaDIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogIzJGMTE1MztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59IiwiLmhlYWRlci1tZCBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1pb3M6bGFzdC1jaGlsZCAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogMDtcbn1cblxuLnNlYXJjaGJhci1zZWFyY2gtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbiNhdXRvY29tcGxldGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiA5OSU7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4ubWFpbmFyZWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmJhY2tidXR0b24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGVmdGFycm93LnN2Zyk7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcbiAgLS1ib3JkZXItd2lkdGg6IDAgMCAwO1xufVxuXG4ubmV3c2lkZXRleHQgcCB7XG4gIGNvbG9yOiAjRDkwRDBEO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5zZWdtZW50b25laW4ge1xuICB3aWR0aDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiA5OTtcbiAgcGFkZGluZzogOHB4IDAgMjBweCAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLm5ld3NpZGV0ZXh0IHtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbmlvbi10aXRsZSBpbWcge1xuICB3aWR0aDogOTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm5ld21lbnUge1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLW1pbi1oZWlnaHQ6IDc1cHg7XG59XG5cbi5oZWFkZXItbWQgaW9uLXRvb2xiYXIge1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgLS1taW4taGVpZ2h0OiA3NXB4O1xufVxuXG4ubWFpbmFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTE5cHg7XG59XG5cbi5uZXdzaGFyZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiAyM3B4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLm5ld3NoYXJlIGgyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pbmNpZGVudCB7XG4gIC0tYmFja2dyb3VuZDogI0Y1REU1QjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5pbmNpZGVudCBpb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuXG4ucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5ld3ZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUJFMjM7XG4gIHBhZGRpbmc6IDE4cHggNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pbmNpZGVudCBpb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZmZmZjtcbiAgLS1jb2xvcjogI0Y1REU1QjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICNGNURFNUI7XG4gIC0tY29sb3ItZm9jdXNlZDogI0Y1REU1QjtcbiAgLS1jb2xvci1ob3ZlcjogI0Y1REU1Qjtcbn1cblxuLmluY2lkZW50IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICAtLWNvbG9yOiAjRjVERTVCO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtLWNvbG9yLWFjdGl2YXRlZDogI0Y1REU1QjtcbiAgLS1jb2xvci1mb2N1c2VkOiAjRjVERTVCO1xuICAtLWNvbG9yLWhvdmVyOiAjRjVERTVCO1xufVxuXG4ubmV3c2FmdHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLm5ld3NhZnR5IGgyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM1OTJEOEQ7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm5ld3NhZnR5IHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzIyMEUwRTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5ld3JvdyBpb24tZmFiLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdzaGFyZSBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgY29sb3I6ICMyMjBFMEU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5uZXdyb3dzZWMge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyNXB4IGF1dG8gMDtcbn1cblxuLm5ld3Jvd3NlYyBoMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmV3cm93c2VjIGlvbi1mYWItYnV0dG9uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tYmFja2dyb3VuZDogI0Y1RDkzNztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3cm93c2VjIHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzk4OTE5MTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdidG5ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgcGFkZGluZzogMCAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbjpmb2N1cyB7XG4gIG91dGxpbmU6IC13ZWJraXQtZm9jdXMtcmluZy1jb2xvciBhdXRvIDA7XG59XG5cbi5uZXdyZXBvcnQge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIC1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCwgIzU5MkQ4RCkgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICAtLWJhY2tncm91bmQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICM1OTJEOEQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5ub3RkYXRhaW5zaWRlIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjBmODtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzElO1xuICBsZWZ0OiA1JTtcbiAgcmlnaHQ6IDUlO1xufVxuXG4ubm90ZGF0YWluc2lkZSBwIHtcbiAgcGFkZGluZzogMTFweCAxOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1pb3MtaCBpbWcge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4ubm90ZGF0YWluc2lkZSBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU5MkQ4RDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubm90ZGF0YWluIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjBmODtcbiAgY29sb3I6ICMyOTIwMjA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDEwJTtcbiAgcmlnaHQ6IDEwJTtcbn1cblxuLm5vdGRhdGFpbiBwIHtcbiAgcGFkZGluZzogMTRweCAxOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5uZXdvdmVybGFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjRweCAyNHB4IDAgMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5uZXdvdmVybGFwIC50b3BhcnJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHggYXV0byAwO1xuICBjb2xvcjogI0M1QzVDNTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwcHggMCAwIDA7XG59XG5cbi5uZXdvdmVybGFwIC50b3BhcnJvdyBpb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICAtLWluZGljYXRvci1jb2xvcjogIzU5MkQ4RDtcbiAgY29sb3I6ICNmZmY7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjNTkyRDhEO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRUJFMkY1O1xuICBtaW4taGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubmV3c2FmZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzU5MkQ4RDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTkyRDhEO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xuICB3aWR0aDogOTIlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLS1ib3gtc2hhZG93OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvdHRvbTogMjMlO1xuICB6LWluZGV4OiA5OTk7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubmV3c2FmZWluIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtLWJhY2tncm91bmQ6ICNGNURFNUI7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGNURFNUI7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRjVERTVCO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNGNURFNUI7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTogMTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XG4gIHdpZHRoOiA5MiU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICBtYXJnaW46IDAgYXV0bztcbiAgLS1ib3gtc2hhZG93OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAyMyU7XG59XG5cbi5uZXdjYXJkc2lkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNGOEY0RkQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xuICBtYXJnaW4taW5saW5lLWVuZDogMDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4ubmV3Y2FyZHNpZGUgcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyMjBFMEU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ubmV3Y2FyZHNpZGUgaDUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNTkyRDhEICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ubmV3aXRlbW9uZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubmV3aXRlbW9uZSBoMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjMkYxMTUzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared.service */
    "./src/app/shared.service.ts");
    /* harmony import */


    var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/keyboard/ngx */
    "./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _googlemaps_markerclustererplus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @googlemaps/markerclustererplus */
    "./node_modules/@googlemaps/markerclustererplus/dist/index.esm.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__); // import { ViewController } from '@ionic-angular';


    var HomePage = /*#__PURE__*/function () {
      function HomePage(zone, route, toastctrl, shareddata, routerOutlet, formBuilder, httpClient, navController, router, platform, keyboard, translate, modalController) {
        _classCallCheck(this, HomePage);

        // angularComponent = { GoDetail: this.GoDetail, zone: zone }
        // this.platform.backButton.subscribeWithPriority(-1, () => {
        //   if (!this.routerOutlet.canGoBack()) {
        //     App.exitApp();
        //   }
        // });
        this.zone = zone;
        this.route = route;
        this.toastctrl = toastctrl;
        this.shareddata = shareddata;
        this.routerOutlet = routerOutlet;
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.navController = navController;
        this.router = router;
        this.platform = platform;
        this.keyboard = keyboard;
        this.translate = translate;
        this.modalController = modalController;
        this.apiUrl = 'http://101.53.143.7/~dataduck/safecity/api/safecity_report/';
        this.apiUrl1 = 'http://101.53.143.7/~dataduck/safecity_webapp/api/';
        this.segmentModel = "one";
        this.infoWindows = [];
        this.autoaddress = [];
        this.autoadd1 = [];
        this.radius = 3000;
        this.pagename = 'Incit_safety_fr_Home';
        this.incident_remove_marker = [];
        this.safety_remove_marker = [];
        this.hide = false;
        this.show = true;
        this.incidentMarker = 'assets/images/icons/Incident_Icon.svg';
        this.safetyMarker = 'assets/images/icons/Safety_Tip_Icon.svg';
        this.incident = 'incident';
        this.safety = 'safety';
        this.markerClustererList = [];
        this.default_reported_incident_data = [];
        this.latLongData = [];
        this.icident_markersList = [];
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        this.isFilterempty = false;
        this.clearfilter = false;
        this.all_array = [];
        this.address = localStorage.getItem('City_name');
        this.langId = localStorage.getItem('Lang_id');
        this.clientId = localStorage.getItem('Client_id');
        this.searchForm = formBuilder.group({
          location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])]
        });
        var bttn = document.getElementById("Show"); // bttn.onclick = function(){
        // greetings({firstName: myUser1[0], lastName: myUser1[1]});
        // }
      }

      _createClass(HomePage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this2 = this;

          this.subscription = this.platform.backButton.subscribeWithPriority(10, function (processNextHandler) {
            if (new Date().getTime() - _this2.lastTimeBackPress < _this2.timePeriodToExit) {
              navigator['app'].exitApp();
            } else {
              var btn_msg = '';

              _this2.translate.get('press_back_again_to_exit').subscribe(function (res) {
                btn_msg = res;
              }); // var msg = "Press back again to exit."


              _this2.presentToast(btn_msg);

              _this2.lastTimeBackPress = new Date().getTime();
            }
          });
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastctrl.create({
                      message: msg,
                      cssClass: 'tostclass',
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // public viewCtrl: ViewController

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// this.initAutocomplete()
          // this.presentModal()
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(event) {
          if (this.segmentModel == 'one') {
            var _iterator = _createForOfIteratorHelper(this.safety_remove_marker),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var marker = _step.value;
                marker.setMap(null);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.showMap(); // this.getReportedIncident()
          } else {
            var _iterator2 = _createForOfIteratorHelper(this.incident_remove_marker),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _marker = _step2.value;

                _marker.setMap(null);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.showMap();
          }
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this3 = this;

          console.log("Enter called ");
          this.route.queryParams.subscribe(function (params) {
            _this3.pagename1 = params['pagename'];
            _this3.safetyFrom = params['safetyFrom'];
            console.log("pagename1******", _this3.pagename1);
          });
          this.initAutocomplete();
          this.address = localStorage.getItem('City_name');
          var country_name = localStorage.getItem('countryName');
          var value = this.address + ' ' + country_name;
          this.getlatlong(value); // this.showMap()
          /// keyboard events try

          this.keyboard.onKeyboardWillShow().subscribe(function (res) {
            _this3.showFullMap();
          });
          this.keyboard.onKeyboardHide().subscribe(function (res) {
            _this3.hide1();
          });
        } //*****************Filter incident Report by search***************

      }, {
        key: "getReportedIncident",
        value: function getReportedIncident(mapData) {
          var _this4 = this;

          var mapbound = mapData.map_bound;
          var map_zoom = mapData.map_zoom;
          mapbound = JSON.stringify(mapbound); // mapbound = mapbound.map(user => );

          if (this.pagename1 == 'modelpage') {
            console.log("pagename from home", this.pagename1);
            var filter_data = this.shareddata.getCatArray();
            console.log("filter len", filter_data);

            if (filter_data.length > 0) {
              this.address = localStorage.getItem('City_name');
              var data = new FormData();
              data.append('lang_id', this.langId);
              data.append('client_id', this.clientId); //  data.append('city', this.address);

              data.append('map_bound', mapbound);
              data.append('map_zoom', map_zoom);
              this.all_array = this.shareddata.getCatArray();

              if (this.all_array.length > 0) {
                for (var i = 0; i < this.all_array.length; i++) {
                  var timeOfArray = this.all_array[0];
                  var incidentFrom = this.all_array[1];
                  var catIdFrom = this.all_array[3];
                }

                if (this.catId == undefined) {
                  this.catId = '';
                }

                this.incidentFrom = incidentFrom;
                console.log("****", this.all_array.length);
                var all_array_status = this.all_array.length;

                if (all_array_status > 0) {
                  this.catId = catIdFrom.join(',');
                  this.timeOfString = timeOfArray.join(',');
                }

                data.append('reported_on', this.incidentFrom);
                data.append('categories_ids', this.catId);
                data.append('reported_time', this.timeOfString);
              } // this.shareddata.presentLoadingDefault()


              this.shareddata.sharedPostRequest('reported-incidents/map-coordinates', data).subscribe(function (rdata) {
                //this.shareddata.setData(rdata)
                _this4.incidentList = rdata.data;
                _this4.latLongData = [];

                for (var _i = 0; _i < _this4.incidentList.length; _i++) {
                  //this.latLongData.push({ "id": this.incidentList[i].id, 'city': this.incidentList[i].city, "area": this.incidentList[i].area, "lat": parseFloat(this.incidentList[i].latitude), "lng": parseFloat(this.incidentList[i].longitude), "categories": this.incidentList[i].categories, "dateTime": this.ChangeDateFormat(this.incidentList[i].created_on, 1) + " | " + this.timeConvert(this.incidentList[i].time_from), "viewmore_id": this.incidentList[i] })
                  _this4.latLongData.push({
                    "id": _this4.incidentList[_i].id,
                    "lat": parseFloat(_this4.incidentList[_i].latitude),
                    "lng": parseFloat(_this4.incidentList[_i].longitude)
                  });
                }

                var path = 'assets/images/icons/incidents_mobile_cluster_icon';

                _this4.addClusterIncidentMarkersToMap(_this4.latLongData, _this4.incidentMarker, path, _this4.incident);
              }, function (error) {// this.shareddata.loaderDismiss()
              }, function () {// this.shareddata.loaderDismiss()
              }); // this.incidentData = this.shareddata.getData()
              // if (this.incidentData) {
              // this.incidentList = this.incidentData
              // this.latLongData = []
              // for (let i = 0; i < this.incidentList.length; i++) {
              //   this.latLongData.push({ "id": this.incidentList[i].id, 'city': this.incidentList[i].city, "area": this.incidentList[i].area, "lat": parseFloat(this.incidentList[i].latitude), "lng": parseFloat(this.incidentList[i].longitude), "categories": this.incidentList[i].categories, "dateTime": this.ChangeDateFormat(this.incidentList[i].created_on, 1) + " | " + this.timeConvert(this.incidentList[i].time_from), "viewmore_id": this.incidentList[i] })
              //   // this.latLongData.push({ "lat": parseFloat('19.076090'), "lng": parseFloat('72.8777'),'city':'mumbai',"categories":'phycsical asualt',"dateTime": this.ChangeDateFormat('20-11-2020',1)+" | "+ this.timeConvert('00:20:20')})
              // }
              // const path = 'assets/images/icons/incidents_mobile_cluster_icon'
              // this.addClusterIncidentMarkersToMap(this.latLongData, this.incidentMarker, path, this.incident)
              // }
            } else {
              this.address = localStorage.getItem('City_name');

              var _data = new FormData();

              _data.append('lang_id', this.langId);

              _data.append('client_id', this.clientId); //  data.append('city', this.address);


              _data.append('map_bound', mapbound);

              _data.append('map_zoom', map_zoom);

              this.all_array = this.shareddata.getCatArray();

              if (this.all_array.length > 0) {
                for (var _i2 = 0; _i2 < this.all_array.length; _i2++) {
                  var timeOfArray = this.all_array[0];
                  var incidentFrom = this.all_array[1];
                  var catIdFrom = this.all_array[3];
                }

                if (this.catId == undefined) {
                  this.catId = '';
                }

                this.incidentFrom = incidentFrom;
                console.log("****", this.all_array.length);
                var all_array_status = this.all_array.length;

                if (all_array_status > 0) {
                  this.catId = catIdFrom.join(',');
                  this.timeOfString = timeOfArray.join(',');
                }

                _data.append('reported_on', this.incidentFrom);

                _data.append('categories_ids', this.catId);

                _data.append('reported_time', this.timeOfString);
              } // this.shareddata.presentLoadingDefault()


              this.shareddata.sharedPostRequest('reported-incidents/map-coordinates', _data).subscribe(function (rdata) {
                //this.shareddata.setData(rdata)
                _this4.incidentList = rdata.data;
                _this4.latLongData = [];

                for (var _i3 = 0; _i3 < _this4.incidentList.length; _i3++) {
                  //this.latLongData.push({ "id": this.incidentList[i].id, 'city': this.incidentList[i].city, "area": this.incidentList[i].area, "lat": parseFloat(this.incidentList[i].latitude), "lng": parseFloat(this.incidentList[i].longitude), "categories": this.incidentList[i].categories, "dateTime": this.ChangeDateFormat(this.incidentList[i].created_on, 1) + " | " + this.timeConvert(this.incidentList[i].time_from), "viewmore_id": this.incidentList[i] })
                  _this4.latLongData.push({
                    "id": _this4.incidentList[_i3].id,
                    "lat": parseFloat(_this4.incidentList[_i3].latitude),
                    "lng": parseFloat(_this4.incidentList[_i3].longitude)
                  });
                }

                var path = 'assets/images/icons/incidents_mobile_cluster_icon';

                _this4.addClusterIncidentMarkersToMap(_this4.latLongData, _this4.incidentMarker, path, _this4.incident);
              }, function (error) {// this.shareddata.loaderDismiss()
              }, function () {// this.shareddata.loaderDismiss()
              });
            }
          } else {
            this.address = localStorage.getItem('City_name');

            var _data2 = new FormData();

            _data2.append('lang_id', this.langId);

            _data2.append('client_id', this.clientId); //  data.append('city', this.address);


            _data2.append('map_bound', mapbound);

            _data2.append('map_zoom', map_zoom);

            this.all_array = this.shareddata.getCatArray();

            if (this.all_array.length > 0) {
              for (var _i4 = 0; _i4 < this.all_array.length; _i4++) {
                var timeOfArray = this.all_array[0];
                var incidentFrom = this.all_array[1];
                var catIdFrom = this.all_array[3];
              }

              if (this.catId == undefined) {
                this.catId = '';
              }

              this.incidentFrom = incidentFrom;
              console.log("****", this.all_array.length);
              var all_array_status = this.all_array.length;

              if (all_array_status > 0) {
                this.catId = catIdFrom.join(',');
                this.timeOfString = timeOfArray.join(',');
              }

              _data2.append('reported_on', this.incidentFrom);

              _data2.append('categories_ids', this.catId);

              _data2.append('reported_time', this.timeOfString);
            } // this.shareddata.presentLoadingDefault()


            this.shareddata.sharedPostRequest('reported-incidents/map-coordinates', _data2).subscribe(function (rdata) {
              //  this.shareddata.setData(rdata)
              _this4.incidentList = rdata.data;
              _this4.latLongData = [];

              for (var _i5 = 0; _i5 < _this4.incidentList.length; _i5++) {
                //this.latLongData.push({ "id": this.incidentList[i].id, 'city': this.incidentList[i].city, "area": this.incidentList[i].area, "lat": parseFloat(this.incidentList[i].latitude), "lng": parseFloat(this.incidentList[i].longitude), "categories": this.incidentList[i].categories, "dateTime": this.ChangeDateFormat(this.incidentList[i].created_on, 1) + " | " + this.timeConvert(this.incidentList[i].time_from), "viewmore_id": this.incidentList[i] })
                _this4.latLongData.push({
                  "id": _this4.incidentList[_i5].id,
                  "lat": parseFloat(_this4.incidentList[_i5].latitude),
                  "lng": parseFloat(_this4.incidentList[_i5].longitude)
                });
              }

              var path = 'assets/images/icons/incidents_mobile_cluster_icon';

              _this4.addClusterIncidentMarkersToMap(_this4.latLongData, _this4.incidentMarker, path, _this4.incident);
            }, function (error) {// this.shareddata.loaderDismiss()
            }, function () {// this.shareddata.loaderDismiss()
            }); // this.httpClient.post(this.apiUrl1 + 'reported-incidents', data)
            //   .subscribe((rdata: any) => {
            //     console.log("incidents", rdata);
            //     this.shareddata.setData(rdata)
            //     this.incidentList = rdata.data
            //     this.latLongData = []
            //     for (let i = 0; i < this.incidentList.length; i++) {
            //       this.latLongData.push({ "id": this.incidentList[i].id, 'city': this.incidentList[i].city, "area": this.incidentList[i].area, "lat": parseFloat(this.incidentList[i].latitude), "lng": parseFloat(this.incidentList[i].longitude), "categories": this.incidentList[i].categories, "dateTime": this.ChangeDateFormat(this.incidentList[i].created_on, 1) + " | " + this.timeConvert(this.incidentList[i].time_from), "viewmore_id": this.incidentList[i] })
            //       // this.latLongData.push({ "lat": parseFloat('19.076090'), "lng": parseFloat('72.8777'),'city':'mumbai',"categories":'phycsical asualt',"dateTime": this.ChangeDateFormat('20-11-2020',1)+" | "+ this.timeConvert('00:20:20')})
            //     }
            //     console.log("formed array", this.latLongData)
            //     const path = 'assets/images/icons/incidents_mobile_cluster_icon'
            //     this.addClusterIncidentMarkersToMap(this.latLongData, this.incidentMarker, path, this.incident)
            //   }, error => {
            //   });
          }
        } //*****************get saftey tips***************

      }, {
        key: "getSafetyTipsList",
        value: function getSafetyTipsList(mapData) {
          var _this5 = this;

          var mapbound = mapData.map_bound;
          mapbound = JSON.stringify(mapbound);
          var map_zoom = mapData.map_zoom;
          console.log(mapData);

          if (this.pagename1 == 'modelpage') {
            console.log("safetyFrom", this.safetyFrom);
            this.safetyFrom = this.shareddata.getsafetyfiltersdata();
            console.log(this.safetyFrom);

            if (this.safetyFrom != undefined) {
              this.safetyTipData = this.shareddata.getSafetyTipData();
              console.log(" safety list from shared", this.safetyTipData);
              this.address = localStorage.getItem('City_name');
              console.log("clientid", this.clientId);
              console.log("langId", this.langId);
              var data = new FormData();
              data.append('lang_id', this.langId);
              data.append('client_id', this.clientId); // data.append('city', this.address);

              data.append('map_bound', mapbound);
              data.append('map_zoom', map_zoom);

              if (this.shareddata.getsafetyfiltersdata()) {
                data.append('reported_on', this.shareddata.getsafetyfiltersdata());
              } //this.shareddata.presentLoadingDefault()


              this.shareddata.sharedPostRequest('safety-tip/map-coordinates', data).subscribe(function (rdata) {
                _this5.saftyTipsList = rdata;
                console.log('safetyTips', _this5.saftyTipsList);
                _this5.safetyTipList = rdata;

                _this5.shareddata.setSafetyTipData(_this5.safetyTipList);

                _this5.SafetyMarkers = rdata.data;
                console.log(_this5.SafetyMarkers);
                _this5.latLongData = [];

                for (var i = 0; i < _this5.SafetyMarkers.length; i++) {
                  //var time = this.SafetyMarkers[i].added_date.substr(11, 19)
                  //console.log("time*****", time)
                  // this.latLongData.push({ "lat": parseFloat('19.076090'), "lng": parseFloat('72.8777'),'city':'mumbai',"categories":'phycsical asualt',"dateTime": this.ChangeDateFormat('20-11-2020',1)+" | "+ this.timeConvert('00:20:20')})
                  //this.latLongData.push({ "lat": parseFloat(this.SafetyMarkers[i].latitude), "lng": parseFloat(this.SafetyMarkers[i].longitude), title: this.SafetyMarkers[i].safety_tip_title, city: this.SafetyMarkers[i].city, "viewmore_id": this.SafetyMarkers[i], "dateTime": this.ChangeDateFormat(this.SafetyMarkers[i].added_date, 1) + " | " + this.timeConvert(time) })
                  _this5.latLongData.push({
                    "id": _this5.SafetyMarkers[i].id,
                    "lat": parseFloat(_this5.SafetyMarkers[i].latitude),
                    "lng": parseFloat(_this5.SafetyMarkers[i].longitude)
                  });
                }

                var path = 'assets/images/icons/safety_tip_mobile_cluster_icon';

                _this5.addClusterIncidentMarkersToMap(_this5.latLongData, _this5.safetyMarker, path, _this5.safety);
              }, function (error) {// this.shareddata.loaderDismiss()
              }, function () {// this.shareddata.loaderDismiss()
              });
            } else {
              this.address = localStorage.getItem('City_name');
              console.log("clientid", this.clientId);
              console.log("langId", this.langId);

              var _data3 = new FormData();

              _data3.append('lang_id', this.langId);

              _data3.append('client_id', this.clientId); // data.append('city', this.address);


              _data3.append('map_bound', mapbound);

              _data3.append('map_zoom', map_zoom);

              if (this.shareddata.getsafetyfiltersdata()) {
                _data3.append('reported_on', this.shareddata.getsafetyfiltersdata());
              } //this.shareddata.presentLoadingDefault()


              this.shareddata.sharedPostRequest('safety-tip/map-coordinates', _data3).subscribe(function (rdata) {
                _this5.saftyTipsList = rdata;
                console.log('safetyTips', _this5.saftyTipsList);
                _this5.safetyTipList = rdata;

                _this5.shareddata.setSafetyTipData(_this5.safetyTipList);

                _this5.SafetyMarkers = rdata.data;
                console.log(_this5.SafetyMarkers);
                _this5.latLongData = [];

                for (var i = 0; i < _this5.SafetyMarkers.length; i++) {
                  //var time = this.SafetyMarkers[i].added_date.substr(11, 19)
                  //console.log("time*****", time)
                  // this.latLongData.push({ "lat": parseFloat('19.076090'), "lng": parseFloat('72.8777'),'city':'mumbai',"categories":'phycsical asualt',"dateTime": this.ChangeDateFormat('20-11-2020',1)+" | "+ this.timeConvert('00:20:20')})
                  //this.latLongData.push({ "lat": parseFloat(this.SafetyMarkers[i].latitude), "lng": parseFloat(this.SafetyMarkers[i].longitude), title: this.SafetyMarkers[i].safety_tip_title, city: this.SafetyMarkers[i].city, "viewmore_id": this.SafetyMarkers[i], "dateTime": this.ChangeDateFormat(this.SafetyMarkers[i].added_date, 1) + " | " + this.timeConvert(time) })
                  _this5.latLongData.push({
                    "id": _this5.SafetyMarkers[i].id,
                    "lat": parseFloat(_this5.SafetyMarkers[i].latitude),
                    "lng": parseFloat(_this5.SafetyMarkers[i].longitude)
                  });
                }

                var path = 'assets/images/icons/safety_tip_mobile_cluster_icon';

                _this5.addClusterIncidentMarkersToMap(_this5.latLongData, _this5.safetyMarker, path, _this5.safety);
              }, function (error) {// this.shareddata.loaderDismiss()
              }, function () {// this.shareddata.loaderDismiss()
              });
            }
          } else {
            this.address = localStorage.getItem('City_name');
            console.log("clientid", this.clientId);
            console.log("langId", this.langId);

            var _data4 = new FormData();

            _data4.append('lang_id', this.langId);

            _data4.append('client_id', this.clientId); // data.append('city', this.address);


            _data4.append('map_bound', mapbound);

            _data4.append('map_zoom', map_zoom);

            if (this.shareddata.getsafetyfiltersdata()) {
              _data4.append('reported_on', this.shareddata.getsafetyfiltersdata());
            } // this.shareddata.presentLoadingDefault()


            this.shareddata.sharedPostRequest('safety-tip/map-coordinates', _data4).subscribe(function (rdata) {
              _this5.saftyTipsList = rdata;
              console.log('safetyTips', _this5.saftyTipsList);
              _this5.safetyTipList = rdata;

              _this5.shareddata.setSafetyTipData(_this5.safetyTipList);

              _this5.SafetyMarkers = rdata.data;
              console.log(_this5.SafetyMarkers);
              _this5.latLongData = [];

              for (var i = 0; i < _this5.SafetyMarkers.length; i++) {
                //var time = this.SafetyMarkers[i].added_date.substr(11, 19)
                //console.log("time*****", time)
                // this.latLongData.push({ "lat": parseFloat('19.076090'), "lng": parseFloat('72.8777'),'city':'mumbai',"categories":'phycsical asualt',"dateTime": this.ChangeDateFormat('20-11-2020',1)+" | "+ this.timeConvert('00:20:20')})
                //this.latLongData.push({ "lat": parseFloat(this.SafetyMarkers[i].latitude), "lng": parseFloat(this.SafetyMarkers[i].longitude), title: this.SafetyMarkers[i].safety_tip_title, city: this.SafetyMarkers[i].city, "viewmore_id": this.SafetyMarkers[i], "dateTime": this.ChangeDateFormat(this.SafetyMarkers[i].added_date, 1) + " | " + this.timeConvert(time) })
                _this5.latLongData.push({
                  "id": _this5.SafetyMarkers[i].id,
                  "lat": parseFloat(_this5.SafetyMarkers[i].latitude),
                  "lng": parseFloat(_this5.SafetyMarkers[i].longitude)
                });
              }

              var path = 'assets/images/icons/safety_tip_mobile_cluster_icon';

              _this5.addClusterIncidentMarkersToMap(_this5.latLongData, _this5.safetyMarker, path, _this5.safety);
            }, function (error) {// this.shareddata.loaderDismiss()
            }, function () {// this.shareddata.loaderDismiss()
            }); // this.httpClient.post(this.apiUrl1 + 'get-safety-tips', data)
            //   .subscribe((rdata: any) => {
            //     this.saftyTipsList = rdata
            //     console.log('safetyTips', this.saftyTipsList)
            //     this.safetyTipList = rdata
            //     this.shareddata.setSafetyTipData(this.safetyTipList)
            //     this.SafetyMarkers = rdata.data
            //     console.log(this.SafetyMarkers)
            //     this.latLongData = []
            //     for (let i = 0; i < this.SafetyMarkers.length; i++) {
            //       var time = this.SafetyMarkers[i].added_date.substr(11, 19)
            //       console.log("time*****", time)
            //       // this.latLongData.push({ "lat": parseFloat('19.076090'), "lng": parseFloat('72.8777'),'city':'mumbai',"categories":'phycsical asualt',"dateTime": this.ChangeDateFormat('20-11-2020',1)+" | "+ this.timeConvert('00:20:20')})
            //       this.latLongData.push({ "lat": parseFloat(this.SafetyMarkers[i].latitude), "lng": parseFloat(this.SafetyMarkers[i].longitude), title: this.SafetyMarkers[i].safety_tip_title, city: this.SafetyMarkers[i].city, "viewmore_id": this.SafetyMarkers[i], "dateTime": this.ChangeDateFormat(this.SafetyMarkers[i].added_date, 1) + " | " + this.timeConvert(time) })
            //     }
            //     const path = 'assets/images/icons/safety_tip_mobile_cluster_icon'
            //     this.addClusterIncidentMarkersToMap(this.latLongData, this.safetyMarker, path, this.safety)
            //   }, error => {
            //   });
          }
        } //***************************Show map*******************

      }, {
        key: "showMap",
        value: function showMap() {
          var _this6 = this;

          console.log('hi');
          this.lat = localStorage.getItem('latitude');
          this.longi = localStorage.getItem('longitude');
          console.log(this.lat);
          console.log(this.longi);
          var location = new google.maps.LatLng(this.lat, this.longi);
          var options = {
            disableDefaultUI: true,
            //mapTypeControl: true,
            //scaleControl: true,
            zoomControl: true,
            center: location,
            zoom: 13,
            animation: google.maps.Animation.DROP,
            draggable: true,
            streetViewControl: false,
            // disableDefaultUI: true,
            scaleControl: true,
            fullscreenControl: false
          };
          console.log(options); // this.map = new google.maps.Map(this.mapRef.nativeElement, options);

          var map = new google.maps.Map(document.getElementById("map"), options);
          this.map = map;
          console.log("map", map);
          this.map.addListener('idle', function () {
            var zoomLevel = map.getZoom();
            var edgebounds = map.getBounds();
            var ne = edgebounds.getNorthEast(); // Coords of the northeast corner

            var sw = edgebounds.getSouthWest(); // Coords of the southwest corner

            var nw = new google.maps.LatLng(ne.lat(), sw.lng()); // Coords of the NW corner

            var se = new google.maps.LatLng(sw.lat(), ne.lng()); // Coords of the SE corner

            map.setOptions({
              minZoom: 3,
              maxZoom: 45
            }); //creating array to pass in API

            var mapedges = {
              'ne': {
                lat: ne.lat(),
                lng: ne.lng()
              },
              'sw': {
                lat: sw.lat(),
                lng: sw.lng()
              },
              'nw': {
                lat: nw.lat(),
                lng: nw.lng()
              },
              'se': {
                lat: se.lat(),
                lng: se.lng()
              }
            };
            var default_reported_incident_data = {
              'map_zoom': zoomLevel,
              'map_bound': mapedges
            };
            localStorage.setItem('map_zoom', zoomLevel);
            localStorage.setItem('mapBound', JSON.stringify(mapedges)); // this.show = false
            // this.hide = true

            if (_this6.segmentModel == "two") {
              _this6.getSafetyTipsList(default_reported_incident_data);
            } else {
              _this6.getReportedIncident(default_reported_incident_data);
            }
          });
        } //*****************Add marker founded by List***************

      }, {
        key: "addMarkersToMap",
        value: function addMarkersToMap(markers, icon, romove_flag) {
          var _this7 = this;

          console.log("Markers in Add markers", markers);

          var _iterator3 = _createForOfIteratorHelper(markers),
              _step3;

          try {
            var _loop = function _loop() {
              var marker = _step3.value;
              console.log(marker);
              incident_added_date = marker.created_on != null ? marker.created_on : "";
              dayBetween = _this7.days_between(incident_added_date);
              _this7.getDaysAgo = dayBetween > 7 ? _this7.ChangeDateFormat(incident_added_date, 1) : dayBetween == 0 ? 'Today' : dayBetween == 1 ? dayBetween + " day ago" : dayBetween + " days ago";
              console.log(_this7.getDaysAgo);
              marker.show_date = _this7.getDaysAgo;
              id = marker.id; // time convert
              // let time = this.timeConvert(marker.time_from)
              // console.log("Time",time)
              // marker.show_time = time

              var position = new google.maps.LatLng(marker.latitude, marker.longitude);
              var mapMarker = new google.maps.Marker({
                position: position,
                area: marker.area,
                latitude: marker.latitude,
                longitude: marker.longitude,
                animation: 'DROP',
                type: marker.categories,
                date: marker.show_date,
                time: marker.show_time,
                id: marker.id,
                // draggable: true,
                icon: icon
              });
              mapMarker.setMap(_this7.map);

              if (romove_flag == 'incident') {
                _this7.incident_remove_marker.push(mapMarker);
              } else if (romove_flag == 'safety') {
                _this7.safety_remove_marker.push(mapMarker);
              }

              google.maps.event.addListener(mapMarker, 'dragend', function () {
                var _this8 = this;

                console.log(mapMarker);
                var markerlatlong = mapMarker.getPosition();
                console.log("latlong" + markerlatlong);
                console.log("lat" + mapMarker.getPosition().lat());
                console.log("long" + mapMarker.getPosition().lng()); //this.placeMarkerAndPanTo(e.latLng, this.map);

                var lat = JSON.stringify(mapMarker.getPosition().lat());
                var longi = JSON.stringify(mapMarker.getPosition().lng()); // localStorage.setItem('lat', lat)
                // localStorage.setItem('longi', longi)
                //code for getting formatted address from the selected latitude and longitude 

                var geocoder = new google.maps.Geocoder();
                var latlng = {
                  lat: parseFloat(lat),
                  lng: parseFloat(longi)
                };
                geocoder.geocode({
                  location: latlng
                }, function (results, status) {
                  if (status === "OK") {
                    if (results[0]) {
                      _this8.title = results[0].formatted_address;
                      localStorage.setItem('address', _this8.title);
                      console.log(_this8.title); //this.markers = [];

                      var title = localStorage.getItem('address');
                      var lat1 = localStorage.getItem('lati');
                      var longi1 = localStorage.getItem('longit');
                      console.log(title);

                      var _position = new google.maps.LatLng(lat1, longi1);

                      mapMarker.position = _position, mapMarker.title = title, mapMarker.latitude = lat1, mapMarker.longitude = longi1, mapMarker.animation = 'DROP', mapMarker.draggable = true, mapMarker.setMap(_this8.map); //var self = this;

                      _this8.addInfoWindowToMarker(mapMarker);

                      var data = {
                        'latitude': lat1,
                        'longitude': longi1,
                        'title': title
                      };
                      _this8.markers = data;
                      console.log('3', _this8.markers);
                    } else {
                      window.alert("No results found");
                    }
                  } else {
                    window.alert("Geocoder failed due to: " + status);
                  }
                });
              }.bind(_this7));

              _this7.addInfoWindowToMarker(mapMarker);
            };

            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var incident_added_date;
              var dayBetween;
              var id;

              _loop();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } // ******************Get lat & long by Search******************

      }, {
        key: "getlatlong",
        value: function getlatlong(value) {
          var _this9 = this;

          var geocoder = new google.maps.Geocoder();
          var city,
              hascity,
              address = value;
          geocoder.geocode({
            'address': address
          }, function (results) {
            if (results[0].formatted_address) {
              console.log(results);
              _this9.address = JSON.stringify(results[0].formatted_address);
              _this9.lat = JSON.stringify(results[0].geometry.location.lat());
              _this9.longi = JSON.stringify(results[0].geometry.location.lng());
              console.log(_this9.lat);
              console.log(_this9.longi);

              if (_this9.lat != undefined && _this9.longi != undefined) {
                localStorage.setItem('latitude', _this9.lat);
                localStorage.setItem('longitude', _this9.longi);

                _this9.showMap();
              }
            }
          });
        }
      }, {
        key: "getOriginal",
        value: function getOriginal(e) {
          console.log(e.target.value);

          if (e.target.value.length == 0) {
            this.pagename1 = '';
            var cityname = localStorage.getItem('City_name');
            this.getlatlong(e.target.value);
          }
        }
      }, {
        key: "initAutocomplete",
        value: function initAutocomplete() {
          var _this10 = this;

          // Create the autocomplete object, restricting the search predictions to
          // geographical location types.
          this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete').getElementsByTagName('input')[0], {
            types: ["geocode"]
          }); // Avoid paying for data that you don't need by restricting the set of
          // place fields that are returned to just the address components.

          this.autocomplete.setFields(["address_component"]); // When the user selects an address from the drop-down, populate the
          // address fields in the form.

          this.autocomplete.addListener("place_changed", function (fillInAddress) {
            _this10.autoaddress = [];

            _this10.autocomplete.getPlace();

            console.log("autocomplete", _this10.autocomplete.getPlace());

            var autoadd = _this10.autocomplete.getPlace();

            _this10.autoadd1 = autoadd.address_components; // console.log(this.autoadd1[0].long_name)

            for (var i = 0; i < _this10.autoadd1.length; i++) {
              _this10.autoaddress.push(_this10.autoadd1[i].long_name);
            } // this.autoaddress = autoadd.long_name.join(',')


            console.log(_this10.autoaddress);

            var final_result = _this10.autoaddress.join(',');

            console.log(final_result);
            console.log(_this10.autoaddress);
            _this10.searchForm.value.location = ''; //this.searchForm.controls['location'].setValue(final_result)

            _this10.address = _this10.autoadd1[0].long_name;
            console.log("autocomplt", _this10.address);
            _this10.clearfilter = true;
            console.log(_this10.clearfilter);

            _this10.getlatlong(final_result);

            _this10.shareddata.safetyfiltersdata = '';
            _this10.pagename1 = ''; // localStorage.setItem('City_name', this.address)
          }); // this.autocomplete.clearInstanceListeners('autocomplete');
        }
      }, {
        key: "clearInput",
        value: function clearInput(e) {
          jquery__WEBPACK_IMPORTED_MODULE_10__('.pac-container').hide();
        }
      }, {
        key: "setinfo",
        value: function setinfo(id, infowindow, marker) {
          var _this11 = this;

          if (this.segmentModel == 'one') {
            var data = new FormData();
            data.append('incident_id', id); // this.shareddata.presentLoadingDefault()

            this.shareddata.sharedPostRequest('reported-incident/details', data).subscribe(function (rdata) {
              console.log(rdata);
              var infoWindowContent = '<div id="incident1">' + //'<h5 id="firstHeading" class"firstHeading;display:none">' + marker.id + '</h5>' +
              '<p>Type: <span style="font-weight:500; color:#292020;">' + rdata.data.categories + '</span></p>' + '<p>Location: <span style="font-weight:500; color:#292020;">' + rdata.data.city + '</span></p>' + '<p style="float:left;">Date & Time: <span style="font-weight:500; color:#292020;">' + _this11.ChangeDateFormat(rdata.data.incident_date, 1) + " | " + _this11.timeConvert(rdata.data.time_from) + '</span></p>' + '<h5 style="width:100% !important; float:left;margin-bottom: 5px;text-align:left; margin-top:6px; font-size:11px; color:#592D8D !important; font-weight:500;">View more details </h5>' + '</div>'; // return infoWindowContent

              infowindow.setContent(infoWindowContent);

              _this11.infoWindows.push(infowindow);

              _this11.closeAllInfoWindows();

              infowindow.open(_this11.map, marker);
              google.maps.event.addListener(infowindow, 'domready', function () {
                document.getElementById('incident1').addEventListener("click", function () {
                  _this11.zone.run(function () {
                    console.log("hiiiiiii");

                    _this11.getIncidentDetails(rdata);
                  });
                });
              });
            }, function (error) {// this.shareddata.loaderDismiss()
            }, function () {// this.shareddata.loaderDismiss()
            });
          } else {
            var _data5 = new FormData();

            _data5.append('safety_tip_id', id); // this.shareddata.presentLoadingDefault()


            this.shareddata.sharedPostRequest('safety-tip/details', _data5).subscribe(function (rdata) {
              console.log(rdata);
              var time = rdata.data.added_date.substr(11, 19);
              var infoWindowContent = '<div id="safetyTip">' + '<p>Title: <span style="font-weight:500; color:#292020;">' + rdata.data.safety_tip_title + '</span></p>' + '<p>Location: <span style="font-weight:500; color:#292020;">' + rdata.data.city + '</span></p>' + '<p style="float:left;">Date & Time: <span style="font-weight:500; color:#292020;">' + _this11.ChangeDateFormat(rdata.data.added_date, 1) + " | " + _this11.timeConvert(time) + '<h5 style="width:100% !important; float:left;margin-bottom: 5px;text-align:left; margin-top:6px; font-size:11px; color:#592D8D !important; font-weight:500;">View more details </h5>' + '</div>'; // return infoWindowContent

              infowindow.setContent(infoWindowContent);

              _this11.infoWindows.push(infowindow);

              _this11.closeAllInfoWindows();

              infowindow.open(_this11.map, marker);
              google.maps.event.addListener(infowindow, 'domready', function () {
                document.getElementById('safetyTip').addEventListener("click", function () {
                  _this11.zone.run(function () {
                    console.log("hiiiiiii");

                    _this11.getSafetyDetails(rdata);
                  });
                });
              });
            }, function (error) {// this.shareddata.loaderDismiss()
            }, function () {// this.shareddata.loaderDismiss()
            });
          }
        }
      }, {
        key: "addInfoWindowToMarker",
        value: function addInfoWindowToMarker(marker) {
          var _this12 = this;

          this.zone.run(function () {
            console.log("marker", marker);
            console.log("marker", marker.id); // if (this.segmentModel == 'one') {

            console.log("segment", _this12.segmentModel);
            var infoWindow = new google.maps.InfoWindow({});

            _this12.setinfo(marker.id, infoWindow, marker);

            console.log("windowOpen"); // var infoWindowContent = '<div id="incident1">' +
            //    '<h5 id="firstHeading" class"firstHeading;display:none">' + marker.id + '</h5>' +
            //   '<p>Type: <span style="font-weight:500; color:#292020;">' + marker.category + '</span></p>' +
            //   '<p>Location: <span style="font-weight:500; color:#292020;">' + marker.city + '</span></p>' +
            //   '<p style="float:left;">Date & Time: <span style="font-weight:500; color:#292020;">' + marker.dateTime + '</span></p>' +
            //   '<h5 style="width:100% !important; float:left;margin-bottom: 5px;text-align:left; margin-top:6px; font-size:11px; color:#592D8D !important; font-weight:500;">View more details </h5>'
            //   + '</div>';
            // marker.set(marker.id)
            //         marker.addListener('click', (cm) => {
            // console.log(this.id)
            //           console.log("*****", cm)
            //           this.closeAllInfoWindows();
            //           infoWindow.open(this.map, marker);
            //           console.log("windowOpen")
            //         });
            // this.infoWindows.push(infoWindow);
            // google.maps.event.addListener(infoWindow, 'domready', () => {
            //   document.getElementById('incident1').addEventListener("click", () => {
            //     this.zone.run(() => {
            //       this.getIncidentDetails(marker);
            //     })
            //   })
            // })
            // }
            // else {
            //     console.log("segment", this.segmentModel)
            //     let infoWindowContent = '<div id="safetyTip">' +
            //       '<p>Title: <span style="font-weight:500; color:#292020;">' + marker.title + '</span></p>' +
            //       '<p>Location: <span style="font-weight:500; color:#292020;">' + marker.city + '</span></p>' +
            //       '<p style="float:left;">Date & Time: <span style="font-weight:500; color:#292020;">' +
            //       marker.dateTime + '<h5 style="width:100% !important; float:left;margin-bottom: 5px;text-align:left; margin-top:6px; font-size:11px; color:#592D8D !important; font-weight:500;">View more details </h5>'
            //       + '</div>';
            //     let infoWindow = new google.maps.InfoWindow({
            //       content: infoWindowContent,
            //     });
            //     marker.addListener('click', () => {
            //       this.closeAllInfoWindows();
            //       infoWindow.open(this.map, marker);
            //       console.log("windowOpen")
            //     });
            //     google.maps.event.addListener(infoWindow, 'domready', () => {
            //       document.getElementById('safetyTip').addEventListener("click", () => {
            //         this.zone.run(() => {
            //           console.log("marker**", marker)
            //           this.getSafetyDetails(marker);
            //         })
            //       })
            //     })
            // }
          });
        }
      }, {
        key: "closeAllInfoWindows",
        value: function closeAllInfoWindows() {
          var _iterator4 = _createForOfIteratorHelper(this.infoWindows),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _window = _step4.value;

              // this.navController.navigateForward("/detailpopup")
              _window.close();
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }, {
        key: "newmodalin",
        value: function newmodalin() {
          var default_reported_incident_data = {
            'map_zoom': localStorage.getItem('map_zoom'),
            'map_bound': localStorage.getItem('mapBound')
          }; // this.getReportedIncident(default_reported_incident_data)
          // this.getSafetyTipsList(default_reported_incident_data)

          console.log('++++++++++++++', this.clearfilter);
          var navigationExtras = {
            queryParams: {
              segmentModel: this.segmentModel,
              clear_filter: this.clearfilter,
              // incidentList: this.incidentList,
              // safetyTipList: this.safetyTipList,
              pagename: this.pagename
            }
          };
          this.navController.navigateForward(["modelreport"], navigationExtras);
        }
      }, {
        key: "share",
        value: function share() {
          this.navController.navigateForward("/preframingtwo");
        }
      }, {
        key: "legal",
        value: function legal() {
          this.navController.navigateForward("/domesticviolence");
        }
      }, {
        key: "help",
        value: function help() {
          // this.modalController.dismiss('cancel');
          this.navController.navigateForward("help");
        }
      }, {
        key: "menu",
        value: function menu() {
          // this.modalController.dismiss('cancel');
          // this.navController.navigateForward(`/safetyfilter`)
          this.navController.navigateForward("/menu");
        }
      }, {
        key: "safetytip",
        value: function safetytip() {
          this.navController.navigateForward("/safteytipone");
        }
      }, {
        key: "viewsafety",
        value: function viewsafety() {
          this.navController.navigateForward("/viewsafety");
        }
      }, {
        key: "preframing",
        value: function preframing() {
          if (localStorage.getItem('ngo_id') == '0') {
            this.navController.navigateForward("/preframingtwo");
          } else {
            var navigationExtras = {
              queryParams: {}
            };
            this.navController.navigateForward("/ngopartner", navigationExtras);
          }
        }
      }, {
        key: "days_between",
        value: function days_between(date) {
          // The number of milliseconds in one day
          var date1;
          date1 = new Date(date.replace(/ /g, "T"));
          var todays_date;
          todays_date = new Date();
          var ONE_DAY = 1000 * 60 * 60 * 24;
          var differenceMs = Math.abs(todays_date - date1);
          var daydiff = Math.round(differenceMs / ONE_DAY);
          return daydiff;
        }
      }, {
        key: "ChangeDateFormat",
        value: function ChangeDateFormat(date, val) {
          var dayDate = new Date(date.replace(/ /g, "T"));
          var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          var monthName = monthNames[dayDate.getMonth()];
          var monthVal = val == 1 ? monthName.substr(0, 3) : monthName;
          var getDate = dayDate.getDate();
          var getYear = dayDate.getFullYear();
          var format_date = getDate + " " + monthVal + " " + getYear;
          return format_date;
        }
      }, {
        key: "timeConvert",
        value: function timeConvert(time) {
          // console.log("Time in convert ", time)
          // Check correct time format and split into components
          time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

          if (time.length > 1) {
            // If time format correct
            time = time.slice(1); // Remove full string match value

            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM

            time[0] = +time[0] % 12 || 12; // Adjust hours

            var time_array = [];
            time_array.push(time[0]);
            time_array.push(time[1]);
            time_array.push(time[2]);
            time_array.push(time[5]);
          }

          return time_array.join(''); // return adjusted time or original string
        }
      }, {
        key: "showFullMap",
        value: function showFullMap() {
          this.hide = true;
          this.show = false; // console.log("e",map)
        }
      }, {
        key: "hide1",
        value: function hide1() {
          this.hide = false;
          this.show = true;
        }
      }, {
        key: "openModel",
        value: function openModel() {
          console.log("openModel");
        }
      }, {
        key: "incidentViewmore",
        value: function incidentViewmore(e) {
          console.log(e);
        }
      }, {
        key: "addClusterIncidentMarkersToMap",
        value: function addClusterIncidentMarkersToMap(locations, icon, path, type) {
          var _this13 = this;

          console.log(icon);
          console.log(locations);
          this.locations1 = locations;
          var bounds = new google.maps.LatLngBounds();
          var infoWin = new google.maps.InfoWindow();
          var maxZoomService;
          var markersList = [];
          var markers = []; // Add some markers to the map.

          markers = locations.map(function (location, i) {
            var marker = new google.maps.Marker({
              position: location,
              animation: google.maps.Animation.DROP,
              // html: "<span class='map-grey'>Type:</span><span class='map-grey map-dark'>#"+locations[i].incident_id+' '+locations[i].categories+'</span><br>'+"<span class='map-grey'>Location : </span><span class='map-grey map-dark'>"+locations[i].area+', '+locations[i].city+'</span><br>'+"<span class='map-grey'>Date & Time : </span><span class='map-grey map-dark'>"+locations[i].dateTime+'</span>'+'<br><span class="map-grey"><a href="#" data-toggle="modal" data-target="#incident-viewmore'+locations[i].incident_viewmore_id+'">View more details</a></span>',
              icon: icon
            });
            marker.set('id', locations[i].id);
            google.maps.event.addListener(marker, 'click', function () {
              _this13.addInfoWindowToMarker(marker);
            });

            _this13.icident_markersList.push(marker); //   //extend the bounds to include each marker's position


            bounds.extend(marker.position);
            return marker;
          }); // const path = 'assets/images/icons/incidents_mobile_cluster_icon'
          // Options to pass along to the marker clusterer

          var clusterOptions = {
            imagePath: path,
            maxZoom: 20
          };
          console.log("map", this.map);
          console.log("marker", markers);
          console.log("options", clusterOptions); // Add a marker clusterer to manage the markers.

          var markerClusterer = new _googlemaps_markerclustererplus__WEBPACK_IMPORTED_MODULE_8__["default"](this.map, markers, clusterOptions); // console.log("***",markerClusterer)

          this.markerClustererList.push(markerClusterer); // Change styles after cluster is created

          var styles = markerClusterer.getStyles();

          for (var i = 0; i < styles.length; i++) {
            if (type == 'incident') {
              styles[i].textColor = "white";
            } else {
              styles[i].textColor = "black";
            }
          }

          console.log("bounds list", bounds); // this.map.fitBounds(bounds);       // auto-zoom
          // this.map.panToBounds(bounds);     // auto-center
        }
      }, {
        key: "removeMarkers",
        value: function removeMarkers() {
          for (var j = 0; j < this.markerClustererList.length; j++) {
            this.markerClustererList[j].setMap(null);
          }

          for (var i = 0; i < this.icident_markersList.length; i++) {
            this.icident_markersList[i].setMap(null);
          }
        }
      }, {
        key: "getIncidentDetails",
        value: function getIncidentDetails(marker) {
          console.log("marker", marker.data);
          var detail_string = JSON.stringify(marker.data);
          var navigationExtras = {
            queryParams: {
              type: 'incident',
              marker: detail_string
            }
          };
          this.navController.navigateForward(["/detailpopup"], navigationExtras);
        }
      }, {
        key: "getSafetyDetails",
        value: function getSafetyDetails(marker) {
          console.log("marker", marker);
          var detail_string = JSON.stringify(marker.data);
          var navigationExtras = {
            queryParams: {
              type: 'safetyTip',
              marker: detail_string
            }
          };
          this.navController.navigateForward(["/detailpopup"], navigationExtras);
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    })], HomePage.prototype, "mapRef", void 0);
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map