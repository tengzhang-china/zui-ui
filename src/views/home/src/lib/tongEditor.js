module.exports = {
    title: "tongEditor",
    desc: "编辑器，支持sql，ava，javascript，json（颜色设置对所有tongEditor都会生效）",
    menuOrder:3,
    recordList: [
        {
            version:"1.2.4",
            editor:"张腾",
            time:"2021年10月19日16:05:10",
            contentList:[
                '编辑增加拖拽功能'
            ]
        },
        {
            version:"1.1.19",
            editor:"张腾",
            time:"2021年7月15日09:29:14",
            contentList:[
                "增加自定义提示customTipArr配置"
            ]
        },
        {
            version:"1.1.12",
            editor:"张腾",
            time:"2021-05-25 10:00",
            contentList:[
                "增加搜索方法findAll findNext findPrevious"
            ]
        },
        {
            version:"1.1.3-24",
            editor:"张腾",
            time:"2021-03-12 16:40",
            contentList:[
                "tongEditor禁用状态可以复制内容"
            ]
        },
        {
            version:"1.1.3-11",
            editor:"张腾",
            time: "2021-2-2 20:30",
            contentList:[
                "禁用，只读可以滚动",
            ]
        },
        {
            version:"1.1.3-6",
            editor:"张腾",
            time: "2021-1-27 10:30",
            contentList:[
                "增加json格式化方法",
            ]
        },
        {
            version:"1.1.1-22",
            editor:"张腾",
            time: "2020-11-12 15:30",
            contentList:[
                "增加接口scrollToEnd，golinedown",
                "增加属性readonly，autoToEnd",
                "调整说明文档中双向绑定的写法",
                "调整说明文档",
            ]
        },
    ],

    exampleList: [
        {
            title: "带初始值的sql编辑器",
            desc: "使用v-model='value'进行双向绑定",
            codeConfig: {
                codeEditorHeight: "250px",

                codeComponent: {
                    template: `<div>
            <el-button ref='tongEditor' size="mini" @click="formateCode">格式化</el-button>
            <el-button ref='tongEditor' size="mini" @click="find">选中select</el-button>
            <el-button ref='tongEditor' size="mini" @click="resize">resize</el-button>
        <tong-editor ref="tongEditor" :height='height' v-model='value' tongDragY />
    </div>`,
                    data() {
                        return {
                            height: "100px",
                            value: "select * from table A \n select user.name from table student",
                        }
                    },
                    methods: {
                        formateCode(){
                            this.$refs.tongEditor.formateEditor("sql")
                        },
                        find(){
                            this.$refs.tongEditor.findAll("select")
                        },
                        resize(){
                            this.$refs.tongEditor.resize()
                        }
                    },
                }
            }
        }, {
            title: "只读",
            desc: "增加属性:readonly='true'",
            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: "<tong-editor :height='height' :readonly='true' v-model='value' />",
                    data() {
                        return {
                            height: "100px",
                            value: `select * from table a \n select`,
                        }
                    },
                }
            }
        }, {
            title: "禁用",
            desc: "增加属性:disabled='true'",
            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: "<tong-editor :height='height' :disabled='true' v-model='value' />",
                    data() {
                        return {
                            height: "100px",
                            value: "select * from table a",
                        }
                    },
                }
            }
        }, {
            title: "自定义提示",
            desc: "自定义提示表名tableNameArr，自定义提示方法名functionArr，全量自定义customTipArr",
            codeConfig: {
                codeString: ``,
                codeEditorHeight: "400px",
                codeComponent: {
                    template: "<tong-editor :height='height' :tableNameArr='tableNameArr' :functionArr='functionArr' :customTipArr='customTipArr' />",
                    data() {
                        return {
                            height: "100px",
                            tableNameArr: ['table1', 'table2'],
                            customTipArr:[
                                {
                                    label:"tips",
                                    value:"这个是自定义tips",
                                    type:"自定义"
                                }
                            ],
                            functionArr: [
                                { label: "function1", value: "function 1(){}" }
                            ]
                        }
                    },
                },
            }
        }, {
            title: "动态请求表字段",
            desc: "配置tableNameArr(只有预置的表名才会发起请求)，配置请求表字段的地址columnURL，配置表字段其他请求参数columnOtherParams",
            codeConfig: {
                codeString: ``,
                codeEditorHeight: "400px",

                codeComponent: {
                    template: "<tong-editor :height='height' :tableNameArr='tableNameArr' :columnURL='columnURL' :columnOtherParams='columnOtherParams' />",
                    data() {
                        return {
                            height: "100px",
                            tableNameArr: ["CITY", "PERSON", "RRRR", "SCORE"],
                            columnURL: "/servers/aam/rmdbtable/cluview/v2/list",
                            columnOtherParams: {
                                dsId: 29,
                                schema: "PUBLIC",
                                tableType: 0
                            },
                        }
                    },
                },
            }
        },
    ],

    tableList: [
        {
            modelType: "propModel",
            listData: [
                {
                    param: "value",
                    explain: "v-model编辑器值双向绑定",
                    type: "string",
                }, {
                    param: "width",
                    explain: "编辑器宽度(需要带单位)",
                    type: "string",
                    defaultValue: "100%"
                }, {
                    param: "height",
                    explain: "编辑器高度(需要带单位)",
                    type: "string",
                    defaultValue: "100%"
                }, {
                    param: "lang",
                    explain: "编辑器的语言",
                    type: "string",
                    values: "sql，javascript，java，json",
                    defaultValue: "sql"
                }, {
                    param: "disabled",
                    explain: "是否禁用",
                    type: "boolean",
                    defaultValue: "false"
                },{
                    param: "readonly",
                    explain: "是否只读",
                    type: "boolean",
                    defaultValue: "false"
                },{
                    param: "wrap",
                    explain: "是否自动换行",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param:"autoToEnd",
                    explain: "是否在值改变的时候自动滚动到底部",
                    type: "boolean",
                    defaultValue: "false"
                },{
                    param: "indexShow",
                    explain: "是否显示索引栏",
                    type: "boolean",
                    defaultValue: "true"
                }, {
                    param: "cursorShow",
                    explain: "是否显示光标",
                    type: "boolean",
                    defaultValue: "true"
                }, {
                    param:'tongDragX',
                    explain:'开启横向放缩',
                    type:'boolean',
                    defaultValue:'false'
                },{
                    param:'tongDragY',
                    explain:'开启纵向放缩',
                    type:'boolean',
                    defaultValue:'false'
                },{
                    param: "tableNameArr",
                    explain: "表名自定义提示配置",
                    type: "array",
                    defaultValue: "[]"
                }, {
                    param: "functionArr",
                    explain: "方法自定义提示配置",
                    type: "array",
                    defaultValue: "[]"
                }, {
                    param:"customTipArr",
                    explain:"自定义类型提示，[{label,value,type,score}]",
                    type:"array",
                    defaultValue:"[]"
                },{
                    param: "columnURL",
                    explain: "自动请求表名下的表字段接口，通过.触发请求",
                    type: "string",
                    defaultValue: ""
                }, {
                    param: "columnOtherParams",
                    explain: "请求表字段携带的其他参数",
                    type: "object",
                    defaultValue: "{}"
                }, {
                    param: "colorKeyword",
                    explain: "关键字颜色",
                    type: "string",
                    defaultValue: "#930f80"
                }, {
                    param: "colorComment",
                    explain: "注释颜色",
                    type: "string",
                    defaultValue: "#236e24"
                }, {
                    param: "colorIdentifier",
                    explain: "",
                    type: "string",
                    defaultValue: "#000"
                }, {
                    param: "colorOperator",
                    explain: "",
                    type: "string",
                    defaultValue: "#687687"
                },
            ],
        }, {
            modelType: "eventModel",
            listData: [
                {
                    name: "input",
                    explain: "编辑器的input事件",
                    param: "(value)",
                }
            ]
        }, {
            modelType: "slotModel",
            listData: [
                {
                    name: "editorHeader",
                    explain: "编辑器头部内容插槽，像按钮，标题等可以使用",
                }
            ]
        }, {
            modelType: "interfaceModel",
            desc:`<tong-editor ref="tongEditor">`,
            listData: [
                {
                    name: "resetEditor",
                    explain: "重置编辑器内容",
                }, {
                    name: "getEditorCode",
                    explain: "获取编辑器内容",
                }, {
                    name: "insertEditor",
                    explain: "向光标处插入字符串string",
                    param: "(string)",
                    example:"this.$refs.tongEditor.insertEditor(string)"
                },{
                    name: "formateEditor",
                    explain: "使用lang语言格式化编辑器内容，支持sql，json",
                    param: "(lang)",
                },{
                    name: "resize",
                    explain: "重新生成编辑器宽高",
                },{
                    name:"scrollToEnd",
                    explain:"滚动吸地"
                },{
                    name:"findAll",
                    explain:"找所有",
                    param: "(string)",
                    example:"this.$refs.tongEditor.findAll('select')"
                },{
                    name:"findNext",
                    explain:"找下一个",
                    param: "(string)",
                },{
                    name:"findPrevious",
                    explain:"找上一个",
                    param: "(string)",
                }
            ]
        }
    ],
}
