module.exports = {
    title: "tongTips",          //大标题
    desc: "这个tips是使用方法监听，引入方式与其他组件不一致", //大标题说明

    recordList: [
        {
            version:"1.1.8",
            editor:"张腾",
            time:"2021-4-12 14:00",
            contentList:[
                "调整tip的宽度与内容对齐"
            ]
        },
        {
            version: "1.1.1-20",
            editor: "张腾",
            time: "2020-11-09 16:00",
            contentList:[
                "引入自动开启监听",
            ]
        },
        {
            version: "1.0.32-9",
            editor: "张腾",
            time: "2020-08-25 15:34",
            contentList: [
                "增加说明文档",
            ]
        }
    ],

    exampleList: [
        {
            type: "guide",
            title: "使用",
            desc: "在main.js中引入并使用",
            codeConfig: {
                codeString: [
                    "//main.js",
                    "//引入的时候自动注册tongTips实例到Vue的原型上",
                    "import {tongTips} from 'tong-zui-ui'",
                    "",
                    "//开启监听",
                    "tongTips.startListening()",
                    "",
                    "//在其他.vue中配置类名，已经内置了tong-tips类名，当超出是就会展示tips",
                    "this.tongTips.addClassList(['your-class'])",
                ],
                codeEditorHeight: "150px",
            },
        }, {
            title: "强展示的tips",
            desc: "配置tong-tips类名，配置data-tips-show",
            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: "<div style='width:400px;' class='tong-tips' :data-tips-show='true'>这个是展示文本</div>",
                    data() {
                        return {}
                    }
                }
            }
        }, {
            title: "超出展示",
            desc: "正常超出显示",
            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: "<div style='width:400px;' class='tong-tips'>这个是超出超出超出超出超出超出超出超出超出超出超出超出超出超出超出超出超出超出超出超出超出超出超出超出</div>",
                    data() {
                        return {}
                    }
                }
            }
        }, {
            title: "多行tips",
            desc: "配置html片段",
            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: "<div style='width:100px;' :data-tips-show='true' data-tips='<div><p style=\"color:red\">1</p><p>2</p></div>' class='tong-tips'>多行tips</div>",
                    data() {
                        return {}
                    }
                }
            }
        }
    ],


    tableList: [
        {
            modelType: "propModel", //表格模板类型
            desc: "<div class='tong-tips' data-tips-show='true'></div>",
            listData: [
                {
                    param: "data-tips",
                    explain: "展示tips的内容，支持html片段，如果没有设置，就是当前dom下的innerText",
                    type: "",
                    defaultValue: "-",
                }, {
                    param: "data-tips-show",
                    explain: "是否强展示tips，默认超出才会展示tips",
                    type: "boolean",
                    defaultValue: "false",
                }, {
                    param: "data-x",
                    explain: "左右偏移量，正右负左",
                    type: "number",
                    defaultValue: "0",
                }, {
                    param: "data-y",
                    explain: "上下偏移量，正上负下",
                    type: "number",
                    defaultValue: "5",
                }, {
                    param: "data-max-width",
                    explain: "tips最大宽度，要携带单位",
                    type: "string",
                    defaultValue: "200px",
                }
            ]
        }
    ],
}