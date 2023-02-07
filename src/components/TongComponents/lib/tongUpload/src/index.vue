<template>
  <el-upload
    class="tong-upload"
    v-bind="bindConfig"
    v-on="$listeners"
    ref="tongUpload"
  >
    <el-button v-if="!$attrs.drag" type="primary">点击上传</el-button>

    <slot v-else-if="$slots.default"></slot>
    <template v-else>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </template>

    <div slot="tip" v-html="$attrs.tip" class="tip"></div>
  </el-upload>
</template>
<script>
import defaultConfig from '../config/index';
import {mergeObject} from '../../../js/usual'
export default {
  name: "tongUpload",
  data() {
    return {};
  },
  computed:{
    bindConfig(){
      return mergeObject(defaultConfig,this.$attrs)
    }
  },
  methods:{
    // 清空文件列表
    clearFiles(){
      this.$refs.tongUpload.clearFiles()
    },

    // 取消请求
    about(){
      this.$refs.tongUpload.about()
    },

    // 手动提交
    submit(){
      this.$refs.tongUpload.submit()
    }
  }
};
</script>
