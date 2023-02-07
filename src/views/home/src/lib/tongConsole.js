module.exports = {
    title: "tongConsole",          //大标题
    desc: "自定义控制台,重写了console.log,在引用本组件的情况下,会在本组件打印log的值", //大标题说明

    recordList: [               //修改记录
        {
            version: "",
            editor: "胡思琦",     //修改人
            time: "2020-12-04 16:15",    //修改时间
            contentList: [      //修改内容
                "新增tongConsole",
            ]
        }
    ],

    exampleList: [
        {
            title: "", //示例标题
            desc: "", //示例标题示例
            
            codeConfig: {
                codeEditorHeight: "600px",
                template: "<tong-console/>",
                codeComponent: {
                    data() {
                        return {
                            
                        }
                    },
                },
            },
        },
    ],


    tableList:[
        {
            modelType: "propModel", //表格模板类型
            listData:[
                
                
            ]
        }
    ],
}