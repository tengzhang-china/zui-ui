<template>
  <el-dialog
    class="tong-dialog"
    :class="{'tong-dialog-align':top==='auto'}"
    ref="tongDialog"
    custom-class="way"
    :width="width"
    :close-on-click-modal="false"
    :visible.sync="outerVisible"
    :top="top"
    :show-close="false"
    :append-to-body="appendToBody"
    @closed="closed"
  >
    <div slot="title" class="cursor-move" @mousedown="doDragPosition">
      <slot v-if="$slots.header" name="header"></slot>
      <template v-else>
        <span>{{title}}</span>
        <i class="close-icon" :class="closeIcon" @click="doIconClick"></i>
      </template>
    </div>

    <div class="tong-dialog-content" ref="tongDialogContent" :style="{height}">
      <slot></slot>
    </div>

    <div slot="footer" class="dialog-footer cursor-move" v-if="footerShow" @mousedown="doDragPosition">
      <slot v-if="$slots.footer" name="footer"></slot>

      <template v-else>
        <el-button
          class="cancel-btn"
          @mousedown.native.stop="()=>{}"
          @click.stop="doBtnClick('cancelBtn')"
          :disabled="cancelBtnDisabled"
          :loading="cancelBtnLoading"
          v-if="cancelBtnShow"
        >{{cancelBtnTitle}}</el-button>
        <el-button
          class="sure-btn"
          type="primary"
          @mousedown.native.stop="()=>{}"
          @click.stop="doBtnClick('sureBtn')"
          :disabled="sureBtnDisabled"
          :loading="sureBtnLoading"
          v-if="sureBtnShow"
        >{{sureBtnTitle}}</el-button>
      </template>

      <span class="drag-icon" v-show="!resizeDisabled" @mousedown.stop="doDragDown"></span>
    </div>
  </el-dialog>
