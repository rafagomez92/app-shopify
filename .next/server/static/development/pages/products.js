module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_ResolveConflict__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/ResolveConflict */ "./containers/ResolveConflict.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Products = ({
  getShopifyData,
  solveVariant,
  variant_is_loading,
  variants
}) => {
  //Se ejecuta 1 sola vez al montarse el componente
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getShopifyData();
  }, []);
  const resourceName = {
    singular: 'variant',
    plural: 'variants'
  };

  const renderItem = item => {
    const {
      _id: id,
      product_title: title,
      variant_title,
      product_image: image_url,
      final_price = 0,
      status,
      tax_calculated: final_duty
    } = item;
    let columnA = null;
    let columnB = null;
    let statusColor = null;

    switch (status) {
      case 'Calculando':
        statusColor = 'attention';
        break;

      case 'Sin conflicto':
      case 'Completo':
        statusColor = 'success';
        columnA = `$${final_price} Subtotal`;
        columnB = `$${final_duty} Impuestos`;
        break;

      case 'Conflicto':
        statusColor = 'warning';
        columnA = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          size: "slim",
          onClick: () => solveVariant(id)
        }, "Resolver");
        break;
    }

    const media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      customer: true,
      size: "medium",
      source: image_url
    });

    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ResourceItem"], {
      id: id,
      media: media
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, {
      fill: true
    }, __jsx("h3", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
      variation: "strong"
    }, title, " - ", variant_title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, columnA), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, columnB), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      status: statusColor
    }, status))));
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    fullWidth: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ResourceList"], {
    resourceName: resourceName,
    items: variants,
    showHeader: false,
    loading: variant_is_loading,
    renderItem: renderItem
  })), __jsx(_containers_ResolveConflict__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FooterHelp"], null, "Rafael", ' ', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    url: "https://help.shopify.com/manual/orders/fulfill-orders"
  }, "G\xF3mez")));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./components/ResolveConflict.js":
/*!***************************************!*\
  !*** ./components/ResolveConflict.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris-icons */ "@shopify/polaris-icons");
/* harmony import */ var _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const ResolveConflict = ({
  variants_with_conflict,
  variant_in_modal,
  can_solve,
  modal_open,
  closeModal,
  stepVariant,
  updateVariantSelections
}) => {
  const {
    0: hasPaginator,
    1: setHasPaginator
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    hasNext: false,
    hasPrevious: false,
    price_selected: null
  });
  const {
    id,
    product_image: image_url,
    product_title: title,
    variant_price: price,
    variant_recommended_price: recommended_price,
    tax_calculated: calculated_duty = 0,
    calculated_duty_original = 0,
    price_selected = null
  } = variant_in_modal; // Cada que variant_in_modal cambie verificamos el estado del paginador

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const v = variants_with_conflict;
    let p = {
      hasNext: false,
      hasPrevious: false,
      price_selected
    };
    if (v.length <= 1) return setHasPaginator(p);
    const i = v.findIndex(element => element.id === id);
    if (i > 0) p.hasPrevious = true;
    if (i < v.length - 1) p.hasNext = true;
    setHasPaginator(p);
  }, [variant_in_modal]);
  let pagination = null;

  if (variants_with_conflict.length > 0) {
    pagination = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
      hasPrevious: hasPaginator.hasPrevious,
      onPrevious: () => {
        console.log('Previous');
        move(-1);
      },
      hasNext: hasPaginator.hasNext,
      onNext: () => {
        console.log('Next');
        move(1);
      }
    });
  }

  const handleSubmit = () => {
    updateVariantSelections();
  };

  const handleClose = () => {
    closeModal();
  };

  const handleSelectPrice = price_selected => {
    setHasPaginator(_objectSpread({}, hasPaginator, {
      price_selected
    }));
    move(0, price_selected);
  };

  const move = (step, price_selected) => {
    if (price_selected === undefined) price_selected = hasPaginator.price_selected;
    const v = variants_with_conflict;
    let i = v.findIndex(e => e.id === id) + step;

    if (i >= 0 && i < v.length) {
      //paso valido
      stepVariant(price_selected, i);
    }
  };

  const footer = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, {
    fill: true
  }, pagination), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    primary: true,
    onClick: handleSubmit,
    disabled: !can_solve
  }, "Guarda mi selecci\xF3n")));

  const currentVariant = variants_with_conflict.findIndex(e => e.id === id) + 1;
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    large: true,
    open: modal_open,
    onClose: handleClose,
    title: `Conflicto ${currentVariant} de ${variants_with_conflict.length}`,
    footer: footer
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Modal"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx("div", null, "Nuestros expertos sugieren diferentes impuestos que los que usted ha indicado. Seleccione cual es el correcto."), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    distribution: "fillEvenly"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Thumbnail"], {
    source: image_url
  }), __jsx("div", null, title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx("div", null, "Precio Regular: $", price), __jsx("div", null, "Impuestos: seleccione a continuaci\xF3n"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    distribution: "fillEvenly"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
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
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => handleSelectPrice('original'),
    primary: hasPaginator.price_selected === 'original',
    icon: hasPaginator.price_selected === 'original' && _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["MobileAcceptMajorMonotone"]
  }, "Seleccionar"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
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
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => handleSelectPrice('recommended'),
    primary: hasPaginator.price_selected === 'recommended',
    icon: hasPaginator.price_selected === 'recommended' && _shopify_polaris_icons__WEBPACK_IMPORTED_MODULE_2__["MobileAcceptMajorMonotone"]
  }, "Seleccionar")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResolveConflict);

