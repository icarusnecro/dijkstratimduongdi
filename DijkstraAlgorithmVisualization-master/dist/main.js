// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../data/graph.json":[function(require,module,exports) {
module.exports = {
  "A": {
    "adjacent": {
      "B": 80,
      "G": 92
    },
    "coordinate": {
      "x": 89,
      "y": 192
    }
  },
  "B": {
    "adjacent": {
      "A": 82,
      "H": 80,
      "C": 70
    },
    "coordinate": {
      "x": 165,
      "y": 197
    }
  },
  "C": {
    "adjacent": {
      "B": 70,
      "I": 60,
      "D": 75
    },
    "coordinate": {
      "x": 239,
      "y": 206
    }
  },
  "D": {
    "adjacent": {
      "C": 75,
      "L": 85,
      "E": 90
    },
    "coordinate": {
      "x": 292,
      "y": 184
    }
  },
  "E": {
    "adjacent": {
      "D": 127,
      "F": 140,
      "S": 300
    },
    "coordinate": {
      "x": 388,
      "y": 161
    }
  },
  "F": {
    "adjacent": {
      "M": 65,
      "E": 140
    },
    "coordinate": {
      "x": 509,
      "y": 143
    }
  },
  "G": {
    "adjacent": {
      "A": 92,
      "H": 98,
      "N": 102
    },
    "coordinate": {
      "x": 80,
      "y": 277
    }
  },
  "H": {
    "adjacent": {
      "I": 65,
      "B": 80,
      "G": 98,
      "O": 102
    },
    "coordinate": {
      "x": 174,
      "y": 285
    }
  },
  "I": {
    "adjacent": {
      "C": 50,
      "H": 65,
      "K": 85,
      "P": 105
    },
    "coordinate": {
      "x": 235,
      "y": 263
    }
  },
  "K": {
    "adjacent": {
      "I": 85,
      "L": 30
    },
    "coordinate": {
      "x": 312,
      "y": 252
    }
  },
  "L": {
    "adjacent": {
      "K": 30,
      "R": 85,
      "D": 90
    },
    "coordinate": {
      "x": 333,
      "y": 250
    }
  },
  "M": {
    "adjacent": {
      "T": 50,
      "F": 65
    },
    "coordinate": {
      "x": 480,
      "y": 215
    }
  },
  "N": {
    "adjacent": {
      "G": 102,
      "O": 102
    },
    "coordinate": {
      "x": 89,
      "y": 379
    }
  },
  "O": {
    "adjacent": {
      "H": 102,
      "N": 102,
      "P": 70
    },
    "coordinate": {
      "x": 183,
      "y": 368
    }
  },
  "P": {
    "adjacent": {
      "Q": 60,
      "O": 65,
      "I": 105
    },
    "coordinate": {
      "x": 248,
      "y": 364
    }
  },
  "Q": {
    "adjacent": {
      "K": 100,
      "P": 60,
      "R": 60,
      "X": 120
    },
    "coordinate": {
      "x": 309,
      "y": 356
    }
  },
  "R": {
    "adjacent": {
      "L": 90,
      "Q": 60,
      "S": 80,
      "R": 140,
    },
    "coordinate": {
      "x": 378,
      "y": 326
    }
  },
  "S": {
    "adjacent": {
      "E": 140,
      "R": 80,
      "T": 50
    },
    "coordinate": {
      "x": 441,
      "y": 284
    }
  },
  "T": {
    "adjacent": {
      "S": 50,
      "M": 40
    },
    "coordinate": {
      "x": 488,
      "y": 266
    }
  },
  "U": {
    "adjacent": {
      "N": 120,
      "V": 140
    },
    "coordinate": {
      "x": 99,
      "y": 466
    }
  },
  "V": {
    "adjacent": {
      "O": 120,
      "U": 140,
      "W": 80,
    },
    "coordinate": {
      "x": 203,
      "y": 466
    }
  },
  "W": {
    "adjacent": {
      "V": 80,
      "X": 80,
      "P": 110
    },
    "coordinate": {
      "x": 260,
      "y": 460
    }
  },
  "X": {
    "adjacent": {
      "W": 80,
      "Q": 120,
      "Z": 80
    },
    "coordinate": {
      "x": 330,
      "y": 455
    }
  },
  "Z": {
    "adjacent": {
      "X": 80,
      "R": 140
    },
    "coordinate": {
      "x": 430,
      "y": 430
    }
  }
};
},{}],"canvas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Canvas = /*#__PURE__*/function () {
  function Canvas(reference, states, style) {
    _classCallCheck(this, Canvas);

    this.reference = reference;
    this.states = states;
    this.style = style;
    this.context = reference.getContext("2d");
    this.pinList = [];
    this.visitedNode = [];
    this.shortestPath = [];
  }

  _createClass(Canvas, [{
    key: "drawGrid",
    value: function drawGrid() {
      for (var i = 0; i <= this.style.width; i++) {
        i += 10;
        this.context.strokeStyle = "#ccc";
        this.context.beginPath();
        this.context.moveTo(0, i);
        this.context.lineTo(this.style.width, i);
        this.context.stroke();
      }

      for (var _i = 0; _i <= this.style.height; _i++) {
        _i += 10;
        this.context.beginPath();
        this.context.moveTo(_i, 0);
        this.context.lineTo(_i, this.style.height);
        this.context.stroke();
      }
    }
  }, {
    key: "createNode",
    value: function createNode() {
      for (var state in this.states) {
        var x = 0,
            y = 0;
        x = this.states[state]["coordinate"]["x"];
        y = this.states[state]["coordinate"]["y"];
        this.drawCircle({
          x: x,
          y: y,
          state: state,
          radius: this.style.nodeRadius,
          color: this.style.nodeColor
        });
        this.write({
          state: state,
          x: x,
          y: y,
          color: this.style.nodeColor
        });
      }
    }
  }, {
    key: "createEdge",
    value: function createEdge(startingNode) {
      /* createEdge will perform breadth first search 
        to reach out all nodes and form edge between them
        */
      var visitedNodeList = [],
          queue = [];
      queue.push(startingNode);
      visitedNodeList[startingNode] = true;

      while (queue.length > 0) {
        var adjacentList = [];
        var queueElement = queue.shift();

        for (var adjacent in this.states[queueElement].adjacent) {
          adjacentList.push(adjacent);
        }

        for (var index in adjacentList) {
          var neighbor = adjacentList[index];
          this.drawLine({
            start: this.states[queueElement].coordinate,
            end: this.states[neighbor].coordinate,
            color: this.style.edgeColor,
            width: this.style.edgeWidth
          });

          if (!visitedNodeList[neighbor]) {
            visitedNodeList[neighbor] = true;
            queue.push(neighbor);
          }
        }
      }
    }
  }, {
    key: "drawCircle",
    value: function drawCircle(dimension) {
      var startingAngle = 0,
          endingAngle = 2 * Math.PI;
      this.context.fillStyle = dimension.color;
      this.context.beginPath();
      this.context.arc(dimension.x, dimension.y, dimension.radius, startingAngle, endingAngle);
      this.context.fill();
    }
  }, {
    key: "drawLine",
    value: function drawLine(dimension) {
      this.context.lineWidth = dimension.width;
      this.context.strokeStyle = dimension.color;
      this.context.beginPath();
      this.context.moveTo(dimension.start.x, dimension.start.y);
      this.context.lineTo(dimension.end.x, dimension.end.y);
      this.context.stroke();
    }
  }, {
    key: "write",
    value: function write(dimension) {
      this.context.strokeStyle = dimension.color;
      this.context.strokeText(dimension.state, dimension.x - 5, dimension.y - 10);
    }
  }, {
    key: "clicked",
    value: function clicked(mouseX, mouseY) {
      for (var state in this.states) {
        var isNodeClicked = this.checkClick(mouseX, mouseY, state);

        if (isNodeClicked) {
          return this.pinSourceAndDestination(state);
          break;
        }
      }

      return false;
    }
  }, {
    key: "checkClick",
    value: function checkClick(mouseX, mouseY, state) {
      var radiusOfNode = 6;
      var maximumX = 0,
          maximumY = 0,
          minimumX = 0,
          minimumY = 0,
          distance = 0;
      var stateX = this.states[state].coordinate.x;
      var stateY = this.states[state].coordinate.y;
      maximumX = stateX + 6;
      maximumY = stateY + 6;
      minimumX = stateX - 6;
      minimumY = stateY - 6;

      if (mouseX <= maximumX && mouseX >= minimumX && mouseY <= maximumY && mouseY >= minimumY) {
        distance = this.calculateDistance(stateX, stateY, mouseX, mouseY);

        if (distance <= radiusOfNode) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "calculateDistance",
    value: function calculateDistance(x1, y1, x2, y2) {
      var a = x2 - x1;
      var b = y2 - y1;
      return Math.sqrt(a * a - b * b);
    }
  }, {
    key: "pinSourceAndDestination",
    value: function pinSourceAndDestination(node) {
      if (this.pinList.length < 2) {
        this.pinList.push(node);
        this.drawCircle({
          x: this.states[node].coordinate.x,
          y: this.states[node].coordinate.y,
          radius: this.style.nodeRadius,
          color: this.style.pinNodeColor
        });

        if (this.pinList.length === 2) {
          return true;
        }
      } else {
        this.drawCircle({
          x: this.states[this.pinList[0]].coordinate.x,
          y: this.states[this.pinList[0]].coordinate.y,
          radius: this.style.nodeRadius,
          color: this.style.pinNodeColor
        });
        this.pinList.shift();
        this.pinList.push(node);
        this.drawCircle({
          x: this.states[node].coordinate.x,
          y: this.states[node].coordinate.y,
          radius: this.style.nodeRadius,
          color: "black"
        });
        return true;
      }

      return false;
    }
  }, {
    key: "visualize",
    value: function visualize(visitedNode, shortestPath) {
      this.visitedNode = visitedNode;
      this.shortestPath = shortestPath;
      this.displayVisitedNode();
    }
  }, {
    key: "displayVisitedNode",
    value: function displayVisitedNode() {
      var _this = this;

      var index = 0;
      var interval = setInterval(function () {
        var start = null;

        if (index < _this.visitedNode.length) {
          start = {
            x: _this.states[_this.visitedNode[index]].coordinate.x,
            y: _this.states[_this.visitedNode[index]].coordinate.y
          };

          _this.drawCircle({
            x: start.x,
            y: start.y,
            radius: _this.style.nodeRadius,
            color: _this.style.visitedNodeColor
          });

          index++;
        } else {
          clearInterval(interval);

          _this.displayShortestPath();
        }
      }, 500);
    }
  }, {
    key: "displayShortestPath",
    value: function displayShortestPath() {
      var _this2 = this;

      this.shortestPath.forEach(function (state, index) {
        var _ref = [null],
            start = _ref[0],
            end = _ref[1],
            secondState = _ref[2];
        secondState = _this2.shortestPath[index + 1];
        start = {
          x: _this2.states[state].coordinate.x,
          y: _this2.states[state].coordinate.y
        };

        _this2.drawCircle({
          x: start.x,
          y: start.y,
          radius: _this2.style.nodeRadius,
          color: _this2.style.pathColor
        });

        if (index !== _this2.shortestPath.length - 1) {
          end = {
            x: _this2.states[secondState].coordinate.x,
            y: _this2.states[secondState].coordinate.y
          };

          _this2.drawLine({
            start: start,
            end: end,
            color: _this2.style.pathColor,
            width: _this2.style.pathWidth
          });
        }
      });
    }
  }]);

  return Canvas;
}();

var _default = Canvas;
exports.default = _default;
},{}],"priorityqueue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PriorityQueue = /*#__PURE__*/function () {
  function PriorityQueue(node) {
    _classCallCheck(this, PriorityQueue);

    this.list = [];
  }

  _createClass(PriorityQueue, [{
    key: "enqueue",
    value: function enqueue(node, cost) {
      this.list.push({
        node: node,
        cost: cost
      });
      this.sort();
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this.list.shift();
    }
  }, {
    key: "sort",
    value: function sort() {
      this.list.sort(function (a, b) {
        return a.cost - b.cost;
      });
    }
  }]);

  return PriorityQueue;
}();

