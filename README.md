# vue-parallaxy
[![npm version](https://badge.fury.io/js/vue-parallaxy.svg)](https://badge.fury.io/js/vue-parallaxy)
[![vue3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://vuejs.org/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/apertureless/vue-parallax/blob/master/LICENSE.txt)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/C0C1WP7C)

Is a component for fast 60fps parallax scroll effects in Vue 3.

## Demo

[Demo here](https://apertureless.github.io/vue-parallax/)

## Install

`npm install vue-parallaxy` or `yarn add vue-parallaxy`

Peer dependency: `vue` `^3.2.0`

Vue 2 projects should stay on `vue-parallaxy@1`.

## Usage
*vue-parallax* works with slots. So you can pass an image or even srcsets for better mobile experiences.

```html
<!-- Image.vue -->

<template>
  <parallax>
    <img src="path/cool-background-image.jpg" alt="very cool bg">
  </parallax>
</template>

<script>
  import Parallax from 'vue-parallaxy'
  import 'vue-parallaxy/style.css'

  export default {
    components: {
      Parallax
    }
  }
</script>
```


## Props

| Prop   |      Type      |  Default Value | Description
|----------|:-------------:|------|------|
| parallax |  Boolean | true | Activates parallax effect |
| speedFactor |  Number   | 0.15 | factor on how strong the effect is|
| direction |  String   | 'up' | Either 'up' or 'down', determines scroll direction of image |
| fixed | Boolean | false | Other parallax effect. Image is fixed in position |
| sectionHeight | Number | 70 | section height for mobile |
| breakpoint | String | '(min-width: 968px)' | Media query for mobile deactivation |
| sectionClass | String | 'Masthead' | CSS class of the outer section tag |
| containerClass | String | 'Masthead__image' | CSS class of the container holding the  image |
| parallaxClass | String | 'is-parallax' | Modifier class for the parallax effect |
| fixedClass | String | 'is-fixed' | Modifier class for the fixed parallax effect |

## Customizing

You can change some of the behavior by changing the css classes. To be more clean, you can change them over the props. No need to overwrite or `!important` the existing classes.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:5173
npm run dev

# build library for production
npm run build

# run unit tests
npm run unit

# run all tests
npm test
```

## Contributing

1. Fork it ( https://github.com/apertureless/vue-parallax/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## License

This software is distributed under [MIT license](LICENSE.txt).
