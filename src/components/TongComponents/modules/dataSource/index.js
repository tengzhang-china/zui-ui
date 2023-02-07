import Vue from "vue";
import tongDataSource from './src/index.vue';
tongDataSource.install=function(){
    Vue.component(tongDataSource.name,tongDataSource)
}
export default tongDataSource