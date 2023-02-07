<template>
  <div class="tong-select">
    <el-select
      :size="size"
      ref="tongSelect"
      v-model="selectValue"
      :multiple="multiple"
      :multiple-limit="multipleLimit"
      :disabled="disabled"
      :placeholder="placeholder"
      :clearable="clearable"
      :filterable="filterable"
      :allowCreate="allowCreate"
      :filter-method="formateFilterMethod"
      :popper-class="selectType === 'tree' ? 'tong-select_tong-tree' : 'maxHeight-300'"
      v-touchBottom="touchBottom"
      @visible-change="visibleChange"
      @change="change"
    >
    <!-- 2022.1.7 zy 添加默认插槽  为外部提供位置 提供自定义下拉组件 -->
    <slot name='default'> 
      <template v-if="dropdownFilter">
          <tong-input v-model="filterValue" @input="dropdownFilterChange" @blur="dropdownFilterBlur"/>
      </template>
      <template v-if="selectType === 'tree'">
        <tong-tree
          v-model="selectValue"
          :showCheckbox="multiple"
          :multipleLimit="multipleLimit"
          :checkOnClickNode="checkOnClickNode"
          :treeData="treeData"
          ref="tongTree"
          empty-text="无匹配数据"
          :nodeKey="nodeKey"
          :defaultProps="defaultProps"
          @tongTreeSelect="doTongTreeSelect"
          @checkChanged="doCheckChanged"
          @radioChanged="doRadioChanged"
          v-on="$listeners"
          :expandAll="expandAll"
          :check-strictly="checkStrictly"
          :accordion="accordion"
          :mode="mode"
        />
        <el-option value="treeSelect" style="display: none"></el-option>
        <el-option
          v-for="(opt, optIndex) in checkOptions"
          :key="optIndex"
          :value="opt[nodeKey] || opt"
          :label="opt[defaultProps.label]"
          style="display: none"
        ></el-option>
      </template>
      <template v-else>
        <el-option
          v-for="(item, optIndex) in selectOptions"
          :key="optIndex"
          :label="item[labelKey] || item"
          :value="item[valueKey] === undefined ? item : item[valueKey]"
          :disabled="item.disabled"
        ></el-option>
      </template>
    </slot>
    <!-- 2022.1.7 zy 添加 el-select 兼容的插槽  -->
    <slot name="prefix" slot="prefix"></slot>
    <slot name="empty" slot="empty"></slot>
    <el-option value="treeSelect" style="display: none"></el-option>
    </el-select>
  </div>
</template>

