<template>
  <div
    class="tong-editor"
    :class="{ 'index-hidden': !indexShow, 'no-cursor': !cursorShow, 'tong-drag-y':tongDragY,'tong-drag-x':tongDragX }"
    :style="{ width, height }"
  >
    <!-- <button @click="e=>scrollToEnd(2)">插入回车</button> -->
    <slot name="editorHeader"></slot>
    <tEditor
      :options="getOptions"
      :autoComplete="myAutoComplete"
      theme="chrome"
      v-model="codeValue"
      :lang="lang"
      :width="width"
      :height="height"
      @init="init"
      ref="tongEditor"
      v-on="$listeners"
      style="border: 1px solid #e4e4e4"
    />
  </div>
</template>

<script>
import sqlFormatter from "sql-formatter";
import { formateJson } from "../../../js/formate";
import {throttle} from "../../../js/usual";
import { format } from 'sql-formatter'
export default {
  name: "tongEditor",
  props: {
    width: {
      type: String | Number,
      default: "100%",
    },
    tipWidth:{
      type:  Number,
      default: 0,
    },
    height: {
      type: String | Number,
      default: "100%",
    },

    wrap: {
      type: Boolean,
      default: false,
    },

    indexShow: {
      type: Boolean,
      default: true,
    },

    lang: {
      type: String,
      validator: function (val) {
        return ["sql", "javascript", "java", "json","sqlserver"].indexOf(val) > -1;
      },
      default: "sql",
    },

    value: {
      type: String,
      default: "",
    },

    readonly: {
      type: Boolean,
      default: false,
    },

    autoToEnd: {
      ype: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
    cursorShow: {
      type: Boolean,
      default: true,
    },

    tableNameArr: {
      type: Array,
      default: function () {
        return [];
      },
    },

    functionArr: {
      type: Array,
      default: function () {
        return [];
      },
    },
    customTipArr:{
      type:Array,
      default:function(){
        return []
      }
    },

    columnURL: {
      type: String,
      default: "",
    },

    columnOtherParams: {
      type: Object,
      default: function () {
        return {};
      },
    },
    tongDragX:{
      type:Boolean,
      default:false
    },
    tongDragY:{
      type:Boolean,
      default:false
    },

    colorKeyword: {
      type: String,
      default: "#930f80",
    },
    colorComment: {
      type: String,
      default: "#236e24",
    },
    colorIdentifier: {
      type: String,
      default: "#000",
    },
    colorOperator: {
      type: String,
      default: "#687687",
    },
  },
  components: { tEditor: require("vue2-ace-editor") ,format},
  data() {
    return {
      codeValue: "",
      myEditor: null, //当前editor实例

      myAutoComplete: true, //是否需要使用默认的提示

      columsArr: [], //对应表下面的字段
      tableName: null, //提示表明下面的
      tableNameArrFormate: [], //表名数据处理之后的数据
      functionArrFormate: [], //function数据处理之后
      customTipArrFormate:[],

      autoCompleteCompleters: {
        getCompletions: function (editor, session, pos, prefix, callback) {
          this.setCompletions(editor, session, pos, prefix, callback);
        }.bind(this),
      },

      scrollBar: {
        left: 0,
        top: 0,
      },
    };
  },
  watch: {
    value: {
      handler(newVal) {
        this.codeValue = newVal;
        if (this.autoToEnd) this.$nextTick(this.scrollToEnd);
      },
    },
    tableNameArr: {
      handler(newArr) {
        this.tableNameArrFormate = newArr.map((val) => ({
          caption: val,
          meta: "表名",
          value: val,
          score: 2000,
        }));
      },
      deep: true,
      immediate: true,
    },
    functionArr: {
      handler(newArr) {
        this.functionArrFormate = newArr.map((val) => ({
          caption: val.label,
          meta: "function",
          value: val.value,
          score: 2000,
        }));
      },
      deep: true,
      immediate: true,
    },

    customTipArr:{
      handler(newArr) {
        this.customTipArrFormate = newArr.map((val) => ({
          caption: val.label,
          meta: val.type,
          value: val.value,
          score: (val.score||0) + 2000,
        }));
      },
      deep: true,
      immediate: true,
    }
  },
  computed: {
    getOptions() {
      return {
        wrap: this.wrap ? "free" : "", //自动换行
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        readOnly: this.readonly || this.disabled,
      };
    },
  },
  methods: {
    init() {
      // 后面需要拓充的，增加对应位置文件
      require("./ext/language_tools");
      require("./theme/chrome");
      require(`./mode/${this.lang}`);
      require(`./snippets/${this.lang}`);

      this.$nextTick(() => {
        this.myEditor.completers = [
          ...this.myEditor.completers,
          this.autoCompleteCompleters,
        ];
      });

      this.myEditor = this.$refs.tongEditor.editor;

      //覆盖新的颜色样式
      this.addNewStyle();

      //添加.监听
      if (this.columnURL)
        this.myEditor.commands.on("afterExec", function (e, t) {
          if (e.command.name == "insertstring" && e.args == ".") {
            e.editor.execCommand("startAutocomplete");
          }
        });
    },
  //   formatter () {
  //     const editor = this.$refs.tongEditor.editor
  //     const content = editor.getValue()
  //     const formatContent = format(content)
  //     editor.setValue(formatContent)
  // },
    addNewStyle() {
      var styleElement = document.getElementById("styles_js");
      if (styleElement)
        document.getElementsByTagName("head")[0].removeChild(styleElement);
      styleElement = document.createElement("style");
      styleElement.type = "text/css";
      styleElement.id = "styles_js";
      document.getElementsByTagName("head")[0].appendChild(styleElement);

      let newStyle = `
            .sql-editor .ace_editor .ace_scroller .ace_text-layer .ace_keyword{
                color:${this.colorKeyword}!important
            }

            .sql-editor .ace_editor .ace_scroller .ace_text-layer .ace_comment{
                color:${this.colorComment}!important
            }

            .sql-editor .ace_editor .ace_scroller .ace_text-layer .ace_identifier{
                color:${this.colorIdentifier}!important
            }

            .sql-editor .ace_editor .ace_scroller .ace_text-layer .ace_operator{
                color:${this.colorOperator}!important
            }
        `;
        if(this.tipWidth>0){
          newStyle=newStyle+`
          .ace_editor.ace_autocomplete {
                width: ${this.tipWidth}px !important;
            }`
        }
      styleElement.appendChild(document.createTextNode(newStyle));
    },

    /**
     * 自定义提示
     * @param pos 光标信息
     * @param prefix 输入的值
     */
    setCompletions(editor, session, pos, prefix, callback) {
      const str = session.doc.$lines[pos.row]; //用户输入的字符串
      const isDot = str.substr(pos.column - 1, 1) === "."; //判断是否是.
      if (isDot && this.columnURL) {
        const tableName = str
          .slice(0, pos.column - 1)
          .split(" ")
          .slice(-1)[0]; //截取表名
        if (tableName) {
          if (this.tableName == tableName) {
            callback(null, this.columsArr);
            return;
          } else {
            if (this.tableNameArr.indexOf(tableName) === -1) return;
            this.tableName = tableName;
            const params = {
              tableName: this.tableName,
              ...this.columnOtherParams,
            };
            const axiosFunc = this.$axios;
            if (!axiosFunc) throw new Error("this.$axios不是一个请求方法");

            axiosFunc
              .post(this.columnURL, params)
              .then((res) => {
                if (res.code === "200") {
                  this.columsArr = res.data.datasList.map((val) => ({
                    caption: val.tableName + "." + val.columnName,
                    meta: "字段名",
                    value: val.columnName,
                    score: 3000,
                  }));
                  return callback(null, this.columsArr);
                }
              })
              .catch((err) => {
                return callback(null, this.columsArr);
              });
          }
        }
      } else {
        return callback(null, [
          ...this.tableNameArrFormate,
          ...this.functionArrFormate,
          ...this.customTipArrFormate,
        ]);
      }
    },

    /**
     * 将editor内容重置成最初的
     */
    resetEditor() {
      console.warn("即将重置");
      this.myEditor.setValue(this.value, 1);
      this.myEditor.focus();
    },

    /**
     * 重新计算尺寸
     */
    resize(){
      console.log(this.myEditor.id)
      this.myEditor.resize()
    },

    /**
     * 格式化
     * @param {string} language 默认sql
     */
    formatter () {
        const editor = this.$refs.editor.editor
        const content = editor.getValue()
        const formatContent = format(content)
        editor.setValue(formatContent)
    },
    formateEditor(language = "sql") {
      let newValue = "";
      switch (language) {
        case "json":
          newValue = formateJson(this.getEditorCode());
          break;
        case "sql":
          newValue = sqlFormatter.format(this.getEditorCode(), { language });
          break;
        case "sqlserver":
          newValue = format(this.getEditorCode())
          break;
        default:
      }
      this.myEditor.setValue(newValue, 1);
      this.myEditor.focus();
    },

    /**
     * 向editor插入值
     */
    insertEditor(str = "自定义内容") {
      console.warn("即将在光标处插入 自定义内容");
      this.myEditor.insert(str);
      this.myEditor.focus();
    },

    /**
     * 光标下移num行
     */
    golinedown(num = 1) {
      this.myEditor.commands.commands.golinedown.exec(this.myEditor, {
        times: num,
      });
    },

    /**
     * 滚动条吸底
     */
    scrollToEnd() {
      let { maxHeight } = this.myEditor.renderer.layerConfig;
      setTimeout(() => {
        this.myEditor.renderer.scrollBy(0, maxHeight);
      }, 100);
    },

    getEditorCode() {
      return this.myEditor.getValue();
    },

    // 选中字符
    findAll(string){
      this.myEditor.findAll(string);
    },
    findNext(string){
      this.myEditor.find(string);
    },
    findPrevious(string){
      this.myEditor.findPrevious(string);
    }
  },

  mounted() {
    this.codeValue = this.value;

    if(this.tongDragY||this.tongDragY)this._bus.$on('dragOver',this.resize)
    this.$once('hook:destroyed',function(){
      this._bus.$off('dragOver')
    })
  },
};
</script>

<style lang="scss">
.tong-editor {
  position: relative;
  &-title {
    display: inline-block;
    margin: 0 5px;
    font-size: 14px;
  }

  .ace-chrome .ace_print-margin {
    background-color: transparent;
  }

  &-disabled {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 1px;
    background-color: transparent;
    right: 8px;
    bottom: 7px;
  }
}

.index-hidden.tong-editor {
  .ace_gutter {
    display: none;
  }
}
.no-cursor {
  .ace_cursor-layer {
    display: none;
  }
}

.tong-drag-y{
  >div{
    height: 100%!important;
  }
}
</style>