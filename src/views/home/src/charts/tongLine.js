module.exports = {
    title: "tongLine",          //大标题
    desc: "tongLine图表组件", //大标题说明

    recordList: [               //修改记录
        {
            version: "1.1.2-3",
            editor: "张腾",
            time: "2020-11-12 11:45",
            contentList: [
                "增加图表可配置项",
            ]
        }, {
            editor: "胡思琪",
            time: "2020-08-28 10:15",
            contentList: [
                "新增图表"
            ]
        }
    ],

    exampleList: [
        {
            title: "使用示例", //示例标题

            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: `<tong-line :tooltip='tooltip' :legend='legend' :height='height' :grid='grid' :xAxis='xAxis' :yAxis="yAxis" :series="series" />`,
                    data() {
                        return {
                            height: 240,
                            title: {
                                text: '折线图堆叠'
                            },
                            tooltip: {
                                trigger: 'axis',
                            },
                            legend: {
                                data: ['邮件营销', '联盟广告']
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: false,
                                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                            },
                            yAxis: {
                                type: 'value',
                            },
                            series: [
                                {
                                    name: '邮件营销',
                                    type: 'line',
                                    stack: '总量',
                                    data: [120, 132, 101, 134, 90, 230, 210],
                                    smooth:.5
                                },
                                {
                                    name: '联盟广告',
                                    type: 'line',
                                    stack: '总量',
                                    data: [220, 182, 191, 234, 290, 330, 310],
                                    smooth:.5
                                },
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
                    param: "xAxis",
                    explain: "x轴配置项",
                    type: "object",
                },
                {
                    param: "yAxis",
                    explain: "y轴配置项",
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
                    defaultValue:"line",
                },{
                    param:"data",
                    explain:"即将展示的数据集合",
                    type:"array",
                },{
                    param:"smooth",
                    explain:"平滑程度",
                    type:"number | boolean",
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