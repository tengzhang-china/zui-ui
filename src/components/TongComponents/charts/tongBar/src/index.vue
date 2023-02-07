<template>
  <div class="tong-bar" :style="{ height: height ? height + 'px' : '100%' }">
    <div ref="chart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import commonMixin from "../../commonMixin"
export default {
  name: "tongBar",
  mixins: [commonMixin],
  props:{
    type:{
      type:String|Number,
      default:-1
    },
    barWidth:{
      type:Number,
      default:20
    }
  },
  data: function () {
    return {
      img:require("./t.png"),
    };
  },
  methods: {
    getOption(){
      const config = {"1":this.setOption_3D};

      if(config[this.type]){
        return config[this.type]()
      }else{
        return this.setOption();
      }
    },

    /**
     * 添加3d配置项
     */
    setOption_3D(){
      let option = this.setOption();
      option.series.forEach(ele => {
        ele.type="bar";
        ele.barWidth=this.barWidth;
      });

      this.$nextTick(()=>{
        const yMax = this.chartInstance.getModel().getComponent('yAxis').axis.scale._extent[1];
        const minHeight_3d = ((this.barWidth/4 + 4)/this.height)*yMax;
        option.series.forEach(ele => {
          ele.data.forEach(ele1=>{
            ele1.label = {
              show:minHeight_3d<ele1.value,
              position:"top",
              formatter:"",
              padding:[this.barWidth/4 + 2,this.barWidth/2],
              offset:[0,this.barWidth/3 + 5],
              backgroundColor:{
                image:this.img
              },
            }
          })
        });
        this.chartInstance.setOption(option)
      })

      return option
    }
  },
};
</script>

<style scoped lang="scss">
.tong-bar {
  height: 100%;
}
</style>
