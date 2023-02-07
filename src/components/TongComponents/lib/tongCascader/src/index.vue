<template>
  <div class="tong-cascader">
    <el-cascader
      v-if="mode !== 1"
      ref="tongCascader"
      v-model="selectValue"
      :options="options"
      clearable
      :debounce="debounce"
      :disabled="disabled"
      :placeholder="placeholder"
      :show-all-levels="showAllLevels"
      :collapse-tags="collapseTags"
      :props="propsOptions"
      @change="changeData"
      @blur="blurData"
      @focus="focusData"
      @visible-change="visibleChange"
      @remove-tag="removeTag"
      >
    </el-cascader>

    <el-cascader-panel v-else
    :props="propsOptions"
    :options="options"
    v-model="selectValue"
    clearable
    :show-all-levels="showAllLevels"
    :collapse-tags="collapseTags"
    @change="changeData"
    >

    </el-cascader-panel>
  </div>
</template>

<script>
import Style from "../../tongTree/src/modules/style";
export default {
  name: "tongCascader",
  components: {Style},
  props: {
    value: [],
    options: {
      type: Array,
      default: function () {
        return [];
      },
    },
    propsOptions: {
      type: Object,
      default: function () {
        return {};
      },
    },
    showAllLevels:{
      type: Boolean,
      default: true,
    },
    collapseTags:{
      type: Boolean,
      default: false,
    },
    filterable:{
      type: Boolean,
      default: false,
    },
    mode:{
      type: String,
      default: "",
    },
    placeholder:{
      type: String,
      default: "",
    },
    disabled:{
      type: Boolean,
      default: false,
    },
    debounce:{
      type: Number,
      default: 300
    }
  },
  watch: {
    value: {
      handler(newValue) {
        this.selectValue = newValue;
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      selectValue: [], //下拉的值
    };
  },
  mounted(){
  },
  computed: {

  },
  methods: {
    changeData(data){
      this.$emit("updateChange", data);
    },
    blurData(data){
      this.$emit("blurData", data);
    },
    focusData(data){
      this.$emit("focusData", data);
    },
    visibleChange(data){
      this.$emit("visibleChange", data);
    },
    removeTag(data){
      this.$emit("removeTag", data);
    },




  },
};
</script>

<style lang="scss">
  .tong-cascader {
    .el-input__inner[style="height: 40px;"] {
      height: 30px !important;
    }
    .el-cascader__tags {
      .el-tag{
        height: 20px;
        line-height: 20px;
        border: none;
        border-radius: 2px;
        &:hover {
          background: #D9EAF4;
          color: #3A8CE2;
          .el-tag__close.el-icon-close {
            background-color: transparent;
            color: #3A8CE2;
          }
        }
        .el-tag__close.el-icon-close {
          background-color: transparent;
          right: -5px;
          top: 1px;
          color: #909599;
        }
      }
    }
  }
</style>
