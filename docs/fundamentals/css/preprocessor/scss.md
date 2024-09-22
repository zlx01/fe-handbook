# [sass/scss](https://sass-lang.com/)

## sass vs scss

* SASS（缩进语法）：采用缩进和换行的方式来表示层级关系
* SCSS（Sassy CSS）：是 CSS 的超集，完全兼容 CSS，层级关系通过 {} 和 ; 表示

## Comment

```scss
// This comment won't be included in the CSS.
// This is also commented out.

/* But this comment will, except in compressed mode.

/* It can also contain interpolation:
1 + 1 = #{1 + 1}

/*! This comment will be included even in compressed mode.

p /* Multi-line comments can be written anywhere
  * whitespace is allowed. */ .sans {
  font-family: Helvetica, sans-serif;
}

/// Computes an exponent.
///
/// @param {number} $base
///   The number to multiply by itself.
/// @param {integer (unitless)} $exponent
///   The number of `$base`s to multiply together.
/// @return {number} `$base` to the power of `$exponent`.
@function pow($base, $exponent) {
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}
```

## Nesting

Parent Reference   &

```scss
ul > {
  li {
    list-style-type: none;
  }
}

h2 {
  + p {
    border-top: 1px solid gray;
  }
}

p {
  ~ {
    span {
      opacity: 0.8;
    }
  }
}

.accordion {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
  font-family: "Raleway", sans-serif;
  background: #f4f4f4;

  &__copy {
    display: none;
    padding: 1rem 1.5rem 2rem 1.5rem;
    color: gray;
    line-height: 1.6;
    font-size: 14px;
    font-weight: 500;

    &--open {
      display: block;
    }
  }
}
```

## Variables

```scss
$primary-color: #333;

body {
  font: 100% Helvetica, sans-serif;
  color: $primary-color;
}
```

### Default Values

```scss
// _library.scss
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

code {
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}

// style.scss
@use 'library' with (
  $black: #222,
  $border-radius: 0.1rem
);
```

### Built-in Variables

```scss
@use "sass:math" as math;

// This assignment will fail.
math.$pi: 0;
```

### Scope

```scss
$global-variable: global value;

.content {
  $local-variable: local value;
  global: $global-variable;
  local: $local-variable;
}

.sidebar {
  global: $global-variable;

  // This would fail, because $local-variable isn't in scope:
  // local: $local-variable;
}
```

### Shadowing

```scss
$variable: global value;

.content {
  $variable: local value;
  value: $variable;
}

.sidebar {
  value: $variable;
}


.content {
  value: local value;
}

.sidebar {
  value: global value;
}
```





## Interpolation

```scss
@mixin corner-icon($name, $top-or-bottom, $left-or-right) {
  .icon-#{$name} {
    background-image: url("/icons/#{$name}.svg");
    position: absolute;
    #{$top-or-bottom}: 0;
    #{$left-or-right}: 0;
  }
}

@include corner-icon("mail", top, left);
```



```scss
@mixin define-emoji($name, $glyph) {
  span.emoji-#{$name} {
    font-family: IconFont;
    font-variant: normal;
    font-weight: normal;
    content: $glyph;
  }
}

@include define-emoji("women-holding-hands", "👭");
```

## At-Rules

### @mixin and @include

```scss
@mixin card-style {
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card {
  @include card-style;
}
```

**带参数的 `@mixin`**

```scss
@mixin button-style($color, $padding: 10px) {
  padding: $padding;
  background-color: $color;
  color: white;
  border: none;
  border-radius: 5px;
}

button.primary {
  @include button-style(#4CAF50);  // 传入一个参数
}

button.secondary {
  @include button-style(#FF5722, 15px);  // 传入两个参数
}
```

使用 `@content` 插入动态内容

```scss
@mixin container-style {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;

  @content; // 占位符，允许插入内容
}

.section {
  @include container-style {
    color: blue;
    font-size: 18px;
  }
}
```

### @function

与 `@mixin` 不同，`@function` 用于返回一个值（通常是计算结果），而不是一组样式规则。

```scss
@function calculate-spacing($multiplier) {
  @return $multiplier * 8px;
}

.container {
  padding: calculate-spacing(2); // 调用自定义函数
  margin: calculate-spacing(3);
}

@function opacity($color, $alpha) {
  @return rgba($color, $alpha);
}

.button {
  background-color: opacity(#3498db, 0.5);
}
```

带有多个参数的函数

```scss
@function calculate-width($columns, $gutter-width: 20px) {
  @return ($columns * 100px) + (($columns - 1) * $gutter-width);
}

.grid {
  width: calculate-width(4); // 使用默认的 $gutter-width
}

.grid-large {
  width: calculate-width(4, 30px); // 使用自定义的 $gutter-width
}
```

在函数中使用条件判断

```scss
@function is-even($number) {
  @if ($number % 2 == 0) {
    @return true;
  } @else {
    @return false;
  }
}

.grid-item {
  @if is-even(3) {
    background-color: red;
  } @else {
    background-color: blue;
  }
}
```

