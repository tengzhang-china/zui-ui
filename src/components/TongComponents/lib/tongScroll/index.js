import Vue from "vue"
import vuescroll from "vuescroll";
import { debounce, throttle } from "../../js/usual"

const tongScroll = {
    name: "tongScroll",
    props: {
        ops: {
            type: Object,
            default: function () {
                return {
                    rail: {
                        background: 'transparent',
                        opacity: 0,
                        size: '10px',
                        specifyBorderRadius: false,
                        gutterOfEnds: null,
                        gutterOfSide: '2px',
                        keepShow: false
                    },
                    bar: {
                        showDelay: 500,
                        onlyShowBarOnScroll: false,
                        keepShow: true,
                        background: '#999',
                        opacity: 0.5,
                        hoverStyle: false,
                        specifyBorderRadius: false,
                        minSize: false,
                        size: '6px',
                        disable: false,
                    },
                    scrollButton: {
                        enable: false,
                        background: '#c1c1c1',
                        opacity: 0,
                        step: 180,
                        mousedownStep: 30
                    }
                }
            }
        },
        isSlotTable: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            tableWidth: "",
            minWidth: 0,
            setTimer: null,

            scrollLeft: 0,
            tableBodyDom: null,

            leftFixed: null, //左固定列

            rightFixed: null, //右固定列
            initRightValue: 0,

            scrollWidth:0
        }
    },
    methods: {
        getCurrentviewDom() {
            return this.$refs.vs.getCurrentviewDom()
        },

        /**
         * 滚动tong-table
         */
        tableScroll(vertical, horizontal, nativeEvent) {
            if (!this.$refs.vs.$el.querySelector(".scroll-box")) return
            const scrollLeft = Math.floor((horizontal.scrollLeft));

            this.scrollLeft = scrollLeft;

            nativeEvent.target.querySelector(".scroll-box .el-table__body-wrapper").scrollLeft = scrollLeft;

            if (this.leftFixed) {
                this.leftFixed.style.left = `${scrollLeft}px`;
            }
            if (this.rightFixed) {
                this.setRightFixed(scrollLeft)
            }
            this.setBodyClass(scrollLeft)
        },

        scrollOneMoreTime: debounce(
            function (horizontal, nativeEvent) {
                const child = this.$refs.vs.getCurrentviewDom()[0];
                const scrollLeft = (horizontal.scrollLeft)
                nativeEvent.target.querySelector(".scroll-box .el-table__body-wrapper").scrollLeft = scrollLeft
                if (this.leftFixed) child.style.paddingLeft = `${scrollLeft}px`;
            },
            100
        ),

        resize() {
            if (!this.$refs.vs.$el.querySelector(".scroll-box")) return;
            this.$refs.vs.$el.style.visible = "hidden"
            const elWidth = this.$refs.vs.$el.clientWidth;
            this.setWidth(this.tableWidth || elWidth);
            this.setBodyClass()
        },

        setWidth(width) {
            this.$refs.vs.$el.querySelector(".scroll-box").style.width = width + "px";
            this.$refs.vs.refresh()
        },

        /**
         * 获取表格的默认宽度
         */
        getInitWidth() {
            const tableBoxDom = this.$refs.vs && this.$refs.vs.$el.querySelector(".scroll-box")
            if (!tableBoxDom) return;
            this.tableWidth = 0;
            this.getMinWidth()

            if (this.minWidth === 0) return
            this.scrollWidth = this.$refs.vs.$el.clientWidth; //可视区域宽
            if (this.scrollWidth > this.minWidth) {
            } else {
                this.tableWidth = this.minWidth
            }
            this.resize();
            this.initRight()
        },

        getMinWidth() {
            if (this.minWidth) {
                return
            } else if (!this.setTimer) {
                this.$refs.vs.$el.querySelector(".scroll-box").style.width = "0"
                this.tableBodyDom = this.$refs.vs.$el.querySelector(".el-table__body-wrapper");
                this.leftFixed = this.$refs.vs.$el.querySelector(".el-table__fixed");//左固定列
                this.rightFixed = this.$refs.vs.$el.querySelector(".el-table__fixed-right");//右固定列


                this.$nextTick(() => {
                    this.setTimer = setTimeout(() => {
                        if (!this.$refs.vs) return
                        const tableDom = this.$refs.vs.$el.querySelector(".el-table__header-wrapper .el-table__header");
                        this.minWidth = tableDom.scrollWidth;
                        this.getInitWidth();
                    }, 30)
                })
            }

        },

        setBodyClass() {
            const scrollLeft = this.scrollLeft;
            const scrollRight = this.initRightValue - scrollLeft;
            // console.log({
            //     scrollLeft,
            //     scrollRight,
            //     tableWidth:this.tableWidth,
            //     scrollWidth:this.scrollWidth
            // })
            if (scrollLeft === 0 && scrollRight === 0 || this.tableWidth==0) {
                this.tableBodyDom.classList = ["el-table__body-wrapper is-scrolling-none"]
            } else if (scrollLeft > 0 && scrollRight === 0) {
                this.tableBodyDom.classList = ["el-table__body-wrapper is-scrolling-right"]
            } else if (scrollLeft > 0) {
                this.tableBodyDom.classList = ["el-table__body-wrapper"]
            } else {
                this.tableBodyDom.classList = ["el-table__body-wrapper is-scrolling-left"]
            }
        },

        initRight() {
            if (this.rightFixed) {
                this.initRightValue = this.minWidth - this.$refs.vs.$el.clientWidth;
                if (this.initRightValue >= 0) {
                    this.setRightFixed();
                } else {
                    this.rightFixed.style.right = "0px"
                }
            }
        },

        setRightFixed() {
            const scrollLeft = this.scrollLeft;
            this.rightFixed.style.right = `${this.initRightValue - scrollLeft}px`;
            this.setBodyClass();
        },
        
        // 重绘
        redraw(){
            this.minWidth=null;
            this.setTimer=null;
            this.getInitWidth();
        }
    },
    render(h) {
        const renderFunction = h(vuescroll, {
            props: {
                ops: this.ops
            },
            class: {
                "tong-scroll": true
            },
            ref: "vs",
            on: {
                "handle-scroll": function (vertical, horizontal, nativeEvent) {
                    this.tableScroll(vertical, horizontal, nativeEvent)
                }.bind(this),
                "handle-resize": function () {
                    this.getInitWidth()
                }.bind(this)
            }
        }, [this.$slots.default])

        // let renderDefault = (<el-scrollbar><div>{this.$slots.default}</div></el-scrollbar>)
        const renderDefault = h(vuescroll,{
            props: {
                ops: this.ops
            },
            class: {
                "tong-scroll": true,
                "custom-scroll":true
            },
            style:{
                width:"calc(100% + 1px)"
            }
        },[this.$slots.default])
        return this.isSlotTable?renderFunction:renderDefault
    },

    mounted() {
        if (!this.isSlotTable) return;
        window.addEventListener("resize", this.getInitWidth);
        this._bus.$on("resize", this.getInitWidth)
        this.$nextTick(this.getInitWidth)
    },
    destroyed() {
        window.removeEventListener("resize", this.resize)
        this._bus.$off("resize")
    },

    install() {
        Vue.component("tongScroll", tongScroll)
    },
    activated() {
        if (this.isSlotTable) {
            this.scrollLeft = 0
            if (this.leftFixed) {
                this.leftFixed.style.left = `${this.scrollLeft}px`;
            }
            if (this.rightFixed) {
                this.setRightFixed(this.scrollLeft)
            }
            this.getInitWidth()
        }
    }
}

export default tongScroll