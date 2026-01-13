import { resolveComponent as E, createElementBlock as C, openBlock as h, createVNode as m, withCtx as w, createTextVNode as T, Fragment as N, renderList as R, createBlock as F, mergeProps as le, createElementVNode as b, ref as L, computed as he, normalizeClass as X, toDisplayString as z, watch as ot, nextTick as lt, resolveDirective as it, withDirectives as Ke, renderSlot as ge, getCurrentInstance as rt, createCommentVNode as M, reactive as at, toRefs as st, vShow as ut, withKeys as dt, normalizeStyle as ct } from "vue";
const W = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, l] of e)
    o[n] = l;
  return o;
}, ft = {
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
    const o = L(!1), n = L([
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
    ]), l = he({
      get: () => t.modelValue || { list: [], condition: "and" },
      set: (y) => e("update:modelValue", y)
    }), i = he(() => l.value && Array.isArray(l.value.list) && l.value.list.length > 0), a = () => {
      e("update:modelValue", null);
    }, r = () => {
      o.value = !0;
    }, s = () => {
      o.value = !1, i.value && e("change");
    }, u = (y) => {
      const V = t.fields.find((d) => d.name == y);
      if (V) {
        const d = c(V.type);
        return Object.assign(d, V.props);
      } else
        return {};
    }, c = (y) => y == "date" ? { "value-format": "yyyy-MM-dd" } : y == "datetime" ? { "value-format": "yyyy-MM-dd HH:mm:ss" } : {};
    return {
      dialogVisible: o,
      operator: n,
      valueData: l,
      isUse: i,
      clear: a,
      showDialog: r,
      commit: s,
      getFieldProps: u,
      getDefaultProps: c,
      getFieldType: (y) => {
        const V = t.fields.find((d) => d.name == y);
        return V ? V.type : "text";
      },
      itemFieldChange: (y) => {
        y.value = "";
      },
      addItem: () => {
        const y = Object.assign({ list: [], condition: "and" }, l.value);
        y.list.push({ field: "", op: "eq", value: "" }), e("update:modelValue", y);
      },
      delItem: (y) => {
        l.value.list.splice(y, 1), e("update:modelValue", l.value);
      }
    };
  }
}, gt = { class: "ml-advanced-query" }, ht = { key: 1 }, mt = { class: "dialog-footer" };
function pt(t, e, o, n, l, i) {
  const a = E("el-button"), r = E("el-tooltip"), s = E("el-option"), u = E("el-select"), c = E("el-form-item"), _ = E("el-input-number"), g = E("el-date-picker"), p = E("el-input"), k = E("el-empty"), y = E("el-form"), V = E("el-dialog");
  return h(), C("div", gt, [
    m(r, {
      effect: "dark",
      disabled: !n.isUse,
      placement: "top-start"
    }, {
      content: w(() => [
        e[5] || (e[5] = T(" 已有高级查询条件生效 | ", -1)),
        m(a, {
          type: "text",
          onClick: n.clear
        }, {
          default: w(() => [...e[4] || (e[4] = [
            T(" 清空", -1)
          ])]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: w(() => [
        m(a, {
          icon: n.isUse ? "el-icon-loading" : "el-icon-finished",
          onClick: n.showDialog,
          size: "small",
          type: "primary"
        }, {
          default: w(() => [...e[6] || (e[6] = [
            T(" 高级查询 ", -1)
          ])]),
          _: 1
        }, 8, ["icon", "onClick"])
      ]),
      _: 1
    }, 8, ["disabled"]),
    m(V, {
      modelValue: n.dialogVisible,
      "onUpdate:modelValue": e[3] || (e[3] = (d) => n.dialogVisible = d),
      title: "高级查询构造器",
      width: "700px",
      modal: !1
    }, {
      footer: w(() => [
        b("span", mt, [
          m(a, { onClick: n.clear }, {
            default: w(() => [...e[8] || (e[8] = [
              T("重置", -1)
            ])]),
            _: 1
          }, 8, ["onClick"]),
          m(a, {
            onClick: e[2] || (e[2] = (d) => n.dialogVisible = !1)
          }, {
            default: w(() => [...e[9] || (e[9] = [
              T("取 消", -1)
            ])]),
            _: 1
          }),
          m(a, {
            type: "primary",
            onClick: n.commit
          }, {
            default: w(() => [...e[10] || (e[10] = [
              T("确 定", -1)
            ])]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: w(() => [
        m(y, { inline: !0 }, {
          default: w(() => [
            n.isUse ? (h(), C(N, { key: 0 }, [
              m(c, { label: "条件连接关系" }, {
                default: w(() => [
                  m(u, {
                    modelValue: n.valueData.condition,
                    "onUpdate:modelValue": e[0] || (e[0] = (d) => n.valueData.condition = d),
                    size: "small",
                    style: { width: "250px" }
                  }, {
                    default: w(() => [
                      m(s, {
                        label: "AND（所有条件都要求匹配）",
                        value: "and"
                      }),
                      m(s, {
                        label: "OR（条件中的任意一个匹配）",
                        value: "or"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              (h(!0), C(N, null, R(n.valueData.list, (d, v) => (h(), C("div", {
                class: "row",
                key: v
              }, [
                m(c, null, {
                  default: w(() => [
                    m(u, {
                      modelValue: d.field,
                      "onUpdate:modelValue": (f) => d.field = f,
                      size: "small",
                      style: { width: "150px" },
                      onChange: (f) => n.itemFieldChange(d),
                      clearable: "",
                      placeholder: "请选择字段"
                    }, {
                      default: w(() => [
                        (h(!0), C(N, null, R(o.fields, (f) => (h(), F(s, {
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
                m(c, null, {
                  default: w(() => [
                    m(u, {
                      modelValue: d.op,
                      "onUpdate:modelValue": (f) => d.op = f,
                      size: "small",
                      style: { width: "100px" }
                    }, {
                      default: w(() => [
                        (h(!0), C(N, null, R(n.operator, (f) => (h(), F(s, {
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
                m(c, null, {
                  default: w(() => [
                    n.getFieldType(d.field) == "number" ? (h(), F(_, le({
                      key: 0,
                      ref_for: !0
                    }, n.getFieldProps(d.field), {
                      modelValue: d.value,
                      "onUpdate:modelValue": (f) => d.value = f,
                      size: "small",
                      controls: !1,
                      style: { width: "180px" }
                    }), null, 16, ["modelValue", "onUpdate:modelValue"])) : n.getFieldType(d.field) == "date" ? (h(), F(g, le({
                      key: 1,
                      type: "date"
                    }, { ref_for: !0 }, n.getFieldProps(d.field), {
                      modelValue: d.value,
                      "onUpdate:modelValue": (f) => d.value = f,
                      size: "small",
                      style: { width: "180px" }
                    }), null, 16, ["modelValue", "onUpdate:modelValue"])) : n.getFieldType(d.field) == "datetime" ? (h(), F(g, le({
                      key: 2,
                      type: "datetime"
                    }, { ref_for: !0 }, n.getFieldProps(d.field), {
                      modelValue: d.value,
                      "onUpdate:modelValue": (f) => d.value = f,
                      size: "small",
                      style: { width: "180px" }
                    }), null, 16, ["modelValue", "onUpdate:modelValue"])) : n.getFieldType(d.field) == "select" ? (h(), F(u, le({
                      key: 3,
                      ref_for: !0
                    }, n.getFieldProps(d.field), {
                      modelValue: d.value,
                      "onUpdate:modelValue": (f) => d.value = f,
                      size: "small",
                      style: { width: "180px" }
                    }), {
                      default: w(() => [
                        (h(!0), C(N, null, R(n.getFieldProps(d.field).options, (f) => (h(), F(s, {
                          key: f.value,
                          label: f.label,
                          value: f.value
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 2
                    }, 1040, ["modelValue", "onUpdate:modelValue"])) : (h(), F(p, le({
                      key: 4,
                      ref_for: !0
                    }, n.getFieldProps(d.field), {
                      modelValue: d.value,
                      "onUpdate:modelValue": (f) => d.value = f,
                      clearable: "",
                      placeholder: "请输入值",
                      size: "small",
                      style: { width: "180px" }
                    }), null, 16, ["modelValue", "onUpdate:modelValue"]))
                  ]),
                  _: 2
                }, 1024),
                m(c, null, {
                  default: w(() => [
                    m(a, {
                      size: "small",
                      type: "primary",
                      plain: "",
                      icon: "el-icon-plus",
                      onClick: e[1] || (e[1] = (f) => n.addItem())
                    }),
                    m(a, {
                      size: "small",
                      type: "danger",
                      plain: "",
                      icon: "el-icon-minus",
                      onClick: (f) => n.delItem(v)
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ]))), 128))
            ], 64)) : (h(), C("div", ht, [
              m(k, {
                style: { padding: "0" },
                "image-size": 100,
                description: "未添加任何查询条件"
              }, {
                default: w(() => [
                  m(a, {
                    type: "text",
                    onClick: n.addItem
                  }, {
                    default: w(() => [...e[7] || (e[7] = [
                      T("点击添加", -1)
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
const q = /* @__PURE__ */ W(ft, [["render", pt]]);
q.install = function(t) {
  t.component(q.name, q);
};
typeof window < "u" && window.Vue && window.Vue.component(q.name, q);
const yt = {
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
    const o = L(!1), n = L([
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
    ]), l = he({
      get: () => t.modelValue,
      set: (s) => e("update:modelValue", s)
    }), i = he(() => {
      let s = "未设置";
      for (let u = 0; u < n.value.length; u++)
        if (n.value[u].name === l.value)
          return n.value[u].title;
      return s;
    });
    return {
      visible: o,
      list: n,
      valueData: l,
      title: i,
      select: (s) => {
        o.value = !1, e("update:modelValue", s.name);
      },
      clear: () => {
        o.value = !1, e("update:modelValue", null);
      }
    };
  }
}, wt = { class: "ml-bgSelector-container" }, bt = { class: "ml-bgSelector-container" }, _t = ["onClick"];
function vt(t, e, o, n, l, i) {
  const a = E("el-button"), r = E("el-table-column"), s = E("el-table"), u = E("el-popover");
  return h(), C("div", wt, [
    m(u, {
      placement: "right",
      width: 400,
      trigger: "click"
    }, {
      reference: w(() => [
        m(a, { style: { "margin-right": "16px" } }, {
          default: w(() => [...e[1] || (e[1] = [
            T("Click to activate", -1)
          ])]),
          _: 1
        })
      ]),
      default: w(() => [
        m(s, { data: [] }, {
          default: w(() => [
            m(r, {
              width: "150",
              property: "date",
              label: "date"
            }),
            m(r, {
              width: "100",
              property: "name",
              label: "name"
            }),
            m(r, {
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
    m(u, {
      placement: "right",
      width: "333",
      disabled: o.disabled,
      trigger: "click"
    }, {
      reference: w(() => [
        b("div", {
          class: X(["item", { disabled: o.disabled, [n.valueData]: !0 }])
        }, [
          T(z(n.title) + " ", 1),
          e[2] || (e[2] = b("i", { class: "el-icon-arrow-right" }, null, -1))
        ], 2)
      ]),
      default: w(() => [
        b("div", bt, [
          (h(!0), C(N, null, R(n.list, (c, _) => (h(), C("div", {
            key: _,
            class: X(["item", c.name]),
            onClick: (g) => n.select(c)
          }, z(c.title), 11, _t))), 128)),
          b("div", {
            class: "item",
            onClick: e[0] || (e[0] = (c) => n.clear())
          }, [...e[3] || (e[3] = [
            b("i", { class: "el-icon-circle-close" }, null, -1)
          ])])
        ])
      ]),
      _: 1
    }, 8, ["disabled"])
  ]);
}
const j = /* @__PURE__ */ W(yt, [["render", vt]]);
j.install = function(t) {
  t.component(j.name, j);
};
typeof window < "u" && window.Vue && window.Vue.component(j.name, j);
var ue = {}, Ct = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, Oe = {}, I = {};
let Me;
const St = [
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
I.getSymbolSize = function(e) {
  if (!e) throw new Error('"version" cannot be null or undefined');
  if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
  return e * 4 + 17;
};
I.getSymbolTotalCodewords = function(e) {
  return St[e];
};
I.getBCHDigit = function(t) {
  let e = 0;
  for (; t !== 0; )
    e++, t >>>= 1;
  return e;
};
I.setToSJISFunction = function(e) {
  if (typeof e != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Me = e;
};
I.isKanjiModeEnabled = function() {
  return typeof Me < "u";
};
I.toSJIS = function(e) {
  return Me(e);
};
var ye = {};
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
})(ye);
function He() {
  this.buffer = [], this.length = 0;
}
He.prototype = {
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
var kt = He;
function de(t) {
  if (!t || t < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
}
de.prototype.set = function(t, e, o, n) {
  const l = t * this.size + e;
  this.data[l] = o, n && (this.reservedBit[l] = !0);
};
de.prototype.get = function(t, e) {
  return this.data[t * this.size + e];
};
de.prototype.xor = function(t, e, o) {
  this.data[t * this.size + e] ^= o;
};
de.prototype.isReserved = function(t, e) {
  return this.reservedBit[t * this.size + e];
};
var Et = de, Je = {};
(function(t) {
  const e = I.getSymbolSize;
  t.getRowColCoords = function(n) {
    if (n === 1) return [];
    const l = Math.floor(n / 7) + 2, i = e(n), a = i === 145 ? 26 : Math.ceil((i - 13) / (2 * l - 2)) * 2, r = [i - 7];
    for (let s = 1; s < l - 1; s++)
      r[s] = r[s - 1] - a;
    return r.push(6), r.reverse();
  }, t.getPositions = function(n) {
    const l = [], i = t.getRowColCoords(n), a = i.length;
    for (let r = 0; r < a; r++)
      for (let s = 0; s < a; s++)
        r === 0 && s === 0 || // top-left
        r === 0 && s === a - 1 || // bottom-left
        r === a - 1 && s === 0 || l.push([i[r], i[s]]);
    return l;
  };
})(Je);
var Ye = {};
const Vt = I.getSymbolSize, De = 7;
Ye.getPositions = function(e) {
  const o = Vt(e);
  return [
    // top-left
    [0, 0],
    // top-right
    [o - De, 0],
    // bottom-left
    [0, o - De]
  ];
};
var qe = {};
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
    let a = 0, r = 0, s = 0, u = null, c = null;
    for (let _ = 0; _ < i; _++) {
      r = s = 0, u = c = null;
      for (let g = 0; g < i; g++) {
        let p = l.get(_, g);
        p === u ? r++ : (r >= 5 && (a += e.N1 + (r - 5)), u = p, r = 1), p = l.get(g, _), p === c ? s++ : (s >= 5 && (a += e.N1 + (s - 5)), c = p, s = 1);
      }
      r >= 5 && (a += e.N1 + (r - 5)), s >= 5 && (a += e.N1 + (s - 5));
    }
    return a;
  }, t.getPenaltyN2 = function(l) {
    const i = l.size;
    let a = 0;
    for (let r = 0; r < i - 1; r++)
      for (let s = 0; s < i - 1; s++) {
        const u = l.get(r, s) + l.get(r, s + 1) + l.get(r + 1, s) + l.get(r + 1, s + 1);
        (u === 4 || u === 0) && a++;
      }
    return a * e.N2;
  }, t.getPenaltyN3 = function(l) {
    const i = l.size;
    let a = 0, r = 0, s = 0;
    for (let u = 0; u < i; u++) {
      r = s = 0;
      for (let c = 0; c < i; c++)
        r = r << 1 & 2047 | l.get(u, c), c >= 10 && (r === 1488 || r === 93) && a++, s = s << 1 & 2047 | l.get(c, u), c >= 10 && (s === 1488 || s === 93) && a++;
    }
    return a * e.N3;
  }, t.getPenaltyN4 = function(l) {
    let i = 0;
    const a = l.data.length;
    for (let s = 0; s < a; s++) i += l.data[s];
    return Math.abs(Math.ceil(i * 100 / a / 5) - 10) * e.N4;
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
    const a = i.size;
    for (let r = 0; r < a; r++)
      for (let s = 0; s < a; s++)
        i.isReserved(s, r) || i.xor(s, r, o(l, s, r));
  }, t.getBestMask = function(l, i) {
    const a = Object.keys(t.Patterns).length;
    let r = 0, s = 1 / 0;
    for (let u = 0; u < a; u++) {
      i(u), t.applyMask(u, l);
      const c = t.getPenaltyN1(l) + t.getPenaltyN2(l) + t.getPenaltyN3(l) + t.getPenaltyN4(l);
      t.applyMask(u, l), c < s && (s = c, r = u);
    }
    return r;
  };
})(qe);
var we = {};
const J = ye, ce = [
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
], fe = [
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
we.getBlocksCount = function(e, o) {
  switch (o) {
    case J.L:
      return ce[(e - 1) * 4 + 0];
    case J.M:
      return ce[(e - 1) * 4 + 1];
    case J.Q:
      return ce[(e - 1) * 4 + 2];
    case J.H:
      return ce[(e - 1) * 4 + 3];
    default:
      return;
  }
};
we.getTotalCodewordsCount = function(e, o) {
  switch (o) {
    case J.L:
      return fe[(e - 1) * 4 + 0];
    case J.M:
      return fe[(e - 1) * 4 + 1];
    case J.Q:
      return fe[(e - 1) * 4 + 2];
    case J.H:
      return fe[(e - 1) * 4 + 3];
    default:
      return;
  }
};
var je = {}, be = {};
const ie = new Uint8Array(512), me = new Uint8Array(256);
(function() {
  let e = 1;
  for (let o = 0; o < 255; o++)
    ie[o] = e, me[e] = o, e <<= 1, e & 256 && (e ^= 285);
  for (let o = 255; o < 512; o++)
    ie[o] = ie[o - 255];
})();
be.log = function(e) {
  if (e < 1) throw new Error("log(" + e + ")");
  return me[e];
};
be.exp = function(e) {
  return ie[e];
};
be.mul = function(e, o) {
  return e === 0 || o === 0 ? 0 : ie[me[e] + me[o]];
};
(function(t) {
  const e = be;
  t.mul = function(n, l) {
    const i = new Uint8Array(n.length + l.length - 1);
    for (let a = 0; a < n.length; a++)
      for (let r = 0; r < l.length; r++)
        i[a + r] ^= e.mul(n[a], l[r]);
    return i;
  }, t.mod = function(n, l) {
    let i = new Uint8Array(n);
    for (; i.length - l.length >= 0; ) {
      const a = i[0];
      for (let s = 0; s < l.length; s++)
        i[s] ^= e.mul(l[s], a);
      let r = 0;
      for (; r < i.length && i[r] === 0; ) r++;
      i = i.slice(r);
    }
    return i;
  }, t.generateECPolynomial = function(n) {
    let l = new Uint8Array([1]);
    for (let i = 0; i < n; i++)
      l = t.mul(l, new Uint8Array([1, e.exp(i)]));
    return l;
  };
})(je);
const Qe = je;
function Ne(t) {
  this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
}
Ne.prototype.initialize = function(e) {
  this.degree = e, this.genPoly = Qe.generateECPolynomial(this.degree);
};
Ne.prototype.encode = function(e) {
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
var Bt = Ne, Ge = {}, Y = {}, Ie = {};
Ie.isValid = function(e) {
  return !isNaN(e) && e >= 1 && e <= 40;
};
var K = {};
const xe = "[0-9]+", Pt = "[A-Z $%*+\\-./:]+";
let se = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
se = se.replace(/u/g, "\\u");
const Tt = "(?:(?![A-Z0-9 $%*+\\-./:]|" + se + `)(?:.|[\r
]))+`;
K.KANJI = new RegExp(se, "g");
K.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
K.BYTE = new RegExp(Tt, "g");
K.NUMERIC = new RegExp(xe, "g");
K.ALPHANUMERIC = new RegExp(Pt, "g");
const At = new RegExp("^" + se + "$"), Mt = new RegExp("^" + xe + "$"), Nt = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
K.testKanji = function(e) {
  return At.test(e);
};
K.testNumeric = function(e) {
  return Mt.test(e);
};
K.testAlphanumeric = function(e) {
  return Nt.test(e);
};
(function(t) {
  const e = Ie, o = K;
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
  }, t.getCharCountIndicator = function(i, a) {
    if (!i.ccBits) throw new Error("Invalid mode: " + i);
    if (!e.isValid(a))
      throw new Error("Invalid version: " + a);
    return a >= 1 && a < 10 ? i.ccBits[0] : a < 27 ? i.ccBits[1] : i.ccBits[2];
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
  t.from = function(i, a) {
    if (t.isValid(i))
      return i;
    try {
      return n(i);
    } catch {
      return a;
    }
  };
})(Y);
(function(t) {
  const e = I, o = we, n = ye, l = Y, i = Ie, a = 7973, r = e.getBCHDigit(a);
  function s(g, p, k) {
    for (let y = 1; y <= 40; y++)
      if (p <= t.getCapacity(y, k, g))
        return y;
  }
  function u(g, p) {
    return l.getCharCountIndicator(g, p) + 4;
  }
  function c(g, p) {
    let k = 0;
    return g.forEach(function(y) {
      const V = u(y.mode, p);
      k += V + y.getBitsLength();
    }), k;
  }
  function _(g, p) {
    for (let k = 1; k <= 40; k++)
      if (c(g, k) <= t.getCapacity(k, p, l.MIXED))
        return k;
  }
  t.from = function(p, k) {
    return i.isValid(p) ? parseInt(p, 10) : k;
  }, t.getCapacity = function(p, k, y) {
    if (!i.isValid(p))
      throw new Error("Invalid QR Code version");
    typeof y > "u" && (y = l.BYTE);
    const V = e.getSymbolTotalCodewords(p), d = o.getTotalCodewordsCount(p, k), v = (V - d) * 8;
    if (y === l.MIXED) return v;
    const f = v - u(y, p);
    switch (y) {
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
  }, t.getBestVersionForData = function(p, k) {
    let y;
    const V = n.from(k, n.M);
    if (Array.isArray(p)) {
      if (p.length > 1)
        return _(p, V);
      if (p.length === 0)
        return 1;
      y = p[0];
    } else
      y = p;
    return s(y.mode, y.getLength(), V);
  }, t.getEncodedBits = function(p) {
    if (!i.isValid(p) || p < 7)
      throw new Error("Invalid QR Code version");
    let k = p << 12;
    for (; e.getBCHDigit(k) - r >= 0; )
      k ^= a << e.getBCHDigit(k) - r;
    return p << 12 | k;
  };
})(Ge);
var We = {};
const Be = I, Ze = 1335, It = 21522, Fe = Be.getBCHDigit(Ze);
We.getEncodedBits = function(e, o) {
  const n = e.bit << 3 | o;
  let l = n << 10;
  for (; Be.getBCHDigit(l) - Fe >= 0; )
    l ^= Ze << Be.getBCHDigit(l) - Fe;
  return (n << 10 | l) ^ It;
};
var Xe = {};
const Ut = Y;
function $(t) {
  this.mode = Ut.NUMERIC, this.data = t.toString();
}
$.getBitsLength = function(e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0);
};
$.prototype.getLength = function() {
  return this.data.length;
};
$.prototype.getBitsLength = function() {
  return $.getBitsLength(this.data.length);
};
$.prototype.write = function(e) {
  let o, n, l;
  for (o = 0; o + 3 <= this.data.length; o += 3)
    n = this.data.substr(o, 3), l = parseInt(n, 10), e.put(l, 10);
  const i = this.data.length - o;
  i > 0 && (n = this.data.substr(o), l = parseInt(n, 10), e.put(l, i * 3 + 1));
};
var Lt = $;
const Rt = Y, Ce = [
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
function ee(t) {
  this.mode = Rt.ALPHANUMERIC, this.data = t;
}
ee.getBitsLength = function(e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2);
};
ee.prototype.getLength = function() {
  return this.data.length;
};
ee.prototype.getBitsLength = function() {
  return ee.getBitsLength(this.data.length);
};
ee.prototype.write = function(e) {
  let o;
  for (o = 0; o + 2 <= this.data.length; o += 2) {
    let n = Ce.indexOf(this.data[o]) * 45;
    n += Ce.indexOf(this.data[o + 1]), e.put(n, 11);
  }
  this.data.length % 2 && e.put(Ce.indexOf(this.data[o]), 6);
};
var Dt = ee;
const Ft = Y;
function te(t) {
  this.mode = Ft.BYTE, typeof t == "string" ? this.data = new TextEncoder().encode(t) : this.data = new Uint8Array(t);
}
te.getBitsLength = function(e) {
  return e * 8;
};
te.prototype.getLength = function() {
  return this.data.length;
};
te.prototype.getBitsLength = function() {
  return te.getBitsLength(this.data.length);
};
te.prototype.write = function(t) {
  for (let e = 0, o = this.data.length; e < o; e++)
    t.put(this.data[e], 8);
};
var zt = te;
const Kt = Y, Ot = I;
function ne(t) {
  this.mode = Kt.KANJI, this.data = t;
}
ne.getBitsLength = function(e) {
  return e * 13;
};
ne.prototype.getLength = function() {
  return this.data.length;
};
ne.prototype.getBitsLength = function() {
  return ne.getBitsLength(this.data.length);
};
ne.prototype.write = function(t) {
  let e;
  for (e = 0; e < this.data.length; e++) {
    let o = Ot.toSJIS(this.data[e]);
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
var Ht = ne, $e = { exports: {} };
(function(t) {
  var e = {
    single_source_shortest_paths: function(o, n, l) {
      var i = {}, a = {};
      a[n] = 0;
      var r = e.PriorityQueue.make();
      r.push(n, 0);
      for (var s, u, c, _, g, p, k, y, V; !r.empty(); ) {
        s = r.pop(), u = s.value, _ = s.cost, g = o[u] || {};
        for (c in g)
          g.hasOwnProperty(c) && (p = g[c], k = _ + p, y = a[c], V = typeof a[c] > "u", (V || y > k) && (a[c] = k, r.push(c, k), i[c] = u));
      }
      if (typeof l < "u" && typeof a[l] > "u") {
        var d = ["Could not find a path from ", n, " to ", l, "."].join("");
        throw new Error(d);
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
})($e);
var Jt = $e.exports;
(function(t) {
  const e = Y, o = Lt, n = Dt, l = zt, i = Ht, a = K, r = I, s = Jt;
  function u(d) {
    return unescape(encodeURIComponent(d)).length;
  }
  function c(d, v, f) {
    const S = [];
    let B;
    for (; (B = d.exec(f)) !== null; )
      S.push({
        data: B[0],
        index: B.index,
        mode: v,
        length: B[0].length
      });
    return S;
  }
  function _(d) {
    const v = c(a.NUMERIC, e.NUMERIC, d), f = c(a.ALPHANUMERIC, e.ALPHANUMERIC, d);
    let S, B;
    return r.isKanjiModeEnabled() ? (S = c(a.BYTE, e.BYTE, d), B = c(a.KANJI, e.KANJI, d)) : (S = c(a.BYTE_KANJI, e.BYTE, d), B = []), v.concat(f, S, B).sort(function(A, U) {
      return A.index - U.index;
    }).map(function(A) {
      return {
        data: A.data,
        mode: A.mode,
        length: A.length
      };
    });
  }
  function g(d, v) {
    switch (v) {
      case e.NUMERIC:
        return o.getBitsLength(d);
      case e.ALPHANUMERIC:
        return n.getBitsLength(d);
      case e.KANJI:
        return i.getBitsLength(d);
      case e.BYTE:
        return l.getBitsLength(d);
    }
  }
  function p(d) {
    return d.reduce(function(v, f) {
      const S = v.length - 1 >= 0 ? v[v.length - 1] : null;
      return S && S.mode === f.mode ? (v[v.length - 1].data += f.data, v) : (v.push(f), v);
    }, []);
  }
  function k(d) {
    const v = [];
    for (let f = 0; f < d.length; f++) {
      const S = d[f];
      switch (S.mode) {
        case e.NUMERIC:
          v.push([
            S,
            { data: S.data, mode: e.ALPHANUMERIC, length: S.length },
            { data: S.data, mode: e.BYTE, length: S.length }
          ]);
          break;
        case e.ALPHANUMERIC:
          v.push([
            S,
            { data: S.data, mode: e.BYTE, length: S.length }
          ]);
          break;
        case e.KANJI:
          v.push([
            S,
            { data: S.data, mode: e.BYTE, length: u(S.data) }
          ]);
          break;
        case e.BYTE:
          v.push([
            { data: S.data, mode: e.BYTE, length: u(S.data) }
          ]);
      }
    }
    return v;
  }
  function y(d, v) {
    const f = {}, S = { start: {} };
    let B = ["start"];
    for (let P = 0; P < d.length; P++) {
      const A = d[P], U = [];
      for (let H = 0; H < A.length; H++) {
        const D = A[H], oe = "" + P + H;
        U.push(oe), f[oe] = { node: D, lastCount: 0 }, S[oe] = {};
        for (let ve = 0; ve < B.length; ve++) {
          const O = B[ve];
          f[O] && f[O].node.mode === D.mode ? (S[O][oe] = g(f[O].lastCount + D.length, D.mode) - g(f[O].lastCount, D.mode), f[O].lastCount += D.length) : (f[O] && (f[O].lastCount = D.length), S[O][oe] = g(D.length, D.mode) + 4 + e.getCharCountIndicator(D.mode, v));
        }
      }
      B = U;
    }
    for (let P = 0; P < B.length; P++)
      S[B[P]].end = 0;
    return { map: S, table: f };
  }
  function V(d, v) {
    let f;
    const S = e.getBestModeForData(d);
    if (f = e.from(v, S), f !== e.BYTE && f.bit < S.bit)
      throw new Error('"' + d + '" cannot be encoded with mode ' + e.toString(f) + `.
 Suggested mode is: ` + e.toString(S));
    switch (f === e.KANJI && !r.isKanjiModeEnabled() && (f = e.BYTE), f) {
      case e.NUMERIC:
        return new o(d);
      case e.ALPHANUMERIC:
        return new n(d);
      case e.KANJI:
        return new i(d);
      case e.BYTE:
        return new l(d);
    }
  }
  t.fromArray = function(v) {
    return v.reduce(function(f, S) {
      return typeof S == "string" ? f.push(V(S, null)) : S.data && f.push(V(S.data, S.mode)), f;
    }, []);
  }, t.fromString = function(v, f) {
    const S = _(v, r.isKanjiModeEnabled()), B = k(S), P = y(B, f), A = s.find_path(P.map, "start", "end"), U = [];
    for (let H = 1; H < A.length - 1; H++)
      U.push(P.table[A[H]].node);
    return t.fromArray(p(U));
  }, t.rawSplit = function(v) {
    return t.fromArray(
      _(v, r.isKanjiModeEnabled())
    );
  };
})(Xe);
const _e = I, Se = ye, Yt = kt, qt = Et, jt = Je, Qt = Ye, Pe = qe, Te = we, Gt = Bt, pe = Ge, xt = We, Wt = Y, ke = Xe;
function Zt(t, e) {
  const o = t.size, n = Qt.getPositions(e);
  for (let l = 0; l < n.length; l++) {
    const i = n[l][0], a = n[l][1];
    for (let r = -1; r <= 7; r++)
      if (!(i + r <= -1 || o <= i + r))
        for (let s = -1; s <= 7; s++)
          a + s <= -1 || o <= a + s || (r >= 0 && r <= 6 && (s === 0 || s === 6) || s >= 0 && s <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && s >= 2 && s <= 4 ? t.set(i + r, a + s, !0, !0) : t.set(i + r, a + s, !1, !0));
  }
}
function Xt(t) {
  const e = t.size;
  for (let o = 8; o < e - 8; o++) {
    const n = o % 2 === 0;
    t.set(o, 6, n, !0), t.set(6, o, n, !0);
  }
}
function $t(t, e) {
  const o = jt.getPositions(e);
  for (let n = 0; n < o.length; n++) {
    const l = o[n][0], i = o[n][1];
    for (let a = -2; a <= 2; a++)
      for (let r = -2; r <= 2; r++)
        a === -2 || a === 2 || r === -2 || r === 2 || a === 0 && r === 0 ? t.set(l + a, i + r, !0, !0) : t.set(l + a, i + r, !1, !0);
  }
}
function en(t, e) {
  const o = t.size, n = pe.getEncodedBits(e);
  let l, i, a;
  for (let r = 0; r < 18; r++)
    l = Math.floor(r / 3), i = r % 3 + o - 8 - 3, a = (n >> r & 1) === 1, t.set(l, i, a, !0), t.set(i, l, a, !0);
}
function Ee(t, e, o) {
  const n = t.size, l = xt.getEncodedBits(e, o);
  let i, a;
  for (i = 0; i < 15; i++)
    a = (l >> i & 1) === 1, i < 6 ? t.set(i, 8, a, !0) : i < 8 ? t.set(i + 1, 8, a, !0) : t.set(n - 15 + i, 8, a, !0), i < 8 ? t.set(8, n - i - 1, a, !0) : i < 9 ? t.set(8, 15 - i - 1 + 1, a, !0) : t.set(8, 15 - i - 1, a, !0);
  t.set(n - 8, 8, 1, !0);
}
function tn(t, e) {
  const o = t.size;
  let n = -1, l = o - 1, i = 7, a = 0;
  for (let r = o - 1; r > 0; r -= 2)
    for (r === 6 && r--; ; ) {
      for (let s = 0; s < 2; s++)
        if (!t.isReserved(l, r - s)) {
          let u = !1;
          a < e.length && (u = (e[a] >>> i & 1) === 1), t.set(l, r - s, u), i--, i === -1 && (a++, i = 7);
        }
      if (l += n, l < 0 || o <= l) {
        l -= n, n = -n;
        break;
      }
    }
}
function nn(t, e, o) {
  const n = new Yt();
  o.forEach(function(s) {
    n.put(s.mode.bit, 4), n.put(s.getLength(), Wt.getCharCountIndicator(s.mode, t)), s.write(n);
  });
  const l = _e.getSymbolTotalCodewords(t), i = Te.getTotalCodewordsCount(t, e), a = (l - i) * 8;
  for (n.getLengthInBits() + 4 <= a && n.put(0, 4); n.getLengthInBits() % 8 !== 0; )
    n.putBit(0);
  const r = (a - n.getLengthInBits()) / 8;
  for (let s = 0; s < r; s++)
    n.put(s % 2 ? 17 : 236, 8);
  return on(n, t, e);
}
function on(t, e, o) {
  const n = _e.getSymbolTotalCodewords(e), l = Te.getTotalCodewordsCount(e, o), i = n - l, a = Te.getBlocksCount(e, o), r = n % a, s = a - r, u = Math.floor(n / a), c = Math.floor(i / a), _ = c + 1, g = u - c, p = new Gt(g);
  let k = 0;
  const y = new Array(a), V = new Array(a);
  let d = 0;
  const v = new Uint8Array(t.buffer);
  for (let A = 0; A < a; A++) {
    const U = A < s ? c : _;
    y[A] = v.slice(k, k + U), V[A] = p.encode(y[A]), k += U, d = Math.max(d, U);
  }
  const f = new Uint8Array(n);
  let S = 0, B, P;
  for (B = 0; B < d; B++)
    for (P = 0; P < a; P++)
      B < y[P].length && (f[S++] = y[P][B]);
  for (B = 0; B < g; B++)
    for (P = 0; P < a; P++)
      f[S++] = V[P][B];
  return f;
}
function ln(t, e, o, n) {
  let l;
  if (Array.isArray(t))
    l = ke.fromArray(t);
  else if (typeof t == "string") {
    let u = e;
    if (!u) {
      const c = ke.rawSplit(t);
      u = pe.getBestVersionForData(c, o);
    }
    l = ke.fromString(t, u || 40);
  } else
    throw new Error("Invalid data");
  const i = pe.getBestVersionForData(l, o);
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
  const a = nn(e, o, l), r = _e.getSymbolSize(e), s = new qt(r);
  return Zt(s, e), Xt(s), $t(s, e), Ee(s, o, 0), e >= 7 && en(s, e), tn(s, a), isNaN(n) && (n = Pe.getBestMask(
    s,
    Ee.bind(null, s, o)
  )), Pe.applyMask(n, s), Ee(s, o, n), {
    modules: s,
    version: e,
    errorCorrectionLevel: o,
    maskPattern: n,
    segments: l
  };
}
Oe.create = function(e, o) {
  if (typeof e > "u" || e === "")
    throw new Error("No input text");
  let n = Se.M, l, i;
  return typeof o < "u" && (n = Se.from(o.errorCorrectionLevel, Se.M), l = pe.from(o.version), i = Pe.from(o.maskPattern), o.toSJISFunc && _e.setToSJISFunction(o.toSJISFunc)), ln(e, l, n, i);
};
var et = {}, Ue = {};
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
    const l = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, i = n.width && n.width >= 21 ? n.width : void 0, a = n.scale || 4;
    return {
      width: i,
      scale: i ? 4 : a,
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
    const a = l.modules.size, r = l.modules.data, s = t.getScale(a, i), u = Math.floor((a + i.margin * 2) * s), c = i.margin * s, _ = [i.color.light, i.color.dark];
    for (let g = 0; g < u; g++)
      for (let p = 0; p < u; p++) {
        let k = (g * u + p) * 4, y = i.color.light;
        if (g >= c && p >= c && g < u - c && p < u - c) {
          const V = Math.floor((g - c) / s), d = Math.floor((p - c) / s);
          y = _[r[V * a + d] ? 1 : 0];
        }
        n[k++] = y.r, n[k++] = y.g, n[k++] = y.b, n[k] = y.a;
      }
  };
})(Ue);
(function(t) {
  const e = Ue;
  function o(l, i, a) {
    l.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = a, i.width = a, i.style.height = a + "px", i.style.width = a + "px";
  }
  function n() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  t.render = function(i, a, r) {
    let s = r, u = a;
    typeof s > "u" && (!a || !a.getContext) && (s = a, a = void 0), a || (u = n()), s = e.getOptions(s);
    const c = e.getImageWidth(i.modules.size, s), _ = u.getContext("2d"), g = _.createImageData(c, c);
    return e.qrToImageData(g.data, i, s), o(_, u, c), _.putImageData(g, 0, 0), u;
  }, t.renderToDataURL = function(i, a, r) {
    let s = r;
    typeof s > "u" && (!a || !a.getContext) && (s = a, a = void 0), s || (s = {});
    const u = t.render(i, a, s), c = s.type || "image/png", _ = s.rendererOpts || {};
    return u.toDataURL(c, _.quality);
  };
})(et);
var tt = {};
const rn = Ue;
function ze(t, e) {
  const o = t.a / 255, n = e + '="' + t.hex + '"';
  return o < 1 ? n + " " + e + '-opacity="' + o.toFixed(2).slice(1) + '"' : n;
}
function Ve(t, e, o) {
  let n = t + e;
  return typeof o < "u" && (n += " " + o), n;
}
function an(t, e, o) {
  let n = "", l = 0, i = !1, a = 0;
  for (let r = 0; r < t.length; r++) {
    const s = Math.floor(r % e), u = Math.floor(r / e);
    !s && !i && (i = !0), t[r] ? (a++, r > 0 && s > 0 && t[r - 1] || (n += i ? Ve("M", s + o, 0.5 + u + o) : Ve("m", l, 0), l = 0, i = !1), s + 1 < e && t[r + 1] || (n += Ve("h", a), a = 0)) : l++;
  }
  return n;
}
tt.render = function(e, o, n) {
  const l = rn.getOptions(o), i = e.modules.size, a = e.modules.data, r = i + l.margin * 2, s = l.color.light.a ? "<path " + ze(l.color.light, "fill") + ' d="M0 0h' + r + "v" + r + 'H0z"/>' : "", u = "<path " + ze(l.color.dark, "stroke") + ' d="' + an(a, i, l.margin) + '"/>', c = 'viewBox="0 0 ' + r + " " + r + '"', g = '<svg xmlns="http://www.w3.org/2000/svg" ' + (l.width ? 'width="' + l.width + '" height="' + l.width + '" ' : "") + c + ' shape-rendering="crispEdges">' + s + u + `</svg>
`;
  return typeof n == "function" && n(null, g), g;
};
const sn = Ct, Ae = Oe, nt = et, un = tt;
function Le(t, e, o, n, l) {
  const i = [].slice.call(arguments, 1), a = i.length, r = typeof i[a - 1] == "function";
  if (!r && !sn())
    throw new Error("Callback required as last argument");
  if (r) {
    if (a < 2)
      throw new Error("Too few arguments provided");
    a === 2 ? (l = o, o = e, e = n = void 0) : a === 3 && (e.getContext && typeof l > "u" ? (l = n, n = void 0) : (l = n, n = o, o = e, e = void 0));
  } else {
    if (a < 1)
      throw new Error("Too few arguments provided");
    return a === 1 ? (o = e, e = n = void 0) : a === 2 && !e.getContext && (n = o, o = e, e = void 0), new Promise(function(s, u) {
      try {
        const c = Ae.create(o, n);
        s(t(c, e, n));
      } catch (c) {
        u(c);
      }
    });
  }
  try {
    const s = Ae.create(o, n);
    l(null, t(s, e, n));
  } catch (s) {
    l(s);
  }
}
ue.create = Ae.create;
ue.toCanvas = Le.bind(null, nt.render);
ue.toDataURL = Le.bind(null, nt.renderToDataURL);
ue.toString = Le.bind(null, function(t, e, o) {
  return un.render(t, o);
});
const Z = /* @__PURE__ */ Object.assign({
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
    const e = t, o = L(null), n = L(null);
    return ot(() => [e.text, e.width, e.height], async () => {
      lt(() => {
        try {
          n.value = null, ue.toCanvas(o.value, e.text, {
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
    }, { deep: !0, immediate: !0 }), (i, a) => (h(), C("div", null, [
      b("canvas", {
        ref_key: "canvasRef",
        ref: o,
        class: "qrcode-container"
      }, null, 512)
    ]));
  }
});
Z.install = function(t) {
  t.component(Z.name, Z);
};
const dn = {
  beforeMount(t, { value: e, arg: o }) {
    if (o === "callback")
      t.$copyCallback = e;
    else {
      t.$copyValue = e;
      const n = () => {
        cn(t.$copyValue), t.$copyCallback && t.$copyCallback(t.$copyValue);
      };
      t.addEventListener("click", n), t.$destroyCopy = () => t.removeEventListener("click", n);
    }
  }
};
function cn(t, { target: e = document.body } = {}) {
  const o = document.createElement("textarea"), n = document.activeElement;
  o.value = t, o.setAttribute("readonly", ""), o.style.contain = "strict", o.style.position = "absolute", o.style.left = "-9999px", o.style.fontSize = "12pt";
  const l = document.getSelection(), i = l.rangeCount > 0 && l.getRangeAt(0);
  e.append(o), o.select(), o.selectionStart = 0, o.selectionEnd = t.length;
  let a = !1;
  try {
    a = document.execCommand("copy");
  } catch {
  }
  return o.remove(), i && (l.removeAllRanges(), l.addRange(i)), n && n.focus(), a;
}
const fn = {
  name: "MlLinkViewer",
  components: { qrcode: Z },
  directives: { copyText: dn },
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
    const t = rt();
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
}, gn = { style: { "text-align": "center", padding: "10px" } };
function hn(t, e, o, n, l, i) {
  const a = E("el-input"), r = E("el-button"), s = E("qrcode"), u = E("el-popover"), c = it("copyText");
  return h(), F(u, {
    class: "ml-linkViewer",
    placement: "bottom",
    width: "286",
    trigger: o.trigger
  }, {
    reference: w(() => [
      ge(t.$slots, "default")
    ]),
    default: w(() => [
      m(a, {
        "model-value": o.url,
        disabled: "",
        size: "small",
        style: { width: "200px" }
      }, null, 8, ["model-value"]),
      Ke((h(), F(r, {
        size: "small",
        type: "primary"
      }, {
        default: w(() => [...e[0] || (e[0] = [
          T("复制", -1)
        ])]),
        _: 1
      })), [
        [c, o.url],
        [c, n.clipboardSuccess, "callback"]
      ]),
      b("div", gn, [
        m(s, {
          width: 200,
          height: 200,
          text: o.url
        }, null, 8, ["text"])
      ])
    ]),
    _: 3
  }, 8, ["trigger"]);
}
const Q = /* @__PURE__ */ W(fn, [["render", hn]]);
Q.install = function(t) {
  t.component(Q.name, Q);
};
typeof window < "u" && window.Vue && window.Vue.component(Q.name, Q);
const mn = {
  name: "MlPositionSelector",
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
    const o = L(!1), n = L(null), l = L(null), i = L(null), a = L([]), r = at({
      center: {
        height: 0,
        lng: t.lng || 116.397502,
        lat: t.lat || 39.908802
      },
      detail: {
        //地址临时分量
        adcode: t.adcode || "",
        province: t.province || "",
        city: t.city || "",
        district: t.district || "",
        address: t.address || ""
      },
      searchService: null,
      //关键字搜索服务
      suggestService: null,
      // 搜索建议服务
      geocoderService: null
      // 地址解析
    }), s = () => {
      o.value = !0, u();
    }, u = () => {
      l.value || c().then((d) => {
        r.center = new d.LatLng(t.lat || 39.908802, t.lng || 116.397502), n.value = d, l.value = new d.Map("map", {
          center: r.center,
          //设置地图中心点坐标
          zoom: 15,
          //设置地图缩放级别
          viewMode: "2D"
        }), l.value.on("click", p), _(r.center), r.suggestService = new d.service.Suggestion({
          pageSize: 10,
          regionFix: !1
          // 自动扩大范围到全国匹配
        }), r.geocoderService = new d.service.Geocoder();
      });
    }, c = () => new Promise((d) => {
      if (typeof window.TMap < "u")
        return d(window.TMap), !0;
      window.onMapCallback = function() {
        d(window.TMap);
      };
      let v = "https://map.qq.com/api/gljs?v=1.exp&libraries=tools,service&key=" + t.mapKey + "&callback=onMapCallback", f = document.createElement("script");
      f.setAttribute("type", "text/javascript"), f.setAttribute("src", v), document.body.appendChild(f);
    }), _ = (d) => {
      i.value = new n.value.MultiMarker({
        map: l.value,
        styles: {
          // 点标记样式
          marker: new n.value.MarkerStyle({
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
            position: d,
            id: "centerMarker"
          }
        ]
      });
    }, g = () => {
      const d = i.value.getGeometryById("centerMarker");
      Object.assign(d, {
        position: r.center
      }), i.value.updateGeometries([d]), a.value = [];
    }, p = (d) => {
      r.center = d.latLng, r.geocoderService.getAddress({
        location: d.latLng
      }).then((v) => {
        r.detail.address = v.result.address, r.detail.province = v.result.ad_info.province, r.detail.city = v.result.ad_info.city, r.detail.district = v.result.ad_info.district, r.detail.adcode = v.result.ad_info.adcode;
      }), g();
    }, k = () => {
      if (!r.detail.address) {
        a.value = [];
        return;
      }
      r.suggestService.getSuggestions({ keyword: r.detail.address, location: l.value.getCenter() }).then((d) => {
        a.value = d.data;
      });
    }, y = (d) => {
      r.center = d.location, g(), l.value.setCenter(d.location), r.detail.address = d.address, r.detail.province = d.province, r.detail.city = d.city, r.detail.district = d.district, r.detail.adcode = d.adcode;
    }, V = () => {
      e("update:lng", r.center.lng), e("update:lat", r.center.lat), e("update:province", r.detail.province), e("update:city", r.detail.city), e("update:district", r.detail.district), e("update:adcode", r.detail.adcode), e("update:address", r.detail.address), e("change", {
        ...r.detail,
        ...r.center
      }), o.value = !1;
    };
    return {
      dialogVisible: o,
      TMap: n,
      map: l,
      marker: i,
      nearPois: a,
      ...st(r),
      showMap: s,
      init: u,
      initMap: c,
      initMaker: _,
      moveCenter: g,
      mapClick: p,
      getSuggestions: k,
      selectAddress: y,
      Select: V
    };
  }
}, pn = { class: "ml-position-selector" }, yn = { style: { padding: "0px 10px" } }, wn = { class: "item" }, bn = { class: "map" }, _n = {
  id: "map",
  ref: "container",
  style: { width: "100%", height: "500px" }
}, vn = { class: "address-search" }, Cn = {
  key: 0,
  class: "address-list"
}, Sn = ["onClick"], kn = { class: "address-title" }, En = { class: "address-info" }, Vn = { class: "dialog-footer" };
function Bn(t, e, o, n, l, i) {
  const a = E("el-button"), r = E("el-row"), s = E("el-col"), u = E("el-card"), c = E("el-input"), _ = E("el-dialog");
  return h(), C("div", pn, [
    m(u, { shadow: "hover" }, {
      header: w(() => [
        b("div", yn, [
          e[6] || (e[6] = b("span", null, [
            b("i", { class: "el-icon-map-location" }),
            T(" 地址坐标")
          ], -1)),
          m(a, {
            style: { float: "right", padding: "10px 0" },
            type: "text",
            onClick: n.showMap
          }, {
            default: w(() => [...e[5] || (e[5] = [
              T("选择地址", -1)
            ])]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: w(() => [
        b("div", wn, [
          m(r, null, {
            default: w(() => [
              b("span", null, "地址：" + z(o.address ? o.address : "未设置"), 1)
            ]),
            _: 1
          }),
          m(r, { class: "sub-info" }, {
            default: w(() => [
              m(s, { span: 12 }, {
                default: w(() => [
                  T("经度：" + z(o.lng), 1)
                ]),
                _: 1
              }),
              m(s, { span: 12 }, {
                default: w(() => [
                  T("纬度：" + z(o.lat), 1)
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
    m(_, {
      "custom-class": "ml-position-selector-dialog",
      modelValue: n.dialogVisible,
      "onUpdate:modelValue": e[4] || (e[4] = (g) => n.dialogVisible = g),
      title: "选择地图",
      width: "1000px",
      "append-to-body": ""
    }, {
      footer: w(() => [
        b("span", Vn, [
          m(r, { gutter: 10 }, {
            default: w(() => [
              m(s, { span: 6 }, {
                default: w(() => [
                  m(c, {
                    disabled: "",
                    modelValue: t.center.lng,
                    "onUpdate:modelValue": e[1] || (e[1] = (g) => t.center.lng = g),
                    placeholder: "坐标经度"
                  }, {
                    prepend: w(() => [...e[7] || (e[7] = [
                      T("经度", -1)
                    ])]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              m(s, { span: 6 }, {
                default: w(() => [
                  m(c, {
                    disabled: "",
                    modelValue: t.center.lat,
                    "onUpdate:modelValue": e[2] || (e[2] = (g) => t.center.lat = g),
                    placeholder: "坐标纬度"
                  }, {
                    prepend: w(() => [...e[8] || (e[8] = [
                      T("纬度", -1)
                    ])]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              m(s, { span: 12 }, {
                default: w(() => [
                  m(a, {
                    onClick: e[3] || (e[3] = (g) => n.dialogVisible = !1)
                  }, {
                    default: w(() => [...e[9] || (e[9] = [
                      T("取 消", -1)
                    ])]),
                    _: 1
                  }),
                  m(a, {
                    type: "primary",
                    onClick: n.Select
                  }, {
                    default: w(() => [...e[10] || (e[10] = [
                      T("确 定", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]),
      default: w(() => [
        b("div", bn, [
          b("div", _n, null, 512),
          b("div", vn, [
            m(c, {
              modelValue: t.detail.address,
              "onUpdate:modelValue": e[0] || (e[0] = (g) => t.detail.address = g),
              onInput: n.getSuggestions,
              placeholder: "请输入地址来直接查找相关位置"
            }, null, 8, ["modelValue", "onInput"])
          ]),
          n.nearPois.length > 0 ? (h(), C("div", Cn, [
            (h(!0), C(N, null, R(n.nearPois, (g, p) => (h(), C("div", {
              key: p,
              class: "items",
              onClick: (k) => n.selectAddress(g)
            }, [
              b("div", kn, z(g.title), 1),
              b("div", En, z(g.address), 1)
            ], 8, Sn))), 128))
          ])) : M("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
const G = /* @__PURE__ */ W(mn, [["render", Bn]]);
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
  const a = E("el-input"), r = E("el-button");
  return h(), C("div", Tn, [
    b("div", An, [
      b("ul", Mn, [
        (h(!0), C(N, null, R(o.value, (s, u) => (h(), C("li", {
          key: u,
          class: "item"
        }, [
          b("div", {
            class: X(["name", { is_error: i.verify_name(u) }])
          }, [
            m(a, {
              modelValue: s.name,
              "onUpdate:modelValue": (c) => s.name = c,
              disabled: o.disabled,
              size: "small",
              placeholder: "输入产品规格名称"
            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
            e[0] || (e[0] = b("div", { class: "help_info" }, "例如:颜色,尺码", -1)),
            Ke(b("i", {
              class: "icon el-icon-circle-close",
              onClick: (c) => i.delSpec(u)
            }, null, 8, Nn), [
              [ut, !o.disabled]
            ])
          ], 2),
          b("div", In, [
            (h(!0), C(N, null, R(s.value, (c, _) => (h(), C("span", {
              key: c,
              class: "el-tag"
            }, [
              b("span", Un, z(c), 1),
              b("i", {
                class: "el-tag__close el-icon-close",
                onClick: (g) => i.delSpecTag(u, _)
              }, null, 8, Ln)
            ]))), 128)),
            b("div", {
              class: X(["add-attr", { is_error: i.verify_value(u) }])
            }, [
              m(a, {
                modelValue: l.addValues[u],
                "onUpdate:modelValue": (c) => l.addValues[u] = c,
                size: "small",
                placeholder: "多个产品属性以空格隔开",
                icon: "plus",
                disabled: o.disabled,
                onClick: (c) => i.addSpecTag(u),
                onKeyup: dt((c) => i.addSpecTag(u), ["native", "enter"])
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onClick", "onKeyup"]),
              e[1] || (e[1] = b("div", {
                class: "help_info",
                style: { float: "none" }
              }, "例如:红色,蓝色,L,M等", -1))
            ], 2)
          ])
        ]))), 128)),
        o.value.length < o.limit ? (h(), C("li", Rn, [
          b("div", Dn, [
            m(r, {
              plain: "",
              disabled: o.disabled,
              size: "small",
              type: "info",
              onClick: i.addSpec
            }, {
              default: w(() => [...e[2] || (e[2] = [
                T("添加规格项目", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "onClick"])
          ])
        ])) : M("", !0)
      ])
    ]),
    o.isShowCode ? (h(), C("div", Fn, [
      b("textarea", {
        class: "code-area",
        value: JSON.stringify(o.value)
      }, null, 8, zn)
    ])) : M("", !0)
  ]);
}
const re = /* @__PURE__ */ W(Pn, [["render", Kn]]);
re.install = function(t) {
  t.component(re.name, re);
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
}, Jn = { class: "ml-sku-container" }, Yn = { class: "example" }, qn = {
  class: "stock-table el-table el-table--border",
  cellspacing: "0",
  cellpadding: "0"
}, jn = {
  key: 0,
  style: { width: "160px" }
}, Qn = {
  key: 1,
  style: { width: "160px" }
}, Gn = {
  key: 2,
  style: { width: "160px" }
}, xn = {
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
  const a = E("el-input-number"), r = E("el-input"), s = E("el-switch");
  return h(), C("div", Jn, [
    b("div", Yn, [
      b("table", qn, [
        b("thead", null, [
          b("tr", null, [
            (h(!0), C(N, null, R(o.specification, (u, c) => (h(), C("th", { key: c }, z(u.name), 1))), 128)),
            e[6] || (e[6] = b("th", { style: { width: "160px" } }, "销售价（元）", -1)),
            o.showProductStock ? (h(), C("th", jn, "库存")) : M("", !0),
            o.showProductNo ? (h(), C("th", Qn, "规格编码")) : M("", !0),
            o.showProductCost ? (h(), C("th", Gn, "成本价（元）")) : M("", !0),
            o.showEnable ? (h(), C("th", xn, "是否启用")) : M("", !0)
          ])
        ]),
        o.value.length > 0 ? (h(), C("tbody", Wn, [
          (h(!0), C(N, null, R(o.value, (u, c) => (h(), C("tr", {
            key: u.ProductSpec
          }, [
            (h(!0), C(N, null, R(o.specification, (_, g) => (h(), C(N, null, [
              i.showTd(g, c) ? (h(), C("td", {
                rowspan: i.countSum(g + 1),
                key: g
              }, z(i.getSpecValue(g, c)), 9, Zn)) : M("", !0)
            ], 64))), 256)),
            b("td", null, [
              m(a, {
                modelValue: u.ProductPrice,
                "onUpdate:modelValue": (_) => u.ProductPrice = _,
                modelModifiers: { number: !0 },
                size: "small",
                min: 0,
                precision: 2,
                placeholder: "输入销售价",
                disabled: !u.isUse || o.disabled
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]),
            o.showProductStock ? (h(), C("td", Xn, [
              m(a, {
                modelValue: u.ProductStock,
                "onUpdate:modelValue": (_) => u.ProductStock = _,
                modelModifiers: { number: !0 },
                size: "small",
                min: 0,
                controls: !1,
                precision: 0,
                placeholder: "输入库存",
                disabled: !u.isUse || o.disabled
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ])) : M("", !0),
            o.showProductNo ? (h(), C("td", $n, [
              m(r, {
                modelValue: u.ProductNo,
                "onUpdate:modelValue": (_) => u.ProductNo = _,
                size: "small",
                type: "text",
                disabled: !u.isUse || o.disabled,
                placeholder: "输入商品规格编号"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ])) : M("", !0),
            o.showProductCost ? (h(), C("td", eo, [
              m(a, {
                modelValue: u.ProductCost,
                "onUpdate:modelValue": (_) => u.ProductCost = _,
                modelModifiers: { number: !0 },
                size: "small",
                min: 0,
                precision: 2,
                disabled: !u.isUse || o.disabled
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ])) : M("", !0),
            o.showEnable ? (h(), C("td", to, [
              m(s, {
                modelValue: u.isUse,
                "onUpdate:modelValue": (_) => u.isUse = _,
                disabled: o.disabled
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ])) : M("", !0)
          ]))), 128)),
          b("tr", null, [
            b("td", no, [
              e[7] || (e[7] = b("span", { class: "label" }, "批量设置：", -1)),
              l.isSetListShow ? (h(), C("div", oo, [
                b("span", {
                  class: "set-item",
                  onClick: e[0] || (e[0] = (u) => i.openBatch("ProductPrice"))
                }, "销售价"),
                o.showProductStock ? (h(), C("span", {
                  key: 0,
                  class: "set-item",
                  onClick: e[1] || (e[1] = (u) => i.openBatch("ProductStock"))
                }, "库存")) : M("", !0),
                o.showProductCost ? (h(), C("span", {
                  key: 1,
                  class: "set-item",
                  onClick: e[2] || (e[2] = (u) => i.openBatch("ProductCost"))
                }, "成本价")) : M("", !0)
              ])) : (h(), C("div", lo, [
                m(a, {
                  modelValue: l.batchValue,
                  "onUpdate:modelValue": e[3] || (e[3] = (u) => l.batchValue = u),
                  modelModifiers: { number: !0 },
                  controls: !1,
                  size: "mini",
                  min: 0,
                  precision: l.currentType == "ProductStock" ? 0 : 2,
                  placeholder: "输入要设置的数量"
                }, null, 8, ["modelValue", "precision"]),
                b("i", {
                  class: "set-btn blue el-icon-check",
                  onClick: e[4] || (e[4] = (...u) => i.setBatch && i.setBatch(...u))
                }),
                b("i", {
                  class: "set-btn red el-icon-close",
                  onClick: e[5] || (e[5] = (...u) => i.cancelBatch && i.cancelBatch(...u))
                })
              ]))
            ])
          ])
        ])) : M("", !0)
      ])
    ]),
    o.isShowCode ? (h(), C("div", io, [
      b("textarea", {
        class: "code-area",
        value: JSON.stringify(o.value)
      }, null, 8, ro)
    ])) : M("", !0)
  ]);
}
const ae = /* @__PURE__ */ W(Hn, [["render", ao]]);
ae.install = function(t) {
  t.component(ae.name, ae);
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
  return h(), C("div", {
    class: X(["ml-title-bar", { shadow: o.shadow, radius: o.radius }]),
    style: ct({ background: o.background, color: o.color })
  }, [
    b("span", uo, [
      b("span", {
        class: X(o.icon)
      }, null, 2),
      ge(t.$slots, "default")
    ]),
    b("span", co, [
      ge(t.$slots, "center")
    ]),
    b("span", fo, [
      ge(t.$slots, "right")
    ])
  ], 6);
}
const x = /* @__PURE__ */ W(so, [["render", go]]);
x.install = function(t) {
  t.component(x.name, x);
};
typeof window < "u" && window.Vue && window.Vue.component(x.name, x);
const ho = "0.3.5", mo = [
  q,
  j,
  Q,
  G,
  Z,
  re,
  ae,
  x
], Re = (t) => {
  if (Re.installed) return !1;
  mo.forEach((e) => {
    e.install ? t.use(e) : e.name && t.component(e.name, e);
  });
};
typeof window < "u" && window.Vue && Re(window.Vue);
const yo = {
  install: Re,
  version: ho,
  AdvancedQuery: q,
  BgSelector: j,
  LinkViewer: Q,
  PositionSelector: G,
  Qrcode: Z,
  SkuSpec: re,
  SkuTable: ae,
  TitleBar: x
};
export {
  yo as default
};
