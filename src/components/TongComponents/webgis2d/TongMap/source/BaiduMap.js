
import TileImage from 'ol/source/TileImage';
import * as asserts from 'ol/asserts';
import TileGrid from 'ol/tilegrid/TileGrid';
/**
 * @class ol.tongmap.source.BaiduMap
 * @extends {ol/source/TileImage}
 * @constructor
 *  @param {Object} options  参数
 *  @param {string}  options.url   服务地址
 *  @param {string}  options.tileProxy  代理地址
 *  @param {boolean}  options.hidpi  是否使用高分辨率地图,默认false
 */
export class BaiduMap extends TileImage {
  constructor(opt_options) {
    var options = opt_options || {};
    var attributions =
      options.attributions ||
      'Map Data © 2018 Baidu - GS(2016)2089号 - Data © 长地万方 with <span>© <a>TongMap</a></span>';
    var tileGrid = BaiduMap.defaultTileGrid();
    var crossOrigin =
      options.crossOrigin !== undefined ? options.crossOrigin : 'anonymous';
    var url =
      options.url !== undefined
        ? options.url
        : 'http://online1.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles={styles}&udt=20170408';
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
    });
    if (options.tileProxy) {
      this.tileProxy = options.tileProxy;
    }
    var me = this;
  }

  /** 获取默认瓦片格网
   * @return {boolean}
   * function ol.source.BaiduMap.defaultTileGrid
   * @description 获取默认瓦片格网。
   * @returns {ol/tilegrid/TileGrid} 返回瓦片格网对象。
   */
  /** 获取瓦片网格。
   *@param { Object } b  返回瓦片格网对象
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
