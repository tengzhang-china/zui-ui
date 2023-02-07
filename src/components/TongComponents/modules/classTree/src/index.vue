<template>
  <div class="tong-class-type">
    <div class="tong-class-type-list">
      <el-popover :disabled="disabled" placement="bottom-start" width="200" trigger="hover">
        <span slot="reference" class="el-icon-plus"></span>
        <div class="tong-class-type-box">
          <tongTree
            ref="tongTree"
            :treeBoxStyle="treeBoxStyle"
            :expandAll="true"
            :treeData="formateTreeData"
            :nodeKey="nodeKey"
            :defaultProps="defaultProps"
            :expandOnClickNode="false"
            :nodeClickDisabled="true"
            v-bind="$attrs"
            v-on="$listeners"
            @nodeClick="nodeClick"
          >
            <template slot="treeHeader">
              <slot name="header"></slot>
            </template>

            <template slot="treeFooter">
              <slot name="footer"></slot>
            </template>
          </tongTree>
        </div>
      </el-popover>

      <el-tag
        v-for="(tag, index) in selectItem"
        class="no-select"
        :style="formateStyke"
        :key="tag[nodeKey]"
        :closable="!disabled"
        @close="close(index)"
      >
        {{ tag[defaultProps.label] }}
      </el-tag>
    </div>
  </div>
</template>
<script>
import tongTree from "../../../lib/tongTree";
import { doDeepCopy, flatArray, mergeObject } from "../../../js/usual";
export default {
  name: "tongClassTree",
  props: {
    treeData: {
      type: Array,
      default: function () {
        return [];
      },
    },
    selectData: {
      type: Array,
      default: function () {
        return [];
      },
    },
    disabled:{
      type:Boolean,
      default:false
    },
    nodeKey: {
      type: String,
      default: "value",
    },
    defaultProps: {
      type: Object,
      default: function () {
        return {
          label: "label",
          children: "children",
          disabled:"disabled",
        };
      },
    },
    color: {
      type: String,
      default: "",
    },
    background: {
      type: String,
      color: "",
    },
    customStyle: {
      type: Object,
      default: function () {
        return {};
      },
    },
    nodeParentClick:{
      type:Boolean,
      default:false
    },
    disabledNode:{
      type:Boolean,
      default:false
    }
  },
  components: {
    tongTree,
  },
  watch: {
    selectData: {
      handler(newValue) {
        this.selectItem = flatArray(this.treeData, this.getKey_children).filter(
          (val) => newValue.indexOf(val[this.nodeKey]) > -1
        );
      },
      immediate: true,
    },
  },
  computed: {
    formateTreeData() {
      return this.doLoop(doDeepCopy(this.treeData));
    },

    getKey_children() {
      return this.defaultProps.children || "children";
    },

    formateStyke() {
      return mergeObject(
        {
          color: this.color,
          background: this.background,
        },
        this.customStyle
      );
    },
  },
  data() {
    return {
      selectItem: [],

      treeBoxStyle: {
        maxHeight: "300px",
      },
    };
  },
  methods: {
    /**
     * 直接选择
     */
    nodeClick(data,node) {
      if(this.nodeParentClick){
        if(node.isLeaf){
          if (this.selectData.indexOf(data[this.nodeKey]) === -1)
            this.selectData.push(data[this.nodeKey]);
          this.$emit("update:selectData", this.selectData);
        }
      }else{
        if (this.selectData.indexOf(data[this.nodeKey]) === -1)
          this.selectData.push(data[this.nodeKey]);
          debugger
        this.$emit("update:selectData", this.selectData);
      }
    },

    doLoop(arr = []) {
      if (arr.length === 0) return [];
      for (var i = 0; i < arr.length; i++) {
        if (
          this.selectItem.find(
            (val) => val[this.nodeKey] === arr[i][this.nodeKey]
          )
        ) {
          if(this.disabledNode){
            arr[i].disabled=true
          }else{
            arr.splice(i, 1);
            i = -1;
          }
          
          continue;
        }
        arr[i][this.getKey_children] = this.doLoop(
          arr[i][this.getKey_children]
        );
      }
      return arr;
    },

    close(index) {
      let value = this.selectItem.splice(index, 1)[0][this.nodeKey];
      this.selectData.splice(
        this.selectData.findIndex((val) => val === value),
        1
      );
      this.$emit("update:selectData", this.selectData);
      this.$emit("close", value);
    },

    filter(val){
      this.$refs.tongTree.filter(val)
    }
  },
};
</script>