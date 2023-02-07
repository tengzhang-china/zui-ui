module.exports = {
    title: "minioUpload",
    desc: "minio文件上传",

    recordList: [
        {
            version:"1.1.21",
            editor:"张腾",
            time:"2021年7月27日16:52:40",
            contentList:[
                "miniUpload增加额外请求参数uploadParams"
            ]
        },
        {
            version:"1.1.19",
            editor:"张腾",
            time:"2021年7月29日09:18:44",
            contentList:[
                "minioUpload拖拽上传问题修复"
            ]
        },
        {
            version:"1.1.19",
            editor:"张腾",
            time:"2021年7月13日09:18:44",
            contentList:[
                "minioUpload调整下载的样式"
            ]
        },
        {
            version:"1.1.9",
            editor:"李全",
            time:"2021-4-22 15:00",
            contentList:[
                "minio上传文件支持multiple多选",
                "组件引入报错bug修复",
            ]
        },
        {
            version:"1.1.6",
            editor:"李全",
            time:"2021-3-31 15:00",
            contentList:[
                "修复删除时报错的问题"
            ]
        },
        {
            version: "1.1.3-21",
            editor: "张腾",
            time: "2021-3-9 10:20",
            contentList: [
                "上传选择文件多选",
            ]
        },
        {
            version: "1.1.2",
            editor: "李全",
            time: "2020-11-11 11:11",
            contentList: [
                "新增minio上传组件",
            ]
        },{
            version: "1.1.4",
            editor: "李全",
            time: "2021-2-5 11:11",
            contentList: [
                "增加取消上传请求方法abort","修复再次上传时，进度条显示不正确的问题"
            ]
        }
    ],

    exampleList: [
        {
            title: "minio上传", //示例标题
            desc: "标准示例", //示例标题示例

            codeConfig: {
                codeString: ``,
                codeEditorHeight: "250px",
                template: `<minio-upload :fileList.sync='applyFileList'>
        <el-button type="primary">点击上传</el-button>
    </minio-upload>`,

                codeComponent: {
                    data() {
                        return {
                            applyFileList:[]
                        }
                    },
                    render(h) {
                        return (<minio-upload />)
                    },
                },
            },
        },
        {
            title: "只上传一个文件", //示例标题
            desc: "传入文件名和文件路径", //示例标题示例

            codeConfig: {
                codeString: ``,
                codeEditorHeight: "250px",
                template: `<minio-upload :fileName.sync='fileName' :filePath.sync='filePath'>
        <el-button type="primary" style="margin-right:10px;">点击上传</el-button>
    </minio-upload>`,

                codeComponent: {
                    data() {
                        return {
                            fileName:'cat.gif',
                            filePath:'/2020-11/cat.gif',
                        }
                    },
                    render(h) {
                        return (<minio-upload />)
                    },
                },
            },
        },{
            title: "只做展示", //示例标题
            desc: "可下载", //示例标题示例

            codeConfig: {
                codeString: ``,
                codeEditorHeight: "250px",
                template: `<minio-upload  :fileList.sync='applyFileList' view></minio-upload>`,

                codeComponent: {
                    data() {
                        return {
                            applyFileList:[{
                                fileName:'cat.gif',
                                filePath:'/2020-11/cat.gif',
                            }]
                        }
                    },
                    render(h) {
                        return (<minio-upload />)
                    },
                },
            },
        },
        {
            title: "限制上传", //示例标题
            desc: "", //示例标题示例

            codeConfig: {
                codeString: ``,
                codeEditorHeight: "250px",
                template: `<div>
    <minio-upload :fileList.sync='fileList' accept=".doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf" :before-upload="beforeUpload" :before-remove="beforeRemove"
        :limit="1" :on-remove="remove" :defaultProps="defaultProps" :showProgress="true" :msgInDom="false" :view="isView">
        <div style="display:flex;">
            <el-button type="primary" style="margin-right:10px;">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">仅允许上传doc，xls，pdf，ppt类型的文件</div>
        </div>
    </minio-upload>
    <el-button type="primary" style="margin-top:20px;" @click="change">切换</el-button>
</div>`,

                codeComponent: {
                    data() {
                        return {
                            fileList:[{
                                name:'cat.gif',
                                path:'/2020-11/cat.gif',
                            }],
                            defaultProps:{
                                fileName:'name',filePath:'path'
                            },
                            isView:false
                        }
                    },
                    methods:{
                        beforeUpload(file){
                            if(file.size>10*1024){
                                this.T_message({
                                    type:"warning",
                                    message:"文件大小不能超过10kb"
                                })
                                return false
                            }else{
                                return true
                            }
                        },
                        beforeRemove(file,fileList){
                            console.log('删除前')
                            return Promise.resolve()
                        },
                        remove(file,fileList){
                            this.T_message({
                                type:"success",
                                message:"文件已删除"
                            })
                            console.log('删除后')
                        },
                        change(){
                            this.isView = !this.isView
                        }
                    },
                    render(h) {
                        return (<minio-upload />)
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
                    param:"authType",
                    explain:`附件上传预授权接口参数type，系统资源区类型
                    `,
                    values:`zone0： DXN 文件中转区
                    zone1： 介质库
                    zone2： 动态加载 jia 库
                    zone3：文件下载/上传中转区
                    zone4：数据源驱动包
                    zone5：数据标准文件共享区
                    zoneNNNN(N>100)：对应每个集群专用区`,
                    type:"string",
                    defaultValue:"zone3",
                },{
                    param:"pathPrefix",
                    explain:"调用预授权上传接口时，拼接在文件名称前的前缀",
                    type:"string",
                    defaultValue:"-",
                },{
                    param:"uploadAuthUrl",
                    explain:"附件上传预授权接口地址",
                    type:"string",
                    defaultValue:"/servers/aab/fileupload/view/v1/auth",
                },{
                    param:"downloadAuthUrl",
                    explain:"附件下载预授权接口地址",
                    type:"string",
                    defaultValue:"/servers/aab/fileupload/view/v1/auth",
                },{
                    param:"uploadParams",
                    explain:"调用上传接口额外传给后台的参数",
                    type:"object",
                    defaultValue:"{}"
                },{
                    param:"msgInDom",
                    explain:"提示信息是否在上传组件下方",
                    type:"boolean",
                    defaultValue:"true",
                },{
                    param:"msgDom",
                    explain:"赋值dom对象，则提示信息在该dom对象下方",
                    type:"HTMLElement,dom对象",
                    defaultValue:"-",
                },{
                    param:"showProgress",
                    explain:"是否显示进度条",
                    type:"boolean",
                    defaultValue:"false",
                },{
                    param:"autoUpload",
                    explain:"是否自动上传",
                    type:"boolean",
                    defaultValue:"true",
                },{
                    param:"fileList",
                    explain:"文件列表的数组，使用sync双向绑定，示例值：[{fileName:'测试文件1.docx',filePath:'/2020-11/测试文件1.docx'}]",
                    type:"array",
                    defaultValue:"-",
                },{
                    param:"defaultProps",
                    explain:"fileList中fileName、filePath字段的别名",
                    type:"object",
                    defaultValue:`{
                        fileName: "fileName",
                        filePath: "filePath",
                    }`,
                },{
                    param:"view",
                    explain:"是否作为文件的展示列表，只做回显和下载使用",
                    type:"boolean",
                    defaultValue:"false",
                },{
                    param:"filePath",
                    explain:"只上传单个文件时，可不传fileList,传filePath和fileName，使用sync双向绑定",
                    type:"string",
                    defaultValue:"-",
                },{
                    param:"fileName",
                    explain:"只上传单个文件时，文件的文件名，使用sync双向绑定",
                    type:"string",
                    defaultValue:"-",
                },{
                    param:"showFileList",
                    explain:"是否显示上传的文件列表",
                    type:"boolean",
                    defaultValue:"true",
                },{
                    param:"drag",
                    explain:"是否使用拖拽上传",
                    type:"boolean",
                    defaultValue:"false",
                },{
                    param:"accept",
                    explain:"要上传的文件类型,多种文件格式用逗号隔开,示例值：'.doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf'",
                    type:"string",
                    values:"",
                    defaultValue:"-",
                },{
                    param:"limit",
                    explain:"最大允许上传个数",
                    type:"number",
                    values:"",
                    defaultValue:"",
                },{
                    param:"disabled",
                    explain:"是否禁用",
                    type:"boolean",
                    values:"",
                    defaultValue:"false",
                },{
                    param:"multiple",
                    explain:"是否批量选择文件",
                    type:"boolean",
                    values:"",
                    defaultValue:"false",
                },{
                    param:"on-remove",
                    explain:"文件列表移除文件时的钩子",
                    type:"function(file, fileList)",
                    values:"",
                    defaultValue:"-",
                },{
                    param:"on-change",
                    explain:"文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用",
                    type:"function(file, fileList)",
                    values:"",
                    defaultValue:"-",
                },{
                    param:"before-upload",
                    explain:"上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。",
                    type:"function(file)",
                    values:"",
                    defaultValue:"-",
                },{
                    param:"before-remove",
                    explain:"删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。",
                    type:"function(file, fileList)",
                    values:"",
                    defaultValue:"-",
                },{
                    param:"on-exceed",
                    explain:"文件超出个数限制时的钩子",
                    type:"function(files, fileList)",
                    values:"",
                    defaultValue:"-",
                }
            ]
        },{
            modelType: "eventModel",
            listData: [
                {
                    name: "uploadComplete",
                    explain: "文件上传进度到达100%时的回调",
                    param: "file",
                },{
                    name: "uploadSuccess",
                    explain: "上传成功之后的回调",
                    param: "file",
                }
            ]
        }, {
            modelType: "slotModel",
            listData: [
                {
                    name: "trigger",
                    explain: "触发文件选择框的内容",
                },{
                    name: "tip",
                    explain: "提示说明文字",
                },
            ]
        },
        {
            modelType: "interfaceModel",
            desc: "样例:<minio-upload ref='minioUpload' />",
            listData: [
                {
                    name: "clearFiles",
                    explain: `清空已上传的文件列表（该方法不支持在 before-upload 中调用）`,
                    example: "this.$refs.minioUpload.clearFiles()",
                },{
                    name: "submit",
                    explain: `手动上传文件列表`,
                    example: "this.$refs.minioUpload.submit()",
                },{
                    name: "abort",
                    explain: `取消上传请求`,
                    example: "this.$refs.minioUpload.abort()",
                },
            ]
        }
    ],
}
