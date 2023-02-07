import Vue from 'vue'
import DatePicker from './src/index.vue';
DatePicker.install=function(){
    Vue.component(DatePicker.name,DatePicker)
}
export default DatePicker