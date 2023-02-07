module.exports = {
    title: "tongDialog",
    desc: "弹框骨架，内容区域使用插槽，按钮可配置，拖拽，放缩等",
    menuOrder:4,
    recordList: [
        {
            version:"1.1.25",
            editor:"张腾",
            time:"2021年8月25日11:34:35",
            contentList:[
                "增加动画结束的回调closed"
            ]
        },
        {
            version:"1.1.3-25",
            editor:"张腾",
            time:"2021-3-15",
            contentList:[
                "tong-dialog增加footer显隐控制footerShow"
            ]
        },
        {
            version: "1.0.32-13",
            editor: "张腾",
            time: "2020-08-25 17:00",
            contentList: [
                "调整弹框按钮不可拖拽",
                "增加footer部分可以拖拽",
                "调整放缩部分大小，位置",
                "去掉tong-scroll",
                "dialog内容区宽高联动",
            ]
        }, {
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
            title: "默认弹框",
            desc: "使用 visible.sync 实现双向绑定",

            codeConfig: {
                codeEditorHeight: "300px",
                codeComponent: {
                    template: `<div>
        <tong-dialog :visible.sync='visible'>这里是插槽内容</tong-dialog>
        <el-button @click='visible = true'>展示弹框</el-button>
    </div>`,
                    data() {
                        return {
                            visible: false,
                        }
                    },
                }
            }
        }, {
            title: '通过默认插槽设置内容区域',
            desc: "通过默认插槽设置内容区域",
            codeConfig: {
                codeEditorHeight: "400px",
                codeComponent: {
                    template: `<div>
        <tong-dialog :visible.sync='visible' :width='width'>
            <tong-dialog :visible.sync='visible1' :width='width1'></tong-dialog>
            <el-button @click='visible1 = true'>再来一个框</el-button>
        </tong-dialog>
        <el-button @click='visible = true'>展示弹框</el-button>
    </div>`,
                    data() {
                        return {
                            visible: false,
                            width: "500px",
                            visible1: false,
                            width1: "600px"
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
                    param: "visible",
                    explain: "使用visible.sync进行双向绑定",
                    type: "boolean",
                }, {
                    param: "title",
                    explain: "标题",
                    type: "string",
                    defaultValue: "这个是自定义标题"
                }, {
                    param: "closeIcon",
                    explain: "关闭字体图标",
                    type: "string",
                    defaultValue: "el-icon-circle-close"
                }, {
                    param: "top",
                    explain: "距上的距离，值为auto表示垂直方向居中",
                    type: "string",
                    defaultValue: "15vh",
                }, {
                    param: "left",
                    explain: "距左的距离，不填写的化就左右居中",
                    type: "string",
                }, {
                    param:"width",
                    explain:"弹框宽",
                    type:"string",
                    defaultValue:"30%"
                },{
                    param:"height",
                    explain:"弹框高",
                    type:"string",
                    defaultValue:"200px"
                },{
                    param: "footerShow",
                    explain: "是否显示dialog的footer部分",
                    type: "boolean",
                    defaultValue: "true",
                },{
                    param: "sureBtnTitle",
                    explain: "确定按钮的文本",
                    type: "string",
                    defaultValue: "确定",
                }, {
                    param: "sureBtnShow",
                    explain: "确定按钮是否可见",
                    type: "boolean",
                    defaultValue: "true",
                }, {
                    param: "sureBtnLoading",
                    explain: "确认按钮加载中",
                    type: "boolean",
                    defaultValue: "false",
                }, {
                    param: "sureBtnDisabled",
                    explain: "确认按钮禁用",
                    type: "boolean",
                    defaultValue: "false",
                }, {
                    param: "cancelBtnTitle",
                    explain: "取消按钮的文本",
                    type: "string",
                    defaultValue: "确定",
                }, {
                    param: "cancelBtnShow",
                    explain: "取消按钮是否可见",
                    type: "boolean",
                    defaultValue: "true",
                }, {
                    param: "cancelBtnLoading",
                    explain: "取消按钮加载中",
                    type: "boolean",
                    defaultValue: "false",
                }, {
                    param: "cancelBtnDisabled",
                    explain: "取消按钮禁用",
                    type: "boolean",
                    defaultValue: "false",
                }, {
                    param: "throttleTime",
                    explain: "节流控制时长",
                    type: "string",
                    defaultValue: "300",
                }, {
                    param: "autoClose",
                    explain: "是否自动关闭",
                    type: "boolean",
                    defaultValue: "true",
                }, {
                    param: "resizeDisabled",
                    explain: "是否禁用放缩",
                    type: "boolean",
                    defaultValue: "false",
                },
            ]
        }, {
            modelType: "eventModel",
            desc: "样例:<tong-dialog @dosure='dosure' />",
            listData: [
                {
                    name: "dosure",
                    explain: "点击确认按钮的回调"
                }, {
                    name: "docancel",
                    explain: "点击取消按钮的回调"
                }, {
                    name: "iconClosed",
                    explain: "点击x图标的回调"
                },{
                    name:"closed",
                    explain:"关闭动画结束之后的回调"
                }
            ]
        }, {
            modelType: "slotModel",
            listData: [
                {
                    name: "默认插槽",
                    explain: "内容展示区域",
                }, {
                    name: "header",
                    explain: "头部插槽",
                }, {
                    name: "footer",
                    explain: "底部插槽，按钮区域",
                },
            ]
        }
    ]
}
