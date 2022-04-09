/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/abstracts/CustomElement.js":
/*!****************************************!*\
  !*** ./src/abstracts/CustomElement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CustomElement = /*#__PURE__*/function (_HTMLElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CustomElement, _HTMLElement);

  var _super = _createSuper(CustomElement);

  function CustomElement() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomElement);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
      this.setEvent();
    }
  }, {
    key: "render",
    value: function render() {
      this.insertAdjacentHTML('beforeend', this.template());
    }
  }, {
    key: "template",
    value: function template() {}
  }, {
    key: "setEvent",
    value: function setEvent() {}
  }]);

  return CustomElement;
}( /*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(HTMLElement));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomElement);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_HASH": () => (/* binding */ BASE_HASH),
/* harmony export */   "AUTH_BASE_URL": () => (/* binding */ AUTH_BASE_URL),
/* harmony export */   "HEADER": () => (/* binding */ HEADER),
/* harmony export */   "COIN": () => (/* binding */ COIN),
/* harmony export */   "MONEY": () => (/* binding */ MONEY),
/* harmony export */   "PRODUCT": () => (/* binding */ PRODUCT),
/* harmony export */   "CONFIRM_MESSAGE": () => (/* binding */ CONFIRM_MESSAGE),
/* harmony export */   "COMPLETE_MESSAGE": () => (/* binding */ COMPLETE_MESSAGE),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "JSON_AUTH_SERVER_ERROR_MESSAGE": () => (/* binding */ JSON_AUTH_SERVER_ERROR_MESSAGE)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");

var BASE_HASH = '#!product-purchase';
var AUTH_BASE_URL = 'https://vendingmachine-auth-server.herokuapp.com';
var HEADER = {
  VENDING_MACHINE: '🍿 자판기 🍿',
  LOGIN: '로그인',
  SIGNUP: '회원가입',
  USER_INFO_MODIFY: '회원 정보 수정'
};
var COIN = {
  DEFAULT_COUNT: 0
};
var MONEY = {
  DEFAULT: 0,
  MACHINE_MAX: 100000,
  CUSTOMER_MAX: 10000
};
var PRODUCT = {
  NAME: {
    MAX_LENGTH: 10
  },
  PRICE: {
    MIN: 100,
    MAX: 10000
  },
  QUANTITY: {
    MIN: 1,
    MAX: 20
  }
};
var CONFIRM_MESSAGE = {
  DELETE: '선택한 상품을 정말 삭제하시겠습니까? 한번 삭제한 상품은 복구할 수 없습니다.'
};
var COMPLETE_MESSAGE = {
  MONEY_INPUT: '금액이 투입되었습니다.',
  PRODUCT_PURCHASE: '상품이 구매되었습니다.',
  CHANGE_RETURN: '잔돈이 반환되었습니다.'
};
var ERROR_MESSAGE = {
  VENDING_MACHINE: {
    IS_BLANK_PRODUCT_NAME: '공백으로만 이루어진 상품명이 입력되었습니다! 상품명을 입력해 주세요!',
    IS_OVER_MAX_PRODUCT_NAME_LENGTH: "\uC0C1\uD488\uBA85\uC774 \uCD5C\uB300 \uAE38\uC774\uC778 ".concat(PRODUCT.NAME.MAX_LENGTH, "\uC790\uB97C \uCD08\uACFC\uD558\uC5EC \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4! ").concat(PRODUCT.NAME.MAX_LENGTH, "\uC790 \uC774\uB0B4\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694!"),
    IS_ALREADY_EXIST_PRODUCT_WHEN_ADD: '이미 존재하는 상품입니다! 가격 또는 수량을 수정하고 싶으시다면 수정 버튼을 클릭해 주세요!',
    IS_ALREADY_EXIST_PRODUCT_WHEN_MODIFY: '이미 존재하는 상품입니다! 다른 상품명을 입력해 주세요!',
    IS_NOT_INTEGER_PRICE: '가격에 정수가 입력되지 않았습니다! 정수를 입력해 주세요!',
    IS_UNDER_MIN_PRICE: "\uAC00\uACA9\uC774 \uCD5C\uC18C \uAC00\uACA9\uC778 ".concat(PRODUCT.PRICE.MIN, "\uC6D0 \uBBF8\uB9CC\uC73C\uB85C \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4! ").concat(PRODUCT.PRICE.MIN, "\uC6D0 \uC774\uC0C1\uC73C\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694!"),
    IS_OVER_MAX_PRICE: "\uAC00\uACA9\uC774 \uCD5C\uB300 \uAC00\uACA9\uC778 ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.addThousandUnitComma)(PRODUCT.PRICE.MAX), "\uC6D0\uC744 \uCD08\uACFC\uD558\uC5EC \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4! ").concat(PRODUCT.PRICE.MAX.toLocaleString(), "\uC6D0 \uC774\uD558\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694!"),
    PRICE_CANNOT_DIVIDED_BY_TEN: '가격에 1원 단위가 입력되었습니다! 10원 단위로 입력해 주세요!',
    IS_NOT_INTEGER_QUANTITY: '수량에 정수가 입력되지 않았습니다! 정수를 입력해 주세요!',
    IS_UNDER_MIN_QUANTITY: "\uC218\uB7C9\uC774 \uCD5C\uC18C \uC218\uB7C9\uC778 ".concat(PRODUCT.QUANTITY.MIN, "\uAC1C \uBBF8\uB9CC\uC73C\uB85C \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4! ").concat(PRODUCT.QUANTITY.MIN, "\uAC1C \uC774\uC0C1\uC73C\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694!"),
    IS_OVER_MAX_QUANTITY: "\uC218\uB7C9\uC774 \uCD5C\uB300 \uC218\uB7C9\uC778 ".concat(PRODUCT.QUANTITY.MAX, "\uAC1C\uB97C \uCD08\uACFC\uD558\uC5EC \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4! ").concat(PRODUCT.QUANTITY.MAX, "\uAC1C \uC774\uD558\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694!"),
    IS_OVER_MAX_MACHINE_MONEY: "\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561\uC774 \uCD5C\uB300 \uBCF4\uC720 \uAC00\uB2A5 \uAE08\uC561\uC778 ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.addThousandUnitComma)(MONEY.MACHINE_MAX), "\uC6D0\uC744 \uCD08\uACFC\uD558\uC600\uC2B5\uB2C8\uB2E4! \uD604\uC7AC \uBCF4\uC720 \uAE08\uC561\uC744 \uD655\uC778\uD55C \uD6C4 \uC785\uB825\uD574 \uC8FC\uC138\uC694!"),
    IS_OVER_MAX_CUSTOMER_MONEY: "\uD22C\uC785\uD55C \uAE08\uC561\uC774 \uCD5C\uB300 \uD22C\uC785 \uAC00\uB2A5 \uAE08\uC561\uC778 ".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.addThousandUnitComma)(MONEY.CUSTOMER_MAX), "\uC6D0\uC744 \uCD08\uACFC\uD558\uC600\uC2B5\uB2C8\uB2E4! \uD22C\uC785\uD55C \uAE08\uC561\uC744 \uD655\uC778\uD55C \uD6C4 \uC785\uB825\uD574 \uC8FC\uC138\uC694!"),
    MONEY_CANNOT_DIVIDED_BY_TEN: '금액에 1원 단위가 입력되었습니다! 10원 단위로 입력해 주세요!',
    IS_PRICE_OVER_CUSTOMER_MONEY: '투입한 금액이 부족합니다! 해당 상품을 구매하시려면 금액을 더 투입해 주세요!',
    IS_SOLD_OUT: '품절된 상품입니다! 다른 상품을 구매해 주세요!',
    IS_NO_CUSTOMER_MONEY: '투입한 금액이 없습니다! 10원부터 잔돈으로 반환할 수 있습니다!'
  },
  AUTH: {
    CANNOT_FIND_USER: '가입되지 않은 이메일입니다! 이메일을 확인해 주세요!',
    INCORRECT_PASSWORD: '비밀번호가 틀렸습니다! 비밀번호를 다시 입력해 주세요!',
    EMAIL_ALREADY_EXISTS: '이미 가입된 이메일입니다! 뒤로 가기를 눌러 로그인해 주세요!',
    IS_BLANK_USER_NAME: '공백으로만 이루어진 이름이 이루어졌습니다! 이름을 입력해 주세요!',
    IS_PASSWORD_CONFIRM_NOT_MATCH_PASSWORD: '비밀번호 확인이 비밀번호와 일치하지 않습니다! 비밀번호 확인을 다시 입력해 주세요!'
  }
};
var JSON_AUTH_SERVER_ERROR_MESSAGE = {
  CANNOT_FIND_USER: 'Cannot find user',
  INCORRECT_PASSWORD: 'Incorrect password',
  EMAIL_ALREADY_EXISTS: 'Email already exists'
};

/***/ }),

/***/ "./src/elements/AdministratorMenu.js":
/*!*******************************************!*\
  !*** ./src/elements/AdministratorMenu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _domains_stores_AuthStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../domains/stores/AuthStore */ "./src/domains/stores/AuthStore.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./src/utils.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var AdministratorMenu = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AdministratorMenu, _CustomElement);

  var _super = _createSuper(AdministratorMenu);

  function AdministratorMenu() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AdministratorMenu);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AdministratorMenu, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(AdministratorMenu.prototype), "connectedCallback", this).call(this);

      _domains_stores_AuthStore__WEBPACK_IMPORTED_MODULE_6__["default"].instance.subscribe(this);
    }
  }, {
    key: "template",
    value: function template() {
      return "\n      <nav>\n        <a href=\"#!product-manage\">\n          <button class=\"nav__product-manage-button\">\uC0C1\uD488 \uAD00\uB9AC</button>\n        </a>\n        <a href=\"#!coin-charge\">\n          <button class=\"nav__coin-charge-button\">\uC794\uB3C8 \uCDA9\uC804</button>\n        </a>\n        <a href=\"#!product-purchase\">\n          <button class=\"nav__product-purchase-button clicked\">\uC0C1\uD488 \uAD6C\uB9E4</button>\n        </a>\n      </nav>\n    ";
    }
  }, {
    key: "rerender",
    value: function rerender(isAdministrator) {
      if (isAdministrator) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_8__.showElement)(this);
        return;
      }

      (0,_utils__WEBPACK_IMPORTED_MODULE_8__.hideElement)(this);
    }
  }]);

  return AdministratorMenu;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_7__["default"]);

customElements.define('administrator-menu', AdministratorMenu);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdministratorMenu);

/***/ }),

/***/ "./src/elements/Auth/AuthMenu.js":
/*!***************************************!*\
  !*** ./src/elements/Auth/AuthMenu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _domains_stores_AuthStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../domains/stores/AuthStore */ "./src/domains/stores/AuthStore.ts");
