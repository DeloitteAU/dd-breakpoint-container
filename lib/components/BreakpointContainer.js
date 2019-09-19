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
import '../css/debug.css'; // ------------------------
// Variables
// ------------------------

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
// Export
// ------------------------

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
      var matchingBps = Object.keys(BREAKPOINTS).filter(function (bpName) {
        return _this2.state.size >= BREAKPOINTS[bpName];
      });
      var currentBp = matchingBps[matchingBps.length - 1]; // Formatted breakpoints for className output

      var classBps = matchingBps.map(function (bpName) {
        return "".concat(CLASSES.BP_PREFIX).concat(bpName);
      }).join(' '); // Debug mode - component flag, and account for opt-out of global flag

      var isDebugActive = debug || debug !== false && DEBUG_BPC;
      return React.createElement("div", {
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
          lineNumber: 115
        },
        __self: this
      }), React.createElement("div", {
        className: cx(SELECTORS.BP_CONTENT, className),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, React.createElement(WithContext, Object.assign({
        identifier: identifier,
        currentBp: currentBp
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), typeof children === 'function' ? children(currentBp, this.state.size) : children)), isDebugActive && React.createElement(React.Fragment, null, React.createElement("span", {
        className: SELECTORS.DEBUG_INDICATOR,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, currentBp || 'none'), identifier !== ID_DEFAULT && identifier !== ID_BROWSER && React.createElement("span", {
        className: SELECTORS.DEBUG_IDENTIFIER,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, identifier)));
    }
  }]);

  return BreakpointContainer;
}(React.Component);

