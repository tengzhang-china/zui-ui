<template>
  <div class="tong-confirm">
    <div v-html="$attrs.info"></div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  created() {
    console.log(this.$attrs);
  },
  beforeMounted() {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.tong-confirm {
  position: relative;
  height: 100%;
  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 10px));
  }
}
</style>