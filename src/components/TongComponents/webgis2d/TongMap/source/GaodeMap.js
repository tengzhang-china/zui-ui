/*
 * @Author:  liaojy
 * @Date: 2020-08-29 09:01:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */
import TileImage from 'ol/source/TileImage';
import * as asserts from 'ol/asserts';
import TileGrid from 'ol/tilegrid/TileGrid';
/**
 * @class ol.tongmap.source.GaodeMap
 * @param {Object} options   参数
 * @param {string} options.url   服务地址
 * @param {string} options.tileProxy   代理地址。
 * @param {boolean} options.hidpi    是否使用高分辨率地图,默认false
 * @extends {ol/source/TileImage}
 */
export class GaodeMap extends TileImage {
  constructor(opt_options) {
    var options = opt_options || {};
    var attributions =
      options.attributions ||
     'Map Data © 2018 Baidu - GS(2016)2089号 - Data © 长地万方 with <span>© <a>DEUMap</a></span>';
    var tileGrid = GaodeMap.defaultTileGrid();
    var crossOrigin =
      options.crossOrigin !== undefined ? options.crossOrigin : 'anonymous';

    var url =
      options.url !== undefined
        ? options.url
        : 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}';
    var hidpi =
      options.hidpi ||
      (window.devicePixelRatio ||
        window.screen.deviceXDPI / window.screen.logicalXDPI) > 1;
    url = url.replace('{styles}', hidpi ? 'ph' : 'pl');
    super({
      attributions: attributions,
      cacheSize: options.cacheSize,
      crossOrigin: crossOrigin,
      opaque: options.opaque !== undefined ? options.opaque : true,
      maxZoom: options.maxZoom !== undefined ? options.maxZoom : 19,
      reprojectionErrorThreshold: options.reprojectionErrorThreshold,
      tileLoadFunction: options.tileLoadFunction,
      url: url,
      projection: 'EPSG:3857',
      wrapX: options.wrapX,
      tilePixelRatio: hidpi ? 2 : 1,
      tileGrid: tileGrid
      //  tileUrlFunction: tileUrlFunction
    });

    if (options.tileProxy) {
      this.tileProxy = options.tileProxy;
    }
  }
  /**
   * function ol.source.BaiduMap.defaultTileGrid
   * @description 获取默认瓦片格网。
   * @returns {ol/tilegrid/TileGrid} 返回瓦片格网对象。
   */

  /** 获取瓦片网格。
   *@param { Object }  b  返回瓦片格网对象
   */
  static defaultTileGrid() {
    var tileGird = new TileGrid({
      extent: [-33554432, -33554432, 33554432, 33554432],
      resolutions: [
        131072 * 2,
        131072,
        65536,
        32768,
        16284,
        8192,
        4096,
        2048,
        1024,
        512,
        256,
        128,
        64,
        32,
        16,
        8,
        4,
        2,
        1,
        0.5
      ],
      origin: [0, 0],
      minZoom: 3
    });
    return tileGird;
  }
}
