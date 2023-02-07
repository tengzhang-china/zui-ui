module.exports = {
    title: "dom.js",
    desc: "操作dom的方法库，引入你所需要的dom操作方法",
    type:"js",

    recordList: [
        {
            version: "1.0.31",          //可使用版本
            editor: "张腾",             //修改人
            time: "2020-07-27 10:15",   //修改时间
            contentList: [              //修改内容
                "调整dom说明文档",
            ],
        }
    ],
    
    tableList:[
        {
            modelType:"methodModel",
            expand:true,
            desc:"",
            listData:[
                {
                    name:"hasClass",                       //方法名
                    explain:"判断el是否拥有类名className",  //说明
                    param:"(el,className)",                //入参
                    returns:"true | false",                //返回值
                    example:[                              //使用示例
                        "//判断div.test是否包含test类名",
                        "import {hasClass} from 'from 'tong-zui-ui/js/dom';",
                        "",                
                        "<div ref='testdom' class='test'></div>",
                        "let el = this.$refs.testDom.$el; //dom",
                        "hasClass(el, 'test'); // true",
                        "hasClass(el, 'name'); // false",
                    ],
                    exampleHeight:"120px",                //示例编辑器高度
                },{
                    name:"addClass",
                    explain:"向el添加className类名",
                    param:"(el,className)",
        
                    example:[
                        "import {addClass} from 'from 'tong-zui-ui/js/dom';",
                        "",                
                        "<div ref='testdom'></div>",
                        "let el = this.$refs.testDom.$el;",
                        "addClass(el, 'test');  // <div ref='testdom' class='test'></div>",
                    ],
                },{
                    name:"removeClass",
                    explain:"删除el的类名className",
                    param:"(el,className)",
                    example:[
                        "import {removeClass} from 'from 'tong-zui-ui/js/dom';",
                        "",                
                        "<div ref='testdom' class='test'></div>",
                        "let el = this.$refs.testDom.$el;",
                        "removeClass(el, 'test');  // <div ref='testdom'></div>",
                    ],
                },{
                    name:"getScrollPosition",
                    explain:"获取滚动el的坐标",
                    param:"(el = window)",
                    returns:"{x:number, y:number}",
        
                    example:[
                        "import {getScrollPosition} from 'from 'tong-zui-ui/js/dom';",
                        "",                
                        "<div ref='testdom' class='test'></div>",
                        "let el = this.$refs.testDom.$el;",
                        "getScrollPosition(el);  // {x:number,y:number}",
                    ],
                },{
                    name:"scrollToTop",
                    explain:"滚动回顶部",
        
                    example:[
                        "import {scrollToTop} from 'from 'tong-zui-ui/js/dom';",
                        "",                
                        "<div ref='testdom' class='test'></div>",
                        "let el = this.$refs.testDom.$el;",
                        "scrollToTop(el);  // el.scrollTop=0",
                    ],
                },{
                    name:"isOverflow",
                    explain:"判断el是否超出",
                    param:"(el)",
                    returns:"true | false",
        
                    example:[
                        "import {isOverflow} from 'from 'tong-zui-ui/js/dom';",
                        "",                
                        "<div ref='testdom' class='test'></div>",
                        "let el = this.$refs.testDom.$el;",
                        "isOverflow(el); // true | false",
                    ],
                }
            ]
        }
    ]
}