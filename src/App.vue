<template>
  <div id="app">
    <div style="background-color: #fff; height: 100vh;">
      <h1 style="margin-top: 0; padding-top: 20px;">
        Scroll down ⬇
      </h1>
    </div>
    <div style="position: relative; z-index: 9999; background-color: #fff;">
      <h1 style="margin:0;">
        Parallax Effect
      </h1>
      <parallax>
        <img
          src="./assets/pexels-photo-241307.jpeg"
          alt="Parallax background"
        >
      </parallax>
    </div>
    <div style="background-color: #fff; height: 100vh;" />
    <h1>Parallax fixed position</h1>

    <div style="position: relative;">
      <parallax :fixed="true">
        <img
          src="./assets/pexels-photo-196416.jpeg"
          alt="Fixed parallax background"
        >
      </parallax>
    </div>

    <div style="background-color: #fff; height: 100vh;" />
  </div>
</template>

<script>
import Parallax from './components/Parallax.vue'

export default {
  name: 'App',
  components: {
    Parallax
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