/* harmony import */ var _domains_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../domains/actions */ "./src/domains/actions.ts");
/* harmony import */ var _domains_Auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../domains/Auth */ "./src/domains/Auth.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var AuthMenu = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AuthMenu, _CustomElement);

  var _super = _createSuper(AuthMenu);

  function AuthMenu() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AuthMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleAuthMenuClick", function (event) {
      var target = event.target;

      if (target === (0,_utils__WEBPACK_IMPORTED_MODULE_13__.$)('.user-button')) {
        _this.handleUserButtonClick();

        return;
      }

      if (target === (0,_utils__WEBPACK_IMPORTED_MODULE_13__.$)('.logout-button')) {
        _this.handleLogoutButtonClick();
      }

      (0,_utils__WEBPACK_IMPORTED_MODULE_13__.hideElement)((0,_utils__WEBPACK_IMPORTED_MODULE_13__.$)('.user-menu-select-box'));
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleUserButtonClick", function () {
      var $userMenuSelectBox = (0,_utils__WEBPACK_IMPORTED_MODULE_13__.$)('.user-menu-select-box');

      if ($userMenuSelectBox.classList.contains('hidden')) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_13__.showElement)($userMenuSelectBox);
        return;
      }

      (0,_utils__WEBPACK_IMPORTED_MODULE_13__.hideElement)($userMenuSelectBox);
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleLogoutButtonClick", function () {
      (0,_domains_Auth__WEBPACK_IMPORTED_MODULE_11__.logout)();
      _domains_stores_AuthStore__WEBPACK_IMPORTED_MODULE_9__["default"].instance.dispatch((0,_domains_actions__WEBPACK_IMPORTED_MODULE_10__.createAction)(_domains_actions__WEBPACK_IMPORTED_MODULE_10__.AUTH_ACTION.LOGOUT));
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AuthMenu, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.render();

              case 2:
                this.setEvent();
                _domains_stores_AuthStore__WEBPACK_IMPORTED_MODULE_9__["default"].instance.subscribe(this);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "render",
    value: function () {
      var _render = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee2() {
        var _user$name$charAt;

        var user, userNameFirstChar;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0,_domains_Auth__WEBPACK_IMPORTED_MODULE_11__.getUser)();

              case 2:
                user = _context2.sent;
                userNameFirstChar = (_user$name$charAt = user === null || user === void 0 ? void 0 : user.name.charAt(0)) !== null && _user$name$charAt !== void 0 ? _user$name$charAt : '';
                this.insertAdjacentHTML('beforeend', this.template(userNameFirstChar));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "template",
    value: function template(userNameFirstChar) {
      var isAdministrator = userNameFirstChar !== '';
      var isLoginButtonHidden = isAdministrator ? 'hidden' : '';
      var isUserButtonHidden = isAdministrator ? '' : 'hidden';
      return "\n      <a href=\"#!login\">\n        <button class=\"login-button ".concat(isLoginButtonHidden, "\">\uB85C\uADF8\uC778</button>\n      </a>\n      <button class=\"user-button ").concat(isUserButtonHidden, "\">").concat(userNameFirstChar, "</button>\n      <div class=\"user-menu-select-box hidden\">\n        <a href=\"#!user-info-modify\" class=\"user-info-modify-button\">\n          <button>\uD83D\uDEE0 \uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815</button>\n        </a>\n        <button class=\"logout-button\">\uD83D\uDC4B\uD83C\uDFFB \uB85C\uADF8\uC544\uC6C3</button>\n      </div>\n    ");
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      this.addEventListener('click', this.handleAuthMenuClick);
    }
  }, {
    key: "rerender",
    value: function () {
      var _rerender = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee3(isAdministrator) {
        var $loginButton, $userButton, user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                $loginButton = (0,_utils__WEBPACK_IMPORTED_MODULE_13__.$)('.login-button');
                $userButton = (0,_utils__WEBPACK_IMPORTED_MODULE_13__.$)('.user-button');

                if (!isAdministrator) {
                  _context3.next = 10;
                  break;
                }

                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.hideElement)($loginButton);
                _context3.next = 6;
                return (0,_domains_Auth__WEBPACK_IMPORTED_MODULE_11__.getUser)();

              case 6:
                user = _context3.sent;
                $userButton.textContent = user.name.charAt(0);
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.showElement)($userButton);
                return _context3.abrupt("return");

              case 10:
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.showElement)($loginButton);
                (0,_utils__WEBPACK_IMPORTED_MODULE_13__.hideElement)($userButton);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function rerender(_x) {
        return _rerender.apply(this, arguments);
      }

      return rerender;
    }()
  }]);

  return AuthMenu;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_12__["default"]);

customElements.define('auth-menu', AuthMenu);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthMenu);

/***/ }),

/***/ "./src/elements/Auth/Login.js":
/*!************************************!*\
  !*** ./src/elements/Auth/Login.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _domains_stores_AuthStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../domains/stores/AuthStore */ "./src/domains/stores/AuthStore.ts");
/* harmony import */ var _domains_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../domains/actions */ "./src/domains/actions.ts");
/* harmony import */ var _domains_Auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../domains/Auth */ "./src/domains/Auth.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var Login = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, _CustomElement);

  var _super = _createSuper(Login);

  function Login() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleLoginFormSubmit", /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee(event) {
        var _event$target$element, email, password;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _event$target$element = event.target.elements, email = _event$target$element.email, password = _event$target$element.password;
                _context.prev = 2;
                _context.next = 5;
                return _this.logIn(email, password);

              case 5:
                _this.initLoginInputs(email, password);

                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);

                if (_context.t0.message === _constants__WEBPACK_IMPORTED_MODULE_14__.JSON_AUTH_SERVER_ERROR_MESSAGE.CANNOT_FIND_USER) {
                  alert(_constants__WEBPACK_IMPORTED_MODULE_14__.ERROR_MESSAGE.AUTH.CANNOT_FIND_USER);
                }

                if (_context.t0.message === _constants__WEBPACK_IMPORTED_MODULE_14__.JSON_AUTH_SERVER_ERROR_MESSAGE.INCORRECT_PASSWORD) {
                  alert(_constants__WEBPACK_IMPORTED_MODULE_14__.ERROR_MESSAGE.AUTH.INCORRECT_PASSWORD);
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Login, [{
    key: "template",
    value: function template() {
      return "\n      <h1>\uB85C\uADF8\uC778</h1>\n      <form class=\"login-form auth-form\">\n        <fieldset>\n          <label for=\"login-email\">\uC774\uBA54\uC77C</label>\n          <input type=\"email\" id=\"login-email\" name=\"email\" placeholder=\"woowacourse@gmail.com\" required>\n          <label for=\"login-password\">\uBE44\uBC00\uBC88\uD638</label>\n          <input type=\"password\" id=\"login-password\" name=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" minLength=\"4\" required>\n          <button class=\"login-confirm-button\">\uD655\uC778</button>\n        </fieldset>\n      </form>\n      <p>\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694? <span><a href=\"#!signup\" class=\"signup-button\">\uD68C\uC6D0\uAC00\uC785</a></span></p>\n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      (0,_utils__WEBPACK_IMPORTED_MODULE_13__.$)('.login-form').addEventListener('submit', this.handleLoginFormSubmit);
    }
  }, {
    key: "logIn",
    value: function () {
      var _logIn = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee2($email, $password) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0,_domains_Auth__WEBPACK_IMPORTED_MODULE_11__.login)($email.value, $password.value);

              case 2:
                _domains_stores_AuthStore__WEBPACK_IMPORTED_MODULE_9__["default"].instance.dispatch((0,_domains_actions__WEBPACK_IMPORTED_MODULE_10__.createAction)(_domains_actions__WEBPACK_IMPORTED_MODULE_10__.AUTH_ACTION.LOGIN));
                this.initLoginInputs($email, $password);
                window.location.hash = _constants__WEBPACK_IMPORTED_MODULE_14__.BASE_HASH;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function logIn(_x2, _x3) {
        return _logIn.apply(this, arguments);
      }

      return logIn;
    }()
  }, {
    key: "initLoginInputs",
    value: function initLoginInputs($email, $password) {
      $email.value = '';
      $password.value = '';
    }
  }]);

  return Login;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_12__["default"]);

customElements.define('log-in', Login);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./src/elements/Auth/Signup.js":
/*!*************************************!*\
  !*** ./src/elements/Auth/Signup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _domains_Auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../domains/Auth */ "./src/domains/Auth.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../validators */ "./src/validators.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var Signup = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Signup, _CustomElement);

  var _super = _createSuper(Signup);

  function Signup() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleSignupFormSubmit", /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee(event) {
        var _event$target$element, email, name, password, passwordConfirm;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _event$target$element = event.target.elements, email = _event$target$element.email, name = _event$target$element.name, password = _event$target$element.password, passwordConfirm = _event$target$element.passwordConfirm;
                _context.prev = 2;
                _context.next = 5;
                return _this.signUp(email, name, password, passwordConfirm);

              case 5:
                _this.initSignupInputs(email, name, password, passwordConfirm);

                _context.next = 14;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);

                if (!(_context.t0.message === _constants__WEBPACK_IMPORTED_MODULE_10__.JSON_AUTH_SERVER_ERROR_MESSAGE.EMAIL_ALREADY_EXISTS)) {
                  _context.next = 13;
                  break;
                }

                alert(_constants__WEBPACK_IMPORTED_MODULE_10__.ERROR_MESSAGE.AUTH.EMAIL_ALREADY_EXISTS);
                return _context.abrupt("return");

              case 13:
                alert(_context.t0.message);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Signup, [{
    key: "template",
    value: function template() {
      return "\n      <h1>\uD68C\uC6D0\uAC00\uC785</h1>\n      <form class=\"signup-form auth-form\">\n        <fieldset>\n          <label for=\"signup-email\">\uC774\uBA54\uC77C</label>\n          <input type=\"email\" id=\"signup-email\" name=\"email\" placeholder=\"\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" required>\n          <label for=\"signup-name\">\uC774\uB984</label>\n          <input id=\"signup-name\" name=\"name\" placeholder=\"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694\" minLength=2 maxLength=6 required>\n          <label for=\"signup-password\">\uBE44\uBC00\uBC88\uD638</label>\n          <input type=\"password\" id=\"signup-password\" name=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" required>\n          <label for=\"signup-password-confirm\">\uBE44\uBC00\uBC88\uD638 \uD655\uC778</label>\n          <input type=\"password\" id=\"signup-password-confirm\" name=\"passwordConfirm\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" required>\n          <button class=\"signup-confirm-button\">\uD655\uC778</button>\n        </fieldset>\n      </form>\n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      (0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)('.signup-form').addEventListener('submit', this.handleSignupFormSubmit);
    }
  }, {
    key: "signUp",
    value: function () {
      var _signUp = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee2($email, $name, $password, $passwordConfirm) {
        var userName;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userName = $name.value.trim();
                (0,_validators__WEBPACK_IMPORTED_MODULE_13__.checkSignupValidation)(userName, $password.value, $passwordConfirm.value);
                _context2.next = 4;
                return (0,_domains_Auth__WEBPACK_IMPORTED_MODULE_11__.signup)($email.value, userName, $password.value);

              case 4:
                this.initSignupInputs($email, $name, $password, $passwordConfirm);
                window.history.back();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function signUp(_x2, _x3, _x4, _x5) {
        return _signUp.apply(this, arguments);
      }

      return signUp;
    }()
  }, {
    key: "initSignupInputs",
    value: function initSignupInputs($email, $name, $password, $passwordConfirm) {
      $email.value = '';
      $name.value = '';
      $password.value = '';
      $passwordConfirm.value = '';
    }
  }]);

  return Signup;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_9__["default"]);

customElements.define('sign-up', Signup);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);

/***/ }),

/***/ "./src/elements/Auth/UserInfoModify.js":
/*!*********************************************!*\
  !*** ./src/elements/Auth/UserInfoModify.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _domains_stores_AuthStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../domains/stores/AuthStore */ "./src/domains/stores/AuthStore.ts");
/* harmony import */ var _domains_Auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../domains/Auth */ "./src/domains/Auth.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var UserInfoModify = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(UserInfoModify, _CustomElement);

  var _super = _createSuper(UserInfoModify);

  function UserInfoModify() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UserInfoModify);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleUserInfoModifyFormSubmit", function (event) {
      event.preventDefault();
      window.location.hash = _constants__WEBPACK_IMPORTED_MODULE_13__.BASE_HASH;
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(UserInfoModify, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.render();

              case 2:
                this.setEvent();
                _domains_stores_AuthStore__WEBPACK_IMPORTED_MODULE_9__["default"].instance.subscribe(this);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "render",
    value: function () {
      var _render = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee2() {
        var user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0,_domains_Auth__WEBPACK_IMPORTED_MODULE_10__.getUser)();

              case 2:
                user = _context2.sent;
                this.insertAdjacentHTML('beforeend', this.template(user === null || user === void 0 ? void 0 : user.email));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "template",
    value: function template(email) {
      return "\n      <h1>\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815</h1>\n      <form class=\"user-info-modify-form auth-form\">\n        <fieldset disabled>\n          <label for=\"user-info-modify-email\">\uC774\uBA54\uC77C</label>\n          <input type=\"email\" id=\"user-info-modify-email\" placeholder=\"".concat(email, "\">\n        </fieldset>\n        <fieldset>\n          <label for=\"user-info-modify-name\">\uC774\uB984</label>\n          <input id=\"user-info-modify-name\" placeholder=\"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694\" required>\n          <label for=\"user-info-modify-password\">\uBE44\uBC00\uBC88\uD638</label>\n          <input type=\"password\" id=\"user-info-modify-password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" required>\n          <label for=\"user-info-modify-password-confirm\">\uBE44\uBC00\uBC88\uD638 \uD655\uC778</label>\n          <input type=\"password\" id=\"user-info-modify-password-confirm\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" required>\n          <button class=\"user-info-modify-confirm-button\">\uD655\uC778</button>\n        </fieldset>\n      </form>\n    ");
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      (0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)('.user-info-modify-form').addEventListener('submit', this.handleUserInfoModifyFormSubmit);
    }
  }, {
    key: "rerender",
    value: function () {
      var _rerender = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee3() {
        var user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0,_domains_Auth__WEBPACK_IMPORTED_MODULE_10__.getUser)();

              case 2:
                user = _context3.sent;
                (0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)('#user-info-modify-email').placeholder = user === null || user === void 0 ? void 0 : user.email;

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function rerender() {
        return _rerender.apply(this, arguments);
      }

      return rerender;
    }()
  }]);

  return UserInfoModify;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_11__["default"]);

