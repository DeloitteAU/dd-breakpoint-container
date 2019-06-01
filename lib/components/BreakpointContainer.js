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
      var matchingBps = Object.keys(BREAKPOINTS).filter(function (bp) {
        return _this2.state.size >= BREAKPOINTS[bp];
      });
      var currentBp = matchingBps[matchingBps.length - 1]; // Formatted breakpoints for className output

      var classBps = matchingBps.map(function (bp) {
        return "".concat(CLASSES.BP_PREFIX).concat(bp);
      }).join(' '); // Debug mode - component flag, and account for opt-out of global flag

      var isDebugActive = debug || debug !== false && DEBUG_BPC;
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: cx(CLASSES.CORE, containerClass, (_cx = {}, _defineProperty(_cx, classBps, !noBpClasses), _defineProperty(_cx, CLASSES.DEBUG_MODIFIER, isDebugActive), _defineProperty(_cx, "".concat(CLASSES.BP_PREFIX).concat(currentBp), debug && noBpClasses), _cx)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
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
      }), typeof children === 'function' ? children(currentBp, this.state.size) : children)), isDebugActive && React.createElement(React.Fragment, null, React.createElement("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnRDb250YWluZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiY3giLCJSZWFjdFJlc2l6ZURldGVjdG9yIiwiV2l0aENvbnRleHQiLCJJRF9ERUZBVUxUIiwiSURfQlJPV1NFUiIsIkJSRUFLUE9JTlRTIiwiREVCVUdfQlBDIiwiQ0xBU1NFUyIsIkNPUkUiLCJCUF9QUkVGSVgiLCJERUJVR19NT0RJRklFUiIsIlNFTEVDVE9SUyIsIkJQX0JST1dTRVIiLCJCUF9DT05URU5UIiwiREVCVUdfSU5ESUNBVE9SIiwiREVCVUdfSURFTlRJRklFUiIsIkJyZWFrcG9pbnRDb250YWluZXIiLCJzdGF0ZSIsInNpemUiLCJjdXJyZW50QnAiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiaWRlbnRpZmllciIsImNsYXNzTmFtZSIsImNvbnRhaW5lckNsYXNzIiwibm9CcENsYXNzZXMiLCJkZWJ1ZyIsImNoaWxkcmVuIiwibWF0Y2hpbmdCcHMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwiYnAiLCJsZW5ndGgiLCJjbGFzc0JwcyIsIm1hcCIsImpvaW4iLCJpc0RlYnVnQWN0aXZlIiwic2V0U3RhdGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsQ0FBUCxNQUFjLFlBQWQ7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHVCQUFoQztBQUVBLFNBQVNDLFdBQVQsRUFBc0JDLFVBQXRCLEVBQWtDQyxVQUFsQyxRQUFvRCxjQUFwRDtBQUNBLFNBQVNDLFdBQVQsUUFB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QUFaLEVBQThCQyxVQUh0QjtBQUlsQnZCLEVBQUFBLFVBQVUsRUFBRXpCLENBQUMsQ0FBQzRDLE1BSkk7QUFNbEI7QUFDQXBCLEVBQUFBLFFBQVEsRUFBRXhCLENBQUMsQ0FBQytDLElBUE07QUFTbEI7QUFDQWxCLEVBQUFBLEtBQUssRUFBRTdCLENBQUMsQ0FBQ2lELElBVlM7QUFXbEJyQixFQUFBQSxXQUFXLEVBQUU1QixDQUFDLENBQUNpRDtBQVhHLEM7QUFEQ2hDLG1CLENBZWJpQyxZLEdBQWU7QUFDckJ4QixFQUFBQSxTQUFTLEVBQUUsSUFEVTtBQUVyQkMsRUFBQUEsY0FBYyxFQUFFLElBRks7QUFHckJGLEVBQUFBLFVBQVUsRUFBRXJCLFVBSFM7QUFLckJvQixFQUFBQSxRQUFRLEVBQUUsSUFMVztBQU9yQjtBQUNBSyxFQUFBQSxLQUFLLEVBQUUsSUFSYztBQVNyQkQsRUFBQUEsV0FBVyxFQUFFO0FBVFEsQztTQWZGWCxtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVCBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdFJlc2l6ZURldGVjdG9yIGZyb20gJ3JlYWN0LXJlc2l6ZS1kZXRlY3Rvcic7XG5cbmltcG9ydCB7IFdpdGhDb250ZXh0LCBJRF9ERUZBVUxULCBJRF9CUk9XU0VSIH0gZnJvbSAnLi9Db250ZXh0LmpzJztcbmltcG9ydCB7IEJSRUFLUE9JTlRTIH0gZnJvbSAnLi4vZGF0YS9icmVha3BvaW50cy5qcyc7XG5cbmltcG9ydCAnLi4vY3NzL2RlYnVnLmNzcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVmFyaWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgREVCVUdfQlBDID0gZmFsc2U7XG5cbi8vIE5PVEU6IElmIHlvdSdyZSBnb2luZyB0byBjaGFuZ2UgYW55IENMQVNTRVMgb3IgU0VMRUNUT1JTLCB5b3UnbGxcbi8vIG5lZWQgdG8gYWxzbyBjaGFuZ2UgdGhlICBjb3JyZXNwb25kaW5nIHZhcmlhYmxlcyBpbiB0aGUgU0NTUyBmaWxlXG5jb25zdCBDTEFTU0VTID0ge1xuXHRDT1JFOiAnYnBjJyxcblx0QlBfUFJFRklYOiAnLScsXG5cdERFQlVHX01PRElGSUVSOiAnLWRlYnVnJyxcbn07XG5cbmNvbnN0IFNFTEVDVE9SUyA9IHtcblx0QlBfQlJPV1NFUjogYCR7Q0xBU1NFUy5DT1JFfV9fYnJvd3NlcmAsXG5cdEJQX0NPTlRFTlQ6IGAke0NMQVNTRVMuQ09SRX1fX2NvbnRlbnRgLFxuXHRERUJVR19JTkRJQ0FUT1I6IGAke0NMQVNTRVMuQ09SRX1fX2RlYnVnSW5kaWNhdG9yYCxcblx0REVCVUdfSURFTlRJRklFUjogYCR7Q0xBU1NFUy5DT1JFfV9fZGVidWdJZGVudGlmaWVyYCxcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJlYWtwb2ludENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBULnN0cmluZyxcblx0XHRjb250YWluZXJDbGFzczogVC5zdHJpbmcsXG5cdFx0Y2hpbGRyZW46IFQub25lT2ZUeXBlKFtULm5vZGUsIFQuZnVuY10pLmlzUmVxdWlyZWQsXG5cdFx0aWRlbnRpZmllcjogVC5zdHJpbmcsXG5cblx0XHQvLyBDYWxsYmFja3Ncblx0XHRvbkNoYW5nZTogVC5mdW5jLFxuXG5cdFx0Ly8gRmxhZ3Ncblx0XHRkZWJ1ZzogVC5ib29sLFxuXHRcdG5vQnBDbGFzc2VzOiBULmJvb2wsXG5cdH07XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcblx0XHRjbGFzc05hbWU6IG51bGwsXG5cdFx0Y29udGFpbmVyQ2xhc3M6IG51bGwsXG5cdFx0aWRlbnRpZmllcjogSURfREVGQVVMVCxcblxuXHRcdG9uQ2hhbmdlOiBudWxsLFxuXG5cdFx0Ly8gRGVidWcgbnVsbCBpbnN0ZWFkIG9mIGZhbHNlIHNvIHdlIGNhbiBvcHQtb3V0IG9mIGdsb2JhbCBkZWJ1Z1xuXHRcdGRlYnVnOiBudWxsLFxuXHRcdG5vQnBDbGFzc2VzOiBmYWxzZSxcblx0fTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNpemU6IDAsXG5cdFx0XHRjdXJyZW50QnA6IG51bGwsXG5cdFx0fTtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXHRcdC8vIENoZWNrIGlmIGJwIGNoYW5nZWQgdG8gc3VwcG9ydCAnb25DaGFuZ2UnIGNhbGxiYWNrXG5cdFx0aWYgKFxuXHRcdFx0dHlwZW9mIHRoaXMucHJvcHMub25DaGFuZ2UgPT09ICdmdW5jdGlvbicgJiZcblx0XHRcdHRoaXMuc3RhdGUuY3VycmVudEJwICE9PSBwcmV2U3RhdGUuY3VycmVudEJwXG5cdFx0KSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuc3RhdGUuY3VycmVudEJwKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0aWRlbnRpZmllcixcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdGNvbnRhaW5lckNsYXNzLFxuXHRcdFx0bm9CcENsYXNzZXMsXG5cdFx0XHRkZWJ1Zyxcblx0XHRcdGNoaWxkcmVuLFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgbWF0Y2hpbmdCcHMgPSBPYmplY3Qua2V5cyhCUkVBS1BPSU5UUykuZmlsdGVyKFxuXHRcdFx0YnAgPT4gdGhpcy5zdGF0ZS5zaXplID49IEJSRUFLUE9JTlRTW2JwXSxcblx0XHQpO1xuXHRcdGNvbnN0IGN1cnJlbnRCcCA9IG1hdGNoaW5nQnBzW21hdGNoaW5nQnBzLmxlbmd0aCAtIDFdO1xuXG5cdFx0Ly8gRm9ybWF0dGVkIGJyZWFrcG9pbnRzIGZvciBjbGFzc05hbWUgb3V0cHV0XG5cdFx0Y29uc3QgY2xhc3NCcHMgPSBtYXRjaGluZ0Jwc1xuXHRcdFx0Lm1hcChicCA9PiBgJHtDTEFTU0VTLkJQX1BSRUZJWH0ke2JwfWApXG5cdFx0XHQuam9pbignICcpO1xuXG5cdFx0Ly8gRGVidWcgbW9kZSAtIGNvbXBvbmVudCBmbGFnLCBhbmQgYWNjb3VudCBmb3Igb3B0LW91dCBvZiBnbG9iYWwgZmxhZ1xuXHRcdGNvbnN0IGlzRGVidWdBY3RpdmUgPSBkZWJ1ZyB8fCAoZGVidWcgIT09IGZhbHNlICYmIERFQlVHX0JQQyk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y3goQ0xBU1NFUy5DT1JFLCBjb250YWluZXJDbGFzcywge1xuXHRcdFx0XHRcdFx0W2NsYXNzQnBzXTogIW5vQnBDbGFzc2VzLFxuXHRcdFx0XHRcdFx0W0NMQVNTRVMuREVCVUdfTU9ESUZJRVJdOiBpc0RlYnVnQWN0aXZlLFxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlcmUgYXJlIG5vIGNsYXNzIG5hbWUgb3V0cHV0cywgQlVUIGRlYnVnIG1vZGUgaXMgb24sXG5cdFx0XHRcdFx0XHQvLyByZW5kZXIgdGhlIGFjdGl2ZSBicCBhcyBhIGNsYXNzIHRvIGVuYWJsZSBDU1MgZGVidWcgaW5kaWNhdG9yXG5cdFx0XHRcdFx0XHRbYCR7Q0xBU1NFUy5CUF9QUkVGSVh9JHtjdXJyZW50QnB9YF06IGRlYnVnICYmIG5vQnBDbGFzc2VzLFxuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFJlYWN0UmVzaXplRGV0ZWN0b3Jcblx0XHRcdFx0XHRcdGhhbmRsZVdpZHRoXG5cdFx0XHRcdFx0XHRvblJlc2l6ZT17c2l6ZSA9PiB0aGlzLnNldFN0YXRlKHsgc2l6ZSwgY3VycmVudEJwIH0pfVxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goU0VMRUNUT1JTLkJQX0NPTlRFTlQsIGNsYXNzTmFtZSl9PlxuXHRcdFx0XHRcdFx0PFdpdGhDb250ZXh0IHsuLi57IGlkZW50aWZpZXIsIGN1cnJlbnRCcCB9fT5cblx0XHRcdFx0XHRcdFx0e3R5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHRcdFx0XHRcdD8gY2hpbGRyZW4oY3VycmVudEJwLCB0aGlzLnN0YXRlLnNpemUpXG5cdFx0XHRcdFx0XHRcdFx0OiBjaGlsZHJlbn1cblx0XHRcdFx0XHRcdDwvV2l0aENvbnRleHQ+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHR7aXNEZWJ1Z0FjdGl2ZSAmJiAoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1NFTEVDVE9SUy5ERUJVR19JTkRJQ0FUT1J9PlxuXHRcdFx0XHRcdFx0XHRcdHtjdXJyZW50QnAgfHwgJ25vbmUnfVxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdHtpZGVudGlmaWVyICE9PSBJRF9ERUZBVUxUICYmIGlkZW50aWZpZXIgIT09IElEX0JST1dTRVIgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17U0VMRUNUT1JTLkRFQlVHX0lERU5USUZJRVJ9PntpZGVudGlmaWVyfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC8+XG5cdFx0KTtcblx0fVxufVxuIl19