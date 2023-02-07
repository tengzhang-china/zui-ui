# 版本简介
1.3.2 更新corn组件
1.3.1

1. tongTable表头支持tong-tips

1.2.10

1. 优化tongForm的tip位置，
2. tip字体图标size:12px
3. 自动缓存展开的树节点
4. tongTable的固定表头height可以动态设置

1.2.9

1. tongSelect默认选中和value冲突

1.2.8

1. 优化selectable和全选的联动
2. 导出组件判断

1.2.7

1. tongTree修复复选上限控制
2. tongTree增加配置项defaultExpandKeys默认展开

1.2.6

1. tongSelect普通下拉增加自定义项配置allowCreate

1.2.5

1. tongTable的计数器的max，min可以传函数

1.2.4

1. tongEditor增加放缩功能
2. tongTree过滤（去掉...）

1.2.3

1. tongTree下拉层级优化
2. tongCron月份选中问题
3. tongTable的index列表宽度自适应
4. tongCron表达式输入错误，直接红字提醒

1.2.2

1. tongTable全选

1.2.1

1. tongInput分页增加总条数配置
2. 调整按钮展示逻辑，增加按钮回滚方法popButtonList
3. tongTable树形数据联动

1.2.0

1. 调整弹框按钮的处理逻辑
2. 导出组件的地址问题
3. tongTable优化操作按钮下拉中的禁用
4. tongSeach补充下拉树搜索

1.1.26

1. scrollLink增加展开项默认配置
2. 导出组件增加导出文件地址
3. 增加downloadUrl
4. tongTable下拉互斥与内置增加行联动调整
5. 补充getCheckedNodes的说明

1.1.25

1. 删除旧版codeEditor
2. 调整doDeepCopy，判断hasOwnProperty是否存在
3. 处理穿梭树穿梭treeData警告
4. 优化穿梭树展开问题
5. 修复穿梭树穿梭数据为空的问题
6. 添加字段自动过滤重复字段，通过cn过滤
7. scrollLink增加changeCollapse事件
8. tongTalbe增加过滤树

1.1.24

1. tongTree特殊单选增加点击选中的单选，自动取消的功能
2. tongTable增加defaultExpandAll，expandRowKeys配置
3. 修复模板导出数据会写异常
4. 增加setRadioChosen设置特殊模式单选的值
5. 调整tongSearch输入框响应式

1.1.23

1. 修复tongSelect过滤
2. 补充文件流下载downloadBlob
3. 增加选择列表导出字段导出业务组件
4. tongSearch增加选择搜索类型前的回调函数beforeTypeChange

1.1.22

1. 修复tongTree详情插槽换行

1.1.21

1. tongTree优化回写半选和全选
2. miniUpload增加额外请求参数uploadParams
3. 穿梭树增加全部移动限制（存在禁用的，则全部移动按钮失效）
4. 补充cookie的操作方法

1.1.20

1. tongTable调整错误信息展示方式（配置校验不需设置rowStyle）

1.1.19

1. minioUpload调整下载的样式
2. tongTable增加toggleRowExpansion设置展开
3. tongTree增加customHideCheckbox方法，用来配置复选显隐
4. tongTree增加done-more，点击分页...后的回调
5. tongTable的model发生变化后自动重新计算宽高
6. tongEditor增加自定义提示customTipArr配置
7. 增加横向拖拽类tong-drag-x

1.1.18

1. 公共类getFirstWord优化
2. 穿梭树优化
3. tongTree增加getHalfCheckedKeys
4. tongTree增加内容区插槽before behind custom
5. 面包屑弹框修复backCallback函数不执行
6. 调整tongTips的z-index
7. tongTree懒加载分页可点击范围调整

1.1.17

1. tongTree增加setChecked
2. tongTree增加getNode

1.1.16

1. tongTree暴露filterNodeMethod过滤方法，原过滤为默认方法
2. 公共类增加获取中文首字母的方法getFirstWord
3. 穿梭树增加--首字母过滤
4. tongTable增加border配置项

1.1.15

1. 源表bug修改：修复取消选中不可用的问题
2. 源表增加配置项：sameSource否同数据源选择
3. tongTree取消高亮配置项修复
4. 源表增加数据源额外请求参数dataSourceParams
5. tongTree增加分页配置
6. scrollLink增加手风琴效果accordion
7. tongTable增加行类名配置rowClassName
8. tongTree增加滚动加载
9. tongSelect普通选择增加懒加载过滤
10. tongTree隐藏加载更多的的复选框
11. tongTable校验红字行样式调整
12. tongSearch的时间选择器type优先使用config.type

1.1.14

1. tongTable补充参数reserveSelection
2. element-ui 版本由 2.13.1 升级为 2.13.2

1.1.13

1. tongForm增加显隐控制
2. tongForm去掉axiosMounted
3. 增加业务组件：数据源到表的选择

1.1.12

1. tongTree下拉菜单不联动formate.stopPropagation
2. tongTalbe增加展开栏图标隐藏函数setExpandHidden
3. tongTalbe增加表格复选
4. tongIcon增加图片支持格式png|jpg|jpeg|gif|svg|bmp
5. tongTalbe 增加行点击回调rowClick
6. tongEditor 增加搜索方法findAll findNext findPrevious
7. tongSearch的按钮样式取消与disabled的关联

1.1.11

1. tongTable操作栏更多配置项调整

1.1.10

1. tongTree增加树展开详情插槽相关内容;
2. tongTable增加列类型-时间选择器
3. tongTable增加列类型-单选
4. 分类树增加禁用disabled
5. 增加表格单选

1.1.9

1. 增加格式化xml的formateXml;
2. tongTable 增加重绘列 redraw;
3. tongSearch调整目录结构; 自定义按钮调整圆角为0
4. minioUpload 上传多选bug修复; 组件引入报错bug修复

1.1.8

1. 弹框按钮样式；
2. tongSearch去掉input的blur事件（刷新和搜索重复）
3. tongTips调整tip的宽度与内容对齐
4. tongTree增加nodeClickDisabled配置项（禁用点击），分类树默认开启
5. 穿梭树增加searchShow（是否展示搜索栏）配置
6. tongTalbe增加增加操作栏按钮过多自动收起的配置项（moreOperate）
7. tongDialog增加top值auto垂直方向居中
8. 增加jsonToXml转换方法
9. tongTabs动态修改tabModel

1.1.7

1. 直接引入字体图标

1.1.6

1. 补充canClickCancel
2. 补充nodeClick接口第三个参数
3. tongTree增加treeBoxStyle容器样式对象配置
4. tongClassTree增加接口filter
5. minioUpload 修复删除时报错的问题

1.1.5

1. 穿梭树修复统计按钮联动

1.1.4

1. tongTable补充expand的使用方法和展开收起监听

1.1.3-26

1. tongSearch字体图标修改
2. tongTree节点不可拖选复制
3. tongClassTree样式调整
4. show方法增加第三个参数scope
5. formate增加第三个参数scope
6. tongTree补充treeHeader,treeFooter
7. tongTree增加展开点击配置项 expandOnClickNode

1.1.3-25

1. tong-dialog增加footer显隐控制footerShow
2. tongForm 增加itemAlign的配置项
3. tongTransTree增加countShow配置显隐右上角计数（仅适用于普通穿梭）

1.1.3-24

1. tongEditor禁用状态可以复制内容

1.1.3-23

1. dodeepCopy过滤掉原型链属性

1.1.3-22

1. 增加分类树

1.1.3-21

1. minioUpload上传选择文件多选

1.1.3-20

1. 调整cleanQuery

1.1.3-19

1. input和select下拉placeholder写法；
2. 增加清空过滤条件的接口cleanQuery

1.1.3-18

1. tongTable补充插槽校验
2. tongTree特殊模式问题修复

1.1.3-17

1. tongTable增加下拉选项的互斥

1.1.3-16

1. tongCron调整

1.1.3-15

1. tongCron增加表达式校验方法validate

1.1.3-14

1. tongTree操作栏格式化

1.1.3-13

1. 调整tongtable操作栏删除图片的样式

1.1.3-12

1. 调整tongtable写法

1.1.3-11

1. 新增穿梭树
2. tongTree选中高亮；
3. tongTable操作栏图片padding去掉

1.1.3-10

1. ipInput样式调整

1.1.3-8
1. tongEditor样式调整

1.1.3-7

1. 增加默认操作栏配置项
2. 补充图标库

1.1.3-6

1. tongEditor增加json格式化
2. 增加commonAxios-axios同步序列化

1.1.3-5

1. tongSearch补充initConfig初始化搜索类型和值

1.1.3-3

1. tongCron表达式调优
2. 增加backCallback，点击面包屑的方法配置项

1.1.3-2

1. tongForm表单增加密码配置

1.1.3-1

1. tongForm表单校验失败滚动到失败位置

1.1.3

1. cron组件移除
2. 增加tongRefresh刷新拦截+提示（用户上传或者下载）

1.1.2-21

1. tongSearch增加config字段，提供自定义配置项

1.1.2-20

1. scrollLink增加复选框配置项

