(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.StagewiseToolbar = {}));
})(this, function(exports2) {
  "use strict";
  var n$4, l$4, u$a, i$8, r$5, o$9, e$5, f$9, c$7, s$9, a$b, h$6, p$4 = {}, y$7 = [], v$3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, w$5 = Array.isArray;
  function d$5(n2, l2) {
    for (var u2 in l2) n2[u2] = l2[u2];
    return n2;
  }
  function g$4(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function _$4(l2, u2, t2) {
    var i2, r2, o2, e2 = {};
    for (o2 in u2) "key" == o2 ? i2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : e2[o2] = u2[o2];
    if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n$4.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (o2 in l2.defaultProps) null == e2[o2] && (e2[o2] = l2.defaultProps[o2]);
    return m$6(l2, e2, i2, r2, null);
  }
  function m$6(n2, t2, i2, r2, o2) {
    var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u$a : o2, __i: -1, __u: 0 };
    return null == o2 && null != l$4.vnode && l$4.vnode(e2), e2;
  }
  function b$5() {
    return { current: null };
  }
  function k$3(n2) {
    return n2.children;
  }
  function x$5(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function S$5(n2, l2) {
    if (null == l2) return n2.__ ? S$5(n2.__, n2.__i + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
    return "function" == typeof n2.type ? S$5(n2) : null;
  }
  function C$5(n2) {
    var l2, u2;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
      return C$5(n2);
    }
  }
  function M$4(n2) {
    (!n2.__d && (n2.__d = true) && i$8.push(n2) && !$$2.__r++ || r$5 != l$4.debounceRendering) && ((r$5 = l$4.debounceRendering) || o$9)($$2);
  }
  function $$2() {
    for (var n2, u2, t2, r2, o2, f2, c2, s2 = 1; i$8.length; ) i$8.length > s2 && i$8.sort(e$5), n2 = i$8.shift(), s2 = i$8.length, n2.__d && (t2 = void 0, o2 = (r2 = (u2 = n2).__v).__e, f2 = [], c2 = [], u2.__P && ((t2 = d$5({}, r2)).__v = r2.__v + 1, l$4.vnode && l$4.vnode(t2), O$3(u2.__P, t2, r2, u2.__n, u2.__P.namespaceURI, 32 & r2.__u ? [o2] : null, f2, null == o2 ? S$5(r2) : o2, !!(32 & r2.__u), c2), t2.__v = r2.__v, t2.__.__k[t2.__i] = t2, z$3(f2, t2, c2), t2.__e != o2 && C$5(t2)));
    $$2.__r = 0;
  }
  function I$4(n2, l2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
    var a2, h2, v2, w2, d2, g2, _2 = t2 && t2.__k || y$7, m2 = l2.length;
    for (f2 = P$6(u2, l2, _2, f2, m2), a2 = 0; a2 < m2; a2++) null != (v2 = u2.__k[a2]) && (h2 = -1 == v2.__i ? p$4 : _2[v2.__i] || p$4, v2.__i = a2, g2 = O$3(n2, v2, h2, i2, r2, o2, e2, f2, c2, s2), w2 = v2.__e, v2.ref && h2.ref != v2.ref && (h2.ref && q$4(h2.ref, null, v2), s2.push(v2.ref, v2.__c || w2, v2)), null == d2 && null != w2 && (d2 = w2), 4 & v2.__u || h2.__k === v2.__k ? f2 = A$4(v2, f2, n2) : "function" == typeof v2.type && void 0 !== g2 ? f2 = g2 : w2 && (f2 = w2.nextSibling), v2.__u &= -7);
    return u2.__e = d2, f2;
  }
  function P$6(n2, l2, u2, t2, i2) {
    var r2, o2, e2, f2, c2, s2 = u2.length, a2 = s2, h2 = 0;
    for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? (f2 = r2 + h2, (o2 = n2.__k[r2] = "string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? m$6(null, o2, null, null, null) : w$5(o2) ? m$6(k$3, { children: o2 }, null, null, null) : null == o2.constructor && o2.__b > 0 ? m$6(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : o2).__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 != (c2 = o2.__i = L$4(o2, u2, f2, a2)) && (a2--, (e2 = u2[c2]) && (e2.__u |= 2)), null == e2 || null == e2.__v ? (-1 == c2 && (i2 > s2 ? h2-- : i2 < s2 && h2++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h2-- : c2 == f2 + 1 ? h2++ : (c2 > f2 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
    if (a2) for (r2 = 0; r2 < s2; r2++) null != (e2 = u2[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = S$5(e2)), B$3(e2, e2));
    return t2;
  }
  function A$4(n2, l2, u2) {
    var t2, i2;
    if ("function" == typeof n2.type) {
      for (t2 = n2.__k, i2 = 0; t2 && i2 < t2.length; i2++) t2[i2] && (t2[i2].__ = n2, l2 = A$4(t2[i2], l2, u2));
      return l2;
    }
    n2.__e != l2 && (l2 && n2.type && !u2.contains(l2) && (l2 = S$5(n2)), u2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
    do {
      l2 = l2 && l2.nextSibling;
    } while (null != l2 && 8 == l2.nodeType);
    return l2;
  }
  function H$6(n2, l2) {
    return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (w$5(n2) ? n2.some(function(n3) {
      H$6(n3, l2);
    }) : l2.push(n2)), l2;
  }
  function L$4(n2, l2, u2, t2) {
    var i2, r2, o2 = n2.key, e2 = n2.type, f2 = l2[u2];
    if (null === f2 && null == n2.key || f2 && o2 == f2.key && e2 == f2.type && 0 == (2 & f2.__u)) return u2;
    if (t2 > (null != f2 && 0 == (2 & f2.__u) ? 1 : 0)) for (i2 = u2 - 1, r2 = u2 + 1; i2 >= 0 || r2 < l2.length; ) {
      if (i2 >= 0) {
        if ((f2 = l2[i2]) && 0 == (2 & f2.__u) && o2 == f2.key && e2 == f2.type) return i2;
        i2--;
      }
      if (r2 < l2.length) {
        if ((f2 = l2[r2]) && 0 == (2 & f2.__u) && o2 == f2.key && e2 == f2.type) return r2;
        r2++;
      }
    }
    return -1;
  }
  function T$6(n2, l2, u2) {
    "-" == l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || v$3.test(l2) ? u2 : u2 + "px";
  }
  function j$5(n2, l2, u2, t2, i2) {
    var r2;
    n: if ("style" == l2) if ("string" == typeof u2) n2.style.cssText = u2;
    else {
      if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u2 && l2 in u2 || T$6(n2.style, l2, "");
      if (u2) for (l2 in u2) t2 && u2[l2] == t2[l2] || T$6(n2.style, l2, u2[l2]);
    }
    else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(f$9, "$1")), l2 = l2.toLowerCase() in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? t2 ? u2.u = t2.u : (u2.u = c$7, n2.addEventListener(l2, r2 ? a$b : s$9, r2)) : n2.removeEventListener(l2, r2 ? a$b : s$9, r2);
    else {
      if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
        n2[l2] = null == u2 ? "" : u2;
        break n;
      } catch (n3) {
      }
      "function" == typeof u2 || (null == u2 || false === u2 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u2 ? "" : u2));
    }
  }
  function F$6(n2) {
    return function(u2) {
      if (this.l) {
        var t2 = this.l[u2.type + n2];
        if (null == u2.t) u2.t = c$7++;
        else if (u2.t < t2.u) return;
        return t2(l$4.event ? l$4.event(u2) : u2);
      }
    };
  }
  function O$3(n2, u2, t2, i2, r2, o2, e2, f2, c2, s2) {
    var a2, h2, p2, y2, v2, _2, m2, b2, S2, C2, M2, $2, P2, A2, H2, L2, T2, j2 = u2.type;
    if (null != u2.constructor) return null;
    128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f2 = u2.__e = t2.__e]), (a2 = l$4.__b) && a2(u2);
    n: if ("function" == typeof j2) try {
      if (b2 = u2.props, S2 = "prototype" in j2 && j2.prototype.render, C2 = (a2 = j2.contextType) && i2[a2.__c], M2 = a2 ? C2 ? C2.props.value : a2.__ : i2, t2.__c ? m2 = (h2 = u2.__c = t2.__c).__ = h2.__E : (S2 ? u2.__c = h2 = new j2(b2, M2) : (u2.__c = h2 = new x$5(b2, M2), h2.constructor = j2, h2.render = D$3), C2 && C2.sub(h2), h2.props = b2, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), S2 && null == h2.__s && (h2.__s = h2.state), S2 && null != j2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = d$5({}, h2.__s)), d$5(h2.__s, j2.getDerivedStateFromProps(b2, h2.__s))), y2 = h2.props, v2 = h2.state, h2.__v = u2, p2) S2 && null == j2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), S2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
      else {
        if (S2 && null == j2.getDerivedStateFromProps && b2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(b2, M2), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(b2, h2.__s, M2) || u2.__v == t2.__v) {
          for (u2.__v != t2.__v && (h2.props = b2, h2.state = h2.__s, h2.__d = false), u2.__e = t2.__e, u2.__k = t2.__k, u2.__k.some(function(n3) {
            n3 && (n3.__ = u2);
          }), $2 = 0; $2 < h2._sb.length; $2++) h2.__h.push(h2._sb[$2]);
          h2._sb = [], h2.__h.length && e2.push(h2);
          break n;
        }
        null != h2.componentWillUpdate && h2.componentWillUpdate(b2, h2.__s, M2), S2 && null != h2.componentDidUpdate && h2.__h.push(function() {
          h2.componentDidUpdate(y2, v2, _2);
        });
      }
      if (h2.context = M2, h2.props = b2, h2.__P = n2, h2.__e = false, P2 = l$4.__r, A2 = 0, S2) {
        for (h2.state = h2.__s, h2.__d = false, P2 && P2(u2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++) h2.__h.push(h2._sb[H2]);
        h2._sb = [];
      } else do {
        h2.__d = false, P2 && P2(u2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
      } while (h2.__d && ++A2 < 25);
      h2.state = h2.__s, null != h2.getChildContext && (i2 = d$5(d$5({}, i2), h2.getChildContext())), S2 && !p2 && null != h2.getSnapshotBeforeUpdate && (_2 = h2.getSnapshotBeforeUpdate(y2, v2)), L2 = a2, null != a2 && a2.type === k$3 && null == a2.key && (L2 = N$2(a2.props.children)), f2 = I$4(n2, w$5(L2) ? L2 : [L2], u2, t2, i2, r2, o2, e2, f2, c2, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && e2.push(h2), m2 && (h2.__E = h2.__ = null);
    } catch (n3) {
      if (u2.__v = null, c2 || null != o2) if (n3.then) {
        for (u2.__u |= c2 ? 160 : 128; f2 && 8 == f2.nodeType && f2.nextSibling; ) f2 = f2.nextSibling;
        o2[o2.indexOf(f2)] = null, u2.__e = f2;
      } else for (T2 = o2.length; T2--; ) g$4(o2[T2]);
      else u2.__e = t2.__e, u2.__k = t2.__k;
      l$4.__e(n3, u2, t2);
    }
    else null == o2 && u2.__v == t2.__v ? (u2.__k = t2.__k, u2.__e = t2.__e) : f2 = u2.__e = V$2(t2.__e, u2, t2, i2, r2, o2, e2, c2, s2);
    return (a2 = l$4.diffed) && a2(u2), 128 & u2.__u ? void 0 : f2;
  }
  function z$3(n2, u2, t2) {
    for (var i2 = 0; i2 < t2.length; i2++) q$4(t2[i2], t2[++i2], t2[++i2]);
    l$4.__c && l$4.__c(u2, n2), n2.some(function(u3) {
      try {
        n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
          n3.call(u3);
        });
      } catch (n3) {
        l$4.__e(n3, u3.__v);
      }
    });
  }
  function N$2(n2) {
    return "object" != typeof n2 || null == n2 || n2.__b && n2.__b > 0 ? n2 : w$5(n2) ? n2.map(N$2) : d$5({}, n2);
  }
  function V$2(u2, t2, i2, r2, o2, e2, f2, c2, s2) {
    var a2, h2, y2, v2, d2, _2, m2, b2 = i2.props, k2 = t2.props, x2 = t2.type;
    if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
      for (a2 = 0; a2 < e2.length; a2++) if ((d2 = e2[a2]) && "setAttribute" in d2 == !!x2 && (x2 ? d2.localName == x2 : 3 == d2.nodeType)) {
        u2 = d2, e2[a2] = null;
        break;
      }
    }
    if (null == u2) {
      if (null == x2) return document.createTextNode(k2);
      u2 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l$4.__m && l$4.__m(t2, e2), c2 = false), e2 = null;
    }
    if (null == x2) b2 === k2 || c2 && u2.data == k2 || (u2.data = k2);
    else {
      if (e2 = e2 && n$4.call(u2.childNodes), b2 = i2.props || p$4, !c2 && null != e2) for (b2 = {}, a2 = 0; a2 < u2.attributes.length; a2++) b2[(d2 = u2.attributes[a2]).name] = d2.value;
      for (a2 in b2) if (d2 = b2[a2], "children" == a2) ;
      else if ("dangerouslySetInnerHTML" == a2) y2 = d2;
      else if (!(a2 in k2)) {
        if ("value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2) continue;
        j$5(u2, a2, null, d2, o2);
      }
      for (a2 in k2) d2 = k2[a2], "children" == a2 ? v2 = d2 : "dangerouslySetInnerHTML" == a2 ? h2 = d2 : "value" == a2 ? _2 = d2 : "checked" == a2 ? m2 = d2 : c2 && "function" != typeof d2 || b2[a2] === d2 || j$5(u2, a2, d2, b2[a2], o2);
      if (h2) c2 || y2 && (h2.__html == y2.__html || h2.__html == u2.innerHTML) || (u2.innerHTML = h2.__html), t2.__k = [];
      else if (y2 && (u2.innerHTML = ""), I$4("template" == t2.type ? u2.content : u2, w$5(v2) ? v2 : [v2], t2, i2, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f2, e2 ? e2[0] : i2.__k && S$5(i2, 0), c2, s2), null != e2) for (a2 = e2.length; a2--; ) g$4(e2[a2]);
      c2 || (a2 = "value", "progress" == x2 && null == _2 ? u2.removeAttribute("value") : null != _2 && (_2 !== u2[a2] || "progress" == x2 && !_2 || "option" == x2 && _2 != b2[a2]) && j$5(u2, a2, _2, b2[a2], o2), a2 = "checked", null != m2 && m2 != u2[a2] && j$5(u2, a2, m2, b2[a2], o2));
    }
    return u2;
  }
  function q$4(n2, u2, t2) {
    try {
      if ("function" == typeof n2) {
        var i2 = "function" == typeof n2.__u;
        i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
      } else n2.current = u2;
    } catch (n3) {
      l$4.__e(n3, t2);
    }
  }
  function B$3(n2, u2, t2) {
    var i2, r2;
    if (l$4.unmount && l$4.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || q$4(i2, null, u2)), null != (i2 = n2.__c)) {
      if (i2.componentWillUnmount) try {
        i2.componentWillUnmount();
      } catch (n3) {
        l$4.__e(n3, u2);
      }
      i2.base = i2.__P = null;
    }
    if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && B$3(i2[r2], u2, t2 || "function" != typeof n2.type);
    t2 || g$4(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
  }
  function D$3(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function E$3(u2, t2, i2) {
    var r2, o2, e2, f2;
    t2 == document && (t2 = document.documentElement), l$4.__ && l$4.__(u2, t2), o2 = (r2 = "function" == typeof i2) ? null : i2 && i2.__k || t2.__k, e2 = [], f2 = [], O$3(t2, u2 = (!r2 && i2 || t2).__k = _$4(k$3, null, [u2]), o2 || p$4, p$4, t2.namespaceURI, !r2 && i2 ? [i2] : o2 ? null : t2.firstChild ? n$4.call(t2.childNodes) : null, e2, !r2 && i2 ? i2 : o2 ? o2.__e : t2.firstChild, r2, f2), z$3(e2, u2, f2);
  }
  function G$3(n2, l2) {
    E$3(n2, l2, G$3);
  }
  function J$4(l2, u2, t2) {
    var i2, r2, o2, e2, f2 = d$5({}, l2.props);
    for (o2 in l2.type && l2.type.defaultProps && (e2 = l2.type.defaultProps), u2) "key" == o2 ? i2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = null == u2[o2] && null != e2 ? e2[o2] : u2[o2];
    return arguments.length > 2 && (f2.children = arguments.length > 3 ? n$4.call(arguments, 2) : t2), m$6(l2.type, f2, i2 || l2.key, r2 || l2.ref, null);
  }
  function K$3(n2) {
    function l2(n3) {
      var u2, t2;
      return this.getChildContext || (u2 = /* @__PURE__ */ new Set(), (t2 = {})[l2.__c] = this, this.getChildContext = function() {
        return t2;
      }, this.componentWillUnmount = function() {
        u2 = null;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value != n4.value && u2.forEach(function(n5) {
          n5.__e = true, M$4(n5);
        });
      }, this.sub = function(n4) {
        u2.add(n4);
        var l3 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u2 && u2.delete(n4), l3 && l3.call(n4);
        };
      }), n3.children;
    }
    return l2.__c = "__cC" + h$6++, l2.__ = n2, l2.Provider = l2.__l = (l2.Consumer = function(n3, l3) {
      return n3.children(l3);
    }).contextType = l2, l2;
  }
  n$4 = y$7.slice, l$4 = { __e: function(n2, l2, u2, t2) {
    for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
      if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
    } catch (l3) {
      n2 = l3;
    }
    throw n2;
  } }, u$a = 0, x$5.prototype.setState = function(n2, l2) {
    var u2;
    u2 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d$5({}, this.state), "function" == typeof n2 && (n2 = n2(d$5({}, u2), this.props)), n2 && d$5(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), M$4(this));
  }, x$5.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), M$4(this));
  }, x$5.prototype.render = k$3, i$8 = [], o$9 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e$5 = function(n2, l2) {
    return n2.__v.__b - l2.__v.__b;
  }, $$2.__r = 0, f$9 = /(PointerCapture)$|Capture$/i, c$7 = 0, s$9 = F$6(false), a$b = F$6(true), h$6 = 0;
  const appStyle = '/*! tailwindcss v4.1.5 | MIT License | https://tailwindcss.com */\n@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){stagewise-companion-anchor *,stagewise-companion-anchor :before,stagewise-companion-anchor :after,stagewise-companion-anchor ::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial}}}@layer theme{stagewise-companion-anchor,stagewise-companion-anchor{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-600:oklch(57.7% .245 27.325);--color-green-600:oklch(62.7% .194 149.214);--color-teal-500:oklch(70.4% .14 182.503);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-950:oklch(25.7% .09 281.288);--color-rose-600:oklch(58.6% .253 17.585);--color-zinc-50:oklch(98.5% 0 0);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-900:oklch(21% .006 285.885);--color-zinc-950:oklch(14.1% .005 285.823);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height:calc(1.5/1);--font-weight-normal:400;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--drop-shadow-xs:0 1px 1px #0000000d;--drop-shadow-md:0 3px 3px #0000001f;--drop-shadow-xl:0 9px 7px #0000001a;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--blur-xs:4px;--blur-sm:8px;--blur-md:12px;--blur-lg:16px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-background:var(--color-white);--color-foreground:var(--color-zinc-950);--color-muted-foreground:var(--color-zinc-700);--color-border:var(--color-zinc-500)}}@layer base{stagewise-companion-anchor *,stagewise-companion-anchor :after,stagewise-companion-anchor :before,stagewise-companion-anchor ::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}stagewise-companion-anchor ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}:where(stagewise-companion-anchor),stagewise-companion-anchor{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}stagewise-companion-anchor hr{height:0;color:inherit;border-top-width:1px}stagewise-companion-anchor abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}stagewise-companion-anchor h1,stagewise-companion-anchor h2,stagewise-companion-anchor h3,stagewise-companion-anchor h4,stagewise-companion-anchor h5,stagewise-companion-anchor h6{font-size:inherit;font-weight:inherit}stagewise-companion-anchor a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}stagewise-companion-anchor b,stagewise-companion-anchor strong{font-weight:bolder}stagewise-companion-anchor code,stagewise-companion-anchor kbd,stagewise-companion-anchor samp,stagewise-companion-anchor pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}stagewise-companion-anchor small{font-size:80%}stagewise-companion-anchor sub,stagewise-companion-anchor sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}stagewise-companion-anchor sub{bottom:-.25em}stagewise-companion-anchor sup{top:-.5em}stagewise-companion-anchor table{text-indent:0;border-color:inherit;border-collapse:collapse}stagewise-companion-anchor :-moz-focusring{outline:auto}stagewise-companion-anchor progress{vertical-align:baseline}stagewise-companion-anchor summary{display:list-item}stagewise-companion-anchor ol,stagewise-companion-anchor ul,stagewise-companion-anchor menu{list-style:none}stagewise-companion-anchor img,stagewise-companion-anchor svg,stagewise-companion-anchor video,stagewise-companion-anchor canvas,stagewise-companion-anchor audio,stagewise-companion-anchor iframe,stagewise-companion-anchor embed,stagewise-companion-anchor object{vertical-align:middle;display:block}stagewise-companion-anchor img,stagewise-companion-anchor video{max-width:100%;height:auto}stagewise-companion-anchor button,stagewise-companion-anchor input,stagewise-companion-anchor select,stagewise-companion-anchor optgroup,stagewise-companion-anchor textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}stagewise-companion-anchor ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}stagewise-companion-anchor :where(select:is([multiple],[size])) optgroup{font-weight:bolder}stagewise-companion-anchor :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}stagewise-companion-anchor ::file-selector-button{margin-inline-end:4px}stagewise-companion-anchor ::-moz-placeholder{opacity:1}stagewise-companion-anchor ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){stagewise-companion-anchor ::-moz-placeholder{color:currentColor}stagewise-companion-anchor ::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}stagewise-companion-anchor ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}stagewise-companion-anchor textarea{resize:vertical}stagewise-companion-anchor ::-webkit-search-decoration{-webkit-appearance:none}stagewise-companion-anchor ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}stagewise-companion-anchor ::-webkit-datetime-edit{display:inline-flex}stagewise-companion-anchor ::-webkit-datetime-edit-fields-wrapper{padding:0}stagewise-companion-anchor ::-webkit-datetime-edit{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-year-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-month-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-day-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-hour-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-minute-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-second-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-millisecond-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-meridiem-field{padding-block:0}stagewise-companion-anchor :-moz-ui-invalid{box-shadow:none}stagewise-companion-anchor button,stagewise-companion-anchor input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}stagewise-companion-anchor ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}stagewise-companion-anchor ::-webkit-inner-spin-button{height:auto}stagewise-companion-anchor ::-webkit-outer-spin-button{height:auto}stagewise-companion-anchor [hidden]:where(:not([hidden=until-found])){display:none!important}stagewise-companion-anchor stagewise-companion-anchor *{min-width:0;min-height:0;position:relative}}@layer components;@layer utilities{stagewise-companion-anchor .pointer-events-auto{pointer-events:auto!important}stagewise-companion-anchor .pointer-events-none{pointer-events:none!important}stagewise-companion-anchor .visible{visibility:visible!important}stagewise-companion-anchor .absolute{position:absolute!important}stagewise-companion-anchor .fixed{position:fixed!important}stagewise-companion-anchor .relative{position:relative!important}stagewise-companion-anchor .inset-0{inset:calc(var(--spacing)*0)!important}stagewise-companion-anchor .top-0{top:calc(var(--spacing)*0)!important}stagewise-companion-anchor .top-1\\/2{top:50%!important}stagewise-companion-anchor .top-\\[-20\\%\\]{top:-20%!important}stagewise-companion-anchor .top-\\[25\\%\\]{top:25%!important}stagewise-companion-anchor .-right-1{right:calc(var(--spacing)*-1)!important}stagewise-companion-anchor .right-0{right:calc(var(--spacing)*0)!important}stagewise-companion-anchor .right-1\\/2{right:50%!important}stagewise-companion-anchor .right-2{right:calc(var(--spacing)*2)!important}stagewise-companion-anchor .-bottom-0\\.5{bottom:calc(var(--spacing)*-.5)!important}stagewise-companion-anchor .bottom-1\\/2{bottom:50%!important}stagewise-companion-anchor .bottom-3{bottom:calc(var(--spacing)*3)!important}stagewise-companion-anchor .bottom-5{bottom:calc(var(--spacing)*5)!important}stagewise-companion-anchor .left-0{left:calc(var(--spacing)*0)!important}stagewise-companion-anchor .left-1\\/2{left:50%!important}stagewise-companion-anchor .left-3{left:calc(var(--spacing)*3)!important}stagewise-companion-anchor .left-\\[-10\\%\\]{left:-10%!important}stagewise-companion-anchor .left-\\[25\\%\\]{left:25%!important}stagewise-companion-anchor .z-50{z-index:50!important}stagewise-companion-anchor .container{width:100%!important}@media (min-width:40rem){stagewise-companion-anchor .container{max-width:40rem!important}}@media (min-width:48rem){stagewise-companion-anchor .container{max-width:48rem!important}}@media (min-width:64rem){stagewise-companion-anchor .container{max-width:64rem!important}}@media (min-width:80rem){stagewise-companion-anchor .container{max-width:80rem!important}}@media (min-width:96rem){stagewise-companion-anchor .container{max-width:96rem!important}}stagewise-companion-anchor .block{display:block!important}stagewise-companion-anchor .contents{display:contents!important}stagewise-companion-anchor .flex{display:flex!important}stagewise-companion-anchor .hidden{display:none!important}stagewise-companion-anchor .inline{display:inline!important}stagewise-companion-anchor .aspect-square{aspect-ratio:1!important}stagewise-companion-anchor .size-0{width:calc(var(--spacing)*0)!important;height:calc(var(--spacing)*0)!important}stagewise-companion-anchor .size-1\\.5{width:calc(var(--spacing)*1.5)!important;height:calc(var(--spacing)*1.5)!important}stagewise-companion-anchor .size-2\\/3{width:66.6667%!important;height:66.6667%!important}stagewise-companion-anchor .size-3{width:calc(var(--spacing)*3)!important;height:calc(var(--spacing)*3)!important}stagewise-companion-anchor .size-4{width:calc(var(--spacing)*4)!important;height:calc(var(--spacing)*4)!important}stagewise-companion-anchor .size-5{width:calc(var(--spacing)*5)!important;height:calc(var(--spacing)*5)!important}stagewise-companion-anchor .size-6{width:calc(var(--spacing)*6)!important;height:calc(var(--spacing)*6)!important}stagewise-companion-anchor .size-8{width:calc(var(--spacing)*8)!important;height:calc(var(--spacing)*8)!important}stagewise-companion-anchor .size-9\\/12{width:75%!important;height:75%!important}stagewise-companion-anchor .size-12{width:calc(var(--spacing)*12)!important;height:calc(var(--spacing)*12)!important}stagewise-companion-anchor .size-\\[120\\%\\]{width:120%!important;height:120%!important}stagewise-companion-anchor .size-full{width:100%!important;height:100%!important}stagewise-companion-anchor .h-4{height:calc(var(--spacing)*4)!important}stagewise-companion-anchor .h-5{height:calc(var(--spacing)*5)!important}stagewise-companion-anchor .h-6{height:calc(var(--spacing)*6)!important}stagewise-companion-anchor .h-8{height:calc(var(--spacing)*8)!important}stagewise-companion-anchor .h-\\[4\\.5em\\]{height:4.5em!important}stagewise-companion-anchor .h-\\[50\\%\\]{height:50%!important}stagewise-companion-anchor .h-\\[120\\%\\]{height:120%!important}stagewise-companion-anchor .h-auto{height:auto!important}stagewise-companion-anchor .h-fit{height:-moz-fit-content!important;height:fit-content!important}stagewise-companion-anchor .h-full{height:100%!important}stagewise-companion-anchor .h-screen{height:100vh!important}stagewise-companion-anchor .max-h-\\[50vh\\]{max-height:50vh!important}stagewise-companion-anchor .max-h-full{max-height:100%!important}stagewise-companion-anchor .w-0{width:calc(var(--spacing)*0)!important}stagewise-companion-anchor .w-6{width:calc(var(--spacing)*6)!important}stagewise-companion-anchor .w-80{width:calc(var(--spacing)*80)!important}stagewise-companion-anchor .w-96{width:calc(var(--spacing)*96)!important}stagewise-companion-anchor .w-\\[50\\%\\]{width:50%!important}stagewise-companion-anchor .w-fit{width:-moz-fit-content!important;width:fit-content!important}stagewise-companion-anchor .w-full{width:100%!important}stagewise-companion-anchor .w-max{width:-moz-max-content!important;width:max-content!important}stagewise-companion-anchor .w-screen{width:100vw!important}stagewise-companion-anchor .max-w-8{max-width:calc(var(--spacing)*8)!important}stagewise-companion-anchor .max-w-48{max-width:calc(var(--spacing)*48)!important}stagewise-companion-anchor .max-w-90{max-width:calc(var(--spacing)*90)!important}stagewise-companion-anchor .max-w-\\[80\\%\\]{max-width:80%!important}stagewise-companion-anchor .max-w-\\[80vw\\]{max-width:80vw!important}stagewise-companion-anchor .max-w-sm{max-width:var(--container-sm)!important}stagewise-companion-anchor .min-w-4{min-width:calc(var(--spacing)*4)!important}stagewise-companion-anchor .min-w-24{min-width:calc(var(--spacing)*24)!important}stagewise-companion-anchor .flex-1{flex:1!important}stagewise-companion-anchor .flex-shrink-0,stagewise-companion-anchor .shrink-0{flex-shrink:0!important}stagewise-companion-anchor .origin-center{transform-origin:50%!important}stagewise-companion-anchor .-translate-x-1\\/2{--tw-translate-x:calc(calc(1/2*100%)*-1)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}stagewise-companion-anchor .transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)!important}stagewise-companion-anchor .animate-pulse{animation:var(--animate-pulse)!important}stagewise-companion-anchor .cursor-grab{cursor:grab!important}stagewise-companion-anchor .cursor-pointer{cursor:pointer!important}stagewise-companion-anchor .resize{resize:both!important}stagewise-companion-anchor .resize-none{resize:none!important}stagewise-companion-anchor .snap-start{scroll-snap-align:start!important}stagewise-companion-anchor .flex-col{flex-direction:column!important}stagewise-companion-anchor .flex-row{flex-direction:row!important}stagewise-companion-anchor .items-center{align-items:center!important}stagewise-companion-anchor .items-end{align-items:flex-end!important}stagewise-companion-anchor .items-start{align-items:flex-start!important}stagewise-companion-anchor .items-stretch{align-items:stretch!important}stagewise-companion-anchor .justify-between{justify-content:space-between!important}stagewise-companion-anchor .justify-center{justify-content:center!important}stagewise-companion-anchor .justify-end{justify-content:flex-end!important}stagewise-companion-anchor .justify-start{justify-content:flex-start!important}stagewise-companion-anchor .gap-1{gap:calc(var(--spacing)*1)!important}stagewise-companion-anchor .gap-2{gap:calc(var(--spacing)*2)!important}stagewise-companion-anchor .gap-3{gap:calc(var(--spacing)*3)!important}stagewise-companion-anchor .truncate{text-overflow:ellipsis!important;white-space:nowrap!important;overflow:hidden!important}stagewise-companion-anchor .overflow-hidden{overflow:hidden!important}stagewise-companion-anchor .overflow-visible{overflow:visible!important}stagewise-companion-anchor .overflow-x-auto{overflow-x:auto!important}stagewise-companion-anchor .overflow-x-hidden{overflow-x:hidden!important}stagewise-companion-anchor .overflow-y-auto{overflow-y:auto!important}stagewise-companion-anchor .overflow-y-visible{overflow-y:visible!important}stagewise-companion-anchor .rounded{border-radius:.25rem!important}stagewise-companion-anchor .rounded-2xl{border-radius:var(--radius-2xl)!important}stagewise-companion-anchor .rounded-3xl{border-radius:var(--radius-3xl)!important}stagewise-companion-anchor .rounded-full{border-radius:3.40282e38px!important}stagewise-companion-anchor .rounded-lg{border-radius:var(--radius-lg)!important}stagewise-companion-anchor .rounded-md{border-radius:var(--radius-md)!important}stagewise-companion-anchor .rounded-xl{border-radius:var(--radius-xl)!important}stagewise-companion-anchor .rounded-t-3xl{border-top-left-radius:var(--radius-3xl)!important;border-top-right-radius:var(--radius-3xl)!important}stagewise-companion-anchor .border{border-style:var(--tw-border-style)!important;border-width:1px!important}stagewise-companion-anchor .border-2{border-style:var(--tw-border-style)!important;border-width:2px!important}stagewise-companion-anchor .border-x{border-inline-style:var(--tw-border-style)!important;border-inline-width:1px!important}stagewise-companion-anchor .border-t{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}stagewise-companion-anchor .border-r{border-right-style:var(--tw-border-style)!important;border-right-width:1px!important}stagewise-companion-anchor .border-solid{--tw-border-style:solid!important;border-style:solid!important}stagewise-companion-anchor .border-blue-600\\/80{border-color:#155dfccc!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .border-blue-600\\/80{border-color:color-mix(in oklab,var(--color-blue-600)80%,transparent)!important}}stagewise-companion-anchor .border-border\\/10{border-color:#71717b1a!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .border-border\\/10{border-color:color-mix(in oklab,var(--color-border)10%,transparent)!important}}stagewise-companion-anchor .border-border\\/20{border-color:#71717b33!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .border-border\\/20{border-color:color-mix(in oklab,var(--color-border)20%,transparent)!important}}stagewise-companion-anchor .border-border\\/30{border-color:#71717b4d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .border-border\\/30{border-color:color-mix(in oklab,var(--color-border)30%,transparent)!important}}stagewise-companion-anchor .border-green-600\\/80{border-color:#00a544cc!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .border-green-600\\/80{border-color:color-mix(in oklab,var(--color-green-600)80%,transparent)!important}}stagewise-companion-anchor .border-r-border\\/30{border-right-color:#71717b4d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .border-r-border\\/30{border-right-color:color-mix(in oklab,var(--color-border)30%,transparent)!important}}stagewise-companion-anchor .border-l-transparent{border-left-color:#0000!important}stagewise-companion-anchor .bg-background\\/40{background-color:#fff6!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-background\\/40{background-color:color-mix(in oklab,var(--color-background)40%,transparent)!important}}stagewise-companion-anchor .bg-background\\/60{background-color:#fff9!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-background\\/60{background-color:color-mix(in oklab,var(--color-background)60%,transparent)!important}}stagewise-companion-anchor .bg-blue-600{background-color:var(--color-blue-600)!important}stagewise-companion-anchor .bg-blue-600\\/20{background-color:#155dfc33!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-blue-600\\/20{background-color:color-mix(in oklab,var(--color-blue-600)20%,transparent)!important}}stagewise-companion-anchor .bg-green-600\\/5{background-color:#00a5440d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-green-600\\/5{background-color:color-mix(in oklab,var(--color-green-600)5%,transparent)!important}}stagewise-companion-anchor .bg-muted-foreground{background-color:var(--color-muted-foreground)!important}stagewise-companion-anchor .bg-rose-600{background-color:var(--color-rose-600)!important}stagewise-companion-anchor .bg-transparent{background-color:#0000!important}stagewise-companion-anchor .bg-white\\/60{background-color:#fff9!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-white\\/60{background-color:color-mix(in oklab,var(--color-white)60%,transparent)!important}}stagewise-companion-anchor .bg-zinc-50\\/80{background-color:#fafafacc!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-zinc-50\\/80{background-color:color-mix(in oklab,var(--color-zinc-50)80%,transparent)!important}}stagewise-companion-anchor .bg-zinc-500{background-color:var(--color-zinc-500)!important}stagewise-companion-anchor .bg-zinc-500\\/10{background-color:#71717b1a!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-zinc-500\\/10{background-color:color-mix(in oklab,var(--color-zinc-500)10%,transparent)!important}}stagewise-companion-anchor .bg-zinc-950\\/5{background-color:#09090b0d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-zinc-950\\/5{background-color:color-mix(in oklab,var(--color-zinc-950)5%,transparent)!important}}stagewise-companion-anchor .bg-gradient-to-tr{--tw-gradient-position:to top right in oklab!important;background-image:linear-gradient(var(--tw-gradient-stops))!important}stagewise-companion-anchor .bg-\\[radial-gradient\\(circle\\,rgba\\(55\\,48\\,163\\,0\\)_55\\%\\,rgba\\(55\\,48\\,163\\,0\\.35\\)_73\\%\\)\\]{background-image:radial-gradient(circle,#3730a300 55%,#3730a359 73%)!important}stagewise-companion-anchor .bg-\\[radial-gradient\\(circle\\,rgba\\(219\\,39\\,119\\,0\\.2\\)_0\\%\\,rgba\\(219\\,39\\,119\\,0\\)_100\\%\\)\\]{background-image:radial-gradient(circle,#db277733 0%,#db277700 100%)!important}stagewise-companion-anchor .bg-\\[radial-gradient\\(circle\\,rgba\\(255\\,255\\,255\\,0\\)_60\\%\\,rgba\\(255\\,255\\,255\\,0\\.2\\)_70\\%\\)\\]{background-image:radial-gradient(circle,#fff0 60%,#fff3 70%)!important}stagewise-companion-anchor .from-indigo-700{--tw-gradient-from:var(--color-indigo-700)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .via-blue-500{--tw-gradient-via:var(--color-blue-500)!important;--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-via-stops)!important}stagewise-companion-anchor .to-teal-500{--tw-gradient-to:var(--color-teal-500)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .fill-current{fill:currentColor!important}stagewise-companion-anchor .fill-white{fill:var(--color-white)!important}stagewise-companion-anchor .fill-zinc-500\\/50{fill:#71717b80!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .fill-zinc-500\\/50{fill:color-mix(in oklab,var(--color-zinc-500)50%,transparent)!important}}stagewise-companion-anchor .fill-zinc-950{fill:var(--color-zinc-950)!important}stagewise-companion-anchor .stroke-black\\/30{stroke:#0000004d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .stroke-black\\/30{stroke:color-mix(in oklab,var(--color-black)30%,transparent)!important}}stagewise-companion-anchor .stroke-none{stroke:none!important}stagewise-companion-anchor .stroke-1{stroke-width:1px!important}stagewise-companion-anchor .p-0{padding:calc(var(--spacing)*0)!important}stagewise-companion-anchor .p-0\\.5{padding:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .p-1{padding:calc(var(--spacing)*1)!important}stagewise-companion-anchor .p-1\\.5{padding:calc(var(--spacing)*1.5)!important}stagewise-companion-anchor .p-2{padding:calc(var(--spacing)*2)!important}stagewise-companion-anchor .p-3{padding:calc(var(--spacing)*3)!important}stagewise-companion-anchor .px-0\\.5{padding-inline:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .px-1{padding-inline:calc(var(--spacing)*1)!important}stagewise-companion-anchor .px-2{padding-inline:calc(var(--spacing)*2)!important}stagewise-companion-anchor .px-3{padding-inline:calc(var(--spacing)*3)!important}stagewise-companion-anchor .py-0{padding-block:calc(var(--spacing)*0)!important}stagewise-companion-anchor .py-1{padding-block:calc(var(--spacing)*1)!important}stagewise-companion-anchor .pt-2{padding-top:calc(var(--spacing)*2)!important}stagewise-companion-anchor .pr-6{padding-right:calc(var(--spacing)*6)!important}stagewise-companion-anchor .pb-0{padding-bottom:calc(var(--spacing)*0)!important}stagewise-companion-anchor .pb-2{padding-bottom:calc(var(--spacing)*2)!important}stagewise-companion-anchor .pl-2{padding-left:calc(var(--spacing)*2)!important}stagewise-companion-anchor .text-base{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}stagewise-companion-anchor .text-sm{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}stagewise-companion-anchor .text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}stagewise-companion-anchor .font-bold{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}stagewise-companion-anchor .font-normal{--tw-font-weight:var(--font-weight-normal)!important;font-weight:var(--font-weight-normal)!important}stagewise-companion-anchor .font-semibold{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}stagewise-companion-anchor .text-border\\/60{color:#71717b99!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .text-border\\/60{color:color-mix(in oklab,var(--color-border)60%,transparent)!important}}stagewise-companion-anchor .text-foreground{color:var(--color-foreground)!important}stagewise-companion-anchor .text-muted-foreground{color:var(--color-muted-foreground)!important}stagewise-companion-anchor .text-muted-foreground\\/30{color:#3f3f464d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .text-muted-foreground\\/30{color:color-mix(in oklab,var(--color-muted-foreground)30%,transparent)!important}}stagewise-companion-anchor .text-transparent{color:#0000!important}stagewise-companion-anchor .text-white{color:var(--color-white)!important}stagewise-companion-anchor .text-zinc-50{color:var(--color-zinc-50)!important}stagewise-companion-anchor .text-zinc-950{color:var(--color-zinc-950)!important}stagewise-companion-anchor .text-zinc-950\\/50{color:#09090b80!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .text-zinc-950\\/50{color:color-mix(in oklab,var(--color-zinc-950)50%,transparent)!important}}stagewise-companion-anchor .opacity-20{opacity:.2!important}stagewise-companion-anchor .opacity-50{opacity:.5!important}stagewise-companion-anchor .opacity-80{opacity:.8!important}stagewise-companion-anchor .opacity-100{opacity:1!important}stagewise-companion-anchor .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-inner{--tw-shadow:inset 0 2px 4px 0 var(--tw-shadow-color,#0000000d)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .ring-2{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-black\\/50{--tw-shadow-color:#00000080!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .shadow-black\\/50{--tw-shadow-color:color-mix(in oklab,color-mix(in oklab,var(--color-black)50%,transparent)var(--tw-shadow-alpha),transparent)!important}}stagewise-companion-anchor .shadow-blue-600\\/50{--tw-shadow-color:#155dfc80!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .shadow-blue-600\\/50{--tw-shadow-color:color-mix(in oklab,color-mix(in oklab,var(--color-blue-600)50%,transparent)var(--tw-shadow-alpha),transparent)!important}}stagewise-companion-anchor .ring-blue-600{--tw-ring-color:var(--color-blue-600)!important}stagewise-companion-anchor .blur{--tw-blur:blur(8px)!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-md{--tw-drop-shadow-size:drop-shadow(0 3px 3px var(--tw-drop-shadow-color,#0000001f))!important;--tw-drop-shadow:drop-shadow(var(--drop-shadow-md))!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-xl{--tw-drop-shadow-size:drop-shadow(0 9px 7px var(--tw-drop-shadow-color,#0000001a))!important;--tw-drop-shadow:drop-shadow(var(--drop-shadow-xl))!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-xs{--tw-drop-shadow-size:drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000d))!important;--tw-drop-shadow:drop-shadow(var(--drop-shadow-xs))!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-black{--tw-drop-shadow-color:#000!important;--tw-drop-shadow:var(--tw-drop-shadow-size)!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .drop-shadow-black{--tw-drop-shadow-color:color-mix(in oklab,var(--color-black)var(--tw-drop-shadow-alpha),transparent)!important}}stagewise-companion-anchor .drop-shadow-indigo-950{--tw-drop-shadow-color:oklch(25.7% .09 281.288)!important;--tw-drop-shadow:var(--tw-drop-shadow-size)!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .drop-shadow-indigo-950{--tw-drop-shadow-color:color-mix(in oklab,var(--color-indigo-950)var(--tw-drop-shadow-alpha),transparent)!important}}stagewise-companion-anchor .filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .backdrop-blur-lg{--tw-backdrop-blur:blur(var(--blur-lg))!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}stagewise-companion-anchor .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md))!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}stagewise-companion-anchor .backdrop-blur-xs{--tw-backdrop-blur:blur(var(--blur-xs))!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}stagewise-companion-anchor .backdrop-saturate-150{--tw-backdrop-saturate:saturate(150%)!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}stagewise-companion-anchor .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}stagewise-companion-anchor .transition-all{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}stagewise-companion-anchor .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}stagewise-companion-anchor .duration-0{--tw-duration:0s!important;transition-duration:0s!important}stagewise-companion-anchor .duration-100{--tw-duration:.1s!important;transition-duration:.1s!important}stagewise-companion-anchor .duration-150{--tw-duration:.15s!important;transition-duration:.15s!important}stagewise-companion-anchor .duration-500{--tw-duration:.5s!important;transition-duration:.5s!important}stagewise-companion-anchor .outline-none{--tw-outline-style:none!important;outline-style:none!important}stagewise-companion-anchor .select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::-moz-placeholder{color:#09090b80!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::placeholder{color:#09090b80!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::-moz-placeholder{color:color-mix(in oklab,var(--color-zinc-950)50%,transparent)!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::placeholder{color:color-mix(in oklab,var(--color-zinc-950)50%,transparent)!important}}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::-moz-placeholder{color:#09090bb3!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::placeholder{color:#09090bb3!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::-moz-placeholder{color:color-mix(in oklab,var(--color-zinc-950)70%,transparent)!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::placeholder{color:color-mix(in oklab,var(--color-zinc-950)70%,transparent)!important}}stagewise-companion-anchor .first\\:border-none:first-child{--tw-border-style:none!important;border-style:none!important}stagewise-companion-anchor .first\\:pl-0:first-child{padding-left:calc(var(--spacing)*0)!important}stagewise-companion-anchor .last\\:border-r-transparent:last-child{border-right-color:#0000!important}stagewise-companion-anchor .last\\:pr-0:last-child{padding-right:calc(var(--spacing)*0)!important}@media (hover:hover){stagewise-companion-anchor .hover\\:border-red-600\\/80:hover{border-color:#e40014cc!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .hover\\:border-red-600\\/80:hover{border-color:color-mix(in oklab,var(--color-red-600)80%,transparent)!important}}stagewise-companion-anchor .hover\\:bg-red-600\\/20:hover{background-color:#e4001433!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .hover\\:bg-red-600\\/20:hover{background-color:color-mix(in oklab,var(--color-red-600)20%,transparent)!important}}stagewise-companion-anchor .hover\\:bg-zinc-950\\/5:hover{background-color:#09090b0d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .hover\\:bg-zinc-950\\/5:hover{background-color:color-mix(in oklab,var(--color-zinc-950)5%,transparent)!important}}stagewise-companion-anchor .hover\\:bg-zinc-950\\/10:hover{background-color:#09090b1a!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .hover\\:bg-zinc-950\\/10:hover{background-color:color-mix(in oklab,var(--color-zinc-950)10%,transparent)!important}}stagewise-companion-anchor .hover\\:text-muted-foreground:hover{color:var(--color-muted-foreground)!important}stagewise-companion-anchor .hover\\:text-white:hover{color:var(--color-white)!important}stagewise-companion-anchor .hover\\:opacity-100:hover{opacity:1!important}stagewise-companion-anchor .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .hover\\:backdrop-blur-sm:hover{--tw-backdrop-blur:blur(var(--blur-sm))!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}}stagewise-companion-anchor .focus\\:cursor-grabbing:focus{cursor:grabbing!important}stagewise-companion-anchor .focus\\:text-zinc-900:focus{color:var(--color-zinc-900)!important}stagewise-companion-anchor .focus\\:outline-none:focus,stagewise-companion-anchor .data-focus\\:outline-none[data-focus]{--tw-outline-style:none!important;outline-style:none!important}}stagewise-companion-anchor stagewise-companion-anchor{all:initial;interpolate-size:allow-keywords;transform:translate(0);color:var(--color-zinc-950)!important;letter-spacing:normal!important;text-rendering:auto!important;font-family:Inter,Noto Color Emoji,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,SF Compact,SF Pro,Helvetica Neue,sans-serif!important;font-weight:400!important;line-height:normal!important}@supports (font-variation-settings:normal){stagewise-companion-anchor stagewise-companion-anchor{font-optical-sizing:auto!important;font-family:InterVariable,Noto Color Emoji,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,SF Compact,SF Pro,Helvetica Neue,sans-serif!important}}stagewise-companion-anchor #headlessui-portal-root{z-index:50!important;width:100vw!important;height:100vh!important;position:fixed!important}stagewise-companion-anchor #headlessui-portal-root>*{pointer-events:auto!important}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@keyframes pulse{50%{opacity:.5}}\n';
  var f$8 = 0;
  function u$9(e2, t2, n2, o2, i2, u2) {
    t2 || (t2 = {});
    var a2, c2, p2 = t2;
    if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
    var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f$8, __i: -1, __u: 0, __source: i2, __self: u2 };
    if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
    return l$4.vnode && l$4.vnode(l2), l2;
  }
  var t$5, r$4, u$8, i$7, o$8 = 0, f$7 = [], c$6 = l$4, e$4 = c$6.__b, a$a = c$6.__r, v$2 = c$6.diffed, l$3 = c$6.__c, m$5 = c$6.unmount, s$8 = c$6.__;
  function p$3(n2, t2) {
    c$6.__h && c$6.__h(r$4, n2, o$8 || t2), o$8 = 0;
    var u2 = r$4.__H || (r$4.__H = { __: [], __h: [] });
    return n2 >= u2.__.length && u2.__.push({}), u2.__[n2];
  }
  function d$4(n2) {
    return o$8 = 1, h$5(D$2, n2);
  }
  function h$5(n2, u2, i2) {
    var o2 = p$3(t$5++, 2);
    if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : D$2(void 0, u2), function(n3) {
      var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
      t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
    }], o2.__c = r$4, !r$4.__f)) {
      var f2 = function(n3, t2, r2) {
        if (!o2.__c.__H) return true;
        var u3 = o2.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u3.every(function(n4) {
          return !n4.__N;
        })) return !c2 || c2.call(this, n3, t2, r2);
        var i3 = o2.__c.props !== n3;
        return u3.forEach(function(n4) {
          if (n4.__N) {
            var t3 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
          }
        }), c2 && c2.call(this, n3, t2, r2) || i3;
      };
      r$4.__f = true;
      var c2 = r$4.shouldComponentUpdate, e2 = r$4.componentWillUpdate;
      r$4.componentWillUpdate = function(n3, t2, r2) {
        if (this.__e) {
          var u3 = c2;
          c2 = void 0, f2(n3, t2, r2), c2 = u3;
        }
        e2 && e2.call(this, n3, t2, r2);
      }, r$4.shouldComponentUpdate = f2;
    }
    return o2.__N || o2.__;
  }
  function y$6(n2, u2) {
    var i2 = p$3(t$5++, 3);
    !c$6.__s && C$4(i2.__H, u2) && (i2.__ = n2, i2.u = u2, r$4.__H.__h.push(i2));
  }
  function _$3(n2, u2) {
    var i2 = p$3(t$5++, 4);
    !c$6.__s && C$4(i2.__H, u2) && (i2.__ = n2, i2.u = u2, r$4.__h.push(i2));
  }
  function A$3(n2) {
    return o$8 = 5, T$5(function() {
      return { current: n2 };
    }, []);
  }
  function F$5(n2, t2, r2) {
    o$8 = 6, _$3(function() {
      if ("function" == typeof n2) {
        var r3 = n2(t2());
        return function() {
          n2(null), r3 && "function" == typeof r3 && r3();
        };
      }
      if (n2) return n2.current = t2(), function() {
        return n2.current = null;
      };
    }, null == r2 ? r2 : r2.concat(n2));
  }
  function T$5(n2, r2) {
    var u2 = p$3(t$5++, 7);
    return C$4(u2.__H, r2) && (u2.__ = n2(), u2.__H = r2, u2.__h = n2), u2.__;
  }
  function q$3(n2, t2) {
    return o$8 = 8, T$5(function() {
      return n2;
    }, t2);
  }
  function x$4(n2) {
    var u2 = r$4.context[n2.__c], i2 = p$3(t$5++, 9);
    return i2.c = n2, u2 ? (null == i2.__ && (i2.__ = true, u2.sub(r$4)), u2.props.value) : n2.__;
  }
  function P$5(n2, t2) {
    c$6.useDebugValue && c$6.useDebugValue(t2 ? t2(n2) : n2);
  }
  function b$4(n2) {
    var u2 = p$3(t$5++, 10), i2 = d$4();
    return u2.__ = n2, r$4.componentDidCatch || (r$4.componentDidCatch = function(n3, t2) {
      u2.__ && u2.__(n3, t2), i2[1](n3);
    }), [i2[0], function() {
      i2[1](void 0);
    }];
  }
  function g$3() {
    var n2 = p$3(t$5++, 11);
    if (!n2.__) {
      for (var u2 = r$4.__v; null !== u2 && !u2.__m && null !== u2.__; ) u2 = u2.__;
      var i2 = u2.__m || (u2.__m = [0, 0]);
      n2.__ = "P" + i2[0] + "-" + i2[1]++;
    }
    return n2.__;
  }
  function j$4() {
    for (var n2; n2 = f$7.shift(); ) if (n2.__P && n2.__H) try {
      n2.__H.__h.forEach(z$2), n2.__H.__h.forEach(B$2), n2.__H.__h = [];
    } catch (t2) {
      n2.__H.__h = [], c$6.__e(t2, n2.__v);
    }
  }
  c$6.__b = function(n2) {
    r$4 = null, e$4 && e$4(n2);
  }, c$6.__ = function(n2, t2) {
    n2 && t2.__k && t2.__k.__m && (n2.__m = t2.__k.__m), s$8 && s$8(n2, t2);
  }, c$6.__r = function(n2) {
    a$a && a$a(n2), t$5 = 0;
    var i2 = (r$4 = n2.__c).__H;
    i2 && (u$8 === r$4 ? (i2.__h = [], r$4.__h = [], i2.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
    })) : (i2.__h.forEach(z$2), i2.__h.forEach(B$2), i2.__h = [], t$5 = 0)), u$8 = r$4;
  }, c$6.diffed = function(n2) {
    v$2 && v$2(n2);
    var t2 = n2.__c;
    t2 && t2.__H && (t2.__H.__h.length && (1 !== f$7.push(t2) && i$7 === c$6.requestAnimationFrame || ((i$7 = c$6.requestAnimationFrame) || w$4)(j$4)), t2.__H.__.forEach(function(n3) {
      n3.u && (n3.__H = n3.u), n3.u = void 0;
    })), u$8 = r$4 = null;
  }, c$6.__c = function(n2, t2) {
    t2.some(function(n3) {
      try {
        n3.__h.forEach(z$2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B$2(n4);
        });
      } catch (r2) {
        t2.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t2 = [], c$6.__e(r2, n3.__v);
      }
    }), l$3 && l$3(n2, t2);
  }, c$6.unmount = function(n2) {
    m$5 && m$5(n2);
    var t2, r2 = n2.__c;
    r2 && r2.__H && (r2.__H.__.forEach(function(n3) {
      try {
        z$2(n3);
      } catch (n4) {
        t2 = n4;
      }
    }), r2.__H = void 0, t2 && c$6.__e(t2, r2.__v));
  };
  var k$2 = "function" == typeof requestAnimationFrame;
  function w$4(n2) {
    var t2, r2 = function() {
      clearTimeout(u2), k$2 && cancelAnimationFrame(t2), setTimeout(n2);
    }, u2 = setTimeout(r2, 100);
    k$2 && (t2 = requestAnimationFrame(r2));
  }
  function z$2(n2) {
    var t2 = r$4, u2 = n2.__c;
    "function" == typeof u2 && (n2.__c = void 0, u2()), r$4 = t2;
  }
  function B$2(n2) {
    var t2 = r$4;
    n2.__c = n2.__(), r$4 = t2;
  }
  function C$4(n2, t2) {
    return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
      return t3 !== n2[r2];
    });
  }
  function D$2(n2, t2) {
    return "function" == typeof t2 ? t2(n2) : t2;
  }
  const PluginContext = K$3([]);
  function PluginProvider({
    children,
    plugins
  }) {
    return /* @__PURE__ */ u$9(PluginContext.Provider, { value: plugins, children });
  }
  function usePlugins() {
    const plugin = x$4(PluginContext);
    if (!plugin) return [];
    return plugin;
  }
  function g$2(n2, t2) {
    for (var e2 in t2) n2[e2] = t2[e2];
    return n2;
  }
  function E$2(n2, t2) {
    for (var e2 in n2) if ("__source" !== e2 && !(e2 in t2)) return true;
    for (var r2 in t2) if ("__source" !== r2 && n2[r2] !== t2[r2]) return true;
    return false;
  }
  function C$3(n2, t2) {
    var e2 = t2(), r2 = d$4({ t: { __: e2, u: t2 } }), u2 = r2[0].t, o2 = r2[1];
    return _$3(function() {
      u2.__ = e2, u2.u = t2, x$3(u2) && o2({ t: u2 });
    }, [n2, e2, t2]), y$6(function() {
      return x$3(u2) && o2({ t: u2 }), n2(function() {
        x$3(u2) && o2({ t: u2 });
      });
    }, [n2]), e2;
  }
  function x$3(n2) {
    var t2, e2, r2 = n2.u, u2 = n2.__;
    try {
      var o2 = r2();
      return !((t2 = u2) === (e2 = o2) && (0 !== t2 || 1 / t2 == 1 / e2) || t2 != t2 && e2 != e2);
    } catch (n3) {
      return true;
    }
  }
  function R$3(n2) {
    n2();
  }
  function w$3(n2) {
    return n2;
  }
  function k$1() {
    return [false, R$3];
  }
  var I$3 = _$3;
  function N$1(n2, t2) {
    this.props = n2, this.context = t2;
  }
  function M$3(n2, e2) {
    function r2(n3) {
      var t2 = this.props.ref, r3 = t2 == n3.ref;
      return !r3 && t2 && (t2.call ? t2(null) : t2.current = null), e2 ? !e2(this.props, n3) || !r3 : E$2(this.props, n3);
    }
    function u2(e3) {
      return this.shouldComponentUpdate = r2, _$4(n2, e3);
    }
    return u2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u2.prototype.isReactComponent = true, u2.__f = true, u2;
  }
  (N$1.prototype = new x$5()).isPureReactComponent = true, N$1.prototype.shouldComponentUpdate = function(n2, t2) {
    return E$2(this.props, n2) || E$2(this.state, t2);
  };
  var T$4 = l$4.__b;
  l$4.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), T$4 && T$4(n2);
  };
  var A$2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function D$1(n2) {
    function t2(t3) {
      var e2 = g$2({}, t3);
      return delete e2.ref, n2(e2, t3.ref || null);
    }
    return t2.$$typeof = A$2, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
  }
  var L$3 = function(n2, t2) {
    return null == n2 ? null : H$6(H$6(n2).map(t2));
  }, O$2 = { map: L$3, forEach: L$3, count: function(n2) {
    return n2 ? H$6(n2).length : 0;
  }, only: function(n2) {
    var t2 = H$6(n2);
    if (1 !== t2.length) throw "Children.only";
    return t2[0];
  }, toArray: H$6 }, F$4 = l$4.__e;
  l$4.__e = function(n2, t2, e2, r2) {
    if (n2.then) {
      for (var u2, o2 = t2; o2 = o2.__; ) if ((u2 = o2.__c) && u2.__c) return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
    }
    F$4(n2, t2, e2, r2);
  };
  var U$3 = l$4.unmount;
  function V$1(n2, t2, e2) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g$2({}, n2)).__c && (n2.__c.__P === e2 && (n2.__c.__P = t2), n2.__c.__e = true, n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return V$1(n3, t2, e2);
    })), n2;
  }
  function W(n2, t2, e2) {
    return n2 && e2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return W(n3, t2, e2);
    }), n2.__c && n2.__c.__P === t2 && (n2.__e && e2.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e2)), n2;
  }
  function P$4() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function j$3(n2) {
    var t2 = n2.__.__c;
    return t2 && t2.__a && t2.__a(n2);
  }
  function z$1(n2) {
    var e2, r2, u2;
    function o2(o3) {
      if (e2 || (e2 = n2()).then(function(n3) {
        r2 = n3.default || n3;
      }, function(n3) {
        u2 = n3;
      }), u2) throw u2;
      if (!r2) throw e2;
      return _$4(r2, o3);
    }
    return o2.displayName = "Lazy", o2.__f = true, o2;
  }
  function B$1() {
    this.i = null, this.l = null;
  }
  l$4.unmount = function(n2) {
    var t2 = n2.__c;
    t2 && t2.__R && t2.__R(), t2 && 32 & n2.__u && (n2.type = null), U$3 && U$3(n2);
  }, (P$4.prototype = new x$5()).__c = function(n2, t2) {
    var e2 = t2.__c, r2 = this;
    null == r2.o && (r2.o = []), r2.o.push(e2);
    var u2 = j$3(r2.__v), o2 = false, i2 = function() {
      o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
    };
    e2.__R = i2;
    var l2 = function() {
      if (!--r2.__u) {
        if (r2.state.__a) {
          var n3 = r2.state.__a;
          r2.__v.__k[0] = W(n3, n3.__c.__P, n3.__c.__O);
        }
        var t3;
        for (r2.setState({ __a: r2.__b = null }); t3 = r2.o.pop(); ) t3.forceUpdate();
      }
    };
    r2.__u++ || 32 & t2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
  }, P$4.prototype.componentWillUnmount = function() {
    this.o = [];
  }, P$4.prototype.render = function(n2, e2) {
    if (this.__b) {
      if (this.__v.__k) {
        var r2 = document.createElement("div"), o2 = this.__v.__k[0].__c;
        this.__v.__k[0] = V$1(this.__b, r2, o2.__O = o2.__P);
      }
      this.__b = null;
    }
    var i2 = e2.__a && _$4(k$3, null, n2.fallback);
    return i2 && (i2.__u &= -33), [_$4(k$3, null, e2.__a ? null : n2.children), i2];
  };
  var H$5 = function(n2, t2, e2) {
    if (++e2[1] === e2[0] && n2.l.delete(t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.l.size)) for (e2 = n2.i; e2; ) {
      for (; e2.length > 3; ) e2.pop()();
      if (e2[1] < e2[0]) break;
      n2.i = e2 = e2[2];
    }
  };
  function Z(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function Y(n2) {
    var e2 = this, r2 = n2.h;
    if (e2.componentWillUnmount = function() {
      E$3(null, e2.v), e2.v = null, e2.h = null;
    }, e2.h && e2.h !== r2 && e2.componentWillUnmount(), !e2.v) {
      for (var u2 = e2.__v; null !== u2 && !u2.__m && null !== u2.__; ) u2 = u2.__;
      e2.h = r2, e2.v = { nodeType: 1, parentNode: r2, childNodes: [], __k: { __m: u2.__m }, contains: function() {
        return true;
      }, appendChild: function(n3) {
        this.childNodes.push(n3), e2.h.appendChild(n3);
      }, insertBefore: function(n3, t2) {
        this.childNodes.push(n3), e2.h.insertBefore(n3, t2);
      }, removeChild: function(n3) {
        this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e2.h.removeChild(n3);
      } };
    }
    E$3(_$4(Z, { context: e2.context }, n2.__v), e2.v);
  }
  function $$1(n2, e2) {
    var r2 = _$4(Y, { __v: n2, h: e2 });
    return r2.containerInfo = e2, r2;
  }
  (B$1.prototype = new x$5()).__a = function(n2) {
    var t2 = this, e2 = j$3(t2.__v), r2 = t2.l.get(n2);
    return r2[0]++, function(u2) {
      var o2 = function() {
        t2.props.revealOrder ? (r2.push(u2), H$5(t2, n2, r2)) : u2();
      };
      e2 ? e2(o2) : o2();
    };
  }, B$1.prototype.render = function(n2) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var t2 = H$6(n2.children);
    n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
    for (var e2 = t2.length; e2--; ) this.l.set(t2[e2], this.i = [1, 0, this.i]);
    return n2.children;
  }, B$1.prototype.componentDidUpdate = B$1.prototype.componentDidMount = function() {
    var n2 = this;
    this.l.forEach(function(t2, e2) {
      H$5(n2, e2, t2);
    });
  };
  var q$2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, G$2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, J$3 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, K$2 = /[A-Z0-9]/g, Q = "undefined" != typeof document, X$1 = function(n2) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
  };
  function nn(n2, t2, e2) {
    return null == t2.__k && (t2.textContent = ""), E$3(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
  }
  function tn(n2, t2, e2) {
    return G$3(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
  }
  x$5.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
    Object.defineProperty(x$5.prototype, t2, { configurable: true, get: function() {
      return this["UNSAFE_" + t2];
    }, set: function(n2) {
      Object.defineProperty(this, t2, { configurable: true, writable: true, value: n2 });
    } });
  });
  var en = l$4.event;
  function rn() {
  }
  function un() {
    return this.cancelBubble;
  }
  function on() {
    return this.defaultPrevented;
  }
  l$4.event = function(n2) {
    return en && (n2 = en(n2)), n2.persist = rn, n2.isPropagationStopped = un, n2.isDefaultPrevented = on, n2.nativeEvent = n2;
  };
  var ln, cn$1 = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } }, fn = l$4.vnode;
  l$4.vnode = function(n2) {
    "string" == typeof n2.type && function(n3) {
      var t2 = n3.props, e2 = n3.type, u2 = {}, o2 = -1 === e2.indexOf("-");
      for (var i2 in t2) {
        var l2 = t2[i2];
        if (!("value" === i2 && "defaultValue" in t2 && null == l2 || Q && "children" === i2 && "noscript" === e2 || "class" === i2 || "className" === i2)) {
          var c2 = i2.toLowerCase();
          "defaultValue" === i2 && "value" in t2 && null == t2.value ? i2 = "value" : "download" === i2 && true === l2 ? l2 = "" : "translate" === c2 && "no" === l2 ? l2 = false : "o" === c2[0] && "n" === c2[1] ? "ondoubleclick" === c2 ? i2 = "ondblclick" : "onchange" !== c2 || "input" !== e2 && "textarea" !== e2 || X$1(t2.type) ? "onfocus" === c2 ? i2 = "onfocusin" : "onblur" === c2 ? i2 = "onfocusout" : J$3.test(i2) && (i2 = c2) : c2 = i2 = "oninput" : o2 && G$2.test(i2) ? i2 = i2.replace(K$2, "-$&").toLowerCase() : null === l2 && (l2 = void 0), "oninput" === c2 && u2[i2 = c2] && (i2 = "oninputCapture"), u2[i2] = l2;
        }
      }
      "select" == e2 && u2.multiple && Array.isArray(u2.value) && (u2.value = H$6(t2.children).forEach(function(n4) {
        n4.props.selected = -1 != u2.value.indexOf(n4.props.value);
      })), "select" == e2 && null != u2.defaultValue && (u2.value = H$6(t2.children).forEach(function(n4) {
        n4.props.selected = u2.multiple ? -1 != u2.defaultValue.indexOf(n4.props.value) : u2.defaultValue == n4.props.value;
      })), t2.class && !t2.className ? (u2.class = t2.class, Object.defineProperty(u2, "className", cn$1)) : (t2.className && !t2.class || t2.class && t2.className) && (u2.class = u2.className = t2.className), n3.props = u2;
    }(n2), n2.$$typeof = q$2, fn && fn(n2);
  };
  var an = l$4.__r;
  l$4.__r = function(n2) {
    an && an(n2), ln = n2.__c;
  };
  var sn = l$4.diffed;
  l$4.diffed = function(n2) {
    sn && sn(n2);
    var t2 = n2.props, e2 = n2.__e;
    null != e2 && "textarea" === n2.type && "value" in t2 && t2.value !== e2.value && (e2.value = null == t2.value ? "" : t2.value), ln = null;
  };
  var hn = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
    return ln.__n[n2.__c].props.value;
  }, useCallback: q$3, useContext: x$4, useDebugValue: P$5, useDeferredValue: w$3, useEffect: y$6, useId: g$3, useImperativeHandle: F$5, useInsertionEffect: I$3, useLayoutEffect: _$3, useMemo: T$5, useReducer: h$5, useRef: A$3, useState: d$4, useSyncExternalStore: C$3, useTransition: k$1 } } }, vn = "18.3.1";
  function dn(n2) {
    return _$4.bind(null, n2);
  }
  function mn(n2) {
    return !!n2 && n2.$$typeof === q$2;
  }
  function pn(n2) {
    return mn(n2) && n2.type === k$3;
  }
  function yn(n2) {
    return !!n2 && !!n2.displayName && ("string" == typeof n2.displayName || n2.displayName instanceof String) && n2.displayName.startsWith("Memo(");
  }
  function _n(n2) {
    return mn(n2) ? J$4.apply(null, arguments) : n2;
  }
  function bn(n2) {
    return !!n2.__k && (E$3(null, n2), true);
  }
  function Sn(n2) {
    return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
  }
  var gn = function(n2, t2) {
    return n2(t2);
  }, En = function(n2, t2) {
    return n2(t2);
  }, Cn = k$3, xn = mn, Rn = { useState: d$4, useId: g$3, useReducer: h$5, useEffect: y$6, useLayoutEffect: _$3, useInsertionEffect: I$3, useTransition: k$1, useDeferredValue: w$3, useSyncExternalStore: C$3, startTransition: R$3, useRef: A$3, useImperativeHandle: F$5, useMemo: T$5, useCallback: q$3, useContext: x$4, useDebugValue: P$5, version: "18.3.1", Children: O$2, render: nn, hydrate: tn, unmountComponentAtNode: bn, createPortal: $$1, createElement: _$4, createContext: K$3, createFactory: dn, cloneElement: _n, createRef: b$5, Fragment: k$3, isValidElement: mn, isElement: xn, isFragment: pn, isMemo: yn, findDOMNode: Sn, Component: x$5, PureComponent: N$1, memo: M$3, forwardRef: D$1, flushSync: En, unstable_batchedUpdates: gn, StrictMode: Cn, Suspense: P$4, SuspenseList: B$1, lazy: z$1, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn };
  const t$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    Children: O$2,
    Component: x$5,
    Fragment: k$3,
    PureComponent: N$1,
    StrictMode: Cn,
    Suspense: P$4,
    SuspenseList: B$1,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn,
    cloneElement: _n,
    createContext: K$3,
    createElement: _$4,
    createFactory: dn,
    createPortal: $$1,
    createRef: b$5,
    default: Rn,
    findDOMNode: Sn,
    flushSync: En,
    forwardRef: D$1,
    hydrate: tn,
    isElement: xn,
    isFragment: pn,
    isMemo: yn,
    isValidElement: mn,
    lazy: z$1,
    memo: M$3,
    render: nn,
    startTransition: R$3,
    unmountComponentAtNode: bn,
    unstable_batchedUpdates: gn,
    useCallback: q$3,
    useContext: x$4,
    useDebugValue: P$5,
    useDeferredValue: w$3,
    useEffect: y$6,
    useErrorBoundary: b$4,
    useId: g$3,
    useImperativeHandle: F$5,
    useInsertionEffect: I$3,
    useLayoutEffect: _$3,
    useMemo: T$5,
    useReducer: h$5,
    useRef: A$3,
    useState: d$4,
    useSyncExternalStore: C$3,
    useTransition: k$1,
    version: vn
  }, Symbol.toStringTag, { value: "Module" }));
  var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
    get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
  }) : x2)(function(x2) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x2 + '" is not supported');
  });
  var DEFAULT_OPTIONS = {
    maxReconnectAttempts: 5,
    reconnectDelay: 1e3,
    requestTimeout: 3e4
    // Extended timeout for longer operations
  };
  var WebSocketRpcBridge = class {
    constructor(options = {}) {
      this.ws = null;
      this.pendingRequests = /* @__PURE__ */ new Map();
      this.reconnectAttempts = 0;
      this.methods = {};
      this.isIntentionalClose = false;
      this.options = { ...DEFAULT_OPTIONS, ...options };
    }
    /**
     * Register RPC method handlers
     * @param methodHandlers Object containing method handlers
     */
    register(methodHandlers) {
      Object.entries(methodHandlers).forEach(([methodName, handler]) => {
        this.methods[methodName] = { handler };
      });
    }
    /**
     * Generic method to call a remote procedure with support for streaming updates
     * @param method Method name to call
     * @param payload Request payload
     * @param onUpdate Optional callback for progress updates
     * @returns Promise resolving with the response
     */
    callMethod(method, payload, onUpdate) {
      if (!this.ws) {
        throw new Error("WebSocket is not connected");
      }
      const id = crypto.randomUUID();
      const requestMessage = {
        id,
        messageType: "request",
        method,
        payload
      };
      return new Promise((resolve, reject) => {
        var _a;
        const timeout = setTimeout(() => {
          this.pendingRequests.delete(id);
          reject(new Error(`Request timed out: ${method}`));
        }, this.options.requestTimeout);
        this.pendingRequests.set(id, { resolve, reject, timeout, onUpdate });
        (_a = this.ws) == null ? void 0 : _a.send(JSON.stringify(requestMessage));
      });
    }
    /**
     * Sets up WebSocket event handlers
     * @param ws WebSocket instance
     */
    setupWebSocketHandlers(ws) {
      ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          this.handleMessage(message);
        } catch (error2) {
          console.error("Error handling WebSocket message:", error2);
        }
      };
      ws.onclose = () => {
        console.log("WebSocket disconnected");
        this.handleDisconnect();
      };
      ws.onerror = (event) => {
        console.error("WebSocket error:", event);
      };
    }
    /**
     * Handles incoming WebSocket messages
     * @param message The message to handle
     */
    handleMessage(message) {
      const { messageType, id } = message;
      switch (messageType) {
        case "request":
          this.handleRequest(message);
          break;
        case "response":
          this.handleResponse(id, message.payload);
          break;
        case "update":
          this.handleUpdate(id, message.payload);
          break;
        case "error":
          this.handleError(id, message.error.message);
          break;
        default:
          console.warn(`Unknown message type: ${messageType}`);
      }
    }
    /**
     * Handle incoming requests by invoking the registered method
     * @param message Request message
     */
    async handleRequest(message) {
      const { id, method, payload } = message;
      if (!method) {
        this.sendError(id, "Method name is required");
        return;
      }
      const methodDef = this.methods[method];
      if (!methodDef) {
        this.sendError(id, `Method not found: ${method}`);
        return;
      }
      try {
        const sendUpdate = (update) => {
          this.sendUpdate(id, method, update);
        };
        const result = await methodDef.handler(payload, sendUpdate);
        this.sendResponse(id, method, result);
      } catch (error2) {
        this.sendError(
          id,
          error2 instanceof Error ? error2.message : String(error2)
        );
      }
    }
    /**
     * Handle response messages by resolving the pending request
     * @param id Request ID
     * @param payload Response payload
     */
    handleResponse(id, payload) {
      const pendingRequest = this.pendingRequests.get(id);
      if (!pendingRequest) {
        console.warn(`Received response for unknown request ID: ${id}`);
        return;
      }
      clearTimeout(pendingRequest.timeout);
      this.pendingRequests.delete(id);
      pendingRequest.resolve(payload);
    }
    /**
     * Handle update messages by calling the update callback
     * @param id Request ID
     * @param payload Update payload
     */
    handleUpdate(id, payload) {
      const pendingRequest = this.pendingRequests.get(id);
      if (!pendingRequest || !pendingRequest.onUpdate) {
        console.warn(`Received update for unknown request ID: ${id}`);
        return;
      }
      pendingRequest.onUpdate(payload);
    }
    /**
     * Handle error messages by rejecting the pending request
     * @param id Request ID
     * @param error Error message
     */
    handleError(id, error2) {
      const pendingRequest = this.pendingRequests.get(id);
      if (!pendingRequest) {
        console.warn(`Received error for unknown request ID: ${id}`);
        return;
      }
      clearTimeout(pendingRequest.timeout);
      this.pendingRequests.delete(id);
      pendingRequest.reject(new Error(error2));
    }
    /**
     * Send a response message
     * @param id Request ID
     * @param method Method name
     * @param payload Response payload
     */
    sendResponse(id, method, payload) {
      if (!this.ws) {
        throw new Error("WebSocket is not connected");
      }
      const responseMessage = {
        id,
        messageType: "response",
        method,
        payload
      };
      this.ws.send(JSON.stringify(responseMessage));
    }
    /**
     * Send an update message for streaming
     * @param id Request ID
     * @param method Method name
     * @param payload Update payload
     */
    sendUpdate(id, method, payload) {
      if (!this.ws) {
        throw new Error("WebSocket is not connected");
      }
      const updateMessage = {
        id,
        messageType: "update",
        method,
        payload
      };
      this.ws.send(JSON.stringify(updateMessage));
    }
    /**
     * Send an error message
     * @param id Request ID
     * @param errorMessage Error message
     */
    sendError(id, errorMessage) {
      if (!this.ws) {
        throw new Error("WebSocket is not connected");
      }
      const errorResponse = {
        id,
        messageType: "error",
        error: {
          message: errorMessage
        }
      };
      this.ws.send(JSON.stringify(errorResponse));
    }
    /**
     * Handle disconnection by attempting to reconnect
     */
    handleDisconnect() {
      if (this.isIntentionalClose) {
        console.log(
          "WebSocket closed intentionally, not attempting to reconnect"
        );
        this.clearPendingRequests(new Error("Connection closed by user"));
        return;
      }
      if (this.reconnectAttempts < this.options.maxReconnectAttempts) {
        this.reconnectAttempts++;
        console.log(
          `Attempting to reconnect (${this.reconnectAttempts}/${this.options.maxReconnectAttempts})...`
        );
        setTimeout(
          () => this.reconnect(),
          this.options.reconnectDelay * this.reconnectAttempts
        );
      } else {
        console.error("Max reconnection attempts reached");
        this.clearPendingRequests(new Error("Connection closed"));
      }
    }
    /**
     * Clear all pending requests with an error
     * @param error Error to reject with
     */
    clearPendingRequests(error2) {
      this.pendingRequests.forEach(({ reject }) => {
        reject(error2);
      });
      this.pendingRequests.clear();
    }
    /**
     * Close the WebSocket connection
     * @returns Promise that resolves when the connection is closed
     */
    async close() {
      this.isIntentionalClose = true;
      if (this.ws) {
        this.ws.close();
        this.ws = null;
      }
      this.clearPendingRequests(new Error("Connection closed by user"));
    }
  };
  typeof window !== "undefined" ? window.WebSocket : __require("ws").WebSocket;
  function createBridgeContract(contract2) {
    return contract2;
  }
  function validateWithZod(schema, data, context, silent = false) {
    const result = schema.safeParse(data);
    if (!result.success) {
      const error2 = new Error(
        `Validation failed for ${context}: ${result.error.message}`
      );
      if (silent) {
        console.error(error2);
        return data;
      }
      throw error2;
    }
    return result.data;
  }
  var WebSocketImpl2 = typeof window !== "undefined" ? window.WebSocket : __require("ws").WebSocket;
  var ZodTypedBridge = class {
    constructor(bridge, contract2) {
      this.bridge = bridge;
      this.contract = contract2;
      this.call = new Proxy({}, {
        get: (target, prop) => {
          return (request, options) => {
            return this.callMethod(prop, request, options);
          };
        }
      });
    }
    async callMethod(method, request, options) {
      const methodContract = this.contract.consumes[method];
      if (!methodContract) {
        throw new Error(`Method ${String(method)} not found in contract`);
      }
      const validatedRequest = validateWithZod(
        methodContract.request,
        request,
        `request for method ${String(method)}`
      );
      const onUpdate = (options == null ? void 0 : options.onUpdate) && methodContract.update ? (update) => {
        var _a;
        if (!methodContract.update) return;
        try {
          const validatedUpdate = validateWithZod(
            methodContract.update,
            update,
            `update for method ${String(method)}`,
            true
            // silently log validation errors
          );
          (_a = options.onUpdate) == null ? void 0 : _a.call(options, validatedUpdate);
        } catch (error2) {
          console.error("Update validation failed:", error2);
        }
      } : void 0;
      const response = await this.bridge.callMethod(
        method,
        validatedRequest,
        onUpdate
      );
      return validateWithZod(
        methodContract.response,
        response,
        `response for method ${String(method)}`
      );
    }
    register(implementations) {
      const wrappedImplementations = {};
      for (const [method, implementation] of Object.entries(implementations)) {
        const methodContract = this.contract.serves[method];
        if (!methodContract) {
          throw new Error(`Method ${method} not found in contract`);
        }
        wrappedImplementations[method] = async (request, sendUpdate) => {
          const validatedRequest = validateWithZod(
            methodContract.request,
            request,
            `request for method ${method}`
          );
          const wrappedSendUpdate = methodContract.update && sendUpdate ? (update) => {
            if (!methodContract.update) return;
            try {
              const validatedUpdate = validateWithZod(
                methodContract.update,
                update,
                `update for method ${method}`,
                true
                // silently log validation errors
              );
              sendUpdate(validatedUpdate);
            } catch (error2) {
              console.error("Update validation failed:", error2);
            }
          } : void 0;
          const response = await implementation(validatedRequest, {
            sendUpdate: wrappedSendUpdate
          });
          return validateWithZod(
            methodContract.response,
            response,
            `response for method ${method}`
          );
        };
      }
      this.bridge.register(wrappedImplementations);
    }
    async close() {
      await this.bridge.close();
    }
  };
  var ClientBridge = class extends WebSocketRpcBridge {
    constructor(url, options) {
      super(options);
      this.reconnectTimer = null;
      this.url = url;
    }
    call(method, payload, onUpdate) {
      return this.callMethod(method, payload, onUpdate);
    }
    reconnect() {
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
      }
      this.reconnectTimer = setTimeout(async () => {
        try {
          await this.connect();
        } catch (error2) {
          this.reconnect();
        }
      }, this.options.reconnectDelay);
    }
    connect() {
      return new Promise((resolve, reject) => {
        try {
          const ws = new WebSocketImpl2(this.url);
          ws.onopen = () => {
            this.ws = ws;
            this.setupWebSocketHandlers(ws);
            resolve();
          };
          ws.onerror = () => {
            reject(new Error("Failed to connect to WebSocket server"));
          };
        } catch (error2) {
          reject(error2);
        }
      });
    }
  };
  var ZodClient = class extends ZodTypedBridge {
    constructor(url, contract2, options) {
      super(new ClientBridge(url, options), {
        serves: contract2.client || {},
        consumes: contract2.server || {}
      });
    }
    connect() {
      return this.bridge.connect();
    }
  };
  function createSRPCClientBridge(url, contract2, options) {
    return new ZodClient(url, contract2, options);
  }
  var util;
  (function(util2) {
    util2.assertEqual = (val) => val;
    function assertIs(_arg) {
    }
    util2.assertIs = assertIs;
    function assertNever(_x) {
      throw new Error();
    }
    util2.assertNever = assertNever;
    util2.arrayToEnum = (items) => {
      const obj = {};
      for (const item of items) {
        obj[item] = item;
      }
      return obj;
    };
    util2.getValidEnumValues = (obj) => {
      const validKeys = util2.objectKeys(obj).filter((k2) => typeof obj[obj[k2]] !== "number");
      const filtered = {};
      for (const k2 of validKeys) {
        filtered[k2] = obj[k2];
      }
      return util2.objectValues(filtered);
    };
    util2.objectValues = (obj) => {
      return util2.objectKeys(obj).map(function(e2) {
        return obj[e2];
      });
    };
    util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
      const keys = [];
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          keys.push(key);
        }
      }
      return keys;
    };
    util2.find = (arr, checker) => {
      for (const item of arr) {
        if (checker(item))
          return item;
      }
      return void 0;
    };
    util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
      return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util2.joinValues = joinValues;
    util2.jsonStringifyReplacer = (_2, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    };
  })(util || (util = {}));
  var objectUtil;
  (function(objectUtil2) {
    objectUtil2.mergeShapes = (first, second) => {
      return {
        ...first,
        ...second
        // second overwrites first
      };
    };
  })(objectUtil || (objectUtil = {}));
  const ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
  ]);
  const getParsedType = (data) => {
    const t2 = typeof data;
    switch (t2) {
      case "undefined":
        return ZodParsedType.undefined;
      case "string":
        return ZodParsedType.string;
      case "number":
        return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
      case "boolean":
        return ZodParsedType.boolean;
      case "function":
        return ZodParsedType.function;
      case "bigint":
        return ZodParsedType.bigint;
      case "symbol":
        return ZodParsedType.symbol;
      case "object":
        if (Array.isArray(data)) {
          return ZodParsedType.array;
        }
        if (data === null) {
          return ZodParsedType.null;
        }
        if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
          return ZodParsedType.promise;
        }
        if (typeof Map !== "undefined" && data instanceof Map) {
          return ZodParsedType.map;
        }
        if (typeof Set !== "undefined" && data instanceof Set) {
          return ZodParsedType.set;
        }
        if (typeof Date !== "undefined" && data instanceof Date) {
          return ZodParsedType.date;
        }
        return ZodParsedType.object;
      default:
        return ZodParsedType.unknown;
    }
  };
  const ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
  ]);
  const quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
  };
  class ZodError extends Error {
    get errors() {
      return this.issues;
    }
    constructor(issues) {
      super();
      this.issues = [];
      this.addIssue = (sub) => {
        this.issues = [...this.issues, sub];
      };
      this.addIssues = (subs = []) => {
        this.issues = [...this.issues, ...subs];
      };
      const actualProto = new.target.prototype;
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(this, actualProto);
      } else {
        this.__proto__ = actualProto;
      }
      this.name = "ZodError";
      this.issues = issues;
    }
    format(_mapper) {
      const mapper = _mapper || function(issue) {
        return issue.message;
      };
      const fieldErrors = { _errors: [] };
      const processError = (error2) => {
        for (const issue of error2.issues) {
          if (issue.code === "invalid_union") {
            issue.unionErrors.map(processError);
          } else if (issue.code === "invalid_return_type") {
            processError(issue.returnTypeError);
          } else if (issue.code === "invalid_arguments") {
            processError(issue.argumentsError);
          } else if (issue.path.length === 0) {
            fieldErrors._errors.push(mapper(issue));
          } else {
            let curr = fieldErrors;
            let i2 = 0;
            while (i2 < issue.path.length) {
              const el = issue.path[i2];
              const terminal = i2 === issue.path.length - 1;
              if (!terminal) {
                curr[el] = curr[el] || { _errors: [] };
              } else {
                curr[el] = curr[el] || { _errors: [] };
                curr[el]._errors.push(mapper(issue));
              }
              curr = curr[el];
              i2++;
            }
          }
        }
      };
      processError(this);
      return fieldErrors;
    }
    static assert(value) {
      if (!(value instanceof ZodError)) {
        throw new Error(`Not a ZodError: ${value}`);
      }
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
      const fieldErrors = {};
      const formErrors = [];
      for (const sub of this.issues) {
        if (sub.path.length > 0) {
          fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
          fieldErrors[sub.path[0]].push(mapper(sub));
        } else {
          formErrors.push(mapper(sub));
        }
      }
      return { formErrors, fieldErrors };
    }
    get formErrors() {
      return this.flatten();
    }
  }
  ZodError.create = (issues) => {
    const error2 = new ZodError(issues);
    return error2;
  };
  const errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if (issue.received === ZodParsedType.undefined) {
          message = "Required";
        } else {
          message = `Expected ${issue.expected}, received ${issue.received}`;
        }
        break;
      case ZodIssueCode.invalid_literal:
        message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
        break;
      case ZodIssueCode.unrecognized_keys:
        message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
        break;
      case ZodIssueCode.invalid_union:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_union_discriminator:
        message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
        break;
      case ZodIssueCode.invalid_enum_value:
        message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
        break;
      case ZodIssueCode.invalid_arguments:
        message = `Invalid function arguments`;
        break;
      case ZodIssueCode.invalid_return_type:
        message = `Invalid function return type`;
        break;
      case ZodIssueCode.invalid_date:
        message = `Invalid date`;
        break;
      case ZodIssueCode.invalid_string:
        if (typeof issue.validation === "object") {
          if ("includes" in issue.validation) {
            message = `Invalid input: must include "${issue.validation.includes}"`;
            if (typeof issue.validation.position === "number") {
              message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
            }
          } else if ("startsWith" in issue.validation) {
            message = `Invalid input: must start with "${issue.validation.startsWith}"`;
          } else if ("endsWith" in issue.validation) {
            message = `Invalid input: must end with "${issue.validation.endsWith}"`;
          } else {
            util.assertNever(issue.validation);
          }
        } else if (issue.validation !== "regex") {
          message = `Invalid ${issue.validation}`;
        } else {
          message = "Invalid";
        }
        break;
      case ZodIssueCode.too_small:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.too_big:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "bigint")
          message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.custom:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_intersection_types:
        message = `Intersection results could not be merged`;
        break;
      case ZodIssueCode.not_multiple_of:
        message = `Number must be a multiple of ${issue.multipleOf}`;
        break;
      case ZodIssueCode.not_finite:
        message = "Number must be finite";
        break;
      default:
        message = _ctx.defaultError;
        util.assertNever(issue);
    }
    return { message };
  };
  let overrideErrorMap = errorMap;
  function setErrorMap(map) {
    overrideErrorMap = map;
  }
  function getErrorMap() {
    return overrideErrorMap;
  }
  const makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...issueData.path || []];
    const fullIssue = {
      ...issueData,
      path: fullPath
    };
    if (issueData.message !== void 0) {
      return {
        ...issueData,
        path: fullPath,
        message: issueData.message
      };
    }
    let errorMessage = "";
    const maps = errorMaps.filter((m2) => !!m2).slice().reverse();
    for (const map of maps) {
      errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
      ...issueData,
      path: fullPath,
      message: errorMessage
    };
  };
  const EMPTY_PATH = [];
  function addIssueToContext(ctx, issueData) {
    const overrideMap = getErrorMap();
    const issue = makeIssue({
      issueData,
      data: ctx.data,
      path: ctx.path,
      errorMaps: [
        ctx.common.contextualErrorMap,
        // contextual error map is first priority
        ctx.schemaErrorMap,
        // then schema-bound map if available
        overrideMap,
        // then global override map
        overrideMap === errorMap ? void 0 : errorMap
        // then global default map
      ].filter((x2) => !!x2)
    });
    ctx.common.issues.push(issue);
  }
  class ParseStatus {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      if (this.value === "valid")
        this.value = "dirty";
    }
    abort() {
      if (this.value !== "aborted")
        this.value = "aborted";
    }
    static mergeArray(status, results) {
      const arrayValue = [];
      for (const s2 of results) {
        if (s2.status === "aborted")
          return INVALID;
        if (s2.status === "dirty")
          status.dirty();
        arrayValue.push(s2.value);
      }
      return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
      const syncPairs = [];
      for (const pair of pairs) {
        const key = await pair.key;
        const value = await pair.value;
        syncPairs.push({
          key,
          value
        });
      }
      return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
      const finalObject = {};
      for (const pair of pairs) {
        const { key, value } = pair;
        if (key.status === "aborted")
          return INVALID;
        if (value.status === "aborted")
          return INVALID;
        if (key.status === "dirty")
          status.dirty();
        if (value.status === "dirty")
          status.dirty();
        if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
          finalObject[key.value] = value.value;
        }
      }
      return { status: status.value, value: finalObject };
    }
  }
  const INVALID = Object.freeze({
    status: "aborted"
  });
  const DIRTY = (value) => ({ status: "dirty", value });
  const OK = (value) => ({ status: "valid", value });
  const isAborted = (x2) => x2.status === "aborted";
  const isDirty = (x2) => x2.status === "dirty";
  const isValid = (x2) => x2.status === "valid";
  const isAsync = (x2) => typeof Promise !== "undefined" && x2 instanceof Promise;
  function __classPrivateFieldGet(receiver, state, kind, f2) {
    if (typeof state === "function" ? receiver !== state || true : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f2) {
    if (typeof state === "function" ? receiver !== state || true : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return state.set(receiver, value), value;
  }
  typeof SuppressedError === "function" ? SuppressedError : function(error2, suppressed, message) {
    var e2 = new Error(message);
    return e2.name = "SuppressedError", e2.error = error2, e2.suppressed = suppressed, e2;
  };
  var errorUtil;
  (function(errorUtil2) {
    errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
  })(errorUtil || (errorUtil = {}));
  var _ZodEnum_cache, _ZodNativeEnum_cache;
  class ParseInputLazyPath {
    constructor(parent, value, path, key) {
      this._cachedPath = [];
      this.parent = parent;
      this.data = value;
      this._path = path;
      this._key = key;
    }
    get path() {
      if (!this._cachedPath.length) {
        if (this._key instanceof Array) {
          this._cachedPath.push(...this._path, ...this._key);
        } else {
          this._cachedPath.push(...this._path, this._key);
        }
      }
      return this._cachedPath;
    }
  }
  const handleResult = (ctx, result) => {
    if (isValid(result)) {
      return { success: true, data: result.value };
    } else {
      if (!ctx.common.issues.length) {
        throw new Error("Validation failed but no issues detected.");
      }
      return {
        success: false,
        get error() {
          if (this._error)
            return this._error;
          const error2 = new ZodError(ctx.common.issues);
          this._error = error2;
          return this._error;
        }
      };
    }
  };
  function processCreateParams(params) {
    if (!params)
      return {};
    const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
    if (errorMap2 && (invalid_type_error || required_error)) {
      throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    }
    if (errorMap2)
      return { errorMap: errorMap2, description };
    const customMap = (iss, ctx) => {
      var _a, _b;
      const { message } = params;
      if (iss.code === "invalid_enum_value") {
        return { message: message !== null && message !== void 0 ? message : ctx.defaultError };
      }
      if (typeof ctx.data === "undefined") {
        return { message: (_a = message !== null && message !== void 0 ? message : required_error) !== null && _a !== void 0 ? _a : ctx.defaultError };
      }
      if (iss.code !== "invalid_type")
        return { message: ctx.defaultError };
      return { message: (_b = message !== null && message !== void 0 ? message : invalid_type_error) !== null && _b !== void 0 ? _b : ctx.defaultError };
    };
    return { errorMap: customMap, description };
  }
  class ZodType {
    get description() {
      return this._def.description;
    }
    _getType(input) {
      return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
      return ctx || {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      };
    }
    _processInputParams(input) {
      return {
        status: new ParseStatus(),
        ctx: {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        }
      };
    }
    _parseSync(input) {
      const result = this._parse(input);
      if (isAsync(result)) {
        throw new Error("Synchronous parse encountered promise.");
      }
      return result;
    }
    _parseAsync(input) {
      const result = this._parse(input);
      return Promise.resolve(result);
    }
    parse(data, params) {
      const result = this.safeParse(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    safeParse(data, params) {
      var _a;
      const ctx = {
        common: {
          issues: [],
          async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
          contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
        },
        path: (params === null || params === void 0 ? void 0 : params.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const result = this._parseSync({ data, path: ctx.path, parent: ctx });
      return handleResult(ctx, result);
    }
    "~validate"(data) {
      var _a, _b;
      const ctx = {
        common: {
          issues: [],
          async: !!this["~standard"].async
        },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      if (!this["~standard"].async) {
        try {
          const result = this._parseSync({ data, path: [], parent: ctx });
          return isValid(result) ? {
            value: result.value
          } : {
            issues: ctx.common.issues
          };
        } catch (err) {
          if ((_b = (_a = err === null || err === void 0 ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes("encountered")) {
            this["~standard"].async = true;
          }
          ctx.common = {
            issues: [],
            async: true
          };
        }
      }
      return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
        value: result.value
      } : {
        issues: ctx.common.issues
      });
    }
    async parseAsync(data, params) {
      const result = await this.safeParseAsync(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    async safeParseAsync(data, params) {
      const ctx = {
        common: {
          issues: [],
          contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
          async: true
        },
        path: (params === null || params === void 0 ? void 0 : params.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
      const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
      return handleResult(ctx, result);
    }
    refine(check, message) {
      const getIssueProperties = (val) => {
        if (typeof message === "string" || typeof message === "undefined") {
          return { message };
        } else if (typeof message === "function") {
          return message(val);
        } else {
          return message;
        }
      };
      return this._refinement((val, ctx) => {
        const result = check(val);
        const setError = () => ctx.addIssue({
          code: ZodIssueCode.custom,
          ...getIssueProperties(val)
        });
        if (typeof Promise !== "undefined" && result instanceof Promise) {
          return result.then((data) => {
            if (!data) {
              setError();
              return false;
            } else {
              return true;
            }
          });
        }
        if (!result) {
          setError();
          return false;
        } else {
          return true;
        }
      });
    }
    refinement(check, refinementData) {
      return this._refinement((val, ctx) => {
        if (!check(val)) {
          ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
          return false;
        } else {
          return true;
        }
      });
    }
    _refinement(refinement) {
      return new ZodEffects({
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "refinement", refinement }
      });
    }
    superRefine(refinement) {
      return this._refinement(refinement);
    }
    constructor(def) {
      this.spa = this.safeParseAsync;
      this._def = def;
      this.parse = this.parse.bind(this);
      this.safeParse = this.safeParse.bind(this);
      this.parseAsync = this.parseAsync.bind(this);
      this.safeParseAsync = this.safeParseAsync.bind(this);
      this.spa = this.spa.bind(this);
      this.refine = this.refine.bind(this);
      this.refinement = this.refinement.bind(this);
      this.superRefine = this.superRefine.bind(this);
      this.optional = this.optional.bind(this);
      this.nullable = this.nullable.bind(this);
      this.nullish = this.nullish.bind(this);
      this.array = this.array.bind(this);
      this.promise = this.promise.bind(this);
      this.or = this.or.bind(this);
      this.and = this.and.bind(this);
      this.transform = this.transform.bind(this);
      this.brand = this.brand.bind(this);
      this.default = this.default.bind(this);
      this.catch = this.catch.bind(this);
      this.describe = this.describe.bind(this);
      this.pipe = this.pipe.bind(this);
      this.readonly = this.readonly.bind(this);
      this.isNullable = this.isNullable.bind(this);
      this.isOptional = this.isOptional.bind(this);
      this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (data) => this["~validate"](data)
      };
    }
    optional() {
      return ZodOptional.create(this, this._def);
    }
    nullable() {
      return ZodNullable.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return ZodArray.create(this);
    }
    promise() {
      return ZodPromise.create(this, this._def);
    }
    or(option) {
      return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
      return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
      return new ZodEffects({
        ...processCreateParams(this._def),
        schema: this,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect: { type: "transform", transform }
      });
    }
    default(def) {
      const defaultValueFunc = typeof def === "function" ? def : () => def;
      return new ZodDefault({
        ...processCreateParams(this._def),
        innerType: this,
        defaultValue: defaultValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodDefault
      });
    }
    brand() {
      return new ZodBranded({
        typeName: ZodFirstPartyTypeKind.ZodBranded,
        type: this,
        ...processCreateParams(this._def)
      });
    }
    catch(def) {
      const catchValueFunc = typeof def === "function" ? def : () => def;
      return new ZodCatch({
        ...processCreateParams(this._def),
        innerType: this,
        catchValue: catchValueFunc,
        typeName: ZodFirstPartyTypeKind.ZodCatch
      });
    }
    describe(description) {
      const This = this.constructor;
      return new This({
        ...this._def,
        description
      });
    }
    pipe(target) {
      return ZodPipeline.create(this, target);
    }
    readonly() {
      return ZodReadonly.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  }
  const cuidRegex = /^c[^\s-]{8,}$/i;
  const cuid2Regex = /^[0-9a-z]+$/;
  const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
  const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
  const nanoidRegex = /^[a-z0-9_-]{21}$/i;
  const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
  let emojiRegex;
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
  const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
  const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
  const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
  const dateRegex = new RegExp(`^${dateRegexSource}$`);
  function timeRegexSource(args) {
    let secondsRegexSource = `[0-5]\\d`;
    if (args.precision) {
      secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
    } else if (args.precision == null) {
      secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
    }
    const secondsQuantifier = args.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
  }
  function timeRegex(args) {
    return new RegExp(`^${timeRegexSource(args)}$`);
  }
  function datetimeRegex(args) {
    let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
    const opts = [];
    opts.push(args.local ? `Z?` : `Z`);
    if (args.offset)
      opts.push(`([+-]\\d{2}:?\\d{2})`);
    regex = `${regex}(${opts.join("|")})`;
    return new RegExp(`^${regex}$`);
  }
  function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
      return true;
    }
    return false;
  }
  function isValidJWT(jwt, alg) {
    if (!jwtRegex.test(jwt))
      return false;
    try {
      const [header] = jwt.split(".");
      const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
      const decoded = JSON.parse(atob(base64));
      if (typeof decoded !== "object" || decoded === null)
        return false;
      if (!decoded.typ || !decoded.alg)
        return false;
      if (alg && decoded.alg !== alg)
        return false;
      return true;
    } catch (_a) {
      return false;
    }
  }
  function isValidCidr(ip, version) {
    if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
      return true;
    }
    return false;
  }
  class ZodString extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = String(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.string) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.length < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.length > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "length") {
          const tooBig = input.data.length > check.value;
          const tooSmall = input.data.length < check.value;
          if (tooBig || tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            if (tooBig) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            } else if (tooSmall) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            }
            status.dirty();
          }
        } else if (check.kind === "email") {
          if (!emailRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "email",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "emoji") {
          if (!emojiRegex) {
            emojiRegex = new RegExp(_emojiRegex, "u");
          }
          if (!emojiRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "emoji",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "uuid") {
          if (!uuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "uuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "nanoid") {
          if (!nanoidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "nanoid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid") {
          if (!cuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid2") {
          if (!cuid2Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid2",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ulid") {
          if (!ulidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ulid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "url") {
          try {
            new URL(input.data);
          } catch (_a) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "regex") {
          check.regex.lastIndex = 0;
          const testResult = check.regex.test(input.data);
          if (!testResult) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "regex",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "trim") {
          input.data = input.data.trim();
        } else if (check.kind === "includes") {
          if (!input.data.includes(check.value, check.position)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { includes: check.value, position: check.position },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "toLowerCase") {
          input.data = input.data.toLowerCase();
        } else if (check.kind === "toUpperCase") {
          input.data = input.data.toUpperCase();
        } else if (check.kind === "startsWith") {
          if (!input.data.startsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { startsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "endsWith") {
          if (!input.data.endsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { endsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "datetime") {
          const regex = datetimeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "datetime",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "date") {
          const regex = dateRegex;
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "date",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "time") {
          const regex = timeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "time",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "duration") {
          if (!durationRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "duration",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ip") {
          if (!isValidIP(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ip",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "jwt") {
          if (!isValidJWT(input.data, check.alg)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "jwt",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cidr") {
          if (!isValidCidr(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cidr",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "base64") {
          if (!base64Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "base64",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "base64url") {
          if (!base64urlRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "base64url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _regex(regex, validation, message) {
      return this.refinement((data) => regex.test(data), {
        validation,
        code: ZodIssueCode.invalid_string,
        ...errorUtil.errToObj(message)
      });
    }
    _addCheck(check) {
      return new ZodString({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    email(message) {
      return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
      return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
      return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
      return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    nanoid(message) {
      return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
      return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
      return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
      return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    base64(message) {
      return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
    }
    base64url(message) {
      return this._addCheck({
        kind: "base64url",
        ...errorUtil.errToObj(message)
      });
    }
    jwt(options) {
      return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
    }
    ip(options) {
      return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    cidr(options) {
      return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
      var _a, _b;
      if (typeof options === "string") {
        return this._addCheck({
          kind: "datetime",
          precision: null,
          offset: false,
          local: false,
          message: options
        });
      }
      return this._addCheck({
        kind: "datetime",
        precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
        offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
        local: (_b = options === null || options === void 0 ? void 0 : options.local) !== null && _b !== void 0 ? _b : false,
        ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
      });
    }
    date(message) {
      return this._addCheck({ kind: "date", message });
    }
    time(options) {
      if (typeof options === "string") {
        return this._addCheck({
          kind: "time",
          precision: null,
          message: options
        });
      }
      return this._addCheck({
        kind: "time",
        precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
        ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
      });
    }
    duration(message) {
      return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
    }
    regex(regex, message) {
      return this._addCheck({
        kind: "regex",
        regex,
        ...errorUtil.errToObj(message)
      });
    }
    includes(value, options) {
      return this._addCheck({
        kind: "includes",
        value,
        position: options === null || options === void 0 ? void 0 : options.position,
        ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
      });
    }
    startsWith(value, message) {
      return this._addCheck({
        kind: "startsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    endsWith(value, message) {
      return this._addCheck({
        kind: "endsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    min(minLength, message) {
      return this._addCheck({
        kind: "min",
        value: minLength,
        ...errorUtil.errToObj(message)
      });
    }
    max(maxLength, message) {
      return this._addCheck({
        kind: "max",
        value: maxLength,
        ...errorUtil.errToObj(message)
      });
    }
    length(len, message) {
      return this._addCheck({
        kind: "length",
        value: len,
        ...errorUtil.errToObj(message)
      });
    }
    /**
     * Equivalent to `.min(1)`
     */
    nonempty(message) {
      return this.min(1, errorUtil.errToObj(message));
    }
    trim() {
      return new ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "trim" }]
      });
    }
    toLowerCase() {
      return new ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toLowerCase" }]
      });
    }
    toUpperCase() {
      return new ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toUpperCase" }]
      });
    }
    get isDatetime() {
      return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isDate() {
      return !!this._def.checks.find((ch) => ch.kind === "date");
    }
    get isTime() {
      return !!this._def.checks.find((ch) => ch.kind === "time");
    }
    get isDuration() {
      return !!this._def.checks.find((ch) => ch.kind === "duration");
    }
    get isEmail() {
      return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isNANOID() {
      return !!this._def.checks.find((ch) => ch.kind === "nanoid");
    }
    get isCUID() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get isCIDR() {
      return !!this._def.checks.find((ch) => ch.kind === "cidr");
    }
    get isBase64() {
      return !!this._def.checks.find((ch) => ch.kind === "base64");
    }
    get isBase64url() {
      return !!this._def.checks.find((ch) => ch.kind === "base64url");
    }
    get minLength() {
      let min2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min2 === null || ch.value > min2)
            min2 = ch.value;
        }
      }
      return min2;
    }
    get maxLength() {
      let max2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max2 === null || ch.value < max2)
            max2 = ch.value;
        }
      }
      return max2;
    }
  }
  ZodString.create = (params) => {
    var _a;
    return new ZodString({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodString,
      coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
      ...processCreateParams(params)
    });
  };
  function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / Math.pow(10, decCount);
  }
  class ZodNumber extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
      this.step = this.multipleOf;
    }
    _parse(input) {
      if (this._def.coerce) {
        input.data = Number(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.number) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.number,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "int") {
          if (!util.isInteger(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: "integer",
              received: "float",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (floatSafeRemainder(input.data, check.value) !== 0) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "finite") {
          if (!Number.isFinite(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_finite,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new ZodNumber({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new ZodNumber({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    int(message) {
      return this._addCheck({
        kind: "int",
        message: errorUtil.toString(message)
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    finite(message) {
      return this._addCheck({
        kind: "finite",
        message: errorUtil.toString(message)
      });
    }
    safe(message) {
      return this._addCheck({
        kind: "min",
        inclusive: true,
        value: Number.MIN_SAFE_INTEGER,
        message: errorUtil.toString(message)
      })._addCheck({
        kind: "max",
        inclusive: true,
        value: Number.MAX_SAFE_INTEGER,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min2 === null || ch.value > min2)
            min2 = ch.value;
        }
      }
      return min2;
    }
    get maxValue() {
      let max2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max2 === null || ch.value < max2)
            max2 = ch.value;
        }
      }
      return max2;
    }
    get isInt() {
      return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
    }
    get isFinite() {
      let max2 = null, min2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
          return true;
        } else if (ch.kind === "min") {
          if (min2 === null || ch.value > min2)
            min2 = ch.value;
        } else if (ch.kind === "max") {
          if (max2 === null || ch.value < max2)
            max2 = ch.value;
        }
      }
      return Number.isFinite(min2) && Number.isFinite(max2);
    }
  }
  ZodNumber.create = (params) => {
    return new ZodNumber({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodNumber,
      coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
      ...processCreateParams(params)
    });
  };
  class ZodBigInt extends ZodType {
    constructor() {
      super(...arguments);
      this.min = this.gte;
      this.max = this.lte;
    }
    _parse(input) {
      if (this._def.coerce) {
        try {
          input.data = BigInt(input.data);
        } catch (_a) {
          return this._getInvalidInput(input);
        }
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.bigint) {
        return this._getInvalidInput(input);
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              type: "bigint",
              minimum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              type: "bigint",
              maximum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (input.data % check.value !== BigInt(0)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _getInvalidInput(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx.parsedType
      });
      return INVALID;
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new ZodBigInt({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new ZodBigInt({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min2 === null || ch.value > min2)
            min2 = ch.value;
        }
      }
      return min2;
    }
    get maxValue() {
      let max2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max2 === null || ch.value < max2)
            max2 = ch.value;
        }
      }
      return max2;
    }
  }
  ZodBigInt.create = (params) => {
    var _a;
    return new ZodBigInt({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodBigInt,
      coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
      ...processCreateParams(params)
    });
  };
  class ZodBoolean extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = Boolean(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.boolean) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.boolean,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodBoolean.create = (params) => {
    return new ZodBoolean({
      typeName: ZodFirstPartyTypeKind.ZodBoolean,
      coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
      ...processCreateParams(params)
    });
  };
  class ZodDate extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = new Date(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.date) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.date,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      if (isNaN(input.data.getTime())) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_date
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.getTime() < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              message: check.message,
              inclusive: true,
              exact: false,
              minimum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.getTime() > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              message: check.message,
              inclusive: true,
              exact: false,
              maximum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return {
        status: status.value,
        value: new Date(input.data.getTime())
      };
    }
    _addCheck(check) {
      return new ZodDate({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    min(minDate, message) {
      return this._addCheck({
        kind: "min",
        value: minDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    max(maxDate, message) {
      return this._addCheck({
        kind: "max",
        value: maxDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    get minDate() {
      let min2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min2 === null || ch.value > min2)
            min2 = ch.value;
        }
      }
      return min2 != null ? new Date(min2) : null;
    }
    get maxDate() {
      let max2 = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max2 === null || ch.value < max2)
            max2 = ch.value;
        }
      }
      return max2 != null ? new Date(max2) : null;
    }
  }
  ZodDate.create = (params) => {
    return new ZodDate({
      checks: [],
      coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
      typeName: ZodFirstPartyTypeKind.ZodDate,
      ...processCreateParams(params)
    });
  };
  class ZodSymbol extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.symbol) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.symbol,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodSymbol.create = (params) => {
    return new ZodSymbol({
      typeName: ZodFirstPartyTypeKind.ZodSymbol,
      ...processCreateParams(params)
    });
  };
  class ZodUndefined extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.undefined,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodUndefined.create = (params) => {
    return new ZodUndefined({
      typeName: ZodFirstPartyTypeKind.ZodUndefined,
      ...processCreateParams(params)
    });
  };
  class ZodNull extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.null) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.null,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodNull.create = (params) => {
    return new ZodNull({
      typeName: ZodFirstPartyTypeKind.ZodNull,
      ...processCreateParams(params)
    });
  };
  class ZodAny extends ZodType {
    constructor() {
      super(...arguments);
      this._any = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  }
  ZodAny.create = (params) => {
    return new ZodAny({
      typeName: ZodFirstPartyTypeKind.ZodAny,
      ...processCreateParams(params)
    });
  };
  class ZodUnknown extends ZodType {
    constructor() {
      super(...arguments);
      this._unknown = true;
    }
    _parse(input) {
      return OK(input.data);
    }
  }
  ZodUnknown.create = (params) => {
    return new ZodUnknown({
      typeName: ZodFirstPartyTypeKind.ZodUnknown,
      ...processCreateParams(params)
    });
  };
  class ZodNever extends ZodType {
    _parse(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.never,
        received: ctx.parsedType
      });
      return INVALID;
    }
  }
  ZodNever.create = (params) => {
    return new ZodNever({
      typeName: ZodFirstPartyTypeKind.ZodNever,
      ...processCreateParams(params)
    });
  };
  class ZodVoid extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.void,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  }
  ZodVoid.create = (params) => {
    return new ZodVoid({
      typeName: ZodFirstPartyTypeKind.ZodVoid,
      ...processCreateParams(params)
    });
  };
  class ZodArray extends ZodType {
    _parse(input) {
      const { ctx, status } = this._processInputParams(input);
      const def = this._def;
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (def.exactLength !== null) {
        const tooBig = ctx.data.length > def.exactLength.value;
        const tooSmall = ctx.data.length < def.exactLength.value;
        if (tooBig || tooSmall) {
          addIssueToContext(ctx, {
            code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
            minimum: tooSmall ? def.exactLength.value : void 0,
            maximum: tooBig ? def.exactLength.value : void 0,
            type: "array",
            inclusive: true,
            exact: true,
            message: def.exactLength.message
          });
          status.dirty();
        }
      }
      if (def.minLength !== null) {
        if (ctx.data.length < def.minLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.minLength.message
          });
          status.dirty();
        }
      }
      if (def.maxLength !== null) {
        if (ctx.data.length > def.maxLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.maxLength.message
          });
          status.dirty();
        }
      }
      if (ctx.common.async) {
        return Promise.all([...ctx.data].map((item, i2) => {
          return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
        })).then((result2) => {
          return ParseStatus.mergeArray(status, result2);
        });
      }
      const result = [...ctx.data].map((item, i2) => {
        return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
      });
      return ParseStatus.mergeArray(status, result);
    }
    get element() {
      return this._def.type;
    }
    min(minLength, message) {
      return new ZodArray({
        ...this._def,
        minLength: { value: minLength, message: errorUtil.toString(message) }
      });
    }
    max(maxLength, message) {
      return new ZodArray({
        ...this._def,
        maxLength: { value: maxLength, message: errorUtil.toString(message) }
      });
    }
    length(len, message) {
      return new ZodArray({
        ...this._def,
        exactLength: { value: len, message: errorUtil.toString(message) }
      });
    }
    nonempty(message) {
      return this.min(1, message);
    }
  }
  ZodArray.create = (schema, params) => {
    return new ZodArray({
      type: schema,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: ZodFirstPartyTypeKind.ZodArray,
      ...processCreateParams(params)
    });
  };
  function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
      const newShape = {};
      for (const key in schema.shape) {
        const fieldSchema = schema.shape[key];
        newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
      }
      return new ZodObject({
        ...schema._def,
        shape: () => newShape
      });
    } else if (schema instanceof ZodArray) {
      return new ZodArray({
        ...schema._def,
        type: deepPartialify(schema.element)
      });
    } else if (schema instanceof ZodOptional) {
      return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
      return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
      return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
    } else {
      return schema;
    }
  }
  class ZodObject extends ZodType {
    constructor() {
      super(...arguments);
      this._cached = null;
      this.nonstrict = this.passthrough;
      this.augment = this.extend;
    }
    _getCached() {
      if (this._cached !== null)
        return this._cached;
      const shape = this._def.shape();
      const keys = util.objectKeys(shape);
      return this._cached = { shape, keys };
    }
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.object) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const { status, ctx } = this._processInputParams(input);
      const { shape, keys: shapeKeys } = this._getCached();
      const extraKeys = [];
      if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
        for (const key in ctx.data) {
          if (!shapeKeys.includes(key)) {
            extraKeys.push(key);
          }
        }
      }
      const pairs = [];
      for (const key of shapeKeys) {
        const keyValidator = shape[key];
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (this._def.catchall instanceof ZodNever) {
        const unknownKeys = this._def.unknownKeys;
        if (unknownKeys === "passthrough") {
          for (const key of extraKeys) {
            pairs.push({
              key: { status: "valid", value: key },
              value: { status: "valid", value: ctx.data[key] }
            });
          }
        } else if (unknownKeys === "strict") {
          if (extraKeys.length > 0) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.unrecognized_keys,
              keys: extraKeys
            });
            status.dirty();
          }
        } else if (unknownKeys === "strip") ;
        else {
          throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        }
      } else {
        const catchall = this._def.catchall;
        for (const key of extraKeys) {
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: catchall._parse(
              new ParseInputLazyPath(ctx, value, ctx.path, key)
              //, ctx.child(key), value, getParsedType(value)
            ),
            alwaysSet: key in ctx.data
          });
        }
      }
      if (ctx.common.async) {
        return Promise.resolve().then(async () => {
          const syncPairs = [];
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
              key,
              value,
              alwaysSet: pair.alwaysSet
            });
          }
          return syncPairs;
        }).then((syncPairs) => {
          return ParseStatus.mergeObjectSync(status, syncPairs);
        });
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get shape() {
      return this._def.shape();
    }
    strict(message) {
      errorUtil.errToObj;
      return new ZodObject({
        ...this._def,
        unknownKeys: "strict",
        ...message !== void 0 ? {
          errorMap: (issue, ctx) => {
            var _a, _b, _c, _d;
            const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
            if (issue.code === "unrecognized_keys")
              return {
                message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
              };
            return {
              message: defaultError
            };
          }
        } : {}
      });
    }
    strip() {
      return new ZodObject({
        ...this._def,
        unknownKeys: "strip"
      });
    }
    passthrough() {
      return new ZodObject({
        ...this._def,
        unknownKeys: "passthrough"
      });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
      return new ZodObject({
        ...this._def,
        shape: () => ({
          ...this._def.shape(),
          ...augmentation
        })
      });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
      const merged = new ZodObject({
        unknownKeys: merging._def.unknownKeys,
        catchall: merging._def.catchall,
        shape: () => ({
          ...this._def.shape(),
          ...merging._def.shape()
        }),
        typeName: ZodFirstPartyTypeKind.ZodObject
      });
      return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
      return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index2) {
      return new ZodObject({
        ...this._def,
        catchall: index2
      });
    }
    pick(mask) {
      const shape = {};
      util.objectKeys(mask).forEach((key) => {
        if (mask[key] && this.shape[key]) {
          shape[key] = this.shape[key];
        }
      });
      return new ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    omit(mask) {
      const shape = {};
      util.objectKeys(this.shape).forEach((key) => {
        if (!mask[key]) {
          shape[key] = this.shape[key];
        }
      });
      return new ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    /**
     * @deprecated
     */
    deepPartial() {
      return deepPartialify(this);
    }
    partial(mask) {
      const newShape = {};
      util.objectKeys(this.shape).forEach((key) => {
        const fieldSchema = this.shape[key];
        if (mask && !mask[key]) {
          newShape[key] = fieldSchema;
        } else {
          newShape[key] = fieldSchema.optional();
        }
      });
      return new ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    required(mask) {
      const newShape = {};
      util.objectKeys(this.shape).forEach((key) => {
        if (mask && !mask[key]) {
          newShape[key] = this.shape[key];
        } else {
          const fieldSchema = this.shape[key];
          let newField = fieldSchema;
          while (newField instanceof ZodOptional) {
            newField = newField._def.innerType;
          }
          newShape[key] = newField;
        }
      });
      return new ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    keyof() {
      return createZodEnum(util.objectKeys(this.shape));
    }
  }
  ZodObject.create = (shape, params) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  ZodObject.strictCreate = (shape, params) => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strict",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  ZodObject.lazycreate = (shape, params) => {
    return new ZodObject({
      shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params)
    });
  };
  class ZodUnion extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const options = this._def.options;
      function handleResults(results) {
        for (const result of results) {
          if (result.result.status === "valid") {
            return result.result;
          }
        }
        for (const result of results) {
          if (result.result.status === "dirty") {
            ctx.common.issues.push(...result.ctx.common.issues);
            return result.result;
          }
        }
        const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return Promise.all(options.map(async (option) => {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await option._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            }),
            ctx: childCtx
          };
        })).then(handleResults);
      } else {
        let dirty = void 0;
        const issues = [];
        for (const option of options) {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          const result = option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          });
          if (result.status === "valid") {
            return result;
          } else if (result.status === "dirty" && !dirty) {
            dirty = { result, ctx: childCtx };
          }
          if (childCtx.common.issues.length) {
            issues.push(childCtx.common.issues);
          }
        }
        if (dirty) {
          ctx.common.issues.push(...dirty.ctx.common.issues);
          return dirty.result;
        }
        const unionErrors = issues.map((issues2) => new ZodError(issues2));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
    }
    get options() {
      return this._def.options;
    }
  }
  ZodUnion.create = (types, params) => {
    return new ZodUnion({
      options: types,
      typeName: ZodFirstPartyTypeKind.ZodUnion,
      ...processCreateParams(params)
    });
  };
  const getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
      return getDiscriminator(type.schema);
    } else if (type instanceof ZodEffects) {
      return getDiscriminator(type.innerType());
    } else if (type instanceof ZodLiteral) {
      return [type.value];
    } else if (type instanceof ZodEnum) {
      return type.options;
    } else if (type instanceof ZodNativeEnum) {
      return util.objectValues(type.enum);
    } else if (type instanceof ZodDefault) {
      return getDiscriminator(type._def.innerType);
    } else if (type instanceof ZodUndefined) {
      return [void 0];
    } else if (type instanceof ZodNull) {
      return [null];
    } else if (type instanceof ZodOptional) {
      return [void 0, ...getDiscriminator(type.unwrap())];
    } else if (type instanceof ZodNullable) {
      return [null, ...getDiscriminator(type.unwrap())];
    } else if (type instanceof ZodBranded) {
      return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodReadonly) {
      return getDiscriminator(type.unwrap());
    } else if (type instanceof ZodCatch) {
      return getDiscriminator(type._def.innerType);
    } else {
      return [];
    }
  };
  class ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const discriminator = this.discriminator;
      const discriminatorValue = ctx.data[discriminator];
      const option = this.optionsMap.get(discriminatorValue);
      if (!option) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [discriminator]
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return option._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      } else {
        return option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
      const optionsMap = /* @__PURE__ */ new Map();
      for (const type of options) {
        const discriminatorValues = getDiscriminator(type.shape[discriminator]);
        if (!discriminatorValues.length) {
          throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
        }
        for (const value of discriminatorValues) {
          if (optionsMap.has(value)) {
            throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
          }
          optionsMap.set(value, type);
        }
      }
      return new ZodDiscriminatedUnion({
        typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
        discriminator,
        options,
        optionsMap,
        ...processCreateParams(params)
      });
    }
  }
  function mergeValues(a2, b2) {
    const aType = getParsedType(a2);
    const bType = getParsedType(b2);
    if (a2 === b2) {
      return { valid: true, data: a2 };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
      const bKeys = util.objectKeys(b2);
      const sharedKeys = util.objectKeys(a2).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = { ...a2, ...b2 };
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a2[key], b2[key]);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
      if (a2.length !== b2.length) {
        return { valid: false };
      }
      const newArray = [];
      for (let index2 = 0; index2 < a2.length; index2++) {
        const itemA = a2[index2];
        const itemB = b2[index2];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a2 === +b2) {
      return { valid: true, data: a2 };
    } else {
      return { valid: false };
    }
  }
  class ZodIntersection extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const handleParsed = (parsedLeft, parsedRight) => {
        if (isAborted(parsedLeft) || isAborted(parsedRight)) {
          return INVALID;
        }
        const merged = mergeValues(parsedLeft.value, parsedRight.value);
        if (!merged.valid) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_intersection_types
          });
          return INVALID;
        }
        if (isDirty(parsedLeft) || isDirty(parsedRight)) {
          status.dirty();
        }
        return { status: status.value, value: merged.data };
      };
      if (ctx.common.async) {
        return Promise.all([
          this._def.left._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }),
          this._def.right._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          })
        ]).then(([left, right]) => handleParsed(left, right));
      } else {
        return handleParsed(this._def.left._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }), this._def.right._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }));
      }
    }
  }
  ZodIntersection.create = (left, right, params) => {
    return new ZodIntersection({
      left,
      right,
      typeName: ZodFirstPartyTypeKind.ZodIntersection,
      ...processCreateParams(params)
    });
  };
  class ZodTuple extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (ctx.data.length < this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        return INVALID;
      }
      const rest = this._def.rest;
      if (!rest && ctx.data.length > this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        status.dirty();
      }
      const items = [...ctx.data].map((item, itemIndex) => {
        const schema = this._def.items[itemIndex] || this._def.rest;
        if (!schema)
          return null;
        return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
      }).filter((x2) => !!x2);
      if (ctx.common.async) {
        return Promise.all(items).then((results) => {
          return ParseStatus.mergeArray(status, results);
        });
      } else {
        return ParseStatus.mergeArray(status, items);
      }
    }
    get items() {
      return this._def.items;
    }
    rest(rest) {
      return new ZodTuple({
        ...this._def,
        rest
      });
    }
  }
  ZodTuple.create = (schemas, params) => {
    if (!Array.isArray(schemas)) {
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
      items: schemas,
      typeName: ZodFirstPartyTypeKind.ZodTuple,
      rest: null,
      ...processCreateParams(params)
    });
  };
  class ZodRecord extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const pairs = [];
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      for (const key in ctx.data) {
        pairs.push({
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
          value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
      if (ctx.common.async) {
        return ParseStatus.mergeObjectAsync(status, pairs);
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get element() {
      return this._def.valueType;
    }
    static create(first, second, third) {
      if (second instanceof ZodType) {
        return new ZodRecord({
          keyType: first,
          valueType: second,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(third)
        });
      }
      return new ZodRecord({
        keyType: ZodString.create(),
        valueType: first,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(second)
      });
    }
  }
  class ZodMap extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.map) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.map,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      const pairs = [...ctx.data.entries()].map(([key, value], index2) => {
        return {
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index2, "key"])),
          value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index2, "value"]))
        };
      });
      if (ctx.common.async) {
        const finalMap = /* @__PURE__ */ new Map();
        return Promise.resolve().then(async () => {
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        });
      } else {
        const finalMap = /* @__PURE__ */ new Map();
        for (const pair of pairs) {
          const key = pair.key;
          const value = pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      }
    }
  }
  ZodMap.create = (keyType, valueType, params) => {
    return new ZodMap({
      valueType,
      keyType,
      typeName: ZodFirstPartyTypeKind.ZodMap,
      ...processCreateParams(params)
    });
  };
  class ZodSet extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.set) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.set,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const def = this._def;
      if (def.minSize !== null) {
        if (ctx.data.size < def.minSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.minSize.message
          });
          status.dirty();
        }
      }
      if (def.maxSize !== null) {
        if (ctx.data.size > def.maxSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.maxSize.message
          });
          status.dirty();
        }
      }
      const valueType = this._def.valueType;
      function finalizeSet(elements2) {
        const parsedSet = /* @__PURE__ */ new Set();
        for (const element of elements2) {
          if (element.status === "aborted")
            return INVALID;
          if (element.status === "dirty")
            status.dirty();
          parsedSet.add(element.value);
        }
        return { status: status.value, value: parsedSet };
      }
      const elements = [...ctx.data.values()].map((item, i2) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i2)));
      if (ctx.common.async) {
        return Promise.all(elements).then((elements2) => finalizeSet(elements2));
      } else {
        return finalizeSet(elements);
      }
    }
    min(minSize, message) {
      return new ZodSet({
        ...this._def,
        minSize: { value: minSize, message: errorUtil.toString(message) }
      });
    }
    max(maxSize, message) {
      return new ZodSet({
        ...this._def,
        maxSize: { value: maxSize, message: errorUtil.toString(message) }
      });
    }
    size(size2, message) {
      return this.min(size2, message).max(size2, message);
    }
    nonempty(message) {
      return this.min(1, message);
    }
  }
  ZodSet.create = (valueType, params) => {
    return new ZodSet({
      valueType,
      minSize: null,
      maxSize: null,
      typeName: ZodFirstPartyTypeKind.ZodSet,
      ...processCreateParams(params)
    });
  };
  class ZodFunction extends ZodType {
    constructor() {
      super(...arguments);
      this.validate = this.implement;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.function) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.function,
          received: ctx.parsedType
        });
        return INVALID;
      }
      function makeArgsIssue(args, error2) {
        return makeIssue({
          data: args,
          path: ctx.path,
          errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            errorMap
          ].filter((x2) => !!x2),
          issueData: {
            code: ZodIssueCode.invalid_arguments,
            argumentsError: error2
          }
        });
      }
      function makeReturnsIssue(returns, error2) {
        return makeIssue({
          data: returns,
          path: ctx.path,
          errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            errorMap
          ].filter((x2) => !!x2),
          issueData: {
            code: ZodIssueCode.invalid_return_type,
            returnTypeError: error2
          }
        });
      }
      const params = { errorMap: ctx.common.contextualErrorMap };
      const fn2 = ctx.data;
      if (this._def.returns instanceof ZodPromise) {
        const me = this;
        return OK(async function(...args) {
          const error2 = new ZodError([]);
          const parsedArgs = await me._def.args.parseAsync(args, params).catch((e2) => {
            error2.addIssue(makeArgsIssue(args, e2));
            throw error2;
          });
          const result = await Reflect.apply(fn2, this, parsedArgs);
          const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e2) => {
            error2.addIssue(makeReturnsIssue(result, e2));
            throw error2;
          });
          return parsedReturns;
        });
      } else {
        const me = this;
        return OK(function(...args) {
          const parsedArgs = me._def.args.safeParse(args, params);
          if (!parsedArgs.success) {
            throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
          }
          const result = Reflect.apply(fn2, this, parsedArgs.data);
          const parsedReturns = me._def.returns.safeParse(result, params);
          if (!parsedReturns.success) {
            throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
          }
          return parsedReturns.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...items) {
      return new ZodFunction({
        ...this._def,
        args: ZodTuple.create(items).rest(ZodUnknown.create())
      });
    }
    returns(returnType) {
      return new ZodFunction({
        ...this._def,
        returns: returnType
      });
    }
    implement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    strictImplement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    static create(args, returns, params) {
      return new ZodFunction({
        args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
        returns: returns || ZodUnknown.create(),
        typeName: ZodFirstPartyTypeKind.ZodFunction,
        ...processCreateParams(params)
      });
    }
  }
  class ZodLazy extends ZodType {
    get schema() {
      return this._def.getter();
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const lazySchema = this._def.getter();
      return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
  }
  ZodLazy.create = (getter, params) => {
    return new ZodLazy({
      getter,
      typeName: ZodFirstPartyTypeKind.ZodLazy,
      ...processCreateParams(params)
    });
  };
  class ZodLiteral extends ZodType {
    _parse(input) {
      if (input.data !== this._def.value) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_literal,
          expected: this._def.value
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
    get value() {
      return this._def.value;
    }
  }
  ZodLiteral.create = (value, params) => {
    return new ZodLiteral({
      value,
      typeName: ZodFirstPartyTypeKind.ZodLiteral,
      ...processCreateParams(params)
    });
  };
  function createZodEnum(values, params) {
    return new ZodEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodEnum,
      ...processCreateParams(params)
    });
  }
  class ZodEnum extends ZodType {
    constructor() {
      super(...arguments);
      _ZodEnum_cache.set(this, void 0);
    }
    _parse(input) {
      if (typeof input.data !== "string") {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (!__classPrivateFieldGet(this, _ZodEnum_cache)) {
        __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values));
      }
      if (!__classPrivateFieldGet(this, _ZodEnum_cache).has(input.data)) {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Values() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    extract(values, newDef = this._def) {
      return ZodEnum.create(values, {
        ...this._def,
        ...newDef
      });
    }
    exclude(values, newDef = this._def) {
      return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
        ...this._def,
        ...newDef
      });
    }
  }
  _ZodEnum_cache = /* @__PURE__ */ new WeakMap();
  ZodEnum.create = createZodEnum;
  class ZodNativeEnum extends ZodType {
    constructor() {
      super(...arguments);
      _ZodNativeEnum_cache.set(this, void 0);
    }
    _parse(input) {
      const nativeEnumValues = util.getValidEnumValues(this._def.values);
      const ctx = this._getOrReturnCtx(input);
      if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache)) {
        __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)));
      }
      if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache).has(input.data)) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get enum() {
      return this._def.values;
    }
  }
  _ZodNativeEnum_cache = /* @__PURE__ */ new WeakMap();
  ZodNativeEnum.create = (values, params) => {
    return new ZodNativeEnum({
      values,
      typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
      ...processCreateParams(params)
    });
  };
  class ZodPromise extends ZodType {
    unwrap() {
      return this._def.type;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.promise,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
      return OK(promisified.then((data) => {
        return this._def.type.parseAsync(data, {
          path: ctx.path,
          errorMap: ctx.common.contextualErrorMap
        });
      }));
    }
  }
  ZodPromise.create = (schema, params) => {
    return new ZodPromise({
      type: schema,
      typeName: ZodFirstPartyTypeKind.ZodPromise,
      ...processCreateParams(params)
    });
  };
  class ZodEffects extends ZodType {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const effect = this._def.effect || null;
      const checkCtx = {
        addIssue: (arg) => {
          addIssueToContext(ctx, arg);
          if (arg.fatal) {
            status.abort();
          } else {
            status.dirty();
          }
        },
        get path() {
          return ctx.path;
        }
      };
      checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
      if (effect.type === "preprocess") {
        const processed = effect.transform(ctx.data, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(processed).then(async (processed2) => {
            if (status.value === "aborted")
              return INVALID;
            const result = await this._def.schema._parseAsync({
              data: processed2,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return INVALID;
            if (result.status === "dirty")
              return DIRTY(result.value);
            if (status.value === "dirty")
              return DIRTY(result.value);
            return result;
          });
        } else {
          if (status.value === "aborted")
            return INVALID;
          const result = this._def.schema._parseSync({
            data: processed,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        }
      }
      if (effect.type === "refinement") {
        const executeRefinement = (acc) => {
          const result = effect.refinement(acc, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(result);
          }
          if (result instanceof Promise) {
            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          }
          return acc;
        };
        if (ctx.common.async === false) {
          const inner2 = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inner2.status === "aborted")
            return INVALID;
          if (inner2.status === "dirty")
            status.dirty();
          executeRefinement(inner2.value);
          return { status: status.value, value: inner2.value };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner2) => {
            if (inner2.status === "aborted")
              return INVALID;
            if (inner2.status === "dirty")
              status.dirty();
            return executeRefinement(inner2.value).then(() => {
              return { status: status.value, value: inner2.value };
            });
          });
        }
      }
      if (effect.type === "transform") {
        if (ctx.common.async === false) {
          const base = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (!isValid(base))
            return base;
          const result = effect.transform(base.value, checkCtx);
          if (result instanceof Promise) {
            throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
          }
          return { status: status.value, value: result };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
            if (!isValid(base))
              return base;
            return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
          });
        }
      }
      util.assertNever(effect);
    }
  }
  ZodEffects.create = (schema, effect, params) => {
    return new ZodEffects({
      schema,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect,
      ...processCreateParams(params)
    });
  };
  ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
    return new ZodEffects({
      schema,
      effect: { type: "preprocess", transform: preprocess },
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      ...processCreateParams(params)
    });
  };
  class ZodOptional extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.undefined) {
        return OK(void 0);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ZodOptional.create = (type, params) => {
    return new ZodOptional({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodOptional,
      ...processCreateParams(params)
    });
  };
  class ZodNullable extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.null) {
        return OK(null);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ZodNullable.create = (type, params) => {
    return new ZodNullable({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodNullable,
      ...processCreateParams(params)
    });
  };
  class ZodDefault extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      let data = ctx.data;
      if (ctx.parsedType === ZodParsedType.undefined) {
        data = this._def.defaultValue();
      }
      return this._def.innerType._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    removeDefault() {
      return this._def.innerType;
    }
  }
  ZodDefault.create = (type, params) => {
    return new ZodDefault({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodDefault,
      defaultValue: typeof params.default === "function" ? params.default : () => params.default,
      ...processCreateParams(params)
    });
  };
  class ZodCatch extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const newCtx = {
        ...ctx,
        common: {
          ...ctx.common,
          issues: []
        }
      };
      const result = this._def.innerType._parse({
        data: newCtx.data,
        path: newCtx.path,
        parent: {
          ...newCtx
        }
      });
      if (isAsync(result)) {
        return result.then((result2) => {
          return {
            status: "valid",
            value: result2.status === "valid" ? result2.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        });
      } else {
        return {
          status: "valid",
          value: result.status === "valid" ? result.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      }
    }
    removeCatch() {
      return this._def.innerType;
    }
  }
  ZodCatch.create = (type, params) => {
    return new ZodCatch({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodCatch,
      catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
      ...processCreateParams(params)
    });
  };
  class ZodNaN extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.nan) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.nan,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
  }
  ZodNaN.create = (params) => {
    return new ZodNaN({
      typeName: ZodFirstPartyTypeKind.ZodNaN,
      ...processCreateParams(params)
    });
  };
  const BRAND = Symbol("zod_brand");
  class ZodBranded extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const data = ctx.data;
      return this._def.type._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    unwrap() {
      return this._def.type;
    }
  }
  class ZodPipeline extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.common.async) {
        const handleAsync = async () => {
          const inResult = await this._def.in._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return DIRTY(inResult.value);
          } else {
            return this._def.out._parseAsync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        };
        return handleAsync();
      } else {
        const inResult = this._def.in._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return {
            status: "dirty",
            value: inResult.value
          };
        } else {
          return this._def.out._parseSync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }
    }
    static create(a2, b2) {
      return new ZodPipeline({
        in: a2,
        out: b2,
        typeName: ZodFirstPartyTypeKind.ZodPipeline
      });
    }
  }
  class ZodReadonly extends ZodType {
    _parse(input) {
      const result = this._def.innerType._parse(input);
      const freeze = (data) => {
        if (isValid(data)) {
          data.value = Object.freeze(data.value);
        }
        return data;
      };
      return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  ZodReadonly.create = (type, params) => {
    return new ZodReadonly({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodReadonly,
      ...processCreateParams(params)
    });
  };
  function cleanParams(params, data) {
    const p2 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
    const p22 = typeof p2 === "string" ? { message: p2 } : p2;
    return p22;
  }
  function custom(check, _params = {}, fatal) {
    if (check)
      return ZodAny.create().superRefine((data, ctx) => {
        var _a, _b;
        const r2 = check(data);
        if (r2 instanceof Promise) {
          return r2.then((r3) => {
            var _a2, _b2;
            if (!r3) {
              const params = cleanParams(_params, data);
              const _fatal = (_b2 = (_a2 = params.fatal) !== null && _a2 !== void 0 ? _a2 : fatal) !== null && _b2 !== void 0 ? _b2 : true;
              ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
            }
          });
        }
        if (!r2) {
          const params = cleanParams(_params, data);
          const _fatal = (_b = (_a = params.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
          ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
        }
        return;
      });
    return ZodAny.create();
  }
  const late = {
    object: ZodObject.lazycreate
  };
  var ZodFirstPartyTypeKind;
  (function(ZodFirstPartyTypeKind2) {
    ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
  })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
  const instanceOfType = (cls, params = {
    message: `Input not instance of ${cls.name}`
  }) => custom((data) => data instanceof cls, params);
  const stringType = ZodString.create;
  const numberType = ZodNumber.create;
  const nanType = ZodNaN.create;
  const bigIntType = ZodBigInt.create;
  const booleanType = ZodBoolean.create;
  const dateType = ZodDate.create;
  const symbolType = ZodSymbol.create;
  const undefinedType = ZodUndefined.create;
  const nullType = ZodNull.create;
  const anyType = ZodAny.create;
  const unknownType = ZodUnknown.create;
  const neverType = ZodNever.create;
  const voidType = ZodVoid.create;
  const arrayType = ZodArray.create;
  const objectType = ZodObject.create;
  const strictObjectType = ZodObject.strictCreate;
  const unionType = ZodUnion.create;
  const discriminatedUnionType = ZodDiscriminatedUnion.create;
  const intersectionType = ZodIntersection.create;
  const tupleType = ZodTuple.create;
  const recordType = ZodRecord.create;
  const mapType = ZodMap.create;
  const setType = ZodSet.create;
  const functionType = ZodFunction.create;
  const lazyType = ZodLazy.create;
  const literalType = ZodLiteral.create;
  const enumType = ZodEnum.create;
  const nativeEnumType = ZodNativeEnum.create;
  const promiseType = ZodPromise.create;
  const effectsType = ZodEffects.create;
  const optionalType = ZodOptional.create;
  const nullableType = ZodNullable.create;
  const preprocessType = ZodEffects.createWithPreprocess;
  const pipelineType = ZodPipeline.create;
  const ostring = () => stringType().optional();
  const onumber = () => numberType().optional();
  const oboolean = () => booleanType().optional();
  const coerce = {
    string: (arg) => ZodString.create({ ...arg, coerce: true }),
    number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
    boolean: (arg) => ZodBoolean.create({
      ...arg,
      coerce: true
    }),
    bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
    date: (arg) => ZodDate.create({ ...arg, coerce: true })
  };
  const NEVER = INVALID;
  var z = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    defaultErrorMap: errorMap,
    setErrorMap,
    getErrorMap,
    makeIssue,
    EMPTY_PATH,
    addIssueToContext,
    ParseStatus,
    INVALID,
    DIRTY,
    OK,
    isAborted,
    isDirty,
    isValid,
    isAsync,
    get util() {
      return util;
    },
    get objectUtil() {
      return objectUtil;
    },
    ZodParsedType,
    getParsedType,
    ZodType,
    datetimeRegex,
    ZodString,
    ZodNumber,
    ZodBigInt,
    ZodBoolean,
    ZodDate,
    ZodSymbol,
    ZodUndefined,
    ZodNull,
    ZodAny,
    ZodUnknown,
    ZodNever,
    ZodVoid,
    ZodArray,
    ZodObject,
    ZodUnion,
    ZodDiscriminatedUnion,
    ZodIntersection,
    ZodTuple,
    ZodRecord,
    ZodMap,
    ZodSet,
    ZodFunction,
    ZodLazy,
    ZodLiteral,
    ZodEnum,
    ZodNativeEnum,
    ZodPromise,
    ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional,
    ZodNullable,
    ZodDefault,
    ZodCatch,
    ZodNaN,
    BRAND,
    ZodBranded,
    ZodPipeline,
    ZodReadonly,
    custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late,
    get ZodFirstPartyTypeKind() {
      return ZodFirstPartyTypeKind;
    },
    coerce,
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    "enum": enumType,
    "function": functionType,
    "instanceof": instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    "null": nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean,
    onumber,
    optional: optionalType,
    ostring,
    pipeline: pipelineType,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    symbol: symbolType,
    transformer: effectsType,
    tuple: tupleType,
    "undefined": undefinedType,
    union: unionType,
    unknown: unknownType,
    "void": voidType,
    NEVER,
    ZodIssueCode,
    quotelessJson,
    ZodError
  });
  var DEFAULT_PORT = 5746;
  var PING_ENDPOINT = "/ping/stagewise";
  var PING_RESPONSE = "stagewise";
  var contract = createBridgeContract({
    server: {
      triggerAgentPrompt: {
        request: z.object({
          prompt: z.string()
        }),
        response: z.object({
          result: z.object({
            success: z.boolean(),
            error: z.string().optional(),
            output: z.string().optional()
          })
        }),
        update: z.object({
          updateText: z.string()
        })
      }
    }
  });
  async function findPort(maxAttempts = 10, timeout = 300) {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const port = DEFAULT_PORT + attempt;
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        try {
          const response = await fetch(
            `http://localhost:${port}${PING_ENDPOINT}`,
            {
              signal: controller.signal
            }
          );
          clearTimeout(timeoutId);
          if (response.ok) {
            const text = await response.text();
            if (text === PING_RESPONSE) {
              return port;
            }
          }
        } catch (error2) {
          clearTimeout(timeoutId);
          continue;
        }
      } catch (error2) {
        continue;
      }
    }
    return null;
  }
  const SRPCBridgeContext = K$3({
    bridge: null,
    isConnecting: false,
    error: null
  });
  function SRPCBridgeProvider({
    children
  }) {
    const [state, setState] = d$4({
      bridge: null,
      isConnecting: true,
      error: null
    });
    y$6(() => {
      async function initializeBridge() {
        try {
          const port = await findPort();
          const bridge = createSRPCClientBridge(
            `ws://localhost:${port}`,
            contract
          );
          await bridge.connect();
          setState({
            bridge,
            isConnecting: false,
            error: null
          });
        } catch (error2) {
          setState({
            bridge: null,
            isConnecting: false,
            error: error2 instanceof Error ? error2 : new Error(String(error2))
          });
        }
      }
      initializeBridge();
    }, []);
    return /* @__PURE__ */ u$9(SRPCBridgeContext.Provider, { value: state, children });
  }
  function useSRPCBridge() {
    const context = x$4(SRPCBridgeContext);
    if (!context) {
      throw new Error("useSRPCBridge must be used within an SRPCBridgeProvider");
    }
    return context;
  }
  function getElementAttributes(element) {
    const attrs = {};
    const priorityAttrs = [
      "id",
      "class",
      "name",
      "type",
      "href",
      "src",
      "alt",
      "for",
      "placeholder"
    ];
    const dataAttrs = [];
    for (let i2 = 0; i2 < element.attributes.length; i2++) {
      const attr = element.attributes[i2];
      if (attr.name.startsWith("data-")) {
        dataAttrs.push({ name: attr.name, value: attr.value });
      } else if (priorityAttrs.includes(attr.name.toLowerCase()) || attr.name.toLowerCase() !== "style") {
        attrs[attr.name] = attr.value;
      }
    }
    dataAttrs.forEach((da) => {
      attrs[da.name] = da.value;
    });
    return attrs;
  }
  function generateElementContext(element, index2) {
    var _a;
    let context = `<element index="${index2 + 1}">
`;
    context += `  <tag>${element.tagName.toLowerCase()}</tag>
`;
    const id = element.id;
    if (id) {
      context += `  <id>${id}</id>
`;
    }
    const classes = Array.from(element.classList).join(", ");
    if (classes) {
      context += `  <classes>${classes}</classes>
`;
    }
    const attributes = getElementAttributes(element);
    if (Object.keys(attributes).length > 0) {
      context += `  <attributes>
`;
      for (const [key, value] of Object.entries(attributes)) {
        if (key.toLowerCase() !== "class" || !classes) {
          context += `    <${key}>${value}</${key}>
`;
        }
      }
      context += `  </attributes>
`;
    }
    const text = (_a = element.innerText) == null ? void 0 : _a.trim();
    if (text) {
      const maxLength = 100;
      context += `  <text>${text.length > maxLength ? `${text.substring(0, maxLength)}...` : text}</text>
`;
    }
    context += `  <structural_context>
`;
    if (element.parentElement) {
      const parent = element.parentElement;
      context += `    <parent>
`;
      context += `      <tag>${parent.tagName.toLowerCase()}</tag>
`;
      if (parent.id) {
        context += `      <id>${parent.id}</id>
`;
      }
      const parentClasses = Array.from(parent.classList).join(", ");
      if (parentClasses) {
        context += `      <classes>${parentClasses}</classes>
`;
      }
      context += `    </parent>
`;
    } else {
      context += `    <parent>No parent element found (likely root or disconnected)</parent>
`;
    }
    context += `  </structural_context>
`;
    try {
      const styles = window.getComputedStyle(element);
      const relevantStyles = {
        color: styles.color,
        backgroundColor: styles.backgroundColor,
        fontSize: styles.fontSize,
        fontWeight: styles.fontWeight,
        display: styles.display
      };
      context += `  <styles>
`;
      for (const [key, value] of Object.entries(relevantStyles)) {
        context += `    <${key}>${value}</${key}>
`;
      }
      context += `  </styles>
`;
    } catch (e2) {
      context += `  <styles>Could not retrieve computed styles</styles>
`;
    }
    context += `</element>
`;
    return context;
  }
  function createPrompt(selectedElements, userPrompt, url) {
    if (!selectedElements || selectedElements.length === 0) {
      return `
    <request>
      <user_goal>${userPrompt}</user_goal>
      <url>${url}</url>
  <context>No specific element was selected on the page. Please analyze the page code in general or ask for clarification.</context>
</request>`.trim();
    }
    let detailedContext = "";
    selectedElements.forEach((element, index2) => {
      detailedContext += generateElementContext(element, index2);
    });
    return `
<request>
  <user_goal>${userPrompt}</user_goal>
  <url>${url}</url>
  <selected_elements>
    ${detailedContext.trim()}
  </selected_elements>
</request>`.trim();
  }
  const DropAreaZone = {
    BOTTOM_CENTER: 4
  };
  const createStoreImpl = (createState) => {
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace) => {
      const nextState = typeof partial === "function" ? partial(state) : partial;
      if (!Object.is(nextState, state)) {
        const previousState = state;
        state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
        listeners.forEach((listener) => listener(state, previousState));
      }
    };
    const getState = () => state;
    const getInitialState = () => initialState;
    const subscribe = (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    };
    const api = { setState, getState, getInitialState, subscribe };
    const initialState = state = createState(setState, getState, api);
    return api;
  };
  const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
  const identity = (arg) => arg;
  function useStore(api, selector = identity) {
    const slice = Rn.useSyncExternalStore(
      api.subscribe,
      () => selector(api.getState()),
      () => selector(api.getInitialState())
    );
    Rn.useDebugValue(slice);
    return slice;
  }
  const createImpl = (createState) => {
    const api = createStore(createState);
    const useBoundStore = (selector) => useStore(api, selector);
    Object.assign(useBoundStore, api);
    return useBoundStore;
  };
  const create = (createState) => createState ? createImpl(createState) : createImpl;
  class DoubleIndexedKV {
    constructor() {
      this.keyToValue = /* @__PURE__ */ new Map();
      this.valueToKey = /* @__PURE__ */ new Map();
    }
    set(key, value) {
      this.keyToValue.set(key, value);
      this.valueToKey.set(value, key);
    }
    getByKey(key) {
      return this.keyToValue.get(key);
    }
    getByValue(value) {
      return this.valueToKey.get(value);
    }
    clear() {
      this.keyToValue.clear();
      this.valueToKey.clear();
    }
  }
  class Registry {
    constructor(generateIdentifier) {
      this.generateIdentifier = generateIdentifier;
      this.kv = new DoubleIndexedKV();
    }
    register(value, identifier) {
      if (this.kv.getByValue(value)) {
        return;
      }
      if (!identifier) {
        identifier = this.generateIdentifier(value);
      }
      this.kv.set(identifier, value);
    }
    clear() {
      this.kv.clear();
    }
    getIdentifier(value) {
      return this.kv.getByValue(value);
    }
    getValue(identifier) {
      return this.kv.getByKey(identifier);
    }
  }
  class ClassRegistry extends Registry {
    constructor() {
      super((c2) => c2.name);
      this.classToAllowedProps = /* @__PURE__ */ new Map();
    }
    register(value, options) {
      if (typeof options === "object") {
        if (options.allowProps) {
          this.classToAllowedProps.set(value, options.allowProps);
        }
        super.register(value, options.identifier);
      } else {
        super.register(value, options);
      }
    }
    getAllowedProps(value) {
      return this.classToAllowedProps.get(value);
    }
  }
  function valuesOfObj(record) {
    if ("values" in Object) {
      return Object.values(record);
    }
    const values = [];
    for (const key in record) {
      if (record.hasOwnProperty(key)) {
        values.push(record[key]);
      }
    }
    return values;
  }
  function find(record, predicate) {
    const values = valuesOfObj(record);
    if ("find" in values) {
      return values.find(predicate);
    }
    const valuesNotNever = values;
    for (let i2 = 0; i2 < valuesNotNever.length; i2++) {
      const value = valuesNotNever[i2];
      if (predicate(value)) {
        return value;
      }
    }
    return void 0;
  }
  function forEach(record, run) {
    Object.entries(record).forEach(([key, value]) => run(value, key));
  }
  function includes(arr, value) {
    return arr.indexOf(value) !== -1;
  }
  function findArr(record, predicate) {
    for (let i2 = 0; i2 < record.length; i2++) {
      const value = record[i2];
      if (predicate(value)) {
        return value;
      }
    }
    return void 0;
  }
  class CustomTransformerRegistry {
    constructor() {
      this.transfomers = {};
    }
    register(transformer) {
      this.transfomers[transformer.name] = transformer;
    }
    findApplicable(v2) {
      return find(this.transfomers, (transformer) => transformer.isApplicable(v2));
    }
    findByName(name) {
      return this.transfomers[name];
    }
  }
  const getType$1 = (payload) => Object.prototype.toString.call(payload).slice(8, -1);
  const isUndefined = (payload) => typeof payload === "undefined";
  const isNull = (payload) => payload === null;
  const isPlainObject$1 = (payload) => {
    if (typeof payload !== "object" || payload === null)
      return false;
    if (payload === Object.prototype)
      return false;
    if (Object.getPrototypeOf(payload) === null)
      return true;
    return Object.getPrototypeOf(payload) === Object.prototype;
  };
  const isEmptyObject = (payload) => isPlainObject$1(payload) && Object.keys(payload).length === 0;
  const isArray$1 = (payload) => Array.isArray(payload);
  const isString$1 = (payload) => typeof payload === "string";
  const isNumber$1 = (payload) => typeof payload === "number" && !isNaN(payload);
  const isBoolean = (payload) => typeof payload === "boolean";
  const isRegExp = (payload) => payload instanceof RegExp;
  const isMap = (payload) => payload instanceof Map;
  const isSet = (payload) => payload instanceof Set;
  const isSymbol = (payload) => getType$1(payload) === "Symbol";
  const isDate = (payload) => payload instanceof Date && !isNaN(payload.valueOf());
  const isError = (payload) => payload instanceof Error;
  const isNaNValue = (payload) => typeof payload === "number" && isNaN(payload);
  const isPrimitive = (payload) => isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber$1(payload) || isString$1(payload) || isSymbol(payload);
  const isBigint = (payload) => typeof payload === "bigint";
  const isInfinite = (payload) => payload === Infinity || payload === -Infinity;
  const isTypedArray = (payload) => ArrayBuffer.isView(payload) && !(payload instanceof DataView);
  const isURL = (payload) => payload instanceof URL;
  const escapeKey = (key) => key.replace(/\./g, "\\.");
  const stringifyPath = (path) => path.map(String).map(escapeKey).join(".");
  const parsePath = (string) => {
    const result = [];
    let segment = "";
    for (let i2 = 0; i2 < string.length; i2++) {
      let char = string.charAt(i2);
      const isEscapedDot = char === "\\" && string.charAt(i2 + 1) === ".";
      if (isEscapedDot) {
        segment += ".";
        i2++;
        continue;
      }
      const isEndOfSegment = char === ".";
      if (isEndOfSegment) {
        result.push(segment);
        segment = "";
        continue;
      }
      segment += char;
    }
    const lastSegment = segment;
    result.push(lastSegment);
    return result;
  };
  function simpleTransformation(isApplicable, annotation, transform, untransform) {
    return {
      isApplicable,
      annotation,
      transform,
      untransform
    };
  }
  const simpleRules = [
    simpleTransformation(isUndefined, "undefined", () => null, () => void 0),
    simpleTransformation(isBigint, "bigint", (v2) => v2.toString(), (v2) => {
      if (typeof BigInt !== "undefined") {
        return BigInt(v2);
      }
      console.error("Please add a BigInt polyfill.");
      return v2;
    }),
    simpleTransformation(isDate, "Date", (v2) => v2.toISOString(), (v2) => new Date(v2)),
    simpleTransformation(isError, "Error", (v2, superJson) => {
      const baseError = {
        name: v2.name,
        message: v2.message
      };
      superJson.allowedErrorProps.forEach((prop) => {
        baseError[prop] = v2[prop];
      });
      return baseError;
    }, (v2, superJson) => {
      const e2 = new Error(v2.message);
      e2.name = v2.name;
      e2.stack = v2.stack;
      superJson.allowedErrorProps.forEach((prop) => {
        e2[prop] = v2[prop];
      });
      return e2;
    }),
    simpleTransformation(isRegExp, "regexp", (v2) => "" + v2, (regex) => {
      const body = regex.slice(1, regex.lastIndexOf("/"));
      const flags = regex.slice(regex.lastIndexOf("/") + 1);
      return new RegExp(body, flags);
    }),
    simpleTransformation(
      isSet,
      "set",
      // (sets only exist in es6+)
      // eslint-disable-next-line es5/no-es6-methods
      (v2) => [...v2.values()],
      (v2) => new Set(v2)
    ),
    simpleTransformation(isMap, "map", (v2) => [...v2.entries()], (v2) => new Map(v2)),
    simpleTransformation((v2) => isNaNValue(v2) || isInfinite(v2), "number", (v2) => {
      if (isNaNValue(v2)) {
        return "NaN";
      }
      if (v2 > 0) {
        return "Infinity";
      } else {
        return "-Infinity";
      }
    }, Number),
    simpleTransformation((v2) => v2 === 0 && 1 / v2 === -Infinity, "number", () => {
      return "-0";
    }, Number),
    simpleTransformation(isURL, "URL", (v2) => v2.toString(), (v2) => new URL(v2))
  ];
  function compositeTransformation(isApplicable, annotation, transform, untransform) {
    return {
      isApplicable,
      annotation,
      transform,
      untransform
    };
  }
  const symbolRule = compositeTransformation((s2, superJson) => {
    if (isSymbol(s2)) {
      const isRegistered = !!superJson.symbolRegistry.getIdentifier(s2);
      return isRegistered;
    }
    return false;
  }, (s2, superJson) => {
    const identifier = superJson.symbolRegistry.getIdentifier(s2);
    return ["symbol", identifier];
  }, (v2) => v2.description, (_2, a2, superJson) => {
    const value = superJson.symbolRegistry.getValue(a2[1]);
    if (!value) {
      throw new Error("Trying to deserialize unknown symbol");
    }
    return value;
  });
  const constructorToName = [
    Int8Array,
    Uint8Array,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    Uint8ClampedArray
  ].reduce((obj, ctor) => {
    obj[ctor.name] = ctor;
    return obj;
  }, {});
  const typedArrayRule = compositeTransformation(isTypedArray, (v2) => ["typed-array", v2.constructor.name], (v2) => [...v2], (v2, a2) => {
    const ctor = constructorToName[a2[1]];
    if (!ctor) {
      throw new Error("Trying to deserialize unknown typed array");
    }
    return new ctor(v2);
  });
  function isInstanceOfRegisteredClass(potentialClass, superJson) {
    if (potentialClass == null ? void 0 : potentialClass.constructor) {
      const isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
      return isRegistered;
    }
    return false;
  }
  const classRule = compositeTransformation(isInstanceOfRegisteredClass, (clazz, superJson) => {
    const identifier = superJson.classRegistry.getIdentifier(clazz.constructor);
    return ["class", identifier];
  }, (clazz, superJson) => {
    const allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
    if (!allowedProps) {
      return { ...clazz };
    }
    const result = {};
    allowedProps.forEach((prop) => {
      result[prop] = clazz[prop];
    });
    return result;
  }, (v2, a2, superJson) => {
    const clazz = superJson.classRegistry.getValue(a2[1]);
    if (!clazz) {
      throw new Error(`Trying to deserialize unknown class '${a2[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
    }
    return Object.assign(Object.create(clazz.prototype), v2);
  });
  const customRule = compositeTransformation((value, superJson) => {
    return !!superJson.customTransformerRegistry.findApplicable(value);
  }, (value, superJson) => {
    const transformer = superJson.customTransformerRegistry.findApplicable(value);
    return ["custom", transformer.name];
  }, (value, superJson) => {
    const transformer = superJson.customTransformerRegistry.findApplicable(value);
    return transformer.serialize(value);
  }, (v2, a2, superJson) => {
    const transformer = superJson.customTransformerRegistry.findByName(a2[1]);
    if (!transformer) {
      throw new Error("Trying to deserialize unknown custom value");
    }
    return transformer.deserialize(v2);
  });
  const compositeRules = [classRule, symbolRule, customRule, typedArrayRule];
  const transformValue = (value, superJson) => {
    const applicableCompositeRule = findArr(compositeRules, (rule) => rule.isApplicable(value, superJson));
    if (applicableCompositeRule) {
      return {
        value: applicableCompositeRule.transform(value, superJson),
        type: applicableCompositeRule.annotation(value, superJson)
      };
    }
    const applicableSimpleRule = findArr(simpleRules, (rule) => rule.isApplicable(value, superJson));
    if (applicableSimpleRule) {
      return {
        value: applicableSimpleRule.transform(value, superJson),
        type: applicableSimpleRule.annotation
      };
    }
    return void 0;
  };
  const simpleRulesByAnnotation = {};
  simpleRules.forEach((rule) => {
    simpleRulesByAnnotation[rule.annotation] = rule;
  });
  const untransformValue = (json, type, superJson) => {
    if (isArray$1(type)) {
      switch (type[0]) {
        case "symbol":
          return symbolRule.untransform(json, type, superJson);
        case "class":
          return classRule.untransform(json, type, superJson);
        case "custom":
          return customRule.untransform(json, type, superJson);
        case "typed-array":
          return typedArrayRule.untransform(json, type, superJson);
        default:
          throw new Error("Unknown transformation: " + type);
      }
    } else {
      const transformation = simpleRulesByAnnotation[type];
      if (!transformation) {
        throw new Error("Unknown transformation: " + type);
      }
      return transformation.untransform(json, superJson);
    }
  };
  const getNthKey = (value, n2) => {
    if (n2 > value.size)
      throw new Error("index out of bounds");
    const keys = value.keys();
    while (n2 > 0) {
      keys.next();
      n2--;
    }
    return keys.next().value;
  };
  function validatePath(path) {
    if (includes(path, "__proto__")) {
      throw new Error("__proto__ is not allowed as a property");
    }
    if (includes(path, "prototype")) {
      throw new Error("prototype is not allowed as a property");
    }
    if (includes(path, "constructor")) {
      throw new Error("constructor is not allowed as a property");
    }
  }
  const getDeep = (object, path) => {
    validatePath(path);
    for (let i2 = 0; i2 < path.length; i2++) {
      const key = path[i2];
      if (isSet(object)) {
        object = getNthKey(object, +key);
      } else if (isMap(object)) {
        const row = +key;
        const type = +path[++i2] === 0 ? "key" : "value";
        const keyOfRow = getNthKey(object, row);
        switch (type) {
          case "key":
            object = keyOfRow;
            break;
          case "value":
            object = object.get(keyOfRow);
            break;
        }
      } else {
        object = object[key];
      }
    }
    return object;
  };
  const setDeep = (object, path, mapper) => {
    validatePath(path);
    if (path.length === 0) {
      return mapper(object);
    }
    let parent = object;
    for (let i2 = 0; i2 < path.length - 1; i2++) {
      const key = path[i2];
      if (isArray$1(parent)) {
        const index2 = +key;
        parent = parent[index2];
      } else if (isPlainObject$1(parent)) {
        parent = parent[key];
      } else if (isSet(parent)) {
        const row = +key;
        parent = getNthKey(parent, row);
      } else if (isMap(parent)) {
        const isEnd = i2 === path.length - 2;
        if (isEnd) {
          break;
        }
        const row = +key;
        const type = +path[++i2] === 0 ? "key" : "value";
        const keyOfRow = getNthKey(parent, row);
        switch (type) {
          case "key":
            parent = keyOfRow;
            break;
          case "value":
            parent = parent.get(keyOfRow);
            break;
        }
      }
    }
    const lastKey = path[path.length - 1];
    if (isArray$1(parent)) {
      parent[+lastKey] = mapper(parent[+lastKey]);
    } else if (isPlainObject$1(parent)) {
      parent[lastKey] = mapper(parent[lastKey]);
    }
    if (isSet(parent)) {
      const oldValue = getNthKey(parent, +lastKey);
      const newValue = mapper(oldValue);
      if (oldValue !== newValue) {
        parent.delete(oldValue);
        parent.add(newValue);
      }
    }
    if (isMap(parent)) {
      const row = +path[path.length - 2];
      const keyToRow = getNthKey(parent, row);
      const type = +lastKey === 0 ? "key" : "value";
      switch (type) {
        case "key": {
          const newKey = mapper(keyToRow);
          parent.set(newKey, parent.get(keyToRow));
          if (newKey !== keyToRow) {
            parent.delete(keyToRow);
          }
          break;
        }
        case "value": {
          parent.set(keyToRow, mapper(parent.get(keyToRow)));
          break;
        }
      }
    }
    return object;
  };
  function traverse(tree, walker2, origin = []) {
    if (!tree) {
      return;
    }
    if (!isArray$1(tree)) {
      forEach(tree, (subtree, key) => traverse(subtree, walker2, [...origin, ...parsePath(key)]));
      return;
    }
    const [nodeValue, children] = tree;
    if (children) {
      forEach(children, (child, key) => {
        traverse(child, walker2, [...origin, ...parsePath(key)]);
      });
    }
    walker2(nodeValue, origin);
  }
  function applyValueAnnotations(plain, annotations, superJson) {
    traverse(annotations, (type, path) => {
      plain = setDeep(plain, path, (v2) => untransformValue(v2, type, superJson));
    });
    return plain;
  }
  function applyReferentialEqualityAnnotations(plain, annotations) {
    function apply(identicalPaths, path) {
      const object = getDeep(plain, parsePath(path));
      identicalPaths.map(parsePath).forEach((identicalObjectPath) => {
        plain = setDeep(plain, identicalObjectPath, () => object);
      });
    }
    if (isArray$1(annotations)) {
      const [root, other] = annotations;
      root.forEach((identicalPath) => {
        plain = setDeep(plain, parsePath(identicalPath), () => plain);
      });
      if (other) {
        forEach(other, apply);
      }
    } else {
      forEach(annotations, apply);
    }
    return plain;
  }
  const isDeep = (object, superJson) => isPlainObject$1(object) || isArray$1(object) || isMap(object) || isSet(object) || isInstanceOfRegisteredClass(object, superJson);
  function addIdentity(object, path, identities) {
    const existingSet = identities.get(object);
    if (existingSet) {
      existingSet.push(path);
    } else {
      identities.set(object, [path]);
    }
  }
  function generateReferentialEqualityAnnotations(identitites, dedupe) {
    const result = {};
    let rootEqualityPaths = void 0;
    identitites.forEach((paths) => {
      if (paths.length <= 1) {
        return;
      }
      if (!dedupe) {
        paths = paths.map((path) => path.map(String)).sort((a2, b2) => a2.length - b2.length);
      }
      const [representativePath, ...identicalPaths] = paths;
      if (representativePath.length === 0) {
        rootEqualityPaths = identicalPaths.map(stringifyPath);
      } else {
        result[stringifyPath(representativePath)] = identicalPaths.map(stringifyPath);
      }
    });
    if (rootEqualityPaths) {
      if (isEmptyObject(result)) {
        return [rootEqualityPaths];
      } else {
        return [rootEqualityPaths, result];
      }
    } else {
      return isEmptyObject(result) ? void 0 : result;
    }
  }
  const walker = (object, identities, superJson, dedupe, path = [], objectsInThisPath = [], seenObjects = /* @__PURE__ */ new Map()) => {
    const primitive = isPrimitive(object);
    if (!primitive) {
      addIdentity(object, path, identities);
      const seen = seenObjects.get(object);
      if (seen) {
        return dedupe ? {
          transformedValue: null
        } : seen;
      }
    }
    if (!isDeep(object, superJson)) {
      const transformed2 = transformValue(object, superJson);
      const result2 = transformed2 ? {
        transformedValue: transformed2.value,
        annotations: [transformed2.type]
      } : {
        transformedValue: object
      };
      if (!primitive) {
        seenObjects.set(object, result2);
      }
      return result2;
    }
    if (includes(objectsInThisPath, object)) {
      return {
        transformedValue: null
      };
    }
    const transformationResult = transformValue(object, superJson);
    const transformed = (transformationResult == null ? void 0 : transformationResult.value) ?? object;
    const transformedValue = isArray$1(transformed) ? [] : {};
    const innerAnnotations = {};
    forEach(transformed, (value, index2) => {
      if (index2 === "__proto__" || index2 === "constructor" || index2 === "prototype") {
        throw new Error(`Detected property ${index2}. This is a prototype pollution risk, please remove it from your object.`);
      }
      const recursiveResult = walker(value, identities, superJson, dedupe, [...path, index2], [...objectsInThisPath, object], seenObjects);
      transformedValue[index2] = recursiveResult.transformedValue;
      if (isArray$1(recursiveResult.annotations)) {
        innerAnnotations[index2] = recursiveResult.annotations;
      } else if (isPlainObject$1(recursiveResult.annotations)) {
        forEach(recursiveResult.annotations, (tree, key) => {
          innerAnnotations[escapeKey(index2) + "." + key] = tree;
        });
      }
    });
    const result = isEmptyObject(innerAnnotations) ? {
      transformedValue,
      annotations: !!transformationResult ? [transformationResult.type] : void 0
    } : {
      transformedValue,
      annotations: !!transformationResult ? [transformationResult.type, innerAnnotations] : innerAnnotations
    };
    if (!primitive) {
      seenObjects.set(object, result);
    }
    return result;
  };
  function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
  }
  function isArray(payload) {
    return getType(payload) === "Array";
  }
  function isPlainObject(payload) {
    if (getType(payload) !== "Object")
      return false;
    const prototype = Object.getPrototypeOf(payload);
    return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
  }
  function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
    const propType = {}.propertyIsEnumerable.call(originalObject, key) ? "enumerable" : "nonenumerable";
    if (propType === "enumerable")
      carry[key] = newVal;
    if (includeNonenumerable && propType === "nonenumerable") {
      Object.defineProperty(carry, key, {
        value: newVal,
        enumerable: false,
        writable: true,
        configurable: true
      });
    }
  }
  function copy(target, options = {}) {
    if (isArray(target)) {
      return target.map((item) => copy(item, options));
    }
    if (!isPlainObject(target)) {
      return target;
    }
    const props = Object.getOwnPropertyNames(target);
    const symbols = Object.getOwnPropertySymbols(target);
    return [...props, ...symbols].reduce((carry, key) => {
      if (isArray(options.props) && !options.props.includes(key)) {
        return carry;
      }
      const val = target[key];
      const newVal = copy(val, options);
      assignProp(carry, key, newVal, target, options.nonenumerable);
      return carry;
    }, {});
  }
  class SuperJSON {
    /**
     * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
     */
    constructor({ dedupe = false } = {}) {
      this.classRegistry = new ClassRegistry();
      this.symbolRegistry = new Registry((s2) => s2.description ?? "");
      this.customTransformerRegistry = new CustomTransformerRegistry();
      this.allowedErrorProps = [];
      this.dedupe = dedupe;
    }
    serialize(object) {
      const identities = /* @__PURE__ */ new Map();
      const output = walker(object, identities, this, this.dedupe);
      const res = {
        json: output.transformedValue
      };
      if (output.annotations) {
        res.meta = {
          ...res.meta,
          values: output.annotations
        };
      }
      const equalityAnnotations = generateReferentialEqualityAnnotations(identities, this.dedupe);
      if (equalityAnnotations) {
        res.meta = {
          ...res.meta,
          referentialEqualities: equalityAnnotations
        };
      }
      return res;
    }
    deserialize(payload) {
      const { json, meta } = payload;
      let result = copy(json);
      if (meta == null ? void 0 : meta.values) {
        result = applyValueAnnotations(result, meta.values, this);
      }
      if (meta == null ? void 0 : meta.referentialEqualities) {
        result = applyReferentialEqualityAnnotations(result, meta.referentialEqualities);
      }
      return result;
    }
    stringify(object) {
      return JSON.stringify(this.serialize(object));
    }
    parse(string) {
      return this.deserialize(JSON.parse(string));
    }
    registerClass(v2, options) {
      this.classRegistry.register(v2, options);
    }
    registerSymbol(v2, identifier) {
      this.symbolRegistry.register(v2, identifier);
    }
    registerCustom(transformer, name) {
      this.customTransformerRegistry.register({
        name,
        ...transformer
      });
    }
    allowErrorProps(...props) {
      this.allowedErrorProps.push(...props);
    }
  }
  SuperJSON.defaultInstance = new SuperJSON();
  SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
  SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
  SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
  SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
  SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
  SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
  SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
  SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);
  SuperJSON.serialize;
  SuperJSON.deserialize;
  SuperJSON.stringify;
  SuperJSON.parse;
  SuperJSON.registerClass;
  SuperJSON.registerCustom;
  SuperJSON.registerSymbol;
  SuperJSON.allowErrorProps;
  function createJSONStorage(getStorage, options) {
    let storage;
    try {
      storage = getStorage();
    } catch (e2) {
      return;
    }
    const persistStorage = {
      getItem: (name) => {
        var _a;
        const parse = (str2) => {
          if (str2 === null) {
            return null;
          }
          return JSON.parse(str2, void 0);
        };
        const str = (_a = storage.getItem(name)) != null ? _a : null;
        if (str instanceof Promise) {
          return str.then(parse);
        }
        return parse(str);
      },
      setItem: (name, newValue) => storage.setItem(
        name,
        JSON.stringify(newValue, void 0)
      ),
      removeItem: (name) => storage.removeItem(name)
    };
    return persistStorage;
  }
  const toThenable = (fn2) => (input) => {
    try {
      const result = fn2(input);
      if (result instanceof Promise) {
        return result;
      }
      return {
        then(onFulfilled) {
          return toThenable(onFulfilled)(result);
        },
        catch(_onRejected) {
          return this;
        }
      };
    } catch (e2) {
      return {
        then(_onFulfilled) {
          return this;
        },
        catch(onRejected) {
          return toThenable(onRejected)(e2);
        }
      };
    }
  };
  const persistImpl = (config, baseOptions) => (set, get, api) => {
    let options = {
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => state,
      version: 0,
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...persistedState
      }),
      ...baseOptions
    };
    let hasHydrated = false;
    const hydrationListeners = /* @__PURE__ */ new Set();
    const finishHydrationListeners = /* @__PURE__ */ new Set();
    let storage = options.storage;
    if (!storage) {
      return config(
        (...args) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
          );
          set(...args);
        },
        get,
        api
      );
    }
    const setItem = () => {
      const state = options.partialize({ ...get() });
      return storage.setItem(options.name, {
        state,
        version: options.version
      });
    };
    const savedSetState = api.setState;
    api.setState = (state, replace) => {
      savedSetState(state, replace);
      void setItem();
    };
    const configResult = config(
      (...args) => {
        set(...args);
        void setItem();
      },
      get,
      api
    );
    api.getInitialState = () => configResult;
    let stateFromStorage;
    const hydrate = () => {
      var _a, _b;
      if (!storage) return;
      hasHydrated = false;
      hydrationListeners.forEach((cb) => {
        var _a2;
        return cb((_a2 = get()) != null ? _a2 : configResult);
      });
      const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
      return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
        if (deserializedStorageValue) {
          if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
            if (options.migrate) {
              const migration = options.migrate(
                deserializedStorageValue.state,
                deserializedStorageValue.version
              );
              if (migration instanceof Promise) {
                return migration.then((result) => [true, result]);
              }
              return [true, migration];
            }
            console.error(
              `State loaded from storage couldn't be migrated since no migrate function was provided`
            );
          } else {
            return [false, deserializedStorageValue.state];
          }
        }
        return [false, void 0];
      }).then((migrationResult) => {
        var _a2;
        const [migrated, migratedState] = migrationResult;
        stateFromStorage = options.merge(
          migratedState,
          (_a2 = get()) != null ? _a2 : configResult
        );
        set(stateFromStorage, true);
        if (migrated) {
          return setItem();
        }
      }).then(() => {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
        stateFromStorage = get();
        hasHydrated = true;
        finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
      }).catch((e2) => {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e2);
      });
    };
    api.persist = {
      setOptions: (newOptions) => {
        options = {
          ...options,
          ...newOptions
        };
        if (newOptions.storage) {
          storage = newOptions.storage;
        }
      },
      clearStorage: () => {
        storage == null ? void 0 : storage.removeItem(options.name);
      },
      getOptions: () => options,
      rehydrate: () => hydrate(),
      hasHydrated: () => hasHydrated,
      onHydrate: (cb) => {
        hydrationListeners.add(cb);
        return () => {
          hydrationListeners.delete(cb);
        };
      },
      onFinishHydration: (cb) => {
        finishHydrationListeners.add(cb);
        return () => {
          finishHydrationListeners.delete(cb);
        };
      }
    };
    if (!options.skipHydration) {
      hydrate();
    }
    return stateFromStorage || configResult;
  };
  const persist = persistImpl;
  const createAppStore = (s2) => {
    const set = s2;
    return {
      appBlockRequestList: [],
      appUnblockRequestList: [],
      lastBlockRequestNumber: 0,
      lastUnblockRequestNumber: 0,
      isMainAppBlocked: false,
      requestMainAppBlock: () => {
        let newHandleValue = 0;
        set((state) => {
          newHandleValue = state.lastBlockRequestNumber + 1;
          return {
            appBlockRequestList: [...state.appBlockRequestList, newHandleValue],
            lastBlockRequestNumber: newHandleValue,
            isMainAppBlocked: state.appUnblockRequestList.length === 0
            // Unblock requests override block requests
          };
        });
        return newHandleValue;
      },
      requestMainAppUnblock: () => {
        let newHandleValue = 0;
        set((state) => {
          newHandleValue = state.lastUnblockRequestNumber + 1;
          return {
            appUnblockRequestList: [
              ...state.appUnblockRequestList,
              newHandleValue
            ],
            lastUnblockRequestNumber: newHandleValue,
            isMainAppBlocked: false
          };
        });
        return newHandleValue;
      },
      discardMainAppBlock: (handle) => {
        set((state) => {
          const newBlockRequestList = state.appBlockRequestList.filter(
            (h2) => h2 !== handle
          );
          return {
            appBlockRequestList: newBlockRequestList,
            isMainAppBlocked: newBlockRequestList.length > 0 && state.appUnblockRequestList.length === 0
          };
        });
      },
      discardMainAppUnblock: (handle) => {
        set((state) => {
          const newUnblockRequestList = state.appUnblockRequestList.filter(
            (h2) => h2 !== handle
          );
          return {
            appUnblockRequestList: newUnblockRequestList,
            isMainAppBlocked: state.appBlockRequestList.length > 0 && newUnblockRequestList.length === 0
          };
        });
      },
      toolbarPosition: DropAreaZone.BOTTOM_CENTER,
      setToolbarPosition: (position) => set(() => ({ toolbarPosition: position })),
      toolbarBoxRef: b$5(),
      setToolbarBoxRef: (ref) => set(() => ({ toolbarBoxRef: ref })),
      unsetToolbarBoxRef: () => set(() => ({ toolbarBoxRef: b$5() })),
      minimized: false,
      minimize: () => set(() => ({ minimized: true })),
      expand: () => set(() => ({ minimized: false })),
      promotedOnStartup: false,
      promotionFinished: () => set(() => ({ promotedOnStartup: true }))
    };
  };
  function createSuperJSONStorage(storage) {
    return {
      getItem: (name) => {
        const str = storage.getItem(name);
        if (!str) return null;
        return SuperJSON.parse(str);
      },
      setItem: (name, value) => {
        storage.setItem(name, SuperJSON.stringify(value));
      },
      removeItem: (name) => storage.removeItem(name)
    };
  }
  const useAppState = create(
    persist(createAppStore, {
      name: "stgws:companion",
      storage: createSuperJSONStorage(sessionStorage),
      partialize: (state) => {
        return {
          toolbarPosition: state.toolbarPosition
        };
      }
    })
  );
  const ChatContext = K$3({
    chats: [],
    currentChatId: null,
    createChat: () => "",
    deleteChat: () => {
    },
    setCurrentChat: () => {
    },
    setChatInput: () => {
    },
    addChatDomContext: () => {
    },
    removeChatDomContext: () => {
    },
    addMessage: () => {
    },
    chatAreaState: "hidden",
    setChatAreaState: () => {
    },
    isPromptCreationActive: false,
    startPromptCreation: () => {
    },
    stopPromptCreation: () => {
    }
  });
  const ChatStateProvider = ({ children }) => {
    const [chats, setChats] = d$4([
      {
        id: "new_chat",
        messages: [],
        title: "New chat",
        inputValue: "",
        domContextElements: []
      }
    ]);
    const [currentChatId, setCurrentChatId] = d$4("new_chat");
    const [chatAreaState, internalSetChatAreaState] = d$4("hidden");
    const [isPromptCreationMode, setIsPromptCreationMode] = d$4(false);
    const isMinimized = useAppState((state) => state.minimized);
    y$6(() => {
      if (isMinimized) {
        setIsPromptCreationMode(false);
        internalSetChatAreaState("hidden");
      }
    }, [isMinimized]);
    const { bridge } = useSRPCBridge();
    const createChat = q$3(() => {
      const newChatId = crypto.randomUUID();
      const newChat = {
        id: newChatId,
        title: null,
        messages: [],
        inputValue: "",
        domContextElements: []
      };
      setChats((prev) => [...prev, newChat]);
      setCurrentChatId(newChatId);
      return newChatId;
    }, []);
    const deleteChat = q$3(
      (chatId) => {
        setChats((prev) => {
          const filteredChats = prev.filter((chat) => chat.id !== chatId);
          if (filteredChats.length === 0) {
            return [
              {
                id: "new_chat",
                messages: [],
                title: "New chat",
                inputValue: "",
                domContextElements: []
              }
            ];
          }
          return filteredChats;
        });
        if (currentChatId === chatId) {
          setChats((prev) => {
            setCurrentChatId(prev[0].id);
            return prev;
          });
        }
      },
      [currentChatId]
    );
    const setCurrentChat = q$3((chatId) => {
      setCurrentChatId(chatId);
    }, []);
    const setChatInput = q$3((chatId, value2) => {
      setChats(
        (prev) => prev.map(
          (chat) => chat.id === chatId ? { ...chat, inputValue: value2 } : chat
        )
      );
    }, []);
    const startPromptCreation = q$3(() => {
      setIsPromptCreationMode(true);
      if (chatAreaState === "hidden") {
        internalSetChatAreaState("compact");
      }
    }, [chatAreaState]);
    const stopPromptCreation = q$3(() => {
      setIsPromptCreationMode(false);
      setChats(
        (prev) => prev.map(
          (chat) => chat.id === currentChatId ? { ...chat, domContextElements: [] } : chat
        )
      );
      if (chatAreaState === "compact") {
        internalSetChatAreaState("hidden");
      }
    }, [currentChatId, chatAreaState]);
    const setChatAreaState = q$3(
      (state) => {
        internalSetChatAreaState(state);
        if (state === "hidden") {
          stopPromptCreation();
        }
      },
      [internalSetChatAreaState, stopPromptCreation]
    );
    const addChatDomContext = q$3(
      (chatId, element) => {
        setChats(
          (prev) => prev.map(
            (chat) => chat.id === chatId ? {
              ...chat,
              domContextElements: [...chat.domContextElements, element]
            } : chat
          )
        );
      },
      []
    );
    const removeChatDomContext = q$3(
      (chatId, element) => {
        setChats(
          (prev) => prev.map(
            (chat) => chat.id === chatId ? {
              ...chat,
              domContextElements: chat.domContextElements.filter(
                (e2) => e2 !== element
              )
            } : chat
          )
        );
      },
      []
    );
    const addMessage = q$3(
      (chatId, content) => {
        if (!content.trim()) return;
        const chat = chats.find((chat2) => chat2.id === chatId);
        const prompt = createPrompt(
          chat == null ? void 0 : chat.domContextElements,
          content,
          window.location.href
        );
        const newMessage = {
          id: crypto.randomUUID(),
          content: content.trim(),
          sender: "user",
          type: "regular",
          timestamp: /* @__PURE__ */ new Date()
        };
        async function triggerAgentPrompt() {
          if (bridge) {
            await bridge.call.triggerAgentPrompt(
              { prompt },
              {
                onUpdate: (update) => {
                }
              }
            );
          }
        }
        triggerAgentPrompt();
        setIsPromptCreationMode(false);
        if (chatAreaState === "hidden") {
          internalSetChatAreaState("compact");
        }
        setChats(
          (prev) => prev.map(
            (chat2) => chat2.id === chatId ? {
              ...chat2,
              messages: [...chat2.messages, newMessage],
              inputValue: "",
              domContextElements: []
            } : chat2
          )
        );
      },
      [
        chatAreaState,
        bridge,
        chats,
        setIsPromptCreationMode,
        internalSetChatAreaState
      ]
    );
    const value = {
      chats,
      currentChatId,
      createChat,
      deleteChat,
      setCurrentChat,
      setChatInput,
      addMessage,
      chatAreaState,
      setChatAreaState,
      isPromptCreationActive: isPromptCreationMode,
      startPromptCreation,
      stopPromptCreation,
      addChatDomContext,
      removeChatDomContext
    };
    return /* @__PURE__ */ u$9(ChatContext.Provider, { value, children });
  };
  function useChatState() {
    const context = x$4(ChatContext);
    if (!context) {
      throw new Error("useChatState must be used within a ChatStateProvider");
    }
    return context;
  }
  function useCyclicUpdate(func, frameRate) {
    const animationFrameHandle = A$3(void 0);
    const timeBetweenFrames = T$5(
      () => frameRate && frameRate > 0 ? 1e3 / frameRate : 0,
      [frameRate]
    );
    const lastCallFrameTime = A$3(0);
    const update = q$3(
      (frameTime) => {
        if (frameTime - lastCallFrameTime.current >= timeBetweenFrames) {
          func();
          lastCallFrameTime.current = frameTime;
        }
        animationFrameHandle.current = requestAnimationFrame(update);
      },
      [func, timeBetweenFrames]
    );
    y$6(() => {
      if (!frameRate || frameRate > 0) {
        animationFrameHandle.current = requestAnimationFrame(update);
      }
      return () => {
        if (animationFrameHandle.current) {
          cancelAnimationFrame(animationFrameHandle.current);
          animationFrameHandle.current = void 0;
        }
      };
    }, [frameRate, update]);
  }
  const LocationContext = K$3(new URL(window.location.href));
  function LocationProvider({
    children
  }) {
    const [currentUrl, setCurrentUrl] = d$4(
      new URL(window.location.href)
    );
    const update = q$3(() => {
      setCurrentUrl(new URL(window.location.href));
    }, []);
    useCyclicUpdate(update, 15);
    return /* @__PURE__ */ u$9(LocationContext.Provider, { value: currentUrl, children });
  }
  function ContextProviders({
    children,
    config
  }) {
    return /* @__PURE__ */ u$9(LocationProvider, { children: /* @__PURE__ */ u$9(SRPCBridgeProvider, { children: /* @__PURE__ */ u$9(PluginProvider, { plugins: (config == null ? void 0 : config.plugins) || [], children: /* @__PURE__ */ u$9(ChatStateProvider, { children }) }) }) });
  }
  function useEventListener(eventName, handler, options, element = window) {
    y$6(() => {
      if (typeof window === "undefined") return;
      if (!element) return;
      element.addEventListener(eventName, handler, options);
      return () => element.removeEventListener(eventName, handler);
    }, [eventName, handler, element, options]);
  }
  function r$3(e2) {
    var t2, f2, n2 = "";
    if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
    else if ("object" == typeof e2) if (Array.isArray(e2)) {
      var o2 = e2.length;
      for (t2 = 0; t2 < o2; t2++) e2[t2] && (f2 = r$3(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
    } else for (f2 in e2) e2[f2] && (n2 && (n2 += " "), n2 += f2);
    return n2;
  }
  function clsx() {
    for (var e2, t2, f2 = 0, n2 = "", o2 = arguments.length; f2 < o2; f2++) (e2 = arguments[f2]) && (t2 = r$3(e2)) && (n2 && (n2 += " "), n2 += t2);
    return n2;
  }
  const CLASS_PART_SEPARATOR = "-";
  const createClassGroupUtils = (config) => {
    const classMap = createClassMap(config);
    const {
      conflictingClassGroups,
      conflictingClassGroupModifiers
    } = config;
    const getClassGroupId = (className) => {
      const classParts = className.split(CLASS_PART_SEPARATOR);
      if (classParts[0] === "" && classParts.length !== 1) {
        classParts.shift();
      }
      return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
      const conflicts = conflictingClassGroups[classGroupId] || [];
      if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
        return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
      }
      return conflicts;
    };
    return {
      getClassGroupId,
      getConflictingClassGroupIds
    };
  };
  const getGroupRecursive = (classParts, classPartObject) => {
    var _a;
    if (classParts.length === 0) {
      return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[0];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
    if (classGroupFromNextClassPart) {
      return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
      return void 0;
    }
    const classRest = classParts.join(CLASS_PART_SEPARATOR);
    return (_a = classPartObject.validators.find(({
      validator
    }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
  };
  const arbitraryPropertyRegex = /^\[(.+)\]$/;
  const getGroupIdForArbitraryProperty = (className) => {
    if (arbitraryPropertyRegex.test(className)) {
      const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
      const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
      if (property) {
        return "arbitrary.." + property;
      }
    }
  };
  const createClassMap = (config) => {
    const {
      theme,
      classGroups
    } = config;
    const classMap = {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    };
    for (const classGroupId in classGroups) {
      processClassesRecursively(classGroups[classGroupId], classMap, classGroupId, theme);
    }
    return classMap;
  };
  const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
    classGroup.forEach((classDefinition) => {
      if (typeof classDefinition === "string") {
        const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
        classPartObjectToEdit.classGroupId = classGroupId;
        return;
      }
      if (typeof classDefinition === "function") {
        if (isThemeGetter(classDefinition)) {
          processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
          return;
        }
        classPartObject.validators.push({
          validator: classDefinition,
          classGroupId
        });
        return;
      }
      Object.entries(classDefinition).forEach(([key, classGroup2]) => {
        processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
      });
    });
  };
  const getPart = (classPartObject, path) => {
    let currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
      if (!currentClassPartObject.nextPart.has(pathPart)) {
        currentClassPartObject.nextPart.set(pathPart, {
          nextPart: /* @__PURE__ */ new Map(),
          validators: []
        });
      }
      currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
  };
  const isThemeGetter = (func) => func.isThemeGetter;
  const createLruCache = (maxCacheSize) => {
    if (maxCacheSize < 1) {
      return {
        get: () => void 0,
        set: () => {
        }
      };
    }
    let cacheSize = 0;
    let cache = /* @__PURE__ */ new Map();
    let previousCache = /* @__PURE__ */ new Map();
    const update = (key, value) => {
      cache.set(key, value);
      cacheSize++;
      if (cacheSize > maxCacheSize) {
        cacheSize = 0;
        previousCache = cache;
        cache = /* @__PURE__ */ new Map();
      }
    };
    return {
      get(key) {
        let value = cache.get(key);
        if (value !== void 0) {
          return value;
        }
        if ((value = previousCache.get(key)) !== void 0) {
          update(key, value);
          return value;
        }
      },
      set(key, value) {
        if (cache.has(key)) {
          cache.set(key, value);
        } else {
          update(key, value);
        }
      }
    };
  };
  const IMPORTANT_MODIFIER = "!";
  const MODIFIER_SEPARATOR = ":";
  const MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length;
  const createParseClassName = (config) => {
    const {
      prefix,
      experimentalParseClassName
    } = config;
    let parseClassName = (className) => {
      const modifiers = [];
      let bracketDepth = 0;
      let parenDepth = 0;
      let modifierStart = 0;
      let postfixModifierPosition;
      for (let index2 = 0; index2 < className.length; index2++) {
        let currentCharacter = className[index2];
        if (bracketDepth === 0 && parenDepth === 0) {
          if (currentCharacter === MODIFIER_SEPARATOR) {
            modifiers.push(className.slice(modifierStart, index2));
            modifierStart = index2 + MODIFIER_SEPARATOR_LENGTH;
            continue;
          }
          if (currentCharacter === "/") {
            postfixModifierPosition = index2;
            continue;
          }
        }
        if (currentCharacter === "[") {
          bracketDepth++;
        } else if (currentCharacter === "]") {
          bracketDepth--;
        } else if (currentCharacter === "(") {
          parenDepth++;
        } else if (currentCharacter === ")") {
          parenDepth--;
        }
      }
      const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
      const baseClassName = stripImportantModifier(baseClassNameWithImportantModifier);
      const hasImportantModifier = baseClassName !== baseClassNameWithImportantModifier;
      const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
      return {
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition
      };
    };
    if (prefix) {
      const fullPrefix = prefix + MODIFIER_SEPARATOR;
      const parseClassNameOriginal = parseClassName;
      parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.substring(fullPrefix.length)) : {
        isExternal: true,
        modifiers: [],
        hasImportantModifier: false,
        baseClassName: className,
        maybePostfixModifierPosition: void 0
      };
    }
    if (experimentalParseClassName) {
      const parseClassNameOriginal = parseClassName;
      parseClassName = (className) => experimentalParseClassName({
        className,
        parseClassName: parseClassNameOriginal
      });
    }
    return parseClassName;
  };
  const stripImportantModifier = (baseClassName) => {
    if (baseClassName.endsWith(IMPORTANT_MODIFIER)) {
      return baseClassName.substring(0, baseClassName.length - 1);
    }
    if (baseClassName.startsWith(IMPORTANT_MODIFIER)) {
      return baseClassName.substring(1);
    }
    return baseClassName;
  };
  const createSortModifiers = (config) => {
    const orderSensitiveModifiers = Object.fromEntries(config.orderSensitiveModifiers.map((modifier) => [modifier, true]));
    const sortModifiers = (modifiers) => {
      if (modifiers.length <= 1) {
        return modifiers;
      }
      const sortedModifiers = [];
      let unsortedModifiers = [];
      modifiers.forEach((modifier) => {
        const isPositionSensitive = modifier[0] === "[" || orderSensitiveModifiers[modifier];
        if (isPositionSensitive) {
          sortedModifiers.push(...unsortedModifiers.sort(), modifier);
          unsortedModifiers = [];
        } else {
          unsortedModifiers.push(modifier);
        }
      });
      sortedModifiers.push(...unsortedModifiers.sort());
      return sortedModifiers;
    };
    return sortModifiers;
  };
  const createConfigUtils = (config) => ({
    cache: createLruCache(config.cacheSize),
    parseClassName: createParseClassName(config),
    sortModifiers: createSortModifiers(config),
    ...createClassGroupUtils(config)
  });
  const SPLIT_CLASSES_REGEX = /\s+/;
  const mergeClassList = (classList, configUtils) => {
    const {
      parseClassName,
      getClassGroupId,
      getConflictingClassGroupIds,
      sortModifiers
    } = configUtils;
    const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = "";
    for (let index2 = classNames.length - 1; index2 >= 0; index2 -= 1) {
      const originalClassName = classNames[index2];
      const {
        isExternal,
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition
      } = parseClassName(originalClassName);
      if (isExternal) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      let hasPostfixModifier = !!maybePostfixModifierPosition;
      let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
      if (!classGroupId) {
        if (!hasPostfixModifier) {
          result = originalClassName + (result.length > 0 ? " " + result : result);
          continue;
        }
        classGroupId = getClassGroupId(baseClassName);
        if (!classGroupId) {
          result = originalClassName + (result.length > 0 ? " " + result : result);
          continue;
        }
        hasPostfixModifier = false;
      }
      const variantModifier = sortModifiers(modifiers).join(":");
      const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
      const classId = modifierId + classGroupId;
      if (classGroupsInConflict.includes(classId)) {
        continue;
      }
      classGroupsInConflict.push(classId);
      const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
      for (let i2 = 0; i2 < conflictGroups.length; ++i2) {
        const group = conflictGroups[i2];
        classGroupsInConflict.push(modifierId + group);
      }
      result = originalClassName + (result.length > 0 ? " " + result : result);
    }
    return result;
  };
  function twJoin() {
    let index2 = 0;
    let argument;
    let resolvedValue;
    let string = "";
    while (index2 < arguments.length) {
      if (argument = arguments[index2++]) {
        if (resolvedValue = toValue(argument)) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  }
  const toValue = (mix) => {
    if (typeof mix === "string") {
      return mix;
    }
    let resolvedValue;
    let string = "";
    for (let k2 = 0; k2 < mix.length; k2++) {
      if (mix[k2]) {
        if (resolvedValue = toValue(mix[k2])) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  };
  function createTailwindMerge(createConfigFirst, ...createConfigRest) {
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
      const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
      configUtils = createConfigUtils(config);
      cacheGet = configUtils.cache.get;
      cacheSet = configUtils.cache.set;
      functionToCall = tailwindMerge;
      return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
      const cachedResult = cacheGet(classList);
      if (cachedResult) {
        return cachedResult;
      }
      const result = mergeClassList(classList, configUtils);
      cacheSet(classList, result);
      return result;
    }
    return function callTailwindMerge() {
      return functionToCall(twJoin.apply(null, arguments));
    };
  }
  const fromTheme = (key) => {
    const themeGetter = (theme) => theme[key] || [];
    themeGetter.isThemeGetter = true;
    return themeGetter;
  };
  const arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
  const arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
  const fractionRegex = /^\d+\/\d+$/;
  const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
  const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  const isFraction = (value) => fractionRegex.test(value);
  const isNumber = (value) => !!value && !Number.isNaN(Number(value));
  const isInteger = (value) => !!value && Number.isInteger(Number(value));
  const isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
  const isTshirtSize = (value) => tshirtUnitRegex.test(value);
  const isAny = () => true;
  const isLengthOnly = (value) => (
    // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
  );
  const isNever = () => false;
  const isShadow = (value) => shadowRegex.test(value);
  const isImage = (value) => imageRegex.test(value);
  const isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
  const isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
  const isArbitraryValue = (value) => arbitraryValueRegex.test(value);
  const isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
  const isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
  const isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
  const isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
  const isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
  const isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
  const isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
  const isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
  const isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
  const isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
  const isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
  const isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
  const getIsArbitraryValue = (value, testLabel, testValue) => {
    const result = arbitraryValueRegex.exec(value);
    if (result) {
      if (result[1]) {
        return testLabel(result[1]);
      }
      return testValue(result[2]);
    }
    return false;
  };
  const getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
    const result = arbitraryVariableRegex.exec(value);
    if (result) {
      if (result[1]) {
        return testLabel(result[1]);
      }
      return shouldMatchNoLabel;
    }
    return false;
  };
  const isLabelPosition = (label) => label === "position" || label === "percentage";
  const isLabelImage = (label) => label === "image" || label === "url";
  const isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
  const isLabelLength = (label) => label === "length";
  const isLabelNumber = (label) => label === "number";
  const isLabelFamilyName = (label) => label === "family-name";
  const isLabelShadow = (label) => label === "shadow";
  const getDefaultConfig = () => {
    const themeColor = fromTheme("color");
    const themeFont = fromTheme("font");
    const themeText = fromTheme("text");
    const themeFontWeight = fromTheme("font-weight");
    const themeTracking = fromTheme("tracking");
    const themeLeading = fromTheme("leading");
    const themeBreakpoint = fromTheme("breakpoint");
    const themeContainer = fromTheme("container");
    const themeSpacing = fromTheme("spacing");
    const themeRadius = fromTheme("radius");
    const themeShadow = fromTheme("shadow");
    const themeInsetShadow = fromTheme("inset-shadow");
    const themeTextShadow = fromTheme("text-shadow");
    const themeDropShadow = fromTheme("drop-shadow");
    const themeBlur = fromTheme("blur");
    const themePerspective = fromTheme("perspective");
    const themeAspect = fromTheme("aspect");
    const themeEase = fromTheme("ease");
    const themeAnimate = fromTheme("animate");
    const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
    const scalePosition = () => [
      "center",
      "top",
      "bottom",
      "left",
      "right",
      "top-left",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "left-top",
      "top-right",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "right-top",
      "bottom-right",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "right-bottom",
      "bottom-left",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "left-bottom"
    ];
    const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue];
    const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
    const scaleOverscroll = () => ["auto", "contain", "none"];
    const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
    const scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()];
    const scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue];
    const scaleGridColRowStartAndEnd = () => ["auto", {
      span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
    }, isInteger, isArbitraryVariable, isArbitraryValue];
    const scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue];
    const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue];
    const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
    const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
    const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
    const scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
    const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
    const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
      position: [isArbitraryVariable, isArbitraryValue]
    }];
    const scaleBgRepeat = () => ["no-repeat", {
      repeat: ["", "x", "y", "space", "round"]
    }];
    const scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
      size: [isArbitraryVariable, isArbitraryValue]
    }];
    const scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength];
    const scaleRadius = () => [
      // Deprecated since Tailwind CSS v4.0.0
      "",
      "none",
      "full",
      themeRadius,
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength];
    const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
    const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
    const scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition];
    const scaleBlur = () => [
      // Deprecated since Tailwind CSS v4.0.0
      "",
      "none",
      themeBlur,
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
    const scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
    const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
    const scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [isTshirtSize],
        breakpoint: [isTshirtSize],
        color: [isAny],
        container: [isTshirtSize],
        "drop-shadow": [isTshirtSize],
        ease: ["in", "out", "in-out"],
        font: [isAnyNonArbitrary],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [isTshirtSize],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [isTshirtSize],
        shadow: [isTshirtSize],
        spacing: ["px", isNumber],
        text: [isTshirtSize],
        "text-shadow": [isTshirtSize],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        // --------------
        // --- Layout ---
        // --------------
        /**
         * Aspect Ratio
         * @see https://tailwindcss.com/docs/aspect-ratio
         */
        aspect: [{
          aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
        }],
        /**
         * Container
         * @see https://tailwindcss.com/docs/container
         * @deprecated since Tailwind CSS v4.0.0
         */
        container: ["container"],
        /**
         * Columns
         * @see https://tailwindcss.com/docs/columns
         */
        columns: [{
          columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
        }],
        /**
         * Break After
         * @see https://tailwindcss.com/docs/break-after
         */
        "break-after": [{
          "break-after": scaleBreak()
        }],
        /**
         * Break Before
         * @see https://tailwindcss.com/docs/break-before
         */
        "break-before": [{
          "break-before": scaleBreak()
        }],
        /**
         * Break Inside
         * @see https://tailwindcss.com/docs/break-inside
         */
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        /**
         * Box Decoration Break
         * @see https://tailwindcss.com/docs/box-decoration-break
         */
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        /**
         * Box Sizing
         * @see https://tailwindcss.com/docs/box-sizing
         */
        box: [{
          box: ["border", "content"]
        }],
        /**
         * Display
         * @see https://tailwindcss.com/docs/display
         */
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        /**
         * Screen Reader Only
         * @see https://tailwindcss.com/docs/display#screen-reader-only
         */
        sr: ["sr-only", "not-sr-only"],
        /**
         * Floats
         * @see https://tailwindcss.com/docs/float
         */
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        /**
         * Clear
         * @see https://tailwindcss.com/docs/clear
         */
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        /**
         * Isolation
         * @see https://tailwindcss.com/docs/isolation
         */
        isolation: ["isolate", "isolation-auto"],
        /**
         * Object Fit
         * @see https://tailwindcss.com/docs/object-fit
         */
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        /**
         * Object Position
         * @see https://tailwindcss.com/docs/object-position
         */
        "object-position": [{
          object: scalePositionWithArbitrary()
        }],
        /**
         * Overflow
         * @see https://tailwindcss.com/docs/overflow
         */
        overflow: [{
          overflow: scaleOverflow()
        }],
        /**
         * Overflow X
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-x": [{
          "overflow-x": scaleOverflow()
        }],
        /**
         * Overflow Y
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-y": [{
          "overflow-y": scaleOverflow()
        }],
        /**
         * Overscroll Behavior
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        overscroll: [{
          overscroll: scaleOverscroll()
        }],
        /**
         * Overscroll Behavior X
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-x": [{
          "overscroll-x": scaleOverscroll()
        }],
        /**
         * Overscroll Behavior Y
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-y": [{
          "overscroll-y": scaleOverscroll()
        }],
        /**
         * Position
         * @see https://tailwindcss.com/docs/position
         */
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        /**
         * Top / Right / Bottom / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        inset: [{
          inset: scaleInset()
        }],
        /**
         * Right / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-x": [{
          "inset-x": scaleInset()
        }],
        /**
         * Top / Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-y": [{
          "inset-y": scaleInset()
        }],
        /**
         * Start
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        start: [{
          start: scaleInset()
        }],
        /**
         * End
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        end: [{
          end: scaleInset()
        }],
        /**
         * Top
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        top: [{
          top: scaleInset()
        }],
        /**
         * Right
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        right: [{
          right: scaleInset()
        }],
        /**
         * Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        bottom: [{
          bottom: scaleInset()
        }],
        /**
         * Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        left: [{
          left: scaleInset()
        }],
        /**
         * Visibility
         * @see https://tailwindcss.com/docs/visibility
         */
        visibility: ["visible", "invisible", "collapse"],
        /**
         * Z-Index
         * @see https://tailwindcss.com/docs/z-index
         */
        z: [{
          z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
        }],
        // ------------------------
        // --- Flexbox and Grid ---
        // ------------------------
        /**
         * Flex Basis
         * @see https://tailwindcss.com/docs/flex-basis
         */
        basis: [{
          basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
        }],
        /**
         * Flex Direction
         * @see https://tailwindcss.com/docs/flex-direction
         */
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        /**
         * Flex Wrap
         * @see https://tailwindcss.com/docs/flex-wrap
         */
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        /**
         * Flex
         * @see https://tailwindcss.com/docs/flex
         */
        flex: [{
          flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
        }],
        /**
         * Flex Grow
         * @see https://tailwindcss.com/docs/flex-grow
         */
        grow: [{
          grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Flex Shrink
         * @see https://tailwindcss.com/docs/flex-shrink
         */
        shrink: [{
          shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Order
         * @see https://tailwindcss.com/docs/order
         */
        order: [{
          order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Grid Template Columns
         * @see https://tailwindcss.com/docs/grid-template-columns
         */
        "grid-cols": [{
          "grid-cols": scaleGridTemplateColsRows()
        }],
        /**
         * Grid Column Start / End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start-end": [{
          col: scaleGridColRowStartAndEnd()
        }],
        /**
         * Grid Column Start
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start": [{
          "col-start": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Column End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-end": [{
          "col-end": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Template Rows
         * @see https://tailwindcss.com/docs/grid-template-rows
         */
        "grid-rows": [{
          "grid-rows": scaleGridTemplateColsRows()
        }],
        /**
         * Grid Row Start / End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start-end": [{
          row: scaleGridColRowStartAndEnd()
        }],
        /**
         * Grid Row Start
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start": [{
          "row-start": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Row End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-end": [{
          "row-end": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Auto Flow
         * @see https://tailwindcss.com/docs/grid-auto-flow
         */
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        /**
         * Grid Auto Columns
         * @see https://tailwindcss.com/docs/grid-auto-columns
         */
        "auto-cols": [{
          "auto-cols": scaleGridAutoColsRows()
        }],
        /**
         * Grid Auto Rows
         * @see https://tailwindcss.com/docs/grid-auto-rows
         */
        "auto-rows": [{
          "auto-rows": scaleGridAutoColsRows()
        }],
        /**
         * Gap
         * @see https://tailwindcss.com/docs/gap
         */
        gap: [{
          gap: scaleUnambiguousSpacing()
        }],
        /**
         * Gap X
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-x": [{
          "gap-x": scaleUnambiguousSpacing()
        }],
        /**
         * Gap Y
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-y": [{
          "gap-y": scaleUnambiguousSpacing()
        }],
        /**
         * Justify Content
         * @see https://tailwindcss.com/docs/justify-content
         */
        "justify-content": [{
          justify: [...scaleAlignPrimaryAxis(), "normal"]
        }],
        /**
         * Justify Items
         * @see https://tailwindcss.com/docs/justify-items
         */
        "justify-items": [{
          "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
        }],
        /**
         * Justify Self
         * @see https://tailwindcss.com/docs/justify-self
         */
        "justify-self": [{
          "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
        }],
        /**
         * Align Content
         * @see https://tailwindcss.com/docs/align-content
         */
        "align-content": [{
          content: ["normal", ...scaleAlignPrimaryAxis()]
        }],
        /**
         * Align Items
         * @see https://tailwindcss.com/docs/align-items
         */
        "align-items": [{
          items: [...scaleAlignSecondaryAxis(), {
            baseline: ["", "last"]
          }]
        }],
        /**
         * Align Self
         * @see https://tailwindcss.com/docs/align-self
         */
        "align-self": [{
          self: ["auto", ...scaleAlignSecondaryAxis(), {
            baseline: ["", "last"]
          }]
        }],
        /**
         * Place Content
         * @see https://tailwindcss.com/docs/place-content
         */
        "place-content": [{
          "place-content": scaleAlignPrimaryAxis()
        }],
        /**
         * Place Items
         * @see https://tailwindcss.com/docs/place-items
         */
        "place-items": [{
          "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
        }],
        /**
         * Place Self
         * @see https://tailwindcss.com/docs/place-self
         */
        "place-self": [{
          "place-self": ["auto", ...scaleAlignSecondaryAxis()]
        }],
        // Spacing
        /**
         * Padding
         * @see https://tailwindcss.com/docs/padding
         */
        p: [{
          p: scaleUnambiguousSpacing()
        }],
        /**
         * Padding X
         * @see https://tailwindcss.com/docs/padding
         */
        px: [{
          px: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Y
         * @see https://tailwindcss.com/docs/padding
         */
        py: [{
          py: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Start
         * @see https://tailwindcss.com/docs/padding
         */
        ps: [{
          ps: scaleUnambiguousSpacing()
        }],
        /**
         * Padding End
         * @see https://tailwindcss.com/docs/padding
         */
        pe: [{
          pe: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Top
         * @see https://tailwindcss.com/docs/padding
         */
        pt: [{
          pt: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Right
         * @see https://tailwindcss.com/docs/padding
         */
        pr: [{
          pr: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Bottom
         * @see https://tailwindcss.com/docs/padding
         */
        pb: [{
          pb: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Left
         * @see https://tailwindcss.com/docs/padding
         */
        pl: [{
          pl: scaleUnambiguousSpacing()
        }],
        /**
         * Margin
         * @see https://tailwindcss.com/docs/margin
         */
        m: [{
          m: scaleMargin()
        }],
        /**
         * Margin X
         * @see https://tailwindcss.com/docs/margin
         */
        mx: [{
          mx: scaleMargin()
        }],
        /**
         * Margin Y
         * @see https://tailwindcss.com/docs/margin
         */
        my: [{
          my: scaleMargin()
        }],
        /**
         * Margin Start
         * @see https://tailwindcss.com/docs/margin
         */
        ms: [{
          ms: scaleMargin()
        }],
        /**
         * Margin End
         * @see https://tailwindcss.com/docs/margin
         */
        me: [{
          me: scaleMargin()
        }],
        /**
         * Margin Top
         * @see https://tailwindcss.com/docs/margin
         */
        mt: [{
          mt: scaleMargin()
        }],
        /**
         * Margin Right
         * @see https://tailwindcss.com/docs/margin
         */
        mr: [{
          mr: scaleMargin()
        }],
        /**
         * Margin Bottom
         * @see https://tailwindcss.com/docs/margin
         */
        mb: [{
          mb: scaleMargin()
        }],
        /**
         * Margin Left
         * @see https://tailwindcss.com/docs/margin
         */
        ml: [{
          ml: scaleMargin()
        }],
        /**
         * Space Between X
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-x": [{
          "space-x": scaleUnambiguousSpacing()
        }],
        /**
         * Space Between X Reverse
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-x-reverse": ["space-x-reverse"],
        /**
         * Space Between Y
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-y": [{
          "space-y": scaleUnambiguousSpacing()
        }],
        /**
         * Space Between Y Reverse
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-y-reverse": ["space-y-reverse"],
        // --------------
        // --- Sizing ---
        // --------------
        /**
         * Size
         * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
         */
        size: [{
          size: scaleSizing()
        }],
        /**
         * Width
         * @see https://tailwindcss.com/docs/width
         */
        w: [{
          w: [themeContainer, "screen", ...scaleSizing()]
        }],
        /**
         * Min-Width
         * @see https://tailwindcss.com/docs/min-width
         */
        "min-w": [{
          "min-w": [
            themeContainer,
            "screen",
            /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            "none",
            ...scaleSizing()
          ]
        }],
        /**
         * Max-Width
         * @see https://tailwindcss.com/docs/max-width
         */
        "max-w": [{
          "max-w": [
            themeContainer,
            "screen",
            "none",
            /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            "prose",
            /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            {
              screen: [themeBreakpoint]
            },
            ...scaleSizing()
          ]
        }],
        /**
         * Height
         * @see https://tailwindcss.com/docs/height
         */
        h: [{
          h: ["screen", ...scaleSizing()]
        }],
        /**
         * Min-Height
         * @see https://tailwindcss.com/docs/min-height
         */
        "min-h": [{
          "min-h": ["screen", "none", ...scaleSizing()]
        }],
        /**
         * Max-Height
         * @see https://tailwindcss.com/docs/max-height
         */
        "max-h": [{
          "max-h": ["screen", ...scaleSizing()]
        }],
        // ------------------
        // --- Typography ---
        // ------------------
        /**
         * Font Size
         * @see https://tailwindcss.com/docs/font-size
         */
        "font-size": [{
          text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
        }],
        /**
         * Font Smoothing
         * @see https://tailwindcss.com/docs/font-smoothing
         */
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        /**
         * Font Style
         * @see https://tailwindcss.com/docs/font-style
         */
        "font-style": ["italic", "not-italic"],
        /**
         * Font Weight
         * @see https://tailwindcss.com/docs/font-weight
         */
        "font-weight": [{
          font: [themeFontWeight, isArbitraryVariable, isArbitraryNumber]
        }],
        /**
         * Font Stretch
         * @see https://tailwindcss.com/docs/font-stretch
         */
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
        }],
        /**
         * Font Family
         * @see https://tailwindcss.com/docs/font-family
         */
        "font-family": [{
          font: [isArbitraryVariableFamilyName, isArbitraryValue, themeFont]
        }],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-normal": ["normal-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-ordinal": ["ordinal"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-slashed-zero": ["slashed-zero"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        /**
         * Letter Spacing
         * @see https://tailwindcss.com/docs/letter-spacing
         */
        tracking: [{
          tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Line Clamp
         * @see https://tailwindcss.com/docs/line-clamp
         */
        "line-clamp": [{
          "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
        }],
        /**
         * Line Height
         * @see https://tailwindcss.com/docs/line-height
         */
        leading: [{
          leading: [
            /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            themeLeading,
            ...scaleUnambiguousSpacing()
          ]
        }],
        /**
         * List Style Image
         * @see https://tailwindcss.com/docs/list-style-image
         */
        "list-image": [{
          "list-image": ["none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * List Style Position
         * @see https://tailwindcss.com/docs/list-style-position
         */
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        /**
         * List Style Type
         * @see https://tailwindcss.com/docs/list-style-type
         */
        "list-style-type": [{
          list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Text Alignment
         * @see https://tailwindcss.com/docs/text-align
         */
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        /**
         * Placeholder Color
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://v3.tailwindcss.com/docs/placeholder-color
         */
        "placeholder-color": [{
          placeholder: scaleColor()
        }],
        /**
         * Text Color
         * @see https://tailwindcss.com/docs/text-color
         */
        "text-color": [{
          text: scaleColor()
        }],
        /**
         * Text Decoration
         * @see https://tailwindcss.com/docs/text-decoration
         */
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        /**
         * Text Decoration Style
         * @see https://tailwindcss.com/docs/text-decoration-style
         */
        "text-decoration-style": [{
          decoration: [...scaleLineStyle(), "wavy"]
        }],
        /**
         * Text Decoration Thickness
         * @see https://tailwindcss.com/docs/text-decoration-thickness
         */
        "text-decoration-thickness": [{
          decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
        }],
        /**
         * Text Decoration Color
         * @see https://tailwindcss.com/docs/text-decoration-color
         */
        "text-decoration-color": [{
          decoration: scaleColor()
        }],
        /**
         * Text Underline Offset
         * @see https://tailwindcss.com/docs/text-underline-offset
         */
        "underline-offset": [{
          "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Text Transform
         * @see https://tailwindcss.com/docs/text-transform
         */
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        /**
         * Text Overflow
         * @see https://tailwindcss.com/docs/text-overflow
         */
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        /**
         * Text Wrap
         * @see https://tailwindcss.com/docs/text-wrap
         */
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        /**
         * Text Indent
         * @see https://tailwindcss.com/docs/text-indent
         */
        indent: [{
          indent: scaleUnambiguousSpacing()
        }],
        /**
         * Vertical Alignment
         * @see https://tailwindcss.com/docs/vertical-align
         */
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Whitespace
         * @see https://tailwindcss.com/docs/whitespace
         */
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        /**
         * Word Break
         * @see https://tailwindcss.com/docs/word-break
         */
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        /**
         * Overflow Wrap
         * @see https://tailwindcss.com/docs/overflow-wrap
         */
        wrap: [{
          wrap: ["break-word", "anywhere", "normal"]
        }],
        /**
         * Hyphens
         * @see https://tailwindcss.com/docs/hyphens
         */
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        /**
         * Content
         * @see https://tailwindcss.com/docs/content
         */
        content: [{
          content: ["none", isArbitraryVariable, isArbitraryValue]
        }],
        // -------------------
        // --- Backgrounds ---
        // -------------------
        /**
         * Background Attachment
         * @see https://tailwindcss.com/docs/background-attachment
         */
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        /**
         * Background Clip
         * @see https://tailwindcss.com/docs/background-clip
         */
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        /**
         * Background Origin
         * @see https://tailwindcss.com/docs/background-origin
         */
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        /**
         * Background Position
         * @see https://tailwindcss.com/docs/background-position
         */
        "bg-position": [{
          bg: scaleBgPosition()
        }],
        /**
         * Background Repeat
         * @see https://tailwindcss.com/docs/background-repeat
         */
        "bg-repeat": [{
          bg: scaleBgRepeat()
        }],
        /**
         * Background Size
         * @see https://tailwindcss.com/docs/background-size
         */
        "bg-size": [{
          bg: scaleBgSize()
        }],
        /**
         * Background Image
         * @see https://tailwindcss.com/docs/background-image
         */
        "bg-image": [{
          bg: ["none", {
            linear: [{
              to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, isInteger, isArbitraryVariable, isArbitraryValue],
            radial: ["", isArbitraryVariable, isArbitraryValue],
            conic: [isInteger, isArbitraryVariable, isArbitraryValue]
          }, isArbitraryVariableImage, isArbitraryImage]
        }],
        /**
         * Background Color
         * @see https://tailwindcss.com/docs/background-color
         */
        "bg-color": [{
          bg: scaleColor()
        }],
        /**
         * Gradient Color Stops From Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from-pos": [{
          from: scaleGradientStopPosition()
        }],
        /**
         * Gradient Color Stops Via Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via-pos": [{
          via: scaleGradientStopPosition()
        }],
        /**
         * Gradient Color Stops To Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to-pos": [{
          to: scaleGradientStopPosition()
        }],
        /**
         * Gradient Color Stops From
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from": [{
          from: scaleColor()
        }],
        /**
         * Gradient Color Stops Via
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via": [{
          via: scaleColor()
        }],
        /**
         * Gradient Color Stops To
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to": [{
          to: scaleColor()
        }],
        // ---------------
        // --- Borders ---
        // ---------------
        /**
         * Border Radius
         * @see https://tailwindcss.com/docs/border-radius
         */
        rounded: [{
          rounded: scaleRadius()
        }],
        /**
         * Border Radius Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-s": [{
          "rounded-s": scaleRadius()
        }],
        /**
         * Border Radius End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-e": [{
          "rounded-e": scaleRadius()
        }],
        /**
         * Border Radius Top
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-t": [{
          "rounded-t": scaleRadius()
        }],
        /**
         * Border Radius Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-r": [{
          "rounded-r": scaleRadius()
        }],
        /**
         * Border Radius Bottom
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-b": [{
          "rounded-b": scaleRadius()
        }],
        /**
         * Border Radius Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-l": [{
          "rounded-l": scaleRadius()
        }],
        /**
         * Border Radius Start Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ss": [{
          "rounded-ss": scaleRadius()
        }],
        /**
         * Border Radius Start End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-se": [{
          "rounded-se": scaleRadius()
        }],
        /**
         * Border Radius End End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ee": [{
          "rounded-ee": scaleRadius()
        }],
        /**
         * Border Radius End Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-es": [{
          "rounded-es": scaleRadius()
        }],
        /**
         * Border Radius Top Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tl": [{
          "rounded-tl": scaleRadius()
        }],
        /**
         * Border Radius Top Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tr": [{
          "rounded-tr": scaleRadius()
        }],
        /**
         * Border Radius Bottom Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-br": [{
          "rounded-br": scaleRadius()
        }],
        /**
         * Border Radius Bottom Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-bl": [{
          "rounded-bl": scaleRadius()
        }],
        /**
         * Border Width
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w": [{
          border: scaleBorderWidth()
        }],
        /**
         * Border Width X
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-x": [{
          "border-x": scaleBorderWidth()
        }],
        /**
         * Border Width Y
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-y": [{
          "border-y": scaleBorderWidth()
        }],
        /**
         * Border Width Start
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-s": [{
          "border-s": scaleBorderWidth()
        }],
        /**
         * Border Width End
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-e": [{
          "border-e": scaleBorderWidth()
        }],
        /**
         * Border Width Top
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-t": [{
          "border-t": scaleBorderWidth()
        }],
        /**
         * Border Width Right
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-r": [{
          "border-r": scaleBorderWidth()
        }],
        /**
         * Border Width Bottom
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-b": [{
          "border-b": scaleBorderWidth()
        }],
        /**
         * Border Width Left
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-l": [{
          "border-l": scaleBorderWidth()
        }],
        /**
         * Divide Width X
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-x": [{
          "divide-x": scaleBorderWidth()
        }],
        /**
         * Divide Width X Reverse
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-x-reverse": ["divide-x-reverse"],
        /**
         * Divide Width Y
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-y": [{
          "divide-y": scaleBorderWidth()
        }],
        /**
         * Divide Width Y Reverse
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-y-reverse": ["divide-y-reverse"],
        /**
         * Border Style
         * @see https://tailwindcss.com/docs/border-style
         */
        "border-style": [{
          border: [...scaleLineStyle(), "hidden", "none"]
        }],
        /**
         * Divide Style
         * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
         */
        "divide-style": [{
          divide: [...scaleLineStyle(), "hidden", "none"]
        }],
        /**
         * Border Color
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color": [{
          border: scaleColor()
        }],
        /**
         * Border Color X
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-x": [{
          "border-x": scaleColor()
        }],
        /**
         * Border Color Y
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-y": [{
          "border-y": scaleColor()
        }],
        /**
         * Border Color S
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-s": [{
          "border-s": scaleColor()
        }],
        /**
         * Border Color E
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-e": [{
          "border-e": scaleColor()
        }],
        /**
         * Border Color Top
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-t": [{
          "border-t": scaleColor()
        }],
        /**
         * Border Color Right
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-r": [{
          "border-r": scaleColor()
        }],
        /**
         * Border Color Bottom
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-b": [{
          "border-b": scaleColor()
        }],
        /**
         * Border Color Left
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-l": [{
          "border-l": scaleColor()
        }],
        /**
         * Divide Color
         * @see https://tailwindcss.com/docs/divide-color
         */
        "divide-color": [{
          divide: scaleColor()
        }],
        /**
         * Outline Style
         * @see https://tailwindcss.com/docs/outline-style
         */
        "outline-style": [{
          outline: [...scaleLineStyle(), "none", "hidden"]
        }],
        /**
         * Outline Offset
         * @see https://tailwindcss.com/docs/outline-offset
         */
        "outline-offset": [{
          "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Outline Width
         * @see https://tailwindcss.com/docs/outline-width
         */
        "outline-w": [{
          outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
        }],
        /**
         * Outline Color
         * @see https://tailwindcss.com/docs/outline-color
         */
        "outline-color": [{
          outline: scaleColor()
        }],
        // ---------------
        // --- Effects ---
        // ---------------
        /**
         * Box Shadow
         * @see https://tailwindcss.com/docs/box-shadow
         */
        shadow: [{
          shadow: [
            // Deprecated since Tailwind CSS v4.0.0
            "",
            "none",
            themeShadow,
            isArbitraryVariableShadow,
            isArbitraryShadow
          ]
        }],
        /**
         * Box Shadow Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
         */
        "shadow-color": [{
          shadow: scaleColor()
        }],
        /**
         * Inset Box Shadow
         * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
         */
        "inset-shadow": [{
          "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
        }],
        /**
         * Inset Box Shadow Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
         */
        "inset-shadow-color": [{
          "inset-shadow": scaleColor()
        }],
        /**
         * Ring Width
         * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
         */
        "ring-w": [{
          ring: scaleBorderWidth()
        }],
        /**
         * Ring Width Inset
         * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
         * @deprecated since Tailwind CSS v4.0.0
         * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
         */
        "ring-w-inset": ["ring-inset"],
        /**
         * Ring Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
         */
        "ring-color": [{
          ring: scaleColor()
        }],
        /**
         * Ring Offset Width
         * @see https://v3.tailwindcss.com/docs/ring-offset-width
         * @deprecated since Tailwind CSS v4.0.0
         * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
         */
        "ring-offset-w": [{
          "ring-offset": [isNumber, isArbitraryLength]
        }],
        /**
         * Ring Offset Color
         * @see https://v3.tailwindcss.com/docs/ring-offset-color
         * @deprecated since Tailwind CSS v4.0.0
         * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
         */
        "ring-offset-color": [{
          "ring-offset": scaleColor()
        }],
        /**
         * Inset Ring Width
         * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
         */
        "inset-ring-w": [{
          "inset-ring": scaleBorderWidth()
        }],
        /**
         * Inset Ring Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
         */
        "inset-ring-color": [{
          "inset-ring": scaleColor()
        }],
        /**
         * Text Shadow
         * @see https://tailwindcss.com/docs/text-shadow
         */
        "text-shadow": [{
          "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
        }],
        /**
         * Text Shadow Color
         * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
         */
        "text-shadow-color": [{
          "text-shadow": scaleColor()
        }],
        /**
         * Opacity
         * @see https://tailwindcss.com/docs/opacity
         */
        opacity: [{
          opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Mix Blend Mode
         * @see https://tailwindcss.com/docs/mix-blend-mode
         */
        "mix-blend": [{
          "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
        }],
        /**
         * Background Blend Mode
         * @see https://tailwindcss.com/docs/background-blend-mode
         */
        "bg-blend": [{
          "bg-blend": scaleBlendMode()
        }],
        /**
         * Mask Clip
         * @see https://tailwindcss.com/docs/mask-clip
         */
        "mask-clip": [{
          "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
        }, "mask-no-clip"],
        /**
         * Mask Composite
         * @see https://tailwindcss.com/docs/mask-composite
         */
        "mask-composite": [{
          mask: ["add", "subtract", "intersect", "exclude"]
        }],
        /**
         * Mask Image
         * @see https://tailwindcss.com/docs/mask-image
         */
        "mask-image-linear-pos": [{
          "mask-linear": [isNumber]
        }],
        "mask-image-linear-from-pos": [{
          "mask-linear-from": scaleMaskImagePosition()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": scaleMaskImagePosition()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": scaleColor()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": scaleColor()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": scaleMaskImagePosition()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": scaleMaskImagePosition()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": scaleColor()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": scaleColor()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": scaleMaskImagePosition()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": scaleMaskImagePosition()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": scaleColor()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": scaleColor()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": scaleMaskImagePosition()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": scaleMaskImagePosition()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": scaleColor()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": scaleColor()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": scaleMaskImagePosition()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": scaleMaskImagePosition()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": scaleColor()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": scaleColor()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": scaleMaskImagePosition()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": scaleMaskImagePosition()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": scaleColor()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": scaleColor()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": scaleMaskImagePosition()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": scaleMaskImagePosition()
        }],
        "mask-image-y-from-color": [{
          "mask-y-from": scaleColor()
        }],
        "mask-image-y-to-color": [{
          "mask-y-to": scaleColor()
        }],
        "mask-image-radial": [{
          "mask-radial": [isArbitraryVariable, isArbitraryValue]
        }],
        "mask-image-radial-from-pos": [{
          "mask-radial-from": scaleMaskImagePosition()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": scaleMaskImagePosition()
        }],
        "mask-image-radial-from-color": [{
          "mask-radial-from": scaleColor()
        }],
        "mask-image-radial-to-color": [{
          "mask-radial-to": scaleColor()
        }],
        "mask-image-radial-shape": [{
          "mask-radial": ["circle", "ellipse"]
        }],
        "mask-image-radial-size": [{
          "mask-radial": [{
            closest: ["side", "corner"],
            farthest: ["side", "corner"]
          }]
        }],
        "mask-image-radial-pos": [{
          "mask-radial-at": scalePosition()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [isNumber]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": scaleMaskImagePosition()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": scaleMaskImagePosition()
        }],
        "mask-image-conic-from-color": [{
          "mask-conic-from": scaleColor()
        }],
        "mask-image-conic-to-color": [{
          "mask-conic-to": scaleColor()
        }],
        /**
         * Mask Mode
         * @see https://tailwindcss.com/docs/mask-mode
         */
        "mask-mode": [{
          mask: ["alpha", "luminance", "match"]
        }],
        /**
         * Mask Origin
         * @see https://tailwindcss.com/docs/mask-origin
         */
        "mask-origin": [{
          "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
        }],
        /**
         * Mask Position
         * @see https://tailwindcss.com/docs/mask-position
         */
        "mask-position": [{
          mask: scaleBgPosition()
        }],
        /**
         * Mask Repeat
         * @see https://tailwindcss.com/docs/mask-repeat
         */
        "mask-repeat": [{
          mask: scaleBgRepeat()
        }],
        /**
         * Mask Size
         * @see https://tailwindcss.com/docs/mask-size
         */
        "mask-size": [{
          mask: scaleBgSize()
        }],
        /**
         * Mask Type
         * @see https://tailwindcss.com/docs/mask-type
         */
        "mask-type": [{
          "mask-type": ["alpha", "luminance"]
        }],
        /**
         * Mask Image
         * @see https://tailwindcss.com/docs/mask-image
         */
        "mask-image": [{
          mask: ["none", isArbitraryVariable, isArbitraryValue]
        }],
        // ---------------
        // --- Filters ---
        // ---------------
        /**
         * Filter
         * @see https://tailwindcss.com/docs/filter
         */
        filter: [{
          filter: [
            // Deprecated since Tailwind CSS v3.0.0
            "",
            "none",
            isArbitraryVariable,
            isArbitraryValue
          ]
        }],
        /**
         * Blur
         * @see https://tailwindcss.com/docs/blur
         */
        blur: [{
          blur: scaleBlur()
        }],
        /**
         * Brightness
         * @see https://tailwindcss.com/docs/brightness
         */
        brightness: [{
          brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Contrast
         * @see https://tailwindcss.com/docs/contrast
         */
        contrast: [{
          contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Drop Shadow
         * @see https://tailwindcss.com/docs/drop-shadow
         */
        "drop-shadow": [{
          "drop-shadow": [
            // Deprecated since Tailwind CSS v4.0.0
            "",
            "none",
            themeDropShadow,
            isArbitraryVariableShadow,
            isArbitraryShadow
          ]
        }],
        /**
         * Drop Shadow Color
         * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
         */
        "drop-shadow-color": [{
          "drop-shadow": scaleColor()
        }],
        /**
         * Grayscale
         * @see https://tailwindcss.com/docs/grayscale
         */
        grayscale: [{
          grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Hue Rotate
         * @see https://tailwindcss.com/docs/hue-rotate
         */
        "hue-rotate": [{
          "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Invert
         * @see https://tailwindcss.com/docs/invert
         */
        invert: [{
          invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Saturate
         * @see https://tailwindcss.com/docs/saturate
         */
        saturate: [{
          saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Sepia
         * @see https://tailwindcss.com/docs/sepia
         */
        sepia: [{
          sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Filter
         * @see https://tailwindcss.com/docs/backdrop-filter
         */
        "backdrop-filter": [{
          "backdrop-filter": [
            // Deprecated since Tailwind CSS v3.0.0
            "",
            "none",
            isArbitraryVariable,
            isArbitraryValue
          ]
        }],
        /**
         * Backdrop Blur
         * @see https://tailwindcss.com/docs/backdrop-blur
         */
        "backdrop-blur": [{
          "backdrop-blur": scaleBlur()
        }],
        /**
         * Backdrop Brightness
         * @see https://tailwindcss.com/docs/backdrop-brightness
         */
        "backdrop-brightness": [{
          "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Contrast
         * @see https://tailwindcss.com/docs/backdrop-contrast
         */
        "backdrop-contrast": [{
          "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Grayscale
         * @see https://tailwindcss.com/docs/backdrop-grayscale
         */
        "backdrop-grayscale": [{
          "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Hue Rotate
         * @see https://tailwindcss.com/docs/backdrop-hue-rotate
         */
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Invert
         * @see https://tailwindcss.com/docs/backdrop-invert
         */
        "backdrop-invert": [{
          "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Opacity
         * @see https://tailwindcss.com/docs/backdrop-opacity
         */
        "backdrop-opacity": [{
          "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Saturate
         * @see https://tailwindcss.com/docs/backdrop-saturate
         */
        "backdrop-saturate": [{
          "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Sepia
         * @see https://tailwindcss.com/docs/backdrop-sepia
         */
        "backdrop-sepia": [{
          "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        // --------------
        // --- Tables ---
        // --------------
        /**
         * Border Collapse
         * @see https://tailwindcss.com/docs/border-collapse
         */
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        /**
         * Border Spacing
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing": [{
          "border-spacing": scaleUnambiguousSpacing()
        }],
        /**
         * Border Spacing X
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-x": [{
          "border-spacing-x": scaleUnambiguousSpacing()
        }],
        /**
         * Border Spacing Y
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-y": [{
          "border-spacing-y": scaleUnambiguousSpacing()
        }],
        /**
         * Table Layout
         * @see https://tailwindcss.com/docs/table-layout
         */
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        /**
         * Caption Side
         * @see https://tailwindcss.com/docs/caption-side
         */
        caption: [{
          caption: ["top", "bottom"]
        }],
        // ---------------------------------
        // --- Transitions and Animation ---
        // ---------------------------------
        /**
         * Transition Property
         * @see https://tailwindcss.com/docs/transition-property
         */
        transition: [{
          transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Transition Behavior
         * @see https://tailwindcss.com/docs/transition-behavior
         */
        "transition-behavior": [{
          transition: ["normal", "discrete"]
        }],
        /**
         * Transition Duration
         * @see https://tailwindcss.com/docs/transition-duration
         */
        duration: [{
          duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Transition Timing Function
         * @see https://tailwindcss.com/docs/transition-timing-function
         */
        ease: [{
          ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Transition Delay
         * @see https://tailwindcss.com/docs/transition-delay
         */
        delay: [{
          delay: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Animation
         * @see https://tailwindcss.com/docs/animation
         */
        animate: [{
          animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
        }],
        // ------------------
        // --- Transforms ---
        // ------------------
        /**
         * Backface Visibility
         * @see https://tailwindcss.com/docs/backface-visibility
         */
        backface: [{
          backface: ["hidden", "visible"]
        }],
        /**
         * Perspective
         * @see https://tailwindcss.com/docs/perspective
         */
        perspective: [{
          perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Perspective Origin
         * @see https://tailwindcss.com/docs/perspective-origin
         */
        "perspective-origin": [{
          "perspective-origin": scalePositionWithArbitrary()
        }],
        /**
         * Rotate
         * @see https://tailwindcss.com/docs/rotate
         */
        rotate: [{
          rotate: scaleRotate()
        }],
        /**
         * Rotate X
         * @see https://tailwindcss.com/docs/rotate
         */
        "rotate-x": [{
          "rotate-x": scaleRotate()
        }],
        /**
         * Rotate Y
         * @see https://tailwindcss.com/docs/rotate
         */
        "rotate-y": [{
          "rotate-y": scaleRotate()
        }],
        /**
         * Rotate Z
         * @see https://tailwindcss.com/docs/rotate
         */
        "rotate-z": [{
          "rotate-z": scaleRotate()
        }],
        /**
         * Scale
         * @see https://tailwindcss.com/docs/scale
         */
        scale: [{
          scale: scaleScale()
        }],
        /**
         * Scale X
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-x": [{
          "scale-x": scaleScale()
        }],
        /**
         * Scale Y
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-y": [{
          "scale-y": scaleScale()
        }],
        /**
         * Scale Z
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-z": [{
          "scale-z": scaleScale()
        }],
        /**
         * Scale 3D
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-3d": ["scale-3d"],
        /**
         * Skew
         * @see https://tailwindcss.com/docs/skew
         */
        skew: [{
          skew: scaleSkew()
        }],
        /**
         * Skew X
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-x": [{
          "skew-x": scaleSkew()
        }],
        /**
         * Skew Y
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-y": [{
          "skew-y": scaleSkew()
        }],
        /**
         * Transform
         * @see https://tailwindcss.com/docs/transform
         */
        transform: [{
          transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
        }],
        /**
         * Transform Origin
         * @see https://tailwindcss.com/docs/transform-origin
         */
        "transform-origin": [{
          origin: scalePositionWithArbitrary()
        }],
        /**
         * Transform Style
         * @see https://tailwindcss.com/docs/transform-style
         */
        "transform-style": [{
          transform: ["3d", "flat"]
        }],
        /**
         * Translate
         * @see https://tailwindcss.com/docs/translate
         */
        translate: [{
          translate: scaleTranslate()
        }],
        /**
         * Translate X
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-x": [{
          "translate-x": scaleTranslate()
        }],
        /**
         * Translate Y
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-y": [{
          "translate-y": scaleTranslate()
        }],
        /**
         * Translate Z
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-z": [{
          "translate-z": scaleTranslate()
        }],
        /**
         * Translate None
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-none": ["translate-none"],
        // ---------------------
        // --- Interactivity ---
        // ---------------------
        /**
         * Accent Color
         * @see https://tailwindcss.com/docs/accent-color
         */
        accent: [{
          accent: scaleColor()
        }],
        /**
         * Appearance
         * @see https://tailwindcss.com/docs/appearance
         */
        appearance: [{
          appearance: ["none", "auto"]
        }],
        /**
         * Caret Color
         * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
         */
        "caret-color": [{
          caret: scaleColor()
        }],
        /**
         * Color Scheme
         * @see https://tailwindcss.com/docs/color-scheme
         */
        "color-scheme": [{
          scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
        }],
        /**
         * Cursor
         * @see https://tailwindcss.com/docs/cursor
         */
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Field Sizing
         * @see https://tailwindcss.com/docs/field-sizing
         */
        "field-sizing": [{
          "field-sizing": ["fixed", "content"]
        }],
        /**
         * Pointer Events
         * @see https://tailwindcss.com/docs/pointer-events
         */
        "pointer-events": [{
          "pointer-events": ["auto", "none"]
        }],
        /**
         * Resize
         * @see https://tailwindcss.com/docs/resize
         */
        resize: [{
          resize: ["none", "", "y", "x"]
        }],
        /**
         * Scroll Behavior
         * @see https://tailwindcss.com/docs/scroll-behavior
         */
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        /**
         * Scroll Margin
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-m": [{
          "scroll-m": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin X
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mx": [{
          "scroll-mx": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Y
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-my": [{
          "scroll-my": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Start
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ms": [{
          "scroll-ms": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin End
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-me": [{
          "scroll-me": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Top
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mt": [{
          "scroll-mt": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Right
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mr": [{
          "scroll-mr": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Bottom
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mb": [{
          "scroll-mb": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Left
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ml": [{
          "scroll-ml": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-p": [{
          "scroll-p": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding X
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-px": [{
          "scroll-px": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Y
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-py": [{
          "scroll-py": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Start
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-ps": [{
          "scroll-ps": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding End
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pe": [{
          "scroll-pe": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Top
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pt": [{
          "scroll-pt": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Right
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pr": [{
          "scroll-pr": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Bottom
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pb": [{
          "scroll-pb": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Left
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pl": [{
          "scroll-pl": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Snap Align
         * @see https://tailwindcss.com/docs/scroll-snap-align
         */
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        /**
         * Scroll Snap Stop
         * @see https://tailwindcss.com/docs/scroll-snap-stop
         */
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        /**
         * Scroll Snap Type
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        /**
         * Scroll Snap Type Strictness
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        /**
         * Touch Action
         * @see https://tailwindcss.com/docs/touch-action
         */
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        /**
         * Touch Action X
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        /**
         * Touch Action Y
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        /**
         * Touch Action Pinch Zoom
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-pz": ["touch-pinch-zoom"],
        /**
         * User Select
         * @see https://tailwindcss.com/docs/user-select
         */
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        /**
         * Will Change
         * @see https://tailwindcss.com/docs/will-change
         */
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
        }],
        // -----------
        // --- SVG ---
        // -----------
        /**
         * Fill
         * @see https://tailwindcss.com/docs/fill
         */
        fill: [{
          fill: ["none", ...scaleColor()]
        }],
        /**
         * Stroke Width
         * @see https://tailwindcss.com/docs/stroke-width
         */
        "stroke-w": [{
          stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
        }],
        /**
         * Stroke
         * @see https://tailwindcss.com/docs/stroke
         */
        stroke: [{
          stroke: ["none", ...scaleColor()]
        }],
        // ---------------------
        // --- Accessibility ---
        // ---------------------
        /**
         * Forced Color Adjust
         * @see https://tailwindcss.com/docs/forced-color-adjust
         */
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      },
      orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    };
  };
  const mergeConfigs = (baseConfig, {
    cacheSize,
    prefix,
    experimentalParseClassName,
    extend: extend2 = {},
    override = {}
  }) => {
    overrideProperty(baseConfig, "cacheSize", cacheSize);
    overrideProperty(baseConfig, "prefix", prefix);
    overrideProperty(baseConfig, "experimentalParseClassName", experimentalParseClassName);
    overrideConfigProperties(baseConfig.theme, override.theme);
    overrideConfigProperties(baseConfig.classGroups, override.classGroups);
    overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups);
    overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers);
    overrideProperty(baseConfig, "orderSensitiveModifiers", override.orderSensitiveModifiers);
    mergeConfigProperties(baseConfig.theme, extend2.theme);
    mergeConfigProperties(baseConfig.classGroups, extend2.classGroups);
    mergeConfigProperties(baseConfig.conflictingClassGroups, extend2.conflictingClassGroups);
    mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend2.conflictingClassGroupModifiers);
    mergeArrayProperties(baseConfig, extend2, "orderSensitiveModifiers");
    return baseConfig;
  };
  const overrideProperty = (baseObject, overrideKey, overrideValue) => {
    if (overrideValue !== void 0) {
      baseObject[overrideKey] = overrideValue;
    }
  };
  const overrideConfigProperties = (baseObject, overrideObject) => {
    if (overrideObject) {
      for (const key in overrideObject) {
        overrideProperty(baseObject, key, overrideObject[key]);
      }
    }
  };
  const mergeConfigProperties = (baseObject, mergeObject) => {
    if (mergeObject) {
      for (const key in mergeObject) {
        mergeArrayProperties(baseObject, mergeObject, key);
      }
    }
  };
  const mergeArrayProperties = (baseObject, mergeObject, key) => {
    const mergeValue = mergeObject[key];
    if (mergeValue !== void 0) {
      baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue;
    }
  };
  const extendTailwindMerge = (configExtension, ...createConfig) => typeof configExtension === "function" ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
  const companionAnchorTagName = "stagewise-companion-anchor";
  function getElementAtPoint(x2, y2) {
    const elementsBelowAnnotation = document.elementsFromPoint(x2, y2);
    const refElement = elementsBelowAnnotation.find(
      (element) => element.nodeName !== "STAGEWISE-COMPANION-ANCHOR" && !element.closest(companionAnchorTagName) && !element.closest("svg") && isElementAtPoint(element, x2, y2)
    ) || document.body;
    return refElement;
  }
  const isElementAtPoint = (element, clientX, clientY) => {
    const boundingRect = element.getBoundingClientRect();
    const isInHorizontalBounds = clientX > boundingRect.left && clientX < boundingRect.left + boundingRect.width;
    const isInVerticalBounds = clientY > boundingRect.top && clientY < boundingRect.top + boundingRect.height;
    return isInHorizontalBounds && isInVerticalBounds;
  };
  var HotkeyActions = /* @__PURE__ */ ((HotkeyActions2) => {
    HotkeyActions2[HotkeyActions2["ESC"] = 0] = "ESC";
    HotkeyActions2[HotkeyActions2["CTRL_ALT_C"] = 1] = "CTRL_ALT_C";
    return HotkeyActions2;
  })(HotkeyActions || {});
  const hotkeyActionDefinitions = {
    [
      0
      /* ESC */
    ]: {
      keyComboDefault: "Esc",
      keyComboMac: "esc",
      isEventMatching: (ev) => ev.code === "Escape"
    },
    [
      1
      /* CTRL_ALT_C */
    ]: {
      keyComboDefault: "Ctrl+Alt+C",
      keyComboMac: "⌘+⌥+C",
      isEventMatching: (ev) => ev.code === "KeyC" && (ev.ctrlKey || ev.metaKey) && ev.altKey
    }
  };
  const customTwMerge = extendTailwindMerge({
    extend: {
      classGroups: {
        "bg-image": [
          "bg-gradient",
          "bg-gradient-light-1",
          "bg-gradient-light-2",
          "bg-gradient-light-3"
        ]
      }
    }
  });
  function cn(...inputs) {
    return customTwMerge(clsx(inputs));
  }
  function HotkeyListener() {
    const { startPromptCreation, stopPromptCreation } = useChatState();
    const hotKeyHandlerMap = T$5(
      () => ({
        [HotkeyActions.CTRL_ALT_C]: () => {
          startPromptCreation();
        },
        [HotkeyActions.ESC]: () => {
          stopPromptCreation();
        }
      }),
      [startPromptCreation, stopPromptCreation]
    );
    const hotKeyListener = q$3(
      (ev) => {
        for (const [action, definition] of Object.entries(
          hotkeyActionDefinitions
        )) {
          if (definition.isEventMatching(ev)) {
            ev.preventDefault();
            ev.stopPropagation();
            hotKeyHandlerMap[action]();
            break;
          }
        }
      },
      [hotKeyHandlerMap]
    );
    useEventListener("keydown", hotKeyListener, {
      capture: true
    });
    return null;
  }
  const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? Rn.useLayoutEffect : () => {
  };
  function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn2) {
    const ref = A$3(null);
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
      ref.current = fn2;
    }, [
      fn2
    ]);
    return q$3((...args) => {
      const f2 = ref.current;
      return f2 === null || f2 === void 0 ? void 0 : f2(...args);
    }, []);
  }
  const $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
    var _el_ownerDocument;
    return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
  };
  const $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
    if (el && "window" in el && el.window === el) return el;
    const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
    return doc.defaultView || window;
  };
  function $431fbd86ca7dc216$var$isNode(value) {
    return value !== null && typeof value === "object" && "nodeType" in value && typeof value.nodeType === "number";
  }
  function $431fbd86ca7dc216$export$af51f0f06c0f328a(node) {
    return $431fbd86ca7dc216$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in node;
  }
  let $f4e2df6bd15f8569$var$_shadowDOM = false;
  function $f4e2df6bd15f8569$export$98658e8c59125e6a() {
    return $f4e2df6bd15f8569$var$_shadowDOM;
  }
  function $d4ee10de306f2510$export$4282f70798064fe0(node, otherNode) {
    if (!$f4e2df6bd15f8569$export$98658e8c59125e6a()) return otherNode && node ? node.contains(otherNode) : false;
    if (!node || !otherNode) return false;
    let currentNode = otherNode;
    while (currentNode !== null) {
      if (currentNode === node) return true;
      if (currentNode.tagName === "SLOT" && currentNode.assignedSlot)
        currentNode = currentNode.assignedSlot.parentNode;
      else if ($431fbd86ca7dc216$export$af51f0f06c0f328a(currentNode))
        currentNode = currentNode.host;
      else currentNode = currentNode.parentNode;
    }
    return false;
  }
  const $d4ee10de306f2510$export$cd4e5573fbe2b576 = (doc = document) => {
    var _activeElement_shadowRoot;
    if (!$f4e2df6bd15f8569$export$98658e8c59125e6a()) return doc.activeElement;
    let activeElement = doc.activeElement;
    while (activeElement && "shadowRoot" in activeElement && ((_activeElement_shadowRoot = activeElement.shadowRoot) === null || _activeElement_shadowRoot === void 0 ? void 0 : _activeElement_shadowRoot.activeElement)) activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
  };
  function $d4ee10de306f2510$export$e58f029f0fbfdb29(event) {
    if ($f4e2df6bd15f8569$export$98658e8c59125e6a() && event.target.shadowRoot) {
      if (event.composedPath) return event.composedPath()[0];
    }
    return event.target;
  }
  function $c87311424ea30a05$var$testUserAgent(re) {
    var _window_navigator_userAgentData;
    if (typeof window === "undefined" || window.navigator == null) return false;
    return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
  }
  function $c87311424ea30a05$var$testPlatform(re) {
    var _window_navigator_userAgentData;
    return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
  }
  function $c87311424ea30a05$var$cached(fn2) {
    if (process.env.NODE_ENV === "test") return fn2;
    let res = null;
    return () => {
      if (res == null) res = fn2();
      return res;
    };
  }
  const $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
  });
  const $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
  });
  const $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
  });
  const $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
  });
  $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
  });
  $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
  });
  const $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
  });
  const $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
  });
  $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
  });
  function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = A$3(/* @__PURE__ */ new Map());
    let addGlobalListener = q$3((eventTarget, type, listener, options) => {
      let fn2 = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
        globalListeners.current.delete(listener);
        listener(...args);
      } : listener;
      globalListeners.current.set(listener, {
        type,
        eventTarget,
        fn: fn2,
        options
      });
      eventTarget.addEventListener(type, fn2, options);
    }, []);
    let removeGlobalListener = q$3((eventTarget, type, listener, options) => {
      var _globalListeners_current_get;
      let fn2 = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
      eventTarget.removeEventListener(type, fn2, options);
      globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = q$3(() => {
      globalListeners.current.forEach((value, key) => {
        removeGlobalListener(value.eventTarget, value.type, key, value.options);
      });
    }, [
      removeGlobalListener
    ]);
    y$6(() => {
      return removeAllGlobalListeners;
    }, [
      removeAllGlobalListeners
    ]);
    return {
      addGlobalListener,
      removeGlobalListener,
      removeAllGlobalListeners
    };
  }
  function $6a7db85432448f7f$export$60278871457622de(event) {
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    if ($c87311424ea30a05$export$a11b0059900ceec8() && event.pointerType) return event.type === "click" && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
  }
  function $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent) {
    let event = nativeEvent;
    event.nativeEvent = nativeEvent;
    event.isDefaultPrevented = () => event.defaultPrevented;
    event.isPropagationStopped = () => event.cancelBubble;
    event.persist = () => {
    };
    return event;
  }
  function $8a9cb279dc87e130$export$c2b7abe5d61ec696(event, target) {
    Object.defineProperty(event, "target", {
      value: target
    });
    Object.defineProperty(event, "currentTarget", {
      value: target
    });
  }
  function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
    let stateRef = A$3({
      isFocused: false,
      observer: null
    });
    $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
      const state = stateRef.current;
      return () => {
        if (state.observer) {
          state.observer.disconnect();
          state.observer = null;
        }
      };
    }, []);
    let dispatchBlur = $8ae05eaa5c114e9c$export$7f54fc3180508a52((e2) => {
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(e2);
    });
    return q$3((e2) => {
      if (e2.target instanceof HTMLButtonElement || e2.target instanceof HTMLInputElement || e2.target instanceof HTMLTextAreaElement || e2.target instanceof HTMLSelectElement) {
        stateRef.current.isFocused = true;
        let target = e2.target;
        let onBlurHandler = (e3) => {
          stateRef.current.isFocused = false;
          if (target.disabled) {
            let event = $8a9cb279dc87e130$export$525bc4921d56d4a(e3);
            dispatchBlur(event);
          }
          if (stateRef.current.observer) {
            stateRef.current.observer.disconnect();
            stateRef.current.observer = null;
          }
        };
        target.addEventListener("focusout", onBlurHandler, {
          once: true
        });
        stateRef.current.observer = new MutationObserver(() => {
          if (stateRef.current.isFocused && target.disabled) {
            var _stateRef_current_observer;
            (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
            let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
            target.dispatchEvent(new FocusEvent("blur", {
              relatedTarget: relatedTargetEl
            }));
            target.dispatchEvent(new FocusEvent("focusout", {
              bubbles: true,
              relatedTarget: relatedTargetEl
            }));
          }
        });
        stateRef.current.observer.observe(target, {
          attributes: true,
          attributeFilter: [
            "disabled"
          ]
        });
      }
    }, [
      dispatchBlur
    ]);
  }
  let $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;
  let $507fabe10e71c6fb$var$currentModality = null;
  let $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
  let $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
  let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
  const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
  };
  function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e2) {
    for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e2);
  }
  function $507fabe10e71c6fb$var$isValidKey(e2) {
    return !(e2.metaKey || !$c87311424ea30a05$export$9ac100e40613ea10() && e2.altKey || e2.ctrlKey || e2.key === "Control" || e2.key === "Shift" || e2.key === "Meta");
  }
  function $507fabe10e71c6fb$var$handleKeyboardEvent(e2) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    if ($507fabe10e71c6fb$var$isValidKey(e2)) {
      $507fabe10e71c6fb$var$currentModality = "keyboard";
      $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e2);
    }
  }
  function $507fabe10e71c6fb$var$handlePointerEvent(e2) {
    $507fabe10e71c6fb$var$currentModality = "pointer";
    if (e2.type === "mousedown" || e2.type === "pointerdown") {
      $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
      $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e2);
    }
  }
  function $507fabe10e71c6fb$var$handleClickEvent(e2) {
    if ($6a7db85432448f7f$export$60278871457622de(e2)) {
      $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
      $507fabe10e71c6fb$var$currentModality = "virtual";
    }
  }
  function $507fabe10e71c6fb$var$handleFocusEvent(e2) {
    if (e2.target === window || e2.target === document || $8a9cb279dc87e130$export$fda7da73ab5d4c48 || !e2.isTrusted) return;
    if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
      $507fabe10e71c6fb$var$currentModality = "virtual";
      $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e2);
    }
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
  }
  function $507fabe10e71c6fb$var$handleWindowBlur() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
  }
  function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
    if (typeof window === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get($431fbd86ca7dc216$export$f21a1ffae260145a(element))) return;
    const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element);
    const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
    let focus = windowObject.HTMLElement.prototype.focus;
    windowObject.HTMLElement.prototype.focus = function() {
      $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
      focus.apply(this, arguments);
    };
    documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
    windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== "undefined") {
      documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else if (process.env.NODE_ENV === "test") {
      documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    windowObject.addEventListener("beforeunload", () => {
      $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
    }, {
      once: true
    });
    $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
      focus
    });
  }
  const $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
    const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element);
    const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
    if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
    if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
    windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
    documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
    windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== "undefined") {
      documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else if (process.env.NODE_ENV === "test") {
      documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
      documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
  };
  function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
    const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
    let loadListener;
    if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    else {
      loadListener = () => {
        $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
      };
      documentObject.addEventListener("DOMContentLoaded", loadListener);
    }
    return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
  }
  if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
  function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
    return $507fabe10e71c6fb$var$currentModality !== "pointer";
  }
  const $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
  ]);
  function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e2) {
    let document1 = $431fbd86ca7dc216$export$b204af158042fbac(e2 === null || e2 === void 0 ? void 0 : e2.target);
    const IHTMLInputElement = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 === null || e2 === void 0 ? void 0 : e2.target).HTMLInputElement : HTMLInputElement;
    const IHTMLTextAreaElement = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 === null || e2 === void 0 ? void 0 : e2.target).HTMLTextAreaElement : HTMLTextAreaElement;
    const IHTMLElement = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 === null || e2 === void 0 ? void 0 : e2.target).HTMLElement : HTMLElement;
    const IKeyboardEvent = typeof window !== "undefined" ? $431fbd86ca7dc216$export$f21a1ffae260145a(e2 === null || e2 === void 0 ? void 0 : e2.target).KeyboardEvent : KeyboardEvent;
    isTextInput = isTextInput || document1.activeElement instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(document1.activeElement.type) || document1.activeElement instanceof IHTMLTextAreaElement || document1.activeElement instanceof IHTMLElement && document1.activeElement.isContentEditable;
    return !(isTextInput && modality === "keyboard" && e2 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e2.key]);
  }
  function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn2, deps, opts) {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    y$6(() => {
      let handler = (modality, e2) => {
        if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e2)) return;
        fn2($507fabe10e71c6fb$export$b9b3dfddab17db27());
      };
      $507fabe10e71c6fb$var$changeHandlers.add(handler);
      return () => {
        $507fabe10e71c6fb$var$changeHandlers.delete(handler);
      };
    }, deps);
  }
  function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
    let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
    const onBlur = q$3((e2) => {
      if (e2.target === e2.currentTarget) {
        if (onBlurProp) onBlurProp(e2);
        if (onFocusChange) onFocusChange(false);
        return true;
      }
    }, [
      onBlurProp,
      onFocusChange
    ]);
    const onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
    const onFocus = q$3((e2) => {
      const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(e2.target);
      const activeElement = ownerDocument ? $d4ee10de306f2510$export$cd4e5573fbe2b576(ownerDocument) : $d4ee10de306f2510$export$cd4e5573fbe2b576();
      if (e2.target === e2.currentTarget && activeElement === $d4ee10de306f2510$export$e58f029f0fbfdb29(e2.nativeEvent)) {
        if (onFocusProp) onFocusProp(e2);
        if (onFocusChange) onFocusChange(true);
        onSyntheticFocus(e2);
      }
    }, [
      onFocusChange,
      onFocusProp,
      onSyntheticFocus
    ]);
    return {
      focusProps: {
        onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
        onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
      }
    };
  }
  function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
    let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
    let state = A$3({
      isFocusWithin: false
    });
    let { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
    let onBlur = q$3((e2) => {
      if (!e2.currentTarget.contains(e2.target)) return;
      if (state.current.isFocusWithin && !e2.currentTarget.contains(e2.relatedTarget)) {
        state.current.isFocusWithin = false;
        removeAllGlobalListeners();
        if (onBlurWithin) onBlurWithin(e2);
        if (onFocusWithinChange) onFocusWithinChange(false);
      }
    }, [
      onBlurWithin,
      onFocusWithinChange,
      state,
      removeAllGlobalListeners
    ]);
    let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
    let onFocus = q$3((e2) => {
      if (!e2.currentTarget.contains(e2.target)) return;
      const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(e2.target);
      const activeElement = $d4ee10de306f2510$export$cd4e5573fbe2b576(ownerDocument);
      if (!state.current.isFocusWithin && activeElement === $d4ee10de306f2510$export$e58f029f0fbfdb29(e2.nativeEvent)) {
        if (onFocusWithin) onFocusWithin(e2);
        if (onFocusWithinChange) onFocusWithinChange(true);
        state.current.isFocusWithin = true;
        onSyntheticFocus(e2);
        let currentTarget = e2.currentTarget;
        addGlobalListener(ownerDocument, "focus", (e3) => {
          if (state.current.isFocusWithin && !$d4ee10de306f2510$export$4282f70798064fe0(currentTarget, e3.target)) {
            let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
              relatedTarget: e3.target
            });
            $8a9cb279dc87e130$export$c2b7abe5d61ec696(nativeEvent, currentTarget);
            let event = $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent);
            onBlur(event);
          }
        }, {
          capture: true
        });
      }
    }, [
      onFocusWithin,
      onFocusWithinChange,
      onSyntheticFocus,
      addGlobalListener,
      onBlur
    ]);
    if (isDisabled) return {
      focusWithinProps: {
        // These cannot be null, that would conflict in mergeProps
        onFocus: void 0,
        onBlur: void 0
      }
    };
    return {
      focusWithinProps: {
        onFocus,
        onBlur
      }
    };
  }
  let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  let $6179b936705e76d3$var$hoverCount = 0;
  function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
    setTimeout(() => {
      $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
    }, 50);
  }
  function $6179b936705e76d3$var$handleGlobalPointerEvent(e2) {
    if (e2.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
  }
  function $6179b936705e76d3$var$setupGlobalTouchEvents() {
    if (typeof document === "undefined") return;
    if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else if (process.env.NODE_ENV === "test") document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    $6179b936705e76d3$var$hoverCount++;
    return () => {
      $6179b936705e76d3$var$hoverCount--;
      if ($6179b936705e76d3$var$hoverCount > 0) return;
      if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
      else if (process.env.NODE_ENV === "test") document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    };
  }
  function $6179b936705e76d3$export$ae780daf29e6d456(props) {
    let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
    let [isHovered, setHovered] = d$4(false);
    let state = A$3({
      isHovered: false,
      ignoreEmulatedMouseEvents: false,
      pointerType: "",
      target: null
    }).current;
    y$6($6179b936705e76d3$var$setupGlobalTouchEvents, []);
    let { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
    let { hoverProps, triggerHoverEnd } = T$5(() => {
      let triggerHoverStart = (event, pointerType) => {
        state.pointerType = pointerType;
        if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
        state.isHovered = true;
        let target = event.currentTarget;
        state.target = target;
        addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac(event.target), "pointerover", (e2) => {
          if (state.isHovered && state.target && !$d4ee10de306f2510$export$4282f70798064fe0(state.target, e2.target)) triggerHoverEnd2(e2, e2.pointerType);
        }, {
          capture: true
        });
        if (onHoverStart) onHoverStart({
          type: "hoverstart",
          target,
          pointerType
        });
        if (onHoverChange) onHoverChange(true);
        setHovered(true);
      };
      let triggerHoverEnd2 = (event, pointerType) => {
        let target = state.target;
        state.pointerType = "";
        state.target = null;
        if (pointerType === "touch" || !state.isHovered || !target) return;
        state.isHovered = false;
        removeAllGlobalListeners();
        if (onHoverEnd) onHoverEnd({
          type: "hoverend",
          target,
          pointerType
        });
        if (onHoverChange) onHoverChange(false);
        setHovered(false);
      };
      let hoverProps2 = {};
      if (typeof PointerEvent !== "undefined") {
        hoverProps2.onPointerEnter = (e2) => {
          if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e2.pointerType === "mouse") return;
          triggerHoverStart(e2, e2.pointerType);
        };
        hoverProps2.onPointerLeave = (e2) => {
          if (!isDisabled && e2.currentTarget.contains(e2.target)) triggerHoverEnd2(e2, e2.pointerType);
        };
      } else if (process.env.NODE_ENV === "test") {
        hoverProps2.onTouchStart = () => {
          state.ignoreEmulatedMouseEvents = true;
        };
        hoverProps2.onMouseEnter = (e2) => {
          if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e2, "mouse");
          state.ignoreEmulatedMouseEvents = false;
        };
        hoverProps2.onMouseLeave = (e2) => {
          if (!isDisabled && e2.currentTarget.contains(e2.target)) triggerHoverEnd2(e2, "mouse");
        };
      }
      return {
        hoverProps: hoverProps2,
        triggerHoverEnd: triggerHoverEnd2
      };
    }, [
      onHoverStart,
      onHoverChange,
      onHoverEnd,
      isDisabled,
      state,
      addGlobalListener,
      removeAllGlobalListeners
    ]);
    y$6(() => {
      if (isDisabled) triggerHoverEnd({
        currentTarget: state.target
      }, state.pointerType);
    }, [
      isDisabled
    ]);
    return {
      hoverProps,
      isHovered
    };
  }
  function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
    let { autoFocus = false, isTextInput, within } = props;
    let state = A$3({
      isFocused: false,
      isFocusVisible: autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27()
    });
    let [isFocused, setFocused] = d$4(false);
    let [isFocusVisibleState, setFocusVisible] = d$4(() => state.current.isFocused && state.current.isFocusVisible);
    let updateState = q$3(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = q$3((isFocused2) => {
      state.current.isFocused = isFocused2;
      setFocused(isFocused2);
      updateState();
    }, [
      updateState
    ]);
    $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible) => {
      state.current.isFocusVisible = isFocusVisible;
      updateState();
    }, [], {
      isTextInput
    });
    let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6({
      isDisabled: within,
      onFocusChange
    });
    let { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
      isDisabled: !within,
      onFocusWithinChange: onFocusChange
    });
    return {
      isFocused,
      isFocusVisible: isFocusVisibleState,
      focusProps: within ? focusWithinProps : focusProps
    };
  }
  var i$6 = Object.defineProperty;
  var d$3 = (t2, e2, n2) => e2 in t2 ? i$6(t2, e2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t2[e2] = n2;
  var r$2 = (t2, e2, n2) => (d$3(t2, typeof e2 != "symbol" ? e2 + "" : e2, n2), n2);
  let o$7 = class o {
    constructor() {
      r$2(this, "current", this.detect());
      r$2(this, "handoffState", "pending");
      r$2(this, "currentId", 0);
    }
    set(e2) {
      this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  };
  let s$7 = new o$7();
  function o$6(n2) {
    var e2, r2;
    return s$7.isServer ? null : n2 ? "ownerDocument" in n2 ? n2.ownerDocument : "current" in n2 ? (r2 = (e2 = n2.current) == null ? void 0 : e2.ownerDocument) != null ? r2 : document : null : document;
  }
  function t$3(e2) {
    typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
      throw o2;
    }));
  }
  function o$5() {
    let n2 = [], r2 = { addEventListener(e2, t2, s2, a2) {
      return e2.addEventListener(t2, s2, a2), r2.add(() => e2.removeEventListener(t2, s2, a2));
    }, requestAnimationFrame(...e2) {
      let t2 = requestAnimationFrame(...e2);
      return r2.add(() => cancelAnimationFrame(t2));
    }, nextFrame(...e2) {
      return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e2));
    }, setTimeout(...e2) {
      let t2 = setTimeout(...e2);
      return r2.add(() => clearTimeout(t2));
    }, microTask(...e2) {
      let t2 = { current: true };
      return t$3(() => {
        t2.current && e2[0]();
      }), r2.add(() => {
        t2.current = false;
      });
    }, style(e2, t2, s2) {
      let a2 = e2.style.getPropertyValue(t2);
      return Object.assign(e2.style, { [t2]: s2 }), this.add(() => {
        Object.assign(e2.style, { [t2]: a2 });
      });
    }, group(e2) {
      let t2 = o$5();
      return e2(t2), this.add(() => t2.dispose());
    }, add(e2) {
      return n2.includes(e2) || n2.push(e2), () => {
        let t2 = n2.indexOf(e2);
        if (t2 >= 0) for (let s2 of n2.splice(t2, 1)) s2();
      };
    }, dispose() {
      for (let e2 of n2.splice(0)) e2();
    } };
    return r2;
  }
  function p$2() {
    let [e2] = d$4(o$5);
    return y$6(() => () => e2.dispose(), [e2]), e2;
  }
  let n$3 = (e2, t2) => {
    s$7.isServer ? y$6(e2, t2) : _$3(e2, t2);
  };
  function s$6(e2) {
    let r2 = A$3(e2);
    return n$3(() => {
      r2.current = e2;
    }, [e2]), r2;
  }
  let o$4 = function(t2) {
    let e2 = s$6(t2);
    return Rn.useCallback((...r2) => e2.current(...r2), [e2]);
  };
  function E$1(e2) {
    let t2 = e2.width / 2, n2 = e2.height / 2;
    return { top: e2.clientY - n2, right: e2.clientX + t2, bottom: e2.clientY + n2, left: e2.clientX - t2 };
  }
  function P$3(e2, t2) {
    return !(!e2 || !t2 || e2.right < t2.left || e2.left > t2.right || e2.bottom < t2.top || e2.top > t2.bottom);
  }
  function w$2({ disabled: e2 = false } = {}) {
    let t2 = A$3(null), [n2, l2] = d$4(false), r2 = p$2(), o2 = o$4(() => {
      t2.current = null, l2(false), r2.dispose();
    }), f2 = o$4((s2) => {
      if (r2.dispose(), t2.current === null) {
        t2.current = s2.currentTarget, l2(true);
        {
          let i2 = o$6(s2.currentTarget);
          r2.addEventListener(i2, "pointerup", o2, false), r2.addEventListener(i2, "pointermove", (c2) => {
            if (t2.current) {
              let p2 = E$1(c2);
              l2(P$3(p2, t2.current.getBoundingClientRect()));
            }
          }, false), r2.addEventListener(i2, "pointercancel", o2, false);
        }
      }
    });
    return { pressed: n2, pressProps: e2 ? {} : { onPointerDown: f2, onPointerUp: o2, onClick: o2 } };
  }
  let e$3 = K$3(void 0);
  function a$9() {
    return x$4(e$3);
  }
  function t$2(...r2) {
    return Array.from(new Set(r2.flatMap((n2) => typeof n2 == "string" ? n2.split(" ") : []))).filter(Boolean).join(" ");
  }
  function u$7(r2, n2, ...a2) {
    if (r2 in n2) {
      let e2 = n2[r2];
      return typeof e2 == "function" ? e2(...a2) : e2;
    }
    let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, u$7), t2;
  }
  var O$1 = ((a2) => (a2[a2.None = 0] = "None", a2[a2.RenderStrategy = 1] = "RenderStrategy", a2[a2.Static = 2] = "Static", a2))(O$1 || {}), A$1 = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(A$1 || {});
  function L$2() {
    let n2 = U$2();
    return q$3((r2) => C$2({ mergeRefs: n2, ...r2 }), [n2]);
  }
  function C$2({ ourProps: n2, theirProps: r2, slot: e2, defaultTag: a2, features: s2, visible: t2 = true, name: l2, mergeRefs: i2 }) {
    i2 = i2 != null ? i2 : $;
    let o2 = P$2(r2, n2);
    if (t2) return F$3(o2, e2, a2, l2, i2);
    let y2 = s2 != null ? s2 : 0;
    if (y2 & 2) {
      let { static: f2 = false, ...u2 } = o2;
      if (f2) return F$3(u2, e2, a2, l2, i2);
    }
    if (y2 & 1) {
      let { unmount: f2 = true, ...u2 } = o2;
      return u$7(f2 ? 0 : 1, { [0]() {
        return null;
      }, [1]() {
        return F$3({ ...u2, hidden: true, style: { display: "none" } }, e2, a2, l2, i2);
      } });
    }
    return F$3(o2, e2, a2, l2, i2);
  }
  function F$3(n2, r2 = {}, e2, a2, s2) {
    let { as: t2 = e2, children: l2, refName: i2 = "ref", ...o2 } = h$4(n2, ["unmount", "static"]), y2 = n2.ref !== void 0 ? { [i2]: n2.ref } : {}, f2 = typeof l2 == "function" ? l2(r2) : l2;
    "className" in o2 && o2.className && typeof o2.className == "function" && (o2.className = o2.className(r2)), o2["aria-labelledby"] && o2["aria-labelledby"] === o2.id && (o2["aria-labelledby"] = void 0);
    let u2 = {};
    if (r2) {
      let d2 = false, p2 = [];
      for (let [c2, T2] of Object.entries(r2)) typeof T2 == "boolean" && (d2 = true), T2 === true && p2.push(c2.replace(/([A-Z])/g, (g2) => `-${g2.toLowerCase()}`));
      if (d2) {
        u2["data-headlessui-state"] = p2.join(" ");
        for (let c2 of p2) u2[`data-${c2}`] = "";
      }
    }
    if (t2 === k$3 && (Object.keys(m$4(o2)).length > 0 || Object.keys(m$4(u2)).length > 0)) if (!mn(f2) || Array.isArray(f2) && f2.length > 1) {
      if (Object.keys(m$4(o2)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${a2} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m$4(o2)).concat(Object.keys(m$4(u2))).map((d2) => `  - ${d2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d2) => `  - ${d2}`).join(`
`)].join(`
`));
    } else {
      let d2 = f2.props, p2 = d2 == null ? void 0 : d2.className, c2 = typeof p2 == "function" ? (...R2) => t$2(p2(...R2), o2.className) : t$2(p2, o2.className), T2 = c2 ? { className: c2 } : {}, g2 = P$2(f2.props, m$4(h$4(o2, ["ref"])));
      for (let R2 in u2) R2 in g2 && delete u2[R2];
      return _n(f2, Object.assign({}, g2, u2, y2, { ref: s2(H$4(f2), y2.ref) }, T2));
    }
    return _$4(t2, Object.assign({}, h$4(o2, ["ref"]), t2 !== k$3 && y2, t2 !== k$3 && u2), f2);
  }
  function U$2() {
    let n2 = A$3([]), r2 = q$3((e2) => {
      for (let a2 of n2.current) a2 != null && (typeof a2 == "function" ? a2(e2) : a2.current = e2);
    }, []);
    return (...e2) => {
      if (!e2.every((a2) => a2 == null)) return n2.current = e2, r2;
    };
  }
  function $(...n2) {
    return n2.every((r2) => r2 == null) ? void 0 : (r2) => {
      for (let e2 of n2) e2 != null && (typeof e2 == "function" ? e2(r2) : e2.current = r2);
    };
  }
  function P$2(...n2) {
    if (n2.length === 0) return {};
    if (n2.length === 1) return n2[0];
    let r2 = {}, e2 = {};
    for (let s2 of n2) for (let t2 in s2) t2.startsWith("on") && typeof s2[t2] == "function" ? (e2[t2] != null || (e2[t2] = []), e2[t2].push(s2[t2])) : r2[t2] = s2[t2];
    if (r2.disabled || r2["aria-disabled"]) for (let s2 in e2) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s2) && (e2[s2] = [(t2) => {
      var l2;
      return (l2 = t2 == null ? void 0 : t2.preventDefault) == null ? void 0 : l2.call(t2);
    }]);
    for (let s2 in e2) Object.assign(r2, { [s2](t2, ...l2) {
      let i2 = e2[s2];
      for (let o2 of i2) {
        if ((t2 instanceof Event || (t2 == null ? void 0 : t2.nativeEvent) instanceof Event) && t2.defaultPrevented) return;
        o2(t2, ...l2);
      }
    } });
    return r2;
  }
  function _$2(...n2) {
    if (n2.length === 0) return {};
    if (n2.length === 1) return n2[0];
    let r2 = {}, e2 = {};
    for (let s2 of n2) for (let t2 in s2) t2.startsWith("on") && typeof s2[t2] == "function" ? (e2[t2] != null || (e2[t2] = []), e2[t2].push(s2[t2])) : r2[t2] = s2[t2];
    for (let s2 in e2) Object.assign(r2, { [s2](...t2) {
      let l2 = e2[s2];
      for (let i2 of l2) i2 == null || i2(...t2);
    } });
    return r2;
  }
  function K$1(n2) {
    var r2;
    return Object.assign(D$1(n2), { displayName: (r2 = n2.displayName) != null ? r2 : n2.name });
  }
  function m$4(n2) {
    let r2 = Object.assign({}, n2);
    for (let e2 in r2) r2[e2] === void 0 && delete r2[e2];
    return r2;
  }
  function h$4(n2, r2 = []) {
    let e2 = Object.assign({}, n2);
    for (let a2 of r2) a2 in e2 && delete e2[a2];
    return e2;
  }
  function H$4(n2) {
    return Rn.version.split(".")[0] >= "19" ? n2.props.ref : n2.ref;
  }
  let R$2 = "button";
  function v$1(a2, u2) {
    var p2;
    let l2 = a$9(), { disabled: e2 = l2 || false, autoFocus: t2 = false, ...o2 } = a2, { isFocusVisible: r2, focusProps: i2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: t2 }), { isHovered: s2, hoverProps: T2 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e2 }), { pressed: n2, pressProps: d2 } = w$2({ disabled: e2 }), f2 = _$2({ ref: u2, type: (p2 = o2.type) != null ? p2 : "button", disabled: e2 || void 0, autoFocus: t2 }, i2, T2, d2), m2 = T$5(() => ({ disabled: e2, hover: s2, focus: r2, active: n2, autofocus: t2 }), [e2, s2, r2, n2, t2]);
    return L$2()({ ourProps: f2, theirProps: o2, slot: m2, defaultTag: R$2, name: "Button" });
  }
  let H$3 = K$1(v$1);
  let e$2 = K$3(void 0);
  function u$6() {
    return x$4(e$2);
  }
  function r$1(n2) {
    let e2 = n2.parentElement, l2 = null;
    for (; e2 && !(e2 instanceof HTMLFieldSetElement); ) e2 instanceof HTMLLegendElement && (l2 = e2), e2 = e2.parentElement;
    let t2 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
    return t2 && i$5(l2) ? false : t2;
  }
  function i$5(n2) {
    if (!n2) return false;
    let e2 = n2.previousElementSibling;
    for (; e2 !== null; ) {
      if (e2 instanceof HTMLLegendElement) return false;
      e2 = e2.previousElementSibling;
    }
    return true;
  }
  let u$5 = Symbol();
  function T$3(t2, n2 = true) {
    return Object.assign(t2, { [u$5]: n2 });
  }
  function y$5(...t2) {
    let n2 = A$3(t2);
    y$6(() => {
      n2.current = t2;
    }, [t2]);
    let c2 = o$4((e2) => {
      for (let o2 of n2.current) o2 != null && (typeof o2 == "function" ? o2(e2) : o2.current = e2);
    });
    return t2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u$5])) ? void 0 : c2;
  }
  let a$8 = K$3(null);
  a$8.displayName = "DescriptionContext";
  function f$6() {
    let r2 = x$4(a$8);
    if (r2 === null) {
      let e2 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
      throw Error.captureStackTrace && Error.captureStackTrace(e2, f$6), e2;
    }
    return r2;
  }
  function U$1() {
    var r2, e2;
    return (e2 = (r2 = x$4(a$8)) == null ? void 0 : r2.value) != null ? e2 : void 0;
  }
  function w$1() {
    let [r2, e2] = d$4([]);
    return [r2.length > 0 ? r2.join(" ") : void 0, T$5(() => function(t2) {
      let i2 = o$4((n2) => (e2((s2) => [...s2, n2]), () => e2((s2) => {
        let o2 = s2.slice(), p2 = o2.indexOf(n2);
        return p2 !== -1 && o2.splice(p2, 1), o2;
      }))), l2 = T$5(() => ({ register: i2, slot: t2.slot, name: t2.name, props: t2.props, value: t2.value }), [i2, t2.slot, t2.name, t2.props, t2.value]);
      return Rn.createElement(a$8.Provider, { value: l2 }, t2.children);
    }, [e2])];
  }
  let S$4 = "p";
  function C$1(r2, e2) {
    let d2 = g$3(), t2 = a$9(), { id: i2 = `headlessui-description-${d2}`, ...l2 } = r2, n2 = f$6(), s2 = y$5(e2);
    n$3(() => n2.register(i2), [i2, n2.register]);
    let o2 = t2 || false, p2 = T$5(() => ({ ...n2.slot, disabled: o2 }), [n2.slot, o2]), D2 = { ref: s2, ...n2.props, id: i2 };
    return L$2()({ ourProps: D2, theirProps: l2, slot: p2, defaultTag: S$4, name: n2.name || "Description" });
  }
  let _$1 = K$1(C$1);
  Object.assign(_$1, {});
  var o$3 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$3 || {});
  let c$5 = K$3(null);
  c$5.displayName = "LabelContext";
  function P$1() {
    let r2 = x$4(c$5);
    if (r2 === null) {
      let l2 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
      throw Error.captureStackTrace && Error.captureStackTrace(l2, P$1), l2;
    }
    return r2;
  }
  function I$2(r2) {
    var a2, e2, o2;
    let l2 = (e2 = (a2 = x$4(c$5)) == null ? void 0 : a2.value) != null ? e2 : void 0;
    return ((o2 = void 0) != null ? o2 : 0) > 0 ? [l2, ...r2].filter(Boolean).join(" ") : l2;
  }
  function K({ inherit: r2 = false } = {}) {
    let l2 = I$2(), [a2, e2] = d$4([]), o2 = r2 ? [l2, ...a2].filter(Boolean) : a2;
    return [o2.length > 0 ? o2.join(" ") : void 0, T$5(() => function(t2) {
      let s2 = o$4((i2) => (e2((p2) => [...p2, i2]), () => e2((p2) => {
        let u2 = p2.slice(), d2 = u2.indexOf(i2);
        return d2 !== -1 && u2.splice(d2, 1), u2;
      }))), m2 = T$5(() => ({ register: s2, slot: t2.slot, name: t2.name, props: t2.props, value: t2.value }), [s2, t2.slot, t2.name, t2.props, t2.value]);
      return Rn.createElement(c$5.Provider, { value: m2 }, t2.children);
    }, [e2])];
  }
  let N = "label";
  function G$1(r2, l2) {
    var y2;
    let a2 = g$3(), e2 = P$1(), o2 = u$6(), g2 = a$9(), { id: t2 = `headlessui-label-${a2}`, htmlFor: s2 = o2 != null ? o2 : (y2 = e2.props) == null ? void 0 : y2.htmlFor, passive: m2 = false, ...i2 } = r2, p2 = y$5(l2);
    n$3(() => e2.register(t2), [t2, e2.register]);
    let u2 = o$4((L2) => {
      let b2 = L2.currentTarget;
      if (b2 instanceof HTMLLabelElement && L2.preventDefault(), e2.props && "onClick" in e2.props && typeof e2.props.onClick == "function" && e2.props.onClick(L2), b2 instanceof HTMLLabelElement) {
        let n2 = document.getElementById(b2.htmlFor);
        if (n2) {
          let E2 = n2.getAttribute("disabled");
          if (E2 === "true" || E2 === "") return;
          let x2 = n2.getAttribute("aria-disabled");
          if (x2 === "true" || x2 === "") return;
          (n2 instanceof HTMLInputElement && (n2.type === "radio" || n2.type === "checkbox") || n2.role === "radio" || n2.role === "checkbox" || n2.role === "switch") && n2.click(), n2.focus({ preventScroll: true });
        }
      }
    }), d2 = g2 || false, C2 = T$5(() => ({ ...e2.slot, disabled: d2 }), [e2.slot, d2]), f2 = { ref: p2, ...e2.props, id: t2, htmlFor: s2, onClick: u2 };
    return m2 && ("onClick" in f2 && (delete f2.htmlFor, delete f2.onClick), "onClick" in i2 && delete i2.onClick), L$2()({ ourProps: f2, theirProps: i2, slot: C2, defaultTag: s2 ? N : "div", name: e2.name || "Label" });
  }
  let U = K$1(G$1);
  Object.assign(U, {});
  function f$5(e2) {
    if (e2 === null) return { width: 0, height: 0 };
    let { width: t2, height: r2 } = e2.getBoundingClientRect();
    return { width: t2, height: r2 };
  }
  function d$2(e2, t2 = false) {
    let [r2, u2] = h$5(() => ({}), {}), i2 = T$5(() => f$5(e2), [e2, r2]);
    return n$3(() => {
      if (!e2) return;
      let n2 = new ResizeObserver(u2);
      return n2.observe(e2), () => {
        n2.disconnect();
      };
    }, [e2]), t2 ? { width: `${i2.width}px`, height: `${i2.height}px` } : i2;
  }
  let a$7 = class a extends Map {
    constructor(t2) {
      super();
      this.factory = t2;
    }
    get(t2) {
      let e2 = super.get(t2);
      return e2 === void 0 && (e2 = this.factory(t2), this.set(t2, e2)), e2;
    }
  };
  function a$6(o2, r2) {
    let t2 = o2(), n2 = /* @__PURE__ */ new Set();
    return { getSnapshot() {
      return t2;
    }, subscribe(e2) {
      return n2.add(e2), () => n2.delete(e2);
    }, dispatch(e2, ...s2) {
      let i2 = r2[e2].call(t2, ...s2);
      i2 && (t2 = i2, n2.forEach((c2) => c2()));
    } };
  }
  function o$2(t2) {
    return C$3(t2.subscribe, t2.getSnapshot, t2.getSnapshot);
  }
  let p$1 = new a$7(() => a$6(() => [], { ADD(r2) {
    return this.includes(r2) ? this : [...this, r2];
  }, REMOVE(r2) {
    let e2 = this.indexOf(r2);
    if (e2 === -1) return this;
    let t2 = this.slice();
    return t2.splice(e2, 1), t2;
  } }));
  function x$2(r2, e2) {
    let t2 = p$1.get(e2), i2 = g$3(), h2 = o$2(t2);
    if (n$3(() => {
      if (r2) return t2.dispatch("ADD", i2), () => t2.dispatch("REMOVE", i2);
    }, [t2, r2]), !r2) return false;
    let s2 = h2.indexOf(i2), o2 = h2.length;
    return s2 === -1 && (s2 = o2, o2 += 1), s2 === o2 - 1;
  }
  let f$4 = /* @__PURE__ */ new Map(), u$4 = /* @__PURE__ */ new Map();
  function h$3(t2) {
    var e2;
    let r2 = (e2 = u$4.get(t2)) != null ? e2 : 0;
    return u$4.set(t2, r2 + 1), r2 !== 0 ? () => m$3(t2) : (f$4.set(t2, { "aria-hidden": t2.getAttribute("aria-hidden"), inert: t2.inert }), t2.setAttribute("aria-hidden", "true"), t2.inert = true, () => m$3(t2));
  }
  function m$3(t2) {
    var i2;
    let r2 = (i2 = u$4.get(t2)) != null ? i2 : 1;
    if (r2 === 1 ? u$4.delete(t2) : u$4.set(t2, r2 - 1), r2 !== 1) return;
    let e2 = f$4.get(t2);
    e2 && (e2["aria-hidden"] === null ? t2.removeAttribute("aria-hidden") : t2.setAttribute("aria-hidden", e2["aria-hidden"]), t2.inert = e2.inert, f$4.delete(t2));
  }
  function y$4(t2, { allowed: r2, disallowed: e2 } = {}) {
    let i2 = x$2(t2, "inert-others");
    n$3(() => {
      var d2, c2;
      if (!i2) return;
      let a2 = o$5();
      for (let n2 of (d2 = e2 == null ? void 0 : e2()) != null ? d2 : []) n2 && a2.add(h$3(n2));
      let s2 = (c2 = r2 == null ? void 0 : r2()) != null ? c2 : [];
      for (let n2 of s2) {
        if (!n2) continue;
        let l2 = o$6(n2);
        if (!l2) continue;
        let o2 = n2.parentElement;
        for (; o2 && o2 !== l2.body; ) {
          for (let p2 of o2.children) s2.some((E2) => p2.contains(E2)) || a2.add(h$3(p2));
          o2 = o2.parentElement;
        }
      }
      return a2.dispose;
    }, [i2, r2, e2]);
  }
  function m$2(s2, n2, l2) {
    let i2 = s$6((t2) => {
      let e2 = t2.getBoundingClientRect();
      e2.x === 0 && e2.y === 0 && e2.width === 0 && e2.height === 0 && l2();
    });
    y$6(() => {
      if (!s2) return;
      let t2 = n2 === null ? null : n2 instanceof HTMLElement ? n2 : n2.current;
      if (!t2) return;
      let e2 = o$5();
      if (typeof ResizeObserver != "undefined") {
        let r2 = new ResizeObserver(() => i2.current(t2));
        r2.observe(t2), e2.add(() => r2.disconnect());
      }
      if (typeof IntersectionObserver != "undefined") {
        let r2 = new IntersectionObserver(() => i2.current(t2));
        r2.observe(t2), e2.add(() => r2.disconnect());
      }
      return () => e2.dispose();
    }, [n2, i2, s2]);
  }
  let f$3 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(","), p = ["[data-autofocus]"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
  var F$2 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2[n2.AutoFocus = 64] = "AutoFocus", n2))(F$2 || {}), T$2 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$2 || {}), y$3 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(y$3 || {});
  function b$3(e2 = document.body) {
    return e2 == null ? [] : Array.from(e2.querySelectorAll(f$3)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
  }
  function S$3(e2 = document.body) {
    return e2 == null ? [] : Array.from(e2.querySelectorAll(p)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
  }
  var h$2 = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h$2 || {});
  function A(e2, r2 = 0) {
    var t2;
    return e2 === ((t2 = o$6(e2)) == null ? void 0 : t2.body) ? false : u$7(r2, { [0]() {
      return e2.matches(f$3);
    }, [1]() {
      let u2 = e2;
      for (; u2 !== null; ) {
        if (u2.matches(f$3)) return true;
        u2 = u2.parentElement;
      }
      return false;
    } });
  }
  function G(e2) {
    let r2 = o$6(e2);
    o$5().nextFrame(() => {
      r2 && !A(r2.activeElement, 0) && I$1(e2);
    });
  }
  var H$2 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(H$2 || {});
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e2) => {
    e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
  }, true), document.addEventListener("click", (e2) => {
    e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
  }, true));
  function I$1(e2) {
    e2 == null || e2.focus({ preventScroll: true });
  }
  let w = ["textarea", "input"].join(",");
  function O(e2) {
    var r2, t2;
    return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, w)) != null ? t2 : false;
  }
  function _(e2, r2 = (t2) => t2) {
    return e2.slice().sort((t2, u2) => {
      let o2 = r2(t2), c2 = r2(u2);
      if (o2 === null || c2 === null) return 0;
      let l2 = o2.compareDocumentPosition(c2);
      return l2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    });
  }
  function j$2(e2, r2) {
    return P(b$3(), r2, { relativeTo: e2 });
  }
  function P(e2, r2, { sorted: t2 = true, relativeTo: u2 = null, skipElements: o2 = [] } = {}) {
    let c2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2.ownerDocument, l2 = Array.isArray(e2) ? t2 ? _(e2) : e2 : r2 & 64 ? S$3(e2) : b$3(e2);
    o2.length > 0 && l2.length > 1 && (l2 = l2.filter((s2) => !o2.some((a2) => a2 != null && "current" in a2 ? (a2 == null ? void 0 : a2.current) === s2 : a2 === s2))), u2 = u2 != null ? u2 : c2.activeElement;
    let n2 = (() => {
      if (r2 & 5) return 1;
      if (r2 & 10) return -1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })(), x2 = (() => {
      if (r2 & 1) return 0;
      if (r2 & 2) return Math.max(0, l2.indexOf(u2)) - 1;
      if (r2 & 4) return Math.max(0, l2.indexOf(u2)) + 1;
      if (r2 & 8) return l2.length - 1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })(), M2 = r2 & 32 ? { preventScroll: true } : {}, m2 = 0, d2 = l2.length, i2;
    do {
      if (m2 >= d2 || m2 + d2 <= 0) return 0;
      let s2 = x2 + m2;
      if (r2 & 16) s2 = (s2 + d2) % d2;
      else {
        if (s2 < 0) return 3;
        if (s2 >= d2) return 1;
      }
      i2 = l2[s2], i2 == null || i2.focus(M2), m2 += n2;
    } while (i2 !== c2.activeElement);
    return r2 & 6 && O(i2) && i2.select(), 2;
  }
  function t$1() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
  }
  function i$4() {
    return /Android/gi.test(window.navigator.userAgent);
  }
  function n$2() {
    return t$1() || i$4();
  }
  function i$3(t2, e2, o2, n2) {
    let u2 = s$6(o2);
    y$6(() => {
      if (!t2) return;
      function r2(m2) {
        u2.current(m2);
      }
      return document.addEventListener(e2, r2, n2), () => document.removeEventListener(e2, r2, n2);
    }, [t2, e2, n2]);
  }
  function s$5(t2, e2, o2, n2) {
    let i2 = s$6(o2);
    y$6(() => {
      if (!t2) return;
      function r2(d2) {
        i2.current(d2);
      }
      return window.addEventListener(e2, r2, n2), () => window.removeEventListener(e2, r2, n2);
    }, [t2, e2, n2]);
  }
  const E = 30;
  function R$1(p2, f2, C2) {
    let u2 = x$2(p2, "outside-click"), m2 = s$6(C2), s2 = q$3(function(e2, n2) {
      if (e2.defaultPrevented) return;
      let r2 = n2(e2);
      if (r2 === null || !r2.getRootNode().contains(r2) || !r2.isConnected) return;
      let h2 = function l2(o2) {
        return typeof o2 == "function" ? l2(o2()) : Array.isArray(o2) || o2 instanceof Set ? o2 : [o2];
      }(f2);
      for (let l2 of h2) if (l2 !== null && (l2.contains(r2) || e2.composed && e2.composedPath().includes(l2))) return;
      return !A(r2, h$2.Loose) && r2.tabIndex !== -1 && e2.preventDefault(), m2.current(e2, r2);
    }, [m2, f2]), i2 = A$3(null);
    i$3(u2, "pointerdown", (t2) => {
      var e2, n2;
      i2.current = ((n2 = (e2 = t2.composedPath) == null ? void 0 : e2.call(t2)) == null ? void 0 : n2[0]) || t2.target;
    }, true), i$3(u2, "mousedown", (t2) => {
      var e2, n2;
      i2.current = ((n2 = (e2 = t2.composedPath) == null ? void 0 : e2.call(t2)) == null ? void 0 : n2[0]) || t2.target;
    }, true), i$3(u2, "click", (t2) => {
      n$2() || i2.current && (s2(t2, () => i2.current), i2.current = null);
    }, true);
    let a2 = A$3({ x: 0, y: 0 });
    i$3(u2, "touchstart", (t2) => {
      a2.current.x = t2.touches[0].clientX, a2.current.y = t2.touches[0].clientY;
    }, true), i$3(u2, "touchend", (t2) => {
      let e2 = { x: t2.changedTouches[0].clientX, y: t2.changedTouches[0].clientY };
      if (!(Math.abs(e2.x - a2.current.x) >= E || Math.abs(e2.y - a2.current.y) >= E)) return s2(t2, () => t2.target instanceof HTMLElement ? t2.target : null);
    }, true), s$5(u2, "blur", (t2) => s2(t2, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
  }
  function n$1(...e2) {
    return T$5(() => o$6(...e2), [...e2]);
  }
  function e$1(t2, u2) {
    return T$5(() => {
      var n2;
      if (t2.type) return t2.type;
      let r2 = (n2 = t2.as) != null ? n2 : "button";
      if (typeof r2 == "string" && r2.toLowerCase() === "button" || (u2 == null ? void 0 : u2.tagName) === "BUTTON" && !u2.hasAttribute("type")) return "button";
    }, [t2.type, t2.as, u2]);
  }
  function d$1() {
    let r2;
    return { before({ doc: e2 }) {
      var l2;
      let o2 = e2.documentElement, t2 = (l2 = e2.defaultView) != null ? l2 : window;
      r2 = Math.max(0, t2.innerWidth - o2.clientWidth);
    }, after({ doc: e2, d: o2 }) {
      let t2 = e2.documentElement, l2 = Math.max(0, t2.clientWidth - t2.offsetWidth), n2 = Math.max(0, r2 - l2);
      o2.style(t2, "paddingRight", `${n2}px`);
    } };
  }
  function d() {
    return t$1() ? { before({ doc: r2, d: n2, meta: c2 }) {
      function o2(a2) {
        return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(a2));
      }
      n2.microTask(() => {
        var s2;
        if (window.getComputedStyle(r2.documentElement).scrollBehavior !== "auto") {
          let t2 = o$5();
          t2.style(r2.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
        }
        let a2 = (s2 = window.scrollY) != null ? s2 : window.pageYOffset, l2 = null;
        n2.addEventListener(r2, "click", (t2) => {
          if (t2.target instanceof HTMLElement) try {
            let e2 = t2.target.closest("a");
            if (!e2) return;
            let { hash: f2 } = new URL(e2.href), i2 = r2.querySelector(f2);
            i2 && !o2(i2) && (l2 = i2);
          } catch {
          }
        }, true), n2.addEventListener(r2, "touchstart", (t2) => {
          if (t2.target instanceof HTMLElement) if (o2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && o2(e2.parentElement); ) e2 = e2.parentElement;
            n2.style(e2, "overscrollBehavior", "contain");
          } else n2.style(t2.target, "touchAction", "none");
        }), n2.addEventListener(r2, "touchmove", (t2) => {
          if (t2.target instanceof HTMLElement) {
            if (t2.target.tagName === "INPUT") return;
            if (o2(t2.target)) {
              let e2 = t2.target;
              for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); ) e2 = e2.parentElement;
              e2.dataset.headlessuiPortal === "" && t2.preventDefault();
            } else t2.preventDefault();
          }
        }, { passive: false }), n2.add(() => {
          var e2;
          let t2 = (e2 = window.scrollY) != null ? e2 : window.pageYOffset;
          a2 !== t2 && window.scrollTo(0, a2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
        });
      });
    } } : {};
  }
  function r() {
    return { before({ doc: e2, d: o2 }) {
      o2.style(e2.documentElement, "overflow", "hidden");
    } };
  }
  function m$1(e2) {
    let n2 = {};
    for (let t2 of e2) Object.assign(n2, t2(n2));
    return n2;
  }
  let a$5 = a$6(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
    var o2;
    let t2 = (o2 = this.get(e2)) != null ? o2 : { doc: e2, count: 0, d: o$5(), meta: /* @__PURE__ */ new Set() };
    return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
  }, POP(e2, n2) {
    let t2 = this.get(e2);
    return t2 && (t2.count--, t2.meta.delete(n2)), this;
  }, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
    let o2 = { doc: e2, d: n2, meta: m$1(t2) }, c2 = [d(), d$1(), r()];
    c2.forEach(({ before: r2 }) => r2 == null ? void 0 : r2(o2)), c2.forEach(({ after: r2 }) => r2 == null ? void 0 : r2(o2));
  }, SCROLL_ALLOW({ d: e2 }) {
    e2.dispose();
  }, TEARDOWN({ doc: e2 }) {
    this.delete(e2);
  } });
  a$5.subscribe(() => {
    let e2 = a$5.getSnapshot(), n2 = /* @__PURE__ */ new Map();
    for (let [t2] of e2) n2.set(t2, t2.documentElement.style.overflow);
    for (let t2 of e2.values()) {
      let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
      (c2 && !o2 || !c2 && o2) && a$5.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a$5.dispatch("TEARDOWN", t2);
    }
  });
  function a$4(r2, e2, n2 = () => ({ containers: [] })) {
    let f2 = o$2(a$5), o2 = e2 ? f2.get(e2) : void 0, i2 = o2 ? o2.count > 0 : false;
    return n$3(() => {
      if (!(!e2 || !r2)) return a$5.dispatch("PUSH", e2, n2), () => a$5.dispatch("POP", e2, n2);
    }, [r2, e2]), i2;
  }
  function f$2(e2, c2, n2 = () => [document.body]) {
    let r2 = x$2(e2, "scroll-lock");
    a$4(r2, c2, (t2) => {
      var o2;
      return { containers: [...(o2 = t2.containers) != null ? o2 : [], n2] };
    });
  }
  function t(e2) {
    return [e2.screenX, e2.screenY];
  }
  function u$3() {
    let e2 = A$3([-1, -1]);
    return { wasMoved(r2) {
      let n2 = t(r2);
      return e2.current[0] === n2[0] && e2.current[1] === n2[1] ? false : (e2.current = n2, true);
    }, update(r2) {
      e2.current = t(r2);
    } };
  }
  function c$4(u2 = 0) {
    let [t2, l2] = d$4(u2), g2 = q$3((e2) => l2(e2), [t2]), s2 = q$3((e2) => l2((a2) => a2 | e2), [t2]), m2 = q$3((e2) => (t2 & e2) === e2, [t2]), n2 = q$3((e2) => l2((a2) => a2 & ~e2), [l2]), F2 = q$3((e2) => l2((a2) => a2 ^ e2), [l2]);
    return { flags: t2, setFlag: g2, addFlag: s2, hasFlag: m2, removeFlag: n2, toggleFlag: F2 };
  }
  var T$1, b$2;
  typeof process != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((T$1 = process == null ? void 0 : process.env) == null ? void 0 : T$1["NODE_ENV"]) === "test" && typeof ((b$2 = Element == null ? void 0 : Element.prototype) == null ? void 0 : b$2.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
    return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
  });
  var L$1 = ((r2) => (r2[r2.None = 0] = "None", r2[r2.Closed = 1] = "Closed", r2[r2.Enter = 2] = "Enter", r2[r2.Leave = 4] = "Leave", r2))(L$1 || {});
  function R(t2) {
    let n2 = {};
    for (let e2 in t2) t2[e2] === true && (n2[`data-${e2}`] = "");
    return n2;
  }
  function x$1(t2, n2, e2, i2) {
    let [r2, o2] = d$4(e2), { hasFlag: s2, addFlag: a2, removeFlag: l2 } = c$4(t2 && r2 ? 3 : 0), u2 = A$3(false), f2 = A$3(false), E2 = p$2();
    return n$3(() => {
      var d2;
      if (t2) {
        if (e2 && o2(true), !n2) {
          e2 && a2(3);
          return;
        }
        return (d2 = void 0) == null || d2.call(i2, e2), C(n2, { inFlight: u2, prepare() {
          f2.current ? f2.current = false : f2.current = u2.current, u2.current = true, !f2.current && (e2 ? (a2(3), l2(4)) : (a2(4), l2(2)));
        }, run() {
          f2.current ? e2 ? (l2(3), a2(4)) : (l2(4), a2(3)) : e2 ? l2(1) : a2(1);
        }, done() {
          var p2;
          f2.current && typeof n2.getAnimations == "function" && n2.getAnimations().length > 0 || (u2.current = false, l2(7), e2 || o2(false), (p2 = void 0) == null || p2.call(i2, e2));
        } });
      }
    }, [t2, e2, n2, E2]), t2 ? [r2, { closed: s2(1), enter: s2(2), leave: s2(4), transition: s2(2) || s2(4) }] : [e2, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
  }
  function C(t2, { prepare: n2, run: e2, done: i2, inFlight: r2 }) {
    let o2 = o$5();
    return j$1(t2, { prepare: n2, inFlight: r2 }), o2.nextFrame(() => {
      e2(), o2.requestAnimationFrame(() => {
        o2.add(M$2(t2, i2));
      });
    }), o2.dispose;
  }
  function M$2(t2, n2) {
    var o2, s2;
    let e2 = o$5();
    if (!t2) return e2.dispose;
    let i2 = false;
    e2.add(() => {
      i2 = true;
    });
    let r2 = (s2 = (o2 = t2.getAnimations) == null ? void 0 : o2.call(t2).filter((a2) => a2 instanceof CSSTransition)) != null ? s2 : [];
    return r2.length === 0 ? (n2(), e2.dispose) : (Promise.allSettled(r2.map((a2) => a2.finished)).then(() => {
      i2 || n2();
    }), e2.dispose);
  }
  function j$1(t2, { inFlight: n2, prepare: e2 }) {
    if (n2 != null && n2.current) {
      e2();
      return;
    }
    let i2 = t2.style.transition;
    t2.style.transition = "none", e2(), t2.offsetHeight, t2.style.transition = i2;
  }
  function F$1(c2, { container: e2, accept: t2, walk: r2 }) {
    let o2 = A$3(t2), l2 = A$3(r2);
    y$6(() => {
      o2.current = t2, l2.current = r2;
    }, [t2, r2]), n$3(() => {
      if (!e2 || !c2) return;
      let n2 = o$6(e2);
      if (!n2) return;
      let f2 = o2.current, p2 = l2.current, i2 = Object.assign((m2) => f2(m2), { acceptNode: f2 }), u2 = n2.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, i2, false);
      for (; u2.nextNode(); ) p2(u2.currentNode);
    }, [e2, c2, o2, l2]);
  }
  function hasWindow() {
    return typeof window !== "undefined";
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
  }
  function isTableElement(element) {
    return ["table", "td", "th"].includes(getNodeName(element));
  }
  function isTopLayer(element) {
    return [":popover-open", ":modal"].some((selector) => {
      try {
        return element.matches(selector);
      } catch (e2) {
        return false;
      }
    });
  }
  function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
    return ["transform", "translate", "scale", "rotate", "perspective"].some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else if (isTopLayer(currentNode)) {
        return null;
      }
      currentNode = getParentNode(currentNode);
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === "undefined" || !CSS.supports) return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
  }
  function isLastTraversableNode(node) {
    return ["html", "body", "#document"].includes(getNodeName(node));
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.scrollX,
      scrollTop: element.scrollY
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = (
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot || // DOM Element detected.
      node.parentNode || // ShadowRoot detected.
      isShadowRoot(node) && node.host || // Fallback.
      getDocumentElement(node)
    );
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      const frameElement = getFrameElement(win);
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
  function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
  }
  function getUserAgent() {
    const uaData = navigator.userAgentData;
    if (uaData && Array.isArray(uaData.brands)) {
      return uaData.brands.map((_ref) => {
        let {
          brand,
          version
        } = _ref;
        return brand + "/" + version;
      }).join(" ");
    }
    return navigator.userAgent;
  }
  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const floor = Math.floor;
  const createCoords = (v2) => ({
    x: v2,
    y: v2
  });
  const oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  const oppositeAlignmentMap = {
    start: "end",
    end: "start"
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  function getSideAxis(placement) {
    return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
  }
  function getSideList(side, isStart, rtl) {
    const lr = ["left", "right"];
    const rl = ["right", "left"];
    const tb = ["top", "bottom"];
    const bt = ["bottom", "top"];
    switch (side) {
      case "top":
      case "bottom":
        if (rtl) return isStart ? rl : lr;
        return isStart ? lr : rl;
      case "left":
      case "right":
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list = list.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    const {
      x: x2,
      y: y2,
      width,
      height
    } = rect;
    return {
      width,
      height,
      top: y2,
      left: x2,
      right: x2 + width,
      bottom: y2 + height,
      x: x2,
      y: y2
    };
  }
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  const computePosition$1 = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
    let rects = await platform2.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x: x2,
      y: y2
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i2 = 0; i2 < validMiddleware.length; i2++) {
      const {
        name,
        fn: fn2
      } = validMiddleware[i2];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn2({
        x: x2,
        y: y2,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform: platform2,
        elements: {
          reference,
          floating
        }
      });
      x2 = nextX != null ? nextX : x2;
      y2 = nextY != null ? nextY : y2;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === "object") {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform2.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x: x2,
            y: y2
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i2 = -1;
      }
    }
    return {
      x: x2,
      y: y2,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  async function detectOverflow$1(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x: x2,
      y: y2,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
      element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      x: x2,
      y: y2,
      width: rects.floating.width,
      height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
    const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  const flip$2 = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "flip",
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const initialSideAxis = getSideAxis(initialPlacement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
        if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow$1(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides[0]], overflow[sides[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            var _overflowsData$;
            const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
            const hasInitialMainAxisOverflow = ((_overflowsData$ = overflowsData[0]) == null ? void 0 : _overflowsData$.overflows[0]) > 0;
            if (!ignoreCrossAxisOverflow || hasInitialMainAxisOverflow) {
              return {
                data: {
                  index: nextIndex,
                  overflows: overflowsData
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d2) => d2.overflows[0] <= 0).sort((a2, b2) => a2.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$filter2;
                const placement2 = (_overflowsData$filter2 = overflowsData.filter((d2) => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d2.placement);
                    return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === "y";
                  }
                  return true;
                }).map((d2) => [d2.placement, d2.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b2) => a2[1] - b2[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: rawValue.mainAxis || 0,
      crossAxis: rawValue.crossAxis || 0,
      alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  const offset$2 = function(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: "offset",
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x: x2,
          y: y2,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x2 + diffCoords.x,
          y: y2 + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };
  const shift$2 = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "shift",
      options,
      async fn(state) {
        const {
          x: x2,
          y: y2,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x3,
                y: y3
              } = _ref;
              return {
                x: x3,
                y: y3
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x: x2,
          y: y2
        };
        const overflow = await detectOverflow$1(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x2,
            y: limitedCoords.y - y2,
            enabled: {
              [mainAxis]: checkMainAxis,
              [crossAxis]: checkCrossAxis
            }
          }
        };
      }
    };
  };
  const size$2 = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "size",
      options,
      async fn(state) {
        var _state$middlewareData, _state$middlewareData2;
        const {
          placement,
          rects,
          platform: platform2,
          elements
        } = state;
        const {
          apply = () => {
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const overflow = await detectOverflow$1(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === "y";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        const maximumClippingWidth = width - overflow.left - overflow.right;
        const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
        const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
          availableWidth = maximumClippingWidth;
        }
        if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
          availableHeight = maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply({
          ...state,
          availableWidth,
          availableHeight
        });
        const nextDimensions = await platform2.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };
  function getCssDimensions(element) {
    const css = getComputedStyle$1(element);
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $: $2
    } = getCssDimensions(domElement);
    let x2 = ($2 ? round(rect.width) : rect.width) / width;
    let y2 = ($2 ? round(rect.height) : rect.height) / height;
    if (!x2 || !Number.isFinite(x2)) {
      x2 = 1;
    }
    if (!y2 || !Number.isFinite(y2)) {
      y2 = 1;
    }
    return {
      x: x2,
      y: y2
    };
  }
  const noOffsets = /* @__PURE__ */ createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x2 = (clientRect.left + visualOffsets.x) / scale.x;
    let y2 = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentWin = win;
      let currentIFrame = getFrameElement(currentWin);
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle$1(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x2 *= iframeScale.x;
        y2 *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x2 += left;
        y2 += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = getFrameElement(currentWin);
      }
    }
    return rectToClientRect({
      width,
      height,
      x: x2,
      y: y2
    });
  }
  function getWindowScrollBarX(element, rect) {
    const leftScroll = getNodeScroll(element).scrollLeft;
    if (!rect) {
      return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
  }
  function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
    if (ignoreScrollbarX === void 0) {
      ignoreScrollbarX = false;
    }
    const htmlRect = documentElement.getBoundingClientRect();
    const x2 = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
      // RTL <body> scrollbar.
      getWindowScrollBarX(documentElement, htmlRect)
    ));
    const y2 = htmlRect.top + scroll.scrollTop;
    return {
      x: x2,
      y: y2
    };
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      elements,
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isFixed = strategy === "fixed";
    const documentElement = getDocumentElement(offsetParent);
    const topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y2 = -scroll.scrollTop;
    if (getComputedStyle$1(body).direction === "rtl") {
      x2 += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x: x2,
      y: y2
    };
  }
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x2 = 0;
    let y2 = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x2 = visualViewport.offsetLeft;
        y2 = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x2,
      y: y2
    };
  }
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x2 = left * scale.x;
    const y2 = top * scale.y;
    return {
      width,
      height,
      x: x2,
      y: y2
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y,
        width: clippingAncestor.width,
        height: clippingAncestor.height
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle$1(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle$1(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }
  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    function setLeftRTLScrollbarOffset() {
      offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        setLeftRTLScrollbarOffset();
      }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
      setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    const x2 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y2 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
      x: x2,
      y: y2,
      width: rect.width,
      height: rect.height
    };
  }
  function isStaticPositioned(element) {
    return getComputedStyle$1(element).position === "static";
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    if (getDocumentElement(element) === rawOffsetParent) {
      rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const win = getWindow(element);
    if (isTopLayer(element)) {
      return win;
    }
    if (!isHTMLElement(element)) {
      let svgOffsetParent = getParentNode(element);
      while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
        if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
          return svgOffsetParent;
        }
        svgOffsetParent = getParentNode(svgOffsetParent);
      }
      return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
      return win;
    }
    return offsetParent || getContainingBlock(element) || win;
  }
  const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
      reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle$1(element).direction === "rtl";
  }
  const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };
  function rectsAreEqual(a2, b2) {
    return a2.x === b2.x && a2.y === b2.y && a2.width === b2.width && a2.height === b2.height;
  }
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const elementRectForRootMargin = element.getBoundingClientRect();
      const {
        left,
        top,
        width,
        height
      } = elementRectForRootMargin;
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 1e3);
          } else {
            refresh(false, ratio);
          }
        }
        if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
          refresh();
        }
        isFirstUpdate = false;
      }
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root.ownerDocument
        });
      } catch (_e) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === "function",
      layoutShift = typeof IntersectionObserver === "function",
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.addEventListener("scroll", update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener("resize", update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver((_ref) => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      var _resizeObserver2;
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.removeEventListener("scroll", update);
        ancestorResize && ancestor.removeEventListener("resize", update);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  const detectOverflow = detectOverflow$1;
  const offset$1 = offset$2;
  const shift$1 = shift$2;
  const flip$1 = flip$2;
  const size$1 = size$2;
  const computePosition = (reference, floating, options) => {
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition$1(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };
  var index$1 = typeof document !== "undefined" ? _$3 : y$6;
  function deepEqual(a2, b2) {
    if (a2 === b2) {
      return true;
    }
    if (typeof a2 !== typeof b2) {
      return false;
    }
    if (typeof a2 === "function" && a2.toString() === b2.toString()) {
      return true;
    }
    let length;
    let i2;
    let keys;
    if (a2 && b2 && typeof a2 === "object") {
      if (Array.isArray(a2)) {
        length = a2.length;
        if (length !== b2.length) return false;
        for (i2 = length; i2-- !== 0; ) {
          if (!deepEqual(a2[i2], b2[i2])) {
            return false;
          }
        }
        return true;
      }
      keys = Object.keys(a2);
      length = keys.length;
      if (length !== Object.keys(b2).length) {
        return false;
      }
      for (i2 = length; i2-- !== 0; ) {
        if (!{}.hasOwnProperty.call(b2, keys[i2])) {
          return false;
        }
      }
      for (i2 = length; i2-- !== 0; ) {
        const key = keys[i2];
        if (key === "_owner" && a2.$$typeof) {
          continue;
        }
        if (!deepEqual(a2[key], b2[key])) {
          return false;
        }
      }
      return true;
    }
    return a2 !== a2 && b2 !== b2;
  }
  function getDPR(element) {
    if (typeof window === "undefined") {
      return 1;
    }
    const win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
  }
  function roundByDPR(element, value) {
    const dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
  }
  function useLatestRef(value) {
    const ref = A$3(value);
    index$1(() => {
      ref.current = value;
    });
    return ref;
  }
  function useFloating$1(options) {
    if (options === void 0) {
      options = {};
    }
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2,
      elements: {
        reference: externalReference,
        floating: externalFloating
      } = {},
      transform = true,
      whileElementsMounted,
      open
    } = options;
    const [data, setData] = d$4({
      x: 0,
      y: 0,
      strategy,
      placement,
      middlewareData: {},
      isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = d$4(middleware);
    if (!deepEqual(latestMiddleware, middleware)) {
      setLatestMiddleware(middleware);
    }
    const [_reference, _setReference] = d$4(null);
    const [_floating, _setFloating] = d$4(null);
    const setReference = q$3((node) => {
      if (node !== referenceRef.current) {
        referenceRef.current = node;
        _setReference(node);
      }
    }, []);
    const setFloating = q$3((node) => {
      if (node !== floatingRef.current) {
        floatingRef.current = node;
        _setFloating(node);
      }
    }, []);
    const referenceEl = externalReference || _reference;
    const floatingEl = externalFloating || _floating;
    const referenceRef = A$3(null);
    const floatingRef = A$3(null);
    const dataRef = A$3(data);
    const hasWhileElementsMounted = whileElementsMounted != null;
    const whileElementsMountedRef = useLatestRef(whileElementsMounted);
    const platformRef = useLatestRef(platform2);
    const openRef = useLatestRef(open);
    const update = q$3(() => {
      if (!referenceRef.current || !floatingRef.current) {
        return;
      }
      const config = {
        placement,
        strategy,
        middleware: latestMiddleware
      };
      if (platformRef.current) {
        config.platform = platformRef.current;
      }
      computePosition(referenceRef.current, floatingRef.current, config).then((data2) => {
        const fullData = {
          ...data2,
          // The floating element's position may be recomputed while it's closed
          // but still mounted (such as when transitioning out). To ensure
          // `isPositioned` will be `false` initially on the next open, avoid
          // setting it to `true` when `open === false` (must be specified).
          isPositioned: openRef.current !== false
        };
        if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
          dataRef.current = fullData;
          En(() => {
            setData(fullData);
          });
        }
      });
    }, [latestMiddleware, placement, strategy, platformRef, openRef]);
    index$1(() => {
      if (open === false && dataRef.current.isPositioned) {
        dataRef.current.isPositioned = false;
        setData((data2) => ({
          ...data2,
          isPositioned: false
        }));
      }
    }, [open]);
    const isMountedRef = A$3(false);
    index$1(() => {
      isMountedRef.current = true;
      return () => {
        isMountedRef.current = false;
      };
    }, []);
    index$1(() => {
      if (referenceEl) referenceRef.current = referenceEl;
      if (floatingEl) floatingRef.current = floatingEl;
      if (referenceEl && floatingEl) {
        if (whileElementsMountedRef.current) {
          return whileElementsMountedRef.current(referenceEl, floatingEl, update);
        }
        update();
      }
    }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
    const refs = T$5(() => ({
      reference: referenceRef,
      floating: floatingRef,
      setReference,
      setFloating
    }), [setReference, setFloating]);
    const elements = T$5(() => ({
      reference: referenceEl,
      floating: floatingEl
    }), [referenceEl, floatingEl]);
    const floatingStyles = T$5(() => {
      const initialStyles = {
        position: strategy,
        left: 0,
        top: 0
      };
      if (!elements.floating) {
        return initialStyles;
      }
      const x2 = roundByDPR(elements.floating, data.x);
      const y2 = roundByDPR(elements.floating, data.y);
      if (transform) {
        return {
          ...initialStyles,
          transform: "translate(" + x2 + "px, " + y2 + "px)",
          ...getDPR(elements.floating) >= 1.5 && {
            willChange: "transform"
          }
        };
      }
      return {
        position: strategy,
        left: x2,
        top: y2
      };
    }, [strategy, transform, elements.floating, data.x, data.y]);
    return T$5(() => ({
      ...data,
      update,
      refs,
      elements,
      floatingStyles
    }), [data, update, refs, elements, floatingStyles]);
  }
  const offset = (options, deps) => ({
    ...offset$1(options),
    options: [options, deps]
  });
  const shift = (options, deps) => ({
    ...shift$1(options),
    options: [options, deps]
  });
  const flip = (options, deps) => ({
    ...flip$1(options),
    options: [options, deps]
  });
  const size = (options, deps) => ({
    ...size$1(options),
    options: [options, deps]
  });
  const SafeReact = {
    ...t$4
  };
  const useInsertionEffect = SafeReact.useInsertionEffect;
  const useSafeInsertionEffect = useInsertionEffect || ((fn2) => fn2());
  function useEffectEvent(callback) {
    const ref = A$3(() => {
      if (process.env.NODE_ENV !== "production") {
        throw new Error("Cannot call an event handler while rendering.");
      }
    });
    useSafeInsertionEffect(() => {
      ref.current = callback;
    });
    return q$3(function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return ref.current == null ? void 0 : ref.current(...args);
    }, []);
  }
  var index = typeof document !== "undefined" ? _$3 : y$6;
  let serverHandoffComplete = false;
  let count = 0;
  const genId = () => (
    // Ensure the id is unique with multiple independent versions of Floating UI
    // on <React 18
    "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++
  );
  function useFloatingId() {
    const [id, setId] = d$4(() => serverHandoffComplete ? genId() : void 0);
    index(() => {
      if (id == null) {
        setId(genId());
      }
    }, []);
    y$6(() => {
      serverHandoffComplete = true;
    }, []);
    return id;
  }
  const useReactId = SafeReact.useId;
  const useId = useReactId || useFloatingId;
  let devMessageSet;
  if (process.env.NODE_ENV !== "production") {
    devMessageSet = /* @__PURE__ */ new Set();
  }
  function warn() {
    var _devMessageSet;
    for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
      messages[_key] = arguments[_key];
    }
    const message = "Floating UI: " + messages.join(" ");
    if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
      var _devMessageSet2;
      (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
      console.warn(message);
    }
  }
  function error() {
    var _devMessageSet3;
    for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      messages[_key2] = arguments[_key2];
    }
    const message = "Floating UI: " + messages.join(" ");
    if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
      var _devMessageSet4;
      (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
      console.error(message);
    }
  }
  function createPubSub() {
    const map = /* @__PURE__ */ new Map();
    return {
      emit(event, data) {
        var _map$get;
        (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
      },
      on(event, listener) {
        map.set(event, [...map.get(event) || [], listener]);
      },
      off(event, listener) {
        var _map$get2;
        map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l2) => l2 !== listener)) || []);
      }
    };
  }
  const FloatingNodeContext = /* @__PURE__ */ K$3(null);
  const FloatingTreeContext = /* @__PURE__ */ K$3(null);
  const useFloatingParentNodeId = () => {
    var _React$useContext;
    return ((_React$useContext = x$4(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
  };
  const useFloatingTree = () => x$4(FloatingTreeContext);
  const FOCUSABLE_ATTRIBUTE = "data-floating-ui-focusable";
  function useFloatingRootContext(options) {
    const {
      open = false,
      onOpenChange: onOpenChangeProp,
      elements: elementsProp
    } = options;
    const floatingId = useId();
    const dataRef = A$3({});
    const [events] = d$4(() => createPubSub());
    const nested = useFloatingParentNodeId() != null;
    if (process.env.NODE_ENV !== "production") {
      const optionDomReference = elementsProp.reference;
      if (optionDomReference && !isElement(optionDomReference)) {
        error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
      }
    }
    const [positionReference, setPositionReference] = d$4(elementsProp.reference);
    const onOpenChange = useEffectEvent((open2, event, reason) => {
      dataRef.current.openEvent = open2 ? event : void 0;
      events.emit("openchange", {
        open: open2,
        event,
        reason,
        nested
      });
      onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
    });
    const refs = T$5(() => ({
      setPositionReference
    }), []);
    const elements = T$5(() => ({
      reference: positionReference || elementsProp.reference || null,
      floating: elementsProp.floating || null,
      domReference: elementsProp.reference
    }), [positionReference, elementsProp.reference, elementsProp.floating]);
    return T$5(() => ({
      dataRef,
      open,
      onOpenChange,
      elements,
      events,
      floatingId,
      refs
    }), [open, onOpenChange, elements, events, floatingId, refs]);
  }
  function useFloating(options) {
    if (options === void 0) {
      options = {};
    }
    const {
      nodeId
    } = options;
    const internalRootContext = useFloatingRootContext({
      ...options,
      elements: {
        reference: null,
        floating: null,
        ...options.elements
      }
    });
    const rootContext = options.rootContext || internalRootContext;
    const computedElements = rootContext.elements;
    const [_domReference, setDomReference] = d$4(null);
    const [positionReference, _setPositionReference] = d$4(null);
    const optionDomReference = computedElements == null ? void 0 : computedElements.domReference;
    const domReference = optionDomReference || _domReference;
    const domReferenceRef = A$3(null);
    const tree = useFloatingTree();
    index(() => {
      if (domReference) {
        domReferenceRef.current = domReference;
      }
    }, [domReference]);
    const position = useFloating$1({
      ...options,
      elements: {
        ...computedElements,
        ...positionReference && {
          reference: positionReference
        }
      }
    });
    const setPositionReference = q$3((node) => {
      const computedPositionReference = isElement(node) ? {
        getBoundingClientRect: () => node.getBoundingClientRect(),
        contextElement: node
      } : node;
      _setPositionReference(computedPositionReference);
      position.refs.setReference(computedPositionReference);
    }, [position.refs]);
    const setReference = q$3((node) => {
      if (isElement(node) || node === null) {
        domReferenceRef.current = node;
        setDomReference(node);
      }
      if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
      // `null` to support `positionReference` + an unstable `reference`
      // callback ref.
      node !== null && !isElement(node)) {
        position.refs.setReference(node);
      }
    }, [position.refs]);
    const refs = T$5(() => ({
      ...position.refs,
      setReference,
      setPositionReference,
      domReference: domReferenceRef
    }), [position.refs, setReference, setPositionReference]);
    const elements = T$5(() => ({
      ...position.elements,
      domReference
    }), [position.elements, domReference]);
    const context = T$5(() => ({
      ...position,
      ...rootContext,
      refs,
      elements,
      nodeId
    }), [position, refs, elements, nodeId, rootContext]);
    index(() => {
      rootContext.dataRef.current.floatingContext = context;
      const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
      if (node) {
        node.context = context;
      }
    });
    return T$5(() => ({
      ...position,
      context,
      refs,
      elements
    }), [position, refs, elements, context]);
  }
  const ACTIVE_KEY = "active";
  const SELECTED_KEY = "selected";
  function mergeProps(userProps, propsList, elementKey) {
    const map = /* @__PURE__ */ new Map();
    const isItem = elementKey === "item";
    let domUserProps = userProps;
    if (isItem && userProps) {
      const {
        [ACTIVE_KEY]: _2,
        [SELECTED_KEY]: __,
        ...validProps
      } = userProps;
      domUserProps = validProps;
    }
    return {
      ...elementKey === "floating" && {
        tabIndex: -1,
        [FOCUSABLE_ATTRIBUTE]: ""
      },
      ...domUserProps,
      ...propsList.map((value) => {
        const propsOrGetProps = value ? value[elementKey] : null;
        if (typeof propsOrGetProps === "function") {
          return userProps ? propsOrGetProps(userProps) : null;
        }
        return propsOrGetProps;
      }).concat(userProps).reduce((acc, props) => {
        if (!props) {
          return acc;
        }
        Object.entries(props).forEach((_ref) => {
          let [key, value] = _ref;
          if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
            return;
          }
          if (key.indexOf("on") === 0) {
            if (!map.has(key)) {
              map.set(key, []);
            }
            if (typeof value === "function") {
              var _map$get;
              (_map$get = map.get(key)) == null || _map$get.push(value);
              acc[key] = function() {
                var _map$get2;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn2) => fn2(...args)).find((val) => val !== void 0);
              };
            }
          } else {
            acc[key] = value;
          }
        });
        return acc;
      }, {})
    };
  }
  function useInteractions(propsList) {
    if (propsList === void 0) {
      propsList = [];
    }
    const referenceDeps = propsList.map((key) => key == null ? void 0 : key.reference);
    const floatingDeps = propsList.map((key) => key == null ? void 0 : key.floating);
    const itemDeps = propsList.map((key) => key == null ? void 0 : key.item);
    const getReferenceProps = q$3(
      (userProps) => mergeProps(userProps, propsList, "reference"),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      referenceDeps
    );
    const getFloatingProps = q$3(
      (userProps) => mergeProps(userProps, propsList, "floating"),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      floatingDeps
    );
    const getItemProps = q$3(
      (userProps) => mergeProps(userProps, propsList, "item"),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      itemDeps
    );
    return T$5(() => ({
      getReferenceProps,
      getFloatingProps,
      getItemProps
    }), [getReferenceProps, getFloatingProps, getItemProps]);
  }
  function getArgsWithCustomFloatingHeight(state, height) {
    return {
      ...state,
      rects: {
        ...state.rects,
        floating: {
          ...state.rects.floating,
          height
        }
      }
    };
  }
  const inner = (props) => ({
    name: "inner",
    options: props,
    async fn(state) {
      const {
        listRef,
        overflowRef,
        onFallbackChange,
        offset: innerOffset = 0,
        index: index2 = 0,
        minItemsVisible = 4,
        referenceOverflowThreshold = 0,
        scrollRef,
        ...detectOverflowOptions
      } = evaluate(props, state);
      const {
        rects,
        elements: {
          floating
        }
      } = state;
      const item = listRef.current[index2];
      const scrollEl = (scrollRef == null ? void 0 : scrollRef.current) || floating;
      const clientTop = floating.clientTop || scrollEl.clientTop;
      const floatingIsBordered = floating.clientTop !== 0;
      const scrollElIsBordered = scrollEl.clientTop !== 0;
      const floatingIsScrollEl = floating === scrollEl;
      if (process.env.NODE_ENV !== "production") {
        if (!state.placement.startsWith("bottom")) {
          warn('`placement` side must be "bottom" when using the `inner`', "middleware.");
        }
      }
      if (!item) {
        return {};
      }
      const nextArgs = {
        ...state,
        ...await offset(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
      };
      const overflow = await detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, scrollEl.scrollHeight + clientTop + floating.clientTop), detectOverflowOptions);
      const refOverflow = await detectOverflow(nextArgs, {
        ...detectOverflowOptions,
        elementContext: "reference"
      });
      const diffY = max(0, overflow.top);
      const nextY = nextArgs.y + diffY;
      const isScrollable = scrollEl.scrollHeight > scrollEl.clientHeight;
      const rounder = isScrollable ? (v2) => v2 : round;
      const maxHeight = rounder(max(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - max(0, overflow.bottom)));
      scrollEl.style.maxHeight = maxHeight + "px";
      scrollEl.scrollTop = diffY;
      if (onFallbackChange) {
        const shouldFallback = scrollEl.offsetHeight < item.offsetHeight * min(minItemsVisible, listRef.current.length) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
        En(() => onFallbackChange(shouldFallback));
      }
      if (overflowRef) {
        overflowRef.current = await detectOverflow(getArgsWithCustomFloatingHeight({
          ...nextArgs,
          y: nextY
        }, scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions);
      }
      return {
        y: nextY
      };
    }
  });
  function useInnerOffset(context, props) {
    const {
      open,
      elements
    } = context;
    const {
      enabled = true,
      overflowRef,
      scrollRef,
      onChange: unstable_onChange
    } = props;
    const onChange = useEffectEvent(unstable_onChange);
    const controlledScrollingRef = A$3(false);
    const prevScrollTopRef = A$3(null);
    const initialOverflowRef = A$3(null);
    y$6(() => {
      if (!enabled) return;
      function onWheel(e2) {
        if (e2.ctrlKey || !el || overflowRef.current == null) {
          return;
        }
        const dY = e2.deltaY;
        const isAtTop = overflowRef.current.top >= -0.5;
        const isAtBottom = overflowRef.current.bottom >= -0.5;
        const remainingScroll = el.scrollHeight - el.clientHeight;
        const sign = dY < 0 ? -1 : 1;
        const method = dY < 0 ? "max" : "min";
        if (el.scrollHeight <= el.clientHeight) {
          return;
        }
        if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
          e2.preventDefault();
          En(() => {
            onChange((d2) => d2 + Math[method](dY, remainingScroll * sign));
          });
        } else if (/firefox/i.test(getUserAgent())) {
          el.scrollTop += dY;
        }
      }
      const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
      if (open && el) {
        el.addEventListener("wheel", onWheel);
        requestAnimationFrame(() => {
          prevScrollTopRef.current = el.scrollTop;
          if (overflowRef.current != null) {
            initialOverflowRef.current = {
              ...overflowRef.current
            };
          }
        });
        return () => {
          prevScrollTopRef.current = null;
          initialOverflowRef.current = null;
          el.removeEventListener("wheel", onWheel);
        };
      }
    }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
    const floating = T$5(() => ({
      onKeyDown() {
        controlledScrollingRef.current = true;
      },
      onWheel() {
        controlledScrollingRef.current = false;
      },
      onPointerMove() {
        controlledScrollingRef.current = false;
      },
      onScroll() {
        const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
        if (!overflowRef.current || !el || !controlledScrollingRef.current) {
          return;
        }
        if (prevScrollTopRef.current !== null) {
          const scrollDiff = el.scrollTop - prevScrollTopRef.current;
          if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
            En(() => onChange((d2) => d2 + scrollDiff));
          }
        }
        requestAnimationFrame(() => {
          prevScrollTopRef.current = el.scrollTop;
        });
      }
    }), [elements.floating, onChange, overflowRef, scrollRef]);
    return T$5(() => enabled ? {
      floating
    } : {}, [enabled, floating]);
  }
  let y$2 = K$3({ styles: void 0, setReference: () => {
  }, setFloating: () => {
  }, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
  y$2.displayName = "FloatingContext";
  let H$1 = K$3(null);
  H$1.displayName = "PlacementContext";
  function xe(e2) {
    return T$5(() => e2 ? typeof e2 == "string" ? { to: e2 } : e2 : null, [e2]);
  }
  function ye() {
    return x$4(y$2).setReference;
  }
  function Fe() {
    return x$4(y$2).getReferenceProps;
  }
  function be() {
    let { getFloatingProps: e2, slot: t2 } = x$4(y$2);
    return q$3((...n2) => Object.assign({}, e2(...n2), { "data-anchor": t2.anchor }), [e2, t2]);
  }
  function Re(e2 = null) {
    e2 === false && (e2 = null), typeof e2 == "string" && (e2 = { to: e2 });
    let t2 = x$4(H$1), n2 = T$5(() => e2, [JSON.stringify(e2, (r2, o2) => {
      var u2;
      return (u2 = o2 == null ? void 0 : o2.outerHTML) != null ? u2 : o2;
    })]);
    n$3(() => {
      t2 == null || t2(n2 != null ? n2 : null);
    }, [t2, n2]);
    let l2 = x$4(y$2);
    return T$5(() => [l2.setFloating, e2 ? l2.styles : {}], [l2.setFloating, e2, l2.styles]);
  }
  let q$1 = 4;
  function Me({ children: e2, enabled: t2 = true }) {
    let [n2, l2] = d$4(null), [r2, o2] = d$4(0), u2 = A$3(null), [f2, s2] = d$4(null);
    pe(f2);
    let i2 = t2 && n2 !== null && f2 !== null, { to: F2 = "bottom", gap: E2 = 0, offset: v2 = 0, padding: c2 = 0, inner: P2 } = ce(n2, f2), [a2, p2 = "center"] = F2.split(" ");
    n$3(() => {
      i2 && o2(0);
    }, [i2]);
    let { refs: b2, floatingStyles: w2, context: g2 } = useFloating({ open: i2, placement: a2 === "selection" ? p2 === "center" ? "bottom" : `bottom-${p2}` : p2 === "center" ? `${a2}` : `${a2}-${p2}`, strategy: "absolute", transform: false, middleware: [offset({ mainAxis: a2 === "selection" ? 0 : E2, crossAxis: v2 }), shift({ padding: c2 }), a2 !== "selection" && flip({ padding: c2 }), a2 === "selection" && P2 ? inner({ ...P2, padding: c2, overflowRef: u2, offset: r2, minItemsVisible: q$1, referenceOverflowThreshold: c2, onFallbackChange(h2) {
      var O2, W2;
      if (!h2) return;
      let d2 = g2.elements.floating;
      if (!d2) return;
      let T2 = parseFloat(getComputedStyle(d2).scrollPaddingBottom) || 0, $2 = Math.min(q$1, d2.childElementCount), L2 = 0, N2 = 0;
      for (let m2 of (W2 = (O2 = g2.elements.floating) == null ? void 0 : O2.childNodes) != null ? W2 : []) if (m2 instanceof HTMLElement) {
        let x2 = m2.offsetTop, k2 = x2 + m2.clientHeight + T2, S2 = d2.scrollTop, U2 = S2 + d2.clientHeight;
        if (x2 >= S2 && k2 <= U2) $2--;
        else {
          N2 = Math.max(0, Math.min(k2, U2) - Math.max(x2, S2)), L2 = m2.clientHeight;
          break;
        }
      }
      $2 >= 1 && o2((m2) => {
        let x2 = L2 * $2 - N2 + T2;
        return m2 >= x2 ? m2 : x2;
      });
    } }) : null, size({ padding: c2, apply({ availableWidth: h2, availableHeight: d2, elements: T2 }) {
      Object.assign(T2.floating.style, { overflow: "auto", maxWidth: `${h2}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${d2}px)` });
    } })].filter(Boolean), whileElementsMounted: autoUpdate }), [I2 = a2, B2 = p2] = g2.placement.split("-");
    a2 === "selection" && (I2 = "selection");
    let G2 = T$5(() => ({ anchor: [I2, B2].filter(Boolean).join(" ") }), [I2, B2]), K2 = useInnerOffset(g2, { overflowRef: u2, onChange: o2 }), { getReferenceProps: Q2, getFloatingProps: X2 } = useInteractions([K2]), Y2 = o$4((h2) => {
      s2(h2), b2.setFloating(h2);
    });
    return _$4(H$1.Provider, { value: l2 }, _$4(y$2.Provider, { value: { setFloating: Y2, setReference: b2.setReference, styles: w2, getReferenceProps: Q2, getFloatingProps: X2, slot: G2 } }, e2));
  }
  function pe(e2) {
    n$3(() => {
      if (!e2) return;
      let t2 = new MutationObserver(() => {
        let n2 = window.getComputedStyle(e2).maxHeight, l2 = parseFloat(n2);
        if (isNaN(l2)) return;
        let r2 = parseInt(n2);
        isNaN(r2) || l2 !== r2 && (e2.style.maxHeight = `${Math.ceil(l2)}px`);
      });
      return t2.observe(e2, { attributes: true, attributeFilter: ["style"] }), () => {
        t2.disconnect();
      };
    }, [e2]);
  }
  function ce(e2, t2) {
    var o2, u2, f2;
    let n2 = V((o2 = e2 == null ? void 0 : e2.gap) != null ? o2 : "var(--anchor-gap, 0)", t2), l2 = V((u2 = e2 == null ? void 0 : e2.offset) != null ? u2 : "var(--anchor-offset, 0)", t2), r2 = V((f2 = e2 == null ? void 0 : e2.padding) != null ? f2 : "var(--anchor-padding, 0)", t2);
    return { ...e2, gap: n2, offset: l2, padding: r2 };
  }
  function V(e2, t2, n2 = void 0) {
    let l2 = p$2(), r2 = o$4((s2, i2) => {
      if (s2 == null) return [n2, null];
      if (typeof s2 == "number") return [s2, null];
      if (typeof s2 == "string") {
        if (!i2) return [n2, null];
        let F2 = J$2(s2, i2);
        return [F2, (E2) => {
          let v2 = D(s2);
          {
            let c2 = v2.map((P2) => window.getComputedStyle(i2).getPropertyValue(P2));
            l2.requestAnimationFrame(function P2() {
              l2.nextFrame(P2);
              let a2 = false;
              for (let [b2, w2] of v2.entries()) {
                let g2 = window.getComputedStyle(i2).getPropertyValue(w2);
                if (c2[b2] !== g2) {
                  c2[b2] = g2, a2 = true;
                  break;
                }
              }
              if (!a2) return;
              let p2 = J$2(s2, i2);
              F2 !== p2 && (E2(p2), F2 = p2);
            });
          }
          return l2.dispose;
        }];
      }
      return [n2, null];
    }), o2 = T$5(() => r2(e2, t2)[0], [e2, t2]), [u2 = o2, f2] = d$4();
    return n$3(() => {
      let [s2, i2] = r2(e2, t2);
      if (f2(s2), !!i2) return i2(f2);
    }, [e2, t2]), u2;
  }
  function D(e2) {
    let t2 = /var\((.*)\)/.exec(e2);
    if (t2) {
      let n2 = t2[1].indexOf(",");
      if (n2 === -1) return [t2[1]];
      let l2 = t2[1].slice(0, n2).trim(), r2 = t2[1].slice(n2 + 1).trim();
      return r2 ? [l2, ...D(r2)] : [l2];
    }
    return [];
  }
  function J$2(e2, t2) {
    let n2 = document.createElement("div");
    t2.appendChild(n2), n2.style.setProperty("margin-top", "0px", "important"), n2.style.setProperty("margin-top", e2, "important");
    let l2 = parseFloat(window.getComputedStyle(n2).marginTop) || 0;
    return t2.removeChild(n2), l2;
  }
  let n = K$3(null);
  n.displayName = "OpenClosedContext";
  var i$2 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i$2 || {});
  function u$2() {
    return x$4(n);
  }
  function c$3({ value: o2, children: t2 }) {
    return Rn.createElement(n.Provider, { value: o2 }, t2);
  }
  var withSelector = { exports: {} };
  var useSyncExternalStoreWithSelector_production = {};
  /**
   * @license React
   * use-sync-external-store-with-selector.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredUseSyncExternalStoreWithSelector_production;
  function requireUseSyncExternalStoreWithSelector_production() {
    if (hasRequiredUseSyncExternalStoreWithSelector_production) return useSyncExternalStoreWithSelector_production;
    hasRequiredUseSyncExternalStoreWithSelector_production = 1;
    var React = t$4;
    function is(x2, y2) {
      return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
    }
    var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    useSyncExternalStoreWithSelector_production.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
      var instRef = useRef(null);
      if (null === instRef.current) {
        var inst = { hasValue: false, value: null };
        instRef.current = inst;
      } else inst = instRef.current;
      instRef = useMemo(
        function() {
          function memoizedSelector(nextSnapshot) {
            if (!hasMemo) {
              hasMemo = true;
              memoizedSnapshot = nextSnapshot;
              nextSnapshot = selector(nextSnapshot);
              if (void 0 !== isEqual && inst.hasValue) {
                var currentSelection = inst.value;
                if (isEqual(currentSelection, nextSnapshot))
                  return memoizedSelection = currentSelection;
              }
              return memoizedSelection = nextSnapshot;
            }
            currentSelection = memoizedSelection;
            if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
            var nextSelection = selector(nextSnapshot);
            if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
              return memoizedSnapshot = nextSnapshot, currentSelection;
            memoizedSnapshot = nextSnapshot;
            return memoizedSelection = nextSelection;
          }
          var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
          return [
            function() {
              return memoizedSelector(getSnapshot());
            },
            null === maybeGetServerSnapshot ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            }
          ];
        },
        [getSnapshot, getServerSnapshot, selector, isEqual]
      );
      var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
      useEffect(
        function() {
          inst.hasValue = true;
          inst.value = value;
        },
        [value]
      );
      useDebugValue(value);
      return value;
    };
    return useSyncExternalStoreWithSelector_production;
  }
  var useSyncExternalStoreWithSelector_development = {};
  /**
   * @license React
   * use-sync-external-store-with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredUseSyncExternalStoreWithSelector_development;
  function requireUseSyncExternalStoreWithSelector_development() {
    if (hasRequiredUseSyncExternalStoreWithSelector_development) return useSyncExternalStoreWithSelector_development;
    hasRequiredUseSyncExternalStoreWithSelector_development = 1;
    "production" !== process.env.NODE_ENV && function() {
      function is(x2, y2) {
        return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React = t$4, objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
      useSyncExternalStoreWithSelector_development.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot))
                return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual]
        );
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
    return useSyncExternalStoreWithSelector_development;
  }
  var hasRequiredWithSelector;
  function requireWithSelector() {
    if (hasRequiredWithSelector) return withSelector.exports;
    hasRequiredWithSelector = 1;
    if (process.env.NODE_ENV === "production") {
      withSelector.exports = requireUseSyncExternalStoreWithSelector_production();
    } else {
      withSelector.exports = requireUseSyncExternalStoreWithSelector_development();
    }
    return withSelector.exports;
  }
  var withSelectorExports = requireWithSelector();
  var f$1 = (t2, e2, r2) => {
    if (!e2.has(t2)) throw TypeError("Cannot " + r2);
  };
  var a$3 = (t2, e2, r2) => (f$1(t2, e2, "read from private field"), r2 ? r2.call(t2) : e2.get(t2)), l$2 = (t2, e2, r2) => {
    if (e2.has(t2)) throw TypeError("Cannot add the same private member more than once");
    e2 instanceof WeakSet ? e2.add(t2) : e2.set(t2, r2);
  }, c$2 = (t2, e2, r2, n2) => (f$1(t2, e2, "write to private field"), e2.set(t2, r2), r2);
  var i$1, s$4, o$1;
  class m {
    constructor(e2) {
      l$2(this, i$1, {});
      l$2(this, s$4, new a$7(() => /* @__PURE__ */ new Set()));
      l$2(this, o$1, /* @__PURE__ */ new Set());
      c$2(this, i$1, e2);
    }
    get state() {
      return a$3(this, i$1);
    }
    subscribe(e2, r2) {
      let n2 = { selector: e2, callback: r2, current: e2(a$3(this, i$1)) };
      return a$3(this, o$1).add(n2), () => {
        a$3(this, o$1).delete(n2);
      };
    }
    on(e2, r2) {
      return a$3(this, s$4).get(e2).add(r2), () => {
        a$3(this, s$4).get(e2).delete(r2);
      };
    }
    send(e2) {
      c$2(this, i$1, this.reduce(a$3(this, i$1), e2));
      for (let r2 of a$3(this, o$1)) {
        let n2 = r2.selector(a$3(this, i$1));
        h$1(r2.current, n2) || (r2.current = n2, r2.callback(n2));
      }
      for (let r2 of a$3(this, s$4).get(e2.type)) r2(a$3(this, i$1), e2);
    }
  }
  i$1 = /* @__PURE__ */ new WeakMap(), s$4 = /* @__PURE__ */ new WeakMap(), o$1 = /* @__PURE__ */ new WeakMap();
  function h$1(t2, e2) {
    return Object.is(t2, e2) ? true : typeof t2 != "object" || t2 === null || typeof e2 != "object" || e2 === null ? false : Array.isArray(t2) && Array.isArray(e2) ? t2.length !== e2.length ? false : u$1(t2[Symbol.iterator](), e2[Symbol.iterator]()) : t2 instanceof Map && e2 instanceof Map || t2 instanceof Set && e2 instanceof Set ? t2.size !== e2.size ? false : u$1(t2.entries(), e2.entries()) : S$2(t2) && S$2(e2) ? u$1(Object.entries(t2)[Symbol.iterator](), Object.entries(e2)[Symbol.iterator]()) : false;
  }
  function u$1(t2, e2) {
    do {
      let r2 = t2.next(), n2 = e2.next();
      if (r2.done && n2.done) return true;
      if (r2.done || n2.done || !Object.is(r2.value, n2.value)) return false;
    } while (true);
  }
  function S$2(t2) {
    if (Object.prototype.toString.call(t2) !== "[object Object]") return false;
    let e2 = Object.getPrototypeOf(t2);
    return e2 === null || Object.getPrototypeOf(e2) === null;
  }
  function g$1(t2) {
    let [e2, r2] = t2(), n2 = o$5();
    return (...b2) => {
      e2(...b2), n2.dispose(), n2.microTask(r2);
    };
  }
  function S$1(e2, n2, r2 = h$1) {
    return withSelectorExports.useSyncExternalStoreWithSelector(o$4((i2) => e2.subscribe(s$3, i2)), o$4(() => e2.state), o$4(() => e2.state), o$4(n2), r2);
  }
  function s$3(e2) {
    return e2;
  }
  function u(l2) {
    throw new Error("Unexpected object: " + l2);
  }
  var c$1 = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c$1 || {});
  function f(l2, n2) {
    let t2 = n2.resolveItems();
    if (t2.length <= 0) return null;
    let r2 = n2.resolveActiveIndex(), s2 = r2 != null ? r2 : -1;
    switch (l2.focus) {
      case 0: {
        for (let e2 = 0; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
        return r2;
      }
      case 1: {
        s2 === -1 && (s2 = t2.length);
        for (let e2 = s2 - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
        return r2;
      }
      case 2: {
        for (let e2 = s2 + 1; e2 < t2.length; ++e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
        return r2;
      }
      case 3: {
        for (let e2 = t2.length - 1; e2 >= 0; --e2) if (!n2.resolveDisabled(t2[e2], e2, t2)) return e2;
        return r2;
      }
      case 4: {
        for (let e2 = 0; e2 < t2.length; ++e2) if (n2.resolveId(t2[e2], e2, t2) === l2.id) return e2;
        return r2;
      }
      case 5:
        return null;
      default:
        u(l2);
    }
  }
  function c(t2) {
    let r2 = o$4(t2), e2 = A$3(false);
    y$6(() => (e2.current = false, () => {
      e2.current = true, t$3(() => {
        e2.current && r2();
      });
    }), [r2]);
  }
  function s$2() {
    let r2 = typeof document == "undefined";
    return "useSyncExternalStore" in t$4 ? ((o2) => o2.useSyncExternalStore)(t$4)(() => () => {
    }, () => false, () => !r2) : false;
  }
  function l$1() {
    let r2 = s$2(), [e2, n2] = d$4(s$7.isHandoffComplete);
    return e2 && s$7.isHandoffComplete === false && n2(false), y$6(() => {
      e2 !== true && n2(true);
    }, [e2]), y$6(() => s$7.handoff(), []), r2 ? false : e2;
  }
  let e = K$3(false);
  function a$2() {
    return x$4(e);
  }
  function j(t2) {
    let o2 = a$2(), n2 = x$4(b$1), [r2, u2] = d$4(() => {
      var s2, a2;
      if (!o2 && n2 !== null) return (s2 = n2.current) != null ? s2 : null;
      if (s$7.isServer) return null;
      let e2 = t2 == null ? void 0 : t2.getElementById("stagewise-toolbar-portal-root");
      if (e2) return e2;
      if (t2 === null) return null;
      let l2 = t2.createElement("div");
      return l2.setAttribute("id", "stagewise-toolbar-portal-root"), l2.style.pointerEvents = "auto", ((a2 = t2.querySelector("stagewise-companion-anchor")) != null ? a2 : t2.body).appendChild(l2);
    });
    return y$6(() => {
      var l2;
      if (r2 === null) return;
      const e2 = (l2 = t2 == null ? void 0 : t2.querySelector("stagewise-companion-anchor")) != null ? l2 : t2 == null ? void 0 : t2.body;
      e2 != null && e2.contains(r2) || e2 == null || e2.appendChild(r2);
    }, [r2, t2]), y$6(() => {
      o2 || n2 !== null && u2(n2.current);
    }, [n2, u2, o2]), r2;
  }
  let M$1 = k$3, I = K$1(function(o2, n2) {
    let { ownerDocument: r2 = null, ...u2 } = o2, e2 = A$3(null), l2 = y$5(T$3((i2) => {
      e2.current = i2;
    }), n2), R2 = n$1(e2), s2 = r2 != null ? r2 : R2, a2 = j(s2), [p2] = d$4(() => {
      var i2;
      return s$7.isServer ? null : (i2 = s2 == null ? void 0 : s2.createElement("div")) != null ? i2 : null;
    }), f2 = x$4(y$1), H2 = l$1();
    n$3(() => {
      !a2 || !p2 || a2.contains(p2) || (p2.setAttribute("data-headlessui-portal", ""), a2.appendChild(p2));
    }, [a2, p2]), n$3(() => {
      if (p2 && f2) return f2.register(p2);
    }, [f2, p2]), c(() => {
      var i2;
      !a2 || !p2 || (p2 instanceof Node && a2.contains(p2) && a2.removeChild(p2), a2.childNodes.length <= 0 && ((i2 = a2.parentElement) == null || i2.removeChild(a2)));
    });
    let h2 = L$2();
    return H2 ? !a2 || !p2 ? null : $$1(h2({ ourProps: { ref: l2 }, theirProps: u2, slot: {}, defaultTag: M$1, name: "Portal" }), p2) : null;
  });
  function q(t2, o2) {
    let n2 = y$5(o2), { enabled: r2 = true, ownerDocument: u2, ...e2 } = t2, l2 = L$2();
    return r2 ? Rn.createElement(I, { ...e2, ownerDocument: u2, ref: n2 }) : l2({ ourProps: { ref: n2 }, theirProps: e2, slot: {}, defaultTag: M$1, name: "Portal" });
  }
  let J$1 = k$3, b$1 = K$3(null);
  function X(t2, o2) {
    let { target: n2, ...r2 } = t2, e2 = { ref: y$5(o2) }, l2 = L$2();
    return Rn.createElement(b$1.Provider, { value: n2 }, l2({ ourProps: e2, theirProps: r2, defaultTag: J$1, name: "Popover.Group" }));
  }
  let y$1 = K$3(null);
  let k = K$1(q), B = K$1(X), oe = Object.assign(k, { Group: B });
  function s$1(n2, t2) {
    let e2 = A$3({ left: 0, top: 0 });
    if (n$3(() => {
      if (!t2) return;
      let r2 = t2.getBoundingClientRect();
      r2 && (e2.current = r2);
    }, [n2, t2]), t2 == null || !n2 || t2 === document.activeElement) return false;
    let o2 = t2.getBoundingClientRect();
    return o2.top !== e2.current.top || o2.left !== e2.current.left;
  }
  let a$1 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
  function o(e2) {
    var r2, i2;
    let n2 = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(true);
    if (!(t2 instanceof HTMLElement)) return n2;
    let u2 = false;
    for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) f2.remove(), u2 = true;
    let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
    return a$1.test(l2) && (l2 = l2.replace(a$1, "")), l2;
  }
  function g(e2) {
    let n2 = e2.getAttribute("aria-label");
    if (typeof n2 == "string") return n2.trim();
    let t2 = e2.getAttribute("aria-labelledby");
    if (t2) {
      let u2 = t2.split(" ").map((l2) => {
        let r2 = document.getElementById(l2);
        if (r2) {
          let i2 = r2.getAttribute("aria-label");
          return typeof i2 == "string" ? i2.trim() : o(r2).trim();
        }
        return null;
      }).filter(Boolean);
      if (u2.length > 0) return u2.join(", ");
    }
    return o(e2).trim();
  }
  function s(c2) {
    let t2 = A$3(""), r2 = A$3("");
    return o$4(() => {
      let e2 = c2.current;
      if (!e2) return "";
      let u2 = e2.innerText;
      if (t2.current === u2) return r2.current;
      let n2 = g(e2).trim().toLowerCase();
      return t2.current = u2, r2.current = n2, n2;
    });
  }
  var h = Object.defineProperty;
  var y = (e2, n2, t2) => n2 in e2 ? h(e2, n2, { enumerable: true, configurable: true, writable: true, value: t2 }) : e2[n2] = t2;
  var v = (e2, n2, t2) => (y(e2, typeof n2 != "symbol" ? n2 + "" : n2, t2), t2);
  var M = ((t2) => (t2[t2.Open = 0] = "Open", t2[t2.Closed = 1] = "Closed", t2))(M || {}), T = ((t2) => (t2[t2.Pointer = 0] = "Pointer", t2[t2.Other = 1] = "Other", t2))(T || {}), b = ((i2) => (i2[i2.OpenMenu = 0] = "OpenMenu", i2[i2.CloseMenu = 1] = "CloseMenu", i2[i2.GoToItem = 2] = "GoToItem", i2[i2.Search = 3] = "Search", i2[i2.ClearSearch = 4] = "ClearSearch", i2[i2.RegisterItems = 5] = "RegisterItems", i2[i2.UnregisterItems = 6] = "UnregisterItems", i2[i2.SetButtonElement = 7] = "SetButtonElement", i2[i2.SetItemsElement = 8] = "SetItemsElement", i2[i2.SortItems = 9] = "SortItems", i2))(b || {});
  function S(e2, n2 = (t2) => t2) {
    let t2 = e2.activeItemIndex !== null ? e2.items[e2.activeItemIndex] : null, r2 = _(n2(e2.items.slice()), (u2) => u2.dataRef.current.domRef.current), l2 = t2 ? r2.indexOf(t2) : null;
    return l2 === -1 && (l2 = null), { items: r2, activeItemIndex: l2 };
  }
  let F = { [1](e2) {
    return e2.menuState === 1 ? e2 : { ...e2, activeItemIndex: null, pendingFocus: { focus: c$1.Nothing }, menuState: 1 };
  }, [0](e2, n2) {
    return e2.menuState === 0 ? e2 : { ...e2, __demoMode: false, pendingFocus: n2.focus, menuState: 0 };
  }, [2]: (e2, n2) => {
    var u2, m2, d2, a2, I2;
    if (e2.menuState === 1) return e2;
    let t2 = { ...e2, searchQuery: "", activationTrigger: (u2 = n2.trigger) != null ? u2 : 1, __demoMode: false };
    if (n2.focus === c$1.Nothing) return { ...t2, activeItemIndex: null };
    if (n2.focus === c$1.Specific) return { ...t2, activeItemIndex: e2.items.findIndex((i2) => i2.id === n2.id) };
    if (n2.focus === c$1.Previous) {
      let i2 = e2.activeItemIndex;
      if (i2 !== null) {
        let g2 = e2.items[i2].dataRef.current.domRef, o2 = f(n2, { resolveItems: () => e2.items, resolveActiveIndex: () => e2.activeItemIndex, resolveId: (s2) => s2.id, resolveDisabled: (s2) => s2.dataRef.current.disabled });
        if (o2 !== null) {
          let s2 = e2.items[o2].dataRef.current.domRef;
          if (((m2 = g2.current) == null ? void 0 : m2.previousElementSibling) === s2.current || ((d2 = s2.current) == null ? void 0 : d2.previousElementSibling) === null) return { ...t2, activeItemIndex: o2 };
        }
      }
    } else if (n2.focus === c$1.Next) {
      let i2 = e2.activeItemIndex;
      if (i2 !== null) {
        let g2 = e2.items[i2].dataRef.current.domRef, o2 = f(n2, { resolveItems: () => e2.items, resolveActiveIndex: () => e2.activeItemIndex, resolveId: (s2) => s2.id, resolveDisabled: (s2) => s2.dataRef.current.disabled });
        if (o2 !== null) {
          let s2 = e2.items[o2].dataRef.current.domRef;
          if (((a2 = g2.current) == null ? void 0 : a2.nextElementSibling) === s2.current || ((I2 = s2.current) == null ? void 0 : I2.nextElementSibling) === null) return { ...t2, activeItemIndex: o2 };
        }
      }
    }
    let r2 = S(e2), l2 = f(n2, { resolveItems: () => r2.items, resolveActiveIndex: () => r2.activeItemIndex, resolveId: (i2) => i2.id, resolveDisabled: (i2) => i2.dataRef.current.disabled });
    return { ...t2, ...r2, activeItemIndex: l2 };
  }, [3]: (e2, n2) => {
    let r2 = e2.searchQuery !== "" ? 0 : 1, l2 = e2.searchQuery + n2.value.toLowerCase(), m2 = (e2.activeItemIndex !== null ? e2.items.slice(e2.activeItemIndex + r2).concat(e2.items.slice(0, e2.activeItemIndex + r2)) : e2.items).find((a2) => {
      var I2;
      return ((I2 = a2.dataRef.current.textValue) == null ? void 0 : I2.startsWith(l2)) && !a2.dataRef.current.disabled;
    }), d2 = m2 ? e2.items.indexOf(m2) : -1;
    return d2 === -1 || d2 === e2.activeItemIndex ? { ...e2, searchQuery: l2 } : { ...e2, searchQuery: l2, activeItemIndex: d2, activationTrigger: 1 };
  }, [4](e2) {
    return e2.searchQuery === "" ? e2 : { ...e2, searchQuery: "", searchActiveItemIndex: null };
  }, [5]: (e2, n2) => {
    let t2 = e2.items.concat(n2.items.map((l2) => l2)), r2 = e2.activeItemIndex;
    return e2.pendingFocus.focus !== c$1.Nothing && (r2 = f(e2.pendingFocus, { resolveItems: () => t2, resolveActiveIndex: () => e2.activeItemIndex, resolveId: (l2) => l2.id, resolveDisabled: (l2) => l2.dataRef.current.disabled })), { ...e2, items: t2, activeItemIndex: r2, pendingFocus: { focus: c$1.Nothing }, pendingShouldSort: true };
  }, [6]: (e2, n2) => {
    let t2 = e2.items, r2 = [], l2 = new Set(n2.items);
    for (let [u2, m2] of t2.entries()) if (l2.has(m2.id) && (r2.push(u2), l2.delete(m2.id), l2.size === 0)) break;
    if (r2.length > 0) {
      t2 = t2.slice();
      for (let u2 of r2.reverse()) t2.splice(u2, 1);
    }
    return { ...e2, items: t2, activationTrigger: 1 };
  }, [7]: (e2, n2) => e2.buttonElement === n2.element ? e2 : { ...e2, buttonElement: n2.element }, [8]: (e2, n2) => e2.itemsElement === n2.element ? e2 : { ...e2, itemsElement: n2.element }, [9]: (e2) => e2.pendingShouldSort ? { ...e2, ...S(e2), pendingShouldSort: false } : e2 };
  class x extends m {
    constructor(t2) {
      super(t2);
      v(this, "actions", { registerItem: g$1(() => {
        let t3 = [], r2 = /* @__PURE__ */ new Set();
        return [(l2, u2) => {
          r2.has(u2) || (r2.add(u2), t3.push({ id: l2, dataRef: u2 }));
        }, () => (r2.clear(), this.send({ type: 5, items: t3.splice(0) }))];
      }), unregisterItem: g$1(() => {
        let t3 = [];
        return [(r2) => t3.push(r2), () => this.send({ type: 6, items: t3.splice(0) })];
      }) });
      v(this, "selectors", { activeDescendantId(t3) {
        var u2;
        let r2 = t3.activeItemIndex, l2 = t3.items;
        return r2 === null || (u2 = l2[r2]) == null ? void 0 : u2.id;
      }, isActive(t3, r2) {
        var m2;
        let l2 = t3.activeItemIndex, u2 = t3.items;
        return l2 !== null ? ((m2 = u2[l2]) == null ? void 0 : m2.id) === r2 : false;
      }, shouldScrollIntoView(t3, r2) {
        return t3.__demoMode || t3.menuState !== 0 || t3.activationTrigger === 0 ? false : this.isActive(t3, r2);
      } });
      this.on(5, () => {
        requestAnimationFrame(() => {
          this.send({ type: 9 });
        });
      });
    }
    static new({ __demoMode: t2 = false } = {}) {
      return new x({ __demoMode: t2, menuState: t2 ? 0 : 1, buttonElement: null, itemsElement: null, items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1, pendingShouldSort: false, pendingFocus: { focus: c$1.Nothing } });
    }
    reduce(t2, r2) {
      return u$7(r2.type, F, t2, r2);
    }
  }
  const a = K$3(null);
  function l(e2) {
    let n2 = x$4(a);
    if (n2 === null) {
      let t2 = new Error(`<${e2} /> is missing a parent <Menu /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(t2, i), t2;
    }
    return n2;
  }
  function i({ __demoMode: e2 = false } = {}) {
    return T$5(() => x.new({ __demoMode: e2 }), []);
  }
  let ze = k$3;
  function Qe(T2, E2) {
    let { __demoMode: i$12 = false, ...a$12 } = T2, n2 = i({ __demoMode: i$12 }), [s2, o2, P2] = S$1(n2, (p2) => [p2.menuState, p2.itemsElement, p2.buttonElement]), c2 = y$5(E2), _2 = s2 === M.Open;
    R$1(_2, [P2, o2], (p2, F2) => {
      var A$12;
      n2.send({ type: b.CloseMenu }), A(F2, h$2.Loose) || (p2.preventDefault(), (A$12 = n2.state.buttonElement) == null || A$12.focus());
    });
    let t2 = o$4(() => {
      n2.send({ type: b.CloseMenu });
    }), R2 = T$5(() => ({ open: s2 === M.Open, close: t2 }), [s2, t2]), I2 = { ref: c2 }, g2 = L$2();
    return Rn.createElement(Me, null, Rn.createElement(a.Provider, { value: n2 }, Rn.createElement(c$3, { value: u$7(s2, { [M.Open]: i$2.Open, [M.Closed]: i$2.Closed }) }, g2({ ourProps: I2, theirProps: a$12, slot: R2, defaultTag: ze, name: "Menu" }))));
  }
  let Ye = "button";
  function Ze(T$12, E2) {
    let i2 = l("Menu.Button"), a2 = g$3(), { id: n2 = `headlessui-menu-button-${a2}`, disabled: s2 = false, autoFocus: o2 = false, ...P2 } = T$12, c2 = A$3(null), _2 = Fe(), t2 = y$5(E2, c2, ye(), o$4((l2) => i2.send({ type: b.SetButtonElement, element: l2 }))), R2 = o$4((l2) => {
      switch (l2.key) {
        case o$3.Space:
        case o$3.Enter:
        case o$3.ArrowDown:
          l2.preventDefault(), l2.stopPropagation(), i2.send({ type: b.OpenMenu, focus: { focus: c$1.First } });
          break;
        case o$3.ArrowUp:
          l2.preventDefault(), l2.stopPropagation(), i2.send({ type: b.OpenMenu, focus: { focus: c$1.Last } });
          break;
      }
    }), I2 = o$4((l2) => {
      switch (l2.key) {
        case o$3.Space:
          l2.preventDefault();
          break;
      }
    }), [g2, p2] = S$1(i2, (l2) => [l2.menuState, l2.itemsElement]), F2 = o$4((l2) => {
      var H2;
      if (l2.button === 0) {
        if (r$1(l2.currentTarget)) return l2.preventDefault();
        s2 || (g2 === M.Open ? (En(() => i2.send({ type: b.CloseMenu })), (H2 = c2.current) == null || H2.focus({ preventScroll: true })) : (l2.preventDefault(), i2.send({ type: b.OpenMenu, focus: { focus: c$1.Nothing }, trigger: T.Pointer })));
      }
    }), { isFocusVisible: A2, focusProps: f2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: o2 }), { isHovered: M$12, hoverProps: L2 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: s2 }), { pressed: S2, pressProps: O2 } = w$2({ disabled: s2 }), x2 = T$5(() => ({ open: g2 === M.Open, active: S2 || g2 === M.Open, disabled: s2, hover: M$12, focus: A2, autofocus: o2 }), [g2, M$12, A2, S2, s2, o2]), U2 = _$2(_2(), { ref: t2, id: n2, type: e$1(T$12, c2.current), "aria-haspopup": "menu", "aria-controls": p2 == null ? void 0 : p2.id, "aria-expanded": g2 === M.Open, disabled: s2 || void 0, autoFocus: o2, onKeyDown: R2, onKeyUp: I2, onMouseDown: F2 }, f2, L2, O2);
    return L$2()({ ourProps: U2, theirProps: P2, slot: x2, defaultTag: Ye, name: "Menu.Button" });
  }
  let et = "div", tt = O$1.RenderStrategy | O$1.Static;
  function ot(T2, E2) {
    let i2 = g$3(), { id: a2 = `headlessui-menu-items-${i2}`, anchor: n2, portal: s2 = false, modal: o2 = true, transition: P2 = false, ...c2 } = T2, _2 = xe(n2), t2 = l("Menu.Items"), [R$12, I2] = Re(_2), g2 = be(), [p2, F2] = d$4(null), A2 = y$5(E2, _2 ? R$12 : null, o$4((e2) => t2.send({ type: b.SetItemsElement, element: e2 })), F2), [f2, M$12] = S$1(t2, (e2) => [e2.menuState, e2.buttonElement]), L2 = n$1(M$12), S2 = n$1(p2);
    _2 && (s2 = true);
    let O2 = u$2(), [x2, U2] = x$1(P2, p2, O2 !== null ? (O2 & i$2.Open) === i$2.Open : f2 === M.Open);
    m$2(x2, M$12, () => {
      t2.send({ type: b.CloseMenu });
    });
    let G$12 = S$1(t2, (e2) => e2.__demoMode), l$12 = G$12 ? false : o2 && f2 === M.Open;
    f$2(l$12, S2);
    let H2 = G$12 ? false : o2 && f2 === M.Open;
    y$4(H2, { allowed: q$3(() => [M$12, p2], [M$12, p2]) });
    let u2 = f2 !== M.Open, ae = s$1(u2, M$12) ? false : x2;
    y$6(() => {
      let e2 = p2;
      e2 && f2 === M.Open && e2 !== (S2 == null ? void 0 : S2.activeElement) && e2.focus({ preventScroll: true });
    }, [f2, p2, S2]), F$1(f2 === M.Open, { container: p2, accept(e2) {
      return e2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : e2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
    }, walk(e2) {
      e2.setAttribute("role", "none");
    } });
    let q2 = p$2(), se = o$4((e2) => {
      var N2, z2, Q2;
      switch (q2.dispose(), e2.key) {
        case o$3.Space:
          if (t2.state.searchQuery !== "") return e2.preventDefault(), e2.stopPropagation(), t2.send({ type: b.Search, value: e2.key });
        case o$3.Enter:
          if (e2.preventDefault(), e2.stopPropagation(), t2.state.activeItemIndex !== null) {
            let { dataRef: de } = t2.state.items[t2.state.activeItemIndex];
            (z2 = (N2 = de.current) == null ? void 0 : N2.domRef.current) == null || z2.click();
          }
          t2.send({ type: b.CloseMenu }), G(t2.state.buttonElement);
          break;
        case o$3.ArrowDown:
          return e2.preventDefault(), e2.stopPropagation(), t2.send({ type: b.GoToItem, focus: c$1.Next });
        case o$3.ArrowUp:
          return e2.preventDefault(), e2.stopPropagation(), t2.send({ type: b.GoToItem, focus: c$1.Previous });
        case o$3.Home:
        case o$3.PageUp:
          return e2.preventDefault(), e2.stopPropagation(), t2.send({ type: b.GoToItem, focus: c$1.First });
        case o$3.End:
        case o$3.PageDown:
          return e2.preventDefault(), e2.stopPropagation(), t2.send({ type: b.GoToItem, focus: c$1.Last });
        case o$3.Escape:
          e2.preventDefault(), e2.stopPropagation(), En(() => t2.send({ type: b.CloseMenu })), (Q2 = t2.state.buttonElement) == null || Q2.focus({ preventScroll: true });
          break;
        case o$3.Tab:
          e2.preventDefault(), e2.stopPropagation(), En(() => t2.send({ type: b.CloseMenu })), j$2(t2.state.buttonElement, e2.shiftKey ? F$2.Previous : F$2.Next);
          break;
        default:
          e2.key.length === 1 && (t2.send({ type: b.Search, value: e2.key }), q2.setTimeout(() => t2.send({ type: b.ClearSearch }), 350));
          break;
      }
    }), le = o$4((e2) => {
      switch (e2.key) {
        case o$3.Space:
          e2.preventDefault();
          break;
      }
    }), pe2 = T$5(() => ({ open: f2 === M.Open }), [f2]), ie = _$2(_2 ? g2() : {}, { "aria-activedescendant": S$1(t2, t2.selectors.activeDescendantId), "aria-labelledby": S$1(t2, (e2) => {
      var N2;
      return (N2 = e2.buttonElement) == null ? void 0 : N2.id;
    }), id: a2, onKeyDown: se, onKeyUp: le, role: "menu", tabIndex: f2 === M.Open ? 0 : void 0, ref: A2, style: { ...c2.style, ...I2, "--button-width": d$2(M$12, true).width }, ...R(U2) }), ue = L$2();
    return Rn.createElement(oe, { enabled: s2 ? T2.static || x2 : false, ownerDocument: L2 }, ue({ ourProps: ie, theirProps: c2, slot: pe2, defaultTag: et, features: tt, visible: ae, name: "Menu.Items" }));
  }
  let nt = k$3;
  function rt(T$12, E2) {
    let i2 = g$3(), { id: a2 = `headlessui-menu-item-${i2}`, disabled: n2 = false, ...s$12 } = T$12, o2 = l("Menu.Item"), P2 = S$1(o2, (u2) => o2.selectors.isActive(u2, a2)), c2 = A$3(null), _2 = y$5(E2, c2), t2 = S$1(o2, (u2) => o2.selectors.shouldScrollIntoView(u2, a2));
    n$3(() => {
      if (t2) return o$5().requestAnimationFrame(() => {
        var u2, J2;
        (J2 = (u2 = c2.current) == null ? void 0 : u2.scrollIntoView) == null || J2.call(u2, { block: "nearest" });
      });
    }, [t2, c2]);
    let R2 = s(c2), I2 = A$3({ disabled: n2, domRef: c2, get textValue() {
      return R2();
    } });
    n$3(() => {
      I2.current.disabled = n2;
    }, [I2, n2]), n$3(() => (o2.actions.registerItem(a2, I2), () => o2.actions.unregisterItem(a2)), [I2, a2]);
    let g2 = o$4(() => {
      o2.send({ type: b.CloseMenu });
    }), p2 = o$4((u2) => {
      if (n2) return u2.preventDefault();
      o2.send({ type: b.CloseMenu }), G(o2.state.buttonElement);
    }), F2 = o$4(() => {
      if (n2) return o2.send({ type: b.GoToItem, focus: c$1.Nothing });
      o2.send({ type: b.GoToItem, focus: c$1.Specific, id: a2 });
    }), A2 = u$3(), f2 = o$4((u2) => {
      A2.update(u2), !n2 && (P2 || o2.send({ type: b.GoToItem, focus: c$1.Specific, id: a2, trigger: T.Pointer }));
    }), M2 = o$4((u2) => {
      A2.wasMoved(u2) && (n2 || P2 || o2.send({ type: b.GoToItem, focus: c$1.Specific, id: a2, trigger: T.Pointer }));
    }), L2 = o$4((u2) => {
      A2.wasMoved(u2) && (n2 || P2 && o2.send({ type: b.GoToItem, focus: c$1.Nothing }));
    }), [S2, O2] = K(), [x2, U2] = w$1(), G$12 = T$5(() => ({ active: P2, focus: P2, disabled: n2, close: g2 }), [P2, n2, g2]), l$12 = { id: a2, ref: _2, role: "menuitem", tabIndex: n2 === true ? void 0 : -1, "aria-disabled": n2 === true ? true : void 0, "aria-labelledby": S2, "aria-describedby": x2, disabled: void 0, onClick: p2, onFocus: F2, onPointerEnter: f2, onMouseEnter: f2, onPointerMove: M2, onMouseMove: M2, onPointerLeave: L2, onMouseLeave: L2 }, H2 = L$2();
    return Rn.createElement(O2, null, Rn.createElement(U2, null, H2({ ourProps: l$12, theirProps: s$12, slot: G$12, defaultTag: nt, name: "Menu.Item" })));
  }
  let at = "div";
  function st(T2, E2) {
    let [i2, a2] = K(), n2 = T2, s2 = { ref: E2, "aria-labelledby": i2, role: "group" }, o2 = L$2();
    return Rn.createElement(a2, null, o2({ ourProps: s2, theirProps: n2, slot: {}, defaultTag: at, name: "Menu.Section" }));
  }
  let lt = "header";
  function pt(T2, E2) {
    let i2 = g$3(), { id: a2 = `headlessui-menu-heading-${i2}`, ...n2 } = T2, s2 = P$1();
    n$3(() => s2.register(a2), [a2, s2.register]);
    let o2 = { id: a2, ref: E2, role: "presentation", ...s2.props };
    return L$2()({ ourProps: o2, theirProps: n2, slot: {}, defaultTag: lt, name: "Menu.Heading" });
  }
  let it = "div";
  function ut(T2, E2) {
    let i2 = T2, a2 = { ref: E2, role: "separator" };
    return L$2()({ ourProps: a2, theirProps: i2, slot: {}, defaultTag: it, name: "Menu.Separator" });
  }
  let dt = K$1(Qe), mt = K$1(Ze), Tt = K$1(ot), ft = K$1(rt), ct = K$1(st), yt = K$1(pt), Et = K$1(ut), to = Object.assign(dt, { Button: mt, Items: Tt, Item: ft, Section: ct, Heading: yt, Separator: Et });
  let L = "textarea";
  function H(s2, l2) {
    let i2 = g$3(), d2 = u$6(), n2 = a$9(), { id: p2 = d2 || `headlessui-textarea-${i2}`, disabled: e2 = n2 || false, autoFocus: r2 = false, invalid: a2 = false, ...T2 } = s2, f2 = I$2(), m2 = U$1(), { isFocused: o2, focusProps: u2 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r2 }), { isHovered: t2, hoverProps: b2 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e2 }), y2 = _$2({ ref: l2, id: p2, "aria-labelledby": f2, "aria-describedby": m2, "aria-invalid": a2 ? "true" : void 0, disabled: e2 || void 0, autoFocus: r2 }, u2, b2), x2 = T$5(() => ({ disabled: e2, invalid: a2, hover: t2, focus: o2, autofocus: r2 }), [e2, a2, t2, o2, r2]);
    return L$2()({ ourProps: y2, theirProps: T2, slot: x2, defaultTag: L, name: "Textarea" });
  }
  let J = K$1(H);
  /**
   * @license lucide-react v0.503.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  const toCamelCase = (string) => string.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
  );
  const toPascalCase = (string) => {
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  };
  const mergeClasses = (...classes) => classes.filter((className, index2, array) => {
    return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index2;
  }).join(" ").trim();
  const hasA11yProp = (props) => {
    for (const prop in props) {
      if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
        return true;
      }
    }
  };
  /**
   * @license lucide-react v0.503.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  /**
   * @license lucide-react v0.503.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Icon = D$1(
    ({
      color = "currentColor",
      size: size2 = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    }, ref) => {
      return _$4(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size2,
          height: size2,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size2) : strokeWidth,
          className: mergeClasses("lucide", className),
          ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => _$4(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );
  /**
   * @license lucide-react v0.503.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const createLucideIcon = (iconName, iconNode) => {
    const Component = D$1(
      ({ className, ...props }, ref) => _$4(Icon, {
        ref,
        iconNode,
        className: mergeClasses(
          `lucide-${toKebabCase(toPascalCase(iconName))}`,
          `lucide-${iconName}`,
          className
        ),
        ...props
      })
    );
    Component.displayName = toPascalCase(iconName);
    return Component;
  };
  /**
   * @license lucide-react v0.503.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$6 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
  const ChevronDown = createLucideIcon("chevron-down", __iconNode$6);
  /**
   * @license lucide-react v0.503.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$5 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
  const ChevronUp = createLucideIcon("chevron-up", __iconNode$5);
  /**
   * @license lucide-react v0.503.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$4 = [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
    ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
  ];
  const Ellipsis = createLucideIcon("ellipsis", __iconNode$4);
  /**
   * @license lucide-react v0.503.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$3 = [
    ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
    ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
    ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
    ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
  ];
  const Minimize2 = createLucideIcon("minimize-2", __iconNode$3);
  /**
   * @license lucide-react v0.503.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$2 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ];
  const Plus = createLucideIcon("plus", __iconNode$2);
  /**
   * @license lucide-react v0.503.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode$1 = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3"
      }
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
  ];
  const Send = createLucideIcon("send", __iconNode$1);
  /**
   * @license lucide-react v0.503.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const __iconNode = [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
  ];
  const Trash2 = createLucideIcon("trash-2", __iconNode);
  const ChatArea = M$3(() => {
    const { chatAreaState } = useChatState();
    if (chatAreaState === "hidden") return null;
    return /* @__PURE__ */ u$9(ChatAreaBox, { children: [
      /* @__PURE__ */ u$9(ChatAreaResizeBar, {}),
      chatAreaState === "compact" && /* @__PURE__ */ u$9(ChatAreaCompact, {}),
      chatAreaState === "expanded" && /* @__PURE__ */ u$9(ChatAreaExpanded, {})
    ] });
  });
  const ChatAreaBox = M$3(({ children }) => /* @__PURE__ */ u$9("div", { className: "h-auto w-full overflow-x-hidden", children }));
  const ChatAreaResizeBar = M$3(() => {
    const { chatAreaState, setChatAreaState, stopPromptCreation } = useChatState();
    const handleResizeBarClick = q$3(() => {
      setChatAreaState(chatAreaState === "compact" ? "expanded" : "compact");
    }, [chatAreaState, setChatAreaState]);
    const handleCloseChatArea = q$3(() => {
      stopPromptCreation();
      setChatAreaState("hidden");
    }, [setChatAreaState, stopPromptCreation]);
    return /* @__PURE__ */ u$9("div", { className: "flex w-full flex-row items-center justify-center rounded-t-3xl px-3 py-1", children: [
      /* @__PURE__ */ u$9(
        H$3,
        {
          className: "size-5 bg-transparent text-muted-foreground/30 transition-colors duration-100 hover:text-muted-foreground",
          onClick: handleResizeBarClick,
          children: chatAreaState === "compact" ? /* @__PURE__ */ u$9(ChevronUp, { className: "size-5" }) : /* @__PURE__ */ u$9(ChevronDown, { className: "size-5" })
        }
      ),
      /* @__PURE__ */ u$9(
        H$3,
        {
          className: "absolute right-2 flex h-fit w-fit flex-row items-center gap-1 bg-transparent p-1 text-xs opacity-50 transition-all duration-100 hover:opacity-100",
          onClick: handleCloseChatArea,
          children: [
            "Close menu",
            /* @__PURE__ */ u$9("div", { className: "rounded-md bg-muted-foreground px-0.5 py-0 text-xs text-zinc-50", children: "esc" })
          ]
        }
      )
    ] });
  });
  const ChatAreaCompact = M$3(() => /* @__PURE__ */ u$9("div", { className: "flex w-full flex-col gap-1 p-3", children: /* @__PURE__ */ u$9("span", { className: "text-sm text-zinc-950/50", children: "This is the compact chat area... Showing just the last response from the assistant." }) }));
  const ChatAreaExpanded = M$3(() => {
    const { chats, currentChatId, setCurrentChat, createChat } = useChatState();
    const currentChat = chats.find((chat) => chat.id === currentChatId);
    const hasNewChat = chats.some((chat) => chat.id === "new_chat");
    const handleCreateChat = q$3(() => {
      createChat();
    }, [createChat]);
    const handleSetCurrentChat = q$3(
      (chatId) => {
        setCurrentChat(chatId);
      },
      [setCurrentChat]
    );
    return /* @__PURE__ */ u$9("div", { className: "flex max-h-[50vh] w-full flex-col gap-3 p-3 pb-0", children: [
      /* @__PURE__ */ u$9("div", { className: "flex flex-1 flex-col gap-2 overflow-y-auto p-1", children: currentChat == null ? void 0 : currentChat.messages.map((message) => /* @__PURE__ */ u$9(
        "div",
        {
          className: `flex ${message.sender === "assistant" ? "justify-start" : "justify-end"}`,
          children: /* @__PURE__ */ u$9(
            "div",
            {
              className: `max-w-[80%] rounded-xl px-2 py-1 text-sm ${message.sender === "assistant" ? "bg-zinc-950/5 text-zinc-950" : "bg-blue-600 text-white"}`,
              children: message.content
            }
          )
        },
        message.id
      )) }),
      /* @__PURE__ */ u$9("div", { className: "flex flex-row items-center justify-start gap-2 overflow-x-auto overflow-y-visible border-border/10 border-t pt-2 pb-2", children: [
        !hasNewChat && /* @__PURE__ */ u$9(
          H$3,
          {
            className: "h-6 flex-shrink-0 rounded-full bg-zinc-950/5 px-2 font-semibold text-foreground text-xs",
            onClick: handleCreateChat,
            children: /* @__PURE__ */ u$9(Plus, { className: "size-3" })
          }
        ),
        chats.map((chat) => /* @__PURE__ */ u$9(
          H$3,
          {
            className: cn(
              "h-5 max-w-48 flex-shrink-0 overflow-hidden truncate rounded-full bg-zinc-950/5 px-2 text-muted-foreground text-xs",
              chat.id === currentChatId && "bg-white/60 text-zinc-950 shadow-blue-600/50 shadow-sm"
            ),
            onClick: () => handleSetCurrentChat(chat.id),
            children: chat.title || "New chat"
          },
          chat.id
        ))
      ] })
    ] });
  });
  var LIBVERSION = "2.0.3", UA_MAX_LENGTH = 500, USER_AGENT = "user-agent", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", UA_BROWSER = "browser", UA_CPU = "cpu", UA_DEVICE = "device", UA_ENGINE = "engine", UA_OS = "os", UA_RESULT = "result", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", MAJOR = "major", MODEL = "model", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", XR = "xr", EMBEDDED = "embedded", INAPP = "inapp", BRANDS = "brands", FORMFACTORS = "formFactors", FULLVERLIST = "fullVersionList", PLATFORM = "platform", PLATFORMVER = "platformVersion", BITNESS = "bitness", CH_HEADER = "sec-ch-ua", CH_HEADER_FULL_VER_LIST = CH_HEADER + "-full-version-list", CH_HEADER_ARCH = CH_HEADER + "-arch", CH_HEADER_BITNESS = CH_HEADER + "-" + BITNESS, CH_HEADER_FORM_FACTORS = CH_HEADER + "-form-factors", CH_HEADER_MOBILE = CH_HEADER + "-" + MOBILE, CH_HEADER_MODEL = CH_HEADER + "-" + MODEL, CH_HEADER_PLATFORM = CH_HEADER + "-" + PLATFORM, CH_HEADER_PLATFORM_VER = CH_HEADER_PLATFORM + "-version", CH_ALL_VALUES = [BRANDS, FULLVERLIST, MOBILE, MODEL, PLATFORM, PLATFORMVER, ARCHITECTURE, FORMFACTORS, BITNESS], AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", GOOGLE = "Google", HUAWEI = "Huawei", LENOVO = "Lenovo", HONOR = "Honor", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", NVIDIA = "Nvidia", ONEPLUS = "OnePlus", OPPO = "OPPO", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", CHROME = "Chrome", CHROMIUM = "Chromium", CHROMECAST = "Chromecast", EDGE = "Edge", FIREFOX = "Firefox", OPERA = "Opera", FACEBOOK = "Facebook", SOGOU = "Sogou", PREFIX_MOBILE = "Mobile ", SUFFIX_BROWSER = " Browser", WINDOWS = "Windows";
  var isWindow = typeof window !== UNDEF_TYPE, NAVIGATOR = isWindow && window.navigator ? window.navigator : void 0, NAVIGATOR_UADATA = NAVIGATOR && NAVIGATOR.userAgentData ? NAVIGATOR.userAgentData : void 0;
  var extend = function(defaultRgx, extensions) {
    var mergedRgx = {};
    var extraRgx = extensions;
    if (!isExtensions(extensions)) {
      extraRgx = {};
      for (var i2 in extensions) {
        for (var j2 in extensions[i2]) {
          extraRgx[j2] = extensions[i2][j2].concat(extraRgx[j2] ? extraRgx[j2] : []);
        }
      }
    }
    for (var k2 in defaultRgx) {
      mergedRgx[k2] = extraRgx[k2] && extraRgx[k2].length % 2 === 0 ? extraRgx[k2].concat(defaultRgx[k2]) : defaultRgx[k2];
    }
    return mergedRgx;
  }, enumerize = function(arr) {
    var enums = {};
    for (var i2 = 0; i2 < arr.length; i2++) {
      enums[arr[i2].toUpperCase()] = arr[i2];
    }
    return enums;
  }, has = function(str1, str2) {
    if (typeof str1 === OBJ_TYPE && str1.length > 0) {
      for (var i2 in str1) {
        if (lowerize(str1[i2]) == lowerize(str2)) return true;
      }
      return false;
    }
    return isString(str1) ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
  }, isExtensions = function(obj, deep) {
    for (var prop in obj) {
      return /^(browser|cpu|device|engine|os)$/.test(prop) || (deep ? isExtensions(obj[prop]) : false);
    }
  }, isString = function(val) {
    return typeof val === STR_TYPE;
  }, itemListToArray = function(header) {
    if (!header) return void 0;
    var arr = [];
    var tokens = strip(/\\?\"/g, header).split(",");
    for (var i2 = 0; i2 < tokens.length; i2++) {
      if (tokens[i2].indexOf(";") > -1) {
        var token = trim(tokens[i2]).split(";v=");
        arr[i2] = { brand: token[0], version: token[1] };
      } else {
        arr[i2] = trim(tokens[i2]);
      }
    }
    return arr;
  }, lowerize = function(str) {
    return isString(str) ? str.toLowerCase() : str;
  }, majorize = function(version) {
    return isString(version) ? strip(/[^\d\.]/g, version).split(".")[0] : void 0;
  }, setProps = function(arr) {
    for (var i2 in arr) {
      var propName = arr[i2];
      if (typeof propName == OBJ_TYPE && propName.length == 2) {
        this[propName[0]] = propName[1];
      } else {
        this[propName] = void 0;
      }
    }
    return this;
  }, strip = function(pattern, str) {
    return isString(str) ? str.replace(pattern, EMPTY) : str;
  }, stripQuotes = function(str) {
    return strip(/\\?\"/g, str);
  }, trim = function(str, len) {
    if (isString(str)) {
      str = strip(/^\s\s*/, str);
      return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
    }
  };
  var rgxMapper = function(ua, arrays) {
    if (!ua || !arrays) return;
    var i2 = 0, j2, k2, p2, q2, matches, match;
    while (i2 < arrays.length && !matches) {
      var regex = arrays[i2], props = arrays[i2 + 1];
      j2 = k2 = 0;
      while (j2 < regex.length && !matches) {
        if (!regex[j2]) {
          break;
        }
        matches = regex[j2++].exec(ua);
        if (!!matches) {
          for (p2 = 0; p2 < props.length; p2++) {
            match = matches[++k2];
            q2 = props[p2];
            if (typeof q2 === OBJ_TYPE && q2.length > 0) {
              if (q2.length === 2) {
                if (typeof q2[1] == FUNC_TYPE) {
                  this[q2[0]] = q2[1].call(this, match);
                } else {
                  this[q2[0]] = q2[1];
                }
              } else if (q2.length === 3) {
                if (typeof q2[1] === FUNC_TYPE && !(q2[1].exec && q2[1].test)) {
                  this[q2[0]] = match ? q2[1].call(this, match, q2[2]) : void 0;
                } else {
                  this[q2[0]] = match ? match.replace(q2[1], q2[2]) : void 0;
                }
              } else if (q2.length === 4) {
                this[q2[0]] = match ? q2[3].call(this, match.replace(q2[1], q2[2])) : void 0;
              }
            } else {
              this[q2] = match ? match : void 0;
            }
          }
        }
      }
      i2 += 2;
    }
  }, strMapper = function(str, map) {
    for (var i2 in map) {
      if (typeof map[i2] === OBJ_TYPE && map[i2].length > 0) {
        for (var j2 = 0; j2 < map[i2].length; j2++) {
          if (has(map[i2][j2], str)) {
            return i2 === UNKNOWN ? void 0 : i2;
          }
        }
      } else if (has(map[i2], str)) {
        return i2 === UNKNOWN ? void 0 : i2;
      }
    }
    return map.hasOwnProperty("*") ? map["*"] : str;
  };
  var windowsVersionMap = {
    "ME": "4.90",
    "NT 3.11": "NT3.51",
    "NT 4.0": "NT4.0",
    "2000": "NT 5.0",
    "XP": ["NT 5.1", "NT 5.2"],
    "Vista": "NT 6.0",
    "7": "NT 6.1",
    "8": "NT 6.2",
    "8.1": "NT 6.3",
    "10": ["NT 6.4", "NT 10.0"],
    "RT": "ARM"
  }, formFactorsMap = {
    "embedded": "Automotive",
    "mobile": "Mobile",
    "tablet": ["Tablet", "EInk"],
    "smarttv": "TV",
    "wearable": "Watch",
    "xr": ["VR", "XR"],
    "?": ["Desktop", "Unknown"],
    "*": void 0
  };
  var defaultRegexes = {
    browser: [
      [
        // Most common regardless engine
        /\b(?:crmo|crios)\/([\w\.]+)/i
        // Chrome for Android/iOS
      ],
      [VERSION, [NAME, PREFIX_MOBILE + "Chrome"]],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
        // Microsoft Edge
      ],
      [VERSION, [NAME, "Edge"]],
      [
        // Presto based
        /(opera mini)\/([-\w\.]+)/i,
        // Opera Mini
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        // Opera Mobi/Tablet
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
        // Opera
      ],
      [NAME, VERSION],
      [
        /opios[\/ ]+([\w\.]+)/i
        // Opera mini on iphone >= 8.0
      ],
      [VERSION, [NAME, OPERA + " Mini"]],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
        // Opera GX
      ],
      [VERSION, [NAME, OPERA + " GX"]],
      [
        /\bopr\/([\w\.]+)/i
        // Opera Webkit
      ],
      [VERSION, [NAME, OPERA]],
      [
        // Mixed
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
        // Baidu
      ],
      [VERSION, [NAME, "Baidu"]],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
        // Maxthon
      ],
      [VERSION, [NAME, "Maxthon"]],
      [
        /(kindle)\/([\w\.]+)/i,
        // Kindle
        /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
        // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
        // Trident based
        /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
        // Avant/IEMobile/SlimBrowser/SlimBoat/Slimjet
        /(?:ms|\()(ie) ([\w\.]+)/i,
        // Internet Explorer
        // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon/LG Browser/Otter/qutebrowser/Dooble
        /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,
        // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
        /(heytap|ovi|115|surf)browser\/([\d\.]+)/i,
        // HeyTap/Ovi/115/Surf
        /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i
        // Ecosia/Weibo
      ],
      [NAME, VERSION],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
        // Quark
      ],
      [VERSION, [NAME, "Quark"]],
      [
        /\bddg\/([\w\.]+)/i
        // DuckDuckGo
      ],
      [VERSION, [NAME, "DuckDuckGo"]],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
        // UCBrowser
      ],
      [VERSION, [NAME, "UCBrowser"]],
      [
        /microm.+\bqbcore\/([\w\.]+)/i,
        // WeChat Desktop for Windows Built-in Browser
        /\bqbcore\/([\w\.]+).+microm/i,
        /micromessenger\/([\w\.]+)/i
        // WeChat
      ],
      [VERSION, [NAME, "WeChat"]],
      [
        /konqueror\/([\w\.]+)/i
        // Konqueror
      ],
      [VERSION, [NAME, "Konqueror"]],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
        // IE11
      ],
      [VERSION, [NAME, "IE"]],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
        // Yandex
      ],
      [VERSION, [NAME, "Yandex"]],
      [
        /slbrowser\/([\w\.]+)/i
        // Smart Lenovo Browser
      ],
      [VERSION, [NAME, "Smart " + LENOVO + SUFFIX_BROWSER]],
      [
        /(avast|avg)\/([\w\.]+)/i
        // Avast/AVG Secure Browser
      ],
      [[NAME, /(.+)/, "$1 Secure" + SUFFIX_BROWSER], VERSION],
      [
        /\bfocus\/([\w\.]+)/i
        // Firefox Focus
      ],
      [VERSION, [NAME, FIREFOX + " Focus"]],
      [
        /\bopt\/([\w\.]+)/i
        // Opera Touch
      ],
      [VERSION, [NAME, OPERA + " Touch"]],
      [
        /coc_coc\w+\/([\w\.]+)/i
        // Coc Coc Browser
      ],
      [VERSION, [NAME, "Coc Coc"]],
      [
        /dolfin\/([\w\.]+)/i
        // Dolphin
      ],
      [VERSION, [NAME, "Dolphin"]],
      [
        /coast\/([\w\.]+)/i
        // Opera Coast
      ],
      [VERSION, [NAME, OPERA + " Coast"]],
      [
        /miuibrowser\/([\w\.]+)/i
        // MIUI Browser
      ],
      [VERSION, [NAME, "MIUI" + SUFFIX_BROWSER]],
      [
        /fxios\/([\w\.-]+)/i
        // Firefox for iOS
      ],
      [VERSION, [NAME, PREFIX_MOBILE + FIREFOX]],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
        // 360
      ],
      [VERSION, [NAME, "360"]],
      [
        /\b(qq)\/([\w\.]+)/i
        // QQ
      ],
      [[NAME, /(.+)/, "$1Browser"], VERSION],
      [
        /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
      ],
      [[NAME, /(.+)/, "$1" + SUFFIX_BROWSER], VERSION],
      [
        // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
        /samsungbrowser\/([\w\.]+)/i
        // Samsung Internet
      ],
      [VERSION, [NAME, SAMSUNG + " Internet"]],
      [
        /metasr[\/ ]?([\d\.]+)/i
        // Sogou Explorer
      ],
      [VERSION, [NAME, SOGOU + " Explorer"]],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
        // Sogou Mobile
      ],
      [[NAME, SOGOU + " Mobile"], VERSION],
      [
        /(electron)\/([\w\.]+) safari/i,
        // Electron-based App
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        // Tesla
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
        // QQ/2345
      ],
      [NAME, VERSION],
      [
        /(lbbrowser|rekonq)/i
        // LieBao Browser/Rekonq
      ],
      [NAME],
      [
        /ome\/([\w\.]+) \w* ?(iron) saf/i,
        // Iron
        /ome\/([\w\.]+).+qihu (360)[es]e/i
        // 360
      ],
      [VERSION, NAME],
      [
        // WebView
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
        // Facebook App for iOS & Android
      ],
      [[NAME, FACEBOOK], VERSION, [TYPE, INAPP]],
      [
        /(Klarna)\/([\w\.]+)/i,
        // Klarna Shopping Browser for iOS & Android
        /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
        // Kakao App
        /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
        // Naver InApp
        /(daum)apps[\/ ]([\w\.]+)/i,
        // Daum App
        /safari (line)\/([\w\.]+)/i,
        // Line App for iOS
        /\b(line)\/([\w\.]+)\/iab/i,
        // Line App for Android
        /(alipay)client\/([\w\.]+)/i,
        // Alipay
        /(twitter)(?:and| f.+e\/([\w\.]+))/i,
        // Twitter
        /(instagram|snapchat)[\/ ]([-\w\.]+)/i
        // Instagram/Snapchat
      ],
      [NAME, VERSION, [TYPE, INAPP]],
      [
        /\bgsa\/([\w\.]+) .*safari\//i
        // Google Search Appliance on iOS
      ],
      [VERSION, [NAME, "GSA"], [TYPE, INAPP]],
      [
        /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
        // TikTok
      ],
      [VERSION, [NAME, "TikTok"], [TYPE, INAPP]],
      [
        /\[(linkedin)app\]/i
        // LinkedIn App for iOS & Android
      ],
      [NAME, [TYPE, INAPP]],
      [
        /(chromium)[\/ ]([-\w\.]+)/i
        // Chromium
      ],
      [NAME, VERSION],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
        // Chrome Headless
      ],
      [VERSION, [NAME, CHROME + " Headless"]],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
        // Chrome WebView
      ],
      [[NAME, CHROME + " WebView"], VERSION],
      [
        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
        // Android Browser
      ],
      [VERSION, [NAME, "Android" + SUFFIX_BROWSER]],
      [
        /chrome\/([\w\.]+) mobile/i
        // Chrome Mobile
      ],
      [VERSION, [NAME, PREFIX_MOBILE + "Chrome"]],
      [
        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
        // Chrome/OmniWeb/Arora/Tizen/Nokia
      ],
      [NAME, VERSION],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
        // Safari Mobile
      ],
      [VERSION, [NAME, PREFIX_MOBILE + "Safari"]],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [[NAME, PREFIX_MOBILE + "Safari"]],
      [
        /version\/([\w\.\,]+) .*(safari)/i
        // Safari
      ],
      [VERSION, NAME],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
        // Safari < 3.0
      ],
      [NAME, [VERSION, "1"]],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [NAME, VERSION],
      [
        // Gecko based
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
        // Firefox Mobile
      ],
      [[NAME, PREFIX_MOBILE + FIREFOX], VERSION],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
        // Netscape
      ],
      [[NAME, "Netscape"], VERSION],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
        // Wolvic/LibreWolf
      ],
      [NAME, VERSION],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
        // Firefox Reality
      ],
      [VERSION, [NAME, FIREFOX + " Reality"]],
      [
        /ekiohf.+(flow)\/([\w\.]+)/i,
        // Flow
        /(swiftfox)/i,
        // Swiftfox
        /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
        // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
        /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
        // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
        /(firefox)\/([\w\.]+)/i,
        // Other Firefox-based
        /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
        // Mozilla
        // Other
        /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
        // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser/Ladybird
        /\b(links) \(([\w\.]+)/i
        // Links
      ],
      [NAME, [VERSION, /_/g, "."]],
      [
        /(cobalt)\/([\w\.]+)/i
        // Cobalt
      ],
      [NAME, [VERSION, /[^\d\.]+./, EMPTY]]
    ],
    cpu: [
      [
        /\b((amd|x|x86[-_]?|wow|win)64)\b/i
        // AMD64 (x64)
      ],
      [[ARCHITECTURE, "amd64"]],
      [
        /(ia32(?=;))/i,
        // IA32 (quicktime)
        /\b((i[346]|x)86)(pc)?\b/i
        // IA32 (x86)
      ],
      [[ARCHITECTURE, "ia32"]],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
        // ARM64
      ],
      [[ARCHITECTURE, "arm64"]],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
        // ARMHF
      ],
      [[ARCHITECTURE, "armhf"]],
      [
        // PocketPC mistakenly identified as PowerPC
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [[ARCHITECTURE, "arm"]],
      [
        /((ppc|powerpc)(64)?)( mac|;|\))/i
        // PowerPC
      ],
      [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
      [
        / sun4\w[;\)]/i
        // SPARC
      ],
      [[ARCHITECTURE, "sparc"]],
      [
        /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
        // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
      ],
      [[ARCHITECTURE, lowerize]]
    ],
    device: [
      [
        //////////////////////////
        // MOBILES & TABLETS
        /////////////////////////
        // Samsung
        /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
      ],
      [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
      [
        /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
        /samsung[- ]((?!sm-[lr])[-\w]+)/i,
        /sec-(sgh\w+)/i
      ],
      [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
      [
        // Apple
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
        // iPod/iPhone
      ],
      [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
      [
        /\((ipad);[-\w\),; ]+apple/i,
        // iPad
        /applecoremedia\/[\w\.]+ \((ipad)/i,
        /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
      ],
      [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
      [
        /(macintosh);/i
      ],
      [MODEL, [VENDOR, APPLE]],
      [
        // Sharp
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]],
      [
        // Honor
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
      ],
      [MODEL, [VENDOR, HONOR], [TYPE, TABLET]],
      [
        /honor([-\w ]+)[;\)]/i
      ],
      [MODEL, [VENDOR, HONOR], [TYPE, MOBILE]],
      [
        // Huawei
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
      [
        /(?:huawei)([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
      ],
      [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
      [
        // Xiaomi
        /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
        /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
        // Mi Pad tablets
      ],
      [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]],
      [
        /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
        // Xiaomi POCO
        /\b; (\w+) build\/hm\1/i,
        // Xiaomi Hongmi 'numeric' models
        /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
        // Xiaomi Hongmi
        /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
        // Xiaomi Redmi
        /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
        // Xiaomi Redmi 'numeric' models
        /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
        // Xiaomi Mi
        / ([\w ]+) miui\/v?\d/i
      ],
      [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]],
      [
        // OPPO
        /; (\w+) bui.+ oppo/i,
        /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
      ],
      [MODEL, [VENDOR, OPPO], [TYPE, MOBILE]],
      [
        /\b(opd2(\d{3}a?))(?: bui|\))/i
      ],
      [MODEL, [VENDOR, strMapper, { "OnePlus": ["304", "403", "203"], "*": OPPO }], [TYPE, TABLET]],
      [
        // BLU Vivo Series
        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      ],
      [MODEL, [VENDOR, "BLU"], [TYPE, MOBILE]],
      [
        // Vivo
        /; vivo (\w+)(?: bui|\))/i,
        /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
      ],
      [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
      [
        // Realme
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
      ],
      [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
      [
        // Motorola
        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
        /\bmot(?:orola)?[- ](\w*)/i,
        /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
      ],
      [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
      [
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
      [
        // LG
        /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [MODEL, [VENDOR, LG], [TYPE, TABLET]],
      [
        /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
        /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch))(\w+)/i,
        /\blg-?([\d\w]+) bui/i
      ],
      [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
      [
        // Lenovo
        /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
        /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
      ],
      [MODEL, [VENDOR, LENOVO], [TYPE, TABLET]],
      [
        // Nokia
        /(nokia) (t[12][01])/i
      ],
      [VENDOR, MODEL, [TYPE, TABLET]],
      [
        /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
        /nokia[-_ ]?(([-\w\. ]*))/i
      ],
      [[MODEL, /_/g, " "], [TYPE, MOBILE], [VENDOR, "Nokia"]],
      [
        // Google
        /(pixel (c|tablet))\b/i
        // Google Pixel C/Tablet
      ],
      [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
      [
        /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
        // Google Pixel
      ],
      [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
      [
        // Sony
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
      [
        /sony tablet [ps]/i,
        /\b(?:sony)?sgp\w+(?: bui|\))/i
      ],
      [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]],
      [
        // OnePlus
        / (kb2005|in20[12]5|be20[12][59])\b/i,
        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
      ],
      [MODEL, [VENDOR, ONEPLUS], [TYPE, MOBILE]],
      [
        // Amazon
        /(alexa)webm/i,
        /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
        // Kindle Fire without Silk / Echo Show
        /(kf[a-z]+)( bui|\)).+silk\//i
        // Kindle Fire HD
      ],
      [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
      [
        /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
        // Fire Phone
      ],
      [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]],
      [
        // BlackBerry
        /(playbook);[-\w\),; ]+(rim)/i
        // BlackBerry PlayBook
      ],
      [MODEL, VENDOR, [TYPE, TABLET]],
      [
        /\b((?:bb[a-f]|st[hv])100-\d)/i,
        /\(bb10; (\w+)/i
        // BlackBerry 10
      ],
      [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
      [
        // Asus
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
      ],
      [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
      ],
      [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
      [
        // HTC
        /(nexus 9)/i
        // HTC Nexus 9
      ],
      [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
      [
        /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
        // HTC
        // ZTE
        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
        /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
        // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
      ],
      [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
      [
        // TCL
        /tcl (xess p17aa)/i,
        /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [MODEL, [VENDOR, "TCL"], [TYPE, TABLET]],
      [
        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [MODEL, [VENDOR, "TCL"], [TYPE, MOBILE]],
      [
        // itel
        /(itel) ((\w+))/i
      ],
      [[VENDOR, lowerize], MODEL, [TYPE, strMapper, { "tablet": ["p10001l", "w7001"], "*": "mobile" }]],
      [
        // Acer
        /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
      ],
      [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
      [
        // Meizu
        /droid.+; (m[1-5] note) bui/i,
        /\bmz-([-\w]{2,})/i
      ],
      [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
      [
        // Ulefone
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
      ],
      [MODEL, [VENDOR, "Ulefone"], [TYPE, MOBILE]],
      [
        // Energizer
        /; (energy ?\w+)(?: bui|\))/i,
        /; energizer ([\w ]+)(?: bui|\))/i
      ],
      [MODEL, [VENDOR, "Energizer"], [TYPE, MOBILE]],
      [
        // Cat
        /; cat (b35);/i,
        /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
      ],
      [MODEL, [VENDOR, "Cat"], [TYPE, MOBILE]],
      [
        // Smartfren
        /((?:new )?andromax[\w- ]+)(?: bui|\))/i
      ],
      [MODEL, [VENDOR, "Smartfren"], [TYPE, MOBILE]],
      [
        // Nothing
        /droid.+; (a(?:015|06[35]|142p?))/i
      ],
      [MODEL, [VENDOR, "Nothing"], [TYPE, MOBILE]],
      [
        // Archos
        /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
        /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
      ],
      [MODEL, [VENDOR, "Archos"], [TYPE, TABLET]],
      [
        /archos ([\w ]+)( b|\))/i,
        /; (ac[3-6]\d\w{2,8})( b|\))/i
      ],
      [MODEL, [VENDOR, "Archos"], [TYPE, MOBILE]],
      [
        // MIXED
        /(imo) (tab \w+)/i,
        // IMO
        /(infinix) (x1101b?)/i
        // Infinix XPad
      ],
      [VENDOR, MODEL, [TYPE, TABLET]],
      [
        /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
        // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Infinix/Tecno/Micromax/Advan
        /; (blu|hmd|imo|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
        // BLU/HMD/IMO/TCL
        /(hp) ([\w ]+\w)/i,
        // HP iPAQ
        /(microsoft); (lumia[\w ]+)/i,
        // Microsoft Lumia
        /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
        // Lenovo
        /(oppo) ?([\w ]+) bui/i
        // OPPO
      ],
      [VENDOR, MODEL, [TYPE, MOBILE]],
      [
        /(kobo)\s(ereader|touch)/i,
        // Kobo
        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
        // HP TouchPad
        /(kindle)\/([\w\.]+)/i
        // Kindle
      ],
      [VENDOR, MODEL, [TYPE, TABLET]],
      [
        /(surface duo)/i
        // Surface Duo
      ],
      [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
      [
        /droid [\d\.]+; (fp\du?)(?: b|\))/i
        // Fairphone
      ],
      [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
      [
        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
        // Nvidia Tablets
      ],
      [MODEL, [VENDOR, NVIDIA], [TYPE, TABLET]],
      [
        /(sprint) (\w+)/i
        // Sprint Phones
      ],
      [VENDOR, MODEL, [TYPE, MOBILE]],
      [
        /(kin\.[onetw]{3})/i
        // Microsoft Kin
      ],
      [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]],
      [
        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
        // Zebra
      ],
      [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
      [
        ///////////////////
        // SMARTTVS
        ///////////////////
        /smart-tv.+(samsung)/i
        // Samsung
      ],
      [VENDOR, [TYPE, SMARTTV]],
      [
        /hbbtv.+maple;(\d+)/i
      ],
      [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]],
      [
        /tcast.+(lg)e?. ([-\w]+)/i
        // LG SmartTV
      ],
      [VENDOR, MODEL, [TYPE, SMARTTV]],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [[VENDOR, LG], [TYPE, SMARTTV]],
      [
        /(apple) ?tv/i
        // Apple TV
      ],
      [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
      [
        /crkey.*devicetype\/chromecast/i
        // Google Chromecast Third Generation
      ],
      [[MODEL, CHROMECAST + " Third Generation"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
      [
        /crkey.*devicetype\/([^/]*)/i
        // Google Chromecast with specific device type
      ],
      [[MODEL, /^/, "Chromecast "], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
      [
        /fuchsia.*crkey/i
        // Google Chromecast Nest Hub
      ],
      [[MODEL, CHROMECAST + " Nest Hub"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
      [
        /crkey/i
        // Google Chromecast, Linux-based or unknown
      ],
      [[MODEL, CHROMECAST], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
      [
        /(portaltv)/i
        // Facebook Portal TV
      ],
      [MODEL, [VENDOR, FACEBOOK], [TYPE, SMARTTV]],
      [
        /droid.+aft(\w+)( bui|\))/i
        // Fire TV
      ],
      [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
      [
        /(shield \w+ tv)/i
        // Nvidia Shield TV
      ],
      [MODEL, [VENDOR, NVIDIA], [TYPE, SMARTTV]],
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i
        // Sharp
      ],
      [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],
      [
        /(bravia[\w ]+)( bui|\))/i
        // Sony
      ],
      [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]],
      [
        /(mi(tv|box)-?\w+) bui/i
        // Xiaomi
      ],
      [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]],
      [
        /Hbbtv.*(technisat) (.*);/i
        // TechniSAT
      ],
      [VENDOR, MODEL, [TYPE, SMARTTV]],
      [
        /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
        // Roku
        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
        // HbbTV devices
      ],
      [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]],
      [
        // SmartTV from Unidentified Vendors
        /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
      ],
      [MODEL, [TYPE, SMARTTV]],
      [
        /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
      ],
      [[TYPE, SMARTTV]],
      [
        ///////////////////
        // CONSOLES
        ///////////////////
        /(ouya)/i,
        // Ouya
        /(nintendo) (\w+)/i
        // Nintendo
      ],
      [VENDOR, MODEL, [TYPE, CONSOLE]],
      [
        /droid.+; (shield)( bui|\))/i
        // Nvidia Portable
      ],
      [MODEL, [VENDOR, NVIDIA], [TYPE, CONSOLE]],
      [
        /(playstation \w+)/i
        // Playstation
      ],
      [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
        // Microsoft Xbox
      ],
      [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
      [
        ///////////////////
        // WEARABLES
        ///////////////////
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
        // Samsung Galaxy Watch
      ],
      [MODEL, [VENDOR, SAMSUNG], [TYPE, WEARABLE]],
      [
        /((pebble))app/i,
        // Pebble
        /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
        // Asus ZenWatch / LG Watch / Pixel Watch
      ],
      [VENDOR, MODEL, [TYPE, WEARABLE]],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
        // Oppo Watch
      ],
      [MODEL, [VENDOR, OPPO], [TYPE, WEARABLE]],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
        // Apple Watch
      ],
      [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]],
      [
        /(opwwe\d{3})/i
        // OnePlus Watch
      ],
      [MODEL, [VENDOR, ONEPLUS], [TYPE, WEARABLE]],
      [
        /(moto 360)/i
        // Motorola 360
      ],
      [MODEL, [VENDOR, MOTOROLA], [TYPE, WEARABLE]],
      [
        /(smartwatch 3)/i
        // Sony SmartWatch
      ],
      [MODEL, [VENDOR, SONY], [TYPE, WEARABLE]],
      [
        /(g watch r)/i
        // LG G Watch R
      ],
      [MODEL, [VENDOR, LG], [TYPE, WEARABLE]],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
      [
        ///////////////////
        // XR
        ///////////////////
        /droid.+; (glass) \d/i
        // Google Glass
      ],
      [MODEL, [VENDOR, GOOGLE], [TYPE, XR]],
      [
        /(pico) (4|neo3(?: link|pro)?)/i
        // Pico
      ],
      [VENDOR, MODEL, [TYPE, XR]],
      [
        /(quest( \d| pro)?s?).+vr/i
        // Meta Quest
      ],
      [MODEL, [VENDOR, FACEBOOK], [TYPE, XR]],
      [
        ///////////////////
        // EMBEDDED
        ///////////////////
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
        // Tesla
      ],
      [VENDOR, [TYPE, EMBEDDED]],
      [
        /(aeobc)\b/i
        // Echo Dot
      ],
      [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]],
      [
        /(homepod).+mac os/i
        // Apple HomePod
      ],
      [MODEL, [VENDOR, APPLE], [TYPE, EMBEDDED]],
      [
        /windows iot/i
      ],
      [[TYPE, EMBEDDED]],
      [
        ////////////////////
        // MIXED (GENERIC)
        ///////////////////
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
      ],
      [MODEL, [TYPE, strMapper, { "mobile": "Mobile", "xr": "VR", "*": TABLET }]],
      [
        /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
        // Unidentifiable Tablet
      ],
      [[TYPE, TABLET]],
      [
        /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
        // Unidentifiable Mobile
      ],
      [[TYPE, MOBILE]],
      [
        /droid .+?; ([\w\. -]+)( bui|\))/i
        // Generic Android Device
      ],
      [MODEL, [VENDOR, "Generic"]]
    ],
    engine: [
      [
        /windows.+ edge\/([\w\.]+)/i
        // EdgeHTML
      ],
      [VERSION, [NAME, EDGE + "HTML"]],
      [
        /(arkweb)\/([\w\.]+)/i
        // ArkWeb
      ],
      [NAME, VERSION],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
        // Blink
      ],
      [VERSION, [NAME, "Blink"]],
      [
        /(presto)\/([\w\.]+)/i,
        // Presto
        /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
        // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna/Servo
        /ekioh(flow)\/([\w\.]+)/i,
        // Flow
        /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
        // KHTML/Tasman/Links
        /(icab)[\/ ]([23]\.[\d\.]+)/i,
        // iCab
        /\b(libweb)/i
        // LibWeb
      ],
      [NAME, VERSION],
      [
        /ladybird\//i
      ],
      [[NAME, "LibWeb"]],
      [
        /rv\:([\w\.]{1,9})\b.+(gecko)/i
        // Gecko
      ],
      [VERSION, NAME]
    ],
    os: [
      [
        // Windows
        /microsoft (windows) (vista|xp)/i
        // Windows (iTunes)
      ],
      [NAME, VERSION],
      [
        /(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i
        // Windows Phone
      ],
      [NAME, [VERSION, strMapper, windowsVersionMap]],
      [
        /windows nt 6\.2; (arm)/i,
        // Windows RT
        /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
        /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
      ],
      [[VERSION, strMapper, windowsVersionMap], [NAME, WINDOWS]],
      [
        // iOS/macOS
        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
        // iOS
        /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
        /cfnetwork\/.+darwin/i
      ],
      [[VERSION, /_/g, "."], [NAME, "iOS"]],
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+haiku)/i
        // Mac OS
      ],
      [[NAME, "macOS"], [VERSION, /_/g, "."]],
      [
        // Google Chromecast
        /android ([\d\.]+).*crkey/i
        // Google Chromecast, Android-based
      ],
      [VERSION, [NAME, CHROMECAST + " Android"]],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
        // Google Chromecast, Fuchsia-based
      ],
      [VERSION, [NAME, CHROMECAST + " Fuchsia"]],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
        // Google Chromecast, Linux-based Smart Speaker
      ],
      [VERSION, [NAME, CHROMECAST + " SmartSpeaker"]],
      [
        /linux.*crkey\/([\d\.]+)/i
        // Google Chromecast, Legacy Linux-based
      ],
      [VERSION, [NAME, CHROMECAST + " Linux"]],
      [
        /crkey\/([\d\.]+)/i
        // Google Chromecast, unknown
      ],
      [VERSION, [NAME, CHROMECAST]],
      [
        // Mobile OSes
        /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
        // Android-x86/HarmonyOS
      ],
      [VERSION, NAME],
      [
        /(ubuntu) ([\w\.]+) like android/i
        // Ubuntu Touch
      ],
      [[NAME, /(.+)/, "$1 Touch"], VERSION],
      [
        // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/\.; ]?([\d\.]*)/i
      ],
      [NAME, VERSION],
      [
        /\(bb(10);/i
        // BlackBerry 10
      ],
      [VERSION, [NAME, BLACKBERRY]],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
        // Symbian
      ],
      [VERSION, [NAME, "Symbian"]],
      [
        /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
        // Firefox OS
      ],
      [VERSION, [NAME, FIREFOX + " OS"]],
      [
        /web0s;.+rt(tv)/i,
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
        // WebOS
      ],
      [VERSION, [NAME, "webOS"]],
      [
        /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
        // watchOS
      ],
      [VERSION, [NAME, "watchOS"]],
      [
        // Google ChromeOS
        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
        // Chromium OS
      ],
      [[NAME, "Chrome OS"], VERSION],
      [
        // Smart TVs
        /panasonic;(viera)/i,
        // Panasonic Viera
        /(netrange)mmh/i,
        // Netrange
        /(nettv)\/(\d+\.[\w\.]+)/i,
        // NetTV
        // Console
        /(nintendo|playstation) (\w+)/i,
        // Nintendo/Playstation
        /(xbox); +xbox ([^\);]+)/i,
        // Microsoft Xbox (360, One, X, S, Series X, Series S)
        /(pico) .+os([\w\.]+)/i,
        // Pico
        // Other
        /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
        // Joli/Palm
        /(mint)[\/\(\) ]?(\w*)/i,
        // Mint
        /(mageia|vectorlinux)[; ]/i,
        // Mageia/VectorLinux
        /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
        // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
        /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
        // Hurd/Linux
        /(gnu) ?([\w\.]*)/i,
        // GNU
        /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
        // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
        /(haiku) (\w+)/i
        // Haiku
      ],
      [NAME, VERSION],
      [
        /(sunos) ?([\w\.\d]*)/i
        // Solaris
      ],
      [[NAME, "Solaris"], VERSION],
      [
        /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
        // Solaris
        /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
        // AIX
        /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
        // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
        /(unix) ?([\w\.]*)/i
        // UNIX
      ],
      [NAME, VERSION]
    ]
  };
  var defaultProps = function() {
    var props = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} };
    setProps.call(props.init, [
      [UA_BROWSER, [NAME, VERSION, MAJOR, TYPE]],
      [UA_CPU, [ARCHITECTURE]],
      [UA_DEVICE, [TYPE, MODEL, VENDOR]],
      [UA_ENGINE, [NAME, VERSION]],
      [UA_OS, [NAME, VERSION]]
    ]);
    setProps.call(props.isIgnore, [
      [UA_BROWSER, [VERSION, MAJOR]],
      [UA_ENGINE, [VERSION]],
      [UA_OS, [VERSION]]
    ]);
    setProps.call(props.isIgnoreRgx, [
      [UA_BROWSER, / ?browser$/i],
      [UA_OS, / ?os$/i]
    ]);
    setProps.call(props.toString, [
      [UA_BROWSER, [NAME, VERSION]],
      [UA_CPU, [ARCHITECTURE]],
      [UA_DEVICE, [VENDOR, MODEL]],
      [UA_ENGINE, [NAME, VERSION]],
      [UA_OS, [NAME, VERSION]]
    ]);
    return props;
  }();
  var createIData = function(item, itemType) {
    var init_props = defaultProps.init[itemType], is_ignoreProps = defaultProps.isIgnore[itemType] || 0, is_ignoreRgx = defaultProps.isIgnoreRgx[itemType] || 0, toString_props = defaultProps.toString[itemType] || 0;
    function IData() {
      setProps.call(this, init_props);
    }
    IData.prototype.getItem = function() {
      return item;
    };
    IData.prototype.withClientHints = function() {
      if (!NAVIGATOR_UADATA) {
        return item.parseCH().get();
      }
      return NAVIGATOR_UADATA.getHighEntropyValues(CH_ALL_VALUES).then(function(res) {
        return item.setCH(new UACHData(res, false)).parseCH().get();
      });
    };
    IData.prototype.withFeatureCheck = function() {
      return item.detectFeature().get();
    };
    if (itemType != UA_RESULT) {
      IData.prototype.is = function(strToCheck) {
        var is = false;
        for (var i2 in this) {
          if (this.hasOwnProperty(i2) && !has(is_ignoreProps, i2) && lowerize(is_ignoreRgx ? strip(is_ignoreRgx, this[i2]) : this[i2]) == lowerize(is_ignoreRgx ? strip(is_ignoreRgx, strToCheck) : strToCheck)) {
            is = true;
            if (strToCheck != UNDEF_TYPE) break;
          } else if (strToCheck == UNDEF_TYPE && is) {
            is = !is;
            break;
          }
        }
        return is;
      };
      IData.prototype.toString = function() {
        var str = EMPTY;
        for (var i2 in toString_props) {
          if (typeof this[toString_props[i2]] !== UNDEF_TYPE) {
            str += (str ? " " : EMPTY) + this[toString_props[i2]];
          }
        }
        return str || UNDEF_TYPE;
      };
    }
    if (!NAVIGATOR_UADATA) {
      IData.prototype.then = function(cb) {
        var that = this;
        var IDataResolve = function() {
          for (var prop in that) {
            if (that.hasOwnProperty(prop)) {
              this[prop] = that[prop];
            }
          }
        };
        IDataResolve.prototype = {
          is: IData.prototype.is,
          toString: IData.prototype.toString
        };
        var resolveData = new IDataResolve();
        cb(resolveData);
        return resolveData;
      };
    }
    return new IData();
  };
  function UACHData(uach, isHttpUACH) {
    uach = uach || {};
    setProps.call(this, CH_ALL_VALUES);
    if (isHttpUACH) {
      setProps.call(this, [
        [BRANDS, itemListToArray(uach[CH_HEADER])],
        [FULLVERLIST, itemListToArray(uach[CH_HEADER_FULL_VER_LIST])],
        [MOBILE, /\?1/.test(uach[CH_HEADER_MOBILE])],
        [MODEL, stripQuotes(uach[CH_HEADER_MODEL])],
        [PLATFORM, stripQuotes(uach[CH_HEADER_PLATFORM])],
        [PLATFORMVER, stripQuotes(uach[CH_HEADER_PLATFORM_VER])],
        [ARCHITECTURE, stripQuotes(uach[CH_HEADER_ARCH])],
        [FORMFACTORS, itemListToArray(uach[CH_HEADER_FORM_FACTORS])],
        [BITNESS, stripQuotes(uach[CH_HEADER_BITNESS])]
      ]);
    } else {
      for (var prop in uach) {
        if (this.hasOwnProperty(prop) && typeof uach[prop] !== UNDEF_TYPE) this[prop] = uach[prop];
      }
    }
  }
  function UAItem(itemType, ua, rgxMap, uaCH) {
    this.get = function(prop) {
      if (!prop) return this.data;
      return this.data.hasOwnProperty(prop) ? this.data[prop] : void 0;
    };
    this.set = function(prop, val) {
      this.data[prop] = val;
      return this;
    };
    this.setCH = function(ch) {
      this.uaCH = ch;
      return this;
    };
    this.detectFeature = function() {
      if (NAVIGATOR && NAVIGATOR.userAgent == this.ua) {
        switch (this.itemType) {
          case UA_BROWSER:
            if (NAVIGATOR.brave && typeof NAVIGATOR.brave.isBrave == FUNC_TYPE) {
              this.set(NAME, "Brave");
            }
            break;
          case UA_DEVICE:
            if (!this.get(TYPE) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[MOBILE]) {
              this.set(TYPE, MOBILE);
            }
            if (this.get(MODEL) == "Macintosh" && NAVIGATOR && typeof NAVIGATOR.standalone !== UNDEF_TYPE && NAVIGATOR.maxTouchPoints && NAVIGATOR.maxTouchPoints > 2) {
              this.set(MODEL, "iPad").set(TYPE, TABLET);
            }
            break;
          case UA_OS:
            if (!this.get(NAME) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[PLATFORM]) {
              this.set(NAME, NAVIGATOR_UADATA[PLATFORM]);
            }
            break;
          case UA_RESULT:
            var data = this.data;
            var detect = function(itemType2) {
              return data[itemType2].getItem().detectFeature().get();
            };
            this.set(UA_BROWSER, detect(UA_BROWSER)).set(UA_CPU, detect(UA_CPU)).set(UA_DEVICE, detect(UA_DEVICE)).set(UA_ENGINE, detect(UA_ENGINE)).set(UA_OS, detect(UA_OS));
        }
      }
      return this;
    };
    this.parseUA = function() {
      if (this.itemType != UA_RESULT) {
        rgxMapper.call(this.data, this.ua, this.rgxMap);
      }
      if (this.itemType == UA_BROWSER) {
        this.set(MAJOR, majorize(this.get(VERSION)));
      }
      return this;
    };
    this.parseCH = function() {
      var uaCH2 = this.uaCH, rgxMap2 = this.rgxMap;
      switch (this.itemType) {
        case UA_BROWSER:
        case UA_ENGINE:
          var brands = uaCH2[FULLVERLIST] || uaCH2[BRANDS], prevName;
          if (brands) {
            for (var i2 in brands) {
              var brandName = brands[i2].brand || brands[i2], brandVersion = brands[i2].version;
              if (this.itemType == UA_BROWSER && !/not.a.brand/i.test(brandName) && (!prevName || /chrom/i.test(prevName) && brandName != CHROMIUM)) {
                brandName = strMapper(brandName, {
                  "Chrome": "Google Chrome",
                  "Edge": "Microsoft Edge",
                  "Chrome WebView": "Android WebView",
                  "Chrome Headless": "HeadlessChrome",
                  "Huawei Browser": "HuaweiBrowser",
                  "MIUI Browser": "Miui Browser",
                  "Opera Mobi": "OperaMobile",
                  "Yandex": "YaBrowser"
                });
                this.set(NAME, brandName).set(VERSION, brandVersion).set(MAJOR, majorize(brandVersion));
                prevName = brandName;
              }
              if (this.itemType == UA_ENGINE && brandName == CHROMIUM) {
                this.set(VERSION, brandVersion);
              }
            }
          }
          break;
        case UA_CPU:
          var archName = uaCH2[ARCHITECTURE];
          if (archName) {
            if (archName && uaCH2[BITNESS] == "64") archName += "64";
            rgxMapper.call(this.data, archName + ";", rgxMap2);
          }
          break;
        case UA_DEVICE:
          if (uaCH2[MOBILE]) {
            this.set(TYPE, MOBILE);
          }
          if (uaCH2[MODEL]) {
            this.set(MODEL, uaCH2[MODEL]);
            if (!this.get(TYPE) || !this.get(VENDOR)) {
              var reParse = {};
              rgxMapper.call(reParse, "droid 9; " + uaCH2[MODEL] + ")", rgxMap2);
              if (!this.get(TYPE) && !!reParse.type) {
                this.set(TYPE, reParse.type);
              }
              if (!this.get(VENDOR) && !!reParse.vendor) {
                this.set(VENDOR, reParse.vendor);
              }
            }
          }
          if (uaCH2[FORMFACTORS]) {
            var ff;
            if (typeof uaCH2[FORMFACTORS] !== "string") {
              var idx = 0;
              while (!ff && idx < uaCH2[FORMFACTORS].length) {
                ff = strMapper(uaCH2[FORMFACTORS][idx++], formFactorsMap);
              }
            } else {
              ff = strMapper(uaCH2[FORMFACTORS], formFactorsMap);
            }
            this.set(TYPE, ff);
          }
          break;
        case UA_OS:
          var osName = uaCH2[PLATFORM];
          if (osName) {
            var osVersion = uaCH2[PLATFORMVER];
            if (osName == WINDOWS) osVersion = parseInt(majorize(osVersion), 10) >= 13 ? "11" : "10";
            this.set(NAME, osName).set(VERSION, osVersion);
          }
          if (this.get(NAME) == WINDOWS && uaCH2[MODEL] == "Xbox") {
            this.set(NAME, "Xbox").set(VERSION, void 0);
          }
          break;
        case UA_RESULT:
          var data = this.data;
          var parse = function(itemType2) {
            return data[itemType2].getItem().setCH(uaCH2).parseCH().get();
          };
          this.set(UA_BROWSER, parse(UA_BROWSER)).set(UA_CPU, parse(UA_CPU)).set(UA_DEVICE, parse(UA_DEVICE)).set(UA_ENGINE, parse(UA_ENGINE)).set(UA_OS, parse(UA_OS));
      }
      return this;
    };
    setProps.call(this, [
      ["itemType", itemType],
      ["ua", ua],
      ["uaCH", uaCH],
      ["rgxMap", rgxMap],
      ["data", createIData(this, itemType)]
    ]);
    return this;
  }
  function UAParser(ua, extensions, headers) {
    if (typeof ua === OBJ_TYPE) {
      if (isExtensions(ua, true)) {
        if (typeof extensions === OBJ_TYPE) {
          headers = extensions;
        }
        extensions = ua;
      } else {
        headers = ua;
        extensions = void 0;
      }
      ua = void 0;
    } else if (typeof ua === STR_TYPE && !isExtensions(extensions, true)) {
      headers = extensions;
      extensions = void 0;
    }
    if (headers && typeof headers.append === FUNC_TYPE) {
      var kv = {};
      headers.forEach(function(v2, k2) {
        kv[k2] = v2;
      });
      headers = kv;
    }
    if (!(this instanceof UAParser)) {
      return new UAParser(ua, extensions, headers).getResult();
    }
    var userAgent = typeof ua === STR_TYPE ? ua : (
      // Passed user-agent string
      headers && headers[USER_AGENT] ? headers[USER_AGENT] : (
        // User-Agent from passed headers
        NAVIGATOR && NAVIGATOR.userAgent ? NAVIGATOR.userAgent : (
          // navigator.userAgent
          EMPTY
        )
      )
    ), httpUACH = new UACHData(headers, true), regexMap = extensions ? extend(defaultRegexes, extensions) : defaultRegexes, createItemFunc = function(itemType) {
      if (itemType == UA_RESULT) {
        return function() {
          return new UAItem(itemType, userAgent, regexMap, httpUACH).set("ua", userAgent).set(UA_BROWSER, this.getBrowser()).set(UA_CPU, this.getCPU()).set(UA_DEVICE, this.getDevice()).set(UA_ENGINE, this.getEngine()).set(UA_OS, this.getOS()).get();
        };
      } else {
        return function() {
          return new UAItem(itemType, userAgent, regexMap[itemType], httpUACH).parseUA().get();
        };
      }
    };
    setProps.call(this, [
      ["getBrowser", createItemFunc(UA_BROWSER)],
      ["getCPU", createItemFunc(UA_CPU)],
      ["getDevice", createItemFunc(UA_DEVICE)],
      ["getEngine", createItemFunc(UA_ENGINE)],
      ["getOS", createItemFunc(UA_OS)],
      ["getResult", createItemFunc(UA_RESULT)],
      ["getUA", function() {
        return userAgent;
      }],
      ["setUA", function(ua2) {
        if (isString(ua2))
          userAgent = ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
        return this;
      }]
    ]).setUA(userAgent);
    return this;
  }
  UAParser.VERSION = LIBVERSION;
  UAParser.BROWSER = enumerize([NAME, VERSION, MAJOR, TYPE]);
  UAParser.CPU = enumerize([ARCHITECTURE]);
  UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
  UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);
  const useBrowserInfo = () => {
    const browserInfo = T$5(() => {
      {
        const parser = new UAParser();
        const result = parser.getResult();
        return {
          browser: result.browser,
          engine: result.engine,
          os: result.os,
          device: result.device,
          cpu: result.cpu
        };
      }
    }, []);
    return browserInfo;
  };
  function useHotkeyListenerComboText(action) {
    const userAgent = useBrowserInfo();
    return userAgent.os.name.toLowerCase().includes("mac") ? hotkeyActionDefinitions[action].keyComboMac : hotkeyActionDefinitions[action].keyComboDefault;
  }
  function ChatBox() {
    const chatState = useChatState();
    const currentChat = T$5(
      () => chatState.chats.find((c2) => c2.id === chatState.currentChatId),
      [chatState.chats, chatState.currentChatId]
    );
    const currentInput = T$5(
      () => (currentChat == null ? void 0 : currentChat.inputValue) || "",
      [currentChat == null ? void 0 : currentChat.inputValue]
    );
    const showBigBox = T$5(() => {
      return currentInput.split("\n").length > 1 || currentInput.length > 30;
    }, [currentInput]);
    const handleInputChange = q$3(
      (value) => {
        chatState.setChatInput(chatState.currentChatId, value);
      },
      [chatState.setChatInput, chatState.currentChatId]
    );
    const handleSubmit = q$3(() => {
      if (!currentChat || !currentInput.trim()) return;
      chatState.addMessage(currentChat.id, currentInput);
    }, [currentChat, currentInput, chatState.addMessage]);
    const handleKeyDown = q$3(
      (e2) => {
        if (e2.key === "Enter" && !e2.shiftKey) {
          e2.preventDefault();
          handleSubmit();
        }
      },
      [handleSubmit]
    );
    const inputRef = A$3(null);
    y$6(() => {
      var _a, _b, _c;
      const blurHandler = () => {
        var _a2;
        return (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
      };
      if (chatState.isPromptCreationActive) {
        (_a = inputRef.current) == null ? void 0 : _a.focus();
        (_b = inputRef.current) == null ? void 0 : _b.addEventListener("blur", blurHandler);
      } else {
        (_c = inputRef.current) == null ? void 0 : _c.blur();
      }
      return () => {
        var _a2;
        (_a2 = inputRef.current) == null ? void 0 : _a2.removeEventListener("blur", blurHandler);
      };
    }, [chatState.isPromptCreationActive]);
    const buttonClassName = T$5(
      () => cn(
        "flex size-6 items-center justify-center rounded-full bg-transparent p-1 text-zinc-950 opacity-20",
        currentInput.length > 0 && "bg-blue-600 text-white opacity-100"
      ),
      [currentInput.length]
    );
    const textareaClassName = T$5(
      () => cn(
        "w-full flex-1 resize-none bg-transparent text-zinc-950 placeholder:text-zinc-950/50 focus:outline-none",
        showBigBox ? "h-[4.5em]" : "h-6"
      ),
      [showBigBox]
    );
    const ctrlAltCText = useHotkeyListenerComboText(HotkeyActions.CTRL_ALT_C);
    return /* @__PURE__ */ u$9(
      "div",
      {
        className: cn(
          "flex h-fit w-80 flex-1 flex-row items-end gap-1 rounded-2xl border border-border/10 bg-zinc-950/5 p-1.5 pl-2 text-sm text-zinc-950 shadow-inner transition-all duration-150 placeholder:text-zinc-950/70",
          chatState.isPromptCreationActive && "ring-2 ring-blue-600"
        ),
        onClick: () => chatState.startPromptCreation(),
        role: "button",
        tabIndex: 0,
        children: [
          /* @__PURE__ */ u$9(
            J,
            {
              ref: inputRef,
              className: textareaClassName,
              rows: showBigBox ? 4 : 1,
              value: currentInput,
              onChange: (e2) => handleInputChange(e2.currentTarget.value),
              onKeyDown: handleKeyDown,
              placeholder: chatState.isPromptCreationActive ? "Enter prompt..." : `What do you want to change? (${ctrlAltCText})`
            }
          ),
          /* @__PURE__ */ u$9(
            H$3,
            {
              className: buttonClassName,
              disabled: currentInput.length === 0,
              onClick: handleSubmit,
              children: /* @__PURE__ */ u$9(Send, { className: "size-3" })
            }
          )
        ]
      }
    );
  }
  const DropdownMenu = to;
  const DropdownMenuButton = D$1(
    (props, ref) => {
      return /* @__PURE__ */ u$9(mt, { as: k$3, ref, ...props });
    }
  );
  const DropdownMenuContent = D$1(
    (props, ref) => {
      return /* @__PURE__ */ u$9(
        Tt,
        {
          ref,
          anchor: "bottom",
          transition: true,
          portal: true,
          ...props,
          className: cn(
            "z-50 flex w-fit min-w-24 max-w-90 flex-col items-stretch justify-start gap-1 rounded-lg border border-border/30 border-solid bg-background/60 p-1 shadow-black/50 shadow-lg outline-none backdrop-blur-md data-focus:outline-none",
            props.className
          )
        }
      );
    }
  );
  const DropdownMenuItemStyles = "w-full flex flex-row select-none items-center justify-start gap-2 p-2 pr-6 truncate overflow-hidden rounded-md hover:bg-zinc-950/10 focus:text-zinc-900 cursor-pointer transition-color duration-150 text-sm font-normal text-foreground";
  const DropdownMenuButttonItem = D$1(
    (props, ref) => {
      return /* @__PURE__ */ u$9(ft, { ref, children: /* @__PURE__ */ u$9(
        H$3,
        {
          ...props,
          className: cn(DropdownMenuItemStyles, props.className)
        }
      ) });
    }
  );
  D$1(
    (props, ref) => {
      return /* @__PURE__ */ u$9(ft, { ref, children: /* @__PURE__ */ u$9("a", { ...props, className: cn(DropdownMenuItemStyles, props.className) }) });
    }
  );
  function ToolbarItem(props) {
    return /* @__PURE__ */ u$9("div", { className: "flex h-full shrink-0 items-center justify-center", children: [
      props.children,
      props.badgeContent && /* @__PURE__ */ u$9(
        "div",
        {
          className: cn(
            "bg-blue-600 text-white",
            props.badgeClassName,
            "-bottom-0.5 -right-1 pointer-events-none absolute flex h-4 w-max min-w-4 max-w-8 select-none items-center justify-center truncate rounded-full px-1 font-semibold text-xs"
          ),
          children: props.badgeContent
        }
      ),
      props.statusDot && /* @__PURE__ */ u$9(
        "div",
        {
          className: cn(
            "bg-rose-600",
            props.statusDotClassName,
            "pointer-events-none absolute top-0 right-0 size-1.5 rounded-full"
          )
        }
      )
    ] });
  }
  const ToolbarButton = D$1(
    ({
      badgeContent,
      badgeClassName,
      statusDot,
      statusDotClassName,
      tooltipHint,
      variant = "default",
      ...props
    }, ref) => {
      const button = /* @__PURE__ */ u$9(
        H$3,
        {
          ref,
          ...props,
          className: cn(
            "flex items-center justify-center rounded-full p-1 hover:bg-zinc-950/5",
            variant === "default" ? "size-8" : "h-8 rounded-full"
          )
        }
      );
      return /* @__PURE__ */ u$9(
        ToolbarItem,
        {
          badgeContent,
          badgeClassName,
          statusDot,
          statusDotClassName,
          children: button
        }
      );
    }
  );
  ToolbarButton.displayName = "ToolbarButton";
  function ToolbarSection({ children }) {
    return /* @__PURE__ */ u$9("div", { className: "fade-in slide-in-from-bottom-2 flex max-h-full max-w-sm animate-in snap-start flex-row items-center justify-between gap-2 border-x border-r-border/30 border-l-transparent px-3 first:pl-0 last:border-r-transparent last:pr-0", children });
  }
  function MoreActionsButton() {
    const minimizeCompanion = useAppState((state) => state.minimize);
    const plugins = usePlugins();
    const pluginTools = T$5(() => {
      return plugins.flatMap((plugin) => plugin.actions);
    }, [plugins]);
    return /* @__PURE__ */ u$9(ToolbarSection, { children: /* @__PURE__ */ u$9(DropdownMenu, { children: [
      /* @__PURE__ */ u$9(DropdownMenuButton, { children: /* @__PURE__ */ u$9(ToolbarButton, { children: /* @__PURE__ */ u$9(Ellipsis, { className: "size-4" }) }) }),
      /* @__PURE__ */ u$9(DropdownMenuContent, { children: [
        pluginTools.map((tool) => /* @__PURE__ */ u$9(DropdownMenuButttonItem, { onClick: tool.execute, children: tool.name })),
        /* @__PURE__ */ u$9(DropdownMenuButttonItem, { onClick: minimizeCompanion, children: [
          /* @__PURE__ */ u$9(Minimize2, { className: "size-4" }),
          "Minimize companion"
        ] })
      ] })
    ] }) });
  }
  function ToolbarDraggableBox() {
    return /* @__PURE__ */ u$9("div", { className: "-translate-x-1/2 pointer-events-auto absolute bottom-5 left-1/2 p-0.5", children: /* @__PURE__ */ u$9("div", { className: "pointer-events-auto flex w-96 max-w-[80vw] flex-col items-start justify-center rounded-3xl border border-border/30 border-solid bg-zinc-50/80 p-0 shadow-lg backdrop-blur-lg transition-colors", children: [
      /* @__PURE__ */ u$9(ChatArea, {}),
      /* @__PURE__ */ u$9("div", { className: "flex w-full flex-row items-center justify-center rounded-3xl border-border/30 border-t bg-background/40 p-1.5 shadow-lg transition-colors first:border-none", children: [
        /* @__PURE__ */ u$9(ChatBox, {}),
        /* @__PURE__ */ u$9(MoreActionsButton, {})
      ] })
    ] }) });
  }
  const DraggableContext = K$3(null);
  const DraggableProvider = ({
    containerRef,
    children,
    snapAreas
  }) => {
    const [borderLocation, setBorderLocation] = d$4({
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    });
    y$6(() => {
      if (!containerRef.current) return;
      const updateBorderLocation = () => {
        const rect = containerRef.current.getBoundingClientRect();
        setBorderLocation({
          top: rect.top,
          left: rect.left,
          right: rect.right,
          bottom: rect.bottom
        });
      };
      updateBorderLocation();
      const resizeObserver = new ResizeObserver(updateBorderLocation);
      resizeObserver.observe(containerRef.current);
      const handleScroll = () => {
        requestAnimationFrame(updateBorderLocation);
      };
      window.addEventListener("scroll", handleScroll, true);
      let parent = containerRef.current.parentElement;
      while (parent) {
        parent.addEventListener("scroll", handleScroll);
        parent = parent.parentElement;
      }
      return () => {
        var _a;
        resizeObserver.disconnect();
        window.removeEventListener("scroll", handleScroll, true);
        parent = (_a = containerRef.current) == null ? void 0 : _a.parentElement;
        while (parent) {
          parent.removeEventListener("scroll", handleScroll);
          parent = parent.parentElement;
        }
      };
    }, [containerRef]);
    return /* @__PURE__ */ u$9(DraggableContext.Provider, { value: { borderLocation, snapAreas }, children });
  };
  function ToolbarArea() {
    const containerRef = A$3(null);
    return /* @__PURE__ */ u$9("div", { className: "absolute size-full", ref: containerRef, children: /* @__PURE__ */ u$9(
      DraggableProvider,
      {
        containerRef,
        snapAreas: {
          topLeft: true,
          topCenter: true,
          topRight: true,
          centerLeft: true,
          center: true,
          centerRight: true,
          bottomLeft: true,
          bottomCenter: true,
          bottomRight: true
        },
        children: /* @__PURE__ */ u$9(ToolbarDraggableBox, {})
      }
    ) });
  }
  const Logo = ({
    color = "default",
    loading = false,
    loadingSpeed = "slow",
    ...props
  }) => {
    const colorStyle = {
      default: "fill-stagewise-700 stroke-none",
      black: "fill-zinc-950 stroke-none",
      white: "fill-white stroke-none",
      gray: "fill-zinc-500/50 stroke-none",
      current: "fill-current stroke-none",
      gradient: "fill-white stroke-black/30 stroke-1"
    };
    return /* @__PURE__ */ u$9(
      "div",
      {
        className: `relative ${color === "gradient" ? "overflow-hidden rounded-full" : "overflow-visible"} ${props.className || ""} ${loading ? "drop-shadow-xl" : ""} aspect-square`,
        children: [
          color === "gradient" && /* @__PURE__ */ u$9("div", { className: "absolute inset-0", children: [
            /* @__PURE__ */ u$9("div", { className: "absolute inset-0 size-full bg-gradient-to-tr from-indigo-700 via-blue-500 to-teal-500" }),
            /* @__PURE__ */ u$9("div", { className: "absolute top-1/2 left-1/2 size-9/12 bg-[radial-gradient(circle,rgba(219,39,119,0.2)_0%,rgba(219,39,119,0)_100%)]" }),
            /* @__PURE__ */ u$9("div", { className: "absolute right-1/2 bottom-1/2 size-full bg-[radial-gradient(circle,rgba(219,39,119,0.2)_0%,rgba(219,39,119,0)_100%)]" }),
            /* @__PURE__ */ u$9("div", { className: "absolute top-0 left-[-10%] size-[120%] bg-[radial-gradient(circle,rgba(255,255,255,0)_60%,rgba(255,255,255,0.2)_70%)]" }),
            /* @__PURE__ */ u$9("div", { className: "absolute top-[-20%] left-0 h-[120%] w-full bg-[radial-gradient(circle,rgba(55,48,163,0)_55%,rgba(55,48,163,0.35)_73%)]" })
          ] }),
          /* @__PURE__ */ u$9(
            "svg",
            {
              className: `absolute overflow-visible ${color === "gradient" ? "top-[25%] left-[25%] h-[50%] w-[50%] drop-shadow-indigo-950 drop-shadow-xs" : "top-0 left-0 h-full w-full"}`,
              viewBox: "0 0 2048 2048",
              children: [
                /* @__PURE__ */ u$9("title", { children: "stagewise" }),
                /* @__PURE__ */ u$9(
                  "ellipse",
                  {
                    className: colorStyle[color] + (loading ? " animate-pulse" : ""),
                    id: "path3",
                    ry: "624",
                    rx: "624",
                    cy: "1024",
                    cx: "1024"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ u$9(
            "svg",
            {
              className: `absolute overflow-visible ${color === "gradient" ? "top-[25%] left-[25%] h-[50%] w-[50%]" : "top-0 left-0 h-full w-full"}`,
              viewBox: "0 0 2048 2048",
              children: /* @__PURE__ */ u$9(
                "path",
                {
                  id: "path4",
                  className: `origin-center ${colorStyle[color]}${loading ? loadingSpeed === "fast" ? " animate-spin-fast" : " animate-spin-slow" : ""}`,
                  d: "M 1024 0 A 1024 1024 0 0 0 0 1024 A 1024 1024 0 0 0 1024 2048 L 1736 2048 L 1848 2048 C 1958.7998 2048 2048 1958.7998 2048 1848 L 2048 1736 L 2048 1024 A 1024 1024 0 0 0 1024 0 z M 1024.9414 200 A 824 824 0 0 1 1848.9414 1024 A 824 824 0 0 1 1024.9414 1848 A 824 824 0 0 1 200.94141 1024 A 824 824 0 0 1 1024.9414 200 z "
                }
              )
            }
          )
        ]
      }
    );
  };
  function ExpandButton() {
    const expand = useAppState((state) => state.expand);
    return /* @__PURE__ */ u$9(
      "button",
      {
        type: "button",
        onClick: () => expand(),
        className: "pointer-events-auto absolute bottom-3 left-3 size-12 rounded-full bg-transparent opacity-80 shadow-sm transition-all duration-500 hover:opacity-100 hover:shadow-lg",
        children: /* @__PURE__ */ u$9(Logo, { color: "gradient" })
      }
    );
  }
  function ElementSelector(props) {
    const lastHoveredElement = A$3(null);
    const handleMouseMove = q$3(
      (event) => {
        const target = event.target;
        if (target.closest(".companion")) return;
        const refElement = getElementAtPoint(event.clientX, event.clientY);
        if (props.ignoreList.includes(refElement)) return;
        if (lastHoveredElement.current !== refElement) {
          lastHoveredElement.current = refElement;
          props.onElementHovered(refElement);
        }
      },
      [props]
    );
    const handleMouseLeave = q$3(() => {
      lastHoveredElement.current = null;
      props.onElementUnhovered();
    }, [props]);
    const handleMouseClick = q$3(() => {
      if (!lastHoveredElement.current) return;
      if (props.ignoreList.includes(lastHoveredElement.current)) return;
      props.onElementSelected(lastHoveredElement.current);
    }, [props]);
    return /* @__PURE__ */ u$9(
      "div",
      {
        className: "pointer-events-auto fixed inset-0 h-screen w-screen",
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        onClick: handleMouseClick,
        role: "button",
        tabIndex: 0
      }
    );
  }
  function useWindowSize() {
    const [size2, setSize] = d$4({
      width: window.innerWidth,
      height: window.innerHeight
    });
    const handleResize = q$3(
      () => setSize({
        width: window.innerWidth,
        height: window.innerHeight
      }),
      []
    );
    useEventListener("resize", handleResize);
    return size2;
  }
  function ContextItemProposal({
    refElement,
    ...props
  }) {
    const boxRef = A$3(null);
    const windowSize = useWindowSize();
    const updateBoxPosition = q$3(() => {
      if (boxRef.current) {
        if (refElement) {
          const referenceRect = refElement.getBoundingClientRect();
          boxRef.current.style.top = `${referenceRect.top}px`;
          boxRef.current.style.left = `${referenceRect.left}px`;
          boxRef.current.style.width = `${referenceRect.width}px`;
          boxRef.current.style.height = `${referenceRect.height}px`;
          boxRef.current.style.display = void 0;
        } else {
          boxRef.current.style.height = "0px";
          boxRef.current.style.width = "0px";
          boxRef.current.style.top = `${windowSize.height / 2}px`;
          boxRef.current.style.left = `${windowSize.width / 2}px`;
          boxRef.current.style.display = "none";
        }
      }
    }, [refElement, windowSize.height, windowSize.width]);
    useCyclicUpdate(updateBoxPosition, 30);
    return /* @__PURE__ */ u$9(
      "div",
      {
        ...props,
        className: "fixed flex items-center justify-center overflow-hidden rounded-lg border-2 border-blue-600/80 bg-blue-600/20 text-white backdrop-blur-xs transition-all duration-100",
        ref: boxRef,
        children: /* @__PURE__ */ u$9(Plus, { className: "size-6 drop-shadow-black drop-shadow-md" })
      }
    );
  }
  function ContextItem({ refElement, ...props }) {
    const boxRef = A$3(null);
    const windowSize = useWindowSize();
    const updateBoxPosition = q$3(() => {
      if (boxRef.current) {
        if (refElement) {
          const referenceRect = refElement.getBoundingClientRect();
          boxRef.current.style.top = `${referenceRect.top}px`;
          boxRef.current.style.left = `${referenceRect.left}px`;
          boxRef.current.style.width = `${referenceRect.width}px`;
          boxRef.current.style.height = `${referenceRect.height}px`;
          boxRef.current.style.display = void 0;
        } else {
          boxRef.current.style.height = "0px";
          boxRef.current.style.width = "0px";
          boxRef.current.style.top = `${windowSize.height / 2}px`;
          boxRef.current.style.left = `${windowSize.width / 2}px`;
          boxRef.current.style.display = "none";
        }
      }
    }, [refElement, windowSize.height, windowSize.width]);
    useCyclicUpdate(updateBoxPosition, 30);
    const chatState = useChatState();
    const handleDeleteClick = q$3(() => {
      chatState.removeChatDomContext(chatState.currentChatId, refElement);
    }, [chatState, refElement]);
    return /* @__PURE__ */ u$9(
      "div",
      {
        ...props,
        className: "pointer-events-auto fixed flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-green-600/80 bg-green-600/5 text-transparent transition-all duration-0 hover:border-red-600/80 hover:bg-red-600/20 hover:text-white hover:backdrop-blur-sm",
        ref: boxRef,
        onClick: handleDeleteClick,
        role: "button",
        tabIndex: 0,
        children: /* @__PURE__ */ u$9(Trash2, { className: "size-6 drop-shadow-black drop-shadow-md" })
      }
    );
  }
  function SelectorCanvas() {
    const { chats, currentChatId, addChatDomContext, isPromptCreationActive } = useChatState();
    const currentChat = T$5(
      () => chats.find((chat) => chat.id === currentChatId),
      [currentChatId, chats]
    );
    const shouldShow = isPromptCreationActive;
    const contextElements = T$5(() => {
      return (currentChat == null ? void 0 : currentChat.domContextElements) || [];
    }, [currentChat]);
    const [hoveredElement, setHoveredElement] = d$4(
      null
    );
    const addElementToContext = q$3(
      (el) => {
        addChatDomContext(currentChatId, el);
      },
      [addChatDomContext, currentChatId]
    );
    if (!shouldShow) return null;
    return /* @__PURE__ */ u$9(k$3, { children: [
      hoveredElement && /* @__PURE__ */ u$9(ContextItemProposal, { refElement: hoveredElement }),
      /* @__PURE__ */ u$9(
        ElementSelector,
        {
          ignoreList: contextElements,
          onElementHovered: setHoveredElement,
          onElementSelected: addElementToContext,
          onElementUnhovered: () => setHoveredElement(null)
        }
      ),
      contextElements.map((el) => /* @__PURE__ */ u$9(ContextItem, { refElement: el }))
    ] });
  }
  function DesktopLayout() {
    const minimized = useAppState((state) => state.minimized);
    return /* @__PURE__ */ u$9("div", { className: cn("fixed inset-0 h-screen w-screen"), children: [
      /* @__PURE__ */ u$9(SelectorCanvas, {}),
      !minimized && /* @__PURE__ */ u$9(ToolbarArea, {}),
      minimized && /* @__PURE__ */ u$9(ExpandButton, {})
    ] });
  }
  function ClickBlocker(props) {
    return /* @__PURE__ */ u$9(
      "div",
      {
        className: cn(
          typeof props.enable === "undefined" || props.enable ? "pointer-events-auto" : "pointer-events-none",
          props.className
        ),
        onClick: props.onClick,
        role: "button",
        tabIndex: 0
      }
    );
  }
  function FocusLock() {
    const focusInCompanion = A$3(false);
    y$6(() => {
      const originalFocus = HTMLElement.prototype.focus;
      HTMLElement.prototype.focus = function(...args) {
        const shadowRoot = this.getRootNode();
        const isInCompanion = shadowRoot instanceof ShadowRoot && shadowRoot.host instanceof HTMLElement && shadowRoot.host.nodeName === "STAGEWISE-COMPANION-ANCHOR";
        if (!isInCompanion && focusInCompanion.current) {
          return;
        }
        originalFocus.apply(this, args);
      };
      return () => {
        HTMLElement.prototype.focus = originalFocus;
      };
    }, []);
    useEventListener(
      "focusin",
      (event) => {
        if (event.target.localName === companionAnchorTagName) {
          focusInCompanion.current = true;
        }
      },
      { capture: true }
    );
    useEventListener(
      "focusout",
      (event) => {
        if (event.target.localName === companionAnchorTagName) {
          focusInCompanion.current = false;
        }
      },
      { capture: true }
    );
    return null;
  }
  function VisibilityManager({ children }) {
    return children;
  }
  function App(config) {
    const isMainAppBlocked = useAppState((state) => state.isMainAppBlocked);
    return /* @__PURE__ */ u$9(k$3, { children: [
      /* @__PURE__ */ u$9(FocusLock, {}),
      /* @__PURE__ */ u$9(
        ClickBlocker,
        {
          className: "fixed inset-0 h-screen w-screen",
          enable: isMainAppBlocked
        }
      ),
      /* @__PURE__ */ u$9(ContextProviders, { config, children: [
        /* @__PURE__ */ u$9(HotkeyListener, {}),
        /* @__PURE__ */ u$9(VisibilityManager, { children: /* @__PURE__ */ u$9(DesktopLayout, {}) })
      ] })
    ] });
  }
  function initToolbar(config) {
    if (!document.body)
      throw new Error("stagewise companion cannot find document.body");
    if (document.body.querySelector(companionAnchorTagName)) {
      console.warn(
        "A stagewise companion anchor already exists. Aborting this instance."
      );
      throw new Error("A stagewise companion anchor already exists.");
    }
    const shadowDomAnchor = document.createElement(companionAnchorTagName);
    shadowDomAnchor.style.position = "fixed";
    shadowDomAnchor.style.top = "0px";
    shadowDomAnchor.style.left = "0px";
    shadowDomAnchor.style.right = "0px";
    shadowDomAnchor.style.bottom = "0px";
    shadowDomAnchor.style.pointerEvents = "none";
    shadowDomAnchor.style.zIndex = "2147483647";
    const eventBlocker = (ev) => {
      ev.stopPropagation();
    };
    shadowDomAnchor.onclick = eventBlocker;
    shadowDomAnchor.onmousedown = eventBlocker;
    shadowDomAnchor.onmouseup = eventBlocker;
    shadowDomAnchor.onmousemove = eventBlocker;
    shadowDomAnchor.ondblclick = eventBlocker;
    shadowDomAnchor.oncontextmenu = eventBlocker;
    shadowDomAnchor.onwheel = eventBlocker;
    shadowDomAnchor.onfocus = eventBlocker;
    shadowDomAnchor.onblur = eventBlocker;
    document.body.appendChild(shadowDomAnchor);
    const fontLinkNode = document.createElement("link");
    fontLinkNode.rel = "stylesheet";
    fontLinkNode.href = `https://rsms.me/inter/inter.css"`;
    document.head.appendChild(fontLinkNode);
    const styleNode = document.createElement("style");
    styleNode.append(document.createTextNode(appStyle));
    document.head.appendChild(styleNode);
    E$3(_$4(App, config), shadowDomAnchor);
  }
  exports2.initToolbar = initToolbar;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