BreakpointContainer.propTypes = {
  className: T.string,
  containerClass: T.string,
  children: T.oneOfType([T.node, T.func]).isRequired,
  identifier: T.string,
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
export { BreakpointContainer as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnRDb250YWluZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiY3giLCJSZWFjdFJlc2l6ZURldGVjdG9yIiwiV2l0aENvbnRleHQiLCJJRF9ERUZBVUxUIiwiSURfQlJPV1NFUiIsIkJSRUFLUE9JTlRTIiwiREVCVUdfQlBDIiwiQ0xBU1NFUyIsIkNPUkUiLCJCUF9QUkVGSVgiLCJERUJVR19NT0RJRklFUiIsIlNFTEVDVE9SUyIsIkJQX0JST1dTRVIiLCJCUF9DT05URU5UIiwiREVCVUdfSU5ESUNBVE9SIiwiREVCVUdfSURFTlRJRklFUiIsIkJyZWFrcG9pbnRDb250YWluZXIiLCJzdGF0ZSIsInNpemUiLCJjdXJyZW50QnAiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiaWRlbnRpZmllciIsImNsYXNzTmFtZSIsImNvbnRhaW5lckNsYXNzIiwibm9CcENsYXNzZXMiLCJkZWJ1ZyIsImNoaWxkcmVuIiwibWF0Y2hpbmdCcHMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwiYnBOYW1lIiwibGVuZ3RoIiwiY2xhc3NCcHMiLCJtYXAiLCJqb2luIiwiaXNEZWJ1Z0FjdGl2ZSIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2ZUeXBlIiwibm9kZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLENBQVAsTUFBYyxZQUFkO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7QUFDQSxPQUFPQyxtQkFBUCxNQUFnQyx1QkFBaEM7QUFFQSxTQUFTQyxXQUFULEVBQXNCQyxVQUF0QixFQUFrQ0MsVUFBbEMsUUFBb0QsY0FBcEQ7QUFDQSxTQUFTQyxXQUFU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QkMsVUFIdEI7QUFJbEJ2QixFQUFBQSxVQUFVLEVBQUV6QixDQUFDLENBQUM0QyxNQUpJO0FBTWxCO0FBQ0FwQixFQUFBQSxRQUFRLEVBQUV4QixDQUFDLENBQUMrQyxJQVBNO0FBU2xCO0FBQ0FsQixFQUFBQSxLQUFLLEVBQUU3QixDQUFDLENBQUNpRCxJQVZTO0FBV2xCckIsRUFBQUEsV0FBVyxFQUFFNUIsQ0FBQyxDQUFDaUQ7QUFYRyxDO0FBRENoQyxtQixDQWViaUMsWSxHQUFlO0FBQ3JCeEIsRUFBQUEsU0FBUyxFQUFFLElBRFU7QUFFckJDLEVBQUFBLGNBQWMsRUFBRSxJQUZLO0FBR3JCRixFQUFBQSxVQUFVLEVBQUVyQixVQUhTO0FBS3JCb0IsRUFBQUEsUUFBUSxFQUFFLElBTFc7QUFPckI7QUFDQUssRUFBQUEsS0FBSyxFQUFFLElBUmM7QUFTckJELEVBQUFBLFdBQVcsRUFBRTtBQVRRLEM7U0FmRlgsbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFQgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3RSZXNpemVEZXRlY3RvciBmcm9tICdyZWFjdC1yZXNpemUtZGV0ZWN0b3InO1xuXG5pbXBvcnQgeyBXaXRoQ29udGV4dCwgSURfREVGQVVMVCwgSURfQlJPV1NFUiB9IGZyb20gJy4vQ29udGV4dC5qcyc7XG5pbXBvcnQgeyBCUkVBS1BPSU5UUyB9IGZyb20gJy4uL2RhdGEvYnJlYWtwb2ludHMuanMnO1xuXG5pbXBvcnQgJy4uL2Nzcy9kZWJ1Zy5jc3MnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFZhcmlhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IERFQlVHX0JQQyA9IGZhbHNlO1xuXG4vLyBOT1RFOiBJZiB5b3UncmUgZ29pbmcgdG8gY2hhbmdlIGFueSBDTEFTU0VTIG9yIFNFTEVDVE9SUywgeW91J2xsXG4vLyBuZWVkIHRvIGFsc28gY2hhbmdlIHRoZSAgY29ycmVzcG9uZGluZyB2YXJpYWJsZXMgaW4gdGhlIFNDU1MgZmlsZVxuY29uc3QgQ0xBU1NFUyA9IHtcblx0Q09SRTogJ2JwYycsXG5cdEJQX1BSRUZJWDogJy0nLFxuXHRERUJVR19NT0RJRklFUjogJy1kZWJ1ZycsXG59O1xuXG5jb25zdCBTRUxFQ1RPUlMgPSB7XG5cdEJQX0JST1dTRVI6IGAke0NMQVNTRVMuQ09SRX1fX2Jyb3dzZXJgLFxuXHRCUF9DT05URU5UOiBgJHtDTEFTU0VTLkNPUkV9X19jb250ZW50YCxcblx0REVCVUdfSU5ESUNBVE9SOiBgJHtDTEFTU0VTLkNPUkV9X19kZWJ1Z0luZGljYXRvcmAsXG5cdERFQlVHX0lERU5USUZJRVI6IGAke0NMQVNTRVMuQ09SRX1fX2RlYnVnSWRlbnRpZmllcmAsXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyZWFrcG9pbnRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGNsYXNzTmFtZTogVC5zdHJpbmcsXG5cdFx0Y29udGFpbmVyQ2xhc3M6IFQuc3RyaW5nLFxuXHRcdGNoaWxkcmVuOiBULm9uZU9mVHlwZShbVC5ub2RlLCBULmZ1bmNdKS5pc1JlcXVpcmVkLFxuXHRcdGlkZW50aWZpZXI6IFQuc3RyaW5nLFxuXG5cdFx0Ly8gQ2FsbGJhY2tzXG5cdFx0b25DaGFuZ2U6IFQuZnVuYyxcblxuXHRcdC8vIEZsYWdzXG5cdFx0ZGVidWc6IFQuYm9vbCxcblx0XHRub0JwQ2xhc3NlczogVC5ib29sLFxuXHR9O1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBudWxsLFxuXHRcdGNvbnRhaW5lckNsYXNzOiBudWxsLFxuXHRcdGlkZW50aWZpZXI6IElEX0RFRkFVTFQsXG5cblx0XHRvbkNoYW5nZTogbnVsbCxcblxuXHRcdC8vIERlYnVnIG51bGwgaW5zdGVhZCBvZiBmYWxzZSBzbyB3ZSBjYW4gb3B0LW91dCBvZiBnbG9iYWwgZGVidWdcblx0XHRkZWJ1ZzogbnVsbCxcblx0XHRub0JwQ2xhc3NlczogZmFsc2UsXG5cdH07XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaXplOiAwLFxuXHRcdFx0Y3VycmVudEJwOiBudWxsLFxuXHRcdH07XG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcblx0XHQvLyBDaGVjayBpZiBicCBjaGFuZ2VkIHRvIHN1cHBvcnQgJ29uQ2hhbmdlJyBjYWxsYmFja1xuXHRcdGlmIChcblx0XHRcdHR5cGVvZiB0aGlzLnByb3BzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nICYmXG5cdFx0XHR0aGlzLnN0YXRlLmN1cnJlbnRCcCAhPT0gcHJldlN0YXRlLmN1cnJlbnRCcFxuXHRcdCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlLmN1cnJlbnRCcCk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGlkZW50aWZpZXIsXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRjb250YWluZXJDbGFzcyxcblx0XHRcdG5vQnBDbGFzc2VzLFxuXHRcdFx0ZGVidWcsXG5cdFx0XHRjaGlsZHJlbixcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IG1hdGNoaW5nQnBzID0gT2JqZWN0LmtleXMoQlJFQUtQT0lOVFMpLmZpbHRlcihcblx0XHRcdGJwTmFtZSA9PiB0aGlzLnN0YXRlLnNpemUgPj0gQlJFQUtQT0lOVFNbYnBOYW1lXSxcblx0XHQpO1xuXHRcdGNvbnN0IGN1cnJlbnRCcCA9IG1hdGNoaW5nQnBzW21hdGNoaW5nQnBzLmxlbmd0aCAtIDFdO1xuXG5cdFx0Ly8gRm9ybWF0dGVkIGJyZWFrcG9pbnRzIGZvciBjbGFzc05hbWUgb3V0cHV0XG5cdFx0Y29uc3QgY2xhc3NCcHMgPSBtYXRjaGluZ0Jwc1xuXHRcdFx0Lm1hcChicE5hbWUgPT4gYCR7Q0xBU1NFUy5CUF9QUkVGSVh9JHticE5hbWV9YClcblx0XHRcdC5qb2luKCcgJyk7XG5cblx0XHQvLyBEZWJ1ZyBtb2RlIC0gY29tcG9uZW50IGZsYWcsIGFuZCBhY2NvdW50IGZvciBvcHQtb3V0IG9mIGdsb2JhbCBmbGFnXG5cdFx0Y29uc3QgaXNEZWJ1Z0FjdGl2ZSA9IGRlYnVnIHx8IChkZWJ1ZyAhPT0gZmFsc2UgJiYgREVCVUdfQlBDKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17Y3goQ0xBU1NFUy5DT1JFLCBjb250YWluZXJDbGFzcywge1xuXHRcdFx0XHRcdFtjbGFzc0Jwc106ICFub0JwQ2xhc3Nlcyxcblx0XHRcdFx0XHRbQ0xBU1NFUy5ERUJVR19NT0RJRklFUl06IGlzRGVidWdBY3RpdmUsXG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUgYXJlIG5vIGNsYXNzIG5hbWUgb3V0cHV0cywgQlVUIGRlYnVnIG1vZGUgaXMgb24sXG5cdFx0XHRcdFx0Ly8gcmVuZGVyIHRoZSBhY3RpdmUgYnAgYXMgYSBjbGFzcyB0byBlbmFibGUgQ1NTIGRlYnVnIGluZGljYXRvclxuXHRcdFx0XHRcdFtgJHtDTEFTU0VTLkJQX1BSRUZJWH0ke2N1cnJlbnRCcH1gXTogZGVidWcgJiYgbm9CcENsYXNzZXMsXG5cdFx0XHRcdH0pfVxuXHRcdFx0PlxuXHRcdFx0XHQ8UmVhY3RSZXNpemVEZXRlY3RvclxuXHRcdFx0XHRcdGhhbmRsZVdpZHRoXG5cdFx0XHRcdFx0b25SZXNpemU9e3NpemUgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpemUsIGN1cnJlbnRCcCB9KX1cblx0XHRcdFx0Lz5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goU0VMRUNUT1JTLkJQX0NPTlRFTlQsIGNsYXNzTmFtZSl9PlxuXHRcdFx0XHRcdDxXaXRoQ29udGV4dCB7Li4ueyBpZGVudGlmaWVyLCBjdXJyZW50QnAgfX0+XG5cdFx0XHRcdFx0XHR7dHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nXG5cdFx0XHRcdFx0XHRcdD8gY2hpbGRyZW4oY3VycmVudEJwLCB0aGlzLnN0YXRlLnNpemUpXG5cdFx0XHRcdFx0XHRcdDogY2hpbGRyZW59XG5cdFx0XHRcdFx0PC9XaXRoQ29udGV4dD5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0e2lzRGVidWdBY3RpdmUgJiYgKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1NFTEVDVE9SUy5ERUJVR19JTkRJQ0FUT1J9PlxuXHRcdFx0XHRcdFx0XHR7Y3VycmVudEJwIHx8ICdub25lJ31cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdHtpZGVudGlmaWVyICE9PSBJRF9ERUZBVUxUICYmIGlkZW50aWZpZXIgIT09IElEX0JST1dTRVIgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1NFTEVDVE9SUy5ERUJVR19JREVOVElGSUVSfT57aWRlbnRpZmllcn08L3NwYW4+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuIl19