<template>
  <!-- 系统列表 -->
  <tong-select
    class="tong-select-list"
    v-bind="$attrs"
    v-on="$listeners"
    :options="selectList"
    :filterable="true"
  />
</template>
<script>
import tongSelect from "../../../lib/tongSelect";
//schmea下拉选的接口
import { schemaList } from "../controller/index.js";
export default {
  name: "tongSchemaList",
  props: {
    dsId:{
      type: Number,
      default: 4
    },
    ip: {
      type: String,
      default: ""
    },
    labelKey: {
      type: String,
      default: "schema"
    },
    valueKey: {
      type: Number|String,
      default: "dsId"
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
      let res = await schemaList.call(this, this.ip,this.dsId);
      this.selectList = res.data.map(val => ({
        label: val[this.labelKey],
        value: val[this.valueKey]
      }));
    }
  },
  created() {
    this.init();
  }
};
</script>