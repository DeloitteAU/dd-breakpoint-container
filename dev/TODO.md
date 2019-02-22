## Deloitte Consensus
- Package name: include 'react'? include full @dd-au prefix?
- Rename 'dev' folder? 'demo'?
- Export names (especially 'BrowserContainer' [rename -> App?] & Breakpoint component)
- config dir? Yes/no?
- Does classnames really belong as peerdependency?

## Admin
- README description clarity, what/why, GIF example
- How to install semver while in github repo format?
- README badges for version, coverage, build, etc
- Add a config folder to free up root dir?
- ASCII text for tests complete
- prepublish command best practice? 
- husky lint staged?
- Note peer dependencies in README

## Package
- Can we make the breakpoint mixins available as functions for CSS-in-js? Might not be necessary if we can instead provide a 'query' resolving function to enable CSS-in-js patterns. More investigation and/or feedback required from those more familiar with approach
- Check potential bugs with px/number values for upper/lower in <Breakpoint/>
- Add style/passthrough-props to bpc-content
- NODE_ENV and debug overrides cant be set client side, because process isnt defined
- Unit tests, and behavioural tests
- JSdoc and conventions checks
- Typescript definitions
- Backwards compatibility with DDBreakpoints unit tests
- Absolute imports ('~/') 
- Problematic because 'src'/'lib' dirs share source files. Separate configs?

## Known issues
- Workaround for the mass of named exports in dev server commonjs plugin
- ./lib out dir needs compiled CSS (not SCSS)
- rollup unresolved dependencies build warnings (related to node-resolve?)
- deloitte eslint config deprecation
- debug={true} flag not being respected on <BreakpointContainer/>?
- First-pass render snaps from 'none' (mobile); can we address this? react-container-query 'solves' it with initialSize prop, but I dont see thats a solution. Could just be a known limitation.
-- If we're relying on the wrapper container, we could prevent rendering of the app until a base width has been established, then propagate
- Need to check whether mixins nested within BEM selectors are also an issue in DDBreakpoints, or if that limitation is unique and needs to be documents (i.e. root selector level usage of mixins for BEM-style)

## TBD
- Reinvestigate context API approach to minimise number of event listeners (i.e. propagate from browser container) - any performance gain?
- Is there a way to determine the absolute minimum React version for max backwards compatibility? Maybe we can trial and error once unit tests are in?
- React hooks
- React fragments shortened syntax - lint/highlighting support?
- Possible/practical to share SCSS / JS vars? Webpack seems equipped to do it?
- Can we outright remove 'none' bp in a clean way? Challenge here is gracefully opting out of 'class prefix' in SCSS so we can reference .bpc core class. Worth it or nbd?
- Do we need 'bps-max' array in SCSS or can derive that in another way?
- Efficiency/performance tests?
- Contributing.md?
- Doclets?
- Alpha 1 (MLC URE) 2 + 3 (MQ pre and post major refactor) orphan branches

## Future features?
- Breakpoint height? react-resize-detector supports this with 'handleHeight'
