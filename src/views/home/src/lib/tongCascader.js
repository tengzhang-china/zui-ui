module.exports = {
    title: "tongCascader",
    desc: "级联选择器",
    recordList: [
        {
            version: "1.0.0",
            editor: "黎其铮",
            time: "2021-01-26 10:15",
            contentList: [
                "新增组件",
            ]
        }],

    exampleList: [
        {
            title: "基础用法",
            desc: "使用:value.sync='value'进行双向绑定",
            codeConfig: {
                codeEditorHeight: "400px",
                codeComponent: {
                    template: `<tong-cascader  @updateChange="updateChange" :value.sync='value' :options='options'></tong-cascader>`,
                    data() {
                        return {
                            disabled: true,
                            value: ["zhinan","daohang","cexiangdaohang"],
                            options: [{
                                value: 'zhinan',
                                label: '指南',
                                children: [{
                                    value: 'shejiyuanze',
                                    label: '设计原则',
                                    children: [{
                                    value: 'yizhi',
                                    label: '一致',
                                    disabled: true,
                                    }, {
                                    value: 'fankui',
                                    label: '反馈'
                                    }]
                                }, {
                                    value: 'daohang',
                                    label: '导航',
                                    children: [{
                                    value: 'cexiangdaohang',
                                    label: '侧向导航'
                                    }, {
                                    value: 'dingbudaohang',
                                    label: '顶部导航'
                                    }]
                                }]
                                }, {
                                value: 'zujian',
                                label: '组件',
                                children: [{
                                    value: 'basic',
                                    label: 'Basic',
                                    children: [{
                                    value: 'layout',
                                    label: 'Layout 布局'
                                    }]
                                }, {
                                    value: 'form',
                                    label: 'Form',
                                    children: [{
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                    }, {
                                    value: 'form',
                                    label: 'Form 表单'
                                    }]
                                }]
                                }, {
                                value: 'ziyuan',
                                label: '资源',
                                children: [{
                                    value: 'axure',
                                    label: 'Axure Components'
                                }, {
                                    value: 'sketch',
                                    label: 'Sketch Templates'
                                }, {
                                    value: 'jiaohu',
                                    label: '组件交互文档'
                                }]
                            }]
                        }
                    },
                    methods: {
                        updateChange(val){
                            console.log(val)
                        }
                    }
                },
            }
        },
        {
            title: "hover 触发子菜单",
            desc: "通过props.expandTrigger可以定义展开子级菜单的触发方式。",
            codeConfig: {
                codeEditorHeight: "400px",
                codeComponent: {
                    template: `<tong-cascader :showAllLevels="showAllLevels" :propsOptions="propsOptions"   :value.sync='value' :options='options' />`,
                    data() {
                        return {
                            propsOptions:{
                                expandTrigger: 'hover',
                                multiple: true,
                            },
                            collapseTags:true,
                            showAllLevels: false,
                            value: [],
                            options: [{
                                value: 'zhinan',
                                label: '指南',
                                children: [{
                                    value: 'shejiyuanze',
                                    label: '设计原则',
                                    children: [{
                                    value: 'yizhi',
                                    label: '一致'
                                    }, {
                                    value: 'fankui',
                                    label: '反馈'
                                    }]
                                }, {
                                    value: 'daohang',
                                    label: '导航',
                                    children: [{
                                    value: 'cexiangdaohang',
                                    label: '侧向导航'
                                    }, {
                                    value: 'dingbudaohang',
                                    label: '顶部导航'
                                    }]
                                }]
                                }, {
                                value: 'zujian',
                                label: '组件',
                                children: [{
                                    value: 'basic',
                                    label: 'Basic',
                                    children: [{
                                    value: 'layout',
                                    label: 'Layout 布局'
                                    }]
                                }, {
                                    value: 'form',
                                    label: 'Form',
                                    children: [{
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                    }, {
                                    value: 'form',
                                    label: 'Form 表单'
                                    }]
                                }]
                                }, {
                                value: 'ziyuan',
                                label: '资源',
                                children: [{
                                    value: 'axure',
                                    label: 'Axure Components'
                                }, {
                                    value: 'sketch',
                                    label: 'Sketch Templates'
                                }, {
                                    value: 'jiaohu',
                                    label: '组件交互文档'
                                }]
                            }]
                        }
                    },
                    methods: {
                        updateChange(val){
                            console.log(val)
                        }
                    }
                },
            }
        },
        {
            title: "多选折叠tag",
            desc: "多选模式后，默认情况下会展示所有已选中的选项的Tag，你可以使用collapseTags来折叠Tag",
            codeConfig: {
                codeEditorHeight: "400px",
                codeComponent: {
                    template: `<tong-cascader :debounce="debounce" :collapseTags="collapseTags" :propsOptions="propsOptions"   :value.sync='value' :options='options' />`,
                    data() {
                        return {
                            propsOptions:{
                                expandTrigger: 'click',
                                multiple: true,
                                checkStrictly: true 
                            },
                            debounce:600,
                            collapseTags:true,
                            value: [],
                            options: [{
                                value: 'zhinan',
                                label: '指南',
                                children: [{
                                    value: 'shejiyuanze',
                                    label: '设计原则',
                                    children: [{
                                    value: 'yizhi',
                                    label: '一致'
                                    }, {
                                    value: 'fankui',
                                    label: '反馈'
                                    }]
                                }, {
                                    value: 'daohang',
                                    label: '导航',
                                    children: [{
                                    value: 'cexiangdaohang',
                                    label: '侧向导航'
                                    }, {
                                    value: 'dingbudaohang',
                                    label: '顶部导航'
                                    }]
                                }]
                                }, {
                                value: 'zujian',
                                label: '组件',
                                children: [{
                                    value: 'basic',
                                    label: 'Basic',
                                    children: [{
                                    value: 'layout',
                                    label: 'Layout 布局'
                                    }]
                                }, {
                                    value: 'form',
                                    label: 'Form',
                                    children: [{
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                    }, {
                                    value: 'form',
                                    label: 'Form 表单'
                                    }]
                                }]
                                }, {
                                value: 'ziyuan',
                                label: '资源',
                                children: [{
                                    value: 'axure',
                                    label: 'Axure Components'
                                }, {
                                    value: 'sketch',
                                    label: 'Sketch Templates'
                                }, {
                                    value: 'jiaohu',
                                    label: '组件交互文档'
                                }]
                            }]
                        }
                    },
                    methods: {
                        updateChange(val){
                            console.log(val)
                        }
                    }
                },
            }
        },
        {
            title: "选任意一级",
            desc: "在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。启用该功能后，可让父子节点取消关联，选择任意一级选项。",
            codeConfig: {
                codeEditorHeight: "400px",
                codeComponent: {
                    template: `<tong-cascader :filterable="filterable" :propsOptions="propsOptions"   :value.sync='value' :options='options' />`,
                    data() {
                        return {
                            propsOptions:{
                                expandTrigger: 'click',
                                checkStrictly: true 
                            },
                            filterable: true,
                            value: [],
                            options: [{
                                value: 'zhinan',
                                label: '指南',
                                children: [{
                                    value: 'shejiyuanze',
                                    label: '设计原则',
                                    children: [{
                                    value: 'yizhi',
                                    label: '一致'
                                    }, {
                                    value: 'fankui',
                                    label: '反馈'
                                    }]
                                }, {
                                    value: 'daohang',
                                    label: '导航',
                                    children: [{
                                    value: 'cexiangdaohang',
                                    label: '侧向导航'
                                    }, {
                                    value: 'dingbudaohang',
                                    label: '顶部导航'
                                    }]
                                }]
                                }, {
                                value: 'zujian',
                                label: '组件',
                                children: [{
                                    value: 'basic',
                                    label: 'Basic',
                                    children: [{
                                    value: 'layout',
                                    label: 'Layout 布局'
                                    }]
                                }, {
                                    value: 'form',
                                    label: 'Form',
                                    children: [{
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                    }, {
                                    value: 'form',
                                    label: 'Form 表单'
                                    }]
                                }]
                                }, {
                                value: 'ziyuan',
                                label: '资源',
                                children: [{
                                    value: 'axure',
                                    label: 'Axure Components'
                                }, {
                                    value: 'sketch',
                                    label: 'Sketch Templates'
                                }, {
                                    value: 'jiaohu',
                                    label: '组件交互文档'
                                }]
                            }]
                        }
                    },
                    methods: {
                        updateChange(val){
                            console.log(val)
                        }
                    }
                },
            }
        },
        {
            title: "级联面板",
            desc: "",
            codeConfig: {
                codeEditorHeight: "400px",
                codeComponent: {
                    template: `<tong-cascader :showAllLevels="showAllLevels" @updateChange="updateChange" :mode="mode" :collapseTags="collapseTags" :propsOptions="propsOptions"   :value.sync='value' :options='options' />`,
                    data() {
                        return {
                            propsOptions:{
                                expandTrigger: 'click',
                                multiple: true,
                                checkStrictly: true 
                            },
                            mode: 1,
                            showAllLevels:false,
                            collapseTags:true,
                            value: [],
                            options: [{
                                value: 'zhinan',
                                label: '指南',
                                children: [{
                                    value: 'shejiyuanze',
                                    label: '设计原则',
                                    children: [{
                                    value: 'yizhi',
                                    label: '一致'
                                    }, {
                                    value: 'fankui',
                                    label: '反馈'
                                    }]
                                }, {
                                    value: 'daohang',
                                    label: '导航',
                                    children: [{
                                    value: 'cexiangdaohang',
                                    label: '侧向导航'
                                    }, {
                                    value: 'dingbudaohang',
                                    label: '顶部导航'
                                    }]
                                }]
                                }, {
                                value: 'zujian',
                                label: '组件',
                                children: [{
                                    value: 'basic',
                                    label: 'Basic',
                                    children: [{
                                    value: 'layout',
                                    label: 'Layout 布局'
                                    }]
                                }, {
                                    value: 'form',
                                    label: 'Form',
                                    children: [{
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                    }, {
                                    value: 'form',
                                    label: 'Form 表单'
                                    }]
                                }]
                                }, {
                                value: 'ziyuan',
                                label: '资源',
                                children: [{
                                    value: 'axure',
                                    label: 'Axure Components'
                                }, {
                                    value: 'sketch',
                                    label: 'Sketch Templates'
                                }, {
                                    value: 'jiaohu',
                                    label: '组件交互文档'
                                }]
                            }]
                        }
                    },
                    methods: {
                        updateChange(val){
                            console.log(val)
                        }
                    }
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
                    type: "Array",
                }, {
                    param: "mode",
                    type: "Number",
                    explain: "1表示级联面板，默认下拉面板",
                }, {
                    param: "propsOptions",
                    explain: "配置属性(详见下方table属性设置)",
                    type: "Object",
                    defaultValue: "{}"
                }, {
                    param: "placeholder",
                    explain: '输入框占位文本',
                    type: "String",
                    defaultValue: ""
                }, {
                    param: "disabled",
                    explain: "是否禁用",
                    type: "Boolean",
                    defaultValue: "false"
                }, {
                    param: "showAllLevels",
                    explain: "输入框是否显示选中值的完整路径",
                    type: "Boolean",
                    defaultValue: "false"
                }, {
                    param: "collapseTags",
                    explain: "多选模式下是否折叠tag",
                    type: "Boolean",
                    defaultValue: "false"
                }, {
                    param: "filterable",
                    explain: "是否可搜索选项",
                    type: "Boolean",
                    defaultValue: "false"
                }, {
                    param: "debounce",
                    explain: "搜索关键词的去抖延迟，毫秒",
                    type: "Number",
                    defaultValue: "300"
                }
            ]
        },{
            modelType: "propModel",
            listData: [
                {
                    param: "expandTrigger",
                    explain: "次级菜单展开方式",
                    type: "string",
                    defaultValue: "click"
                },{
                    param: "multiple",
                    explain: "是否多选",
                    type: "boolean",
                    defaultValue: "false"
                },{
                    param: "checkStrictly",
                    explain: "是否严格的遵守父子节点不关联",
                    type: "boolean",
                    defaultValue: "false"
                },{
                    param: "emitPath",
                    explain: "在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值",
                    type: "boolean",
                    defaultValue: "true"
                },{
                    param: "value",
                    explain: "指定选项的值为选项对象的某个属性值",
                    type: "string",
                    defaultValue: ""
                },{
                    param: "label",
                    explain: "指定选项标签为选项对象的某个属性值",
                    type: "string",
                    defaultValue: ""
                },{
                    param:"children",
                    explain: "指定选项的子选项为选项对象的某个属性值",
                    type: "string",
                    defaultValue: ""
                },{
                    param:"disabled",
                    explain: "指定选项的禁用为选项对象的某个属性值",
                    type: "boolean",
                    defaultValue: "false"
                },{
                    param:"leaf",
                    explain: "指定选项的叶子节点的标志位为选项对象的某个属性值",
                    type: "string",
                    defaultValue: ""
                }
            ]
        }, {
            modelType: "eventModel",
            desc: "样例:<tong-cascader @updateChange='updateChange' />",
            listData: [
                {
                    name: "updateChange",
                    explain: `下拉值改变的回调`,
                    param: "(value)",
                },
                {
                    name: "blurData",
                    explain: `失去焦点时触发`,
                    param: "(event: Event)",
                },
                {
                    name: "focusData",
                    explain: `获取焦点时触发`,
                    param: "(event: Event)",
                },
                {
                    name: "visibleChange",
                    explain: `下拉框出现/隐藏时触发`,
                    param: "(value)",
                },
                {
                    name: "removeTag",
                    explain: `在多选模式下，移除Tag时触发`,
                    param: "(value)",
                }
            ]
        }
    ]
}