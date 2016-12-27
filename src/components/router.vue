<template lang="html">
    <el-menu default-active="1" class="el-menu-vertical-demo" theme="dark" :unique-opened=true :router=true>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>入职数据</template>
        <router-link to="/foo" tag="li" class="el-menu-item" active-class="is-active">公司信息</router-link>
        <router-link to="/hello" tag="li" class="el-menu-item" active-class="is-active">员工信息</router-link>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>考勤数据</template>
        <router-link to="/hello" tag="li" class="el-menu-item" active-class="is-active">foo</router-link>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>晋升数据</template>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-message"></i>离职数据</template>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-message"></i>全年汇总</template>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name: 'router'
}

</script>

<style lang="css">
</style>
