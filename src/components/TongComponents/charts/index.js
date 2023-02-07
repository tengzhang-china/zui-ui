import Vue from "vue";
import { setBus } from '../js/usual';
Vue.prototype._bus = setBus()

import tongLine from './tongLine'
import tongPie from './tongPie'
import tongRadar from './tongRadar'
import tongScatter from './tongScatter'
import tongBar from "./tongBar"
import tongGant from "./tongGant"
import tongCalendar from "./tongCalendar"
import tongSpirits from "./tongSpirits"
import tongVehicle from "./tongVehicle"

const componetArr = [
    tongLine,
    tongPie,
    tongRadar,
    tongScatter,
    tongBar,
    tongGant,
    tongCalendar,
    tongSpirits,
    tongVehicle
]

export {
    tongLine,
    tongPie,
    tongRadar,
    tongScatter,
    tongBar,
    tongGant,
    tongCalendar,
    tongSpirits,
    tongVehicle
}

const install = function () {
    componetArr.forEach(comp => {
        Vue.use(comp);
    })
}
export default {
    install,
    tongLine,
    tongPie,
    tongRadar,
    tongScatter,
    tongBar,
    tongGant,
    tongCalendar,
    tongSpirits,
    tongVehicle
}