/***/ }),

/***/ "./containers/ResolveConflict.js":
/*!***************************************!*\
  !*** ./containers/ResolveConflict.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ResolveConflict__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ResolveConflict */ "./components/ResolveConflict.js");
/* harmony import */ var _store_variant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/variant */ "./store/variant/index.js");




const mapStateToProps = state => ({
  variants_with_conflict: state.variant.variants_with_conflict,
  variant_in_modal: state.variant.variant_in_modal,
  can_solve: state.variant.can_solve,
  modal_open: state.variant.modal_open
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(_store_variant__WEBPACK_IMPORTED_MODULE_2__["variantOperations"].closeModal()),
  stepVariant: (selected, next_index) => dispatch(_store_variant__WEBPACK_IMPORTED_MODULE_2__["variantOperations"].stepVariant(selected, next_index)),
  updateVariantSelections: () => dispatch(_store_variant__WEBPACK_IMPORTED_MODULE_2__["variantOperations"].updateVariantSelections())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_ResolveConflict__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Products */ "./components/Products.js");
/* harmony import */ var _store_shopifystore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/shopifystore */ "./store/shopifystore/index.js");
/* harmony import */ var _store_variant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/variant */ "./store/variant/index.js");
//Contenedor





const mapStateToProps = state => ({
  variant_is_loading: state.variant.variant_is_loading,
  variants: state.variant.variants
});

const mapDispatchToProps = dispatch => ({
  getShopifyData: () => dispatch(_store_shopifystore__WEBPACK_IMPORTED_MODULE_2__["shopifystoreOperations"].getShopifyData()),
  solveVariant: id => dispatch(_store_variant__WEBPACK_IMPORTED_MODULE_3__["variantOperations"].solveVariant(id))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_Products__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./store/shopifystore/actions.js":
/*!***************************************!*\
  !*** ./store/shopifystore/actions.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/shopifystore/types.js");
//Acciones puras no async


const saveShopifyData = shop => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SAVE_SHOPIFY_DATA,
    shop
  };
};

const shopExists = data_store => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SHOP_EXISTS,
    data_store: data_store
  };
};

const shopNotExists = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SHOP_NOT_EXISTS
  };
};

const isLoading = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SHOP_IS_LOADING
  };
};

const isNotLoading = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SHOP_IS_NOT_LOADING
  };
};

const setError = error => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_ERROR,
    error
  };
};

const clearError = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].CLEAR_ERROR
  };
};

const updatePruebaTitulo = prueba_titulo => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_PRUEBA_TITULO,
    prueba_titulo
  };
};

const updatePruebaNieto = prueba_nieto => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_PRUEBA_NIETO,
    prueba_nieto
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  saveShopifyData,
  shopExists,
  shopNotExists,
  isLoading,
  isNotLoading,
  setError,
  clearError,
  updatePruebaTitulo,
  updatePruebaNieto
});

/***/ }),

/***/ "./store/shopifystore/index.js":
/*!*************************************!*\
  !*** ./store/shopifystore/index.js ***!
  \*************************************/
