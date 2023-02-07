<template>
  <el-table-column
    :label="info.label"
    :prop="info.prop"
    :width="info.width"
    :min-width="info.minWidth"
  >
    <!-- 补充其他的内容展示形式 -->
   <my-thead v-for="(child,index) in formateColumn(info.column||[])" :key="index" :info="child" />
  </el-table-column>
</template>
<script>
export default {
  name: "myThead",
  props: ["info"],
  computed:{
    formateColumn(){
      return function(column){
        return column.filter(val=>val.show!==false)
      }
    }
  }
};
</script>
