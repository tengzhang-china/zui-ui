module.exports = {
    menuText: "数据源 -> 表",
    menuOrder: 7,
    title: "数据源->表关联操作",
    desc: "",
    recordList: [
        {
            version: "1.1.15",
            editor: "张腾",
            time: "2021-6-15 10:45",
            contentList: ["增加数据源额外请求参数dataSourceParams", "修复取消选中不可用的问题", "增加是否同数据源选中的配置项"],
        },
        {
            version: "1.1.13",
            editor: "张腾",
            time: "2021-6-01 11:15",
            contentList: ["增加组件"],
        },
    ],

    exampleList: [
        {
            title: "普通使用",
            desc: "选择源表",
            codeConfig: {
                codeEditorHeight: "170px",
                template: "<tong-data-source height='300px' @node-click='nodeClick' :defaultCheckedData='defaultCheckedData' />",
                codeComponent: {
                    data() {
                        return {
                            defaultCheckedData: { 13: ['1ca'] }
                        }
                    },
                    methods: {
                        nodeClick(data, node) {
                            console.log(arguments)
                        }
                    },
                },
            },
        },
        {
            title: "带展示的源表",
            desc: "设置componentType=2",
            codeConfig: {
                codeEditorHeight: "240px",
                template: "<tong-data-source height='360px' componentType='2'/>",
                codeComponent: {
                    data() {
                        return {
                            defaultCheckedData: { 13: ['1ca'] }
                        }
                    },
                    methods: {
                        nodeClick(data, node) {
                            console.log(arguments)
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
                    param: " ",
                    explain: "componentType=='1'专有配置",
                    spans: [[], [1, 4], [], [], []]
                },
                {
                    param: "height",
                    explain: "内容区高度",
                    type: "string",
                    defaultValue: "100%"
                }, {
                    param: "defaultCheckedData",
                    explain: "默认选中,{dsId:[表名]}",
                    type: "object",
                    defaultValue: "{ }"
                }, {
                    param: "dataSourceParams",
                    explain: "数据源额外请求参数",
                    type: "object",
                    defaultValue: "{ }"
                }, {
                    param: "sameSource",
                    explain: "勾选只能是同一数据源",
                    type: "boolean",
                    defaultValue: "false"
                },{
                    param: " ",
                    explain: "componentType=='2'专有配置",
                    spans: [[], [1, 4], [], [], []]
                },{
                    param: "height",
                    explain: "列表部分高度",
                    type: "string",
                    defaultValue:"300px"
                },{
                    param:"urlConfig",
                    explain:"地址配置，需要保持和原地址返回数据结构一致，不一致就需要自定义load",
                    type: "object",
                    defaultValue:`{dataSource: "/servers/aam/metadata/treeview/v2/list",//源和库
                    schema: "/servers/aam/dsrmdb/schview/v2/list",
                    tables: "/servers/aam/dsrmdb/defview/v2/list",//查表}`
                },{
                    param: "treeConfig",
                    explain: "树配置",
                    type: "object",
                    defaultValue:`{
                        treeData: [],
                        showCheckbox:true,
                        lazy: true,
                        nodeKey: "id",
                        defaultProps: { label: "label", children: "children",isLeaf:"isLeaf"},
                    }`
                },{
                    param:"checkedShow",
                    explain:"是否显示已选项",
                    type:"boolean",
                    defaultValue:"true"
                }
            ]
        }, {
            modelType: "eventModel",
            desc: "样例:<tong-tree @nodeClick='nodeClick' />",
            listData: [
                {
                    name: "nodeClick",
                    explain: `节点点击的方法回调，isCancel:true表示点击取消`,
                    param: "(data,node,isCancel)",
                }, {
                    name: "checkChanged",
                    explain: `复选框change回调`,
                    param: "(node,value)",
                },
            ]
        }, {
            modelType: "interfaceModel",
            desc: `<tong-data-source ref="tongDatasource" />`,
            listData: [
                {
                    name: "getData",
                    explain: "获取用户选中的数据",
                    example: "this.$refs.tongDatasource.getData()"
                },
            ]
        },
    ]
};
