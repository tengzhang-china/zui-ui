module.exports = {
    title: "tongBar",
    desc: "柱状图图表组件",

    recordList: [
        {
            version: "1.1.1-21",
            editor: "张腾",
            time: "2020-11-11 14:00",
            contentList: [
                "新增bar图",
            ]
        }
    ],

    exampleList: [
        {
            title: "横向展示的柱状图",
            desc: "调整横纵坐标type",

            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: `<tong-bar :xAxis='xAxis' :yAxis='yAxis' :height='height' :series='series' :title='title' />`,
                    data() {
                        return {
                            height: 240,

                            title:{
                                show:false,
                                text:'111231'
                            },
                            xAxis: {
                                type: "value",
                            },
                            yAxis: {
                                type: "category",
                                data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
                            },
                            series: [
                                {
                                    type: "bar",
                                    data: [18203, 23489, 29034, 104970, 131744, 630230],
                                },
                            ]
                        }
                    },
                },
            }
        },
        {
            title: "纵向伪3d效果",
            desc: "调整data值为形式，当高度不够的时候展示普通效果",
            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: `<tong-bar :xAxis='xAxis' type="1" :yAxis='yAxis' :height='height' :series='series' :title='title' />`,
                    data() {
                        return {
                            height: 240,

                            title:{
                                show:false,
                                text:'111231'
                            },
                            xAxis: {
                                type: "category",
                                data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
                            },
                            yAxis: {
                                type: "value",
                            },
                            series: [
                                {
                                    type: "bar",
                                    data: [{value:18203}, {value:23489}, {value:29034}, {value:104970}, {value:131744}, {value:630230}],
                                },
                            ]
                        }
                    },
                },
            }
        }
    ],
    tableList:[
        {
            modelType: "propModel", //表格模板类型
            listData: [
                {
                    param:"type",
                    explain:"1表示伪3d",
                    type: "number",
                    defaultValue:`0`
                },
                {
                    param: "height",
                    explain: "高度 - 默认继承父类高度",
                    type: "number",
                    defaultValue:`0`
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
        },{
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
                    defaultValue:"bar",
                },{
                    param:"data",
                    explain:"即将展示的数据集合",
                    type:"array",
                },{
                    param:"stack",
                    explain:"叠放 -- 值一致的叠放",
                    type:"string",
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