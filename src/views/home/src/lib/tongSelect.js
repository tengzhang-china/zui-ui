module.exports = {
    title: "tongSelect",
    desc: "普通下拉，下拉树",
    menuOrder:2,
    recordList: [
        {
            version:"1.2.9",
            editor:"张腾",
            time:"2021年12月1日09:47:23",
            contentList:[
                "tongSelect默认选中和value冲突"
            ]
        },
        {
            version:"1.2.6",
            editor:'张腾',
            time:'2021年11月1日18:02:05',
            contentList:[
                'tongSelect普通下拉增加自定义项配置allowCreate'
            ]
        },
        {
            version:"1.1.3-16",
            editor: "张腾",
            time: "2021-3-4 15:00",
            contentList: [
                "增加下拉框展开收起回调 visible-change",
            ]
        },
        {
            version: "1.1.3",
            editor: "张腾",
            time: "2020-12-23 17:00",
            contentList: [
                "下拉树增加condition配置项",
                "增加checkStrictly",
                "收起下拉项的时候重置树的过滤",
                "普通下拉跟树形下拉过滤分开",
            ]
        }, {
            version: "1.1.1",
            editor: "张腾",
            time: "",
            contentList: [
                "优化单选过滤操作（重复选择同一个值，会展示value）",
                "优化多选tab超长的样式",
                "调整普通单选过滤操作",
            ]
        }, {
            version: "1.1.0",
            editor: "张腾",
            time: "2020-08-19 9:18",
            contentList: [
                "增加普通下拉的labelKey,valueKey",
            ]
        }, {
            version: "1.0.31",
            editor: "张腾",
            time: "2020-07-27 10:15",
            contentList: [
                "调整说明文档",
            ]
        }],

    exampleList: [
        {
            title: "普通下拉",
            desc: "使用:value.sync='value'进行双向绑定",
            codeConfig: {
                codeEditorHeight: "400px",
                codeComponent: {
                    template: "<tong-select :value.sync='value' :filterable='true' :options='options' :allowCreate='true' :dropdownFilter='true' />",
                    data() {
                        return {
                            value: 198,
                            options: Array(100).fill("").map((val,index)=>({label:`label-${index+1}`,value:index+100}))
                        }
                    }
                },
            }
        }, {
            title: "自定义label,value的普通下拉",
            desc: "设置labelKey，valueKey",
            codeConfig: {
                codeEditorHeight: "400px",
                codeComponent: {
                    template: "<tong-select labelKey='text' valueKey='id'  :value.sync='value' :options='options' />",
                    data() {
                        return {
                            value: 0,
                            options: [{ text: "label1", id: 0 }, { text: "label2", id: 1 }, { text: "label3", id: 2, disabled: true }],
                        }
                    },
                },
            }
        }, {
            title: "可编辑下拉组件",
            desc: "设置自定义下拉组件,prefix 插槽",
            codeConfig: {
                codeEditorHeight: "400px",
                codeComponent: {
                    template: `<tong-select :value.sync='selectVal' :options='options'>
                      <div>
                         <tongInput v-model='inputValue'/>
                      </div>
                        <i class="iconfont tong-icon-user" slot='prefix' style="fontSize:25px"></i>
                    </tong-select>`,
                    data() {
                        return {
                            selectVal: 0,
                            inputValue:1,
                            options: [{
                                label: "label1",
                                id: 0
                            }, {
                                label: "label2",
                                id: 1
                            }, {
                                label: "label3",
                                id: 2,
                                disabled: true
                            }]
                        }
                    },
                    watch:{
                        inputValue(newVal){
                            this.selectVal=newVal
                        }
                    },
                },
            }
        }, {
            title: "下拉树",
            desc: "需要使用selectType指定下拉类型，treeData指定树的数据，nodeKey指定值的key",
            codeConfig: {
                codeEditorHeight: "550px",
                codeComponent: {
                    template: "<tong-select :value.sync='value' :multiple='true' :nodeKey='nodeKey'  selectType='tree' :treeData='treeData' />",
                    data() {
                        return {
                            value: ["1-1-1"],
                            nodeKey: 'myId',//唯一
                            treeData: [{
                                label: "一级 1",
                                myId: "1",
                                children: [{
                                    label: "二级 1-1",
                                    myId: "1-1",
                                    children: [{
                                        label: "三级 1-1-1",
                                        myId: "1-1-1",
                                    }]
                                }]
                            }, {
                                label: "二级 1",
                                myId: "2",
                                disabled: true,//禁用在多选树才生效
                            }]
                        }
                    },
                },
            }
        }, {
            title: "父节点可以选中的下拉树，只支持单选",
            desc: "配置checkOnClickNode=true",
            codeConfig: {
                codeEditorHeight: "550px",
                codeComponent: {
                    template: "<tong-select :value.sync='value' :multiple='false' :checkOnClickNode='true' :nodeKey='nodeKey'  selectType='tree' :treeData='treeData' />",
                    data() {
                        return {
                            value: "1-1-1",
                            nodeKey: 'myId',//唯一
                            treeData: [{
                                label: "一级 1",
                                myId: "1",
                                children: [{
                                    label: "二级 1-1",
                                    myId: "1-1",
                                    children: [{
                                        label: "三级 1-1-1",
                                        myId: "1-1-1",
                                    }]
                                }]
                            }, {
                                label: "二级 1",
                                myId: "2",
                                disabled: true,//禁用在多选树才生效
                            }]
                        }
                    },
                },
            }
        }, {
            title: "特殊模式1",
            desc: "每个根节点只能单选的多选，有点绕，但是你品",
            codeConfig: {
                codeEditorHeight: "950px",
                codeComponent: {
                    template: `<tong-select 
        :value.sync='value' 
        :multiple='multiple'
        :selectType='selectType'
        :clearable='clearable'
        :filterable='filterable'
        :nodeKey='nodeKey'
        :mode='mode'
        :treeData='treeData'
    />`,
                    data() {
                        return {
                            value: ['1-1-2'],
                            multiple: true,
                            selectType: "tree",
                            clearable: true,
                            filterable: true,
                            nodeKey: 'myId',
                            mode: "1", //必须入
                            treeData: [{
                                label: "一级 1",
                                myId: "1",
                                children: [{
                                    label: "二级 1-1",
                                    myId: "1-1",
                                    children: [{
                                        label: "三级 1-1-1",
                                        myId: "1-1-1",
                                        disabled: true
                                    }, {
                                        label: "三级 1-1-2",
                                        myId: "1-1-2",
                                    }]
                                }]
                            }, {
                                label: "二级",
                                myId: "2",
                                children: [
                                    {
                                        label: "二级-1",
                                        myId: "2-1",
                                    }, {
                                        label: "二级-2",
                                        myId: "2-2",
                                    }, {
                                        label: "二级-3",
                                        myId: "2-3",
                                    }, {
                                        label: "二级-4",
                                        myId: "2-4",
                                    }, {
                                        label: "二级-5",
                                        myId: "2-5",
                                    }
                                ]
                            }, {
                                label: "三级",
                                myId: "3",
                            }, {
                                label: "四级",
                                myId: "4",
                            }]
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
                    param: "value",
                    explain: "使用value.sync双向绑定",
                    type: "string",
                }, {
                    param: "selectType",
                    type: "string",
                    explain: "tree表示下拉树，不传则是普通下拉",
                }, {
                    param: "treeData",
                    explain: "selectType===tree的时候需要设置",
                    type: "array",
                    defaultValue: "[ ]"
                }, {
                    param: "checkOnClickNode",
                    explain: '下拉树的父节点是否可以点击，支持单选',
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "options",
                    explain: "普通下拉项",
                    type: "array",
                    defaultValue: "[ ]"
                }, {
                    param: "labelKey",
                    explain: "普通下拉label使用的字段名",
                    type: "string",
                    defaultValue: "label"
                }, {
                    param: "valueKey",
                    explain: "普通下拉value使用的字段名",
                    type: "string",
                    defaultValue: "value"
                }, {
                    param: "nodeKey",
                    explain: "下拉树的key",
                    type: "string",
                    defaultValue: "value"
                }, {
                    param: "expandAll",
                    explain: "是否展开下拉树",
                    type: "boolean",
                    defaultValue: "true"
                }, {
                    param: "defaultProps",
                    explain: "配置树文本，children，复选框禁用的字段",
                    type: "object",
                    defaultValue: "{label:'label',children:'children',disabled:'disabled'}"
                }, {
                    param: "nodeClick",
                    explain: "节点点击回调的方法名",
                    type: "string",
                    defaultValue: "nodeClick",
                    params: "(data,node)"
                }, {
                    param: "placeholder",
                    type: "string",
                }, {
                    param: "disabled",
                    type: "boolean",
                    explain: "禁用",
                    defaultValue: "false"
                }, {
                    param: "filterable",
                    type: "boolean",
                    explain: "过滤",
                    defaultValue: "false"
                },{
                    param: "allowCreate",
                    type: "boolean",
                    explain: "是否支持创建？必须和filterable===true同时使用才会生效",
                    defaultValue: "false"
                }, {
                    param: "checkStrictly",
                    type: "boolean",
                    explain: "在显示复选框的情况下，是否严格的遵循父子不互相关联的做法",
                    defaultValue: "false"
                }, {
                    param: "clearable",
                    type: "boolean",
                    explain: "清空",
                    defaultValue: "false"
                }, {
                    param: "multiple",
                    type: "boolean",
                    explain: "多选(树多选的时候有复选框，树特殊模式除外)",
                    defaultValue: "false"
                }, {
                    param: "multipleLimit",
                    type: "number",
                    explain: "多选的个数限制",
                    defaultValue: "0"
                }, {
                    param: "mode",
                    explain: "不符合常理的特殊模式，使用需谨慎",
                    values: "1"
                },
                {
                    param: "dropdownFilter",
                    explain: "是否开启下拉框中的搜索功能",
                    defaultValue: "false"
                }
            ]
        }, {
            modelType: "eventModel",
            desc: "样例:<tong-select @tongSelectChange='tongSelectChange' />",
            listData: [
                {
                    name: "tongSelectChange",
                    explain: `下拉值改变的回调`,
                    param: "(value)",
                },{
                    name: "visible-change",
                    explain: `下拉框展开收起回调，true表示展开，false表示收起`,
                    param: "(value)",
                }
            ]
        },{
            modelType: "slotModel",
            desc: "样例见可编辑下拉组件",
            listData: [
                {
                    name: "—",
                    explain: `Option 组件列表`,
                    param: "",
                },{
                    name: "prefix",
                    explain: `Select 组件头部内容`,
                    param: "",
                }
            ]
        }
    ]
}