<template>
  <div class="tong-datasource">
    <Search
      :searchData="searchData"
      :value.sync="searchValue"
      @search="search"
    />
    <List
      ref="List"
      v-loading="listDataLoading"
      :listData="listData"
      :height="height"
      :checkedData="curentCheckedData"
      @checkChanged="checkChanged"
      v-on="$listeners"
    />
  </div>
</template>
<script>
import Search from "./components/Search";
import List from "./components/List";
import API from "./api/index";
import { flatArray } from "../../../../js/usual";
export default {
  props: {
    height: {
      type: String,
    },
    defaultCheckedData: {
      type: Object,
      default: function () {
        return {};
      },
    },

    dataSourceParams:{
      type: Object,
      default: function () {
        return {};
      },
    },

    sameSource:{ //是否同源
      type:Boolean,
      default:false
    }

  },
  components: { Search, List },
  data() {
    return {
      searchValue: "",
      searchData: [],
      listData: [],
      listDataLoading: false,

      checkedData: {}, //所有选中按照源统计
      curentCheckedData:[]
    };
  },
  watch: {
    searchValue(newValue) {
      this.curentCheckedData = [];
      if(newValue && this.checkedData[newValue]){
        this.curentCheckedData = this.checkedData[newValue]
      }else if(!this.checkedData[newValue]){
        this.checkedData[newValue] = [];
      }
      this.getTabkeList();
    },

    defaultCheckedData: {
      handler(newValue) {
        this.checkedData = newValue;
        setTimeout(()=>{
          this.search()
        },100)
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    async init() {
      await this.getDatasourceList();
    },

    /**
     * 获取数据源列表
     */
    async getDatasourceList() {
      const res = await this.$axios.post(API.sourceList, { type: 1, ...this.dataSourceParams });
      this.searchData = flatArray(res.data.datasList, "dbList").filter(
        (val) => val.dsId
      );
      this.searchValue = this.searchData[0].dsId;
    },

    /**
     * 获取表名
     */
    async getTabkeList() {
      this.listDataLoading = true;
      let res ;
      try{
         res = await this.$axios.post(API.tableList, {
          dsId: this.searchValue,
          tableType: 0,
          status: 1,
        });
      }
      finally{
        this.listDataLoading = false;
      }
      this.listData = flatArray(res.data.datasList, "tableList").filter(
        (val) => val.tableName
      );
      this.$nextTick(()=>{
        this.search()
      })
    },

    /**
     * 过滤表名
     */
    search(val="") {
      this.$refs.List.search(val);
    },

    /**
     * 选择表
     */
    checkChanged(checkValue, val) {
      this.curentCheckedData = checkValue.map(val=>val.id);

      // 同数据源选择的话先清空数据记录
      if(this.sameSource===true){
        this.checkedData = {};
      }
      this.checkedData[this.searchValue] = this.curentCheckedData;
    },

    /**
     * 接口
     * 输出选中的数据源和表名 
     */
    getData(){
      return {
        dsId:this.searchValue,
        checkedData:this.checkedData
      }
    }
  },
  created() {
    this.init();
  },
};
</script>
<style lang='scss' scoped>
.tong-datasource {
  width: 240px;
}
</style>