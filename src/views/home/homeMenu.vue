<template>
  <div class="home-menu">
    <div class="title">
      <tong-icon v-if="false" :imgUrl="logoIcon" />
      <!-- <img src="../../../public/static/logo.png" alt="" /> -->
      <span>Tong组件库</span>
    </div>

    <!-- 可以调整为递归组件 -->
    <el-menu :default-active="activeIndex" mode="horizontal" @select="doSelect">
      <el-menu-item
        v-for="(menu, menuIndex) in formateMenuList"
        :disabled="menu.disabled"
        :key="menuIndex"
        :index="menu.path"
      >
        <template v-if="menu.children">
          <el-submenu :index="menu.path">
            <span slot="title">{{ menu.text }}</span>
            <el-menu-item
              v-for="(child, childIndex) in menu.children"
              :key="'child_' + childIndex"
              :index="child.path"
            >
              {{ child.text }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <span>{{ menu.text }}</span>
        </template>
      </el-menu-item>
    </el-menu>

    <!-- 切换展示类型 -->
    <flow-type />
  </div>
</template>
<script>
import tongIcon from "../../components/TongComponents/lib/tongIcon/index";
import { menuList, logoIcon } from "./config/homeMenu.config";
import flowType from "./homeMenuFlowType.vue"
export default {
  components: { tongIcon,flowType },
  data() {
    return {
      activeIndex: "/guide",
      logoIcon,
      menuList,
    };
  },
  computed:{
    formateMenuList(){
      return this.menuList.filter(val=>val.show!==false)
    }
  },
  watch: {
    $route: {
      handler: function () {
        this.$nextTick(this.init);
      },
      immediate: true,
    },
  },
  methods: {
    doSelect(path) {
      const res = this.menuList.find((val) => val.path === path);
      this.$store.commit("home/setMenuList", path.split("/")[1]);
      if (res.redirect && res.redirect !== this.$router.history.current.path)
        this.$router.push(res.redirect);
      this.activeIndex = path;
    },

    init() {
      const path = this.$router.history.current.path.split("/")[1];
      this.activeIndex = "/" + path;
      this.$store.commit("home/setMenuList", path);
    },
  },
};
</script>
<style lang='scss' scoped>
.home-menu {
  display: flex;
  position: relative;

  .title {
    align-self: center;
    position: absolute;
    display: flex;
    padding: 0 10px;
    z-index: 10;

    img {
      height: 20px;
    }
    span {
      margin-left: 5px;
      font-weight: 600;
    }
  }
  ::v-deep.el-menu {
    flex: 0px;
    display: flex;
    .el-menu-item {
      font-size: 14px;
    }
    .el-menu-item:nth-child(1) {
      margin-left: auto;
    }
    .el-menu-item:nth-last-child(1) {
      margin-right: 60px;
    }
  }
}
</style>
