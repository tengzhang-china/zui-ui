<template>
  <div
    class="tong-calendar"
    :style="{ height: height ? height + 'px' : '100%' }"
  >
    <div ref="chart"></div>
  </div>
</template>
<script>
import commonMixin from "../../commonMixin";
export default {
  name: "tongCalendar",
  mixins: [commonMixin],
  props: {
    type: {
      type: String | Number,
      default: -1,
    },
    cellSize: {
      type: Array,
      default: function () {
        return [];
      },
    },

    selectedItemStyle:{
      type:Object,
      default:function(){
        return {
          borderColor: "#000",
        }
      }
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    getOption() {
      let option = this.setOption();

      delete option.xAxis;
      delete option.yAxis;
      delete option.grid;
      delete option.legend;

      option.tooltip = this.tooltip || {
        position: "top",
      };
      if (this.cellSize.length > 0) option.calendar.cellSize = this.cellSize;

      return option;
    },

    /**
     * 选中节点
     */
    select(params) {
      let option = this.getOption();
      option.series.forEach(ele=>{
        ele.data.forEach(ele1=>{

          if(ele1.value[0] === params.data.value[0]){
            ele1.itemStyle = this.selectedItemStyle
          }else{
            ele1.itemStyle = {}
          }
        })
      })
      this.$nextTick(()=>{
        this.chartInstance.setOption(option)
      })
    },

    /**
     * 展示单个月份日历
     */
    setByOneMonth() {},
  },
};
</script>
<style lang='scss' scoped>
.tong-calendar {
  div {
    height: 100%;
  }
}
</style>