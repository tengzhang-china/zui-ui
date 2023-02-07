<template>
  <div class="tong-tabs">
    <el-tabs
      ref="tongTabs"
      v-model="selectedTabs"
      :type="type"
      @tab-remove="removeTab"
      @tab-click="clickTab"
    >
      <el-tab-pane
        v-for="(item, index) in tabsDataModel"
        :key="item.label + index"
        :disabled="item.disabled"
        :closable="item.closable"
        :name="item.label"
      >
        <span slot="label">
          <slot :name="item.slotLabel"></slot>
          {{ item.label }}
        </span>
        <slot :name="item.slotContent"></slot>
        <!-- <template :slot-scope="item.slotContent">{{item.slotContent}}</template> -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "tongTabs",
  props: {
    //标签页样式
    type: {
      type: String,
      default: "",
    },
    tabsModel: {
      type: Array,
      default: function () {
        return [];
      },
    },
    activeClass: {
      type: String,
      default: "",
    },
    slotContent: {
      type: String,
      default: "",
    },
    slotLabel: {
      type: String,
      default: "",
    },
    closable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      selectedTabs: this.activeClass,
      tabsDataModel: [],
    };
  },
  watch: {
    activeClass:{
      handler(){
        this.selectedTabs = this.activeClass
      },
      immediate:true
    },

    tabsModel:{
      handler(newValue){
        this.tabsDataModel = newValue
      },
      deep:true,
      immediate:true
    }
  },

  methods: {
    /*
     点击事件
    */
    clickTab(tab, event) {
      this.$emit('update:activeClass',tab.name);
      this.$emit("tab-click", { tab, event });      
    },

    /*
    移除tabs
    */
    removeTab(targetName) {
      const tabs = this.tabsDataModel;
      let activeName = this.selectedTabs;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.label === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.label;
            }
          }
        });
      }
      
      this.selectedTabs = activeName;
      this.tabsDataModel = tabs.filter((tab) => tab.label !== targetName);
      this.$emit('tab-remove',targetName)
    },
  },
};
</script>
