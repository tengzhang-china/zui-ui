module.exports = {
    title: "tongDrag",
    desc: "拖拽容器，支持横向、纵向拖拽，缩放，最大化，最小化",
    recordList: [
        {
            version:"1.1.3-6",
            editor:"刘萌迪",
            time: "2021-1-30 10:00",
            contentList:[
                "增加tongDrag",
            ]
        }
    ],

    exampleList: [
        {
            title: "基础使用",
            desc: "",
            codeConfig: {
                codeEditorHeight: "450px",
                codeComponent: {
                    template: `<tong-drag :width='width' :height='height' :left='left' :top='top'>
        <div slot='slotContent'>你好！ 我是一个灵活的组件。 你可以拖我四处，你可以调整我的大小。</div>
    </tong-drag>`,
                    data() {
                        return {
                            width: 300,
                            height: 100,
                            left: 0,
                            top: 0
                        }
                    },
                }
            }
        }, {
            title: "最大化、最小化、只拖动头部",
            desc: "",
            codeConfig: {
                codeEditorHeight: "450px",
                codeComponent: {
                    template: `<tong-drag 
        :width='width' 
        :height='height' 
        :left='left' 
        :top='top' 
        :dragHandle='".drag-title"'
        :dragTitle='"标题"'
        :titleMinimize='true'
        :titleMaximize='true'>
        <div slot='slotContent'>你好！ 我是一个灵活的组件。 你可以拖我四处，你可以调整我的大小。</div>
    </tong-drag>`,
                    data() {
                        return {
                            width: 300,
                            height: 100,
                            left: 0,
                            top: 0
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
                    param: "width",
                    explain: "元素宽度",
                    type: "number",
                    defaultValue: "0"
                }, {
                    param: "height",
                    explain: "元素高度",
                    type: "number",
                    defaultValue: "0"
                }, {
                    param: "left",
                    explain: "元素左偏移",
                    type: "number",
                    defaultValue: "0"
                }, {
                    param: "top",
                    explain: "元素上偏移",
                    type: "number",
                    defaultValue: "0"
                }, {
                    param: "minWidth",
                    explain: "最小宽度",
                    type: "number",
                    defaultValue: "0"
                }, {
                    param: "minHeight",
                    explain: "最小高度",
                    type: "number",
                    defaultValue: "0"
                }, {
                    param: "maxWidth",
                    explain: "最大宽度",
                    type: "number",
                    defaultValue: "500"
                }, {
                    param: "maxHeight",
                    explain: "最大高度",
                    type: "number",
                    defaultValue: "500"
                }, {
                    param: "parent",
                    explain: "元素的移动和尺寸是否限制为父元素",
                    type: "boolean",
                    defaultValue: "true"
                }, {
                    param: "draggable",
                    explain: "是否可以拖动",
                    type: "boolean",
                    defaultValue: "true"
                }, {
                    param: "resizable",
                    explain: "是否可调整大小",
                    type: "boolean",
                    defaultValue: "true"
                }, {
                    param: "axis",
                    explain: "拖动方向",
                    type: "string",
                    defaultValue: "both",
                    values: "x,y,both"
                }, {
                    param: "className",
                    explain: "元素类名",
                    type: "string",
                }, {
                    param: "dragHandle",
                    explain: "用于拖动的div类名（.className）",
                    type: "string",
                }, {
                    param: "dragCancel",
                    explain: "防止拖动的div类名（.className）",
                    type: "string",
                }, {
                    param: "dragTitle",
                    explain: "标题",
                    type: "string"
                }, {
                    param: "titleMaximize",
                    explain: "最大化",
                    type: "boolean",
                    defaultValue: "false"
                }, {
                    param: "titleMinimize",
                    explain: "最小化",
                    type: "boolean",
                    defaultValue: "false"
                }
            ],
        }, {
            modelType: "eventModel",
            listData: [
                {
                    name: "resizing",
                    explain: "调整大小",
                    param: "(left,top,width,height)",
                }, {
                    name: "dragging",
                    explain: "拖拽",
                    param: "(left,top)",
                }, {
                    name: "maximize",
                    explain: "最大化",
                    param: "",
                }, {
                    name: "minimize",
                    explain: "最小化",
                    param: "",
                }
            ]
        }
    ],
}