module.exports = {
    title: "业务组件模块维护",
    desc: "添加，优化业务组件的步骤",

    exampleList: [
        {
            title: "添加，优化业务组件",

            listData: [
                {
                    desc: "在/src/components/TongComponents/modules下面新建新的模块组件文件夹，文件夹结构参考/tongBreadDialog (编辑跳过这一步)",
                    imgs: []
                }, {
                    desc: "在/src/components/TongComponents/modules/index.js 中引入并导出 (编辑跳过这一步)",
                    imgs: [require("./images/module01.png")]
                },{
                    desc:"在/views/home/src/module/补充对应组件的使用说明文档，文件名即组件名",
                },{
                    desc:"说明文档结构参考/views/home/src/module/tongSystemList.js",
                    imgs:[]
                },{
                    desc:"/views/home/src/module/tongSystemList.js结构介绍",
                    imgs:[require("./images/lib05_1.png"),require("./images/lib05_2.png"),require("./images/lib05_3.png")]
                },{
                    desc:"修改内容补充到下个版本说明 /views/home/src/versions/"
                }
            ]
        }
    ]
}