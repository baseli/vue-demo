<template lang="html">
    <el-row :gutter="20">
        <el-col :span=8>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="line-height: 36px;">卡片名称</span>
                <el-button style="float: right;" type="primary">操作按钮</el-button>
              </div>
              <div id="test" @click=test()></div>
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
import Ajax from '../ajax.js'
export default {
    mounted: function() {
        Ajax.login({}, function(res) {
            alert(res)
        })
        
        var echarts = require('echarts');

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('test'));
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    },
    methods: {
        test: function() {
            alert(1);
        }
    }
}
</script>

<style lang="css">
.el-card__header {
    padding: 10px;
}
#test {
    height: 600px;
}
</style>
