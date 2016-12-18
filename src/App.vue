<template>
  <div id="app">
    <div style="background-color: #fff; height: 100vh;"></div>
    <div style="position: relative; z-index: 9999; background-color: #fff;">
      <h1 style="margin:0;">Parallax Effect</h1>
      <parallax>
        <img src="static/img/pexels-photo-241307.jpeg">
      </parallax>
    </div>
    <div style="background-color: #fff; height: 100vh;"></div>
    <h1>Parallax fixed position </h1>

    <div style="position: relative;">
      <parallax :fixed="true">
        <img src="static/img/pexels-photo-196416.jpeg">
      </parallax>
    <div>

    <div style="background-color: #fff; height: 100vh;"></div>
  </div>
</template>

<script>
import Parallax from './components/Parallax'

export default {
  name: 'app',
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
