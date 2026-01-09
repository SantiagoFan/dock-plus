import { resolveComponent as B, createElementBlock as k, openBlock as v, createVNode as b, withCtx as S, createTextVNode as M, Fragment as R, renderList as z, createBlock as K, mergeProps as ie, createElementVNode as w, ref as X, computed as ce, normalizeClass as te, toDisplayString as J, resolveDirective as we, withDirectives as ge, renderSlot as ue, getCurrentInstance as ke, createCommentVNode as N, reactive as Ce, toRefs as Se, vShow as Ve, withKeys as Pe, normalizeStyle as De } from "vue";
const Y = (i, l) => {
  const r = i.__vccOpts || i;
  for (const [s, p] of l)
    r[s] = p;
  return r;
}, Ee = {
  name: "JAdvancedQuery",
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
  setup(i, { emit: l }) {
    const r = X(!1), s = X([
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
    ]), p = ce({
      get: () => i.modelValue || { list: [], condition: "and" },
      set: (L) => l("update:modelValue", L)
    }), _ = ce(() => p.value && Array.isArray(p.value.list) && p.value.list.length > 0), V = () => {
      l("update:modelValue", null);
    }, h = () => {
      r.value = !0;
    }, m = () => {
      r.value = !1, _.value && l("change");
    }, u = (L) => {
      const U = i.fields.find((f) => f.name == L);
      if (U) {
        const f = y(U.type);
        return Object.assign(f, U.props);
      } else
        return {};
    }, y = (L) => L == "date" ? { "value-format": "yyyy-MM-dd" } : L == "datetime" ? { "value-format": "yyyy-MM-dd HH:mm:ss" } : {};
    return {
      dialogVisible: r,
      operator: s,
      valueData: p,
      isUse: _,
      clear: V,
      showDialog: h,
      commit: m,
      getFieldProps: u,
      getDefaultProps: y,
      getFieldType: (L) => {
        const U = i.fields.find((f) => f.name == L);
        return U ? U.type : "text";
      },
      itemFieldChange: (L) => {
        L.value = "";
      },
      addItem: () => {
        const L = Object.assign({ list: [], condition: "and" }, p.value);
        L.list.push({ field: "", op: "eq", value: "" }), l("update:modelValue", L);
      },
      delItem: (L) => {
        p.value.list.splice(L, 1), l("update:modelValue", p.value);
      }
    };
  }
}, Te = { class: "j-advanced-query" }, Ae = { key: 1 }, Be = { class: "dialog-footer" };
function Le(i, l, r, s, p, _) {
  const V = B("el-button"), h = B("el-tooltip"), m = B("el-option"), u = B("el-select"), y = B("el-form-item"), A = B("el-input-number"), D = B("el-date-picker"), Q = B("el-input"), I = B("el-empty"), L = B("el-form"), U = B("el-dialog");
  return v(), k("div", Te, [
    b(h, {
      effect: "dark",
      disabled: !s.isUse,
      placement: "top-start"
    }, {
      content: S(() => [
        l[5] || (l[5] = M(" 已有高级查询条件生效 | ", -1)),
        b(V, {
          type: "text",
          onClick: s.clear
        }, {
          default: S(() => [...l[4] || (l[4] = [
            M(" 清空", -1)
          ])]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: S(() => [
        b(V, {
          icon: s.isUse ? "el-icon-loading" : "el-icon-finished",
          onClick: s.showDialog,
          size: "small",
          type: "primary"
        }, {
          default: S(() => [...l[6] || (l[6] = [
            M(" 高级查询 ", -1)
          ])]),
          _: 1
        }, 8, ["icon", "onClick"])
      ]),
      _: 1
    }, 8, ["disabled"]),
    b(U, {
      modelValue: s.dialogVisible,
      "onUpdate:modelValue": l[3] || (l[3] = (f) => s.dialogVisible = f),
      title: "高级查询构造器",
      width: "700px",
      modal: !1
    }, {
      footer: S(() => [
        w("span", Be, [
          b(V, { onClick: s.clear }, {
            default: S(() => [...l[8] || (l[8] = [
              M("重置", -1)
            ])]),
            _: 1
          }, 8, ["onClick"]),
          b(V, {
            onClick: l[2] || (l[2] = (f) => s.dialogVisible = !1)
          }, {
            default: S(() => [...l[9] || (l[9] = [
              M("取 消", -1)
            ])]),
            _: 1
          }),
          b(V, {
            type: "primary",
            onClick: s.commit
          }, {
            default: S(() => [...l[10] || (l[10] = [
              M("确 定", -1)
            ])]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: S(() => [
        b(L, { inline: !0 }, {
          default: S(() => [
            s.isUse ? (v(), k(R, { key: 0 }, [
              b(y, { label: "条件连接关系" }, {
                default: S(() => [
                  b(u, {
                    modelValue: s.valueData.condition,
                    "onUpdate:modelValue": l[0] || (l[0] = (f) => s.valueData.condition = f),
                    size: "small",
                    style: { width: "250px" }
                  }, {
                    default: S(() => [
                      b(m, {
                        label: "AND（所有条件都要求匹配）",
                        value: "and"
                      }),
                      b(m, {
                        label: "OR（条件中的任意一个匹配）",
                        value: "or"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              (v(!0), k(R, null, z(s.valueData.list, (f, O) => (v(), k("div", {
                class: "row",
                key: O
              }, [
                b(y, null, {
                  default: S(() => [
                    b(u, {
                      modelValue: f.field,
                      "onUpdate:modelValue": (E) => f.field = E,
                      size: "small",
                      style: { width: "150px" },
                      onChange: (E) => s.itemFieldChange(f),
                      clearable: "",
                      placeholder: "请选择字段"
                    }, {
                      default: S(() => [
                        (v(!0), k(R, null, z(r.fields, (E) => (v(), K(m, {
                          key: E.name,
                          label: E.label,
                          value: E.name
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                  ]),
                  _: 2
                }, 1024),
                b(y, null, {
                  default: S(() => [
                    b(u, {
                      modelValue: f.op,
                      "onUpdate:modelValue": (E) => f.op = E,
                      size: "small",
                      style: { width: "100px" }
                    }, {
                      default: S(() => [
                        (v(!0), k(R, null, z(s.operator, (E) => (v(), K(m, {
                          key: E.value,
                          label: E.label,
                          value: E.value
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024),
                b(y, null, {
                  default: S(() => [
                    s.getFieldType(f.field) == "number" ? (v(), K(A, ie({
                      key: 0,
                      ref_for: !0
                    }, s.getFieldProps(f.field), {
                      modelValue: f.value,
                      "onUpdate:modelValue": (E) => f.value = E,
                      size: "small",
                      controls: !1,
                      style: { width: "180px" }
                    }), null, 16, ["modelValue", "onUpdate:modelValue"])) : s.getFieldType(f.field) == "date" ? (v(), K(D, ie({
                      key: 1,
                      type: "date"
                    }, { ref_for: !0 }, s.getFieldProps(f.field), {
                      modelValue: f.value,
                      "onUpdate:modelValue": (E) => f.value = E,
                      size: "small",
                      style: { width: "180px" }
                    }), null, 16, ["modelValue", "onUpdate:modelValue"])) : s.getFieldType(f.field) == "datetime" ? (v(), K(D, ie({
                      key: 2,
                      type: "datetime"
                    }, { ref_for: !0 }, s.getFieldProps(f.field), {
                      modelValue: f.value,
                      "onUpdate:modelValue": (E) => f.value = E,
                      size: "small",
                      style: { width: "180px" }
                    }), null, 16, ["modelValue", "onUpdate:modelValue"])) : s.getFieldType(f.field) == "select" ? (v(), K(u, ie({
                      key: 3,
                      ref_for: !0
                    }, s.getFieldProps(f.field), {
                      modelValue: f.value,
                      "onUpdate:modelValue": (E) => f.value = E,
                      size: "small",
                      style: { width: "180px" }
                    }), {
                      default: S(() => [
                        (v(!0), k(R, null, z(s.getFieldProps(f.field).options, (E) => (v(), K(m, {
                          key: E.value,
                          label: E.label,
                          value: E.value
                        }, null, 8, ["label", "value"]))), 128))
                      ]),
                      _: 2
                    }, 1040, ["modelValue", "onUpdate:modelValue"])) : (v(), K(Q, ie({
                      key: 4,
                      ref_for: !0
                    }, s.getFieldProps(f.field), {
                      modelValue: f.value,
                      "onUpdate:modelValue": (E) => f.value = E,
                      clearable: "",
                      placeholder: "请输入值",
                      size: "small",
                      style: { width: "180px" }
                    }), null, 16, ["modelValue", "onUpdate:modelValue"]))
                  ]),
                  _: 2
                }, 1024),
                b(y, null, {
                  default: S(() => [
                    b(V, {
                      size: "small",
                      type: "primary",
                      plain: "",
                      icon: "el-icon-plus",
                      onClick: l[1] || (l[1] = (E) => s.addItem())
                    }),
                    b(V, {
                      size: "small",
                      type: "danger",
                      plain: "",
                      icon: "el-icon-minus",
                      onClick: (E) => s.delItem(O)
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ]))), 128))
            ], 64)) : (v(), k("div", Ae, [
              b(I, {
                style: { padding: "0" },
                "image-size": 100,
                description: "未添加任何查询条件"
              }, {
                default: S(() => [
                  b(V, {
                    type: "text",
                    onClick: s.addItem
                  }, {
                    default: S(() => [...l[7] || (l[7] = [
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
const j = /* @__PURE__ */ Y(Ee, [["render", Le]]);
j.install = function(i) {
  i.component(j.name, j);
};
typeof window < "u" && window.Vue && window.Vue.component(j.name, j);
const Me = {
  name: "JBgSelector",
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
  setup(i, { emit: l }) {
    const r = X(!1), s = X([
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
    ]), p = ce({
      get: () => i.modelValue,
      set: (m) => l("update:modelValue", m)
    }), _ = ce(() => {
      let m = "未设置";
      for (let u = 0; u < s.value.length; u++)
        if (s.value[u].name === p.value)
          return s.value[u].title;
      return m;
    });
    return {
      visible: r,
      list: s,
      valueData: p,
      title: _,
      select: (m) => {
        r.value = !1, l("update:modelValue", m.name);
      },
      clear: () => {
        r.value = !1, l("update:modelValue", null);
      }
    };
  }
}, xe = { class: "jui-bgSelector-container" }, Ne = { class: "jui-bgSelector-container" }, Ue = ["onClick"];
function Re(i, l, r, s, p, _) {
  const V = B("el-popover");
  return v(), k("div", xe, [
    b(V, {
      visible: s.visible,
      "onUpdate:visible": l[1] || (l[1] = (h) => s.visible = h),
      placement: "right",
      width: "333",
      disabled: r.disabled,
      trigger: "click"
    }, {
      reference: S(() => [
        w("div", {
          class: te(["item", { disabled: r.disabled, [s.valueData]: !0 }])
        }, [
          M(J(s.title) + " ", 1),
          l[2] || (l[2] = w("i", { class: "el-icon-arrow-right" }, null, -1))
        ], 2)
      ]),
      default: S(() => [
        w("div", Ne, [
          (v(!0), k(R, null, z(s.list, (h, m) => (v(), k("div", {
            key: m,
            class: te(["item", h.name]),
            onClick: (u) => s.select(h)
          }, J(h.title), 11, Ue))), 128)),
          w("div", {
            class: "item",
            onClick: l[0] || (l[0] = (h) => s.clear())
          }, [...l[3] || (l[3] = [
            w("i", { class: "el-icon-circle-close" }, null, -1)
          ])])
        ])
      ]),
      _: 1
    }, 8, ["visible", "disabled"])
  ]);
}
const $ = /* @__PURE__ */ Y(Me, [["render", Re]]);
$.install = function(i) {
  i.component($.name, $);
};
typeof window < "u" && window.Vue && window.Vue.component($.name, $);
const ve = require("clipboard");
if (!ve)
  throw new Error("you should npm install `clipboard` --save at first ");
const oe = {
  bind(i, l) {
    if (l.arg === "success")
      i._v_clipboard_success = l.value;
    else if (l.arg === "error")
      i._v_clipboard_error = l.value;
    else {
      const r = new ve(i, {
        text() {
          return l.value;
        },
        action() {
          return l.arg === "cut" ? "cut" : "copy";
        }
      });
      r.on("success", (s) => {
        const p = i._v_clipboard_success;
        p && p(s);
      }), r.on("error", (s) => {
        const p = i._v_clipboard_error;
        p && p(s);
      }), i._v_clipboard = r;
    }
  },
  update(i, l) {
    l.arg === "success" ? i._v_clipboard_success = l.value : l.arg === "error" ? i._v_clipboard_error = l.value : (i._v_clipboard.text = function() {
      return l.value;
    }, i._v_clipboard.action = function() {
      return l.arg === "cut" ? "cut" : "copy";
    });
  },
  unbind(i, l) {
    l.arg === "success" ? delete i._v_clipboard_success : l.arg === "error" ? delete i._v_clipboard_error : (i._v_clipboard.destroy(), delete i._v_clipboard);
  }
}, me = function(i) {
  i.directive("Clipboard", oe);
};
window.Vue && (window.clipboard = oe, Vue.use(me));
oe.install = me;
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Oe(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var _e = { exports: {} };
(function(i, l) {
  var r;
  (function(s, p) {
    i.exports = p();
  })(Ie, function() {
    function s(e) {
      this.mode = _.MODE_8BIT_BYTE, this.data = e, this.parsedData = [];
      for (var t = 0, a = this.data.length; t < a; t++) {
        var n = [], o = this.data.charCodeAt(t);
        o > 65536 ? (n[0] = 240 | (o & 1835008) >>> 18, n[1] = 128 | (o & 258048) >>> 12, n[2] = 128 | (o & 4032) >>> 6, n[3] = 128 | o & 63) : o > 2048 ? (n[0] = 224 | (o & 61440) >>> 12, n[1] = 128 | (o & 4032) >>> 6, n[2] = 128 | o & 63) : o > 128 ? (n[0] = 192 | (o & 1984) >>> 6, n[1] = 128 | o & 63) : n[0] = o, this.parsedData.push(n);
      }
      this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
    }
    s.prototype = {
      getLength: function(e) {
        return this.parsedData.length;
      },
      write: function(e) {
        for (var t = 0, a = this.parsedData.length; t < a; t++)
          e.put(this.parsedData[t], 8);
      }
    };
    function p(e, t) {
      this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
    }
    p.prototype = { addData: function(e) {
      var t = new s(e);
      this.dataList.push(t), this.dataCache = null;
    }, isDark: function(e, t) {
      if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
        throw new Error(e + "," + t);
      return this.modules[e][t];
    }, getModuleCount: function() {
      return this.moduleCount;
    }, make: function() {
      this.makeImpl(!1, this.getBestMaskPattern());
    }, makeImpl: function(e, t) {
      this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
      for (var a = 0; a < this.moduleCount; a++) {
        this.modules[a] = new Array(this.moduleCount);
        for (var n = 0; n < this.moduleCount; n++)
          this.modules[a][n] = null;
      }
      this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), this.typeNumber >= 7 && this.setupTypeNumber(e), this.dataCache == null && (this.dataCache = p.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t);
    }, setupPositionProbePattern: function(e, t) {
      for (var a = -1; a <= 7; a++)
        if (!(e + a <= -1 || this.moduleCount <= e + a))
          for (var n = -1; n <= 7; n++)
            t + n <= -1 || this.moduleCount <= t + n || (0 <= a && a <= 6 && (n == 0 || n == 6) || 0 <= n && n <= 6 && (a == 0 || a == 6) || 2 <= a && a <= 4 && 2 <= n && n <= 4 ? this.modules[e + a][t + n] = !0 : this.modules[e + a][t + n] = !1);
    }, getBestMaskPattern: function() {
      for (var e = 0, t = 0, a = 0; a < 8; a++) {
        this.makeImpl(!0, a);
        var n = m.getLostPoint(this);
        (a == 0 || e > n) && (e = n, t = a);
      }
      return t;
    }, createMovieClip: function(e, t, a) {
      var n = e.createEmptyMovieClip(t, a), o = 1;
      this.make();
      for (var c = 0; c < this.modules.length; c++)
        for (var g = c * o, d = 0; d < this.modules[c].length; d++) {
          var C = d * o, T = this.modules[c][d];
          T && (n.beginFill(0, 100), n.moveTo(C, g), n.lineTo(C + o, g), n.lineTo(C + o, g + o), n.lineTo(C, g + o), n.endFill());
        }
      return n;
    }, setupTimingPattern: function() {
      for (var e = 8; e < this.moduleCount - 8; e++)
        this.modules[e][6] == null && (this.modules[e][6] = e % 2 == 0);
      for (var t = 8; t < this.moduleCount - 8; t++)
        this.modules[6][t] == null && (this.modules[6][t] = t % 2 == 0);
    }, setupPositionAdjustPattern: function() {
      for (var e = m.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
        for (var a = 0; a < e.length; a++) {
          var n = e[t], o = e[a];
          if (this.modules[n][o] == null)
            for (var c = -2; c <= 2; c++)
              for (var g = -2; g <= 2; g++)
                c == -2 || c == 2 || g == -2 || g == 2 || c == 0 && g == 0 ? this.modules[n + c][o + g] = !0 : this.modules[n + c][o + g] = !1;
        }
    }, setupTypeNumber: function(e) {
      for (var t = m.getBCHTypeNumber(this.typeNumber), a = 0; a < 18; a++) {
        var n = !e && (t >> a & 1) == 1;
        this.modules[Math.floor(a / 3)][a % 3 + this.moduleCount - 8 - 3] = n;
      }
      for (var a = 0; a < 18; a++) {
        var n = !e && (t >> a & 1) == 1;
        this.modules[a % 3 + this.moduleCount - 8 - 3][Math.floor(a / 3)] = n;
      }
    }, setupTypeInfo: function(e, t) {
      for (var a = this.errorCorrectLevel << 3 | t, n = m.getBCHTypeInfo(a), o = 0; o < 15; o++) {
        var c = !e && (n >> o & 1) == 1;
        o < 6 ? this.modules[o][8] = c : o < 8 ? this.modules[o + 1][8] = c : this.modules[this.moduleCount - 15 + o][8] = c;
      }
      for (var o = 0; o < 15; o++) {
        var c = !e && (n >> o & 1) == 1;
        o < 8 ? this.modules[8][this.moduleCount - o - 1] = c : o < 9 ? this.modules[8][15 - o - 1 + 1] = c : this.modules[8][15 - o - 1] = c;
      }
      this.modules[this.moduleCount - 8][8] = !e;
    }, mapData: function(e, t) {
      for (var a = -1, n = this.moduleCount - 1, o = 7, c = 0, g = this.moduleCount - 1; g > 0; g -= 2)
        for (g == 6 && g--; ; ) {
          for (var d = 0; d < 2; d++)
            if (this.modules[n][g - d] == null) {
              var C = !1;
              c < e.length && (C = (e[c] >>> o & 1) == 1);
              var T = m.getMask(t, n, g - d);
              T && (C = !C), this.modules[n][g - d] = C, o--, o == -1 && (c++, o = 7);
            }
          if (n += a, n < 0 || this.moduleCount <= n) {
            n -= a, a = -a;
            break;
          }
        }
    } }, p.PAD0 = 236, p.PAD1 = 17, p.createData = function(e, t, a) {
      for (var n = D.getRSBlocks(e, t), o = new Q(), c = 0; c < a.length; c++) {
        var g = a[c];
        o.put(g.mode, 4), o.put(g.getLength(), m.getLengthInBits(g.mode, e)), g.write(o);
      }
      for (var d = 0, c = 0; c < n.length; c++)
        d += n[c].dataCount;
      if (o.getLengthInBits() > d * 8)
        throw new Error("code length overflow. (" + o.getLengthInBits() + ">" + d * 8 + ")");
      for (o.getLengthInBits() + 4 <= d * 8 && o.put(0, 4); o.getLengthInBits() % 8 != 0; )
        o.putBit(!1);
      for (; !(o.getLengthInBits() >= d * 8 || (o.put(p.PAD0, 8), o.getLengthInBits() >= d * 8)); )
        o.put(p.PAD1, 8);
      return p.createBytes(o, n);
    }, p.createBytes = function(e, t) {
      for (var a = 0, n = 0, o = 0, c = new Array(t.length), g = new Array(t.length), d = 0; d < t.length; d++) {
        var C = t[d].dataCount, T = t[d].totalCount - C;
        n = Math.max(n, C), o = Math.max(o, T), c[d] = new Array(C);
        for (var P = 0; P < c[d].length; P++)
          c[d][P] = 255 & e.buffer[P + a];
        a += C;
        var x = m.getErrorCorrectPolynomial(T), F = new A(c[d], x.getLength() - 1), G = F.mod(x);
        g[d] = new Array(x.getLength() - 1);
        for (var P = 0; P < g[d].length; P++) {
          var H = P + G.getLength() - g[d].length;
          g[d][P] = H >= 0 ? G.get(H) : 0;
        }
      }
      for (var W = 0, P = 0; P < t.length; P++)
        W += t[P].totalCount;
      for (var le = new Array(W), ae = 0, P = 0; P < n; P++)
        for (var d = 0; d < t.length; d++)
          P < c[d].length && (le[ae++] = c[d][P]);
      for (var P = 0; P < o; P++)
        for (var d = 0; d < t.length; d++)
          P < g[d].length && (le[ae++] = g[d][P]);
      return le;
    };
    for (var _ = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 }, V = { L: 1, M: 0, Q: 3, H: 2 }, h = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }, m = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1335, G18: 7973, G15_MASK: 21522, getBCHTypeInfo: function(e) {
      for (var t = e << 10; m.getBCHDigit(t) - m.getBCHDigit(m.G15) >= 0; )
        t ^= m.G15 << m.getBCHDigit(t) - m.getBCHDigit(m.G15);
      return (e << 10 | t) ^ m.G15_MASK;
    }, getBCHTypeNumber: function(e) {
      for (var t = e << 12; m.getBCHDigit(t) - m.getBCHDigit(m.G18) >= 0; )
        t ^= m.G18 << m.getBCHDigit(t) - m.getBCHDigit(m.G18);
      return e << 12 | t;
    }, getBCHDigit: function(e) {
      for (var t = 0; e != 0; )
        t++, e >>>= 1;
      return t;
    }, getPatternPosition: function(e) {
      return m.PATTERN_POSITION_TABLE[e - 1];
    }, getMask: function(e, t, a) {
      switch (e) {
        case h.PATTERN000:
          return (t + a) % 2 == 0;
        case h.PATTERN001:
          return t % 2 == 0;
        case h.PATTERN010:
          return a % 3 == 0;
        case h.PATTERN011:
          return (t + a) % 3 == 0;
        case h.PATTERN100:
          return (Math.floor(t / 2) + Math.floor(a / 3)) % 2 == 0;
        case h.PATTERN101:
          return t * a % 2 + t * a % 3 == 0;
        case h.PATTERN110:
          return (t * a % 2 + t * a % 3) % 2 == 0;
        case h.PATTERN111:
          return (t * a % 3 + (t + a) % 2) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + e);
      }
    }, getErrorCorrectPolynomial: function(e) {
      for (var t = new A([1], 0), a = 0; a < e; a++)
        t = t.multiply(new A([1, u.gexp(a)], 0));
      return t;
    }, getLengthInBits: function(e, t) {
      if (1 <= t && t < 10)
        switch (e) {
          case _.MODE_NUMBER:
            return 10;
          case _.MODE_ALPHA_NUM:
            return 9;
          case _.MODE_8BIT_BYTE:
            return 8;
          case _.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + e);
        }
      else if (t < 27)
        switch (e) {
          case _.MODE_NUMBER:
            return 12;
          case _.MODE_ALPHA_NUM:
            return 11;
          case _.MODE_8BIT_BYTE:
            return 16;
          case _.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + e);
        }
      else if (t < 41)
        switch (e) {
          case _.MODE_NUMBER:
            return 14;
          case _.MODE_ALPHA_NUM:
            return 13;
          case _.MODE_8BIT_BYTE:
            return 16;
          case _.MODE_KANJI:
            return 12;
          default:
            throw new Error("mode:" + e);
        }
      else
        throw new Error("type:" + t);
    }, getLostPoint: function(e) {
      for (var t = e.getModuleCount(), a = 0, n = 0; n < t; n++)
        for (var o = 0; o < t; o++) {
          for (var c = 0, g = e.isDark(n, o), d = -1; d <= 1; d++)
            if (!(n + d < 0 || t <= n + d))
              for (var C = -1; C <= 1; C++)
                o + C < 0 || t <= o + C || d == 0 && C == 0 || g == e.isDark(n + d, o + C) && c++;
          c > 5 && (a += 3 + c - 5);
        }
      for (var n = 0; n < t - 1; n++)
        for (var o = 0; o < t - 1; o++) {
          var T = 0;
          e.isDark(n, o) && T++, e.isDark(n + 1, o) && T++, e.isDark(n, o + 1) && T++, e.isDark(n + 1, o + 1) && T++, (T == 0 || T == 4) && (a += 3);
        }
      for (var n = 0; n < t; n++)
        for (var o = 0; o < t - 6; o++)
          e.isDark(n, o) && !e.isDark(n, o + 1) && e.isDark(n, o + 2) && e.isDark(n, o + 3) && e.isDark(n, o + 4) && !e.isDark(n, o + 5) && e.isDark(n, o + 6) && (a += 40);
      for (var o = 0; o < t; o++)
        for (var n = 0; n < t - 6; n++)
          e.isDark(n, o) && !e.isDark(n + 1, o) && e.isDark(n + 2, o) && e.isDark(n + 3, o) && e.isDark(n + 4, o) && !e.isDark(n + 5, o) && e.isDark(n + 6, o) && (a += 40);
      for (var P = 0, o = 0; o < t; o++)
        for (var n = 0; n < t; n++)
          e.isDark(n, o) && P++;
      var x = Math.abs(100 * P / t / t - 50) / 5;
      return a += x * 10, a;
    } }, u = { glog: function(e) {
      if (e < 1)
        throw new Error("glog(" + e + ")");
      return u.LOG_TABLE[e];
    }, gexp: function(e) {
      for (; e < 0; )
        e += 255;
      for (; e >= 256; )
        e -= 255;
      return u.EXP_TABLE[e];
    }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) }, y = 0; y < 8; y++)
      u.EXP_TABLE[y] = 1 << y;
    for (var y = 8; y < 256; y++)
      u.EXP_TABLE[y] = u.EXP_TABLE[y - 4] ^ u.EXP_TABLE[y - 5] ^ u.EXP_TABLE[y - 6] ^ u.EXP_TABLE[y - 8];
    for (var y = 0; y < 255; y++)
      u.LOG_TABLE[u.EXP_TABLE[y]] = y;
    function A(e, t) {
      if (e.length == null)
        throw new Error(e.length + "/" + t);
      for (var a = 0; a < e.length && e[a] == 0; )
        a++;
      this.num = new Array(e.length - a + t);
      for (var n = 0; n < e.length - a; n++)
        this.num[n] = e[n + a];
    }
    A.prototype = { get: function(e) {
      return this.num[e];
    }, getLength: function() {
      return this.num.length;
    }, multiply: function(e) {
      for (var t = new Array(this.getLength() + e.getLength() - 1), a = 0; a < this.getLength(); a++)
        for (var n = 0; n < e.getLength(); n++)
          t[a + n] ^= u.gexp(u.glog(this.get(a)) + u.glog(e.get(n)));
      return new A(t, 0);
    }, mod: function(e) {
      if (this.getLength() - e.getLength() < 0)
        return this;
      for (var t = u.glog(this.get(0)) - u.glog(e.get(0)), a = new Array(this.getLength()), n = 0; n < this.getLength(); n++)
        a[n] = this.get(n);
      for (var n = 0; n < e.getLength(); n++)
        a[n] ^= u.gexp(u.glog(e.get(n)) + t);
      return new A(a, 0).mod(e);
    } };
    function D(e, t) {
      this.totalCount = e, this.dataCount = t;
    }
    D.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], D.getRSBlocks = function(e, t) {
      var a = D.getRsBlockTable(e, t);
      if (a == null)
        throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
      for (var n = a.length / 3, o = [], c = 0; c < n; c++)
        for (var g = a[c * 3 + 0], d = a[c * 3 + 1], C = a[c * 3 + 2], T = 0; T < g; T++)
          o.push(new D(d, C));
      return o;
    }, D.getRsBlockTable = function(e, t) {
      switch (t) {
        case V.L:
          return D.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
        case V.M:
          return D.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
        case V.Q:
          return D.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
        case V.H:
          return D.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
        default:
          return;
      }
    };
    function Q() {
      this.buffer = [], this.length = 0;
    }
    Q.prototype = { get: function(e) {
      var t = Math.floor(e / 8);
      return (this.buffer[t] >>> 7 - e % 8 & 1) == 1;
    }, put: function(e, t) {
      for (var a = 0; a < t; a++)
        this.putBit((e >>> t - a - 1 & 1) == 1);
    }, getLengthInBits: function() {
      return this.length;
    }, putBit: function(e) {
      var t = Math.floor(this.length / 8);
      this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
    } };
    var I = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
    function L() {
      return typeof CanvasRenderingContext2D < "u";
    }
    function U() {
      var e = !1, t = navigator.userAgent;
      if (/android/i.test(t)) {
        e = !0;
        var a = t.toString().match(/android ([0-9]\.[0-9])/i);
        a && a[1] && (e = parseFloat(a[1]));
      }
      return e;
    }
    var f = function() {
      var e = function(t, a) {
        this._el = t, this._htOption = a;
      };
      return e.prototype.draw = function(t) {
        var a = this._htOption, n = this._el, o = t.getModuleCount();
        Math.floor(a.width / o), Math.floor(a.height / o), this.clear();
        function c(P, x) {
          var F = document.createElementNS("http://www.w3.org/2000/svg", P);
          for (var G in x)
            x.hasOwnProperty(G) && F.setAttribute(G, x[G]);
          return F;
        }
        var g = c("svg", { viewBox: "0 0 " + String(o) + " " + String(o), width: "100%", height: "100%", fill: a.colorLight });
        g.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), n.appendChild(g), g.appendChild(c("rect", { fill: a.colorLight, width: "100%", height: "100%" })), g.appendChild(c("rect", { fill: a.colorDark, width: "1", height: "1", id: "template" }));
        for (var d = 0; d < o; d++)
          for (var C = 0; C < o; C++)
            if (t.isDark(d, C)) {
              var T = c("use", { x: String(C), y: String(d) });
              T.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), g.appendChild(T);
            }
      }, e.prototype.clear = function() {
        for (; this._el.hasChildNodes(); )
          this._el.removeChild(this._el.lastChild);
      }, e;
    }(), O = document.documentElement.tagName.toLowerCase() === "svg", E = O ? f : L() ? function() {
      function e() {
        this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none";
      }
      if (this._android && this._android <= 2.1) {
        var t = 1 / window.devicePixelRatio, a = CanvasRenderingContext2D.prototype.drawImage;
        CanvasRenderingContext2D.prototype.drawImage = function(c, g, d, C, T, P, x, F, G) {
          if ("nodeName" in c && /img/i.test(c.nodeName))
            for (var H = arguments.length - 1; H >= 1; H--)
              arguments[H] = arguments[H] * t;
          else typeof F > "u" && (arguments[1] *= t, arguments[2] *= t, arguments[3] *= t, arguments[4] *= t);
          a.apply(this, arguments);
        };
      }
      function n(c, g) {
        var d = this;
        if (d._fFail = g, d._fSuccess = c, d._bSupportDataURI === null) {
          var C = document.createElement("img"), T = function() {
            d._bSupportDataURI = !1, d._fFail && d._fFail.call(d);
          }, P = function() {
            d._bSupportDataURI = !0, d._fSuccess && d._fSuccess.call(d);
          };
          C.onabort = T, C.onerror = T, C.onload = P, C.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";
          return;
        } else d._bSupportDataURI === !0 && d._fSuccess ? d._fSuccess.call(d) : d._bSupportDataURI === !1 && d._fFail && d._fFail.call(d);
      }
      var o = function(c, g) {
        this._bIsPainted = !1, this._android = U(), this._htOption = g, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = g.width, this._elCanvas.height = g.height, c.appendChild(this._elCanvas), this._el = c, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null;
      };
      return o.prototype.draw = function(c) {
        var g = this._elImage, d = this._oContext, C = this._htOption, T = c.getModuleCount(), P = C.width / T, x = C.height / T, F = Math.round(P), G = Math.round(x);
        g.style.display = "none", this.clear();
        for (var H = 0; H < T; H++)
          for (var W = 0; W < T; W++) {
            var le = c.isDark(H, W), ae = W * P, fe = H * x;
            d.strokeStyle = le ? C.colorDark : C.colorLight, d.lineWidth = 1, d.fillStyle = le ? C.colorDark : C.colorLight, d.fillRect(ae, fe, P, x), d.strokeRect(
              Math.floor(ae) + 0.5,
              Math.floor(fe) + 0.5,
              F,
              G
            ), d.strokeRect(
              Math.ceil(ae) - 0.5,
              Math.ceil(fe) - 0.5,
              F,
              G
            );
          }
        this._bIsPainted = !0;
      }, o.prototype.makeImage = function() {
        this._bIsPainted && n.call(this, e);
      }, o.prototype.isPainted = function() {
        return this._bIsPainted;
      }, o.prototype.clear = function() {
        this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1;
      }, o.prototype.round = function(c) {
        return c && Math.floor(c * 1e3) / 1e3;
      }, o;
    }() : function() {
      var e = function(t, a) {
        this._el = t, this._htOption = a;
      };
      return e.prototype.draw = function(t) {
        for (var a = this._htOption, n = this._el, o = t.getModuleCount(), c = Math.floor(a.width / o), g = Math.floor(a.height / o), d = ['<table style="border:0;border-collapse:collapse;">'], C = 0; C < o; C++) {
          d.push("<tr>");
          for (var T = 0; T < o; T++)
            d.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + c + "px;height:" + g + "px;background-color:" + (t.isDark(C, T) ? a.colorDark : a.colorLight) + ';"></td>');
          d.push("</tr>");
        }
        d.push("</table>"), n.innerHTML = d.join("");
        var P = n.childNodes[0], x = (a.width - P.offsetWidth) / 2, F = (a.height - P.offsetHeight) / 2;
        x > 0 && F > 0 && (P.style.margin = F + "px " + x + "px");
      }, e.prototype.clear = function() {
        this._el.innerHTML = "";
      }, e;
    }();
    function ye(e, t) {
      for (var a = 1, n = be(e), o = 0, c = I.length; o <= c; o++) {
        var g = 0;
        switch (t) {
          case V.L:
            g = I[o][0];
            break;
          case V.M:
            g = I[o][1];
            break;
          case V.Q:
            g = I[o][2];
            break;
          case V.H:
            g = I[o][3];
            break;
        }
        if (n <= g)
          break;
        a++;
      }
      if (a > I.length)
        throw new Error("Too long data");
      return a;
    }
    function be(e) {
      var t = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
      return t.length + (t.length != e ? 3 : 0);
    }
    return r = function(e, t) {
      if (this._htOption = {
        width: 256,
        height: 256,
        typeNumber: 4,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: V.H
      }, typeof t == "string" && (t = {
        text: t
      }), t)
        for (var a in t)
          this._htOption[a] = t[a];
      typeof e == "string" && (e = document.getElementById(e)), this._htOption.useSVG && (E = f), this._android = U(), this._el = e, this._oQRCode = null, this._oDrawing = new E(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text);
    }, r.prototype.makeCode = function(e) {
      this._oQRCode = new p(ye(e, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(e), this._oQRCode.make(), this._el.title = e, this._oDrawing.draw(this._oQRCode), this.makeImage();
    }, r.prototype.makeImage = function() {
      typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3) && this._oDrawing.makeImage();
    }, r.prototype.clear = function() {
      this._oDrawing.clear();
    }, r.CorrectLevel = V, r;
  });
})(_e);
var Fe = _e.exports;
const pe = /* @__PURE__ */ Oe(Fe), He = {
  name: "JQrcode",
  props: {
    text: {
      type: String,
      default: " "
    },
    width: {
      type: Number,
      default: 132
    },
    height: {
      type: Number,
      default: 132
    },
    colorDark: {
      type: String,
      default: "#000"
    },
    colorLight: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    return {
      qrcode: null
    };
  },
  watch: {
    text: {
      handler() {
        this.build();
      }
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.qrcode = new pe(this.$refs.qrCodeDiv, {
        width: this.width,
        height: this.height,
        text: this.text,
        // 二维码地址
        colorDark: this.colorDark,
        colorLight: this.colorLight,
        correctLevel: pe.CorrectLevel.L
      });
    });
  },
  methods: {
    build() {
      this.qrcode && this.qrcode.makeCode(this.text);
    }
  }
}, ze = {
  id: "qrcode",
  ref: "qrCodeDiv",
  class: "qrcode-container",
  style: { display: "inline-block" }
};
function Qe(i, l, r, s, p, _) {
  return v(), k("div", null, [
    w("div", ze, null, 512)
  ]);
}
const ne = /* @__PURE__ */ Y(He, [["render", Qe]]);
ne.install = function(i) {
  i.component(ne.name, ne);
};
const Ge = {
  name: "JLinkViewer",
  components: { qrcode: ne },
  directives: { clipboard: oe },
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
    const i = ke();
    return {
      clipboardSuccess: () => {
        i.appContext.config.globalProperties.$message({
          message: "复制成功",
          type: "success",
          duration: 1500
        });
      }
    };
  }
}, Ke = { style: { "text-align": "center", padding: "10px" } };
function Je(i, l, r, s, p, _) {
  const V = B("el-input"), h = B("el-button"), m = B("qrcode"), u = B("el-popover"), y = we("clipboard");
  return v(), K(u, {
    class: "j-linkViewer",
    placement: "bottom",
    width: "286",
    trigger: r.trigger
  }, {
    reference: S(() => [
      ue(i.$slots, "default")
    ]),
    default: S(() => [
      b(V, {
        "model-value": r.url,
        disabled: "",
        size: "small",
        style: { width: "200px" }
      }, null, 8, ["model-value"]),
      ge((v(), K(h, {
        size: "small",
        type: "primary"
      }, {
        default: S(() => [...l[0] || (l[0] = [
          M("复制", -1)
        ])]),
        _: 1
      })), [
        [y, r.url, "copy"],
        [y, s.clipboardSuccess, "success"]
      ]),
      w("div", Ke, [
        b(m, {
          width: 200,
          height: 200,
          text: r.url
        }, null, 8, ["text"])
      ])
    ]),
    _: 3
  }, 8, ["trigger"]);
}
const q = /* @__PURE__ */ Y(Ge, [["render", Je]]);
q.install = function(i) {
  i.component(q.name, q);
};
typeof window < "u" && window.Vue && window.Vue.component(q.name, q);
const Xe = {
  name: "JPositionSelector",
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
  setup(i, { emit: l }) {
    const r = X(!1), s = X(null), p = X(null), _ = X(null), V = X([]), h = Ce({
      center: {
        height: 0,
        lng: i.lng || 116.397502,
        lat: i.lat || 39.908802
      },
      detail: {
        //地址临时分量
        adcode: i.adcode || "",
        province: i.province || "",
        city: i.city || "",
        district: i.district || "",
        address: i.address || ""
      },
      searchService: null,
      //关键字搜索服务
      suggestService: null,
      // 搜索建议服务
      geocoderService: null
      // 地址解析
    }), m = () => {
      r.value = !0, u();
    }, u = () => {
      p.value || y().then((f) => {
        h.center = new f.LatLng(i.lat || 39.908802, i.lng || 116.397502), s.value = f, p.value = new f.Map("map", {
          center: h.center,
          //设置地图中心点坐标
          zoom: 15,
          //设置地图缩放级别
          viewMode: "2D"
        }), p.value.on("click", Q), A(h.center), h.suggestService = new f.service.Suggestion({
          pageSize: 10,
          regionFix: !1
          // 自动扩大范围到全国匹配
        }), h.geocoderService = new f.service.Geocoder();
      });
    }, y = () => new Promise((f) => {
      if (typeof window.TMap < "u")
        return f(window.TMap), !0;
      window.onMapCallback = function() {
        f(window.TMap);
      };
      let O = "https://map.qq.com/api/gljs?v=1.exp&libraries=tools,service&key=" + i.mapKey + "&callback=onMapCallback", E = document.createElement("script");
      E.setAttribute("type", "text/javascript"), E.setAttribute("src", O), document.body.appendChild(E);
    }), A = (f) => {
      _.value = new s.value.MultiMarker({
        map: p.value,
        styles: {
          // 点标记样式
          marker: new s.value.MarkerStyle({
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
            position: f,
            id: "centerMarker"
          }
        ]
      });
    }, D = () => {
      const f = _.value.getGeometryById("centerMarker");
      Object.assign(f, {
        position: h.center
      }), _.value.updateGeometries([f]), V.value = [];
    }, Q = (f) => {
      h.center = f.latLng, h.geocoderService.getAddress({
        location: f.latLng
      }).then((O) => {
        h.detail.address = O.result.address, h.detail.province = O.result.ad_info.province, h.detail.city = O.result.ad_info.city, h.detail.district = O.result.ad_info.district, h.detail.adcode = O.result.ad_info.adcode;
      }), D();
    }, I = () => {
      if (!h.detail.address) {
        V.value = [];
        return;
      }
      h.suggestService.getSuggestions({ keyword: h.detail.address, location: p.value.getCenter() }).then((f) => {
        V.value = f.data;
      });
    }, L = (f) => {
      h.center = f.location, D(), p.value.setCenter(f.location), h.detail.address = f.address, h.detail.province = f.province, h.detail.city = f.city, h.detail.district = f.district, h.detail.adcode = f.adcode;
    }, U = () => {
      l("update:lng", h.center.lng), l("update:lat", h.center.lat), l("update:province", h.detail.province), l("update:city", h.detail.city), l("update:district", h.detail.district), l("update:adcode", h.detail.adcode), l("update:address", h.detail.address), l("change", {
        ...h.detail,
        ...h.center
      }), r.value = !1;
    };
    return {
      dialogVisible: r,
      TMap: s,
      map: p,
      marker: _,
      nearPois: V,
      ...Se(h),
      showMap: m,
      init: u,
      initMap: y,
      initMaker: A,
      moveCenter: D,
      mapClick: Q,
      getSuggestions: I,
      selectAddress: L,
      Select: U
    };
  }
}, Ye = { class: "j-position-selector" }, We = { style: { padding: "0px 10px" } }, je = { class: "item" }, $e = { class: "map" }, qe = {
  id: "map",
  ref: "container",
  style: { width: "100%", height: "500px" }
}, Ze = { class: "address-search" }, et = {
  key: 0,
  class: "address-list"
}, tt = ["onClick"], lt = { class: "address-title" }, at = { class: "address-info" }, nt = { class: "dialog-footer" };
function ot(i, l, r, s, p, _) {
  const V = B("el-button"), h = B("el-row"), m = B("el-col"), u = B("el-card"), y = B("el-input"), A = B("el-dialog");
  return v(), k("div", Ye, [
    b(u, { shadow: "hover" }, {
      header: S(() => [
        w("div", We, [
          l[6] || (l[6] = w("span", null, [
            w("i", { class: "el-icon-map-location" }),
            M(" 地址坐标")
          ], -1)),
          b(V, {
            style: { float: "right", padding: "10px 0" },
            type: "text",
            onClick: s.showMap
          }, {
            default: S(() => [...l[5] || (l[5] = [
              M("选择地址", -1)
            ])]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      default: S(() => [
        w("div", je, [
          b(h, null, {
            default: S(() => [
              w("span", null, "地址：" + J(r.address ? r.address : "未设置"), 1)
            ]),
            _: 1
          }),
          b(h, { class: "sub-info" }, {
            default: S(() => [
              b(m, { span: 12 }, {
                default: S(() => [
                  M("经度：" + J(r.lng), 1)
                ]),
                _: 1
              }),
              b(m, { span: 12 }, {
                default: S(() => [
                  M("纬度：" + J(r.lat), 1)
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
    b(A, {
      "custom-class": "j-position-selector-dialog",
      modelValue: s.dialogVisible,
      "onUpdate:modelValue": l[4] || (l[4] = (D) => s.dialogVisible = D),
      title: "选择地图",
      width: "1000px",
      "append-to-body": ""
    }, {
      footer: S(() => [
        w("span", nt, [
          b(h, { gutter: 10 }, {
            default: S(() => [
              b(m, { span: 6 }, {
                default: S(() => [
                  b(y, {
                    disabled: "",
                    modelValue: i.center.lng,
                    "onUpdate:modelValue": l[1] || (l[1] = (D) => i.center.lng = D),
                    placeholder: "坐标经度"
                  }, {
                    prepend: S(() => [...l[7] || (l[7] = [
                      M("经度", -1)
                    ])]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(m, { span: 6 }, {
                default: S(() => [
                  b(y, {
                    disabled: "",
                    modelValue: i.center.lat,
                    "onUpdate:modelValue": l[2] || (l[2] = (D) => i.center.lat = D),
                    placeholder: "坐标纬度"
                  }, {
                    prepend: S(() => [...l[8] || (l[8] = [
                      M("纬度", -1)
                    ])]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(m, { span: 12 }, {
                default: S(() => [
                  b(V, {
                    onClick: l[3] || (l[3] = (D) => s.dialogVisible = !1)
                  }, {
                    default: S(() => [...l[9] || (l[9] = [
                      M("取 消", -1)
                    ])]),
                    _: 1
                  }),
                  b(V, {
                    type: "primary",
                    onClick: s.Select
                  }, {
                    default: S(() => [...l[10] || (l[10] = [
                      M("确 定", -1)
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
      default: S(() => [
        w("div", $e, [
          w("div", qe, null, 512),
          w("div", Ze, [
            b(y, {
              modelValue: i.detail.address,
              "onUpdate:modelValue": l[0] || (l[0] = (D) => i.detail.address = D),
              onInput: s.getSuggestions,
              placeholder: "请输入地址来直接查找相关位置"
            }, null, 8, ["modelValue", "onInput"])
          ]),
          s.nearPois.length > 0 ? (v(), k("div", et, [
            (v(!0), k(R, null, z(s.nearPois, (D, Q) => (v(), k("div", {
              key: Q,
              class: "items",
              onClick: (I) => s.selectAddress(D)
            }, [
              w("div", lt, J(D.title), 1),
              w("div", at, J(D.address), 1)
            ], 8, tt))), 128))
          ])) : N("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
const Z = /* @__PURE__ */ Y(Xe, [["render", ot]]);
Z.install = function(i) {
  i.component(Z.name, Z);
};
typeof window < "u" && window.Vue && window.Vue.component(Z.name, Z);
const it = {
  name: "JSkuSpec",
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
    delSpec(i) {
      this.value.splice(i, 1);
    },
    // 添加规格属性
    addSpecTag(i) {
      let l = this.addValues[i] || "";
      if (!l.trim()) return;
      l = l.trim();
      const r = l.split(/\s+/);
      let s = this.value[i].value.concat(r);
      s = Array.from(new Set(s)), this.$set(this.value[i], "value", s), this.clearAddValues(i);
    },
    // 删除规格属性
    delSpecTag(i, l) {
      this.disabled || this.value[i].value.splice(l, 1);
    },
    // 清空 addValues
    clearAddValues(i) {
      this.$set(this.addValues, i, "");
    },
    // 是否输入正确
    verify_name(i) {
      return this.value[i].name.trim() === "";
    },
    verify_value(i) {
      return this.value[i].value.length === 0;
    },
    // 验证所有字段
    verify() {
      var i = !0;
      return this.value.forEach((l) => {
        l.name.trim() === "" && (i = !1), l.value.length === 0 && (i = !1);
      }), i;
    }
  }
}, rt = { class: "jui-sku-container" }, st = { class: "specification" }, dt = { class: "spec-list" }, ut = ["onClick"], ct = { class: "values" }, ft = { class: "el-select__tags-text" }, ht = ["onClick"], pt = {
  key: 0,
  class: "item"
}, gt = { class: "add-spec" }, vt = {
  key: 0,
  class: "example"
}, mt = ["value"];
function _t(i, l, r, s, p, _) {
  const V = B("el-input"), h = B("el-button");
  return v(), k("div", rt, [
    w("div", st, [
      w("ul", dt, [
        (v(!0), k(R, null, z(r.value, (m, u) => (v(), k("li", {
          key: u,
          class: "item"
        }, [
          w("div", {
            class: te(["name", { is_error: _.verify_name(u) }])
          }, [
            b(V, {
              modelValue: m.name,
              "onUpdate:modelValue": (y) => m.name = y,
              disabled: r.disabled,
              size: "small",
              placeholder: "输入产品规格名称"
            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
            l[0] || (l[0] = w("div", { class: "help_info" }, "例如:颜色,尺码", -1)),
            ge(w("i", {
              class: "icon el-icon-circle-close",
              onClick: (y) => _.delSpec(u)
            }, null, 8, ut), [
              [Ve, !r.disabled]
            ])
          ], 2),
          w("div", ct, [
            (v(!0), k(R, null, z(m.value, (y, A) => (v(), k("span", {
              key: y,
              class: "el-tag"
            }, [
              w("span", ft, J(y), 1),
              w("i", {
                class: "el-tag__close el-icon-close",
                onClick: (D) => _.delSpecTag(u, A)
              }, null, 8, ht)
            ]))), 128)),
            w("div", {
              class: te(["add-attr", { is_error: _.verify_value(u) }])
            }, [
              b(V, {
                modelValue: p.addValues[u],
                "onUpdate:modelValue": (y) => p.addValues[u] = y,
                size: "small",
                placeholder: "多个产品属性以空格隔开",
                icon: "plus",
                disabled: r.disabled,
                onClick: (y) => _.addSpecTag(u),
                onKeyup: Pe((y) => _.addSpecTag(u), ["native", "enter"])
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onClick", "onKeyup"]),
              l[1] || (l[1] = w("div", {
                class: "help_info",
                style: { float: "none" }
              }, "例如:红色,蓝色,L,M等", -1))
            ], 2)
          ])
        ]))), 128)),
        r.value.length < r.limit ? (v(), k("li", pt, [
          w("div", gt, [
            b(h, {
              plain: "",
              disabled: r.disabled,
              size: "small",
              type: "info",
              onClick: _.addSpec
            }, {
              default: S(() => [...l[2] || (l[2] = [
                M("添加规格项目", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "onClick"])
          ])
        ])) : N("", !0)
      ])
    ]),
    r.isShowCode ? (v(), k("div", vt, [
      w("textarea", {
        class: "code-area",
        value: JSON.stringify(r.value)
      }, null, 8, mt)
    ])) : N("", !0)
  ]);
}
const re = /* @__PURE__ */ Y(it, [["render", _t]]);
re.install = function(i) {
  i.component(re.name, re);
};
function yt(i) {
  return Array.prototype.reduce.call(i, function(l, r) {
    var s = [];
    return l.forEach(function(p) {
      r.forEach(function(_) {
        s.push(p.concat([_]));
      });
    }), s;
  }, [[]]);
}
const bt = {
  name: "JSkuTable",
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
      const i = [];
      this.specification.forEach((s) => {
        s.value.length > 0 && i.push(s.value);
      });
      const l = yt(i), r = [];
      l.forEach((s) => {
        if (s.length === 0) return;
        const p = this.getOldOrCreatData(JSON.stringify(s));
        r.push(p);
      }), this.value.length = 0, this.value.push(...r), this.$emit("input", this.value);
    },
    // 通过属性组合键 查询原数据 如果原来数据存在则重新赋值 不存在则创建新数据
    getOldOrCreatData(i) {
      let l = {
        ProductCost: this.defaultPrice,
        ProductId: 0,
        ProductNo: 1,
        ProductPrice: this.defaultPrice,
        ProductSpec: i,
        ProductStock: 999,
        isUse: !0
      };
      return this.value.forEach((r) => {
        r.ProductSpec === i && (l = r);
      }), l;
    },
    // 获得属性值
    getSpecValue(i, l) {
      const r = this.specification[i].value;
      let s;
      this.specification[i + 1] && this.specification[i + 1].value.length ? s = l / this.countSum(i + 1) : s = l;
      const p = Math.floor(s % r.length);
      return p.toString() !== "NaN" ? r[p] : "";
    },
    // 根据规格索引  计算后面规格值值的数量 计算自身纵向跨度
    countSum(i) {
      let l = 1;
      return this.specification.forEach((r, s) => {
        s >= i && r.value.length && (l *= r.value.length);
      }), l;
    },
    // 根据传入的条件，来判断是否显示该td
    showTd(i, l) {
      return this.specification[i] ? l % this.countSum(i + 1) === 0 : !1;
    },
    // 【 批处理相关 】
    // 打开设置框
    openBatch(i) {
      this.disabled || (this.currentType = i, this.isSetListShow = !1);
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
      this.value.forEach((i) => {
        i.isUse && (i[this.currentType] = this.batchValue);
      }), this.cancelBatch();
    },
    // 取消批量设置
    cancelBatch() {
      this.batchValue = "", this.currentType = "", this.isSetListShow = !0;
    }
  }
}, wt = { class: "jui-sku-container" }, kt = { class: "example" }, Ct = {
  class: "stock-table el-table el-table--border",
  cellspacing: "0",
  cellpadding: "0"
}, St = {
  key: 0,
  style: { width: "160px" }
}, Vt = {
  key: 1,
  style: { width: "160px" }
}, Pt = {
  key: 2,
  style: { width: "160px" }
}, Dt = {
  key: 3,
  style: { width: "100px" }
}, Et = { key: 0 }, Tt = ["rowspan"], At = { key: 0 }, Bt = { key: 1 }, Lt = { key: 2 }, Mt = { key: 3 }, xt = {
  colspan: "8",
  class: "wh-foot"
}, Nt = {
  key: 0,
  class: "set-list"
}, Ut = {
  key: 1,
  class: "set-form"
}, Rt = {
  key: 0,
  class: "example"
}, It = ["value"];
function Ot(i, l, r, s, p, _) {
  const V = B("el-input-number"), h = B("el-input"), m = B("el-switch");
  return v(), k("div", wt, [
    w("div", kt, [
      w("table", Ct, [
        w("thead", null, [
          w("tr", null, [
            (v(!0), k(R, null, z(r.specification, (u, y) => (v(), k("th", { key: y }, J(u.name), 1))), 128)),
            l[6] || (l[6] = w("th", { style: { width: "160px" } }, "销售价（元）", -1)),
            r.showProductStock ? (v(), k("th", St, "库存")) : N("", !0),
            r.showProductNo ? (v(), k("th", Vt, "规格编码")) : N("", !0),
            r.showProductCost ? (v(), k("th", Pt, "成本价（元）")) : N("", !0),
            r.showEnable ? (v(), k("th", Dt, "是否启用")) : N("", !0)
          ])
        ]),
        r.value.length > 0 ? (v(), k("tbody", Et, [
          (v(!0), k(R, null, z(r.value, (u, y) => (v(), k("tr", {
            key: u.ProductSpec
          }, [
            (v(!0), k(R, null, z(r.specification, (A, D) => (v(), k(R, null, [
              _.showTd(D, y) ? (v(), k("td", {
                rowspan: _.countSum(D + 1),
                key: D
              }, J(_.getSpecValue(D, y)), 9, Tt)) : N("", !0)
            ], 64))), 256)),
            w("td", null, [
              b(V, {
                modelValue: u.ProductPrice,
                "onUpdate:modelValue": (A) => u.ProductPrice = A,
                modelModifiers: { number: !0 },
                size: "small",
                min: 0,
                precision: 2,
                placeholder: "输入销售价",
                disabled: !u.isUse || r.disabled
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ]),
            r.showProductStock ? (v(), k("td", At, [
              b(V, {
                modelValue: u.ProductStock,
                "onUpdate:modelValue": (A) => u.ProductStock = A,
                modelModifiers: { number: !0 },
                size: "small",
                min: 0,
                controls: !1,
                precision: 0,
                placeholder: "输入库存",
                disabled: !u.isUse || r.disabled
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ])) : N("", !0),
            r.showProductNo ? (v(), k("td", Bt, [
              b(h, {
                modelValue: u.ProductNo,
                "onUpdate:modelValue": (A) => u.ProductNo = A,
                size: "small",
                type: "text",
                disabled: !u.isUse || r.disabled,
                placeholder: "输入商品规格编号"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ])) : N("", !0),
            r.showProductCost ? (v(), k("td", Lt, [
              b(V, {
                modelValue: u.ProductCost,
                "onUpdate:modelValue": (A) => u.ProductCost = A,
                modelModifiers: { number: !0 },
                size: "small",
                min: 0,
                precision: 2,
                disabled: !u.isUse || r.disabled
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ])) : N("", !0),
            r.showEnable ? (v(), k("td", Mt, [
              b(m, {
                modelValue: u.isUse,
                "onUpdate:modelValue": (A) => u.isUse = A,
                disabled: r.disabled
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
            ])) : N("", !0)
          ]))), 128)),
          w("tr", null, [
            w("td", xt, [
              l[7] || (l[7] = w("span", { class: "label" }, "批量设置：", -1)),
              p.isSetListShow ? (v(), k("div", Nt, [
                w("span", {
                  class: "set-item",
                  onClick: l[0] || (l[0] = (u) => _.openBatch("ProductPrice"))
                }, "销售价"),
                r.showProductStock ? (v(), k("span", {
                  key: 0,
                  class: "set-item",
                  onClick: l[1] || (l[1] = (u) => _.openBatch("ProductStock"))
                }, "库存")) : N("", !0),
                r.showProductCost ? (v(), k("span", {
                  key: 1,
                  class: "set-item",
                  onClick: l[2] || (l[2] = (u) => _.openBatch("ProductCost"))
                }, "成本价")) : N("", !0)
              ])) : (v(), k("div", Ut, [
                b(V, {
                  modelValue: p.batchValue,
                  "onUpdate:modelValue": l[3] || (l[3] = (u) => p.batchValue = u),
                  modelModifiers: { number: !0 },
                  controls: !1,
                  size: "mini",
                  min: 0,
                  precision: p.currentType == "ProductStock" ? 0 : 2,
                  placeholder: "输入要设置的数量"
                }, null, 8, ["modelValue", "precision"]),
                w("i", {
                  class: "set-btn blue el-icon-check",
                  onClick: l[4] || (l[4] = (...u) => _.setBatch && _.setBatch(...u))
                }),
                w("i", {
                  class: "set-btn red el-icon-close",
                  onClick: l[5] || (l[5] = (...u) => _.cancelBatch && _.cancelBatch(...u))
                })
              ]))
            ])
          ])
        ])) : N("", !0)
      ])
    ]),
    r.isShowCode ? (v(), k("div", Rt, [
      w("textarea", {
        class: "code-area",
        value: JSON.stringify(r.value)
      }, null, 8, It)
    ])) : N("", !0)
  ]);
}
const se = /* @__PURE__ */ Y(bt, [["render", Ot]]);
se.install = function(i) {
  i.component(se.name, se);
};
const Ft = {
  name: "svg-icon",
  props: {
    iconClass: {
      type: String,
      required: !0
    },
    className: {
      type: String
    },
    type: {
      type: String,
      default: "icon"
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      return this.className ? "svg-" + this.type + " " + this.className : "svg-" + this.type;
    }
  }
}, Ht = ["xlink:href"];
function zt(i, l, r, s, p, _) {
  return v(), k("svg", {
    class: te(_.svgClass),
    "aria-hidden": "true"
  }, [
    w("use", { "xlink:href": _.iconName }, null, 8, Ht)
  ], 2);
}
const de = /* @__PURE__ */ Y(Ft, [["render", zt], ["__scopeId", "data-v-0b63b260"]]);
de.install = function(i) {
  i.component(de.name, de);
};
const Qt = {
  name: "JTitleBar",
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
}, Gt = { class: "left" }, Kt = { class: "center" }, Jt = { class: "right" };
function Xt(i, l, r, s, p, _) {
  return v(), k("div", {
    class: te(["j-title-bar", { shadow: r.shadow, radius: r.radius }]),
    style: De({ background: r.background, color: r.color })
  }, [
    w("span", Gt, [
      w("span", {
        class: te(r.icon)
      }, null, 2),
      ue(i.$slots, "default")
    ]),
    w("span", Kt, [
      ue(i.$slots, "center")
    ]),
    w("span", Jt, [
      ue(i.$slots, "right")
    ])
  ], 6);
}
const ee = /* @__PURE__ */ Y(Qt, [["render", Xt]]);
ee.install = function(i) {
  i.component(ee.name, ee);
};
typeof window < "u" && window.Vue && window.Vue.component(ee.name, ee);
const Yt = "0.3.5", Wt = [
  j,
  $,
  oe,
  q,
  Z,
  ne,
  re,
  se,
  de,
  ee
], he = (i) => {
  if (he.installed) return !1;
  Wt.forEach((l) => {
    l.install ? i.use(l) : l.name && i.component(l.name, l);
  });
};
typeof window < "u" && window.Vue && he(window.Vue);
const $t = {
  install: he,
  version: Yt,
  AdvancedQuery: j,
  BgSelector: $,
  Clipboard: oe,
  LinkViewer: q,
  PositionSelector: Z,
  Qrcode: ne,
  SkuSpec: re,
  SkuTable: se,
  SvgIcon: de,
  TitleBar: ee
};
export {
  $t as default
};
