module.exports = {
    title: "formate.js",
    desc: "格式化的方法库，时间日期格式化仍在usual，后面调整完成直接删除",
    menuOrder:3,
    recordList:[
        {
            version:"1.1.9",
            editor:"张腾",
            time:"2021-4-20 16:00",
            contentList:[
                "增加格式化xml的formateXml"
            ]
        },
        {
            version:'1.1.2-6',
            editor: "张腾",
            time: "2020-11-26 14:00",
            contentList:[
                "新建格式化库"
            ]
        },
    ],

    tableList:[
        {
            modelType: "methodModel",
            expand: true,
            desc: "",
            listData:[
                {
                    name: "formateJson",
                    explain: "格式化展示json字符串",
                    param: "(string)", 
                    returns:"格式化后的json字符串",
                    example:[
                        "//在需要注册子模块的vue文件中引入方法",
                        "import { formateJson } from 'tong-zui-ui/js/formate';",
                        "//使用",
                        'formateJson({"name":"zhangsan"});',
                    ]
                },{
                    name: "formateDate",
                    explain: "日期格式化,formate是yyyy-MM-dd HH-mm-ss w的组合;MM这种双字母表示补0",
                    param: "(time,formate)",
                    returns: "格式化之后的时间",
                    example: [
                        "//引入方法",
                        "import { formatDate } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "formateDate(new Date(),'yyyy-MM-dd'); //2020-07-28",
                        "formateDate(new Date(),'yyyy-M-dd'); //2020-7-28",
                        "formateDate(new Date(),'yyyy-M-d'); //2020-7-28",
                        "formateDate(new Date(),'yyyy-M-dd HH:mm:ss 星期w'); //2020-7-28 14-43-37 星期二",
                    ],
                    exampleHeight: "130px"
                },{
                    name:"formateXml",
                    explain:"格式化xml文本",
                    param:"(xmlStr)",
                    returns:"格式化之后的xml字符串",
                    example:[
                        "//在需要注册子模块的vue文件中引入方法",
                        "import { formateXml } from 'tong-zui-ui/js/formate';",
                        "//使用",
                        'formateXml(xmlStr);',
                    ]
                }
            ]
        }
    ]

}