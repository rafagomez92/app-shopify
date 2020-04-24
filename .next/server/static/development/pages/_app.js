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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@shopify/polaris/locales/en.json":
/*!*******************************************************!*\
  !*** ./node_modules/@shopify/polaris/locales/en.json ***!
  \*******************************************************/
/*! exports provided: Polaris, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Polaris\":{\"Avatar\":{\"label\":\"Avatar\",\"labelWithInitials\":\"Avatar with initials {initials}\"},\"Autocomplete\":{\"spinnerAccessibilityLabel\":\"Loading\"},\"Badge\":{\"PROGRESS_LABELS\":{\"incomplete\":\"Incomplete\",\"partiallyComplete\":\"Partially complete\",\"complete\":\"Complete\"},\"STATUS_LABELS\":{\"info\":\"Info\",\"success\":\"Success\",\"warning\":\"Warning\",\"attention\":\"Attention\",\"new\":\"New\"}},\"Button\":{\"spinnerAccessibilityLabel\":\"Loading\",\"connectedDisclosureAccessibilityLabel\":\"Related actions\"},\"Common\":{\"checkbox\":\"checkbox\",\"undo\":\"Undo\",\"cancel\":\"Cancel\",\"newWindowAccessibilityHint\":\"(opens a new window)\",\"clear\":\"Clear\",\"close\":\"Close\",\"submit\":\"Submit\",\"more\":\"More\"},\"ContextualSaveBar\":{\"save\":\"Save\",\"discard\":\"Discard\"},\"DataTable\":{\"sortAccessibilityLabel\":\"sort {direction} by\",\"navAccessibilityLabel\":\"Scroll table {direction} one column\",\"totalsRowHeading\":\"Totals\",\"totalRowHeading\":\"Total\"},\"DatePicker\":{\"previousMonth\":\"Show previous month, {previousMonthName} {showPreviousYear}\",\"nextMonth\":\"Show next month, {nextMonth} {nextYear}\",\"today\":\"Today \",\"months\":{\"january\":\"January\",\"february\":\"February\",\"march\":\"March\",\"april\":\"April\",\"may\":\"May\",\"june\":\"June\",\"july\":\"July\",\"august\":\"August\",\"september\":\"September\",\"october\":\"October\",\"november\":\"November\",\"december\":\"December\"},\"daysAbbreviated\":{\"monday\":\"Mo\",\"tuesday\":\"Tu\",\"wednesday\":\"We\",\"thursday\":\"Th\",\"friday\":\"Fr\",\"saturday\":\"Sa\",\"sunday\":\"Su\"}},\"DiscardConfirmationModal\":{\"title\":\"Discard all unsaved changes\",\"message\":\"If you discard changes, you’ll delete any edits you made since you last saved.\",\"primaryAction\":\"Discard changes\",\"secondaryAction\":\"Continue editing\"},\"DropZone\":{\"overlayTextFile\":\"Drop file to upload\",\"overlayTextImage\":\"Drop image to upload\",\"errorOverlayTextFile\":\"File type is not valid\",\"errorOverlayTextImage\":\"Image type is not valid\",\"FileUpload\":{\"actionTitleFile\":\"Add file\",\"actionTitleImage\":\"Add image\",\"actionHintFile\":\"or drop files to upload\",\"actionHintImage\":\"or drop images to upload\",\"label\":\"Upload file\"}},\"EmptySearchResult\":{\"altText\":\"Empty search results\"},\"Frame\":{\"skipToContent\":\"Skip to content\",\"Navigation\":{\"closeMobileNavigationLabel\":\"Close navigation\"}},\"Icon\":{\"backdropWarning\":\"The {color} icon doesn’t accept backdrops. The icon colors that have backdrops are: {colorsWithBackDrops}\"},\"ActionMenu\":{\"RollupActions\":{\"rollupButton\":\"Actions\"}},\"Filters\":{\"moreFilters\":\"More filters\",\"moreFiltersWithCount\":\"More filters ({count})\",\"filter\":\"Filter {resourceName}\",\"noFiltersApplied\":\"No filters applied\",\"cancel\":\"Cancel\",\"done\":\"Done\",\"clearAllFilters\":\"Clear all filters\",\"clear\":\"Clear\",\"clearLabel\":\"Clear {filterName}\"},\"Modal\":{\"iFrameTitle\":\"body markup\",\"modalWarning\":\"These required properties are missing from Modal: {missingProps}\"},\"Pagination\":{\"previous\":\"Previous\",\"next\":\"Next\",\"pagination\":\"Pagination\"},\"ProgressBar\":{\"negativeWarningMessage\":\"Values passed to the progress prop shouldn’t be negative. Resetting {progress} to 0.\",\"exceedWarningMessage\":\"Values passed to the progress prop shouldn’t exceed 100. Setting {progress} to 100.\"},\"ResourceList\":{\"sortingLabel\":\"Sort by\",\"defaultItemSingular\":\"item\",\"defaultItemPlural\":\"items\",\"showing\":\"Showing {itemsCount} {resource}\",\"showingTotalCount\":\"Showing {itemsCount} of {totalItemsCount} {resource}\",\"loading\":\"Loading {resource}\",\"selected\":\"{selectedItemsCount} selected\",\"allItemsSelected\":\"All {itemsLength}+ {resourceNamePlural} in your store are selected.\",\"selectAllItems\":\"Select all {itemsLength}+ {resourceNamePlural} in your store\",\"emptySearchResultTitle\":\"No {resourceNamePlural} found\",\"emptySearchResultDescription\":\"Try changing the filters or search term\",\"selectButtonText\":\"Select\",\"a11yCheckboxDeselectAllSingle\":\"Deselect {resourceNameSingular}\",\"a11yCheckboxSelectAllSingle\":\"Select {resourceNameSingular}\",\"a11yCheckboxDeselectAllMultiple\":\"Deselect all {itemsLength} {resourceNamePlural}\",\"a11yCheckboxSelectAllMultiple\":\"Select all {itemsLength} {resourceNamePlural}\",\"ariaLiveSingular\":\"{itemsLength} item\",\"ariaLivePlural\":\"{itemsLength} items\",\"Item\":{\"actionsDropdownLabel\":\"Actions for {accessibilityLabel}\",\"actionsDropdown\":\"Actions dropdown\",\"viewItem\":\"View details for {itemName}\"},\"BulkActions\":{\"actionsActivatorLabel\":\"Actions\",\"moreActionsActivatorLabel\":\"More actions\",\"warningMessage\":\"To provide a better user experience. There should only be a maximum of {maxPromotedActions} promoted actions.\"},\"FilterCreator\":{\"filterButtonLabel\":\"Filter\",\"selectFilterKeyPlaceholder\":\"Select a filter…\",\"addFilterButtonLabel\":\"Add filter\",\"showAllWhere\":\"Show all {resourceNamePlural} where:\"},\"FilterControl\":{\"textFieldLabel\":\"Search {resourceNamePlural}\"},\"FilterValueSelector\":{\"selectFilterValuePlaceholder\":\"Select a filter…\"},\"DateSelector\":{\"dateFilterLabel\":\"Select a value\",\"dateValueLabel\":\"Date\",\"dateValueError\":\"Match YYYY-MM-DD format\",\"dateValuePlaceholder\":\"YYYY-MM-DD\",\"SelectOptions\":{\"PastWeek\":\"in the last week\",\"PastMonth\":\"in the last month\",\"PastQuarter\":\"in the last 3 months\",\"PastYear\":\"in the last year\",\"ComingWeek\":\"next week\",\"ComingMonth\":\"next month\",\"ComingQuarter\":\"in the next 3 months\",\"ComingYear\":\"in the next year\",\"OnOrBefore\":\"on or before\",\"OnOrAfter\":\"on or after\"},\"FilterLabelForValue\":{\"past_week\":\"in the last week\",\"past_month\":\"in the last month\",\"past_quarter\":\"in the last 3 months\",\"past_year\":\"in the last year\",\"coming_week\":\"next week\",\"coming_month\":\"next month\",\"coming_quarter\":\"in the next 3 months\",\"coming_year\":\"in the next year\",\"on_or_before\":\"before {date}\",\"on_or_after\":\"after {date}\"}}},\"SkeletonPage\":{\"loadingLabel\":\"Page loading\"},\"Spinner\":{\"warningMessage\":\"The color {color} is not meant to be used on {size} spinners. The colors available on large spinners are: {colors}\"},\"Tabs\":{\"toggleTabsLabel\":\"More tabs\"},\"Tag\":{\"ariaLabel\":\"Remove {children}\"},\"TextField\":{\"characterCount\":\"{count} characters\",\"characterCountWithMaxLength\":\"{count} of {limit} characters used\"},\"TopBar\":{\"toggleMenuLabel\":\"Toggle menu\",\"SearchField\":{\"clearButtonLabel\":\"Clear\",\"search\":\"Search\"}}}}");

/***/ }),