/*! exports provided: shopifystoreOperations, shopifystoreTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./store/shopifystore/reducers.js");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations */ "./store/shopifystore/operations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shopifystoreOperations", function() { return _operations__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./store/shopifystore/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shopifystoreTypes", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_reducers__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./store/shopifystore/operations.js":
/*!******************************************!*\
  !*** ./store/shopifystore/operations.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/shopifystore/actions.js");
/* harmony import */ var _variant_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variant/actions */ "./store/variant/actions.js");
//acciones con axios async
//usamos thunk


 // A ===================
//funciones que uso internamente en este archivo
//pero que el componente no necesita ejecutar

const _saveShopifyData = _actions__WEBPACK_IMPORTED_MODULE_1__["default"].saveShopifyData;
const _shopExists = _actions__WEBPACK_IMPORTED_MODULE_1__["default"].shopExists;
const _shopNotExists = _actions__WEBPACK_IMPORTED_MODULE_1__["default"].shopNotExists;
const _isLoading = _actions__WEBPACK_IMPORTED_MODULE_1__["default"].isLoading;
const _isNotLoading = _actions__WEBPACK_IMPORTED_MODULE_1__["default"].isNotLoading;
const _setError = _actions__WEBPACK_IMPORTED_MODULE_1__["default"].setError;
const clearError = _actions__WEBPACK_IMPORTED_MODULE_1__["default"].clearError;
const updatePruebaNieto = _actions__WEBPACK_IMPORTED_MODULE_1__["default"].updatePruebaNieto;
const updatePruebaTitulo = _actions__WEBPACK_IMPORTED_MODULE_1__["default"].updatePruebaTitulo;
const _setVariants = _variant_actions__WEBPACK_IMPORTED_MODULE_2__["default"].setVariants; // B ===================
//fuciones que se conectan con apis
//async usan thunk

