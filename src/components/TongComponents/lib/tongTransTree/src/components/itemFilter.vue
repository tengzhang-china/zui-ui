<template>
  <div class="filter-box">
    <i class="cursor" :class="formateOrder" @click="changeOrder"></i>
    <ul>
      <li
        v-for="word in formateWordList"
        :key="word"
        class="cursor"
        :class="{ active: word === filterWord }"
        @click="select(word)"
      >
        {{ word }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "filter",
  props: ["filterWord","order"],
  components: {},
  data() {
    return {
      
    };
  },
  computed: {
    formateWordList() {
      let res = "abcdefghijklmnopqrstuvwxyz".split("");
      return this.order === "down" ? res : res.reverse();
    },

    formateOrder(){
      return `el-icon-sort-${this.order}`
    }
  },
  methods: {
    select(word) {
      this.$emit("update:filterWord",this.filterWord === word ? "" : word);
    },

    changeOrder() {
      this.$emit("update:order",this.order === "up" ? "down" : "up");
    },
  },
};
</script>