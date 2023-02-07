module.exports={
    title:"基础组件模块维护",
    desc:"添加，优化基础组件步骤",

    exampleList:[
        {
            title:"添加 | 编辑辑基础组件",
            desc:"",

            listData:[
                {
                    desc:"在/src/components/TongComponents/lib下面新建新的组件文件夹，结构参考/tongSelect; (编辑跳过这一步)",
                    imgs:[]
                },{
                    desc:"在/src/components/TongComponents/index.js 中引入并导出 (编辑跳过这一步)",
                    imgs:[require("./images/lib02_1.png"),require("./images/lib02_2.png"),require("./images/lib02_3.png")]
                },{
                    desc:"在/views/home/src/lib/补充对应组件的使用说明文档，文件名即组件名，如下图所示；",
                    imgs:[require("./images/lib03_1.png")]
                },{
                    desc:"说明文档结构参考/views/home/src/lib/tongIcon.js",
                    imgs:[]
                },{
                    desc:"/views/home/src/lib/tongIcon.js结构介绍",
                    imgs:[require("./images/lib05_1.png"),require("./images/lib05_2.png"),require("./images/lib05_3.png")]
                },{
                    desc:"修改内容补充到下个版本说明 /views/home/src/versions/"
                }
            ]
        }
    ]
}