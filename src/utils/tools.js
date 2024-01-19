
//防抖函数
export const debounce = function (fn, delay, triggerNow) {
    var timer = null;

    var debounced = function () {
        var _self = this,
            args = arguments;

        if (timer) clearTimeout(timer);

        if (triggerNow) {
            var callNow = !timer;

            timer = setTimeout(function () {
                timer = null
            }, delay)

            if (callNow) {
                fn.apply(_self, args);
            }
        } else {
            timer = setTimeout(function () {
                fn.apply(_self, args);
            }, delay)
        }
    }

    debounced.cancel = function () {
        clearTimeout(timer);
        timer = null;
    }

    return debounced;
}


export const debounce2 = function (fn, delay, triggerNow) {
    var timer = null;

    var debounced = function () {
        var _self = this,
            args = arguments;

        if (timer) clearTimeout(timer);

        if (triggerNow) {
            var callNow = !timer;

            timer = setTimeout(function () {
                timer = null
            }, delay)

            if (callNow) {
                fn.apply(_self, args)
            }
        } else {

        }
    }
}

export const throttle = function (fn, wait, options = {}) {
    let timeout, context, args, result;
    let previous = 0;

    //later函数在节流时间过后执行，重置状态并执行目标函数
    let later = function () {
        //如果禁用了首次执行，则重置previous，否则更新为当前时间
        previous = options.leading === false ? 0 : Date.now();

        timeout = null; //清除定时器
    }
}


/**
 * 数组扁平化
 * @param {Array} 
 * @return {Array} 扁平化后的数组
 */
export const flatten = function flatten(arr) {
    var _arr = arr || [],
        fArr = [],
        len = _arr.length,
        item;

    for (var i = 0; i < len; i++) {
        item = _arr[i]

        if (_isArr(item)) {
            fArr = fArr.concat(flatten(item));
        } else {
            fArr.push(item);
        }
    }

    return fArr;

    function _isArr(item) {
        return {}.toString.call(item) === '[object Array]';
    }
}