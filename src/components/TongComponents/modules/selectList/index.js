import Vue from "vue";
import tongSystemList from './src/systemList.vue'
import tongDomainList from './src/domainList.vue'
import tongSchemaList from './src/schmeaList.vue'
import tongDataSourceList from './src/dataSourceList.vue'
import tongDataBaseList from './src/dataBaseList.vue'


const compsArr = [
    tongSystemList,
    tongDomainList,
    tongSchemaList,
    tongDataSourceList,
    tongDataBaseList,
]
compsArr.forEach(ele=>{
    ele.install = function(){
        Vue.component(ele.name,ele)
    }
})

export {
    tongSystemList,
    tongDomainList,
    tongSchemaList,
    tongDataSourceList,
    tongDataBaseList,
}
