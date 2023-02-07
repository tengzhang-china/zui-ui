<template>
  <div class="transferBoxOut" style="display:inline-block">
    <el-form :inline="true" ref="form" :model="form">
      <div class="transferBox">
        <el-transfer
          style="text-align: left; display: inline-block"
          v-model="transferData.transferVal"
          ref="tongTranfer"
          filterable
          :render-content="renderFunc"
          :titles="titles"
          :props="transferData.props"
          :left-default-checked="leftData"
          @change="handleChange"
          @left-check-change="handleLeftChange"
          @right-check-change="handleRightChange"
          :data="transferData.transferObj"
        ></el-transfer>
        <el-button
          :class="{allLeftStyle:allLeftDis}"
          size="medium"
          :disabled="allLeftDis"
          circle
          class="el-icon-d-arrow-left transfer-allLeft"
          @click="transferAllLeft"
        ></el-button>
        <el-button
          :class="{allRightStyle:allRightDis}"
          size="medium"
          :disabled="allRightDis"
          circle
          class="el-icon-d-arrow-right transfer-allRight"
          @click="transferAllRight"
        ></el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import $utils from "../../../js/utils";
export default {
  /*
  * zTree参考：http://www.treejs.cn/v3/api.php
  * 属性：
        参数          	类型	      值	                    说明
        titles          Array        ['Source', 'Target']      左右两个框的标题
        transferData    Object
        transferData: {
            transferObj: [],                Array              所有的数据集合
            transferAllKey: [],             Array              所有的key集合
            transferLeftKey: [],            Array              左边数据集合
            transferVal: [1,2,4],           Array              右边框数据集合
        },
  * 事件：
        事件名称	                回调参数	            说明
        listenToChange                                     监听穿梭框的变化事件
  * 样式：
        根据渲染的class进行样式的自定义，并完成覆盖
*/
  name: "T_transfer",
  props: {
    titles: {
      type: Array,
      default: function() {
        return ["Source", "Target"];
      }
    },
    transferData: {
      type: Object,
      default: function() {
        return {
          transferObj: new Array(100)
            .fill("")
            .map((val, index) => ({ label: "label" + index, key: index })),
          transferAllKey: [],
          transferLeftKey: [],
          transferVal: []
        };
      }
    },
    leftData:{
        type:Array,
        default:function(){
            return []
        }
    }
  },
  data() {
    return {
      form: {},
      allLeftDis: false, //全左移是否能被点击
      allRightDis: false, //全右移是否能被点击
      renderFunc(h, option) {
        return h("span",option.label);
      }
    };
  },
  methods: {
    // 穿梭框变化（value表示右边框值的集合，direction表示操作的方向，moveKeys表示移动值的集合）
    handleChange(value, direction, movedKeys) {
      if (direction == "left") {
        this.allRightDis = false;
        if (value.length == 0) {
          this.allLeftDis = true;
        }
      } else if (direction == "right") {
        this.allLeftDis = false;
        if (value.length == this.transferData.transferAllKey.length) {
          this.allRightDis = true;
        }
      }
      this.transferChange();
    },
    // 全移到右边
    transferAllRight() {
      var datas = this.transferData.transferObj;
      for (var i = 0; i < datas.length; i++) {
        if (!datas[i].disabled) {
          this.transferData.transferVal.push(datas[i].key);
        }
      }
      this.allRightDis = true;
      this.allLeftDis = false;
      this.transferChange();
    },
    // 全移到左边
    transferAllLeft() {
      this.transferData.transferVal = [];
      this.allRightDis = false;
      this.allLeftDis = true;
      this.transferChange();
    },
    transferChange() {
      if (this.transferData.transferVal.length == 0) {
        this.allLeftDis = true;
      }
      this.transferData.transferLeftKey = $utils.diff(
        this.transferData.transferVal,
        this.transferData.transferAllKey
      );
      this.$emit("listenToChange");
      // console.log(this.transferData.transferVal)
    },
    handleLeftChange(value) {
      // console.log(value)
    },
    handleRightChange(value) {
      this.$emit("listenToRightChange", value);
    },

    clearQuery(type){
      this.$refs.tongTranfer.clearQuery(type)
    }
  },
  mounted() {
    if (this.transferData.transferVal.length == 0) {
      this.allLeftDis = true;
    }
  }
};
</script>
