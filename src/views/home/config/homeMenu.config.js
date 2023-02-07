export const menuList = [
    {
        text:"指南",
        path:"/guide",
        redirect:"/guide/install",//选中之后默认跳转的地址
    },{
        text:"字体图标",
        path:"/iconfont",
        redirect:"/iconfont",
    },{
        text:"基础组件模块",
        path:"/lib",
        redirect:"/lib/tongSelect",
    },{
        text:"业务组件模块",
        path:"/modules",
        redirect:"/modules/tongBreadDialog",
    },{
        text:"canvas2d",
        path:"/canvas2d",
        redirect:"/canvas2d/gplot",
        disabled:true,
        show:false
    },{
        text:"图表组件模块",
        path:"/charts",
        redirect:"/charts/tongBar",
    },{
        text:"公共方法模块",
        path:"/js",
        redirect:"/js/usual",
    },
    // {
    //     text:"其他",
    //     path:"/others",
    //     children:[
    //         {
    //             text:"版本说明",
    //             path:"/versions",
    //             disabled:false,
    //             redirect:"/versions/v1.1.3",
    //         },{
    //             text:"运维管理",
    //             path:"/operations",
    //             redirect:"/operations/jsOperation",
    //         }
    //     ]
    // },
    {
        text:"版本说明",
        path:"/versions",
        disabled:false,
        redirect:"/versions/v1.2.0",
    },{
        text:"运维管理",
        path:"/operations",
        redirect:"/operations/jsOperation",
    }
]

/**
 * 随机图标数组
 */
const logoIconArr = [
    "sugar",
    "food",
    "apple",
    "phone-outline"
]

/**
 * 随机图标
 */
function randomIcon(){
    return `el-icon-${logoIconArr[Math.ceil(Math.random()*logoIconArr.length)-1]}`
}

/**
 * 导航栏图标
 */
export const logoIcon = randomIcon()