customElements.define('user-info-modify', UserInfoModify);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfoModify);

/***/ }),

/***/ "./src/elements/CoinCharge/CoinChargeContainer.js":
/*!********************************************************!*\
  !*** ./src/elements/CoinCharge/CoinChargeContainer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _CoinChargeForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CoinChargeForm */ "./src/elements/CoinCharge/CoinChargeForm.js");
/* harmony import */ var _CoinCurrentSituation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CoinCurrentSituation */ "./src/elements/CoinCharge/CoinCurrentSituation.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var CoinChargeContainer = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CoinChargeContainer, _CustomElement);

  var _super = _createSuper(CoinChargeContainer);

  function CoinChargeContainer() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoinChargeContainer);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoinChargeContainer, [{
    key: "template",
    value: function template() {
      return "\n      <coin-charge-form></coin-charge-form>\n      <coin-current-situation></coin-current-situation>\n    ";
    }
  }]);

  return CoinChargeContainer;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_5__["default"]);

customElements.define('coin-charge-container', CoinChargeContainer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinChargeContainer);

/***/ }),

/***/ "./src/elements/CoinCharge/CoinChargeForm.js":
/*!***************************************************!*\
  !*** ./src/elements/CoinCharge/CoinChargeForm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../domains/stores/CoinStore */ "./src/domains/stores/CoinStore.ts");
/* harmony import */ var _domains_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../domains/actions */ "./src/domains/actions.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../validators */ "./src/validators.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var CoinChargeForm = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CoinChargeForm, _CustomElement);

  var _super = _createSuper(CoinChargeForm);

  function CoinChargeForm() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoinChargeForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleCoinChargeFormSubmit", function (event) {
      event.preventDefault();
      var $machineMoneyInput = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('#machine-money-input');
      var machineMoneyInputValue = $machineMoneyInput.valueAsNumber;

      try {
        _this.chargeCoin(machineMoneyInputValue);

        _this.initMachineMoneyInput($machineMoneyInput);
      } catch (error) {
        alert(error.message);
      }
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoinChargeForm, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(CoinChargeForm.prototype), "connectedCallback", this).call(this);

      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_8__["default"].instance.subscribeMachine(this);
    }
  }, {
    key: "template",
    value: function template() {
      return "\n      <form class=\"coin-charge-form\">\n        <label for=\"machine-money-input\">\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n        <input type=\"number\" id=\"machine-money-input\" placeholder=\"\uAE08\uC561\" step=\"10\" required>\n        <button class=\"coin-charge-button\">\uCDA9\uC804</button>\n      </form>\n      <p>\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561: <span class=\"machine-money\">0</span>\uC6D0</p>\n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.coin-charge-form').addEventListener('submit', this.handleCoinChargeFormSubmit);
    }
  }, {
    key: "chargeCoin",
    value: function chargeCoin(machineMoneyInputValue) {
      (0,_validators__WEBPACK_IMPORTED_MODULE_12__.checkMachineMoneyValidation)(machineMoneyInputValue);
      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_8__["default"].instance.dispatch((0,_domains_actions__WEBPACK_IMPORTED_MODULE_9__.createAction)(_domains_actions__WEBPACK_IMPORTED_MODULE_9__.COIN_ACTION.CHARGE, machineMoneyInputValue));
    }
  }, {
    key: "initMachineMoneyInput",
    value: function initMachineMoneyInput($machineMoneyInput) {
      $machineMoneyInput.value = '';
      $machineMoneyInput.focus();
    }
  }, {
    key: "rerender",
    value: function rerender(_ref) {
      var money = _ref.money;
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.machine-money').textContent = money;
    }
  }]);

  return CoinChargeForm;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_10__["default"]);

customElements.define('coin-charge-form', CoinChargeForm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinChargeForm);

/***/ }),

/***/ "./src/elements/CoinCharge/CoinCurrentSituation.js":
/*!*********************************************************!*\
  !*** ./src/elements/CoinCharge/CoinCurrentSituation.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../domains/stores/CoinStore */ "./src/domains/stores/CoinStore.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var CoinCurrentSituation = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CoinCurrentSituation, _CustomElement);

  var _super = _createSuper(CoinCurrentSituation);

  function CoinCurrentSituation() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CoinCurrentSituation);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CoinCurrentSituation, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(CoinCurrentSituation.prototype), "connectedCallback", this).call(this);

      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_6__["default"].instance.subscribeMachine(this);
    } // eslint-disable-next-line max-lines-per-function

  }, {
    key: "template",
    value: function template() {
      return "\n      <h2>\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD55C \uB3D9\uC804</h2>\n      <table class=\"coin-current-situation\">\n        <thead>\n          <tr>\n            <th>\uB3D9\uC804</th>\n            <th>\uAC1C\uC218</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>500\uC6D0</td>\n            <td class=\"coin-current-situation__coin-500-count-td\">0\uAC1C</td>\n          </tr>\n          <tr>\n            <td>100\uC6D0</td>\n            <td class=\"coin-current-situation__coin-100-count-td\">0\uAC1C</td>\n          </tr>\n          </tr>\n          <tr>\n            <td>50\uC6D0</td>\n            <td class=\"coin-current-situation__coin-50-count-td\">0\uAC1C</td>\n          </tr>\n          <tr>\n            <td>10\uC6D0</td>\n            <td class=\"coin-current-situation__coin-10-count-td\">0\uAC1C</td>\n          </tr>\n        </tbody>\n      </table>\n    ";
    }
  }, {
    key: "rerender",
    value: function rerender(_ref) {
      var coinsCount = _ref.coinsCount;
      (0,_utils__WEBPACK_IMPORTED_MODULE_8__.$)('.coin-current-situation__coin-500-count-td').textContent = "".concat(coinsCount[500], "\uAC1C");
      (0,_utils__WEBPACK_IMPORTED_MODULE_8__.$)('.coin-current-situation__coin-100-count-td').textContent = "".concat(coinsCount[100], "\uAC1C");
      (0,_utils__WEBPACK_IMPORTED_MODULE_8__.$)('.coin-current-situation__coin-50-count-td').textContent = "".concat(coinsCount[50], "\uAC1C");
      (0,_utils__WEBPACK_IMPORTED_MODULE_8__.$)('.coin-current-situation__coin-10-count-td').textContent = "".concat(coinsCount[10], "\uAC1C");
    }
  }]);

  return CoinCurrentSituation;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_7__["default"]);

customElements.define('coin-current-situation', CoinCurrentSituation);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinCurrentSituation);

/***/ }),

/***/ "./src/elements/ProductManage/ProductAddForm.js":
/*!******************************************************!*\
  !*** ./src/elements/ProductManage/ProductAddForm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../domains/stores/ProductStore */ "./src/domains/stores/ProductStore.ts");
/* harmony import */ var _domains_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../domains/actions */ "./src/domains/actions.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../validators */ "./src/validators.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var ProductAddForm = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductAddForm, _CustomElement);

  var _super = _createSuper(ProductAddForm);

  function ProductAddForm() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductAddForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleProductAddFormSubmit", function (event) {
      event.preventDefault();
      var $productNameInput = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.$)('.product-name-input');
      var $productPriceInput = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.$)('.product-price-input');
      var $productQuantityInput = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.$)('.product-quantity-input');
      var newProduct = {
        name: $productNameInput.value.trim(),
        price: $productPriceInput.valueAsNumber,
        quantity: $productQuantityInput.valueAsNumber
      };

      try {
        _this.addProduct(newProduct);

        _this.initProductInputs($productNameInput, $productPriceInput, $productQuantityInput);
      } catch (error) {
        alert(error.message);
      }
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductAddForm, [{
    key: "template",
    value: function template() {
      return "\n      <form class=\"product-add-form\">\n        <label>\uCD94\uAC00\uD560 \uC0C1\uD488 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</label>\n        <div class=\"product-input-container\">\n          <input class=\"product-name-input\" placeholder=\"\uC0C1\uD488\uBA85\" maxlength=\"10\" required>\n          <input type=\"number\" class=\"product-price-input\" placeholder=\"\uAC00\uACA9\" min=\"100\" max=\"10000\" step=\"10\" required>\n          <input type=\"number\" class=\"product-quantity-input\" placeholder=\"\uC218\uB7C9\" min=\"1\" max=\"20\" required>\n          <button class=\"product-add-button\">\uCD94\uAC00</button>\n        </div>\n      </form>\n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      (0,_utils__WEBPACK_IMPORTED_MODULE_10__.$)('product-add-form').addEventListener('submit', this.handleProductAddFormSubmit);
    }
  }, {
    key: "addProduct",
    value: function addProduct(newProduct) {
      (0,_validators__WEBPACK_IMPORTED_MODULE_11__.checkProductAddValidation)(newProduct);
      _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_7__["default"].instance.dispatch((0,_domains_actions__WEBPACK_IMPORTED_MODULE_8__.createAction)(_domains_actions__WEBPACK_IMPORTED_MODULE_8__.PRODUCT_ACTION.ADD, newProduct));
    }
  }, {
    key: "initProductInputs",
    value: function initProductInputs($productNameInput, $productPriceInput, $productQuantityInput) {
      $productNameInput.value = '';
      $productPriceInput.value = '';
      $productQuantityInput.value = '';
      $productNameInput.focus();
    }
  }]);

  return ProductAddForm;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_9__["default"]);

customElements.define('product-add-form', ProductAddForm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductAddForm);

/***/ }),

/***/ "./src/elements/ProductManage/ProductCurrentSituation.js":
/*!***************************************************************!*\
  !*** ./src/elements/ProductManage/ProductCurrentSituation.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../domains/stores/ProductStore */ "./src/domains/stores/ProductStore.ts");