**`@function` 和 `@mixin` 的区别**

* **返回值**：`@function` 总是返回一个具体的值（如颜色、长度、数字等），并且必须用 `@return` 返回值。而 `@mixin` 用来生成一组样式规则。
* **调用方式**：`@function` 被调用时，会像普通的 CSS 函数那样使用，嵌入在属性值中；而 `@mixin` 则直接生成代码块，需要使用 `@include` 进行调用。

### @extend

```scss
.button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
}

.primary-button {
  @extend .button;
  font-weight: bold;
}
```

`@extend` 只能继承同一层级的选择器。如果你试图继承嵌套选择器，它可能无法正常工作。

```scss
.navbar {
  .nav-item {
    color: white;
  }
}

.special-nav {
  @extend .nav-item;  // 这个不会继承成功，因为 .nav-item 是嵌套的
}
```





**`@extend` 与 `@mixin` 的区别**

* **`@extend`**：用于选择器的继承，会将样式与原选择器合并。
* **`@mixin`**：用于封装可复用的样式代码块，需要通过 `@include` 来插入这段样式。

### @import

```less
// 导入名为 "colors.scss" 的文件
@import 'colors';

body {
  color: $primary-color; // 直接使用 colors.scss 中定义的变量
}
```

在导入 `.scss` 文件时，扩展名可以省略。

如果你要导入一个 CSS 文件，则需要明确写出 `.css` 扩展名。

```scss
@import 'reset'; // 导入 _reset.scss 或 reset.scss
@import 'normalize.css'; // 导入 CSS 文件
```

`@import` 的局限性

1. **全局作用域：**
   * `@import` 会把导入的所有内容（变量、函数、混入等）放在全局作用域中。这意味着如果有两个导入文件定义了同名变量，可能会导致变量被覆盖，产生命名冲突。
2. **重复加载：**
   * 如果多个文件多次导入同一个文件，`@import` 会导致重复加载，影响编译性能。重复导入的文件将不会被去重。
3. **不能共享配置：**
   * 由于 `@import` 没有模块隔离机制，不能在导入时修改导入文件中的变量。要实现模块化或对模块进行配置，使用 `@use` 更合适。
4. **性能问题：**
   * 每次 `@import` 文件时，都会将其内容合并到主文件中。如果导入的文件过多，可能会影响编译时间和性能。

### @use

**默认命名空间**：导入的模块中的变量、函数和混入会自动有一个与文件名相同的命名空间。

```scss
// colors.scss
$primary-color: #333;
$secondary-color: #fff;

// main.scss
@use 'colors';

h1 {
  color: colors.$primary-color;
}
```

自定义命名空间

```scss
@use 'colors' as c;

h1 {
  color: c.$primary-color;
}
```

如果不想使用命名空间，可以使用 `*` 作为命名空间前缀

```scss
@use 'colors' as *;

h1 {
  color: $primary-color;  // 直接使用变量
}
```

如果模块中有配置变量，可以使用 `@use` 的 `with` 选项传递新的值进行配置。

```scss
// _button.scss
$button-color: blue !default;

button {
  background-color: $button-color;
}

// main.scss
@use 'button' with (
  $button-color: red
);

```

### `@use` 与 `@import` 的区别

1. **命名空间**：`@use` 默认要求通过模块的命名空间来访问内容，避免了命名冲突，而 `@import` 是全局导入，容易引发冲突。
2. **性能**：`@use` 只会导入一次模块，即使在多个地方使用，而 `@import` 会重复加载。
3. **配置变量**：`@import` 没有 `@use` 的 `with` 选项，无法在导入时对模块中的变量进行配置。
4. **模块化设计**：`@use` 推动了更好的模块化开发，鼓励开发者将 SCSS 文件分解成更小的可复用部分。

### @forward

```scss
// _colors.scss
$primary-color: #4CAF50;
$secondary-color: #FF5722;

// _typography.scss
$base-font-size: 16px;
$heading-font-size: 24px;

// _theme.scss
@forward 'colors';
@forward 'typography';

// main.scss
@use 'theme';

body {
  font-size: theme.$base-font-size;
  color: theme.$primary-color;
}
```

`@forward` 与 `@import` 的区别

* **作用域**：`@import` 导入的文件会将所有内容暴露到全局，而 `@forward` 只会转发内容，不直接在当前文件中使用，转发的内容还需要通过 `@use` 来访问。
* **模块化**：`@forward` 提供了更加模块化的方式，可以控制哪些内容被暴露，哪些被隐藏，提供更好的封装性和可维护性。

`@forward` 与 `@use` 的搭配

通常情况下，`@forward` 和 `@use` 是搭配使用的。`@forward` 定义模块的接口，而 `@use` 则负责导入和使用这些接口。

