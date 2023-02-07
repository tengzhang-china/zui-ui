module.exports = {
    title: "usual.js",
    desc: "常用的方法库，引入你所需要的方法",
    menuOrder: 3,
    recordList: [
        {
            version: "1.1.26",
            editor: "张腾",
            time: "2021年8月31日15:25:57",
            contentList: [
                "增加downloadUrl"
            ]
        },
        {
            version: "1.1.25",
            editor: "张腾",
            time: "2021年8月24日15:36:23",
            contentList: [
                "调整doDeepCopy，判断hasOwnProperty是否存在"
            ]
        },
        {
            version: "1.1.23",
            editor: "张腾",
            time: "2021年8月11日14:54:44",
            contentList: [
                "增加文件流下载downloadBlob"
            ]
        },
        {
            version: "1.1.8",
            editor: "张腾",
            time: "2021-4-14 14:00",
            contentList: [
                "增加jsonToXml转换方法"
            ]
        },
        {
            version: "1.1.3-6",
            editor: "张腾",
            time: "2021-1-27 14:00",
            contentList: [
                "增加commonAxios-axios同步序列化"
            ]
        },
        {
            version: '1.1.2-6',
            editor: "张腾",
            time: "2020-11-26 14:00",
            contentList: [
                "增加deepMergeObject"
            ]
        },
        {
            version: '1.1.1-25',
            editor: "张腾",
            time: "2020-09-1 18:00",
            contentList: [
                "增加getParents",
                "增加getChild",
            ],
        },
        {
            version: "1.1.0",
            editor: "张腾",
            time: "2020-09-1 18:00",
            contentList: [
                "xmlToJson 增加xml转json",
            ],
        },
        {
            version: "1.0.32-10",
            editor: "张腾",
            time: "2020-08-21 15:00",
            contentList: [
                "transferTreeData 将扁平数组转换为树形数组",
            ],
        },
        {
            version: "1.0.32",
            editor: "张腾",
            time: "2020-07-28 15:15",
            contentList: [
                "flatArray方法原数组进行深层复制",
            ],
        },
        {
            version: "1.0.31",
            editor: "张腾",
            time: "2020-07-27 10:15",
            contentList: [
                "调整说明文档",
            ],
        }
    ],

    tableList: [
        {
            modelType: "methodModel",
            expand: true,
            desc: "",
            listData: [
                {
                    name: "registerModule",
                    explain: "动态登记instance的store子模块",
                    param: "(instanve,module)",
                    example: [
                        "//在需要注册子模块的vue文件中引入方法",
                        "import { registerModule } from 'tong-zui-ui/js/usual';",
                        "//created钩子中使用",
                        "registerModule(this,module);",
                    ]
                },
                {
                    name: "doCopy",
                    explain: "复制string到粘贴板",
                    param: "(string)",

                    example: [
                        "//引入方法",
                        "import { doCopy } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "doCopy('123'); // 右键粘贴可以得到123",
                    ]
                }, {
                    name: "doDeepCopy",
                    explain: "深层拷贝param,并且返回新的param",
                    param: "(param)",
                    returns: "新的param",

                    example: [
                        "//引入方法",
                        "import { doDeepCopy } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "doDeepCopy('123');     // '123'",
                        "doDeepCopy([1,2,3]);   // [1,2,3]",
                        "doDeepCopy({name:'123'}); //{name:'123'}",
                    ]
                }, {
                    name: "mergeObject",
                    explain: "合并obj对象，并返回一个新的对象",
                    param: "(obj1,obj2,obj3,obj4....)",
                    returns: "新的对象",
                    example: [
                        "//引入方法",
                        "import { mergeObject } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "mergeObject({name:'zhang san'},{name:'wang wu'}); // {name:'wang wu'}",
                        "mergeObject({age:'19'},{name:'wang wu'});  // {age:'19',name:'wnag wu'}",
                    ]
                }, {
                    name: "deepMergeObject",
                    explain: "深层合并对象，不考虑数组",
                    param: "(obj1,obj2)",
                    returns: "新的对象",
                    example: [
                        "//引入方法",
                        "import { deepMergeObject } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "deepMergeObject({person:{name:'zhang san'}},{person:{age:11}}); // {person:{age:11,name:'zhang san'}}",
                    ]
                }, {
                    name: "debounce",
                    explain: "防抖函数构造函数",
                    param: "(fn,wait = 600)",
                    returns: "防抖处理之后的fn",
                    example: [
                        "//引入方法",
                        "import { debounce } from 'tong-zui-ui/js/usual';",
                        "//使用 -- 给下面的clickTest方法添加防抖,有两种方式",
                        "let clickTest = function(){...}",
                        "//1.增加",
                        "clickTest = debounce(clickTest);",
                        "//2.改写",
                        "let clickTest = debounce(function(){...})",
                    ],
                    exampleHeight: "130px"
                }, {
                    name: "flatArray",
                    explain: "通过key扁平化数组arr",
                    param: "(arr,key='children')",
                    returns: "扁平化后的数组",
                    example: [
                        "//引入方法",
                        "import { flatArray } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "let arr = [{id:1,children:[{id:2}]},{id:3}]",
                        "flatArray(arr,'children'); //[{id:1},{id:2},{id:3}]"
                    ],
                }, {
                    name: "transferTreeData",
                    explain: "扁平数组转换为树形数据数组",
                    param: "(arr,initValue,id='id',pId='pId')",
                    returns: "树形数据的数组",
                    example: [
                        "//引入方法",
                        "import { transferTreeData } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "let arr = [{id:1,pId:null},{id:2,pId:1},{id:3,pId:2}]",
                        "transferTreeData(arr,null); //[{id:1,pId:null,children:[{id:2,pId:1,children:[{id:3,pId:2}]}]}]"
                    ],
                }, {
                    name: "getParents",
                    explain: "获取所有父级的集合",
                    param: "(arr, value, idKey='id', childKey='children' )",
                    returns: "父级的集合",
                    example: [
                        "//引入方法",
                        "import { getParents } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "let arr = [{id:1,children:[{id:'1-1'}]},{id:2,pId:1},{id:3,pId:2}]",
                        "getParents(arr,'1-1'); //[{id:1,children:[{id:'1-1'}]}]"
                    ],
                }, {
                    name: "getChild",
                    explain: "通过匹配idKey获取子集的集合",
                    param: "(arr, value, idKey='id', childKey='children',res= [] )",
                    returns: "父级的集合",
                    example: [
                        "//引入方法",
                        "import { getChild } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "getChild([{id:1,children:[{id:2,children:[{id:10}]}]}],2); //[{id:10}]"
                    ],
                }, {
                    name: "throttle",
                    explain: "节流函数",
                    param: "(fn,wait = 600)",
                    returns: "节流处理之后的fn",
                    example: [
                        "//引入方法",
                        "import { throttle } from 'tong-zui-ui/js/usual';",
                        "//使用 -- 给下面的clickTest方法添加节流,有两种方式",
                        "let clickTest = function(){...}",
                        "//1.增加",
                        "clickTest = throttle(clickTest);",
                        "//2.改写",
                        "let clickTest = throttle(function(){...})",
                    ],
                    exampleHeight: "130px"
                }, {
                    name: "formatDate",
                    explain: "日期格式化,formate是yyyy-MM-dd HH-mm-ss w的组合;MM这种双字母表示补0",
                    param: "(time,formate)",
                    returns: "格式化之后的时间",
                    example: [
                        "//引入方法",
                        "import { formateDate } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "formatDate(new Date(),'yyyy-MM-dd'); //2020-07-28",
                        "formatDate(new Date(),'yyyy-M-dd'); //2020-7-28",
                        "formatDate(new Date(),'yyyy-M-d'); //2020-7-28",
                        "formatDate(new Date(),'yyyy-M-dd HH:mm:ss 星期w'); //2020-7-28 14-43-37 星期二",
                    ],
                    exampleHeight: "130px"
                }, {
                    name: "trim",
                    explain: "根据type值去掉string的空格;type: 1-所有空格 2-前后空格 3-前空格 4-后空格",
                    param: "(string,type:number)",
                    returns: "去掉空格之后的string",
                    example: [
                        "//引入方法",
                        "import { trim } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "trim(' 这个是 空格 ',1);  // 这个是空格",
                        "trim(' 这个是 空格 ',2);  // 这个是 空格",
                        "trim(' 这个是 空格 ',3);  // 这个是 空格 ",
                        "trim(' 这个是 空格 ',4);  //  这个是 空格",
                    ],
                    exampleHeight: "110px"
                }, {
                    name: "verifyNotNull",
                    explain: "对param非空判断，判断对象是否为空字符串、null、undefined等",
                    param: "(param)",
                    returns: "true | false",
                    example: [
                        "//引入方法",
                        "import { verifyNotNull } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "verifyNotNull(1);  //true",
                        "verifyNotNull(null);  //false",
                        "verifyNotNull(undefined);  //false",
                        "verifyNotNull('');  //false",
                    ],
                    exampleHeight: "110px"
                }, {
                    name: "deleteByIndex",
                    explain: "删除arr数组index索引位置的第一个元元素",
                    param: "(arr,index)",
                    returns: "新的数组",
                    example: [
                        "//引入方法",
                        "import { deleteByIndex } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "deleteByIndex([1,2,3],1);  //[1,3]",
                        "deleteByIndex([1,2,3],0);  //[2,3]",
                    ],
                }, {
                    name: "deleteByValue",
                    explain: "删除arr数组值为value的索引的第一个元元素",
                    param: "(arr,value)",
                    returns: "新的数组",
                    example: [
                        "//引入方法",
                        "import { deleteByValue } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "deleteByValue([1,2,3],1);  //[2,3]",
                        "deleteByValue([1,2,3],2);  //[1,3]",
                    ],
                }, {
                    name: "deleteByKeyValue",
                    explain: "删除arr中满足key==value的第一个元素",
                    param: "(arr,key,value)",
                    returns: "新的数组",
                    example: [
                        "//引入方法",
                        "import { deleteByKeyValue } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "deleteByKeyValue([{name:'zhang'},{name:'wang'},{name:'zhang'}],'name','zhang');  //[{name:'wang'},{name:'zhang'}]",
                        "deleteByKeyValue([{name:'zhang'},{name:'wang'},{name:'zhang'}],'name','wang');   //[{name:'zhang'},{name:'zhang'}]"
                    ],
                }, {
                    name: "YamlToJson",
                    explain: "yaml数据转换json数据方法",
                    param: "(yaml)",
                    returns: "json数据",
                    example: [
                        "//引入方法",
                        "import { YamlToJson } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "YamlToJson('{\"name\":\"wangwu\"}'));  //{\"name\":\"zhangteng\"} json格式",
                    ],
                }, {
                    name: "JsonToYaml",
                    explain: "json数据转换yaml数据方法",
                    param: "(json)",
                    returns: "yaml数据",
                    example: [
                        "//引入方法",
                        "import { JsonToYaml } from 'tong-zui-ui/js/usual';",
                        "//使用",
                        "JsonToYaml(JSON.stringify({name:'wangwu'}));  //'{\"name\":\"wangwu\"}'",
                    ],
                }, {
                    name: "xmlToJson",
                    explain: "xml转json",
                    param: "(xml)",
                    returns: "json数据",
                    example: [
                        "//引入方法",
                        "import { xmlToJson } from 'tong-zui-ui/js/usual'",
                        "//使用方法",
                        `xmlToJson(\`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
                        <root>
                            <name>Super</name>
                            <Surname>Man</Surname>
                            <age>23</age>
                        </root>\`) //{root:{Surname:"Man",age:"23",name:"Super"}}`,
                    ]
                }, {
                    name: "jsonToXml",
                    explain: "json转xml",
                    param: "(json)",
                    returns: "xml数据",
                    example: [
                        "//引入方法",
                        "import { jsonToXml } from 'tong-zui-ui/js/usual'",
                        "//使用方法",
                        `xmlToJson({Surname:"Man",age:"23",name:"Super"}); //<?xml version="1.0" encoding="UTF-8" standalone="yes"?><root><name>Super</name><Surname>Man</Surname><age>23</age></root>`,
                    ]
                }, {
                    name: "commonAxios",
                    explain: "axios请求序列",
                    returns: "",
                    example: [
                        "//引入方法",
                        "import { commonAxios } from 'tong-zui-ui/js/usual';",
                        "//使用方法",
                        "commonAxios.add(fn1); //fn是返回值为promise或者async函数",
                        "commonAxios.add(fn2); //会先执行fn1，执行成功之后再执行fn2",
                    ]
                }, {
                    name: "getFirstWord",
                    explain: "获取字符串首字母",
                    param: "(string)",
                    returns: "首字母",
                    example: [
                        "//引入方法",
                        "import { getFirstWord } from 'tong-zui-ui/js/usual';",
                        "//使用方法",
                        "getFirstWord('湖北'); //h",
                        "getFirstWord('1今天'); //1",
                    ]
                }, {
                    name: "downloadBlob",
                    explain: "下载文件流",
                    param: "(res)",
                    returns: "",
                    example: [
                        "//引入方法",
                        "import { downloadBlob } from 'tong-zui-ui/js/usual';",
                        "//使用方法",
                        "downloadBlob(res,name); //res是后台接口返回的流; name下载的文件名",
                    ]
                }, {
                    name: "downloadUrl",
                    explain: "通过url下载文件",
                    param: "(url,name)",
                    example: [
                        "//引入方法",
                        "import { downloadUrl } from 'tong-zui-ui/js/usual';",
                        "//使用方法",
                        "downloadUrl(url,name); //url是后台返回的下载地址; name下载的文件名",
                    ]
                }
            ],
        }
    ]
}