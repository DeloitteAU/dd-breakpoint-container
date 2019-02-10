## Admin
- Decide on final library name and export names
- README badges for version, coverage, build, etc

## Package
- Can we make the breakpoint mixins available as functions for CSS-in-js? Might not be necessary if we can instead provide a 'query' resolving function to enable CSS-in-js patterns. More investigation and/or feedback required from those more familiar with approach
- Check potential bugs with px/number values for upper/lower in <Breakpoint/>
- Add style/passthrough-props to bpc-content
- ENV variable overrides both debug indicators, on/off - fallback for NODE_ENV check
- Unit tests, and behavioural tests
- JSdoc and conventions checks
- Backwards compatibility with DDBreakpoints unit tests
- Absolute imports ('~/')
	* (problematic because 'src'/'lib' dirs share source files. Separate configs?)
- How to address first-render snap? 

## Known issues
- First-pass render snaps from 'none' (mobile); can we address this? react-container-query 'solves' it with initialSize prop, but I dont see thats a solution. Could just be a known limitation.
- Need to check whether mixins nested within BEM selectors are also an issue in DDBreakpoints, or if that limitation is unique and needs to be documents (i.e. root selector level usage of mixins for BEM-style)

## TBD
- React hooks?
- React fragments shortened syntax - lint/highlighting support?
- Possible/practical to share SCSS / JS vars? Webpack seems equipped to do it?
- Can we outright remove 'none' bp in a clean way? Challenge here is gracefully opting out of 'class prefix' in SCSS so we can reference .bpc core class. Worth it or nbd?
- Do we need 'bps-max' array in SCSS or can derive that in another way?
- Efficiency/performance tests?
- Contributing.md?
- Doclets?

## Future features?
- Breakpoint height? react-resize-detector supports this with 'handleHeight'
