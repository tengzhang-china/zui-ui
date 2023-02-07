/* eslint-disable no-prototype-builtins */
/**
 * Overwrites obj1's values with obj2's and adds
 * obj2's if non existent in obj1
 * @returns obj3 a new object based on obj1 and obj2
 */
export function mergeOptions(obj1, obj2) {
    const obj3 = {};
    for (const attr1 in obj1) obj3[attr1] = obj1[attr1];
    for (const attr2 in obj2) obj3[attr2] = obj2[attr2];
    return obj3;
  }
  
  export function assert(condition, message = 'Assertion failed') {
    if (!condition) {
      if (typeof Error !== 'undefined') throw new Error(message);
      throw message; // Fallback
    }
  }
  
  /**
   * Does str contain test?
   * @param {String} str_test
   * @param {String} str
   * @returns Boolean
   */
  export function contains(str_test, str) {
    return !!~str.indexOf(str_test);
  }
  
  export function getUniqueId() {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }
  
  export function isDefAndNotNull(val) {
    // Note that undefined == null.
    return val != null; // eslint-disable-line no-eq-null
  }
  
  export function assertEqual(a, b, message) {
    if (a !== b) {
      throw new Error(message + ' mismatch: ' + a + ' != ' + b);
    }
  }
  
  export function now() {
    if ('performance' in window === false) {
      window.performance = {};
    }
  
    Date.now =
      Date.now ||
      function() {
        // thanks IE8
        return new Date().getTime();
      };
  
    if ('now' in window.performance === false) {
      let nowOffset = Date.now();
  
      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }
  
      window.performance.now = () => Date.now() - nowOffset;
    }
  
    return window.performance.now();
  }
  
  export function randomId(prefix) {
    const id = now().toString(36);
    return prefix ? prefix + id : id;
  }
  
  export function isNumeric(str) {
    return /^\d+$/.test(str);
  }
  
  export function isEmpty(str) {
    return !str || str.length === 0;
  }
  
  export function emptyArray(array) {
    while (array.length) array.pop();
  }
  
  export function anyMatchInArray(source, target) {
    return source.some(each => target.indexOf(each) >= 0);
  }
  
  export function everyMatchInArray(arr1, arr2) {
    return arr2.every(each => arr1.indexOf(each) >= 0);
  }
  
  export function anyItemHasValue(obj, has = false) {
    const keys = Object.keys(obj);
    keys.forEach(key => {
      if (!isEmpty(obj[key])) has = true;
    });
    return has;
  }
  /**
   * 随机生成ID
   * Adapted from http://stackoverflow.com/a/2117523/526860
   * @returns {String} UUID
   */
  export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0;
      var v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  /**
   * 获取uuid
   * @returns {*|string|!Array.<T>}
   */
  export function getuuid() {
    const [s, hexDigits] = [[], '0123456789abcdef'];
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4';
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = '-';
    return s.join('');
  }
  
  /**
   * 判断是否为对象
   * @param value
   * @returns {boolean}
   */
  export function isObject(value) {
    const type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
  }
  /**
   * merge
   * @param a
   * @param b
   * @returns {*}
   */
  export function merge(a, b) {
    for (const key in b) {
      if (isObject(b[key]) && isObject(a[key])) {
        merge(a[key], b[key]);
      } else {
        a[key] = b[key];
      }
    }
    return a;
  }
  
  /**
   * get parent container
   * @param selector
   */
  export function getTarget(selector) {
    const dom = (function() {
      let found;
      return document && /^#([\w-]+)$/.test(selector)
        ? (found = document.getElementById(RegExp.$1))
          ? [found]
          : []
        : Array.prototype.slice.call(
            /^\.([\w-]+)$/.test(selector)
              ? document.getElementsByClassName(RegExp.$1)
              : /^[\w-]+$/.test(selector)
              ? document.getElementsByTagName(selector)
              : document.querySelectorAll(selector)
          );
    })();
    return dom;
  }
  /**
   * 数组映射
   * @param {Array} obj
   * @param {Function} cb
   * @param {*} [context]
   * @return {Array}
   */
  export function map(obj, cb, context) {
    if (!(obj && cb)) {
      return;
    }
    if (obj.map && obj.map === Array.prototype.map) {
      return obj.map(cb, context);
    } else {
      const result = [];
      for (let i = 0, len = obj.length; i < len; i++) {
        result.push(cb.call(context, obj[i], i, obj));
      }
      return result;
    }
  }
  
  export function bind(func, context, ...args) {
    return function(...innerArgs) {
      return func.apply(
        context,
        args.concat(Array.prototype.slice.call(innerArgs))
      );
    };
  }
  
  /**
   * @function ol. Util.createCanvasContext2D
   * @description 创建 2D 画布。
   * @param {number} opt_width - 画布宽度。
   * @param {number} opt_height - 画布高度。
   */
  export function createCanvasContext2D(optwidth, optheight) {
    var canvas = document.createElement('CANVAS');
    if (optwidth) {
      canvas.width = optwidth;
    }
    if (optheight) {
      canvas.height = optheight;
    }
    return canvas.getContext('2d');
  }
  /**
   * add own item
   * @param array
   * @param item
   */
  export function arrayAdd(array, item) {
    let i = 0;
    let index;
    const length = array.length;
    for (; i < length; i++) {
      if (array[i].seriesIndex === item.seriesIndex) {
        index = i;
        break;
      }
    }
    if (index === undefined) {
      array.push(item);
    } else {
      array[index] = item;
    }
    return array;
  }
  /**
   * bind function array
   * @param fns
   * @param context
   */
  export function bindAll(fns, context) {
    fns.forEach(fn => {
      if (!context[fn]) {
        return;
      }
      context[fn] = context[fn].bind(context);
    });
  }
  /**
   * remove node
   * @param node
   */
  export function removeNode(node) {
    return node && node.parentNode ? node.parentNode.removeChild(node) : null;
  }
  
  /**
   * mock zrender mouse event
   * @param type
   * @param event
   */
  export function mockEvent(type, event) {
    const e = new MouseEvent(type, {
      // set bubbles, so zrender can receive the mock event. ref: https://dom.spec.whatwg.org/#interface-event
      // "event.bubbles": Returns true or false depending on how event was initialized.
      // True if event goes through its target’s ancestors in reverse tree order, and false otherwise
      bubbles: true,
      cancelable: true,
      button: event.pointerEvent.button,
      buttons: event.pointerEvent.buttons,
      clientX: event.pointerEvent.clientX,
      clientY: event.pointerEvent.clientY,
      // @ts-ignore
      zrX: event.pointerEvent.offsetX,
      zrY: event.pointerEvent.offsetY,
      movementX: event.pointerEvent.movementX,
      movementY: event.pointerEvent.movementY,
      relatedTarget: event.pointerEvent.relatedTarget,
      screenX: event.pointerEvent.screenX,
      screenY: event.pointerEvent.screenY,
      view: window
    });
    e.zrX = event.pointerEvent.offsetX;
    e.zrY = event.pointerEvent.offsetY;
    e.event = e;
    return e;
  }
  /**
   * @description 复制源对象的所有属性到目标对象上，源对象上的没有定义的属性在目标对象上也不会被设置。
   * @example
   * 要复制 Size 对象的所有属性到自定义对象上，使用方法如下:
   *     var size = new Size(100, 100);
   *     var obj = {}；
   *    Util.extend(obj, size);
   * @param {Object} [destination] - 目标对象。
   * @param {Object} source - 源对象，其属性将被设置到目标对象上。
   * @returns {Object} 目标对象。
   */
  export function extend(destination, source) {
    destination = destination || {};
    if (source) {
      for (var property in source) {
        var value = source[property];
        if (value !== undefined) {
          destination[property] = value;
        }
      }
  
      /**
       * IE doesn't include the toString property when iterating over an object's
       * properties with the for(property in object) syntax.  Explicitly check if
       * the source has its own toString property.
       */
  
      /*
       * FF/Windows < 2.0.0.13 reports "Illegal operation on WrappedNative
       * prototype object" when calling hawOwnProperty if the source object
       * is an instance of window.Event.
       */
  
      var sourceIsEvt =
        typeof window.Event === 'function' && source instanceof window.Event;
  
      if (
        !sourceIsEvt &&
        source.hasOwnProperty &&
        source.hasOwnProperty('toString')
      ) {
        destination.toString = source.toString;
      }
    }
    return destination;
  }
  /**
   * @description 对象拷贝。
   * @param {Object} [des] - 目标对象。
   * @param {Object} soc - 源对象。
   */
  export function copy(des, soc) {
    des = des || {};
    var v;
    if (soc) {
      for (var p in des) {
        v = soc[p];
        if (typeof v !== 'undefined') {
          des[p] = v;
        }
      }
    }
  }
  /**
   * @description 销毁对象，将其属性置空。
   * @param {Object} [obj] - 目标对象。
   */
  export function reset(obj) {
    obj = obj || {};
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (typeof obj[p] === 'object' && obj[p] instanceof Array) {
          for (var i in obj[p]) {
            if (obj[p][i].destroy) {
              obj[p][i].destroy();
            }
          }
          obj[p].length = 0;
        } else if (typeof obj[p] === 'object' && obj[p] instanceof Object) {
          if (obj[p].destroy) {
            obj[p].destroy();
          }
        }
        obj[p] = null;
      }
    }
  }
  /**
   * @description 获取 HTML 元素数组。
   * @returns {Array.<HTMLElement>} HTML 元素数组。
   */
  export function getElement() {
    var elements = [];
  
    for (var i = 0, len = arguments.length; i < len; i++) {
      var element = arguments[i];
      if (typeof element === 'string') {
        element = document.getElementById(element);
      }
      if (arguments.length === 1) {
        return element;
      }
      elements.push(element);
    }
    return elements;
  }
  
  /**
   * @description instance of 的跨浏览器实现。
   * @param {Object} o - 对象。
   * @returns {boolean} 是否是页面元素。
   */
  export function isElement(o) {
    return !!(o && o.nodeType === 1);
  }
  
  /**
   * @description 判断一个对象是否是数组。
   * @param {Object} a - 对象。
   * @returns {boolean} 是否是数组。
   */
  export function isArray(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  }
  /**
   * @description 从数组中删除某一项。
   * @param {Array} array - 数组。
   * @param {Object} item - 数组中要删除的一项。
   * @returns {Array} 执行删除操作后的数组。
   */
  export function removeItem(array, item) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (array[i] === item) {
        array.splice(i, 1);
        // break;more than once??
      }
    }
    return array;
  }
  
  /**
   * @description 获取某对象再数组中的索引值。
   * @param {Array} array - 数组。
   * @param {Object} obj - 对象。
   * @returns {number} 某对象再数组中的索引值。
   */
  export function indexOf(array, obj) {
    if (array == null) {
      return -1;
    } else {
      // use the build-in function if available.
      if (typeof array.indexOf === 'function') {
        return array.indexOf(obj);
      } else {
        for (var i = 0, len = array.length; i < len; i++) {
          if (array[i] === obj) {
            return i;
          }
        }
        return -1;
      }
    }
  }
  
  /**
   * @description 修改某 DOM 元素的许多属性。
   * @param {HTMLElement} element - 待修改的 DOM 元素。
   * @param {string} [id] - DOM 元素的 ID。
   * @param { Pixel} [px] - 包含 DOM 元素的 style 属性的 left 和 top 属性。
   * @param { Size} [sz] - 包含 DOM 元素的 width 和 height 属性。
   * @param {string} [position] - DOM 元素的 position 属性。
   * @param {string} [border] - DOM 元素的 style 属性的 border 属性。
   * @param {string} [overflow] - DOM 元素的 style 属性的 overflow 属性。
   * @param {number} [opacity] - 不透明度值。取值范围为(0.0 - 1.0)。
   */
  export function modifyDOMElement(
    element,
    id,
    px,
    sz,
    position,
    border,
    overflow,
    opacity
  ) {
    if (id) {
      element.id = id;
    }
    if (px) {
      element.style.left = px.x + 'px';
      element.style.top = px.y + 'px';
    }
    if (sz) {
      element.style.width = sz.w + 'px';
      element.style.height = sz.h + 'px';
    }
    if (position) {
      element.style.position = position;
    }
    if (border) {
      element.style.border = border;
    }
    if (overflow) {
      element.style.overflow = overflow;
    }
    if (parseFloat(opacity) >= 0.0 && parseFloat(opacity) < 1.0) {
      element.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
      element.style.opacity = opacity;
    } else if (parseFloat(opacity) === 1.0) {
      element.style.filter = '';
      element.style.opacity = '';
    }
  }
  
  /**
   * @description Takes an object and copies any properties that don't exist from
   *     another properties, by analogy with extend() from
   *     Prototype.js.
   *
   * @param {Object} [to] - 目标对象。
   * @param {Object} from - 源对象。Any properties of this object that
   *     are undefined in the to object will be set on the to object.
   *
   * @returns {Object} A reference to the to object.  Note that the to argument is modified
   *     in place and returned by this function.
   */
  export function applyDefaults(to, from) {
    to = to || {};
    /*
     * FF/Windows < 2.0.0.13 reports "Illegal operation on WrappedNative
     * prototype object" when calling hawOwnProperty if the source object is an
     * instance of window.Event.
     */
    var fromIsEvt =
      typeof window.Event === 'function' && from instanceof window.Event;
  
    for (var key in from) {
      if (
        to[key] === undefined ||
        (!fromIsEvt &&
          from.hasOwnProperty &&
          from.hasOwnProperty(key) &&
          !to.hasOwnProperty(key))
      ) {
        to[key] = from[key];
      }
    }
    /**
     * IE doesn't include the toString property when iterating over an object's
     * properties with the for(property in object) syntax.  Explicitly check if
     * the source has its own toString property.
     */
    if (
      !fromIsEvt &&
      from &&
      from.hasOwnProperty &&
      from.hasOwnProperty('toString') &&
      !to.hasOwnProperty('toString')
    ) {
      to.toString = from.toString;
    }
  
    return to;
  }
  
  /**
   * @description 将参数对象转换为 HTTP 的 GET 请求中的参数字符串。例如："key1=value1&key2=value2&key3=value3"。
   * @param {Object} params - 参数对象。
   * @returns {string} HTTP 的 GET 请求中的参数字符串。
   */
  export function getParameterString(params) {
    var paramsArray = [];
  
    for (var key in params) {
      var value = params[key];
      if (value != null && typeof value !== 'function') {
        var encodedValue;
        if (Array.isArray(value) || value.toString() === '[object Object]') {
          encodedValue = encodeURIComponent(JSON.stringify(value));
        } else {
          /* value is a string; simply encode */
          encodedValue = encodeURIComponent(value);
        }
        paramsArray.push(encodeURIComponent(key) + '=' + encodedValue);
      }
    }
  
    return paramsArray.join('&');
  }
  
  /**
   * @description 给 URL 追加参数。
   * @param {string} url - 待追加参数的 URL 字符串。
   * @param {string} paramStr - 待追加的参数。
   * @returns {string} 新的 URL。
   */
  export function urlAppend(url, paramStr) {
    var newUrl = url;
    if (paramStr) {
      var parts = (url + ' ').split(/[?&]/);
      newUrl +=
        parts.pop() === ' '
          ? paramStr
          : parts.length
          ? '&' + paramStr
          : '?' + paramStr;
    }
    return newUrl;
  }
  
  /**
   * @description 为了避免浮点精度错误而保留的有效位数。
   * @type {number}
   * @default 14
   */
  var DEFAULT_PRECISION = 14;
  
  /**
   * @description 将字符串以接近的精度转换为数字。
   * @param {string} number - 字符串。
   * @param {number} [precision=14] - 精度。
   * @returns {number} 数字。
   */
  export function toFloat(number, precision) {
    if (precision == null) {
      precision = DEFAULT_PRECISION;
    }
    if (typeof number !== 'number') {
      number = parseFloat(number);
    }
    return precision === 0 ? number : parseFloat(number.toPrecision(precision));
  }
  
  /**
   * @description 角度转弧度。
   * @param {number} x - 角度。
   * @returns {number} 弧度。
   */
  export function rad(x) {
    return (x * Math.PI) / 180;
  }
  /**
   * @description 从 URL 字符串中解析出参数对象。
   * @param {string} url - URL。
   * @returns {Object} 解析出的参数对象。
   */
  export function getParameters(url) {
    // if no url specified, take it from the location bar
    url = url === null || url === undefined ? window.location.href : url;
  
    // parse out parameters portion of url string
    var paramsString = '';
    if (String.contains(url, '?')) {
      var start = url.indexOf('?') + 1;
      var end = String.contains(url, '#') ? url.indexOf('#') : url.length;
      paramsString = url.substring(start, end);
    }
  
    var parameters = {};
    var pairs = paramsString.split(/[&;]/);
    for (var i = 0, len = pairs.length; i < len; ++i) {
      var keyValue = pairs[i].split('=');
      if (keyValue[0]) {
        var key = keyValue[0];
        try {
          key = decodeURIComponent(key);
        } catch (err) {
          key = unescape(key);
        }
  
        // being liberal by replacing "+" with " "
        var value = (keyValue[1] || '').replace(/\+/g, ' ');
  
        try {
          value = decodeURIComponent(value);
        } catch (err) {
          value = unescape(value);
        }
  
        // follow OGC convention of comma delimited values
        value = value.split(',');
  
        // if there's only one value, do not return as array
        if (value.length == 1) {
          value = value[0];
        }
  
        parameters[key] = value;
      }
    }
    return parameters;
  }
  
  /**
   * @description 不断递增计数变量，用于生成唯一 ID。
   * @type {number}
   * @default 0
   */
  var lastSeqID = 0;
  
  /**
   * @description 创建唯一 ID 值。
   * @param {string} [prefix] - 前缀。
   * @returns {string} 唯一的 ID 值。
   */
  export function createUniqueID(prefix) {
    if (prefix == null) {
      prefix = 'id_';
    }
    lastSeqID += 1;
    return prefix + lastSeqID;
  }
  
  /**
   * @memberOf SuperMap
   * @description 每单位的英尺数。
   * @type {Object}
   * @constant
   */
  var INCHES_PER_UNIT = {
    inches: 1.0,
    ft: 12.0,
    mi: 63360.0,
    m: 39.3701,
    km: 39370.1,
    dd: 4374754,
    yd: 36
  };
  INCHES_PER_UNIT.in = INCHES_PER_UNIT.inches;
  INCHES_PER_UNIT.degrees = INCHES_PER_UNIT.dd;
  INCHES_PER_UNIT.nmi = 1852 * INCHES_PER_UNIT.m;
  
  // Units from CS-Map
  var METERS_PER_INCH = 0.0254000508001016002;
  
  extend(INCHES_PER_UNIT, {
    Inch: INCHES_PER_UNIT.inches,
    Meter: 1.0 / METERS_PER_INCH, // EPSG:9001
    Foot: 0.30480060960121920243 / METERS_PER_INCH, // EPSG:9003
    IFoot: 0.3048 / METERS_PER_INCH, // EPSG:9002
    ClarkeFoot: 0.3047972651151 / METERS_PER_INCH, // EPSG:9005
    SearsFoot: 0.30479947153867624624 / METERS_PER_INCH, // EPSG:9041
    GoldCoastFoot: 0.30479971018150881758 / METERS_PER_INCH, // EPSG:9094
    IInch: 0.0254 / METERS_PER_INCH,
    MicroInch: 0.0000254 / METERS_PER_INCH,
    Mil: 0.0000000254 / METERS_PER_INCH,
    Centimeter: 0.01 / METERS_PER_INCH,
    Kilometer: 1000.0 / METERS_PER_INCH, // EPSG:9036
    Yard: 0.91440182880365760731 / METERS_PER_INCH,
    SearsYard: 0.914398414616029 / METERS_PER_INCH, // EPSG:9040
    IndianYard: 0.91439853074444079983 / METERS_PER_INCH, // EPSG:9084
    IndianYd37: 0.91439523 / METERS_PER_INCH, // EPSG:9085
    IndianYd62: 0.9143988 / METERS_PER_INCH, // EPSG:9086
    IndianYd75: 0.9143985 / METERS_PER_INCH, // EPSG:9087
    IndianFoot: 0.30479951 / METERS_PER_INCH, // EPSG:9080
    IndianFt37: 0.30479841 / METERS_PER_INCH, // EPSG:9081
    IndianFt62: 0.3047996 / METERS_PER_INCH, // EPSG:9082
    IndianFt75: 0.3047995 / METERS_PER_INCH, // EPSG:9083
    Mile: 1609.34721869443738887477 / METERS_PER_INCH,
    IYard: 0.9144 / METERS_PER_INCH, // EPSG:9096
    IMile: 1609.344 / METERS_PER_INCH, // EPSG:9093
    NautM: 1852.0 / METERS_PER_INCH, // EPSG:9030
    'Lat-66': 110943.316488932731 / METERS_PER_INCH,
    'Lat-83': 110946.25736872234125 / METERS_PER_INCH,
    Decimeter: 0.1 / METERS_PER_INCH,
    Millimeter: 0.001 / METERS_PER_INCH,
    Dekameter: 10.0 / METERS_PER_INCH,
    Decameter: 10.0 / METERS_PER_INCH,
    Hectometer: 100.0 / METERS_PER_INCH,
    GermanMeter: 1.0000135965 / METERS_PER_INCH, // EPSG:9031
    CaGrid: 0.999738 / METERS_PER_INCH,
    ClarkeChain: 20.1166194976 / METERS_PER_INCH, // EPSG:9038
    GunterChain: 20.11684023368047 / METERS_PER_INCH, // EPSG:9033
    BenoitChain: 20.116782494375872 / METERS_PER_INCH, // EPSG:9062
    SearsChain: 20.11676512155 / METERS_PER_INCH, // EPSG:9042
    ClarkeLink: 0.201166194976 / METERS_PER_INCH, // EPSG:9039
    GunterLink: 0.2011684023368047 / METERS_PER_INCH, // EPSG:9034
    BenoitLink: 0.20116782494375872 / METERS_PER_INCH, // EPSG:9063
    SearsLink: 0.2011676512155 / METERS_PER_INCH, // EPSG:9043
    Rod: 5.02921005842012 / METERS_PER_INCH,
    IntnlChain: 20.1168 / METERS_PER_INCH, // EPSG:9097
    IntnlLink: 0.201168 / METERS_PER_INCH, // EPSG:9098
    Perch: 5.02921005842012 / METERS_PER_INCH,
    Pole: 5.02921005842012 / METERS_PER_INCH,
    Furlong: 201.1684023368046 / METERS_PER_INCH,
    Rood: 3.778266898 / METERS_PER_INCH,
    CapeFoot: 0.3047972615 / METERS_PER_INCH,
    Brealey: 375.0 / METERS_PER_INCH,
    ModAmFt: 0.304812252984505969011938 / METERS_PER_INCH,
    Fathom: 1.8288 / METERS_PER_INCH,
    'NautM-UK': 1853.184 / METERS_PER_INCH,
    '50kilometers': 50000.0 / METERS_PER_INCH,
    '150kilometers': 150000.0 / METERS_PER_INCH
  });
  
  // unit abbreviations supported by PROJ.4
  extend(INCHES_PER_UNIT, {
    mm: INCHES_PER_UNIT.Meter / 1000.0,
    cm: INCHES_PER_UNIT.Meter / 100.0,
    dm: INCHES_PER_UNIT.Meter * 100.0,
    km: INCHES_PER_UNIT.Meter * 1000.0,
    kmi: INCHES_PER_UNIT.nmi, // International Nautical Mile
    fath: INCHES_PER_UNIT.Fathom, // International Fathom
    ch: INCHES_PER_UNIT.IntnlChain, // International Chain
    link: INCHES_PER_UNIT.IntnlLink, // International Link
    'us-in': INCHES_PER_UNIT.inches, // U.S. Surveyor's Inch
    'us-ft': INCHES_PER_UNIT.Foot, // U.S. Surveyor's Foot
    'us-yd': INCHES_PER_UNIT.Yard, // U.S. Surveyor's Yard
    'us-ch': INCHES_PER_UNIT.GunterChain, // U.S. Surveyor's Chain
    'us-mi': INCHES_PER_UNIT.Mile, // U.S. Surveyor's Statute Mile
    'ind-yd': INCHES_PER_UNIT.IndianYd37, // Indian Yard
    'ind-ft': INCHES_PER_UNIT.IndianFt37, // Indian Foot
    'ind-ch': 20.11669506 / METERS_PER_INCH // Indian Chain
  });
  /**
   * @memberOf SuperMap
   * @member [DOTS_PER_INCH=96]
   * @description 分辨率与比例尺之间转换的常量。
   * @type {Object}
   */
  var DOTS_PER_INCH = 96;
  
  /**
   * @param {number} scale - 比例尺。
   * @returns {number} 返回正常的 scale 值。
   */
  export function normalizeScale(scale) {
    var normScale = scale > 1.0 ? 1.0 / scale : scale;
    return normScale;
  }
  
  /**
   * @description 比例尺转分辨率。
   * @param {number} scale - 比例尺。
   * @param {string} [units='degrees'] - 比例尺单位。
   * @returns {number} 分辨率。
   */
  export function getResolutionFromScale(scale, units) {
    var resolution;
    if (scale) {
      if (units == null) {
        units = 'degrees';
      }
      var normScale = normalizeScale(scale);
      resolution = 1 / (normScale * INCHES_PER_UNIT[units] * DOTS_PER_INCH);
    }
    return resolution;
  }
  
  /**
   * @description 分辨率转比例尺。
   * @param {number} resolution - 分辨率。
   * @param {string} [units='degrees'] - 分辨率单位。
   * @returns {number} 比例尺。
   */
  export function getScaleFromResolution(resolution, units) {
    if (units == null) {
      units = 'degrees';
    }
  
    var scale = resolution * INCHES_PER_UNIT[units] * DOTS_PER_INCH;
    return scale;
  }
  
  /**
   * @memberOf SuperMap
   * @description 如果 userAgent 捕获到浏览器使用的是 Gecko 引擎则返回 true。
   * @constant
   */
  export const IS_GECKO = (function() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('webkit') === -1 && ua.indexOf('gecko') !== -1;
  })();
  
  /**
   * @memberOf SuperMap
   * @description 浏览器名称，依赖于 userAgent 属性，BROWSER_NAME 可以是空，或者以下浏览器：
   *     * "opera" -- Opera
   *     * "msie"  -- Internet Explorer
   *     * "safari" -- Safari
   *     * "firefox" -- Firefox
   *     * "mozilla" -- Mozilla
   * @constant
   */
  export const Browser = (function() {
    var name = '';
    var version = '';
    var device = 'pc';
    var uaMatch;
    // 以下进行测试
    var ua = navigator.userAgent.toLowerCase();
    if (
      ua.indexOf('msie') > -1 ||
      (ua.indexOf('trident') > -1 && ua.indexOf('rv') > -1)
    ) {
      name = 'msie';
      uaMatch = ua.match(/msie ([\d.]+)/) || ua.match(/rv:([\d.]+)/);
    } else if (ua.indexOf('chrome') > -1) {
      name = 'chrome';
      uaMatch = ua.match(/chrome\/([\d.]+)/);
    } else if (ua.indexOf('firefox') > -1) {
      name = 'firefox';
      uaMatch = ua.match(/firefox\/([\d.]+)/);
    } else if (ua.indexOf('opera') > -1) {
      name = 'opera';
      uaMatch = ua.match(/version\/([\d.]+)/);
    } else if (ua.indexOf('safari') > -1) {
      name = 'safari';
      uaMatch = ua.match(/version\/([\d.]+)/);
    }
    version = uaMatch ? uaMatch[1] : '';
  
    if (
      ua.indexOf('ipad') > -1 ||
      ua.indexOf('ipod') > -1 ||
      ua.indexOf('iphone') > -1
    ) {
      device = 'apple';
    } else if (ua.indexOf('android') > -1) {
      uaMatch = ua.match(/version\/([\d.]+)/);
      version = uaMatch ? uaMatch[1] : '';
      device = 'android';
    }
    return { name: name, version: version, device: device };
  })();
  
  /**
   * @description 获取浏览器相关信息。支持的浏览器包括：Opera，Internet Explorer，Safari，Firefox。
   * @returns {Object} 获取浏览器名称、版本、设备名称。对应的属性分别为 name, version, device。
   */
  export function getBrowser() {
    return Browser;
  }
  
  /**
   * @description 浏览器是否支持 Canvas。
   * @returns {boolean} 获取当前浏览器是否支持 HTML5 Canvas。
   */
  export const isSupportCanvas = (function() {
    var checkRes = true;
    var broz = getBrowser();
    if (document.createElement('canvas').getContext) {
      if (broz.name === 'firefox' && parseFloat(broz.version) < 5) {
        checkRes = false;
      }
      if (broz.name === 'safari' && parseFloat(broz.version) < 4) {
        checkRes = false;
      }
      if (broz.name === 'opera' && parseFloat(broz.version) < 10) {
        checkRes = false;
      }
      if (broz.name === 'msie' && parseFloat(broz.version) < 9) {
        checkRes = false;
      }
    } else {
      checkRes = false;
    }
    return checkRes;
  })();
  
  /**
   * @description 判断；浏览器是否支持 Canvas。
   * @returns {boolean} 获取当前浏览器是否支持 HTML5 Canvas 。
   */
  export function supportCanvas() {
    return isSupportCanvas;
  }
  
  // 将服务端的地图单位转成SuperMap的地图单位
  INCHES_PER_UNIT.degree = INCHES_PER_UNIT.dd;
  INCHES_PER_UNIT.meter = INCHES_PER_UNIT.m;
  INCHES_PER_UNIT.foot = INCHES_PER_UNIT.ft;
  INCHES_PER_UNIT.inch = INCHES_PER_UNIT.inches;
  INCHES_PER_UNIT.mile = INCHES_PER_UNIT.mi;
  INCHES_PER_UNIT.kilometer = INCHES_PER_UNIT.km;
  INCHES_PER_UNIT.yard = INCHES_PER_UNIT.yd;
  
  /**
   * @description 判断一个 URL 请求是否在当前域中。
   * @param {string} url - URL 请求字符串。
   * @returns {boolean} URL 请求是否在当前域中。
   */
  export function isInTheSameDomain(url) {
    if (!url) {
      return true;
    }
    var index = url.indexOf('//');
    var documentUrl = document.location.toString();
    var documentIndex = documentUrl.indexOf('//');
    if (index === -1) {
      return true;
    } else {
      var protocol;
      var substring = (protocol = url.substring(0, index));
      var documentSubString = documentUrl.substring(documentIndex + 2);
      documentIndex = documentSubString.indexOf('/');
      var documentPortIndex = documentSubString.indexOf(':');
      var documentDomainWithPort = documentSubString.substring(0, documentIndex);
      // var documentPort;
  
      var documentprotocol = document.location.protocol;
      if (documentPortIndex !== -1) {
        // documentPort = +documentSubString.substring(documentPortIndex, documentIndex);
      } else {
        documentDomainWithPort +=
          ':' + (documentprotocol.toLowerCase() === 'http:' ? 80 : 443);
      }
      if (documentprotocol.toLowerCase() !== substring.toLowerCase()) {
        return false;
      }
      substring = url.substring(index + 2);
      var portIndex = substring.indexOf(':');
      index = substring.indexOf('/');
      var domainWithPort = substring.substring(0, index);
      var domain;
      if (portIndex !== -1) {
        domain = substring.substring(0, portIndex);
      } else {
        domain = substring.substring(0, index);
        domainWithPort += ':' + (protocol.toLowerCase() === 'http:' ? 80 : 443);
      }
      var documentDomain = document.domain;
      if (
        domain === documentDomain &&
        domainWithPort === documentDomainWithPort
      ) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * @description 计算 iServer 服务的 REST 图层的显示分辨率，需要从 iServer 的 REST 图层表述中获取 viewBounds、viewer、scale、coordUnit、datumAxis 五个参数，来进行计算。
   * @param {SuperMap.Bounds} viewBounds - 地图的参照可视范围，即地图初始化时默认的地图显示范围。
   * @param {SuperMap.Size} viewer - 地图初始化时默认的地图图片的尺寸。
   * @param {number} scale - 地图初始化时默认的显示比例尺。
   * @param {string} [coordUnit='degrees'] - 投影坐标系统的地图单位。
   * @param {number} [datumAxis=6378137] - 地理坐标系统椭球体长半轴。用户自定义地图的 Options 时，若未指定该参数的值，则系统默认为 WGS84 参考系的椭球体长半轴 6378137。
   * @returns {number} 返回图层显示分辨率。
   */
  export function calculateDpi(viewBounds, viewer, scale, coordUnit, datumAxis) {
    // 10000 是 0.1毫米与米的转换。DPI的计算公式：Viewer / DPI *  0.0254 * 10000 = ViewBounds * scale ，公式中的10000是为了提高计算结果的精度，以下出现的ratio皆为如此。
    if (!viewBounds || !viewer || !scale) {
      return;
    }
    var ratio = 10000;
    var rvbWidth = viewBounds.getWidth();
    var rvbHeight = viewBounds.getHeight();
    var rvWidth = viewer.w;
    var rvHeight = viewer.h;
    // 用户自定义地图的Options时，若未指定该参数的值，则系统默认为6378137米，即WGS84参考系的椭球体长半轴。
    datumAxis = datumAxis || 6378137;
    coordUnit = coordUnit || 'degrees';
    var dpi;
    if (
      coordUnit.toLowerCase() === 'degree' ||
      coordUnit.toLowerCase() === 'degrees' ||
      coordUnit.toLowerCase() === 'dd'
    ) {
      const num1 = rvbWidth / rvWidth;
      const num2 = rvbHeight / rvHeight;
      const resolution = num1 > num2 ? num1 : num2;
      dpi =
        (0.0254 * ratio) /
        resolution /
        scale /
        ((Math.PI * 2 * datumAxis) / 360) /
        ratio;
    } else {
      const resolution = rvbWidth / rvWidth;
      dpi = (0.0254 * ratio) / resolution / scale / ratio;
    }
    return dpi;
  }
  
  /**
   * @description 将对象转换成 JSON 字符串。
   * @param {Object} obj - 要转换成 JSON 的 Object 对象。
   * @returns {string} 返回转换后的 JSON 对象。
   */
  export function toJSON(obj) {
    var objInn = obj;
    if (objInn == null) {
      return null;
    }
    switch (objInn.constructor) {
      case String:
        // s = "'" + str.replace(/(["\\])/g, "\\$1") + "'";   string含有单引号出错
        objInn = '"' + objInn.replace(/(["\\])/g, '\\$1') + '"';
        objInn = objInn.replace(/\n/g, '\\n');
        objInn = objInn.replace(/\r/g, '\\r');
        objInn = objInn.replace('<', '&lt;');
        objInn = objInn.replace('>', '&gt;');
        objInn = objInn.replace(/%/g, '%25');
        objInn = objInn.replace(/&/g, '%26');
        return objInn;
      case Array:
        var arr = [];
        for (var i = 0, len = objInn.length; i < len; i++) {
          arr.push(toJSON(objInn[i]));
        }
        return '[' + arr.join(',') + ']';
      case Number:
        return isFinite(objInn) ? String(objInn) : null;
      case Boolean:
        return String(objInn);
      case Date:
        var dateStr =
          '{' +
          '\'__type\':"System.DateTime",' +
          "'Year':" +
          objInn.getFullYear() +
          ',' +
          "'Month':" +
          (objInn.getMonth() + 1) +
          ',' +
          "'Day':" +
          objInn.getDate() +
          ',' +
          "'Hour':" +
          objInn.getHours() +
          ',' +
          "'Minute':" +
          objInn.getMinutes() +
          ',' +
          "'Second':" +
          objInn.getSeconds() +
          ',' +
          "'Millisecond':" +
          objInn.getMilliseconds() +
          ',' +
          "'TimezoneOffset':" +
          objInn.getTimezoneOffset() +
          '}';
        return dateStr;
      default:
        if (objInn.toJSON != null && typeof objInn.toJSON === 'function') {
          return objInn.toJSON();
        }
        if (typeof objInn === 'object') {
          if (objInn.length) {
            const arr = [];
            for (let i = 0, len = objInn.length; i < len; i++) {
              arr.push(toJSON(objInn[i]));
            }
            return '[' + arr.join(',') + ']';
          }
          const arr = [];
          for (const attr in objInn) {
            // 为解决SuperMap.Geometry类型头json时堆栈溢出的问题，attr == "parent"时不进行json转换
            if (
              typeof objInn[attr] !== 'function' &&
              attr !== 'CLASS_NAME' &&
              attr !== 'parent'
            ) {
              arr.push("'" + attr + "':" + toJSON(objInn[attr]));
            }
          }
  
          if (arr.length > 0) {
            return '{' + arr.join(',') + '}';
          } else {
            return '{}';
          }
        }
        return objInn.toString();
    }
  }
  
  /**
   * @description 根据比例尺和 dpi 计算屏幕分辨率。
   * @param {number} scale - 比例尺。
   * @param {number} dpi - 图像分辨率，表示每英寸内的像素个数。
   * @param {string} [coordUnit] - 投影坐标系统的地图单位。
   * @param {number} [datumAxis=6378137] - 地理坐标系统椭球体长半轴。用户自定义地图的 Options 时，若未指定该参数的值，则 DPI 默认按照 WGS84 参考系的椭球体长半轴 6378137 来计算。
   * @returns {number} 返回当前比例尺下的屏幕分辨率。
   */
  export function getResolutionFromScaleDpi(scale, dpi, coordUnit, datumAxis) {
    var resolution = null;
    var ratio = 10000;
    // 用户自定义地图的Options时，若未指定该参数的值，则系统默认为6378137米，即WGS84参考系的椭球体长半轴。
    datumAxis = datumAxis || 6378137;
    coordUnit = coordUnit || '';
    if (scale > 0 && dpi > 0) {
      scale = normalizeScale(scale);
      if (
        coordUnit.toLowerCase() === 'degree' ||
        coordUnit.toLowerCase() === 'degrees' ||
        coordUnit.toLowerCase() === 'dd'
      ) {
        // scale = SuperMap.Util.normalizeScale(scale);
        resolution =
          (0.0254 * ratio) /
          dpi /
          scale /
          ((Math.PI * 2 * datumAxis) / 360) /
          ratio;
        return resolution;
      } else {
        resolution = (0.0254 * ratio) / dpi / scale / ratio;
        return resolution;
      }
    }
    return -1;
  }
  
  /**
   * @description 根据 resolution、dpi、coordUnit 和 datumAxis 计算比例尺。
   * @param {number} resolution - 用于计算比例尺的地图分辨率。
   * @param {number} dpi - 图像分辨率，表示每英寸内的像素个数。
   * @param {string} [coordUnit] - 投影坐标系统的地图单位。
   * @param {number} [datumAxis=6378137] - 地理坐标系统椭球体长半轴。用户自定义地图的 Options 时，若未指定该参数的值，则 DPI 默认按照 WGS84 参考系的椭球体长半轴 6378137 来计算。
   * @returns {number} 返回当前屏幕分辨率下的比例尺。
   */
  export function getScaleFromResolutionDpi(
    resolution,
    dpi,
    coordUnit,
    datumAxis
  ) {
    var scale = null;
    var ratio = 10000;
    // 用户自定义地图的Options时，若未指定该参数的值，则系统默认为6378137米，即WGS84参考系的椭球体长半轴。
    datumAxis = datumAxis || 6378137;
    coordUnit = coordUnit || '';
    if (resolution > 0 && dpi > 0) {
      if (
        coordUnit.toLowerCase() === 'degree' ||
        coordUnit.toLowerCase() === 'degrees' ||
        coordUnit.toLowerCase() === 'dd'
      ) {
        scale =
          (0.0254 * ratio) /
          dpi /
          resolution /
          ((Math.PI * 2 * datumAxis) / 360) /
          ratio;
        return scale;
      } else {
        scale = (0.0254 * ratio) / dpi / resolution / ratio;
        return scale;
      }
    }
    return -1;
  }
  
  /**
   * @description 转换查询结果。
   * @param {Object} result - 查询结果。
   * @returns {Object} 转换后的查询结果。
   */
  export function transformResult(result) {
    if (result.responseText && typeof result.responseText === 'string') {
      result = JSON.parse(result.responseText);
    }
    return result;
  }
  
  /**
   * @description 属性拷贝，不拷贝方法类名(CLASS_NAME)等。
   * @param {Object} [destination] - 拷贝目标。
   * @param {Object} source - 源对象。
   *
   */
  export function copyAttributes(destination, source) {
    destination = destination || {};
    if (source) {
      for (var property in source) {
        var value = source[property];
        if (
          value !== undefined &&
          property !== 'CLASS_NAME' &&
          typeof value !== 'function'
        ) {
          destination[property] = value;
        }
      }
    }
    return destination;
  }
  
  /**
   * @description 将源对象上的属性拷贝到目标对象上。（不拷贝 CLASS_NAME 和方法）
   * @param {Object} [destination] - 目标对象。
   * @param {Object} source - 源对象。
   * @param {Array.<string>} clip - 源对象中禁止拷贝到目标对象的属性，目的是防止目标对象上不可修改的属性被篡改。
   *
   */
  export function copyAttributesWithClip(destination, source, clip) {
    destination = destination || {};
    if (source) {
      for (var property in source) {
        // 去掉禁止拷贝的属性
        var isInClip = false;
        if (clip && clip.length) {
          for (var i = 0, len = clip.length; i < len; i++) {
            if (property === clip[i]) {
              isInClip = true;
              break;
            }
          }
        }
        if (isInClip === true) {
          continue;
        }
  
        var value = source[property];
        if (
          value !== undefined &&
          property !== 'CLASS_NAME' &&
          typeof value !== 'function'
        ) {
          destination[property] = value;
        }
      }
    }
    return destination;
  }
  
  /**
   * @description 克隆一个 Object 对象
   * @param {Object} obj - 需要克隆的对象。
   * @returns {Object} 返回对象的拷贝对象，注意是新的对象，不是指向。
   */
  export function cloneObject(obj) {
    // Handle the 3 simple types, and null or undefined
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    // Handle Date
    if (obj instanceof Date) {
      const copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }
  
    // Handle Array
    if (obj instanceof Array) {
      const copy = obj.slice(0);
      return copy;
    }
  
    // Handle Object
    if (obj instanceof Object) {
      const copy = {};
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
          copy[attr] = cloneObject(obj[attr]);
        }
      }
      return copy;
    }
  
    throw new Error("Unable to copy obj! Its type isn't supported.");
  }
  
  /**
   * @description 判断两条线段是不是有交点。
   * @param {SuperMap.Geometry.Point} a1 - 第一条线段的起始节点。
   * @param {SuperMap.Geometry.Point} a2 - 第一条线段的结束节点。
   * @param {SuperMap.Geometry.Point} b1 - 第二条线段的起始节点。
   * @param {SuperMap.Geometry.Point} b2 - 第二条线段的结束节点。
   * @returns {Object} 如果相交返回交点，如果不相交返回两条线段的位置关系。
   */
  export function lineIntersection(a1, a2, b1, b2) {
    var intersectValue = null;
    var k1;
    var k2;
    var b = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
    var a = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
    var ab = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
    // ab==0代表两条线断的斜率一样
    if (ab != 0) {
      k1 = b / ab;
      k2 = a / ab;
  
      if (k1 >= 0 && k2 <= 1 && k1 <= 1 && k2 >= 0) {
        intersectValue = new Geometry.Point(
          a1.x + k1 * (a2.x - a1.x),
          a1.y + k1 * (a2.y - a1.y)
        );
      } else {
        intersectValue = 'No Intersection';
      }
    } else {
      if (b == 0 && a == 0) {
        var maxy = Math.max(a1.y, a2.y);
        var miny = Math.min(a1.y, a2.y);
        var maxx = Math.max(a1.x, a2.x);
        var minx = Math.min(a1.x, a2.x);
        if (
          (((b1.y >= miny && b1.y <= maxy) || (b2.y >= miny && b2.y <= maxy)) &&
            b1.x >= minx && b1.x <= maxx) ||
          (b2.x >= minx && b2.x <= maxx)
        ) {
          intersectValue = 'Coincident'; // 重合
        } else {
          intersectValue = 'Parallel'; // 平行
        }
      } else {
        intersectValue = 'Parallel'; // 平行
      }
    }
    return intersectValue;
  }
  
  /**
   * @description 获取文本外接矩形宽度与高度。
   * @param {SuperMap.ThemeStyle} style - 文本样式。
   * @param {string} text - 文本内容。
   * @param {Object} element - DOM 元素。
   * @returns {Object} 返回裁剪后的宽度，高度信息。
   */
  export function getTextBounds(style, text, element) {
    document.body.appendChild(element);
    element.style.width = 'auto';
    element.style.height = 'auto';
    if (style.fontSize) {
      element.style.fontSize = style.fontSize;
    }
    if (style.fontFamily) {
      element.style.fontFamily = style.fontFamily;
    }
    if (style.fontWeight) {
      element.style.fontWeight = style.fontWeight;
    }
    element.style.position = 'relative';
    element.style.visibility = 'hidden';
    // fix 在某些情况下，element内的文本变成竖起排列，导致宽度计算不正确的bug
    element.style.display = 'inline-block';
    element.innerHTML = text;
    var textWidth = element.clientWidth;
    var textHeight = element.clientHeight;
    document.body.removeChild(element);
    return {
      textWidth: textWidth,
      textHeight: textHeight
    };
  }
  export function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
  }
  let _stampId = 0;
  export function stamp(obj) {
    var key = '_p_id_';
    obj[key] = obj[key] || _stampId++;
    return obj[key];
  }
  export function combineOpts(dest) {
    var i, j, len, src;
    for (j = 1, len = arguments.length; j < len; j++) {
      src = arguments[j];
      for (i in src) {
        dest[i] = src[i];
      }
    }
    return dest;
  }
  
  export function deepcopy(object) {
    return JSON.parse(JSON.stringify(object));
  }
  
  export function connectEvent(target, event_name, fn, scope) {
    if (!target.on || typeof target.on !== 'function') {
      return;
    }
  
    if (!fn || !event_name) {
      return;
    }
  
    const $fn = e => {
      fn.call(scope || null, e);
    };
  
    target.on(event_name, $fn);
  
    return $fn;
  }
  
  export function disconnectEvent(target, event_name, fn) {
    if (!target.un || typeof target.un !== 'function') {
      return;
    }
  
    if (!fn || !event_name) {
      return;
    }
  
    target.un(event_name, fn);
  }
  