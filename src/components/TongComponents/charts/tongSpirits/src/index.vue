<template>
  <div
    class="tong-spirits"
    :style="{ height: height ? height + 'px' : '100%' }"
  >
    <div ref="chart"></div>
  </div>
</template>
<script>
import commonMixins from "../../commonMixin";
export default {
  name: "tongSpirits",
  props: {},
  mixins: [commonMixins],
  components: {},
  data() {
    return {};
  },
  methods: {
    getOption() {
      let option = this.setOption();
      return option
    },
  },
};
</script>
<style lang='scss' scoped>
.tong-spirits {
  > div {
    height: 100%;
  }
}
</style>