<script>
import tongTree from "../../tongTree/index";
import tongInput from "../../tongInput/index";
import { flatArray, doDeepCopy } from "../../../js/usual";
import { verifyType } from "../../../js/rules";
export default {
  name: "tongSelect",
  components: { tongTree, tongInput },
  props: {
    value: {},
    options: {
      type: Array,
      default: function () {
        return [];
      },
    },

    labelKey: {
      type: String,
      default: "label",
    },

    valueKey: {
      type: String,
      default: "value",
    },

    lazyLoad: {
      type: Object,
      default: function () {
        return {
          num: 50,
        };
      },
    },

    placeholder: {
      type: String,
      default: "",
    },

    disabled: {
      type: Boolean,
      default: false,
    },
    filterable: {
      type: Boolean,
      default: false,
    },
    allowCreate:{
      type:Boolean,
      default:false
    },
    clearable: {
      type: Boolean,
      default: false,
    },

    multiple: {
      type: Boolean,
      default: false,
    },
    multipleLimit: {
      type: Number,
      default: 0,
    },

    checkStrictly: {
      type: Boolean,
      default: false,
    },

    accordion: {
      type: Boolean,
      default: false,
    },

    selectType: {
      type: String,
      default: "",
    },
    treeData: {
      type: Array,
      default: function () {
        return [];
      },
    },
    expandAll: {
      type: Boolean,
      default: true,
    },
    nodeKey: {
      type: String,
      default: "value",
    },
    defaultProps: {
      type: Object,
      default: function () {
        return {
          children: "children",
          label: "label",
        };
      },
    },
    mode: {
      type: String,
      default: "",
    },

    checkOnClickNode: {
      type: Boolean,
      default: false,
    },

    size: {
      type: String,
      default: "normal",
    },
    dropdownFilter:{
      type:Boolean,
      default:false,
    },
    limitList:{
      type:Number,
      default:0,
    },
  },
  watch: {
    value: {
      handler(newValue) {
        this.selectValue = newValue;
      },
      deep: true,
      immediate: true,
    },

    selectValue: {
      handler: function (newValue,oldValue) {
        // if((!Array.isArray(newValue)&&oldValue!=undefined && newValue!==oldValue)||(Array.isArray(newValue)&&Array.isArray(oldValue)&&(newValue.join()!=oldValue.join()))){
        //   this.doChange(newValue);
        // }
      },
      deep: true,
    },

    options: {
      handler: function (newValue) {
        const res = newValue.map((val) =>
          verifyType(val, "Object")
            ? val
            : {
                [this.labelKey]: val.toString(),
                [this.valueKey]: val,
              }
        );
        this.currentPage = 0;
        this.selectOptionsData = Object.freeze(doDeepCopy(res));
        this.selectOptionOrigin = Object.freeze(doDeepCopy(res));
        this.setOptions(true);
      },
      deep: true,
      immediate: true,
    },

    treeData: {
      handler: function (newValue) {
        this.checkOptions = Object.freeze(
          flatArray(newValue, this.defaultProps.children)
        ); // 需要进行降维处理  --- 递归？
      },
      immediate: true,
    },
  },
  data() {
    return {
      oldSelectValue: "",
      selectValue: "", //下拉的值

      selectOptions: [], //普通下拉正在展示
      selectOptionsData: [], //普通下拉所有数据
      selectOptionOrigin: [], //普通下拉源数据
      currentPage: 0, //普通下拉加载页数据
      filterValue: "",// 下拉框中的搜索框 的值 

      checkOptions: [], //tree的下拉
    };
  },
  computed: {
    formateFilterMethod() {
      let res =
        this.selectType !== "tree" ? this.filterMethod : this.filterTreeMethod;
      return res;
    },
  },
  methods: {
    doChange(value) {
      this.$emit("update:value", value);
      this.$emit("tongSelectChange", value);
    },

    /**
     * tree单选点击回调
     */
    doTongTreeSelect(data, value) {
      this.selectValue = value;
      this.handleHidden();
      this.doChange(value)
    },

    /**
     * 复选回写
     */
    doCheckChanged(checkedArr, checkKeyArr) {
      this.selectValue = checkKeyArr;
      this.doChange(checkKeyArr)
    },

    /**
     * 单选复写
     */
    doRadioChanged(radioArr, radioKeyArr) {
      this.selectValue = radioKeyArr;
      this.doChange(radioKeyArr)
    },

    /**
     * 这里不知道为什么会
     * 常规数组下拉 过滤的方法
     * assignment 如果由 dropdownFilterChange  事件过来的 就不让赋值 
     */
    filterMethod(val,assignment=true) {
      this.$nextTick(() => {
        if (!this.multiple && assignment ) this.selectValue=val
      });
      this.selectOptionsData = this.selectOptionOrigin.filter(
        (obj) => obj[this.labelKey].indexOf(val) > -1
      );
      this.currentPage = 0;
      this.setOptions();
    },

    /**
     * 过滤的方法
     * 只有树过滤才使用
     */
    filterTreeMethod(value) {
      this.$refs.tongTree.filter(value);
    },

    /**
     * 在展开的时候初始化下拉树
     */
    visibleChange(value) {
      let haveDefaultSlots=this.$slots.default;
      if(haveDefaultSlots){ // 如果有默认插槽  就不需要展示 封装的内容 处理逻辑也不需要
        this.$emit("visible-change", value);
        return
      }
      if(this.allowCreate){
        if(value===true){
          this.oldSelectValue = this.selectValue
        }
        if(value===false){
          if(this.oldSelectValue!==this.selectValue){
            this.doChange(this.selectValue)
            this.oldSelectValue = this.selectValue
          }
        }
        return
      };
      if (value === false) {
        if (this.selectType === "tree") {
          setTimeout(() => {
            this.filterTreeMethod("");
          }, 300);
        } else {
          this.selectValue = this.oldSelectValue;
          this.selectOptionsData = this.selectOptionOrigin;
          this.currentPage = 0;
          this.setOptions(true);
        }
      } else {
        if (this.selectType === "tree") {
        } else {
          this.oldSelectValue = this.selectValue;
        }
      }

      this.$emit("visible-change", value);
    },

    change(val) {
      if (this.selectType === "tree") {
      } else {
        this.oldSelectValue = val;
      }

      this.doChange(this.selectValue);
    },

    /**
     * 隐藏下拉框
     */
    handleHidden() {
      this.$refs.tongSelect.blur();
    },

    /**
     * 触底
     */
    touchBottom() {
      this.setOptions();
      this.$emit("touchBottom", true);
    },

    setOptions(isDetetail) {
      if (this.selectType === "tree") {
      } else {
        this.currentPage++;
        let size = this.currentPage * this.lazyLoad.num; //当前展示条数
        if(isDetetail){
          if(this.limitList&&this.limitList>0){
            this.selectOptions = this.selectOptionsData.slice(0, this.limitList);
            return
          }else{
          let forData = Array.isArray(this.selectValue)?this.selectValue:[this.selectValue];
          forData = forData.filter(v=>v!==undefined && v!=="") // 过滤undefined
          let res = [];
          for(let i =0;i<forData.length;i++){
            res.push(!!this.selectOptionsData.slice((this.currentPage-1)*this.lazyLoad.num,(this.currentPage)*this.lazyLoad.num).find(val=>val[this.valueKey]===forData[i]))
          }
          if(res.indexOf(false)===-1 || size>=this.selectOptionsData.length){
            this.selectOptions = this.selectOptionsData.slice(0, size);
            return
          }else{
            this.setOptions(true)
          }
          }
        }
        else if (size <= this.selectOptionsData.length + this.lazyLoad.num) {
          this.selectOptions = this.selectOptionsData.slice(0, size);
        } else {
          this.currentPage--;
        }
      }
    },
    dropdownFilterChange(value){
      this.formateFilterMethod(value,false)
    },
    dropdownFilterBlur(){
      this.filterValue="";
    }
  },
};
</script>
