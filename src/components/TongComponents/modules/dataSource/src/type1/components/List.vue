<template>
  <div class="tong-datasource-list" :style="{ height: height }">
    <tong-tree
      ref="tongTree"
      :showCheckbox="true"
      :treeData="formateListData"
      :lazy="false"
      :load="load"
      v-bind="config.CONFIG_SEARCH_TREE"
      v-on="$listeners"
    />
  </div>
</template>
<script>
import {tongTree} from "../../../../../index";
import { CONFIG_SEARCH_TREE } from "../config/index";
import API from "../api/index";
export default {
  props: {
    height: {
      type: String,
      default: "100%",
    },
    listData: {
      type: Array,
      default: function () {
        return [];
      },
    },
    checkedData: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },

  components: { tongTree },
  computed: {
    config() {
      return { CONFIG_SEARCH_TREE };
    },
    formateListData(){
        return this.listData.map(val=>({
            ...val,
            label:val.tableName,
            id:val.tableName,
            children:[]
        }))
    }
  },
  data() {
    return {
      search(val = "") {
        this.$refs.tongTree.filter(val);
        this.$refs.tongTree.setCheckedKeys(this.checkedData);
      },
    };
  },

  methods: {
    async load(node, resolve) {
      if (node.level === 0) {
        return resolve(node.data);
      } else if (node.level === 1) {
        const { dsId, schema, tableName, tableType } = node.data;
        let res = await this.getWordList({
          dsId,
          schema,
          tableName,
          tableType,
        });
        res.data.datasList.forEach((ele) => {
          ele.label = ele.columnName;
          ele.id = `${ele.tableName}-${ele.columnName}`;
          ele.leaf = true;
        });
        return resolve(res.data.datasList);
      }else {
        return resolve([]);
      }
    },

    /**
     * 获取字段名
     */
    async getWordList(params) {
      const res = await this.$axios.post(API.wordList, params);
      return res;
    },
  },
};
</script>
<style lang='scss' scoped>
.tong-datasource-list {
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #f9f9f9;
  border: 1px solid #DBDADF;
}
</style>