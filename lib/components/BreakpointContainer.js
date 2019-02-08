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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnRDb250YWluZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiY3giLCJSZWFjdFJlc2l6ZURldGVjdG9yIiwiV2l0aENvbnRleHQiLCJJRF9ERUZBVUxUIiwiSURfQlJPV1NFUiIsIkJSRUFLUE9JTlRTIiwiREVCVUdfQlJPV1NFUiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIkRFQlVHX0JQQyIsIkNMQVNTRVMiLCJDT1JFIiwiQlBfUFJFRklYIiwiREVCVUdfTU9ESUZJRVIiLCJTRUxFQ1RPUlMiLCJCUF9CUk9XU0VSIiwiQlBfQ09OVEVOVCIsIkRFQlVHX0lORElDQVRPUiIsIkRFQlVHX0lERU5USUZJRVIiLCJCcmVha3BvaW50Q29udGFpbmVyIiwic3RhdGUiLCJzaXplIiwiY3VycmVudEJwIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwicHJvcHMiLCJvbkJwQ2hhbmdlZCIsImlkZW50aWZpZXIiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsIm5vQ2xhc3NlcyIsImRlYnVnIiwiY2hpbGRyZW4iLCJtYXRjaGluZ0JwcyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJicCIsImxlbmd0aCIsImNsYXNzQnBzIiwibWFwIiwiam9pbiIsImlzRGVidWdBY3RpdmUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJCcm93c2VyQnJlYWtwb2ludHMiLCJicGNQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsQ0FBUCxNQUFjLFlBQWQ7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdD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QUFBLEtBQUssRUFBRVY7QUFIUixLQUlLaUQsUUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1HdEIsUUFOSCxDQURpQztBQUFBLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0UmVzaXplRGV0ZWN0b3IgZnJvbSAncmVhY3QtcmVzaXplLWRldGVjdG9yJztcblxuaW1wb3J0IHsgV2l0aENvbnRleHQsIElEX0RFRkFVTFQsIElEX0JST1dTRVIgfSBmcm9tICcuL0NvbnRleHQuanMnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVFMgfSBmcm9tICcuLi9kYXRhL2JyZWFrcG9pbnRzLmpzJztcblxuaW1wb3J0ICcuLi9zY3NzL2RlYnVnLnNjc3MnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFZhcmlhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IERFQlVHX0JST1dTRVIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcbmNvbnN0IERFQlVHX0JQQyA9IGZhbHNlO1xuXG4vLyBOT1RFOiBJZiB5b3UncmUgZ29pbmcgdG8gY2hhbmdlIGFueSBDTEFTU0VTIG9yIFNFTEVDVE9SUywgeW91J2xsXG4vLyBuZWVkIHRvIGFsc28gY2hhbmdlIHRoZSAgY29ycmVzcG9uZGluZyB2YXJpYWJsZXMgaW4gdGhlIFNDU1MgZmlsZVxuY29uc3QgQ0xBU1NFUyA9IHtcblx0Q09SRTogJ2JwYycsXG5cdEJQX1BSRUZJWDogJy0nLFxuXHRERUJVR19NT0RJRklFUjogJy1kZWJ1ZycsXG59O1xuXG5jb25zdCBTRUxFQ1RPUlMgPSB7XG5cdEJQX0JST1dTRVI6IGAke0NMQVNTRVMuQ09SRX1fX2Jyb3dzZXJgLFxuXHRCUF9DT05URU5UOiBgJHtDTEFTU0VTLkNPUkV9X19jb250ZW50YCxcblx0REVCVUdfSU5ESUNBVE9SOiBgJHtDTEFTU0VTLkNPUkV9X19kZWJ1Z0luZGljYXRvcmAsXG5cdERFQlVHX0lERU5USUZJRVI6IGAke0NMQVNTRVMuQ09SRX1fX2RlYnVnSWRlbnRpZmllcmAsXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENvcmUgRXhwb3J0c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRPRE8gZG9jcz9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyZWFrcG9pbnRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGlkZW50aWZpZXI6IFQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0Y29udGFpbmVyQ2xhc3M6IFQuc3RyaW5nLFxuXHRcdGNsYXNzTmFtZTogVC5zdHJpbmcsXG5cdFx0Y2hpbGRyZW46IFQub25lT2ZUeXBlKFtULm5vZGUsIFQuZnVuY10pLmlzUmVxdWlyZWQsXG5cblx0XHQvLyBGbGFnc1xuXHRcdGRlYnVnOiBULmJvb2wsXG5cdFx0bm9DbGFzc2VzOiBULmJvb2wsXG5cblx0XHQvLyBDYWxsYmFja3Ncblx0XHRvbkJwQ2hhbmdlZDogVC5mdW5jLFxuXHR9O1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0aWRlbnRpZmllcjogSURfREVGQVVMVCxcblx0XHRjb250YWluZXJDbGFzczogbnVsbCxcblx0XHRjbGFzc05hbWU6IG51bGwsXG5cdFx0Ly8gRGVidWcgbnVsbCBpbnN0ZWFkIG9mIGZhbHNlIHNvIHdlIGNhbiBvcHQtb3V0IG9mIGdsb2JhbCBkZWJ1Z1xuXHRcdGRlYnVnOiBudWxsLFxuXHRcdG5vQ2xhc3NlczogZmFsc2UsXG5cdFx0b25CcENoYW5nZWQ6IG51bGwsXG5cdH07XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaXplOiAwLFxuXHRcdFx0Y3VycmVudEJwOiBudWxsLFxuXHRcdH07XG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcblx0XHQvLyBDaGVjayBpZiBicCBjaGFuZ2VkIHRvIHN1cHBvcnQgJ29uQnBDaGFuZ2VkJyBjYWxsYmFja1xuXHRcdGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkJwQ2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdFx0dGhpcy5zdGF0ZS5jdXJyZW50QnAgIT09IHByZXZTdGF0ZS5jdXJyZW50QnApIHtcblxuXHRcdFx0dGhpcy5wcm9wcy5vbkJwQ2hhbmdlZCh0aGlzLnN0YXRlLmN1cnJlbnRCcCk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGlkZW50aWZpZXIsXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRjb250YWluZXJDbGFzcyxcblx0XHRcdG5vQ2xhc3Nlcyxcblx0XHRcdGRlYnVnLFxuXHRcdFx0Y2hpbGRyZW4sXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zdCBtYXRjaGluZ0JwcyA9XG5cdFx0XHRPYmplY3Qua2V5cyhCUkVBS1BPSU5UUykuZmlsdGVyKGJwID0+IChcblx0XHRcdFx0dGhpcy5zdGF0ZS5zaXplID49IEJSRUFLUE9JTlRTW2JwXVxuXHRcdFx0KSk7XG5cdFx0Y29uc3QgY3VycmVudEJwID0gbWF0Y2hpbmdCcHNbbWF0Y2hpbmdCcHMubGVuZ3RoIC0gMV07XG5cblx0XHQvLyBGb3JtYXR0ZWQgYnJlYWtwb2ludHMgZm9yIGNsYXNzTmFtZSBvdXRwdXRcblx0XHRjb25zdCBjbGFzc0JwcyA9IG1hdGNoaW5nQnBzLm1hcChicCA9PiBgJHtDTEFTU0VTLkJQX1BSRUZJWH0ke2JwfWApLmpvaW4oJyAnKTtcblxuXHRcdC8vIERlYnVnIG1vZGUgLSBjb21wb25lbnQgZmxhZywgYW5kIGFjY291bnQgZm9yIG9wdC1vdXQgb2YgZ2xvYmFsIGZsYWdcblx0XHRjb25zdCBpc0RlYnVnQWN0aXZlID0gZGVidWcgfHwgKGRlYnVnICE9PSBmYWxzZSAmJiBERUJVR19CUEMpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KFxuXHRcdFx0XHRcdENMQVNTRVMuQ09SRSxcblx0XHRcdFx0XHRjb250YWluZXJDbGFzcyxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRbY2xhc3NCcHNdOiAhbm9DbGFzc2VzLFxuXHRcdFx0XHRcdFx0W0NMQVNTRVMuREVCVUdfTU9ESUZJRVJdOiBpc0RlYnVnQWN0aXZlLFxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlcmUgYXJlIG5vIGNsYXNzIG5hbWUgb3V0cHV0cywgQlVUIGRlYnVnIG1vZGUgaXMgb24sXG5cdFx0XHRcdFx0XHQvLyByZW5kZXIgdGhlIGFjdGl2ZSBicCBhcyBhIGNsYXNzIHRvIGVuYWJsZSBDU1MgZGVidWcgaW5kaWNhdG9yXG5cdFx0XHRcdFx0XHRbYCR7Q0xBU1NFUy5CUF9QUkVGSVh9JHtjdXJyZW50QnB9YF06IGRlYnVnICYmIG5vQ2xhc3Nlcyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHQpfT5cblx0XHRcdFx0XHQ8UmVhY3RSZXNpemVEZXRlY3RvclxuXHRcdFx0XHRcdFx0aGFuZGxlV2lkdGhcblx0XHRcdFx0XHRcdG9uUmVzaXplPXtzaXplID0+IHRoaXMuc2V0U3RhdGUoeyBzaXplLCBjdXJyZW50QnAgfSl9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeChTRUxFQ1RPUlMuQlBfQ09OVEVOVCwgY2xhc3NOYW1lKX0+XG5cdFx0XHRcdFx0XHQ8V2l0aENvbnRleHQgey4uLnsgaWRlbnRpZmllciwgY3VycmVudEJwIH19PlxuXHRcdFx0XHRcdFx0XHR7IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHRcdFx0XHRcdD8gY2hpbGRyZW4oY3VycmVudEJwLCB0aGlzLnN0YXRlLnNpemUpXG5cdFx0XHRcdFx0XHRcdFx0OiBjaGlsZHJlbiB9XG5cdFx0XHRcdFx0XHQ8L1dpdGhDb250ZXh0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0eyBpc0RlYnVnQWN0aXZlICYmIChcblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtTRUxFQ1RPUlMuREVCVUdfSU5ESUNBVE9SfT5cblx0XHRcdFx0XHRcdFx0XHR7IGN1cnJlbnRCcCB8fCAnbm9uZScgfVxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdHsgKGlkZW50aWZpZXIgIT09IElEX0RFRkFVTFQgJiYgaWRlbnRpZmllciAhPT0gSURfQlJPV1NFUikgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17U0VMRUNUT1JTLkRFQlVHX0lERU5USUZJRVJ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBpZGVudGlmaWVyIH1cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdCk7XG5cdH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBFbXVsYXRlcyBtZWRpYSBxdWVyeSBmdW5jdGlvbmFsaXR5LCBhbmQgZW5hYmxlcyAnc3RhbmRhbG9uZScgPEJyZWFrcG9pbnQvPnNcbi8vIEFsc28gcHJvdmlkZXMgYmFja3dhcmQtY29tcGF0aWJpbGl0eSB3aXRoIEREQnJlYWtwb2ludHMgb3JpZ2luYWwgJ2JwKCknIG1peGluXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuZXhwb3J0IGNvbnN0IEJyb3dzZXJCcmVha3BvaW50cyA9ICh7IGNoaWxkcmVuLCAuLi5icGNQcm9wcyB9KSA9PiAoXG5cdDxCcmVha3BvaW50Q29udGFpbmVyXG5cdFx0aWRlbnRpZmllcj17SURfQlJPV1NFUn1cblx0XHRjbGFzc05hbWU9e1NFTEVDVE9SUy5CUF9CUk9XU0VSfVxuXHRcdGRlYnVnPXtERUJVR19CUk9XU0VSfVxuXHRcdHsuLi5icGNQcm9wc31cblx0PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L0JyZWFrcG9pbnRDb250YWluZXI+XG4pO1xuIl19