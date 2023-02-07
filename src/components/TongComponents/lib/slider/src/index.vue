<template>
  <div class="T_slider" :style="{width:width+'px'}">
    <div class="slider_item" :style="{width:width+'px'}">
      <div class="chunk-one" @mousedown="move" :style="{left:left1+'px'}">
        <div class="s_cont">
          <span v-html="per.inum=='100%'?  100-num1 : num1 "></span>
          <strong>{{per.dw}}</strong>
        </div>
      </div>
      <div class="chunk-two" @mousedown="move1" :style="{left:left2+'px'}">
        <div class="s_cont">
          <span v-html="per.inum=='100%'?  100-num2 : num2 "></span>
          <strong>{{per.dw}}</strong>
        </div>
      </div>
      <div class="strip-one" :style="{width:left1+'px'}"></div>
      <div class="strip-two" :style="{width:left2+'px'}"></div>
      <div class="strip-three"></div>

      <span class="inum" style="left:0px;">{{per.inum}}</span>
      <span class="xnum" style="right:0px;">{{per.xnum}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "T_slider",
  props: {
    per: {
      type: Object,
      default: function() {
        return {
          inum: "10", //左侧标题
          dw: "GB", //单位：["GB",'次','个','%']
          xnum: "100", //右侧标题
          n1: 10,
          n2: 60
        };
      }
    }
  },
  data() {
    return {
      num1: 0,
      num2: 0,
      left1: 0,
      left2: 0,
      width: 230
    };
  },
  mounted() {
    switch (this.per.dw) {
      case "GB":
        this.left1 =
          (this.per.n1 * this.width) /
          (parseInt(this.per.xnum) - parseInt(this.per.inum));
        this.left2 =
          (this.per.n2 * this.width) /
          (parseInt(this.per.xnum) - parseInt(this.per.inum));
        this.num1 = this.per.n1;
        this.num2 = this.per.n2;
        break;
      case "次":
        this.left1 =
          (this.per.n1 * this.width) /
          (parseInt(this.per.xnum) - parseInt(this.per.inum));
        this.left2 =
          (this.per.n2 * this.width) /
          (parseInt(this.per.xnum) - parseInt(this.per.inum));
        this.num1 = this.per.n1;
        this.num2 = this.per.n2;
        break;
      case "个":
      case "%":
        this.left1 = this.per.n1;
        this.left2 = this.per.n2;
        this.num1 = Math.round((this.per.n1 / (this.width - 12)) * 100);
        this.num2 = Math.round((this.per.n2 / (this.width - 12)) * 100);
        break;
    }
  },
  methods: {
    move(e) {
      let odiv = e.target; //获取目标元素
      // console.log(odiv)
      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft;
      document.onmousemove = e => {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        // let left = e.clientX - disX;

        if (
          e.clientX - disX < 0 ||
          e.clientX - disX > this.width - 12 ||
          e.clientX - disX >= this.left2
        ) {
          return false;
        } else {
          //   this.left1 = e.clientX - disX;
          this.left1 = e.clientX - disX;

          if (this.per.dw == "GB") {
            this.num1 = (
              (this.left1 *
                (parseInt(this.per.xnum) - parseInt(this.per.inum))) /
              this.width
            ).toFixed(1);
          } else if (this.per.dw == "次") {
            this.num1 = (
              (this.left1 *
                (parseInt(this.per.xnum) - parseInt(this.per.inum))) /
              this.width
            ).toFixed(0);
          } else {
            this.num1 = Math.round((this.left1 / (this.width - 12)) * 100);
          }
        }
      };

      document.onmouseup = e => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    move1(e) {
      let odiv = e.target; //获取目标元素
      // console.log(odiv)
      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft;
      document.onmousemove = e => {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        // let left = e.clientX - disX;

        // this.positionY = left;
        //移动当前元素

        if (
          e.clientX - disX < 0 ||
          e.clientX - disX > this.width - 12 ||
          e.clientX - disX <= this.left1
        ) {
          return false;
        } else {
          //   this.left2 = e.clientX - disX;
          this.left2 = e.clientX - disX;

          if (this.per.dw == "GB") {
            this.num2 = (
              (this.left2 *
                (parseInt(this.per.xnum) - parseInt(this.per.inum))) /
              (this.width - 12)
            ).toFixed(1);
          } else if (this.per.dw == "次") {
            this.num2 = (
              (this.left2 *
                (parseInt(this.per.xnum) - parseInt(this.per.inum))) /
              (this.width - 12)
            ).toFixed(0);
          } else {
            this.num2 = Math.round((this.left2 / (this.width - 12)) * 100);
          }
        }
      };

      document.onmouseup = e => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    }
  },

  components: {}
};
</script>

<style scoped lang="scss">
.slider_item {
  height: 55px;
  position: relative;
  margin: 0px auto;
  background: url("../images/ruler.png") no-repeat;
  background-position: bottom;
  background-size: contain;
}

.slider_one {
  position: absolute;
  left: 0;
  top: 35px;
  height: 8px;
  width: 100%;
  border-radius: 10px;
  background-color: #abafb3;
}

.slider_two {
  width: 100%;
  background-color: #d9c13b;
}

.chunk-one,
.chunk-two {
  position: absolute;
  left: 0;
  top: 20px;
  width: 12px;
  height: 22px;
  z-index: 99;
  cursor: pointer;
  background: url("../images/ruler_it.png");
}

.s_cont {
  display: inline-block;
  text-align: center;
  font-weight: normal;
  position: relative;
  top: -37px;
  left: -17px;
  width: 45px;
  height: 33px;
  line-height: 26px;
  background: url("../images/ruler_cot.png");
}

.strip-one,
.strip-two,
.strip-three {
  position: absolute;
  left: 0;
  top: 25px;
  height: 8px;
  width: 100%;
  border-radius: 10px;
  background-color: #999;
}

.strip-one {
  left: 0;
  width: 53px;
  z-index: 10;
  border-radius: 10px 0 0 10px;
  background-color: #44cf42;
}

.strip-two {
  left: 0;
  width: 74px;
  z-index: 9;
  border-radius: 10px 0 0 10px;
  background-color: #d9c13b;
}

/* 为显示效果的暂时样式 */
.chunk-one {
  left: 20%;
}

.chunk-two {
  left: 50%;
}

.inum,
.xnum {
  position: absolute;
  bottom: -17px;
}
</style>
