<template>
  <div class="tong-gant" :style="{ height: height ? height + 'px' : '100%' }">
    <div ref="chart" style="width: 100%; height: 100%"></div>
  </div>
</template>
<script>
import commonMixin from "../../commonMixin";
import { mergeObject } from "../../../js/usual";
export default {
  name: "tongGant",
  props: {
    type: {
      type: Number | String,
      default: -1,
    },

    colors: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  mixins: [commonMixin],
  components: {},
  data() {
    return {};
  },
  methods: {
    getOption() {
      const config = {
        1: this.setOption_normal,
      };

      if (config[this.type]) {
        return config[this.type]();
      } else {
        return this.setOption();
      }
    },

    setOption_normal() {
      let option = this.setOption();
      if (this.colors && this.colors.length > 0)
        option.color = this.colors.map((val) => val.bc);

      option.yAxis = [
        mergeObject(
          {
            splitLine: { show: false },
            splitArea: { show: true },
            // axisPointer:{show:false},
            inverse: true,
          },
          option.yAxis
        ),
      ];

      option.xAxis = [
        mergeObject(option.xAxis, {
          interval: 0,
          type: "value",
          position: "top",
          show: true,
          zlevel: 5,
        }),
        mergeObject(
          {
            type: "category",
            // axisPointer: {
            //   show: true,
            //   type: "shadow",
            //   shadowStyle:{
            //     color:"#dce8fe",
            //     opacity:.8
            //   },
            //   z:0
            // },
            position: "top",
            splitArea: {
              show: true,
            },
          },
          option.xAxis
        ),
      ];

      option.series[0].data.push(this.xAxis.data.length-1);

      option.series = option.series.map((val, index) => {
        if (index % 2 === 1) {
          option.series[index].data.forEach((ele, i) => {
            ele.itemStyle = {
              color: this.colors[i]
                ? this.colors[i].bc
                : option.color[i]
            }

            if(index===1){
              ele.itemStyle.shadowColor = this.colors[i]
                  ? this.colors[i].borderColor
                  : option.color[i]
              ele.itemStyle.shadowOffsetX = -2;

              ele.label = {
                color: this.colors[i]
                  ? this.colors[i].borderColor
                  : option.color[i],
              };
            }
          });
        }

        return index % 2 === 0
          ? mergeObject(
              {
                stack: "stack",
                label: {
                  show: false,
                },
                itemStyle: {
                  barBorderColor: "rgba(0,0,0,0)",
                  color: "rgba(0,0,0,0)",
                },
                emphasis: {
                  itemStyle: {
                    barBorderColor: "rgba(0,0,0,0)",
                    color: "rgba(0,0,0,0)",
                  },
                },
              },
              option.series[index]
            )
          : mergeObject(
              {
                stack: "stack",
              },
              option.series[index]
            );
      });

      option.dataZoom = mergeObject({
        type:"inside",
        xAxisIndex:[0,1],
        filterMode:"none",
      },this.$attrs.dataZoom||{})

      return option;
    },
  },
};
</script>