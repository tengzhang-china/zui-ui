export default {
    name:"tongRender",
    props:['rowInfo','type','render','index',"value"], //type：1-表格；2-form
    render(h){
        switch(this.type){
            case undefined:;
            case "":;
            case "1":return this.render.call(this,h,this.rowInfo,this.index);
            case "2":return this.render.call(this,h,this.$attrs.tongFormData,this.value);
        }
    }
}