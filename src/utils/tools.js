
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


export const practice = function (fn, delay, triggerNow) {

}

export const throttle = function (fn, delay) {
    var t = null,
        begin = new Date().getTime;

    return function () {
        var _self = this,
            args = arguments,
            cur = new Date().getTime();

        clearTimeout(t);

        if (cur - begin >= delay) {
            fn.apply(_self, args);
            begin = cur;
        } else {
            t = setTimeout(function () {
                fn.apply(_self, args);
            }, delay);
        }
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