1.1.2-19

1. 调整tongTabs
2. tongTable审批意见出现条件调整
3. tongTree的过滤方法节流调整为防抖

1.1.2-18

1. tongTree增加condition配置项
2. tongTable增加操作前的图片配置-支持可使用字体图标和图片

1.1.2-17

1. 单位转换去掉空格
2. 下拉树增加父子级联配置项

1.1.2-16

1. 优化单位转换

1.1.2-15

1. 单位转换小转大，若为整数则省略小数点

1.1.2-14

1. 增加model显隐控制

1.1.2-13

1. 调整错误信息换行展示，提升position权重

1.1.2-12

1. 调整model配置项，增加显隐配置show

1.1.2-11

1. 增加控制台组件tongConsole

1.1.2-10

1. 甘特图增加dataZoom用户配置项

1.1.2-9

1. 甘特图调整

1.1.2-8

1. 多级弹框增加点击自动loading

1.1.2-7

1. tongTable增加多级表头配置（只支持基本版本）
2. 增加会话存储类
3. 增加tongTree删除节点的方法

1.1.2-6

1. 增加deepMergeObject

1.1.2-5

1. 优化search

1.1.2-4

1. usual方法调整
2. 图表类增加监控重绘，点击方法回调
3. tongTree 对非array类型value转string类型处理

1.1.2-3

1. tongTable增加复选禁用配置方法
2. tongSelect收起下拉项的时候重置树的过滤
3. tongSearch增placeholder配置项
4. 调整line，pie，radar，scatter入参配置项

1.1.2-2

1. 补充转换单位的类

1.1.2-1

1. tongTree右击菜单展示位置调整

1.1.2

1. 增加spirit图表
2. 增加vehicle图表

1.1.1-25

1. 增加日历图
2. 增加getParents
3. 增加getChild

> 1.1.1-24

1. 增加gant图

> 1.1.1-23

1. minio上传组件调整穿透写法

> 1.1.1-22

1. 增加接口scrollToEnd，golinedown
2. 增加属性readonly，autoToEnd
3. 添加minio上传组件

> 1.1.1-21

1. tongTable清空过滤
2. 增加柱状图

> 1.1.1-20

1. 监听类名
2. 引入自动开启监听

> 1.1.1-19

1. tongTable错误集合数组调整

> 1.1.1-18

1. tongTable错误集合数组--错误校验不支持展示部分

> 1.1.1-17

1. tongTree 图标显示增加判断条件renderIcon

>1.1.1-16

1. tongTable label类型formate增加scope入参

>1.1.1-15

1. tongTree调整各操作部分冒泡

>1.1.1-14

1. 调整右击局部作用域

> 1.1.1-13

1. 增加tongTree的灵活配置；
2. tongSelect增加父节点可以点击选中配置

> 1.1.1-12

1. tongTable的tips展示条件调整

> 1.1.1-11

1. tongScroll调整

> 1.1.1-10

1. tongScroll调整

> 1.1.1-9

1. tongInputNumber调整value的双向绑定的写法
2. 调整tongEditor说明文档中双向绑定的写法
3. 面包屑增加自定义配置setTitle

> 1.1.1-8

1. tongSearh 按钮margin

> 1.1.1-7

1. tongCrom切换逻辑优化，指定默认选中
2. tongScroll-去掉一行样式

> 1.1.1-6

1. 删除cron组件引入
2. tongTable 增加表头部分插槽配置项headerSlot
3. tongTree 增加懒加载配置项

> 1.1.1-5

1. 修复tongCron小时通配符异常
2. tongTable展开树配置项
3. 调整flatArray类

> 1.1.1-4

1. 普通下拉跟树形下拉过滤分开

> 1.1.1-3

1. 操作栏自定义 renderOperate
2. 动态处理...展开的按钮，返回按钮数组 formateOperate

> 1.1.1-2

1. spanMethods合并单元      格调整
2. 增加校验表格所有数据接口validateAll

> 1.1.1

1. tongTable增加计数器
2. 排序图标切换的问题修复
3. 优化tongSelect筛选逻辑（完整版）
4. 校验模块修复
5. 优化tongSelect筛选逻辑
6. 补充blue/button.scss
7. 调整tongTable右固定样式
8. 修复--btn.clickFun
9. tongTable增加输入校验
10. 调整none类名

> 1.1.0

