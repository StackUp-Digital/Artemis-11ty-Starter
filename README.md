# Static Template Generator

The static template generator is a tool designed to help with the creation of static
templates for client projects.

## Things to consider

This was created with [11ty](https://www.11ty.dev/), a very simple static site generator. Additional documentation can be found on the 11ty website. Assets are compiled with Gulp. The provided gulpfile has been configured to handle the compilation of `.scss` files.

The dependencies have been acquired through [Yarn](https://yarnpkg.com). Therefore, to get started you will need to install the project dependencies with the following command:

```
yarn install
```

## Useful Scripts

**Run the local web server and compile assets locally**

```shell
yarn dev
```

**Build the project for production**

```shell
yarn prod
```

**Lint code (at the moment, scss only)**

```shell
yarn lint
```

## Asset Pipeline

We have used [laravel mix](https://laravel-mix.com/) to bundle assets. Mix is responsible for generating css with scss as well as transpiling JavaScript files. Let's take a look at the contents of the `webpack.mix.js` file.

```js
// Laravel Mix
const mix = require('laravel-mix')

// Define paths
const paths = {
  scss: {
    source: './resources/styles/styles.scss',
    dest: './assets/css/',
  },
  js: {
    source: './resources/js/index.js',
    dest: './assets/js/',
  },
}

// Compile the scss code
mix.sass(paths.scss.source, paths.scss.dest).js(paths.js.source, paths.js.dest)

// If production, minify css/js
if (mix.inProduction()) {
  mix.minify(paths.scss.dest + 'styles.css').minify(paths.js.dest + 'index.js')
}
```

If you need to configure this at any point then feel free to do so, additional API information can be retrieved on the [Mix Documentation](https://laravel-mix.com/docs/5.0/installation)

## Using Netlify Dev

The holding page uses a netlify function as part of an integration we have created with the Klaviyo API. To work with this function locally we would advise using Netlify's CLI tool.

Start by installing the cli tool globally:

```
$ npm i netlify-cli -g
```

Once installed, simply run:

```
$ netlify dev
```

Netlify Dev should take care of everything from there, however, if you experience any issues please raise this with the team or raise an issue in Github.

## Questions or Issues?

If you have any issues getting started or feel like the documentation is missing some information then please feel free to raise an issue against this repository.
