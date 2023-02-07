<template>
  <div class="tong-line" :style="{ height: height ? height + 'px' : '100%' }">
    <div ref="chart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import commonMixin from "../../commonMixin"
export default {
  name: "tongLine",
  mixins: [commonMixin],
  props: {},
  data: function () {
    const _this = this;
    return {};
  },
  methods: {
    getOption(){
      let option = this.setOption();
      console.log(option)
      return option
    }
  },
};
</script>