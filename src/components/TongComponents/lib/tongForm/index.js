import tongForm from './src/index.vue'
import Vue from 'vue'

tongForm.install=function(){
    Vue.component(tongForm.name,tongForm)
}

export default tongForm