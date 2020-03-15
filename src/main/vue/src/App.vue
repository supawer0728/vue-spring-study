<template>
  <div id="app">
    <b-container>
      <gnb />
      <router-view />
    </b-container>
  </div>
</template>

<script>
  import Gnb from "./components/gnb/gnb";

  export default {
    name: 'App',
    components: {Gnb}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
