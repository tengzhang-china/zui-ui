<template>
  <div class="tong-drag" v-show="min">
    <VueDraggableResizable
      v-if="first"
      :w="width"
      :h="height"
      :x="left"
      :y="top"
      :min-width="minWidth"
      :min-height="minHeight"
      :max-width="maxWidth"
      :max-height="maxHeight"
      :parent="true"
      :draggable="draggable"
      :resizable="resizable"
      :axis="axis"
      :dragHandle="dragHandle"
      :dragCancel="dragCancel"
      :class-name-draggable="dragTitle||titleMaximize||titleMinimize?'':'dragClass'"
      @dragging="dragging"
      @resizing="resizing"
    >
      <div class="drag-title" v-if="dragTitle||titleMaximize||titleMinimize">
        <span v-if="dragTitle">{{dragTitle}}</span>
        <el-tooltip v-if="titleMinimize" class="item" effect="dark" content="最小化" placement="top">
          <span @click="minimize" class="title-minimize ">━</span>
        </el-tooltip>
        <el-tooltip v-if="titleMaximize" class="item" effect="dark" content="最大化" placement="top">
          <span @click.stop="maximize" class="title-maximize"></span>
        </el-tooltip>
      </div>
      <slot name="slotContent"></slot>
    </VueDraggableResizable>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
export default {
  name: "tongDrag",
  components: { VueDraggableResizable },
  props: {
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    left: {
      type: Number,
      default: 0,
    },
    top: {
      type: Number,
      default: 0,
    },
    minWidth: {
      type: Number,
      default: 0,
    },
    minHeight: {
      type: Number,
      default: 0,
    },
    maxWidth: {
      type: Number,
      default: 500,
    },
    maxHeight: {
      type: Number,
      default: 500,
    },
    parent: {
      type: Boolean,
      default: true
    },
    draggable: {
      type: Boolean,
      default: true
    },
    resizable: {
      type: Boolean,
      default: true
    },
    axis: {
      type: String,
      default: "both"
    },
    className: {
      type: String,
      default: ""
    },
    dragHandle: {
      type: String,
      default: ""
    },
    dragCancel: {
      type: String,
      default: ""
    },
    dragTitle: {
      type: String,
      default: ""
    },
    titleMaximize: {
      type: Boolean,
      default: false
    },
    titleMinimize: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      min: true,
      first: false
    };
  },
  methods: {
    resizing(x, y, width, height) {
      this.left = x;
      this.top = y;
      this.width = width;
      this.height = height;
      this.$emit("resizing", x, y, width, height);
    },
    dragging(x, y) {
      this.left = x;
      this.top = y;
      this.$emit("dragging", x, y);
    },
    minimize() {
      this.min = false;
      this.$emit("minimize");
    },
    maximize() {
      this.left = 0;
      this.top = 0;
      this.width = this.maxWidth;
      this.height = this.maxHeight;
      this.$emit("maximize");
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.first = true;
    })
  },
};
</script>