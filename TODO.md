* README if you want media queries -> DD breakpoints
* Usage docs in readme
* Decide on library name
* Cypress unit tests
* Doclets?
* Contributing.md?
* Write background

## Legacy TODOs
- TODO efficiency/performance tests
- TODO unit tests
- TODO docs, version, licence, etc
- TODO make sure JSdoc conventions are correct - are there any for classes?

- TODO somehow get absolute imports working again - weird because src becomes lib
- TODO custom env variable for turning off debug indicators
- TODO fallback to NODE_ENV
- TODO react hooks?
- TODO what to do about first-pass rendering? react-container-query 'solves' it with initialSize
- can we do an onMount / constructor container size check? Or initialSize...? Dont see how thats a solution though
- TODO any way to optimise <Breakpoint/>? General component optimisation?
- TODO breakpoint height? react-resize-detector seems to support this
- TODO is it possible to share SCSS / JS vars?
- TODO do we need bps-max array or can we just derive that?
- TODO fragments with shortened syntax - lint/highlighting support?
- TODO does nested BEM @include work the same as DD bps? Or is that the same limitation?
- TODO can we outright remove 'none' bp in a clean way? challenge here is opting out of class prefix so we can just hook into .bpc core class
