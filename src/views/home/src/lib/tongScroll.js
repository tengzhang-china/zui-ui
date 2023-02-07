module.exports = {
    title: "tongScroll",
    desc: "自定义滚动条",

    recordList: [
        {
        version: "1.1.1",
        editor: "张腾",
        time: "",
        contentList: [
            "调整右固定样式",
            "右固定",
        ]
    }, {
        version: "1.1.0",
        editor: "张腾",
        time: "2020-08-11 9:30",
        contentList: [
            "更新滚动事件触发条件",
            "调整横向滚动条出现条件",
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
            title: "使用",
            desc: "直接使用<tong-scroll></tong-scroll>将需要添加滚动的元素包裹即可",

            codeConfig: {
                codeEditorHeight: "570px",
                codeComponent: {
                    template: `<div style="height:200px">
        <tong-table :tableModel='tableModel' :indexShow="false" :tableData='tableData' />
    </div>`,
                    data() {
                        return {
                            tableModel: [{
                                prop: "prop0",
                                label: "label1",
                                width: "100px",
                                fixed: "left"
                            },
                            {
                                prop: "prop1",
                                label: "label1",
                                width: "100px",
                                fixed: "right"
                            }, {
                                prop: "prop2",
                                type: "input",
                                width: "900px",
                                label: "label2",
                            }, {
                                prop: "prop3",
                                label: "label3",
                            },
                            ],
                            tableData: [
                                {
                                    prop1: "prop1-内容，文本超出自动展示tips",
                                    prop2: "prop2-内容",
                                    prop3: "prop3-内容"
                                }, {
                                    prop1: "prop1-第二行内容",
                                    prop2: "prop2-第二行内容",
                                    prop3: "prop3-第二行内容"
                                }
                            ],
                        }
                    },
                },
            },
        },{
            title: "使用",
            desc: "直接使用<tong-scroll></tong-scroll>将需要添加滚动的元素包裹即可",

            codeConfig: {
                codeEditorHeight: "570px",
                codeComponent: {
                    template: `<div style='height:100px'>
        <tong-scroll style="height:100%">
           <p v-for="i in 10" :key="i">{{i}}</p>
        </tong-scroll>
    </div>`,
                    data() {
                        return {}
                    },
                },
            },
        }
    ],
}