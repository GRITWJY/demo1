<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>


      <el-main>
        <div id="map" v-show="ismap"></div>
        <div style="position:absolute"><img src="../assets/map.png" v-show="isnomap" style="width: 100%; height: 100%"></div>
        <el-popover
          v-show="isnomap"
          placement="top-start"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          <div slot="reference" style="position:absolute; margin-left: 100px; margin-top: 100px"><font-awesome-icon icon="map-marker" class="fa-2x icons" style="color: blue" @click="smallview"></font-awesome-icon></div>
        </el-popover>

        <el-popover
          v-show="isnomap"
          placement="top-start"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          <div slot="reference" style="position:absolute; margin-left: 190px; margin-top: 160px"><font-awesome-icon icon="map-marker" class="fa-2x icons" style="color: blue" @click="smallview"></font-awesome-icon></div>
        </el-popover>

        <el-popover
          v-show="isnomap"
          placement="top-start"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          <div slot="reference" style="position:absolute; margin-left: 290px; margin-top: 490px"><font-awesome-icon icon="map-marker" class="fa-2x icons" style="color: blue" @click="smallview"></font-awesome-icon></div>
        </el-popover>
      </el-main>
    </el-container>
  </el-container>

</template>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
#map{
  width: 800px;
  height: 600px;
  border: 1px solid red;
}
.icons :hover{
  color: #42b983;
  cursor: pointer;
}
.el-aside {
  color: #333;
}
</style>

<script>
import echarts from "echarts"
import $ from "jquery"
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item),
      ismap:true,
      isnomap:false,
    }
  },
  methods:{
    generate(){
      var _this = this;
      var data11 = [
        {name:"黄陂区",value:"0"},
        {name:"新洲市",value:"0"},
        {name:"东西湖区",value:"0"},
        {name:"江岸区",value:"0"},
        {name:"江汉区",value:"0"},
        {name:"洪山区",value:"0"},
        {name:"青山区",value:"0"},
        {name:"武昌区",value:"0"},
        {name:"汉阳区",value:"0"},
        {name:"蔡甸区",value:"0"},
        {name:"硚口区",value:"0"},
        {name:"江夏区",value:"0"},
        {name:"汉南区",value:"0"},
      ];
      $.getJSON('/mapp.json', (data) => {
        echarts.registerMap('hubei', data);
        var chart = echarts.init(document.getElementById('map'));
        var option = {
          backgroundColor: '#404a59',
          title: {
            text: '湖北地图',
            color:"#fff"
          },
          visualMap: {
            show:false,
            left: 'right',
            categories: ['1',],
            inRange: {
              color: ['#f46d43']
            },
            text:['High','Low'],  // 文本，默认为数值文本
            calculable: true
          },
          series: [{
            type: 'map',
            map: 'hubei',
            data: data11,
            aspectScale:1,//保持原始比例
            roam: true,
            label: {
              show:true,
              normal: {
                show: true,
                color:"#fff",
              },
              emphasis: {
                show: true,
                fontSize:16,
                color:"#fff"

              }
            },
            itemStyle: {
              normal: {
                areaColor: '#323c48',
                borderColor: '#111'
              },
              emphasis: {//鼠标移入高亮显颜色
                areaColor: '#f46d43'
              }
            }

          }]
        };
        chart.setOption(option);
        chart.on('click', function(params){
          console.log(params);//此处写点击事件内容
          for(var i=0;i<data11.length;i++){
            data11[i].value="0";
            if(params.name == data11[i].name){
              data11[i].value="1";
            }
          }
          chart.setOption(option);
          _this.ismap = false;
          _this.isnomap = true;

        });
      });
    },
    smallview(){

    }
  },
  created() {
   this.generate();
  }
};
</script>



