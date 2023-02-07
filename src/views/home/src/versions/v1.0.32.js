module.exports = {
    title: "v1.0.32",    //当前版本
    desc: "2020-08-06 17:00",//发布时间 没有值表示下个版本

    exampleList: [{
            title:"table",
            contentList:[
                "停止维护，不提供使用文档，暂保留引用入口"
            ]
        },{
            title:"tongTable",
            contentList:[
                "增加按照行转换类型，依赖tableData对象中的costomType，目前仅支持label==>input",
                "增加合并单元格配置，依赖tableData对象中的spans数组",
                "增加nullLabel属性，配置type为clickBtn,label的空文本内容，默认值 -",
                "修改表头色值 #545558",
                "增加两种状态deployed，no_deploying",
                "status类型增加了formate方法, function(rowInfo){return {title,appover,appoverTime,appoverInfo}}"
            ]
        },{
            title:"tongBreadDialog",
            contentList:[
                "增加 您的位置：",
            ]
        },{
            title:"tongDialog",
            contentList:[
                "内容区宽高联动"
            ]
        }
    ]
}