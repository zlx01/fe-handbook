# [PostCSS](https://postcss.org/)

> PostCSS is a tool for transforming styles with JS plugins.
> PostCSS ≈ CSS 领域的 Babel

## [autoprefixer](https://github.com/postcss/autoprefixer)

> Parse CSS and add vendor prefixes to rules by Can I Use

## [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)

> A plugin for PostCSS that generates viewport units (vw, vh, vmin, vmax) from pixel units.

postcss.config.js
```js
module.exports = {
  'postcss-px-to-viewport': {
    viewportWidth: 375,
  },
};
```

## [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)

> Convert pixel units to rem (root em) units using PostCSS

## [cssnano](https://github.com/cssnano/cssnano)

> A modern, modular CSS minifier.
