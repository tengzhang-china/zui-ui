import Vue from "vue";
import tongBreadDialog from './breadDialog';

// 列表下拉
import {
    tongSystemList,
    tongDomainList,
    tongSchemaList,
    tongDataSourceList,
    tongDataBaseList,
} from './selectList/index';

import tongClassTree from "./classTree";

import tongDataSource from "./dataSource";

import tongExportList from "./exportList";

import { setBus } from '../js/usual';
Vue.prototype._bus = setBus()

const componetArr = [
    tongBreadDialog,

    tongSystemList,
    tongDomainList,
    tongSchemaList,
    tongDataSourceList,
    tongDataBaseList,
    tongClassTree,

    tongDataSource,

    tongExportList
]
const install = function () {
    componetArr.forEach(comp => {
        Vue.use(comp);//挂载组件
    })
}
export default {
    install
}

export {
    tongBreadDialog,
    tongClassTree,
    tongSystemList,
    tongDomainList,
    tongSchemaList,
    tongDataSourceList,
    tongDataBaseList,
    tongDataSource,
    tongExportList
}