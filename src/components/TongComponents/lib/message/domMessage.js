const domMessage = {
    show(el,config){
        el.style.position = "relative";
        domMessage.setMessageConfig(config)
        domMessage.makeMessageDom(el)
    },
    
    // dom配置项
    messageDomConfig:{
        icon:"el-icon-info",    //字体图标
        message:"", //内容
        left:"0",
        right:"0",
        position:"top",//top,bottom;消息出现的位置
        type:"warning",//success,warning,error;类型
        showClose: true,//关闭按钮
        autoClose:true, //是否自动关闭
        setTime:null
    },

    setMessageConfig(config={}){
        domMessage.messageDomConfig=Object.assign(domMessage.messageDomConfig,config)
    },

    /**
     * 生成messageDom
     */
    makeMessageDom(el){
        const {makeIconDom,hideDomAuto,showDom} = domMessage;
        const {message,type,left,right,position,showClose,autoClose} = domMessage.messageDomConfig;

        let messageDom = document.createElement('div');
        messageDom.classList.add('tong-dom-message')
        messageDom.classList.add('tong-dom-message-' + type); //整体风格类名
        messageDom.style.left=left;
        messageDom.style.right=right;
        messageDom.style[position==='top'?'top':"bottom"]="-48px";

        messageDom.appendChild(makeIconDom());//添加图标

        let textDom = document.createElement('span');
        textDom.innerText = message;
        messageDom.appendChild(textDom);

        if(showClose){
            let closeDom = document.createElement("i");
            closeDom.classList.add("el-icon-close");
            closeDom.addEventListener("click",()=>{
                domMessage.clickHide(messageDom)
            })
            messageDom.appendChild(closeDom);
        }

        el.appendChild(messageDom);
        showDom(messageDom)

        if(autoClose)hideDomAuto(messageDom)
    },

    /**
     * 生成icon
     */
    makeIconDom(){
        const {type} = domMessage.messageDomConfig;
        const iconType = "el-icon-" + type;
        let iconImg = document.createElement("i");
        iconImg.classList.add(iconType)
        return iconImg
    },

    /**
     * 隐藏dom
     */
    hideDomAuto(dom){
        const {duration} = domMessage.messageDomConfig;
        setTimeout(()=>{
            domMessage.clickHide(dom)
        },duration)
    },

    /**
     * 点击关闭
     */
    clickHide(dom){
        const {position} = domMessage.messageDomConfig;
        dom.style[position==='top'?'top':"bottom"] = "-48px";
        dom.style.opacity = "0";
        clearTimeout(domMessage.messageDomConfig.setTime)
        setTimeout(()=>{
            if(dom.parentNode)dom.parentNode.removeChild(dom);
        },500)
    },

    /**
     * 展示dom
     */
    showDom(dom){
        const {position} = domMessage.messageDomConfig;
        setTimeout(()=>{
            dom.style.opacity = "1";
            dom.style[position==='top'?'top':"bottom"] = "0";
        },1)
    }
}
export default domMessage