/* harmony import */ var _domains_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../domains/actions */ "./src/domains/actions.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../validators */ "./src/validators.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var ProductCurrentSituation = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProductCurrentSituation, _CustomElement);

  var _super = _createSuper(ProductCurrentSituation);

  function ProductCurrentSituation() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductCurrentSituation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleProductModifyButtonClick", function ($tbodyRow) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$$)('.product-td', $tbodyRow).forEach(function (td) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_11__.hideElement)(td);
      });
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$$)('.product-modify-td', $tbodyRow).forEach(function (td) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_11__.showElement)(td);
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleProductDeleteButtonClick", function (_ref) {
      var productName = _ref.productName;
      if (!window.confirm(_constants__WEBPACK_IMPORTED_MODULE_13__.CONFIRM_MESSAGE.DELETE)) return;
      _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_8__["default"].instance.dispatch((0,_domains_actions__WEBPACK_IMPORTED_MODULE_9__.createAction)(_domains_actions__WEBPACK_IMPORTED_MODULE_9__.PRODUCT_ACTION.DELETE, productName));
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleProductModifyEnter", function (event, $tbodyRow) {
      if (event.key !== 'Enter') return;

      try {
        _this.modifyProduct($tbodyRow);
      } catch (error) {
        alert(error.message);
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleProductModifyConfirmButtonClick", function ($tbodyRow) {
      try {
        _this.modifyProduct($tbodyRow);
      } catch (error) {
        alert(error.message);
      }
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductCurrentSituation, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ProductCurrentSituation.prototype), "connectedCallback", this).call(this);

      _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_8__["default"].instance.subscribe(this);
    }
  }, {
    key: "template",
    value: function template() {
      return "\n      <h2>\uC0C1\uD488 \uD604\uD669</h2>\n      <div class=\"product-current-situation-container\">\n        <table class=\"product-current-situation\">\n          <thead>\n            <tr>\n              <th>\uC0C1\uD488\uBA85</th>\n              <th>\uAC00\uACA9</th>\n              <th>\uC218\uB7C9</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody></tbody>\n        </table>\n      </div>\n    ";
    } // eslint-disable-next-line max-lines-per-function

  }, {
    key: "rerender",
    value: function rerender(_ref2) {
      var type = _ref2.type,
          detail = _ref2.detail;

      switch (type) {
        case _domains_actions__WEBPACK_IMPORTED_MODULE_9__.PRODUCT_ACTION.ADD:
          (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('tbody', (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.product-current-situation')).insertAdjacentHTML('beforeend', this.tableBodyRowTemplate(detail));
          this.setEventAfterProductAddRerender(detail);
          break;

        case _domains_actions__WEBPACK_IMPORTED_MODULE_9__.PRODUCT_ACTION.MODIFY:
          {
            var oldProductName = detail.oldProductName,
                newProductInfo = detail.newProductInfo;
            var $tbodyRow = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)("[data-product-name=\"".concat(oldProductName, "\"]"));
            $tbodyRow.dataset.productName = newProductInfo.name;
            (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$$)('.product-td', $tbodyRow).forEach(function (td) {
              return (0,_utils__WEBPACK_IMPORTED_MODULE_11__.showElement)(td);
            });
            (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$$)('.product-modify-td', $tbodyRow).forEach(function (td) {
              return (0,_utils__WEBPACK_IMPORTED_MODULE_11__.hideElement)(td);
            });
            (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.product-td.product-name-td', $tbodyRow).textContent = newProductInfo.name;
            (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.product-td.product-price-td', $tbodyRow).textContent = newProductInfo.price;
            (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.product-td.product-quantity-td', $tbodyRow).textContent = newProductInfo.quantity;
            break;
          }

        case _domains_actions__WEBPACK_IMPORTED_MODULE_9__.PRODUCT_ACTION.DELETE:
          (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)("[data-product-name=\"".concat(detail, "\"]")).remove();
          break;

        case _domains_actions__WEBPACK_IMPORTED_MODULE_9__.PRODUCT_ACTION.PURCHASE:
          {
            var _$tbodyRow = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)("[data-product-name=\"".concat(detail, "\"]"));

            var $productQuantityTd = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.product-td.product-quantity-td', _$tbodyRow);
            $productQuantityTd.textContent = Number($productQuantityTd.textContent) - 1;
          }
      }
    } // eslint-disable-next-line max-lines-per-function

  }, {
    key: "tableBodyRowTemplate",
    value: function tableBodyRowTemplate(_ref3) {
      var name = _ref3.name,
          price = _ref3.price,
          quantity = _ref3.quantity;
      return " \n      <tr data-product-name=\"".concat(name, "\">\n        <td class=\"product-td product-name-td\">").concat(name, "</td>\n        <td class=\"product-modify-td product-name-td hidden\">\n          <input class=\"product-name-input\" placeholder=\"\uC0C1\uD488\uBA85\" value=\"").concat(name, "\" maxlength=\"10\" required>\n        </td>\n\n        <td class=\"product-td product-price-td\">").concat(price, "</td>\n        <td class=\"product-modify-td product-price-td hidden\">\n          <input type=\"number\" class=\"product-price-input\" placeholder=\"\uAC00\uACA9\" value=\"").concat(price, "\" min=\"100\" max=\"10000\" step=\"10\" required>\n        </td>\n      \n        <td class=\"product-td product-quantity-td\">").concat(quantity, "</td>\n        <td class=\"product-modify-td product-quantity-td hidden\">\n          <input type=\"number\" class=\"product-quantity-input\" placeholder=\"\uC218\uB7C9\" value=\"").concat(quantity, "\" min=\"1\" max=\"20\" required>\n        </td>\n\n        <td class=\"product-td product-manage-buttons-td\">\n          <button class=\"table__product-modify-button\">\uC218\uC815</button>\n          <button class=\"table__product-delete-button\">\uC0AD\uC81C</button>\n        </td>\n        <td class=\"product-modify-td product-manage-buttons-td hidden\">\n          <button class=\"table__product-modify-confirm-button\">\uD655\uC778</button>\n        </td>\n      </tr>\n    ");
    }
  }, {
    key: "setEventAfterProductAddRerender",
    value: function setEventAfterProductAddRerender(_ref4) {
      var _this2 = this;

      var name = _ref4.name;
      var $tbodyRow = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)("[data-product-name=\"".concat(name, "\"]"));
      $tbodyRow.scrollIntoView();
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.table__product-modify-button', $tbodyRow).addEventListener('click', function () {
        return _this2.handleProductModifyButtonClick($tbodyRow);
      });
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.table__product-delete-button', $tbodyRow).addEventListener('click', function () {
        _this2.handleProductDeleteButtonClick($tbodyRow.dataset);
      });
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$$)('.product-modify-td input', $tbodyRow).forEach(function (input) {
        return input.addEventListener('keydown', function (event) {
          return _this2.handleProductModifyEnter(event, $tbodyRow);
        });
      });
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.product-modify-td .table__product-modify-confirm-button', $tbodyRow).addEventListener('click', function () {
        return _this2.handleProductModifyConfirmButtonClick($tbodyRow);
      });
    }
  }, {
    key: "modifyProduct",
    value: function modifyProduct($tbodyRow) {
      var oldProductName = $tbodyRow.dataset.productName;
      var newProductInfo = {
        name: (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.product-name-input', $tbodyRow).value,
        price: (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.product-price-input', $tbodyRow).valueAsNumber,
        quantity: (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.product-quantity-input', $tbodyRow).valueAsNumber
      };

      if (oldProductName !== newProductInfo.name) {
        (0,_validators__WEBPACK_IMPORTED_MODULE_12__.checkDuplicateProductWhenModify)(newProductInfo);
      }

      (0,_validators__WEBPACK_IMPORTED_MODULE_12__.checkProductValidation)(newProductInfo);
      _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_8__["default"].instance.dispatch((0,_domains_actions__WEBPACK_IMPORTED_MODULE_9__.createAction)(_domains_actions__WEBPACK_IMPORTED_MODULE_9__.PRODUCT_ACTION.MODIFY, {
        oldProductName: oldProductName,
        newProductInfo: newProductInfo
      }));
    }
  }]);

  return ProductCurrentSituation;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_10__["default"]);

customElements.define('product-current-situation', ProductCurrentSituation);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCurrentSituation);

/***/ }),

/***/ "./src/elements/ProductManage/ProductManageContainer.js":
/*!**************************************************************!*\
  !*** ./src/elements/ProductManage/ProductManageContainer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _ProductAddForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductAddForm */ "./src/elements/ProductManage/ProductAddForm.js");
/* harmony import */ var _ProductCurrentSituation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductCurrentSituation */ "./src/elements/ProductManage/ProductCurrentSituation.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ProductManageContainer = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ProductManageContainer, _CustomElement);

  var _super = _createSuper(ProductManageContainer);

  function ProductManageContainer() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductManageContainer);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductManageContainer, [{
    key: "template",
    value: function template() {
      return "\n      <product-add-form></product-add-form>\n      <product-current-situation></product-current-situation>\n    ";
    }
  }]);

  return ProductManageContainer;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_5__["default"]);

customElements.define('product-manage-container', ProductManageContainer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductManageContainer);

/***/ }),

/***/ "./src/elements/ProductPurchase/ChangeReturnTable.js":
/*!***********************************************************!*\
  !*** ./src/elements/ProductPurchase/ChangeReturnTable.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../domains/stores/CoinStore */ "./src/domains/stores/CoinStore.ts");
/* harmony import */ var _domains_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../domains/actions */ "./src/domains/actions.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../validators */ "./src/validators.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var ChangeReturnTable = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ChangeReturnTable, _CustomElement);

  var _super = _createSuper(ChangeReturnTable);

  function ChangeReturnTable() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChangeReturnTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChangeReturnButtonClick", function () {
      var $snackbar = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('#snackbar');

      try {
        _this.returnChange();

        $snackbar.textContent = _constants__WEBPACK_IMPORTED_MODULE_13__.COMPLETE_MESSAGE.CHANGE_RETURN;
      } catch (error) {
        $snackbar.textContent = error.message;
      }

      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.floatSnackbar)($snackbar);
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChangeReturnTable, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ChangeReturnTable.prototype), "connectedCallback", this).call(this);

      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_8__["default"].instance.subscribeCustomer(this);
    } // eslint-disable-next-line max-lines-per-function

  }, {
    key: "template",
    value: function template() {
      return "\n      <h2>\uC794\uB3C8 \uBC18\uD658</h2>\n      <table class=\"change-return-table\">\n        <thead>\n          <tr>\n            <th>\uB3D9\uC804</th>\n            <th>\uAC1C\uC218</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>500\uC6D0</td>\n            <td class=\"change-return-table__coin-500-count-td\">0\uAC1C</td>\n          </tr>\n          <tr>\n            <td>100\uC6D0</td>\n            <td class=\"change-return-table__coin-100-count-td\">0\uAC1C</td>\n          </tr>\n          </tr>\n          <tr>\n            <td>50\uC6D0</td>\n            <td class=\"change-return-table__coin-50-count-td\">0\uAC1C</td>\n          </tr>\n          <tr>\n            <td>10\uC6D0</td>\n            <td class=\"change-return-table__coin-10-count-td\">0\uAC1C</td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"change-return-button-container\">\n        <button class=\"change-return-button\">\uBC18\uD658</button>\n      </div>\n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.change-return-button').addEventListener('click', this.handleChangeReturnButtonClick);
    }
  }, {
    key: "returnChange",
    value: function returnChange() {
      (0,_validators__WEBPACK_IMPORTED_MODULE_12__.checkChangeReturnValidation)();
      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_8__["default"].instance.dispatch((0,_domains_actions__WEBPACK_IMPORTED_MODULE_9__.createAction)(_domains_actions__WEBPACK_IMPORTED_MODULE_9__.COIN_ACTION.RETURN));
    }
  }, {
    key: "rerender",
    value: function rerender(_ref) {
      var coinsCount = _ref.coinsCount;
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.change-return-table__coin-500-count-td').textContent = "".concat(coinsCount[500], "\uAC1C");
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.change-return-table__coin-100-count-td').textContent = "".concat(coinsCount[100], "\uAC1C");
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.change-return-table__coin-50-count-td').textContent = "".concat(coinsCount[50], "\uAC1C");
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.change-return-table__coin-10-count-td').textContent = "".concat(coinsCount[10], "\uAC1C");
    }
  }]);

  return ChangeReturnTable;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_10__["default"]);

customElements.define('change-return-table', ChangeReturnTable);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeReturnTable);

/***/ }),

/***/ "./src/elements/ProductPurchase/MoneyInputForm.js":
/*!********************************************************!*\
  !*** ./src/elements/ProductPurchase/MoneyInputForm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../domains/stores/CoinStore */ "./src/domains/stores/CoinStore.ts");
/* harmony import */ var _domains_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../domains/actions */ "./src/domains/actions.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../validators */ "./src/validators.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var MoneyInputForm = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MoneyInputForm, _CustomElement);

  var _super = _createSuper(MoneyInputForm);

  function MoneyInputForm() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MoneyInputForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleMoneyInputFormSubmit", function (event) {
      event.preventDefault();
      var $customerMoneyInput = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('#customer-money-input');
      var customerMoneyInputValue = $customerMoneyInput.valueAsNumber;
      var $snackbar = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('#snackbar');

      try {
        _this.inputMoney(customerMoneyInputValue);

        _this.initCustomerMoneyInput($customerMoneyInput);

        $snackbar.textContent = _constants__WEBPACK_IMPORTED_MODULE_13__.COMPLETE_MESSAGE.MONEY_INPUT;
      } catch (error) {
        $snackbar.textContent = error.message;
      }

      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.floatSnackbar)($snackbar);
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MoneyInputForm, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MoneyInputForm.prototype), "connectedCallback", this).call(this);

      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_8__["default"].instance.subscribeCustomer(this);
    }
  }, {
    key: "template",
    value: function template() {
      return "\n      <form class=\"money-input-form\">\n        <label for=\"customer-money-input\">\uC0C1\uD488\uC744 \uAD6C\uB9E4\uD560 \uAE08\uC561\uC744 \uD22C\uC785\uD574\uC8FC\uC138\uC694.</label>\n        <input type=\"number\" id=\"customer-money-input\" placeholder=\"\uAE08\uC561\" step=\"10\" required>\n        <button class=\"money-input-button\">\uD22C\uC785</button>\n      </form>\n      <p>\uD22C\uC785\uD55C \uAE08\uC561: <span class=\"customer-money\">0</span>\uC6D0</p>\n    ";
    }
  }, {
    key: "setEvent",
    value: function setEvent() {
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.money-input-form').addEventListener('submit', this.handleMoneyInputFormSubmit);
    }
  }, {
    key: "inputMoney",
    value: function inputMoney(customerMoneyInputValue) {
      (0,_validators__WEBPACK_IMPORTED_MODULE_12__.checkCustomerMoneyValidation)(customerMoneyInputValue);
      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_8__["default"].instance.dispatch((0,_domains_actions__WEBPACK_IMPORTED_MODULE_9__.createAction)(_domains_actions__WEBPACK_IMPORTED_MODULE_9__.MONEY_ACTION.INPUT, customerMoneyInputValue));
    }
  }, {
    key: "initCustomerMoneyInput",
    value: function initCustomerMoneyInput($customerMoneyInput) {
      $customerMoneyInput.value = '';
      $customerMoneyInput.focus();
    }
  }, {
    key: "rerender",
    value: function rerender(_ref) {
      var money = _ref.money;
      (0,_utils__WEBPACK_IMPORTED_MODULE_11__.$)('.customer-money').textContent = money;
    }
  }]);

  return MoneyInputForm;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_10__["default"]);

