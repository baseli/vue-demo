<template lang="html">
    <el-row :gutter="20">
        <el-col :span=8>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="line-height: 36px;">卡片名称</span>
                <el-button style="float: right;" type="primary">操作按钮</el-button>
              </div>
              <div v-for="o in 4" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
        </el-col>
        <el-col :span=8>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="line-height: 36px;">卡片名称</span>
                <el-button style="float: right;" type="primary">操作按钮</el-button>
              </div>
              <div v-for="o in 4" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
        </el-col>
        <el-col :span=8>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="line-height: 36px;">卡片名称</span>
                <el-button style="float: right;" type="primary">操作按钮</el-button>
              </div>
              <div v-for="o in 4" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
}
</script>

<style lang="css">
.el-card__header {
    padding: 10px;
}
</style>
