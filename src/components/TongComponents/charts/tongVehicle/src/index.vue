<template>
  <div
    class="tong-vehicle"
    :style="{ height: height ? height + 'px' : '100%' }"
  >
    <div ref="chart"></div>
  </div>
</template>
<script>
import commonMixin from "../../commonMixin";
export default {
  name: "tongVehicle",
  props: {},
  mixins: [commonMixin],
  components: {},
  data() {
    return {};
  },
  methods: {
    getOption() {
      let option = this.setOption();

      return option;
    },
  },
};
</script>
<style lang='scss' scoped>
.tong-vehicle {
  > div {
    height: 100%;
  }
}
</style>