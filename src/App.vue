<template>
  <div id="app">
    <div class="left_bar">
        <div class="logo">
            <a href="/"></a>
        </div>

        <div class="user">

        </div>
        <RouterComponent></RouterComponent>
    </div>
    <div class="right_bar">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import RouterComponent from './components/router.vue'

export default {
  name: 'app',
  components: {
      RouterComponent
  }
}
</script>

<style scoped>
#app {
    width: 100vw;
    height: 100vh;
}
.left_bar {
    width: 20vw;
    height: 100vh;
    float: left;
    background: #324057;
    overflow-y: auto;
}
.right_bar {
    width: calc(80vw - 20px);
    height: 100vh;
    float: left;
    overflow-y: auto;
    margin: 10px;
}
li > a {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-decoration: none;
}
.logo {
    height: 4em;
    text-align: center;
}
.logo a {
    display: inline-block;
    margin-top: .5em !important;
    height: 3em;
    width: 80%;
    margin: 0 auto;
    background: url('./assets/logo.png') no-repeat;
    background-size: 100% 100%;
}
</style>
