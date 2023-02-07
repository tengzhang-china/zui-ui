module.exports = {
    title: "tongCalendar",
    desc: "日历图表组件",

    recordList: [
        {
            version: "1.1.2",
            editor: "张腾",
            time: "2020-11-11 14:00",
            contentList: [
                "新增日历图",
            ]
        }
    ],

    exampleList: [
        {
            title: "单月份日历热力图",

            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: `<tong-calendar :height='height' :title="title" :calendar="calendar" :visualMap="visualMap" :series="series" />`,
                    data() {
                        return {
                            height: 340,

                            title: {
                                show: false,
                                text: ''
                            },

                            calendar: {
                                orient: 'vertical',
                                yearLabel: {},
                                dayLabel: {
                                    firstDay: 1,
                                },
                                monthLabel: {
                                    nameMap: 'cn',
                                    margin: 20
                                },
                                cellSize: [30, 20],
                                range: '2017-04',
                                splitLine: {
                                    show: false
                                },
                                itemStyle: {
                                    borderColor: "#fff"
                                }
                            },

                            visualMap: {
                                show: false,
                                min: 0,
                                calculable: true,
                                orient: 'horizontal',
                                categories: ['blue','blue1','blue2','red','red1','orange','orange1','orange2',],
                                inRange:{
                                    color: {
                                        'blue': '#3b81e0',
                                        'blue1': '#8cc8fe',
                                        'blue2': '#d8f2ff',
                                        'red': '#f74d50',
                                        'red1':"#fd9647",
                                        'orange':"#fd9647",
                                        'orange1':"#ffcb43",
                                        'orange2':"#ffcb43",
                                        '':"green"
                                    }
                                }
                            },

                            series: [{
                                type: 'heatmap',
                                coordinateSystem: 'calendar',
                                data: [
                                    { value: ['2017-4-1', 100,'blue'],itemStyle:{}},
                                    { value: ['2017-4-2', 1,'blue1'] },
                                    { value: ['2017-4-5', 50,'blue2'] },
                                    { value: ['2017-4-6', 150,'red'] },
                                    { value: ['2017-4-7', 250,'red1'] },
                                    { value: ['2017-4-9', 250,'orange'] },
                                    { value: ['2017-4-8', 250,'orange1'] },
                                    { value: ['2017-4-11', 250,'orange2'] }
                                ],
                            }]
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
                    param: "visualMap",
                    explain: "视觉映射配置",
                    type: "object",
                    defaultValue: `{show:false,}`
                }, {
                    param: "calendar",
                    explain: "日历配置项",
                    type: "object",
                    defaultValue: ``
                },
                {
                    param: "series",
                    explain: "数据集合,具体配置项看下表",
                    type: "array",
                },

                {
                    param:"selectedItemStyle",
                    explain:"设置选中的itemStyle",
                    type: "object",
                    defaultValue: `{borderColor: "#000"}`
                }
            ]
        }, {
            modelType: "propModel",
            title: "series说明",
            desc: "series接收的对象key介绍",
            listData: [{
                param: "type",
                explain: "当前数据展示类型",
                type: "string",
                defaultValue: "heatmap",
            }, {
                param: "data",
                explain: "即将展示的数据集合，二维数组",
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