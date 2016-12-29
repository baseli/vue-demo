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
        <div class="top_nav">
            <ul class="user-nav">
                <li class="user">
                    <el-badge :value="2" class="item">
                        <i class="el-icon-message"></i>
                    </el-badge>
                </li>
                <li class="operation">
                    <span class="pic"></span>
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item>双皮奶</el-dropdown-item>
                        <el-dropdown-item>蚵仔煎</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                </li>
            </ul>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
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
    display: flex;
    flex-direction: row;
}
.left_bar {
    flex: 0 0 15%;
    background: #324057;
    overflow-y: auto;
}
.right_bar {
    display: flex;
    flex-direction: column;
    flex: 1;
}
.right_bar > .top_nav {
    flex: 0 0 3em;
    background: #ededed;
    border-bottom: 1px solid #D9DEE4;
}
.right_bar > .content {
    flex: 1;
    overflow-y: auto;
    margin: 10px;
}
.user-nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 100%;
    margin: 0;
}
.user-nav > li {
    list-style: none;
}
.user-nav > .user {
    cursor: pointer;
    flex: 0 0 45px;
    display: flex;
    justify-content: center;
}
.user-nav > .user:hover, .user-nav > .operation:hover {
    background: #d9dee4;
}
.user-nav > .user > div {
    align-self: center;
}
.user-nav > .operation {
    cursor: pointer;
    flex: 0 0 10em;
    display: flex;
    justify-content: center;
}
.user-nav > .operation > div,span {
    align-self: center;
}
.pic {
    display: block;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background: url('./assets/user.jpg') no-repeat;
    background-size: 100% 100%;
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
.el-badge__content {
    width: 1px;
    background-color: #1abb9c;
}
</style>
