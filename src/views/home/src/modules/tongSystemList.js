module.exports = {
    menuText: "系统列表",
    menuOrder: 2,
    title: "tongSystemList",
    desc: "内置调用系统列表的接口",
    recordList: [
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
            title: "普通使用",
            desc: "下拉框形式展示系统列表",

            codeConfig: {
                codeEditorHeight: "170px",
                codeComponent: {
                    template: "<tong-system-list />",
                },
            },
        }, {
            title: "有初始值",
            desc: "使用:value.sync='value'，如果value不存在，就展示value的值",

            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: "<tong-system-list :value.sync='value' />",
                    data() {
                        return {
                            value: 941
                        }
                    },
                },
            },
        }
    ],

    tableList: [
        {
            modelType: "propModel",
            listData: [
                {
                    param: "value.sync",
                    explain: "双向绑定",
                    type: "string",
                }, {
                    param: "ip",
                    explain: "请求ip",
                    type: "string",
                }, {
                    param: "labelKey",
                    explain: "展示文本使用的字段名",
                    type: "string",
                    defaultValue: "name"
                }, {
                    param: "valueKey",
                    explain: "值的字段名",
                    type: "string",
                    defaultValue: "appSysId"
                }
            ]
        }
    ]
}