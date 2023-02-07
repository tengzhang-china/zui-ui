export default{
    props:{
        lazy:{
            type:Boolean,
            default:false
        },
        load:{
            type:Function,
            default:null
        }
    },
    computed: {
        formateLazyloadConfig(){
            return {
                lazy:this.lazy,
                load:this.load
            }
        }
    },
}