1. 调整表格单元格右边距
2. 调整js--上传minio
3. 增加上传文件路径path
4. 调整xml2js
5. 单选展示的文本展示使用label字段
6. 修复自定义props
7. tongTable 总条数>10才会显示分页器
8. 增加xml转json
9. 增加charts
10. tongSearch默认选中第一项
11. 修复tongScroll滚动条值出现异常
12. 调整search自定义按钮控制
13. 调整tongTable固定表头异常
14. 调整弹框按钮不可拖拽
15. dom message样式调整
16. 调整防抖节流
17. 调整标签数prop
18. 调整search等
19. tongScroll调整
20. 增加tips
21. tongTable调整0可以展示
22. 优化tongTable排序
23. 优化tongScroll滚动逻辑
24. 调整tongScroll
25. 调整tongTable悬浮框
26. 增加tongForm contentWidth配置
27. 增加tongTable悬浮框
28. 增加tongDialog入口
29. scrollLink调整

> 1.0.32

1. tongTable结合虚拟滚动条
2. 补充scrollLink
3. 去掉dialog中的虚拟滚动条
4. 调整tongTable
5. 调整级联等
6. tongDialog
    * 宽高
7. tongTable
    * 增加nullLabel属性，配置type为clickBtn,label的空文本内   容，默认值 -
    * 修改表头色值 #545558
    * 增加两种状态deployed，no_deploying
8. tongBreadDialog
    * 增加 您的位置：
9. tongTable
    * clickBtn,label增加自定义 formate().className
10. tongSelect
    * 优化数据回写
11. tongTable
    * 只会按钮过滤点击方法
12. tongBreadDialog
    * 自定义按钮，通过返回值为true或者undefined不关闭
13. 优化面包屑弹框

> 1.0.31

1. tongTree
    * ...阻止点击冒泡
    * 编辑的时候点击阻止冒泡

2. dialog
    * 添加是否可拖拽，默认可拖拽

3. tongTable
    * 补充下拉项说明文档

4. tongBreadDialog
    * 自定义按钮，通过返回值不为true自动关闭弹框

5. tongUpload
    * 增加tongUpload基础组件

6. 增加多选组件

7. 修改面包屑子模块名称
8. 面包屑弹框按钮自定义配置
9. 面包屑弹框增加buttonList按钮自定义配置项
10. 面包屑弹框默认自动关闭false;去掉返回的节流控制
11. 增加registerModule的添加子模块方法
12. tongTable,height默认值null
13. message，dom内部弹框图标
14. merge类优化
15. tongScroll
    * 配置项修改成oam默认配置
16. tongSelect
    * 修改下拉nodeKey默认值为value
17. tongTable
    * 增加select类型,nodeKey配置
18. 修改js拓展符
19. tongSelect
    * 普通模式懒加载

20. tongEditor
    * 编辑器引入文件位置修改

21. tongTree
    * 调整过滤字段

22. tongTable
    * slot局部作用域添加index
    * render添加index
    * 增加height配置固定表头

23. tongScroll
    * 新增滚动组件

24. 多级弹框
    * 增加info参数
    * 调整currentComponent的写法requrei(),()=>import()
25. 组件
    * tongTree
        * 调整getCheckedArr方法
    * tongTable
        * 事件增加第四个参数scope

> 1.0.30

1. 组件
    * tongTable
        * clickBtn超出的...颜色与customClass一致
2. 增加面包屑弹框
3. 补充公共类

> 1.0.29

1. 组件
    * tongTree
        * 优化部分方法
        * 增加saveEdit--input失焦回调三个参数(data,oldData,node)
    * tongForm
        * 基本版开发完后
        * 补充upload
    * cron
        * 指定，部分不可选--修复
    * tongTable
        * 增加tableInstance
        * 将ele表格的select,select-all向上抛
    * tongEditor 
        * 增加属性disabled
        * 增加json语法

2. Vue.protoType._bus = new Vue()

3. 增加controller--存放modules中的请求处理

4. 增加业务模块
    * 系统下拉

> 1.0.28

1. 处理合并对象

> 1.0.27

1. 组件
    * dialog
        * 点击x关闭回调iconClosed
        * 去掉是否隐藏title控制，通过header插槽控制
    * datePicker 
        * 版本从3.5.0回退到2.12.0
    * tongTree
        * 选中节点添加节流
        * 增加树回写示例
    * tongForm
        * 开发中....
        * 不能直接在mixin中使用...拓展
2. 公共类
    * 修改节流函数throttle

> 1.0.26

1. tongTable
    * 固定列配置

2. search
    * 调整样式

3. dialog
    * 默认按钮增加点击节流控制，节流时长入参throttleTime=300ms

4. tongTree
    * 选项增加disabled配置

5. 公共类
    * 增加扁平化数组转树形结构数组
    * 增加节流函数throttle(异常)