customElements.define('money-input-form', MoneyInputForm);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoneyInputForm);

/***/ }),

/***/ "./src/elements/ProductPurchase/ProductPurchaseContainer.js":
/*!******************************************************************!*\
  !*** ./src/elements/ProductPurchase/ProductPurchaseContainer.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _MoneyInputForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MoneyInputForm */ "./src/elements/ProductPurchase/MoneyInputForm.js");
/* harmony import */ var _PurchasableProductCurrentSituation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PurchasableProductCurrentSituation */ "./src/elements/ProductPurchase/PurchasableProductCurrentSituation.js");
/* harmony import */ var _ChangeReturnTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChangeReturnTable */ "./src/elements/ProductPurchase/ChangeReturnTable.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var ProductPurchaseContainer = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ProductPurchaseContainer, _CustomElement);

  var _super = _createSuper(ProductPurchaseContainer);

  function ProductPurchaseContainer() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductPurchaseContainer);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductPurchaseContainer, [{
    key: "template",
    value: function template() {
      return "\n      <money-input-form></money-input-form>\n      <purchasable-product-current-situation></purchasable-product-current-situation>\n      <change-return-table></change-return-table>\n      <div id=\"snackbar\"></div>\n    ";
    }
  }]);

  return ProductPurchaseContainer;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_5__["default"]);

customElements.define('product-purchase-container', ProductPurchaseContainer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPurchaseContainer);

/***/ }),

/***/ "./src/elements/ProductPurchase/PurchasableProductCurrentSituation.js":
/*!****************************************************************************!*\
  !*** ./src/elements/ProductPurchase/PurchasableProductCurrentSituation.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../domains/stores/ProductStore */ "./src/domains/stores/ProductStore.ts");
/* harmony import */ var _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../domains/stores/CoinStore */ "./src/domains/stores/CoinStore.ts");
/* harmony import */ var _domains_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../domains/actions */ "./src/domains/actions.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../validators */ "./src/validators.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var PurchasableProductCurrentSituation = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PurchasableProductCurrentSituation, _CustomElement);

  var _super = _createSuper(PurchasableProductCurrentSituation);

  function PurchasableProductCurrentSituation() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PurchasableProductCurrentSituation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleProductPurchaseButtonClick", function ($tbodyRow) {
      var $snackbar = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)('#snackbar');

      try {
        _this.purchaseProduct($tbodyRow);

        $snackbar.textContent = _constants__WEBPACK_IMPORTED_MODULE_14__.COMPLETE_MESSAGE.PRODUCT_PURCHASE;
      } catch (error) {
        $snackbar.textContent = error.message;
      }

      (0,_utils__WEBPACK_IMPORTED_MODULE_12__.floatSnackbar)($snackbar);
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PurchasableProductCurrentSituation, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      (0,_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(PurchasableProductCurrentSituation.prototype), "connectedCallback", this).call(this);

      _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_8__["default"].instance.subscribe(this);
    }
  }, {
    key: "template",
    value: function template() {
      return "\n      <h2>\uAD6C\uB9E4 \uAC00\uB2A5 \uC0C1\uD488 \uD604\uD669</h2>\n      <div class=\"purchasable-product-current-situation-container\">\n        <table class=\"purchasable-product-current-situation\">\n          <thead>\n            <tr>\n              <th>\uC0C1\uD488\uBA85</th>\n              <th>\uAC00\uACA9</th>\n              <th>\uC218\uB7C9</th>\n              <th>\uAD6C\uB9E4</th>\n            </tr>\n          </thead>\n          <tbody></tbody>\n        </table>\n      </div>\n    ";
    } // eslint-disable-next-line max-lines-per-function

  }, {
    key: "rerender",
    value: function rerender(_ref) {
      var type = _ref.type,
          detail = _ref.detail;

      switch (type) {
        case _domains_actions__WEBPACK_IMPORTED_MODULE_10__.PRODUCT_ACTION.ADD:
          (0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)('tbody', (0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)('.purchasable-product-current-situation')).insertAdjacentHTML('beforeend', this.tableBodyRowTemplate(detail));
          this.setEventAfterProductAddRerender(detail);
          break;

        case _domains_actions__WEBPACK_IMPORTED_MODULE_10__.PRODUCT_ACTION.MODIFY:
          {
            var oldProductName = detail.oldProductName,
                newProductInfo = detail.newProductInfo;
            var $tbodyRow = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)("[data-purchasable-product-name=\"".concat(oldProductName, "\"]"));
            $tbodyRow.dataset.purchasableProductName = newProductInfo.name;
            (0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)('.purchasable-product-name-td', $tbodyRow).textContent = newProductInfo.name;
            (0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)('.purchasable-product-price-td', $tbodyRow).textContent = newProductInfo.price;
            (0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)('.purchasable-product-quantity-td', $tbodyRow).textContent = newProductInfo.quantity;
            break;
          }

        case _domains_actions__WEBPACK_IMPORTED_MODULE_10__.PRODUCT_ACTION.DELETE:
          (0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)("[data-purchasable-product-name=\"".concat(detail, "\"]")).remove();
          break;

        case _domains_actions__WEBPACK_IMPORTED_MODULE_10__.PRODUCT_ACTION.PURCHASE:
          {
            var _$tbodyRow = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)("[data-purchasable-product-name=\"".concat(detail, "\"]"));

            var $productQuantity = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)('.purchasable-product-quantity-td', _$tbodyRow);
            $productQuantity.textContent = Number($productQuantity.textContent) - 1;
          }
      }
    }
  }, {
    key: "tableBodyRowTemplate",
    value: function tableBodyRowTemplate(_ref2) {
      var name = _ref2.name,
          price = _ref2.price,
          quantity = _ref2.quantity;
      return " \n      <tr data-purchasable-product-name=\"".concat(name, "\">\n        <td class=\"purchasable-product-name-td\">").concat(name, "</td>\n        <td class=\"purchasable-product-price-td\">").concat(price, "</td>\n        <td class=\"purchasable-product-quantity-td\">").concat(quantity, "</td>\n        <td>\n          <button class=\"table__product-purchase-button\">\uAD6C\uB9E4</button>\n        </td>\n      </tr>\n    ");
    }
  }, {
    key: "setEventAfterProductAddRerender",
    value: function setEventAfterProductAddRerender(_ref3) {
      var _this2 = this;

      var name = _ref3.name;
      var $tbodyRow = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)("[data-purchasable-product-name=\"".concat(name, "\"]"));
      (0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)('.table__product-purchase-button', $tbodyRow).addEventListener('click', function () {
        return _this2.handleProductPurchaseButtonClick($tbodyRow);
      });
    }
  }, {
    key: "purchaseProduct",
    value: function purchaseProduct($tbodyRow) {
      var productName = $tbodyRow.dataset.purchasableProductName;
      var productPrice = Number((0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)('.purchasable-product-price-td', $tbodyRow).textContent);
      var productQuantity = Number((0,_utils__WEBPACK_IMPORTED_MODULE_12__.$)('.purchasable-product-quantity-td', $tbodyRow).textContent);
      (0,_validators__WEBPACK_IMPORTED_MODULE_13__.checkProductPurchaseValidation)(productPrice, productQuantity);
      _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_8__["default"].instance.dispatch((0,_domains_actions__WEBPACK_IMPORTED_MODULE_10__.createAction)(_domains_actions__WEBPACK_IMPORTED_MODULE_10__.PRODUCT_ACTION.PURCHASE, productName));
      _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_9__["default"].instance.dispatch((0,_domains_actions__WEBPACK_IMPORTED_MODULE_10__.createAction)(_domains_actions__WEBPACK_IMPORTED_MODULE_10__.PRODUCT_ACTION.PURCHASE, productPrice));
    }
  }]);

  return PurchasableProductCurrentSituation;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_11__["default"]);

customElements.define('purchasable-product-current-situation', PurchasableProductCurrentSituation);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchasableProductCurrentSituation);

/***/ }),

/***/ "./src/elements/VendingMachine.js":
/*!****************************************!*\
  !*** ./src/elements/VendingMachine.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _domains_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domains/Auth */ "./src/domains/Auth.ts");
/* harmony import */ var _abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abstracts/CustomElement */ "./src/abstracts/CustomElement.js");
/* harmony import */ var _Auth_AuthMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Auth/AuthMenu */ "./src/elements/Auth/AuthMenu.js");
/* harmony import */ var _AdministratorMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AdministratorMenu */ "./src/elements/AdministratorMenu.js");
/* harmony import */ var _ProductManage_ProductManageContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProductManage/ProductManageContainer */ "./src/elements/ProductManage/ProductManageContainer.js");
/* harmony import */ var _CoinCharge_CoinChargeContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CoinCharge/CoinChargeContainer */ "./src/elements/CoinCharge/CoinChargeContainer.js");
/* harmony import */ var _ProductPurchase_ProductPurchaseContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProductPurchase/ProductPurchaseContainer */ "./src/elements/ProductPurchase/ProductPurchaseContainer.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var VendingMachine = /*#__PURE__*/function (_CustomElement) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(VendingMachine, _CustomElement);

  var _super = _createSuper(VendingMachine);

  function VendingMachine() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VendingMachine);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VendingMachine, [{
    key: "render",
    value: function render() {
      var isAdministrator = (0,_domains_Auth__WEBPACK_IMPORTED_MODULE_5__.isLoggedIn)();
      this.insertAdjacentHTML('beforeend', this.template(isAdministrator));
    }
  }, {
    key: "template",
    value: function template(isAdministrator) {
      var isAdministratorMenuHidden = isAdministrator ? '' : 'hidden';
      return "\n      <auth-menu class=\"auth-menu\"></auth-menu>\n      <h1>\uD83C\uDF7F \uC790\uD310\uAE30 \uD83C\uDF7F</h1>\n      <administrator-menu class=\"container ".concat(isAdministratorMenuHidden, "\"></administrator-menu>\n      <product-manage-container class=\"container hidden\"></product-manage-container>\n      <coin-charge-container class=\"container hidden\"></coin-charge-container>\n      <product-purchase-container class=\"container\"></product-purchase-container>\n    ");
    }
  }]);

  return VendingMachine;
}(_abstracts_CustomElement__WEBPACK_IMPORTED_MODULE_6__["default"]);

customElements.define('vending-machine', VendingMachine);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VendingMachine);

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


var targets = [{
  hash: '#!login',
  header: _constants__WEBPACK_IMPORTED_MODULE_1__.HEADER.LOGIN,
  $container: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('log-in'),
  $focusInput: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#login-email')
}, {
  hash: '#!signup',
  header: _constants__WEBPACK_IMPORTED_MODULE_1__.HEADER.SIGNUP,
  $container: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('sign-up'),
  $focusInput: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#signup-email')
}, {
  hash: '#!user-info-modify',
  header: _constants__WEBPACK_IMPORTED_MODULE_1__.HEADER.USER_INFO_MODIFY,
  $container: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('user-info-modify')
}, {
  hash: '#!product-manage',
  header: _constants__WEBPACK_IMPORTED_MODULE_1__.HEADER.VENDING_MACHINE,
  $button: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.nav__product-manage-button'),
  $container: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('product-manage-container'),
  $focusInput: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.product-name-input')
}, {
  hash: '#!coin-charge',
  header: _constants__WEBPACK_IMPORTED_MODULE_1__.HEADER.VENDING_MACHINE,
  $button: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.nav__coin-charge-button'),
  $container: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('coin-charge-container'),
  $focusInput: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#machine-money-input')
}, {
  hash: '#!product-purchase',
  header: _constants__WEBPACK_IMPORTED_MODULE_1__.HEADER.VENDING_MACHINE,
  $button: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('.nav__product-purchase-button'),
  $container: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('product-purchase-container'),
  $focusInput: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#customer-money-input')
}];

