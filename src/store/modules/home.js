const menuShow = sessionStorage.getItem("menuShow")===false?false:true
export default {
    namespaced:true,
    state: {
        menu: {},//menu对象
        menuList:[],//展示的二级目录
        menuShow,
        flowType:"type01",//样例展示风格
    },
    mutations: {
        addMenu(state,menu){
            state.menu=menu
        },
        
        /**
         * 设置menuList
         * @param {*} state 
         * @param {*} key 
         */
        setMenuList(state,key){
            state.menuList=state.menu[key]
        },
        
        // 设置样例展示风格
        setFlowType(state,type){
            state.flowType=type
            localStorage.setItem("flowType",type)
        },

        // 初始化样例风格
        initFlowType(state){
            state.flowType=localStorage.getItem("flowType")||"type01"
        },

        setMenuShow(state,bool){
            state.menuShow = bool
            sessionStorage.setItem("menuShow",bool)
        }
    },
}