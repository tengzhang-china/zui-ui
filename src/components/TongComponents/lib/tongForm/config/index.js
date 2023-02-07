import {
    verifyType
} from '../../../js/rules';

import {
    mergeObject
} from '../../../js/usual'

/**
 * 表单帮助信息默认配置
 */
export const helpTipsConfig = {
    show: false,
    imgUrl: "el-icon-question", //地址或类名
    popperClass: "tong-form-tips",
    placement: "right",
    effect: "light",
}

/**
 * 默认配置
 */
export const defaultConfig = {
    input: {
        type: "",
        readonly: false,
        disabled: false,
        showWordLimit: false,
        rows: 5,
        maxlength: null,
        input() {},
        focus() {},
        blur() {}
    },
    
    inputNumber:{
        step:1,
        stepStrictly:false,
        disabled:false,
        min:0,
        max:Infinity,
        controlsPosition:"right",
    },

    select: {
        disabled: false,
        options: [],
        selectType: "",
        filterable: true,
        clearable: true,
        multiple: false,
        multipleLimit: 0,
        defaultProps: {
            children: "children",
            label: "label"
        },
        nodeKey: "label",
        treeData: [],
        mode: "",
        selectChange() {}
    },


    switch: {
        activeColor: "gold",
        inactiveColor: "#ff4949",
        activeText: "",
        inactiveText: "",
        disabled: false,
        switchChange() {}
    },

    radio: {
        disabled: false,
        options: [],
        radioChange() {}
    },

    checkbox: {
        disabled: false,
        options: [],
        checkboxChange() {}
    },

    timePicker: {
        readonly: false,
        disabled: false,
        placeholder: "请选择时间",
        valueFormat: "yyyy-MM-dd HH:mm:ss",
        pickerOptions: {},
        timePickerChange() {},
        timePickerBlur() {},
        timePickerFocus() {},
    },

    datePicker: {
        readonly: false,
        disabled: false,
        type: "date",
        placeholder: "请选择日期",
        rangeSeparator: "至",
        startPlaceholder: "开始日期",
        endPlaceholder: "结束日期",
    },

    upload:{}
}

/**
 * 设置帮助信息
 * @param {Object} item 
 */
export const setTips = function (item) {
    return mergeObject(helpTipsConfig,item.tips || {})
}


const group_input = [
    "input","inputNumber"
]
const group_select = [
    "select","switch","radio","checkbox","timePicker"
]
const grout_upload = [
    'upload'
]

/**
 * 设置placeholder
 * @param {Object} item 
 */
export const setPlaceholder = function (item) {
    return item.placeholder || ({
        "input": "请输入",
        "select": "请选择",
        "switch": "请选择",
        "radio": "请选择",
        "checkbox": "请选择",
        "timePicker": "请选择",
        "inputNumber":"请输入",
        "upload":"请选择"
    } [item.type]||"") + item.label
}

/**
 * 处理config
 * @param {Object} item 每一栏
 * @returns {Object} {prop,methods}
 */
export const setConfig = function (item) {
    let prop = {};
    let methods = {};
    let newConfig = Object.assign({},defaultConfig[item.type],item.config || {})
    for (let key in newConfig) {
        if (verifyType(newConfig[key]) === "Function") {
            methods[key] = newConfig[key]
        } else {
            prop[key] = newConfig[key]
        }
    }
    return {
        prop,
        methods
    }
}

/**
 * 设置规则
 * @param {Object} item 
 */
export const setRules = function (item) {
    let res = [];

    if (item.required) {
        // if (group_input.indexOf(item.type)>-1) {
        //     res.push({
        //         required: true,
        //         message: item.placeholder,
        //         trigger: 'blur'
        //     })
        // }
        res.push({
            required: true,
            message: item.placeholder,
            trigger: ['blur','change']
        })
    }

    if (item.validate) {
        res.push({
            validator:item.validate,
            trigger: 'blur'
        })
    }
    return res
}