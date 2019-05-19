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
})({"index.js":[function(require,module,exports) {
window.onload = function () {
  //十六进制颜色值的正则表达式  
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  var arr = [{
    data1: 720,
    data2: 678,
    color: '#7596F5',
    title: '张三'
  }, {
    data1: 342,
    data2: 678,
    color: '#EE7668',
    title: '李四'
  }, {
    data1: 1000,
    data2: 0,
    color: '#7CBEF8',
    title: '王五'
  }, {
    data1: 111,
    data2: 678,
    color: '#F3A263',
    title: '赵六'
  }, {
    data1: 111,
    data2: 678,
    color: '#FFC0CB',
    title: '龙七'
  }, {
    data1: 0,
    data2: 0,
    color: '#FFC0CB',
    title: '凤八'
  }];

  String.prototype.colorRgb = function (opacity) {
    var sColor = this.toLowerCase();

    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        var sColorNew = "#";

        for (var i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }

        sColor = sColorNew;
      } //处理六位的颜色值  


      var sColorChange = [];

      for (var i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
      }

      if (opacity) {
        return "rgba(".concat(sColorChange.join(","), ",").concat(opacity, ")");
      } else {
        return "rgb(" + sColorChange.join(",") + ")";
      }
    } else {
      return sColor;
    }
  };

  var cas = document.querySelector('#cas'),
      ctx = cas.getContext('2d');
  var paintFn = {
    // 画图的方法
    line: function line(v) {
      // 横线
      if (!v.data1) ctx.strokeStyle = bg_arc;else ctx.strokeStyle = v.color.colorRgb(.5);
      ctx.beginPath();
      ctx.lineWidth = .01 * doc_fontSize;
      ctx.moveTo(2 * x + 5, 2 * (y - r)); //横线的起点

      ctx.lineTo(2 * (x + line_width + 5), 2 * (y - r)); //横线的终点

      ctx.stroke();
    },
    bgArc: function bgArc(sAngle, eAngle) {
      // 背景圆弧
      ctx.beginPath();
      ctx.lineWidth = arc_width;
      ctx.strokeStyle = bg_arc;
      ctx.arc(2 * x, 2 * y, 2 * r, sAngle, (-2 + d_angle) * Math.PI, true);
      ctx.stroke();
    },
    dataArc: function dataArc(v, sAngle, eAngle) {
      // 数据圆弧
      var grd = ctx.createLinearGradient(2 * (x - r), 0, 2 * (x + r), 2 * (y + r));
      grd.addColorStop(0, v.color.colorRgb(1));
      grd.addColorStop(1, v.color.colorRgb(.3));

      if (v.data1) {
        ctx.beginPath();
        ctx.strokeStyle = grd;
        ctx.arc(2 * x, 2 * y, 2 * r, sAngle, eAngle, true);
        ctx.stroke();
      }
    },
    iconArc: function iconArc(v) {
      // 图标圆
      if (!v.data1) ctx.strokeStyle = 'rgba(0,0,0,.1)';
      ctx.lineWidth = 2 * 2;
      ctx.beginPath();
      ctx.arc(2 * (x + line_width + 10), 2 * (y - r), 2 * 2.5, -.5 * Math.PI, -2.5 * Math.PI, true);
      ctx.stroke();
    },
    className: function className(v) {
      // 数据名
      ctx.beginPath();
      ctx.font = "".concat(.18 * doc_fontSize, "px normal PingFangSC-Regular");
      if (!v.data1) ctx.fillStyle = 'rgba(0,0,0,.1)';else ctx.fillStyle = '#000';
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(v.title, 2 * (x + line_width + 17.5), 2 * (y - r));
    },
    dataOne: function dataOne(v) {
      // 数据值1
      ctx.beginPath();
      ctx.font = "".concat(.18 * doc_fontSize, "px normal PingFangSC-Regular");
      if (!v.data1) ctx.fillStyle = 'rgba(0,0,0,.1)';else ctx.fillStyle = '#000';
      ctx.textAlign = "left";
      ctx.textBaseline = "middle"; // ctx.fillText(`${v.data1 == 0 ? '' : v.data1}万`, 2 * (x + line_width + v.title.length * .1 * doc_fontSize + 20), 2 * (y - r));

      ctx.fillText("".concat(v.data1 == 0 ? '' : v.data1, "\u4E07"), 2 * (x + line_width + 45), 2 * (y - r));
    },
    lineTwo: function lineTwo(v) {
      // 间隔线
      if (v.data1) {
        ctx.strokeStyle = 'rgba(0,0,0,.2)';
        ctx.beginPath();
        ctx.lineWidth = 1; // ctx.moveTo(2 * (x + line_width + v.title.length * .18 * doc_fontSize + (v.data1 + '').length * .1055 * doc_fontSize + 5), 2 * (y - r + 10 / 2 - 12))
        // ctx.lineTo(2 * (x + line_width + v.title.length * .18 * doc_fontSize + (v.data1 + '').length * .1055 * doc_fontSize + 5), 2 * (y - r + 10 / 2))

        ctx.moveTo(2 * (x + line_width + 85), 2 * (y - r + 10 / 2 - 12));
        ctx.lineTo(2 * (x + line_width + 85), 2 * (y - r + 10 / 2));
        ctx.stroke();
      }
    },
    dataTwo: function dataTwo(v) {
      // 数据值2
      if (v.data1) {
        ctx.beginPath();
        ctx.font = "".concat(.18 * doc_fontSize, "px normal PingFangSC-Regular");
        ctx.fillStyle = 'rgba(0,0,0,.5)';
        ctx.textAlign = "left";
        ctx.textBaseline = "middle"; // ctx.fillText(`缺口${v.data2}万`, 2 * (x + line_width + v.title.length * .18 * doc_fontSize + (v.data1 + '').length * .1055 * doc_fontSize + 10), 2 * (y - r));

        ctx.fillText("\u7F3A\u53E3 ".concat(v.data2, "\u4E07"), 2 * (x + line_width + 95), 2 * (y - r));
      }
    }
  };
  var r = 20,
      // 圆的半径
  r_r = 15,
      // 圆半径的递增量
  angle = .25,
      // 起点弧度
  d_angle = .05,
      //偏移弧度
  x = 0,
      // 初始化圆的中心点坐标x轴
  y = 0,
      // 初始化圆的中心点坐标y轴
  line_width = 35,
      //横线的宽度 (单位px)
  bg_arc = '#F7F7F7',
      // 背景圆弧的颜色
  arc_width = 6 * 2; // 圆弧的宽度

  var getEndAngle = function getEndAngle(data1, data2, angle, deviation_angle) {
    return -(data1 / (data1 + data2) * 1.5 + angle * 2 - deviation_angle) * Math.PI;
  };

  var doc_fontSize = 0;

  var rem = function rem() {
    var width = document.body.offsetWidth;

    if (width < 320) {
      width = 320;
    }

    var htmlFontSize = width / 320 * 100;
    doc_fontSize = htmlFontSize;
    window.document.documentElement.style.fontSize = "".concat(htmlFontSize, "px");
  };

  var canvasFun = function canvasFun(arr) {
    r = 20; //重置圆的半径

    d_angle = .05; //重置偏移弧度

    cas.width = document.body.offsetWidth * 2; //画布的宽度

    cas.height = document.body.offsetWidth * 2; //画布的高度

    document.querySelector('#cas').style.width = '100%';
    ctx.lineCap = "round"; //拐角补偿为圆弧

    x = y = (arr.length - 1) * r_r + r + r_r / 2; //通过数据量计算出的圆的中心点坐标x轴

    console.log(x, y, r);
    arr.forEach(function (v) {
      var sAngle = (-.5 + d_angle) * Math.PI,
          eAngle = getEndAngle(v.data1, v.data2, angle, d_angle);
      paintFn.line(v);
      /* 横线 */

      paintFn.bgArc(sAngle);
      /* 背景圆弧 */

      paintFn.dataArc(v, sAngle, eAngle);
      /* 数据圆弧 */

      paintFn.iconArc(v);
      /* 横线后的圆 */

      paintFn.className(v);
      /* 名称 */

      paintFn.dataOne(v);
      /* 数据1 */

      paintFn.lineTwo(v);
      /* 间隔线 */

      paintFn.dataTwo(v);
      /* 数据2 */

      r += r_r;
      d_angle += .0005;
    });
  };

  rem();
  canvasFun(arr);
  window.addEventListener('resize', function () {
    rem();
    canvasFun(arr);
  });
};
},{}],"C:/Users/Administrator/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "9029" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["C:/Users/Administrator/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/canvas.e31bb0bc.js.map