module.exports = {
    title: "minio.js",
    desc: "与minio客户端的交互",
    type:"js",

    recordList: [
        {
            version: "",          //可使用版本
            editor: "胡思琦",             //修改人
            time: "2020-09-01 17:15",   //修改时间
            contentList: [              //修改内容
                "",
            ],
        }
    ],
    
    tableList:[
        {
            modelType:"methodModel",
            expand:true,
            desc:"",
            listData:[
                {
                    name:"setOption",                       //方法名
                    explain:"修改配置",  //说明
                    param:"(obj),支持obj.endPoint,obj.port,obj.accessKey,obj.secretKey",                //入参
                    returns:"",                //返回值
                    example:[                              //使用示例
                        "import {setOption} from 'tong-zui-ui/js/minio';",
                        "",                
                        "setOption(obj)",
                    ],
                    exampleHeight:"80px",                //示例编辑器高度
                },
                {
                    name:"minioUpload",                       //方法名
                    explain:"上传文件",  //说明
                    param:"(bucketName, file, path)path为文件夹名",                //入参
                    returns:"resolve(url)",                //返回值
                    example:[                              //使用示例
                        "import {minioUpload} from 'tong-zui-ui/js/minio';",
                        "",                
                        "minioUpload(bucketName, file, path='')",
                    ],
                    exampleHeight:"80px",                //示例编辑器高度
                },{
                    name:"minioDown",                       //方法名
                    explain:"下载文件",  //说明
                    param:"(bucketName, fileName)",                //入参
                    returns:"",                //返回值
                    example:[                              //使用示例
                        "import {minioDown} from 'tong-zui-ui/js/minio';",
                        "",                
                        "minioDown(bucketName, fileName)",
                    ],
                    exampleHeight:"80px",                //示例编辑器高度
                },{
                    name:"minioGet",                       //方法名
                    explain:"查询文件夹下文件",  //说明
                    param:"(bucketName)",                //入参
                    returns:"list(文件集合)",                //返回值
                    example:[                              //使用示例
                        "import {minioGet} from 'tong-zui-ui/js/minio';",
                        "",                
                        "minioGet(bucketName)",
                    ],
                    exampleHeight:"80px",                //示例编辑器高度
                },{
                    name:"minioDel",                       //方法名
                    explain:"删除文件",  //说明
                    param:"(bucketName, fileName)",                //入参
                    returns:"resolve(true | 错误原因)",                //返回值
                    example:[                              //使用示例
                        "import {minioDel} from 'tong-zui-ui/js/minio';",
                        "",                
                        "minioDel(bucketName, fileName)",
                    ],
                    exampleHeight:"80px",                //示例编辑器高度
                },
            ]
        }
    ]
}