const getShopifyData = () => {
  return dispatch => {
    const instanceShopify = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL: '/api',
      timeout: 5000
    });
    return instanceShopify.get(`/shopify`).then(response => {
      const {
        shop
      } = response.data;
      dispatch(_saveShopifyData(shop));
      const {
        id
      } = shop;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/store/${id}`).then(response => {
        dispatch(_shopExists(response.data));
        dispatch(_setVariants(response.data.variants));
      }, error => {
        dispatch(_shopNotExists());
      });
    }, error => {});
  };
};

const createShop = payload => {
  return dispatch => {
    dispatch(_isLoading());
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/store', payload).then(response => {
      dispatch(_shopExists(response.data));
    }, err => {
      dispatch(_shopNotExists());

      switch (err.response.status) {
        case 400:
          dispatch(_setError('Error de validacion, verifique sus datos'));
          break;

        default:
          dispatch(_setError('Error de servidor'));
      }
    });
  };
}; // C ===================
//exportar las funciones que finalmente se van a comunicar
//con los componentes reales es decir tienen comunicacion
//con el exterior


/* harmony default export */ __webpack_exports__["default"] = ({
  getShopifyData,
  createShop,
  clearError,
  updatePruebaNieto,
  updatePruebaTitulo
});

/***/ }),

/***/ "./store/shopifystore/reducers.js":
/*!****************************************!*\
  !*** ./store/shopifystore/reducers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/shopifystore/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITAL_STATE = {
  shop: null,
  shop_exists: false,
  shop_is_loading: true,
  shop_error: null,
  shop_status: null,
  prueba_titulo: 'Fernando',
  prueba_nieto: 'Soy Nieto'
};

const shopifystoreReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["default"].SAVE_SHOPIFY_DATA:
      {
        const {
          type,
          shop
        } = action;
        return _objectSpread({}, state, {
          shop
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__["default"].SHOP_EXISTS:
      {
        //data_store
        const {
          status
        } = action.data_store;
        return _objectSpread({}, state, {
          shop_exists: true,
          shop_is_loading: false,
          shop_error: null,
          shop_status: status
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__["default"].SHOP_NOT_EXISTS:
      {
        return _objectSpread({}, state, {
          shop_exists: false,
          shop_is_loading: false
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__["default"].SHOP_IS_LOADING:
      {
        return _objectSpread({}, state, {
          shop_is_loading: true
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__["default"].SHOP_IS_NOT_LOADING:
      {
        return _objectSpread({}, state, {
          shop_is_loading: false
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_ERROR:
      {
        const {
          error
        } = action;
        return _objectSpread({}, state, {
          shop_error: error
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__["default"].CLEAR_ERROR:
      {
        return _objectSpread({}, state, {
          shop_error: null
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_PRUEBA_TITULO:
      {
        return _objectSpread({}, state, {
          prueba_titulo: action.prueba_titulo
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_PRUEBA_NIETO:
      {
        return _objectSpread({}, state, {
          prueba_nieto: action.prueba_nieto
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (shopifystoreReducer);

/***/ }),

/***/ "./store/shopifystore/types.js":
/*!*************************************!*\
  !*** ./store/shopifystore/types.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SAVE_SHOPIFY_DATA = 'SAVE_SHOPIFY_DATA';
const SHOP_EXISTS = 'SHOP_EXISTS';
const SHOP_NOT_EXISTS = 'SHOP_NOT_EXISTS';
const SHOP_IS_LOADING = 'SHOP_IS_LOADING';
const SHOP_IS_NOT_LOADING = 'SHOP_IS_NOT_LOADING';
const SET_ERROR = 'SET_ERROR';
const CLEAR_ERROR = 'CLEAR_ERROR';
const UPDATE_PRUEBA_TITULO = 'UPDATE_PRUEBA_TITULO';
const UPDATE_PRUEBA_NIETO = 'UPDATE_PRUEBA_NIETO';
/* harmony default export */ __webpack_exports__["default"] = ({
  SAVE_SHOPIFY_DATA,
  SHOP_EXISTS,
  SHOP_NOT_EXISTS,
  SHOP_IS_LOADING,
  SHOP_IS_NOT_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
  UPDATE_PRUEBA_TITULO,
  UPDATE_PRUEBA_NIETO
});

/***/ }),

/***/ "./store/variant/actions.js":
/*!**********************************!*\
  !*** ./store/variant/actions.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/variant/types.js");
//Acciones puras no async


const setVariants = variants => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_VARIANTS,
    variants
  };
};

const solveVariant = id => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].SOLVE_VARIANT,
    id
  };
};

const closeModal = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].CLOSE_MODAL
  };
};

const stepVariant = (selected, next_index) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["default"].STEP_VARIANT,
    selected,
    next_index
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  setVariants,
  solveVariant,
  closeModal,
  stepVariant
});

/***/ }),

/***/ "./store/variant/index.js":
/*!********************************!*\
  !*** ./store/variant/index.js ***!
  \********************************/
/*! exports provided: variantOperations, variantTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./store/variant/reducers.js");
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations */ "./store/variant/operations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variantOperations", function() { return _operations__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./store/variant/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variantTypes", function() { return _types__WEBPACK_IMPORTED_MODULE_2__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_reducers__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./store/variant/operations.js":
/*!*************************************!*\
  !*** ./store/variant/operations.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./store/variant/actions.js");
/* harmony import */ var _shopifystore_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopifystore/actions */ "./store/shopifystore/actions.js");
//acciones con axios async
//usamos thunk



const setVariants = _actions__WEBPACK_IMPORTED_MODULE_1__["default"].setVariants;
const solveVariant = _actions__WEBPACK_IMPORTED_MODULE_1__["default"].solveVariant;
const closeModal = _actions__WEBPACK_IMPORTED_MODULE_1__["default"].closeModal;
const stepVariant = _actions__WEBPACK_IMPORTED_MODULE_1__["default"].stepVariant;
const _shopExists = _shopifystore_actions__WEBPACK_IMPORTED_MODULE_2__["default"].shopExists; // A ===================
//funciones que uso internamente en este archivo
//pero que el componente no necesita ejecutar

const _saveShopifyData = _actions__WEBPACK_IMPORTED_MODULE_1__["default"].saveShopifyData; // B ===================
//fuciones que se conectan con apis
//async usan thunk

const reviewVariants = payload => {
  return (dispatch, getState) => {
    const {
      shop
    } = getState().shopify;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/store/${shop.id}/review_variants`, payload).then(response => {
      dispatch(setVariants(response.data.store.variants));
      dispatch(_shopExists(response.data.store));
      console.log('reviewVariants success', response);
    }, error => {
      console.log('reviewVariants error', error);
    });
  };
};

