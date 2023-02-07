import Vue from 'vue'
// 搜索组件入口
import Search from './src/index.vue';
Search.install=function(){
    Vue.component(Search.name,Search);
    Vue.component("tongSearch",Search)
}
export default Search