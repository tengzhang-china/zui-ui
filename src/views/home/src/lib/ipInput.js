module.exports = {
    title: "ipInput",
    desc: "ip输入框",

    recordList: [{
        version: "1.0.32-10",
        editor: "张腾",     
        time: "2020-08-17 11:00",   
        contentList: [      
            "在input的时候增加ip校验，对不满足的清空，并弱提醒提示",
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
            title: "初始化", //示例标题
            desc: "无参初始化", //示例标题示例

            codeConfig: {
                codeString: ``,
                codeEditorHeight: "250px",
                template: "<ipInput/>",

                codeComponent: {
                    data() {
                        return {

                        }
                    },
                    render(h) {
                        return (<ipInput />)
                    },
                },
            },
        },
        {
            title: "带参初始化",
            desc: "带参数的初始化",
            codeConfig: {
                codeString: ``,
                codeEditorHeight: "250px",
                template: "<ipInput :value='value'/>",

                codeComponent: {
                    data() {
                        return {
                            value: "192.168.1.1",
                        }
                    },
                    render(h) {
                        return (<ipInput value={this.value} />)
                    },
                },

            }
        }
    ],


    tableList: [
        {
            modelType: "propModel", //表格模板类型
            listData: [
                {
                    param: "value",
                    explain: "ip字符串",
                    type: "string",
                    defaultValue: "-",
                }
            ]
        }
    ],
}