var findTarget = function findTarget(hash) {
  return targets.find(function (target) {
    return target.hash === hash;
  });
};

var renderApp = function renderApp(currentTarget) {
  if (currentTarget.header === _constants__WEBPACK_IMPORTED_MODULE_1__.HEADER.VENDING_MACHINE) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#app').classList.remove('auth-app');
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showElement)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('vending-machine'));
    return;
  }

  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('#app').classList.add('auth-app');
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hideElement)((0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)('vending-machine'));
};

var renderTargets = function renderTargets(currentTarget, prevTarget) {
  var _currentTarget$$butto, _currentTarget$$focus, _prevTarget$$button;

  (_currentTarget$$butto = currentTarget.$button) === null || _currentTarget$$butto === void 0 ? void 0 : _currentTarget$$butto.classList.add('clicked');
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showElement)(currentTarget.$container);
  (_currentTarget$$focus = currentTarget.$focusInput) === null || _currentTarget$$focus === void 0 ? void 0 : _currentTarget$$focus.focus();
  if (!prevTarget) return;
  (_prevTarget$$button = prevTarget.$button) === null || _prevTarget$$button === void 0 ? void 0 : _prevTarget$$button.classList.remove('clicked');
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hideElement)(prevTarget.$container);
};

window.location.hash = _constants__WEBPACK_IMPORTED_MODULE_1__.BASE_HASH;

window.onhashchange = function (event) {
  var currentHash = window.location.hash;
  var currentTarget = findTarget(currentHash);
  var prevHash = event.oldURL.replace("".concat(window.location.origin, "/"), '');
  var prevTarget = findTarget(prevHash);
  renderApp(currentTarget);
  renderTargets(currentTarget, prevTarget);
};

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "showElement": () => (/* binding */ showElement),
/* harmony export */   "hideElement": () => (/* binding */ hideElement),
/* harmony export */   "floatSnackbar": () => (/* binding */ floatSnackbar),
/* harmony export */   "pickNumberInList": () => (/* binding */ pickNumberInList),
/* harmony export */   "addThousandUnitComma": () => (/* binding */ addThousandUnitComma),
/* harmony export */   "getCookie": () => (/* binding */ getCookie)
/* harmony export */ });
var $ = function $(selector) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return scope.querySelector(selector);
};
var $$ = function $$(selector) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return Array.from(scope.querySelectorAll(selector));
};
var showElement = function showElement(element) {
  element.classList.remove('hidden');
};
var hideElement = function hideElement(element) {
  element.classList.add('hidden');
};
var floatSnackbar = function floatSnackbar($snackbar) {
  $snackbar.classList.toggle('show');
  setTimeout(function () {
    $snackbar.classList.toggle('show');
  }, 3000);
};
var pickNumberInList = function pickNumberInList(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
};
var addThousandUnitComma = function addThousandUnitComma(number) {
  return number.toLocaleString();
};
var getCookie = function getCookie(key) {
  var matches = document.cookie.match(new RegExp("(?:^|; )".concat(key.replace('/([.$?*|{}()[]\\/+^])/g', '\\$1'), "=([^;]*)")));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

/***/ }),

/***/ "./src/validators.js":
/*!***************************!*\
  !*** ./src/validators.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkProductValidation": () => (/* binding */ checkProductValidation),
/* harmony export */   "checkProductAddValidation": () => (/* binding */ checkProductAddValidation),
/* harmony export */   "checkDuplicateProductWhenModify": () => (/* binding */ checkDuplicateProductWhenModify),
/* harmony export */   "checkMachineMoneyValidation": () => (/* binding */ checkMachineMoneyValidation),
/* harmony export */   "checkCustomerMoneyValidation": () => (/* binding */ checkCustomerMoneyValidation),
/* harmony export */   "checkProductPurchaseValidation": () => (/* binding */ checkProductPurchaseValidation),
/* harmony export */   "checkChangeReturnValidation": () => (/* binding */ checkChangeReturnValidation),
/* harmony export */   "checkSignupValidation": () => (/* binding */ checkSignupValidation)
/* harmony export */ });
/* harmony import */ var _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domains/stores/ProductStore */ "./src/domains/stores/ProductStore.ts");
/* harmony import */ var _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domains/stores/CoinStore */ "./src/domains/stores/CoinStore.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");




var isBlank = function isBlank(value) {
  return value === '';
};

var isNotInteger = function isNotInteger(number) {
  return !Number.isInteger(number);
};

var cannotDividedByTen = function cannotDividedByTen(number) {
  return number % 10;
};

var isOverMaxProductNameLength = function isOverMaxProductNameLength(name) {
  return name.length > _constants__WEBPACK_IMPORTED_MODULE_2__.PRODUCT.NAME.MAX_LENGTH;
};

var isAlreadyExistProduct = function isAlreadyExistProduct(name) {
  var _ProductStore$instanc;

  var products = (_ProductStore$instanc = _domains_stores_ProductStore__WEBPACK_IMPORTED_MODULE_0__["default"].instance.products) !== null && _ProductStore$instanc !== void 0 ? _ProductStore$instanc : [];
  var existProductNames = products.map(function (product) {
    return product.name;
  });
  return existProductNames.includes(name);
};

var isUnderMinPrice = function isUnderMinPrice(price) {
  return price < _constants__WEBPACK_IMPORTED_MODULE_2__.PRODUCT.PRICE.MIN;
};

var isOverMaxPrice = function isOverMaxPrice(price) {
  return price > _constants__WEBPACK_IMPORTED_MODULE_2__.PRODUCT.PRICE.MAX;
};

var isUnderMinQuantity = function isUnderMinQuantity(quantity) {
  return quantity < _constants__WEBPACK_IMPORTED_MODULE_2__.PRODUCT.QUANTITY.MIN;
};

var isOverMaxQuantity = function isOverMaxQuantity(quantity) {
  return quantity > _constants__WEBPACK_IMPORTED_MODULE_2__.PRODUCT.QUANTITY.MAX;
};

var isOverMaxMachineMoney = function isOverMaxMachineMoney(inputMachineMoney) {
  var currentMachineMoney = _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_1__["default"].instance.machine.money;
  return currentMachineMoney + inputMachineMoney > _constants__WEBPACK_IMPORTED_MODULE_2__.MONEY.MACHINE_MAX;
};

var isOverMaxCustomerMoney = function isOverMaxCustomerMoney(inputCustomerMoney) {
  var currentCustomerMoney = _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_1__["default"].instance.customer.money;
  return currentCustomerMoney + inputCustomerMoney > _constants__WEBPACK_IMPORTED_MODULE_2__.MONEY.CUSTOMER_MAX;
};

var isSoldOut = function isSoldOut(quantity) {
  return quantity === 0;
};

var isPriceOverCustomerMoney = function isPriceOverCustomerMoney(price) {
  return price > _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_1__["default"].instance.customer.money;
};

var isNoCustomerMoney = function isNoCustomerMoney() {
  return _domains_stores_CoinStore__WEBPACK_IMPORTED_MODULE_1__["default"].instance.customer.money === 0;
};

var isPasswordConfirmNotMatchPassword = function isPasswordConfirmNotMatchPassword(password, passwordConfirm) {
  return password !== passwordConfirm;
}; // eslint-disable-next-line max-lines-per-function


