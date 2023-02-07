module.exports = {
    title: "tongTable",
    desc: "公共表格组件，含复选，排序，分页，按钮，输入框，计数器，下拉框",
    menuOrder: 3,
    recordList: [
        {
            version:"1.3.2",
            editor:"张腾",
            time:"2022年10月11日14:07:56:29:11",
            contentList:[
                "增加开关配置config"
            ]
        },
        {
            version:"1.3.1",
            editor:"张腾",
            time:"2022年5月20日09:29:11",
            contentList:[
                "增加pageShowTotal"
            ]
        },
        {
            version:"1.2.8",
            editor:"张腾",
            time:"2021年11月17日18:08:32",
            contentList:[
                "优化selectable和全选的联动"
            ]
        },
        {
            version:"1.2.5",
            editor:'张腾',
            time:'2021年10月28日14:56:31',
            contentList:[
                'tongTable的计数器的max，min可以传函数'
            ]
        },
        {
            version:"1.2.3",
            editor:"张腾",
            time:"2021年10月12日15:38:51",
            contentList:[
                "tongTable的index列表宽度自适应"
            ]
        },
        {
            version:"1.2.1",
            editor:"张腾",
            time:"2021年9月16日09:38:56",
            contentList:[
                "tongTable树形数据联动"
            ]
        },
        {
            version:"1.2.0",
            editor:"张腾",
            time:"2021年9月7日17:06:59",
            contentList:[
                "树形数据联动",
                "优化操作按钮下拉中的禁用",
                "调整tongTable出现tip样式"
            ]
        },
        {
            version:"1.1.26",
            editor:"张腾",
            time:"2021年9月1日09:57:28",
            contentList:[
                "tongTable下拉互斥与内置增加行联动调整"
            ]
        },
        {
            version:"1.1.25",
            editor:"张腾",
            time:"2021年8月27日16:08:31",
            contentList:[
                "filter替换升级，增加树的过滤"
            ]
        },
        {
            version: "1.1.24",
            editor: "张腾",
            time: "2021年8月16日11:54:43",
            contentList: [
                "增加defaultExpandAll，expandRowKeys配置"
            ]
        },
        {
            version: "1.1.20",
            editor: "张腾",
            time: "2021年7月22日09:49:03",
            contentList: [
                "tongTable调整错误信息展示方式（配置校验不需设置rowStyle）"
            ]
        },
        {
            version: "1.1.19",
            editor: "张腾",
            time: "2021年7月13日13:48:52",
            contentList: [
                "增加toggleRowExpansion设置展开"
            ]
        },
        {
            version: "1.1.16",
            editor: "张腾",
            time: "2021年6月23日17:27:25",
            contentList: [
                "tongTable增加border配置项"
            ]
        },
        {
            version: "1.1.15",
            editor: "张腾",
            time: "2021年6月16日16:35:20",
            contentList: [
                "校验定高",
                "增加行类名配置rowClassName"
            ]
        },
        {
            version: "1.1.14",
            editor: "张腾",
            time: "2021-6-8 10:12:49",
            contentList: [
                "补充参数reserveSelection"
            ]
        },
        {
            version: "1.1.12",
            editor: "张腾",
            time: "2021-05-13 14:30",
            contentList: [
                "增加行点击回调rowClick",
                "增加表格复选",
                "增加展开栏图标隐藏函数setExpandHidden"
            ]
        },
        {
            version: "1.1.11",
            editor: "张腾",
            time: "2021-5-10",
            contentList: [
                "操作栏更多配置项调整",
            ]
        },
        {
            version: "1.1.10",
            editor: "张腾",
            time: "2021-4-25",
            contentList: [
                "增加表格单选",
                "增加类型单选",
                "增加时间选择器"
            ]
        },
        {
            version: "1.1.9",
            editor: "张腾",
            time: "2021-4-21 10:00",
            contentList: [
                "增加重绘列 redraw"
            ]
        },
        {
            version: "1.1.8",
            editor: "张腾",
            time: "2021-4-13 10:00",
            contentList: [
                "增加操作栏按钮过多自动收起的配置项 moreOperate"
            ]
        },
        {
            version: "1.1.4",
            editor: "张腾",
            time: "2021-3-22 12:00",
            contentList: [
                "补充expand的使用方法和展开收起监听",
                'show方法增加第三个参数scope',
                'formate增加第三个参数scope',
                '补充插槽校验的用例',
                '增加下拉选项的互斥',
                '增加默认操作栏配置项',
            ]
        },{
            version: "1.1.3",
            editor: "张腾",
            time: "2021-1-28 15:30",
            contentList: [
                '增加操作前的图片配置-支持可使用字体图标和图片',
                '调整model配置项，增加显隐配置show',
                '增加多级表头配置',
                'tongTable增加复选禁用配置方法',
                "修复固定列阴影",
            ]
        },
        {
            version: "1.1.2",
            editor: "张腾",
            time: "2020-11-18 9:30",
            contentList: [
                "tongTable label类型formate增加scope入参",
                "增加表头部分插槽配置项headerSlot",
                "tongTable展开树配置项",
                "增加校验表格所有数据接口validateAll",
            ]
        },
        {
            version: "1.1.1",
            editor: "张腾",
            time: "2020-09-14 10:00",
            contentList: [
                "增加计数器inputNumber",
                "排序图标切换的问题修复",
                "校验模块修复",
                "补充表头清空过滤的说明",
            ]
        }, {
            version: "1.1.0",
            editor: "张腾",
            time: "2020-08-24 11:00",
            contentList: [
                "调整cell单元格padding-right=6px",
                "status - formate  -  customIcon自定义前图标可以使用内置图片,并支持字体图标",
                "height调整为max-height",
                "tongTable 总条数>10才会显示分页器",
                "补充status的自定义配置",
                "补充status的内置图标",
                "增加清空选中接口clearSelection",
                "增加过滤回调事件filterChange",
                "修复排序",
                "调整0可以展示"
            ]
        },
        {
            version: "1.0.32",
            editor: "张腾",
            time: "2020-07-30 15:58",
            contentList: [
                "增加按照行转换类型，依赖tableData对象中的costomType，目前仅支持label==>input",
                "增加合并单元格配置，依赖tableData对象中的spans数组",
                "增加nullLabel属性，配置type为clickBtn,label的空文本内容，默认值 -",
                "修改表头色值 #545558",
                "增加两种状态deployed，no_deploying",
                "status类型增加了formate方法, function(rowInfo){return {title,appover,appoverTime,appoverInfo}}",
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
            title: "普通表格带分页器",
            desc: "展示文本内容的表格，设置width，文本超出展示tips",
            codeConfig: {
                codeEditorHeight: "650px",
                codeComponent: {
                    template: `<div>
                    <el-button @click="clear">清除</el-button>
                    <tong-table :tableModel='tableModel' :currentPage='currentPage' :selectable="()=>false" :selectShow="true" rowKey='id' :defaultExpandAll="true" :total='total' :tableData='tableData' ref='tongTable' @current-change='cur=>currentPage=cur'></tong-table>
                    </div>`,
                    data() {
                        return {
                            tableModel: [
                                {
                                    prop: "prop1",
                                    label: "label1",
                                    width: "150px",
                                    filters:[{
                                        text:"1",
                                        value:"1"
                                    }]
                                }, {
                                    prop: "prop2",
                                    label: "label2",
                                }, {
                                    prop: "prop3",
                                    label: "label3",
                                }, {
                                    label: "操作",
                                    type: "operate",
                                    width: "250px",
                                    operateList: [
                                        {
                                            label: "操作",
                                            icon: "el-icon-platform-eleme"
                                        }, {
                                            label: "刷新",
                                            icon: "iconfont tong-icon-shuaxin"
                                        }, {
                                            label: "删除",
                                            icon: "el-icon-delete-solid"
                                        }
                                    ]
                                }
                            ],
                            tableData: [
                                {
                                    id: 1,
                                    prop1: "prop1-内容，文本超出自动展示tips",
                                    prop2: "",
                                    prop3: 0,
                                    children:[
                                        {
                                            id: 2,
                                        },{
                                            id: 4,
                                        }
                                    ]
                                },{
                                    id: 12,
                                    prop1: "prop1-内容，文本超出自动展示tips",
                                    prop2: "",
                                    prop3: 0,
                                    children:[
                                        {
                                            id: 22,
                                        },{
                                            id: 34,
                                        }
                                    ]
                                },
                            ],

                            total: 10000000,
                            currentPage:10,
                        }
                    },
                    methods: {
                        clear(){
                            this.$refs.tongTable.clearFilter()
                        },
                        load(tree, treeNode, resolve) {
                            setTimeout(() => {
                                resolve([{ id: new Date().getTime()-1000, prop1: '33',hasChildren:true },{ id: new Date().getTime()-2000, prop1: '34' }])
                            }, 1000)
                        },
                    },
                }
            }
        }, {
            title: "使用内置操作配置，建议使用场景是，通过表格来获取用户输入",
            desc: "配置type:add，addNext，addBefore，delete，moveUp，moveDown， moveTop， moveBottom，position",
            codeConfig: {
                codeEditorHeight: "650px",
                codeComponent: {
                    template: `<tong-table :tableModel='tableModel' :tableData='tableData'></tong-table>`,
                    data() {
                        return {
                            tableModel: [{
                                prop: "prop1"
                            }, {
                                label: "操作",
                                type: "operate",
                                operateList: [
                                    {
                                        label: "",
                                        type: "add",
                                        row: {
                                            prop1: "这个是add的自定义内容"
                                        }
                                    }, {
                                        label: "",
                                        type: "addNext",
                                        row: {
                                            prop1: "这个是addNext的自定义内容"
                                        }
                                    }, {
                                        label: "",
                                        type: "addBefore",
                                        show(row, btn, info) {
                                            return info.$index !== 0
                                        }
                                    }, {
                                        label: "",
                                        type: "delete"
                                    }, {
                                        label: "",
                                        type: "moveUp",
                                        show(row, btn, info) {
                                            return info.$index !== 0
                                        },
                                    }, {
                                        label: "",
                                        type: "moveDown",
                                        show(row, btn, info, length) {
                                            return info.$index !== length - 1
                                        }
                                    }, {
                                        label: "",
                                        type: "moveTop",
                                        show(row, btn, info) {
                                            return info.$index !== 0 && info.$index !== 1
                                        }
                                    }, {
                                        label: "",
                                        type: "moveBottom",
                                        show(row, btn, info, length) {
                                            return info.$index !== length - 1 && info.$index !== length - 2
                                        }
                                    }, {
                                        label: "",
                                        type: "position",
                                        clickFun() { console.log(1) }
                                    }
                                ]
                            }
                            ],
                            tableData: [
                                { prop1: "111" },
                                { prop1: "22" },
                                { prop1: "33" },
                                { prop1: "444" },
                                { prop1: "5555" },
                            ],

                            total: 100
                        }
                    },
                    methods: {
                        load(tree, treeNode, resolve) {
                            setTimeout(() => {
                                resolve([{ id: 111, prop1: '33' }])
                            }, 1000)
                        },
                    },
                }
            }
        }, {
            title: "可配置表头",
            desc: "单元格合并，多级表头，单选框(和radioKey一起使用)，复选框(是否保存选中项)，自定义图标，排序，过滤(列表和树)，自定义筛选方法，或者使用插槽自定义表头部分",
            codeConfig: {
                codeEditorHeight: "650px",

                codeComponent: {
                    template: `<tong-table ref="tongTable" :tableModel='tableModel' :selectShow="true" :reserveSelection="true" rowKey='id' :total="20" @current-change="changePage" :radioShow="true" radioData="1" @tableRadioChange="tableRadioChange" :selectable="selectable" @filterChange='filterChange' :tableData='tableData' @order='doOrder'>
        <template slot="header-slot" slot-scope="scope">
            <el-input size="small" placeholder="输入关键字搜索"/>
        </template>
    </tong-table>`,
                    data() {
                        return {
                            tableModel: [
                                {
                                    prop: undefined,
                                    label: "label1",
                                    width: "150px",
                                    column: [
                                        {
                                            label: "child1",
                                            prop: "child1",
                                            width: "120px",
                                            column: [
                                                {
                                                    label: "child3",
                                                    prop: "child3",
                                                    width: "120px",
                                                }
                                            ]
                                        }, {
                                            label: "child2",
                                            prop: "child2",
                                            width: "120px"
                                        }
                                    ]
                                }, {
                                    prop: "prop2",
                                    label: "label2",
                                    order: true,
                                    orderCallback: "order"
                                }, {
                                    prop: "prop3",
                                    label: "label3",
                                    filters: [{ text: 'prop3-第二行内容', value: 'prop3-第二行内容',children:[
                                        {text:"child",value:"child"}
                                    ] }],
                                }, {
                                    prop: "prop4",
                                    label: "label4",
                                    headerSlot: "header-slot"
                                },
                            ],
                            tableData: [
                                {
                                    id: "1",
                                    prop1: "prop1-内容",
                                    prop2: "prop2-内容",
                                    prop3: "prop3-内容",
                                    child1: "child1",
                                    child2: "child2",
                                    //合并单元格[列[行合并,列合并]]
                                    spans:[[],[],[1,2]]
                                }, {
                                    id: "2",
                                    prop1: "prop1-第二行内容",
                                    prop2: "prop2-第二行内容",
                                    prop3: "prop3-第二行内容",
                                    child1: "child1",
                                    child2: "child2"
                                }
                            ]
                        }
                    },
                    methods: {
                        doOrder: function (prop, value) {
                            console.log("触发排序")
                        },
                        filterChange: function (filters) {
                            console.log(filters)
                        },
                        selectable: function (row, index) {
                            return true
                        },

                        tableRadioChange(scope) {
                            console.log(scope)
                        },
                        changePage(val) {
                            if (val == 1) {
                                this.tableData = [
                                    {
                                        id: "1",
                                        prop1: "prop1-内容",
                                        prop2: "prop2-内容",
                                        prop3: "prop3-内容",
                                        child1: "child1",
                                        child2: "child2"
                                    }, {
                                        id: "2",
                                        prop1: "prop1-第二行内容",
                                        prop2: "prop2-第二行内容",
                                        prop3: "prop3-第二行内容",
                                        child1: "child1",
                                        child2: "child2"
                                    }
                                ]
                            } else {
                                this.tableData = [
                                    {
                                        id: "3",
                                        prop1: "prop1-内容",
                                        prop2: "prop2-内容",
                                        prop3: "prop3-内容",
                                        child1: "child1",
                                        child2: "child2"
                                    }, {
                                        id: "4",
                                        prop1: "prop1-第二行内容",
                                        prop2: "prop2-第二行内容",
                                        prop3: "prop3-第二行内容",
                                        child1: "child1",
                                        child2: "child2"
                                    }
                                ]
                            }

                            this.$nextTick(() => {
                                console.log(this.$refs.tongTable.getSelectItems());
                            })
                        }
                    },
                }
            }
        }, {
            title: "配置内容区域展示方式",
            desc: "配置单选，多选，计数器，输入框，下拉框(可以配置单选和多选的互斥条件)，日期选择器，可点击文本(clickBtn)，状态栏，操作栏，以及使用slot或者render自定义内容区域",
            codeConfig: {
                codeEditorHeight: "650px",
                codeComponent: {
                    template: `<tong-table :tableModel='tableModel' :tableData='tableData' @checkboxChange="checkboxChange" @doClickBtn='doClickBtn'>
        <span slot='slot4'>slot4插槽内容</span>
    </tong-table>`,
                    data() {
                        return {
                            tableModel: [
                                {
                                    prop: "prop0",
                                    label: "计数器",
                                    type: "inputNumber",
                                    width: "100px",
                                    disabled: function (rowInfo, item) {
                                        return rowInfo.prop0 === 10
                                    }
                                },
                                {
                                    prop: "prop1",
                                    label: "输入框",
                                    type: "input",
                                    width: "140px",
                                    disabled: function (rowInfo, item) {
                                        return rowInfo.prop1 === "prop1-内容"
                                    }
                                }, {
                                    prop: "prop2",
                                    label: "下拉框",
                                    type: "select",
                                    width: "160px",
                                    selectMutex: true,
                                    mutexType: 1, //1表示禁用，2表示隐藏
                                    clearable: true,
                                    multiple: true,
                                    nodeKey: "value",
                                    selectOptions: [
                                        {
                                            label: "select1",
                                            value: 0
                                        }, {
                                            label: "select2",
                                            value: 1
                                        }, {
                                            label: "select3",
                                            value: 2
                                        }, {
                                            label: "select4",
                                            value: 3
                                        }
                                    ],
                                    disabled: function (rowInfo, item) {
                                        return false
                                    }
                                },{
                                    prop: "prop3",
                                    fixed: "left",
                                    label: "可点击文本",
                                    type: "clickBtn",
                                    customClass: "operate-blue",
                                    clickFun: "doClickBtn"
                                },{
                                    prop: "prop4",
                                    label: "开关",
                                    type: "switch",
                                    width: "140px",
                                    config:{
                                        activeValue:true,
                                        inactiveValue:false
                                    },
                                    disabled: function (rowInfo, item) {
                                        return false
                                    }
                                }, {
                                    prop: "prop6",
                                    label: "日期选择器",
                                    width: "150px",
                                    type: "datePicker",
                                    placeholder: "请选择",
                                    config: {
                                        type: "date",
                                    }
                                }, {
                                    prop: "prop7",
                                    label: "单选",
                                    width: "200px",
                                    type: "radio",
                                    radioOptions: [
                                        {
                                            label: "radio1",
                                            value: "1",
                                            disabled(rowInfo) {
                                                return false
                                            }
                                        }, {
                                            label: "radio2",
                                            value: "2"
                                        }
                                    ],
                                }, {
                                    prop: "prop8",
                                    label: "多选",
                                    type: "checkbox",
                                    width: "320px",
                                    checkboxOptions: [
                                        {
                                            label: "checkbox1",
                                            value: "1",

                                        }, {
                                            label: "checkbox2",
                                            value: "2",
                                            disabled(rowInfo) {
                                                return true
                                            }
                                        }
                                    ]
                                }, {
                                    prop: "prop4",
                                    label: "使用插槽",
                                    slot: 'slot4',
                                    width: "120px",
                                }, {
                                    prop: "prop5",
                                    label: "使用render",
                                    width: "120px",
                                    render: function (h, rowInfo) {
                                        return h("span", '这个是render')
                                    }
                                }
                            ],
                            tableData: [
                                {
                                    prop0: 10,
                                    prop1: "prop1-内容",
                                    prop2: [0],
                                    prop3: "prop3-内容",
                                    prop6: "2021-09-21",
                                    prop7: "1",
                                    prop4:true,
                                    prop8: [],
                                }, {
                                    prop1: "prop1-第二行内容",
                                    prop2: [1],
                                    prop3: "prop3-第二行内容",
                                    prop8: []
                                }
                            ],

                        }
                    },
                    methods: {
                        doClickBtn(rowInfo, clickItem, scope) {
                            console.log("点击了clickBtn")
                        },

                        checkboxChange() {
                            this.tableData[1].prop8 = ['1']
                            console.error(this.tableData)
                        }
                    },
                }
            }
        },{
            title:"input、select内联编辑",
            desc: "根据type、cellEdit配置内联编辑;点击编辑图标或者双击单元格出现编辑框",
            codeConfig: {
                codeEditorHeight: "650px",
                codeComponent: {
                    template: `<tong-table
      :tableModel='tableModel'
      :tableData='tableData' 
      @cellSureCallback="cellSureCallback">
    </tong-table>`,
                    data: function () {
                            return {
                                tableModel: [{
                                    prop: "prop1",
                                    type: "input",
                                    cellEdit: true,
                                    lable: "输入框"
                                }, {
                                    prop: "prop2",
                                    type: "select",
                                    cellEdit: true,
                                    clearable: true,
                                    label: "选择框",
                                    multiple: true,
                                    selectOptions: [{
                                            label: "select1",
                                            value: 0
                                        },
                                        {
                                            label: "select2",
                                            value: 1
                                        },
                                        {
                                            label: "select3",
                                            value: 2
                                        },
                                        {
                                            label: "select4",
                                            value: 3
                                        }
                                    ]
                                }],
                                tableData: [{
                                        prop1: "111",
                                        prop2: [0,1]
                                    },
                                    {
                                        prop1: "22",
                                        prop2: [2]
                                    },
                                    {
                                        prop1: "33",
                                        prop2: [3]
                                    },
                                    {
                                        prop1: "444",
                                        prop2: []
                                    },
                                    {
                                        prop1: "5555",
                                        prop2: [2,3]
                                    }
                                ]
                            };
                        },
                        methods: {
                            cellSureCallback(val, prop, row) {
                                //保存值后的回调
                            }
                        }
                }
            }
        },
        {
            title: "配置status，配置弹出层信息提示",
            desc: "图片已内置，使用statusClassList和statusValueList的索引匹配图片和文字",
            codeConfig: {
                codeEditorHeight: "650px",
                codeComponent: {
                    template: "<tong-table :tableModel='tableModel' :tableData='tableData' />",
                    data() {
                        return {
                            tableModel: [
                                {
                                    prop: "prop1",
                                    label: "label1",
                                    type: "status",

                                    visibleArrow: false, //是否显示小箭头
                                    statusClassList: ['run', 'changed', 'unchanged', 'rejected', 'open', 'stop', 'draft',
                                        'cancelled', 'on_approving', 'to_approve', 'frozen', "deployed", "un_deploying",
                                        "done", "warning", "no_passed"
                                    ],
                                    statusValueList: ['运行中', '已变更', '未变更', '已拒绝', '开启', '暂停', '草稿',
                                        '已取消', '审批中', '待申请', 'frozen', "deployed", "un_deploying",
                                        "完成", "警告", "未完成"
                                    ],

                                    formate: function (rowInfo) {
                                        if (rowInfo.prop1 === '2') {
                                            return {
                                                //标题
                                                title: "",
                                                //审批人                    
                                                appover: "老王",
                                                //审批时间               
                                                appoverTime: "xxxx年xx月xx日",
                                                //审批意见
                                                appoverInfo: "不行",
                                                //后面的小图片或图标   
                                                appoverImg: "el-icon-platform-eleme",
                                            }
                                        } else if (rowInfo.prop1 === '3') {
                                            return {
                                                //标题
                                                title: "",
                                                //审批人
                                                appover: "老王",
                                                //审批时间
                                                appoverTime: "xxxx年xx月xx日",
                                                //审批意见
                                                appoverInfo: "不行",
                                                //悬浮框禁用       
                                                appoverDisabled: true,

                                                //自定义类名
                                                customClass: "",
                                                //自定义文本
                                                customLabel: "自定义文本",
                                                //自定义前面图标
                                                customIcon: "",
                                            }
                                        }
                                    },
                                },
                            ],
                            tableData: new Array(15).fill("").map((val, index) => ({ prop1: String(index) }))

                        }
                    },
                }
            }
        }, {
            title: "配置操作栏",
            desc: "操作按钮禁用，是否可见，按钮过多收起成下拉",
            codeConfig: {
                codeEditorHeight: "700px",
                codeComponent: {
                    template: "<tong-table :tableModel='tableModel' @rowClick='rowClick' :tableData='tableData' :moreOperate='moreOperate' />",
                    data() {
                        return {
                            moreOperate: {
                                limit: "2",
                                text: "更多操作",
                                useInMore: true,
                            },
                            tableModel: [
                                {
                                    label: "操作",
                                    type: "operate",
                                    operateList: [
                                        {
                                            label: "申请部署",

                                            //点击执行方法
                                            clickFun: "",
                                            customClass: "",

                                            //禁用
                                            disabled: function (rowInfo, btn) {
                                                return rowInfo.prop1 === 'value1'
                                            },

                                            //必须是函数，返回值true代表可见
                                            show: function (rowInfo, btn) {
                                                return rowInfo.prop1 !== "value2"
                                            },
                                        }, {
                                            label: "编辑",
                                            clickFun: "",
                                            customClass: "",
                                            inMore: true,
                                            disabled: function (rowInfo, btn) {
                                                return true
                                            },
                                            show: function (rowInfo, btn) {
                                                return true
                                            },
                                        }, {
                                            label: "刷新",
                                            icon: "iconfont tong-icon-shuaxin",
                                            disabled: true
                                        },
                                    ]
                                }
                            ],
                            tableData: [
                                {
                                    prop1: "value1",
                                }, {
                                    prop1: "value2",
                                }, {
                                    prop1: "value3",
                                }
                            ],

                        }
                    },
                    methods: {
                        rowClick() {
                            console.log(arguments)
                        }
                    },
                }
            }
        }, {
            title: "校验表格行数据",
            desc: "配置required，validate（插槽校验同样配置，然后需要开发主动调用校验方法validate(scope,keys)）",
            codeConfig: {
                codeEditorHeight: "650px",
                codeComponent: {
                    template: `<tong-table :tableModel='tableModel' key='10' :total='total' :tableData='tableData' ref='tongTable'>
            <el-input placeholder="请输入" slot='slot3' slot-scope="{rowInfo,scope}"  v-model="rowInfo.prop3" @input="slotValidate(scope,['prop3'])"></el-input>
        </tong-table>`,
                    data() {
                        return {
                            tableModel: [
                                {
                                    prop: "prop1",
                                    label: "label1",
                                    type: "input",
                                    width: "150px",
                                    required: true,
                                    validate(scope) {
                                        return {
                                            show: !scope.row.prop1,
                                            text: '必填'
                                        }
                                    }
                                }, {
                                    prop: "prop2",
                                    label: "label2",
                                    type: "input",
                                    required: true,
                                    validate(scope) {
                                        return {
                                            show: !scope.row.prop2,
                                            text: '必填'
                                        }
                                    }
                                }, {
                                    prop: "prop3",
                                    label: "使用插槽",
                                    slot: "slot3",
                                    required: true,
                                    validate(scope) {
                                        return {
                                            show: !scope.row.prop3,
                                            text: '必填'
                                        }
                                    }
                                }, {
                                    label: "操作",
                                    type: "operate",
                                    operateList: [
                                        {
                                            label: "校验",
                                            //点击执行方法
                                            clickFun: function (rowInfo, item, scope) {
                                                this.$refs.tongTable.validate(scope);
                                            }.bind(this),
                                        }, {
                                            label: "清除校验",
                                            clickFun: function (rowInfo, item, scope) {
                                                this.$refs.tongTable.clearError(scope)
                                            }.bind(this)
                                        }, {
                                            label: "校验所有",
                                            clickFun: function (rowInfo, item, scope) {
                                                this.$refs.tongTable.validateAll()
                                            }.bind(this)
                                        }
                                    ]
                                }
                            ],
                            tableData: [{
                                prop1: '2016-05-02',
                                prop2: '王小虎',
                            },],

                            total: 100
                        }
                    },
                    methods: {
                        slotValidate(scope, keys) {
                            this.$refs.tongTable.validate(scope, keys)
                        }
                    },
                }
            }
        }, {
            title: "配置展开插槽expand",
            desc: "动态配置展开栏按钮图标",
            codeConfig: {
                codeEditorHeight: "700px",
                codeComponent: {
                    template: `<tong-table :tableModel='tableModel' :expandShow="true" :setExpandHidden="setExpandHidden" :indexShow="false" :tableData='tableData'>
        <span slot="expand">这里自定义内容</span>
    </tong-table>`,
                    data() {
                        return {
                            tableModel: [
                                {
                                    label: "label1",
                                    prop: "prop1",
                                }
                            ],
                            tableData: [
                                {
                                    prop1: "value1",
                                }, {
                                    prop1: "value2",
                                }, {
                                    prop1: "value3",
                                }
                            ],

                        }
                    },
                    methods: {
                        setExpandHidden(scope) {
                            return scope.rowIndex > 1
                        }
                    },
                }
            }
        }
    ],

    tableList: [
        {
            modelType: "propModel",
            listData: [
                {
                    param: "tableModel",
                    explain: "表格的模板数组",
                    type: "array",
                    defaultValue: "[]"
                }, {
                    param: "tableData",
                    explain: "表格数据",
                    type: "array",
                    defaultValue: "[]"
                }, {
                    param: "height",
                    explain: "表格高度--固定表头的时候使用",
                    type: "string",
                }, {
                    param: "rowStyle",
                    explain: "行样式配置",
                    type: "object"
                }, {
                    param: "rowClassName",
                    explain: "行类名配置,一个参数({row,rowIndex})",
                    type: "function",
                }, {
                    param: "rowClick",
                    explain: "行点击事件回调，三个参数(row, column, event)",
                    type: "function"
                }, {
                    param: "expandShow",
                    explain: "是否显示展开栏",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param:"defaultExpandAll",
                    explain:"是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效",
                    defaultValue:"false"
                },{
                    param:"expandRowKeys",
                    explain:"可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。",
                    defaultValue:"[]"
                },{
                    param: "setExpandHidden",
                    explain: "设置展开图标隐藏（expandShow===true才会生效）",
                    type: "function",
                    defaultValue: "(scope)=>false"
                }, {
                    param: "selectShow",
                    explain: "是否显示复选框",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "selectable",
                    explain: "复选可用配置函数，两个参数（row,index），reutrn true 表示可用",
                    type: "function",
                }, {
                    param: "reserveSelection",
                    explain: "是否暂存已经选中的项，需要指定rowKey（常与分页器连用，切换分页器仍会保存选中项）",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "radioShow",
                    explain: "是否显示表格单选",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "radioKey",
                    explain: "表格单选key，使用单选时必填",
                    type: "string",
                    defaultValue: "id"
                }, {
                    param: "radioData",
                    explain: "表格单选的配置值"
                }, {
                    param: "radioable",
                    explain: "单选可用配置函数，两个参数（row,index），reutrn true 表示可用",
                    type: "function",
                }, {
                    param: "indexShow",
                    explain: "是否显示索引",
                    type: "boolean",
                    defaultValue: "true"
                }, {
                    param: "indexText",
                    explain: "索引标题文本内容",
                    type: "string",
                    defaultValue: "序号"
                }, {
                    param: "orderIcons",
                    explain: "排序图标的类名数组",
                    type: "array",
                    defaultValue: `["el-icon-sort-down", "el-icon-sort", "el-icon-sort-up"]	`
                }, {
                    param: "stripe",
                    explain: "斑马纹",
                    type: "boolean",
                    defaultValue: "true"
                }, {
                    param: "pageShow",
                    explain: "是否显示分页器",
                    type: "boolean",
                    defaultValue: "true"
                }, {
                    param: "total",
                    explain: "总条数",
                    type: "number",
                    defaultValue: "0"
                }, {
                    param:"pageShowTotal",
                    explain:"设置大于多少的时候才会显示分页器",
                    type: "number",
                    defaultValue: "10"
                },{
                    param: "layout",
                    explain: "分页器配置，参考ele",
                    type: "string",
                    defaultValue: `"total, sizes, prev, pager, next, jumper"`
                }, {
                    param: "currentPage",
                    explain: "当前页",
                    type: "number",
                    defaultValue: "1"
                }, {
                    param: "pageSizes",
                    explain: "size下拉，参考ele",
                    type: "array",
                    defaultValue: "[10, 20, 50, 100]"
                }, {
                    param: "pageSize",
                    explain: "当前size",
                    type: "number",
                    defaultValue: "10"
                }, {
                    param: "rowKey",
                    explain: "树节点的key，树形表格必填",
                    type: "string",
                    defaultValue:"id"
                }, {
                    param: "treePropKey",
                    explain: "树展开的字段key",
                    defaultValue: "children",
                    type: "string",
                }, {
                    param: "load",
                    explain: "懒加载执行的方法",
                    type: "function",
                }, {
                    param: "empty-text",
                    explain: "列表数据为空的时候展示的内容",
                    type: "string",
                    defaultValue: "暂无数据"
                }, {
                    param: "nullLabel",
                    explain: "空文本",
                    type: "string"
                }, {
                    param: "moreOperate",
                    explain: "设置按钮收起成下拉的形式(limit:按钮直接展示的最大个数，text:触发下拉的文本,useInMore:使用inMore字段生成下拉)",
                    type: "object",
                    defaultValue: "{text:'更多',limit:9,useInMore:false}"
                }
            ],
        }, {
            modelType: "propModel",
            title: "tableModel说明",
            desc: "tableModel中的每一个小对象，包含下面的值",
            listData: [
                {
                    param: "show",
                    explain: "是否展示当前列",
                    type: "boolean",
                },
                {
                    param: "prop",
                    explain: "展示内容对应tableData每一项的key",
                    type: "string",
                }, {
                    param: "title",
                    explain: "列标题",
                    type: "string",
                }, {
                    param: "labelIcon",
                    explain: "标题前的图标",
                    type: "string",
                }, {
                    param: "headerSlot",
                    explain: "标题部分插槽自定义",
                    type: "string",
                }, {
                    param: "column",
                    explain: "合并表头，[{label,prop,width,minWidth}]",
                    type: "array"
                }, {
                    param: "required",
                    explain: "标题前的小红心",
                    type: "boolean"
                }, {
                    param: "validata",
                    explain: "对reqiured === true的校验，返回{show:boolean,text:string}",
                    type: "function(scope)",
                }, {
                    param: "type",
                    explain: "列类型",
                    type: "string",
                    values: "input,select,clickBtn,label,status,operate",
                    defaultValue: "label"
                }, {
                    param: "cellEdit",
                    explain: "是否内联编辑(仅支持输入框和下拉框)",
                    type: "boolean",
                }, {
                    param: "width",
                    explain: "列宽,带单位",
                    type: "string",
                }, {
                    param: "minWidth",
                    explain: "列最小宽,带单位",
                    type: "string",
                }, {
                    param: "fixed",
                    explain: "固定列",
                    type: "string",
                    values: "left,right"
                }, {
                    param: "order",
                    explain: "是否使用排序",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "orderCallback",
                    explain: "点击排序回调的方法名称，方法写到对应methods中",
                    type: "string",
                    defaultValue: "doOrderCallback",
                    params: "(prop,value)"
                }, {
                    param: "filters",
                    explain: "筛选树或列表[{text,value,children:[]}]",
                    type: "array",
                }, {
                    param:"filtersConfig",
                    explain:"过滤树的配置，搭配filters使用，具体配置可以参考tongTree",
                    type:"object"
                },{
                    param: "render",
                    explain: "使用render函数渲染内容",
                    type: "function",
                    params: "(h,rowInfo,index)"
                }, {
                    param: " ",
                    explain: "input专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "placeholder",
                    explain: "",
                    type: "string",
                }, {
                    param: "disabled",
                    explain: "禁用方法，返回值true表示禁用",
                    type: "function",
                    defaultValue: `function(rowInfo,item){return true}`,
                    params: "(rowInfo,item)"
                }, {
                    param: " ",
                    explain: "inputNumber专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "step",
                    explain: "步进",
                    type: "string | number",
                    defaultValue: "1",
                }, {
                    param: "min",
                    explain: "最小值",
                    type: "function | number",
                    defaultValue: "function(scope){} | 0",
                }, {
                    param: "max",
                    explain: "最大值",
                    type: "function | number",
                    defaultValue: "function(scope){} | Infinity",
                }, {
                    param: "disabled",
                    explain: "禁用方法，返回值true表示禁用",
                    type: "function",
                    defaultValue: `function(rowInfo,item){return true}`,
                }, {
                    param: " ",
                    explain: "select专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "selectMutex",
                    explain: "是否下拉互斥,必须设置 selectOPtions ",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "mutexType",
                    explain: "互斥项禁用还是隐藏: 1表示禁用，2表示隐藏",
                    type: "number",
                    defaultValue: "1",
                    values: "1 | 2"
                }, {
                    param: "placeholder",
                    explain: "",
                    type: "string",
                }, {
                    param: "disabled",
                    explain: "禁用方法，返回值true表示禁用",
                    type: "function",
                    defaultValue: `function(rowInfo,item){return true}`,
                }, {
                    param: "nodeKey",
                    explain: "下拉项的key",
                    type: "string",
                    defaultValue: "value"
                },{
                    param: "labelKey",
                    explain: "下拉项label的key",
                    type: "string",
                    defaultValue: "label"
                },{
                    param: "valueKey",
                    explain: "下拉项value的key",
                    type: "string",
                    defaultValue: "value"
                }, {
                    param: "filterable",
                    explain: "是否可以过滤",
                    type: "boolean",
                }, {
                    param: "multiple",
                    explain: "是否多选",
                    type: "boolean",
                }, {
                    param: "multipleLimit",
                    explain: "多选上限",
                    type: "string|number",
                }, {
                    param: "selectOPtions",
                    explain: "下拉项数组",
                    type: "array",
                }, {
                    param: "costomConfig.selectProp",
                    explain: "每行下拉项数组的key，对应tableData对应的key",
                    type: "string",
                }, {
                    param: " ",
                    explain: "datePick专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "disabled",
                    explain: "禁用方法，返回值true表示禁用",
                    type: "function",
                    defaultValue: `function(rowInfo,item){return true}`,
                }, {
                    param: "config.type",
                    explain: "选择器的类型 (其他配置也可以放在config下面)",
                    type: "string",
                    values: "week|month|year|dates|date|daterange|datetime|datetimerange",
                    defaultValue: "date"
                },{
                    param: " ",
                    explain: "switch专有配置",
                    spans: [[], [1, 4], [], [], []]
                },{
                    param: "disabled",
                    explain: "禁用方法，返回值true表示禁用",
                    type: "function",
                    defaultValue: `function(rowInfo,item){return true}`,
                },{
                    param: "config.",
                    explain: "拓展ele开关配置",
                    type: "object",
                    defaultValue: `{}`,
                }, {
                    param: " ",
                    explain: "radio专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "disabled",
                    explain: "禁用方法，返回值true表示禁用",
                    type: "function",
                    defaultValue: `function(rowInfo,item){return true}`,
                }, {
                    param: "radioOptions",
                    explain: "单选项 [{label,value}]",
                    type: "array",
                }, {
                    param: "radioOptions.label",
                    explain: "文本",
                    type: "string",
                }, {
                    param: "radioOptions.value",
                    explain: "值",
                    type: "any",
                }, {
                    param: "radioOptions.disabled",
                    explain: "禁用函数",
                    type: "function",
                    defaultValue: "function(rowInfo)"
                }, {
                    param: "costomConfig.radioProp",
                    explain: "选项数组的key，对应tableData对应的key",
                    type: "string",
                },{
                    param: " ",
                    explain: "checkbox专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "disabled",
                    explain: "禁用方法，返回值true表示禁用",
                    type: "function",
                    defaultValue: `function(rowInfo,item){return true}`,
                }, {
                    param: "checkboxOptions",
                    explain: "单选项 [{label,value}]",
                    type: "array",
                }, {
                    param: "checkboxOptions.label",
                    explain: "文本",
                    type: "string",
                }, {
                    param: "checkboxOptions.value",
                    explain: "值",
                    type: "any",
                }, {
                    param: "checkboxOptions.disabled",
                    explain: "禁用函数",
                    type: "function(rowInfo)",
                }, {
                    param: "costomConfig.checkProp",
                    explain: "选项数组的key，对应tableData对应的key",
                    type: "string",
                },{
                    param: " ",
                    explain: "clickBtn专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "costomClass",
                    explain: "当前列自定义类名",
                    type: "string",
                }, {
                    param: "clickFun",
                    explain: "string表示点击回调的方法名，在外面通过 v-on监听；如果是Function，就直接执行，this是table实例",
                    type: "string | Function",
                    defaultValue: "function(rowInfo,btn,scope)"
                }, {
                    param: "formate",
                    explain: "自定义文本内容，文本类名；返回内容格式 {className:'',text:''}； 普通label类型也支持的哦",
                    type: "function",
                    defaultValue: "function(rowInfo,btn,scope)"
                }, {
                    param: " ",
                    explain: "status专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "visibleArrow",
                    explain: "悬浮框小三角是否可见",
                    type: "boolean"
                }, {
                    param: "statusClassList",
                    explain: "展示的内置图标，字体颜色，rowInfo[prop] == 1  <===> 该数组中索引为1的值；实际类名加上 status-",
                    type: "array",
                }, {
                    param: "statusValueList",
                    explain: "展示的文本，rowInfo[prop] == 1  <===> 该数组中索引为1的值",
                    type: "array",
                }, {
                    param: "formate",
                    explain: "格式化,自定义，title悬浮框标题，appover审批人,appoverTime审批时间，appoverInfo审批意见，appoverDisabled控制是否展示悬浮框,customLabel文本内容，customIcon前图标，customClass类名string",
                    type: "function",
                    defaultValue: `function(item,rowInfo){return {title:'',appover:'',appoverTime:'',appoverInfo:'',appoverDisabled:false,customClass:'',customLabel:'',customIcon:''}}`
                }, {
                    param: " ",
                    explain: "operate专有配置",
                    spans: [[], [1, 4], [], [], []]
                }, {
                    param: "operateList",
                    explain: "操作栏按钮配置",
                    type: "array",
                }, {
                    param: "operateList[0].label",
                    explain: "按钮文本",
                    type: "string"
                }, {
                    param: "operateList[0].clickFun",
                    explain: "点击事件回调的方法名称",
                    type: "string",
                    defaultValue: "回调参数：(rowInfo,btn,scope)"
                }, {
                    param: "operateList[0].costomClass",
                    explain: "自定义类名",
                    type: "string"
                }, {
                    param: "operateList[0].disabled",
                    explain: "禁用的方法，返回值true表示禁用",
                    type: "function | boolean",
                    defaultValue: "(rowInfo,btn)"

                }, {
                    param: "operateList[0].show",
                    explain: "显示的方法，返回值true表示显示",
                    type: "function",
                    defaultValue: "(rowInfo,btn,scope)"
                }, {
                    param: "operateList[0].icon",
                    explain: "操作前图片配置，可使用字体图标和图片",
                    type: "string",
                }, {
                    param: "operateList[0].type",
                    explain: "内置删除、增加、移动行，定位操作",
                    type: "string",
                }, {
                    param: "operateList[0].inMore",
                    explain: "是否显示在更多操作中,配合moreOperate.useInMore一起使用",
                    type: "boolean",
                },
            ]
        }, {
            modelType: "eventModel",
            desc: "样例:<tong-table @doInputBlur='doInputFocus' />",
            listData: [
                {
                    name: "doInputBlur",
                    explain: `input失焦事件统一处理`,
                    param: "(rowInfo,key,value,scope)",
                }, {
                    name: "doInputFocus",
                    explain: `input聚焦事件统一处理`,
                    param: "(rowInfo,key,value,scope)",
                }, {
                    name: "doInput",
                    explain: `input事件统一处理`,
                    param: "(rowInfo,key,value,scope)",
                }, {
                    name: "tongSelectChange",
                    explain: `下拉框change事件统一处理`,
                    param: "(value,rowInfo,item,scope)",
                }, {
                    name: "datePikcerChange",
                    explain: `时间选择器change事件统一处理`,
                    param: "(value,rowInfo,item,scope)",
                }, {
                    name:"switchChange",
                    explain: `开关change事件统一处理`,
                    param: "(value,rowInfo,item,scope)",
                },{
                    name: "radioChange",
                    explain: `单选change事件统一处理`,
                    param: "(value,rowInfo,item,scope)",
                }, {
                    name: "checkboxChange",
                    explain: `复选change事件统一处理`,
                    param: "(value,rowInfo,item,scope)",
                }, {
                    name: "select",
                    explain: "表格复选框单选",
                    param: "(selection,row)",
                }, {
                    name: "select-all",
                    explain: "表格复选框批量",
                    param: "(selection)",
                }, {
                    name: "tableRadioChange",
                    explain: "表格单选 选中事件回调",
                    param: "(scope)",
                }, {
                    name: "current-change",
                    explain: "分页器--当前页改变，可参考ele",
                    param: "(currentPage)",
                }, {
                    name: "size-change",
                    explain: "分页器--size改变，可参考ele",
                    param: "(size)",
                }, {
                    name: "prev-click",
                    explain: "分页器--上一页点击，可参考ele",
                    param: "(currentPage)",
                }, {
                    name: "next-click",
                    explain: "分页器--下一页点击，可参考ele",
                    param: "(currentPage)",
                }, {
                    name: "filterChange",
                    explain: "表头过滤触发，一个参数",
                    param: "(filtes)"
                }, {
                    name: "expandChange",
                    explain: "当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）",
                    param: "row, (expandedRows | expanded)"
                }, {
                    name: "cellSureCallback",
                    explain: "内联编辑保存后的回调",
                    param: "(value,prop,rowInfo)"
                }
            ]
        }, {
            modelType: "interfaceModel",
            desc: "<tong-table ref='tongTable' />",
            listData: [
                {
                    name: "resetOrder",
                    explain: "重置排序",
                    example: "this.$refs.tongTable.resetOrder()"
                }, {
                    name: "getSelectItems",
                    explain: "获取选中的数据中prop的集合,不传prop则获取选中的所有数据集合",
                    param: "(prop)",
                    example: "this.$refs.tongTable.getSelectItems()"
                }, {
                    name: "toggleRowSelection",
                    explain: "设置单行选中，可参考ele表格",
                    param: "(row,selected)",
                    example: "this.$refs.tongTable.toggleRowSelection(row,selected)"
                }, {
                    name: "toggleAllSelection",
                    explain: "设置所有行选中，可参考ele表格",
                    example: "this.$refs.tongTable.toggleAllSelection()"
                }, {
                    name: "clearSelection",
                    explain: "清空选中",
                    example: "this.$refs.tongTable.clearSelection()"
                }, {
                    name: "toggleRowExpansion",
                    explain: "用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）",
                    example: "this.$refs.tongTable.toggleRowExpansion(row,expanded)"
                }, {
                    name: "clearFilter",
                    explain: "清空过滤",
                    example: "this.$refs.tongTable.clearFilter(columnKey)",
                    param: "不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件"
                }, {
                    name: "validate",
                    explain: "校验行数据接口，使用自定义校验方法校验数据,传入keys校验key，否则所有需要校验的数据",
                    example: "this.$refs.tongTable.validate(scope,keys)",
                    param: "(scope,keys)"
                }, {
                    name: "validateAll",
                    explain: "校验表格所有数据，方法返回值true表示有校验失败，false表示无校验失败",
                    example: "this.$refs.tongTable.validateAll()"
                }, {
                    name: "clearError",
                    explain: "清除表格红字提醒信息，有scope则清空当前行，否则清空表格所有红字提醒",
                    example: "this.$refs.tongTable.clearError(scope)",
                    param: "(scope)"
                }
            ]
        }, {
            modelType: "slotModel",
            listData: [
                {
                    name: "slot",
                    explain: "slot是对应tableModel中的slot值,列插槽，局部作用域slot-scope='{rowInfo,value,index,scope}'",
                }, {
                    name: "empty",
                    explain: "空数据的插槽",
                }, {
                    name: "expand",
                    explain: "行展开的插槽，需要配置:expandShow='true'，局部作用域slot-scope='{rowInfo,index}'",
                }
            ]
        },
    ]
}
