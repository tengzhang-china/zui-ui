module.exports = {
    title: "tongRadar",          //大标题
    desc: "tongRadar图表组件", //大标题说明

    recordList: [
        {
            version: "1.1.2-3",
            editor: "张腾",
            time: "2020-11-12 11:45",
            contentList: [
                "增加图表可配置项",
            ]
        },
        {
            version: "",
            editor: "胡思琦",
            time: "2020-09-02 16:43",
            contentList: [
                "",
            ]
        }
    ],

    exampleList: [
        {
            title: "使用示例", //示例标题
            desc: "", //示例标题示例//时间字符串秒  分钟  时  日  月  周  年 空格连接

            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: `<tong-radar :height='height' :tooltip='tooltip' :legend='legend' :radar="radar" :series="series" />`,
                    data() {
                        return {
                            height: 240,
                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                left:"100px",
                                data: ['访问', '邮件']
                            },

                            radar: {
                                indicator: [
                                    { name: "你" },
                                    { name: "我" },
                                    { name: "他" }
                                ]
                            },

                            series: [
                                {
                                    type: 'radar',
                                    tooltip: {
                                        trigger: 'item'
                                    },
                                    areaStyle: {},
                                    data: [
                                        { value: [335, 335, 335], name: "访问" },
                                        { value: [35, 43, 195], name: "邮件" },
                                    ]
                                },
                            ],
                        }
                    },
                },
            },
        },
    ],
    tableList: [
        {
            modelType: "propModel", //表格模板类型
            listData: [
                {
                    param: "height",
                    explain: "图表高度",
                    type: "Number",
                    values: "-",
                    defaultValue: "200",
                },
                {
                    param: "title",
                    explain: "title信息配置项",
                    type: "object",
                },
                {
                    param: "tooltip",
                    explain: "提示信息配置项",
                    type: "object",
                },
                {
                    param: "legend",
                    explain: "图例配置项",
                    type: "object",
                }, 
                {
                    param: "radar",
                    explain: "雷达组件配置项",
                    type: "object",
                }, 
                {
                    param: "series",
                    explain: "数据集合,具体配置项看下表",
                    type: "array",
                }, 
                {
                    param: "其他echarts配置项",
                    explain: "可参考echarts文档",
                }
            ]
        },
        {
            modelType:"propModel",
            title: "series说明",
            desc: "series接收的对象key介绍",
            listData:[
                {
                    param:"name",
                    explain:"数据名 - 影响图例和tips",
                    type:"string",
                },{
                    param:"type",
                    explain:"当前数据展示类型",
                    type:"string",
                    defaultValue:"radar",
                },{
                    param:"data",
                    explain:"即将展示的数据集合",
                    type:"array",
                }
            ]
        }
    ],
}