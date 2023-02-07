module.exports = {
    title: "tongInput",          //大标题
    desc: "输入框，计数器", //大标题说明
    menuOrder:1,
    recordList: [
        {
            version:"1.2.1",
            editor:"张腾",
            time:"2021年9月13日09:33:41",
            contentList:[
                "tongInput分页增加总条数配置"
            ]
        },
        {
            version: "1.1.1-9",
            editor: "张腾",
            time: "2020-10-21",
            contentList: [
                "调整inputNumber双向绑定写法",
            ]
        },
        {
            version: "1.1.2",
            editor: "张腾",
            time: "2020-09-10",
            contentList: [
                "调整prop.value被直接重写的警告",
                "新增tongInput",
            ]
        }
    ],

    exampleList: [
        {
            title: "普通输入框",
            desc: "传入type='input' 或者不传type",

            codeConfig: {
                codeEditorHeight: "300px",
                codeComponent: {
                    template: "<tongInput v-model='value' :width='width' :placeholder='placeholder' />",
                    data() {
                        return {
                            value: '',
                            width: "240px",
                            placeholder: '普通输入框',
                        }
                    },
                },
            },
        },

        {
            title: "禁用状态",
            desc: "通过 disabled 属性指定是否禁用 input 组件",
            codeConfig: {
                codeEditorHeight: "300px",
                codeComponent: {
                    template: "<tongInput v-model='value' :width='width' :placeholder='placeholder' :disabled='disabled' />",
                    data() {
                        return {
                            value: '',
                            width: "240px",
                            placeholder:'可禁用的普通输入框',
                            disabled:true,
                        }
                    },
                },
            }
        },

        {
            title: "可清空",
            desc: "使用clearable属性即可得到一个可清空的输入框",
            codeConfig: {
                codeEditorHeight: "300px",
                codeComponent: {
                    template: "<tongInput v-model='value' :width='width' :placeholder='placeholder' clearable />",
                    data() {
                        return {
                            value: '',
                            width: "240px",
                            placeholder:'可清空的普通输入框'
                        }
                    },
                },
            }
        },

        {
            title: "密码框",
            desc: "使用show-password属性即可得到一个可切换显示隐藏的密码框",
            codeConfig: {
                codeEditorHeight: "300px",
                codeComponent: {
                    template: "<tongInput v-model='value' :width='width' :placeholder='placeholder' show-password />",
                    data() {
                        return {
                            value: '',
                            width: "240px",
                            placeholder:'请输入密码'
                        }
                    },
                },
            }
        },

        {
            title: "文本域",
            desc: "用于输入多行文本信息，通过将 type 属性的值指定为 textarea。文本域高度可通过 rows 属性控制",
            codeConfig: {
                codeEditorHeight: "300px",
                codeComponent: {
                    template: "<tongInput v-model='value' :width='width' :placeholder='placeholder' :rows='row' type='textarea' />",
                    data() {
                        return {
                            value: '',
                            width: "240px",
                            placeholder:'请输入内容',
                            row:3
                        }
                    },
                },
            }
        },
        {
            title: "输入长度限制",
            desc: "在使用 maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。",
            codeConfig: {
                codeEditorHeight: "300px",
                codeComponent: {
                    template: "<tongInput v-model='value' :width='width' :placeholder='placeholder'  :maxlength='maxlength' :rows='row' show-word-limit autosize  type='textarea' />",
                    data() {
                        return {
                            value: '',
                            width: "240px",
                            placeholder:'请输入内容',
                            row:1,
                            maxlength:100,
                        }
                    },
                },
            }
        },
        {
            title: "带提示内容的输入框",
            desc: "传入type='input'，inputType='el-autocomplete'",

            codeConfig: {
                codeEditorHeight: "450px",
                codeComponent: {
                    template: "<tongInput v-model='value' :width='width' :placeholder='placeholder' :inputType='inputType' :fetch-suggestions='querySearch' />",
                    data() {
                        return {
                            value: '',
                            width: "240px",
                            placeholder: '带提示内容的输入框',
                            inputType: "el-autocomplete",
                        }
                    },
                    methods: {
                        querySearch(queryString, cb) {
                            cb([{ value: "可配置提示内容" }])
                        }
                    },
                },
            },
        }, {
            title: "带提示内容的输入框 (前端控制分页)",
            desc: "传入type='input' type='autocomplete'",
            codeConfig: {
                codeEditorHeight: "450px",
                codeComponent: {
                    template: "<tongInput v-model='value'  :width='width' :totalShow='true' :isEmptySearch='false' :placeholder='placeholder' :inputType='inputType' :fetch-suggestions='querySearch' />",
                    data() {
                        return {
                            value: '1',
                            width: "240px",
                            placeholder: '带提示内容的输入框（前端控制分页）',
                            inputType: "autocomplete",
                        }
                    },
                    methods: {
                        querySearch({queryString,pageInfo}, cb) {
                            if(queryString==1){
                                setTimeout(()=>{
                                    cb(Array(200).fill("").map((val,i)=>({value:`${i}`})),{total:2001})
                                },500)
                            }else{
                                setTimeout(()=>{
                                    cb(Array(200).fill("").map((val,i)=>({value:`${i}`})),{total:200})
                                },500)
                            }

                        }
                    },
                },
            },
        },{
            title: "计数器",
            desc: "使用type='inputNumber'",
            codeConfig: {
                codeEditorHeight: "300px",
                codeComponent: {
                    template: "<tongInput v-model='value' :width='width' type='inputNumber' />",
                    data() {
                        return {
                            value: '',
                            width: "80px",
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
                    param: "type",
                    explain: "输入框类型",
                    type: "string",
                    values: "input | textarea(文本域) | inputNumber(计数器)",
                    defaultValue: "input",
                },
                {
                    param:"disabled",
                    explain:"禁用",
                    type:"boolean",
                    defaultValue: "false",
                },
                {
                    param:"clearable",
                    explain:"是否可清空",
                    type:"boolean",
                    defaultValue: "false",
                },
                {
                    param:"show-password",
                    explain:"是否显示切换密码图标",
                    type:"boolean",
                    defaultValue: "false",
                },
                {
                    param: " ",
                    explain: "input专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "inputType",
                    explain: "input子类型",
                    type: "string",
                    values: "el-autocomplete带提示内容的输入框；el-input普通输入输入框；autocomplete带提示内容的输入框（前端模拟分页）",
                    defaultValue: "el-input",
                }, {
                    param: "fetch-suggestions",
                    explain: "自定义提示方法，两个参数(queryString,cb)",
                    type: "function",
                    values: ""
                },{
                    param:"valueKey",
                    explain:"自定义提示的配置项",
                    type:"string",
                    defaultValue: "value",
                },{
                    param: "fetch-suggestions --分页",
                    explain: "自定义提示方法，两个参数({queryString,pageInfo},cb)",
                    type: "function",
                    values: ""
                },{
                    param:"totalShow -- 分页",
                    explain:"是否显示总条数",
                    type:"boolean",
                    defaultValue:"false"
                },{
                    param:"isEmptySearch -- 分页",
                    explain:"为空时是否搜索",
                    type:"boolean",
                    defaultValue:"false"
                },{
                    param:"emptyText -- 分页",
                    explain:"空文本",
                    type:"string",
                    defaultValue:"暂无数据"
                },{
                    param: " ",
                    explain: "inputNumber专有配置",
                    spans: [[], [1, 4], [], [], []]
                },{
                    param:"width",
                    explain:"计数器宽度",
                    type:"string",
                    defaultValue: "100px",
                },{
                    param:"size",
                    explain:"计数器尺寸",
                    type:"string",
                    defaultValue: "mini",
                },{
                    param:"preText",
                    explain:"计数器前文本",
                    type:"string",
                    defaultValue: "",
                },{
                    param:"nextText",
                    explain:"计数器后文本",
                    type:"string",
                    defaultValue: "",
                },
            ]
        },{
            modelType: "eventModel",
            desc: "样例:<tong-table @doInputBlur='doInputFocus' />",
            listData:[
                {
                    name:"input",
                    explain:"仅支持input类型",
                    param:"(value)"
                },{
                    name:"focus",
                    param:"(event)"
                },{
                    name:"blur",
                    param:"(event)"
                },{
                    name:"change",
                    param:"(currentValue, oldValue)"
                }
            ]
        }
    ],
}
