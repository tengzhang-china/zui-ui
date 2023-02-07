import wmts from 'ol/source/WMTS';

export class WMTS extends wmts{
    constructor(options){
        var options = options || {};
        super(options);
    }
}