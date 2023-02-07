/**
 * @Author liaojy
 * @Date 2020-08-27 18:40:57
 * @LastEditors liaojy
 * @Description 业务类:
 * 1、常用地图的服务
 */

import { getWidth, getTopLeft } from 'ol/extent'
import WMTS from 'ol/tilegrid/WMTS'
import { WMTS as WMTSSource } from 'ol/source'
import XYZ from 'ol/source/XYZ'
import TileWMS from 'ol/source/TileWMS'
import TileLayer from 'ol/layer/Tile'
import { get as getProjection, getTransform } from 'ol/proj'
import { applyTransform } from 'ol/extent'

/**
 * @Description 获得一个OpenLayers框架下的ol/layer/Tile类型天地图图层
 * @param {options} Object 初始化参数
 * @param {options.type} String 与官方名称相同的图层类型
 * @param {options.proj} String 与官方名称相同的投影类型
 * @param {options.key} String 开发者秘钥
 * @param {options.zIndex} String 图层显示层级
 */

//  关于使用天地图WMTS服务：
// 使用方式如下：
// const WMTSLayer = getTiandituWMTS({
//   type: '天地图矢量底图',
//   // proj: '球面墨卡托投影',
//   proj: '经纬度投影',
//   key: '5d27dc75ca0c3bdf34f657ffe1e9881d'
// },10)
// this.map.addLayer(WMTSLayer)
export function getTiandituWMTS(options, zIndex = 1) {
  const layers = {
    天地图全球境界: 'ibo',
    天地图地形注记: 'cta',
    天地图地形晕渲: 'ter',
    天地图影像注记: 'cia',
    天地图影像底图: 'img',
    天地图矢量注记: 'cva',
    天地图矢量底图: 'vec'
  }
  const projs = {
    经纬度投影: 'EPSG:4326', // 或者EPSG:4490（这个也是经纬度坐标系）
    球面墨卡托投影: 'EPSG:3857'
  }
  const matrixSets = {
    经纬度投影: 'c',
    球面墨卡托投影: 'w'
  }
  const projection = getProjection(projs[options.proj])

  const projectionExtent = projection.getExtent()
  const origin = projectionExtent ? getTopLeft(projectionExtent) : [-180, 90]
  const fromLonLat = getTransform('EPSG:4326', projection)
  const width = projectionExtent
    ? getWidth(projectionExtent)
    : getWidth(applyTransform([-180.0, -90.0, 180.0, 90.0], fromLonLat))
  const resolutions = []
  const matrixIds = []
  for (let z = 1; z < 19; z++) {
    resolutions[z] = width / (256 * Math.pow(2, z))
    matrixIds[z] = z
  }
  const wmtsTileGrid = new WMTS({
    origin: origin,
    resolutions: resolutions,
    matrixIds: matrixIds
  })
  const wmtsSource = new WMTSSource({
    url:
      'http://t0.tianditu.gov.cn/' +
      layers[options.type] +
      '_' +
      matrixSets[options.proj] +
      '/wmts?tk=' +
      options.key,

    layer: layers[options.type],
    version: '1.0.0',
    matrixSet: matrixSets[options.proj],
    format: 'tiles',
    projection: projection,
    requestEncoding: 'KVP',
    style: 'default',
    tileGrid: wmtsTileGrid
  })
  const wmtsLayer = new TileLayer({
    preload: Infinity, // 瓦片预读技术
    zIndex,
    source: wmtsSource
  })
  return wmtsLayer
}

// 关于使用天地图XYZ服务：
// 使用方式如下：
// const XYZLayer = getTiandituXYZ({
//   type: '天地图矢量底图',
//   // proj: '球面墨卡托投影',
//   proj: '经纬度投影',
//   key: '5d27dc75ca0c3bdf34f657ffe1e9881d'
// },10)
// this.map.addLayer(XYZLayer)
export function getTiandituXYZ(options, zIndex = 1) {
  const layers = {
    天地图全球境界: 'ibo',
    天地图地形注记: 'cta',
    天地图地形晕渲: 'ter',
    天地图影像注记: 'cia',
    天地图影像底图: 'img',
    天地图矢量注记: 'cva',
    天地图矢量底图: 'vec'
  }
  const projs = {
    经纬度投影: 'EPSG:4326', // 或者EPSG:4490（这个也是经纬度坐标系）
    球面墨卡托投影: 'EPSG:3857'
  }
  const matrixSets = {
    经纬度投影: 'c',
    球面墨卡托投影: 'w'
  }
  const projection = getProjection(projs[options.proj])

  const XYZLayer = new TileLayer({
    preload: Infinity, // 瓦片预读技术
    zIndex,
    name: `'天地图${options.type}图层'`,
    source: new XYZ({
      projection: projection,
      crossOrigin: 'anonymous',
      url: `http://t0.tianditu.com/DataServer?T=${layers[options.type]}_${
        matrixSets[options.proj]
      }&x={x}&y={y}&l={z}&tk=${options.key}`,
      wrapX: false
    })
  })
  return XYZLayer
}

// 关于geoserve发布的wms服务:
// 使用方式如下：
// const GeoserveWMSLayer = getGeoserveWMS({
//   name: '黄石CAD底图',
//   url: 'http://121.40.211.231:18080/geoserver/wms',
//   LAYERS: 'hscadmap',
//   VERSION: '1.1.0',
//   BBOX: [
//     580952.8110961914,
//     3338681.9633778255,
//     589282.4721360529,
//     3347698.4990844727
//   ],
//   SRS: 'EPSG:4547'
// },10)
// this.map.addLayer(GeoserveWMSLayer)

export function getGeoserveWMS(options, zIndex = 1) {
  var wmsLayer = new TileLayer({
    zIndex,
    name: options.name,
    source: new TileWMS({
      crossOrigin: 'anonymous', // 解决错误：SecurityError: The operation is insecure.
      url: options.url,
      params: {
        LAYERS: options.LAYERS,
        singleTile: true,
        TILED: false,
        VERSION: options.VERSION,
        BBOX: options.BBOX,
        SRS: options.SRS
      },
      serverType: 'geoserver'
    })
  })
  return wmsLayer
}

// 关于高德地图XYZ服务
// 使用方式：
// const gaodeMapWMSLayer = getGaodeMapXYZ('高德注记图层', 10)
// this.map.addLayer(gaodeMapWMSLayer)

// 参数说明：
// const styleType = {
//   6: '高德影像底图',
//   7: '高德矢量底图',
//   8: '高德边界注记图层'
// }

export function getGaodeMapXYZ(name, zIndex = 1) {
  const styleType = {
    高德影像底图: 6,
    高德矢量底图: 7,
    高德边界注记图层: 8
  }
  const gaode = new TileLayer({
    preload: Infinity, // 瓦片预读技术
    zIndex,
    name,
    source: new XYZ({
      crossOrigin: 'anonymous',
      url: `http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=${styleType[name]}&x={x}&y={y}&z={z}`,
      wrapX: false,
      projection: 'EPSG:3857'
    })
  })
  return gaode
}
