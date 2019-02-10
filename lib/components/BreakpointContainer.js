import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.array.index-of";
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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
// eslint-disable-next-line eqeqeq

var DEBUG_BROWSER = process.env.BPC_DEBUG_BROWSER != undefined ? process.env.BPC_DEBUG_BROWSER === 'true' : process.env.NODE_ENV === 'development'; // eslint-disable-next-line eqeqeq

var DEBUG_BPC = process.env.BPC_DEBUG_CONTAINERS != undefined ? process.env.BPC_DEBUG_CONTAINERS === 'true' : false; // NOTE: If you're going to change any CLASSES or SELECTORS, you'll
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

export var BreakpointContainer =
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
      // Check if bp changed to support 'onChange' callback
      if (typeof this.props.onChange === 'function' && this.state.currentBp !== prevState.currentBp) {
        this.props.onChange(this.state.currentBp);
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
          noBpClasses = _this$props.noBpClasses,
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
          lineNumber: 112
        },
        __self: this
      }, React.createElement("div", {
        className: cx(CLASSES.CORE, containerClass, (_cx = {}, _defineProperty(_cx, classBps, !noBpClasses), _defineProperty(_cx, CLASSES.DEBUG_MODIFIER, isDebugActive), _defineProperty(_cx, "".concat(CLASSES.BP_PREFIX).concat(currentBp), debug && noBpClasses), _cx)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
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
          lineNumber: 124
        },
        __self: this
      }), React.createElement("div", {
        className: cx(SELECTORS.BP_CONTENT, className),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, React.createElement(WithContext, Object.assign({
        identifier: identifier,
        currentBp: currentBp
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), typeof children === 'function' ? children(currentBp, this.state.size) : children)), isDebugActive && React.createElement(React.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, React.createElement("span", {
        className: SELECTORS.DEBUG_INDICATOR,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, currentBp || 'none'), identifier !== ID_DEFAULT && identifier !== ID_BROWSER && React.createElement("span", {
        className: SELECTORS.DEBUG_IDENTIFIER,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, identifier))));
    }
  }]);

  return BreakpointContainer;
}(React.Component);
BreakpointContainer.propTypes = {
  className: T.string,
  containerClass: T.string,
  children: T.oneOfType([T.node, T.func]).isRequired,
  identifier: T.string.isRequired,
  // Callbacks
  onChange: T.func,
  // Flags
  debug: T.bool,
  noBpClasses: T.bool
};
BreakpointContainer.defaultProps = {
  className: null,
  containerClass: null,
  identifier: ID_DEFAULT,
  onChange: null,
  // Debug null instead of false so we can opt-out of global debug
  debug: null,
  noBpClasses: false
};
; // ------------------------
// Emulates media query functionality, and enables 'standalone' <Breakpoint/>s
// Also provides backward-compatibility with DDBreakpoints original 'bp()' mixin
// eslint-disable-next-line react/prop-types