</template>
<script>
import { Dialog, Button } from "element-ui";
import { throttle, debounce } from "../../../js/usual";
import tongScroll from "../../tongScroll";
export default {
  name: "T_dialog",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "标题"
    },
    titleShow: {
      type: Boolean,
      default: true
    },

    closeIcon: {
      type: String,
      default: "el-icon-circle-close"
    },

    width: {
      type: String,
      default: "30%"
    },
    height: {
      type: String,
      default: "200px"
    },

    top: {
      type: String,
      default: "15vh"
    },
    left: {
      type: String,
      default: ""
    },

    footerShow:{
      type:Boolean,
      default:true
    },

    sureBtnTitle: {
      type: String,
      default: "确定"
    },
    sureBtnShow: {
      type: Boolean,
      default: true
    },
    sureBtnLoading: {
      type: Boolean,
      default: false
    },
    sureBtnDisabled: {
      type: Boolean,
      default: false
    },

    cancelBtnTitle: {
      type: String,
      default: "取消"
    },
    cancelBtnShow: {
      type: Boolean,
      default: true
    },
    cancelBtnLoading: {
      type: Boolean,
      default: false
    },
    cancelBtnDisabled: {
      type: Boolean,
      default: false
    },

    throttleTime: {
      type: Number,
      default: 300
    },

    // 点击操作按钮自动关闭弹框
    autoClose: {
      type: Boolean,
      default: true
    },

    resizeDisabled:{
      type:Boolean,
      default:false
    },

    appendToBody:{
      type:Boolean,
      default:true
    }
  },
  components: {
    elDialog: Dialog,
    elButton: Button,
    tongScroll
  },
  data() {
    return {
      outerVisible: false,
      currentXY: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        diaDomX: 0,
        diaDomY: 0
      }
    };
  },

  watch: {
    width: {
      handler: function(newVlaue) {
        if (newVlaue) {
          this.resetHeight();
        }
      },
      immediate: true
    },
    height: {
      handler: function(newVlaue) {
        if (newVlaue) {
          this.resetHeight();
        }
      },
      immediate: true
    },
    visible: {
      handler: function(newValue) {
        this.outerVisible = newValue;
        if (newValue) {
          this.resetHeight()
        };
      },
      immediate: true
    },
    outerVisible: {
      handler: function(newValue) {
        this.$emit("update:visible", newValue);
      }
    },

    left: {
      handler: function(newValue) {
        this.$nextTick(() => {
          const bodyDom = this.$refs.tongDialog.$refs.dialog;
          if (newValue !== "") {
            bodyDom.style.margin = "0";
            bodyDom.style.position = "absolute";
            bodyDom.style.left = this.left || 0;
            bodyDom.style.top = this.top || 0;
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    // 按钮点击事件
    doBtnClick: function() {},

    closed(){
      this.$emit("closed");
    },

    //点击关闭图标
    doIconClick() {
      this.outerVisible = false;
      this.$emit("iconClosed");
    },

    // 解绑事件监听
    unBindFun() {
      window.removeEventListener("mousemove", this.doDragMove, false);
      window.removeEventListener("mousemove", this.doPositionMove, false);
    },
    doDragDown(e) {
      this.recordPosition(e);
      this.doPositionMove(e);
      // 绑定resize监听
      window.addEventListener("mousemove", this.doDragMove);
    },

    doDragPosition(e) {
      this.recordPosition(e);
      // 绑定position监听
      window.addEventListener("mousemove", this.doPositionMove);
    },

    doDragMove(e, fn) {
      //处理当前位置，计算，并记录最新位置
      const positionObj = { left: e.x, top: e.y };
      const value = {
        newWidth: positionObj.left - this.currentXY.left,
        newHeight: positionObj.top - this.currentXY.top
      };
      this.setWidthHeight(value);
      this._bus.$emit("resize")
    },

    doPositionMove(e) {
      //处理当前位置，计算，并记录最新位置
      const positionObj = { left: e.x, top: e.y };
      const value = {
        newWidth: positionObj.left - this.currentXY.left,
        newHeight: positionObj.top - this.currentXY.top
      };
      this.setPosition(value);
    },
    // 设置位置
    setPosition(value) {
      const bodyDom = this.$refs.tongDialog.$refs.dialog;
      bodyDom.style.margin = "0";
      bodyDom.style.position = "absolute";
      bodyDom.style.left =
        this.currentXY.diaDomX + Number(value.newWidth) + "px";
      bodyDom.style.top =
        this.currentXY.diaDomY + Number(value.newHeight) + "px";
    },

    //记录当前位置
    recordPosition(e) {
      const positionObj = { left: e.x, top: e.y };
      this.currentXY.left = positionObj.left;
      this.currentXY.top = positionObj.top;
      const bodyDom = this.$refs.tongDialog.$refs.dialog;
      const bodyHeightDom = bodyDom.children[1];
      this.currentXY.height = bodyHeightDom.clientHeight;
      this.currentXY.width = bodyDom.clientWidth;
      const { x, y } = bodyDom.getBoundingClientRect();
      this.currentXY.diaDomX = x;
      this.currentXY.diaDomY = y;
    },

    //设置宽高
    setWidthHeight(value = {}) {
      const bodyDom = this.$refs.tongDialog.$refs.dialog;
      const bodyHeightDom = bodyDom.children[1];
      bodyHeightDom.style.height =
        this.currentXY.height + Number(value.newHeight) + "px";
      bodyDom.style.width =
        this.currentXY.width + Number(value.newWidth) + "px";

      this.$refs.tongDialogContent.style.width = this.currentXY.width + Number(value.newWidth)-30+'px';
      this.$refs.tongDialogContent.style.height = this.currentXY.height + Number(value.newHeight)-20+'px';
    },

    resetHeight() {
      this.$nextTick(() => {
        let bodyDom = this.$refs.tongDialog.$el.querySelector(
          ".el-dialog__body"
        );
        if(!bodyDom)return;
        bodyDom.style.height = `calc(${this.height} + 20px)`;
        // bodyDom.style.width = `calc(${this.width} - 30px)`;

        // if (
        //   bodyDom.clientHeight ===
        //   bodyDom.querySelector(".__view").clientHeight + 20
        // ) {
        //   const varBar = bodyDom.querySelector(".__rail-is-vertical");
        //   if (varBar) varBar.parentNode.removeChild(varBar);
        // }
      });
    },

    init() {
      this.doBtnClick = throttle(function(type) {
        this.$emit(`do${type.slice(0, -3)}`);
        if (this.autoClose) this.outerVisible = false;
      }, this.throttleTime);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
    window.addEventListener("mouseup", this.unBindFun);
  },
  beforeDestroy() {
    window.removeEventListener("mouseup", this.unBindFun, false);
  }
};
</script>
