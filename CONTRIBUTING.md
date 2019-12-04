# Contributing

This package comes with a Sandbox repo for testing live changes in the package, in addition to also providing an environment for Cypress integration test fixtures (coming soon).

## Set-up: Linking the Sandbox

In order to make the `dd-breakpoint-container` package available to the Sandbox repo, you first have to create the link on your machine. This is only required once when first setting up your development environment.

- In the root directory run `yarn link` to add this repo to yarn's symlink registry
- Then in the Sandbox repo (`cd sandbox`) - `yarn link @deloitte-digital-au/dd-breakpoint-container`

Now the Sanbox repo will resolve the `@deloitte-digital-au/dd-breakpoint-container` package from the parent directory, instead of from it's own `node_modules` folder.

### Symlinking other projects

In fact, you can run the same command `yarn link @deloitte-digital-au/dd-breakpoint-container` inside any project repo and it will point instead. This can be handy if you're debugging an issue in a specific project, or if you just want to do active development in a real project that's already using the package!

:warning: Be careful though! Make sure you remember to **unlink** the package symlink in your project when you're done, so you don't leave it symlinked (if you forget you've done this, it can be annoying/frustrating to debug). Run `yarn unlink @deloitte-digital-au/dd-breakpoint-container` to resolve the package again from your project's `node_modules` folder again like normal.

## Active Development

For active development, you can develop in the main repo and test your live changes in the Sandbox repo running on port 3000.

- `yarn start` - (Starts `npm-watch` to actively re-compile ./lib on save)
	- ⚠️ The watch process to rebuild the package 'on save' can take up to 10s! If you have the package symlinked, it may take that long for your project to reflect your active changes!
- And as a separate process, run the Sanbox repo: - `cd sandbox` - `yarn start`
	- This project will also live-reload (after the watch process rebuilds; see above notice) when it detects a change in the package src files.

The Sandbox is a simple CRA app that uses the project root in place of the `dd-breakpoint-container` published package.
