module.exports = {
    title: "transformUnit.js",
    desc: "单位换算的类",
    type:"js",

    recordList: [
        {
            version: "1.1.2-17",      
            editor: "张腾",          
            time: "2020-12-18 15:00",
            contentList: [           
                "单位转换去掉空格",
            ],
        },
        {
            version: "1.1.2-2",      
            editor: "张腾",          
            time: "2020-11-20 18:20",
            contentList: [           
                "增加单位换算类",
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
                    name: "kbToSize",
                    explain: "kb转大单位",
                    param: "(kbytes,unitShow)",
                    example: [
                        "//在需要注册子模块的vue文件中引入方法",
                        "import { transformUnit } from 'tong-zui-ui/js/transformUnit.js';",
                        "//使用",
                        "transformUnit.kbToSize('122200000');  // 117 GB",
                        "transformUnit.kbToSize('122200000',false);  // 117 ",
                    ]
                },{
                    name: "sizeToKb",
                    explain: "大单位转KB",
                    param: "(value,unitShow)",
                    example: [
                        "//在需要注册子模块的vue文件中引入方法",
                        "import { transformUnit } from 'tong-zui-ui/js/transformUnit.js';",
                        "//使用",
                        "transformUnit.sizeToKb('12220GB');  // 12813598720",
                        "transformUnit.sizeToKb('122200000',true);  // 12813598720 KB ",
                    ]
                },{
                    name: "numToSize",
                    explain: "数值转中文计数",
                    param: "(num)",
                    example: [
                        "//在需要注册子模块的vue文件中引入方法",
                        "import { transformUnit } from 'tong-zui-ui/js/transformUnit.js';",
                        "//使用",
                        "transformUnit.numToSize('122200000');  // 1.22亿",
                    ]
                },
            ]
        }
    ]
    
}