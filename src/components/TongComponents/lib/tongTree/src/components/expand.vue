<template>
  <div class="expand-btn original" @click.stop.passive="getMore">
    <span
      class="tong-tips cursor"
      :class="[isLoading?'el-icon-loading':'el-icon-more']"
      :data-tips-show="true"
      data-tips="展示更多"
    ></span>
  </div>
</template>
<script>
export default {
  name: "expandBtn",
  props: ["moreFunction", "moreShowKey", "lazy", "tongTreeObj"],
  data(){
    return {
      isLoading:false
    }
  },
  methods: {
    async getMore() {
      let { node, data } = this.$attrs;
      if (this.isLoading) {
        return;
      } else {
        this.isLoading = true;
      }

      console.log("%c树正在加载更多数据------", "color:green");

      try {
        let res = await this.moreFunction(node, data);
        // 处理树数据
        for (let i = 0; i < res.data.length; i++) {
          this.tongTreeObj.insertBefore(res.data[i], node);
        }

        const checkedKeys = {
          half:this.tongTreeObj.getHalfCheckedKeys(),
          selected:this.tongTreeObj.getCheckedKeys(),
        }
        
        this.$nextTick(()=>{
          this.tongTreeObj.setCheckedKeys(checkedKeys.selected)
          checkedKeys.half.forEach(ele => {
              this.tongTreeObj.getNode(ele).indeterminate=true
          })
        })
        
        // 是否去掉更多按钮
        if (!res[this.moreShowKey]) {
          this.tongTreeObj.remove(node);
        }

        this.$emit("done-more",{node, data})
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.expand-btn {
  width: 100%;
  color: #666;
}
</style>