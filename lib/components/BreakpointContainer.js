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
          lineNumber: 97
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
            lineNumber: 112
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
            lineNumber: 121
          },
          __self: this
        }), !!_this.state.size && React.createElement(React.Fragment, null, React.createElement("div", {
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
        }), typeof children === 'function' ? children(currentBp, _this.state.size) : children)), isDebugActive && React.createElement(React.Fragment, null, React.createElement("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnRDb250YWluZXIudHN4Il0sIm5hbWVzIjpbIkRFQlVHX0JQQyIsIkNMQVNTRVMiLCJDT1JFIiwiQlBfUFJFRklYIiwiREVCVUdfTU9ESUZJRVIiLCJTRUxFQ1RPUlMiLCJCUF9CUk9XU0VSIiwiQlBfQ09OVEVOVCIsIkRFQlVHX0lORElDQVRPUiIsIkRFQlVHX0lERU5USUZJRVIiLCJCcmVha3BvaW50RGVmaW5pdGlvbnMiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJCUkVBS1BPSU5UUyIsIkFwcEJyZWFrcG9pbnQiLCJCcmVha3BvaW50Q29udGFpbmVyIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwicHJvcHMiLCJvbkNoYW5nZSIsInN0YXRlIiwiY3VycmVudEJwIiwic2l6ZSIsImlkZW50aWZpZXIiLCJJRF9ERUZBVUxUIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQ2xhc3MiLCJub0JwQ2xhc3NlcyIsImRlYnVnIiwiY3VzdG9tQnJlYWtwb2ludHMiLCJjaGlsZHJlbiIsImlzRGVidWdBY3RpdmUiLCJicmVha3BvaW50cyIsImJyZWFrcG9pbnRMaXN0IiwibWF0Y2hpbmdCcHMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwiYnBOYW1lIiwibGVuZ3RoIiwiY2xhc3NCcHMiLCJtYXAiLCJqb2luIiwic2V0U3RhdGUiLCJJRF9CUk9XU0VSIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxLQUFsQixDLENBRUE7QUFDQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUc7QUFDZkMsRUFBQUEsSUFBSSxFQUFFLEtBRFM7QUFFZkMsRUFBQUEsU0FBUyxFQUFFLEdBRkk7QUFHZkMsRUFBQUEsY0FBYyxFQUFFO0FBSEQsQ0FBaEIsQyxDQU1BOztBQUNPLElBQU1DLFNBQVMsR0FBRztBQUN4QkMsRUFBQUEsVUFBVSxZQUFLTCxPQUFPLENBQUNDLElBQWIsY0FEYztBQUV4QkssRUFBQUEsVUFBVSxZQUFLTixPQUFPLENBQUNDLElBQWIsY0FGYztBQUd4Qk0sRUFBQUEsZUFBZSxZQUFLUCxPQUFPLENBQUNDLElBQWIscUJBSFM7QUFJeEJPLEVBQUFBLGdCQUFnQixZQUFLUixPQUFPLENBQUNDLElBQWI7QUFKUSxDQUFsQixDLENBT1A7QUFDQTs7O0FBQ08sSUFBTVEscUJBQXFCLEdBQUdDLEtBQUssQ0FBQ0MsYUFBTixDQUFvQkMsd0JBQXBCLENBQTlCOztBQUNBLElBQU1DLGFBQWEsR0FBR0gsS0FBSyxDQUFDQyxhQUFOLENBQW9CLEVBQXBCLENBQXRCLEMsQ0FFUDtBQUNBO0FBQ0E7Ozs7SUEyQnFCRyxtQjs7Ozs7Ozs7Ozs7Ozt1Q0FJREMsUyxFQUFtQkMsUyxFQUFtQjtBQUN4RDtBQUNBLFVBQ0MsT0FBTyxLQUFLQyxLQUFMLENBQVdDLFFBQWxCLEtBQStCLFVBQS9CLElBQ0EsS0FBS0MsS0FBTCxDQUFXQyxTQUFYLEtBQXlCSixTQUFTLENBQUNJLFNBRnBDLEVBR0U7QUFDRCxhQUFLSCxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsS0FBS0MsS0FBTCxDQUFXQyxTQUEvQixFQUEwQyxLQUFLRCxLQUFMLENBQVdFLElBQXJEO0FBQ0E7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsd0JBU0osS0FBS0osS0FURDtBQUFBLDhDQUVQSyxVQUZPO0FBQUEsVUFFUEEsVUFGTyxzQ0FFTUMsbUJBRk47QUFBQSxVQUdQQyxTQUhPLGVBR1BBLFNBSE87QUFBQSxVQUlQQyxjQUpPLGVBSVBBLGNBSk87QUFBQSw4Q0FLUEMsV0FMTztBQUFBLFVBS1BBLFdBTE8sc0NBS08sS0FMUDtBQUFBLDBDQU1QQyxLQU5PO0FBQUEsVUFNUEEsS0FOTyxrQ0FNQyxJQU5EO0FBQUEsVUFPUEMsaUJBUE8sZUFPUEEsaUJBUE87QUFBQSxVQVFQQyxRQVJPLGVBUVBBLFFBUk8sRUFXUjs7QUFDQSxVQUFNQyxhQUFhLEdBQUdILEtBQUssSUFBS0EsS0FBSyxLQUFLLEtBQVYsSUFBbUI1QixTQUFuRDtBQUVBLGFBQ0Msb0JBQUMscUJBQUQsQ0FBdUIsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxVQUFBZ0MsV0FBVyxFQUFJO0FBQUE7O0FBQ2YsWUFBTUMsY0FBYyxHQUFHSixpQkFBaUIsSUFBSUcsV0FBNUM7QUFFQSxZQUFNRSxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxjQUFaLEVBQTRCSSxNQUE1QixDQUNuQixVQUFBQyxNQUFNO0FBQUEsaUJBQUksS0FBSSxDQUFDbEIsS0FBTCxDQUFXRSxJQUFYLElBQW1CVyxjQUFjLENBQUNLLE1BQUQsQ0FBckM7QUFBQSxTQURhLENBQXBCO0FBR0EsWUFBTWpCLFNBQVMsR0FBR2EsV0FBVyxDQUFDQSxXQUFXLENBQUNLLE1BQVosR0FBcUIsQ0FBdEIsQ0FBN0IsQ0FOZSxDQVFmOztBQUNBLFlBQU1DLFFBQVEsR0FBR04sV0FBVyxDQUMxQk8sR0FEZSxDQUNYLFVBQUFILE1BQU07QUFBQSwyQkFBT3JDLE9BQU8sQ0FBQ0UsU0FBZixTQUEyQm1DLE1BQTNCO0FBQUEsU0FESyxFQUVmSSxJQUZlLENBRVYsR0FGVSxDQUFqQjtBQUlBLGVBQ0M7QUFDQyxVQUFBLFNBQVMsRUFBRSx5QkFBR3pDLE9BQU8sQ0FBQ0MsSUFBWCxFQUFpQndCLGNBQWpCLGtDQUNUYyxRQURTLEVBQ0UsQ0FBQ2IsV0FESCx3QkFFVDFCLE9BQU8sQ0FBQ0csY0FGQyxFQUVnQjJCLGFBRmhCLGtDQUtOOUIsT0FBTyxDQUFDRSxTQUxGLFNBS2NrQixTQUxkLEdBSzRCTyxLQUFLLElBQUlELFdBTHJDLFFBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FTQyxvQkFBQyw0QkFBRDtBQUNDLFVBQUEsV0FBVyxNQURaO0FBRUMsVUFBQSxRQUFRLEVBQUUsa0JBQUFMLElBQUk7QUFBQSxtQkFBSSxLQUFJLENBQUNxQixRQUFMLENBQWM7QUFBRXJCLGNBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRRCxjQUFBQSxTQUFTLEVBQVRBO0FBQVIsYUFBZCxDQUFKO0FBQUEsV0FGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVRELEVBbUJFLENBQUMsQ0FBQyxLQUFJLENBQUNELEtBQUwsQ0FBV0UsSUFBYixJQUNBLDBDQUNDO0FBQUssVUFBQSxTQUFTLEVBQUUseUJBQUdqQixTQUFTLENBQUNFLFVBQWIsRUFBeUJrQixTQUF6QixDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNDLG9CQUFDLG9CQUFELGdCQUFpQjtBQUFFRixVQUFBQSxVQUFVLEVBQVZBLFVBQUY7QUFBY0YsVUFBQUEsU0FBUyxFQUFUQTtBQUFkLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQ0UsT0FBT1MsUUFBUCxLQUFvQixVQUFwQixHQUNHQSxRQUFELENBQXVCVCxTQUF2QixFQUFrQyxLQUFJLENBQUNELEtBQUwsQ0FBV0UsSUFBN0MsQ0FERixHQUVFUSxRQUhKLENBREQsQ0FERCxFQVNFQyxhQUFhLElBQ2IsMENBQ0M7QUFBTSxVQUFBLFNBQVMsRUFBRTFCLFNBQVMsQ0FBQ0csZUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRWEsU0FBUyxJQUFJLE1BRGYsQ0FERCxFQUlFRSxVQUFVLEtBQUtDLG1CQUFmLElBQ0FELFVBQVUsS0FBS3FCLG1CQURmLElBRUM7QUFBTSxVQUFBLFNBQVMsRUFBRXZDLFNBQVMsQ0FBQ0ksZ0JBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0VjLFVBREYsQ0FOSCxDQVZGLENBcEJGLENBREQ7QUErQ0EsT0E3REYsQ0FERDtBQWlFQTs7OztFQTdGK0NaLEtBQUssQ0FBQ2tDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3RSZXNpemVEZXRlY3RvciBmcm9tICdyZWFjdC1yZXNpemUtZGV0ZWN0b3InO1xuXG5pbXBvcnQgeyBCUkVBS1BPSU5UUyB9IGZyb20gJ2RhdGEvYnJlYWtwb2ludHMnO1xuaW1wb3J0IHsgV2l0aENvbnRleHQsIElEX0RFRkFVTFQsIElEX0JST1dTRVIgfSBmcm9tICdjb21wb25lbnRzL0NvbnRleHQnO1xuXG4vLyBUaGlzIGlzbid0IGFuIGFic29sdXRlIGltcG9ydCwgb3RoZXJ3aXNlIGBjc3MvZGVidWcuY3NzYCBpcyBwYXJzZWQgYnkgUG9zdENTU1xuLy8gYXMgdGhvdWdoIGl0IHdhcyBhIHBhY2thZ2UsIGFuZCBpbmNsdWRlZCBhcyBhbiBpbXBvcnQgYXQgdGhlIHRvcCBvZiB0aGUgY2pzL2VzbSBmaWxlc1xuaW1wb3J0ICcuLi9jc3MvZGVidWcuY3NzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBWYXJpYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBERUJVR19CUEMgPSBmYWxzZTtcblxuLy8gTk9URTogSWYgeW91J3JlIGdvaW5nIHRvIGNoYW5nZSBhbnkgQ0xBU1NFUyBvciBTRUxFQ1RPUlMsIHlvdSdsbFxuLy8gbmVlZCB0byBhbHNvIGNoYW5nZSB0aGUgIGNvcnJlc3BvbmRpbmcgdmFyaWFibGVzIGluIHRoZSBTQ1NTIGZpbGVcbmNvbnN0IENMQVNTRVMgPSB7XG5cdENPUkU6ICdicGMnLFxuXHRCUF9QUkVGSVg6ICctJyxcblx0REVCVUdfTU9ESUZJRVI6ICctZGVidWcnLFxufTtcblxuLy8gRXhwb3J0ZWQgc28gQnJvd3NlckNvbnRhaW5lciBjYW4gdXRpbGlzZSBpdFxuZXhwb3J0IGNvbnN0IFNFTEVDVE9SUyA9IHtcblx0QlBfQlJPV1NFUjogYCR7Q0xBU1NFUy5DT1JFfV9fYnJvd3NlcmAsXG5cdEJQX0NPTlRFTlQ6IGAke0NMQVNTRVMuQ09SRX1fX2NvbnRlbnRgLFxuXHRERUJVR19JTkRJQ0FUT1I6IGAke0NMQVNTRVMuQ09SRX1fX2RlYnVnSW5kaWNhdG9yYCxcblx0REVCVUdfSURFTlRJRklFUjogYCR7Q0xBU1NFUy5DT1JFfV9fZGVidWdJZGVudGlmaWVyYCxcbn07XG5cbi8vIEFsdGhvdWdoIHRoZXNlIHJvb3QgQ29udGV4dHMgYXJlIHVzZWQgaW4gPEJyb3dzZXJDb250YWluZXIvPiwgdGhleVxuLy8gYXJlIGRlZmluZWQgaGVyZSB0byBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXMgKHZpYSBgaW1wb3J0IC4uLmApXG5leHBvcnQgY29uc3QgQnJlYWtwb2ludERlZmluaXRpb25zID0gUmVhY3QuY3JlYXRlQ29udGV4dChCUkVBS1BPSU5UUyk7XG5leHBvcnQgY29uc3QgQXBwQnJlYWtwb2ludCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xuXHRjb250YWluZXJDbGFzcz86IHN0cmluZztcblx0Y2hpbGRyZW46XG5cdFx0fCBSZWFjdC5SZWFjdE5vZGVcblx0XHR8ICgoYnBOYW1lOiBzdHJpbmcsIGJwU2l6ZTogbnVtYmVyKSA9PiBSZWFjdC5SZWFjdE5vZGUpO1xuXHRpZGVudGlmaWVyPzogc3RyaW5nO1xuXG5cdGN1c3RvbUJyZWFrcG9pbnRzPzoge1xuXHRcdFt2YWx1ZTogc3RyaW5nXTogbnVtYmVyO1xuXHR9O1xuXG5cdC8vIENhbGxiYWNrc1xuXHRvbkNoYW5nZT86IChicE5hbWU6IHN0cmluZywgYnBTaXplOiBudW1iZXIpID0+IHZvaWQ7XG5cblx0Ly8gRmxhZ3Ncblx0ZGVidWc/OiBib29sZWFuO1xuXHRub0JwQ2xhc3Nlcz86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXHRzaXplOiBudW1iZXI7XG5cdGN1cnJlbnRCcDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmVha3BvaW50Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuXHRJUHJvcHMsXG5cdElTdGF0ZVxuPiB7XG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IElQcm9wcywgcHJldlN0YXRlOiBJU3RhdGUpIHtcblx0XHQvLyBDaGVjayBpZiBicCBjaGFuZ2VkIHRvIHN1cHBvcnQgJ29uQ2hhbmdlJyBjYWxsYmFja1xuXHRcdGlmIChcblx0XHRcdHR5cGVvZiB0aGlzLnByb3BzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nICYmXG5cdFx0XHR0aGlzLnN0YXRlLmN1cnJlbnRCcCAhPT0gcHJldlN0YXRlLmN1cnJlbnRCcFxuXHRcdCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlLmN1cnJlbnRCcCwgdGhpcy5zdGF0ZS5zaXplKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0aWRlbnRpZmllciA9IElEX0RFRkFVTFQsXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRjb250YWluZXJDbGFzcyxcblx0XHRcdG5vQnBDbGFzc2VzID0gZmFsc2UsXG5cdFx0XHRkZWJ1ZyA9IG51bGwsXG5cdFx0XHRjdXN0b21CcmVha3BvaW50cyxcblx0XHRcdGNoaWxkcmVuLFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Ly8gRGVidWcgbW9kZSAtIGNvbXBvbmVudCBmbGFnLCBhbmQgYWNjb3VudCBmb3Igb3B0LW91dCBvZiBnbG9iYWwgZmxhZ1xuXHRcdGNvbnN0IGlzRGVidWdBY3RpdmUgPSBkZWJ1ZyB8fCAoZGVidWcgIT09IGZhbHNlICYmIERFQlVHX0JQQyk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEJyZWFrcG9pbnREZWZpbml0aW9ucy5Db25zdW1lcj5cblx0XHRcdFx0e2JyZWFrcG9pbnRzID0+IHtcblx0XHRcdFx0XHRjb25zdCBicmVha3BvaW50TGlzdCA9IGN1c3RvbUJyZWFrcG9pbnRzIHx8IGJyZWFrcG9pbnRzO1xuXG5cdFx0XHRcdFx0Y29uc3QgbWF0Y2hpbmdCcHMgPSBPYmplY3Qua2V5cyhicmVha3BvaW50TGlzdCkuZmlsdGVyKFxuXHRcdFx0XHRcdFx0YnBOYW1lID0+IHRoaXMuc3RhdGUuc2l6ZSA+PSBicmVha3BvaW50TGlzdFticE5hbWVdLFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0Y29uc3QgY3VycmVudEJwID0gbWF0Y2hpbmdCcHNbbWF0Y2hpbmdCcHMubGVuZ3RoIC0gMV07XG5cblx0XHRcdFx0XHQvLyBGb3JtYXR0ZWQgYnJlYWtwb2ludHMgZm9yIGNsYXNzTmFtZSBvdXRwdXRcblx0XHRcdFx0XHRjb25zdCBjbGFzc0JwcyA9IG1hdGNoaW5nQnBzXG5cdFx0XHRcdFx0XHQubWFwKGJwTmFtZSA9PiBgJHtDTEFTU0VTLkJQX1BSRUZJWH0ke2JwTmFtZX1gKVxuXHRcdFx0XHRcdFx0LmpvaW4oJyAnKTtcblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y3goQ0xBU1NFUy5DT1JFLCBjb250YWluZXJDbGFzcywge1xuXHRcdFx0XHRcdFx0XHRcdFtjbGFzc0Jwc106ICFub0JwQ2xhc3Nlcyxcblx0XHRcdFx0XHRcdFx0XHRbQ0xBU1NFUy5ERUJVR19NT0RJRklFUl06IGlzRGVidWdBY3RpdmUsXG5cdFx0XHRcdFx0XHRcdFx0Ly8gSWYgdGhlcmUgYXJlIG5vIGNsYXNzIG5hbWUgb3V0cHV0cywgQlVUIGRlYnVnIG1vZGUgaXMgb24sXG5cdFx0XHRcdFx0XHRcdFx0Ly8gcmVuZGVyIHRoZSBhY3RpdmUgYnAgYXMgYSBjbGFzcyB0byBlbmFibGUgQ1NTIGRlYnVnIGluZGljYXRvclxuXHRcdFx0XHRcdFx0XHRcdFtgJHtDTEFTU0VTLkJQX1BSRUZJWH0ke2N1cnJlbnRCcH1gXTogZGVidWcgJiYgbm9CcENsYXNzZXMsXG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RSZXNpemVEZXRlY3RvclxuXHRcdFx0XHRcdFx0XHRcdGhhbmRsZVdpZHRoXG5cdFx0XHRcdFx0XHRcdFx0b25SZXNpemU9e3NpemUgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpemUsIGN1cnJlbnRCcCB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0XHR7LyogT25seSByZW5kZXIgY29udGVudHMgaWYgd2Uga25vdyB3aGF0IHRoZSBicmVha3BvaW50IGlzO1xuXHRcdFx0XHRcdFx0XHR0aGlzIHByZXZlbnRzIGNvbnRlbnQgZnJvbSByZW5kZXJpbmcgcHJlbWF0dXJlbHkgKGZpcnN0LXBhc3MpXG5cdFx0XHRcdFx0XHRcdGFuZCBjYXVzaW5nIGZsYXNoZXMgKGkuZS4gcmVuZGVyaW5nIGF0ICdub25lJyBicCBiZWZvcmUgdHJ1ZVxuXHRcdFx0XHRcdFx0XHRicmVha3BvaW50ICdsJyBpcyBjYWxjdWxhdGVkIGFuZCBjb21tdW5pY2F0ZWQgdG8gY2hpbGRyZW4uIENhdXNlc1xuXHRcdFx0XHRcdFx0XHRtb2JpbGUgY29udGVudC9zdHlsZXMgdG8gZmxhc2ggcmVuZGVyIGluIG1hbnkgY2FzZXMpLiAqL31cblx0XHRcdFx0XHRcdFx0eyEhdGhpcy5zdGF0ZS5zaXplICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KFNFTEVDVE9SUy5CUF9DT05URU5ULCBjbGFzc05hbWUpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFdpdGhDb250ZXh0IHsuLi57IGlkZW50aWZpZXIsIGN1cnJlbnRCcCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IChjaGlsZHJlbiBhcyBGdW5jdGlvbikoY3VycmVudEJwLCB0aGlzLnN0YXRlLnNpemUpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IGNoaWxkcmVufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1dpdGhDb250ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdHtpc0RlYnVnQWN0aXZlICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1NFTEVDVE9SUy5ERUJVR19JTkRJQ0FUT1J9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2N1cnJlbnRCcCB8fCAnbm9uZSd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpZGVudGlmaWVyICE9PSBJRF9ERUZBVUxUICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZGVudGlmaWVyICE9PSBJRF9CUk9XU0VSICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtTRUxFQ1RPUlMuREVCVUdfSURFTlRJRklFUn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2lkZW50aWZpZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH19XG5cdFx0XHQ8L0JyZWFrcG9pbnREZWZpbml0aW9ucy5Db25zdW1lcj5cblx0XHQpO1xuXHR9XG59XG4iXX0=