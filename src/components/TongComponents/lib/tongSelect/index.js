import Vue from 'vue';
import tongSelect from './src/index.vue';
tongSelect.install = function(){
    Vue.component(tongSelect.name,tongSelect)
}
Vue.directive("touchBottom",{
    bind(el,binding){
        const scrollDom = el.querySelector(".el-select-dropdown .el-select-dropdown__wrap")||el
        scrollDom.addEventListener("scroll",function(e){
            const isTouchBottom = this.scrollHeight - this.scrollTop <= this.clientHeight
            if(isTouchBottom)binding.value()
        })
    },
})
export default tongSelect