module.exports = {
    title: "tongSearch",
    desc: "搜索组件，input，下拉，时间，级联",
    menuOrder: 1,
    recordList: [
        {
            version:"1.3.1",
            editor:"张腾",
            time:"2022年8月24日14:43:34",
            contentList:[
                "增加advancedExpandAuto 自动展开高级检索"
            ]
        },
        {
            version:"1.2.0",
            editor:"张腾",
            time:"2021年9月10日14:20:49",
            contentList:[
                "补充下拉树搜索"
            ]
        },
        {
            version: "1.1.24",
            editor: "张腾",
            time: "2021年8月17日17:32:50",
            contentList: [
                "调整input框响应式"
            ]
        },
        {
            version: "1.1.23",
            editor: "张腾",
            time: "2021年8月12日15:51:11",
            contentList: [
                "增加改变搜索类型前的回调函数beforeTypeChange"
            ]
        },
        {
            version: "1.1.12",
            editor: "张腾",
            time: "2021.5.28",
            contentList: [
                "tongSearch的按钮样式取消与disabled的关联"
            ]
        },
        {
            version: "1.1.9",
            editor: "张腾",
            time: "2021.4.22 15:00",
            contentList: [
                "调整目录结构",
                "自定义按钮调整圆角为0"
            ]
        },
        {
            version: "1.1.8",
            editor: "张腾",
            time: "2021-4-12 12:00",
            contentList: [
                "tongSearch去掉input的blur事件（刷新和搜索重复）"
            ]
        },
        {
            version: "1.1.3-5",
            editor: "张腾",
            time: "2021-1-19 15:00",
            contentList: [
                "增加initConfig，搜索组件初始化的配置项"
            ]
        },
        {
            version: "1.1.2-21",
            editor: "张腾",
            time: "2020-12-30 14:00",
            contentList: [
                "tongSearch增加config字段，提供自定义配置项"
            ]
        },
        {
            version: "1.1.2-5",
            editor: "张腾",
            time: "2020-11-24 17:00",
            contentList: [
                "优化辅助用input"
            ]
        },
        {
            version: "1.1.2-3",
            editor: "张腾",
            time: "2020-11-23 14:00",
            contentList: [
                "增加text，selector，cascader增加配置项placeholder"
            ]
        },
        {
            version: "1.1.1-26",
            editor: "张腾",
            time: "2020-11-16 15:00",
            contentList: [
                "调整类名"
            ]
        },
        {
            version: "1.1.1-26",
            editor: "张腾",
            time: "2020-10-19 15:00",
            contentList: [
                "tongSearh 按钮margin"
            ]
        },
        {
            version: "1.0.32-10",
            editor: "张腾",
            time: "2020-08-18 14:00",
            contentList: [
                "增加自定义按钮配置",
                "增加重置，下载配置，特殊模式默认选中第一项配置",
            ]
        },
        {
            version: "1.0.32",
            editor: "张腾",
            time: "2020-07-30 18:30",
            contentList: [
                "调整级联展示风格",
            ]
        }, {
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
            title: "普通搜索",
            desc: "<tong-search searchType='normal' />",

            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: "<tong-search searchType='normal' />",
                    data() {
                        return {

                        }
                    },
                },
            }
        }, {
            title: "附带下拉的搜索",
            desc: "text，dateTime（config.type可以配置el-date-picker的type），selector（普通下拉和tree），cascader(props可配置)，配置placeholder",
            codeConfig: {
                codeEditorHeight: "750px",
                codeComponent: {
                    template: "<tong-search :beforeTypeChange='beforeTypeChange' :advancedShow='true' :advancedStorageShow='true' :searchOptions='searchOptions' :advancedSearchOptions='searchOptions' :advancedStorageOptions='advancedStorageOptions' @advancedSearch='advancedSearch' @advancedSave='advancedSave' @advancedDel='advancedDel'/>",
                    data() {
                        return {
                            advancedStorageOptions: [
                                ["111", "", "", "下拉项值1", "1-1-1", ["下拉项值1", "下拉项值1-1"]]
                            ],
                            searchOptions: [{
                                prop: "text",
                                type: "text",
                                label: "text",
                                placeholder: "搜索"
                            },
                            {
                                prop: "dateTime",
                                type: "dateTime",
                                label: "时间范围选择",
                                config: {
                                    pickerOptions: {
                                        disabledDate(time) {
                                            return time.getTime() > Date.now()
                                        }
                                    }
                                }
                            },
                            {
                                prop: "dateTime1",

                                type: "dateTime",
                                label: "单时间选择",
                                config: {
                                    //配置单时间选择
                                    type: 'datetime'
                                }
                            },
                            {
                                prop: "selector",
                                type: "selector",
                                label: "selector",
                                selectorOptions: [{
                                    label: "下拉项1",
                                    value: "下拉项值1"
                                },
                                {
                                    label: "下拉项2",
                                    value: "下拉项值2"
                                }
                                ]
                            }, {
                                prop: "selector1",
                                type: "selector",
                                label: "tree下拉",
                                selectorOptions: [],
                                config: {
                                    checkOnClickNode:false,
                                    nodeKey:"myId",
                                    selectType: "tree",
                                    treeData: [
                                        {
                                            label: "一级 1",
                                            myId: "1",
                                            children: [{
                                                label: "二级 1-1",
                                                myId: "1-1",
                                                children: [{
                                                    label: "三级 1-1-1",
                                                    myId: "1-1-1"
                                                }]
                                            }]
                                        }
                                    ]
                                }
                            }, {
                                prop: "cascader",
                                type: "cascader",
                                label: "cascader",
                                props: {
                                    label: "label1"
                                },
                                selectorOptions: [{
                                    label1: "下拉项1",
                                    value: "下拉项值1",
                                    children: [
                                        {
                                            label1: "下拉项1-1",
                                            value: "下拉项值1-1",
                                        }
                                    ]
                                },
                                {
                                    label1: "下拉项2",
                                    value: "下拉项值2",
                                }]
                            }]
                        }
                    },
                    methods: {
                        beforeTypeChange() {
                            console.log("选择搜索类型之后的回调函数......")
                        },
                        advancedSearch(val) {
                            console.log(val)
                        },
                        advancedSave(val) {
                            console.log(val)
                        },
                        advancedDel(index) {
                            console.log(index)
                        }
                    },
                },
            }
        }, {
            title: "配置自动选中下拉第一项，配置右侧按钮",
            desc: "autoSelect，refreshShow，downloadShow",
            codeConfig: {
                codeEditorHeight: "750px",
                codeComponent: {
                    template: "<tong-search :autoSelect='true' :initConfig='initConfig' :refreshShow='true' :downloadShow='true' :searchOptions='searchOptions' @download='download' />",
                    data() {
                        return {
                            initConfig: {},
                            searchOptions: [
                                {
                                    prop: "text",
                                    type: "text",
                                    label: "text",
                                },
                                {
                                    prop: "dateTime",
                                    type: "dateTime",
                                    label: "dateTime"
                                },
                                {
                                    prop: "selector",
                                    type: "selector",
                                    label: "selector",
                                    selectorOptions: [{
                                        label: "下拉项1",
                                        value: "下拉项值1"
                                    },
                                    {
                                        label: "下拉项2",
                                        value: "下拉项值2"
                                    }
                                    ]
                                }, {
                                    prop: "cascader",
                                    type: "cascader",
                                    label: "cascader",
                                    selectorOptions: [{
                                        label: "下拉项1",
                                        value: "下拉项值1",
                                        children: [
                                            {
                                                label: "下拉项1-1",
                                                value: "下拉项值1-1",
                                            }
                                        ]
                                    },
                                    {
                                        label: "下拉项2",
                                        value: "下拉项值2",
                                    }
                                    ]
                                }
                            ]
                        }
                    },
                    methods: {
                        download() {
                            this.tongMessage({
                                type: "success",
                                message: "下载成功"
                            })
                        }
                    },
                },
            }
        }, {
            title: "配置左侧按钮：下拉菜单，普通按钮",
            desc: "menu存在则下拉菜单，否则普通按钮，vfor中使用的label作为key，需要保持单一",

            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: "<tong-search :costomButtonList='costomButtonList' :autoSelect='true' :initConfig='initConfig' :refreshShow='true' :downloadShow='true' :searchOptions='searchOptions' @download='download' />",
                    data() {
                        return {
                            costomButtonList: [
                                {
                                    label: "创建**",
                                    type: "",
                                    disabled: false,
                                    click() {
                                        console.log('点了这个')
                                    },
                                }, {
                                    label: "label2",
                                    type: "normal",
                                    disabled: true,
                                    click() {
                                        console.log('点了这个')
                                    },
                                }, {
                                    label: "label3",
                                    type: "normal",
                                    disabled: true,
                                    click() {
                                        console.log('点了这个')
                                    },
                                }, {
                                    label: "更多",
                                    type: "normal",
                                    disabled: false,
                                    menu: [
                                        {
                                            label: "menu1",
                                            click() {
                                                console.log('选中了这个')
                                            }
                                        },
                                        {
                                            label: "menu2",
                                            disabled: true
                                        },
                                    ],
                                }
                            ],
                            initConfig: {},
                            searchOptions: [
                                {
                                    prop: "text",
                                    type: "text", //输入框
                                    label: "text",
                                },
                                {
                                    prop: "dateTime",
                                    type: "dateTime", //时间选择
                                    label: "dateTime"
                                },
                                {
                                    prop: "selector",
                                    type: "selector", //下拉
                                    label: "selector",
                                    selectorOptions: [{
                                        label: "下拉项1",
                                        value: "下拉项值1"
                                    },
                                    {
                                        label: "下拉项2",
                                        value: "下拉项值2"
                                    }
                                    ]
                                }, {
                                    prop: "cascader",
                                    type: "cascader", //级联
                                    label: "cascader",
                                    selectorOptions: [{
                                        label: "下拉项1",
                                        value: "下拉项值1",
                                        children: [
                                            {
                                                label: "下拉项1-1",
                                                value: "下拉项值1-1",
                                            }
                                        ]
                                    },
                                    {
                                        label: "下拉项2",
                                        value: "下拉项值2",
                                    }
                                    ]
                                }
                            ]
                        }
                    },
                    methods: {
                        download() {
                            this.tongMessage({
                                type: "success",
                                message: "下载成功"
                            })
                        }
                    },
                },
            }
        },
    ],

    tableList: [
        {
            modelType: "propModel",
            listData: [
                {
                    param: "searchType",
                    explain: "搜索的类型",
                    type: "string",
                    values: "special，normal",
                    defaultValue: "special"
                }, {
                    param: "costomButtonList",
                    explain: "自定义按钮配置数据 [{label,disabled,type,click,menu:[]}]",
                    type: "array",
                    defaultValue: ""
                }, {
                    param: "autoSelect",
                    explain: "special类型的下拉自动选中第一项",
                    type: "boolean",
                    defaultValue: "true"
                }, {
                    param: "resetShow",
                    explain: "是否显示重置按钮",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "downloadShow",
                    explain: "是否显示下载按钮",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "beforeTypeChange",
                    explain: "选择操作类型前的回调函数，支持async（两个回调参数）",
                    type: "function",
                    defaultValue: ""
                }, {
                    param: "searchOptions",
                    explain: "special类型的下拉配置",
                    type: "array",
                    defaultValue: "[]"
                }, {
                    param: "searchOptions[0].type",
                    explain: "搜索的子类型",
                    type: "string",
                    values: "text,dataTime,selector,cascader",
                    defaultValue: ""
                }, {
                    param: "searchOptions[0].prop",
                    explain: "双向绑定的key",
                    type: "string",
                    defaultValue: ""
                }, {
                    param: "searchOptions[0].label",
                    explain: "下拉的名称",
                    type: "string",
                    defaultValue: ""
                }, {
                    param: "searchOptions[0].selectorOptions",
                    explain: "type为selector的时候的下拉项",
                    type: "array",
                    defaultValue: "[]"
                }, {
                    param: "searchOptions[0].config",
                    explain: "对应不同的type的自定义配置项，参考ele",
                    type: "object",
                    defaultValue: "{}"
                }, {
                    param: "initConfig",
                    explain: "初始化搜索类型和值",
                    type: "object",
                    defaultValue: "{}",
                }, {
                    param: "initConfig.prop",
                    explain: "搜索类型，对应searchOptions的prop",
                }, {
                    param: "initConfig.value",
                    explain: "初始化搜索值",
                    type: "boolean",
                    defaultValue: "false"
                },
                {
                    param:"advancedShow",
                    explain:"显示高级检索入口",
                    type: "boolean",
                    defaultValue: "false"
                },{
                    param:"advancedExpandAuto",
                    explain:'自动展开高级检索',
                    type: "boolean",
                    defaultValue: "false"
                },{
                    param:"advancedStorageShow",
                    explain:"高级检索搜索记录",
                    type: "boolean",
                    defaultValue: "false"
                },{
                    param:"advancedStorageOptions",
                    explain:"高级检索配置"
                }
            ]
        }, {
            modelType: "eventModel",
            desc: "样例:<tong-search @search='doSearch' />",
            listData: [
                {
                    name: "search",
                    explain: `点击搜索的回调方法，重置也会触发`,
                    param: "(item,searchValue)",
                }, {
                    name: "download",
                    explain: `点击下载的回调方法`,
                    param: "(item,searchValue)",
                },
            ]
        }
    ]
}
