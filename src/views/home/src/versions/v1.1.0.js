module.exports = {
    title: "v1.1.0",    //当前版本
    desc: "2020-09-04",//发布时间 没有值表示下个版本

    exampleList: [
        {
            title:"js",
            contentList:[
                "调整xml2js",
                "优化xmlToJson",
                "增加minio类",
                "调整防抖节流函数的写法",
                "增加扁平数据转换树形数据的方法 transferTreeData",
                "增加ip，ip6校验方法"
            ]
        },{
            title:"tongTree",
            contentList:[
                "修复自定义props"
            ]
        },
        {
            title: "tongSelect",
            contentList: [
                "增加普通下拉的labelKey,valueKey"
            ]
        },
        {
            title: "tongMessage",
            contentList: [
                "增加desc配置"
            ]
        },
        {
            title: "ipInput",
            contentList: ["在input的时候增加ip校验，对不满足的清空，并弱提醒提示"]
        }, {
            title: "tongDialog",
            contentList: [
                "调整弹框按钮不可拖拽",
                "增加footer部分可以拖拽",
                "调整放缩部分大小，位置",
            ]
        }, {
            title: "tongTips",
            contentList: [
                "增加tongTips方法",
            ]
        }, {
            title: "tongTable",
            contentList: [
                "调整cell单元格padding-right=6px",
                "status - formate  -  customIcon自定义前图标可以使用内置图片,并支持字体图标",
                "tongTable 总条数>10才会显示分页器",
                "调整tongTable固定表头异常",
                "调整status自定义配置",
                "补充status的内置图标",
                "增加清空选中接口clearSelection",
                "增加过滤回调事件filterChange",
                "调整0可以展示"
            ]
        }, {
            title: "tongScroll",
            contentList: [
                "修复tongScroll滚动条值出现异常",
                "更新滚动事件触发条件"
            ]
        }, {
            title: "tongForm",
            contentList: [
                "单选展示的文本展示使用label字段",
                "增加tongForm contentWidth配置"
            ]
        }
    ]
}