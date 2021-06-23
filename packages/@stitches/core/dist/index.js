if (typeof globalThis === 'undefined') window.globalThis = window;

const isIE11 = typeof window !== `undefined` && !!window.MSInputMethodContext;
const Symbol = isIE11
  ? {
      for(x) {
        return x;
      },
      iterator: '__symbol:iterator0.97589819915729773',
    }
  : globalThis.Symbol;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e25) { throw _e25; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e26) { didErr = true; err = _e26; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var e,
    t = {
  all: "all"
},
    n = "colors",
    i = "sizes",
    r = "space",
    o = {
  gap: r,
  gridGap: r,
  columnGap: r,
  gridColumnGap: r,
  rowGap: r,
  gridRowGap: r,
  inset: r,
  insetBlock: r,
  insetBlockEnd: r,
  insetBlockStart: r,
  insetInline: r,
  insetInlineEnd: r,
  insetInlineStart: r,
  margin: r,
  marginTop: r,
  marginRight: r,
  marginBottom: r,
  marginLeft: r,
  marginBlock: r,
  marginBlockEnd: r,
  marginBlockStart: r,
  marginInline: r,
  marginInlineEnd: r,
  marginInlineStart: r,
  padding: r,
  paddingTop: r,
  paddingRight: r,
  paddingBottom: r,
  paddingLeft: r,
  paddingBlock: r,
  paddingBlockEnd: r,
  paddingBlockStart: r,
  paddingInline: r,
  paddingInlineEnd: r,
  paddingInlineStart: r,
  top: r,
  right: r,
  bottom: r,
  left: r,
  scrollMargin: r,
  scrollMarginTop: r,
  scrollMarginRight: r,
  scrollMarginBottom: r,
  scrollMarginLeft: r,
  scrollMarginX: r,
  scrollMarginY: r,
  scrollMarginBlock: r,
  scrollMarginBlockEnd: r,
  scrollMarginBlockStart: r,
  scrollMarginInline: r,
  scrollMarginInlineEnd: r,
  scrollMarginInlineStart: r,
  scrollPadding: r,
  scrollPaddingTop: r,
  scrollPaddingRight: r,
  scrollPaddingBottom: r,
  scrollPaddingLeft: r,
  scrollPaddingX: r,
  scrollPaddingY: r,
  scrollPaddingBlock: r,
  scrollPaddingBlockEnd: r,
  scrollPaddingBlockStart: r,
  scrollPaddingInline: r,
  scrollPaddingInlineEnd: r,
  scrollPaddingInlineStart: r,
  fontSize: "fontSizes",
  background: n,
  backgroundColor: n,
  backgroundImage: n,
  border: n,
  borderBlock: n,
  borderBlockEnd: n,
  borderBlockStart: n,
  borderBottom: n,
  borderBottomColor: n,
  borderColor: n,
  borderInline: n,
  borderInlineEnd: n,
  borderInlineStart: n,
  borderLeft: n,
  borderLeftColor: n,
  borderRight: n,
  borderRightColor: n,
  borderTop: n,
  borderTopColor: n,
  caretColor: n,
  color: n,
  columnRuleColor: n,
  fill: n,
  outline: n,
  outlineColor: n,
  stroke: n,
  textDecorationColor: n,
  fontFamily: "fonts",
  fontWeight: "fontWeights",
  lineHeight: "lineHeights",
  letterSpacing: "letterSpacings",
  blockSize: i,
  minBlockSize: i,
  maxBlockSize: i,
  inlineSize: i,
  minInlineSize: i,
  maxInlineSize: i,
  width: i,
  minWidth: i,
  maxWidth: i,
  height: i,
  minHeight: i,
  maxHeight: i,
  flexBasis: i,
  gridTemplateColumns: i,
  gridTemplateRows: i,
  borderWidth: "borderWidths",
  borderTopWidth: "borderWidths",
  borderRightWidth: "borderWidths",
  borderBottomWidth: "borderWidths",
  borderLeftWidth: "borderWidths",
  borderStyle: "borderStyles",
  borderTopStyle: "borderStyles",
  borderRightStyle: "borderStyles",
  borderBottomStyle: "borderStyles",
  borderLeftStyle: "borderStyles",
  borderRadius: "radii",
  borderTopLeftRadius: "radii",
  borderTopRightRadius: "radii",
  borderBottomRightRadius: "radii",
  borderBottomLeftRadius: "radii",
  boxShadow: "shadows",
  textShadow: "shadows",
  transition: "transitions",
  zIndex: "zIndices"
},
    l = function l(e, t) {
  return "function" == typeof t ? {
    "()": Function.prototype.toString.call(t)
  } : t;
},
    s = function s() {
  var e = Object.create(null);
  return function (t, n) {
    var r = function (e) {
      return JSON.stringify(e, l);
    }(t);

    for (var _len = arguments.length, i = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      i[_key - 2] = arguments[_key];
    }

    return r in e ? e[r] : e[r] = n.apply(void 0, [t].concat(i));
  };
},
    a = Symbol.for("sxs.composers"),
    c = function c(e, t) {
  return Object.defineProperties(e, Object.getOwnPropertyDescriptors(t));
},
    d = function d(e) {
  for (var _t in e) {
    return !0;
  }

  return !1;
},
    g = Object.prototype.hasOwnProperty,
    u = function u(e) {
  return e.includes("-") ? e : e.replace(/[A-Z]/g, function (e) {
    return "-" + e.toLowerCase();
  });
},
    p = /\s+(?![^()]*\))/,
    h = function h(e) {
  return function (t) {
    return e.apply(void 0, _toConsumableArray("string" == typeof t ? String(t).split(p) : [t]));
  };
},
    f = {
  appearance: function appearance(e) {
    return {
      WebkitAppearance: e,
      appearance: e
    };
  },
  backfaceVisibility: function backfaceVisibility(e) {
    return {
      WebkitBackfaceVisibility: e,
      backfaceVisibility: e
    };
  },
  backdropFilter: function backdropFilter(e) {
    return {
      WebkitBackdropFilter: e,
      backdropFilter: e
    };
  },
  backgroundClip: function backgroundClip(e) {
    return {
      WebkitBackgroundClip: e,
      backgroundClip: e
    };
  },
  boxDecorationBreak: function boxDecorationBreak(e) {
    return {
      WebkitBoxDecorationBreak: e,
      boxDecorationBreak: e
    };
  },
  clipPath: function clipPath(e) {
    return {
      WebkitClipPath: e,
      clipPath: e
    };
  },
  content: function content(e) {
    return {
      content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : "\"".concat(e, "\"")
    };
  },
  hyphens: function hyphens(e) {
    return {
      WebkitHyphens: e,
      hyphens: e
    };
  },
  maskImage: function maskImage(e) {
    return {
      WebkitMaskImage: e,
      maskImage: e
    };
  },
  tabSize: function tabSize(e) {
    return {
      MozTabSize: e,
      tabSize: e
    };
  },
  userSelect: function userSelect(e) {
    return {
      WebkitUserSelect: e,
      userSelect: e
    };
  },
  marginBlock: h(function (e, t) {
    return {
      marginBlockStart: e,
      marginBlockEnd: t || e
    };
  }),
  marginInline: h(function (e, t) {
    return {
      marginInlineStart: e,
      marginInlineEnd: t || e
    };
  }),
  maxSize: h(function (e, t) {
    return {
      maxBlockSize: e,
      maxInlineSize: t || e
    };
  }),
  minSize: h(function (e, t) {
    return {
      minBlockSize: e,
      minInlineSize: t || e
    };
  }),
  paddingBlock: h(function (e, t) {
    return {
      paddingBlockStart: e,
      paddingBlockEnd: t || e
    };
  }),
  paddingInline: h(function (e, t) {
    return {
      paddingInlineStart: e,
      paddingInlineEnd: t || e
    };
  })
},
    m = /([\d.]+)([^]*)/,
    b = function b(e, t) {
  return e.length ? e.reduce(function (e, n) {
    return e.push.apply(e, _toConsumableArray(t.map(function (e) {
      return e.includes("&") ? e.replace(/&/g, /[ +>|~]/.test(n) && /&.*&/.test(e) ? ":is(".concat(n, ")") : n) : n + " " + e;
    }))), e;
  }, []) : t;
},
    S = function S(e, t) {
  return e in k && "string" == typeof t ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, function (t, n, i, r) {
    return n + ("stretch" === i ? "-moz-available".concat(r, ";").concat(e, ":").concat(n, "-webkit-fill-available") : "-moz-fit-content".concat(r, ";").concat(e, ":").concat(n, "fit-content")) + r;
  }) : String(t);
},
    k = {
  blockSize: 1,
  height: 1,
  inlineSize: 1,
  maxBlockSize: 1,
  maxHeight: 1,
  maxInlineSize: 1,
  maxWidth: 1,
  minBlockSize: 1,
  minHeight: 1,
  minInlineSize: 1,
  minWidth: 1,
  width: 1
},
    y = function y(e) {
  return e ? e + "-" : "";
},
    B = function B(e, t, n) {
  return e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, function (e, i, r, o, l) {
    return "$" == o == !!r ? e : (i || "--" == o ? "calc(" : "") + "var(--" + ("$" === o ? y(t) + (l.includes("$") ? "" : y(n)) + l.replace(/\$/g, "-") : l) + ")" + (i || "--" == o ? "*" + (i || "") + (r || "1") + ")" : "");
  });
},
    R = /\s*,\s*(?![^()]*\))/,
    $ = Object.prototype.toString,
    x = function x(e, t, n, i, r) {
  var o, l, s;

  var a = function a(e, t, n) {
    var c, d;

    var g = function g(e) {
      for (c in e) {
        var _k = 64 === c.charCodeAt(0),
            _x = _k && Array.isArray(e[c]) ? e[c] : [e[c]];

        var _iterator = _createForOfIteratorHelper(_x),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            d = _step.value;

            var _e = "object" == _typeof(d) && d && d.toString === $,
                _x2 = /[A-Z]/.test(h = c) ? h : h.replace(/-[^]/g, function (e) {
              return e[1].toUpperCase();
            });

            if (_x2 in i.utils) {
              var _e2 = i.utils[_x2];

              if (_e2 !== l) {
                l = _e2, g(_e2(i)(d)), l = null;
                continue;
              }
            } else if (_x2 in f) {
              var _e3 = f[_x2];

              if (_e3 !== s) {
                s = _e3, g(_e3(d)), s = null;
                continue;
              }
            }

            if (_k && (p = c.slice(1) in i.media ? "@media " + i.media[c.slice(1)] : c, c = p.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, function (e, t, n, i, r, o) {
              var l = m.test(t),
                  s = .0625 * (l ? -1 : 1),
                  _ref = l ? [i, t] : [t, i],
                  _ref2 = _slicedToArray(_ref, 2),
                  a = _ref2[0],
                  c = _ref2[1];

              return "(" + ("=" === n[0] ? "" : ">" === n[0] === l ? "max-" : "min-") + a + ":" + ("=" !== n[0] && 1 === n.length ? c.replace(m, function (e, t, i) {
                return Number(t) + s * (">" === n ? 1 : -1) + i;
              }) : c) + (r ? ") and (" + (">" === r[0] ? "min-" : "max-") + a + ":" + (1 === r.length ? o.replace(m, function (e, t, n) {
                return Number(t) + s * (">" === r ? -1 : 1) + n;
              }) : o) : "") + ")";
            })), _e) {
              var _e4 = _k ? n.concat(c) : _toConsumableArray(n),
                  _i2 = _k ? _toConsumableArray(t) : b(t, c.split(R));

              void 0 !== o && r(I.apply(void 0, _toConsumableArray(o))), o = void 0, a(d, _i2, _e4);
            } else void 0 === o && (o = [[], t, n]), c = _k || 36 !== c.charCodeAt(0) ? c : "--".concat(y(i.prefix)).concat(c.slice(1).replace(/\$/g, "-")), d = _e ? d : "number" == typeof d ? d && _x2 in W ? String(d) + "px" : String(d) : B(S(_x2, d), i.prefix, i.themeMap[_x2]), o[0].push("".concat(_k ? "".concat(c, " ") : "".concat(u(c), ":")).concat(d));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      var p, h;
    };

    g(e), void 0 !== o && r(I.apply(void 0, _toConsumableArray(o))), o = void 0;
  };

  a(e, t, n);
},
    I = function I(e, t, n) {
  return "".concat(n.map(function (e) {
    return "".concat(e, "{");
  }).join("")).concat(t.length ? "".concat(t.join(","), "{") : "").concat(e.join(";")).concat(t.length ? "}" : "").concat(Array(n.length ? n.length + 1 : 0).join("}"));
},
    W = {
  animationDelay: 1,
  animationDuration: 1,
  backgroundSize: 1,
  blockSize: 1,
  border: 1,
  borderBlock: 1,
  borderBlockEnd: 1,
  borderBlockEndWidth: 1,
  borderBlockStart: 1,
  borderBlockStartWidth: 1,
  borderBlockWidth: 1,
  borderBottom: 1,
  borderBottomLeftRadius: 1,
  borderBottomRightRadius: 1,
  borderBottomWidth: 1,
  borderEndEndRadius: 1,
  borderEndStartRadius: 1,
  borderInlineEnd: 1,
  borderInlineEndWidth: 1,
  borderInlineStart: 1,
  borderInlineStartWidth: 1,
  borderInlineWidth: 1,
  borderLeft: 1,
  borderLeftWidth: 1,
  borderRadius: 1,
  borderRight: 1,
  borderRightWidth: 1,
  borderSpacing: 1,
  borderStartEndRadius: 1,
  borderStartStartRadius: 1,
  borderTop: 1,
  borderTopLeftRadius: 1,
  borderTopRightRadius: 1,
  borderTopWidth: 1,
  borderWidth: 1,
  bottom: 1,
  columnGap: 1,
  columnRule: 1,
  columnRuleWidth: 1,
  columnWidth: 1,
  containIntrinsicSize: 1,
  flexBasis: 1,
  fontSize: 1,
  gap: 1,
  gridAutoColumns: 1,
  gridAutoRows: 1,
  gridTemplateColumns: 1,
  gridTemplateRows: 1,
  height: 1,
  inlineSize: 1,
  inset: 1,
  insetBlock: 1,
  insetBlockEnd: 1,
  insetBlockStart: 1,
  insetInline: 1,
  insetInlineEnd: 1,
  insetInlineStart: 1,
  left: 1,
  letterSpacing: 1,
  margin: 1,
  marginBlock: 1,
  marginBlockEnd: 1,
  marginBlockStart: 1,
  marginBottom: 1,
  marginInline: 1,
  marginInlineEnd: 1,
  marginInlineStart: 1,
  marginLeft: 1,
  marginRight: 1,
  marginTop: 1,
  maxBlockSize: 1,
  maxHeight: 1,
  maxInlineSize: 1,
  maxWidth: 1,
  minBlockSize: 1,
  minHeight: 1,
  minInlineSize: 1,
  minWidth: 1,
  offsetDistance: 1,
  offsetRotate: 1,
  outline: 1,
  outlineOffset: 1,
  outlineWidth: 1,
  overflowClipMargin: 1,
  padding: 1,
  paddingBlock: 1,
  paddingBlockEnd: 1,
  paddingBlockStart: 1,
  paddingBottom: 1,
  paddingInline: 1,
  paddingInlineEnd: 1,
  paddingInlineStart: 1,
  paddingLeft: 1,
  paddingRight: 1,
  paddingTop: 1,
  perspective: 1,
  right: 1,
  rowGap: 1,
  scrollMargin: 1,
  scrollMarginBlock: 1,
  scrollMarginBlockEnd: 1,
  scrollMarginBlockStart: 1,
  scrollMarginBottom: 1,
  scrollMarginInline: 1,
  scrollMarginInlineEnd: 1,
  scrollMarginInlineStart: 1,
  scrollMarginLeft: 1,
  scrollMarginRight: 1,
  scrollMarginTop: 1,
  scrollPadding: 1,
  scrollPaddingBlock: 1,
  scrollPaddingBlockEnd: 1,
  scrollPaddingBlockStart: 1,
  scrollPaddingBottom: 1,
  scrollPaddingInline: 1,
  scrollPaddingInlineEnd: 1,
  scrollPaddingInlineStart: 1,
  scrollPaddingLeft: 1,
  scrollPaddingRight: 1,
  scrollPaddingTop: 1,
  shapeMargin: 1,
  textDecoration: 1,
  textDecorationThickness: 1,
  textIndent: 1,
  textUnderlineOffset: 1,
  top: 1,
  transitionDelay: 1,
  transitionDuration: 1,
  verticalAlign: 1,
  width: 1,
  wordSpacing: 1
},
    w = function w(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
},
    z = function z(e) {
  return function (e) {
    var t,
        n = "";

    for (t = Math.abs(e); t > 52; t = t / 52 | 0) {
      n = w(t % 52) + n;
    }

    return w(t % 52) + n;
  }(function (e, t) {
    var n = t.length;

    for (; n;) {
      e = 33 * e ^ t.charCodeAt(--n);
    }

    return e;
  }(5381, JSON.stringify(e)) >>> 0);
},
    j = s(),
    v = function v(e, t) {
  return j(e, function () {
    return function () {
      var i = null;
      var r = new Set();

      for (var _len2 = arguments.length, n = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        n[_key2] = arguments[_key2];
      }

      for (var _i3 = 0, _n2 = n; _i3 < _n2.length; _i3++) {
        var _t2 = _n2[_i3];
        if (null != _t2) switch (_typeof(_t2)) {
          case "function":
            if (null == i && !_t2[a]) {
              i = _t2;
              break;
            }

          case "object":
            if (null == i && null != _t2.type && (i = _t2.type), a in _t2) {
              var _iterator2 = _createForOfIteratorHelper(_t2[a]),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _e5 = _step2.value;
                  r.add(_e5);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } else if (!("$$typeof" in _t2)) {
              var _n3 = E(_t2, e);

              r.add(_n3);
            }

            break;

          case "string":
            i = _t2;
        }
      }

      return null == i && (i = "span"), r.size || r.add(["PJLV", {}, [], [], {}, []]), M(e, i, r, t);
    };
  });
},
    E = function E(_ref3, r) {
  var e = _ref3.variants,
      t = _ref3.compoundVariants,
      n = _ref3.defaultVariants,
      i = _objectWithoutProperties(_ref3, ["variants", "compoundVariants", "defaultVariants"]);

  var o = "".concat(y(r.prefix), "c-").concat(z(i)),
      l = [],
      s = [],
      a = Object.create(null),
      c = [];

  for (var _e6 in n) {
    a[_e6] = String(n[_e6]);
  }

  if ("object" == _typeof(e) && e) for (var _t3 in e) {
    u = a, p = _t3, g.call(u, p) || (a[_t3] = "undefined");
    var _n4 = e[_t3];

    for (var _e7 in _n4) {
      var _i4 = _defineProperty({}, _t3, String(_e7));

      "undefined" === String(_e7) && c.push(_t3);
      var _r = _n4[_e7],
          _o = [_i4, _r, !d(_r)];
      l.push(_o);
    }
  }
  var u, p;

  if ("object" == _typeof(t) && t) {
    var _iterator3 = _createForOfIteratorHelper(t),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _e8 = _step3.value;

        var _t4 = _e8.css,
            _n5 = _objectWithoutProperties(_e8, ["css"]);

        _t4 = "object" == _typeof(_t4) && _t4 || {};

        for (var _e9 in _n5) {
          _n5[_e9] = String(_n5[_e9]);
        }

        var _i6 = [_n5, _t4, !d(_t4)];
        s.push(_i6);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }

  return [o, i, l, s, a, c];
},
    M = function M(e, t, n, i) {
  var _c;

  var _C = C(n),
      _C2 = _slicedToArray(_C, 4),
      r = _C2[0],
      o = _C2[1],
      l = _C2[2],
      s = _C2[3],
      d = ".".concat(r),
      g = function g(a) {
    a = "object" == _typeof(a) && a || T;

    var _a = a,
        c = _a.css,
        g = _objectWithoutProperties(_a, ["css"]),
        u = {};

    for (var _e10 in l) {
      if (delete g[_e10], _e10 in a) {
        var _t5 = a[_e10];
        "object" == _typeof(_t5) && _t5 ? u[_e10] = _objectSpread({
          "@initial": l[_e10]
        }, _t5) : (_t5 = String(_t5), u[_e10] = "undefined" !== _t5 || s.has(_e10) ? _t5 : l[_e10]);
      } else u[_e10] = l[_e10];
    }

    var p = new Set(_toConsumableArray(o));

    var _iterator4 = _createForOfIteratorHelper(n),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _step4$value = _slicedToArray(_step4.value, 4),
            _t7 = _step4$value[0],
            _r2 = _step4$value[1],
            _o2 = _step4$value[2],
            _l = _step4$value[3];

        i.rules.styled.cache.has(_t7) || (i.rules.styled.cache.add(_t7), x(_r2, [".".concat(_t7)], [], e, function (e) {
          i.rules.styled.apply(e);
        }));

        var _n6 = P(_o2, u, e.media),
            _s2 = P(_l, u, e.media, !0);

        var _iterator6 = _createForOfIteratorHelper(_n6),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _r3 = _step6.value;

            if (void 0 !== _r3) {
              var _iterator8 = _createForOfIteratorHelper(_r3),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _step8$value = _slicedToArray(_step8.value, 2),
                      _n7 = _step8$value[0],
                      _o3 = _step8$value[1];

                  var _r4 = "".concat(_t7, "-").concat(z(_o3), "-").concat(_n7);

                  p.add(_r4), i.rules.onevar.cache.has(_r4) || (i.rules.onevar.cache.add(_r4), x(_o3, [".".concat(_r4)], [], e, function (e) {
                    i.rules.onevar.apply(e);
                  }));
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        var _iterator7 = _createForOfIteratorHelper(_s2),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _n8 = _step7.value;

            if (void 0 !== _n8) {
              var _iterator9 = _createForOfIteratorHelper(_n8),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var _step9$value = _slicedToArray(_step9.value, 2),
                      _r5 = _step9$value[0],
                      _o4 = _step9$value[1];

                  var _n9 = "".concat(_t7, "-").concat(z(_o4), "-").concat(_r5);

                  p.add(_n9), i.rules.allvar.cache.has(_n9) || (i.rules.allvar.cache.add(_n9), x(_o4, [".".concat(_n9)], [], e, function (e) {
                    i.rules.allvar.apply(e);
                  }));
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    if ("object" == _typeof(c) && c) {
      var _t6 = "".concat(r, "-i").concat(z(c), "-css");

      p.add(_t6), i.rules.inline.cache.has(_t6) || (i.rules.inline.cache.add(_t6), x(c, [".".concat(_t6)], [], e, function (e) {
        i.rules.inline.apply(e);
      }));
    }

    var _iterator5 = _createForOfIteratorHelper(String(a.className || "").trim().split(/\s+/)),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _e11 = _step5.value;
        _e11 && p.add(_e11);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    var h = g.className = _toConsumableArray(p).join(" ");

    return {
      type: t,
      className: h,
      selector: d,
      props: g,
      toString: function toString() {
        return h;
      }
    };
  };

  return c(g, (_c = {
    type: t,
    className: r,
    selector: d
  }, _defineProperty(_c, a, n), _defineProperty(_c, "toString", function toString() {
    return i.rules.styled.cache.has(r) || g(), r;
  }), _c));
},
    C = function C(e) {
  var t = "";
  var n = [],
      i = {},
      r = [];

  var _iterator10 = _createForOfIteratorHelper(e),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var _step10$value = _slicedToArray(_step10.value, 6),
          _o5 = _step10$value[0],
          _l2 = _step10$value[4],
          _s3 = _step10$value[5];

      "" === t && (t = _o5), n.push(_o5), r.push.apply(r, _toConsumableArray(_s3));

      for (var _e12 in _l2) {
        i[_e12] = _l2[_e12];
      }
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }

  return [t, n, i, new Set(r)];
},
    P = function P(e, t, n, i) {
  var r = [];

  var _iterator11 = _createForOfIteratorHelper(e),
      _step11;

  try {
    e: for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var _step11$value = _slicedToArray(_step11.value, 3),
          _o6 = _step11$value[0],
          _l3 = _step11$value[1],
          _s4 = _step11$value[2];

      if (_s4) continue;

      var _e13 = void 0,
          _a2 = 0;

      for (_e13 in _o6) {
        var _i7 = _o6[_e13];
        var _r6 = t[_e13];

        if (_r6 !== _i7) {
          if ("object" != _typeof(_r6) || !_r6) continue e;
          {
            var _e14 = void 0,
                _t8 = 0;

            for (var _o7 in _r6) {
              _i7 === String(_r6[_o7]) && ("@initial" !== _o7 && (_l3 = _defineProperty({}, _o7 in n ? n[_o7] : _o7, _l3)), _a2 += _t8, _e14 = !0), ++_t8;
            }

            if (!_e14) continue e;
          }
        }
      }

      (r[_a2] = r[_a2] || []).push([i ? "cv" : "".concat(_e13, "-").concat(_o6[_e13]), _l3]);
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }

  return r;
},
    T = {},
    L = s(),
    O = function O(e, t) {
  return L(e, function () {
    return function (n) {
      var i = z(n = "object" == _typeof(n) && n || {}),
          r = function r() {
        if (!t.rules.global.cache.has(i)) {
          if (t.rules.global.cache.add(i), "@import" in n) {
            var _e15 = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;

            var _iterator12 = _createForOfIteratorHelper([].concat(n["@import"])),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _i8 = _step12.value;
                _i8 = _i8.includes('"') || _i8.includes("'") ? _i8 : "\"".concat(_i8, "\""), t.sheet.insertRule("@import ".concat(_i8, ";"), _e15++);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            delete n["@import"];
          }

          x(n, [], [], e, function (e) {
            t.rules.global.apply(e);
          });
        }

        return "";
      };

      return c(r, {
        toString: r
      });
    };
  });
},
    A = s(),
    D = function D(e, t) {
  return A(e, function () {
    return function (n) {
      var i = "".concat(y(e.prefix), "k-").concat(z(n)),
          r = function r() {
        if (!t.rules.global.cache.has(i)) {
          t.rules.global.cache.add(i);
          var _r7 = [];
          x(n, [], [], e, function (e) {
            return _r7.push(e);
          });

          var _o8 = "@keyframes ".concat(i, "{").concat(_r7.join(""), "}");

          t.rules.global.apply(_o8);
        }

        return i;
      };

      return c(r, {
        get name() {
          return r();
        },

        toString: r
      });
    };
  });
},
    H = /*#__PURE__*/function () {
  function H(e, t, n, i) {
    _classCallCheck(this, H);

    this.name = null == e ? "" : String(e), this.value = null == t ? "" : String(t), this.scale = null == n ? "" : String(n), this.prefix = null == i ? "" : String(i);
  }

  _createClass(H, [{
    key: "computedValue",
    get: function get() {
      return "var(" + this.variable + ")";
    }
  }, {
    key: "variable",
    get: function get() {
      return "--" + y(this.prefix) + y(this.scale) + this.name;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.computedValue;
    }
  }]);

  return H;
}(),
    N = s(),
    V = function V(e, t) {
  return N(e, function () {
    return function (n, i) {
      i = "object" == _typeof(n) && n || Object(i);
      var r = ".".concat(n = (n = "string" == typeof n ? n : "") || "".concat(y(e.prefix), "t-").concat(z(i))),
          o = {},
          l = [];

      for (var _t9 in i) {
        o[_t9] = {};

        for (var _n10 in i[_t9]) {
          var _r8 = "--".concat(y(e.prefix)).concat(_t9, "-").concat(_n10),
              _s5 = B(String(i[_t9][_n10]), e.prefix, _t9);

          o[_t9][_n10] = new H(_n10, _s5, _t9, e.prefix), l.push("".concat(_r8, ":").concat(_s5));
        }
      }

      return _objectSpread(_objectSpread({}, o), {}, {
        className: n,
        selector: r,
        toString: function toString() {
          if (l.length && !t.rules.themed.cache.has(n)) {
            t.rules.themed.cache.add(n);

            var _r9 = "".concat(i === e.theme ? ":root," : "", ".").concat(n, "{").concat(l.join(";"), "}");

            t.rules.themed.apply(_r9);
          }

          return n;
        }
      });
    };
  });
},
    G = ["themed", "global", "styled", "onevar", "allvar", "inline"],
    F = function F(e) {
  var t;

  var n = function n() {
    if (t) {
      var _t10 = t,
          _e16 = _t10.rules,
          _n11 = _t10.sheet;

      if (!_n11.deleteRule) {
        for (; 3 === Object(Object(_n11.cssRules)[0]).type;) {
          _n11.cssRules.splice(0, 1);
        }

        _n11.cssRules = [];
      }

      for (var _t11 in _e16) {
        delete _e16[_t11];
      }

      _n11.ownerRule && (_n11.ownerRule.textContent = _n11.ownerRule.textContent);
    }

    var i = Object(e).styleSheets || [];

    var _iterator13 = _createForOfIteratorHelper(i),
        _step13;

    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var _e24 = _step13.value;

        if (!_e24.href || _e24.href.startsWith(location.origin)) {
          for (var _i10 = 0, _r10 = _e24.cssRules; _r10[_i10]; ++_i10) {
            var _o9 = Object(_r10[_i10]);

            if (1 !== _o9.type) continue;

            var _l5 = Object(_r10[_i10 + 1]);

            if (4 !== _l5.type) continue;
            ++_i10;
            var _s6 = _o9.cssText;
            if (!_s6.startsWith("--stitches")) continue;

            var _a3 = _s6.slice(16, -3).trim().split(/\s+/),
                _c2 = G[_a3[0]];

            _c2 && (t || (t = {
              sheet: _e24,
              reset: n,
              rules: {}
            }), t.rules[_c2] = {
              group: _l5,
              index: _i10,
              cache: new Set(_a3)
            });
          }

          if (t) break;
        }
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }

    if (!t) {
      var _i9 = function _i9(e, t) {
        return {
          type: t,
          cssRules: [],
          insertRule: function insertRule(e, t) {
            this.cssRules.splice(t, 0, _i9(e, {
              import: 3,
              undefined: 1
            }[(e.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
          },

          get cssText() {
            return "@media{}" === e ? "@media{".concat([].map.call(this.cssRules, function (e) {
              return e.cssText;
            }).join(""), "}") : e;
          }

        };
      };

      t = {
        sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : _i9("", "text/css"),
        rules: {},
        reset: n,
        toString: function toString() {
          var e = t.sheet.cssRules;
          return [].map.call(e, function (n, i) {
            var r = n.cssText;
            var o = "";
            if (r.startsWith("--stitches")) return "";

            if (e[i - 1] && (o = e[i - 1].cssText).startsWith("--stitches")) {
              if (!n.cssRules.length) return "";

              for (var _e17 in t.rules) {
                if (t.rules[_e17].group === n) return "--stitches{--:".concat(_toConsumableArray(t.rules[_e17].cache).join(" "), "}").concat(r);
              }

              return n.cssRules.length ? "".concat(o).concat(r) : "";
            }

            return r;
          }).join("");
        }
      };
    }

    var _t12 = t,
        r = _t12.sheet,
        o = _t12.rules;

    if (!o.inline) {
      var _e18 = r.cssRules.length;
      r.insertRule("@media{}", _e18), r.insertRule("--stitches{--:5}", _e18), o.inline = {
        index: _e18,
        group: r.cssRules[_e18 + 1],
        cache: new Set([5])
      };
    }

    if (J(o.inline), !o.allvar) {
      var _e19 = o.inline.index;
      r.insertRule("@media{}", _e19), r.insertRule("--stitches{--:4}", _e19), o.allvar = {
        index: _e19,
        group: r.cssRules[_e19 + 1],
        cache: new Set([4])
      };
    }

    if (J(o.allvar), !o.onevar) {
      var _e20 = o.allvar.index;
      r.insertRule("@media{}", _e20), r.insertRule("--stitches{--:3}", _e20), o.onevar = {
        index: _e20,
        group: r.cssRules[_e20 + 1],
        cache: new Set([3])
      };
    }

    if (J(o.onevar), !o.styled) {
      var _e21 = o.onevar.index;
      r.insertRule("@media{}", _e21), r.insertRule("--stitches{--:2}", _e21), o.styled = {
        index: _e21,
        group: r.cssRules[_e21 + 1],
        cache: new Set([2])
      };
    }

    if (J(o.styled), !o.global) {
      var _e22 = o.styled.index;
      r.insertRule("@media{}", _e22), r.insertRule("--stitches{--:1}", _e22), o.global = {
        index: _e22,
        group: r.cssRules[_e22 + 1],
        cache: new Set([1])
      };
    }

    if (J(o.global), !o.themed) {
      var _e23 = o.global.index;
      r.insertRule("@media{}", _e23), r.insertRule("--stitches{--:0}", _e23), o.themed = {
        index: _e23,
        group: r.cssRules[_e23 + 1],
        cache: new Set([0])
      };
    }

    J(o.themed);
  };

  return n(), t;
},
    J = function J(e) {
  var t = e.group;
  var n = t.cssRules.length;

  e.apply = function (e) {
    try {
      t.insertRule(e, n), ++n;
    } catch (_unused) {}
  };
},
    U = s(),
    Z = function Z(e) {
  var n = !1;
  var i = U(e, function (e) {
    n = !0;

    var i = "prefix" in (e = "object" == _typeof(e) && e || {}) ? String(e.prefix) : "",
        r = _objectSpread(_objectSpread({}, t), "object" == _typeof(e.media) && e.media || {}),
        l = "object" == _typeof(e.root) ? e.root || null : globalThis.document || null,
        s = "object" == _typeof(e.theme) && e.theme || {},
        a = {
      prefix: i,
      media: r,
      root: l,
      theme: s,
      themeMap: "object" == _typeof(e.themeMap) && e.themeMap || _objectSpread({}, o),
      utils: "object" == _typeof(e.utils) && e.utils || {}
    },
        c = F(l),
        d = {
      css: v(a, c),
      global: O(a, c),
      keyframes: D(a, c),
      theme: V(a, c),
      reset: function reset() {
        c.reset(), g.toString();
      },
      sheet: c,
      config: a,
      prefix: i,
      getCssString: c.toString,
      toString: c.toString
    },
        g = d.theme(s);

    return Object.assign(d.theme, g), g.toString(), d;
  });
  return n || i.reset(), i;
},
    X = function X() {
  return e || (e = Z());
},
    Y = function Y() {
  var _X;

  return (_X = X()).css.apply(_X, arguments);
},
    q = function q() {
  var _X2;

  return (_X2 = X()).global.apply(_X2, arguments);
},
    K = function K() {
  var _X3;

  return (_X3 = X()).keyframes.apply(_X3, arguments);
};

export { Z as createCss, Y as css, o as defaultThemeMap, q as global, K as keyframes }; //# sourceMappingUrl=index.map