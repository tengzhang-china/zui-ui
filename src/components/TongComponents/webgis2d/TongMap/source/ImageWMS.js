import imagerWMS from 'ol/source/ImageWMS';

export class ImagerWMS extends imagerWMS{
    constructor(options){
        var options = options || {};
        super(options);
    }
}