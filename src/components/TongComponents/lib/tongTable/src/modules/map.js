import { doDeepCopy } from "../../../../js/usual"
export default {
    props: {
        layer: {
            type: Object,
            default: null
        }
    },
    computed: {
        formateLayerData() {
            let tableData = []
            if(this.layer && this.layer.features) {
                tableData = this.layer.features.map(f => {
                    return doDeepCopy({feature: f},f.properties)
                })
            }
            return tableData
        }
    }
}