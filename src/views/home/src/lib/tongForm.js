module.exports = {
    menuText: "tongForm 表单",
    title: "tongForm",
    desc: "包括label，input，inputNumber，select，textarea，switch，radio，checkbox，timePicker，upload，自定义部分",
    menuOrder: 3,
    recordList: [
        {
            version: "1.1.13",
            editor: "张腾",
            time: "2021-5-28 15:00",
            contentList: [
                "去掉axiosMounted",
                "tongForm增加显隐控制",
            ]
        },
        {
            version: "1.1.3-25",
            editor: "张腾",
            time: "2021-3-15 15:00",
            contentList: [
                "tongForm增加栏对齐配置（横向row 竖向column）",
            ]
        },
        {
            version: "1.1.3-2",
            editor: "张腾",
            time: "2021-1-14 10:20",
            contentList: [
                "tongForm表单增加密码配置",
            ]
        },
        {
            version: "1.1.3-1",
            editor: "张腾",
            time: "2021-1-12 17:20",
            contentList: [
                "tongForm表单校验失败滚动到失败位置",
            ]
        },
        {
            version: "1.1.2-14",
            editor: "张腾",
            time: "2020-12-15 16:00",
            contentList: [
                "增加model显隐控制",
            ]
        },
        {
            version: "1.1.0",
            editor: "张腾",
            time: "2020-09-2 9:40",
            contentList: [
                "单选展示的文本展示使用label字段",
            ]
        },
        {
            version: "1.0.33",
            editor: "张腾",
            time: "2020-08-11 20:15",
            contentList: [
                "增加tongForm contentWidth配置",
            ]
        },
        {
            version: "1.0.31",
            editor: "张腾",
            time: "2020-07-27 10:15",
            contentList: [
                "调整说明文档",
            ]
        }
    ],

    exampleList: [{
        title: "常用表单",
        codeConfig: {
            codeEditorHeight: "1000px",

            codeComponent: {
                template: `<div>
        <tong-form ref='tongForm' width='600px' :formModel='formModel' itemAlign="column" :formData='formData' labelWidth='120px' labelSuffix="：">
            <span slot="label1">我是slot1</span>
            <span slot="slot16">我是slot16</span>
        </tong-form>  
    </div>`,
                data() {
                    return {
                        labelWidth: "100px",
                        formData: {
                            prop1: "prop1",
                            prop3: 0,
                            prop4: [],
                            prop8: true,
                            prop9: "value1",
                            prop10: "value1",
                            prop16: "prop16",
                            prop17: "1",
                            prop18: ""
                        },
                        formModel: [
                            {
                                label: "label1",
                                prop: "prop1",
                                type: "",
                                //标题具名插槽
                                labelSlot: "label1",
                                //小红星（必填标识）
                                required: true,
                                contentSlot: '',
                            }, {

                                label: "label2",
                                prop: "prop2",
                                type: "input",
                                placeholder: "",
                                required: true,

                                config: {
                                    type: "password",
                                    showPassword: true,
                                    input: function () { }
                                },

                                //配置tips
                                tips: {  
                                    show: true,
                                    content: "<span>有bug?<br>第二行</span>",
                                    placement: "right"
                                }
                            }, {
                                label: "label3",
                                prop: "prop3",
                                type: "inputNumber",
                                defaultValue: 0,
                                required: true,

                                preText: "preText",
                                nextText: "nextText",
                                width: '100px',
                                config: {}
                            }, {
                                label: "label4",
                                prop: "prop4",
                                type: "select",
                                required: true,

                                config: {
                                    options: [1, 2],
                                    nodeKey: "value",
                                    multiple: true
                                },
                            }, {
                                label: "label5",
                                prop: "prop5",
                                type: "select",
                                required: true,

                                config: {
                                    selectType: "tree",
                                    treeData: [
                                        {
                                            label: "label1",
                                            children: [
                                                {
                                                    label: "label1-1"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }, {
                                label: "label6",
                                prop: "prop6",
                                type: "input",

                                config: {
                                    type: "textarea",
                                    showWordLimit: true,
                                    maxlength: 100
                                },

                                validate: function (rule, value, callback) { }
                            }, {
                                label: "label7",
                                prop: "prop7",
                                type: "input",

                                config: {
                                    type: "textarea",
                                    showWordLimit: true,
                                    maxlength: 100,
                                    disabled: true
                                },
                                tips: {
                                    show: true,
                                    imgUrl: "el-icon-question",
                                    content: "<span>有bug?<br>第二行</span>",
                                    placement: "right"
                                }
                            }, {
                                label: "label8",
                                prop: "prop8",
                                type: "switch",
                            }, {
                                label: "label9",
                                prop: "prop9",
                                type: "radio",
                                show: true,
                                childComponent: "el-radio",
                                config: {
                                    disabled: false,
                                    options: [{ label: "label1", value: "value1" }, { label: "label2", value: "value2" }, { label: "label3", value: "value3", disabled: true }]
                                },
                            }, {
                                label: "label10",
                                prop: "prop10",
                                type: "radio",
                                childComponent: "el-radio-button",
                                config: {
                                    disabled: false,
                                    options: [{ label: "label1", value: "value1" }, { label: "label2", value: "value2" }, { label: "label3", value: "value3", disabled: true }]
                                },
                            }, {
                                label: "label11",
                                prop: "prop11",
                                type: "checkbox",
                                defaultValue: [],
                                config: {
                                    options: [{ label: "label1", value: "value1" }, { label: "label2", value: "value2" }, { label: "label3", value: "value3", disabled: true }]
                                }
                            }, {
                                label: "label12",
                                prop: "prop12",
                                type: "timePicker",
                            }, {
                                label: "label13",
                                prop: "prop13",
                                type: "datePicker"
                            }, {
                                label: "label14",
                                prop: "prop14",
                                type: "datePicker",
                                config: {
                                    type: "month",
                                    placeholder: "请选择月份"
                                }
                            }, {
                                label: "label15",
                                prop: "prop15",
                                type: "datePicker",
                                width: "250px",
                                config: {
                                    type: "daterange",
                                }
                            }, {
                                label: "使用插槽",
                                prop: "prop16",
                                contentSlot: "slot16",
                            }, {
                                label: "使用render",
                                prop: "prop17",
                                required: true,
                                render(h, formData, value) {
                                    return h('el-input', {
                                        attrs: {
                                            size: "normal"
                                        },
                                        props: {
                                            value,
                                        },
                                        on: {
                                            input: (newValue) => {
                                                this.$emit("input", newValue)
                                            }
                                        }
                                    })
                                }
                            }, {
                                label: "label18",
                                prop: "prop18",
                                type: "upload",
                                required: true,
                                config: {
                                    test: "1",
                                    onChange() { }
                                }
                            }
                        ],
                    }
                },
            }
        }
    }, {
        title: "表单项可以互相显隐动态控制",
        desc:"配置config中的方法，处理show的值即可(注意方法的this指向问题)",
        codeConfig: {
            codeEditorHeight: "1000px",

            codeComponent: {
                template: `<div>
        <tong-form ref='tongForm' width='600px' :formModel='formModel' itemAlign="column" :formData='formData' labelWidth='100px'>
            <span slot="label1">我是slot1</span>
            <span slot="slot16">我是slot16</span>
        </tong-form>  
    </div>`,
                data() {
                    return {
                        labelWidth: "100px",
                        formData: {
                            prop1: "prop1",
                            prop2: true,
                            prop3: "value1",
                        },
                        formModel: [{
                            label: "label1",
                            prop: "prop1",
                            type: "input",
                            required: true,
                        }, {
                            label: "控制label3显隐",
                            prop: "prop2",
                            type: "switch",
                            config: {
                                switchChange: function (formData, item, value) {
                                    this.formModel[2].show = value
                                }.bind(this)
                            }
                        }, {
                            label: "label3",
                            prop: "prop3",
                            type: "radio",
                            show: true,
                            childComponent: "el-radio",
                            config: {
                                disabled: false,
                                options: [{ label: "label1", value: "value1" }, { label: "label2", value: "value2" }, { label: "label3", value: "value3", disabled: true }]
                            },
                        },
                        ],
                    }
                },
            }
        }
    }],

    tableList: [
        {
            modelType: "propModel",
            listData: [
                {
                    param: "formModel",
                    explain: "表单的模板，详细见下表",
                    type: "array",
                    defaultValue: "[ ]"
                }, {
                    param: "formData",
                    explain: "表单的数据",
                    type: "object",
                    defaultValue: "{ }"
                }, {
                    param: "width",
                    explain: "form的宽度",
                    type: "string",
                }, {
                    param: "itemAlign",
                    explain: "栏对齐方式",
                    type: "string",
                    defaultValue: "row",
                    values: "row | column"
                }, {
                    param: "labelWidth",
                    explain: "label宽度",
                    type: "string",
                    defaultValue: "100px"
                }, {
                    param: "labelSuffix",
                    explain: "表单域标签的后缀",
                    type: "string",
                    defaultValue: "-"
                }, {
                    param: "labelShow",
                    explain: "label显示",
                    type: "boolean",
                    defaultValue: "true"
                },
            ]
        }, {
            modelType: "propModel",
            title: "formModel详细介绍",
            desc: "设置不同类型栏",
            listData: [
                {
                    param: "label",
                    explain: "标题",
                    type: "string",
                }, {
                    param: "prop",
                    explain: "绑定的key",
                    type: "string",
                },{
                    param: "show",
                    explain: "是否展示model",
                    type: "boolean",
                }, {
                    param: "defaultValue",
                    explain: "初始值，[]，{}",
                    type: "string | object | array",
                }, {
                    param: "contentWidth",
                    explain: "formItem的宽度(包括label)",
                    type: "string",
                }, {
                    param: "type",
                    explain: "类型",
                    type: "string",
                    defaultValue: "label",
                    values: "label，input，inputNumber，select，switch，radio，checkbox，timePicker，datePicker，upload"
                }, {
                    param: "placeholder",
                    explain: "",
                    type: "string",
                }, {
                    param: "required",
                    explain: "是否必填 ==> 小红心",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "validate",
                    explain: "自定义校验规则",
                    type: "function",
                    defaultValue: "function(rule, value, callback){}"
                }, {
                    param: "labelSlot",
                    explain: "标题内容的具名插槽的名称",
                    type: "string",
                }, {
                    param: "render",
                    explain: `自定义内容，在render中this.$emit("input",newPropValue)将新值传回，实现render部分的双向绑定`,
                    type: "render:function(h,formData,value){}",

                }, {
                    param: " ",
                    explain: "tips专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "tips.show",
                    explain: "是否显示帮助信息 就是 ? ",
                    type: "string",
                }, {
                    param: "tips.content",
                    explain: "tip的内容，接受html片段，如<span>测试问题<br>第二行</span>",
                    type: "string",
                }, {
                    param: "tips.placement",
                    explain: "tip位置",
                    type: "string",
                    defaultValue: "right"
                }, {
                    param: " ",
                    explain: "input专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "config.type",
                    explain: "input类型",
                    type: "string",
                    values: "textarea"
                }, {
                    param: "config.readonly",
                    explain: "input只读",
                    type: "boolean",
                    defaultValue: "false",
                }, {
                    param: "config.clearable",
                    explain: "是否展示情况图标",
                    type: "boolean",
                    defaultValue: "false",
                }, {
                    param: "config.disabled",
                    explain: "input禁用",
                    type: "boolean",
                    defaultValue: "false",
                }, {
                    param: "config.showWordLimit	",
                    explain: "是否展示字数限制，textarea专用",
                    type: "boolean",
                    defaultValue: "false",
                }, {
                    param: "config.rows	",
                    explain: "行数，textarea专用",
                    type: "string",
                    defaultValue: "5",
                }, {
                    param: "config.maxlength	",
                    explain: "输入内容最大长度",
                    type: "string | number",
                    defaultValue: "null",
                }, {
                    param: "config.input",
                    explain: "input事件回调方法",
                    type: "function",
                }, {
                    param: "config.blur",
                    explain: "blur事件回调方法",
                    type: "function",
                }, {
                    param: "config.focus",
                    explain: "focus事件回调方法",
                    type: "function",
                }, {
                    param: " ",
                    explain: "inputNumber专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "preText",
                    explain: "前文本",
                    type: "string",
                }, {
                    param: "nextText",
                    explain: "后文本",
                    type: "string",
                }, {
                    param: "width",
                    type: "string",
                    defaultValue: "100px"
                }, {
                    param: "config.step",
                    explain: "步进",
                    type: "number",
                    defaultValue: "1"
                }, {
                    param: "config.stepStrictly",
                    explain: "输入内容是否为step的倍数",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "config.disabled",
                    explain: "禁用",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "config.min",
                    explain: "最小值",
                    type: "number",
                    defaultValue: "0"
                }, {
                    param: "config.max",
                    explain: "最大值",
                    type: "number",
                    defaultValue: "infinity"
                }, {
                    param: "config.controlsPosition",
                    explain: "操作按钮的位置",
                    type: "string",
                    values: "right",
                    defaultValue: "right"
                }, {
                    param: "config.input",
                    explain: "input事件回调方法",
                    type: "function",
                }, {
                    param: "config.blur",
                    explain: "blur事件回调方法",
                    type: "function",
                }, {
                    param: "config.focus",
                    explain: "focus事件回调方法",
                    type: "function",
                }, {
                    param: " ",
                    explain: "select专有配置,支持tongSelect配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: " ",
                    explain: "switch专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "config.activeColor",
                    explain: "选中颜色",
                    type: "string",
                    defaultValue: "gold"
                }, {
                    param: "config.inactiveColor",
                    type: "string",
                    defaultValue: "#ff4949"
                }, {
                    param: "config.activeText",
                    explain: "选中文本",
                    type: "string",
                }, {
                    param: "config.inactiveText",
                    type: "string",
                }, {
                    param: "config.disabled",
                    explain: "禁用",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: " ",
                    explain: "radio专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "config.childComponent",
                    explain: "子组件",
                    type: "string",
                    values: "el-radio，el-radio-button",
                    defaultValue: "el-radio"
                }, {
                    param: "config.disabled",
                    explain: "禁用",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "config.options",
                    type: "array",
                    defaultValue: "[ ]"
                }, {
                    param: " ",
                    explain: "checkbox专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "config.disabled",
                    explain: "禁用",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "config.options",
                    type: "array",
                    defaultValue: "[ ]"
                }, {
                    param: " ",
                    explain: "timePicker专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "width",
                    explain: "宽度",
                    type: "string",
                }, {
                    param: "config.readonly",
                    explain: "禁用",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "config.disabled",
                    explain: "禁用",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "config.valueFormat",
                    explain: "value的格式，参考ele",
                    type: "string",
                    defaultValue: "yyyy-MM-dd HH:mm:ss"
                }, {
                    param: "config.pickerOptions",
                    explain: "参考ele-pickerOptions",
                }, {
                    param: " ",
                    explain: "datePicker专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "width",
                    explain: "宽度",
                    type: "string",
                }, {
                    param: "config.readonly",
                    explain: "禁用",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "config.disabled",
                    explain: "禁用",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "config.type",
                    explain: "",
                    type: "string",
                    values: "year/month/date/dates/week/datetime/datetimerange/daterange/monthrange",
                    defaultValue: "date"
                }, {
                    param: "config.placeholder",
                    type: "string",
                }, {
                    param: "config.rangeSeparator",
                    type: "string",
                    defaultValue: "至"
                }, {
                    param: "config.startPlaceholder",
                    type: "string",
                    defaultValue: "开始日期"
                }, {
                    param: "config.endPlaceholder",
                    type: "string",
                    defaultValue: "结束日期"
                }, {
                    param: " ",
                    explain: "upload专有配置，参考tongUpload属性配置",
                    spans: [[], [1, 4], [], [], []]
                }
            ]
        }, {
            modelType: "eventModel",
            listData: [
                {
                    name: "input",
                    explain: "input事件",
                    param: "(formData,item,value)",
                }, {
                    name: "blur",
                    explain: "blur事件",
                    param: "(formData,item,value)",
                }, {
                    name: "focus",
                    explain: "focus事件",
                    param: "(formData,item,value)",
                }, {
                    name: "selectChange",
                    explain: "下拉change事件",
                    param: "(formData,item,value)",
                }, {
                    name: "switchChange",
                    explain: "开关change事件",
                    param: "(formData,item,value)",
                }, {
                    name: "radioChange",
                    explain: "单选change事件",
                    param: "(formData,item,value)",
                }, {
                    name: "checkboxChange",
                    explain: "复选change事件",
                    param: "(formData,item,value)",
                }, {
                    name: "timePickerChange",
                    explain: "timePicker change事件",
                    param: "(formData,item,value)",
                }, {
                    name: "timePickerBlur",
                    explain: "timePicker blur事件",
                    param: "(formData,item,value)",
                }, {
                    name: "timePickerFocus",
                    explain: "timePicker focus事件",
                    param: "(formData,item,value)",
                }, {
                    name: "datePickerChange",
                    explain: "datePicker change事件",
                    param: "(formData,item,value)",
                }, {
                    name: "datePickerBlur",
                    explain: "datePicker blur事件",
                    param: "(formData,item,value)",
                }, {
                    name: "datePickerFocus",
                    explain: "datePicker focus事件",
                    param: "(formData,item,value)",
                },
            ]
        }, {
            modelType: "interfaceModel",
            desc: `<tong-form ref="tongForm" />`,
            listData: [
                {
                    name: "validate",
                    explain: "使用实例的方法校验所有数据",
                    example: "this.$refs.tongForm.validate(valid=>{})"
                }, {
                    name: "validateField",
                    explain: "校验prop参数的格式，prop可以单个string或者多个string的数组",
                    example: "this.$refs.tongForm.validateField(prop)",
                    param: "(prop)"
                }, {
                    name: "resetFields",
                    explain: "重置报错信息",
                    example: "this.$refs.tongForm.resetFields()"
                }, {
                    name: "getFormData",
                    explain: "获取输入的表单数据对象",
                    example: "this.$refs.tongForm.getFormData()"
                }
            ]
        }, {
            modelType: "slotModel",
            listData: [
                {
                    name: "slot",
                    explain: "slot是对应formModel中的labelSlot或者contentSlot值，slot-scope='{tongFormData,item,value}'",
                }
            ]
        },
    ]
}
