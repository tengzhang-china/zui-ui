<template>
  <div class="tong-datasource-search">
    <section>
      <tongSelect
        v-bind="config.CONFIG_SEARCH_SOURCE"
        :value.sync="datasource"
        :options="searchData"
        v-on="$listeners"
      />
    </section>
    <section>
      <tongInput v-bind="config.CONFIG_SEARCH_TABLE" v-model="tablename" />
      <i class="cursor iconfont tong-icon-sousuo" @click="search"></i>
    </section>
  </div>
</template>
<script>
import { tongInput, tongSelect } from "../../../../../index";
import { CONFIG_SEARCH_SOURCE, CONFIG_SEARCH_TABLE } from "../config/index";
export default {
  props: {
    value: {
      type: Number | String,
      default: "",
    },
    searchData: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    tongInput,
    tongSelect,
  },
  watch: {
    value(newValue) {
      this.datasource = newValue;
    },
  },
  computed: {
    config: {
      get() {
        return { CONFIG_SEARCH_SOURCE, CONFIG_SEARCH_TABLE };
      },
    },
  },
  data() {
    return {
      datasource: "",
      tablename: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.tablename);
    },
  },
};
</script>
