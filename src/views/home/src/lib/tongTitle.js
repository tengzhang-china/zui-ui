module.exports = {
    title: "tongTitle",          //大标题
    desc: "大标题", //大标题说明
    menuOrder:1,
    recordList: [               //修改记录
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
            title: "大标题示例", //示例标题
            desc: "标准示例", //示例标题示例

            codeConfig: {
                codeString: ``,
                codeEditorHeight: "250px",
                template: "<tongTitle :topTitle='topTitle' :description='description'/>",

                codeComponent: {
                    data() {
                        return {
                            topTitle:'大标题',
                            description:'大标题描述'
                        }
                    },
                    render(h) {
                        return (<tongTitle />)
                    },
                },
            },
        },
        {
            title: "更换图标示例", //示例标题
            desc: "更换图标示例", //示例标题示例

            codeConfig: {
                codeString: ``,
                codeEditorHeight: "250px",
                template: "<tongTitle :topTitle='topTitle' :description='description' iconClass='el-icon-edit-outline'/>",

                codeComponent: {
                    data() {
                        return {
                            topTitle:'更换图标标题',
                            description:'标题描述',
                        }
                    },
                    render(h) {
                        return (<tongTitle />)
                    },
                },
            },
        },
    ],


    tableList:[
        {
            modelType: "propModel", //表格模板类型
            listData:[
                {
                    param:"iconClass",
                    explain:"图标",
                    type:"string",
                    defaultValue:"",
                },
                {
                    param:"topTitle",
                    explain:"大标题",
                    type:"string",
                    defaultValue:"-",
                },{
                    param:"description",
                    explain:"大标题描述",
                    type:"string",
                    defaultValue:"-",
                }
            ]
        }
    ],
}
