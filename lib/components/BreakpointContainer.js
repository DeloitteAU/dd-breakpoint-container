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
import { BREAKPOINTS } from '../data/breakpoints.js';
import { WithContext, ID_DEFAULT, ID_BROWSER } from './Context.js';
import '../css/debug.css'; // ------------------------
// Variables
// ------------------------

var DEBUG_BPC = false; // Although these root Contexts are used in <BrowserContainer/>, they
// are defined here to avoid circular dependencies (via `import ...`)

export var BreakpointDefinitions = React.createContext(BREAKPOINTS);
export var AppBreakpoint = React.createContext(); // NOTE: If you're going to change any CLASSES or SELECTORS, you'll
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
      size: null,
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
      var _this2 = this;

      var _this$props = this.props,
          identifier = _this$props.identifier,
          className = _this$props.className,
          containerClass = _this$props.containerClass,
          noBpClasses = _this$props.noBpClasses,
          debug = _this$props.debug,
          customBreakpoints = _this$props.customBreakpoints,
          children = _this$props.children; // Debug mode - component flag, and account for opt-out of global flag

      var isDebugActive = debug || debug !== false && DEBUG_BPC;
      return React.createElement(BreakpointDefinitions.Consumer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, function (breakpoints) {
        var _cx;

        var breakpointList = customBreakpoints || breakpoints;
        var matchingBps = Object.keys(breakpointList).filter(function (bpName) {
          return _this2.state.size >= breakpointList[bpName];
        });
        var currentBp = matchingBps[matchingBps.length - 1]; // Formatted breakpoints for className output

        var classBps = matchingBps.map(function (bpName) {
          return "".concat(CLASSES.BP_PREFIX).concat(bpName);
        }).join(' ');
        return React.createElement("div", {
          className: cx(CLASSES.CORE, containerClass, (_cx = {}, _defineProperty(_cx, classBps, !noBpClasses), _defineProperty(_cx, CLASSES.DEBUG_MODIFIER, isDebugActive), _defineProperty(_cx, "".concat(CLASSES.BP_PREFIX).concat(currentBp), debug && noBpClasses), _cx)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
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
            lineNumber: 130
          },
          __self: this
        }), _this2.state.size !== null && React.createElement(React.Fragment, null, React.createElement("div", {
          className: cx(SELECTORS.BP_CONTENT, className),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, React.createElement(WithContext, Object.assign({
          identifier: identifier,
          currentBp: currentBp
        }, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }), typeof children === 'function' ? children(currentBp, _this2.state.size) : children)), isDebugActive && React.createElement(React.Fragment, null, React.createElement("span", {
          className: SELECTORS.DEBUG_INDICATOR,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, currentBp || 'none'), identifier !== ID_DEFAULT && identifier !== ID_BROWSER && React.createElement("span", {
          className: SELECTORS.DEBUG_IDENTIFIER,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, identifier))));
      });
    }
  }]);

  return BreakpointContainer;
}(React.Component);

