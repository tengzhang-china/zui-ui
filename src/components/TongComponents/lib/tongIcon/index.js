import Vue from "vue";
export default {
    name:"tongIcon",
    props:['imgUrl'],
    render:function(h){
        if(/^http|data:image|\.[png|jpg|jpeg|gif|svg|bmp]/i.test(this.imgUrl)){
            return h("img",{
                attrs:{
                    src:this.imgUrl
                }
            })
        }else{
            return h('i',{
                class:this.imgUrl
            })
        }
    },
    install(){
        Vue.component("tongIcon",this)
    }
}