import "core-js/modules/es6.function.name";
import "core-js/modules/es6.object.assign";
var _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/HOCs.js";
import React from 'react';
import BreakpointContainer, { BrowserBreakpoints } from './BreakpointContainer.js';
export function withBreakpointContainer(Component, bpcProps) {
  function WithBpc(props) {
    return React.createElement(BreakpointContainer, Object.assign({}, bpcProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }), React.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    })));
  }

  var wrappedComponentName = Component.displayName || Component.name || 'Component';
  WithBpc.displayName = "withBreakpointContainer(".concat(wrappedComponentName, ")");
  return WithBpc;
} // ------------------------

export function withBrowserBreakpoints(Component, bpcProps) {
  function WithBrowserBpc(props) {
    return React.createElement(BrowserBreakpoints, Object.assign({}, bpcProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), React.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })));
  }

  var wrappedComponentName = Component.displayName || Component.name || 'Component';
  WithBrowserBpc.displayName = "withBrowserBreakpoints(".concat(wrappedComponentName, ")");
  return WithBrowserBpc;
}