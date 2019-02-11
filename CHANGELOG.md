# Changelog

## (Pending release)

- Chore: 'Breakpoint' file now default export (remains named export overall)
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
