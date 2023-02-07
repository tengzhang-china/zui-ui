<template>
  <div
    class="tongScrollLink"
    :style="{ width, height }"
    ref="scrollContent"
    @scroll="doScroll"
  >
    <div class="collapse-box" ref="collapseBox">
      <el-collapse v-model="activeNamesChild" :accordion="accordion" @change="(opt)=>$emit('changeCollapse',opt)">
        <template v-for="(item, index) in configArrChild">
          <el-collapse-item
            v-if="item.show"
            :key="index"
            :title="item.label"
            :name="index"
            :id="item.id"
            :ref="'scrollContent_' + index"
          >
            <!-- <slot name="title" slot="title"></slot> -->
            <el-checkbox v-if="item.isCheckbox" slot="title" v-model="item.value" @change="checkChange(item)">{{item.label}}</el-checkbox>
            <!-- <tong-render
              slot="title"
              v-if="item.titleRender"
              :render="item.titleRender"
            ></tong-render> -->
            <slot :name="'slot_' + index"></slot>
          </el-collapse-item>
        </template>
      </el-collapse>
    </div>

    <ul class="anchor-box" ref="anchorBox">
      <li
        v-for="(item, index) in configArrChild"
        :key="index"
        :class="{ active: activeIndexChild === index }"
        @click="doClick(index)"
      >
        <span v-show="item.show">{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import tongRender from "../../tongRender/index";
export default {
  name: "scrollLink",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },

    isScrolling: {
      type: Boolean,
      default: true,
    },
    //默认选中的tab
    activeIndex: {
      type: Number,
      default: 0,
    },

    accordion:{
      type:Boolean,
      default:false
    },
    //
    activeNames: {
      type: Array,
      default: function () {
        return [0];
      },
    },
    //tab和左侧内容区显示内容
    configArr: {
      type: Array,
      default: function () {
        return [
          {
            label: "lablel1",
            id: "lablel1",
            show: true,
          },
          {
            label: "lablel2",
            id: "lablel2",
            show: true,
          },
          {
            label: "lablel3",
            id: "lablel3",
            show: true,
          },
          {
            label: "lablel4",
            id: "lablel4",
            show: true,
          },
        ];
      },
    },
  },
  components: { tongRender },
  data() {
    return {
      scrollContentHeightArr: [], //存放滚动内容高度
      isScrollingChild: this.isScrolling,
      activeIndexChild: this.activeIndex,
      activeNamesChild: [],
      configArrChild: [],
    };
  },
  watch: {
    configArr:{
      handler(newValue){
        this.configArrChild = newValue.filter(val=>val.show)
      },
      immediate:true,
      deep:true
    },
    activeNames:{
      handler(newValue){
        this.activeNamesChild = newValue
      },
      deep:true,
      immediate:true
    }
  },

  methods: {
    /*
     * 初始化设置
     */
    initSetting() {
      this.scrollContentHeightArr = [];
      this.configArrChild.forEach((item, index) => {
        this.scrollContentHeightArr.push(
          this.$refs["scrollContent_" + index][0] &&
            this.$refs["scrollContent_" + index][0].$el.clientHeight
        );
      });
    },
    /*
    点击tab
    */
    doClick(index) {
      this.isScrollingChild = false;
      this.activeIndexChild = index;
      this.setScrollHeight(index);
    },
    /*
     *设置滚动高度
     */
    setScrollHeight(index) {
      this.initSetting();
      const arr = this.scrollContentHeightArr.slice(0, index);
      this.$refs.scrollContent.scrollTop = arr.reduce((a, b) => a + b, 0);
      this.$refs.anchorBox.style.paddingTop =
        this.$refs.scrollContent.scrollTop + "px";
      setTimeout(() => {
        this.isScrollingChild = true;
      }, 100);
    },
    /*
     * 滚动条与tab关联
     */
    doScroll() {
      if (this.isScrollingChild) this.setActiveIndex();
    },

    /*
     *设置选中的tab
     */
    setActiveIndex() {
      this.initSetting();
      const scrollTop = this.$refs.scrollContent.scrollTop;
      // const arrFormat = [
      //   ...this.scrollContentHeightArr.map((val, index) =>
      //     this.scrollContentHeightArr.slice(0, index).reduce((a, b) => a + b, 0)
      //   ),
      //   scrollTop
      // ].sort((a, b) => a - b);
      let arr = [];
      this.scrollContentHeightArr.map((val, index) =>
        arr.push(
          this.scrollContentHeightArr.slice(0, index).reduce((a, b) => a + b, 0)
        )
      );
      arr.push(scrollTop);
      let arrFormat = arr.sort((a, b) => a - b);
      this.activeIndexChild =
        arrFormat.indexOf(scrollTop) > 0 ? arrFormat.indexOf(scrollTop) - 1 : 0;
      this.$refs.anchorBox.style.paddingTop = scrollTop + "px";
    },

    /**
     * 权限关闭
     */
    checkChange(item){
      this.$emit("checkChange",item)
    }
  },
  mounted() {
    //初始化设置
    this.initSetting();
  },
};
</script>
