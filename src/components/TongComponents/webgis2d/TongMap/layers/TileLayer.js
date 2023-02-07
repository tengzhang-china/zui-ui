import tileLayer from 'ol/layer/Tile';

export class TileLayer extends tileLayer{
    constructor(options){
        var options = options || {};
        super(options);
    }
}