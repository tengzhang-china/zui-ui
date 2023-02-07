import echarts from "echarts";
import { getColors, lineSetting, gridSetting } from "./common.js";
import { mergeObject, debounce } from "../js/usual";
import { verifyType } from "../js/rules"
export default {
    props: {
        height: {
            type: String,
            default: "240"
        },
        title: {
            type: Object,
            default: function () {
                return {};
            },
        },
        tooltip: {
            type: Object | Number,
            default: function () {
                return -1
            },
        },
        legend: {
            type: Object,
            default: function () {
                return {};
            },
        },
        xAxis: {
            type: Object | Array,
            default: function () {
                return {};
            },
        },
        yAxis: {
            type: Object | Array,
            default: function () {
                return {};
            },
        },
        series: {
            type: Array,
            default: function () {
                return [];
            },
        },
    },

    computed: {
        formateOption() {
            return {
                series: this.series,
                yAxis: this.yAxis,
                xAxis: this.xAxis,
                title: this.title,
                tooltip: this.tooltip,
                legend: this.legend,
            }
        }
    },

    watch: {
        formateOption: {
            handler: function () {
                this.$nextTick(this.reDraw)
            },
            deep: true,
        }
    },
    data() {
        return {
            chartInstance: null,

            customColor: getColors(),//自定义色板
            customTitle: {},         //自定义配置项
            customTooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            customGrid: gridSetting(),
            customxAxis: {
                type: "category",
                boundaryGap: [0, 0.01],
            },
            customyAxis: {
                type: "value",
                data: [],
            },


            chartKey: null,
        }
    },
    methods: {
        /**
         * 重绘
         */
        reDraw: debounce(function () {
            const option = this.getOption();
            this.chartInstance.setOption(option);
        }),

        /**
         * 绘图
         */
        draw() {
            if (!this.chartInstance) this.chartInstance = (echarts||window.echarts).init(this.$refs.chart);
            const option = this.getOption();
            this.chartInstance.setOption(option);
        },


        /**
         * 获取配置项
         * 可以在对应vue中覆盖这个方法调整options
         */
        getOption() {
            return this.setOption()
        },

        /**
         * 合并配置项
         */
        setOption() {
            let option = {
                color: this.customColor,
                tooltip: this.customTooltip,
            };

            if (this.tooltip) option.tooltip = this.tooltip;

            option.title = mergeObject(this.customTitle, this.title);
            option.legend = mergeObject({}, this.legend);
            option.grid = mergeObject({}, this.customGrid)

            option.xAxis = verifyType(this.xAxis,"Array")?(this.xAxis.map(val=>mergeObject(this.customxAxis, lineSetting(), val))):(mergeObject(this.customxAxis, lineSetting(), this.xAxis))

            option.yAxis = verifyType(this.yAxis,"Array")?(this.yAxis.map(val=>mergeObject(this.customyAxis, lineSetting(), val))):(mergeObject(this.customyAxis, lineSetting(), this.yAxis))

            // option.yAxis = mergeObject(this.customyAxis, lineSetting(), this.yAxis);
            option.series = this.series
            if (Object.keys(this.$attrs).length > 0) {
                option = mergeObject({}, option, this.$attrs);
            }
            return option;
        },

        /**
         * 调整cahrt视图
         */
        resize() {
            this.chartInstance.resize()
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.draw();

            this.chartInstance.on("click", (params) => {
                if(this.select)this.select(params);
                this.$emit("click", params)
            });
        });
        window.addEventListener("resize", this.resize);
    },
    destroyed() {
        window.removeEventListener("resize", this.resize)
    },
}