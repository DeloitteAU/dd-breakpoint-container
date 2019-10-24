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
          lineNumber: 97
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
            lineNumber: 112
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
            lineNumber: 121
          },
          __self: this
        }), !!_this2.state.size && React.createElement(React.Fragment, null, React.createElement("div", {
          className: (0, _classnames.default)(SELECTORS.BP_CONTENT, className),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, React.createElement(_Context.WithContext, Object.assign({
          identifier: identifier,
          currentBp: currentBp
        }, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }), typeof children === 'function' ? children(currentBp, _this2.state.size) : children)), isDebugActive && React.createElement(React.Fragment, null, React.createElement("span", {
          className: SELECTORS.DEBUG_INDICATOR,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, currentBp || 'none'), identifier !== _Context.ID_DEFAULT && identifier !== _Context.ID_BROWSER && React.createElement("span", {
          className: SELECTORS.DEBUG_IDENTIFIER,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, identifier))));
      });
    }
  }]);

  return BreakpointContainer;
}(React.Component);

exports.default = BreakpointContainer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnRDb250YWluZXIudHN4Il0sIm5hbWVzIjpbIkRFQlVHX0JQQyIsIkNMQVNTRVMiLCJDT1JFIiwiQlBfUFJFRklYIiwiREVCVUdfTU9ESUZJRVIiLCJTRUxFQ1RPUlMiLCJCUF9CUk9XU0VSIiwiQlBfQ09OVEVOVCIsIkRFQlVHX0lORElDQVRPUiIsIkRFQlVHX0lERU5USUZJRVIiLCJCcmVha3BvaW50RGVmaW5pdGlvbnMiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJCUkVBS1BPSU5UUyIsIkFwcEJyZWFrcG9pbnQiLCJCcmVha3BvaW50Q29udGFpbmVyIiwic3RhdGUiLCJzaXplIiwidW5kZWZpbmVkIiwiY3VycmVudEJwIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwicHJvcHMiLCJvbkNoYW5nZSIsImlkZW50aWZpZXIiLCJJRF9ERUZBVUxUIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQ2xhc3MiLCJub0JwQ2xhc3NlcyIsImRlYnVnIiwiY3VzdG9tQnJlYWtwb2ludHMiLCJjaGlsZHJlbiIsImlzRGVidWdBY3RpdmUiLCJicmVha3BvaW50cyIsImJyZWFrcG9pbnRMaXN0IiwibWF0Y2hpbmdCcHMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwiYnBOYW1lIiwibGVuZ3RoIiwiY2xhc3NCcHMiLCJtYXAiLCJqb2luIiwic2V0U3RhdGUiLCJJRF9CUk9XU0VSIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxLQUFsQixDLENBRUE7QUFDQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUc7QUFDZkMsRUFBQUEsSUFBSSxFQUFFLEtBRFM7QUFFZkMsRUFBQUEsU0FBUyxFQUFFLEdBRkk7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Q0FERDtBQStDQSxPQTdERixDQUREO0FBaUVBOzs7O0VBL0YrQ2IsS0FBSyxDQUFDbUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdFJlc2l6ZURldGVjdG9yIGZyb20gJ3JlYWN0LXJlc2l6ZS1kZXRlY3Rvcic7XG5cbmltcG9ydCB7IEJSRUFLUE9JTlRTIH0gZnJvbSAnLi4vZGF0YS9icmVha3BvaW50cyc7XG5pbXBvcnQgeyBXaXRoQ29udGV4dCwgSURfREVGQVVMVCwgSURfQlJPV1NFUiB9IGZyb20gJy4vQ29udGV4dCc7XG5cbmltcG9ydCAnLi4vY3NzL2RlYnVnLmNzcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVmFyaWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgREVCVUdfQlBDID0gZmFsc2U7XG5cbi8vIE5PVEU6IElmIHlvdSdyZSBnb2luZyB0byBjaGFuZ2UgYW55IENMQVNTRVMgb3IgU0VMRUNUT1JTLCB5b3UnbGxcbi8vIG5lZWQgdG8gYWxzbyBjaGFuZ2UgdGhlICBjb3JyZXNwb25kaW5nIHZhcmlhYmxlcyBpbiB0aGUgU0NTUyBmaWxlXG5jb25zdCBDTEFTU0VTID0ge1xuXHRDT1JFOiAnYnBjJyxcblx0QlBfUFJFRklYOiAnLScsXG5cdERFQlVHX01PRElGSUVSOiAnLWRlYnVnJyxcbn07XG5cbi8vIEV4cG9ydGVkIHNvIEJyb3dzZXJDb250YWluZXIgY2FuIHV0aWxpc2UgaXRcbmV4cG9ydCBjb25zdCBTRUxFQ1RPUlMgPSB7XG5cdEJQX0JST1dTRVI6IGAke0NMQVNTRVMuQ09SRX1fX2Jyb3dzZXJgLFxuXHRCUF9DT05URU5UOiBgJHtDTEFTU0VTLkNPUkV9X19jb250ZW50YCxcblx0REVCVUdfSU5ESUNBVE9SOiBgJHtDTEFTU0VTLkNPUkV9X19kZWJ1Z0luZGljYXRvcmAsXG5cdERFQlVHX0lERU5USUZJRVI6IGAke0NMQVNTRVMuQ09SRX1fX2RlYnVnSWRlbnRpZmllcmAsXG59O1xuXG4vLyBBbHRob3VnaCB0aGVzZSByb290IENvbnRleHRzIGFyZSB1c2VkIGluIDxCcm93c2VyQ29udGFpbmVyLz4sIHRoZXlcbi8vIGFyZSBkZWZpbmVkIGhlcmUgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzICh2aWEgYGltcG9ydCAuLi5gKVxuZXhwb3J0IGNvbnN0IEJyZWFrcG9pbnREZWZpbml0aW9ucyA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoQlJFQUtQT0lOVFMpO1xuZXhwb3J0IGNvbnN0IEFwcEJyZWFrcG9pbnQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcblx0Y29udGFpbmVyQ2xhc3M/OiBzdHJpbmc7XG5cdGNoaWxkcmVuOlxuXHRcdHwgUmVhY3QuUmVhY3ROb2RlXG5cdFx0fCAoKGJwTmFtZTogc3RyaW5nLCBicFNpemU6IG51bWJlcikgPT4gUmVhY3QuUmVhY3ROb2RlKTtcblx0aWRlbnRpZmllcj86IHN0cmluZztcblxuXHRjdXN0b21CcmVha3BvaW50cz86IHtcblx0XHRbdmFsdWU6IHN0cmluZ106IG51bWJlcjtcblx0fTtcblxuXHQvLyBDYWxsYmFja3Ncblx0b25DaGFuZ2U/OiAoYnBOYW1lPzogc3RyaW5nLCBicFNpemU/OiBudW1iZXIpID0+IHZvaWQ7XG5cblx0Ly8gRmxhZ3Ncblx0ZGVidWc/OiBib29sZWFuO1xuXHRub0JwQ2xhc3Nlcz86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXHRzaXplPzogbnVtYmVyO1xuXHRjdXJyZW50QnA/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyZWFrcG9pbnRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG5cdElQcm9wcyxcblx0SVN0YXRlXG4+IHtcblx0c3RhdGUgPSB7IHNpemU6IHVuZGVmaW5lZCwgY3VycmVudEJwOiB1bmRlZmluZWQgfTtcblxuXHRjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBJUHJvcHMsIHByZXZTdGF0ZTogSVN0YXRlKSB7XG5cdFx0Ly8gQ2hlY2sgaWYgYnAgY2hhbmdlZCB0byBzdXBwb3J0ICdvbkNoYW5nZScgY2FsbGJhY2tcblx0XHRpZiAoXG5cdFx0XHR0eXBlb2YgdGhpcy5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdFx0dGhpcy5zdGF0ZS5jdXJyZW50QnAgIT09IHByZXZTdGF0ZS5jdXJyZW50QnBcblx0XHQpIHtcblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5zdGF0ZS5jdXJyZW50QnAsIHRoaXMuc3RhdGUuc2l6ZSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGlkZW50aWZpZXIgPSBJRF9ERUZBVUxULFxuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0Y29udGFpbmVyQ2xhc3MsXG5cdFx0XHRub0JwQ2xhc3NlcyA9IGZhbHNlLFxuXHRcdFx0ZGVidWcgPSBudWxsLFxuXHRcdFx0Y3VzdG9tQnJlYWtwb2ludHMsXG5cdFx0XHRjaGlsZHJlbixcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdC8vIERlYnVnIG1vZGUgLSBjb21wb25lbnQgZmxhZywgYW5kIGFjY291bnQgZm9yIG9wdC1vdXQgb2YgZ2xvYmFsIGZsYWdcblx0XHRjb25zdCBpc0RlYnVnQWN0aXZlID0gZGVidWcgfHwgKGRlYnVnICE9PSBmYWxzZSAmJiBERUJVR19CUEMpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxCcmVha3BvaW50RGVmaW5pdGlvbnMuQ29uc3VtZXI+XG5cdFx0XHRcdHticmVha3BvaW50cyA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgYnJlYWtwb2ludExpc3QgPSBjdXN0b21CcmVha3BvaW50cyB8fCBicmVha3BvaW50cztcblxuXHRcdFx0XHRcdGNvbnN0IG1hdGNoaW5nQnBzID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludExpc3QpLmZpbHRlcihcblx0XHRcdFx0XHRcdGJwTmFtZSA9PiAodGhpcy5zdGF0ZS5zaXplIHx8IDApID49IGJyZWFrcG9pbnRMaXN0W2JwTmFtZV0sXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjb25zdCBjdXJyZW50QnAgPSBtYXRjaGluZ0Jwc1ttYXRjaGluZ0Jwcy5sZW5ndGggLSAxXTtcblxuXHRcdFx0XHRcdC8vIEZvcm1hdHRlZCBicmVha3BvaW50cyBmb3IgY2xhc3NOYW1lIG91dHB1dFxuXHRcdFx0XHRcdGNvbnN0IGNsYXNzQnBzID0gbWF0Y2hpbmdCcHNcblx0XHRcdFx0XHRcdC5tYXAoYnBOYW1lID0+IGAke0NMQVNTRVMuQlBfUFJFRklYfSR7YnBOYW1lfWApXG5cdFx0XHRcdFx0XHQuam9pbignICcpO1xuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjeChDTEFTU0VTLkNPUkUsIGNvbnRhaW5lckNsYXNzLCB7XG5cdFx0XHRcdFx0XHRcdFx0W2NsYXNzQnBzXTogIW5vQnBDbGFzc2VzLFxuXHRcdFx0XHRcdFx0XHRcdFtDTEFTU0VTLkRFQlVHX01PRElGSUVSXTogaXNEZWJ1Z0FjdGl2ZSxcblx0XHRcdFx0XHRcdFx0XHQvLyBJZiB0aGVyZSBhcmUgbm8gY2xhc3MgbmFtZSBvdXRwdXRzLCBCVVQgZGVidWcgbW9kZSBpcyBvbixcblx0XHRcdFx0XHRcdFx0XHQvLyByZW5kZXIgdGhlIGFjdGl2ZSBicCBhcyBhIGNsYXNzIHRvIGVuYWJsZSBDU1MgZGVidWcgaW5kaWNhdG9yXG5cdFx0XHRcdFx0XHRcdFx0W2Ake0NMQVNTRVMuQlBfUFJFRklYfSR7Y3VycmVudEJwfWBdOiBkZWJ1ZyAmJiBub0JwQ2xhc3Nlcyxcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxSZWFjdFJlc2l6ZURldGVjdG9yXG5cdFx0XHRcdFx0XHRcdFx0aGFuZGxlV2lkdGhcblx0XHRcdFx0XHRcdFx0XHRvblJlc2l6ZT17c2l6ZSA9PiB0aGlzLnNldFN0YXRlKHsgc2l6ZSwgY3VycmVudEJwIH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0XHRcdHsvKiBPbmx5IHJlbmRlciBjb250ZW50cyBpZiB3ZSBrbm93IHdoYXQgdGhlIGJyZWFrcG9pbnQgaXM7XG5cdFx0XHRcdFx0XHRcdHRoaXMgcHJldmVudHMgY29udGVudCBmcm9tIHJlbmRlcmluZyBwcmVtYXR1cmVseSAoZmlyc3QtcGFzcylcblx0XHRcdFx0XHRcdFx0YW5kIGNhdXNpbmcgZmxhc2hlcyAoaS5lLiByZW5kZXJpbmcgYXQgJ25vbmUnIGJwIGJlZm9yZSB0cnVlXG5cdFx0XHRcdFx0XHRcdGJyZWFrcG9pbnQgJ2wnIGlzIGNhbGN1bGF0ZWQgYW5kIGNvbW11bmljYXRlZCB0byBjaGlsZHJlbi4gQ2F1c2VzXG5cdFx0XHRcdFx0XHRcdG1vYmlsZSBjb250ZW50L3N0eWxlcyB0byBmbGFzaCByZW5kZXIgaW4gbWFueSBjYXNlcykuICovfVxuXHRcdFx0XHRcdFx0XHR7ISF0aGlzLnN0YXRlLnNpemUgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goU0VMRUNUT1JTLkJQX0NPTlRFTlQsIGNsYXNzTmFtZSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8V2l0aENvbnRleHQgey4uLnsgaWRlbnRpZmllciwgY3VycmVudEJwIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbidcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gKGNoaWxkcmVuIGFzIEZ1bmN0aW9uKShjdXJyZW50QnAsIHRoaXMuc3RhdGUuc2l6ZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogY2hpbGRyZW59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvV2l0aENvbnRleHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0e2lzRGVidWdBY3RpdmUgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17U0VMRUNUT1JTLkRFQlVHX0lORElDQVRPUn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Y3VycmVudEJwIHx8ICdub25lJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2lkZW50aWZpZXIgIT09IElEX0RFRkFVTFQgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkZW50aWZpZXIgIT09IElEX0JST1dTRVIgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1NFTEVDVE9SUy5ERUJVR19JREVOVElGSUVSfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aWRlbnRpZmllcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fX1cblx0XHRcdDwvQnJlYWtwb2ludERlZmluaXRpb25zLkNvbnN1bWVyPlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==