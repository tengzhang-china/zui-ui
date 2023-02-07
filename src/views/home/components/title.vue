<template>
  <div class="title">
    <h2>
      {{title}}
      <span class="last-modify" v-if="formateTime&&formateEditor">lastModify at {{formateTime}} by {{formateEditor}}</span>
      <i class="el-icon-warning" v-if="recordList" @click="toggleActiveName"></i>
    </h2>

    <!-- 收起展开修改记录 -->
    <el-collapse v-model="activeName" accordion v-if="recordList">
      <el-collapse-item title name="1">
        <div v-for="(list, listIndex) in recordList" :key="listIndex" class="collapse-item">
          <p class="title"><span>{{list.version}}</span><span>修改：{{list.editor}}</span><span>时间：{{list.time}}</span></p>
          <p v-for="(content, contentIndex) in list.contentList" :key="contentIndex">{{contentIndex + 1}}.{{content}}</p>
        </div>
      </el-collapse-item>
    </el-collapse>

    <p v-show="desc">{{desc}}</p>
  </div>
</template>
<script>
export default {
  props: ["title", "desc", "recordList"],
  data() {
    return {
      activeName: ""
    };
  },
  computed: {
    formateEditor(){
      return this.recordList && this.recordList[0].editor
    },

    formateTime(){
      return this.recordList && this.recordList[0].time
    },
    
  },
  methods: {
    /**
     * 展开或者收起修改记录
     */
    toggleActiveName() {
      this.activeName = this.activeName === "1" ? "" : "1";
      
      setTimeout(()=>{
        this.$emit("send-content-height")
      },300)
    }
  }
};
</script>
<style lang='scss' scoped>
.title {
  h2 {
    font-weight: 500;
  }
  .last-modify,
  p {
    color: #666;
    line-height: 30px;
    font-size: 12px;
    font-weight: 500;
  }
  i {
    margin-left: 5px;
    font-size: 14px;
    color: #409eff;
    align-self: center;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
  ::v-deep.el-collapse {
    border-bottom: none;
    .el-collapse-item__header {
      display: none;
    }
    .el-collapse-item__content{
      padding-bottom: 0;
    }
  }
  .collapse-item{
    padding: 10px 0;
    p{
      margin: 0;
      line-height: 25px;
    }
    .title{
      color: #999;
      span:nth-child(1){
        color: #333;
      }
      span:nth-child(2){
        margin: 0 10px;
      }
    }
  }
}
</style>