"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_LoginRegister_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'LoadingAndAlert',
  props: ['text', 'loading', 'responseGeneral', 'confirmDelete'],
  emits: ['confirm', 'confirmDelete'],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose,
      __emit = _ref.emit;
    __expose();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    var props = __props;
    var emit = __emit;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {});
    var responseGeneral = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var response = props === null || props === void 0 ? void 0 : props.responseGeneral;
      if (!props.loading) {
        if ((response === null || response === void 0 ? void 0 : response.status) === true) {
          return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "Sukses!!!",
            text: response.message,
            icon: "success"
          }).then(function (result) {
            if (result.isConfirmed) {
              emit('confirm', true);
            }
          });
        } else if ((response === null || response === void 0 ? void 0 : response.status) === false) {
          var _response$message, _response$message2;
          var conditionSlug = response !== null && response !== void 0 && (_response$message = response.message) !== null && _response$message !== void 0 && _response$message.slug ? response === null || response === void 0 || (_response$message2 = response.message) === null || _response$message2 === void 0 ? void 0 : _response$message2.slug[0] : '';
          if (conditionSlug === 'slug unique') {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              icon: "error",
              title: "Oops...",
              text: "Nama counter deck sudah ada, coba ganti nama lain !"
            });
          } else {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!"
            });
          }
        }
      }
    });
    var confirmDelete = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      props === null || props === void 0 || props.confirmDelete;
      return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title: "Apa kamu yakin akan mengapus info Deck ini ? ",
        showCancelButton: true,
        confirmButtonText: "Yes"
      }).then(function (result) {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          emit('confirm', true);
        } else {
          emit('confirm', false);
        }
      });
    });
    var __returned__ = {
      store: store,
      props: props,
      emit: emit,
      responseGeneral: responseGeneral,
      confirmDelete: confirmDelete,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      get useStore() {
        return vuex__WEBPACK_IMPORTED_MODULE_2__.useStore;
      },
      get Swal() {
        return (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default());
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
    var name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('Nico Ready');
    var username = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var email = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var password = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('nicoready');
    var position = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)([]);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {});
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.getterStateLoading;
    });
    var responseGeneral = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.getterResponseAuth;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_image_animated_spinner_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image/animated/spinner.svg */ "./resources/assets/image/animated/spinner.svg");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-936ee9f4"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  id: "LoadingAndAlert"
};
var _hoisted_2 = {
  key: 0,
  "class": "loading"
};
var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-wrapper"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _assets_image_animated_spinner_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "spinner"
  })], -1 /* HOISTED */);
});
var _hoisted_4 = [_hoisted_3];
var _hoisted_5 = {
  key: 1,
  "class": "sweet-alert"
};
var _hoisted_6 = {
  style: {
    "display": "none"
  }
};
var _hoisted_7 = {
  key: 2,
  "class": "sweet-alert"
};
var _hoisted_8 = {
  style: {
    "display": "none"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$setup.props.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [].concat(_hoisted_4))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.props.responseGeneral ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.responseGeneral), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.props.confirmDelete ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.confirmDelete), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

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
  "class": "row justify-content-center"
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$setup$responseGener, _$setup$responseGener2, _$setup$responseGener3, _$setup$responseGener4, _$setup$responseGener5, _$setup$responseGener6, _$setup$responseGener7, _$setup$responseGener8, _$setup$responseGener9, _$setup$responseGener10, _$setup$responseGener11, _$setup$responseGener12, _$setup$responseGener13, _$setup$responseGener14, _$setup$responseGener15, _$setup$responseGener16, _$setup$responseGener17, _$setup$responseGener18, _$setup$responseGener19, _$setup$responseGener20;
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.loginOrNotChecked ? 'Login' : 'Register') + " Form", 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [!$setup.loginOrNotChecked ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
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
  }, "Submit"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button type=\"button\" class=\"btn btn-warning\" @click=\"createPayload()\">Create Payload</button> ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["LoadingAndAlert"], {
    loading: $setup.loading,
    responseGeneral: $setup.responseGeneral
  }, null, 8 /* PROPS */, ["loading", "responseGeneral"])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n    /* ********** loading style */\n.modal-wrapper[data-v-936ee9f4] {\r\n            position: fixed;\r\n            left: 0;\r\n            top: 0;\r\n            z-index: 999;\r\n            width: 100vw;\r\n            height: 100vh;\r\n            background: rgba(0, 0, 0, 0.4);\r\n            display: grid;\r\n            place-items: center;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/assets/image/animated/spinner.svg":
/*!*****************************************************!*\
  !*** ./resources/assets/image/animated/spinner.svg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/spinner.svg?ef4b864bf183ec6dbcff104b7d7e73a7");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_style_index_0_id_936ee9f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_style_index_0_id_936ee9f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_style_index_0_id_936ee9f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/LoadingAndAlert.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/LoadingAndAlert.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingAndAlert_vue_vue_type_template_id_936ee9f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true */ "./resources/js/components/LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true");
/* harmony import */ var _LoadingAndAlert_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingAndAlert.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/LoadingAndAlert.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _LoadingAndAlert_vue_vue_type_style_index_0_id_936ee9f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css */ "./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_LoadingAndAlert_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LoadingAndAlert_vue_vue_type_template_id_936ee9f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-936ee9f4"],['__file',"resources/js/components/LoadingAndAlert.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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

/***/ "./resources/js/components/LoadingAndAlert.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/LoadingAndAlert.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingAndAlert.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./resources/js/components/LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_template_id_936ee9f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_template_id_936ee9f4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=template&id=936ee9f4&scoped=true");


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


/***/ }),

/***/ "./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingAndAlert_vue_vue_type_style_index_0_id_936ee9f4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/LoadingAndAlert.vue?vue&type=style&index=0&id=936ee9f4&scoped=true&lang=css");


/***/ })

}]);