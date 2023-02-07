module.exports = {
    title: "tongMessage",
    desc: "消息弱提醒，全局提醒，dom内部提醒",
    recordList: [{
        version: "1.1.0",
        editor: "张腾",
        time: "2020-08-26 9:15",
        contentList: [
            "调整dom内部message样式",
        ]
    },
    {
        version: "1.0.32-10",
        editor: "张腾",
        time: "2020-08-18 17:15",
        contentList: [
            "补充desc参数",
        ]
    },
    {
        version: "1.0.31",
        editor: "张腾",
        time: "2020-07-27 10:15",
        contentList: [
            "调整说明文档",
        ]
    }
    ],

    exampleList: [
        {
            type: "guide",
            title: '引入',
            desc: "message的使用与其他组件不一样，需要在main.js中引入",
            codeConfig: {
                codeEditorHeight: "100px",
                codeString: [
                    `import { tongMessage } from "tong-zui-ui/index.js;`,
                    `Vue.use(tongMessage)`,
                    "",
                    "//使用",
                    "//在需要使用的组件内部，this.tongMessage(config)，config参考下表"
                ],
            }
        }, {
            title: "全局提示消息",
            desc: "单行文本，多行文本（html片段或者desc参数）",

            codeConfig: {
                codeEditorHeight: "750px",
                codeComponent: {
                    template: `<div>
        <el-button 
            v-for="(item,index) in buttonList" 
            :key="index" :type="item.buttonType" 
            @click="doClick(item.messageConfig)">
                {{item.messageConfig.message}}
        </el-button>
    </div>`,
                    data() {
                        return {
                            visible: false,
                            buttonList: [
                                {
                                    buttonType: "success",
                                    messageConfig: {
                                        type: "success",
                                        message: "成功",
                                        desc: "这个是第二行内容"
                                    }
                                }, {
                                    buttonType: "warning",
                                    messageConfig: {
                                        type: "warning",
                                        message: "<span>警</span><p>告</p>"
                                    },

                                }, {
                                    buttonType: "danger",
                                    messageConfig: {
                                        type: "error",
                                        message: "危险"
                                    },

                                }
                            ]
                        }
                    },
                    methods: {
                        doClick(config) {
                            this.tongMessage(config)
                        }
                    },
                }
            }
        }, {
            title: 'dom内部提示消息',
            desc: "只支持当行文本",
            codeConfig: {
                codeEditorHeight: "450px",
                codeComponent: {
                    template: `<div ref="domBox" :style='{width:"300px",height:"240px"}'>
        <el-button @click=doClick>在dom底部显示消息提示</el-button>
    </div>`,
                    data() {
                        return {

                        }
                    },
                    methods: {
                        doClick() {
                            let config = {
                                message: 'dom消息 bottom',
                                position: "bottom",
                                el: this.$refs.domBox, //目标dom
                            }
                            this.tongMessage(config)
                        }
                    },
                }
            }
        }
    ],

    tableList: [
        {
            modelType: "propModel",
            listData: [
                {
                    param: "type",
                    explain: "提示消息的类型",
                    type: "string",
                    values: "success，error，warning，info",
                    defaultValue: "success",
                }, {
                    param: "message",
                    explain: "提示内容，支持html片段",
                    type: "string",
                    defaultValue: "默认message内容",
                }, {
                    param: "desc",
                    explain: "第二行文本内容",
                    type: "string",
                    defaultValue: "",
                }, {
                    param: "duration",
                    explain: "提示消息关闭的延时",
                    type: "string",
                    defaultValue: "3000",
                }, {
                    param: "showClose",
                    explain: "是否显示关闭按钮",
                    type: "boolean",
                    defaultValue: "true",
                }, {
                    param: " ",
                    explain: "dom内部提示消息",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "el",
                    explain: "消息出现的dom（组件标签需要$el）",
                }, {
                    param: "left",
                    explain: "dom内部消息的left值",
                    type: "string",
                    defaultValue: "0",
                }, {
                    param: "right",
                    explain: "dom内部消息的right值",
                    type: "string",
                    defaultValue: "0",
                }, {
                    param: "position",
                    explain: "消息出现的位置",
                    type: "string",
                    values: "bottom，top",
                    defaultValue: "bottom",
                }
            ]
        }
    ]

}
