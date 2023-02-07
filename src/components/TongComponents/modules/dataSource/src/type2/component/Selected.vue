<template>
  <div class="selected">
    <p class="title">{{ title }}</p>

    <div>
      <div class="item" v-for="(list, key) in selectedData" :key="key">
        <p class="item-title" v-if="list">
          <span>{{ key }}</span>
          <span class="count">{{ list.length }}张</span>

          <span class="cursor operate-blue" @click="Del(key, list)">删除</span>
        </p>
        <section class="item-content">
          <span v-for="(table, index) in list" :key="index">
            <span class="tong-tips">{{ table.tableName }}</span>
            <i class="el-icon-close cursor" @click="delItem(key, index)"></i>
          </span>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "selectedData"],
  components: {},
  data() {
    return {};
  },
  methods: {
    Del(key, list) {
      this.$emit("clearKey", key, list);
    },
    delItem(key, index) {
      this.$emit("delItem", key, index);
    },
  },
};
</script>