exports.default = PriorityQueue;
},{}],"dijkstra.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graph = _interopRequireDefault(require("../data/graph.json"));

var _priorityqueue = _interopRequireDefault(require("./priorityqueue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dijkstra = /*#__PURE__*/function () {
  function Dijkstra(source, destination) {
    _classCallCheck(this, Dijkstra);

    this.source = source;
    this.destination = destination;
    this.adjacencyList = _graph.default;
    this.costFromSource = new Map();
    this.previousNodeList = new Map();
    this.unvisitedNode = new _priorityqueue.default();
    this.visitedNode = [];
    this.result = [];
    this.current;
  }

  _createClass(Dijkstra, [{
    key: "initialization",
    value: function initialization() {
      for (var node in this.adjacencyList) {
        if (node === this.source) {
          this.costFromSource[node] = 0;
          this.unvisitedNode.enqueue(node, 0);
        } else {
          this.costFromSource[node] = Infinity;
        }

        this.previousNodeList[node] = null;
      }
    }
  }, {
    key: "getShortestPath",
    value: function getShortestPath() {
      this.initialization();

      while (this.unvisitedNode.list.length) {
        this.current = this.unvisitedNode.dequeue().node;
        this.visitedNode.push(this.current);

        if (this.current === this.destination) {
          while (this.previousNodeList[this.current]) {
            this.result.push(this.current);
            this.current = this.previousNodeList[this.current];
          }

          break;
        } else {
          for (var adjacent in this.adjacencyList[this.current]["adjacent"]) {
            var costToAdjacent = this.costFromSource[this.current] + this.adjacencyList[this.current]["adjacent"][adjacent];

            if (costToAdjacent < this.costFromSource[adjacent]) {
              this.costFromSource[adjacent] = costToAdjacent;
              this.previousNodeList[adjacent] = this.current;
              this.unvisitedNode.enqueue(adjacent, costToAdjacent);
            }
          }
        }
      }

      return {
        shortestPath: this.result.concat(this.current).reverse(),
        visitedNode: this.visitedNode
      };
    }
  }]);

  return Dijkstra;
}();

var _default = Dijkstra;
exports.default = _default;
},{"../data/graph.json":"../data/graph.json","./priorityqueue":"priorityqueue.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _graph = _interopRequireDefault(require("../data/graph.json"));

var _canvas = _interopRequireDefault(require("./canvas"));

var _dijkstra = _interopRequireDefault(require("./dijkstra"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domElement = document.querySelector("canvas");
var clear = document.querySelector("button");
var startingNode = "A";
var style = {
  width: 700,
  height: 700,
  nodeColor: "white",
  visitedNodeColor: "black",
  nodeRadius: 6,
  edgeColor: "white",
  edgeWidth: 1,
  pathColor: "blue",
  pathWidth: 2.5,
  pinNodeColor: "green"
};
var canvas = new _canvas.default(domElement, _graph.default, style);
canvas.createNode();
canvas.createEdge(startingNode);
canvas.reference.addEventListener("click", function (e) {
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;
  var clicked = canvas.clicked(mouseX, mouseY);

  if (clicked) {
    var source = canvas.pinList[0],
        destination = canvas.pinList[1];
    var dijkstra = new _dijkstra.default(source, destination);

    var _dijkstra$getShortest = dijkstra.getShortestPath(),
        shortestPath = _dijkstra$getShortest.shortestPath,
        visitedNode = _dijkstra$getShortest.visitedNode;

    canvas.visualize(visitedNode, shortestPath);
  }
});
clear.addEventListener("click", function () {
  window.location.reload();
});
},{"../data/graph.json":"../data/graph.json","./canvas":"canvas.js","./dijkstra":"dijkstra.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42091" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.js.map