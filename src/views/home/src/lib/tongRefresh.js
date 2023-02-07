module.exports = {
    title: "tongRefresh",
    desc: "刷新拦截，主要上传或者下载时，用户误点刷新",
    recordList: [
        {
            version: "1.1.3",
            editor: "张腾",
            time: "2020-12-31 10:00",
            contentList: [
                "新增组件",
            ]
        }
    ],
    exampleList: [
        {
            type: "guide",
            title: '使用',
            desc: "在需要监听的地方引入",
            codeConfig: {
                codeEditorHeight: "120px",
                codeString: [
                    "//引入",
                    `import { tongRefresh } from "tong-zui-ui/index.js;`,
                    "",
                    "//使用",
                    "tongRefresh.start(fn); //fn的值为true就会拦截刷新；fn可以是function，函数返回值为true就拦截",
                    "",
                    "//注销拦截",
                    "tongRefresh.destroy(); //建议在vue销毁的协同使用"
                ],
            }
        },
    ],
}