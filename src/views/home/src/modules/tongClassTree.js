module.exports = {
    menuText: "分类树",
    menuOrder: 7,
    title: "tongClassTree",
    recordList: [
        {
            version:"1.1.10",
            editor:"张腾",
            time:"2021-4-28",
            contentList:[
                "分类树增加禁用disabled"
            ]
        },
        {
            version:"1.1.8",
            editor:"张腾",
            time:"2021-4-12 15:00",
            contentList:[
                "增加节点禁用点击"
            ]
        },
        {
            version:"1.1.6",
            editor:"张腾",
            time:"2021-3-21 10:00",
            contentList:[
                "增加接口filter"
            ]
        },{
            version:"1.1.4",
            editor:"张腾",
            time:"2021-3-12 10:00",
            contentList:[
                "增加插槽header,footer",
                "增加color,background,customStyle样式配置项",
                "增加分类树"
            ]
        },
    ],

    exampleList: [
        {
            title: "普通使用",
            desc: "动态添加的形式渲染树形结构数据，调整tag样式",
            codeConfig: {
                codeEditorHeight: "200px",
                template: `<tong-class-tree nodeKey='label' :color='color' :background='background' :selectData.sync='selectData' :treeData='treeData'></tong-class-tree>`,
                codeComponent: {
                    data() {
                        return {
                            color:"red",
                            background:'gold',
                            selectData:['label-1-1'],
                            treeData: [
                                {
                                    label: "label-1",
                                    value:"1",
                                    disabled:true,
                                    children: [
                                        {
                                            label: "label-1-1",
                                            value:"1-1",
                                        },
                                        {
                                            label: "label-1-2",
                                            value:"1-2",
                                        },
                                    ],
                                },
                                {
                                    label: "label-2",
                                    value:"2ff",
                                },
                            ]
                        }
                    },
                },
            },
        },{
            title: "使用动态配置头部和脚步",
            desc: "header(用来设置过滤)，footer插槽",
            codeConfig: {
                codeEditorHeight: "200px",
                template: `<tong-class-tree nodeKey='label' ref="tongClassTree" :selectData.sync='selectData' :treeData='treeData'>
        <el-input v-model="value" slot="header" size="mini" @input="search"></el-input>
        <span slot="footer">footer-slot</span>            
    </tong-class-tree>`,
                codeComponent: {
                    data() {
                        return {
                            value:"",
                            selectData:['label-1-1'],
                            treeData: [
                                {
                                    label: "label-1",
                                    children: [
                                        {
                                            label: "label-1-1",
                                        },
                                        {
                                            label: "label-1-2",
                                        },
                                    ],
                                },
                                {
                                    label: "label-2",
                                },
                            ]
                        }
                    },
                    methods: {
                        search(val){
                            this.$refs.tongClassTree.filter(val)
                        }
                    },
                },
            },
        },
    ],

    tableList: [
        {
            modelType: "propModel",
            listData: [
                {
                    param: "selectData.sync",
                    explain: "双向绑定",
                    type: "array",
                    defaultValue:"[]"
                },{
                    param:"disabled",
                    explain:"分类树禁用",
                    type:"boolean",
                    defaultValue:"false"
                },{
                    param: "treeData",
                    explain: "树的数据",
                    type: "array",
                    defaultValue:"[]"
                },{
                    param: "nodeKey",
                    explain: "树的标识字段，必须保持唯一",
                    type: "string",
                    defaultValue:"value"
                },{
                    param: "defaultProps",
                    explain: "配置树的节点key",
                    type: "object",
                    defaultValue:"{label:'label',children:'children'}"
                },{
                    param:"color",
                    explain:"tag的字体颜色",
                    type:"string",
                    defaultValue:"#fff"
                },{
                    param:"background",
                    explain:"tag的背景颜色",
                    type:"string",
                    defaultValue:"#43c5dd"
                },{
                    param:"customStyle",
                    explain:"tag的其他自定义样式对象",
                    type:"object",
                    defaultValue:"{}"
                }
            ]
        },{
            modelType: "eventModel",
            desc: "样例:<tong-class-tree @close='close' />",
            listData: [
                {
                    name: "nodeClick",
                    explain: `选择树节点的回调`,
                    param: "(data,node)",
                },{
                    name: "close",
                    explain: `关闭选中项(点击x)的回调`,
                    param: "(value)",
                }
            ]
        },{
            modelType:"interfaceModel",
            desc:"<tong-class-tree ref='tongClassTree' />",
            listData:[
                {
                    name:"filter",
                    explain:"简单过滤文本内容",
                    param:"(val)"
                }
            ]
        },{
            modelType: "slotModel",
            listData: [
                {
                    name: "header",
                    explain: "头部插槽",
                }, {
                    name: "footer",
                    explain: "脚部插槽",
                }
            ]
        },
    ]
};
