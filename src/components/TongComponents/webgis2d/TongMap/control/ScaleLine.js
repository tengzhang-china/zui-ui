/*
 * @Author: liaojy
 * @LastEditors: Please set LastEditors
 * @Description: 比例尺控件
 * @FilePath: \TongMap\control\ScaleLine .js
 */
import Scale from 'ol/control/ScaleLine';
import * as olProj from 'ol/proj';
import AssertionError from 'ol/AssertionError';

/**
 * @class ol.tongmap.control.ScaleLine
 * @constructor
 * @category  Control
 * @classdesc 比例尺控件
 * @extends {ol/control/ScaleLine}
 * @param {options} options -参数。
 * @param {string} [options.className] - CSS Class name. 默认值'ol-scale-line'。
 * @param {number} [options.minWidth] - 最小像素宽度。
 * @param {(HTMLElement|string) } [options.target] - 指定比例尺控件目标容器。
 * @param {(ol.control.ScaleLineUnits|string)} [options.units] - 单位 默认值‘metric’
 * @example
 * var control = new ol.tongmap.control.ScaleLine();
 *      map.addControl(control)
 */
export class ScaleLine extends Scale {
  constructor(options) {
    options = options || {};
    // 需在super之前定义render，真正的调用是在初始化完成后
    options.render = function (mapEvent) {
      var frameState = mapEvent.frameState;
      if (!frameState) {
        this.viewState_ = null; // NOSONAR
      } else {
        this.viewState_ = frameState.viewState; // NOSONAR
      }
      this.updateElementRepair(); // NOSONAR
    };
    super(options); // NOSONAR
  }

  updateElementRepair() {
    const viewState = this.viewState_ || this.o;

    if (!viewState) {
      this.renderedVisible_ = this.renderedVisible_ || this.j;
      if (this.renderedVisible_) {
        this.element_ = this.element_ || this.c;
        this.element.style.display = 'none';
        this.renderedVisible_ = false;
      }
      return;
    }

    const center = viewState.center;
    const projection = viewState.projection;
    const units = this.getUnits();
    const pointResolutionUnits = units === 'degrees'
      ? 'degrees'
      : 'm';
    let pointResolution =
      olProj.getPointResolution(projection, viewState.resolution, center, pointResolutionUnits);
    this.minWidth_ = this.minWidth_ || this.v;
    let nominalCount = this.minWidth_ * pointResolution;
    let suffix = '';
    if (units === 'degrees') {
      const metersPerDegree = olProj.METERS_PER_UNIT.degrees;
      nominalCount *= metersPerDegree;
      if (nominalCount < metersPerDegree / 60) {
        suffix = '\u2033'; // seconds
        pointResolution *= 3600;
      } else if (nominalCount < metersPerDegree) {
        suffix = '\u2032'; // minutes
        pointResolution *= 60;
      } else {
        suffix = '\u00b0'; // degrees
      }
    } else if (units === 'imperial') {
      if (nominalCount < 0.9144) {
        suffix = 'in';
        pointResolution /= 0.0254;
      } else if (nominalCount < 1609.344) {
        suffix = 'ft';
        pointResolution /= 0.3048;
      } else {
        suffix = 'mi';
        pointResolution /= 1609.344;
      }
    } else if (units === 'nautical') {
      pointResolution /= 1852;
      suffix = '纳米';
    } else if (units === 'metric') {
      if (nominalCount < 0.001) {
        suffix = '微米';
        pointResolution *= 1000000;
      } else if (nominalCount < 1) {
        suffix = '毫米';
        pointResolution *= 1000;
      } else if (nominalCount < 1000) {
        suffix = '米';
      } else {
        suffix = '千米';
        pointResolution /= 1000;
      }
    } else if (units === 'us') {
      if (nominalCount < 0.9144) {
        suffix = 'in';
        pointResolution *= 39.37;
      } else if (nominalCount < 1609.344) {
        suffix = 'ft';
        pointResolution /= 0.30480061;
      } else {
        suffix = 'mi';
        pointResolution /= 1609.3472;
      }
    } else {
      throw new AssertionError(33);
    }
    var DIGITS = [1, 2, 5];
    let i = 3 * Math.floor(
      Math.log(this.minWidth_ * pointResolution) / Math.log(10));
    let count, width, decimalCount;
    while (true) {
      decimalCount = Math.floor(i / 3);
      const decimal = Math.pow(10, decimalCount);
      count = DIGITS[((i % 3) + 3) % 3] * decimal;
      width = Math.round(count / pointResolution);
      if (isNaN(width)) {
        this.element.style.display = 'none';
        this.renderedVisible_ = false;
        return;
      } else if (width >= this.minWidth_) {
        break;
      }
      ++i;
    }
    this.renderedHTML_ = this.renderedHTML_ || this.D;
    this.innerElement_ = this.innerElement_ || this.l;
    this.renderedWidth_ = this.renderedWidth_ || this.B;
    this.renderedVisible_ = this.renderedVisible_ || this.j;
    this.element_ = this.element_ || this.c;
    const html = count.toFixed(decimalCount < 0 ? -decimalCount : 0) + ' ' + suffix;
    if (this.renderedHTML_ !== html) {
      this.innerElement_.innerHTML = html;
      this.renderedHTML_ = html;
    }

    if (this.renderedWidth_ !== width) {
      this.innerElement_.style.width = width + 'px';
      this.renderedWidth_ = width;
    }

    if (!this.renderedVisible_) {
      this.element.style.display = '';
      this.renderedVisible_ = true;
    }
  }
}
