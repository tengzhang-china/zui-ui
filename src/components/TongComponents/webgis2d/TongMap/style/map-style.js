/**
 * @Author liaojy
 * @Date 2020-08-27 13:40:57
 * @LastEditors liaojy
 * @Description 工具类:
 * 1、用于设置矢量图层的样式
 */
import {
    Style,
    Fill,
    Stroke,
    Icon,
    Text,
    Circle as CircleStyle
  } from 'ol/style' // 样式的类型
  
  /**
   * 说明：单色系列的【线】样式
   * @param {*} fill      不必填，string ，填充色
   * @param {*} stroke    不必填，string ，边线颜色
   * @param {*} width     不必填，number , 线条的宽度
   * @return  单色系列的【线】样式
   */
  export function monochromeLineStyle(options) {
    // 用 Object.assign 设置默认对象
    options = Object.assign(
      { fill: '#0078d7', stroke: '#0078d7', width: 2 },
      options
    )
    const icon = new Style({
      // 填充色
      fill: new Fill({
        color: options.fill
      }),
      // 边线颜色
      stroke: new Stroke({
        color: options.stroke,
        width: options.width
      })
    })
    return icon
  }
  
  /**
   * 说明：用于处理多样式的(【线加文字】)
   * @param {*} fill      不必填，string ，填充色
   * @param {*} stroke    不必填，string ，边线颜色
   * @param {*} width     不必填，number , 线条的宽度
   * @param {*} text    不必填，string ，文本内容
   * @param {*} textColor    不必填，string ，文本颜色
   * @param {*} textbgc    不必填，string ，文本背景颜色
   * @param {*} textbgcwidth  不必填，string ，背景宽度
   * @return 用于处理多样式的(【线加文字】)
   */
  
  export function lineTextStyle(options) {
    // 用 Object.assign 设置默认对象
    options = Object.assign(
      {
        fill: '#0078d7',
        stroke: '#0078d7',
        width: 2,
        text: '我是文字',
        textColor: '#000',
        textbgc: '#fff',
        textbgcwidth: 1
      },
      options
    )
    const icon = new Style({
      // 填充色
      fill: new Fill({
        color: options.fill
      }),
      // 边线颜色
      stroke: new Stroke({
        color: options.stroke,
        width: options.width
      }),
      // 文字
      text: new Text({
        // 位置
        textAlign: 'center',
        // 基准线
        textBaseline: 'top',
        // 文字样式
        font: 'bold 10px 微软雅黑',
        // 文本内容
        text: options.text,
        // 文字颜色
        fill: new Fill({ color: options.textColor }),
        // 文字背景
        stroke: new Stroke({
          color: options.textbgc,
          width: options.textbgcwidth
        })
      })
    })
    return icon
  }
  
  /**
   * 说明：单色系列的【点】
   * @param {*} radius    不必填，number ，圆形的半径
   * @param {*} stroke    不必填，string ，边线颜色
   * @param {*} fill      不必填，string , 填充色
   * @return  单色系列的【点】
   */
  export function monochromePointStyle(options) {
    // 用 Object.assign 设置默认对象
    options = Object.assign(
      { radius: 5, stroke: '#0078d7', fill: '#0078d7' },
      options
    )
    const icon = new Style({
      // 圆形
      image: new CircleStyle({
        radius: options.radius,
        // 边线颜色
        stroke: new Stroke({
          color: options.stroke
        }),
        // 填充色
        fill: new Fill({
          color: options.fill
        })
      })
    })
    return icon
  }
  
  /**
   * 说明：用于处理多样式的(【图标加文字(注记)】)
   * @param {*} textColor      不必填，string ，填充色
   * @param {*} src      不必填，string ，图片的地址，使用绝对路径：如"/static/img/xx.png"
   * @param {*} text     不必填，string ， 文本内容
   * @param {*} anchor   Aarrsy ，不必填，描点
   * @param {*} scale    不必填，string , 缩放
   * @param {*} textbgc  不必填，string ，背景文字颜色
   * @param {*} textbgcwidth    不必填，string , 文字边框宽度
   * @return  【图标加文字】的样式图层
   */
  export function textIconStyle(options) {
    // 用 Object.assign 设置默认对象
    options = Object.assign(
      {
        src: 'https://openlayers.org/en/v5.3.0/examples/data/icon.png',
        text: '我是文字',
        textColor: '#000',
        anchor: [0.5, 20],
        scale: 0.7,
        textbgc: '#fff',
        textbgcwidth: 1
      },
      options
    )
  
    const iconStyle = new Style({
      // 图标
      image: new Icon({
        anchor: options.anchor,
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: options.src,
        scale: options.scale
      }),
      // 文字
      text: new Text({
        scale: options.scale,
        // 位置
        textAlign: 'center',
        // 基准线
        textBaseline: 'center',
        // 文字样式
        font: 'normal 13px 微软雅黑',
        // 文本内容
        text: options.text,
        // 文字颜色
        fill: new Fill({ color: options.textColor }),
        // 文字背景
        stroke: new Stroke({
          color: options.textbgc,
          width: options.textbgcwidth
        })
      })
    })
    return iconStyle
  }
  
  /**
   * 说明：用于处理(【图标】)
   * @param {*} src    不必填，string ，图片的地址，使用绝对路径：如"/static/img/xx.png"
   * @param {*} anchor    不必填，string ，描点
   * @param {*} scale    不必填，string ，缩放
   * @return  【图标】的样式图层
   */
  export function IconStyle(options) {
    // 用 Object.assign 设置默认对象
    options = Object.assign(
      {
        src: 'https://openlayers.org/en/v5.3.0/examples/data/icon.png',
        anchor: [0.5, 20],
        scale: 0.7
      },
      options
    )
    const iconStyle = new Style({
      // 图标
      image: new Icon({
        anchor: options.anchor,
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: options.src,
        scale: options.scale
      })
    })
    return iconStyle
  }
  
  /**
   * 说明：用于处理(【文字（注记）】)
   * @param {*} text        不必填，string , 文本内容
   * @param {*} textColor   不必填，string ，填充色
   * @param {*} textbgc     不必填，string , 文本的背景色
   * @param {*} textbgcwidth  不必填，string ，背景宽度
   * @param {*} scale  number ，不必填 文字缩放
   * @return  【文字/注记】的样式图层
   */
  export function textStyle(options) {
    // 用 Object.assign 设置默认对象
    options = Object.assign(
      {
        text: '我是文字',
        textColor: '#000',
        textbgc: '#fff',
        textbgcwidth: 1,
        scale: 0.8
      },
      options
    )
    const iconStyle = new Style({
      // 文字
      text: new Text({
        scale: options.scale,
        // 位置
        textAlign: 'center',
        // 基准线
        textBaseline: 'middle',
        // 文字样式
        font: 'normal 13px 微软雅黑',
        // 文本内容
        text: options.text,
        // 文字颜色
        fill: new Fill({ color: options.textColor }),
        // 文字背景
        stroke: new Stroke({
          color: options.textbgc,
          width: options.textbgcwidth
        }),
        offsetX: 0,
        offsetY: 9, // 调整相对位置
        rotation: 0
      })
    })
    return iconStyle
  }
  