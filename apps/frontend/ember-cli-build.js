'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');
const UnwatchedDir = require('broccoli-source').UnwatchedDir;
const MergeTrees = require('broccoli-merge-trees');
const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        // track changes in template, css, scss, and tailwind config files
        cacheInclude: [/.*\.(css|scss|hbs)$/, /.tailwind\/config\.js$/],
        extension: 'scss',
        parser: require('postcss-scss'),
        plugins: [
          {
            module: require('@csstools/postcss-sass'),
            options: {
              includePaths: ['../../node_modules', 'node_modules'],
            },
          },
          {
            module: autoprefixer,
            options: {},
          },
          {
            module: tailwind,
            options: {
              config: './app/styles/tailwind/config.js',
            },
          },
        ],
      },
    },
  });

  const fonts = ['inter'].map(
    (font) =>
      // @ts-ignore
      new Funnel(new UnwatchedDir(`../../node_modules/@fontsource/${font}/files`), {
        destDir: `assets/@fontsource/${font}`,
        include: ['*.eot', '*.ttf', '*.woff', '*.woff2'],
      }),
  );

  return MergeTrees([app.toTree(), ...fonts]);
};
