# Changelog

## 0.5.5

- Fix: `resolveBp` accepts string 'none' and treats it as 0. Suppresses named bp 'none' printing console warnings.
- Chore: Resolved linting issues.

## 0.5.4

- Fix: Didn't build for previous version

## 0.5.3

- Fix: `resolveBp` function export now properly parses '0' lower values, whereas before it'd give a validation warning. Breakpoing validation now in-place in addition to query validation.

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
