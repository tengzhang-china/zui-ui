import { flatArray } from "../../../../js/usual"
export default {
    props: {
        rowStyle: {
            type: Object | Function,
            default: function () {
                return {};
            },
        },
    },
    data() {
        return {
            validateConfig: {
                rowLength: 0, //行数
                columnLength: 0,//列数
            },
            validateResult: [],//校验结果数组 -- 显示红字提醒用
        }
    },
    methods: {
        /**
         * 初始化errorResponse
         * true表示有错误，false表示验证失误
         */
        initErrorResponse() {
            this.validateResult = new Array(this.validateConfig.rowLength).fill("").map(val => {
                return new Array(this.validateConfig.columnLength).fill(false)
            })
        },

        /**
         * 使用tableModel中自定义校验方法校验数据,传入keys校验key，否则所有需要校验的数据
         * @param {*} scope 
         * @param {*} keys 
         * @returns {boolean}
         * @ToDo 单行校验和校验全部是否需要整合到一起？
         */
        validate(scope, keys = []) {
            let results = [];
            for (let i = 0; i < this.getTableModel.length; i++) {
                if (this.getTableModel[i].required && this.getTableModel[i].validate && (keys.length === 0 ? true : keys.includes(this.getTableModel[i].prop))) {
                    let validateRes = this.getTableModel[i].validate(scope).show;
                    results.push(validateRes);
                    
                    // 处理异常情况
                    if(!this.validateResult[scope.$index]){
                        this.validateResult[scope.$index] = new Array(this.getTableModel.length).fill(false)
                    }
                    this.$set(
                        this.validateResult[scope.$index],
                        i,
                        validateRes
                    );
                }
            }
            return !results.some((val) => !!val);
        },
        
        /**
         * 校验表格所有数据
         * @returns {Boolean} 校验结果 true表示异常，false表示无异常
         */
        validateAll(){
            let validateData = flatArray(this.tableData,this.treePropKey).map((val,index)=>({row:val,$index:index}));
            validateData.forEach(ele=>this.validate(ele));
            return this.validateResult.flat(Infinity).some(val=>val===true)
        },

        /**
         * 清空红字提醒，有scope则清空当前行，否则清空表格所有红字提醒
         * @param {object} scope 行信息
         */
        clearError(scope) {
            if (scope) {
                this.$set(this.validateResult, scope.$index, new Array(this.validateConfig.columnLength).fill(false))
            } else {
                this.initErrorResponse()
            }
        }
    },
    watch: {
        "tableData.length": {
            handler: function (newValue) {
                this.validateConfig.rowLength = flatArray(this.tableData,this.treePropKey).length
            },
            immediate: true
        },

        "tableModel.length": {
            handler: function (newValue) {
                this.validateConfig.columnLength = newValue
            },
            immediate: true
        },
        validateConfig: {
            handler: function () {
                this.initErrorResponse()
            },
            deep: true,
            immediate: true
        }
    },
    computed: {
        formateError() {
            return function (item,scope) {
                // let cellDom = this.$refs.tongTable.$el.querySelectorAll(`.${scope.column.id}`)[scope.$index+1];
                if (item.required) {
                    if (!item.validate) throw new Error("validate校验方法不存在，validate返回值为{text:''}");
                    let validateRes = item.validate(scope);
                    return {
                        text: validateRes.text || "",
                        show: validateRes.show || false,
                    };
                }
                return {
                    show: false,
                };
            };
        },
    },
}