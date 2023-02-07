import Vue from "vue";
import TongMap from 'ol';
import { setBus } from '../js/usual';
Vue.prototype._bus = setBus()

import { TMap } from './TongMap/map/index';
import { View } from './TongMap/view/index';
import { Proj } from './TongMap/proj/index';
import{
    ImageLayer,
    TileLayer,
    VectorLayer,
    VectorTileLayer
} from './TongMap/layers/index';

import{
    TileGrid,
    WMTSTileGrid
} from './TongMap/tilegrid/index';

const componetArr = [
    TMap,
    View,
    Proj,
    ImageLayer,
    TileLayer,
    VectorLayer,
    VectorTileLayer,
    TileGrid,
    WMTSTileGrid
]

const install = function () {
    componetArr.forEach(comp => {
        Vue.use(comp);
    })
}
export default {
    install
}

export {
    TMap,
    View,
    Proj,
    ImageLayer,
    TileLayer,
    VectorLayer,
    VectorTileLayer,
    TileGrid,
    WMTSTileGrid
}