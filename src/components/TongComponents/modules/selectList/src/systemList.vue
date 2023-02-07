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
import { systemList } from "../controller/index.js";
export default {
  name: "tongSystemList",
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
      type: String,
      default: "appSysId"
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
      let res = await systemList.call(this, this.ip);
      this.selectList = res.data.datasList.map(val => ({
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