module.exports = {
    title: "拓扑图",
    menuOrder:1,

    recordList: [{}],

    exampleList: [
        {
            title: '简单拓扑图',
            desc: "直接在vue生命钩子mounted中初始化",
            codeConfig: {
                codeEditorHeight: "400px",
                codeComponent: {
                    template: `<div>1</div>`,
                    data() {
                        return {}
                    },
                    created() {
                        console.log('d')
                    },
                }
            }
        }
    ],
}