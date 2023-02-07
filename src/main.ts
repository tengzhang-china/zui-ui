import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import "@/assets/js/request.js"

import ElementUI from 'element-ui'
Vue.use(ElementUI)

import ZUI from './components/TongComponents/index.js'
import ZuiModules from './components/TongComponents/modules/index.js'
import ZuiCharts from './components/TongComponents/charts/index.js'

import {tongExportList} from './components/TongComponents/modules/index.js'
window.tongExportList=tongExportList

import 'tong-error-upload-vue'

// 引入样式
import '@/assets/css/index.scss'   // 与框架的element同步
import './components/TongComponents/theme/index.scss'   // Tong-zui各个组件样式

Vue.use(ZUI)
Vue.use(ZuiModules);
Vue.use(ZuiCharts);

Vue.config.productionTip = false

store.commit("home/initFlowType")

// 组件可编辑
Vue.prototype.$extendComps = function(info:object){
  return Vue.extend({
    ...info,
    store
  })
}

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
