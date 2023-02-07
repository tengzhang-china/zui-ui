module.exports = {
    title: "tongIcon",          
    desc: "展示图片或者字体图标",

    recordList: [     
        {
            version:"1.1.12",
            editor:"张腾",
            time:"2021-5-19 18:00",
            contentList:[
                "增加图片格式png|jpg|jpeg|gif|svg|bmp"
            ]
        },       
        {
            version: "1.0.31",
            editor: "张腾",     //修改人
            time: "2020-07-27 10:15",    //修改时间
            contentList: [      //修改内容
                "调整说明文档",
            ]
        }
    ],

    exampleList: [
        {
            title: "展示字体图标或者图片",
            desc: "imgUrl的值是字体图标类名，图片地址使用require引入",
            codeConfig: {
                codeString: ``,
                codeEditorHeight: "250px",
                codeComponent: {
                    template: "<tong-icon :imgUrl='imgUrl' />",
                    data() {
                        return {
                            imgUrl: "el-icon-platform-eleme",
                        }
                    },
                },

            }
        }
    ],

    tableList: [
        {
            modelType: "propModel", //表格模板类型
            listData: [
                {
                    param: "imgUrl",
                    explain: "显示图片或者图标的地址",
                    type: "string",
                    values: "图片的地址或者字体图标类名",
                    defaultValue: "-",
                }
            ]
        }
    ],
}