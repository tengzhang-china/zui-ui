import proj  from 'ol/proj';

export class Proj extends proj{
    constructor(options){
        var options = options || {};
        super(options);
    }
}