var checkProductValidation = function checkProductValidation(_ref) {
  var name = _ref.name,
      price = _ref.price,
      quantity = _ref.quantity;

  if (isBlank(name)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.IS_BLANK_PRODUCT_NAME);
  }

  if (isOverMaxProductNameLength(name)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.IS_OVER_MAX_PRODUCT_NAME_LENGTH);
  }

  if (isNotInteger(price)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.IS_NOT_INTEGER_PRICE);
  }

  if (isUnderMinPrice(price)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.IS_UNDER_MIN_PRICE);
  }

  if (isOverMaxPrice(price)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.IS_OVER_MAX_PRICE);
  }

  if (cannotDividedByTen(price)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.PRICE_CANNOT_DIVIDED_BY_TEN);
  }

  if (isNotInteger(quantity)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.IS_NOT_INTEGER_QUANTITY);
  }

  if (isUnderMinQuantity(quantity)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.IS_UNDER_MIN_QUANTITY);
  }

  if (isOverMaxQuantity(quantity)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.IS_OVER_MAX_QUANTITY);
  }
};
var checkProductAddValidation = function checkProductAddValidation(product) {
  if (isAlreadyExistProduct(product.name)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.IS_ALREADY_EXIST_PRODUCT_WHEN_ADD);
  }

  checkProductValidation(product);
};
var checkDuplicateProductWhenModify = function checkDuplicateProductWhenModify(product) {
  if (isAlreadyExistProduct(product.name)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.IS_ALREADY_EXIST_PRODUCT_WHEN_MODIFY);
  }
};
var checkMachineMoneyValidation = function checkMachineMoneyValidation(machineMoneyInputValue) {
  if (isOverMaxMachineMoney(machineMoneyInputValue)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.IS_OVER_MAX_MACHINE_MONEY);
  }

  if (cannotDividedByTen(machineMoneyInputValue)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.MONEY_CANNOT_DIVIDED_BY_TEN);
  }
};
var checkCustomerMoneyValidation = function checkCustomerMoneyValidation(customerMoneyInputValue) {
  if (isOverMaxCustomerMoney(customerMoneyInputValue)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.IS_OVER_MAX_CUSTOMER_MONEY);
  }

  if (cannotDividedByTen(customerMoneyInputValue)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.MONEY_CANNOT_DIVIDED_BY_TEN);
  }
};
var checkProductPurchaseValidation = function checkProductPurchaseValidation(productPrice, productQuantity) {
  if (isPriceOverCustomerMoney(productPrice)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.IS_PRICE_OVER_CUSTOMER_MONEY);
  }

  if (isSoldOut(productQuantity)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.IS_SOLD_OUT);
  }
};
var checkChangeReturnValidation = function checkChangeReturnValidation() {
  if (isNoCustomerMoney()) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.VENDING_MACHINE.IS_NO_CUSTOMER_MONEY);
  }
};
var checkSignupValidation = function checkSignupValidation(userName, password, passwordConfirm) {
  if (isBlank(userName)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.AUTH.IS_BLANK_USER_NAME);
  }

  if (isPasswordConfirmNotMatchPassword(password, passwordConfirm)) {
    throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.AUTH.IS_PASSWORD_CONFIRM_NOT_MATCH_PASSWORD);
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  overflow-y: overlay;\n  background: var(--gray-500);\n  font-size: 16px;\n}\n\n#app {\n  width: 600px;\n  min-height: 675px;\n  margin: 32px auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: overlay;\n  background: var(--white);\n  border-radius: 4px;\n  border: 1px solid var(--border);\n}\n\n.auth-app {\n  padding-top: 44px;\n}\n\nvending-machine {\n  width: 100%;\n}\n\nh1 {\n  text-align: center;\n  margin-bottom: 32px;\n}\n\nnav {\n  text-align: center;\n  margin-bottom: 52px;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  background: var(--gray-600);\n  letter-spacing: 0.5px;\n}\n\nbutton:hover {\n  background: var(--gray-700);\n}\n\n.nav__product-manage-button,\n.nav__coin-charge-button,\n.nav__product-purchase-button {\n  width: 117px;\n  height: 36px;\n}\n\n.clicked {\n  background: var(--cyan-light);\n}\n\n.clicked:hover {\n  cursor: auto;\n  background: var(--cyan-light);\n}\n\ninput {\n  padding: 0 10px;\n  border: 1px solid var(--border-input);\n  border-radius: 4px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;EACnB,wBAAwB;EACxB,kBAAkB;EAClB,+BAA+B;AACjC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,2BAA2B;EAC3B,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;;EAGE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,qCAAqC;EACrC,kBAAkB;AACpB","sourcesContent":["body {\n  overflow-y: overlay;\n  background: var(--gray-500);\n  font-size: 16px;\n}\n\n#app {\n  width: 600px;\n  min-height: 675px;\n  margin: 32px auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: overlay;\n  background: var(--white);\n  border-radius: 4px;\n  border: 1px solid var(--border);\n}\n\n.auth-app {\n  padding-top: 44px;\n}\n\nvending-machine {\n  width: 100%;\n}\n\nh1 {\n  text-align: center;\n  margin-bottom: 32px;\n}\n\nnav {\n  text-align: center;\n  margin-bottom: 52px;\n}\n\na {\n  text-decoration: none;\n}\n\nbutton {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  background: var(--gray-600);\n  letter-spacing: 0.5px;\n}\n\nbutton:hover {\n  background: var(--gray-700);\n}\n\n.nav__product-manage-button,\n.nav__coin-charge-button,\n.nav__product-purchase-button {\n  width: 117px;\n  height: 36px;\n}\n\n.clicked {\n  background: var(--cyan-light);\n}\n\n.clicked:hover {\n  cursor: auto;\n  background: var(--cyan-light);\n}\n\ninput {\n  padding: 0 10px;\n  border: 1px solid var(--border-input);\n  border-radius: 4px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/auth.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/auth.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".auth-menu {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.login-button {\n  width: 117px;\n  height: 36px;\n  margin: 12px 11px 0;\n}\n\n.user-button {\n  width: 40px;\n  height: 40px;\n  margin: 16px 15px 0;\n  border-radius: 50%;\n  background: var(--cyan-light);\n}\n\n.user-button:hover {\n  background: var(--cyan-light);\n}\n\n.user-menu-select-box {\n  width: 150px;\n  height: 80px;\n  position: absolute;\n  top: 100px;\n  margin-right: 15px;\n  display: flex;\n  flex-direction: column;\n  background: var(--white);\n  box-shadow: 0 0 10px var(--gray-800);\n  text-align: center;\n}\n\n.user-menu-select-box button {\n  width: 100%;\n  height: 40px;\n  background: var(--white);\n}\n\n.user-menu-select-box button:hover {\n  background: var(--gray-600);\n}\n\n.auth-form {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n}\n\n.auth-form label {\n  margin-bottom: 4px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.auth-form input {\n  width: 100%;\n  height: 36px;\n  margin-bottom: 16px;\n}\n\n.auth-form button {\n  width: 300px;\n  height: 36px;\n  margin-top: 14px;\n  background: var(--cyan);\n  color: var(--white);\n}\n\n.auth-form button:hover {\n  background: var(--cyan-dark);\n}\n\nlog-in p {\n  width: 100%;\n  margin-top: 14px;\n  font-size: 15px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/auth.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,wBAAwB;EACxB,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,eAAe;AACjB","sourcesContent":[".auth-menu {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.login-button {\n  width: 117px;\n  height: 36px;\n  margin: 12px 11px 0;\n}\n\n.user-button {\n  width: 40px;\n  height: 40px;\n  margin: 16px 15px 0;\n  border-radius: 50%;\n  background: var(--cyan-light);\n}\n\n.user-button:hover {\n  background: var(--cyan-light);\n}\n\n.user-menu-select-box {\n  width: 150px;\n  height: 80px;\n  position: absolute;\n  top: 100px;\n  margin-right: 15px;\n  display: flex;\n  flex-direction: column;\n  background: var(--white);\n  box-shadow: 0 0 10px var(--gray-800);\n  text-align: center;\n}\n\n.user-menu-select-box button {\n  width: 100%;\n  height: 40px;\n  background: var(--white);\n}\n\n.user-menu-select-box button:hover {\n  background: var(--gray-600);\n}\n\n.auth-form {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n}\n\n.auth-form label {\n  margin-bottom: 4px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.auth-form input {\n  width: 100%;\n  height: 36px;\n  margin-bottom: 16px;\n}\n\n.auth-form button {\n  width: 300px;\n  height: 36px;\n  margin-top: 14px;\n  background: var(--cyan);\n  color: var(--white);\n}\n\n.auth-form button:hover {\n  background: var(--cyan-dark);\n}\n\nlog-in p {\n  width: 100%;\n  margin-top: 14px;\n  font-size: 15px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/container.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/container.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 4px;\n}\n\n.product-name-input,\n.product-price-input,\n.product-quantity-input {\n  width: 120px;\n  height: 36px;\n}\n\n.product-add-button,\n.coin-charge-button,\n.money-input-button {\n  width: 56px;\n  height: 36px;\n  margin-left: 14px;\n  background: var(--cyan);\n  color: var(--white);\n}\n\n.product-add-button:hover,\n.coin-charge-button:hover,\n.money-input-button:hover {\n  background: var(--cyan-dark);\n}\n\nh2 {\n  margin: 48px 0 16px;\n  text-align: center;\n  font-size: 20px;\n}\n\n.product-current-situation-container,\n.purchasable-product-current-situation-container {\n  overflow-y: scroll;\n}\n\n.product-current-situation-container {\n  height: 285px;\n  margin-bottom: 44px;\n}\n\n.purchasable-product-current-situation-container {\n  height: 205px;\n}\n\ntable {\n  width: 100%;\n  margin: 0 auto;\n  border-collapse: collapse;\n  border-top: 1px solid var(--border-table);\n}\n\nth,\ntd {\n  width: 120px;\n  height: 40px;\n  border-bottom: 1px solid var(--border-table);\n  text-align: center;\n}\n\n.table__product-modify-button,\n.table__product-delete-button {\n  width: 50px;\n  height: 32px;\n}\n\n.table__product-modify-button {\n  margin-right: 6px;\n}\n\n.table__product-modify-confirm-button,\n.table__product-purchase-button,\n.change-return-button {\n  width: 100px;\n  height: 32px;\n}\n\n#machine-money-input,\n#customer-money-input {\n  width: 300px;\n  height: 36px;\n  margin-bottom: 16px;\n}\n\n.coin-current-situation {\n  width: 238px;\n  margin-bottom: 44px;\n}\n\n.change-return-button-container {\n  display: flex;\n  justify-content: center;\n  margin: 16px 0px 36px;\n}\n\n#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  bottom: 30px;\n  z-index: 1;\n  background-color: var(--gray-dark);\n  color: var(--white);\n  text-align: center;\n}\n\n.show {\n  visibility: visible !important;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.7s;\n  animation: fadein 0.5s, fadeout 0.5s 2.7s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/container.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;;;EAGE,YAAY;EACZ,YAAY;AACd;;AAEA;;;EAGE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;;EAGE,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,cAAc;EACd,yBAAyB;EACzB,yCAAyC;AAC3C;;AAEA;;EAEE,YAAY;EACZ,YAAY;EACZ,4CAA4C;EAC5C,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;EAGE,YAAY;EACZ,YAAY;AACd;;AAEA;;EAEE,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,YAAY;EACZ,UAAU;EACV,kCAAkC;EAClC,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,iDAAiD;EACjD,yCAAyC;AAC3C;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,YAAY;IACZ,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,YAAY;IACZ,UAAU;EACZ;AACF;;AAEA;EACE;IACE,YAAY;IACZ,UAAU;EACZ;EACA;IACE,SAAS;IACT,UAAU;EACZ;AACF;;AAEA;EACE;IACE,YAAY;IACZ,UAAU;EACZ;EACA;IACE,SAAS;IACT,UAAU;EACZ;AACF","sourcesContent":[".container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 4px;\n}\n\n.product-name-input,\n.product-price-input,\n.product-quantity-input {\n  width: 120px;\n  height: 36px;\n}\n\n.product-add-button,\n.coin-charge-button,\n.money-input-button {\n  width: 56px;\n  height: 36px;\n  margin-left: 14px;\n  background: var(--cyan);\n  color: var(--white);\n}\n\n.product-add-button:hover,\n.coin-charge-button:hover,\n.money-input-button:hover {\n  background: var(--cyan-dark);\n}\n\nh2 {\n  margin: 48px 0 16px;\n  text-align: center;\n  font-size: 20px;\n}\n\n.product-current-situation-container,\n.purchasable-product-current-situation-container {\n  overflow-y: scroll;\n}\n\n.product-current-situation-container {\n  height: 285px;\n  margin-bottom: 44px;\n}\n\n.purchasable-product-current-situation-container {\n  height: 205px;\n}\n\ntable {\n  width: 100%;\n  margin: 0 auto;\n  border-collapse: collapse;\n  border-top: 1px solid var(--border-table);\n}\n\nth,\ntd {\n  width: 120px;\n  height: 40px;\n  border-bottom: 1px solid var(--border-table);\n  text-align: center;\n}\n\n.table__product-modify-button,\n.table__product-delete-button {\n  width: 50px;\n  height: 32px;\n}\n\n.table__product-modify-button {\n  margin-right: 6px;\n}\n\n.table__product-modify-confirm-button,\n.table__product-purchase-button,\n.change-return-button {\n  width: 100px;\n  height: 32px;\n}\n\n#machine-money-input,\n#customer-money-input {\n  width: 300px;\n  height: 36px;\n  margin-bottom: 16px;\n}\n\n.coin-current-situation {\n  width: 238px;\n  margin-bottom: 44px;\n}\n\n.change-return-button-container {\n  display: flex;\n  justify-content: center;\n  margin: 16px 0px 36px;\n}\n\n#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  bottom: 30px;\n  z-index: 1;\n  background-color: var(--gray-dark);\n  color: var(--white);\n  text-align: center;\n}\n\n.show {\n  visibility: visible !important;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.7s;\n  animation: fadein 0.5s, fadeout 0.5s 2.7s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./root.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/root.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./container.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/container.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_auth_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./auth.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/auth.css");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_auth_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput,\nbutton {\n  font: inherit;\n}\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: none;\n}\n\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAKA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;AACf","sourcesContent":["@import './root.css';\n@import './app.css';\n@import './container.css';\n@import './auth.css';\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput,\nbutton {\n  font: inherit;\n}\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: none;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/root.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/root.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --cyan-dark: #00aac3;\n  --cyan: #00bcd4;\n  --cyan-light: rgba(0, 188, 212, 0.16);\n\n  --gray-dark: #323232;\n  --gray-800: #dfdfdf;\n  --gray-700: #ebebeb;\n  --gray-600: #f5f5f5;\n  --gray-500: #f9f9f9;\n\n  --white: #ffffff;\n\n  --border: rgba(0, 0, 0, 0.12);\n  --border-table: #dcdcdc;\n  --border-input: #b4b4b4;\n}\n", "",{"version":3,"sources":["webpack://./src/css/root.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,eAAe;EACf,qCAAqC;;EAErC,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;;EAEnB,gBAAgB;;EAEhB,6BAA6B;EAC7B,uBAAuB;EACvB,uBAAuB;AACzB","sourcesContent":[":root {\n  --cyan-dark: #00aac3;\n  --cyan: #00bcd4;\n  --cyan-light: rgba(0, 188, 212, 0.16);\n\n  --gray-dark: #323232;\n  --gray-800: #dfdfdf;\n  --gray-700: #ebebeb;\n  --gray-600: #f5f5f5;\n  --gray-500: #f9f9f9;\n\n  --white: #ffffff;\n\n  --border: rgba(0, 0, 0, 0.12);\n  --border-table: #dcdcdc;\n  --border-input: #b4b4b4;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domains/Auth.ts":
/*!*****************************!*\
  !*** ./src/domains/Auth.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signup": () => (/* binding */ signup),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "isLoggedIn": () => (/* binding */ isLoggedIn),
