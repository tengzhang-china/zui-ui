import { flatArray } from "../../../../js/usual";
import { verifyType } from "../../../../js/rules";
export default {
    props: {
        // 拖拽部分配置
        draggable: {
            type: Boolean,
            default: false
        },
        allowDrag: {
            type: Function,
            default: function (node) {
                return false
            }
        },
        allowDrop: {
            type: Function,
            default: function (draggingNode, dropNode, type) {
                return true
            }
        },

        // 操作栏部分配置
        operateShow: {
            type: Boolean,
            default: false
        },
        operateList: {
            type: Array,
            default: function () {
                return ["删除", "编辑", "新增"]
            }
        },
        formateOperate: {
            type: Function | Boolean,
            default: false
        },
        renderOperate: {
            type: Function | Boolean,
            default: false
        },

        //操作栏自定义的配置项
        operateCustom: {
            type: Array | Boolean,
            default: false
        },


        contextMenuHeight: {
            type: Number,
            default: 60
        }

    },
    data() {
        return {
            cascaderValue: "",//级联选中
            refresh: true,//级联刷新

            contextMenuShow: false,
            contextmenuProps: {},
            contextMenuStyle: {
                left: "0",
                top: "0"
            }
        }
    },
    methods: {
        /**
         * 阻止冒泡
         */
        stopPropagation(e,isStop=false){
            if(isStop)e.stopPropagation()
        },
        /**
         * 树节点操作栏触发
         * ...展开后的点击回调
         * @param {string} command 点击的文本
         * @param {object} node 当前行的树节点数据
         * @param {object} data 
         */
        operateCommand(command, node, data) {
            this.$emit("operateCommand", command, node, data)
        },

        /**
         * 双击
         * @param {*} node 
         * @param {*} data 
         */
        dbClick(node, data) {
            this.$emit("dbClick", node, data)
        },

        /**
         * 右击展示菜单
         */
        contextmenuShow(node, data, e) {
            this.contextMenuShow = true

            let styleInfo = {};
            this.$nextTick(() => {
                const height = this.$refs.contextMenu.getBoundingClientRect().height;
                const width = this.$refs.contextMenu.getBoundingClientRect().width;

                const top = e.layerY + (e.target.getBoundingClientRect().top - this.$refs.tongTreeBox.getBoundingClientRect().top);
                const left = e.pageX - this.$refs.tongTreeBox.getBoundingClientRect().left;

                if (this.$refs.tongTreeBox.getBoundingClientRect().height - height - top > -30) {
                    styleInfo = {
                        left: left - 1 + "px",
                        top: top - 1 + "px",
                    }
                } else {
                    styleInfo = {
                        bottom: this.$refs.tongTreeBox.getBoundingClientRect().height - top - 1 + "px",
                        left: e.pageX - this.$refs.tongTreeBox.getBoundingClientRect().left - 1 + "px",
                    }
                }
                if (this.$refs.tongTreeBox.getBoundingClientRect().left + this.$refs.tongTreeBox.getBoundingClientRect().width - width - e.pageX < 0) {

                    delete styleInfo.left;
                    styleInfo.right = this.$refs.tongTreeBox.getBoundingClientRect().left + this.$refs.tongTreeBox.getBoundingClientRect().width - e.pageX + "px"
                }

                this.$set(this, "contextMenuStyle", styleInfo);
            })

            this.contextmenuProps = {
                node,
                data
            }
            // this.$set(this, "contextMenuStyle", styleInfo);

        },

        /**
         * 级联change事件
         */
        changeCascader(value, options, ref) {
            this.$refs[ref][0].visible = false;//隐藏下拉
            this.refresh = false;
            setTimeout(() => {
                this.refresh = true;
            }, 300)
            this.$emit("cascaderClick", flatArray(options).find(val => val.value == value.slice(-1)[0]))
        },

        /**
         * 级联显隐
         * 初始化cascaderValue
         */
        initCascader() {
            this.cascaderValue = "";
        },

        closeContextMenu() {
            this.contextMenuShow = false
        },

        /**
         * 将list处理成键值对形式
         * @param {*} list 
         */
        formateList(list) {
            return list.map(val => {
                return verifyType(val, "Object") ?
                    val :
                    {
                        label: val,
                    }
            })
        }
    },

    computed: {
        /**
         * 通过配置来控制操作栏
         */
        formateOperateList() {
            return function (node, data) {
                if (this.formateOperate) {
                    let customResult = this.formateOperate(node, data);
                    return {
                        list: this.formateList(customResult.operateList),
                        show: customResult.show
                    }
                } else {
                    return {
                        list: this.formateList(this.operateList),
                        show: this.operateList.length > 0,
                    }
                }
            }
        },

        formateDisabled() {
            return function (param, node, data) {
                return verifyType(param, "Function") ?
                    param(node, data) :
                    param
            };
        },
    },
}