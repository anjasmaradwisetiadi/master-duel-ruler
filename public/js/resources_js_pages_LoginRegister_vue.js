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
    var loginOrNotChecked = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _router$currentRoute;
      if (router !== null && router !== void 0 && (_router$currentRoute = router.currentRoute) !== null && _router$currentRoute !== void 0 && _router$currentRoute.value) {
        var _router$currentRoute2, _router$currentRoute3;
        if (router !== null && router !== void 0 && (_router$currentRoute2 = router.currentRoute) !== null && _router$currentRoute2 !== void 0 && (_router$currentRoute2 = _router$currentRoute2.value) !== null && _router$currentRoute2 !== void 0 && _router$currentRoute2.path.includes('/register')) {
          return false;
        } else if (router !== null && router !== void 0 && (_router$currentRoute3 = router.currentRoute) !== null && _router$currentRoute3 !== void 0 && (_router$currentRoute3 = _router$currentRoute3.value) !== null && _router$currentRoute3 !== void 0 && _router$currentRoute3.path.includes('/login')) {
          return true;
        }
      }
    });
    function submit() {
      var formData = new FormData();
      if (loginOrNotChecked) {
        var payload = {
          'email': email.value,
          'password': password.value
        };
        for (var key in payload) {
          formData.append(key, payload[key]);
        }
        store.dispatch('login', formData);
      } else {
        var _payload = {
          'name': name.value,
          'user_name': username.value,
          'email': email.value,
          'password': password.value,
          'position': position.value
        };
        for (var _key in _payload) {
          formData.append(_key, _payload[_key]);
        }
        store.dispatch('register', formData);
      }
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
      loginOrNotChecked: loginOrNotChecked,
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
var _hoisted_2 = {
  "class": "row justify-content-center mb-3"
};
var _hoisted_3 = {
  "class": "col-6 text-center"
};
var _hoisted_4 = {
  "class": "row mb-2 justify-content-center"
};
var _hoisted_5 = {
  "class": "col-6"
};
var _hoisted_6 = {
  key: 0,
  "class": "form-group"
};
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name"
}, "Name", -1 /* HOISTED */);
var _hoisted_8 = {
  key: 0,
  "class": "form-text invalid-feedback"
};
var _hoisted_9 = {
  key: 1,
  "class": "form-group"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "username"
}, "Username", -1 /* HOISTED */);
var _hoisted_11 = {
  key: 0,
  "class": "form-text invalid-feedback"
};
var _hoisted_12 = {
  "class": "form-group"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email"
}, "Email", -1 /* HOISTED */);
var _hoisted_14 = {
  key: 0,
  "class": "form-text invalid-feedback"
};
var _hoisted_15 = {
  "class": "form-group"
};
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "password"
}, "Password", -1 /* HOISTED */);
var _hoisted_17 = {
  key: 0,
  "class": "form-text invalid-feedback"
};
var _hoisted_18 = {
  key: 2,
  "class": "form-group"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "position"
}, "Position", -1 /* HOISTED */);
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  disabled: "",
  selected: "",
  value: ""
}, "Pilih position user", -1 /* HOISTED */);
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "admin"
}, "Admin", -1 /* HOISTED */);
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "player"
}, "Player", -1 /* HOISTED */);
var _hoisted_23 = [_hoisted_20, _hoisted_21, _hoisted_22];
var _hoisted_24 = {
  key: 0,
  "class": "form-text invalid-feedback"
};
var _hoisted_25 = {
  "class": "row justify-content-center"
};
var _hoisted_26 = {
  "class": "col-6"
};
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row justify-content-center mb-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-6 text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, " Anda tidak memiliki hak akses ke page ini, coba hubungi admin jika ingin melakukan register !!!")])], -1 /* HOISTED */);
var _hoisted_28 = {
  "class": "row justify-content-center"
};
var _hoisted_29 = {
  "class": "col text-center"
};
var _hoisted_30 = {
  "class": "row mb-3 justify-content-center"
};
var _hoisted_31 = {
  "class": "col-6"
};
var _hoisted_32 = {
  "class": "form-group"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "email"
}, "Email", -1 /* HOISTED */);
var _hoisted_34 = {
  key: 0,
  "class": "form-text invalid-feedback"
};
var _hoisted_35 = {
  "class": "form-group"
};
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "password"
}, "Password", -1 /* HOISTED */);
var _hoisted_37 = {
  key: 0,
  "class": "form-text invalid-feedback"
};
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Jika tidak memiliki account bisa "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "/register",
  style: {
    "text-transform": "underline"
  }
}, "register"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" dulu !!! ")], -1 /* HOISTED */);
var _hoisted_39 = {
  "class": "row justify-content-center"
};
var _hoisted_40 = {
  "class": "col-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$responseGener, _$setup$responseGener2, _$setup$responseGener3, _$setup$responseGener4, _$setup$responseGener5, _$setup$responseGener6, _$setup$responseGener7, _$setup$responseGener8, _$setup$responseGener9, _$setup$responseGener10, _$setup$responseGener11, _$setup$responseGener12, _$setup$responseGener13, _$setup$responseGener14, _$setup$responseGener15, _$setup$responseGener16, _$setup$responseGener17, _$setup$responseGener18, _$setup$responseGener19, _$setup$responseGener20, _$setup$responseGener21, _$setup$responseGener22, _$setup$responseGener23, _$setup$responseGener24, _$setup$responseGener25, _$setup$responseGener26, _$setup$responseGener27, _$setup$responseGener28;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.loginOrNotChecked ? 'Login' : 'Register') + " Form", 1 /* TEXT */)])]), !$setup.loginOrNotChecked ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [$setup.responseGeneral.position === 'admin' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [!$setup.loginOrNotChecked ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", (_$setup$responseGener = $setup.responseGeneral) !== null && _$setup$responseGener !== void 0 && (_$setup$responseGener = _$setup$responseGener.message) !== null && _$setup$responseGener !== void 0 && _$setup$responseGener.name ? 'is-invalid' : '']),
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.name = $event;
    }),
    id: "name",
    "aria-describedby": "name"
  }, null, 2 /* CLASS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.name]]), !((_$setup$responseGener2 = $setup.responseGeneral) !== null && _$setup$responseGener2 !== void 0 && _$setup$responseGener2.status) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$responseGener3 = $setup.responseGeneral) !== null && _$setup$responseGener3 !== void 0 && (_$setup$responseGener3 = _$setup$responseGener3.message) !== null && _$setup$responseGener3 !== void 0 && _$setup$responseGener3.name ? (_$setup$responseGener4 = $setup.responseGeneral) === null || _$setup$responseGener4 === void 0 || (_$setup$responseGener4 = _$setup$responseGener4.message) === null || _$setup$responseGener4 === void 0 ? void 0 : _$setup$responseGener4.name[0] : ''), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.loginOrNotChecked ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", (_$setup$responseGener5 = $setup.responseGeneral) !== null && _$setup$responseGener5 !== void 0 && (_$setup$responseGener5 = _$setup$responseGener5.message) !== null && _$setup$responseGener5 !== void 0 && _$setup$responseGener5.user_name ? 'is-invalid' : '']),
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.username = $event;
    }),
    id: "username",
    "aria-describedby": "username"
  }, null, 2 /* CLASS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.username]]), !((_$setup$responseGener6 = $setup.responseGeneral) !== null && _$setup$responseGener6 !== void 0 && _$setup$responseGener6.status) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$responseGener7 = $setup.responseGeneral) !== null && _$setup$responseGener7 !== void 0 && (_$setup$responseGener7 = _$setup$responseGener7.message) !== null && _$setup$responseGener7 !== void 0 && _$setup$responseGener7.user_name ? (_$setup$responseGener8 = $setup.responseGeneral) === null || _$setup$responseGener8 === void 0 || (_$setup$responseGener8 = _$setup$responseGener8.message) === null || _$setup$responseGener8 === void 0 ? void 0 : _$setup$responseGener8.user_name[0] : ''), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", (_$setup$responseGener9 = $setup.responseGeneral) !== null && _$setup$responseGener9 !== void 0 && (_$setup$responseGener9 = _$setup$responseGener9.message) !== null && _$setup$responseGener9 !== void 0 && _$setup$responseGener9.email ? 'is-invalid' : '']),
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.email = $event;
    }),
    id: "email",
    "aria-describedby": "email"
  }, null, 2 /* CLASS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.email]]), !((_$setup$responseGener10 = $setup.responseGeneral) !== null && _$setup$responseGener10 !== void 0 && _$setup$responseGener10.status) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$responseGener11 = $setup.responseGeneral) !== null && _$setup$responseGener11 !== void 0 && (_$setup$responseGener11 = _$setup$responseGener11.message) !== null && _$setup$responseGener11 !== void 0 && _$setup$responseGener11.email ? (_$setup$responseGener12 = $setup.responseGeneral) === null || _$setup$responseGener12 === void 0 || (_$setup$responseGener12 = _$setup$responseGener12.message) === null || _$setup$responseGener12 === void 0 ? void 0 : _$setup$responseGener12.email[0] : ''), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", (_$setup$responseGener13 = $setup.responseGeneral) !== null && _$setup$responseGener13 !== void 0 && (_$setup$responseGener13 = _$setup$responseGener13.message) !== null && _$setup$responseGener13 !== void 0 && _$setup$responseGener13.password ? 'is-invalid' : '']),
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.password = $event;
    }),
    id: "password",
    "aria-describedby": "password"
  }, null, 2 /* CLASS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.password]]), !((_$setup$responseGener14 = $setup.responseGeneral) !== null && _$setup$responseGener14 !== void 0 && _$setup$responseGener14.status) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$responseGener15 = $setup.responseGeneral) !== null && _$setup$responseGener15 !== void 0 && (_$setup$responseGener15 = _$setup$responseGener15.message) !== null && _$setup$responseGener15 !== void 0 && _$setup$responseGener15.password ? (_$setup$responseGener16 = $setup.responseGeneral) === null || _$setup$responseGener16 === void 0 || (_$setup$responseGener16 = _$setup$responseGener16.message) === null || _$setup$responseGener16 === void 0 ? void 0 : _$setup$responseGener16.password[0] : ''), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), !$setup.loginOrNotChecked ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["custom-select custom-select-lg mb-3", (_$setup$responseGener17 = $setup.responseGeneral) !== null && _$setup$responseGener17 !== void 0 && (_$setup$responseGener17 = _$setup$responseGener17.message) !== null && _$setup$responseGener17 !== void 0 && _$setup$responseGener17.position ? 'is-invalid' : '']),
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.position = $event;
    }),
    id: "position"
  }, [].concat(_hoisted_23), 2 /* CLASS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.position]]), !((_$setup$responseGener18 = $setup.responseGeneral) !== null && _$setup$responseGener18 !== void 0 && _$setup$responseGener18.status) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$responseGener19 = $setup.responseGeneral) !== null && _$setup$responseGener19 !== void 0 && (_$setup$responseGener19 = _$setup$responseGener19.message) !== null && _$setup$responseGener19 !== void 0 && _$setup$responseGener19.position ? (_$setup$responseGener20 = $setup.responseGeneral) === null || _$setup$responseGener20 === void 0 || (_$setup$responseGener20 = _$setup$responseGener20.message) === null || _$setup$responseGener20 === void 0 ? void 0 : _$setup$responseGener20.position[0] : ''), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-success",
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $setup.submit();
    })
  }, "Submit"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button type=\"button\" class=\"btn btn-warning\" @click=\"createPayload()\">Create Payload</button> ")])])], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.responseGeneral.position !== 'admin' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-warning",
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $setup.back();
    })
  }, " Back ")])])], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.loginOrNotChecked ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", (_$setup$responseGener21 = $setup.responseGeneral) !== null && _$setup$responseGener21 !== void 0 && (_$setup$responseGener21 = _$setup$responseGener21.message) !== null && _$setup$responseGener21 !== void 0 && _$setup$responseGener21.email ? 'is-invalid' : '']),
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.email = $event;
    }),
    id: "email",
    "aria-describedby": "email"
  }, null, 2 /* CLASS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.email]]), !((_$setup$responseGener22 = $setup.responseGeneral) !== null && _$setup$responseGener22 !== void 0 && _$setup$responseGener22.status) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$responseGener23 = $setup.responseGeneral) !== null && _$setup$responseGener23 !== void 0 && (_$setup$responseGener23 = _$setup$responseGener23.message) !== null && _$setup$responseGener23 !== void 0 && _$setup$responseGener23.email ? (_$setup$responseGener24 = $setup.responseGeneral) === null || _$setup$responseGener24 === void 0 || (_$setup$responseGener24 = _$setup$responseGener24.message) === null || _$setup$responseGener24 === void 0 ? void 0 : _$setup$responseGener24.email[0] : ''), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", (_$setup$responseGener25 = $setup.responseGeneral) !== null && _$setup$responseGener25 !== void 0 && (_$setup$responseGener25 = _$setup$responseGener25.message) !== null && _$setup$responseGener25 !== void 0 && _$setup$responseGener25.password ? 'is-invalid' : '']),
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.password = $event;
    }),
    id: "password",
    "aria-describedby": "password"
  }, null, 2 /* CLASS */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.password]]), !((_$setup$responseGener26 = $setup.responseGeneral) !== null && _$setup$responseGener26 !== void 0 && _$setup$responseGener26.status) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$setup$responseGener27 = $setup.responseGeneral) !== null && _$setup$responseGener27 !== void 0 && (_$setup$responseGener27 = _$setup$responseGener27.message) !== null && _$setup$responseGener27 !== void 0 && _$setup$responseGener27.password ? (_$setup$responseGener28 = $setup.responseGeneral) === null || _$setup$responseGener28 === void 0 || (_$setup$responseGener28 = _$setup$responseGener28.message) === null || _$setup$responseGener28 === void 0 ? void 0 : _$setup$responseGener28.password[0] : ''), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_38])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-success",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $setup.submit();
    })
  }, "Submit"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button type=\"button\" class=\"btn btn-warning\" @click=\"createPayload()\">Create Payload</button> ")])])], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LoadingAndAlert"], {
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