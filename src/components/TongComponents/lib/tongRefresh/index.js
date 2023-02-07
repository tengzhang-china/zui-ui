import { verifyType } from "../../js/rules";
class TongRefresh {
    constructor() {

    }

    start(fn = undefined) {
        window.onbeforeunload = function () {
            return verifyType(fn, "Function") ?
                fn() :
                fn||undefined
        }
    }

    destroy() {
        window.unbind("onbeforeunload")
    }
}

export default new TongRefresh();