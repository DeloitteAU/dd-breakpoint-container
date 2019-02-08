import "core-js/modules/es6.object.define-property";

var _BP_CONTEXTS,
    _jsxFileName = "/Users/sacameron/Sites/dd-breakpoint-container/src/components/Context.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import T from 'prop-types';
export var ID_DEFAULT = 'default';
export var ID_BROWSER = 'browser'; // NOTE: Other identifier contexts are created as-needed in WithContext

export var BP_CONTEXTS = (_BP_CONTEXTS = {}, _defineProperty(_BP_CONTEXTS, ID_DEFAULT, React.createContext()), _defineProperty(_BP_CONTEXTS, ID_BROWSER, React.createContext()), _BP_CONTEXTS); // TODO docs? necessary here with internal comments already? should you doc functional components?

function WithContext(_ref) {
  var identifier = _ref.identifier,
      currentBp = _ref.currentBp,
      children = _ref.children;
  // If a BPC has specified an identifier other than the default
  var hasIdentifier = identifier !== ID_DEFAULT; // Create specific context if it doesn't already exist

  if (hasIdentifier && !BP_CONTEXTS[identifier]) {
    BP_CONTEXTS[identifier] = React.createContext();
  } // CoreContext aka 'default' context must always be present, even if the
  // BPC has a specified identifier - this is to enable the default behaviour
  // of <Breakpoint/> components that don't specify an target BPC identifier


  var CoreContext = BP_CONTEXTS[ID_DEFAULT];
  var IdentifierContext = BP_CONTEXTS[identifier];
  return React.createElement(React.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, hasIdentifier ? React.createElement(IdentifierContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, React.createElement(CoreContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, children)) : React.createElement(IdentifierContext.Provider, {
    value: currentBp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, children));
}

;
WithContext.propTypes = {
  identifier: T.string.isRequired,
  currentBp: T.string,
  children: T.node.isRequired
};
WithContext.defaultProps = {
  currentBp: null
};
export { WithContext };