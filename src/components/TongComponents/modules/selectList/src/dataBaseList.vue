<template>
  <!-- 系统列表 -->
  <tong-select
    class="tong-select-list"
    v-bind="$attrs"
    v-on="$listeners"
    :options="selectList"
    :filterable="true"
    multiple
  />
</template>
<script>
import tongSelect from "../../../lib/tongSelect";
//schmea下拉选的接口
import { dataBaseList } from "../controller/index.js";
export default {
  name: "tongDatabaseList",
  props: {
    dsId: {
      type: Number,
      default: 175
    },
    ip: {
      type: String,
      default: ""
    }
  },
  components: { tongSelect },
  data() {
    return {
      selectList: [] //下拉数据
    };
  },
  methods: {
    init: async function() {
      let res = await dataBaseList.call(this, this.ip, this.dsId);
      this.selectList = res.data.tableList[0].tables;
    }
  },
  created() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.tong-select-list {
  width: 250px;
}
</style>