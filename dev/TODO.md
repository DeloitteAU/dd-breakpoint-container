- Fix up missing \*.d.ts files in ./lib (index/HOCs?)
  -- Is there a better way to do this?
- Getting TS linting on some JS files? (rollup config?)

- Might be prudent to renamed BreakpointDefinitions context
  -- Should our context var names have `Context` as a var suffix?
- Do we need 'none' in BREAKPOINTS? I dont think we do?
- Styled Components; remove classnames
- Should library be decoupled from SCSS altogether?
- Should library be split up into smaller libraries?
- How could DynamicSubLayout be integrated into this project? Core functionality? Separate with peer dependency on this lib?
- Rename noBpClasses - something like no SCSS...? Or not?
- Support render props?
- Make 'dev' folder into demo site for dd.io hosting
- Restructure/clean-up TODOs here

## Deloitte Consensus

- Export names (especially 'BrowserContainer' [rename -> App?] & 'Breakpoint' component)
- Does classnames really belong as peerdependency?
- Should mixins.scss be in scss dir?
- What are the merits, if any, to keeping a separate '/dist' dir and build pipeline?
  -- Should 'dist' be included in the install bundle? Or just kept in the repo and made availble via unpkg in the README or something

## Admin

- Dev dir README.md
- README description clarity, what/why, GIF example
- README badges for version, coverage, build, etc
- Note peer dependencies in README
- CONTRIBUTING.md: dev process (`npm start` then `cd dev && npm start`)

## Package

- Can we make the breakpoint mixins available as functions for CSS-in-js? Might not be necessary if we can instead provide a 'query' resolving function to enable CSS-in-js patterns. More investigation and/or feedback required from those more familiar with approach
- Add style/passthrough-props to bpc-content
- NODE_ENV and debug overrides cant be set client side, because process isnt defined (?)
- Unit tests, and integration/behavioural tests
- Backwards compatibility with DDBreakpoints unit tests
- Unit tests to test that it works without SASS dependency, for those not using mixins.scss

## Known issues

- Workaround for the mass of named exports in dev server commonjs plugin
- Need to check whether mixins nested within BEM selectors are also an issue in DDBreakpoints, or if that limitation is unique and needs to be documents (i.e. root selector level usage of mixins for BEM-style)

## TBD

- Reinvestigate context API approach to minimise number of event listeners (i.e. propagate from browser container) - any performance gain?
- can accomplish this with Context API + hooks reducers
- Is there a way to determine the absolute minimum React version for max backwards compatibility? Maybe we can trial and error once unit tests are in?
- React hooks
- Possible/practical to share SCSS / JS vars? Webpack seems equipped to do it? (Styled Components...?)
- Do we need 'bps-max' array in SCSS or can derive that in another way?
- Efficiency/performance tests?
- Alpha 1 (MLC URE) 2 + 3 (MQ pre and post major refactor) orphan branches

## Future features?

- Breakpoint height? react-resize-detector supports this with 'handleHeight'
