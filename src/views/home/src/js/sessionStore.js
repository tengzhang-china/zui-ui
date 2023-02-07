module.exports = {
    title: "sessionStore.js",
    desc: "浏览器会话存储",
    type:"js",

    recordList: [
        {
            version: "1.1.21",      
            editor: "张腾",          
            time: "2021年8月3日09:38:20",
            contentList: [           
                "补充cookie",
            ],
        },
        {
            version: "1.1.2-7",      
            editor: "张腾",          
            time: "2020-12-1 11:20",
            contentList: [           
                "增加类",
            ],
        }
    ],

    tableList:[
        {
            modelType: "methodModel",
            expand: true,
            desc: "",

            listData:[
                {
                    name: "clearSession",
                    explain: "清空存储，fn清空之后的回调",
                    param: "(fn)",
                    example: [
                        "//在需要使用的vue文件中引入方法",
                        "import { clearSession } from 'tong-zui-ui/js/sessionStore.js';",
                        "//使用",
                        "clearSession();"
                    ]
                },{
                    name: "setSession",
                    explain: "设置存储",
                    param: "(key,value)",
                    example: [
                        "//在需要使用的vue文件中引入方法",
                        "import { setSession } from 'tong-zui-ui/js/sessionStore.js';",
                        "//使用",
                        "setSession('name','张三');",
                    ]
                },{
                    name: "getSession",
                    explain: "获取存储",
                    param: "(key)",
                    example: [
                        "//在需要使用的vue文件中引入方法",
                        "import { getSession } from 'tong-zui-ui/js/sessionStore.js';",
                        "//使用",
                        "getSession('name');",
                    ]
                },
                {
                    name: "setCookie",
                    explain: "获取cookie",
                    param: "(cookie,expries,path)",
                    example: []
                },
                {
                    name: "delCookie",
                    explain: "删除cookie",
                    param: "(name)",
                    example: []
                },
                {
                    name: "getCookie",
                    explain: "获取cookie",
                    param: "(name)",
                    example: []
                },
            ]
        }
    ]
    
}