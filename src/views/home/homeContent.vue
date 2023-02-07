<template>
  <div class="home-content">
    <div class="second-menu" v-if="homeModule.menuShow">
      <el-menu router :default-active="activeIndex" @select="doSelect">
        <el-menu-item
          v-for="(item,index) in formateMenuList"
          :key="index"
          :index="item.path"
          :disabled="item.disabled"
        >
          <span slot="title">{{item.menuText}}</span>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="content" ref="content">
      <content-title :title="info.title" :desc="info.desc" :recordList="info.recordList" @send-content-height="sendContentHeight" />
      <example-list v-if="info.exampleList" :exampleList="info.exampleList" :fileName="info.fileName" @send-content-height="sendContentHeight" />
      <table-list v-if="info.tableList" :tableList="info.tableList" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import contentTitle from "./components/title";
import exampleList from "./components/exampleList";
import tableList from './components/tableList';
export default {
  name: "homeContent",
  props: ["info"],
  components: { contentTitle, exampleList, tableList},
  data() {
    return {
      activeIndex: "/guide/install",
      observer: null,
      contentHeight: 0
    };
  },
  watch:{
    info:{
      handler(){
        this.sendContentHeight()
      },
      immediate:true
    }
  },
  computed: {
    ...mapState({ homeModule: "home" }),

    /**
     * 格式菜单列表，排序
     */
    formateMenuList() {
      return this.homeModule.menuList.sort((a, b) => (a.menuOrder||100) - (b.menuOrder||100))
    }
  },
  methods: {
    doSelect(path) {
      this.activeIndex = path;
    },

    init() {
      const path = this.$router.history.current.path;
      this.doSelect(path);
    },

    sendContentHeight(){
      this.$nextTick(()=>{
        // window.postMessage("content-height",this.$refs.content.clientHeight);
         window.top.postMessage(this.$refs.content.clientHeight,'*');
      })
    }
  },
  created() {
    this.init();
  },
  mounted () {
    if(this.homeModule.menuShow!==1){
      return
    }
    document.documentElement.style.height = 'auto'
    document.documentElement.style.overflow = 'hidden'
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    const element = this.$refs.content
    this.observer = new MutationObserver((mutationList) => {
      /* for (const mutation of mutationList) {
        console.log(mutation)
      } */
     // const width = getComputedStyle(element).getPropertyValue('width')
      let height = getComputedStyle(element).getPropertyValue('height').replace('px','')
      height = Math.ceil(height)
      if (height === this.contentHeight) return
      
      this.contentHeight = height
      window.parent.postMessage(height,'*')
    })
    this.observer.observe(element, { 
      childList: false, // 子节点的变动（新增、删除或者更改）
      attributes: true, // 属性的变动
      characterData: false, // 节点内容或节点文本的变动
      subtree: true // 是否将观察器应用于该节点的所有后代节点
    })
  },
  beforeDestroyed () {
    if (this.observer) {
      this.observer.disconnect()
      this.observer.takeRecords()
      this.observer = null
    }
  }
};
</script>
<style lang='scss' scoped>
.home-content {
  display: flex;
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;

  > div {
    height: 100%;
    overflow-y: auto;
    padding: 10px;
    box-sizing: border-box;
  }
  .second-menu {
    width: 240px;
    min-width: 240px;

    ::v-deep.el-menu {
      height: 100%;
      padding-right: 10px;
      overflow-y: auto;
      .el-menu-item {
        font-size: 14px;
      }
      &-item{
        padding: 0 10px!important;
      }
    }
  }
  .content {
    flex: 0px;
    padding-left: 0;
  }
}
</style>
