export default {
    computed:{
        hasDetailSlot(){
            return this.$slots.detailSlot
        }
    },
    methods: {
        showDetailSlot(data){
            this.$set(data,'detailSlotShow',true)
        },
        hideDetailSlot(data){
            this.$set(data,'detailSlotShow',false)
        }
    },
}