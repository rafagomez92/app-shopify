webpackHotUpdate("static\\development\\pages\\products.js",{

/***/ "./components/ResolveConflict.js":
/*!***************************************!*\
  !*** ./components/ResolveConflict.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris-icons */ "./node_modules/@shopify/polaris-icons/dist/index.mjs");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var ResolveConflict = function ResolveConflict(_ref) {
  var variants_with_conflict = _ref.variants_with_conflict,
      variant_in_modal = _ref.variant_in_modal,
      can_solve = _ref.can_solve,
      modal_open = _ref.modal_open,
      closeModal = _ref.closeModal,
      stepVariant = _ref.stepVariant;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    hasNext: false,
    hasPrevious: false,
    price_selected: null
  }),
      hasPaginator = _useState[0],
      setHasPaginator = _useState[1];

  var id = variant_in_modal.id,
      image_url = variant_in_modal.product_image,
      title = variant_in_modal.product_title,
      price = variant_in_modal.variant_price,
      recommended_price = variant_in_modal.variant_recommended_price,
      _variant_in_modal$tax = variant_in_modal.tax_calculated,
      calculated_duty = _variant_in_modal$tax === void 0 ? 0 : _variant_in_modal$tax,
      _variant_in_modal$cal = variant_in_modal.calculated_duty_original,
      calculated_duty_original = _variant_in_modal$cal === void 0 ? 0 : _variant_in_modal$cal,
      _variant_in_modal$pri = variant_in_modal.price_selected,
      price_selected = _variant_in_modal$pri === void 0 ? null : _variant_in_modal$pri; // Cada que variant_in_mocal cambie verificamos el estado del paginador

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var v = variants_with_conflict;
    var p = {
      hasNext: false,
      hasPrevious: false,
      price_selected: price_selected
    };
    if (v.length <= 1) return setHasPaginator(p);
    var i = v.findIndex(function (element) {
      return element.id === id;
    });
    if (i > 0) p.hasPrevious = true;
    if (i < v.length - 1) p.hasNext = true;
    setHasPaginator(p);
  }, [variant_in_modal]);
  var pagination = null;

  if (variants_with_conflict.length > 0) {
    pagination = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
      hasPrevious: true,
      onPrevious: function onPrevious() {
        console.log('Previous');
        move(-1);
      },
      hastNext: true,
      onNext: function onNext() {
        console.log('Next');
        move(1);
      }
    });
  }

  var handleSubmit = function handleSubmit() {};

  var handleClose = function handleClose() {
    closeModal();
  };

  var handleSelectPrice = function handleSelectPrice(price_selected) {
    setHasPaginator(_objectSpread({}, hasPaginator, {
      price_selected: price_selected
    }));
    move(0, price_selected);
  };

  var move = function move(step, price_selected) {
    if (price_selected === undefined) price_selected = hasPaginator.price_selected;
    var v = variants_with_conflict;
    var i = v.findIndex(function (e) {
      return e.id === id;
    }) + step;

    if (i >= 0 && i < v.length) {
      stepVariant(price_selected, i);
    }
  };

  var footer = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"].Item, {
    fill: true
  }, pagination), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    primary: true,
    onClick: handleSubmit,
    disabled: !can_solve
  }, "Guarda mi selecci\xF3n")));

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    large: true,
    open: modal_open,
    onClose: handleClose,
    title: "Resolver conflicto x de ".concat(variants_with_conflict.length),
    footer: footer
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Modal"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextContainer"], null, __jsx("div", null, "Nuestros expertos sugieren diferentes impuestos de los que usted ha indicado. Seleccione cual es el correcto"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    distribution: "fillEvenly"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"], {
    source: image_url
  }), __jsx("div", null, title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"].Item, null, __jsx("div", null, "Regular price: $", price), __jsx("div", null, "Impuestos: selecciona a continuaci\xF3n"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    distribution: "fillEvenly"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    sectioned: true
  }, __jsx("div", {
    className: "title-wrapper"
  }, __jsx("div", {
    className: "subtitle"
  }, "Tu ingresaste")), __jsx("div", {
    className: "title-price"
  }, "$", price), __jsx("p", {
    className: "text-center"
  }, "Impuesto $", calculated_duty_original), __jsx("div", {
    className: "text-center mt-10"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return handleSelectPrice('original');
    },
    primary: hasPaginator.price_selected === 'original',
    icon: hasPaginator.price_selected === 'original' && _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_3__["MobileAcceptMajorMonotone"]
  }, "Seleccionar"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    sectioned: true
  }, __jsx("div", {
    className: "title-wrapper"
  }, __jsx("div", {
    className: "subtitle"
  }, "Nosotros recomendamos")), __jsx("div", {
    className: "title-price"
  }, "$", recommended_price), __jsx("p", {
    className: "text-center"
  }, "Impuesto $", calculated_duty), __jsx("div", {
    className: "text-center mt-10"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return handleSelectPrice('recommended');
    },
    primary: hasPaginator.price_selected === 'recommended',
    icon: hasPaginator.price_selected === 'recommended' && _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_3__["MobileAcceptMajorMonotone"]
  }, "Seleccionar")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResolveConflict);

/***/ })

})
//# sourceMappingURL=products.js.605b51551e5fbb42512b.hot-update.js.map