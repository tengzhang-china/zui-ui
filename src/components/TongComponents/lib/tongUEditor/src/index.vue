<template>
  <div :id="uEditorId"></div>
</template>
<script>
import wangeditor from "wangeditor";
import defaultConfig from '../config/index';
export default {
  name: "tongUEditor",
  props:{
    uEditorId:{type: String,default: ""},
    uMenus:{type: Array,default:[]},
    delMenus:{type: Array,default:[]},
    showLinkImg:{type: Boolean,default: false},
    uploadImgServer:{type: String,default: "/upload"},
    accept:{type: Array,default:[]},
    disabled:{type: Boolean,default: false},
    uploadImgShowBase64: {type: Boolean,default: false},
    uploadImgMaxSize:{type: Number,default: 5},
    rebackValue:{type: String,default: ""},
  },
  data() {
    return {
      editor: null,
      info_: null
    };
  },
  computed:{

  },
  mounted(){
    this.initEditor();
  },
  methods:{
    initEditor(){
      this.editor = new wangeditor('#'+this.uEditorId);
      // 菜单的只能选一种（删除某几项或者显示某几项）
      if(this.delMenus){
        this.editor.config.excludeMenus = this.delMenus;
      }else{
        this.editor.config.menus = this.uMenus || defaultConfig.menus;
      }
      // 图片上传
      if(this.uploadImgServer){
        this.editor.config.uploadImgServer = this.uploadImgServer;// 上传图片的接口地址
      }
      // 网络图片
      this.editor.config.showLinkImg = this.showLinkImg;
      // 图片接收格式
      this.editor.config.uploadImgAccept = this.accept || defaultConfig.accept;
      // 图片转base64
      this.editor.config.uploadImgShowBase64 = this.uploadImgShowBase64;
      // 图片大小限制
      this.editor.config.uploadImgMaxSize = this.uploadImgMaxSize * 1024 * 1024;

      // 调用上传图片接口
      this.editor.config.uploadImgHooks = {
        before: function(xhr, editor, files) {

        },
        success: function(xhr, editor, result) {
          console.log("上传成功");
        },
        fail: function(xhr, editor, result) {
          console.log("上传失败,原因是" + result);
        },
        error: function(xhr, editor) {
          console.log("上传出错");
        },
        timeout: function(xhr, editor) {
          console.log("上传超时");
        },
        // 图片上传并返回了结果，想要自己把图片插入到编辑器中
        // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
        customInsert: function(insertImgFn, result) {
            // result 即服务端返回的接口
            console.log('customInsert', result)

            // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
            insertImgFn(result.data[0])
        }
      }

      this.editor.config.onchange = (html) => {
        this.info_ = html // 绑定当前值
        this.$emit('dataChange', this.info_) // 将内容同步到父组件中
      }

      this.$nextTick(()=>{
        this.editor.create();
        this.editor.txt.html(this.rebackValue);
        if(this.disabled){
          this.doDisable()
        }
      })
    },
    doDisable(){
      this.editor? this.editor.disable(): "";
      this.$emit("doDisable");
    },
    doEnable(){
      this.editor? this.editor.enable(): "";
      this.$emit("doEnable");
    },
    getJson(){
      let data = this.editor.txt.getJSON();
      this.$emit("getJson", { data });
    }


  }
};
</script>
