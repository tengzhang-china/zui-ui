<template>
  <!-- 级联选择器 -->
<el-cascader
    size="mini"
    v-model="selectValue"
    clearable
    :options="selectList"
    @change="handleChange">
</el-cascader>
</template>
<script>
import tongSelect from "../../../lib/tongSelect";
import { dataSourceList,dataSourceList2,dataSourceList3 } from '../controller/index.js';
export default {
  name: "tongDatasourceList",
  props: {
    ip: {
      type: String,
      default: ""
    },
    labelKey: {
      type: String,
      default: "name"
    },
    valueKey: {
      type: Number | String,
      default: "dsId"
    }
  },
  watch:{
      value: {
      handler(newValue) {
        this.selectValue = newValue;
      },
      deep: true,
      immediate: true
    },

    selectValue: {
      handler: function(newValue) {
        this.doChange(newValue);
      },
      deep: true
    },
  },
  components: { tongSelect },
  data() {
    return {
      value: [],
      selectValue: "", //下拉的值
      selectList: [
        {
          label: "关系型数据源",
          value: 1,
          children: []
        },
        {
          label: "文档型数据源",
          value: 2,
          children: []
        },
        {
          label: "列式型数据源",
          value: 3,
          children: []
        }
      ] //下拉数据
    };
  },
  created() {
    this.queryDsIdList();
  },
  methods: {
    doChange(value) {
      this.$emit("update:value", value);
      this.$emit("tongSelectChange", value);
    },
    // init: async function() {
    //   let res = await dataSourceList.call(this, this.ip);
    //   this.selectList = res.data.datasList.map(val => ({
    //     label: val[this.labelKey],
    //     value: val[this.valueKey]
    //   }));
    // },

    queryDsIdList() {
      var self = this;
      var options = [];
      this.$axios
        .all([
          dataSourceList.call(this,this.ip),
          dataSourceList2.call(this,this.ip),
          dataSourceList3.call(this,this.ip),
          // 关系型数据源
          // this.$axios.post("/servers/aam/dsrmdb/rmdbview/v2/list", {
          //   type: 1,
          //   ifacm: 1,
          //   ifApply: 1
          // }),
          // // 文档型数据源
          // this.$axios.post("/servers/aam/dsdoc/docview/v2/list", {
          //   type: 1,
          //   ifacm: 1,
          //   ifApply: 1
          // }),
          // // 列式型数据源
          // this.$axios.post("/servers/aam/dscol/colview/v2/list", {
          //   type: 1,
          //   ifacm: 1,
          //   ifApply: 1
          // })
        ])
        .then(
          self.$axios.spread(function(res1, res2, res3) {
            if (res1.code == 200) {
              var list = res1.data.datasList || [];
              var items = [];
              list.forEach(v => {
                var item = {
                  label: v.name,
                  value: Number(v.dsId),
                  dbType: 1,
                  dbId: v.dbType,
                  dbTypeId: v.dbTypeId
                };
                items.push(item);
                // self.searchOptions[3].selectorOptions.push(item)
              });
              options.push.apply(options, items);
              self.selectList[0].children = items;
            }
            if (res2.code == 200) {
              var list = res2.data.datasList || [];
              var items = [];
              list.forEach(v => {
                var item = {
                  label: v.name,
                  value: Number(v.dsId),
                  dbType: 2
                };
                items.push(item);
                // self.searchOptions[3].selectorOptions.push(item)
              });
              options.push.apply(options, items);
              self.selectList[1].children = items;
            }
            if (res3.code == 200) {
              var list = res3.data.datasList || [];
              var items = [];
              list.forEach(v => {
                var item = {
                  label: v.name,
                  value: Number(v.dsId),
                  dbType: 3
                };
                items.push(item);
                // self.searchOptions[3].selectorOptions.push(item)
              });
              options.push.apply(options, items);
              self.selectList[2].children = items;
            }
            self.dsIdOptions = self.selectList;
          })
        );
    },
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>