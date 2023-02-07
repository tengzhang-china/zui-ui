module.exports = {
    title: "tongSpirits",
    desc: "spirits图图表组件",

    recordList: [
        {
            version: "1.1.2",
            editor: "张腾",
            time: "2020-11-17 14:00",
            contentList: [
                "新增spirits图",
            ]
        }
    ],

    exampleList: [
        {
            title: "普通spirits图",
            desc: "symbol自定义 -- base64",
            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: `<tong-spirits :xAxis='xAxis' :yAxis='yAxis' :height='height' :series='series' :title='title' />`,
                    data() {
                        return {
                            height: 240,

                            title: {
                                show: false,
                                text: '这个是title'
                            },
                            xAxis: {
                                max:2000,
                                type: "",
                                splitLine:{
                                    show:false
                                },
                            },
                            yAxis: {
                                type: "",
                                data: ['2013', '2014', '2015', '2016'],
                            },
                            series: [{
                                type: 'pictorialBar',
                                symbolRepeat: 'fixed',
                                symbolMargin: '5%',
                                symbolClip: true,
                                symbolSize: 30,
                                symbolBoundingData: 2000,
                                data: [891, 1220, 660, 1670],
                                z: 10
                            }, {
                                type: 'pictorialBar',
                                itemStyle: {
                                    normal: {
                                        opacity: 0.6
                                    }
                                },
                                animationDuration: 0,
                                symbolRepeat: 'fixed',
                                symbolMargin: '5%',
                                symbolSize: 30,
                                symbolBoundingData: 2000,
                                data: [891, 1220, 660, 1670],
                                z: 5
                            }]
                        }
                    },
                },
            }
        },
    ],

    tableList: [
        {
            modelType: "propModel", //表格模板类型
            listData: [
                {
                    param: "height",
                    explain: "高度 - 默认继承父类高度",
                    type: "number",
                    defaultValue: `0`
                },
                {
                    param: "title",
                    explain: "标题部分配置",
                    type: "object",
                    defaultValue: `{show:true,text:''}`
                },
                {
                    param: "tooltip",
                    explain: "提示信息配置项",
                    type: "object",
                    defaultValue: `{show:true}`
                },
                {
                    param: "legend",
                    explain: "图例配置项",
                    type: "object",
                    defaultValue: `{show:true}`
                },
                {
                    param: "xAxis",
                    explain: "x轴配置项",
                    type: "object",
                    defaultValue: `{show:true,type:''}`
                },
                {
                    param: "yAxis",
                    explain: "y轴配置项",
                    type: "object",
                    defaultValue: `{show:true,type:''}`
                }, {
                    param: "series",
                    explain: "数据集合,具体配置项看下表",
                    type: "array",
                }
            ]
        }, {
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
                    defaultValue: "pictorialBar",
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
    ]
}