"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppBreakpoint = exports.BreakpointDefinitions = exports.SELECTORS = void 0;

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
var DEBUG_BPC = false; // NOTE: If you're going to change any CLASSES or SELECTORS, you'll
// need to also change the  corresponding variables in the SCSS file

var CLASSES = {
  CORE: 'bpc',
  BP_PREFIX: '-',
  DEBUG_MODIFIER: '-debug'
}; // Exported so BrowserContainer can utilise it

var SELECTORS = {
  BP_BROWSER: "".concat(CLASSES.CORE, "__browser"),
  BP_CONTENT: "".concat(CLASSES.CORE, "__content"),
  DEBUG_INDICATOR: "".concat(CLASSES.CORE, "__debugIndicator"),
  DEBUG_IDENTIFIER: "".concat(CLASSES.CORE, "__debugIdentifier")
}; // Although these root Contexts are used in <BrowserContainer/>, they
// are defined here to avoid circular dependencies (via `import ...`)

exports.SELECTORS = SELECTORS;
var BreakpointDefinitions = React.createContext(_breakpoints.BREAKPOINTS);
exports.BreakpointDefinitions = BreakpointDefinitions;
var AppBreakpoint = React.createContext({}); // ------------------------
// Export
// ------------------------

exports.AppBreakpoint = AppBreakpoint;

var BreakpointContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BreakpointContainer, _React$Component);

  function BreakpointContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BreakpointContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BreakpointContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      size: undefined,
      currentBp: undefined
    };
    return _this;
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
      var _this2 = this;

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
          lineNumber: 99
        },
        __self: this
      }, function (breakpoints) {
        var _cx;

        var breakpointList = customBreakpoints || breakpoints;
        var matchingBps = Object.keys(breakpointList).filter(function (bpName) {
          return (_this2.state.size || 0) >= breakpointList[bpName];
        });
        var currentBp = matchingBps[matchingBps.length - 1]; // Formatted breakpoints for className output

        var classBps = matchingBps.map(function (bpName) {
          return "".concat(CLASSES.BP_PREFIX).concat(bpName);
        }).join(' ');
        return React.createElement("div", {
          className: (0, _classnames.default)(CLASSES.CORE, containerClass, (_cx = {}, _defineProperty(_cx, classBps, !noBpClasses), _defineProperty(_cx, CLASSES.DEBUG_MODIFIER, isDebugActive), _defineProperty(_cx, "".concat(CLASSES.BP_PREFIX).concat(currentBp), debug && noBpClasses), _cx)),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, React.createElement(_reactResizeDetector.default, {
          handleWidth: true,
          onResize: function onResize(size) {
            return _this2.setState({
              size: size,
              currentBp: currentBp
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }), !!_this2.state.size && React.createElement(React.Fragment, null, React.createElement("div", {
          className: (0, _classnames.default)(SELECTORS.BP_CONTENT, className),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, React.createElement(_Context.WithContext, Object.assign({
          identifier: identifier,
          currentBp: currentBp
        }, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }), typeof children === 'function' ? children(currentBp, _this2.state.size) : children)), isDebugActive && React.createElement(React.Fragment, null, React.createElement("span", {
          className: SELECTORS.DEBUG_INDICATOR,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, currentBp || 'none'), identifier !== _Context.ID_DEFAULT && identifier !== _Context.ID_BROWSER && React.createElement("span", {
          className: SELECTORS.DEBUG_IDENTIFIER,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, identifier))));
      });
    }
  }]);

  return BreakpointContainer;
}(React.Component);

