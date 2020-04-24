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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//import { TextStyle } from '@shopify/polaris'




const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = ({
  shop_is_loading,
  shop_exists,
  shop_status,
  getShopifyData,
  reviewVariants
}) => {
  //Se ejecuta 1 sola vez al montarse el componente
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getShopifyData();
  }, []);
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  const handleSelection = resources => {
    setOpen(false);
    let payload = [];
    resources.selection.forEach(product => {
      const {
        id: product_id,
        title: product_title,
        images,
        vendor
      } = product;
      const variants = product.variants.map(variant => {
        const {
          id: variant_id,
          title: variant_title,
          weight: variant_weight,
          weightUnit: variant_unit,
          price: variant_price
        } = variant;
        return {
          product_id,
          product_title,
          product_image: images.length > 0 ? images[0].originalSrc : undefined,
          vendor,
          variant_id,
          variant_title,
          variant_weight,
          variant_unit,
          variant_price,
          variant_recommended_price: 0,
          tax: 0,
          status: 'Calculando'
        };
      });
      payload = [...payload, ...variants];
    });
    console.log('payload', payload);
    reviewVariants({
      variants: payload
    });
    console.log(resources);
  };

  let accionBotones = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    accessibilityLabel: "Spinner example",
    size: "large",
    color: "teal"
  }); //if(!shopify_is_loading)


  if (shop_is_loading === false) {
    accionBotones = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      fullWidth: true
      /*url={'/registro'}*/
      ,
      onClick: () => router.push('/registro'),
      disabled: shop_exists === true
    }, "Registro"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      fullWidth: true,
      onClick: () => setOpen(true),
      disabled: shop_exists === false || shop_status === 'en_revision'
    }, "Enviar productos a revisi\xF3n"));
  }

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    fullWidth: true
  }, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["TitleBar"], {
    primaryAction: {
      content: 'Hola soy un primary ---'
    }
  }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["ResourcePicker"], {
    resourceType: "Product",
    showVariants: false,
    open: open,
    onSelection: handleSelection,
    onCancel: () => setOpen(false)
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Home",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend metus non vestibulum faucibus. Duis interdum vel arcu imperdiet tempus. Mauris nec suscipit nisi. Sed malesuada vehicula diam, sit amet ornare libero rutrum nec. Nam ultricies aliquet mi id mattis. Proin iaculis sem mi, id elementum felis facilisis id. Mauris semper, quam non hendrerit sollicitudin, diam diam lacinia ante, a elementum eros ipsum non nulla. Nullam et lacus in dui ultrices ullamcorper. Vivamus consequat tortor eu risus mattis, imperdiet iaculis arcu porta. Nulla neque velit, ullamcorper vel imperdiet non, volutpat a orci. Suspendisse purus dolor, vestibulum et orci eget, convallis tincidunt nisi. Suspendisse in cursus est. In quis urna nec eros volutpat faucibus. Vivamus malesuada metus et erat vulputate semper."), __jsx("p", null, "Aliquam suscipit interdum nisl. Integer maximus erat non iaculis vulputate. Nulla lacus est, consequat a hendrerit at, posuere feugiat neque. Mauris lectus sem, malesuada id est quis, vehicula tempor magna. Mauris pharetra sed velit sed lobortis. Aliquam at risus euismod, convallis turpis vitae, cursus felis. Mauris commodo ex venenatis nisi imperdiet, eu iaculis libero commodo. Quisque scelerisque dolor eget placerat pharetra. Nulla iaculis quam tincidunt enim tempus malesuada.")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    secondary: true
  }, accionBotones)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FooterHelp"], null, "Soy Fernando", ' ', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    url: "https://help.shopify.com/manual/orders/fulfill-orders"
  }, "Castillo")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home */ "./components/Home.js");
/* harmony import */ var _store_shopifystore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/shopifystore */ "./store/shopifystore/index.js");
/* harmony import */ var _store_variant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/variant */ "./store/variant/index.js");
//Contenedor





const mapStateToProps = state => ({
  shop_is_loading: state.shopify.shop_is_loading,
  shop_exists: state.shopify.shop_exists,
  shop_status: state.shopify.shop_status
});

const mapDispatchToProps = dispatch => ({
  getShopifyData: () => dispatch(_store_shopifystore__WEBPACK_IMPORTED_MODULE_2__["shopifystoreOperations"].getShopifyData()),
  reviewVariants: payload => dispatch(_store_variant__WEBPACK_IMPORTED_MODULE_3__["variantOperations"].reviewVariants(payload))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_Home__WEBPACK_IMPORTED_MODULE_1__["default"]));

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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rafae\Desktop\Bootcamp\Front-Back\app_shopify\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=index.js.map