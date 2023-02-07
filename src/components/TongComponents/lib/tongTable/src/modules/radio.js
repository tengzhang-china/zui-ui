export default {
    props: {
        radioShow: {
            type: Boolean,
            default: false,
        },
        radioable:{
            type:Function,
            default:function(){
                return function(){
                    return true
                }
            }
        },
        radioData: {},
        radioKey: {
            type: String,
            default: "id",
        },
    },
    watch: {
        radioData: {
            handler(newValue) {
                if (newValue !== undefined) this.radioValue = newValue
            },
            immediate: true
        }
    },
    data() {
        return {
            radioValue: "",
        }
    },
    methods: {
        // 表格单选时间回调
        tableRadioChange(scope){
            this.$emit('tableRadioChange',scope)
        }
    },
}