const updateVariantSelections = () => {
  return (dispatch, getState) => {
    const {
      variants_with_conflict
    } = getState().variant;
    const {
      shop
    } = getState().shopify;
    const shopify_variants = variants_with_conflict.map(e => {
      return {
        id: e.variant_id,
        price: e.price_selected === 'recommended' ? e.variant_recommended_price : e.variant_price
      };
    });
    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL: '/api',
      timeout: 5000
    });
    return instance.put('/shopify', {
      shopify_variants
    }).then(response => {
      console.debug('updateVariantSelections success', response);
      const backendVariants = variants_with_conflict.map(e => {
        return {
          _id: e._id,
          price_selected: e.price_selected
        };
      });
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`/store/${shop.id}/finish`, {
        variants_with_conflict: backendVariants
      }).then(response => {
        //Guardando nuevos status en redux
        dispatch(_shopExists(response.data.store));
        dispatch(setVariants(response.data.store.variants));
        dispatch(closeModal());
      }, error => {});
    }, error => {
      console.debug('updateVariantSelections error', error);
    });
  };
}; // C ===================
//exportar las funciones que finalmente se van a comunicar
//con los componentes reales es decir tienen comunicacion
//con el exterior


/* harmony default export */ __webpack_exports__["default"] = ({
  reviewVariants,
  solveVariant,
  closeModal,
  stepVariant,
  updateVariantSelections
});

/***/ }),

/***/ "./store/variant/reducers.js":
/*!***********************************!*\
  !*** ./store/variant/reducers.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/variant/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITAL_STATE = {
  variant_is_loading: true,
  variants: [],
  variants_with_conflict: [],
  variant_in_modal: {},
  can_solve: false,
  modal_open: false
};

const variantReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["default"].SET_VARIANTS:
      {
        const {
          variants
        } = action;
        return _objectSpread({}, state, {
          variants,
          variant_is_loading: false,
          variants_with_conflict: variants.filter(element => element.status === 'Conflicto').map(element => {
            return _objectSpread({}, element, {
              price_selected: null
            });
          })
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__["default"].SOLVE_VARIANT:
      {
        const {
          id
        } = action;
        const index = state.variants_with_conflict.findIndex(element => element.id === id); //const variant_in_modal = { ...state.variants_with_conflict[index] }

        const variant_in_modal = JSON.parse(JSON.stringify(state.variants_with_conflict[index]));
        return _objectSpread({}, state, {
          variant_in_modal,
          modal_open: true
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__["default"].CLOSE_MODAL:
      {
        return _objectSpread({}, state, {
          variant_in_modal: {},
          modal_open: false
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__["default"].STEP_VARIANT:
      {
        const {
          selected
        } = action;
        const currentIndex = state.variants_with_conflict.findIndex(element => element.id === state.variant_in_modal.id);

        const variant = _objectSpread({}, state.variants_in_modal, {
          price_selected: selected
        });

        let newVariants = JSON.parse(JSON.stringify(state.variants_with_conflict));
        newVariants[currentIndex] = variant;

        const nextVariant = _objectSpread({}, newVariants[next_index]);

        const remaining = newVariants.filter(element => element.price_selected === undefined || element.price_selected === null);
        return _objectSpread({}, state, {
          variant_in_modal: nextVariant,
          variants_with_conflict: newVariants,
          can_solve: remaining.length > 0 ? false : true
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (variantReducer);

/***/ }),

/***/ "./store/variant/types.js":
/*!********************************!*\
  !*** ./store/variant/types.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SET_VARIANTS = 'SET_VARIANTS';
const SOLVE_VARIANT = 'SOLVE_VARIANT';
const SOLVE_VARIANTS = 'SOLVE_VARIANTS';
const CLOSE_MODAL = 'CLOSE_MODAL';
const STEP_VARIANT = 'STEP_VARIANT';
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_VARIANTS,
  SOLVE_VARIANT,
  SOLVE_VARIANTS,
  CLOSE_MODAL,
  STEP_VARIANT
});

/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/products.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rafae\Desktop\Bootcamp\Front-Back\app_shopify\pages\products.js */"./pages/products.js");


/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "@shopify/polaris-icons":
/*!*****************************************!*\
  !*** external "@shopify/polaris-icons" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris-icons");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=products.js.map