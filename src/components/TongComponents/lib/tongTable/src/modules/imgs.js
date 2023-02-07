export default {
    data() {
        return {
            iconDefault: {
                changed: require("../images/status/changed.png"),
                unchanged: require("../images/status/unchanged.png"),
                draft: require("../images/status/draft.png"),
                cancelled: require("../images/status/cancelled.png"),
                frozen: require("../images/status/frozen.png"),
                green_right: require("../images/status/green_right.png"),
                on_approving: require("../images/status/on_approving.png"),
                open: require("../images/status/open.png"),
                rejected: require("../images/status/rejected.png"),
                stop: require("../images/status/stop.png"),
                to_approve: require("../images/status/to_approve.png"),
                deployed: require("../images/status/deployed.png"),
                un_deploying: require("../images/status/un_deploying.png"),
                done: require("../images/status/done.png"),
                warning: require("../images/status/warning.png"),
                no_passed: require("../images/status/no_passed.png"),
                run: require("../images/status/run.png"),
            },
        }
    },

    computed: {
        /**
         * 格式化状态栏
         */
        formateStatus() {
            return function (item, rowInfo) {
                let formateInfo = item.formate && item.formate(rowInfo);

                if (formateInfo) {
                    if ([undefined, true].indexOf(formateInfo.appoverDisabled) > -1) {
                        formateInfo.hidden = true;
                    }
                    if (this.iconDefault[formateInfo.customIcon]) {
                        formateInfo.customIcon = this.iconDefault[formateInfo.customIcon];
                    }
                }
                return (
                    formateInfo || {
                        hidden: true,
                    }
                );
            };
        },
    }
}
