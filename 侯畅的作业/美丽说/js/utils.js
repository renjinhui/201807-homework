var utils = (function () {
    //var flag = window.getComputedStyle ? false : true;
    //flag为true表示IE6~8
    //惰性思想
    function toJson(str) {
        var obj = {};
        try{
            obj = JSON.parse(str);
        }catch (e) {
            obj = eval(`(${str})`);
        }
        return obj;
    }
    function toArray(arg) {
        var ary = [];
        try{
            ary = [].slice.call(arg);
        }catch (e) {
            for (let i = 0; i < arg.length; i++) {
                ary.push(arg[i]);
            }
        }
        return ary;
    }
    function offset(ele) {
        var l = ele.offsetLeft;
        var t = ele.offsetTop;
        var temp = ele.offsetParent;
        while (temp && temp.nodeName !== "BODY"){
            l += temp.offsetLeft + temp.clientLeft;
            t += temp.offsetTop + temp.clientTop;
            temp = temp.offsetParent;
        }
        return {
            top:t,
            left:l
        }
    }
    function offsetTop(ele) {
        var timer = window.setInterval(function () {
            var h = ele.scrollTop++;
            if (h == ele.scrollTop){
                ele.scrollTop = 0;
            }
        },20);
    }
    function win(str) {
        return document.documentElement[str] || document.body[str];
    }
    function getCss(ele,attr) {
        var res = null;
        var str = navigator.userAgent;
        if (/MSIE *[5-8]/.test(str)) {
            res = ele.currentStyle[attr];
        }else {
            res = window.getComputedStyle(ele)[attr];
        }
        var reg = /^[+-]?(\d|[1-9]\d+)(\.\d+)?(px|rem|em|pt)?$/;
        res = reg.test(res) ? parseFloat(res) : res;
        return res;
    }
    function setCss(ele,attr,value) {
        var reg = /width|height|left|top|right|margin|padding|border|bottom|fontSize/i;
        if (reg.test(attr)){
            value = parseFloat(value) + 'px';
        }
        ele.style[attr] = value;
    }
    function setGroup(ele,obj) {
        if (Object.prototype.toString.call(obj) == "[object Object]") {
            for (let k in obj) {
                if (obj.hasOwnProperty(k)) {
                    setCss(ele, k, obj[k]);
                }
            }
        }
    }
    function css(...arg) {
        if (arg.length == 2){
            if (typeof arg[1] == 'string'){
                return getCss(arg[0],arg[1]);
            }
            setGroup(arg[0],arg[1]);
        } else {
            setCss(arg[0],arg[1],arg[2]);
        }
    }
    function children(ele) {
        var childs = ele.children;
        var ary = [];
        for (let i = 0; i < childs.length; i++) {
            if (childs[i].nodeType == 1){
                ary.push(childs[i]);
            }
        }
        return ary;
    }
    function getByClass(str,context) {
        context = context || document;
        str.replace(/^ +| +$/g,'');
        var classAry = str.split(/ +/g);
        var eles = context.getElementsByTagName('*');
        for (let k = 0; k < classAry.length; k++) {
            var reg = new RegExp('(^| +)'+classAry[k]+'( +|$)');
            var ary = [];
            for (let i = 0; i < eles.length; i++) {
                if (reg.test(eles[i].className)){
                    ary.push(eles[i]);
                }
            }
            eles = ary;
        }
        return ary;
    }
    function hasClass(ele,str) {
        str = str.replace(/^ +| +$/g,'');
        var ary = str.split(/ +/g);
        for (let i = 0; i < ary.length; i++) {
            var reg = new RegExp('(^| +)'+ary[i]+'( +|$)');
            if (!reg.test(ele.className)) {
                return false;
            }
        }
        return true;
    }
    function addClass(ele,str) {
        str = str.replace(/^ +| +$/g,'');
        if (hasClass(ele,str))return;
        var ary = str.split(/ +/g);
        for (let i = 0; i < ary.length; i++) {
            if (!hasClass(ele,ary[i])){
                ele.className += (' ' + ary[i]);
            }
        }
    }
    function removeClass(ele,str) {
        str = str.replace(/^ +| +$/g,'');
        var ary = str.split(/ +/g);
        for (let i = 0; i < ary.length; i++) {
            var reg = new RegExp('(^| +)'+ary[i]+'( +|$)','g');
            ele.className = ele.className.replace(reg,' ');
        }
    }
    return {
        toJson, toArray, offset, offsetTop, win, getCss, setCss, setGroup, css, children, getByClass, hasClass, addClass, removeClass
    }
})();