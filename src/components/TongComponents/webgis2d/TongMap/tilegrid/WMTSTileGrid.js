import wmts from 'ol/tilegrid/WMTS';

export class WMTSTileGrid extends wmts{
    constructor(options){
        var options = options || {};
        super(options);
    }
}