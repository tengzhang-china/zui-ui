import Vue from 'vue'

import './iconfont/iconfont.css';

import {setBus} from './js/usual'
Vue.prototype._bus = setBus()

// 组件
import Search from './lib/tongSearch'
import tongSearch from './lib/tongSearch'

import Table from './lib/table'

import tongTitle from './lib/tongTitle'
import Title from './lib/tongTitle'

import tongCron from './lib/tongCron'
import DatePicker from './lib/datePicker'

import Dialog from './lib/tongDialog'
import tongDialog from './lib/tongDialog'
import Message from './lib/message'
import tongMessage from './lib/message'

import ipInput from './lib/ipInput'
import Slider from './lib/slider'
import tongTransfer from './lib/tongTransfer'
import transfer from './lib/transfer'
import TransferTree from './lib/transferTree'
import ZTree from './lib/zTree'
import tongEditor from './lib/tongEditor'
import tongTable from './lib/tongTable'
import tongSelect from './lib/tongSelect'
import tongSelectMode from './lib/tongSelectMode'
import tongIcon from './lib/tongIcon'
import tongRender from './lib/tongRender'
import tongTree from './lib/tongTree'
import tongTransTree from './lib/tongTransTree'
import tongTips from './lib/tongTips'
import tongForm from './lib/tongForm'
import tongUpload from './lib/tongUpload'
import tongTabs from "./lib/tongTabs"
import tongScroll from "./lib/tongScroll"
import scrollLink from "./lib/scrollLink"
import minioUpload from "./lib/minioUpload"
import tongRefresh from "./lib/tongRefresh"
import tongInput from "./lib/tongInput"
import tongConsole from "./lib/tongConsole"
import tongUEditor from "./lib/tongUEditor"
import tongCascader from "./lib/tongCascader"
import tongDrag from "./lib/tongDrag"
import tongDragX from "./lib/tongDragX";

const componetArr = [
    Search,
    tongSearch,

    Table,
    Title,
    tongTitle,
    tongCron,
    DatePicker,
    ipInput,
    Slider,
    transfer,
    tongTransfer,
    ZTree,
    TransferTree,
    tongDialog,
    Message,
    tongMessage,
    tongEditor,
    tongTable,
    tongSelect,
    tongSelectMode,
    tongTree,
    tongTransTree,
    tongForm,
    tongUpload,
    tongTabs,
    tongScroll,
    tongIcon,
    scrollLink,
    minioUpload,
    tongInput,
    tongConsole,
    tongUEditor,
    tongCascader,
    tongDrag,
]
const install = function(){
    componetArr.forEach(comp=>{
        Vue.use(comp);//挂载组件
    })
}

export default {
    install
}

export {
    install,
    Search,
    tongSearch,
    
    Table,
    Title,
    tongTitle,
    tongCron,
    DatePicker,
    ipInput,
    Slider,
    transfer,
    tongTransfer,
    ZTree,
    TransferTree,
    Dialog,
    tongDialog,
    Message,
    tongMessage,
    tongEditor,
    tongTable,
    tongScroll,
    tongSelect,
    tongSelectMode,
    tongRender,
    tongTree,
    tongTransTree,
    tongTips,
    tongTabs,
    tongForm,
    tongUpload,
    tongIcon,
    scrollLink,
    minioUpload,
    tongInput,
    tongConsole,
    tongUEditor,
    tongCascader,
    tongDrag,
    tongDragX,
    tongRefresh
}