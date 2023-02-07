/*
 * @Author: liaojy
 * @LastEditors: Please set LastEditors
 * @Description: logo控件
 * @FilePath: \TongMap\control\Logo .js
 */

import {LogoBase64} from '@tongmapmap/control/img/Logo';
import Control from 'ol/control/Control';

/**
 * @class ol.tongmap.control.Logo
 * @category  Control
 * @classdesc Logo控件。默认不显示，需手动添加控件。
 * @extends {ol/control/Control}
 * @example
 *      var control = new ol.tongrmap.control.Logo();
 *      map.addControl(control);
 * @param {Object} options - logo 控件配置项。
 * @param {string} [options.imageUrl] - logo 图片地址。
 * @param {number} [options.width] - logo 图片宽。
 * @param {number} [options.height] - logo 图片高。
 */

 export class Logo extends Control{
     constructor(options){
        options = options || {};
        options.imageUrl = options.imageUrl || null;
        options.width = options.width || null;
        options.height = options.height || null;
        options.link = options.link || null;
        options.alt = options.alt || null;
        super(options);
        this.options = options;
        this.element = options.element = initLayerout.call(this);
     }

     /**
      * @description 初始化图层信息。
     */
     initLayerout() {
        var className = 'ol-control-logo ol-unselectable ol-control';
        var div = document.createElement("div");
        div.className = className;

        setDivStyle.call(this, div);

        var imageSrc = Base64;
        if (this.options.imageUrl) {
            imgSrc = this.options.imageUrl;
        }
        var alt = this.options.alt;
        var link = this.options.link;

        var imageWidth = "94px";
        var imageHeight = "29px";
        var styleSize = "width:" + imageWidth + ";height:" + imageHeight + ";";
        if (this.options.imageUrl) {
            imageWidth = this.options.width;
            imageHeight = this.options.height;
            styleSize = "width:" + imageWidth + ";height:" + imageHeight + ";";
            if (!imageWidth || !imageHeight) {
                styleSize = "";
            }
        }


        div.innerHTML = "<a href='" + link + "' target='_blank' style='border: none;display: block;'>" +
            "<img src=" + imgSrc + " alt='" + alt + "'  style='border: none;" + styleSize + "white-space: nowrap;margin-bottom: 2px'></a>";
        return div;
    }

    /**
     * @description 设置对象 style。
     * @param {HTMLElement} 待设置的 div。
     */
    setDivStyle(div){
        var attributionsElem = document.getElementsByClassName('ol-attribution');
        attributionsElem = attributionsElem && attributionsElem[0];
        var attrHeight = attributionsElem && attributionsElem.clientHeight || 29;
        div.style.bottom = (parseInt(attrHeight) + 6) + "px";
        div.style.right = "4px";
        div.style.marginTop = 0;
        div.style.marginLeft = 0;
        div.style.marginBottom = 0;
        div.style.marginRight = 0;
        var logoStyle = document.createElement('style');
        logoStyle.type = 'text/css';
        logoStyle.innerHTML = '.ol-control-logo,.ol-control-logo:hover {' +
            'background-color: rgba(255,255,255,0);' +
            '}';
        document.getElementsByTagName('head')[0].appendChild(logoStyle);
    }

 }