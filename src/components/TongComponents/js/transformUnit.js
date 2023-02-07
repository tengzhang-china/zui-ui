function addWan(integer, number, mutiple, decimalDigit) {
    var me = this;
    var digit = getDigit(integer);
    if (digit > 3) {
        var remainder = digit % 8;
        if (remainder >= 5) { // ‘十万’、‘百万’、‘千万’显示为‘万’ 
            remainder = 4;
        }
        return Math.round(number / Math.pow(10, remainder + mutiple - decimalDigit)) / Math.pow(10, decimalDigit) + '万';
    } else {
        return Math.round(number / Math.pow(10, mutiple - decimalDigit)) / Math.pow(10, decimalDigit);
    }
}

function getDigit(integer) {
    var digit = -1;
    while (integer >= 1) {
        digit++;
        integer = integer / 10;
    }
    return digit;
}

function addChineseUnit(number, decimalDigit) {
    decimalDigit = decimalDigit == null ? 2 : decimalDigit;
    var integer = Math.floor(number);
    var digit = getDigit(integer);
    var unit = [];
    if (digit > 3) {
        var multiple = Math.floor(digit / 8);
        if (multiple >= 1) {
            var tmp = Math.round(integer / Math.pow(10, 8 * multiple));
            unit.push(addWan(tmp, number, 8 * multiple, decimalDigit));
            for (var i = 0; i < multiple; i++) {
                unit.push('亿');
            }
            return unit.join('');
        } else {
            return addWan(integer, number, 0, decimalDigit);
        }
    } else {
        return number;
    }
}

/**
 * 转换单位
 */
export const transformUnit = {
    config: {
        size: ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        k: 1024,
    },

    /**
     * kb转大单位
     * @param {*} kbytes 
     */
    kbToSize: function (kbytes, unitShow = true) {
        if (kbytes === 0) return '0KB';
        let i = Math.floor(Math.log(kbytes) / Math.log(this.config.k));
        const res = kbytes / Math.pow(this.config.k, i);
        return (res % 1 === 0?res:(res).toPrecision(3)) + (unitShow && this.config.size[i]||"");
    },

    /**
     * 大单位转小单位
     */
    sizeToKb: function (value, unitShow = false) {
        let unit = String(value).slice(-2).toUpperCase();
        let i = this.config.size.indexOf(unit);
        if (i < 0) return 0;
        return Math.pow(this.config.k, i) * (Number(value.slice(0, -2))) + (unitShow && "KB"||"")
    },

    /**
     * 数值转中文计数
     */
    numToSize: function (num) {
        return addChineseUnit(num)
    }
}