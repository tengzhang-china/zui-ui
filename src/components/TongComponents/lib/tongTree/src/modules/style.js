export default {
    props: {
        treeBoxStyle: {
            type: Object,
            default: function () {
                return {
                    // 定义超出滚动
                }
            }
        },

        // 是否禁用栏
        nodeClickDisabled: {
            type: Boolean,
            default: false,
        }
    },

    computed: {
        formateUseDisabled() {
            return function (data) {
                return {
                    'is-disabled': data[this.formateTongTreeProps.disabled] && this.nodeClickDisabled
                }
            }
        }
    }
}