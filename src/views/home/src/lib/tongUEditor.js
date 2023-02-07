module.exports = {
    title: "tongUEditor",
    desc: "富文本编辑组件",
    recordList: [
        {
            version: "1.0.0",
            editor: "黎其铮",
            time: "2021-01-25 10:15",
            contentList: [
                "新增组件",
            ]
        }
    ],

    exampleList: [
        {
            title: "默认富文本编辑",
            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: `<tong-UEditor
                    :ref="uEditorId" 
                    @dataChange="dataChange" 
                    @getJson="getJson" 
                    :uEditorId="uEditorId"
                    :rebackValue="rebackValue" />`,
                    data() {
                        return {
                            uEditorId:"aa",
                            rebackValue:"我是回显内容"
                        }
                    },
                    methods: {
                        dataChange(data){
                            this.rebackValue = data
                        },
                        getJson(data){
                            console.log(data)
                        }
                    }
                }
            }
        },
        {
            title: "禁用富文本编辑",
            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: `<tong-UEditor 
                    :uEditorId="uEditorId"
                    :rebackValue="rebackValue" 
                    :disabled = 'disabled'/>`,
                    data() {
                        return {
                            uEditorId:"bb",
                            disabled: true,
                            rebackValue:"我是详情不让编辑"
                        }
                    },
                }
            }
        }
    ],

    tableList:[
        {
            modelType:"propModel",
            listData:[
                {
                    param:"uMenus",
                    explain:"定义显示哪些菜单和菜单的顺序。（不能与delMenus同时使用）",
                    type: "array",
                    values: "'head','bold','fontSize','fontName','italic','underline','strikeThrough','indent','lineHeight','foreColor','backColor','link','list','todo','justify','quote','emoticon','image','video','table','code','splitLine','undo','redo'",
                    defaultValue: "[]"
                },
                {
                    param:"delMenus",
                    explain:"定义去除哪些菜单。（不能与uMenus同时使用）",
                    type: "array",
                    values:"同uMenus",
                    defaultValue: "[]"
                },
                {
                    param:"showLinkImg",
                    explain:"隐藏插入网络图片的功能，即只保留上传本地图片",
                    type: "boolean",
                    values:"",
                    defaultValue: "false"
                },
                {
                    param:"uploadImgServer",
                    explain:"图片上传地址",
                    type: "string",
                    values:"",
                    defaultValue: ""
                },
                {
                    param:"accept",
                    explain:"图片上传格式",
                    type: "array",
                    values:"'jpg', 'jpeg', 'png', 'gif', 'bmp'",
                    defaultValue: "['jpg', 'jpeg', 'png', 'gif', 'bmp']"
                },
                {
                    param:"disable",
                    explain:"禁用富文本",
                    type: "boolean",
                    values:"",
                    defaultValue: "false"
                },
                {
                    param:"uploadImgShowBase64",
                    explain:"可使用 base64 格式保存图片。即，可选择本地图片，编辑器用 base64 格式显示图片。",
                    type: "array",
                    values:"'jpg', 'jpeg', 'png', 'gif', 'bmp'",
                    defaultValue: "['jpg', 'jpeg', 'png', 'gif', 'bmp']"
                },
                {
                    param:"uploadImgMaxSize",
                    explain:"默认限制图片大小是 5M ，可以自己修改。",
                    type: "number",
                    values:"",
                    defaultValue: "5"
                },
                {
                    param:"rebackValue",
                    explain:"回显内容",
                    type: "string",
                    values:"",
                    defaultValue: ""
                },

            ]
        }, {
            modelType: "eventModel",
            desc: "样例:<tong-dialog @doDisable='doDisable' />",
            listData: [
                {
                    name: "doDisable",
                    explain: "禁用富文本事件"
                }, {
                    name: "doEnable",
                    explain: "取消禁用富文本事件"
                }, {
                    name: "getJson",
                    explain: "获取富文本数据事件"
                }
            ]
        }
    ]
}