/***/ "./node_modules/@shopify/polaris/styles.css":
/*!**************************************************!*\
  !*** ./node_modules/@shopify/polaris/styles.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris/styles.css */ "./node_modules/@shopify/polaris/styles.css");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json");
var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json", 1);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _general_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./general.css */ "./pages/general.css");
/* harmony import */ var _general_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_general_css__WEBPACK_IMPORTED_MODULE_15__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








axios__WEBPACK_IMPORTED_MODULE_8___default.a.defaults.baseURL = "http://localhost:3001/api/v1"; // Importo utilerias de redux







 //Construyo el store con middlewares

const middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_9___default.a];

const makeStore = (initalState, options) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_10__["createStore"])(_store__WEBPACK_IMPORTED_MODULE_13__["default"], initalState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_14__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_10__["applyMiddleware"])(...middlewares)));
};

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    const config = {
      apiKey: "33e2e44b84ac614c3796f121651156a1",
      shopOrigin: js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.get('shopOrigin'),
      forceRedirect: true
    };
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "Fernando App"), __jsx("meta", {
      charSet: "utf-8"
    })), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
      config: config
    }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
      store: store
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["AppProvider"], {
      i18n: _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_6__
    }, __jsx(Component, pageProps)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_12___default()(makeStore)(MyApp));

/***/ }),

/***/ "./pages/general.css":
/*!***************************!*\
  !*** ./pages/general.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopifystore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopifystore */ "./store/shopifystore/index.js");
/* harmony import */ var _variant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variant */ "./store/variant/index.js");



const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  shopify: _shopifystore__WEBPACK_IMPORTED_MODULE_1__["default"],
  variant: _variant__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map