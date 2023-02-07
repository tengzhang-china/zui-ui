module.exports = {
    title: "tongTransfer",          //大标题
    desc: "tongTransfer穿梭框", //大标题说明

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
            title: "带参示例", //示例标题
            desc: "", //示例标题示例
            
            codeConfig: {
                codeString: ``,
                codeEditorHeight: "350px",
                template: "<tongTransfer :titles='titles' :transferData='transferData' :leftData='leftData' />",

                codeComponent: {
                    data() {
                        return {
                            titles:['Source', 'Target'],
                            transferData:{
                                transferObj:new Array(100)
                                .fill("")
                                .map((val, index) => ({ label: "label" + index, key: index })),
                                transferAllKey:[],
                                transferLeftKey:[],
                                transferVal:[],
                            },
                            leftData: [],
                        }
                    },
                    render(h) {
                        return (<tongTransfer titles={this.titles} transferData={this.transferData} leftData={this.leftData}/>)
                    },
                },
            },
        }
    ],


    tableList:[
        {
            modelType: "propModel", //表格模板类型
            listData:[
                {
                    param:"titles", 
                    explain:"左右标题",
                    type:"array",
                    defaultValue:"['Source', 'Target']",
                },
                {
                    param:"transferData.transferObj", 
                    explain:"所有数据集合",
                    type:"array",
                    defaultValue:"[]",
                },
                {
                    param:"transferData.transferAllKey", 
                    explain:"所有key集合",
                    type:"array",
                    defaultValue:"[]",
                },
                {
                    param:"transferData.transferLeftKey", 
                    explain:"左边数据集合",
                    type:"array",
                    defaultValue:"[]",
                },
                {
                    param:"transferData.transferVal", 
                    explain:"右边数据集合",
                    type:"array",
                    defaultValue:"[]",
                },
                {
                    param:"leftData", 
                    explain:"左边默认选中的数据集合",
                    type:"array",
                    defaultValue:"[]",
                },
            ]
        },{
            modelType: "interfaceModel",
            desc: "样例:<tong-transfer ref='tongTransfer' />",
            listData: [
                {
                    name: "clearQuery",
                    explain: "清空搜索框，type为left、right",
                    param: "(type)",
                    example: "this.$refs.tongTransfer.clearQuery('left')"
                }
            ]
        },
    ],
}