export var BrowserContainer = function BrowserContainer(_ref) {
  var children = _ref.children,
      bpcProps = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(BreakpointContainer, Object.assign({
    identifier: ID_BROWSER,
    className: SELECTORS.BP_BROWSER,
    debug: DEBUG_BROWSER
  }, bpcProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnRDb250YWluZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiY3giLCJSZWFjdFJlc2l6ZURldGVjdG9yIiwiV2l0aENvbnRleHQiLCJJRF9ERUZBVUxUIiwiSURfQlJPV1NFUiIsIkJSRUFLUE9JTlRTIiwiREVCVUdfQlJPV1NFUiIsInByb2Nlc3MiLCJlbnYiLCJCUENfREVCVUdfQlJPV1NFUiIsInVuZGVmaW5lZCIsIk5PREVfRU5WIiwiREVCVUdfQlBDIiwiQlBDX0RFQlVHX0NPTlRBSU5FUlMiLCJDTEFTU0VTIiwiQ09SRSIsIkJQX1BSRUZJWCIsIkRFQlVHX01PRElGSUVSIiwiU0VMRUNUT1JTIiwiQlBfQlJPV1NFUiIsIkJQX0NPTlRFTlQiLCJERUJVR19JTkRJQ0FUT1IiLCJERUJVR19JREVOVElGSUVSIiwiQnJlYWtwb2ludENvbnRhaW5lciIsInN0YXRlIiwic2l6ZSIsImN1cnJlbnRCcCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInByb3BzIiwib25DaGFuZ2UiLCJpZGVudGlmaWVyIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQ2xhc3MiLCJub0JwQ2xhc3NlcyIsImRlYnVnIiwiY2hpbGRyZW4iLCJtYXRjaGluZ0JwcyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJicCIsImxlbmd0aCIsImNsYXNzQnBzIiwibWFwIiwiam9pbiIsImlzRGVidWdBY3RpdmUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm5vZGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJCcm93c2VyQ29udGFpbmVyIiwiYnBjUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLENBQVAsTUFBYyxZ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LEVBQUU1QixVQUhTO0FBS3JCMkIsRUFBQUEsUUFBUSxFQUFFLElBTFc7QUFPckI7QUFDQUssRUFBQUEsS0FBSyxFQUFFLElBUmM7QUFTckJELEVBQUFBLFdBQVcsRUFBRTtBQVRRLEM7QUE4RnRCLEMsQ0FFRDtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxPQUFPLElBQU11QixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBR3JCLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWdCc0IsUUFBaEI7O0FBQUEsU0FDL0Isb0JBQUMsbUJBQUQ7QUFDQyxJQUFBLFVBQVUsRUFBRXRELFVBRGI7QUFFQyxJQUFBLFNBQVMsRUFBRWMsU0FBUyxDQUFDQyxVQUZ0QjtBQUdDLElBQUEsS0FBSyxFQUFFYjtBQUhSLEtBSUtvRCxRQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTUd0QixRQU5ILENBRCtCO0FBQUEsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFQgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3RSZXNpemVEZXRlY3RvciBmcm9tICdyZWFjdC1yZXNpemUtZGV0ZWN0b3InO1xuXG5pbXBvcnQgeyBXaXRoQ29udGV4dCwgSURfREVGQVVMVCwgSURfQlJPV1NFUiB9IGZyb20gJy4vQ29udGV4dC5qcyc7XG5pbXBvcnQgeyBCUkVBS1BPSU5UUyB9IGZyb20gJy4uL2RhdGEvYnJlYWtwb2ludHMuanMnO1xuXG5pbXBvcnQgJy4uL3Njc3MvZGVidWcuc2Nzcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVmFyaWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuY29uc3QgREVCVUdfQlJPV1NFUiA9IChwcm9jZXNzLmVudi5CUENfREVCVUdfQlJPV1NFUiAhPSB1bmRlZmluZWQpXG5cdD8gcHJvY2Vzcy5lbnYuQlBDX0RFQlVHX0JST1dTRVIgPT09ICd0cnVlJ1xuXHQ6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuY29uc3QgREVCVUdfQlBDID0gKHByb2Nlc3MuZW52LkJQQ19ERUJVR19DT05UQUlORVJTICE9IHVuZGVmaW5lZClcblx0PyBwcm9jZXNzLmVudi5CUENfREVCVUdfQ09OVEFJTkVSUyA9PT0gJ3RydWUnXG5cdDogZmFsc2U7XG5cbi8vIE5PVEU6IElmIHlvdSdyZSBnb2luZyB0byBjaGFuZ2UgYW55IENMQVNTRVMgb3IgU0VMRUNUT1JTLCB5b3UnbGxcbi8vIG5lZWQgdG8gYWxzbyBjaGFuZ2UgdGhlICBjb3JyZXNwb25kaW5nIHZhcmlhYmxlcyBpbiB0aGUgU0NTUyBmaWxlXG5jb25zdCBDTEFTU0VTID0ge1xuXHRDT1JFOiAnYnBjJyxcblx0QlBfUFJFRklYOiAnLScsXG5cdERFQlVHX01PRElGSUVSOiAnLWRlYnVnJyxcbn07XG5cbmNvbnN0IFNFTEVDVE9SUyA9IHtcblx0QlBfQlJPV1NFUjogYCR7Q0xBU1NFUy5DT1JFfV9fYnJvd3NlcmAsXG5cdEJQX0NPTlRFTlQ6IGAke0NMQVNTRVMuQ09SRX1fX2NvbnRlbnRgLFxuXHRERUJVR19JTkRJQ0FUT1I6IGAke0NMQVNTRVMuQ09SRX1fX2RlYnVnSW5kaWNhdG9yYCxcblx0REVCVUdfSURFTlRJRklFUjogYCR7Q0xBU1NFUy5DT1JFfV9fZGVidWdJZGVudGlmaWVyYCxcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ29yZSBFeHBvcnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVE9ETyBkb2NzP1xuZXhwb3J0IGNsYXNzIEJyZWFrcG9pbnRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGNsYXNzTmFtZTogVC5zdHJpbmcsXG5cdFx0Y29udGFpbmVyQ2xhc3M6IFQuc3RyaW5nLFxuXHRcdGNoaWxkcmVuOiBULm9uZU9mVHlwZShbVC5ub2RlLCBULmZ1bmNdKS5pc1JlcXVpcmVkLFxuXHRcdGlkZW50aWZpZXI6IFQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cblx0XHQvLyBDYWxsYmFja3Ncblx0XHRvbkNoYW5nZTogVC5mdW5jLFxuXG5cdFx0Ly8gRmxhZ3Ncblx0XHRkZWJ1ZzogVC5ib29sLFxuXHRcdG5vQnBDbGFzc2VzOiBULmJvb2wsXG5cdH07XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcblx0XHRjbGFzc05hbWU6IG51bGwsXG5cdFx0Y29udGFpbmVyQ2xhc3M6IG51bGwsXG5cdFx0aWRlbnRpZmllcjogSURfREVGQVVMVCxcblxuXHRcdG9uQ2hhbmdlOiBudWxsLFxuXG5cdFx0Ly8gRGVidWcgbnVsbCBpbnN0ZWFkIG9mIGZhbHNlIHNvIHdlIGNhbiBvcHQtb3V0IG9mIGdsb2JhbCBkZWJ1Z1xuXHRcdGRlYnVnOiBudWxsLFxuXHRcdG5vQnBDbGFzc2VzOiBmYWxzZSxcblx0fTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNpemU6IDAsXG5cdFx0XHRjdXJyZW50QnA6IG51bGwsXG5cdFx0fTtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXHRcdC8vIENoZWNrIGlmIGJwIGNoYW5nZWQgdG8gc3VwcG9ydCAnb25DaGFuZ2UnIGNhbGxiYWNrXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nICYmXG5cdFx0XHR0aGlzLnN0YXRlLmN1cnJlbnRCcCAhPT0gcHJldlN0YXRlLmN1cnJlbnRCcCkge1xuXG5cdFx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuc3RhdGUuY3VycmVudEJwKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0aWRlbnRpZmllcixcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdGNvbnRhaW5lckNsYXNzLFxuXHRcdFx0bm9CcENsYXNzZXMsXG5cdFx0XHRkZWJ1Zyxcblx0XHRcdGNoaWxkcmVuLFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgbWF0Y2hpbmdCcHMgPVxuXHRcdFx0T2JqZWN0LmtleXMoQlJFQUtQT0lOVFMpLmZpbHRlcihicCA9PiAoXG5cdFx0XHRcdHRoaXMuc3RhdGUuc2l6ZSA+PSBCUkVBS1BPSU5UU1ticF1cblx0XHRcdCkpO1xuXHRcdGNvbnN0IGN1cnJlbnRCcCA9IG1hdGNoaW5nQnBzW21hdGNoaW5nQnBzLmxlbmd0aCAtIDFdO1xuXG5cdFx0Ly8gRm9ybWF0dGVkIGJyZWFrcG9pbnRzIGZvciBjbGFzc05hbWUgb3V0cHV0XG5cdFx0Y29uc3QgY2xhc3NCcHMgPSBtYXRjaGluZ0Jwcy5tYXAoYnAgPT4gYCR7Q0xBU1NFUy5CUF9QUkVGSVh9JHticH1gKS5qb2luKCcgJyk7XG5cblx0XHQvLyBEZWJ1ZyBtb2RlIC0gY29tcG9uZW50IGZsYWcsIGFuZCBhY2NvdW50IGZvciBvcHQtb3V0IG9mIGdsb2JhbCBmbGFnXG5cdFx0Y29uc3QgaXNEZWJ1Z0FjdGl2ZSA9IGRlYnVnIHx8IChkZWJ1ZyAhPT0gZmFsc2UgJiYgREVCVUdfQlBDKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeChcblx0XHRcdFx0XHRDTEFTU0VTLkNPUkUsXG5cdFx0XHRcdFx0Y29udGFpbmVyQ2xhc3MsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0W2NsYXNzQnBzXTogIW5vQnBDbGFzc2VzLFxuXHRcdFx0XHRcdFx0W0NMQVNTRVMuREVCVUdfTU9ESUZJRVJdOiBpc0RlYnVnQWN0aXZlLFxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlcmUgYXJlIG5vIGNsYXNzIG5hbWUgb3V0cHV0cywgQlVUIGRlYnVnIG1vZGUgaXMgb24sXG5cdFx0XHRcdFx0XHQvLyByZW5kZXIgdGhlIGFjdGl2ZSBicCBhcyBhIGNsYXNzIHRvIGVuYWJsZSBDU1MgZGVidWcgaW5kaWNhdG9yXG5cdFx0XHRcdFx0XHRbYCR7Q0xBU1NFUy5CUF9QUkVGSVh9JHtjdXJyZW50QnB9YF06IGRlYnVnICYmIG5vQnBDbGFzc2VzLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdCl9PlxuXHRcdFx0XHRcdDxSZWFjdFJlc2l6ZURldGVjdG9yXG5cdFx0XHRcdFx0XHRoYW5kbGVXaWR0aFxuXHRcdFx0XHRcdFx0b25SZXNpemU9e3NpemUgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpemUsIGN1cnJlbnRCcCB9KX1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KFNFTEVDVE9SUy5CUF9DT05URU5ULCBjbGFzc05hbWUpfT5cblx0XHRcdFx0XHRcdDxXaXRoQ29udGV4dCB7Li4ueyBpZGVudGlmaWVyLCBjdXJyZW50QnAgfX0+XG5cdFx0XHRcdFx0XHRcdHsgdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nXG5cdFx0XHRcdFx0XHRcdFx0PyBjaGlsZHJlbihjdXJyZW50QnAsIHRoaXMuc3RhdGUuc2l6ZSlcblx0XHRcdFx0XHRcdFx0XHQ6IGNoaWxkcmVuIH1cblx0XHRcdFx0XHRcdDwvV2l0aENvbnRleHQ+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHR7IGlzRGVidWdBY3RpdmUgJiYgKFxuXHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1NFTEVDVE9SUy5ERUJVR19JTkRJQ0FUT1J9PlxuXHRcdFx0XHRcdFx0XHRcdHsgY3VycmVudEJwIHx8ICdub25lJyB9XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0eyAoaWRlbnRpZmllciAhPT0gSURfREVGQVVMVCAmJiBpZGVudGlmaWVyICE9PSBJRF9CUk9XU0VSKSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtTRUxFQ1RPUlMuREVCVUdfSURFTlRJRklFUn0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IGlkZW50aWZpZXIgfVxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEVtdWxhdGVzIG1lZGlhIHF1ZXJ5IGZ1bmN0aW9uYWxpdHksIGFuZCBlbmFibGVzICdzdGFuZGFsb25lJyA8QnJlYWtwb2ludC8+c1xuLy8gQWxzbyBwcm92aWRlcyBiYWNrd2FyZC1jb21wYXRpYmlsaXR5IHdpdGggRERCcmVha3BvaW50cyBvcmlnaW5hbCAnYnAoKScgbWl4aW5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG5leHBvcnQgY29uc3QgQnJvd3NlckNvbnRhaW5lciA9ICh7IGNoaWxkcmVuLCAuLi5icGNQcm9wcyB9KSA9PiAoXG5cdDxCcmVha3BvaW50Q29udGFpbmVyXG5cdFx0aWRlbnRpZmllcj17SURfQlJPV1NFUn1cblx0XHRjbGFzc05hbWU9e1NFTEVDVE9SUy5CUF9CUk9XU0VSfVxuXHRcdGRlYnVnPXtERUJVR19CUk9XU0VSfVxuXHRcdHsuLi5icGNQcm9wc31cblx0PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L0JyZWFrcG9pbnRDb250YWluZXI+XG4pO1xuIl19