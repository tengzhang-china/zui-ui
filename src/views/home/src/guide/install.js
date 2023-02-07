module.exports = {
    menuText: "指南",
    menuOrder: 100,

    title: "指南",
    desc: "介绍安装，更新",

    exampleList: [
        {
            title:"版本说明",
            desc:"稳定版：1.2.10；测试版：1.2.11",
            codeConfig:{}
        },
        {
            title: "安装",
            desc: "使用私网安装，仅适用于vue框架",

            codeConfig: {
                codeString: [
                    "//修改镜像",
                    "npm config set registry http://nexus.toops.club/repository/npm-zui/",
                    "",
                    "//安装",
                    "npm install tong-zui-ui -S",
                    "",
                    "//安装指定版本",
                    "npm install tong-zui-ui@版本号"
                ],
                codeEditorHeight: "130px"
            },
        }, {
            title: "使用",
            desc: "在main.js中全局引入",
            codeConfig: {
                codeString: [
                    "// 引入element",
                    "import Element from 'element-ui'",
                    "import 'element-ui/lib/theme-chalk/index.css'",
                    "Vue.use(Element)",
                    "",
                    "// 引入组件库样式表",
                    "import 'tong-zui-ui/theme/index.css';",
                    "",
                    "// 引入图标库，已经在index.js中引入",
                    "import 'tong-zui-ui/iconfont/iconfont.css'",
                    "",
                    "// 全量引入基础功能组件，为了避免引入没有用到的组件，建议按需引入，到基础组件模块下查看",
                    "import TongComps from 'tong-zui-ui/index.js'",
                    "Vue.use(TongComps)",
                    "",
                    "// 全量引入业务组件，为了避免引入没有用到的组件，建议按需引入，到业务组件模块下查看",
                    "import TongModuleComps from  'tong-zui-ui/modules/index.js'",
                    "Vue.use(TongModuleComps)",
                    "",
                    "// 为了避免方法互相覆盖，公共方法不提供全量引入，按需引入，到公共方法模块查看"
                ] ,
                codeEditorHeight: "300px"
            },
        }
    ]
}