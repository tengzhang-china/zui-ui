module.exports={
    title:"公共方法模块维护",
    desc:"dom.js是跟dom操作相关公共方法库，rules.js是跟校验相关的公共方法库，usual.js是其他常用的方法库。",

    exampleList:[
        {
            title:"新增/修改方法",
            desc:"新增/修改的公共方法",

            listData:[
                {
                    desc:"把新方法添加/src/components/TongComponents/js/下对应的js(dom.js，rules.js，usual.js)中，并导出，格式如下图示：",
                    imgs:[require("./images/js01.png")],
                },{
                    desc:"到/views/home/src/js/下对应的js补充对应使用说明文档，修改tableList[0].listData中的内容，相关字段说明如下图所示，详细请参考对应的js",
                    imgs:[require("./images/js02_1.png"),require("./images/js02_2.png")],
                },{
                    desc:"补充修改记录，在js说明文档的recordList下补充，格式如下图所示：",
                    imgs:[require("./images/js03.png")],
                },{
                    desc:"修改内容补充到下个版本说明 /views/home/src/versions/"
                }
            ]
        }
    ]
}