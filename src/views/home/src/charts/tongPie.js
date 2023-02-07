module.exports = {
    title: "tongPie",          //大标题
    desc: "tongPie图表组件", //大标题说明

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
            editor: "胡思琦",     //修改人
            time: "2020-08-31 10:43",    //修改时间
            contentList: [      //修改内容
                "新增图表",
            ]
        }
    ],

    exampleList: [
        {
            title: "使用示例", //示例标题
            desc: "",
            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: `<tong-pie :height='height' :tooltip='tooltip' :legend='legend' :series="series" />`,
                    data() {
                        return {
                            height: 240,
                            tooltip: {
                                trigger: 'item',
                                formatter: '{a} <br/>{b}: {c} ({d}%)'
                            },
                            legend: {
                                orient: 'vertical',
                                left: 10,
                                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                            },
                            series: [
                                {
                                    name: '访问来源',
                                    type: 'pie',
                                    radius: ['50%', '70%'],
                                    avoidLabelOverlap: false,
                                    label: {
                                        show: false,
                                        position: 'center'
                                    },
                                    emphasis: {
                                        label: {
                                            show: true,
                                            fontSize: '30',
                                            fontWeight: 'bold'
                                        }
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                    data: [
                                        { value: 335, name: '直接访问' },
                                        { value: 310, name: '邮件营销' },
                                        { value: 234, name: '联盟广告' },
                                        { value: 135, name: '视频广告' },
                                        { value: 1548, name: '搜索引擎' }
                                    ]
                                }
                            ]
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
                    explain: "title置项",
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
                }, {
                    param: "series",
                    explain: "数据集合,具体配置项看下表",
                    type: "array",
                }, {
                    param: "其他echarts配置项",
                    explain: "可参考echarts文档",
                }
            ]
        },
        {
            modelType: "propModel",
            title: "series说明",
            desc: "series接收的对象key介绍",
            listData: [
                {
                    param: "name",
                    explain: "数据名 - 影响图例和tips",
                    type: "string",
                }, {
                    param: "type",
                    explain: "当前数据展示类型",
                    type: "string",
                    defaultValue: "pie",
                }, {
                    param: "data",
                    explain: "即将展示的数据集合",
                    type: "array",
                }
            ]
        },
        {
            modelType:"eventModel",
            listData:[
                {
                    name: "click",
                    explain: "click",
                    param: "(params)",
                },
            ]
        }
    ],
}