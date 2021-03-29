# UI Library Starter

Custom static site builder with Nunjucks, JS Modules and SCSS, meant to help you build UI Libraries for use on other sites for rapid development.

## UI Kit vs Library

"UI Kit" refers to the tooling itself and this site that lets you view your components as you're developing.

"Library" refers to the bundled js and css files that are created that you can use in your projects. 

There are folders for "UI Kit" and "Library" in the JS and SCSS directories to help split these out. 

While the JS and CSS files are separate, they are both included when you run this project with Browsersync, meaning there will be bleed from one to the other. Customize and fix any issues you find to your liking. If what you're fixing is a bug, please fix this main repo at https://bitbucket.org/marlinnetwork/ui-library-starter/src.

Also note that the way components are shown here may give a false impression regarding margins, max-widths, positioning, etc. Use the Pages feature to vet your components in a more "raw" environment.

## Using this Kit

This kit uses gulp and webpack to compile your Scss and JS files to compressed bundles that you can use in your other projects and CMS setups. It uses (https://mozilla.github.io/nunjucks/)[nunjucks] for templating. 

All your files will be in the `src` directory. 

### Atoms, Molecules, Organisms, and folders

Out of the box, we're using [Atomic Design Terminology](). But you can absolutely change these folders.

In the `src` directory, under `nunjucks`, you'll find folders that start with an `_` and folders that don't. The folders with `_` are partial nunjucks templates that only get rendered inside other nunjucks files. Folders without the `_` get rendered to the `/dist/` folder as actual HTML files, including the folders, so these can represent your routes. 

`_atoms`: is where you put your individual pieces of UI.
`_includes`: is where partials for the UI Kit live, these do not represent anything in your Library.
`_molecules`: is where you put larger pieces of UI, typically made up of simple HTML elements and elements from your `_atoms` folder.
`_organisms`: is where you put even larger pieces of the UI, typically these can exist on their own in a page and are made up of elements from your `_molecules` and/or `_atoms` folder.
`atoms`: is a folder that holds and index file where you add the items from your `_atoms` folder so that you can see them.
`molecules`: is a folder that holds and index file where you add the items from your `_molecules` folder so that you can see them.
`organisms`: is a folder that holds and index file where you add the items from your `_organisms` folder so that you can see them.
`pages`: has an index file where you can add links to other files you add here. The files you add here represent pages w/o any UI Kit code so you can compose organisms w/o any style bleed from the UI kit. 

`template.njk` is the base template for the UI Kit.

### Pages

## Sass

## Webfonts

## Images

## Javascript
- make more bundles if you want