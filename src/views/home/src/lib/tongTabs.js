module.exports = {
    title: "tongTabs",          //大标题
    desc: "Tabs 标签页", //大标题说明

    recordList: [
        {
            version:"1.1.8",
            editor:"张腾",
            time:"2021-4-16 17:00",
            contentList:[
                "tongTabs动态修改tabModel"
            ]
        },
        {
            version: "1.1.2-19",
            editor: "张腾",
            time: "2020-12-25 15:24",
            contentList: [
                "调整tab组件",
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
            title: "基础用法", //示例标题
            desc: "activeClass.sync 可以双向更新,基础的、简洁的标签页。", //示例标题示例
            
            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: `<tongTabs :activeClass='activeClass' :tabsModel='tabsModel'>
        <div slot='slotContent1'>这是插槽1</div>
        <div slot='slotContent2'>这是插槽2</div>
        <div slot='slotContent3'>这是插槽3</div>
        <div slot='slotContent4'>这是插槽4</div>
    </tongTabs>`,
                    data() {
                        return {
                            activeClass:'标题1',
                            tabsModel:[
                                {
                                    label:"标题1",
                                    slotContent:'slotContent1'
                                },
                                {
                                    label:"标题2",
                                    slotContent:'slotContent2'
                                },
                                {
                                    label:"标题3",
                                    slotContent:'slotContent3'
                                },
                                {
                                    label:"标题4",
                                    slotContent:'slotContent4'
                                }
                            ]
                        }
                    },
                    render(h) {
                        return (<tong-Tabs activeClass={this.activeClass} tabsModel={this.tabsModel}/>)
                    },
                },
            },
        },
        {
            title: "选项卡样式", //示例标题
            desc: "选项卡样式的标签页，type可以选择'card'和'border-card'", //示例标题示例
            
            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: `<tongTabs :type='type' :activeClass='activeClass' :tabsModel='tabsModel'>
        <div slot='slotContent1'>这是插槽1</div>
        <div slot='slotContent2'>这是插槽2</div>
        <div slot='slotContent3'>这是插槽3</div>
        <div slot='slotContent4'>这是插槽4</div>
    </tongTabs>`,
                    data() {
                        return {
                            type:'card',
                            activeClass:'标题1',
                            tabsModel:[
                                {
                                    label:"标题1",
                                    slotContent:'slotContent1'
                                },
                                {
                                    label:"标题2",
                                    slotContent:'slotContent2'
                                },
                                {
                                    label:"标题3",
                                    slotContent:'slotContent3'
                                },
                                {
                                    label:"标题4",
                                    slotContent:'slotContent4'
                                }
                            ]
                        }
                    },
                    render(h) {
                        return (
                            <tong-Tabs type={this.type} activeClass={this.activeClass} tabsModel={this.tabsModel}/>
                        )
                    },
                },
            },
        },
       
        {
            title: "带删除标签的用法", //示例标题
            desc: "可删除标签的标签页。", //示例标题示例
            
            codeConfig: {
                codeEditorHeight: "250px",
                codeComponent: {
                    template: `<tongTabs :activeClass='activeClass' :tabsModel='tabsModel'>
        <div slot='slotContent1'>这是插槽1</div>
        <div slot='slotContent2'>这是插槽2</div>
        <div slot='slotContent3'>这是插槽3</div>
        <div slot='slotContent4'>这是插槽4</div>
    </tongTabs>`,
                    data() {
                        return {
                            activeClass:'标题1',
                            tabsModel:[
                                {
                                    label:"标题1",
                                    closable:true,
                                    slotContent:'slotContent1'
                                },
                                {
                                    label:"标题2",
                                    closable:true,
                                    slotContent:'slotContent2'
                                },
                                {
                                    label:"标题3",
                                    closable:true,
                                    slotContent:'slotContent3'
                                },
                                {
                                    label:"标题4",
                                    closable:true,
                                    slotContent:'slotContent4'
                                }
                            ]
                        }
                    },
                    render(h) {
                        return (<tong-Tabs activeClass={this.activeClass} tabsModel={this.tabsModel}/>)
                    },
                },
            },
        },
    ],


    tableList:[
        {
            modelType: "propModel", //表格模板类型
            listData:[
                {
                    param:"type", 
                    explain:"风格类型",
                    type:"string",
                    values:'card/border-card',
                    defaultValue:"-",
                },
                {
                    param:"tabsModel", 
                    explain:"选项卡信息",
                    type:"array",
                    defaultValue:"-",
                },
                {
                    param:"activeClass", 
                    explain:"默认选中的标签",
                    type:"string",
                    defaultValue:"-",
                },
                {
                    param:"slotContent", 
                    explain:"内容区插槽名",
                    type:"string",
                    defaultValue:"-",
                },
                {
                    param:"slotLabel", 
                    explain:"标签标题插槽名",
                    type:"string",
                    defaultValue:"-",
                },
                {
                    param:"closable", 
                    explain:"标签是否可关闭",
                    type:"boolean",
                    defaultValue:"false",
                },
                {
                    param:"disabled", 
                    explain:"标签是否可禁止",
                    type:"boolean",
                    defaultValue:"false",
                },
            ]
        },{
            modelType: "eventModel",
            desc: "样例:<tong-tab @tab-click='tabClick' />",
            listData: [
                {
                    name: "tab-click",
                    explain: `点击tab`,
                    param: "({tab,event})",
                },{
                    name: "tab-remove",
                    explain: `删除tab`,
                    param: "(label)",
                },
            ]
        }
    ],
}