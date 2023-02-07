import Vue from "vue";
import tongUEditor from "./src/index.vue";
tongUEditor.install=function(){
    Vue.component(tongUEditor.name,tongUEditor)
}
export default tongUEditor