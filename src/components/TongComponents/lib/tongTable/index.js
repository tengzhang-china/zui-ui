import Vue from 'vue';
import tongTable from './src/index';

tongTable.install=function(){
    Vue.component("tongTable",tongTable)
}
export default tongTable