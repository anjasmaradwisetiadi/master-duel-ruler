"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_LoginRegister_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/LoginRegister.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/LoginRegister.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_LoadingAndAlert_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LoadingAndAlert.vue */ "./resources/js/components/LoadingAndAlert.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'LoginRegister',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    var name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var username = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var email = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var password = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var position = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)([]);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {});
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.getterStateLoading;
    });
    var responseGeneral = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _store$getters;
      return store === null || store === void 0 || (_store$getters = store.getters) === null || _store$getters === void 0 ? void 0 : _store$getters.getterResponseAuth;
    });

    //  const loginOrNotChecked = computed(()=>{
    //     if(router?.currentRoute?.value){
    //         if(router?.currentRoute?.value?.path.includes('/register')){
    //             return false;
    //         } else if(router?.currentRoute?.value?.path.includes('/login')){
    //             return true;
    //         }
    //     }
    // })

    function submit() {
      var formData = new FormData();
      var payload = {
        'email': email.value,
        'password': password.value
      };
      for (var key in payload) {
        formData.append(key, payload[key]);
      }
      store.dispatch('login', formData);
    }
    function back() {
      router.push('/login');
    }
    function createPayload() {
      // if(!loginOrNotChecked){
      //     username.value = 'Nico Ready';
      //     email.value = 'nicoready@gmail.com';
      //     password.value = 'nicoready';
      //     position.value = 'admin';
      //     name.value = 'Nico Ready'; 
      //     // ********* kenapa name dan password tidak terupdate seumpurna  menggunakan ref ? perlu state ?
      // } else if(loginOrNotChecked) {
      //     username.value = 'Nico Ready';
      //     email.value = 'nicoready@gmail.com';
      // }
    }
    var __returned__ = {
      store: store,
      router: router,
      name: name,
      username: username,
      email: email,
      password: password,
      position: position,
      state: state,
      loading: loading,
      responseGeneral: responseGeneral,
      submit: submit,
      back: back,
      createPayload: createPayload,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,
      LoadingAndAlert: _components_LoadingAndAlert_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      get useStore() {
        return vuex__WEBPACK_IMPORTED_MODULE_2__.useStore;
      },
      get useRouter() {
        return vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/LoginRegister.vue?vue&type=template&id=053e3c73":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/LoginRegister.vue?vue&type=template&id=053e3c73 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "LoginRegister",
  "class": "mt-4"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row justify-content-center mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-6 text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Login Form")])], -1 /* HOISTED */);
var _hoisted_3 = {
  "class": "row mb-3 justify-content-center"
};
var _hoisted_4 = {
  "class": "col-6"
};
var _hoisted_5 = {
  "class": "form-group"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email"
}, "Email", -1 /* HOISTED */);
var _hoisted_7 = {
  key: 0,
  "class": "form-text invalid-feedback"
};
var _hoisted_8 = {
  "class": "form-group"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "password"
}, "Password", -1 /* HOISTED */);
var _hoisted_10 = {
  key: 0,
  "class": "form-text invalid-feedback"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Jika tidak memiliki account bisa "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "/register",
  style: {
    "text-transform": "underline"
  }
}, "register"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" dulu !!! ")], -1 /* HOISTED */);
var _hoisted_12 = {
  "class": "row justify-content-center"
};
var _hoisted_13 = {
  "class": "col-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$responseGener, _$setup$responseGener2, _$setup$responseGener3, _$setup$responseGener4, _$setup$responseGener5, _$setup$responseGener6, _$setup$responseGener7, _$setup$responseGener8;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", (_$setup$responseGener = $setup.responseGeneral) !== null && _$setup$responseGener !== void 0 && (_$setup$responseGener = _$setup$responseGener.message) !== null && _$setup$responseGener !== void 0 && _$setup$responseGener.email ? 'is-invalid' : '']),
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.email = $event;
    }),
    id: "email",
    "aria-describedby": "email"
  }, null, 2 /* CLASS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.email]]), !((_$setup$responseGener2 = $setup.responseGeneral) !== null && _$setup$responseGener2 !== void 0 && _$setup$responseGener2.status) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$responseGener3 = $setup.responseGeneral) !== null && _$setup$responseGener3 !== void 0 && (_$setup$responseGener3 = _$setup$responseGener3.message) !== null && _$setup$responseGener3 !== void 0 && _$setup$responseGener3.email ? (_$setup$responseGener4 = $setup.responseGeneral) === null || _$setup$responseGener4 === void 0 || (_$setup$responseGener4 = _$setup$responseGener4.message) === null || _$setup$responseGener4 === void 0 ? void 0 : _$setup$responseGener4.email[0] : ''), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", (_$setup$responseGener5 = $setup.responseGeneral) !== null && _$setup$responseGener5 !== void 0 && (_$setup$responseGener5 = _$setup$responseGener5.message) !== null && _$setup$responseGener5 !== void 0 && _$setup$responseGener5.password ? 'is-invalid' : '']),
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.password = $event;
    }),
    id: "password",
    "aria-describedby": "password"
  }, null, 2 /* CLASS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.password]]), !((_$setup$responseGener6 = $setup.responseGeneral) !== null && _$setup$responseGener6 !== void 0 && _$setup$responseGener6.status) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$responseGener7 = $setup.responseGeneral) !== null && _$setup$responseGener7 !== void 0 && (_$setup$responseGener7 = _$setup$responseGener7.message) !== null && _$setup$responseGener7 !== void 0 && _$setup$responseGener7.password ? (_$setup$responseGener8 = $setup.responseGeneral) === null || _$setup$responseGener8 === void 0 || (_$setup$responseGener8 = _$setup$responseGener8.message) === null || _$setup$responseGener8 === void 0 ? void 0 : _$setup$responseGener8.password[0] : ''), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_11])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "button-style-secondary",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.submit();
    })
  }, "Submit"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button type=\"button\" class=\"btn btn-warning\" @click=\"createPayload()\">Create Payload</button> ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LoadingAndAlert"], {
    loading: $setup.loading,
    responseGeneral: $setup.responseGeneral
  }, null, 8 /* PROPS */, ["loading", "responseGeneral"])]);
}

/***/ }),

/***/ "./resources/js/pages/LoginRegister.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/LoginRegister.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoginRegister_vue_vue_type_template_id_053e3c73__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginRegister.vue?vue&type=template&id=053e3c73 */ "./resources/js/pages/LoginRegister.vue?vue&type=template&id=053e3c73");
/* harmony import */ var _LoginRegister_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginRegister.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/LoginRegister.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LoginRegister_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LoginRegister_vue_vue_type_template_id_053e3c73__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/LoginRegister.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/LoginRegister.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/LoginRegister.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginRegister_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginRegister_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoginRegister.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/LoginRegister.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/LoginRegister.vue?vue&type=template&id=053e3c73":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/LoginRegister.vue?vue&type=template&id=053e3c73 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginRegister_vue_vue_type_template_id_053e3c73__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginRegister_vue_vue_type_template_id_053e3c73__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoginRegister.vue?vue&type=template&id=053e3c73 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/LoginRegister.vue?vue&type=template&id=053e3c73");


/***/ })

}]);