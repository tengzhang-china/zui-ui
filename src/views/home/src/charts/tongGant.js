module.exports = {
    title: "tongGant",
    desc: "甘特图",
    recordList: [
        {
            ver:"1.1.2-10",
            editor: "张腾",
            time: "2020-12-03 11:00",
            contentList:[
                "甘特图增加dataZoom用户配置项"
            ]
        },
        {
            version: "1.1.1-24",
            editor: "张腾",
            time: "2020-11-11 14:00",
            contentList: [
                "新增甘特图",
            ]
        }
    ],

    exampleList: [
        {
            title: "横向展示的甘特图",
            desc: "调整type",

            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: `<tong-gant :xAxis='xAxis' :colors="colors" :yAxis='yAxis' type="1" :height='height' :series='series' :title='title' />`,
                    data() {
                        return {
                            height: 350,

                            colors:[
                                {
                                    bc:"#d6f7fe",
                                    borderColor:"#aaf0fe"
                                },{
                                    bc:"#eef1f8",
                                    borderColor:"#959cb2"
                                },{
                                    bc:"#d9dcfd",
                                    borderColor:"#4152f8"
                                }
                            ],

                            title: {
                                text: '这个是title',
                                left:"50%",
                                right:"50%"

                            },
                            xAxis: {
                                type: "category",
                                data: Array(60).fill("").map((val, index) => index+1),
                                axisLine:{
                                    show:false
                                },
                                axisTick:{
                                    show:false
                                },
                            },
                            yAxis:
                            {
                                name:"任务名称",
                                nameLocation:"start",
                                nameTextStyle:{
                                    align:"right",
                                    formatter:"111"
                                },
                                type: "category",
                                offset:9,
                                data: Array(10).fill("").map((val, index) => ({
                                    value:`任务${index + 1}`,
                                })),
                                axisLine:{
                                    show:false
                                },
                                axisTick:{
                                    show:false
                                },
                                axisLabel:{
                                    formatter:function(val,index){
                                        return `{b|${index+1}}${val}`
                                    },
                                
                                    rich:{
                                        b: {
                                            color:"gold",
                                        },
                                    }
                                }
                            },
                            series: [
                                {
                                    type: "bar",
                                    data: [0, 1, 4, 0, 10, 5],
                                },
                                {
                                    type: "bar",
                                    data: [{value:11},{value:21},{value:21}],
                                    label:{
                                        show:true,
                                        formatter:"{b}",
                                        position:"insideLeft",
                                        padding:[0,0,0,5]
                                    },
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
                    explain:"1表示横向甘特图",
                    type: "number",
                    defaultValue:`0`
                },
                {
                    param:"colors",
                    explain:"颜色集合",
                    type: "array",
                    defaultValue:`[{borderColor:"",bc:""}]`
                },                
                {
                    param: "height",
                    explain: "高度 - 默认继承父类高度",
                    type: "number",
                    defaultValue:`240`
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