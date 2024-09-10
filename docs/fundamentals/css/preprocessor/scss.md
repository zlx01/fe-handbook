# [sass/scss](https://sass-lang.com/)

## @forward

custom.scss
```scss
@forward '@element-plus/theme-chalk/src/mixins/config.scss' with (
  $namespace: 'ep'
);
```

config.scss
```scss
$namespace: 'el' !default;
$common-separator: '-' !default;
$element-separator: '__' !default;
$modifier-separator: '--' !default;
$state-prefix: 'is-' !default;
```