exports.default = BreakpointContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnRDb250YWluZXIudHN4Il0sIm5hbWVzIjpbIkRFQlVHX0JQQyIsIkNMQVNTRVMiLCJDT1JFIiwiQlBfUFJFRklYIiwiREVCVUdfTU9ESUZJRVIiLCJTRUxFQ1RPUlMiLCJCUF9CUk9XU0VSIiwiQlBfQ09OVEVOVCIsIkRFQlVHX0lORElDQVRPUiIsIkRFQlVHX0lERU5USUZJRVIiLCJCcmVha3BvaW50RGVmaW5pdGlvbnMiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJCUkVBS1BPSU5UUyIsIkFwcEJyZWFrcG9pbnQiLCJCcmVha3BvaW50Q29udGFpbmVyIiwic3RhdGUiLCJzaXplIiwidW5kZWZpbmVkIiwiY3VycmVudEJwIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwicHJvcHMiLCJvbkNoYW5nZSIsImlkZW50aWZpZXIiLCJJRF9ERUZBVUxUIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQ2xhc3MiLCJub0JwQ2xhc3NlcyIsImRlYnVnIiwiY3VzdG9tQnJlYWtwb2ludHMiLCJjaGlsZHJlbiIsImlzRGVidWdBY3RpdmUiLCJicmVha3BvaW50cyIsImJyZWFrcG9pbnRMaXN0IiwibWF0Y2hpbmdCcHMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwiYnBOYW1lIiwibGVuZ3RoIiwiY2xhc3NCcHMiLCJtYXAiLCJqb2luIiwic2V0U3RhdGUiLCJJRF9CUk9XU0VSIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxLQUFsQixDLENBRUE7QUFDQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUc7QUFDZkMsRUFBQUEsSUFBSSxFQUFFLEtBRFM7QUFFZkMsRUFBQUEsU0FBUyxFQUFFLEdBRkk7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Q0FERDtBQStDQSxPQTdERixDQUREO0FBaUVBOzs7O0VBL0YrQ2IsS0FBSyxDQUFDbUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdFJlc2l6ZURldGVjdG9yIGZyb20gJ3JlYWN0LXJlc2l6ZS1kZXRlY3Rvcic7XG5cbmltcG9ydCB7IEJSRUFLUE9JTlRTIH0gZnJvbSAnZGF0YS9icmVha3BvaW50cyc7XG5pbXBvcnQgeyBXaXRoQ29udGV4dCwgSURfREVGQVVMVCwgSURfQlJPV1NFUiB9IGZyb20gJ2NvbXBvbmVudHMvQ29udGV4dCc7XG5cbi8vIFRoaXMgaXNuJ3QgYW4gYWJzb2x1dGUgaW1wb3J0LCBvdGhlcndpc2UgYGNzcy9kZWJ1Zy5jc3NgIGlzIHBhcnNlZCBieSBQb3N0Q1NTXG4vLyBhcyB0aG91Z2ggaXQgd2FzIGEgcGFja2FnZSwgYW5kIGluY2x1ZGVkIGFzIGFuIGltcG9ydCBhdCB0aGUgdG9wIG9mIHRoZSBjanMvZXNtIGZpbGVzXG5pbXBvcnQgJy4uL2Nzcy9kZWJ1Zy5jc3MnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFZhcmlhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IERFQlVHX0JQQyA9IGZhbHNlO1xuXG4vLyBOT1RFOiBJZiB5b3UncmUgZ29pbmcgdG8gY2hhbmdlIGFueSBDTEFTU0VTIG9yIFNFTEVDVE9SUywgeW91J2xsXG4vLyBuZWVkIHRvIGFsc28gY2hhbmdlIHRoZSAgY29ycmVzcG9uZGluZyB2YXJpYWJsZXMgaW4gdGhlIFNDU1MgZmlsZVxuY29uc3QgQ0xBU1NFUyA9IHtcblx0Q09SRTogJ2JwYycsXG5cdEJQX1BSRUZJWDogJy0nLFxuXHRERUJVR19NT0RJRklFUjogJy1kZWJ1ZycsXG59O1xuXG4vLyBFeHBvcnRlZCBzbyBCcm93c2VyQ29udGFpbmVyIGNhbiB1dGlsaXNlIGl0XG5leHBvcnQgY29uc3QgU0VMRUNUT1JTID0ge1xuXHRCUF9CUk9XU0VSOiBgJHtDTEFTU0VTLkNPUkV9X19icm93c2VyYCxcblx0QlBfQ09OVEVOVDogYCR7Q0xBU1NFUy5DT1JFfV9fY29udGVudGAsXG5cdERFQlVHX0lORElDQVRPUjogYCR7Q0xBU1NFUy5DT1JFfV9fZGVidWdJbmRpY2F0b3JgLFxuXHRERUJVR19JREVOVElGSUVSOiBgJHtDTEFTU0VTLkNPUkV9X19kZWJ1Z0lkZW50aWZpZXJgLFxufTtcblxuLy8gQWx0aG91Z2ggdGhlc2Ugcm9vdCBDb250ZXh0cyBhcmUgdXNlZCBpbiA8QnJvd3NlckNvbnRhaW5lci8+LCB0aGV5XG4vLyBhcmUgZGVmaW5lZCBoZXJlIHRvIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY2llcyAodmlhIGBpbXBvcnQgLi4uYClcbmV4cG9ydCBjb25zdCBCcmVha3BvaW50RGVmaW5pdGlvbnMgPSBSZWFjdC5jcmVhdGVDb250ZXh0KEJSRUFLUE9JTlRTKTtcbmV4cG9ydCBjb25zdCBBcHBCcmVha3BvaW50ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuXHRjbGFzc05hbWU/OiBzdHJpbmc7XG5cdGNvbnRhaW5lckNsYXNzPzogc3RyaW5nO1xuXHRjaGlsZHJlbjpcblx0XHR8IFJlYWN0LlJlYWN0Tm9kZVxuXHRcdHwgKChicE5hbWU6IHN0cmluZywgYnBTaXplOiBudW1iZXIpID0+IFJlYWN0LlJlYWN0Tm9kZSk7XG5cdGlkZW50aWZpZXI/OiBzdHJpbmc7XG5cblx0Y3VzdG9tQnJlYWtwb2ludHM/OiB7XG5cdFx0W3ZhbHVlOiBzdHJpbmddOiBudW1iZXI7XG5cdH07XG5cblx0Ly8gQ2FsbGJhY2tzXG5cdG9uQ2hhbmdlPzogKGJwTmFtZT86IHN0cmluZywgYnBTaXplPzogbnVtYmVyKSA9PiB2b2lkO1xuXG5cdC8vIEZsYWdzXG5cdGRlYnVnPzogYm9vbGVhbjtcblx0bm9CcENsYXNzZXM/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblx0c2l6ZT86IG51bWJlcjtcblx0Y3VycmVudEJwPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmVha3BvaW50Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuXHRJUHJvcHMsXG5cdElTdGF0ZVxuPiB7XG5cdHN0YXRlID0geyBzaXplOiB1bmRlZmluZWQsIGN1cnJlbnRCcDogdW5kZWZpbmVkIH07XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogSVByb3BzLCBwcmV2U3RhdGU6IElTdGF0ZSkge1xuXHRcdC8vIENoZWNrIGlmIGJwIGNoYW5nZWQgdG8gc3VwcG9ydCAnb25DaGFuZ2UnIGNhbGxiYWNrXG5cdFx0aWYgKFxuXHRcdFx0dHlwZW9mIHRoaXMucHJvcHMub25DaGFuZ2UgPT09ICdmdW5jdGlvbicgJiZcblx0XHRcdHRoaXMuc3RhdGUuY3VycmVudEJwICE9PSBwcmV2U3RhdGUuY3VycmVudEJwXG5cdFx0KSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuc3RhdGUuY3VycmVudEJwLCB0aGlzLnN0YXRlLnNpemUpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRpZGVudGlmaWVyID0gSURfREVGQVVMVCxcblx0XHRcdGNsYXNzTmFtZSxcblx0XHRcdGNvbnRhaW5lckNsYXNzLFxuXHRcdFx0bm9CcENsYXNzZXMgPSBmYWxzZSxcblx0XHRcdGRlYnVnID0gbnVsbCxcblx0XHRcdGN1c3RvbUJyZWFrcG9pbnRzLFxuXHRcdFx0Y2hpbGRyZW4sXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHQvLyBEZWJ1ZyBtb2RlIC0gY29tcG9uZW50IGZsYWcsIGFuZCBhY2NvdW50IGZvciBvcHQtb3V0IG9mIGdsb2JhbCBmbGFnXG5cdFx0Y29uc3QgaXNEZWJ1Z0FjdGl2ZSA9IGRlYnVnIHx8IChkZWJ1ZyAhPT0gZmFsc2UgJiYgREVCVUdfQlBDKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8QnJlYWtwb2ludERlZmluaXRpb25zLkNvbnN1bWVyPlxuXHRcdFx0XHR7YnJlYWtwb2ludHMgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGJyZWFrcG9pbnRMaXN0ID0gY3VzdG9tQnJlYWtwb2ludHMgfHwgYnJlYWtwb2ludHM7XG5cblx0XHRcdFx0XHRjb25zdCBtYXRjaGluZ0JwcyA9IE9iamVjdC5rZXlzKGJyZWFrcG9pbnRMaXN0KS5maWx0ZXIoXG5cdFx0XHRcdFx0XHRicE5hbWUgPT4gKHRoaXMuc3RhdGUuc2l6ZSB8fCAwKSA+PSBicmVha3BvaW50TGlzdFticE5hbWVdLFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0Y29uc3QgY3VycmVudEJwID0gbWF0Y2hpbmdCcHNbbWF0Y2hpbmdCcHMubGVuZ3RoIC0gMV07XG5cblx0XHRcdFx0XHQvLyBGb3JtYXR0ZWQgYnJlYWtwb2ludHMgZm9yIGNsYXNzTmFtZSBvdXRwdXRcblx0XHRcdFx0XHRjb25zdCBjbGFzc0JwcyA9IG1hdGNoaW5nQnBzXG5cdFx0XHRcdFx0XHQubWFwKGJwTmFtZSA9PiBgJHtDTEFTU0VTLkJQX1BSRUZJWH0ke2JwTmFtZX1gKVxuXHRcdFx0XHRcdFx0LmpvaW4oJyAnKTtcblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y3goQ0xBU1NFUy5DT1JFLCBjb250YWluZXJDbGFzcywge1xuXHRcdFx0XHRcdFx0XHRcdFtjbGFzc0Jwc106ICFub0JwQ2xhc3Nlcyxcblx0XHRcdFx0XHRcdFx0XHRbQ0xBU1NFUy5ERUJVR19NT0RJRklFUl06IGlzRGVidWdBY3RpdmUsXG5cdFx0XHRcdFx0XHRcdFx0Ly8gSWYgdGhlcmUgYXJlIG5vIGNsYXNzIG5hbWUgb3V0cHV0cywgQlVUIGRlYnVnIG1vZGUgaXMgb24sXG5cdFx0XHRcdFx0XHRcdFx0Ly8gcmVuZGVyIHRoZSBhY3RpdmUgYnAgYXMgYSBjbGFzcyB0byBlbmFibGUgQ1NTIGRlYnVnIGluZGljYXRvclxuXHRcdFx0XHRcdFx0XHRcdFtgJHtDTEFTU0VTLkJQX1BSRUZJWH0ke2N1cnJlbnRCcH1gXTogZGVidWcgJiYgbm9CcENsYXNzZXMsXG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RSZXNpemVEZXRlY3RvclxuXHRcdFx0XHRcdFx0XHRcdGhhbmRsZVdpZHRoXG5cdFx0XHRcdFx0XHRcdFx0b25SZXNpemU9e3NpemUgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpemUsIGN1cnJlbnRCcCB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0XHR7LyogT25seSByZW5kZXIgY29udGVudHMgaWYgd2Uga25vdyB3aGF0IHRoZSBicmVha3BvaW50IGlzO1xuXHRcdFx0XHRcdFx0XHR0aGlzIHByZXZlbnRzIGNvbnRlbnQgZnJvbSByZW5kZXJpbmcgcHJlbWF0dXJlbHkgKGZpcnN0LXBhc3MpXG5cdFx0XHRcdFx0XHRcdGFuZCBjYXVzaW5nIGZsYXNoZXMgKGkuZS4gcmVuZGVyaW5nIGF0ICdub25lJyBicCBiZWZvcmUgdHJ1ZVxuXHRcdFx0XHRcdFx0XHRicmVha3BvaW50ICdsJyBpcyBjYWxjdWxhdGVkIGFuZCBjb21tdW5pY2F0ZWQgdG8gY2hpbGRyZW4uIENhdXNlc1xuXHRcdFx0XHRcdFx0XHRtb2JpbGUgY29udGVudC9zdHlsZXMgdG8gZmxhc2ggcmVuZGVyIGluIG1hbnkgY2FzZXMpLiAqL31cblx0XHRcdFx0XHRcdFx0eyEhdGhpcy5zdGF0ZS5zaXplICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KFNFTEVDVE9SUy5CUF9DT05URU5ULCBjbGFzc05hbWUpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFdpdGhDb250ZXh0IHsuLi57IGlkZW50aWZpZXIsIGN1cnJlbnRCcCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IChjaGlsZHJlbiBhcyBGdW5jdGlvbikoY3VycmVudEJwLCB0aGlzLnN0YXRlLnNpemUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IGNoaWxkcmVufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1dpdGhDb250ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdHtpc0RlYnVnQWN0aXZlICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1NFTEVDVE9SUy5ERUJVR19JTkRJQ0FUT1J9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2N1cnJlbnRCcCB8fCAnbm9uZSd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpZGVudGlmaWVyICE9PSBJRF9ERUZBVUxUICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZGVudGlmaWVyICE9PSBJRF9CUk9XU0VSICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtTRUxFQ1RPUlMuREVCVUdfSURFTlRJRklFUn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2lkZW50aWZpZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH19XG5cdFx0XHQ8L0JyZWFrcG9pbnREZWZpbml0aW9ucy5Db25zdW1lcj5cblx0XHQpO1xuXHR9XG59XG4iXX0=