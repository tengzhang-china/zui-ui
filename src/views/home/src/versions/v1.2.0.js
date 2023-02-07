/*
 * @Author: your name
 * @Date: 2021-04-22 15:19:21
 * @LastEditTime: 2021-04-22 15:39:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tongcomps\src\views\home\src\versions\v1.2.0.js
 */
module.exports = {
    title: "v1.2.0",
    desc: "已发布",
    exampleList: [
        {
            title:"tongExportList",
            contentList:[
                "增加导出文件地址",
                "添加字段自动过滤重复字段，通过cn过滤",
                "业务组件 选择列表导出字段导出"
            ]
        },
        {
            title:"tongDragX",
            contentList:[
                "增加横向拖拽类tong-drag-x"
            ]
        },
        {
            title:"tongSelect",
            contentList:[
                "懒加载自动拉去数据进行会写"
            ]
        },
        {
            title:"scrollLink",
            contentList:[
                "scrollLink增加展开项默认配置",
                "增加changeCollapse事件",
                "增加手风琴accordion"
            ]
        },
        {
            title:"tong-data-source",
            contentList:[
                "增加数据源额外请求参数dataSourceParams",
                "修复取消选中不可用的问题",
                "增加是否同数据源选中的配置项",
                "增加业务组件：数据源到表的选择",
            ]
        },
        {
            title:"tongForm",
            contentList:[
                "去掉axiosMounted",
                "tongForm增加显隐控制",
            ]
        },
        {
            title:"tongEditor",
            contentList:[
                "增加自定义提示customTipArr配置",
                "增加搜索方法findAll findNext findPrevious"
            ]
        },
        {
            title:"minioUpload",
            contentList:[
                "minioUpload调整下载的样式",
                "上传多选bug修复",
                "组件引入报错bug修复",
                "拖拽上传问题修复",
            ]
        },
        {
            title:"tongSearch",
            contentList:[
                "增加选择搜索类型前的回调函数beforeTypeChange",
                "时间选择器type优先使用config.type",
                "调整目录结构",
                "自定义按钮调整圆角为0"
            ]
        },
        {
            title:"tongTabs",
            contentList:[
                "tongTabs动态修改tabModel"
            ]
        },
        {
            title:"公共方法",
            contentList:[
                "增加downloadUrl",
                "增加获取中文首字母的方法getFirstWord",
                "增加格式化xml的formateXml",
                "usual增加jsonToXml转换方法"
            ]
        },
        {
            title: "穿梭树",
            contentList: [
                "修复穿梭树穿梭数据为空的问题",
                "优化穿梭树展开问题",
                "处理穿梭树穿梭treeData警告",
                "穿梭树增加全部移动限制（存在禁用的，则全部移动按钮失效）",
                "增加过滤字母，首字母排序配置",
                "增加searchShow（是否展示搜索栏）配置",
                "统计和按钮联动"
            ]
        },
        {
            title:"tongTable",
            contentList:[
                "tongTable下拉互斥与内置增加行联动调整",
                "tongTalbe增加过滤树",
                "tongTable调整错误信息展示方式（配置校验不需设置rowStyle）",
                "增加toggleRowExpansion设置展开",
                "tongTable增加border配置项",
                "tongTable增加行类名配置rowClassName",
                "补充参数reserveSelection",
                "增加行点击回调rowClick",
                "增加表格复选",
                "增加展开栏图标隐藏函数setExpandHidden",
                "操作栏更多配置项调整",
                "增加表格单选",
                "增加列类型--radio 单选",
                "增加列类型--datePicker 时间选择器",
                "增加重绘列 redraw",
                "增加增加操作栏按钮过多自动收起的配置项（moreOperate）"
            ]
        },
        {
            title:"tongTree",
            contentList:[
                "增加setRadioChosen设置特殊模式单选的值",
                "tongTree特殊单选增加点击选中的单选，自动取消的功能",
                "tongTree优化回写半选和全选",
                "tongTree增加done-more，点击分页...后的回调",
                "tongTree懒加载分页可点击范围调整",
                "tongTree增加内容区插槽before behind custom",
                "增加getNode接口",
                "增加defaultCheckedKeys",
                "增加setChecked",
                "增加filterNodeMethod配置项",
                "隐藏加载更多的的复选框",
                "增加滚动加载",
                "增加分页配置",
                "下拉菜单不联动formate.stopPropagation",
                "增加树展开详情插槽相关内容",
                "编辑节点使用动态的label",
                "补充canClickCancel",
                "补充nodeClick接口第三个参数",
                "增加treeBoxStyle样式配置，常用于下拉面板中的树"
            ]
        },
        {
            title:"分类树",
            contentList:[
                "分类树增加禁用disabled",
                "增加接口filter"
            ]
        },
        {
            title:"tongDialog",
            contentList:[
                "修复backCallback函数不执行",
                "增加top值auto垂直方向居中",
                "弹框按钮禁用的颜色样式"
            ]
        },
        {
            title:"tongSearch",
            contentList:[
                "调整input宽度响应式",
                "tongSearch去掉input的blur事件（刷新和搜索重复）"
            ]
        },
        {
            title:"tongIcon",
            contentList:[
                "tongIcon 增加图片格式png|jpg|jpeg|gif|svg|bmp"
            ]
        },

        
        {
            title:"minioUpload",
            contentList:[
                "miniUpload增加额外请求参数uploadParams",
                "bugfixed",
                "修复删除时报错的问题"
            ]
        }
    ]
}