<template>
  <tong-dialog
    class="tong-bread-dialog"
    v-if="domHidden"
    :visible="tongBreadDialog.visible"
    :autoClose="false"
    :sureBtnLoading="sureBtnLoading"
    :cancelBtnLoading="cancelBtnLoading"
    v-bind="getCurrentConfig"
    @update:visible="updateVisible"
    @dosure="dosure"
    @docancel="docancel"
    @iconClosed="iconClosed"
    @closed="initConfig"
  >
    <!-- 面包屑 -->
    <div class="bread-crumb" v-if="tongBreadDialog.componentsList.length > 1">
      <span>您的位置：</span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          :style="breadConfig"
          v-for="(item, index) in tongBreadDialog.componentsList"
          :key="index"
          @click.native="clickBread(index)"
          >{{ item.title }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>

    <keep-alive :include="getIncludeString">
      <component
        ref="currentComponent"
        :info="getCurrentConfig.info"
        :is="getCurrentConfig.currentComponent"
      ></component>
    </keep-alive>

    <div
      v-if="getButtonsList && getButtonsList.length > 0"
      slot="footer"
    >
      <el-button
        v-for="(btn, index) in getButtonsList"
        :key="index"
        :disabled="btn.disabled"
        :type="btn.type"
        :loading="btn.loading"
        v-show="btn.show || btn.show === undefined"
        @mousedown.native.stop="() => {}"
        @click="clickBtn(btn, index)"
        >{{ btn.text }}</el-button
      >
    </div>
  </tong-dialog>
</template>
<script>
import tongDialog from "../../../lib/tongDialog";
import { breadConfig } from "./config/index";
import registerModule from "./module/index";
import { mapState } from "vuex";
import { catchError } from "../../../js/error";
export default {
  name: "tongBreadDialog",
  components: {
    tongDialog,
  },
  data() {
    return {
      breadConfig,
      domHidden: false,
      sureCallback() {},
      cancelCallback() {},
      closeCallback() {},
      backCallback() {},

      sureBtnLoading: false,
      cancelBtnLoading: false,
    };
  },
  watch: {
    "tongBreadDialog.visible"(newValue, oldValue) {
      if (newValue === true) this.domHidden = true;
      // if (newValue === false && oldValue === true) {
      //   this.initConfig();
      //   setTimeout(() => {
      //     this.domHidden = false;
      //   }, 300);
      // }
    },
  },
  computed: {
    ...mapState(["tongBreadDialog"]),

    getIncludeString() {
      return this.tongBreadDialog.componentsList
        .map((val) => val.currentComponent.name)
        .join(",");
    },

    getCurrentConfig() {
      let config = this.tongBreadDialog.componentsList.slice(-1)[0] || {};
      this.sureCallback = config.sureCallback;
      this.cancelCallback = config.cancelCallback;
      this.closeCallback = config.closeCallback;
      this.backCallback = config.backCallback;
      // delete config.sureCallback;
      // delete config.cancelCallback;
      // delete config.buttonList;
      return config;
    },

    getButtonsList(){
      return this.tongBreadDialog.buttonList.slice(-1)[0]
    }
  },
  methods: {
    updateVisible(value) {
      this.$store.commit("tongBreadDialog/setVisible", value);
    },
    /**
     * 初始化配置
     */
    initConfig() {
      this.domHidden = false
      this.$store.commit("tongBreadDialog/initConfig");
    },

    /**
     * 点击面包屑
     * @param {number} index 索引
     */
    clickBread(index) {
      const step = this.tongBreadDialog.componentsList.length - index - 1;
      if (step === 0) return;
      
      if(this.backCallback)this.backCallback.call(this.$refs.currentComponent,index);

      this.$store.commit("tongBreadDialog/back", step);
    },

    /**
     * 点击确认按钮的回调
     */
    dosure: async function () {
      this.sureBtnLoading = true;
      let res;

      await catchError(
        async () =>
          (res = await this.sureCallback.call(this.$refs.currentComponent)),
        null,
        () => (this.sureBtnLoading = false)
      );

      this.$store.commit("tongBreadDialog/setVisible", res === true);
    },
    docancel: async function () {
      this.cancelBtnLoading = true;
      let res;

      await catchError(
        async () =>
          (res = await this.cancelCallback.call(this.$refs.currentComponent)),
        null,
        () => (this.cancelBtnLoading = false)
      );
      this.$store.commit("tongBreadDialog/setVisible", res === true);
    },

    /**
     * 图表关闭
     */
    iconClosed() {
      if (this.closeCallback) {
        this.closeCallback();
      }
    },

    /**
     * 自定义按钮点击事件
     */
    clickBtn: async function (btn) {
      this.$set(btn, "loading", true);
      let res;

      await catchError(
        async () => (res = await btn.onClick.call(this.$refs.currentComponent)),
        null,
        () => this.$set(btn, "loading", false)
      );

      this.$store.commit(
        "tongBreadDialog/setVisible",
        res === true || res === undefined
      );
    },
  },
  created() {
    registerModule(this);
  },
  beforeDestroy() {
    this.initConfig();
  },
};
</script>