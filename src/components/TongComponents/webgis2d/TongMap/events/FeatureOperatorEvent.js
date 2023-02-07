/* eslint-disable no-tabs */
import Event from 'ol/events/Event';
/**
   * @classdesc 传递FeatureOperator的Event
   * 用来传递feature
   * @constructs
   * @extends {ol.Event}
   * @author liaojy
   * @param {String} type 事件类型
   * @param {FeatureOperator} feature 图元
   */

class FeatureOperatorEvent extends Event {
  // static ACTIVATE = 'activate_feature'
  // static DEACTIVATE = 'deactivate_feature'

  constructor(type, featureOperator) {
    super(type);
    this.feature_operator = featureOperator;
    this.ACTIVATE = 'activate_feature';
    this.DEACTIVATE = 'deactivate_feature';
  }
}
/**
 * 图元被激活时触发
 * @static
 */
FeatureOperatorEvent.ACTIVATE = 'activate_feature';
/**
 * 图元被取消激活时触发
 * @static
 */
FeatureOperatorEvent.DEACTIVATE = 'deactivate_feature';

export default FeatureOperatorEvent;