> 1.0.25

1. tongTable
    * input相关事件

2. tongEditor
    * 增加resise接口

> 1.0.24

1. tongTable
    * 展示内容为空时 empty-text 配置项 + empty具名插槽配置

2. tongTree
    * 节点新增，节点修改接口

3. tongEditor
    * 格式化增加入参语言

> 1.0.23

1. tongSelect
    * tree类型，回写优化

2. tongTree 
    * 补充tree的使用说明文档

3. tongtable
    * 样式写到index.scss中
    * 补充插槽使用说明

> 1.0.22

1. 再次确认,在node_modules中还是使用scss穿透写法还是存在问题，建议编译之后在使用

> 1.0.21

1. tongTable
    * total为0的时候不展示pager
    * 增加树形展示
    * 增加具名插槽渲染
    * 增加render函数渲染

2. tongSelect
    * prop中增加nodeClick 树节点点击回调
    * 下拉树（单选，复选，特殊模式）

3. 公共方法类
    * verifyRule
    * verifyType
    * debounce
    * formatDate
    * doCopy

> 1.0.20

1. 修改css文件引入方式

> 1.0.19

1. 提供css文件

> 1.0.18

1. dialog
    * 超出y auto

2. tongTable
    * 不隐藏分页器1
    * clickBtn超出显示tips
    * 增加下拉框change事件 -- tongSelectChange
    * 修改filters出现条件
    * 排序控制

3. tongSelect初版发布

> 1.0.17

1. tongTable组件
    * 增加表头自定义图标 labelIcon
    * 增加select每行下拉内容自定义costomConfig.selectProp
    * 按钮回调报错

> 1.0.16

1. tongTable组件
    * tongtable入口暴露调整
    * 修改filters判断条件
    * type === clickBtn,"" 增加内容formate方法 (rowInfo,value)
    * operate类型 增加 show 函数，按钮是否可见

> 1.0.15

1. tongtable的索引计算 + 1

> 1.0.14

1. 更新tongtable组件

> 1.0.13.1

1. tongEditor发送请求字段名判断修改

> 1.0.13

1. vue2-datepicker 使用3.5版本

> 1.0.12

1. 更新依赖版本

> 1.0.11

1. message组件
    * 合并对象写法修改

2. 增加样式文件

3. title组件
    * 修改title组件的类名

4. dialog组件
    * 多层dialog
    * dialog双向绑定

5. <span style="color:green">新增编辑器</span>
    * 表名自定义提示
    * 通过.获取表字段,并提示
    * 提供请求地址，请求参数配置

> 1.0.10 时间2020年5月16日11:59:08

1. dialog组件
    * header - fontsize:16px
2. message组件编译不同，暂时注释message

> 1.0.9 时间2020年5月12日16:59:32开始

1. title组件
    * 增加icon自定义，配置项 iconImg，iconClass

2. dialog组件
    * 弹框拖拽超出可视区域 隐藏

3. message组件
    * 补充弱提醒方法及配置项说明
    * 增加dom内部信息调试

<br>

> 1.0.7 已提交

1. 修改引入方式
2. 修改穿透写法为正常写法
3. 增加按需引入方式

## 说明文档

### 一. 使用方法说明
```javascript
// 安装
npm i tong-zui-ui --save;

//全量组件库引入
import UI from 'UI';
Vue.use(UI);

//按需引入
import {search} from 'UI';
Vue.use(search);
```

### 二. 目录说明
* 入口 [ index.js ]
* lib 组件源码
* theme 样式源码 <span style="color:red">样式文件被细分，直接在单个组件中引入</span>
* js 公用类 <span style="color:red">组件和模块中需要用到的类</span>
* modules 模块 <span style="color:red">模块</span>


### 三. 添加组件，js说明
1.js直接放在js文件夹下，在<span style="color:gold">TongComponents/index.js中暴露入口</span>

```javascript
import Vue from 'vue'

// 组件
import Search from './lib/search'

// 脚本
import publicFun from './js/publicFun';

const install = function(){
    Vue.use(Search);//挂载组件
}
export default {
    install,
    Search,
    publicFun,
}
```

使用：公用的方法类可以在main.js中引入，并挂载到Vue的原型上

```javascript
// main
import {publicFun} from 'tong-zui-ui';
Vue.prototype.publicFun=publicFun
    
```


2.组件在lib文件夹下，使用独立文件夹分隔，在<span style="color:gold">TongComponents/index.js中暴露入口</span>,具体写法可以参考search组件。<span style="color:red">注意：声明全局组件的入口实在组件的index.js</span>


