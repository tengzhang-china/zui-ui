<template>
  <div class="tong-data-source">
    <div class="tong-data-source-left tong-drag-x">
      <Search
        v-show="false"
        :value.sync="dataSourceSelected"
        :selectConfig="configSelect"
        :dataSourceList="dataSourceList"
      />
      <List
        ref="List"
        :style="{ height }"
        :title="title[0]"
        :inputConfig="configInput"
        :treeConfig="configTree"
        v-on="$listeners"
        @checkChanged="checkChanged"
        @done-more="getCheckedData"
      />
    </div>
    <div v-if="checkedShow" class="tong-data-source-right" :style="{ height }">
      <Selected
        :title="title[1]"
        :selectedData="selectedData"
        @clearKey="clearKey"
        @delItem="delItem"
      />
    </div>
  </div>
</template>
<script>
import Search from "./component/Search";
import List from "./component/List.vue";
import Selected from "./component/Selected.vue";
import { URL, CONFIG_SELECT, CONFIG_INPUT, CONFIG_TREE } from "./config/index";
import { DATASOURCE } from "./api/index";
export default {
  props: {
    title: {
      type: Array,
      default: function () {
        return ["待选项", "已选择项"];
      },
    },
    height: {
      type: String,
      default: "300px",
    },

    checkedShow: {
      type: Boolean,
      default: true,
    },

    selectConfig: {
      type: Object,
      default: function () {
        return {};
      },
    },

    inputConfig: {
      type: Object,
      default: function () {
        return {};
      },
    },
    treeConfig: {
      type: Object,
      default: function () {
        return {};
      },
    },
    urlConfig: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  components: { Search, List, Selected },
  data() {
    return {
      dataSourceList: [], //数据源下拉 -- 下拉配置
      dataSourceSelected: "", //数据源下拉 -- 选中值

      metaType: -1,
      treeObj: {}, //树数据 -- 源
      treeData: [],
      expandKeys: [],

      selectedData: {},
    };
  },
  watch: {
    dataSourceSelected: {
      handler() {
        this.$nextTick(this.setTreeObj);
      },
    },
  },
  computed: {
    configSelect() {
      return { ...CONFIG_SELECT, ...this.selectConfig };
    },
    configInput() {
      return { ...CONFIG_INPUT, ...this.inputConfig };
    },
    configTree() {
      return {
        ...CONFIG_TREE,
        ...this.treeConfig,
        treeData: this.treeData,
        expandKeys: this.expandKeys,
        load: this.load,
        moreFunction: this.moreFunction,
      };
    },
    configUrl() {
      return { ...URL, ...this.urlConfig };
    },
  },
  methods: {
    async init() {
      let res = await DATASOURCE.call(this, this.configUrl.dataSource);
      this.dataSourceList = res.data.datasList.map((val) => ({
        ...val,
        label: val.dbTypeName,
        id: val.dbType,
      }));
      this.setTreeObj();
    },

    // 处理树数据
    setTreeObj() {
      if (!!this.dataSourceSelected) {
        this.treeObj[this.dataSourceSelected] = this.dataSourceList.find(
          (val) => val[this.configSelect.valueKey] === this.dataSourceSelected
        );
      }
      this.setTreeData();
    },

    setTreeData() {
      this.treeData = this.dataSourceSelected
        ? [this.treeObj[this.dataSourceSelected]]
        : this.dataSourceList;
      this.metaType = this.treeData[0].metaType;
      this.expandKeys = [this.dataSourceSelected];
    },

    load: async function (node, resolve) {
      if (node.level === 0) {
        resolve(node.data);
      } else if (node.level === 1) {
        resolve(
          node.data.dbList.map((val) => ({
            ...val,
            label: val.dsName,
            title: `${node.data.dbTypeName}.${val.dsName}`,
            id: val.dsId,
          }))
        );
      } else if (node.level === 2) {
        try {
          let res = await this[
            node.data.ifShowSchema === 0 ? "getSchemalData" : "getTableData"
          ](node.data);
          resolve(res);
        } catch (err) {
          resolve([]);
        }
      } else if (node.level === 3) {
        try {
          let res = await this.getTableData(node.data);
          resolve(res);
        } catch (err) {
          resolve([]);
        }
      }

      this.getCheckedData();
    },

    getCheckedData() {
      this.$nextTick(() => {
        const checkedData =
          this.$refs.List.$refs.tongTree.tongTreeObj.getCheckedNodes();
        this.groupChecked(checkedData);
      });
    },

    /**
     * 获取schemalData
     */
    async getSchemalData(data) {
      const { dsId } = data;
      const { label } = this.configTree.defaultProps;
      const params = { dsId, dsCategory: this.metaType };
      let res = await this.$axios.post(this.configUrl.schema, params);
      return res.data.map((val) => ({
        ...val,
        [label]: val.schema,
        [this.configTree.nodeKey]: `${val.dsId}.${val.schema}`,
        title: `${data.title}.${val.schema}`,
      }));
    },

    // 获取表
    async getTableData(data) {
      const { dsId, curPage } = data;
      const { label, isLeaf } = this.configTree.defaultProps;
      const params = {
        dsId,
        status: this.metaType,
        pageType: 2,
        curPage: curPage || 1,
        pageSize: 20,
      };
      let res = await this.$axios.post(this.configUrl.tables, params);

      let tableList = res.data.datasList.reduce(
        (a, b) => a.concat(b.tableList),
        []
      );
      let moreList = [];
      if (res.data.curPage < res.data.totalPage) {
        moreList = [
          {
            hasMore: true,
            [isLeaf]: true,
            curPage: ++res.data.curPage,
            dsId,
            label: "", //过滤必须加上
            title: `${data.title}`,
          },
        ];
      }

      return [
        ...tableList.map((val) => ({
          ...val,
          [label]: val.tableName,
          [this.configTree
            .nodeKey]: `${val.dsId}.${val.schema}.${val.tableName}`,
          [isLeaf]: true,
          title: `${data.title}`,
        })),
        ...moreList,
      ];
    },

    async moreFunction(node, data) {
      let res = await this.getTableData(data);

      return {
        data: res,
      };
    },

    checkChanged(checkedData, checkedKey, moreInfo) {
      this.groupChecked(checkedData);
    },

    groupChecked(data) {
      const { isLeaf } = this.configTree.defaultProps;
      const leafLest = data.filter((val) => val[isLeaf]);

      let res = {};
      for (let obj of leafLest) {
        const { title, label } = obj;
        if (!(title && label)) continue;
        res[title] = res[title] ? [...res[title], obj] : [obj];
      }
      this.$set(this, "selectedData", res);
    },

    // 获取选中的
    getData() {
      const {
        getCheckedKeys,
        getCheckedNodes,
        getHalfCheckedKeys,
        getHalfCheckedNodes,
      } = this.$refs.List.$refs.tongTree.tongTreeObj;
      return {
        checkedData: getCheckedKeys(),
        checkedNode: getCheckedNodes(),
        halfCheckedKeys: getHalfCheckedKeys(),
        halfCheckedNodes: getHalfCheckedNodes(),
      };
    },

    // 清空表
    clearKey(key,list) {
      this.selectedData[key] = undefined;
      delete this.selectedData[key];
      this.reDrawTree(list)
    },

    // 删除单表
    delItem(key,index){
      let list = this.selectedData[key].splice(index,1);
      this.reDrawTree(list)
    },

    reDrawTree(list){
      const {setChecked} = this.$refs.List.$refs.tongTree.tongTreeObj
      for(let obj of list){
        setChecked(obj[this.configTree.nodeKey],false,true)
      }
    }
  },

  created() {
    this.init();
  },
};
</script>