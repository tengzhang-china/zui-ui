module.exports = {
    title: "tongSelectMode",
    desc: "多选组件，可支持内容搜索",
    recordList: [
        {
            version: "1.0.31",
            editor: "程丽",
            time: "2020-07-27 10:15",
            contentList: [
                "调整说明文档",
            ]
        }
    ],

    exampleList: [
        {
            title: "单一配置",
            desc: "使用 options、selectedOptions绑定多选列表、选中项",

            codeConfig: {
                codeEditorHeight: "550px",
                codeComponent: {
                    template: `<tong-select-mode
                        :options='options' 
                        :selectedOptions.sync='selectedOptions'
                        placeholder='请输入查找的表' 
                        width='600px' 
                        height='100px'
                    />`,
                    data() {
                        return {
                            options: ["label1", "label2", "label3", "label4", "label5", "label6", "label7", "label8", "label9", "label10", "label11", "label12"],
                            selectedOptions: ["label2", "label4", "label6", "label8", "label12"]
                        }
                    },
                }
            }
        },
        {
            title: "下拉项item为Object",
            desc: "使用 options、selectedOptions绑定多选列表、选中项",

            codeConfig: {
                codeEditorHeight: "550px",
                codeComponent: {
                    template: `<tong-select-mode
                        :label='prop'
                        :options='options' 
                        :selectedOptions.sync='selectedOptions' 
                        placeholder='请输入查找的表' 
                        width='600px' 
                        height='100px'
                    />`,
                    data() {
                        return {
                            prop: "name",
                            options: [{
                                    name: "label1",
                                    value: "value1",
                                },
                                {
                                    name: "label2",
                                    value: "value2"
                                },
                                {
                                    name: "label3",
                                    value: "value3",
                                }
                            ],
                            selectedOptions: [{
                                name: "label1",
                                value: "value1"
                            }]
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
                    param: "label",
                    explain: "要显示的label的prop值",
                    type: "string",
                    defaultValue: "label"
                },
                {
                    param: "options",
                    explain: "必填，可供多选的下拉列表",
                    type: "array",
                    defaultValue: "[]"
                }, {
                    param: "selectedOptions.sync",
                    explain: "选中下拉项双向绑定",
                    type: "array",
                    defaultValue: "[]"
                }, {
                    param: "placeholder",
                    explain: "显示搜索输入框默认placeholder",
                    type: "string",
                    defaultValue: "请输入查找内容"
                }, {
                    param: "width",
                    explain: "多选内容框宽度",
                    type: "string",
                    defaultValue: "580px"
                }, {
                    param: "height",
                    explain: "多选内容框高度",
                    type: "string",
                    defaultValue: "150px"
                }
            ],
        }
    ]
}