/* harmony export */   "getUser": () => (/* binding */ getUser)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function signup(email, name, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${_constants__WEBPACK_IMPORTED_MODULE_1__.AUTH_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                name,
                password,
            }),
        });
        const jsonResponse = yield response.json();
        if (!jsonResponse.accessToken) {
            throw new Error(jsonResponse);
        }
    });
}
function login(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${_constants__WEBPACK_IMPORTED_MODULE_1__.AUTH_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const jsonResponse = yield response.json();
        if (!jsonResponse.accessToken) {
            throw new Error(jsonResponse);
        }
        document.cookie = `user_id=${jsonResponse.user.id}`;
        document.cookie = `access_token=${jsonResponse.accessToken}`;
    });
}
function logout() {
    document.cookie = `user_id=`;
    document.cookie = `access_token=`;
}
function isLoggedIn() {
    const userId = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCookie)('user_id');
    const accessToken = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCookie)('access_token');
    return userId && userId !== '' && accessToken && accessToken !== '';
}
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCookie)('user_id');
        const accessToken = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCookie)('access_token');
        if (!isLoggedIn())
            return undefined;
        const response = yield fetch(`${_constants__WEBPACK_IMPORTED_MODULE_1__.AUTH_BASE_URL}/users/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const user = yield response.json();
        return user;
    });
}


/***/ }),

/***/ "./src/domains/actions.ts":
/*!********************************!*\
  !*** ./src/domains/actions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAction": () => (/* binding */ createAction),
/* harmony export */   "AUTH_ACTION": () => (/* binding */ AUTH_ACTION),
/* harmony export */   "PRODUCT_ACTION": () => (/* binding */ PRODUCT_ACTION),
/* harmony export */   "COIN_ACTION": () => (/* binding */ COIN_ACTION),
/* harmony export */   "MONEY_ACTION": () => (/* binding */ MONEY_ACTION)
/* harmony export */ });
const createAction = (type, detail) => ({
    type,
    detail,
});
const AUTH_ACTION = {
    LOGIN: 'login',
    LOGOUT: 'logout',
};
const PRODUCT_ACTION = {
    ADD: 'product-add',
    MODIFY: 'product-modify',
    DELETE: 'product-delete',
    PURCHASE: 'product-purchase',
};
const COIN_ACTION = {
    CHARGE: 'charge',
    RETURN: 'return',
};
const MONEY_ACTION = {
    INPUT: 'input',
};


/***/ }),

/***/ "./src/domains/stores/AuthStore.ts":
/*!*****************************************!*\
  !*** ./src/domains/stores/AuthStore.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/domains/actions.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _AuthStore_isLoggedIn, _AuthStore_subscribers;

class AuthStore {
    constructor() {
        _AuthStore_isLoggedIn.set(this, false);
        _AuthStore_subscribers.set(this, []);
    }
    static get instance() {
        if (!AuthStore._instance) {
            AuthStore._instance = new AuthStore();
        }
        return AuthStore._instance;
    }
    subscribe(element) {
        __classPrivateFieldGet(this, _AuthStore_subscribers, "f").push(element);
    }
    dispatch({ type }) {
        switch (type) {
            case _actions__WEBPACK_IMPORTED_MODULE_0__.AUTH_ACTION.LOGIN:
                __classPrivateFieldSet(this, _AuthStore_isLoggedIn, true, "f");
                break;
            case _actions__WEBPACK_IMPORTED_MODULE_0__.AUTH_ACTION.LOGOUT:
                __classPrivateFieldSet(this, _AuthStore_isLoggedIn, false, "f");
        }
        this.notifySubscribers();
    }
    notifySubscribers() {
        __classPrivateFieldGet(this, _AuthStore_subscribers, "f").forEach((subscriber) => subscriber.rerender(__classPrivateFieldGet(this, _AuthStore_isLoggedIn, "f")));
    }
}
_AuthStore_isLoggedIn = new WeakMap(), _AuthStore_subscribers = new WeakMap();
AuthStore._instance = null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthStore);


/***/ }),

/***/ "./src/domains/stores/CoinStore.ts":
/*!*****************************************!*\
  !*** ./src/domains/stores/CoinStore.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/domains/actions.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _CoinStore_machine, _CoinStore_customer, _CoinStore_machineSubscribers, _CoinStore_customerSubscribers;



class CoinStore {
    constructor() {
        _CoinStore_machine.set(this, {
            money: _constants__WEBPACK_IMPORTED_MODULE_1__.MONEY.DEFAULT,
            coinsCount: {
                500: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN.DEFAULT_COUNT,
                100: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN.DEFAULT_COUNT,
                50: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN.DEFAULT_COUNT,
                10: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN.DEFAULT_COUNT,
            },
        });
        _CoinStore_customer.set(this, {
            money: _constants__WEBPACK_IMPORTED_MODULE_1__.MONEY.DEFAULT,
            coinsCount: {
                500: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN.DEFAULT_COUNT,
                100: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN.DEFAULT_COUNT,
                50: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN.DEFAULT_COUNT,
                10: _constants__WEBPACK_IMPORTED_MODULE_1__.COIN.DEFAULT_COUNT,
            },
        });
        _CoinStore_machineSubscribers.set(this, []);
        _CoinStore_customerSubscribers.set(this, []);
    }
    static get instance() {
        if (!CoinStore._instance) {
            CoinStore._instance = new CoinStore();
        }
        return CoinStore._instance;
    }
    subscribeMachine(element) {
        __classPrivateFieldGet(this, _CoinStore_machineSubscribers, "f").push(element);
    }
    subscribeCustomer(element) {
        __classPrivateFieldGet(this, _CoinStore_customerSubscribers, "f").push(element);
    }
    dispatch(action) {
        this.updateMoneyStorage(action);
        this.notifySubscribers(action);
    }
    // eslint-disable-next-line max-lines-per-function
    updateMoneyStorage(action) {
        const { type, detail } = action;
        switch (type) {
            case _actions__WEBPACK_IMPORTED_MODULE_0__.COIN_ACTION.CHARGE: {
                __classPrivateFieldSet(this, _CoinStore_machine, this.generateNewMachine(__classPrivateFieldGet(this, _CoinStore_machine, "f"), detail), "f");
                break;
            }
            case _actions__WEBPACK_IMPORTED_MODULE_0__.MONEY_ACTION.INPUT: {
                __classPrivateFieldGet(this, _CoinStore_customer, "f").money += detail;
                break;
            }
            case _actions__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_ACTION.PURCHASE:
                __classPrivateFieldGet(this, _CoinStore_customer, "f").money -= detail;
                break;
            case _actions__WEBPACK_IMPORTED_MODULE_0__.COIN_ACTION.RETURN: {
                const { newMachine, newCustomer } = this.generateNewMoneyStorage(__classPrivateFieldGet(this, _CoinStore_machine, "f"), __classPrivateFieldGet(this, _CoinStore_customer, "f"));
                __classPrivateFieldSet(this, _CoinStore_machine, newMachine, "f");
                __classPrivateFieldSet(this, _CoinStore_customer, newCustomer, "f");
            }
        }
    }
    generateNewMachine(oldMachine, detail) {
        const newMachine = Object.assign({}, oldMachine);
        let coinList = this.generateCoinList();
        let money = detail;
        while (money) {
            const randomCoin = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pickNumberInList)(coinList);
            if (money < randomCoin) {
                coinList = this.generateNewCoinList(coinList, money);
                continue;
            }
            newMachine.coinsCount[randomCoin] += 1;
            newMachine.money += randomCoin;
            money -= randomCoin;
        }
        return newMachine;
    }
    generateCoinList() {
        return Object.keys(__classPrivateFieldGet(this, _CoinStore_machine, "f").coinsCount)
            .reverse()
            .map((key) => Number(key));
    }
    generateNewCoinList(coinList, money) {
        return coinList.filter((coin) => coin <= money);
    }
    generateNewMoneyStorage(oldMachine, oldCustomer) {
        const coinList = this.generateCoinList();
        const newMachine = Object.assign({}, oldMachine);
        const newCustomer = Object.assign({}, oldCustomer);
        coinList.forEach((coin) => {
            const needCoinCount = Math.floor(newCustomer.money / coin);
            const coinCount = newMachine.coinsCount[coin] > needCoinCount ? needCoinCount : newMachine.coinsCount[coin];
            newMachine.coinsCount[coin] -= coinCount;
            newMachine.money -= coinCount * coin;
            newCustomer.coinsCount[coin] = coinCount;
            newCustomer.money -= coinCount * coin;
        });
        return { newMachine, newCustomer };
    }
    // eslint-disable-next-line max-lines-per-function
    notifySubscribers({ type }) {
        switch (type) {
            case _actions__WEBPACK_IMPORTED_MODULE_0__.COIN_ACTION.CHARGE:
                __classPrivateFieldGet(this, _CoinStore_machineSubscribers, "f").forEach((subscriber) => {
                    subscriber.rerender(__classPrivateFieldGet(this, _CoinStore_machine, "f"));
                });
                break;
            case _actions__WEBPACK_IMPORTED_MODULE_0__.MONEY_ACTION.INPUT:
            case _actions__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_ACTION.PURCHASE:
                __classPrivateFieldGet(this, _CoinStore_customerSubscribers, "f").forEach((subscriber) => {
                    subscriber.rerender(__classPrivateFieldGet(this, _CoinStore_customer, "f"));
                });
                break;
            case _actions__WEBPACK_IMPORTED_MODULE_0__.COIN_ACTION.RETURN:
                __classPrivateFieldGet(this, _CoinStore_machineSubscribers, "f").forEach((subscriber) => {
                    subscriber.rerender(__classPrivateFieldGet(this, _CoinStore_machine, "f"));
                });
                __classPrivateFieldGet(this, _CoinStore_customerSubscribers, "f").forEach((subscriber) => {
                    subscriber.rerender(__classPrivateFieldGet(this, _CoinStore_customer, "f"));
                });
        }
    }
    get machine() {
        return __classPrivateFieldGet(this, _CoinStore_machine, "f");
    }
    get customer() {
        return __classPrivateFieldGet(this, _CoinStore_customer, "f");
    }
}
_CoinStore_machine = new WeakMap(), _CoinStore_customer = new WeakMap(), _CoinStore_machineSubscribers = new WeakMap(), _CoinStore_customerSubscribers = new WeakMap();
CoinStore._instance = null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinStore);


/***/ }),

/***/ "./src/domains/stores/ProductStore.ts":
/*!********************************************!*\
  !*** ./src/domains/stores/ProductStore.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/domains/actions.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ProductStore_products, _ProductStore_subscribers;

class ProductStore {
    constructor() {
        _ProductStore_products.set(this, []);
        _ProductStore_subscribers.set(this, []);
    }
    static get instance() {
        if (!ProductStore._instance) {
            ProductStore._instance = new ProductStore();
        }
        return ProductStore._instance;
    }
    subscribe(element) {
        __classPrivateFieldGet(this, _ProductStore_subscribers, "f").push(element);
    }
    dispatch(action) {
        this.updateProducts(action);
        this.notifySubscribers(action);
    }
    updateProducts(action) {
        const newProducts = this.generateNewProducts(__classPrivateFieldGet(this, _ProductStore_products, "f"), action);
        __classPrivateFieldSet(this, _ProductStore_products, newProducts, "f");
    }
    // eslint-disable-next-line max-lines-per-function
    generateNewProducts(oldProducts, { type, detail }) {
        const newProducts = [...oldProducts];
        switch (type) {
            case _actions__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_ACTION.ADD: {
                newProducts.push(detail);
                break;
            }
            case _actions__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_ACTION.MODIFY: {
                const { oldProductName, newProductInfo } = detail;
                const productIndex = this.findProductIndex(oldProductName);
                newProducts[productIndex] = newProductInfo;
                break;
            }
            case _actions__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_ACTION.DELETE: {
                const productIndex = this.findProductIndex(detail);
                newProducts.splice(productIndex, 1);
                break;
            }
            case _actions__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_ACTION.PURCHASE: {
                const productName = detail;
                const productIndex = this.findProductIndex(productName);
                newProducts[productIndex].quantity -= 1;
            }
        }
        return newProducts;
    }
    findProductIndex(productName) {
        return __classPrivateFieldGet(this, _ProductStore_products, "f").findIndex((product) => product.name === productName);
    }
    notifySubscribers(action) {
        __classPrivateFieldGet(this, _ProductStore_subscribers, "f").forEach((subscriber) => subscriber.rerender(action));
    }
    get products() {
        return __classPrivateFieldGet(this, _ProductStore_products, "f");
    }
}
_ProductStore_products = new WeakMap(), _ProductStore_subscribers = new WeakMap();
ProductStore._instance = null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductStore);


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _construct)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _get)
/* harmony export */ });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = (0,_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeFunction)
/* harmony export */ });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _superPropBase)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _wrapNativeSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !(0,_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return (0,_construct_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Class, arguments, (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elements_VendingMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/VendingMachine */ "./src/elements/VendingMachine.js");
/* harmony import */ var _elements_Auth_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/Auth/Login */ "./src/elements/Auth/Login.js");
/* harmony import */ var _elements_Auth_Signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/Auth/Signup */ "./src/elements/Auth/Signup.js");
/* harmony import */ var _elements_Auth_UserInfoModify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/Auth/UserInfoModify */ "./src/elements/Auth/UserInfoModify.js");
/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/index */ "./src/css/index.css");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router */ "./src/router.js");
/* harmony import */ var _domains_Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domains/Auth */ "./src/domains/Auth.ts");








})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map