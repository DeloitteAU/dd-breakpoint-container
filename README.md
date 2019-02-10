![Deloitte Digital](deloittedigital-logo-white.png)

# DDBreakpointContainer

A container query toolkit for flexible responsive design in React and CSS. Make modular components that look great no matter what size their container, and say goodbye to media queries.

Features for JS (React) rendering, SCSS (mixins), and support for CSS-in-js approaches.

<!-- Note: Re-generate with 'npm run doctoc' (install 'doctoc' globally) -->
<!-- Note: If you experience issues with doctoc regen, replace below START/END with just 'START doctoc' and 'END doctoc' HTML comments and rerun -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Index

- [Install](#markdown-header-install)
- [Getting started](#markdown-header-getting-started)
    - [1. Wrap your App in `<BrowserContainer/>`](#markdown-header-1-wrap-your-app-in-browsercontainer)
    - [2. Use `<BreakpointContainer/>` in your components](#markdown-header-2-use-breakpointcontainer-in-your-components)
        - [SCSS pattern](#markdown-header-scss-pattern)
        - [CSS-in-js pattern](#markdown-header-css-in-js-pattern)
        - [Child function pattern](#markdown-header-child-function-pattern)
        - [Callback pattern](#markdown-header-callback-pattern)
- [Conditional rendering](#markdown-header-conditional-rendering)
- [Options & exports](#markdown-header-options-exports)
    - [BreakpointContainer](#markdown-header-breakpointcontainer)
    - [BrowserContainer component](#markdown-header-browsercontainer-component)
    - [Breakpoint component](#markdown-header-breakpoint-component)
    - [HOCs](#markdown-header-hocs)
    - [Other](#markdown-header-other)
- [Debug features](#markdown-header-debug-features)
- [Disclaimers](#markdown-header-disclaimers)
    - [Performance](#markdown-header-performance)
    - [Consider media queries](#markdown-header-consider-media-queries)
    - [DDBreakpoints Backwards compatibility](#markdown-header-ddbreakpoints-backwards-compatibility)
- [About Deloitte Digital Australia](#markdown-header-about-deloitte-digital-australia)
    - [Key contributors](#markdown-header-key-contributors)
    - [Who are we?](#markdown-header-who-are-we)
- [Licence](#markdown-header-licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

To install via [npm](https://www.npmjs.com/):

```
npm install git+ssh://git@dvcs.deloittedigital.com.au:22/fed/dd-breakpoint-container.git
```

## Usage

Quick note: this library features named breakpoints, e.g. where `'s'` (small) equals 640px, `'m'` (medium) 768px and so on; keep that in mind for some of the subsequent queries.

### 1. Wrap your App in `<BrowserContainer/>`

```
import { BrowserContainer } from 'dd-breakpoint-container';
...
<BrowserContainer>
	<App/>
<BrowserContainer/>
```
This is optional, but recommended. It emulates media queries by acting as a wrapper for your app. It enables standalone usage of the `<Breakpoint/>` component, as well as the `bp()` SCSS mixin. (Also, it doesn't matter if your app isn't fullscreen, the net result is the same).

### 2. Use `<BreakpointContainer/>` in your components

```
import { BreakpointContainer } from 'dd-breakpoint-container';
...
<BreakpointContainer>
	<div>My Component</div>
<BreakpointContainer/>
```
Once you've done this, you have a number of approaches you can use based on preference:

#### SCSS pattern

If you are using SCSS, first your `<BreakpointContainer/>` will need a `className`:

```
<BreakpointContainer className="my-component-name">
	...
</BreakpointContainer>
```

Then you'll need to import the library's stylesheet in your own SCSS stylesheet:

`@import '~dd-breakpoint-container/lib/mixins.scss';`

Now you can use the container query mixin in your `.scss` files. Note that the `className` you specified must be the parent selector.

```
.my-component {
	// Core styles

	// Between 0px width and 'xs' mixin (inclusive)
	@include bp (0, xs) {
		...
	}

	// 's' breakpoint and above
	@include bpc(s) {
		...
	}

	// 'm' breakpoint only
	@include bpc(m, m) {
		...
	}

	// Between 'm' and 'l' breakpoints (inclusive)
	@include bpc(m, l) {
		...
	}
}
```

You can also use the legacy `bp()` mixin to specify styles relative to the overall width of your app (emulating the behaviour of media queries). If the above isn't intuitive for you, check out the complete documentation in [**DDBreakpoints**](https://github.com/DeloitteDigitalAPAC/DDBreakpoints), where the behaviour is the same.

#### CSS-in-js pattern

TODO

#### Child function pattern

If you'd like to work with responsive logic in your component JS, you can expose the current breakpoint name and container size in pixels:

```
<BreakpointContainer>
	{ (bp, size) => {
		return `The current breakpoint is ${bp}, at size ${size} pixels.`.	
	}}
</BreakpointContainer>
```

#### Callback pattern 

Operate on a callback that triggers when the breakpoint changes. Note: **only** when the active breakpoint changes, not for every change in pixel size).

```
<BreakpointContainer 
	onChange={bp => {
		...
	}}
>
	...
</BreakpointContainer>
```

## Conditional rendering

You can use the `<Breakpoint/>` export to conditionally render markup according to a breakpoint query, like so:

```
<div>
    <Breakpoint query="s">
        <p>This will only render on s breakpoint and above</p>
    </Breakpoint>
    <Breakpoint query="xs, m">
        <p>This will only render between xs and m</p>
    </Breakpoint>
    <Breakpoint query="m, m">
        <p>This will only render on m bp</p>
    </Breakpoint>
</div>
```

You can also specify exact px:

`<Breakpoint query="300, 600"/>`

The component automatically detects which `<BreakpointContainer/>` it's in. Or, if it's not within one, it falls back to the app's `<BrowserContainer/>`.

## Options & exports

### BreakpointContainer

`import { BreakpointContainer } from 'dd-breakpoint-container';`

| Name           | Type            | Default value | Description                                                                                                              |
|----------------|-----------------|---------------|--------------------------------------------------------------------------------------------------------------------------|
| className      | String          | null          |  Class name(s) applied to container div, i.e. direct parent to component children                     |
| containerClass | String          | null          |  Class name(s) applied to wrapper div, i.e. grandparent to component children                                        |
| identifier     | String          | 'default'     |  A unique id for the component. For `<Breakpoint/>` components to reference.                                             |
| children       | Function / Node | (required)    |  Optionally receive 'bp' (String)  and 'size' (Number) props. Refer to 'Child function pattern' above.                   |
| onChange       | Function        | null          | Callback when active breakpoint changes                                                                                  |
| debug          | Boolean         | null          |  Toggles debug mode: border + breakpoint indicator                                                                       |
| noBpClasses    | Boolean         | false         |  Opt-out of breakpoint classes, if you're not using the SCSS mixins. (Only if you want to keep the DOM a little cleaner) |

### BrowserContainer component

This component is the same as `<BreakpointContainer/>`, with `identifier="browser"` and `className="bpc__browser"`.

### Breakpoint component

`import { Breakpoint } from 'dd-breakpoint-container';`

| Name       | Type            | Default value | Description                                                                                                                                      |
|------------|-----------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| query      | String / Number | 0             | Breakpoint query string "$lower, $upper", where lower/upper are either named breakpoints or pixel values. Refer to 'Usage' section for examples. |
| q          | String / Number | -             | Shorthand for `query` prop                                                                                                                       |
| identifier | String          | 'default'     | Define which `<BreakpointContainer/>` to work with, e.g. if you want to target the browser container.                                            |
| children   | Node            | (required)    |                                                                                                                                                  |

### HOCs

Both `<BreakpointContainer/>` and its derivative `<BrowserContainer/>` are also available as Higher Order Components:

```
export withBreakpointContainer(MyComponent, { ...options });
```
```
export withBrowserContainer(MyComponent, { ...options });
```

### Other

`BREAKPOINTS`: A object of key:value pairs for breakpoint names and their pixel values:

```
BREAKPOINTS = {
	none: 0,
	xxxs: 320,
	xxs: 359,
	xs: 480,
	s: 640,
	m: 768,
	l: 1024,
	xl: 1244,
	xxl: 1410,
	xxxl: 1690,
}
```

`getBpUpperLimit(bp: string)`: A function that takes a named breakpoint and returns its upper-limit.

For example, `getBpUpperLimit('s')` returns `768` (the 'm' breakpoint), as that value is the first width at which the 's' breakpoint is no longer active (aka, the upper-limit).

`BREAKPOINTS` and `getBpUpperLimit()` are most useful for comparing two named breakpoints. For example:

```
import { BREAKPOINTS, getBpUpperLimit, BreakpointContainer } from 'dd-breakpoint-container';
...
<BrowserContainer>
	{ bp => {
		const currentBp = BREAKPOINTS[bp];
		const mobileBp = getBpUpperLimit('s');
		const isMobile = currentBp < mobileBp;

		return <p>This is { !isMobile && 'not' } mobile</p>;
	} }
</BrowserContainer>
```

## Debug features

By default, `<BrowserContainer>` will show you a helpful breakpoint indicator in the top-left of your screen in your development builds, to show you the active breakpoint of your app. This can be turned off with the the prop `debug={false}`.

Conversely, you can set `debug={true}` on any `<BreakpointContainer/>` module to see the outline of its contents, as will as its own respective active breakpoint. This is very useful 

All debug indicators are turned off if you have `NODE_ENV=production` set in your build, so you needn't worry about them slipping into your builds and deployments.

You can also set either of these debug flags globally using custom environment variables `BPC_DEBUG_BROWSER=true` and `BPC_DEBUG_CONTAINERS=true`.

## Disclaimers

### Performance

This library uses [react-resize-detector](https://github.com/maslianok/react-resize-detector) which utilises native browser support for [ResizeObservers](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver), and a [polyfill](https://github.com/que-etc/resize-observer-polyfill) for backwards compatibility with older browsers.

While we haven't experienced any noticeable performance loss in our testing and usage, we would recommend discreet usage of this library by careful and thoughtful design. For example, if your app features a common layout or divider system, you could apply `<BreakpointContainer/>` modules to those containers instead of each of your components.

### Consider media queries

Container queries are very powerful and enable new ways for responsive component development. However, if your needs are simpler and you don't need container queries, consider just using media queries. We highly recommend [**DDBreakpoints**](https://github.com/DeloitteDigitalAPAC/DDBreakpoints); our long-standing and preferred approach towards responsive design, which utilises media queries.

### DDBreakpoints Backwards compatibility

**DDBreakpointContainer** can be* a fully backwards-compatible replacement for the original [**DDBreakpoints**](https://github.com/DeloitteDigitalAPAC/DDBreakpoints) core SCSS mixin; any existing stylesheets with the `bp()` mixin will work the same. And in your design we would still encourage you use a mix of 'media queries' `bp()` and 'container queries' `bpc()` as makes sense in the context of your app.

\* Note that this functionality depends on the proper set-up of the `<BrowserContainer/>` component as per the instructions above in the 'Getting started' section.

## About Deloitte Digital Australia

### Key contributors
- @saxoncameron

### Who are we?

**Part Business. Part Creative. Part Technology. One hundred per cent digital.**

Pioneered in Australia, Deloitte Digital is committed to helping clients unlock the business value of emerging technologies. We provide clients with a full suite of digital services, covering digital strategy, user experience, content, creative, engineering and implementation across mobile, web and social media channels.

[http://www.deloittedigital.com/au](http://www.deloittedigital.com/au)

## Licence
BSD-3-Clause ([View License](LICENSE))
