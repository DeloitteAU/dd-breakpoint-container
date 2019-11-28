# Contributing

This package comes with a Sandbox repo for testing live changes in the package, in addition to also providing an environment for Cypress integration test fixtures (coming soon).

## Set-up: Linking the Sandbox

In order to make the `dd-breakpoint-container` package available to the Sandbox repo, you first have to create the link on your machine. This is only required once when first setting up your development environment.

- In the root directory run `yarn link`
- Then in the Sandbox repo (`cd sandbox`) - `yarn link @deloitte-digital-au/dd-breakpoint-container`

## Active Development

For active development, you can develop in the main repo and test your live changes in the Sandbox repo running on port 3000.

- `yarn start` - (Starts `npm-watch` to actively re-compile ./lib on save)
- And as a separate process, run the Sanbox repo: - `cd sandbox` - `yarn start`

The Sandbox is a simple CRA app that uses the project root in place of the `dd-breakpoint-container` published package.
