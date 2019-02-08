# Changelog

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
