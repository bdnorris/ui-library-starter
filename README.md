# UI Library Starter

Custom static site builder with Nunjucks, JS Modules and SCSS, meant to help you build UI Libraries for use on other sites for rapid development.

## UI Kit vs Library

"UI Kit" refers to the tooling itself and this site that lets you view your components as you're developing.

"Library" refers to the bundled js and css files that are created that you can use in your projects. 

There are folders for "UI Kit" and "Library" in the JS and SCSS directories to help split these out. 

While the JS and CSS files are separate, they are both included when you run this project with Browsersync, meaning there will be bleed from one to the other. Customize and fix any issues you find to your liking. If what you're fixing is a bug, please fix this main repo at https://bitbucket.org/marlinnetwork/ui-library-starter/src.

Also note that the way components are shown here may give a false impression regarding margins, max-widths, positioning, etc. Use the Pages feature to vet your components in a more "raw" environment.

## Getting Started

`yarn dev` or `npm dev` to build, watch, and run browsersync.

`yarn build` to build styles for production and stop.

[BrowserSync](https://browsersync.io/)

## Using this Kit

This kit uses gulp and webpack to compile your Scss and JS files to compressed bundles that you can use in your other projects and CMS setups. It uses [nunjucks](https://mozilla.github.io/nunjucks/) for templating. 

All your files will be in the `src` directory. 

### Atoms, Molecules, Organisms, and folders

Out of the box, we're using [Atomic Design Terminology](https://bradfrost.com/blog/post/atomic-web-design/). But you can absolutely change these folders.

In the `src` directory, under `nunjucks`, you'll find folders that start with an `_` and folders that don't. The folders with `_` are partial Nunjucks templates that only get rendered inside other Nunjucks files. Folders without the `_` get rendered to the `/dist/` folder as actual HTML files, including the folders, so these can represent your routes. 

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

Pages get rendered to HTML files without any UI Kit templating or dependencies to allow you to view organisms together without any interference.
## Sass

Scss files are rendered using gulp-sass, postcss (w/ autoprefixer), optional sourcemaps, and cssnano into one "Library" file. But that's the default, this is all configurable via the gulp file, and if you want to split your CSS code into more files, this is also doable by adding another `.scss` file without an underscore in `/src/scss/library/`. 

New files will need to be included near the closing body tag of the main templates and any pages you make. 

Note that the styles do require a different command for production builds as noted above. 

- [Gulp-Sass](https://www.npmjs.com/package/gulp-sass)
- [Postcss](https://github.com/postcss/gulp-postcss)
- [Autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [Sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
- [CSSNano](https://www.npmjs.com/package/gulp-cssnano)

## Webfonts and Miscellaneous Files

Webfonts and other static files are the trickiest thing in this process as routes to those files set in your CSS may not work with the system you're integrating with. I don't have a great solve for this other than to adapt this tool to your projects needs rather than the other way around.

That being said, the `/static` folder allows the simple copying of it's contents to the `/dist` file with no transformations. You might do well do make the /static folder mirror your project. 

If paths end up being a problem, it can perhaps be solved by using [Gulp Pipe](https://gulpjs.com/docs/en/getting-started/working-with-files/) functions to exercise greater control of copying of files in your build process. 
## Images

As noted, static files and paths are tricky with this setup. In the case of images, you can either put them in the `/static` folder where they will be copied to the `/dist` folder, or, you can put them in `/src/images` where they will be shrunk with `imagemin`.

However, most of the time, it's advisable to use placeholder images in this kit, and use SVGs as data-uris in the case of icons. 

## Javascript

Javascript files are processed by Gulp through the Gulp `webpack-stream` plugin. This allows basic Babel transpiling for older browsers while also allowing the convenience of installing modules from NPM. 

Note that using this kit that certain things may not work via javascript and will have to be tested in your actual project (like analytics). 

[Core-js](https://github.com/zloirock/core-js) is included as a dependency, but note that you should only include these polyfills in your bundle if you actually need them. 

[Webpack](https://webpack.js.org/) settings are controlled via a `webpack.config.js` in the root of this project. There you will note the entry-points of `library.js` and `uikit.js`. However, you can always add more if you want to split up your code by adding entry point files in `/src/js` and then adding them to this config file (they'll need to be included near the closing body tag of the main templates and any pages you make). 

Note that by default JS builds are for production regardless of whether you run the `build` or the `dev` commands. But, the gulp-sourcemaps library does support JS files as well.