import Vue from 'vue';
import minioUpload from './src/index.vue';
minioUpload.install = function(){
    Vue.component(minioUpload.name,minioUpload)
}
export default minioUpload