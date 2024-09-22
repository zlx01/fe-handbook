# [less](http://lesscss.org/)

> The dynamic stylesheet language.


## Variables 变量

```less
// Variables
@link-color:        #428bca; // sea blue
@link-color-hover:  darken(@link-color, 10%);

// Usage
a,
.link {
  color: @link-color;
}
a:hover {
  color: @link-color-hover;
}
.widget {
  color: #fff;
  background: @link-color;
}
```

### Variable Interpolation

```less
// Variables
@my-selector: banner;

// Usage
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}

@property: color;

.widget {
  @{property}: #0ee;
  background-@{property}: #999;
}
```

### Variable Variables

```less
@primary:  green;
@secondary: blue;

.section {
  @color: primary;

  .element {
    color: @@color;
  }
}
```

###  Default Variables

```less
// library
@base-color: green;
@dark-color: darken(@base-color, 10%);

// use of library
@import "library.less";
@base-color: red;
```

## Nesting 嵌套

### Parent Selectors

```less
a {
  color: blue;
  &:hover {
    color: green;
  }
}

.button {
  &-ok {
    background-image: url("ok.png");
  }
  &-cancel {
    background-image: url("cancel.png");
  }

  &-custom {
    background-image: url("custom.png");
  }
}
```

## @import At-Rules

In standard CSS, `@import` at-rules must precede all other types of rules. But Less doesn't care where you put `@import` statements.

```less
.foo {
  background: #900;
}
@import "this-is-valid.less";
```

## Extend

Extend is a Less pseudo-class which merges the selector it is put on with ones that match what it references.

```less
nav ul {
  &:extend(.inline);
  background: blue;
}
.inline {
  color: red;
}
```

## Mixins 混合

```less
.a, #b {
  color: red;
}
.mixin-class {
  .a();
}
.mixin-id {
  #b();
}
```

If you want to create a mixin but you do not want that mixin to be in your CSS output, put parentheses after the mixin definition.

```less
.my-mixin {
  color: black;
}
.my-other-mixin() {
  background: white;
}
.class {
  .my-mixin();
  .my-other-mixin();
}
```

###  Namespaces 命名空间

```less
#outer() {
  .inner {
    color: red;
  }
}

.c {
  #outer.inner();
}

#my-library {
  .my-mixin() {
    color: black;
  }
}
// which can be used like this
.class {
  #my-library.my-mixin();
}
```



### Parametric Mixins

```less
.border-radius(@radius: 5px) {
  -webkit-border-radius: @radius;
     -moz-border-radius: @radius;
          border-radius: @radius;
}

#header {
  .border-radius();
}
```

### Overloading mixins

```less
.mixin(@color) {
  color-1: @color;
}
.mixin(@color, @padding: 2) {
  color-2: @color;
  padding-2: @padding;
}
.mixin(@color, @padding, @margin: 2) {
  color-3: @color;
  padding-3: @padding;
  margin: @margin @margin @margin @margin;
}
.some .selector div {
  .mixin(#008000);
}
```

### Named Parameters

```less
.mixin(@color: black; @margin: 10px; @padding: 20px) {
  color: @color;
  margin: @margin;
  padding: @padding;
}
.class1 {
  .mixin(@margin: 20px; @color: #33acfe);
}
.class2 {
  .mixin(#efca44; @padding: 40px);
}
```

### The `@arguments` Variable

```less
.box-shadow(@x: 0, @y: 0, @blur: 1px, @color: #000) {
  -webkit-box-shadow: @arguments;
     -moz-box-shadow: @arguments;
          box-shadow: @arguments;
}
.big-block {
  .box-shadow(2px, 5px);
}
```

### Advanced Arguments and the `@rest` Variable

```less
.mixin(...) {        // matches 0-N arguments
.mixin() {           // matches exactly 0 arguments
.mixin(@a: 1) {      // matches 0-1 arguments
.mixin(@a: 1, ...) { // matches 0-N arguments
.mixin(@a, ...) {    // matches 1-N arguments
    
.mixin(@a, @rest...) {
   // @rest is bound to arguments after @a
   // @arguments is bound to all arguments
}
```

### Pattern-matching

```less
.mixin(dark, @color) {
  color: darken(@color, 10%);
}
.mixin(light, @color) {
  color: lighten(@color, 10%);
}
.mixin(@_, @color) {
  display: block;
}

@switch: light;

.class {
  .mixin(@switch, #888);
}

.class {
  color: #a2a2a2;
  display: block;
}
```

###  Using Mixins as Functions

```less
.average(@x, @y) {
  @result: ((@x + @y) / 2);
}

div {
  // call a mixin and look up its "@result" value
  padding: .average(16px, 50px)[@result];
}
```

### Overriding mixin values

```less
// library.less
#library() {
  .mixin() {
    prop: foo;
  }
}

// customize.less
@import "library";
#library() {
  .mixin() {
    prop: bar;
  }
}

.box {
  my-value: #library.mixin[prop];
}

.box {
  my-value: bar;
}
```

### Recursive Mixins

```less
.generate-columns(4);

.generate-columns(@n, @i: 1) when (@i =< @n) {
  .column-@{i} {
    width: (@i * 100% / @n);
  }
  .generate-columns(@n, (@i + 1));
}

.column-1 {
  width: 25%;
}
.column-2 {
  width: 50%;
}
.column-3 {
  width: 75%;
}
.column-4 {
  width: 100%;
}
```

## Maps 映射

```less
@sizes: {
  mobile: 320px;
  tablet: 768px;
  desktop: 1024px;
}

.navbar {
  display: block;

  @media (min-width: @sizes[tablet]) {
    display: inline-block;
  }
}
```

## Scope

```less
#ns {
  @a: one;
  .mixin-1() {
    prop: @a;
  }
}
.rule {
  #ns.mixin-1();
}
```

## Functions

### Logical Functions

* if
* boolean

###  String Functions

* escape
* e
* % format
* replace

###  List Functions

* length

```less
@list: "banana", "tomato", "potato", "peach";
n: length(@list);

n: 4;
```

* extract

```less
@list: apple, pear, coconut, orange;
value: extract(@list, 3);

value: coconut;
```

* range

```less
value: range(4);
// output
value: 1 2 3 4;

value: range(10px, 30px, 10);
// output
value: 10px 20px 30px;
```

* each

```less
@selectors: blue, green, red;

each(@selectors, {
  .sel-@{value} {
    a: b;
  }
});

.sel-blue {
  a: b;
}
.sel-green {
  a: b;
}
.sel-red {
  a: b;
}
```

```less
@set: {
  one: blue;
  two: green;
  three: red;
}
.set {
  each(@set, {
    @{key}-@{index}: @value;
  });
}

.set {
  one-1: blue;
  two-2: green;
  three-3: red;
}
```

* Creating a `for` loop using `range` and `each`

```less
each(range(4), {
  .col-@{value} {
    height: (@value * 50px);
  }
});

.col-1 {
  height: 50px;
}
.col-2 {
  height: 100px;
}
.col-3 {
  height: 150px;
}
.col-4 {
  height: 200px;
}
```

###  Math Functions

* ceil
* floor
* round
* sqrt/pow
* pi/sin/cos/tan
* abs/min/max
* mod
* percentage

### Type Functions

* isnumber
* isstring
* iscolor
* isurl
* ispixel
* isem
* ispercentage
* isunit

### Misc Functions

### Color Functions
