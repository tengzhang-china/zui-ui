import Vue from "vue";
import { verifyType } from "../../js/rules"
import { debounce } from "../../js/usual"
import { isOverflow } from "../../js/dom"
class TongTips {
    constructor() {
        this.loaded = false;

        this.classList = ["tong-tips"]; //即将显示tips的类名
        this.debounceTime = 300;

        this.tips = ""; //tip内容，支持html片段
        this.tipsShow = false; //是否显示tips
        this.x = 0; //x轴偏移量
        this.y = 5; //y轴偏移量
        this.maxWidth = "200px";//tip最大宽度 data-max-width

    }

    /**
     * 开启监听mouse事件
     */
    startListening() {
        let _this = this

        if (this.loaded) {
            console.warn("tongTips已经开启监听，请勿重复开启")
            return;
        }
        this.loaded = true;
        this.mouseoverListening = debounce(function (event) {
            _this.setTipsConfig(event.target)
            if (_this.isTipsShow(event)) {
                _this.countPosition(event)
            }
        }, _this.debounceTime)

        if (document.body) document.body.addEventListener("mouseover", this.mouseoverListening)
        if (document.body) document.body.addEventListener("mouseout", this.destroyTipsDom)
    }

    /**
     * 销毁监听
     */
    stopListening() {
        document.body.removeEventListener("mouseover", this.mouseoverListening);
        document.body.removeEventListener("mouseout", this.destroyTipsDom)
    }

    /**
     * 判断tips是否显示
     */
    isTipsShow(event) {
        let classExp = new RegExp(this.classList.join("|"));
        return classExp.test(event.target.className) && (this.tipsShow || isOverflow(event.target))
    }


    /**
     * 创建tips的dom
     */
    createTipsDom({ tips, placement = "top", maxWidth }) {
        let TongTipsDom = Vue.extend({
            template: "<div class='tong-tips-meta el-tooltip__popper is-dark' :class='formatePosition' :style='formateStyle'  v-html='tips'></div>",
            data() {
                return {
                    tips,
                    placement,
                    maxWidth
                }
            },
            computed: {
                formatePosition() {
                    return {
                        [this.placement]: true
                    }
                },
                formateStyle() {
                    return {
                        maxWidth: this.maxWidth
                    }
                }
            }
        })
        let dom_tips_new = new TongTipsDom().$mount().$el; //新的tips
        document.querySelector("body").appendChild(dom_tips_new)
        return dom_tips_new
    }

    /**
     * 销毁dom
     */
    destroyTipsDom() {
        if (document.querySelector(".tong-tips-meta")) document.body.removeChild(document.querySelector(".tong-tips-meta"))
    }

    /**
     * 初始化配置
     * @param {object}
     * 
     * 默认tips长度为100
     */
    setTipsConfig(target) {
        this.tipsShow = false;
        const dataset = target.dataset;
        this.tips = dataset.tips || target.innerText;
        if (dataset.x !== undefined) this.x = dataset.x;
        if (dataset.y !== undefined) this.y = dataset.y;
        if (dataset.maxWidth === undefined) {
            this.maxWidth = (target.clientWidth > 100 ? target.clientWidth : 100) + "px"
        } else {
            this.maxWidth = dataset.maxWidth
        }
        if (dataset.tipsShow !== undefined) this.tipsShow = dataset.tipsShow;
    }

    /**
     * 计算tip位置
     * @param {object} event
     */
    countPosition(event) {
        let boundings = event.target.getBoundingClientRect()
        const left = boundings.left + boundings.width / 2;
        let top = boundings.top > event.target.offsetTop ? boundings.top : event.target.offsetTop
        const bottom = document.body.clientHeight - top;
        this.setPosition({ left, bottom })
    }

    /**
     * 设置tips位置
     */
    setPosition({ left, bottom }) {
        let tipsDom = this.createTipsDom({ tips: this.tips, maxWidth: this.maxWidth, placement: "top" });
        let tipsDomWidth = tipsDom.clientWidth;
        tipsDom.style.left = `${left - tipsDomWidth / 2 + this.x}px`;
        tipsDom.style.bottom = `${bottom + this.y}px`;
    }

    /**
     * 添加需要校验tip的类名
     * @param {array} classArray 
     */
    addClassList(classArray) {
        let classItem = verifyType(classArray, "Array") ? classArray : [classArray]
        this.classList = [...new Set([...this.classList, ...classItem])];
    }
}

if (!Vue.prototype.tongTips) {
    Vue.prototype.tongTips = new TongTips();
    Vue.prototype.tongTips.startListening(); //直接开启监听
}

export default Vue.prototype.tongTips