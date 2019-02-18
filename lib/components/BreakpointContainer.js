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
          lineNumber: 111
        },
        __self: this
      }, React.createElement("div", {
        className: cx(CLASSES.CORE, containerClass, (_cx = {}, _defineProperty(_cx, classBps, !noBpClasses), _defineProperty(_cx, CLASSES.DEBUG_MODIFIER, isDebugActive), _defineProperty(_cx, "".concat(CLASSES.BP_PREFIX).concat(currentBp), debug && noBpClasses), _cx)),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
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
          lineNumber: 123
        },
        __self: this
      }), React.createElement("div", {
        className: cx(SELECTORS.BP_CONTENT, className),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, React.createElement(WithContext, Object.assign({
        identifier: identifier,
        currentBp: currentBp
      }, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), typeof children === 'function' ? children(currentBp, this.state.size) : children)), isDebugActive && React.createElement(React.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, React.createElement("span", {
        className: SELECTORS.DEBUG_INDICATOR,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, currentBp || 'none'), identifier !== ID_DEFAULT && identifier !== ID_BROWSER && React.createElement("span", {
        className: SELECTORS.DEBUG_IDENTIFIER,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
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
      lineNumber: 160
    },
    __self: this
  }), children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnRDb250YWluZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiY3giLCJSZWFjdFJlc2l6ZURldGVjdG9yIiwiV2l0aENvbnRleHQiLCJJRF9ERUZBVUxUIiwiSURfQlJPV1NFUiIsIkJSRUFLUE9JTlRTIiwiREVCVUdfQlJPV1NFUiIsInByb2Nlc3MiLCJlbnYiLCJCUENfREVCVUdfQlJPV1NFUiIsInVuZGVmaW5lZCIsIk5PREVfRU5WIiwiREVCVUdfQlBDIiwiQlBDX0RFQlVHX0NPTlRBSU5FUlMiLCJDTEFTU0VTIiwiQ09SRSIsIkJQX1BSRUZJWCIsIkRFQlVHX01PRElGSUVSIiwiU0VMRUNUT1JTIiwiQlBfQlJPV1NFUiIsIkJQX0NPTlRFTlQiLCJERUJVR19JTkRJQ0FUT1IiLCJERUJVR19JREVOVElGSUVSIiwiQnJlYWtwb2ludENvbnRhaW5lciIsInN0YXRlIiwic2l6ZSIsImN1cnJlbnRCcCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInByb3BzIiwib25DaGFuZ2UiLCJpZGVudGlmaWVyIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQ2xhc3MiLCJub0JwQ2xhc3NlcyIsImRlYnVnIiwiY2hpbGRyZW4iLCJtYXRjaGluZ0JwcyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJicCIsImxlbmd0aCIsImNsYXNzQnBzIiwibWFwIiwiam9pbiIsImlzRGVidWdBY3RpdmUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm5vZGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJCcm93c2VyQ29udGFpbmVyIiwiYnBjUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLENBQVAsTUFBYyxZ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NUIsVUFIUztBQUtyQjJCLEVBQUFBLFFBQVEsRUFBRSxJQUxXO0FBT3JCO0FBQ0FLLEVBQUFBLEtBQUssRUFBRSxJQVJjO0FBU3JCRCxFQUFBQSxXQUFXLEVBQUU7QUFUUSxDO0FBOEZ0QixDLENBRUQ7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsT0FBTyxJQUFNdUIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUdyQixRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFnQnNCLFFBQWhCOztBQUFBLFNBQy9CLG9CQUFDLG1CQUFEO0FBQ0MsSUFBQSxVQUFVLEVBQUV0RCxVQURiO0FBRUMsSUFBQSxTQUFTLEVBQUVjLFNBQVMsQ0FBQ0MsVUFGdEI7QUFHQyxJQUFBLEtBQUssRUFBRWI7QUFIUixLQUlLb0QsUUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1HdEIsUUFOSCxDQUQrQjtBQUFBLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0UmVzaXplRGV0ZWN0b3IgZnJvbSAncmVhY3QtcmVzaXplLWRldGVjdG9yJztcblxuaW1wb3J0IHsgV2l0aENvbnRleHQsIElEX0RFRkFVTFQsIElEX0JST1dTRVIgfSBmcm9tICcuL0NvbnRleHQuanMnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVFMgfSBmcm9tICcuLi9kYXRhL2JyZWFrcG9pbnRzLmpzJztcblxuaW1wb3J0ICcuLi9zY3NzL2RlYnVnLnNjc3MnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFZhcmlhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbmNvbnN0IERFQlVHX0JST1dTRVIgPSAocHJvY2Vzcy5lbnYuQlBDX0RFQlVHX0JST1dTRVIgIT0gdW5kZWZpbmVkKVxuXHQ/IHByb2Nlc3MuZW52LkJQQ19ERUJVR19CUk9XU0VSID09PSAndHJ1ZSdcblx0OiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbmNvbnN0IERFQlVHX0JQQyA9IChwcm9jZXNzLmVudi5CUENfREVCVUdfQ09OVEFJTkVSUyAhPSB1bmRlZmluZWQpXG5cdD8gcHJvY2Vzcy5lbnYuQlBDX0RFQlVHX0NPTlRBSU5FUlMgPT09ICd0cnVlJ1xuXHQ6IGZhbHNlO1xuXG4vLyBOT1RFOiBJZiB5b3UncmUgZ29pbmcgdG8gY2hhbmdlIGFueSBDTEFTU0VTIG9yIFNFTEVDVE9SUywgeW91J2xsXG4vLyBuZWVkIHRvIGFsc28gY2hhbmdlIHRoZSAgY29ycmVzcG9uZGluZyB2YXJpYWJsZXMgaW4gdGhlIFNDU1MgZmlsZVxuY29uc3QgQ0xBU1NFUyA9IHtcblx0Q09SRTogJ2JwYycsXG5cdEJQX1BSRUZJWDogJy0nLFxuXHRERUJVR19NT0RJRklFUjogJy1kZWJ1ZycsXG59O1xuXG5jb25zdCBTRUxFQ1RPUlMgPSB7XG5cdEJQX0JST1dTRVI6IGAke0NMQVNTRVMuQ09SRX1fX2Jyb3dzZXJgLFxuXHRCUF9DT05URU5UOiBgJHtDTEFTU0VTLkNPUkV9X19jb250ZW50YCxcblx0REVCVUdfSU5ESUNBVE9SOiBgJHtDTEFTU0VTLkNPUkV9X19kZWJ1Z0luZGljYXRvcmAsXG5cdERFQlVHX0lERU5USUZJRVI6IGAke0NMQVNTRVMuQ09SRX1fX2RlYnVnSWRlbnRpZmllcmAsXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENvcmUgRXhwb3J0c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjbGFzcyBCcmVha3BvaW50Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRjbGFzc05hbWU6IFQuc3RyaW5nLFxuXHRcdGNvbnRhaW5lckNsYXNzOiBULnN0cmluZyxcblx0XHRjaGlsZHJlbjogVC5vbmVPZlR5cGUoW1Qubm9kZSwgVC5mdW5jXSkuaXNSZXF1aXJlZCxcblx0XHRpZGVudGlmaWVyOiBULnN0cmluZy5pc1JlcXVpcmVkLFxuXG5cdFx0Ly8gQ2FsbGJhY2tzXG5cdFx0b25DaGFuZ2U6IFQuZnVuYyxcblxuXHRcdC8vIEZsYWdzXG5cdFx0ZGVidWc6IFQuYm9vbCxcblx0XHRub0JwQ2xhc3NlczogVC5ib29sLFxuXHR9O1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBudWxsLFxuXHRcdGNvbnRhaW5lckNsYXNzOiBudWxsLFxuXHRcdGlkZW50aWZpZXI6IElEX0RFRkFVTFQsXG5cblx0XHRvbkNoYW5nZTogbnVsbCxcblxuXHRcdC8vIERlYnVnIG51bGwgaW5zdGVhZCBvZiBmYWxzZSBzbyB3ZSBjYW4gb3B0LW91dCBvZiBnbG9iYWwgZGVidWdcblx0XHRkZWJ1ZzogbnVsbCxcblx0XHRub0JwQ2xhc3NlczogZmFsc2UsXG5cdH07XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaXplOiAwLFxuXHRcdFx0Y3VycmVudEJwOiBudWxsLFxuXHRcdH07XG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcblx0XHQvLyBDaGVjayBpZiBicCBjaGFuZ2VkIHRvIHN1cHBvcnQgJ29uQ2hhbmdlJyBjYWxsYmFja1xuXHRcdGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdFx0dGhpcy5zdGF0ZS5jdXJyZW50QnAgIT09IHByZXZTdGF0ZS5jdXJyZW50QnApIHtcblxuXHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlLmN1cnJlbnRCcCk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGlkZW50aWZpZXIsXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRjb250YWluZXJDbGFzcyxcblx0XHRcdG5vQnBDbGFzc2VzLFxuXHRcdFx0ZGVidWcsXG5cdFx0XHRjaGlsZHJlbixcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IG1hdGNoaW5nQnBzID1cblx0XHRcdE9iamVjdC5rZXlzKEJSRUFLUE9JTlRTKS5maWx0ZXIoYnAgPT4gKFxuXHRcdFx0XHR0aGlzLnN0YXRlLnNpemUgPj0gQlJFQUtQT0lOVFNbYnBdXG5cdFx0XHQpKTtcblx0XHRjb25zdCBjdXJyZW50QnAgPSBtYXRjaGluZ0Jwc1ttYXRjaGluZ0Jwcy5sZW5ndGggLSAxXTtcblxuXHRcdC8vIEZvcm1hdHRlZCBicmVha3BvaW50cyBmb3IgY2xhc3NOYW1lIG91dHB1dFxuXHRcdGNvbnN0IGNsYXNzQnBzID0gbWF0Y2hpbmdCcHMubWFwKGJwID0+IGAke0NMQVNTRVMuQlBfUFJFRklYfSR7YnB9YCkuam9pbignICcpO1xuXG5cdFx0Ly8gRGVidWcgbW9kZSAtIGNvbXBvbmVudCBmbGFnLCBhbmQgYWNjb3VudCBmb3Igb3B0LW91dCBvZiBnbG9iYWwgZmxhZ1xuXHRcdGNvbnN0IGlzRGVidWdBY3RpdmUgPSBkZWJ1ZyB8fCAoZGVidWcgIT09IGZhbHNlICYmIERFQlVHX0JQQyk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goXG5cdFx0XHRcdFx0Q0xBU1NFUy5DT1JFLFxuXHRcdFx0XHRcdGNvbnRhaW5lckNsYXNzLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFtjbGFzc0Jwc106ICFub0JwQ2xhc3Nlcyxcblx0XHRcdFx0XHRcdFtDTEFTU0VTLkRFQlVHX01PRElGSUVSXTogaXNEZWJ1Z0FjdGl2ZSxcblx0XHRcdFx0XHRcdC8vIElmIHRoZXJlIGFyZSBubyBjbGFzcyBuYW1lIG91dHB1dHMsIEJVVCBkZWJ1ZyBtb2RlIGlzIG9uLFxuXHRcdFx0XHRcdFx0Ly8gcmVuZGVyIHRoZSBhY3RpdmUgYnAgYXMgYSBjbGFzcyB0byBlbmFibGUgQ1NTIGRlYnVnIGluZGljYXRvclxuXHRcdFx0XHRcdFx0W2Ake0NMQVNTRVMuQlBfUFJFRklYfSR7Y3VycmVudEJwfWBdOiBkZWJ1ZyAmJiBub0JwQ2xhc3Nlcyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHQpfT5cblx0XHRcdFx0XHQ8UmVhY3RSZXNpemVEZXRlY3RvclxuXHRcdFx0XHRcdFx0aGFuZGxlV2lkdGhcblx0XHRcdFx0XHRcdG9uUmVzaXplPXtzaXplID0+IHRoaXMuc2V0U3RhdGUoeyBzaXplLCBjdXJyZW50QnAgfSl9XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeChTRUxFQ1RPUlMuQlBfQ09OVEVOVCwgY2xhc3NOYW1lKX0+XG5cdFx0XHRcdFx0XHQ8V2l0aENvbnRleHQgey4uLnsgaWRlbnRpZmllciwgY3VycmVudEJwIH19PlxuXHRcdFx0XHRcdFx0XHR7IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHRcdFx0XHRcdD8gY2hpbGRyZW4oY3VycmVudEJwLCB0aGlzLnN0YXRlLnNpemUpXG5cdFx0XHRcdFx0XHRcdFx0OiBjaGlsZHJlbiB9XG5cdFx0XHRcdFx0XHQ8L1dpdGhDb250ZXh0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0eyBpc0RlYnVnQWN0aXZlICYmIChcblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtTRUxFQ1RPUlMuREVCVUdfSU5ESUNBVE9SfT5cblx0XHRcdFx0XHRcdFx0XHR7IGN1cnJlbnRCcCB8fCAnbm9uZScgfVxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdHsgKGlkZW50aWZpZXIgIT09IElEX0RFRkFVTFQgJiYgaWRlbnRpZmllciAhPT0gSURfQlJPV1NFUikgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17U0VMRUNUT1JTLkRFQlVHX0lERU5USUZJRVJ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBpZGVudGlmaWVyIH1cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHQpIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdCk7XG5cdH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBFbXVsYXRlcyBtZWRpYSBxdWVyeSBmdW5jdGlvbmFsaXR5LCBhbmQgZW5hYmxlcyAnc3RhbmRhbG9uZScgPEJyZWFrcG9pbnQvPlxuLy8gQWxzbyBwcm92aWRlcyBiYWNrd2FyZC1jb21wYXRpYmlsaXR5IHdpdGggRERCcmVha3BvaW50cyBvcmlnaW5hbCAnYnAoKScgbWl4aW5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG5leHBvcnQgY29uc3QgQnJvd3NlckNvbnRhaW5lciA9ICh7IGNoaWxkcmVuLCAuLi5icGNQcm9wcyB9KSA9PiAoXG5cdDxCcmVha3BvaW50Q29udGFpbmVyXG5cdFx0aWRlbnRpZmllcj17SURfQlJPV1NFUn1cblx0XHRjbGFzc05hbWU9e1NFTEVDVE9SUy5CUF9CUk9XU0VSfVxuXHRcdGRlYnVnPXtERUJVR19CUk9XU0VSfVxuXHRcdHsuLi5icGNQcm9wc31cblx0PlxuXHRcdHsgY2hpbGRyZW4gfVxuXHQ8L0JyZWFrcG9pbnRDb250YWluZXI+XG4pO1xuIl19