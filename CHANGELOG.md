# Changelog

## 0.8.1

- Fix: BrowserContainer also supports child functions, parity with BreakpointContainer

## 0.8.0

- Fix: ./lib now properly transpiling down to ES5
- Fix: ./lib mixins.scss is now properly consolidated into one file, (was missing adjacent .scss file imports)
- Refactor: TypeScript
- Feat: Added \*.d.ts type files to ./lib
- Chore: core-js moved to peerDependency
- Feat: Added \*.esm.js pkg.module to ./dist
- Fix: 'css/debug.css' no longer being mistakenly imported in the build
- Chore: Removed ./dev Rollup server; replaced with ./sandbox create-react-app

## 0.7.0

- Feat: Added `customBreakpoints` prop to override default breakpoint names/sizes.
- Fix: No more first-pass render flashes when there's no breakpoint-on-load. Will prevent your components flash rendering mobile styles before settling on a desktop breakpoint.

## 0.6.0

- Feat: Added `AppBreakpoint` React Context export, (the `<Provider/>` of which lives in `<BrowserContainer/>`).

## 0.5.7

- Refactor: HOC code consolidated, now exposing `bpName` and `bpSize` props.
- Fix: Removed faulty TypeScript definitions; this will come through in future TS refactor.

## 0.5.6

- Fix: `resolveBp` 'none'/'0' parsing fixes in 0.5.5 and 0.5.3 were invalid. This was due to the fact that although named breakpoint 'none' correctly resolves to '0' pixels, this is evaluated as falsey and therefore skips to attempting parseInt. This has now been fixed.

## 0.5.5

- (Invalid) Fix: `resolveBp` accepts string 'none' and treats it as 0. Suppresses named bp 'none' printing console warnings.
- Chore: Resolved linting issues.

## 0.5.4

- Fix: Didn't build for previous version

## 0.5.3

- (Invalid) Fix: `resolveBp` function export now properly parses '0' lower values, whereas before it'd give a validation warning. Breakpoint validation now in-place in addition to query validation.

## 0.5.2

- Fix: `BrowserContainer` now supports child function, with prop-types validation to match

## 0.5.1

- Feat: Added WIP Typescript definition file; added to package.json
- Chore: Cleaned excess files/folders from old builds from /lib

## 0.5.0

- Feat: Added `resolveBp` core function
- Docs: Updated README to reflect the above
- Feat: Added 'bpc' export as preliminary support for CSS-in-js container query support
- Refactor: Moved HOCs into their own folder as separate files
- Refactor: Separated out Breakpoint/Browser containers to separate component files
- Chore: Added Prettier code formatter; updated associated plugins and eslint/stylelint configs; linted as required
- Chore: Normalised dot config files to \*rc.js
- Chore: Added husky and lint-staged git-hook for linting on commit

## 0.4.2

- Refactor: Core SCSS styles are now compiled into CSS, so you don't need a SASS compiler if you're just using the component, without the mixins
- Refactor: 'config' dir moved to root, as expected by any plugins or extensions looking to consume any config files
- Chore: NPM audit fixes
- Chore: Added 'core-js' as a dependency

## 0.4.1

- Fix: Temporarily removed debug environment variable overrides, due to unverified performance
- Feat: Added watch command, and dev server for local testing and development
- Docs: Added CONTRIBUTING.md
- Refactor: Added 'config' directory and moved relevant files there to clean up project root
- Chore: 'Breakpoint' component file changed to default export (remains named export in package)
- Chore: 'classnames' package moved to peer dependencies

## 0.4.0

- Refactor: 'BrowserBreakpoints' export renamed 'BrowserContainer'
- Refactor: 'BreakpointContainer' no longer default export - all exports are now named
- Refactor: 'onBpChanged' callback renamed to just 'onChange'
- Refactor: 'noClasses' prop renamed to 'noBpClasses'
- Docs: Added README.md

## 0.3.2

- Feat: Dist format now 'cjs'

## 0.3.1

- Fix: Mixins.scss relative path fix

## 0.3.0

- Refactor: Complete restructure, file renaming, separating, ./lib and ./dist dirs
- Feat: Added more relevant entries in package.json

## 0.2.4

- Fix: '0' lower bp definitions are now properly routed to 'none', for <Bpc/> class output too
- Feat: Added '0' bp, as there is merit to introducing 'none' as an official bp
- Refactor: Amended overly verbose build process with command double-ups

## 0.2.3

- Fix: 'none' breakpoint class replaced with core 'bpc' class
- Refactor: 'xxxs' breakpoint definition from 300 -> 320px

## 0.2.2

- Fix: lib/index.js filename mismatches

## 0.2.1

- Feat: Library now auto-routes to prod/dev script according to NODE_ENV
- Refactor: ./lib structure, some other internal module renaming

## 0.2.0

- Feat: Separate production/develop configs
- Feat: SCSS mixins now separate export

## 0.1.0

- Feat: Component converted to package repo
