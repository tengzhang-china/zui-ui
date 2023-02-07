import Vue from "vue";
import tongExportList from './src/index.vue';
import { URLS } from "./config/index";

function show(config = {}) {
    const urls = config.urls || {};
    delete config.urls
    const params = {
        title: "导出模板",
        width: "720px",
        height: "450px",
        resizeDisabled:true,
        cancelBtnShow:false,
        sureBtnTitle:"导出",
        sureCallback(){
            return this.doExport()
        },
        currentComponent: tongExportList,
        info:{
            productId:config.productId,
            fieldKey:config.fieldKey,
            name:config.nameKey,
            getMoreWords:config.getMoreWords || (()=>[]),
            url:{
                ...URLS,
                ...urls,
            },
            params:config.params
        },
    }
    this.$store.commit("tongBreadDialog/show", params)
}
export default {
    install() {
        if (Vue.prototype.$tongExport) {
            console.warn("$tongExportList已经声明了");
            return
        }
        Vue.prototype.$tongExportList = {
            show
        }
    },

    show,
}