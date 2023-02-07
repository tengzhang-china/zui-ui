import { verifyType } from "../../../../js/rules";
import { mergeObject, doDeepCopy } from "../../../../js/usual";
export default {
    props: {
        tableData: {
            type: Array,
            default: function() {
                return [];
            },
        },
        tableModel: {
            type: Array
        },
        getMutexKey: {
            type: Function
        },
        scope: {
            type: Object,
            default: function() {
                return {};
            },
        },
        item: {
            type: Object,
            default: function() {
                return {};
            },
        },
        moreOperate: {
            type: Object,
            default: function() {
                return {};
            },
        },
        childrenOperate: {
            type: Boolean,
            default: function() {
                return false;
            },
        },
        handleText: { //不显示icon
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            operateIcons: {
                add: require("../images/operate/add.png"),
                addNext: require("../images/operate/addNext.png"),
                addBefore: require("../images/operate/addPre.png"),
                delete: require("../images/operate/delete.png"),
                moveUp: require("../images/operate/moveUp.png"),
                moveDown: require("../images/operate/moveDown.png"),
                moveTop: require("../images/operate/moveTop.png"),
                moveBottom: require("../images/operate/moveBottom.png"),
                position: require("../images/operate/position.png"),
            }
        }
    },
    computed: {
        formateOperateList() {
            // debugger
            if (!this.childrenOperate) {
                var list = this.item.operateList.filter((val) => {
                    val.icon = !this.handleText ? (val.icon || this.operateIcons[val.type]) : '';
                    return (val.show ? val.show(this.scope.row, val, this.scope, this.tableData.length) : true);
                })

                let { useInMore, limit } = this.formateMoreConfig;

                if (useInMore) {
                    return {
                        list: list.filter(val => !val.inMore),
                        more: list.filter(val => !!val.inMore)
                    }
                } else { // 不配置useInMore属性但是 更多按钮 里面如果只有一个按钮则不展示更多
                    if (list.slice(limit).length == "1") {
                        return {
                            list: list,
                            more: []
                        }
                    } else {
                        return {
                            list: list.slice(0, limit),
                            more: list.slice(limit)
                        }
                    }

                }
            } else {
                // var list = this.item.operateList.filter((val) => {
                //     val.icon = val.icon || this.operateIcons[val.type];
                //     return (val.show ? val.show(this.scope.row, val, this.scope, this.tableData.length) : true);
                // })
                // list = list.filter(val => val.__config__ && !(val.__config__.parentButton && val.__config__.parentButton.length > 0))
                // return {
                //     list: list,
                //     more: []
                // }
                var list = this.item.operateList.filter((val) => {
                    val.icon = val.icon || this.operateIcons[val.type];
                    return (val.show ? val.show(this.scope.row, val, this.scope, this.tableData.length) : true);
                })
                let { useInMore, limit } = this.formateMoreConfig;
                if (useInMore) {
                    list = list.filter(val => val.__config__ && !(val.__config__.parentButton && (val.__config__.parentButton.length > 0 || val.__config__.parentButton > 0)))
                    return {
                        list: list.filter(val => !val.inMore),
                        more: list.filter(val => !!val.inMore)
                    }
                } else { // 不配置useInMore属性但是 更多按钮 里面如果只有一个按钮则不展示更多
                    if (list.slice(limit).length == "1") {
                        return {
                            list: list,
                            more: []
                        }
                    } else {
                        return {
                            list: list.slice(0, limit),
                            more: list.slice(limit)
                        }
                    }

                }

            }
        },

        formateMoreConfig() {
            return mergeObject({
                text: "更多",
                limit: 9,
                useInMore: false,
            }, this.moreOperate)
        }
    },
    methods: {
        /**
         * 操作栏点击事件
         * @param rowInfo 行信息
         * @param btn 按钮对象
         */
        doOperateClick(rowInfo, btn, scope) {
            if (btn.disabled && btn.disabled(rowInfo, btn)) return;

            if (btn.type && this[btn.type]) {
                this[btn.type](scope, btn);
            }
            // if (btn.type) {
            //     if (this[btn.type]) {
            //         this[btn.type](scope, btn);
            //     } else if (btn.fnType === 'userFnType') {
            //         var parent = this.$parent;
            //         var btnFnName = btn.type;
            //         while (!parent[btnFnName]) {
            //             parent = parent['$parent']
            //         }
            //         parent[btnFnName](btn, rowInfo, scope)
            //     }
            // }
            if (btn.clickFun) {
                if (verifyType(btn.clickFun, "Function") === true) {
                    btn.clickFun(rowInfo, btn, scope);
                } else {
                    this.$emit(btn.clickFun, rowInfo, btn, scope);
                }
            } else {
                console.error("按钮未定义clickFun点击事件回调");
            }
        },

        // 处理互斥列数据
        setMutexData() {
            return this.tableModel.filter(val => val.selectMutex === true).reduce((a, b) => { a[this.getMutexKey(b.prop)] = b.multiple ? [] : ""; return a }, {})
        },

        clearObject(object) {
            Object.keys(object).forEach(key => {
                switch (Object.prototype.toString.call(object[key]).slice(8, -1)) {
                    case "Array":
                        object[key] = [];
                        break;
                    case "Object":
                        object[key] = {};
                        break;
                    default:
                        delete object[key]
                }
            })

            return object
        },

        /**
         * 添加行--下一行
         */
        addNext(scope, item) {
            let lineInfo = {};
            if (item) {
                lineInfo = doDeepCopy({
                    ...this.setMutexData(),
                    ...item.row
                } || {});
            } else {
                lineInfo = doDeepCopy({
                    ...this.setMutexData(),
                    ...scope.row
                } || {});
                lineInfo = this.clearObject(lineInfo)
            }
            this.tableData.splice(scope.$index + 1, -1, lineInfo)
        },

        /**
         * 添加行--上一行
         */
        addBefore(scope, item) {
            let lineInfo = {};
            if (item) {
                lineInfo = doDeepCopy({
                    ...this.setMutexData(),
                    ...item.row
                } || {});
            } else {
                lineInfo = doDeepCopy({
                    ...this.setMutexData(),
                    ...scope.row
                } || {});
                lineInfo = this.clearObject(lineInfo)
            }
            this.tableData.splice(scope.$index, -1, lineInfo)
        },

        /**
         * 删除行
         */
        delete(scope) {
            this.tableData.splice(scope.$index, 1)
        },


        /**
         * 上移
         */
        moveUp(scope) {
            let lineInfo = doDeepCopy(scope.row);
            this.delete(scope);
            this.tableData.splice(scope.$index - 1, 0, lineInfo)
        },

        /**
         * 下移
         */
        moveDown(scope) {
            let lineInfo = doDeepCopy(scope.row);
            this.delete(scope);
            this.addNext(scope, { row: lineInfo })
        },

        /**
         * 置顶
         */
        moveTop(scope) {
            let lineInfo = doDeepCopy(scope.row);
            this.delete(scope);
            this.tableData.splice(0, 0, lineInfo)
        },

        /**
         * 置顶
         */
        moveBottom(scope) {
            let lineInfo = doDeepCopy(scope.row);
            this.delete(scope);
            this.tableData.push(lineInfo)
        },

        /**
         * 定位
         */
        position(scope) {
            this.$emit("")
        }
    },
}