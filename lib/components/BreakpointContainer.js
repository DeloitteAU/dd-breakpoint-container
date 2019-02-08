import "core-js/modules/es6.array.index-of";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.define-property";
import "core-js/modules/es6.object.create";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/es6.object.assign";
import "core-js/modules/es6.array.map";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.array.filter";
var _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/BreakpointContainer.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import T from 'prop-types';
import cx from 'classnames';
import ReactResizeDetector from 'react-resize-detector';
import { WithContext, ID_DEFAULT, ID_BROWSER } from './Context.js';
import { BREAKPOINTS } from '../data/breakpoints.js';
import '../scss/debug.scss'; // ------------------------
// Variables
// ------------------------

var DEBUG_BROWSER = process.env.NODE_ENV === 'development';
var DEBUG_BPC = false; // NOTE: If you're going to change any CLASSES or SELECTORS, you'll
// need to also change the  corresponding variables in the SCSS file

var CLASSES = {
  CORE: 'bpc',
  BP_PREFIX: '-',
  DEBUG_MODIFIER: '-debug'
};
var SELECTORS = {
  BP_BROWSER: "".concat(CLASSES.CORE, "__browser"),
  BP_CONTENT: "".concat(CLASSES.CORE, "__content"),
  DEBUG_INDICATOR: "".concat(CLASSES.CORE, "__debugIndicator"),
  DEBUG_IDENTIFIER: "".concat(CLASSES.CORE, "__debugIdentifier")
}; // ------------------------
// Core Exports
// ------------------------
// TODO docs?

var BreakpointContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BreakpointContainer, _React$Component);

  function BreakpointContainer() {
    var _this;

    _classCallCheck(this, BreakpointContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BreakpointContainer).call(this));
    _this.state = {
      size: 0,
      currentBp: null
    };
    return _this;
  }

  _createClass(BreakpointContainer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // Check if bp changed to support 'onBpChanged' callback
      if (typeof this.props.onBpChanged === 'function' && this.state.currentBp !== prevState.currentBp) {
        this.props.onBpChanged(this.state.currentBp);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _cx;

      var _this$props = this.props,
          identifier = _this$props.identifier,
          className = _this$props.className,
          containerClass = _this$props.containerClass,
          noClasses = _this$props.noClasses,
          debug = _this$props.debug,
          children = _this$props.children;
      var matchingBps = Object.keys(BREAKPOINTS).filter(function (bp) {
        return _this2.state.size >= BREAKPOINTS[bp];
      });
      var currentBp = matchingBps[matchingBps.length - 1]; // Formatted breakpoints for className output

      var classBps = matchingBps.map(function (bp) {
        return "".concat(CLASSES.BP_PREFIX).concat(bp);
      }).join(' '); // Debug mode - component flag, and account for opt-out of global flag

      var isDebugActive = debug || debug !== false && DEBUG_BPC;
      return React.createElement(React.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, React.createElement("div", {
        className: cx(CLASSES.CORE, containerClass, (_cx = {}, _defineProperty(_cx, classBps, !noClasses), _defineProperty(_cx, CLASSES.DEBUG_MODIFIER, isDebugActive), _defineProperty(_cx, "".concat(CLASSES.BP_PREFIX).concat(currentBp), debug && noClasses), _cx)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, React.createElement(ReactResizeDetector, {
        handleWidth: true,
        onResize: function onResize(size) {
          return _this2.setState({
            size: size,
            currentBp: currentBp
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), React.createElement("div", {
        className: cx(SELECTORS.BP_CONTENT, className),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, React.createElement(WithContext, Object.assign({
        identifier: identifier,
        currentBp: currentBp
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), typeof children === 'function' ? children(currentBp, this.state.size) : children)), isDebugActive && React.createElement(React.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, React.createElement("span", {
        className: SELECTORS.DEBUG_INDICATOR,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, currentBp || 'none'), identifier !== ID_DEFAULT && identifier !== ID_BROWSER && React.createElement("span", {
        className: SELECTORS.DEBUG_IDENTIFIER,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, identifier))));
    }
  }]);

  return BreakpointContainer;
}(React.Component);

BreakpointContainer.propTypes = {
  identifier: T.string.isRequired,
  containerClass: T.string,
  className: T.string,
  children: T.oneOfType([T.node, T.func]).isRequired,
  // Flags
  debug: T.bool,
  noClasses: T.bool,
  // Callbacks
  onBpChanged: T.func
};
BreakpointContainer.defaultProps = {
  identifier: ID_DEFAULT,
  containerClass: null,
  className: null,
  // Debug null instead of false so we can opt-out of global debug
  debug: null,
  noClasses: false,
  onBpChanged: null
};
export { BreakpointContainer as default };
; // ------------------------
// Emulates media query functionality, and enables 'standalone' <Breakpoint/>s
// Also provides backward-compatibility with DDBreakpoints original 'bp()' mixin
// eslint-disable-next-line react/prop-types

export var BrowserBreakpoints = function BrowserBreakpoints(_ref) {
  var children = _ref.children,
      bpcProps = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(BreakpointContainer, Object.assign({
    identifier: ID_BROWSER,
    className: SELECTORS.BP_BROWSER,
    debug: DEBUG_BROWSER
  }, bpcProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), children);
};