module.exports = {
    title: "tongScatter",          //大标题
    desc: "tongScatter图表组件", //大标题说明

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
                    template: `<tong-scatter :height='height' :tooltip='tooltip' :xAxis="xAxis" :yAxis="yAxis" :series="series" />`,
                    data() {
                        return {
                            height: 340,
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross'
                                }
                            },
                            xAxis: {
                                type: 'value',
                                splitLine: {
                                    lineStyle: {
                                        type: 'dashed'
                                    }
                                },
                                splitNumber: 20
                            },
                            yAxis: {
                                type: 'value',
                                splitLine: {
                                    lineStyle: {
                                        type: 'dashed'
                                    }
                                }
                            },
                            series: [{
                                name: 'scatter',
                                type: 'scatter',
                                data: [
                                    [1, 4862.4],
                                    [2, 5294.7],
                                    [3, 5934.5],
                                    [4, 7171.0],
                                    [5, 8964.4],
                                    [6, 10202.2],
                                    [7, 11962.5],
                                    [8, 14928.3],
                                    [9, 16909.2],
                                    [10, 18547.9],
                                    [11, 21617.8],
                                    [12, 26638.1],
                                    [13, 34634.4],
                                    [14, 46759.4],
                                    [15, 58478.1],
                                    [16, 67884.6],
                                    [17, 74462.6],
                                    [18, 79395.7]
                                ]
                            }]
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
                    explain: "标题部分配置",
                    type: "object",
                    defaultValue:`{show:true,text:''}`
                },
                {
                    param: "tooltip",
                    explain: "提示信息配置项",
                    type: "object",
                    defaultValue:`{show:true}`
                },
                {
                    param: "legend",
                    explain: "图例配置项",
                    type: "object",
                    defaultValue:`{show:true}`
                },
                {
                    param: "xAxis",
                    explain: "x轴配置项",
                    type: "object",
                    defaultValue:`{show:true,type:'category'}`
                },
                {
                    param: "yAxis",
                    explain: "y轴配置项",
                    type: "object",
                    defaultValue:`{show:true,type:'value'}`
                },{
                    param:"series",
                    explain:"数据集合,具体配置项看下表",
                    type:"array",
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
                    defaultValue:"scatter",
                },{
                    param:"data",
                    explain:"即将展示的数据集合",
                    type:"array",
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