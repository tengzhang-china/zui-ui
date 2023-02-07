module.exports = {
    menuText: "导出列表",
    menuOrder: 7,
    title: "tongExportList",
    desc: "选择列表导出字段导出",
    recordList: [
        {
            version:"1.2.8",
            editor:"张腾",
            time:"2021年11月26日10:28:05",
            contentList:[
                "导出组件判断"
            ]
        },
        {
            version:"1.2.0",
            editor:"张腾",
            time:"2021年9月7日09:14:03",
            contentList:[
                "修复导出地址被写死的bug"
            ]
        },
        {
            version:"1.1.26",
            editor:"张腾",
            time:"2021年8月31日15:14:57",
            contentList:[
                "导出组件增加导出文件地址"
            ]
        },
        {
            version:"1.1.25",
            editor:"张腾",
            time:"2021年8月27日10:05:27",
            contentList:[
                "添加字段自动过滤重复字段，通过cn过滤",
                "保存，导出，重新规整导出字段的order",
                "提供通过接口设置更多的字段getMoreWords",
                "补充删除字段重新选",
                "导出接口增加nameKey字段---控制模板名称"
            ]
        }
    ],

    exampleList: [
        {
            title: "普通使用",
            desc: "以方法形式调用，全局安装使用this.$tongExportList.show.call(this, config)；按需引入使用tongExportList.show.call(this, config)",
            codeConfig: {
                codeEditorHeight: "350px",
                template: `<div>
        <tong-bread-dialog ref="tongBreadDialog" />
        <el-button @click="tongExportList">导出表格</el-button>
    </div>`,
                components:[],
                codeComponent: {
                    data() {
                        return {

                        }
                    },
                    methods: {
                        tongExportList() {
                            console.log("点击导出",tongExportList);
                            tongExportList.show.call(this,{productId:242,getMoreWords(){
                                return new Promise(resovle=>{
                                    setTimeout(()=>{
                                        resovle([{cn:"接口请求回来的"},{cn:"数据源名称"},{cn:"是否启用"}])
                                    },1000)
                                })
                            }})
                        }
                    },
                },
            },
        }
    ],
    tableList: [
        {
            modelType: "propModel",
            desc:"这里说明config配置有哪些",
            listData: [
                {
                    param: "config.productId",
                    explain: "产品id",
                },{
                    param: "config.fieldKey",
                    explain: "导出接口表字段的key",
                    type:"string",
                    defaultValue:"dataSourceFieldList"
                },{
                    param:"config.nameKey",
                    explain:"模板名称的key，有值就传模板名称，没有就不传",
                    type:"string",
                    defaultValue:""
                },{
                    param:"getMoreWords",
                    explain:"通过接口设置更多的字段，格式字段数组保持一致[{cn,en,order}]",
                    type:"function"
                },{
                    param: "config.urls.list",
                    explain: "模板列表",
                    type: "string",
                    defaultValue:"/servers/aab/temp/view/v1/list"
                },{
                    param: "config.urls.export",
                    explain: "导出",
                    type: "string",
                    defaultValue:"/servers/aam/dsrmdb/rmdbview/v3/export"
                },{
                    param: "config.urls.save",
                    explain: "保存新模板",
                    type: "string",
                    defaultValue:"/servers/aab/temp/view/v1/add"
                },{
                    param: "config.urls.del",
                    explain: "删除模板",
                    type: "string",
                    defaultValue:"/servers/aab/temp/view/v1/delete"
                },
                {
                    param: "config.params.list",
                    explain: "模板列表自定义入参",
                    type: "object",
                    defaultValue:"{}"
                },{
                    param: "config.params.export",
                    explain: "导出自定义入参",
                    type: "object",
                    defaultValue:"{}"
                },{
                    param:"config.params.export.responseType",
                    explain:"导出文件类型，可选值 blob|file",
                    type:"string",
                    defaultValue:"blob"
                },{
                    param: "config.params.save",
                    explain: "保存新模板自定义入参",
                    type: "object",
                    defaultValue:"{}"
                },{
                    param: "config.params.del",
                    explain: "删除模板自定义入参",
                    type: "object",
                    defaultValue:"{}"
                },
            ]
        }
    ]
}