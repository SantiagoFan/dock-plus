import { resolveComponent as B, createElementBlock as k, openBlock as g, createVNode as h, withCtx as _, createTextVNode as M, Fragment as L, renderList as z, createBlock as K, mergeProps as re, createElementVNode as v, ref as F, computed as pe, normalizeClass as $, toDisplayString as O, watch as it, nextTick as rt, resolveDirective as at, withDirectives as Oe, renderSlot as me, getCurrentInstance as st, reactive as ut, toRefs as dt, createCommentVNode as N, unref as Z, vShow as ct, withKeys as ft, normalizeStyle as gt } from "vue";
const le = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, l] of e)
    o[n] = l;
  return o;
}, ht = {
  name: "MlAdvancedQuery",
  props: {
    modelValue: {
      default: null,
      type: Object
    },
    fields: {
      default: () => [],
      type: Array
    }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: e }) {
    const o = F(!1), n = F([
      { label: "等于", value: "eq" },
      { label: "包含", value: "contains" },
      { label: "以..开始", value: "start" },
      { label: "以..结尾", value: "end" },
      { label: "在...中", value: "in" },
      { label: "不等于", value: "neq" },
      { label: "大于", value: "gt" },
      { label: "大于等于", value: "egt" },
      { label: "小于", value: "lt" },
      { label: "小于等于", value: "elt" }
    ]), l = pe({
      get: () => t.modelValue || { list: [], condition: "and" },
      set: (m) => e("update:modelValue", m)
    }), i = pe(() => l.value && Array.isArray(l.value.list) && l.value.list.length > 0), r = () => {
      e("update:modelValue", null);
    }, s = () => {
      o.value = !0;
    }, a = () => {
      o.value = !1, i.value && e("change");
    }, u = (m) => {
      const P = t.fields.find((c) => c.name == m);
      if (P) {
        const c = d(P.type);
        return Object.assign(c, P.props);
      } else
        return {};
    }, d = (m) => m == "date" ? { "value-format": "yyyy-MM-dd" } : m == "datetime" ? { "value-format": "yyyy-MM-dd HH:mm:ss" } : {};
    return {
      dialogVisible: o,
      operator: n,
      valueData: l,
      isUse: i,
      clear: r,
      showDialog: s,
      commit: a,
      getFieldProps: u,
      getDefaultProps: d,
      getFieldType: (m) => {
        const P = t.fields.find((c) => c.name == m);
        return P ? P.type : "text";
      },
      itemFieldChange: (m) => {
        m.value = "";
      },
      addItem: () => {
        const m = Object.assign({ list: [], condition: "and" }, l.value);
        m.list.push({ field: "", op: "eq", value: "" }), e("update:modelValue", m);
      },
      delItem: (m) => {
        l.value.list.splice(m, 1), e("update:modelValue", l.value);
      }
    };
  }
}, mt = { class: "ml-advanced-query" }, pt = { key: 1 }, yt = { class: "dialog-footer" };
function wt(t, e, o, n, l, i) {
  const r = B("el-button"), s = B("el-tooltip"), a = B("el-option"), u = B("el-select"), d = B("el-form-item"), S = B("el-input-number"), p = B("el-date-picker"), b = B("el-input"), E = B("el-empty"), m = B("el-form"), P = B("el-dialog");
  return g(), k("div", mt, [
    h(s, {
      effect: "dark",
      disabled: !n.isUse,
      placement: "top-start"
    }, {
      content: _(() => [
        e[5] || (e[5] = M(" 已有高级查询条件生效 | ", -1)),
        h(r, {
          type: "text",
          onClick: n.clear
        }, {
          default: _(() => [...e[4] || (e[4] = [
            M(" 清空", -1)
          ])]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: _(() => [
        h(r, {
          icon: n.isUse ? "el-icon-loading" : "el-icon-finished",
          onClick: n.showDialog,
          size: "small",
          type: "primary"
        }, {
          default: _(() => [...e[6] || (e[6] = [
            M(" 高级查询 ", -1)
          ])]),
          _: 1
        }, 8, ["icon", "onClick"])
      ]),
      _: 1
    }, 8, ["disabled"]),
    h(P, {
      modelValue: n.dialogVisible,
      "onUpdate:modelValue": e[3] || (e[3] = (c) => n.dialogVisible = c),
      title: "高级查询构造器",
      width: "700px",
      modal: !1
    }, {
      footer: _(() => [
        v("span", yt, [
          h(r, { onClick: n.clear }, {
            default: _(() => [...e[8] || (e[8] = [
              M("重置", -1)
            ])]),
            _: 1
          }, 8, ["onClick"]),
          h(r, {
            onClick: e[2] || (e[2] = (c) => n.dialogVisible = !1)
          }, {
            default: _(() => [...e[9] || (e[9] = [
              M("取 消", -1)
            ])]),
            _: 1
          }),
          h(r, {
            type: "primary",
            onClick: n.commit
          }, {
            default: _(() => [...e[10] || (e[10] = [
              M("确 定", -1)
            ])]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: _(() => [
        h(m, { inline: !0 }, {
          default: _(() => [
            n.isUse ? (g(), k(L, { key: 0 }, [
              h(d, { label: "条件连接关系" }, {
                default: _(() => [
                  h(u, {
                    modelValue: n.valueData.condition,
                    "onUpdate:modelValue": e[0] || (e[0] = (c) => n.valueData.condition = c),
                    size: "small",
                    style: { width: "250px" }
                  }, {
                    default: _(() => [
                      h(a, {
                        label: "AND（所有条件都要求匹配）",
                        value: "and"
                      }),
                      h(a, {
                        label: "OR（条件中的任意一个匹配）",
                        value: "or"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              (g(!0), k(L, null, z(n.valueData.list, (c, V) => (g(), k("div", {
                class: "row",
                key: V
              }, [
                h(d, null, {
                  default: _(() => [
                    h(u, {
                      modelValue: c.field,
                      "onUpdate:modelValue": (f) => c.field = f,
                      size: "small",
                      style: { width: "150px" },
                      onChange: (f) => n.itemFieldChange(c),
                      clearable: "",
                      placeholder: "请选择字段"
                    }, {
                      default: _(() => [
                        (g(!0), k(L, null, z(o.fields, (f) => (g(), K(a, {
                          key: f.name,
                          label: f.label,
                          value: f.name
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                  ]),
                  _: 2
                }, 1024),
                h(d, null, {
                  default: _(() => [
                    h(u, {
                      modelValue: c.op,
                      "onUpdate:modelValue": (f) => c.op = f,
                      size: "small",
                      style: { width: "100px" }
                    }, {
                      default: _(() => [
                        (g(!0), k(L, null, z(n.operator, (f) => (g(), K(a, {
                          key: f.value,
                          label: f.label,
                          value: f.value
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024),
                h(d, null, {
                  default: _(() => [
                    n.getFieldType(c.field) == "number" ? (g(), K(S, re({
                      key: 0,
                      ref_for: !0
                    }, n.getFieldProps(c.field), {
                      modelValue: c.value,
                      "onUpdate:modelValue": (f) => c.value = f,
                      size: "small",
                      controls: !1,
                      style: { width: "180px" }
                    }), null, 16, ["modelValue", "onUpdate:modelValue"])) : n.getFieldType(c.field) == "date" ? (g(), K(p, re({
                      key: 1,
                      type: "date"
                    }, { ref_for: !0 }, n.getFieldProps(c.field), {
                      modelValue: c.value,
                      "onUpdate:modelValue": (f) => c.value = f,
                      size: "small",
                      style: { width: "180px" }
                    }), null, 16, ["modelValue", "onUpdate:modelValue"])) : n.getFieldType(c.field) == "datetime" ? (g(), K(p, re({
                      key: 2,
                      type: "datetime"
                    }, { ref_for: !0 }, n.getFieldProps(c.field), {
                      modelValue: c.value,
                      "onUpdate:modelValue": (f) => c.value = f,
                      size: "small",
                      style: { width: "180px" }
                    }), null, 16, ["modelValue", "onUpdate:modelValue"])) : n.getFieldType(c.field) == "select" ? (g(), K(u, re({
                      key: 3,
                      ref_for: !0
                    }, n.getFieldProps(c.field), {
                      modelValue: c.value,
                      "onUpdate:modelValue": (f) => c.value = f,
                      size: "small",
                      style: { width: "180px" }
                    }), {
                      default: _(() => [
                        (g(!0), k(L, null, z(n.getFieldProps(c.field).options, (f) => (g(), K(a, {
                          key: f.value,
                          label: f.label,
                          value: f.value
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 2
                    }, 1040, ["modelValue", "onUpdate:modelValue"])) : (g(), K(b, re({
                      key: 4,
                      ref_for: !0
                    }, n.getFieldProps(c.field), {
                      modelValue: c.value,
                      "onUpdate:modelValue": (f) => c.value = f,
                      clearable: "",
                      placeholder: "请输入值",
                      size: "small",
                      style: { width: "180px" }
                    }), null, 16, ["modelValue", "onUpdate:modelValue"]))
                  ]),
                  _: 2
                }, 1024),
                h(d, null, {
                  default: _(() => [
                    h(r, {
                      size: "small",
                      type: "primary",
                      plain: "",
                      icon: "el-icon-plus",
                      onClick: e[1] || (e[1] = (f) => n.addItem())
                    }),
                    h(r, {
                      size: "small",
                      type: "danger",
                      plain: "",
                      icon: "el-icon-minus",
                      onClick: (f) => n.delItem(V)
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ]))), 128))
            ], 64)) : (g(), k("div", pt, [
              h(E, {
                style: { padding: "0" },
                "image-size": 100,
                description: "未添加任何查询条件"
              }, {
                default: _(() => [
                  h(r, {
                    type: "text",
                    onClick: n.addItem
                  }, {
                    default: _(() => [...e[7] || (e[7] = [
                      M("点击添加", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]))
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
const j = /* @__PURE__ */ le(ht, [["render", wt]]);
j.install = function(t) {
  t.component(j.name, j);
};
typeof window < "u" && window.Vue && window.Vue.component(j.name, j);
const bt = {
  name: "MlBgSelector",
  props: {
    modelValue: {
      default: "",
      type: String
    },
    disabled: {
      default: !1,
      type: Boolean
    }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const o = F(!1), n = F([
      { title: "魅红", name: "bg-gradual-red" },
      { title: "鎏金", name: "bg-gradual-orange" },
      { title: "翠柳", name: "bg-gradual-green" },
      { title: "靛青", name: "bg-gradual-blue" },
      { title: "惑紫", name: "bg-gradual-purple" },
      { title: "霞彩", name: "bg-gradual-pink" },
      { title: "嫣红", name: "bg-red", color: "#e54d42" },
      { title: "桔橙", name: "bg-orange", color: "#f37b1d" },
      { title: "明黄", name: "bg-yellow", color: "#fbbd08" },
      { title: "橄榄", name: "bg-olive", color: "#8dc63f" },
      { title: "森绿", name: "bg-green", color: "#39b54a" },
      { title: "天青", name: "bg-cyan", color: "#1cbbb4" },
      { title: "海蓝", name: "bg-blue", color: "#0081ff" },
      { title: "姹紫", name: "bg-purple", color: "#6739b6" },
      { title: "木槿", name: "bg-mauve", color: "#9c26b0" },
      { title: "桃粉", name: "bg-pink", color: "#e03997" },
      { title: "棕褐", name: "bg-brown", color: "#a5673f" },
      { title: "玄灰", name: "bg-grey", color: "#8799a3" },
      { title: "草灰", name: "bg-gray", color: "#aaaaaa" },
      { title: "墨黑", name: "bg-black", color: "#333333" },
      { title: "雅白", name: "bg-white", color: "#ffffff" }
    ]), l = pe({
      get: () => t.modelValue,
      set: (a) => e("update:modelValue", a)
    }), i = pe(() => {
      let a = "未设置";
      for (let u = 0; u < n.value.length; u++)
        if (n.value[u].name === l.value)
          return n.value[u].title;
      return a;
    });
    return {
      visible: o,
      list: n,
      valueData: l,
      title: i,
      select: (a) => {
        o.value = !1, e("update:modelValue", a.name);
      },
      clear: () => {
        o.value = !1, e("update:modelValue", null);
      }
    };
  }
}, _t = { class: "ml-bgSelector-container" }, vt = { class: "ml-bgSelector-container" }, Ct = ["onClick"];
function St(t, e, o, n, l, i) {
  const r = B("el-button"), s = B("el-table-column"), a = B("el-table"), u = B("el-popover");
  return g(), k("div", _t, [
    h(u, {
      placement: "right",
      width: 400,
      trigger: "click"
    }, {
      reference: _(() => [
        h(r, { style: { "margin-right": "16px" } }, {
          default: _(() => [...e[1] || (e[1] = [
            M("Click to activate", -1)
          ])]),
          _: 1
        })
      ]),
      default: _(() => [
        h(a, { data: [] }, {
          default: _(() => [
            h(s, {
              width: "150",
              property: "date",
              label: "date"
            }),
            h(s, {
              width: "100",
              property: "name",
              label: "name"
            }),
            h(s, {
              width: "300",
              property: "address",
              label: "address"
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    h(u, {
      placement: "right",
      width: "333",
      disabled: o.disabled,
      trigger: "click"
    }, {
      reference: _(() => [
        v("div", {
          class: $(["item", { disabled: o.disabled, [n.valueData]: !0 }])
        }, [
          M(O(n.title) + " ", 1),
          e[2] || (e[2] = v("i", { class: "el-icon-arrow-right" }, null, -1))
        ], 2)
      ]),
      default: _(() => [
        v("div", vt, [
          (g(!0), k(L, null, z(n.list, (d, S) => (g(), k("div", {
            key: S,
            class: $(["item", d.name]),
            onClick: (p) => n.select(d)
          }, O(d.title), 11, Ct))), 128)),
          v("div", {
            class: "item",
            onClick: e[0] || (e[0] = (d) => n.clear())
          }, [...e[3] || (e[3] = [
            v("i", { class: "el-icon-circle-close" }, null, -1)
          ])])
        ])
      ]),
      _: 1
    }, 8, ["disabled"])
  ]);
}
const q = /* @__PURE__ */ le(bt, [["render", St]]);
q.install = function(t) {
  t.component(q.name, q);
};
typeof window < "u" && window.Vue && window.Vue.component(q.name, q);
var ce = {}, kt = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, He = {}, R = {};
let Ne;
const Et = [
  0,
  // Not used
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
R.getSymbolSize = function(e) {
  if (!e) throw new Error('"version" cannot be null or undefined');
  if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
  return e * 4 + 17;
};
R.getSymbolTotalCodewords = function(e) {
  return Et[e];
};
R.getBCHDigit = function(t) {
  let e = 0;
  for (; t !== 0; )
    e++, t >>>= 1;
  return e;
};
R.setToSJISFunction = function(e) {
  if (typeof e != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Ne = e;
};
R.isKanjiModeEnabled = function() {
  return typeof Ne < "u";
};
R.toSJIS = function(e) {
  return Ne(e);
};
var be = {};
(function(t) {
  t.L = { bit: 1 }, t.M = { bit: 0 }, t.Q = { bit: 3 }, t.H = { bit: 2 };
  function e(o) {
    if (typeof o != "string")
      throw new Error("Param is not a string");
    switch (o.toLowerCase()) {
      case "l":
      case "low":
        return t.L;
      case "m":
      case "medium":
        return t.M;
      case "q":
      case "quartile":
        return t.Q;
      case "h":
      case "high":
        return t.H;
      default:
        throw new Error("Unknown EC Level: " + o);
    }
  }
  t.isValid = function(n) {
    return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
  }, t.from = function(n, l) {
    if (t.isValid(n))
      return n;
    try {
      return e(n);
    } catch {
      return l;
    }
  };
})(be);
function Je() {
  this.buffer = [], this.length = 0;
}
Je.prototype = {
  get: function(t) {
    const e = Math.floor(t / 8);
    return (this.buffer[e] >>> 7 - t % 8 & 1) === 1;
  },
  put: function(t, e) {
    for (let o = 0; o < e; o++)
      this.putBit((t >>> e - o - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(t) {
    const e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
  }
};
var Vt = Je;
function fe(t) {
  if (!t || t < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
}
fe.prototype.set = function(t, e, o, n) {
  const l = t * this.size + e;
  this.data[l] = o, n && (this.reservedBit[l] = !0);
};
fe.prototype.get = function(t, e) {
  return this.data[t * this.size + e];
};
fe.prototype.xor = function(t, e, o) {
  this.data[t * this.size + e] ^= o;
};
fe.prototype.isReserved = function(t, e) {
  return this.reservedBit[t * this.size + e];
};
var Bt = fe, xe = {};
(function(t) {
  const e = R.getSymbolSize;
  t.getRowColCoords = function(n) {
    if (n === 1) return [];
    const l = Math.floor(n / 7) + 2, i = e(n), r = i === 145 ? 26 : Math.ceil((i - 13) / (2 * l - 2)) * 2, s = [i - 7];
    for (let a = 1; a < l - 1; a++)
      s[a] = s[a - 1] - r;
    return s.push(6), s.reverse();
  }, t.getPositions = function(n) {
    const l = [], i = t.getRowColCoords(n), r = i.length;
    for (let s = 0; s < r; s++)
      for (let a = 0; a < r; a++)
        s === 0 && a === 0 || // top-left
        s === 0 && a === r - 1 || // bottom-left
        s === r - 1 && a === 0 || l.push([i[s], i[a]]);
    return l;
  };
})(xe);
var Ye = {};
const Pt = R.getSymbolSize, Fe = 7;
Ye.getPositions = function(e) {
  const o = Pt(e);
  return [
    // top-left
    [0, 0],
    // top-right
    [o - Fe, 0],
    // bottom-left
    [0, o - Fe]
  ];
};
var je = {};
(function(t) {
  t.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const e = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  t.isValid = function(l) {
    return l != null && l !== "" && !isNaN(l) && l >= 0 && l <= 7;
  }, t.from = function(l) {
    return t.isValid(l) ? parseInt(l, 10) : void 0;
  }, t.getPenaltyN1 = function(l) {
    const i = l.size;
    let r = 0, s = 0, a = 0, u = null, d = null;
    for (let S = 0; S < i; S++) {
      s = a = 0, u = d = null;
      for (let p = 0; p < i; p++) {
        let b = l.get(S, p);
        b === u ? s++ : (s >= 5 && (r += e.N1 + (s - 5)), u = b, s = 1), b = l.get(p, S), b === d ? a++ : (a >= 5 && (r += e.N1 + (a - 5)), d = b, a = 1);
      }
      s >= 5 && (r += e.N1 + (s - 5)), a >= 5 && (r += e.N1 + (a - 5));
    }
    return r;
  }, t.getPenaltyN2 = function(l) {
    const i = l.size;
    let r = 0;
    for (let s = 0; s < i - 1; s++)
      for (let a = 0; a < i - 1; a++) {
        const u = l.get(s, a) + l.get(s, a + 1) + l.get(s + 1, a) + l.get(s + 1, a + 1);
        (u === 4 || u === 0) && r++;
      }
    return r * e.N2;
  }, t.getPenaltyN3 = function(l) {
    const i = l.size;
    let r = 0, s = 0, a = 0;
    for (let u = 0; u < i; u++) {
      s = a = 0;
      for (let d = 0; d < i; d++)
        s = s << 1 & 2047 | l.get(u, d), d >= 10 && (s === 1488 || s === 93) && r++, a = a << 1 & 2047 | l.get(d, u), d >= 10 && (a === 1488 || a === 93) && r++;
    }
    return r * e.N3;
  }, t.getPenaltyN4 = function(l) {
    let i = 0;
    const r = l.data.length;
    for (let a = 0; a < r; a++) i += l.data[a];
    return Math.abs(Math.ceil(i * 100 / r / 5) - 10) * e.N4;
  };
  function o(n, l, i) {
    switch (n) {
      case t.Patterns.PATTERN000:
        return (l + i) % 2 === 0;
      case t.Patterns.PATTERN001:
        return l % 2 === 0;
      case t.Patterns.PATTERN010:
        return i % 3 === 0;
      case t.Patterns.PATTERN011:
        return (l + i) % 3 === 0;
      case t.Patterns.PATTERN100:
        return (Math.floor(l / 2) + Math.floor(i / 3)) % 2 === 0;
      case t.Patterns.PATTERN101:
        return l * i % 2 + l * i % 3 === 0;
      case t.Patterns.PATTERN110:
        return (l * i % 2 + l * i % 3) % 2 === 0;
      case t.Patterns.PATTERN111:
        return (l * i % 3 + (l + i) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + n);
    }
  }
  t.applyMask = function(l, i) {
    const r = i.size;
    for (let s = 0; s < r; s++)
      for (let a = 0; a < r; a++)
        i.isReserved(a, s) || i.xor(a, s, o(l, a, s));
  }, t.getBestMask = function(l, i) {
    const r = Object.keys(t.Patterns).length;
    let s = 0, a = 1 / 0;
    for (let u = 0; u < r; u++) {
      i(u), t.applyMask(u, l);
      const d = t.getPenaltyN1(l) + t.getPenaltyN2(l) + t.getPenaltyN3(l) + t.getPenaltyN4(l);
      t.applyMask(u, l), d < a && (a = d, s = u);
    }
    return s;
  };
})(je);
var _e = {};
const x = be, ge = [
  // L  M  Q  H
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
], he = [
  // L  M  Q  H
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
_e.getBlocksCount = function(e, o) {
  switch (o) {
    case x.L:
      return ge[(e - 1) * 4 + 0];
    case x.M:
      return ge[(e - 1) * 4 + 1];
    case x.Q:
      return ge[(e - 1) * 4 + 2];
    case x.H:
      return ge[(e - 1) * 4 + 3];
    default:
      return;
  }
};
_e.getTotalCodewordsCount = function(e, o) {
  switch (o) {
    case x.L:
      return he[(e - 1) * 4 + 0];
    case x.M:
      return he[(e - 1) * 4 + 1];
    case x.Q:
      return he[(e - 1) * 4 + 2];
    case x.H:
      return he[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var qe = {}, ve = {};
const ae = new Uint8Array(512), ye = new Uint8Array(256);
(function() {
  let e = 1;
  for (let o = 0; o < 255; o++)
    ae[o] = e, ye[e] = o, e <<= 1, e & 256 && (e ^= 285);
  for (let o = 255; o < 512; o++)
    ae[o] = ae[o - 255];
})();
ve.log = function(e) {
  if (e < 1) throw new Error("log(" + e + ")");
  return ye[e];
};
ve.exp = function(e) {
  return ae[e];
};
ve.mul = function(e, o) {
  return e === 0 || o === 0 ? 0 : ae[ye[e] + ye[o]];
};
(function(t) {
  const e = ve;
  t.mul = function(n, l) {
    const i = new Uint8Array(n.length + l.length - 1);
    for (let r = 0; r < n.length; r++)
      for (let s = 0; s < l.length; s++)
        i[r + s] ^= e.mul(n[r], l[s]);
    return i;
  }, t.mod = function(n, l) {
    let i = new Uint8Array(n);
    for (; i.length - l.length >= 0; ) {
      const r = i[0];
      for (let a = 0; a < l.length; a++)
        i[a] ^= e.mul(l[a], r);
      let s = 0;
      for (; s < i.length && i[s] === 0; ) s++;
      i = i.slice(s);
    }
    return i;
  }, t.generateECPolynomial = function(n) {
    let l = new Uint8Array([1]);
    for (let i = 0; i < n; i++)
      l = t.mul(l, new Uint8Array([1, e.exp(i)]));
    return l;
  };
})(qe);
const Qe = qe;
function Ie(t) {
  this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
}
Ie.prototype.initialize = function(e) {
  this.degree = e, this.genPoly = Qe.generateECPolynomial(this.degree);
};
Ie.prototype.encode = function(e) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const o = new Uint8Array(e.length + this.degree);
  o.set(e);
  const n = Qe.mod(o, this.genPoly), l = this.degree - n.length;
  if (l > 0) {
    const i = new Uint8Array(this.degree);
    return i.set(n, l), i;
  }
  return n;
};
var Tt = Ie, Ge = {}, Y = {}, Ue = {};
Ue.isValid = function(e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var H = {};
const We = "[0-9]+", At = "[A-Z $%*+\\-./:]+";
let de = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
de = de.replace(/u/g, "\\u");
const Mt = "(?:(?![A-Z0-9 $%*+\\-./:]|" + de + `)(?:.|[\r
]))+`;
H.KANJI = new RegExp(de, "g");
H.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
H.BYTE = new RegExp(Mt, "g");
H.NUMERIC = new RegExp(We, "g");
H.ALPHANUMERIC = new RegExp(At, "g");
const Nt = new RegExp("^" + de + "$"), It = new RegExp("^" + We + "$"), Ut = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
H.testKanji = function(e) {
  return Nt.test(e);
};
H.testNumeric = function(e) {
  return It.test(e);
};
H.testAlphanumeric = function(e) {
  return Ut.test(e);
};
(function(t) {
  const e = Ue, o = H;
  t.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  }, t.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  }, t.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  }, t.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  }, t.MIXED = {
    bit: -1
  }, t.getCharCountIndicator = function(i, r) {
    if (!i.ccBits) throw new Error("Invalid mode: " + i);
    if (!e.isValid(r))
      throw new Error("Invalid version: " + r);
    return r >= 1 && r < 10 ? i.ccBits[0] : r < 27 ? i.ccBits[1] : i.ccBits[2];
  }, t.getBestModeForData = function(i) {
    return o.testNumeric(i) ? t.NUMERIC : o.testAlphanumeric(i) ? t.ALPHANUMERIC : o.testKanji(i) ? t.KANJI : t.BYTE;
  }, t.toString = function(i) {
    if (i && i.id) return i.id;
    throw new Error("Invalid mode");
  }, t.isValid = function(i) {
    return i && i.bit && i.ccBits;
  };
  function n(l) {
    if (typeof l != "string")
      throw new Error("Param is not a string");
    switch (l.toLowerCase()) {
      case "numeric":
        return t.NUMERIC;
      case "alphanumeric":
        return t.ALPHANUMERIC;
      case "kanji":
        return t.KANJI;
      case "byte":
        return t.BYTE;
      default:
        throw new Error("Unknown mode: " + l);
    }
  }
  t.from = function(i, r) {
    if (t.isValid(i))
      return i;
    try {
      return n(i);
    } catch {
      return r;
    }
  };
})(Y);
(function(t) {
  const e = R, o = _e, n = be, l = Y, i = Ue, r = 7973, s = e.getBCHDigit(r);
  function a(p, b, E) {
    for (let m = 1; m <= 40; m++)
      if (b <= t.getCapacity(m, E, p))
        return m;
  }
  function u(p, b) {
    return l.getCharCountIndicator(p, b) + 4;
  }
  function d(p, b) {
    let E = 0;
    return p.forEach(function(m) {
      const P = u(m.mode, b);
      E += P + m.getBitsLength();
    }), E;
  }
  function S(p, b) {
    for (let E = 1; E <= 40; E++)
      if (d(p, E) <= t.getCapacity(E, b, l.MIXED))
        return E;
  }
  t.from = function(b, E) {
    return i.isValid(b) ? parseInt(b, 10) : E;
  }, t.getCapacity = function(b, E, m) {
    if (!i.isValid(b))
      throw new Error("Invalid QR Code version");
    typeof m > "u" && (m = l.BYTE);
    const P = e.getSymbolTotalCodewords(b), c = o.getTotalCodewordsCount(b, E), V = (P - c) * 8;
    if (m === l.MIXED) return V;
    const f = V - u(m, b);
    switch (m) {
      case l.NUMERIC:
        return Math.floor(f / 10 * 3);
      case l.ALPHANUMERIC:
        return Math.floor(f / 11 * 2);
      case l.KANJI:
        return Math.floor(f / 13);
      case l.BYTE:
      default:
        return Math.floor(f / 8);
    }
  }, t.getBestVersionForData = function(b, E) {
    let m;
    const P = n.from(E, n.M);
    if (Array.isArray(b)) {
      if (b.length > 1)
        return S(b, P);
      if (b.length === 0)
        return 1;
      m = b[0];
    } else
      m = b;
    return a(m.mode, m.getLength(), P);
  }, t.getEncodedBits = function(b) {
    if (!i.isValid(b) || b < 7)
      throw new Error("Invalid QR Code version");
    let E = b << 12;
    for (; e.getBCHDigit(E) - s >= 0; )
      E ^= r << e.getBCHDigit(E) - s;
    return b << 12 | E;
  };
})(Ge);
var Ze = {};
const Pe = R, Xe = 1335, Lt = 21522, ze = Pe.getBCHDigit(Xe);
Ze.getEncodedBits = function(e, o) {
  const n = e.bit << 3 | o;
  let l = n << 10;
  for (; Pe.getBCHDigit(l) - ze >= 0; )
    l ^= Xe << Pe.getBCHDigit(l) - ze;
  return (n << 10 | l) ^ Lt;
};
var $e = {};
const Rt = Y;
function ee(t) {
  this.mode = Rt.NUMERIC, this.data = t.toString();
}
ee.getBitsLength = function(e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
};
ee.prototype.getLength = function() {
  return this.data.length;
};
ee.prototype.getBitsLength = function() {
  return ee.getBitsLength(this.data.length);
};
ee.prototype.write = function(e) {
  let o, n, l;
  for (o = 0; o + 3 <= this.data.length; o += 3)
    n = this.data.substr(o, 3), l = parseInt(n, 10), e.put(l, 10);
  const i = this.data.length - o;
  i > 0 && (n = this.data.substr(o), l = parseInt(n, 10), e.put(l, i * 3 + 1));
};
var Dt = ee;
const Ft = Y, Se = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function te(t) {
  this.mode = Ft.ALPHANUMERIC, this.data = t;
}
te.getBitsLength = function(e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2);
};
te.prototype.getLength = function() {
  return this.data.length;
};
te.prototype.getBitsLength = function() {
  return te.getBitsLength(this.data.length);
};
te.prototype.write = function(e) {
  let o;
  for (o = 0; o + 2 <= this.data.length; o += 2) {
    let n = Se.indexOf(this.data[o]) * 45;
    n += Se.indexOf(this.data[o + 1]), e.put(n, 11);
  }
  this.data.length % 2 && e.put(Se.indexOf(this.data[o]), 6);
};
var zt = te;
const Kt = Y;
function ne(t) {
  this.mode = Kt.BYTE, typeof t == "string" ? this.data = new TextEncoder().encode(t) : this.data = new Uint8Array(t);
}
ne.getBitsLength = function(e) {
  return e * 8;
};
ne.prototype.getLength = function() {
  return this.data.length;
};
ne.prototype.getBitsLength = function() {
  return ne.getBitsLength(this.data.length);
};
ne.prototype.write = function(t) {
  for (let e = 0, o = this.data.length; e < o; e++)
    t.put(this.data[e], 8);
};
var Ot = ne;
const Ht = Y, Jt = R;
function oe(t) {
  this.mode = Ht.KANJI, this.data = t;
}
oe.getBitsLength = function(e) {
  return e * 13;
};
oe.prototype.getLength = function() {
  return this.data.length;
};
oe.prototype.getBitsLength = function() {
  return oe.getBitsLength(this.data.length);
};
oe.prototype.write = function(t) {
  let e;
  for (e = 0; e < this.data.length; e++) {
    let o = Jt.toSJIS(this.data[e]);
    if (o >= 33088 && o <= 40956)
      o -= 33088;
    else if (o >= 57408 && o <= 60351)
      o -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[e] + `
Make sure your charset is UTF-8`
      );
    o = (o >>> 8 & 255) * 192 + (o & 255), t.put(o, 13);
  }
};
var xt = oe, et = { exports: {} };
(function(t) {
  var e = {
    single_source_shortest_paths: function(o, n, l) {
      var i = {}, r = {};
      r[n] = 0;
      var s = e.PriorityQueue.make();
      s.push(n, 0);
      for (var a, u, d, S, p, b, E, m, P; !s.empty(); ) {
        a = s.pop(), u = a.value, S = a.cost, p = o[u] || {};
        for (d in p)
          p.hasOwnProperty(d) && (b = p[d], E = S + b, m = r[d], P = typeof r[d] > "u", (P || m > E) && (r[d] = E, s.push(d, E), i[d] = u));
      }
      if (typeof l < "u" && typeof r[l] > "u") {
        var c = ["Could not find a path from ", n, " to ", l, "."].join("");
        throw new Error(c);
      }
      return i;
    },
    extract_shortest_path_from_predecessor_list: function(o, n) {
      for (var l = [], i = n; i; )
        l.push(i), o[i], i = o[i];
      return l.reverse(), l;
    },
    find_path: function(o, n, l) {
      var i = e.single_source_shortest_paths(o, n, l);
      return e.extract_shortest_path_from_predecessor_list(
        i,
        l
      );
    },
    /**
     * A very naive priority queue implementation.
     */
    PriorityQueue: {
      make: function(o) {
        var n = e.PriorityQueue, l = {}, i;
        o = o || {};
        for (i in n)
          n.hasOwnProperty(i) && (l[i] = n[i]);
        return l.queue = [], l.sorter = o.sorter || n.default_sorter, l;
      },
      default_sorter: function(o, n) {
        return o.cost - n.cost;
      },
      /**
       * Add a new item to the queue and ensure the highest priority element
       * is at the front of the queue.
       */
      push: function(o, n) {
        var l = { value: o, cost: n };
        this.queue.push(l), this.queue.sort(this.sorter);
      },
      /**
       * Return the highest priority element in the queue.
       */
      pop: function() {
        return this.queue.shift();
      },
      empty: function() {
        return this.queue.length === 0;
      }
    }
  };
  t.exports = e;
})(et);
var Yt = et.exports;
(function(t) {
  const e = Y, o = Dt, n = zt, l = Ot, i = xt, r = H, s = R, a = Yt;
  function u(c) {
    return unescape(encodeURIComponent(c)).length;
  }
  function d(c, V, f) {
    const C = [];
    let y;
    for (; (y = c.exec(f)) !== null; )
      C.push({
        data: y[0],
        index: y.index,
        mode: V,
        length: y[0].length
      });
    return C;
  }
  function S(c) {
    const V = d(r.NUMERIC, e.NUMERIC, c), f = d(r.ALPHANUMERIC, e.ALPHANUMERIC, c);
    let C, y;
    return s.isKanjiModeEnabled() ? (C = d(r.BYTE, e.BYTE, c), y = d(r.KANJI, e.KANJI, c)) : (C = d(r.BYTE_KANJI, e.BYTE, c), y = []), V.concat(f, C, y).sort(function(T, I) {
      return T.index - I.index;
    }).map(function(T) {
      return {
        data: T.data,
        mode: T.mode,
        length: T.length
      };
    });
  }
  function p(c, V) {
    switch (V) {
      case e.NUMERIC:
        return o.getBitsLength(c);
      case e.ALPHANUMERIC:
        return n.getBitsLength(c);
      case e.KANJI:
        return i.getBitsLength(c);
      case e.BYTE:
        return l.getBitsLength(c);
    }
  }
  function b(c) {
    return c.reduce(function(V, f) {
      const C = V.length - 1 >= 0 ? V[V.length - 1] : null;
      return C && C.mode === f.mode ? (V[V.length - 1].data += f.data, V) : (V.push(f), V);
    }, []);
  }
  function E(c) {
    const V = [];
    for (let f = 0; f < c.length; f++) {
      const C = c[f];
      switch (C.mode) {
        case e.NUMERIC:
          V.push([
            C,
            { data: C.data, mode: e.ALPHANUMERIC, length: C.length },
            { data: C.data, mode: e.BYTE, length: C.length }
          ]);
          break;
        case e.ALPHANUMERIC:
          V.push([
            C,
            { data: C.data, mode: e.BYTE, length: C.length }
          ]);
          break;
        case e.KANJI:
          V.push([
            C,
            { data: C.data, mode: e.BYTE, length: u(C.data) }
          ]);
          break;
        case e.BYTE:
          V.push([
            { data: C.data, mode: e.BYTE, length: u(C.data) }
          ]);
      }
    }
    return V;
  }
  function m(c, V) {
    const f = {}, C = { start: {} };
    let y = ["start"];
    for (let w = 0; w < c.length; w++) {
      const T = c[w], I = [];
      for (let U = 0; U < T.length; U++) {
        const D = T[U], J = "" + w + U;
        I.push(J), f[J] = { node: D, lastCount: 0 }, C[J] = {};
        for (let ie = 0; ie < y.length; ie++) {
          const A = y[ie];
          f[A] && f[A].node.mode === D.mode ? (C[A][J] = p(f[A].lastCount + D.length, D.mode) - p(f[A].lastCount, D.mode), f[A].lastCount += D.length) : (f[A] && (f[A].lastCount = D.length), C[A][J] = p(D.length, D.mode) + 4 + e.getCharCountIndicator(D.mode, V));
        }
      }
      y = I;
    }
    for (let w = 0; w < y.length; w++)
      C[y[w]].end = 0;
    return { map: C, table: f };
  }
  function P(c, V) {
    let f;
    const C = e.getBestModeForData(c);
    if (f = e.from(V, C), f !== e.BYTE && f.bit < C.bit)
      throw new Error('"' + c + '" cannot be encoded with mode ' + e.toString(f) + `.
 Suggested mode is: ` + e.toString(C));
    switch (f === e.KANJI && !s.isKanjiModeEnabled() && (f = e.BYTE), f) {
      case e.NUMERIC:
        return new o(c);
      case e.ALPHANUMERIC:
        return new n(c);
      case e.KANJI:
        return new i(c);
      case e.BYTE:
        return new l(c);
    }
  }
  t.fromArray = function(V) {
    return V.reduce(function(f, C) {
      return typeof C == "string" ? f.push(P(C, null)) : C.data && f.push(P(C.data, C.mode)), f;
    }, []);
  }, t.fromString = function(V, f) {
    const C = S(V, s.isKanjiModeEnabled()), y = E(C), w = m(y, f), T = a.find_path(w.map, "start", "end"), I = [];
    for (let U = 1; U < T.length - 1; U++)
      I.push(w.table[T[U]].node);
    return t.fromArray(b(I));
  }, t.rawSplit = function(V) {
    return t.fromArray(
      S(V, s.isKanjiModeEnabled())
    );
  };
})($e);
const Ce = R, ke = be, jt = Vt, qt = Bt, Qt = xe, Gt = Ye, Te = je, Ae = _e, Wt = Tt, we = Ge, Zt = Ze, Xt = Y, Ee = $e;
function $t(t, e) {
  const o = t.size, n = Gt.getPositions(e);
  for (let l = 0; l < n.length; l++) {
    const i = n[l][0], r = n[l][1];
    for (let s = -1; s <= 7; s++)
      if (!(i + s <= -1 || o <= i + s))
        for (let a = -1; a <= 7; a++)
          r + a <= -1 || o <= r + a || (s >= 0 && s <= 6 && (a === 0 || a === 6) || a >= 0 && a <= 6 && (s === 0 || s === 6) || s >= 2 && s <= 4 && a >= 2 && a <= 4 ? t.set(i + s, r + a, !0, !0) : t.set(i + s, r + a, !1, !0));
  }
}
function en(t) {
  const e = t.size;
  for (let o = 8; o < e - 8; o++) {
    const n = o % 2 === 0;
    t.set(o, 6, n, !0), t.set(6, o, n, !0);
  }
}
function tn(t, e) {
  const o = Qt.getPositions(e);
  for (let n = 0; n < o.length; n++) {
    const l = o[n][0], i = o[n][1];
    for (let r = -2; r <= 2; r++)
      for (let s = -2; s <= 2; s++)
        r === -2 || r === 2 || s === -2 || s === 2 || r === 0 && s === 0 ? t.set(l + r, i + s, !0, !0) : t.set(l + r, i + s, !1, !0);
  }
}
function nn(t, e) {
  const o = t.size, n = we.getEncodedBits(e);
  let l, i, r;
  for (let s = 0; s < 18; s++)
    l = Math.floor(s / 3), i = s % 3 + o - 8 - 3, r = (n >> s & 1) === 1, t.set(l, i, r, !0), t.set(i, l, r, !0);
}
function Ve(t, e, o) {
  const n = t.size, l = Zt.getEncodedBits(e, o);
  let i, r;
  for (i = 0; i < 15; i++)
    r = (l >> i & 1) === 1, i < 6 ? t.set(i, 8, r, !0) : i < 8 ? t.set(i + 1, 8, r, !0) : t.set(n - 15 + i, 8, r, !0), i < 8 ? t.set(8, n - i - 1, r, !0) : i < 9 ? t.set(8, 15 - i - 1 + 1, r, !0) : t.set(8, 15 - i - 1, r, !0);
  t.set(n - 8, 8, 1, !0);
}
function on(t, e) {
  const o = t.size;
  let n = -1, l = o - 1, i = 7, r = 0;
  for (let s = o - 1; s > 0; s -= 2)
    for (s === 6 && s--; ; ) {
      for (let a = 0; a < 2; a++)
        if (!t.isReserved(l, s - a)) {
          let u = !1;
          r < e.length && (u = (e[r] >>> i & 1) === 1), t.set(l, s - a, u), i--, i === -1 && (r++, i = 7);
        }
      if (l += n, l < 0 || o <= l) {
        l -= n, n = -n;
        break;
      }
    }
}
function ln(t, e, o) {
  const n = new jt();
  o.forEach(function(a) {
    n.put(a.mode.bit, 4), n.put(a.getLength(), Xt.getCharCountIndicator(a.mode, t)), a.write(n);
  });
  const l = Ce.getSymbolTotalCodewords(t), i = Ae.getTotalCodewordsCount(t, e), r = (l - i) * 8;
  for (n.getLengthInBits() + 4 <= r && n.put(0, 4); n.getLengthInBits() % 8 !== 0; )
    n.putBit(0);
  const s = (r - n.getLengthInBits()) / 8;
  for (let a = 0; a < s; a++)
    n.put(a % 2 ? 17 : 236, 8);
  return rn(n, t, e);
}
function rn(t, e, o) {
  const n = Ce.getSymbolTotalCodewords(e), l = Ae.getTotalCodewordsCount(e, o), i = n - l, r = Ae.getBlocksCount(e, o), s = n % r, a = r - s, u = Math.floor(n / r), d = Math.floor(i / r), S = d + 1, p = u - d, b = new Wt(p);
  let E = 0;
  const m = new Array(r), P = new Array(r);
  let c = 0;
  const V = new Uint8Array(t.buffer);
  for (let T = 0; T < r; T++) {
    const I = T < a ? d : S;
    m[T] = V.slice(E, E + I), P[T] = b.encode(m[T]), E += I, c = Math.max(c, I);
  }
  const f = new Uint8Array(n);
  let C = 0, y, w;
  for (y = 0; y < c; y++)
    for (w = 0; w < r; w++)
      y < m[w].length && (f[C++] = m[w][y]);
  for (y = 0; y < p; y++)
    for (w = 0; w < r; w++)
      f[C++] = P[w][y];
  return f;
}
function an(t, e, o, n) {
  let l;
  if (Array.isArray(t))
    l = Ee.fromArray(t);
  else if (typeof t == "string") {
    let u = e;
    if (!u) {
      const d = Ee.rawSplit(t);
      u = we.getBestVersionForData(d, o);
    }
    l = Ee.fromString(t, u || 40);
  } else
    throw new Error("Invalid data");
  const i = we.getBestVersionForData(l, o);
  if (!i)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!e)
    e = i;
  else if (e < i)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + i + `.
`
    );
  const r = ln(e, o, l), s = Ce.getSymbolSize(e), a = new qt(s);
  return $t(a, e), en(a), tn(a, e), Ve(a, o, 0), e >= 7 && nn(a, e), on(a, r), isNaN(n) && (n = Te.getBestMask(
    a,
    Ve.bind(null, a, o)
  )), Te.applyMask(n, a), Ve(a, o, n), {
    modules: a,
    version: e,
    errorCorrectionLevel: o,
    maskPattern: n,
    segments: l
  };
}
He.create = function(e, o) {
  if (typeof e > "u" || e === "")
    throw new Error("No input text");
  let n = ke.M, l, i;
  return typeof o < "u" && (n = ke.from(o.errorCorrectionLevel, ke.M), l = we.from(o.version), i = Te.from(o.maskPattern), o.toSJISFunc && Ce.setToSJISFunction(o.toSJISFunc)), an(e, l, n, i);
};
var tt = {}, Le = {};
(function(t) {
  function e(o) {
    if (typeof o == "number" && (o = o.toString()), typeof o != "string")
      throw new Error("Color should be defined as hex string");
    let n = o.slice().replace("#", "").split("");
    if (n.length < 3 || n.length === 5 || n.length > 8)
      throw new Error("Invalid hex color: " + o);
    (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(i) {
      return [i, i];
    }))), n.length === 6 && n.push("F", "F");
    const l = parseInt(n.join(""), 16);
    return {
      r: l >> 24 & 255,
      g: l >> 16 & 255,
      b: l >> 8 & 255,
      a: l & 255,
      hex: "#" + n.slice(0, 6).join("")
    };
  }
  t.getOptions = function(n) {
    n || (n = {}), n.color || (n.color = {});
    const l = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, i = n.width && n.width >= 21 ? n.width : void 0, r = n.scale || 4;
    return {
      width: i,
      scale: i ? 4 : r,
      margin: l,
      color: {
        dark: e(n.color.dark || "#000000ff"),
        light: e(n.color.light || "#ffffffff")
      },
      type: n.type,
      rendererOpts: n.rendererOpts || {}
    };
  }, t.getScale = function(n, l) {
    return l.width && l.width >= n + l.margin * 2 ? l.width / (n + l.margin * 2) : l.scale;
  }, t.getImageWidth = function(n, l) {
    const i = t.getScale(n, l);
    return Math.floor((n + l.margin * 2) * i);
  }, t.qrToImageData = function(n, l, i) {
    const r = l.modules.size, s = l.modules.data, a = t.getScale(r, i), u = Math.floor((r + i.margin * 2) * a), d = i.margin * a, S = [i.color.light, i.color.dark];
    for (let p = 0; p < u; p++)
      for (let b = 0; b < u; b++) {
        let E = (p * u + b) * 4, m = i.color.light;
        if (p >= d && b >= d && p < u - d && b < u - d) {
          const P = Math.floor((p - d) / a), c = Math.floor((b - d) / a);
          m = S[s[P * r + c] ? 1 : 0];
        }
        n[E++] = m.r, n[E++] = m.g, n[E++] = m.b, n[E] = m.a;
      }
  };
})(Le);
(function(t) {
  const e = Le;
  function o(l, i, r) {
    l.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = r, i.width = r, i.style.height = r + "px", i.style.width = r + "px";
  }
  function n() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  t.render = function(i, r, s) {
    let a = s, u = r;
    typeof a > "u" && (!r || !r.getContext) && (a = r, r = void 0), r || (u = n()), a = e.getOptions(a);
    const d = e.getImageWidth(i.modules.size, a), S = u.getContext("2d"), p = S.createImageData(d, d);
    return e.qrToImageData(p.data, i, a), o(S, u, d), S.putImageData(p, 0, 0), u;
  }, t.renderToDataURL = function(i, r, s) {
    let a = s;
    typeof a > "u" && (!r || !r.getContext) && (a = r, r = void 0), a || (a = {});
    const u = t.render(i, r, a), d = a.type || "image/png", S = a.rendererOpts || {};
    return u.toDataURL(d, S.quality);
  };
})(tt);
var nt = {};
const sn = Le;
function Ke(t, e) {
  const o = t.a / 255, n = e + '="' + t.hex + '"';
  return o < 1 ? n + " " + e + '-opacity="' + o.toFixed(2).slice(1) + '"' : n;
}
function Be(t, e, o) {
  let n = t + e;
  return typeof o < "u" && (n += " " + o), n;
}
function un(t, e, o) {
  let n = "", l = 0, i = !1, r = 0;
  for (let s = 0; s < t.length; s++) {
    const a = Math.floor(s % e), u = Math.floor(s / e);
    !a && !i && (i = !0), t[s] ? (r++, s > 0 && a > 0 && t[s - 1] || (n += i ? Be("M", a + o, 0.5 + u + o) : Be("m", l, 0), l = 0, i = !1), a + 1 < e && t[s + 1] || (n += Be("h", r), r = 0)) : l++;
  }
  return n;
}
nt.render = function(e, o, n) {
  const l = sn.getOptions(o), i = e.modules.size, r = e.modules.data, s = i + l.margin * 2, a = l.color.light.a ? "<path " + Ke(l.color.light, "fill") + ' d="M0 0h' + s + "v" + s + 'H0z"/>' : "", u = "<path " + Ke(l.color.dark, "stroke") + ' d="' + un(r, i, l.margin) + '"/>', d = 'viewBox="0 0 ' + s + " " + s + '"', p = '<svg xmlns="http://www.w3.org/2000/svg" ' + (l.width ? 'width="' + l.width + '" height="' + l.width + '" ' : "") + d + ' shape-rendering="crispEdges">' + a + u + `</svg>
`;
  return typeof n == "function" && n(null, p), p;
};
const dn = kt, Me = He, ot = tt, cn = nt;
function Re(t, e, o, n, l) {
  const i = [].slice.call(arguments, 1), r = i.length, s = typeof i[r - 1] == "function";
  if (!s && !dn())
    throw new Error("Callback required as last argument");
  if (s) {
    if (r < 2)
      throw new Error("Too few arguments provided");
    r === 2 ? (l = o, o = e, e = n = void 0) : r === 3 && (e.getContext && typeof l > "u" ? (l = n, n = void 0) : (l = n, n = o, o = e, e = void 0));
  } else {
    if (r < 1)
      throw new Error("Too few arguments provided");
    return r === 1 ? (o = e, e = n = void 0) : r === 2 && !e.getContext && (n = o, o = e, e = void 0), new Promise(function(a, u) {
      try {
        const d = Me.create(o, n);
        a(t(d, e, n));
      } catch (d) {
        u(d);
      }
    });
  }
  try {
    const a = Me.create(o, n);
    l(null, t(a, e, n));
  } catch (a) {
    l(a);
  }
}
ce.create = Me.create;
ce.toCanvas = Re.bind(null, ot.render);
ce.toDataURL = Re.bind(null, ot.renderToDataURL);
ce.toString = Re.bind(null, function(t, e, o) {
  return cn.render(t, o);
});
const X = /* @__PURE__ */ Object.assign({
  name: "MlQrcode"
}, {
  __name: "qrcode",
  props: {
    text: {
      type: String,
      default: " "
    },
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 150
    },
    level: {
      type: String,
      default: "L"
    },
    colorDark: {
      type: String,
      default: "#000000"
    },
    colorLight: {
      type: String,
      default: "#ffffff"
    }
  },
  setup(t) {
    const e = t, o = F(null), n = F(null);
    return it(() => [e.text, e.width, e.height], async () => {
      rt(() => {
        try {
          n.value = null, ce.toCanvas(o.value, e.text, {
            width: e.width,
            height: e.height,
            errorCorrectionLevel: e.level,
            color: {
              light: e.colorLight,
              dark: e.colorDark
            },
            margin: 1
          });
        } catch (i) {
          console.error("二维码生成失败:", i), n.value = i.message;
        }
      });
    }, { deep: !0, immediate: !0 }), (i, r) => (g(), k("div", null, [
      v("canvas", {
        ref_key: "canvasRef",
        ref: o,
        class: "qrcode-container"
      }, null, 512)
    ]));
  }
});
X.install = function(t) {
  t.component(X.name, X);
};
const fn = {
  beforeMount(t, { value: e, arg: o }) {
    if (o === "callback")
      t.$copyCallback = e;
    else {
      t.$copyValue = e;
      const n = () => {
        gn(t.$copyValue), t.$copyCallback && t.$copyCallback(t.$copyValue);
      };
      t.addEventListener("click", n), t.$destroyCopy = () => t.removeEventListener("click", n);
    }
  }
};
function gn(t, { target: e = document.body } = {}) {
  const o = document.createElement("textarea"), n = document.activeElement;
  o.value = t, o.setAttribute("readonly", ""), o.style.contain = "strict", o.style.position = "absolute", o.style.left = "-9999px", o.style.fontSize = "12pt";
  const l = document.getSelection(), i = l.rangeCount > 0 && l.getRangeAt(0);
  e.append(o), o.select(), o.selectionStart = 0, o.selectionEnd = t.length;
  let r = !1;
  try {
    r = document.execCommand("copy");
  } catch {
  }
  return o.remove(), i && (l.removeAllRanges(), l.addRange(i)), n && n.focus(), r;
}
const hn = {
  name: "MlLinkViewer",
  components: { qrcode: X },
  directives: { copyText: fn },
  props: {
    url: {
      type: String,
      default: ""
    },
    trigger: {
      type: String,
      default: "click"
    }
  },
  setup() {
    const t = st();
    return {
      clipboardSuccess: () => {
        t.appContext.config.globalProperties.$message({
          message: "复制成功",
          type: "success",
          duration: 1500
        });
      }
    };
  }
}, mn = { style: { "text-align": "center", padding: "10px" } };
function pn(t, e, o, n, l, i) {
  const r = B("el-input"), s = B("el-button"), a = B("qrcode"), u = B("el-popover"), d = at("copyText");
  return g(), K(u, {
    class: "ml-linkViewer",
    placement: "bottom",
    width: "286",
    trigger: o.trigger
  }, {
    reference: _(() => [
      me(t.$slots, "default")
    ]),
    default: _(() => [
      h(r, {
        "model-value": o.url,
        disabled: "",
        size: "small",
        style: { width: "200px" }
      }, null, 8, ["model-value"]),
      Oe((g(), K(s, {
        size: "small",
        type: "primary"
      }, {
        default: _(() => [...e[0] || (e[0] = [
          M("复制", -1)
        ])]),
        _: 1
      })), [
        [d, o.url],
        [d, n.clipboardSuccess, "callback"]
      ]),
      v("div", mn, [
        h(a, {
          width: 200,
          height: 200,
          text: o.url
        }, null, 8, ["text"])
      ])
    ]),
    _: 3
  }, 8, ["trigger"]);
}
const Q = /* @__PURE__ */ le(hn, [["render", pn]]);
Q.install = function(t) {
  t.component(Q.name, Q);
};
typeof window < "u" && window.Vue && window.Vue.component(Q.name, Q);
const yn = { class: "ml-position-selector" }, wn = { style: { padding: "0px 10px" } }, bn = { class: "item" }, _n = { class: "map" }, vn = {
  id: "map",
  ref: "container",
  style: { width: "100%", height: "500px" }
}, Cn = { class: "address-search" }, Sn = {
  key: 0,
  class: "address-list"
}, kn = ["onClick"], En = { class: "address-title" }, Vn = { class: "address-info" }, Bn = { class: "dialog-footer" }, G = /* @__PURE__ */ Object.assign({
  name: "MlPositionSelector"
}, {
  __name: "PositionSelector",
  props: {
    mapKey: {
      type: String,
      default: ""
    },
    lng: {
      type: Number,
      default: 116.397502
    },
    lat: {
      type: Number,
      default: 39.908802
    },
    adcode: {
      type: String,
      default: ""
    },
    province: {
      type: String,
      default: ""
    },
    city: {
      type: String,
      default: ""
    },
    district: {
      type: String,
      default: ""
    },
    address: {
      type: String,
      default: ""
    }
  },
  emits: ["update:lng", "update:lat", "update:province", "update:city", "update:district", "update:adcode", "update:address", "change"],
  setup(t, { emit: e }) {
    const o = e, n = t, l = F(!1), i = F(null), r = F(null), s = F(null), a = F([]), u = ut({
      center: {
        height: 0,
        lng: n.lng || 116.397502,
        lat: n.lat || 39.908802
      },
      detail: {
        //地址临时分量
        adcode: n.adcode || "",
        province: n.province || "",
        city: n.city || "",
        district: n.district || "",
        address: n.address || ""
      },
      searchService: null,
      //关键字搜索服务
      suggestService: null,
      // 搜索建议服务
      geocoderService: null
      // 地址解析
    }), { detail: d, center: S } = dt(u), p = () => {
      l.value = !0, b();
    }, b = () => {
      r.value || E().then((y) => {
        u.center = new y.LatLng(n.lat || 39.908802, n.lng || 116.397502), i.value = y, r.value = new y.Map("map", {
          center: u.center,
          //设置地图中心点坐标
          zoom: 15,
          //设置地图缩放级别
          viewMode: "2D"
        }), r.value.on("click", c), m(u.center), u.suggestService = new y.service.Suggestion({
          pageSize: 10,
          regionFix: !1
          // 自动扩大范围到全国匹配
        }), u.geocoderService = new y.service.Geocoder();
      });
    }, E = () => new Promise((y) => {
      if (typeof window.TMap < "u")
        return y(window.TMap), !0;
      window.onMapCallback = function() {
        y(window.TMap);
      };
      let w = "https://map.qq.com/api/gljs?v=1.exp&libraries=tools,service&key=" + n.mapKey + "&callback=onMapCallback", T = document.createElement("script");
      T.setAttribute("type", "text/javascript"), T.setAttribute("src", w), document.body.appendChild(T);
    }), m = (y) => {
      s.value = new i.value.MultiMarker({
        map: r.value,
        styles: {
          // 点标记样式
          marker: new i.value.MarkerStyle({
            width: 20,
            // 样式宽
            height: 30,
            // 样式高
            anchor: { x: 10, y: 30 }
            // 描点位置
          })
        },
        geometries: [
          // 点标记数据数组
          {
            // 标记位置(纬度，经度，高度)
            position: y,
            id: "centerMarker"
          }
        ]
      });
    }, P = () => {
      const y = s.value.getGeometryById("centerMarker");
      Object.assign(y, {
        position: u.center
      }), s.value.updateGeometries([y]), a.value = [];
    }, c = (y) => {
      u.center = y.latLng, u.geocoderService.getAddress({
        location: y.latLng
      }).then((w) => {
        u.detail.address = w.result.address, u.detail.province = w.result.ad_info.province, u.detail.city = w.result.ad_info.city, u.detail.district = w.result.ad_info.district, u.detail.adcode = w.result.ad_info.adcode;
      }), P();
    }, V = () => {
      if (!u.detail.address) {
        a.value = [];
        return;
      }
      u.suggestService.getSuggestions({ keyword: u.detail.address, location: r.value.getCenter() }).then((y) => {
        a.value = y.data;
      });
    }, f = (y) => {
      u.center = y.location, P(), r.value.setCenter(y.location), u.detail.address = y.address, u.detail.province = y.province, u.detail.city = y.city, u.detail.district = y.district, u.detail.adcode = y.adcode;
    }, C = () => {
      o("update:lng", u.center.lng), o("update:lat", u.center.lat), o("update:province", u.detail.province), o("update:city", u.detail.city), o("update:district", u.detail.district), o("update:adcode", u.detail.adcode), o("update:address", u.detail.address), o("change", {
        ...u.detail,
        ...u.center
      }), l.value = !1;
    };
    return (y, w) => {
      const T = B("el-button"), I = B("el-row"), U = B("el-col"), D = B("el-card"), J = B("el-input"), ie = B("el-dialog");
      return g(), k("div", yn, [
        h(D, { shadow: "hover" }, {
          header: _(() => [
            v("div", wn, [
              w[6] || (w[6] = v("span", null, [
                v("i", { class: "el-icon-map-location" }),
                M(" 地址坐标")
              ], -1)),
              h(T, {
                style: { float: "right", padding: "10px 0" },
                type: "text",
                onClick: p
              }, {
                default: _(() => [...w[5] || (w[5] = [
                  M("选择地址", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: _(() => [
            v("div", bn, [
              h(I, null, {
                default: _(() => [
                  v("span", null, "地址：" + O(t.address ? t.address : "未设置"), 1)
                ]),
                _: 1
              }),
              h(I, { class: "sub-info" }, {
                default: _(() => [
                  h(U, { span: 12 }, {
                    default: _(() => [
                      M("经度：" + O(t.lng), 1)
                    ]),
                    _: 1
                  }),
                  h(U, { span: 12 }, {
                    default: _(() => [
                      M("纬度：" + O(t.lat), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        h(ie, {
          "custom-class": "ml-position-selector-dialog",
          modelValue: l.value,
          "onUpdate:modelValue": w[4] || (w[4] = (A) => l.value = A),
          title: "选择地图",
          width: "1000px",
          "append-to-body": ""
        }, {
          footer: _(() => [
            v("span", Bn, [
              h(I, { gutter: 10 }, {
                default: _(() => [
                  h(U, { span: 6 }, {
                    default: _(() => [
                      h(J, {
                        disabled: "",
                        modelValue: Z(S).lng,
                        "onUpdate:modelValue": w[1] || (w[1] = (A) => Z(S).lng = A),
                        placeholder: "坐标经度"
                      }, {
                        prepend: _(() => [...w[7] || (w[7] = [
                          M("经度", -1)
                        ])]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  h(U, { span: 6 }, {
                    default: _(() => [
                      h(J, {
                        disabled: "",
                        modelValue: Z(S).lat,
                        "onUpdate:modelValue": w[2] || (w[2] = (A) => Z(S).lat = A),
                        placeholder: "坐标纬度"
                      }, {
                        prepend: _(() => [...w[8] || (w[8] = [
                          M("纬度", -1)
                        ])]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  h(U, { span: 12 }, {
                    default: _(() => [
                      h(T, {
                        onClick: w[3] || (w[3] = (A) => l.value = !1)
                      }, {
                        default: _(() => [...w[9] || (w[9] = [
                          M("取 消", -1)
                        ])]),
                        _: 1
                      }),
                      h(T, {
                        type: "primary",
                        onClick: C
                      }, {
                        default: _(() => [...w[10] || (w[10] = [
                          M("确 定", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          default: _(() => [
            v("div", _n, [
              v("div", vn, null, 512),
              v("div", Cn, [
                h(J, {
                  modelValue: Z(d).address,
                  "onUpdate:modelValue": w[0] || (w[0] = (A) => Z(d).address = A),
                  onInput: V,
                  placeholder: "请输入地址来直接查找相关位置"
                }, null, 8, ["modelValue"])
              ]),
              a.value.length > 0 ? (g(), k("div", Sn, [
                (g(!0), k(L, null, z(a.value, (A, lt) => (g(), k("div", {
                  key: lt,
                  class: "items",
                  onClick: (po) => f(A)
                }, [
                  v("div", En, O(A.title), 1),
                  v("div", Vn, O(A.address), 1)
                ], 8, kn))), 128))
              ])) : N("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
G.install = function(t) {
  t.component(G.name, G);
};
typeof window < "u" && window.Vue && window.Vue.component(G.name, G);
const Pn = {
  name: "MlSkuSpec",
  props: {
    // 最多可添加规格项
    limit: {
      type: Number,
      default: 10
    },
    // 是否显示json
    isShowCode: {
      type: Boolean,
      default: !1
    },
    value: {
      // 规格
      type: Array,
      default: function() {
        return [];
      }
    },
    disabled: {
      // 是否禁用
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      // 用来存储要添加的规格属性
      addValues: []
    };
  },
  watch: {
    value: {
      handler: function() {
        this.$emit("update:model", this.value);
      },
      deep: !0
    }
  },
  methods: {
    // 添加规格项目
    addSpec() {
      this.value.length < this.limit && this.value.push({
        name: "",
        value: []
      });
    },
    // 删除规格项目
    delSpec(t) {
      this.value.splice(t, 1);
    },
    // 添加规格属性
    addSpecTag(t) {
      let e = this.addValues[t] || "";
      if (!e.trim()) return;
      e = e.trim();
      const o = e.split(/\s+/);
      let n = this.value[t].value.concat(o);
      n = Array.from(new Set(n)), this.$set(this.value[t], "value", n), this.clearAddValues(t);
    },
    // 删除规格属性
    delSpecTag(t, e) {
      this.disabled || this.value[t].value.splice(e, 1);
    },
    // 清空 addValues
    clearAddValues(t) {
      this.$set(this.addValues, t, "");
    },
    // 是否输入正确
    verify_name(t) {
      return this.value[t].name.trim() === "";
    },
    verify_value(t) {
      return this.value[t].value.length === 0;
    },
    // 验证所有字段
    verify() {
      var t = !0;
      return this.value.forEach((e) => {
        e.name.trim() === "" && (t = !1), e.value.length === 0 && (t = !1);
      }), t;
    }
  }
}, Tn = { class: "ml-sku-container" }, An = { class: "specification" }, Mn = { class: "spec-list" }, Nn = ["onClick"], In = { class: "values" }, Un = { class: "el-select__tags-text" }, Ln = ["onClick"], Rn = {
  key: 0,
  class: "item"
}, Dn = { class: "add-spec" }, Fn = {
  key: 0,
  class: "example"
}, zn = ["value"];
function Kn(t, e, o, n, l, i) {
  const r = B("el-input"), s = B("el-button");
  return g(), k("div", Tn, [
    v("div", An, [
      v("ul", Mn, [
        (g(!0), k(L, null, z(o.value, (a, u) => (g(), k("li", {
          key: u,
          class: "item"
        }, [
          v("div", {
            class: $(["name", { is_error: i.verify_name(u) }])
          }, [
            h(r, {
              modelValue: a.name,
              "onUpdate:modelValue": (d) => a.name = d,
              disabled: o.disabled,
              size: "small",
              placeholder: "输入产品规格名称"
            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
            e[0] || (e[0] = v("div", { class: "help_info" }, "例如:颜色,尺码", -1)),
            Oe(v("i", {
              class: "icon el-icon-circle-close",
              onClick: (d) => i.delSpec(u)
            }, null, 8, Nn), [
              [ct, !o.disabled]
            ])
          ], 2),
          v("div", In, [
            (g(!0), k(L, null, z(a.value, (d, S) => (g(), k("span", {
              key: d,
              class: "el-tag"
            }, [
              v("span", Un, O(d), 1),
              v("i", {
                class: "el-tag__close el-icon-close",
                onClick: (p) => i.delSpecTag(u, S)
              }, null, 8, Ln)
            ]))), 128)),
            v("div", {
              class: $(["add-attr", { is_error: i.verify_value(u) }])
            }, [
              h(r, {
                modelValue: l.addValues[u],
                "onUpdate:modelValue": (d) => l.addValues[u] = d,
                size: "small",
                placeholder: "多个产品属性以空格隔开",
                icon: "plus",
                disabled: o.disabled,
                onClick: (d) => i.addSpecTag(u),
                onKeyup: ft((d) => i.addSpecTag(u), ["native", "enter"])
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onClick", "onKeyup"]),
              e[1] || (e[1] = v("div", {
                class: "help_info",
                style: { float: "none" }
              }, "例如:红色,蓝色,L,M等", -1))
            ], 2)
          ])
        ]))), 128)),
        o.value.length < o.limit ? (g(), k("li", Rn, [
          v("div", Dn, [
            h(s, {
              plain: "",
              disabled: o.disabled,
              size: "small",
              type: "info",
              onClick: i.addSpec
            }, {
              default: _(() => [...e[2] || (e[2] = [
                M("添加规格项目", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "onClick"])
          ])
        ])) : N("", !0)
      ])
    ]),
    o.isShowCode ? (g(), k("div", Fn, [
      v("textarea", {
        class: "code-area",
        value: JSON.stringify(o.value)
      }, null, 8, zn)
    ])) : N("", !0)
  ]);
}
const se = /* @__PURE__ */ le(Pn, [["render", Kn]]);
se.install = function(t) {
  t.component(se.name, se);
};
function On(t) {
  return Array.prototype.reduce.call(t, function(e, o) {
    var n = [];
    return e.forEach(function(l) {
      o.forEach(function(i) {
        n.push(l.concat([i]));
      });
    }), n;
  }, [[]]);
}
const Hn = {
  name: "MlSkuTable",
  props: {
    defaultPrice: {
      type: Number,
      default: 1
    },
    // 是否显示json
    isShowCode: {
      type: Boolean,
      default: !1
    },
    // 是否显示 商品编码
    showProductNo: {
      type: Boolean,
      default: !0
    },
    // 是否显示成本
    showProductCost: {
      type: Boolean,
      default: !0
    },
    // 是否显示库存
    showProductStock: {
      type: Boolean,
      default: !0
    },
    showEnable: {
      type: Boolean,
      default: !0
    },
    specification: {
      // 规格
      type: Array,
      default: function() {
        return [];
      }
    },
    disabled: {
      // 是否禁用
      type: Boolean,
      default: !1
    },
    value: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      // 默认商品编号
      defaultSkuNo: "PRONO_",
      // 批量设置相关
      isSetListShow: !0,
      batchValue: "",
      // 批量设置所绑定的值
      currentType: ""
      // 要批量设置的类型
    };
  },
  watch: {
    specification: {
      handler() {
        this.bulidSKUS();
      },
      deep: !0,
      immediate: !0
    }
  },
  methods: {
    // 通过规格值计算sku 集合
    bulidSKUS() {
      const t = [];
      this.specification.forEach((n) => {
        n.value.length > 0 && t.push(n.value);
      });
      const e = On(t), o = [];
      e.forEach((n) => {
        if (n.length === 0) return;
        const l = this.getOldOrCreatData(JSON.stringify(n));
        o.push(l);
      }), this.value.length = 0, this.value.push(...o), this.$emit("input", this.value);
    },
    // 通过属性组合键 查询原数据 如果原来数据存在则重新赋值 不存在则创建新数据
    getOldOrCreatData(t) {
      let e = {
        ProductCost: this.defaultPrice,
        ProductId: 0,
        ProductNo: 1,
        ProductPrice: this.defaultPrice,
        ProductSpec: t,
        ProductStock: 999,
        isUse: !0
      };
      return this.value.forEach((o) => {
        o.ProductSpec === t && (e = o);
      }), e;
    },
    // 获得属性值
    getSpecValue(t, e) {
      const o = this.specification[t].value;
      let n;
      this.specification[t + 1] && this.specification[t + 1].value.length ? n = e / this.countSum(t + 1) : n = e;
      const l = Math.floor(n % o.length);
      return l.toString() !== "NaN" ? o[l] : "";
    },
    // 根据规格索引  计算后面规格值值的数量 计算自身纵向跨度
    countSum(t) {
      let e = 1;
      return this.specification.forEach((o, n) => {
        n >= t && o.value.length && (e *= o.value.length);
      }), e;
    },
    // 根据传入的条件，来判断是否显示该td
    showTd(t, e) {
      return this.specification[t] ? e % this.countSum(t + 1) === 0 : !1;
    },
    // 【 批处理相关 】
    // 打开设置框
    openBatch(t) {
      this.disabled || (this.currentType = t, this.isSetListShow = !1);
    },
    // 批量设置
    setBatch() {
      if (typeof this.batchValue == "string") {
        this.$message({
          type: "warning",
          message: "请输入正确的值"
        });
        return;
      }
      this.value.forEach((t) => {
        t.isUse && (t[this.currentType] = this.batchValue);
      }), this.cancelBatch();
    },
    // 取消批量设置
    cancelBatch() {
      this.batchValue = "", this.currentType = "", this.isSetListShow = !0;
    }
  }
}, Jn = { class: "ml-sku-container" }, xn = { class: "example" }, Yn = {
  class: "stock-table el-table el-table--border",
  cellspacing: "0",
  cellpadding: "0"
}, jn = {
  key: 0,
  style: { width: "160px" }
}, qn = {
  key: 1,
  style: { width: "160px" }
}, Qn = {
  key: 2,
  style: { width: "160px" }
}, Gn = {
  key: 3,
  style: { width: "100px" }
}, Wn = { key: 0 }, Zn = ["rowspan"], Xn = { key: 0 }, $n = { key: 1 }, eo = { key: 2 }, to = { key: 3 }, no = {
  colspan: "8",
  class: "wh-foot"
}, oo = {
  key: 0,
  class: "set-list"
}, lo = {
  key: 1,
  class: "set-form"
}, io = {
  key: 0,
  class: "example"
}, ro = ["value"];
function ao(t, e, o, n, l, i) {
  const r = B("el-input-number"), s = B("el-input"), a = B("el-switch");
  return g(), k("div", Jn, [
    v("div", xn, [
      v("table", Yn, [
        v("thead", null, [
          v("tr", null, [
            (g(!0), k(L, null, z(o.specification, (u, d) => (g(), k("th", { key: d }, O(u.name), 1))), 128)),
            e[6] || (e[6] = v("th", { style: { width: "160px" } }, "销售价（元）", -1)),
            o.showProductStock ? (g(), k("th", jn, "库存")) : N("", !0),
            o.showProductNo ? (g(), k("th", qn, "规格编码")) : N("", !0),
            o.showProductCost ? (g(), k("th", Qn, "成本价（元）")) : N("", !0),
            o.showEnable ? (g(), k("th", Gn, "是否启用")) : N("", !0)
          ])
        ]),
        o.value.length > 0 ? (g(), k("tbody", Wn, [
          (g(!0), k(L, null, z(o.value, (u, d) => (g(), k("tr", {
            key: u.ProductSpec
          }, [
            (g(!0), k(L, null, z(o.specification, (S, p) => (g(), k(L, null, [
              i.showTd(p, d) ? (g(), k("td", {
                rowspan: i.countSum(p + 1),
                key: p
              }, O(i.getSpecValue(p, d)), 9, Zn)) : N("", !0)
            ], 64))), 256)),
            v("td", null, [
              h(r, {
                modelValue: u.ProductPrice,
                "onUpdate:modelValue": (S) => u.ProductPrice = S,
                modelModifiers: { number: !0 },
                size: "small",
                min: 0,
                precision: 2,
                placeholder: "输入销售价",
                disabled: !u.isUse || o.disabled
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]),
            o.showProductStock ? (g(), k("td", Xn, [
              h(r, {
                modelValue: u.ProductStock,
                "onUpdate:modelValue": (S) => u.ProductStock = S,
                modelModifiers: { number: !0 },
                size: "small",
                min: 0,
                controls: !1,
                precision: 0,
                placeholder: "输入库存",
                disabled: !u.isUse || o.disabled
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ])) : N("", !0),
            o.showProductNo ? (g(), k("td", $n, [
              h(s, {
                modelValue: u.ProductNo,
                "onUpdate:modelValue": (S) => u.ProductNo = S,
                size: "small",
                type: "text",
                disabled: !u.isUse || o.disabled,
                placeholder: "输入商品规格编号"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ])) : N("", !0),
            o.showProductCost ? (g(), k("td", eo, [
              h(r, {
                modelValue: u.ProductCost,
                "onUpdate:modelValue": (S) => u.ProductCost = S,
                modelModifiers: { number: !0 },
                size: "small",
                min: 0,
                precision: 2,
                disabled: !u.isUse || o.disabled
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ])) : N("", !0),
            o.showEnable ? (g(), k("td", to, [
              h(a, {
                modelValue: u.isUse,
                "onUpdate:modelValue": (S) => u.isUse = S,
                disabled: o.disabled
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ])) : N("", !0)
          ]))), 128)),
          v("tr", null, [
            v("td", no, [
              e[7] || (e[7] = v("span", { class: "label" }, "批量设置：", -1)),
              l.isSetListShow ? (g(), k("div", oo, [
                v("span", {
                  class: "set-item",
                  onClick: e[0] || (e[0] = (u) => i.openBatch("ProductPrice"))
                }, "销售价"),
                o.showProductStock ? (g(), k("span", {
                  key: 0,
                  class: "set-item",
                  onClick: e[1] || (e[1] = (u) => i.openBatch("ProductStock"))
                }, "库存")) : N("", !0),
                o.showProductCost ? (g(), k("span", {
                  key: 1,
                  class: "set-item",
                  onClick: e[2] || (e[2] = (u) => i.openBatch("ProductCost"))
                }, "成本价")) : N("", !0)
              ])) : (g(), k("div", lo, [
                h(r, {
                  modelValue: l.batchValue,
                  "onUpdate:modelValue": e[3] || (e[3] = (u) => l.batchValue = u),
                  modelModifiers: { number: !0 },
                  controls: !1,
                  size: "mini",
                  min: 0,
                  precision: l.currentType == "ProductStock" ? 0 : 2,
                  placeholder: "输入要设置的数量"
                }, null, 8, ["modelValue", "precision"]),
                v("i", {
                  class: "set-btn blue el-icon-check",
                  onClick: e[4] || (e[4] = (...u) => i.setBatch && i.setBatch(...u))
                }),
                v("i", {
                  class: "set-btn red el-icon-close",
                  onClick: e[5] || (e[5] = (...u) => i.cancelBatch && i.cancelBatch(...u))
                })
              ]))
            ])
          ])
        ])) : N("", !0)
      ])
    ]),
    o.isShowCode ? (g(), k("div", io, [
      v("textarea", {
        class: "code-area",
        value: JSON.stringify(o.value)
      }, null, 8, ro)
    ])) : N("", !0)
  ]);
}
const ue = /* @__PURE__ */ le(Hn, [["render", ao]]);
ue.install = function(t) {
  t.component(ue.name, ue);
};
const so = {
  name: "MlTitleBar",
  props: {
    shadow: {
      // 阴影
      type: Boolean,
      default: !0
    },
    radius: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: "icon"
    },
    background: {
      // 背景颜色
      type: String,
      default: "#ffffff"
    },
    color: {
      // 文字颜色
      type: String,
      default: "#00000"
    }
  }
}, uo = { class: "left" }, co = { class: "center" }, fo = { class: "right" };
function go(t, e, o, n, l, i) {
  return g(), k("div", {
    class: $(["ml-title-bar", { shadow: o.shadow, radius: o.radius }]),
    style: gt({ background: o.background, color: o.color })
  }, [
    v("span", uo, [
      v("span", {
        class: $(o.icon)
      }, null, 2),
      me(t.$slots, "default")
    ]),
    v("span", co, [
      me(t.$slots, "center")
    ]),
    v("span", fo, [
      me(t.$slots, "right")
    ])
  ], 6);
}
const W = /* @__PURE__ */ le(so, [["render", go]]);
W.install = function(t) {
  t.component(W.name, W);
};
typeof window < "u" && window.Vue && window.Vue.component(W.name, W);
const ho = "0.3.5", mo = [
  j,
  q,
  Q,
  G,
  X,
  se,
  ue,
  W
], De = (t) => {
  if (De.installed) return !1;
  mo.forEach((e) => {
    e.install ? t.use(e) : e.name && t.component(e.name, e);
  });
};
typeof window < "u" && window.Vue && De(window.Vue);
const wo = {
  install: De,
  version: ho,
  AdvancedQuery: j,
  BgSelector: q,
  LinkViewer: Q,
  PositionSelector: G,
  Qrcode: X,
  SkuSpec: se,
  SkuTable: ue,
  TitleBar: W
};
export {
  wo as default
};
