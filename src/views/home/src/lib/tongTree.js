module.exports = {
    title: "tongTree",
    desc: "树形控件",
    menuOrder:3,
    recordList: [
        {
            version:"1.2.11",
            editor:"张腾",
            contentList:[
                "setHeightLight增加入参(key)"
            ]
        },
        {
            version:"1.2.10",
            editor:"张腾",
            time:"2021年12月9日17:33:41",
            contentList:[
                "自动缓存展开节点"
            ]
        },
        {
            version:"1.2.7",
            editor:"张腾",
            time:"2021年11月8日18:00:21",
            contentList:[
                "defaultExpandKeys默认展开",
                "tongTree修复复选上限控制"
            ]
        },
        {
            version:"1.2.4",
            editor:"张腾",
            time:"2021年10月28日10:25:54",
            contentList:[
                "tongTree过滤（去掉...）"
            ]
        },
        {
            version:"1.2.3",
            editor:"张腾",
            time:"2021年10月8日10:15:43",
            contentList:[
                "tongTree下拉层级优化"
            ]
        },
        {
            version:"1.1.26",
            editor:"张腾",
            time:"2021年9月1日10:46:13",
            contentList:[
                "补充getCheckedNodes的说明"
            ]
        },
        {
            version:"1.1.24",
            editor:"张腾",
            time:"2021年8月16日09:45:04",
            contentList:[
                "增加setRadioChosen设置特殊模式单选的值",
                "tongTree特殊单选增加点击选中的单选，自动取消的功能"
            ]
        },  
        {
            version:"1.1.22",
            editor:"张腾",
            time:"2021年8月6日11:37:15",
            contentList:[
                "详情插槽换行",
                "增加checkChanged参数data"
            ]
        },
        {
            version:"1.1.21",
            editor:"张腾",
            time:"2021年7月27日16:21:19",
            contentList:[
                "tongTree优化回写半选和全选"
            ]
        },
        {
            version:"1.1.19",
            editor:"张腾",
            time:"2021年7月14日09:21:11",
            contentList:[
                "增加点击...之后的回调done-more",
                "tongTree增加customHideCheckbox方法，用来配置复选显隐"
            ]
        },
        {
            version:"1.1.18",
            editor:"张腾",
            time:"2021年7月9日13:41:17",
            contentList:[
                "tongTree懒加载分页可点击范围调整"
            ]
        },
        {
            version:"1.1.17",
            editor:"张腾",
            time:"2021年6月28日15:18:36",
            contentList:[
                "增加属性defaultCheckedKeys",
                "增加接口getNode",
                "增加接口setChecked",
            ]
        },
        {
            version:"1.1.16",
            editor:"张腾",
            time:"2021年6月21日15:52:25",
            contentList:[
                "暴露filterNodeMethod过滤方法，原过滤为默认方法"
            ]
        },
        {
            version:"1.1.15",
            editor:"张腾",
            time:"2021-6-15 11:20",
            contentList:[
                "隐藏加载更多的的复选框",
                "滚动加载",
                "增加分页配置项",
                "取消高亮配置项修复"
            ]
        },
        {
            version:"1.1.12",
            editor:"张腾",
            time:"2021-5-13 10:30",
            contentList:[
                "tongTree下拉菜单不联动formate.stopPropagation"
            ]
        },
        {
            version:"1.1.10",
            editor:"张腾",
            time:"2021-4-25 11:30",
            contentList:[
                "增加树展开详情插槽相关内容",
            ]
        },
        {
            version:"1.1.8",
            editor:"张腾",
            time:"2021-4-12 15:00",
            contentList:[
                "编辑节点使用动态的label",
                "增加nodeClickDisabled（禁止点击）配置项"
            ]
        },
        {
            version:"1.1.6",
            editor:"张腾",
            time:"2021-3-29 17:00",
            contentList:[
                "补充canClickCancel",
                "补充nodeClick接口第三个参数",
                "增加treeBoxStyle样式配置，常用于下拉面板中的树"
            ]
        },
        {
            version: "1.1.3-26",
            editor: "张腾",
            time: "2021-03-18 12:00",
            contentList:[
                "增加插槽treeHeader,treeFooter",
                "设置叶子节点不可拖选复制",
                "tongTree增加展开配置项expandOnClickNode"
            ]
        },
        {
            version: "1.1.3-18",
            editor: "张腾",
            time: "2021-03-8 11:00",
            contentList:[
                "tongTree特殊模式问题修复"
            ]
        },
        {
            version: "1.1.3-14",
            editor: "张腾",
            time: "2021-03-4 11:10",
            contentList:[
                "修复操作栏空白"
            ]
        },
        {
            version: "1.1.3-11",
            editor: "张腾",
            time: "2021-03-1 11:20",
            contentList:[
                "选中高亮",
                "下拉操作项禁用"
            ]
        },{
            version: "1.1.2-18",
            contentList:[
                "tongTree增加condition配置项",
                "tongTree右击菜单展示位置调整",
                "增加tips",
                "render-click 点击render，阻止冒泡",
                "调整右击局部作用域",
                "增加tongTree的灵活配置",
                "增加懒加载配置项",
                "操作栏自定义 renderOperate",
                "动态处理...展开的按钮，返回按钮数组 formateOperate",
                "修复自定义props",
            ]
        }
    ],

    exampleList: [
        {
            title: "展示树",
            desc: "树形结构展示数据,设置height可以自动加载,过滤树（输入框形式），筛选树（按钮形式）",

            codeConfig: {
                codeEditorHeight: "510px",
                codeComponent: {
                    template: `
                    <div>
                        <el-input
                            placeholder="输入关键字进行过滤"
                            v-model="filterText">
                        </el-input>
                        <el-button @click="myfilterTree('label-0-0')">过滤展示 label-0-0</el-button>   
                        <el-button @click="myfilterTree('label-1-0')">过滤展示 label-1-0</el-button>  

                        <tong-tree 
                            ref="tongTree"
                            :nodeKey="nodeKey"
                            :showCheckbox="true"
                            :multipleLimit="4"
                            :renderIcon="renderIcon"
                            :treeData="treeData"
                            :height="300"
                            :moreFunction="moreFunction"
                            @nodeClick="nodeClick"
                            :filterNodeMethod="myfilterNodeMethod"
                        >
                        </tong-tree>
                </div> 
    `,
                  
                    data() {
                        return {
                            nodeKey: "label",
                            filterText: "",
                            treeData: Array(21).fill("").map((val,i)=>{
                                if(i<20){
                                    return {
                                        label:`label${i}`,
                                        children:Array(21).fill("").map((v,i1)=>{
                                            if(i1<20){
                                                return {
                                                    label:`label-${i}-${i1}`
                                                }
                                            }else{
                                                return {
                                                    hasMore:true
                                                }
                                            }
                                        })
                                    }
                                }else{
                                    return {
                                        hasMore:true
                                    }
                                }
                            })
                        }
                    },
                    watch: {
                        filterText(val) {
                            console.log(val);
                            this.$refs.tongTree.filter(val);
                        }
                    },
                    methods: {
                        renderIcon(node, data) {
                            return "el-icon-platform-eleme"
                        },
                        nodeClick(data, node) {
                            console.log(data,node)
                        },
                        moreFunction(){
                            return new Promise(resolve=>{
                                setTimeout(()=>{
                                    resolve({
                                        hasMore:false,
                                        data:[{label:"ddddd"}]
                                    })
                                },1000)
                            })
                        },
                        myfilterNodeMethod:function(value, data){
                             if (!value) return true;
                             return data.label&&data.label.indexOf(value) !== -1;
                         },
                         myfilterTree:function(value){
                             this.filterText=value
                         },
                    },
                },
            },
        }, {
            title: "可以操作的树",
            desc: "拖拽，编辑，展示详情插槽等，查看控制台，看对应操作信息；自定义操作按钮部分内容；分页；重复点击取消高亮",
            codeConfig: {
                codeEditorHeight: "750px",
                codeComponent: {
                    template: `<tong-tree 
        ref="tongTree"
        :showCheckbox="false"
        :renderIcon="renderIcon"
        :treeData="treeData"
        :draggable="true"
        :operateShow="true"
        :renderOperate="renderOperate"
        :operateList="operateList"
        :allowDrag="allowDrag"
        :allowDrop="allowDrop"

        moreShowKey="hasMore"
        :moreFunction="moreFunction"

        :canClickCancel="true"
        @nodeClick="nodeClick"
        
        @operateCommand="operateCommand"
        :formateOperate="formateOperate"
        
    >
        <div slot="detailSlot">detail-slot</div>
    </tong-tree>`,
                    data() {
                        return {
                            treeData: [
                                {
                                    hasMore:true,
                                    type:"prev"
                                },
                                {
                                    label: "label-1",
                                    children: [
                                        {
                                            label: "label-1-1",
                                        }, {
                                            label: "label-1-2"
                                        },{
                                            hasMore:true,
                                            type:"next"
                                        }
                                    ]
                                }, {
                                    label: "label-2",
                                },{
                                    hasMore:true,
                                    type:"next"
                                }
                            ],
                            operateList: ["删除", "编辑", "新增","展示详情插槽","隐藏详情插槽"],
                        }
                    },
                    methods: {
                        renderIcon(node, data) {
                            return "el-icon-platform-eleme"
                        },
                        allowDrag(node) {
                            return true
                        },
                        allowDrop(draggingNode, dropNode, type) {
                            return true
                        },
                        operateCommand(command, node, data) {
                            console.log(command,data)
                            if(command==="展示详情插槽"){
                                this.$refs.tongTree.showDetailSlot(data)
                            }else if(command==="隐藏详情插槽"){
                                this.$refs.tongTree.hideDetailSlot(data)
                            }
                        },
                        renderOperate(h, node) {
                            return (<div>{node.level === 1 ? '' : '自定义按钮'}</div>)
                        },
                        formateOperate(node, data) {
                            return {
                                operateList: ["测试"],
                                show: data.label == "label-1-1"
                            }
                        },
                        moreFunction(node,data){
                            if(data.type==="prev"){
                                console.log("在前面添加内容");
                                return {
                                    data:[{hasMore:true,type:"prev"},{label:'这个是新增的项'+new Date().getTime()}],
                                }
                            }else if(data.type==="next"){
                                console.log("在后面添加内容");
                                return {
                                    hasMore:true,
                                    data:[{label:'这个是新增的项'+new Date().getTime()}],
                                }
                            }
                            
                        },

                        nodeClick(node,data,highLight){
                            console.log(highLight)
                        }
                    },
                },

            }
        }, {
            title: "可以动态配置操作项的树",
            desc: "使用operateCustom，来动态配置操作栏，类型包括render,dropdown,cascader;下拉不联动树formate.stopPropagation",
            codeConfig: {
                codeEditorHeight: "750px",
                codeComponent: {
                    template: `<tong-tree 
        style="width:300px"
        :showCheckbox="false"
        :renderIcon="renderIcon"
        :treeData="treeData"
        :draggable="true"
        :operateShow="true"
        :renderOperate="renderOperate"
        :operateCustom="customOperateList"
    >
    <div slot="contextMenu" slot-scope="{ node, data }">
        <p style="width:80px">---</p>
    </div>
    </tong-tree>`,
                    data() {
                        return {
                            treeData: [
                                {
                                    label: "哇塞，这个节点的名称也真是太长了吧",
                                    children: [
                                        {
                                            label: "label-1-1",
                                        }, {
                                            label: "label-1-2",
                                            children: [
                                                {
                                                    label: "label-1-2-1"
                                                }
                                            ]
                                        }
                                    ]
                                }, {
                                    label: "label-2",
                                }
                            ],
                            customOperateList: [
                                {
                                    trigger: "hover",//hover是可见，visible一直可见
                                    type: "render",
                                    formate(node, data) {
                                        return {
                                            show: true,//是否可见，在trigger的基础上进行过滤
                                            render(h) {
                                                return (<span>+</span>)
                                            }
                                        }
                                    }
                                },
                                {
                                    trigger: "visible",//hover是可见，visible一直可见
                                    type: "render",
                                    formate(node, data) {
                                        return {
                                            show: node.level === 1,//是否可见，在trigger的基础上进行过滤
                                            render(h) {
                                                return (<span>四方块</span>)
                                            }
                                        }
                                    }
                                }, {
                                    trigger: "hover",
                                    type: "dropdown",
                                    formate(node, data) {
                                        return {
                                            show: node.level > 1,
                                            icon: "",
                                            options: [{label:"测试",disabled:function(node,data){return false}}],
                                            stopPropagation:true
                                        }
                                    }
                                }, {
                                    trigger: "hover",
                                    type: "cascader",
                                    formate(node, data) {
                                        return {
                                            show: node.level === 3,
                                            icon: "",
                                            options: [{
                                                value: 'zhinan',
                                                label: '指南', children: [{ label: 'child', value: 'ddd' }]
                                            }, { label: 1, value: 'ddds' }]
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    methods: {
                        doClick(){
                            console.log('d')
                        },
                        renderIcon(node, data) {
                            return "el-icon-platform-eleme"
                        },
                        renderOperate(h, node) {
                            return (<div>{node.level === 1 ? '大图标' : ''}</div>)
                        },
                    },
                },

            }
        }, {
            title: "懒加载树",
            desc: "懒加载树，lazy，load",
            codeConfig: {
                codeEditorHeight: "510px",
                codeComponent: {
                    template: `<tong-tree 
                    ref="tongTree"
        :showCheckbox="true"
        :renderIcon="renderIcon"
        :treeData="treeData"
        :lazy="true"
        :load="load"
        :nodeKey="nodeKey"
        :defaultExpandKeys="defaultExpandKeys"
        :defaultCheckedKeys="defaultExpandKeys"
        :moreFunction="moreFunction"
    >
    </tong-tree>`,
                    data() {
                        return {
                            defaultExpandKeys:['label-1'],
                            nodeKey: "label",
                            treeData: [
                                {
                                    id:1,
                                    label: "label-1",
                                }, {
                                    id:2,
                                    label: "label-2",
                                }
                            ]
                        }
                    },
                    methods: {
                        renderIcon(node, data) {
                            return "el-icon-platform-eleme"
                        },

                        load(node, resolve) {
                            if (node.level === 0) {
                                setTimeout(()=>{
                                    return resolve(node.data);
                                },1000)
                            }else if(node.level<5){
                                resolve([{ label: `label_${new Date().getTime()}` },{hasMore:node.level===2,isLeaf:node.level===2}]);
                            }
                        },
                        moreFunction(){
                            return {
                                data:[{label:"label"}]
                            }
                        }
                    },
                }
            }
        }, {
            title: "特殊树",
            desc: "根节点单选的多选，再品；点击已选中的--取消选中",

            codeConfig: {
                codeEditorHeight: "510px",
                codeComponent: {
                    template: `<tong-tree 
        mode="1"
        :value="value"
        nodeKey="label"
        :showCheckbox="false"
        :expandAll="true"
        :renderIcon="renderIcon"
        :treeData="treeData"
        @nodeClick="nodeClick"
    >
    </tong-tree>`,
                    data() {
                        return {
                            value: [],
                            nodeKey: "label",
                            treeData: [
                                {
                                    label: "label-1",
                                    children: [
                                        {
                                            label: "label-1-1",
                                        }, {
                                            label: "label-1-2"
                                        }, {
                                            label: "label-1-3"
                                        }, {
                                            label: "label-1-4"
                                        }
                                    ]
                                }, {
                                    label: "label-2",
                                }
                            ]
                        }
                    },
                    methods: {
                        renderIcon(node, data) {
                            return "el-icon-platform-eleme"
                        },
                        nodeClick(data, node) {
                            console.log(data.label)
                        }
                    },
                },
            },
        }
    ],

    tableList: [
        {
            modelType: "propModel", //表格模板类型
            listData: [
                {
                    param: "value",
                    explain: "树的初始值（用于tongSelect设置选中和展开）",
                    type: "string | array(多选)",
                }, {
                    param: "showCheckbox",
                    explain: "是否显示复选框",
                    type: "boolean",
                    defaultValue: "false",
                }, {
                    param:"customHideCheckbox",
                    explain:"使用样式隐藏复选框。true:隐藏。由于隐藏复选框使用的是样式，所以loading效果会被覆盖",
                    type:"function(node,data)",
                    defaultValue: "function(){return false}",
                },{
                    param: "multipleLimit",
                    explain: "复选框最大选中数量，0不做限制",
                    type: "number",
                    defaultValue: "0",
                }, {
                    param: "treeData",
                    explain: "树数据",
                    type: "array",
                    defaultValue: "[ ]",
                }, {
                    param:"filterNodeMethod",
                    explain:"树过滤的自定义方法",
                    type:"function(val,data,node)"
                },{
                    param: "lazy",
                    explain: "是否开启懒加载,配合load使用",
                    type: "boolean",
                    default: "false"
                }, {
                    param: "load",
                    explain: "加载子树数据的方法，仅当 lazy 属性为true 时生效",
                    type: "function",
                    defaultValue: "function(node, resolve)"
                }, {
                    param: "expandAll",
                    explain: "是否展开所有节点",
                    type: "boolean",
                    defaultValue: "false",
                }, {
                    param: "nodeKey",
                    explain: "节点的key",
                    type: "string",
                    defaultValue: "value",
                }, {
                    param: "defaultProps",
                    explain: "子节点和文本的key设置",
                    type: "object",
                    defaultValue: "{label:'label',children:'children',isLeaf:false,disabled:false}",
                }, {
                    param:"defaultCheckedKeys",
                    explain:"默认选中",
                    type:"array",
                    default:"[ ]"
                },{
                    param:"defaultExpandKeys",
                    explain:"默认展开",
                    type:"array",
                    default:"[ ]"
                },{
                    param: "draggable",
                    explain: "是否开启拖拽",
                    type: "boolean",
                    defaultValue: "false",
                }, {
                    param: "allowDrag",
                    explain: "是否允许拖拽",
                    type: "function",
                    defaultValue: "function(node){return false}",
                }, {
                    param: "allowDrop",
                    explain: "是否允许放开",
                    type: "function",
                    defaultValue: "	function(draggingNode,dropNode,type){return true}",
                }, {
                    param: "renderIcon",
                    explain: "节点图标配置",
                    type: "function",
                    defaultValue: "function(node,data){return ''}",
                }, {
                    param: "operateShow",
                    explain: "操作栏显示",
                    type: "boolean",
                    defaultValue: "false",
                }, {
                    param: "operateList",
                    explain: "操作栏配置，点击时触发回调函数operateCommand，配置为空数组[]则不展示...",
                    type: "array",
                }, {
                    param: "formateOperate",
                    explain: "动态处理...展开的按钮，返回按钮数组和按钮是否可见的配置，优先级高于operateList",
                    type: "function",
                    defaultValue: "function(node,data){return {operateList:[],show:false}}"
                }, {
                    param: "renderOperate",
                    explain: "操作栏自定义",
                    type: "function",
                    defaultValue: "function(h,node){return (<span></span>)}"
                }, {
                    param: "operateCustom",
                    explain: "操作栏灵活配置，可排序等，具体可参考动态配置的树示例",
                    type: "array",
                }, {
                    param: "operateCustom.trigger",
                    explain:"操作项出现条件，hover表示移入行操作栏展示，visible表示一直可见",
                    type:"string"
                },{
                    param: "operateCustom.type",
                    explain:"操作项类型，render、dropdown、cascader",
                    type:"string"
                },{
                    param: "operateCustom.formate",
                    explain:"主体函数渲染部分，接受两个参数(node,data)",
                    type:"function",
                    defaultValue: "function(node,data){return {icon:' ',label:' ',options:[ ],stopPropagation:false}}",
                },{
                    param: "mode",
                    explain: "特殊模式设置",
                    type: "string",
                    values: "1"
                }, {
                    param:"canClickCancel",
                    explain:"点击选中节点是否可以取消选中，对应nodeClick接口第三个参数(true表示高亮，false表示取消点击)",
                    type:"boolean",
                    defaultValue:"false",
                },{
                    param: "nodeClick",
                    explain: "节点点击的回调方法名",
                    type: "string",
                    defaultValue: "nodeClick",
                },{
                    param:"checkStrictly",
                    explain:"在显示复选框的情况下，是否严格的遵循父子不互相关联的做法",
                    type: "boolean",
                    defaultValue: "false",
                },{
                    param:"accordion",
                    explain:"是否每次只打开一个同级树节点展开",
                    type: "boolean",
                    defaultValue: "false",
                },{
                    param:"expandOnClickNode",
                    explain:"是否在节点上面点击展开子项，false表示只能点击三角图标展开下一级",
                    type: "boolean",
                    defaultValue: "true",
                },{
                    param:"nodeClickDisabled",
                    explain:"点击禁用",
                    type:"boolean",
                    defaultValue:"false"
                },{
                    param:"treeBoxStyle",
                    explain:"调整树容器样式，通常是在下拉面板中需要设置",
                    type:"object",
                    default:"{}",
                },{
                    param:"moreShowKey",
                    explain:"判断展示分页的字段",
                    type:"string",
                    defaultValue:"hasMore"
                },{
                    param:"moreFunction",
                    explain:"点击展示更多回调方法，发请求使用async",
                    type:"function",
                    defaultValue:"async function(node,data){return {}}"
                }
            ]
        }, {
            modelType: "eventModel",
            desc: "样例:<tong-tree @nodeClick='nodeClick' />",
            listData: [
                {
                    name: "nodeClick",
                    explain: `节点点击的方法回调，highLight:true表示高亮`,
                    param: "(data,node,highLight)",
                }, {
                    name: "tongTreeSelect",
                    explain: `单选的点击回调(点击叶子节点回调)`,
                    param: "(data,value)",
                }, {
                    name: "checkChanged",
                    explain: `当复选框被点击的时候触发(checkOnClickNode===true不起作用)`,
                    param: "(选中节点arr1,选中的key数组arr2,node,data)",
                },{
                    name:"check-change",
                    explain:"节点选中状态发生变化时的回调,共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点",
                    param:"(node,checked,checkData)"
                },{
                    name:"node-expand",
                    explain:"节点展开的回调。共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身",
                    param:"(data,node,ref)"
                }, {
                    name: "operateCommand",
                    explain: `操作栏点击的方法回调`,
                    param: "(command,node,data)",
                }, {
                    name: "radioChanged",
                    explain: `单选回调，mode===1的时候有效`,
                    param: "(checkData,value)",
                }, {
                    name: "saveEdit",
                    explain: `编辑名称保存`,
                    param: "(data,oldData,node)",
                }, {
                    name: "render-click",
                    explain: "点击render的回调",
                    param: "(node,data)",
                }, {
                    name: "dbClick",
                    explain: "双击",
                    param: "(node,data)",
                }, {
                    name: "cascaderClick",
                    explain: "级联的点击回调",
                    param: "(item)"
                },{
                    name:"done-more",
                    explain:"点击...执行完之后的回调",
                    param:"({node,data})"
                },
                {
                    name:"支持element-ui的tree的事件"
                }
            ]
        }, {
            modelType: "interfaceModel",
            desc: "样例:<tong-tree ref='tongTree' />",
            listData: [
                {
                    name: "getRadioArr",
                    explain: `获取单选数据，mode===1有效`,
                    example: "this.$refs.tongTree.getRadioArr()",
                }, {
                    name:"setRadioChosen",
                    explain:"设置单选，mode===1有效",
                    example: "this.$refs.tongTree.setRadioChosen([])",
                    param:"(keys)"
                },{
                    name: "getCheckedArr",
                    explain: `获取选中的keys`,
                    example: "this.$refs.tongTree.getCheckedArr()",
                }, {
                    name: "setExpandKeys",
                    explain: "设置展开",
                    example: "this.$refs.tongTree.setExpandKeys(keys)",
                    param: "(keys), 对应nodeKey集合",
                }, {
                    name: "setCheckedKeys",
                    explain: `设置选中`,
                    example: "this.$refs.tongTree.setCheckedKeys(keys)",
                    param: "(keys)",
                }, {
                    name:"setChecked",
                    explain:"通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性",
                    example:"this.$refs.tongTree.setChecked(key,checked, deep)",
                    param:"(key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中 3. boolean 类型，是否设置子节点 ，默认为 false"
                },{
                    name: "setHeightLight",
                    explain: `设置nodeKey高亮，showCheckbox===false时有效`,
                    example: "this.$refs.tongTree.setHeightLight(nodeKey)",
                }, {
                    name:"getHalfCheckedKeys",
                    explain:'获取半选',
                    example: "this.$refs.tongTree.getHalfCheckedKeys()",
                },{
                    name:"getNode",
                    explain:"通过key或者data获取node",
                    example: "this.$refs.tongTree.getNode(key)",
                    param: "(key)唯一标识"
                },{
                    name:"getCheckedNodes",
                    explain:"若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点所组成的数组",
                    param:"(leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 false 2. 是否包含半选节点，默认值为 false",
                    example: "this.$refs.tongTree.getCheckedNodes(false,false)",
                },{
                    name: "appendNode",
                    explain: `添加节点，配合operateCommand使用`,
                    example: "this.$refs.tongTree.appendNode()",
                    param: "(node,data,type)；type：child子节点，here同级节点"
                }, {
                    name: "editNode",
                    explain: `编辑节点，配合operateCommand使用`,
                    example: "this.$refs.tongTree.editNode()",
                    param: "(node,data)"
                },{
                    name:"removeNode",
                    explain: `删除节点`,
                    example: "this.$refs.tongTree.remove()",
                    param: "(node)"
                },{
                    name:"showDetailSlot",
                    explain:"展开详情",
                    example:"this.$refs.tongTree.showDetailSlot(data)",
                    param: "(data)"
                },{
                    name:"hideDetailSlot",
                    explain:"收起详情",
                    example:"this.$refs.tongTree.hideDetailSlot(data)",
                    param: "(data)"
                }
            ]
        },{
            modelType: "slotModel",
            listData: [
                {
                    name: "treeHeader",
                    explain: "tree头部插槽，使用tree作为面板的时候可能会用到",
                }, {
                    name: "treeFooter",
                    explain: "tree脚部插槽，使用tree作为面板的时候可能会用到",
                },{
                    name:"detailSlot",
                    explain: "tree展开的详情插槽 slot-scope='{node,data}'",
                },{
                    name:"before",
                    explain: "内容区前插槽 slot-scope='{node,data}'",
                },{
                    name:"behind",
                    explain: "内容区后插槽 slot-scope='{node,data}'",
                },{
                    name:"custom",
                    explain:"整个内容区插槽 slot-scope='{node,data}'"
                }
            ]
        },
    ],
}