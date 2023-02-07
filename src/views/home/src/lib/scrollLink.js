module.exports = {
    title: "scrollLink",          //大标题
    desc: "滚动条和tab控制内容区定位", //大标题说明

    recordList: [
        {
            version:"1.2.0",
            editor:"张腾",
            time:"2021年9月9日17:04:58",
            contentList:[
                "scrollLink增加展开项默认配置（动态配置）"
            ]
        },
        {
            version:"1.1.25",
            editor:"张腾",
            time:"2021年8月27日14:01:57",
            contentList:[
                "增加changeCollapse事件"
            ]
        },
        {
            version:"1.1.15",
            editor:"张腾",
            contentList:[
                "增加手风琴accordion"
            ]
        },
        {
            version: "1.1.2-20",
            editor: "张腾", 
            time: "2020-07-27 10:15",
            contentList: [
                "增加复选框配置项",
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

    exampleList: [
        {
            title: "标准模式", //示例标题
            desc: "标准模式", //示例标题示例
            
            codeConfig: {
                codeEditorHeight: "600px",
                template:`<scrollLink :style='{width,height}'  :activeIndex='activeIndex' :activeNames='activeNames' :configArr='configArr'>
        <div style='height:200px;' slot='slot_0'>这是插槽1</div>
        <div style='height:200px;' slot='slot_1'>这是插槽2</div>
        <div style='height:200px;' slot='slot_2'>这是插槽3</div>
        <div style='height:200px;' slot='slot_3'>这是插槽4</div>
    </scrollLink>`,
                codeComponent: {
                    data() {
                        let _this = this;
                        return {
                            width:'800px',
                            height:'350px',
                            activeIndex: 0,
                            activeNames: [0,1,2,3],

                            selectbox:true,
                            configArr: [
                                {
                                    label: "label信息1",
                                    id: "lablel1",
                                    show: true,
                                    isCheckbox:true,
                                    value:true
                                },
                                {
                                    label: "label信息2",
                                    id: "lablel2",
                                    show: true,
                                },
                                {
                                    label: "label信息3",
                                    id: "lablel3",
                                    show: true,
                                },
                                {
                                    label: "label信息4",
                                    id: "lablel4",
                                    show: true
                                }
                            ],
                        }
                    },
                    render(h) {
                        return (<scrollLink />)
                    },
                },
            },
        },
    ],


    tableList:[
        {
            modelType: "propModel",
            listData:[
                {
                    param:"width,height", 
                    explain:"scrollLink的宽高",
                    type:"string",
                    defaultValue:"-",
                },
                {
                    param:"accordion",
                    explain:"是否开启手风琴效果",
                    type:"boolean",
                    defaultValue:"false"
                },
                {
                    param:"activeIndex", 
                    explain:"右侧tab默认选中项",
                    type:"number",
                    defaultValue:"0",
                },
                {
                    param:"activeNames", 
                    explain:"左侧折叠面板默认展开项",
                    type:"Array",
                    defaultValue:"[0]",
                },
                {
                    param:"configArr", 
                    explain:"折叠面板和tab配置信息,对象数组,元素是index,show是控制显隐",
                    type:"Array",
                    defaultValue:"-",
                },{
                    param:"configArr[0].label",
                    explain:"折叠面板标题",
                    type:"string",
                    defaultValue:"",
                },{
                    param:"configArr[0].id",
                    explain:"折叠面板id，每一个id保持单一",
                    type:"string",
                    defaultValue:"",
                },{
                    param:"configArr[0].show",
                    explain:"当前折叠面板是否展示",
                    type:"boolean",
                    defaultValue:"true",
                },{
                    param:"configArr[0].isCheckbox",
                    explain:"折叠面板标题部分是否是复选框",
                    type:"boolean",
                    defaultValue:"false",
                },{
                    param:"configArr[0].value",
                    explain:"复选框双向绑定的值",
                    type:"boolean",
                    defaultValue:"false",
                }
                
            ]
        },{
            modelType: "slotModel",
            listData: [
                {
                    name: "slot_index",
                    explain: "内容区域插槽，index是对应索引",
                }
            ]
        },{
            modelType: "eventModel",
            listData: [
                {
                    name: "checkChange",
                    explain: "复选框改变触发，一个参数",
                    param: "(item)",
                },{
                    name:"changeCollapse",
                    explain:"当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)",
                    type:"array|string",
                    param:"(activeNames)"
                }
            ]
        },
    ],

    
}