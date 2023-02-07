import {
    mergeObject,
    doDeepCopy,
    throttle,
    getComponent,
    registerModule
} from "../../../../js/usual";
import {
    defaultConfig,
    confirmConfig
} from "../config/index";

let tongBreadModule = {
    namespaced: true,
    name: "tongBreadDialog",
    state() {
        return {
            visible: false,
            componentsList: [],
            buttonList: [], //用户自定义配置按钮部分
        }
    },
    mutations: {
        /**
         * 展示弹框或者切换弹框
         * @param {*} state 
         * @param {*} userConfig 
         */
        show: throttle(async function (state, userConfig) {
            userConfig.currentComponent = await getComponent(userConfig.currentComponent)
            let newConfig = doDeepCopy(mergeObject(defaultConfig, userConfig));

            if (newConfig.currentComponent === "confirm") {
                newConfig = mergeObject(newConfig, confirmConfig)
            }

            state.buttonList.push(newConfig.buttonList || [])
            state.componentsList.push(newConfig);
            state.visible = true
        }),

        /**
         * 单独设置buttonList
         */
        setButtonList: throttle(function (state, buttonList = []) {
            state.buttonList.push(buttonList)
        }),

        /**
         * 按钮回滚
         * @param {*} state 
         * @param {*} num 回滚次数
         */
        popButtonList(state, num = 1) {
            for (let i = 0; i < num; i++) {
                state.buttonList.pop();
            }
        },

        /**
         * 自定义某一个配置项
         * @param {*} state
         */
        setTitle(state, { key, value }) {
            state.componentsList[state.componentsList.length - 1][key] = value;
        },

        /**
         * 关闭弹框
         * @param {*} state 
         */
        close(state) {
            state.visible = false
        },

        /**
         * 后退
         * @param {*} state 
         * @param {*} step 
         */
        back(state, step = 1) {
            if (state.componentsList.length > step) {
                let count = step;
                do {
                    state.componentsList.pop();
                    this.commit("tongBreadDialog/popButtonList")
                    count--;
                } while (count > 0);
            }
        },

        /**
         * 初始化配置
         * @param {*} state 
         */
        initConfig(state) {
            state.visible = false
            state.componentsList = []
            state.buttonList = []
        },


        setVisible(state, boolean) {
            state.visible = boolean
        }
    },
    actions: {},
    modules: {},
}

export default (vueInstance) => {
    registerModule(vueInstance, tongBreadModule)
}
