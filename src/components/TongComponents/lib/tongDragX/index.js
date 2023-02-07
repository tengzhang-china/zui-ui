import Vue from "vue";
class tongDragX{
    constructor(){
        this.loaded = false;
        this.isDragingX = false; //是否正在拖拽
        this.isDragingY = false;
        this.dragStart = null;
        this.draging = null;
        this.dragOver = null;

        this.startPoint = {};
        this.endPoint = {};
        
        this.dom = null;
        this.domWidth = null;
        this.domHeight = null;
    }

    startListening(){
        if(this.loaded){
            console.warn("tongDragX已经开启监听，请勿重复开启")
            return;
        }

        this.loaded = true;

        this.dragStart =  document.body.addEventListener("mousedown",(event)=>{
            this.isDragingX = Array.from(event.target.classList).indexOf('tong-drag-x')>-1;
            this.isDragingY = Array.from(event.target.classList).indexOf('tong-drag-y')>-1;
            if(!this.isDragingX && !this.isDragingY)return
            this.startPoint = {
                x:event.pageX,
                y:event.pageY,
            }
            this.dom = event.target;
            this.domWidth = event.target.offsetWidth;
            this.domHeight = event.target.offsetHeight;
            // if(!this.domMinWidth){
            //     this.domMinWidth = 200 || this.domWidth
            //     event.target.style.minWidth = `${this.domMinWidth}px`
            // }
            this.dom.classList.add('is-dragging')
        })

        this.draging = document.body.addEventListener("mousemove",(event)=>{
            if(!this.isDragingX && !this.isDragingY)return
            this.endPoint = {
                x:event.pageX,
                y:event.pageY,
            }
            if(this.isDragingX){
                this.setWidth()
            }

            if(this.isDragingY){
                this.setHeight()
            }
        })

        this.dragOver = document.body.addEventListener("mouseup",(event)=>{
            this.dom && this.dom.classList.remove('is-dragging')
            document.body.removeEventListener("mousemove",this.draging)
            document.body.removeEventListener("mouseup",this.dragOver)

            if(!this.isDragingX && !this.isDragingY)return
            this.isDragingX = false;
            this.isDragingY = false;
            Vue.prototype._bus.$emit('dragOver')
        })
    }

    setWidth(){
        const extraWidth = this.endPoint.x-this.startPoint.x;
        this.startPoint.x = this.endPoint.x;
        this.startPoint.y = this.endPoint.y;
        
        this.domWidth+=extraWidth;
        this.dom.style.width = `${this.domWidth}px`;

    }

    setHeight(){
        const extraHeight = this.endPoint.y-this.startPoint.y;
        this.startPoint.x = this.endPoint.x;
        this.startPoint.y = this.endPoint.y;
        this.domHeight+=extraHeight;
        this.dom.style.height = `${this.domHeight}px`;
    }

    stopListening(){
        document.body.removeEventListener("mousedown",this.dragStart);
        document.body.removeEventListener("mousemove",this.draging)
        document.body.removeEventListener("mouseup",this.dragOver)
    }
}
if(!Vue.prototype.tongDragX){
    Vue.prototype.tongDragX = new tongDragX();
    Vue.prototype.tongDragX.startListening();
}

export default Vue.prototype.tongDragX