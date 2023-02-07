module.exports = {
    title: "tongCron",        
    desc: "tongCron表达式组件",

    recordList: [
        {
            version:"1.2.3",
            editor:"张腾",
            time:"2021年10月12日11:24:57",
            contentList:[
                "cron表达式输入错误，直接红字提醒",
                "tongCron月份选中问题"
            ]
        },
        {
            version: "1.1.3-15",
            editor: "张腾",
            time: "2020-10-14 11:10",
            contentList: [ 
                "增加表达式校验方法validate",
            ]
        },
        {
            version: "1.1.2",
            editor: "张腾",
            time: "2020-10-14 11:10", 
            contentList: [
                "小时通配符异常",
            ]
        }
    ],

    exampleList: [
        {
            title: "使用示例", //示例标题
            desc: "", //示例标题示例//时间字符串秒  分钟  时  日  月  周  年 空格连接
            
            codeConfig: {
                codeEditorHeight: "250px",
                template: `<tongCron :propsCron='propsCron' :runTime='runTime'/>`,
                
                codeComponent: {
                    data() {
                        return {
                            propsCron:'* * * * * ? *',
                            runTime:['2020-02-19 18:22:22','2020-02-19 18:22:22'],
                        }
                    },
                    render(h) {
                        return (<tongCron propsCron={this.propsCron} runTime={this.runTime}/>)
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
                    param:"propsCron", 
                    explain:"时间字符串(秒 分钟 时 日 月 周 年)空格连接",
                    type:"string",
                    defaultValue:"''",
                },
                {
                    param:"runTime", 
                    explain:"最后运行时间",
                    type:"string",
                    defaultValue:"[]",
                }
            ]
        },{
            modelType: "interfaceModel",
            desc: `<tong-cron ref="tongCron" />`,
            listData:[
                {
                    name: "validate",
                    explain: "校验cron表达式，获取校验信息和结果 {message,res}",
                    example: "this.$refs.tongCron.validate()"
                },
            ]
        }
    ],
}