```scss
// _colors.scss
$primary-color: #4CAF50;
$secondary-color: #FF5722;

// _theme.scss
@forward 'colors';

// main.scss
@use 'theme';

h1 {
  color: theme.$primary-color;
}
```

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

## Values

### List

```scss
$font-sizes: 12px 14px 16px;

$colors: red, green, blue;

$empty-list: ();

.first-color {
  color: nth($colors, 1);  // 访问第一个元素
}

.second-color {
  color: nth($colors, 2);  // 访问第二个元素
}

.font-list-length {
  content: length($font-sizes);  // 返回 3
}
```

向列表添加元素

```scss
$colors: red, green, blue;

// 向列表中添加颜色
$new-colors: append($colors, yellow);

// 向逗号分隔的列表添加颜色
$new-colors-comma: append($colors, yellow, comma);

$new-colors: red green blue yellow;
$new-colors-comma: red, green, blue, yellow;
```

合并两个列表

```scss
$list1: 10px 20px;
$list2: 30px 40px;

// 合并列表
$combined-list: join($list1, $list2);

// 使用逗号分隔符合并
$combined-list-comma: join($list1, $list2, comma);

$combined-list: 10px 20px 30px 40px;
$combined-list-comma: 10px 20px, 30px 40px;
```

移除列表中的元素

```scss
$colors: red, green, blue;

// 移除第二个元素
$new-colors: remove($colors, 2);

$new-colors: red blue;
```

判断列表是否包含某个元素

```scss
$colors: red, green, blue;

$color-index: index($colors, green);  // 返回 2
$missing-index: index($colors, yellow);  // 返回 null
```

**循环遍历列表**

```scss
$colors: red, green, blue;

@each $color in $colors {
  .color-#{$color} {
    color: $color;
  }
}
```



### Map

```scss
@use "sass:map";

$theme-colors: (
  "success": #28a745,
  "info": #17a2b8,
  "warning": #ffc107,
);

.alert {
  // Instead of $theme-color-#{warning}
  background-color: map.get($theme-colors, "warning");
}
```

添加或更新 Map 中的键值对

```scss
$colors: (
  primary: #3498db,
  secondary: #2ecc71
);

// 更新 primary 和添加 danger
$new-colors: map-merge($colors, (primary: #2980b9, danger: #e74c3c));
```

删除 Map 中的键值对

```scss
$colors: (
  primary: #3498db,
  secondary: #2ecc71,
  danger: #e74c3c
);

// 移除 danger 键
$new-colors: map-remove($colors, danger);
```

获取 Map 的所有键或值

```scss
$colors: (
  primary: #3498db,
  secondary: #2ecc71,
  danger: #e74c3c
);

$keys: map-keys($colors);    // 返回: primary, secondary, danger
$values: map-values($colors); // 返回: #3498db, #2ecc71, #e74c3c
```

检查 Map 中是否包含某个键

```scss
$colors: (
  primary: #3498db,
  secondary: #2ecc71
);

$has-danger: map-has-key($colors, danger);  // 返回 false
$has-primary: map-has-key($colors, primary);  // 返回 true
```

遍历 Map

```scss
$colors: (
  primary: #3498db,
  secondary: #2ecc71,
  danger: #e74c3c
);

@each $key, $color in $colors {
  .#{$key}-text {
    color: $color;
  }
}
```


## Custom Properties

```scss
$primary: #81899b;
$accent: #302e24;
$warn: #dfa612;

:root {
  --primary: #{$primary};
  --accent: #{$accent};
  --warn: #{$warn};

  // Even though this looks like a Sass variable, it's valid CSS so it's not
  // evaluated.
  --consumed-by-js: $primary;
}

:root {
  --primary: #81899b;
  --accent: #302e24;
  --warn: #dfa612;
  --consumed-by-js: $primary;
}
```

## Built-In Modules

* The `sass:math` module provides functions that operate on numbers.
* The `ass:string` module makes it easy to combine, search, or split apart strings.
* The `sass:color` module generates new colors based on existing ones, making it easy to build color themes.
* The `sass:list` module lets you access and modify values in lists.
* The `sass:map` module makes it possible to look up the value associated with a key in a map, and much more.
* The `sass:selector` module provides access to Sass’s powerful selector engine.
* The `sass:meta` module exposes the details of Sass’s inner workings.



## Complex Examples

```scss
@use "sass:list";
@use "sass:meta";
@use "sass:string";

/// Return a copy of $list with all elements for which $condition returns `true`
/// removed.
@function remove-where($list, $condition) {
  $new-list: ();
  $separator: list.separator($list);
  @each $element in $list {
    @if not meta.call($condition, $element) {
      $new-list: list.append($new-list, $element, $separator: $separator);
    }
  }
  @return $new-list;
}

$fonts: Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;

.content {
  @function contains-helvetica($string) {
    @return string.index($string, "Helvetica");
  }
  font-family: remove-where($fonts, meta.get-function("contains-helvetica"));
}
```

