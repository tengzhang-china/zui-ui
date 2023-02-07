import { debounce, throttle } from "../../../../js/usual"
export default {
    props: {
        height: {
            type: Number | String,
            default: "100%"
        }
    },
    data() {
        return {

        }
    },
    methods: {
        doScroll: throttle(function (e) {
            if (!e.target.querySelector(".expand-btn.original")) return;

            let alldom = e.target.querySelectorAll(".expand-btn.original");
            for (let i = 0; i < alldom.length; i++) {
                const canLoadMore = alldom[i].getBoundingClientRect().top - e.target.getBoundingClientRect().top <= this.height;
                if (canLoadMore) {
                    alldom[i].querySelector("span").click()
                }
            }
        }, 5)
    },
    computed: {
        formateStyle() {
            return {
                height: typeof (this.height) === "string" ? this.height : `${this.height}px`
            }
        }
    }
}