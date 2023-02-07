module.exports = {
    title: "tongUpload",
    desc: "上传组件",
    recordList: [
        {
            version: "1.0.31",
            editor: "张腾",
            time: "2020-07-27 10:15",
            contentList: [
                "调整说明文档",
            ]
        }
    ],

    exampleList: [
        {
            title: "列表式上传",

            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: "<tong-upload :tip='tip' />",
                    data() {
                        return {
                            tip: "上传你想上传的内容"
                        }
                    },
                }
            }
        },{
            title:"拖拽式上传",
            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: "<tong-upload :tip='tip' :drag='true' />",
                    data() {
                        return {
                            tip: "上传你想上传的内容"
                        }
                    },
                }
            }
        }
    ],

    tableList:[
        {
            modelType:"propModel",
            listData:[
                {
                    param:"action",
                    explain:"上传的地址",
                },{
                    param:"headers",
                    explain:"设置上传的请求头",
                },{
                    param:"multiple",
                    explain:"是否多选",
                    type:"boolean",
                    defaultValue:"false"
                },{
                    param:"data",
                    explain:"上传附带的额外参数",
                    type:"object"
                },{
                    param:"name",
                    explain:"上传的字段名",
                    type:"string",
                    defaultValue:"file"
                },{
                    param:"with-credentials",
                    explain:"支持发送 cookie 凭证信息",
                    type:"boolean",
                    defaultValue:"false"
                },{
                    param:"show-file-list",
                    explain:"是否显示上传列表",
                    type:"boolean",
                    defaultValue:"false"
                },{
                    param:"drag",
                    explain:"是否开启拖拽",
                    type:"boolean",
                    defaultValue:"false"
                },{
                    param:"accept",
                    explain:"接受文件类型",
                    type:"string",
                },{
                    param:"disabled",
                    explain:"是否禁用",
                    type:"boolean",
                    defaultValue:"false"
                },{
                    param:"limit",
                    explain:"最大文件数",
                },{
                    param:"file-list",
                    explain:"文件列表",
                    type:"array",
                },{
                    param:"auto-upload",
                    explain:"自动上传",
                    type:"boolean",
                    defaultValue:"false"
                },{
                    param:"list-type",
                    explain:"列表风格",
                    type:"string",
                    defaultValue:"text",
                    values:"text，picture，picture-card"
                },{
                    param:"http-request",
                    explain:"自定义上传",
                    type:"function"
                },{
                    param:"on-remove",
                    explain:"移除文件的钩子。function(file, fileList)",
                    type:"function",
                },{
                    param:"list-success",
                    explain:"上传成功的钩子。function(response, file, fileList)",
                    type:"function",
                },{
                    param:"on-error",
                    explain:"上传失败的钩子。function(err, file, fileList)",
                    type:"function",
                },{
                    param:"list-change",
                    explain:"修改文件的钩子。文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用。function(file, fileList)",
                    type:"function",
                },{
                    param:"before-upload",
                    explain:"上传前的钩子。若返回 false 或者返回 Promise 且被 reject，则停止上传。function(file)",
                    type:"function",
                },{
                    param:"before-remove",
                    explain:"删除前的钩子。参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。function(file, fileList)",
                    type:"function",
                }
            ]
        },{
            modelType:"slotModel",
            listData:[
                {
                    name:"默认插槽",
                    explain:"拖拽下可通过默认插槽修改拖拽框中的内容"
                }
            ]
        },{
            modelType:"interfaceModel",
            desc:"样例:<tong-upload ref='tongUpload' />",
            listData:[
                {
                    name: "clearFiles",
                    explain: `清空上传列表，在before-upload中不支持。`,
                    example: "this.$refs.tongUpload.clearFiles()",
                },{
                    name: "about",
                    explain: `取消上传请求`,
                    example: "this.$refs.tongUpload.about()",
                },{
                    name: "submit",
                    explain: `手动上传`,
                    example: "this.$refs.tongUpload.submit()",
                }
            ]
        }
    ]
}