import Vue from 'vue'
import { Message } from 'element-ui';
import domMessage from './domMessage';

Message.install = function () {
    Vue.prototype.T_message = function (userConfig = {}) {
        let newConfig = Object.assign({
            type: "success",//success/warning/info/error
            message: "默认message内容",
            showClose: true,//关闭按钮
            dangerouslyUseHTMLString: true,
            duration: 3000,
            customClass: "tong-message"
        }, userConfig)

        if (newConfig.el) {
            domMessage.show(newConfig.el, newConfig)
        } else {
            if(newConfig.desc)newConfig.message = "<div>" + newConfig.message + "</div><div>" + newConfig.desc + "</div>"
            Message(newConfig)
        }
    }
    Vue.prototype.tongMessage = Vue.prototype.T_message;
}

export default Message