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
import '../css/debug.css'; // ------------------------
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
          lineNumber: 105
        },
        __self: this
      }, React.createElement("div", {
        className: cx(CLASSES.CORE, containerClass, (_cx = {}, _defineProperty(_cx, classBps, !noBpClasses), _defineProperty(_cx, CLASSES.DEBUG_MODIFIER, isDebugActive), _defineProperty(_cx, "".concat(CLASSES.BP_PREFIX).concat(currentBp), debug && noBpClasses), _cx)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
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
          lineNumber: 117
        },
        __self: this
      }), React.createElement("div", {
        className: cx(SELECTORS.BP_CONTENT, className),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, React.createElement(WithContext, Object.assign({
        identifier: identifier,
        currentBp: currentBp
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), typeof children === 'function' ? children(currentBp, this.state.size) : children)), isDebugActive && React.createElement(React.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, React.createElement("span", {
        className: SELECTORS.DEBUG_INDICATOR,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, currentBp || 'none'), identifier !== ID_DEFAULT && identifier !== ID_BROWSER && React.createElement("span", {
        className: SELECTORS.DEBUG_IDENTIFIER,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
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
// Emulates media query functionality, and enables 'standalone' <Breakpoint/>
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
      lineNumber: 154
    },
    __self: this
  }), children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnRDb250YWluZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiY3giLCJSZWFjdFJlc2l6ZURldGVjdG9yIiwiV2l0aENvbnRleHQiLCJJRF9ERUZBVUxUIiwiSURfQlJPV1NFUiIsIkJSRUFLUE9JTlRTIiwiREVCVUdfQlJPV1NFUiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIkRFQlVHX0JQQyIsIkNMQVNTRVMiLCJDT1JFIiwiQlBfUFJFRklYIiwiREVCVUdfTU9ESUZJRVIiLCJTRUxFQ1RPUlMiLCJCUF9CUk9XU0VSIiwiQlBfQ09OVEVOVCIsIkRFQlVHX0lORElDQVRPUiIsIkRFQlVHX0lERU5USUZJRVIiLCJCcmVha3BvaW50Q29udGFpbmVyIiwic3RhdGUiLCJzaXplIiwiY3VycmVudEJwIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwicHJvcHMiLCJvbkNoYW5nZSIsImlkZW50aWZpZXIiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsIm5vQnBDbGFzc2VzIiwiZGVidWciLCJjaGlsZHJlbiIsIm1hdGNoaW5nQnBzIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImJwIiwibGVuZ3RoIiwiY2xhc3NCcHMiLCJtYXAiLCJqb2luIiwiaXNEZWJ1Z0FjdGl2ZSIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibm9kZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIkJyb3dzZXJDb250YWluZXIiLCJicGNQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsQ0FBUCxNQUFjLFlBQWQ7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHVC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QUFVLEVBQUVuRCxVQURiO0FBRUMsSUFBQSxTQUFTLEVBQUVXLFNBQVMsQ0FBQ0MsVUFGdEI7QUFHQyxJQUFBLEtBQUssRUFBRVY7QUFIUixLQUlLaUQsUUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1HdEIsUUFOSCxDQUQrQjtBQUFBLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0UmVzaXplRGV0ZWN0b3IgZnJvbSAncmVhY3QtcmVzaXplLWRldGVjdG9yJztcblxuaW1wb3J0IHsgV2l0aENvbnRleHQsIElEX0RFRkFVTFQsIElEX0JST1dTRVIgfSBmcm9tICcuL0NvbnRleHQuanMnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVFMgfSBmcm9tICcuLi9kYXRhL2JyZWFrcG9pbnRzLmpzJztcblxuaW1wb3J0ICcuLi9jc3MvZGVidWcuY3NzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBWYXJpYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBERUJVR19CUk9XU0VSID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG5jb25zdCBERUJVR19CUEMgPSBmYWxzZTtcblxuLy8gTk9URTogSWYgeW91J3JlIGdvaW5nIHRvIGNoYW5nZSBhbnkgQ0xBU1NFUyBvciBTRUxFQ1RPUlMsIHlvdSdsbFxuLy8gbmVlZCB0byBhbHNvIGNoYW5nZSB0aGUgIGNvcnJlc3BvbmRpbmcgdmFyaWFibGVzIGluIHRoZSBTQ1NTIGZpbGVcbmNvbnN0IENMQVNTRVMgPSB7XG5cdENPUkU6ICdicGMnLFxuXHRCUF9QUkVGSVg6ICctJyxcblx0REVCVUdfTU9ESUZJRVI6ICctZGVidWcnLFxufTtcblxuY29uc3QgU0VMRUNUT1JTID0ge1xuXHRCUF9CUk9XU0VSOiBgJHtDTEFTU0VTLkNPUkV9X19icm93c2VyYCxcblx0QlBfQ09OVEVOVDogYCR7Q0xBU1NFUy5DT1JFfV9fY29udGVudGAsXG5cdERFQlVHX0lORElDQVRPUjogYCR7Q0xBU1NFUy5DT1JFfV9fZGVidWdJbmRpY2F0b3JgLFxuXHRERUJVR19JREVOVElGSUVSOiBgJHtDTEFTU0VTLkNPUkV9X19kZWJ1Z0lkZW50aWZpZXJgLFxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDb3JlIEV4cG9ydHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY2xhc3MgQnJlYWtwb2ludENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBULnN0cmluZyxcblx0XHRjb250YWluZXJDbGFzczogVC5zdHJpbmcsXG5cdFx0Y2hpbGRyZW46IFQub25lT2ZUeXBlKFtULm5vZGUsIFQuZnVuY10pLmlzUmVxdWlyZWQsXG5cdFx0aWRlbnRpZmllcjogVC5zdHJpbmcuaXNSZXF1aXJlZCxcblxuXHRcdC8vIENhbGxiYWNrc1xuXHRcdG9uQ2hhbmdlOiBULmZ1bmMsXG5cblx0XHQvLyBGbGFnc1xuXHRcdGRlYnVnOiBULmJvb2wsXG5cdFx0bm9CcENsYXNzZXM6IFQuYm9vbCxcblx0fTtcblxuXHRzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuXHRcdGNsYXNzTmFtZTogbnVsbCxcblx0XHRjb250YWluZXJDbGFzczogbnVsbCxcblx0XHRpZGVudGlmaWVyOiBJRF9ERUZBVUxULFxuXG5cdFx0b25DaGFuZ2U6IG51bGwsXG5cblx0XHQvLyBEZWJ1ZyBudWxsIGluc3RlYWQgb2YgZmFsc2Ugc28gd2UgY2FuIG9wdC1vdXQgb2YgZ2xvYmFsIGRlYnVnXG5cdFx0ZGVidWc6IG51bGwsXG5cdFx0bm9CcENsYXNzZXM6IGZhbHNlLFxuXHR9O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2l6ZTogMCxcblx0XHRcdGN1cnJlbnRCcDogbnVsbCxcblx0XHR9O1xuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cdFx0Ly8gQ2hlY2sgaWYgYnAgY2hhbmdlZCB0byBzdXBwb3J0ICdvbkNoYW5nZScgY2FsbGJhY2tcblx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMub25DaGFuZ2UgPT09ICdmdW5jdGlvbicgJiZcblx0XHRcdHRoaXMuc3RhdGUuY3VycmVudEJwICE9PSBwcmV2U3RhdGUuY3VycmVudEJwKSB7XG5cblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5zdGF0ZS5jdXJyZW50QnApO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRpZGVudGlmaWVyLFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0Y29udGFpbmVyQ2xhc3MsXG5cdFx0XHRub0JwQ2xhc3Nlcyxcblx0XHRcdGRlYnVnLFxuXHRcdFx0Y2hpbGRyZW4sXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBtYXRjaGluZ0JwcyA9XG5cdFx0XHRPYmplY3Qua2V5cyhCUkVBS1BPSU5UUykuZmlsdGVyKGJwID0+IChcblx0XHRcdFx0dGhpcy5zdGF0ZS5zaXplID49IEJSRUFLUE9JTlRTW2JwXVxuXHRcdFx0KSk7XG5cdFx0Y29uc3QgY3VycmVudEJwID0gbWF0Y2hpbmdCcHNbbWF0Y2hpbmdCcHMubGVuZ3RoIC0gMV07XG5cblx0XHQvLyBGb3JtYXR0ZWQgYnJlYWtwb2ludHMgZm9yIGNsYXNzTmFtZSBvdXRwdXRcblx0XHRjb25zdCBjbGFzc0JwcyA9IG1hdGNoaW5nQnBzLm1hcChicCA9PiBgJHtDTEFTU0VTLkJQX1BSRUZJWH0ke2JwfWApLmpvaW4oJyAnKTtcblxuXHRcdC8vIERlYnVnIG1vZGUgLSBjb21wb25lbnQgZmxhZywgYW5kIGFjY291bnQgZm9yIG9wdC1vdXQgb2YgZ2xvYmFsIGZsYWdcblx0XHRjb25zdCBpc0RlYnVnQWN0aXZlID0gZGVidWcgfHwgKGRlYnVnICE9PSBmYWxzZSAmJiBERUJVR19CUEMpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KFxuXHRcdFx0XHRcdENMQVNTRVMuQ09SRSxcblx0XHRcdFx0XHRjb250YWluZXJDbGFzcyxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRbY2xhc3NCcHNdOiAhbm9CcENsYXNzZXMsXG5cdFx0XHRcdFx0XHRbQ0xBU1NFUy5ERUJVR19NT0RJRklFUl06IGlzRGVidWdBY3RpdmUsXG5cdFx0XHRcdFx0XHQvLyBJZiB0aGVyZSBhcmUgbm8gY2xhc3MgbmFtZSBvdXRwdXRzLCBCVVQgZGVidWcgbW9kZSBpcyBvbixcblx0XHRcdFx0XHRcdC8vIHJlbmRlciB0aGUgYWN0aXZlIGJwIGFzIGEgY2xhc3MgdG8gZW5hYmxlIENTUyBkZWJ1ZyBpbmRpY2F0b3Jcblx0XHRcdFx0XHRcdFtgJHtDTEFTU0VTLkJQX1BSRUZJWH0ke2N1cnJlbnRCcH1gXTogZGVidWcgJiYgbm9CcENsYXNzZXMsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0KX0+XG5cdFx0XHRcdFx0PFJlYWN0UmVzaXplRGV0ZWN0b3Jcblx0XHRcdFx0XHRcdGhhbmRsZVdpZHRoXG5cdFx0XHRcdFx0XHRvblJlc2l6ZT17c2l6ZSA9PiB0aGlzLnNldFN0YXRlKHsgc2l6ZSwgY3VycmVudEJwIH0pfVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goU0VMRUNUT1JTLkJQX0NPTlRFTlQsIGNsYXNzTmFtZSl9PlxuXHRcdFx0XHRcdFx0PFdpdGhDb250ZXh0IHsuLi57IGlkZW50aWZpZXIsIGN1cnJlbnRCcCB9fT5cblx0XHRcdFx0XHRcdFx0eyB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbidcblx0XHRcdFx0XHRcdFx0XHQ/IGNoaWxkcmVuKGN1cnJlbnRCcCwgdGhpcy5zdGF0ZS5zaXplKVxuXHRcdFx0XHRcdFx0XHRcdDogY2hpbGRyZW4gfVxuXHRcdFx0XHRcdFx0PC9XaXRoQ29udGV4dD5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdHsgaXNEZWJ1Z0FjdGl2ZSAmJiAoXG5cdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17U0VMRUNUT1JTLkRFQlVHX0lORElDQVRPUn0+XG5cdFx0XHRcdFx0XHRcdFx0eyBjdXJyZW50QnAgfHwgJ25vbmUnIH1cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHR7IChpZGVudGlmaWVyICE9PSBJRF9ERUZBVUxUICYmIGlkZW50aWZpZXIgIT09IElEX0JST1dTRVIpICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1NFTEVDVE9SUy5ERUJVR19JREVOVElGSUVSfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgaWRlbnRpZmllciB9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0KSB9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHQpO1xuXHR9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRW11bGF0ZXMgbWVkaWEgcXVlcnkgZnVuY3Rpb25hbGl0eSwgYW5kIGVuYWJsZXMgJ3N0YW5kYWxvbmUnIDxCcmVha3BvaW50Lz5cbi8vIEFsc28gcHJvdmlkZXMgYmFja3dhcmQtY29tcGF0aWJpbGl0eSB3aXRoIEREQnJlYWtwb2ludHMgb3JpZ2luYWwgJ2JwKCknIG1peGluXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuZXhwb3J0IGNvbnN0IEJyb3dzZXJDb250YWluZXIgPSAoeyBjaGlsZHJlbiwgLi4uYnBjUHJvcHMgfSkgPT4gKFxuXHQ8QnJlYWtwb2ludENvbnRhaW5lclxuXHRcdGlkZW50aWZpZXI9e0lEX0JST1dTRVJ9XG5cdFx0Y2xhc3NOYW1lPXtTRUxFQ1RPUlMuQlBfQlJPV1NFUn1cblx0XHRkZWJ1Zz17REVCVUdfQlJPV1NFUn1cblx0XHR7Li4uYnBjUHJvcHN9XG5cdD5cblx0XHR7IGNoaWxkcmVuIH1cblx0PC9CcmVha3BvaW50Q29udGFpbmVyPlxuKTtcbiJdfQ==