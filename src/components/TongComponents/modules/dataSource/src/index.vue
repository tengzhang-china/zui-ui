<template>
  <component
    :is="getComponentName"
    v-bind="$attrs"
    v-on="$listeners"
  ></component>
</template>
<script>
export default {
  name:"tongDataSource",
  props: {
    componentType: {
      type: String,
      default: "1",
    },
  },
  components: { type1:()=>import("./type1/index.vue"),type2:()=>import("./type2/index.vue") },
  computed: {
    getComponentName() {
      return `type${this.componentType}`;
    },
  },
};
</script>