BreakpointContainer.propTypes = {
  className: T.string,
  containerClass: T.string,
  children: T.oneOfType([T.node, T.func]).isRequired,
  identifier: T.string,
  customBreakpoints: T.object,
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
  customBreakpoints: null,
  onChange: null,
  // Debug null instead of false so we can opt-out of global debug
  debug: null,
  noBpClasses: false
};
export { BreakpointContainer as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnRDb250YWluZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiY3giLCJSZWFjdFJlc2l6ZURldGVjdG9yIiwiQlJFQUtQT0lOVFMiLCJXaXRoQ29udGV4dCIsIklEX0RFRkFVTFQiLCJJRF9CUk9XU0VSIiwiREVCVUdfQlBDIiwiQnJlYWtwb2ludERlZmluaXRpb25zIiwiY3JlYXRlQ29udGV4dCIsIkFwcEJyZWFrcG9pbnQiLCJDTEFTU0VTIiwiQ09SRSIsIkJQX1BSRUZJWCIsIkRFQlVHX01PRElGSUVSIiwiU0VMRUNUT1JTIiwiQlBfQlJPV1NFUiIsIkJQX0NPTlRFTlQiLCJERUJVR19JTkRJQ0FUT1IiLCJERUJVR19JREVOVElGSUVSIiwiQnJlYWtwb2ludENvbnRhaW5lciIsInN0YXRlIiwic2l6ZSIsImN1cnJlbnRCcCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInByb3BzIiwib25DaGFuZ2UiLCJpZGVudGlmaWVyIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQ2xhc3MiLCJub0JwQ2xhc3NlcyIsImRlYnVnIiwiY3VzdG9tQnJlYWtwb2ludHMiLCJjaGlsZHJlbiIsImlzRGVidWdBY3RpdmUiLCJicmVha3BvaW50cyIsImJyZWFrcG9pbnRMaXN0IiwibWF0Y2hpbmdCcHMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwiYnBOYW1lIiwibGVuZ3RoIiwiY2xhc3NCcHMiLCJtYXAiLCJqb2luIiwic2V0U3RhdGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsQ0FBUCxNQUFjLFlBQWQ7QUFDQSxPQUFP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QUUsSUFWYztBQVdyQkQsRUFBQUEsV0FBVyxFQUFFO0FBWFEsQztTQWpCRlgsbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFQgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3RSZXNpemVEZXRlY3RvciBmcm9tICdyZWFjdC1yZXNpemUtZGV0ZWN0b3InO1xuXG5pbXBvcnQgeyBCUkVBS1BPSU5UUyB9IGZyb20gJy4uL2RhdGEvYnJlYWtwb2ludHMuanMnO1xuaW1wb3J0IHsgV2l0aENvbnRleHQsIElEX0RFRkFVTFQsIElEX0JST1dTRVIgfSBmcm9tICcuL0NvbnRleHQuanMnO1xuXG5pbXBvcnQgJy4uL2Nzcy9kZWJ1Zy5jc3MnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFZhcmlhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IERFQlVHX0JQQyA9IGZhbHNlO1xuXG4vLyBBbHRob3VnaCB0aGVzZSByb290IENvbnRleHRzIGFyZSB1c2VkIGluIDxCcm93c2VyQ29udGFpbmVyLz4sIHRoZXlcbi8vIGFyZSBkZWZpbmVkIGhlcmUgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzICh2aWEgYGltcG9ydCAuLi5gKVxuZXhwb3J0IGNvbnN0IEJyZWFrcG9pbnREZWZpbml0aW9ucyA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoQlJFQUtQT0lOVFMpO1xuZXhwb3J0IGNvbnN0IEFwcEJyZWFrcG9pbnQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbi8vIE5PVEU6IElmIHlvdSdyZSBnb2luZyB0byBjaGFuZ2UgYW55IENMQVNTRVMgb3IgU0VMRUNUT1JTLCB5b3UnbGxcbi8vIG5lZWQgdG8gYWxzbyBjaGFuZ2UgdGhlICBjb3JyZXNwb25kaW5nIHZhcmlhYmxlcyBpbiB0aGUgU0NTUyBmaWxlXG5jb25zdCBDTEFTU0VTID0ge1xuXHRDT1JFOiAnYnBjJyxcblx0QlBfUFJFRklYOiAnLScsXG5cdERFQlVHX01PRElGSUVSOiAnLWRlYnVnJyxcbn07XG5cbmNvbnN0IFNFTEVDVE9SUyA9IHtcblx0QlBfQlJPV1NFUjogYCR7Q0xBU1NFUy5DT1JFfV9fYnJvd3NlcmAsXG5cdEJQX0NPTlRFTlQ6IGAke0NMQVNTRVMuQ09SRX1fX2NvbnRlbnRgLFxuXHRERUJVR19JTkRJQ0FUT1I6IGAke0NMQVNTRVMuQ09SRX1fX2RlYnVnSW5kaWNhdG9yYCxcblx0REVCVUdfSURFTlRJRklFUjogYCR7Q0xBU1NFUy5DT1JFfV9fZGVidWdJZGVudGlmaWVyYCxcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJlYWtwb2ludENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBULnN0cmluZyxcblx0XHRjb250YWluZXJDbGFzczogVC5zdHJpbmcsXG5cdFx0Y2hpbGRyZW46IFQub25lT2ZUeXBlKFtULm5vZGUsIFQuZnVuY10pLmlzUmVxdWlyZWQsXG5cdFx0aWRlbnRpZmllcjogVC5zdHJpbmcsXG5cblx0XHRjdXN0b21CcmVha3BvaW50czogVC5vYmplY3QsXG5cblx0XHQvLyBDYWxsYmFja3Ncblx0XHRvbkNoYW5nZTogVC5mdW5jLFxuXG5cdFx0Ly8gRmxhZ3Ncblx0XHRkZWJ1ZzogVC5ib29sLFxuXHRcdG5vQnBDbGFzc2VzOiBULmJvb2wsXG5cdH07XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcblx0XHRjbGFzc05hbWU6IG51bGwsXG5cdFx0Y29udGFpbmVyQ2xhc3M6IG51bGwsXG5cdFx0aWRlbnRpZmllcjogSURfREVGQVVMVCxcblxuXHRcdGN1c3RvbUJyZWFrcG9pbnRzOiBudWxsLFxuXG5cdFx0b25DaGFuZ2U6IG51bGwsXG5cblx0XHQvLyBEZWJ1ZyBudWxsIGluc3RlYWQgb2YgZmFsc2Ugc28gd2UgY2FuIG9wdC1vdXQgb2YgZ2xvYmFsIGRlYnVnXG5cdFx0ZGVidWc6IG51bGwsXG5cdFx0bm9CcENsYXNzZXM6IGZhbHNlLFxuXHR9O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2l6ZTogbnVsbCxcblx0XHRcdGN1cnJlbnRCcDogbnVsbCxcblx0XHR9O1xuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cdFx0Ly8gQ2hlY2sgaWYgYnAgY2hhbmdlZCB0byBzdXBwb3J0ICdvbkNoYW5nZScgY2FsbGJhY2tcblx0XHRpZiAoXG5cdFx0XHR0eXBlb2YgdGhpcy5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdFx0dGhpcy5zdGF0ZS5jdXJyZW50QnAgIT09IHByZXZTdGF0ZS5jdXJyZW50QnBcblx0XHQpIHtcblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5zdGF0ZS5jdXJyZW50QnApO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRpZGVudGlmaWVyLFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0Y29udGFpbmVyQ2xhc3MsXG5cdFx0XHRub0JwQ2xhc3Nlcyxcblx0XHRcdGRlYnVnLFxuXHRcdFx0Y3VzdG9tQnJlYWtwb2ludHMsXG5cdFx0XHRjaGlsZHJlbixcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdC8vIERlYnVnIG1vZGUgLSBjb21wb25lbnQgZmxhZywgYW5kIGFjY291bnQgZm9yIG9wdC1vdXQgb2YgZ2xvYmFsIGZsYWdcblx0XHRjb25zdCBpc0RlYnVnQWN0aXZlID0gZGVidWcgfHwgKGRlYnVnICE9PSBmYWxzZSAmJiBERUJVR19CUEMpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxCcmVha3BvaW50RGVmaW5pdGlvbnMuQ29uc3VtZXI+XG5cdFx0XHRcdHticmVha3BvaW50cyA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgYnJlYWtwb2ludExpc3QgPSBjdXN0b21CcmVha3BvaW50cyB8fCBicmVha3BvaW50cztcblxuXHRcdFx0XHRcdGNvbnN0IG1hdGNoaW5nQnBzID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludExpc3QpLmZpbHRlcihcblx0XHRcdFx0XHRcdGJwTmFtZSA9PiB0aGlzLnN0YXRlLnNpemUgPj0gYnJlYWtwb2ludExpc3RbYnBOYW1lXSxcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGNvbnN0IGN1cnJlbnRCcCA9IG1hdGNoaW5nQnBzW21hdGNoaW5nQnBzLmxlbmd0aCAtIDFdO1xuXG5cdFx0XHRcdFx0Ly8gRm9ybWF0dGVkIGJyZWFrcG9pbnRzIGZvciBjbGFzc05hbWUgb3V0cHV0XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NCcHMgPSBtYXRjaGluZ0Jwc1xuXHRcdFx0XHRcdFx0Lm1hcChicE5hbWUgPT4gYCR7Q0xBU1NFUy5CUF9QUkVGSVh9JHticE5hbWV9YClcblx0XHRcdFx0XHRcdC5qb2luKCcgJyk7XG5cblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2N4KENMQVNTRVMuQ09SRSwgY29udGFpbmVyQ2xhc3MsIHtcblx0XHRcdFx0XHRcdFx0XHRbY2xhc3NCcHNdOiAhbm9CcENsYXNzZXMsXG5cdFx0XHRcdFx0XHRcdFx0W0NMQVNTRVMuREVCVUdfTU9ESUZJRVJdOiBpc0RlYnVnQWN0aXZlLFxuXHRcdFx0XHRcdFx0XHRcdC8vIElmIHRoZXJlIGFyZSBubyBjbGFzcyBuYW1lIG91dHB1dHMsIEJVVCBkZWJ1ZyBtb2RlIGlzIG9uLFxuXHRcdFx0XHRcdFx0XHRcdC8vIHJlbmRlciB0aGUgYWN0aXZlIGJwIGFzIGEgY2xhc3MgdG8gZW5hYmxlIENTUyBkZWJ1ZyBpbmRpY2F0b3Jcblx0XHRcdFx0XHRcdFx0XHRbYCR7Q0xBU1NFUy5CUF9QUkVGSVh9JHtjdXJyZW50QnB9YF06IGRlYnVnICYmIG5vQnBDbGFzc2VzLFxuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFJlYWN0UmVzaXplRGV0ZWN0b3Jcblx0XHRcdFx0XHRcdFx0XHRoYW5kbGVXaWR0aFxuXHRcdFx0XHRcdFx0XHRcdG9uUmVzaXplPXtzaXplID0+IHRoaXMuc2V0U3RhdGUoeyBzaXplLCBjdXJyZW50QnAgfSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdFx0ey8qIE9ubHkgcmVuZGVyIGNvbnRlbnRzIGlmIHdlIGtub3cgd2hhdCB0aGUgYnJlYWtwb2ludCBpcztcblx0XHRcdFx0XHRcdFx0dGhpcyBwcmV2ZW50cyBjb250ZW50IGZyb20gcmVuZGVyaW5nIHByZW1hdHVyZWx5IChmaXJzdC1wYXNzKVxuXHRcdFx0XHRcdFx0XHRhbmQgY2F1c2luZyBmbGFzaGVzIChpLmUuIHJlbmRlcmluZyBhdCAnbm9uZScgYnAgYmVmb3JlIHRydWVcblx0XHRcdFx0XHRcdFx0YnJlYWtwb2ludCAnbCcgaXMgY2FsY3VsYXRlZCBhbmQgY29tbXVuaWNhdGVkIHRvIGNoaWxkcmVuLiBDYXVzZXNcblx0XHRcdFx0XHRcdFx0bW9iaWxlIGNvbnRlbnQvc3R5bGVzIHRvIGZsYXNoIHJlbmRlciBpbiBtYW55IGNhc2VzKS4gKi99XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLnNpemUgIT09IG51bGwgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goU0VMRUNUT1JTLkJQX0NPTlRFTlQsIGNsYXNzTmFtZSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8V2l0aENvbnRleHQgey4uLnsgaWRlbnRpZmllciwgY3VycmVudEJwIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbidcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gY2hpbGRyZW4oY3VycmVudEJwLCB0aGlzLnN0YXRlLnNpemUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IGNoaWxkcmVufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1dpdGhDb250ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdHtpc0RlYnVnQWN0aXZlICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1NFTEVDVE9SUy5ERUJVR19JTkRJQ0FUT1J9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2N1cnJlbnRCcCB8fCAnbm9uZSd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpZGVudGlmaWVyICE9PSBJRF9ERUZBVUxUICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZGVudGlmaWVyICE9PSBJRF9CUk9XU0VSICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtTRUxFQ1RPUlMuREVCVUdfSURFTlRJRklFUn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2lkZW50aWZpZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH19XG5cdFx0XHQ8L0JyZWFrcG9pbnREZWZpbml0aW9ucy5Db25zdW1lcj5cblx0XHQpO1xuXHR9XG59XG4iXX0=