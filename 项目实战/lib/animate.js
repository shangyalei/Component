/**
 * Created by think on 2017/6/28.
 */

/*
*
* 运动方式
* times变化量
* duration总时间
* change总距离
* begin起始位置
*
* */

/*匀速运动*/
function linear(times, begin, change, duration) {
    return times / duration * change + begin;
}

//指数衰减的反弹缓动 Bounce
function Bounce_easeIn (t, b, c, d) {
    return c - Bounce_easeOut(d - t, 0, c, d) + b;
}
function Bounce_easeOut(t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    } else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    } else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
}
function Bounce_easeInOut(t, b, c, d) {
    if (t < d / 2) {
        return Bounce_easeIn(t * 2, 0, c, d) * .5 + b;
    }
    return Bounce_easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
}

//二次方的缓动
    function Quad_easeIn(t, b, c, d) {
        return c * (t /= d) * t + b;
    }
    function Quad_easeOut(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    }
    function Quad_easeInOut (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }


//三次方的缓动
    function Cubic_easeIn(t, b, c, d) {
        return c * (t /= d) * t * t + b;
    }
    function Cubic_easeOut (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    }
    function Cubic_easeInOut (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    }

//四次方的缓动
    function Quart_easeIn(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    }
    function Quart_easeOut(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    }
    function Quart_easeInOut (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }

//五次方的缓动
    function Quint_easeIn(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    }
    function Quint_easeOut(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }
    function Quint_easeInOut (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }

//正弦曲线的缓动
    function Sine_easeIn (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    }
   function Sine_easeOut (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    }
    function Sine_easeInOut (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }

//指数曲线的缓动
    function Expo_easeIn (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    }
    function Expo_easeOut (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }
    function Expo_easeInOut (t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }


//圆形曲线的缓动
    function Circ_easeIn (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    }
    function Circ_easeOut (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    }
   function Circ_easeInOut (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }

//超过范围的三次方缓动
    function Back_easeIn(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    }
    function Back_easeOut(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }
    function Back_easeInOut (t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        }
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    }

//指数衰减的正弦曲线缓动
    function Elastic_easeIn (t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        var s;
        !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }
    function Elastic_easeOut (t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        var s;
        !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
        return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
    }
    function Elastic_easeInOut (t, b, c, d, a, p) {
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        var s;
        !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    }







//上面的Effect是效果算法






function animate(ele, complex, duration, mode, callback) {
    var oBegin = {};
    var count = 0;
    for (var direc in complex) {
        if (direc === 'opacity') {
            if (typeof window.getComputedStyle === 'function') {
                var begin = parseFloat(window.getComputedStyle(ele, null).opacity);
            } else {
                var begin = ele.currentStyle.opacity;
                if (typeof begin === 'undefined') {
                    ele.style.opacity = 1;
                    ele.style.filter = "alpha(opacity=100)";
                    begin = 1;
                    //初始化IE6/78的opacity;
                }
            }
        } else {
            var str = 'offset' + direc.substr(0, 1).toUpperCase() + direc.substring(1).toLowerCase();
            var begin = ele[str];
        }
        var change = complex[direc] - begin;
        if (change) {
            count++;
            oBegin[direc] = begin;
        }
    }

    if (count === 0) return;

    var interval = 10;
    var times = 0;

    window.clearTimeout(ele.timer);

    move();

    function move() {
        times += interval;
        if (times >= duration) {
            for (var direc in oBegin) {
                if (direc === 'opacity') {
                    ele.style[direc] = complex[direc];
                    ele.style.filter = "alpha(opacity=" + complex.opacity * 100 + ")";
                } else {
                    ele.style[direc] = complex[direc] + "px";
                }
                if (typeof callback === 'function') {
                    callback.call(ele);
                }
            }
            ele.timer = null;
        } else {
            for (var direc in oBegin) {
                var val = mode(times,oBegin[direc],complex[direc] - oBegin[direc], duration);
                if (direc === 'opacity') {
                    ele.style[direc] = val;
                    ele.style.filter = "alpha(opacity=" + val * 100 + ")";
                } else {
                    ele.style[direc] = val + "px";
                }
            }
            ele.timer = window.setTimeout(move, interval);
        }
    }
}

