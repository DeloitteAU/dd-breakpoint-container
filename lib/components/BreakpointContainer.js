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
export { BreakpointContainer as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JyZWFrcG9pbnRDb250YWluZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUIiwiY3giLCJSZWFjdFJlc2l6ZURldGVjdG9yIiwiV2l0aENvbnRleHQiLCJJRF9ERUZBVUxUIiwiSURfQlJPV1NFUiIsIkJSRUFLUE9JTlRTIiwiREVCVUdfQlBDIiwiQ0xBU1NFUyIsIkNPUkUiLCJCUF9QUkVGSVgiLCJERUJVR19NT0RJRklFUiIsIlNFTEVDVE9SUyIsIkJQX0JST1dTRVIiLCJCUF9DT05URU5UIiwiREVCVUdfSU5ESUNBVE9SIiwiREVCVUdfSURFTlRJRklFUiIsIkJyZWFrcG9pbnRDb250YWluZXIiLCJzdGF0ZSIsInNpemUiLCJjdXJyZW50QnAiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJwcm9wcyIsIm9uQ2hhbmdlIiwiaWRlbnRpZmllciIsImNsYXNzTmFtZSIsImNvbnRhaW5lckNsYXNzIiwibm9CcENsYXNzZXMiLCJkZWJ1ZyIsImNoaWxkcmVuIiwibWF0Y2hpbmdCcHMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwiYnAiLCJsZW5ndGgiLCJjbGFzc0JwcyIsIm1hcCIsImpvaW4iLCJpc0RlYnVnQWN0aXZlIiwic2V0U3RhdGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsQ0FBUCxNQUFjLFlBQWQ7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHVCQUFoQztBQUVBLFNBQVNDLFdBQVQsRUFBc0JDLFVBQXRCLEVBQWtDQyxVQUFsQyxRQUFvRCxjQUFwRDtBQUNBLFNBQVNDLFdBQVQsUUFB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QUFaLEVBQThCQyxVQUh0QjtBQUlsQnZCLEVBQUFBLFVBQVUsRUFBRXpCLENBQUMsQ0FBQzRDLE1BQUYsQ0FBU0ksVUFKSDtBQU1sQjtBQUNBeEIsRUFBQUEsUUFBUSxFQUFFeEIsQ0FBQyxDQUFDK0MsSUFQTTtBQVNsQjtBQUNBbEIsRUFBQUEsS0FBSyxFQUFFN0IsQ0FBQyxDQUFDaUQsSUFWUztBQVdsQnJCLEVBQUFBLFdBQVcsRUFBRTVCLENBQUMsQ0FBQ2lEO0FBWEcsQztBQURDaEMsbUIsQ0FlYmlDLFksR0FBZTtBQUNyQnhCLEVBQUFBLFNBQVMsRUFBRSxJQURVO0FBRXJCQyxFQUFBQSxjQUFjLEVBQUUsSUFGSztBQUdyQkYsRUFBQUEsVUFBVSxFQUFFckIsVUFIUztBQUtyQm9CLEVBQUFBLFFBQVEsRUFBRSxJQUxXO0FBT3JCO0FBQ0FLLEVBQUFBLEtBQUssRUFBRSxJQVJjO0FBU3JCRCxFQUFBQSxXQUFXLEVBQUU7QUFUUSxDO1NBZkZYLG1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0UmVzaXplRGV0ZWN0b3IgZnJvbSAncmVhY3QtcmVzaXplLWRldGVjdG9yJztcblxuaW1wb3J0IHsgV2l0aENvbnRleHQsIElEX0RFRkFVTFQsIElEX0JST1dTRVIgfSBmcm9tICcuL0NvbnRleHQuanMnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVFMgfSBmcm9tICcuLi9kYXRhL2JyZWFrcG9pbnRzLmpzJztcblxuaW1wb3J0ICcuLi9jc3MvZGVidWcuY3NzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBWYXJpYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBERUJVR19CUEMgPSBmYWxzZTtcblxuLy8gTk9URTogSWYgeW91J3JlIGdvaW5nIHRvIGNoYW5nZSBhbnkgQ0xBU1NFUyBvciBTRUxFQ1RPUlMsIHlvdSdsbFxuLy8gbmVlZCB0byBhbHNvIGNoYW5nZSB0aGUgIGNvcnJlc3BvbmRpbmcgdmFyaWFibGVzIGluIHRoZSBTQ1NTIGZpbGVcbmNvbnN0IENMQVNTRVMgPSB7XG5cdENPUkU6ICdicGMnLFxuXHRCUF9QUkVGSVg6ICctJyxcblx0REVCVUdfTU9ESUZJRVI6ICctZGVidWcnLFxufTtcblxuY29uc3QgU0VMRUNUT1JTID0ge1xuXHRCUF9CUk9XU0VSOiBgJHtDTEFTU0VTLkNPUkV9X19icm93c2VyYCxcblx0QlBfQ09OVEVOVDogYCR7Q0xBU1NFUy5DT1JFfV9fY29udGVudGAsXG5cdERFQlVHX0lORElDQVRPUjogYCR7Q0xBU1NFUy5DT1JFfV9fZGVidWdJbmRpY2F0b3JgLFxuXHRERUJVR19JREVOVElGSUVSOiBgJHtDTEFTU0VTLkNPUkV9X19kZWJ1Z0lkZW50aWZpZXJgLFxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeHBvcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmVha3BvaW50Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcblx0XHRjbGFzc05hbWU6IFQuc3RyaW5nLFxuXHRcdGNvbnRhaW5lckNsYXNzOiBULnN0cmluZyxcblx0XHRjaGlsZHJlbjogVC5vbmVPZlR5cGUoW1Qubm9kZSwgVC5mdW5jXSkuaXNSZXF1aXJlZCxcblx0XHRpZGVudGlmaWVyOiBULnN0cmluZy5pc1JlcXVpcmVkLFxuXG5cdFx0Ly8gQ2FsbGJhY2tzXG5cdFx0b25DaGFuZ2U6IFQuZnVuYyxcblxuXHRcdC8vIEZsYWdzXG5cdFx0ZGVidWc6IFQuYm9vbCxcblx0XHRub0JwQ2xhc3NlczogVC5ib29sLFxuXHR9O1xuXG5cdHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBudWxsLFxuXHRcdGNvbnRhaW5lckNsYXNzOiBudWxsLFxuXHRcdGlkZW50aWZpZXI6IElEX0RFRkFVTFQsXG5cblx0XHRvbkNoYW5nZTogbnVsbCxcblxuXHRcdC8vIERlYnVnIG51bGwgaW5zdGVhZCBvZiBmYWxzZSBzbyB3ZSBjYW4gb3B0LW91dCBvZiBnbG9iYWwgZGVidWdcblx0XHRkZWJ1ZzogbnVsbCxcblx0XHRub0JwQ2xhc3NlczogZmFsc2UsXG5cdH07XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaXplOiAwLFxuXHRcdFx0Y3VycmVudEJwOiBudWxsLFxuXHRcdH07XG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcblx0XHQvLyBDaGVjayBpZiBicCBjaGFuZ2VkIHRvIHN1cHBvcnQgJ29uQ2hhbmdlJyBjYWxsYmFja1xuXHRcdGlmIChcblx0XHRcdHR5cGVvZiB0aGlzLnByb3BzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nICYmXG5cdFx0XHR0aGlzLnN0YXRlLmN1cnJlbnRCcCAhPT0gcHJldlN0YXRlLmN1cnJlbnRCcFxuXHRcdCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlLmN1cnJlbnRCcCk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGlkZW50aWZpZXIsXG5cdFx0XHRjbGFzc05hbWUsXG5cdFx0XHRjb250YWluZXJDbGFzcyxcblx0XHRcdG5vQnBDbGFzc2VzLFxuXHRcdFx0ZGVidWcsXG5cdFx0XHRjaGlsZHJlbixcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnN0IG1hdGNoaW5nQnBzID0gT2JqZWN0LmtleXMoQlJFQUtQT0lOVFMpLmZpbHRlcihcblx0XHRcdGJwID0+IHRoaXMuc3RhdGUuc2l6ZSA+PSBCUkVBS1BPSU5UU1ticF0sXG5cdFx0KTtcblx0XHRjb25zdCBjdXJyZW50QnAgPSBtYXRjaGluZ0Jwc1ttYXRjaGluZ0Jwcy5sZW5ndGggLSAxXTtcblxuXHRcdC8vIEZvcm1hdHRlZCBicmVha3BvaW50cyBmb3IgY2xhc3NOYW1lIG91dHB1dFxuXHRcdGNvbnN0IGNsYXNzQnBzID0gbWF0Y2hpbmdCcHNcblx0XHRcdC5tYXAoYnAgPT4gYCR7Q0xBU1NFUy5CUF9QUkVGSVh9JHticH1gKVxuXHRcdFx0LmpvaW4oJyAnKTtcblxuXHRcdC8vIERlYnVnIG1vZGUgLSBjb21wb25lbnQgZmxhZywgYW5kIGFjY291bnQgZm9yIG9wdC1vdXQgb2YgZ2xvYmFsIGZsYWdcblx0XHRjb25zdCBpc0RlYnVnQWN0aXZlID0gZGVidWcgfHwgKGRlYnVnICE9PSBmYWxzZSAmJiBERUJVR19CUEMpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9e2N4KENMQVNTRVMuQ09SRSwgY29udGFpbmVyQ2xhc3MsIHtcblx0XHRcdFx0XHRcdFtjbGFzc0Jwc106ICFub0JwQ2xhc3Nlcyxcblx0XHRcdFx0XHRcdFtDTEFTU0VTLkRFQlVHX01PRElGSUVSXTogaXNEZWJ1Z0FjdGl2ZSxcblx0XHRcdFx0XHRcdC8vIElmIHRoZXJlIGFyZSBubyBjbGFzcyBuYW1lIG91dHB1dHMsIEJVVCBkZWJ1ZyBtb2RlIGlzIG9uLFxuXHRcdFx0XHRcdFx0Ly8gcmVuZGVyIHRoZSBhY3RpdmUgYnAgYXMgYSBjbGFzcyB0byBlbmFibGUgQ1NTIGRlYnVnIGluZGljYXRvclxuXHRcdFx0XHRcdFx0W2Ake0NMQVNTRVMuQlBfUFJFRklYfSR7Y3VycmVudEJwfWBdOiBkZWJ1ZyAmJiBub0JwQ2xhc3Nlcyxcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxSZWFjdFJlc2l6ZURldGVjdG9yXG5cdFx0XHRcdFx0XHRoYW5kbGVXaWR0aFxuXHRcdFx0XHRcdFx0b25SZXNpemU9e3NpemUgPT4gdGhpcy5zZXRTdGF0ZSh7IHNpemUsIGN1cnJlbnRCcCB9KX1cblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KFNFTEVDVE9SUy5CUF9DT05URU5ULCBjbGFzc05hbWUpfT5cblx0XHRcdFx0XHRcdDxXaXRoQ29udGV4dCB7Li4ueyBpZGVudGlmaWVyLCBjdXJyZW50QnAgfX0+XG5cdFx0XHRcdFx0XHRcdHt0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbidcblx0XHRcdFx0XHRcdFx0XHQ/IGNoaWxkcmVuKGN1cnJlbnRCcCwgdGhpcy5zdGF0ZS5zaXplKVxuXHRcdFx0XHRcdFx0XHRcdDogY2hpbGRyZW59XG5cdFx0XHRcdFx0XHQ8L1dpdGhDb250ZXh0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0e2lzRGVidWdBY3RpdmUgJiYgKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtTRUxFQ1RPUlMuREVCVUdfSU5ESUNBVE9SfT5cblx0XHRcdFx0XHRcdFx0XHR7Y3VycmVudEJwIHx8ICdub25lJ31cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHR7aWRlbnRpZmllciAhPT0gSURfREVGQVVMVCAmJiBpZGVudGlmaWVyICE9PSBJRF9CUk9XU0VSICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1NFTEVDVE9SUy5ERUJVR19JREVOVElGSUVSfT57aWRlbnRpZmllcn08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvPlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==