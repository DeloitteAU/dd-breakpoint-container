"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppBreakpoint = exports.BreakpointDefinitions = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactResizeDetector = _interopRequireDefault(require("react-resize-detector"));

var _breakpoints = require("../data/breakpoints");

var _Context = require("./Context");

require("../css/debug.css");

var _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/BreakpointContainer.tsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

// ------------------------
// Variables
// ------------------------
var DEBUG_BPC = false; // Although these root Contexts are used in <BrowserContainer/>, they
// are defined here to avoid circular dependencies (via `import ...`)

var BreakpointDefinitions = React.createContext(_breakpoints.BREAKPOINTS);
exports.BreakpointDefinitions = BreakpointDefinitions;
var AppBreakpoint = React.createContext({}); // NOTE: If you're going to change any CLASSES or SELECTORS, you'll
// need to also change the  corresponding variables in the SCSS file

exports.AppBreakpoint = AppBreakpoint;
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
    _classCallCheck(this, BreakpointContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(BreakpointContainer).apply(this, arguments));
  }

  _createClass(BreakpointContainer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // Check if bp changed to support 'onChange' callback
      if (typeof this.props.onChange === 'function' && this.state.currentBp !== prevState.currentBp) {
        this.props.onChange(this.state.currentBp, this.state.size);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          _this$props$identifie = _this$props.identifier,
          identifier = _this$props$identifie === void 0 ? _Context.ID_DEFAULT : _this$props$identifie,
          className = _this$props.className,
          containerClass = _this$props.containerClass,
          _this$props$noBpClass = _this$props.noBpClasses,
          noBpClasses = _this$props$noBpClass === void 0 ? false : _this$props$noBpClass,
          _this$props$debug = _this$props.debug,
          debug = _this$props$debug === void 0 ? null : _this$props$debug,
          customBreakpoints = _this$props.customBreakpoints,
          children = _this$props.children; // Debug mode - component flag, and account for opt-out of global flag

      var isDebugActive = debug || debug !== false && DEBUG_BPC;
      return React.createElement(BreakpointDefinitions.Consumer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, function (breakpoints) {
        var _cx;

        var breakpointList = customBreakpoints || breakpoints;
        var matchingBps = Object.keys(breakpointList).filter(function (bpName) {
          return _this.state.size >= breakpointList[bpName];
        });
        var currentBp = matchingBps[matchingBps.length - 1]; // Formatted breakpoints for className output

        var classBps = matchingBps.map(function (bpName) {
          return "".concat(CLASSES.BP_PREFIX).concat(bpName);
        }).join(' ');
        return React.createElement("div", {
          className: (0, _classnames.default)(CLASSES.CORE, containerClass, (_cx = {}, _defineProperty(_cx, classBps, !noBpClasses), _defineProperty(_cx, CLASSES.DEBUG_MODIFIER, isDebugActive), _defineProperty(_cx, "".concat(CLASSES.BP_PREFIX).concat(currentBp), debug && noBpClasses), _cx)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, React.createElement(_reactResizeDetector.default, {
          handleWidth: true,
          onResize: function onResize(size) {
            return _this.setState({
              size: size,
              currentBp: currentBp
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }), !!_this.state.size && React.createElement(React.Fragment, null, React.createElement("div", {
          className: (0, _classnames.default)(SELECTORS.BP_CONTENT, className),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, React.createElement(_Context.WithContext, Object.assign({
          identifier: identifier,
          currentBp: currentBp
        }, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }), typeof children === 'function' ? children(currentBp, _this.state.size) : children)), isDebugActive && React.createElement(React.Fragment, null, React.createElement("span", {
          className: SELECTORS.DEBUG_INDICATOR,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, currentBp || 'none'), identifier !== _Context.ID_DEFAULT && identifier !== _Context.ID_BROWSER && React.createElement("span", {
          className: SELECTORS.DEBUG_IDENTIFIER,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, identifier))));
      });
    }
  }]);

  return BreakpointContainer;
}(React.Component);

exports.default = BreakpointContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnRDb250YWluZXIudHN4Il0sIm5hbWVzIjpbIkRFQlVHX0JQQyIsIkJyZWFrcG9pbnREZWZpbml0aW9ucyIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkJSRUFLUE9JTlRTIiwiQXBwQnJlYWtwb2ludCIsIkNMQVNTRVMiLCJDT1JFIiwiQlBfUFJFRklYIiwiREVCVUdfTU9ESUZJRVIiLCJTRUxFQ1RPUlMiLCJCUF9CUk9XU0VSIiwiQlBfQ09OVEVOVCIsIkRFQlVHX0lORElDQVRPUiIsIkRFQlVHX0lERU5USUZJRVIiLCJCcmVha3BvaW50Q29udGFpbmVyIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwicHJvcHMiLCJvbkNoYW5nZSIsInN0YXRlIiwiY3VycmVudEJwIiwic2l6ZSIsImlkZW50aWZpZXIiLCJJRF9ERUZBVUxUIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQ2xhc3MiLCJub0JwQ2xhc3NlcyIsImRlYnVnIiwiY3VzdG9tQnJlYWtwb2ludHMiLCJjaGlsZHJlbiIsImlzRGVidWdBY3RpdmUiLCJicmVha3BvaW50cyIsImJyZWFrcG9pbnRMaXN0IiwibWF0Y2hpbmdCcHMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwiYnBOYW1lIiwibGVuZ3RoIiwiY2xhc3NCcHMiLCJtYXAiLCJqb2luIiwic2V0U3RhdGUiLCJJRF9CUk9XU0VSIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxLQUFsQixDLENBRUE7QUFDQTs7QUFDTyxJQUFNQyxxQkFBcUIsR0FBR0MsS0FBSyxDQUFDQyxhQUFOLENBQW9CQyx3QkFBcEIsQ0FBOUI7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHSCxLQUFL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c3NuYW1lcyc7XG5pbXBvcnQgUmVhY3RSZXNpemVEZXRlY3RvciBmcm9tICdyZWFjdC1yZXNpemUtZGV0ZWN0b3InO1xuXG5pbXBvcnQgeyBCUkVBS1BPSU5UUyB9IGZyb20gJ2RhdGEvYnJlYWtwb2ludHMnO1xuaW1wb3J0IHsgV2l0aENvbnRleHQsIElEX0RFRkFVTFQsIElEX0JST1dTRVIgfSBmcm9tICdjb21wb25lbnRzL0NvbnRleHQnO1xuXG5pbXBvcnQgJy4uL2Nzcy9kZWJ1Zy5jc3MnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFZhcmlhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IERFQlVHX0JQQyA9IGZhbHNlO1xuXG4vLyBBbHRob3VnaCB0aGVzZSByb290IENvbnRleHRzIGFyZSB1c2VkIGluIDxCcm93c2VyQ29udGFpbmVyLz4sIHRoZXlcbi8vIGFyZSBkZWZpbmVkIGhlcmUgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzICh2aWEgYGltcG9ydCAuLi5gKVxuZXhwb3J0IGNvbnN0IEJyZWFrcG9pbnREZWZpbml0aW9ucyA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoQlJFQUtQT0lOVFMpO1xuZXhwb3J0IGNvbnN0IEFwcEJyZWFrcG9pbnQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxuLy8gTk9URTogSWYgeW91J3JlIGdvaW5nIHRvIGNoYW5nZSBhbnkgQ0xBU1NFUyBvciBTRUxFQ1RPUlMsIHlvdSdsbFxuLy8gbmVlZCB0byBhbHNvIGNoYW5nZSB0aGUgIGNvcnJlc3BvbmRpbmcgdmFyaWFibGVzIGluIHRoZSBTQ1NTIGZpbGVcbmNvbnN0IENMQVNTRVMgPSB7XG5cdENPUkU6ICdicGMnLFxuXHRCUF9QUkVGSVg6ICctJyxcblx0REVCVUdfTU9ESUZJRVI6ICctZGVidWcnLFxufTtcblxuY29uc3QgU0VMRUNUT1JTID0ge1xuXHRCUF9CUk9XU0VSOiBgJHtDTEFTU0VTLkNPUkV9X19icm93c2VyYCxcblx0QlBfQ09OVEVOVDogYCR7Q0xBU1NFUy5DT1JFfV9fY29udGVudGAsXG5cdERFQlVHX0lORElDQVRPUjogYCR7Q0xBU1NFUy5DT1JFfV9fZGVidWdJbmRpY2F0b3JgLFxuXHRERUJVR19JREVOVElGSUVSOiBgJHtDTEFTU0VTLkNPUkV9X19kZWJ1Z0lkZW50aWZpZXJgLFxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcblx0Y29udGFpbmVyQ2xhc3M/OiBzdHJpbmc7XG5cdGNoaWxkcmVuOlxuXHRcdHwgUmVhY3QuUmVhY3ROb2RlXG5cdFx0fCAoKGJwTmFtZTogc3RyaW5nLCBicFNpemU6IG51bWJlcikgPT4gUmVhY3QuUmVhY3ROb2RlKTtcblx0aWRlbnRpZmllcj86IHN0cmluZztcblxuXHRjdXN0b21CcmVha3BvaW50cz86IHtcblx0XHRbdmFsdWU6IHN0cmluZ106IG51bWJlcjtcblx0fTtcblxuXHQvLyBDYWxsYmFja3Ncblx0b25DaGFuZ2U/OiAoYnBOYW1lOiBzdHJpbmcsIGJwU2l6ZTogbnVtYmVyKSA9PiB2b2lkO1xuXG5cdC8vIEZsYWdzXG5cdGRlYnVnPzogYm9vbGVhbjtcblx0bm9CcENsYXNzZXM/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblx0c2l6ZTogbnVtYmVyO1xuXHRjdXJyZW50QnA6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJlYWtwb2ludENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcblx0SVByb3BzLFxuXHRJU3RhdGVcbj4ge1xuXHRjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBJUHJvcHMsIHByZXZTdGF0ZTogSVN0YXRlKSB7XG5cdFx0Ly8gQ2hlY2sgaWYgYnAgY2hhbmdlZCB0byBzdXBwb3J0ICdvbkNoYW5nZScgY2FsbGJhY2tcblx0XHRpZiAoXG5cdFx0XHR0eXBlb2YgdGhpcy5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdFx0dGhpcy5zdGF0ZS5jdXJyZW50QnAgIT09IHByZXZTdGF0ZS5jdXJyZW50QnBcblx0XHQpIHtcblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5zdGF0ZS5jdXJyZW50QnAsIHRoaXMuc3RhdGUuc2l6ZSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGlkZW50aWZpZXIgPSBJRF9ERUZBVUxULFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0Y29udGFpbmVyQ2xhc3MsXG5cdFx0XHRub0JwQ2xhc3NlcyA9IGZhbHNlLFxuXHRcdFx0ZGVidWcgPSBudWxsLFxuXHRcdFx0Y3VzdG9tQnJlYWtwb2ludHMsXG5cdFx0XHRjaGlsZHJlbixcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdC8vIERlYnVnIG1vZGUgLSBjb21wb25lbnQgZmxhZywgYW5kIGFjY291bnQgZm9yIG9wdC1vdXQgb2YgZ2xvYmFsIGZsYWdcblx0XHRjb25zdCBpc0RlYnVnQWN0aXZlID0gZGVidWcgfHwgKGRlYnVnICE9PSBmYWxzZSAmJiBERUJVR19CUEMpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxCcmVha3BvaW50RGVmaW5pdGlvbnMuQ29uc3VtZXI+XG5cdFx0XHRcdHticmVha3BvaW50cyA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgYnJlYWtwb2ludExpc3QgPSBjdXN0b21CcmVha3BvaW50cyB8fCBicmVha3BvaW50cztcblxuXHRcdFx0XHRcdGNvbnN0IG1hdGNoaW5nQnBzID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludExpc3QpLmZpbHRlcihcblx0XHRcdFx0XHRcdGJwTmFtZSA9PiB0aGlzLnN0YXRlLnNpemUgPj0gYnJlYWtwb2ludExpc3RbYnBOYW1lXSxcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGNvbnN0IGN1cnJlbnRCcCA9IG1hdGNoaW5nQnBzW21hdGNoaW5nQnBzLmxlbmd0aCAtIDFdO1xuXG5cdFx0XHRcdFx0Ly8gRm9ybWF0dGVkIGJyZWFrcG9pbnRzIGZvciBjbGFzc05hbWUgb3V0cHV0XG5cdFx0XHRcdFx0Y29uc3QgY2xhc3NCcHMgPSBtYXRjaGluZ0Jwc1xuXHRcdFx0XHRcdFx0Lm1hcChicE5hbWUgPT4gYCR7Q0xBU1NFUy5CUF9QUkVGSVh9JHticE5hbWV9YClcblx0XHRcdFx0XHRcdC5qb2luKCcgJyk7XG5cblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2N4KENMQVNTRVMuQ09SRSwgY29udGFpbmVyQ2xhc3MsIHtcblx0XHRcdFx0XHRcdFx0XHRbY2xhc3NCcHNdOiAhbm9CcENsYXNzZXMsXG5cdFx0XHRcdFx0XHRcdFx0W0NMQVNTRVMuREVCVUdfTU9ESUZJRVJdOiBpc0RlYnVnQWN0aXZlLFxuXHRcdFx0XHRcdFx0XHRcdC8vIElmIHRoZXJlIGFyZSBubyBjbGFzcyBuYW1lIG91dHB1dHMsIEJVVCBkZWJ1ZyBtb2RlIGlzIG9uLFxuXHRcdFx0XHRcdFx0XHRcdC8vIHJlbmRlciB0aGUgYWN0aXZlIGJwIGFzIGEgY2xhc3MgdG8gZW5hYmxlIENTUyBkZWJ1ZyBpbmRpY2F0b3Jcblx0XHRcdFx0XHRcdFx0XHRbYCR7Q0xBU1NFUy5CUF9QUkVGSVh9JHtjdXJyZW50QnB9YF06IGRlYnVnICYmIG5vQnBDbGFzc2VzLFxuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFJlYWN0UmVzaXplRGV0ZWN0b3Jcblx0XHRcdFx0XHRcdFx0XHRoYW5kbGVXaWR0aFxuXHRcdFx0XHRcdFx0XHRcdG9uUmVzaXplPXtzaXplID0+IHRoaXMuc2V0U3RhdGUoeyBzaXplLCBjdXJyZW50QnAgfSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdFx0ey8qIE9ubHkgcmVuZGVyIGNvbnRlbnRzIGlmIHdlIGtub3cgd2hhdCB0aGUgYnJlYWtwb2ludCBpcztcblx0XHRcdFx0XHRcdFx0dGhpcyBwcmV2ZW50cyBjb250ZW50IGZyb20gcmVuZGVyaW5nIHByZW1hdHVyZWx5IChmaXJzdC1wYXNzKVxuXHRcdFx0XHRcdFx0XHRhbmQgY2F1c2luZyBmbGFzaGVzIChpLmUuIHJlbmRlcmluZyBhdCAnbm9uZScgYnAgYmVmb3JlIHRydWVcblx0XHRcdFx0XHRcdFx0YnJlYWtwb2ludCAnbCcgaXMgY2FsY3VsYXRlZCBhbmQgY29tbXVuaWNhdGVkIHRvIGNoaWxkcmVuLiBDYXVzZXNcblx0XHRcdFx0XHRcdFx0bW9iaWxlIGNvbnRlbnQvc3R5bGVzIHRvIGZsYXNoIHJlbmRlciBpbiBtYW55IGNhc2VzKS4gKi99XG5cdFx0XHRcdFx0XHRcdHshIXRoaXMuc3RhdGUuc2l6ZSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeChTRUxFQ1RPUlMuQlBfQ09OVEVOVCwgY2xhc3NOYW1lKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxXaXRoQ29udGV4dCB7Li4ueyBpZGVudGlmaWVyLCBjdXJyZW50QnAgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3R5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAoY2hpbGRyZW4gYXMgRnVuY3Rpb24pKGN1cnJlbnRCcCwgdGhpcy5zdGF0ZS5zaXplKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBjaGlsZHJlbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9XaXRoQ29udGV4dD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHR7aXNEZWJ1Z0FjdGl2ZSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtTRUxFQ1RPUlMuREVCVUdfSU5ESUNBVE9SfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtjdXJyZW50QnAgfHwgJ25vbmUnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aWRlbnRpZmllciAhPT0gSURfREVGQVVMVCAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWRlbnRpZmllciAhPT0gSURfQlJPV1NFUiAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17U0VMRUNUT1JTLkRFQlVHX0lERU5USUZJRVJ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpZGVudGlmaWVyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9fVxuXHRcdFx0PC9CcmVha3BvaW50RGVmaW5pdGlvbnMuQ29uc3VtZXI+XG5cdFx0KTtcblx0fVxufVxuIl19