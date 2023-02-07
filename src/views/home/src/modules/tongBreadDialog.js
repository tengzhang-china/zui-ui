module.exports = {
    menuText: "tongBreadDialog 多级弹框",
    menuOrder: 1,
    title: "tongBreadDialog",
    desc: "多级弹框使用一个弹框来展示，又名面包屑弹框；只能在app.vue中引入，后面就可以直接使用了",
    recordList: [
        {
            version:"1.2.1",
            editor:"张腾",
            time:"2021年9月13日09:43:22",
            contentList:[
                "调整按钮展示逻辑，增加按钮回滚方法popButtonList"
            ]
        },
        {
            version:"1.1.18",
            editor:"",
            time:"2021年7月8日09:44:29",
            contentList:[
                "修复backCallback函数不执行"
            ]
        },
        {
            version:"1.1.8",
            editor:"",
            time:"2021.4.12 11:00",
            contentList:[
                "弹框按钮禁用的颜色样式"
            ]
        },
        {
            version:"1.1.3-3",
            editor: "张腾",
            time: "2021-1-18 16:00",
            contentList:[
                "增加backCallback，点击面包屑的方法配置项"
            ]
        },
        {
            version: "1.1.2-8",
            editor: "张腾",
            time: "2020-12-1 11:00",
            contentList: [
                "增加按钮点击的promise，pending状态下按钮loading",
            ]
        },
        {
            version: "1.1.1-9",
            editor: "张腾",
            time: "2020-10-21 18:00",
            contentList: [
                "增加自定义配置项",
            ]
        },
        {
            version: "1.0.31-5",
            editor: "张腾",
            time: "2020-07-30 15:58",
            contentList: [
                "增加 您的位置：",
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
            title: "多级弹框",
            desc: "无",

            codeConfig: {
                codeEditorHeight: "1000px",
                codeComponent: {
                    template: `<div>
        <tong-bread-dialog ref="tongBreadDialog" />
        <el-button @click='showDialog'>来个框</el-button>
    </div>`,
                    methods: {
                        showDialog() {
                            const params1 = {
                                width: "600px",
                                height: "300px",
                                title: "这个是title1啊",
                                sureBtnTitle: "aaa",

                                buttonList: [
                                    {
                                        type: "primary",
                                        text: "提交",
                                        onClick() {
                                            return new Promise(resolve=>{
                                                setTimeout(()=>{
                                                    resolve(true)
                                                },1000)
                                            })
                                        }
                                    }
                                ],

                                info: { name: "zhang - 再出一个框" },

                                currentComponent: {
                                    data(){
                                        return {
                                            tableModel:[{
                                                prop: "prop1",
                                                label: "label1",
                                                width: "150px"
                                            }, {
                                                prop: "prop2",
                                                label: "label2"
                                            }, {
                                                prop: "prop3",
                                                label: "label3"
                                            }],
                                            tableData:[{prop1:"dddd"}]
                                        }
                                    },
                                    methods: {
                                        click() {
                                            const params2 = {
                                                width: "800px",
                                                height: "400px",
                                                title: "这个是title2啊",
                                                sureBtnTitle: "返回上一步",
                                                sureCallback() {
                                                    return new Promise(resolve=>{
                                                        setTimeout(()=>{
                                                            this.$store.commit("tongBreadDialog/back", 1);
                                                            this.$store.commit("tongBreadDialog/setTitle", {key:"title",value:"我是修改后的title"});
                                                            resolve(true)
                                                        },1000)
                                                    })
                                                },
                                                closeCallback(){
                                                    console.log("close")
                                                },
                                                backCallback(){
                                                    console.log("back")
                                                },
                                                currentComponent: {
                                                    render(h) {
                                                        return (<span>弹框二</span>)
                                                    },
                                                }
                                            }
                                            this.$store.commit("tongBreadDialog/show", params2); //展示第二个弹框
                                        }
                                    },
                                    render(h) {
                                        return (<div>
                                            <tong-table
                                                tableModel={this.tableModel}
                                                tableData={this.tableData}
                                            ></tong-table>
                                            <el-button style='margin-top:20px' onClick={this.click}>{this.$attrs.info.name}</el-button>
                                        </div>)
                                    },
                                }
                            }
                            this.$store.commit("tongBreadDialog/show", params1); //展示第一个弹框

                            this.$store.commit("tongBreadDialog/setButtonList", [{
                                type: "primary",
                                text: "提交11111111",
                                onClick() {
                                    return new Promise(resolve=>{
                                        setTimeout(()=>{
                                            resolve(true)
                                        },1000)
                                    })
                                }
                            }])
                        }
                    },
                },
            },

        }
    ],

    tableList: [
        {
            modelType: "interfaceModel",
            listData: [
                {
                    name: "展示弹框",
                    example: `this.$store.commit("tongBreadDialog/show",params)`,
                    param: "(params)",
                }, {
                    name: "关闭",
                    explain:"不适用底部按钮（会出现初始化闪屏），底部部分按钮 return false关闭弹框",
                    example: `this.$store.commit("tongBreadDialog/close")`,
                }, {
                    name: "后退",
                    example: `this.$store.commit("tongBreadDialog/back",step)，step是后退步数`,
                    param: "(step)",
                }, {
                    name: "配置自定义按钮 buttonList",
                    example: `this.$store.commit("tongBreadDialog/setButtonList",buttonList)`,
                    param: "(buttonList)",
                },{
                    name: "按钮回滚--通过setButtonList或者show设置的按钮才能回滚",
                    example: `this.$store.commit("tongBreadDialog/popButtonList",num)，num是回滚次数`,
                    param: "(num)",
                },{
                    name:"修改当前展示组件的配置项key为value",
                    example:`this.$store.commit("tongBreadDialog/setTitle",{key,value})`,
                    param:"{key,value}"
                }
            ]
        }, {
            title: "params说明",
            desc: "params是对象",
            modelType: "propModel",
            listData: [
                {
                    param: "tongDialog.prop属性",
                    explain: "参考tongDialog.prop的属性配置",
                    type: "",
                }, {
                    param: "info",
                    explain: "传给currentComponent的信息,在this.$attrs查看",
                    type: "any"
                }, {
                    param: "sureCallback",
                    explain: "this指向currentComponent,支持promise(resolve(true)不关闭弹框)，非promise(reutrn true 不关闭弹框)，promise-pending状态按钮自动loading",
                    type: "function"
                }, {
                    param: "cancelCallback",
                    explain: "this指向currentComponent,支持promise(resolve(true)不关闭弹框)，非promise(reutrn true 不关闭弹框)，promise-pending状态按钮自动loading",
                    type: "function"
                },{
                    param: "closeCallback",
                    explain:"点击x关闭弹框的回调",
                    type:"function"
                }, {
                    param:"backCallback",
                    explain:"点击面包屑的回调，一个参数(index)点击的索引",
                    type:"function"
                },{
                    param: "currentComponent",
                    explain: `当前会展示的组件，currentComponent:require("a.vue") 或者 ()=>import("a.vue")。a组件必须有name；confirm + info`,
                    type: ""
                }, {
                    param: "buttonList",
                    explain: `用户自定义按钮数组，优先级高于内置的按钮。{type:"",text:"",onClick(){}},onClick的this指向currentComponent，支持promise(resolve(true)不关闭弹框)，非promise(reutrn true 不关闭弹框)，promise-pending状态按钮自动loading`,
                    type: "array"
                }
            ]
        }
    ]
}