(function(){
    RegExp.prototype.myExec = function myExec(){
        // 对于exec只有单一返回值进行了处理
        var temp = arguments[0] ||""
        if(!this.global){
          return this.exec(temp)
      }
        var result = []
        var arr = this.exec(temp)
        while(arr){
            result.push(arr[0])
            arr =this. exec(temp)
        }
        return result
      }
      RegExp.prototype.noExec = function noExec(){
        if(this.global){
             if(this.lastIndex ==0){
                this.str = arguments[0]
                return this.exec(arguments[0]) 
             }else if(this.str ==arguments[0]){
                 return this.exec(arguments[0]) 
             }else{
                 var temp = this.exec(this.str)
                while(temp){
                    temp = this.exec(this.str)
                }
                this.str =arguments[0]
                return this.exec(arguments[0])         
                }}
        else{
            return this.exec(arguments[0])
        }
        }
        HTMLElement.prototype.offsettop =function(){
            var num = this.offsetTop
            var temp = this.offsetParent
            while(temp ){
                num +=  temp.offsetTop+ temp.clientTop
                temp = temp.offsetParent
            }
            return num
        }
        HTMLElement.prototype.offsetleft =function(){
            var num = this.offsetLeft
            var temp = this.offsetParent
            while(temp && temp.nodeName !== "BODY"){
                num +=  temp.offsetLeft+ temp.clientLeft
                temp = temp.offsetParent
            }
            return num
        }
      HTMLElement.prototype.getCss = function(){
            if(window.getComputedStyle){
               var temp =  window.getComputedStyle(this,null)[arguments[0]]
             if(arguments[0] == "padding" || arguments[0] == "margin"){return temp}
             else if (!isNaN(parseFloat(temp))){
                return parseFloat(temp)
            }else{
                return temp
            }
            }else{
                var temp = this.currentStyle[arguments[0]]
                if(arguments[0] == "padding" || arguments[0] == "margin"){return temp}
                else if (!isNaN(parseFloat(temp))){
                   return parseFloat(temp)
               }else{
                   return temp
               }
            }
        }

      String.prototype.mymatch = function mymatch(){
          // 模仿写了个作用不大 直接用match即可
          var temp  = arguments[0]||/^/
          if(!temp.global){
                return temp.exec(this)
          }
          var result = [];                                                                                                  
          var arr  = temp.exec(this)
          while(arr){
              result.push(arr[0])
              arr = temp.exec(this)
          }
          return result
      }
      
      String.prototype.myTime =function(){
          let ary = this.match(/\d+/g),
              template = arguments[0]||'{0}年{1}月{2}日 {3}时{4}分{5}秒';
              template = template.replace(/\{(\d+)\}/g,function(){
                  var value =ary[arguments[1]] || '0'
                  value.length<2? "0"+value:null
                  return value
              })
              return template
      }
      String.prototype.myTrim = function myTrim(){
        return this.replace(/^\s+|\s+$/g,"")
      }
      String.prototype.myTrimAll = function myTrim(){
        return this.replace(/\s+/g,"")
      }

      function toJSON(str){
            var obj= {}
            try{
                obj = JSON.parse(str)
                return obj
            }catch(e){
                obj = eval(`(${str})`)
                return obj
            }
      }
      function toArray(ary){
            var arr = []
            try{
                return [].slice.call(ary,0)
            }catch(e){
            for(let i =0;i<ary.length;i++){
                arr.push(ary[i])
            }
            return arr
            }

  }
      function getCss(ele,attr) {
        var str = navigator.userAgent;
        var res = null;
        if(/MSIE *[6-8]/.test(str)){
            res = ele.currentStyle[attr]
        }else {
            res = getComputedStyle(ele)[attr];
        }

        var reg = /^[+-]?(\d|[1-9]\d+)(\.\d+)?(px|rem|em|pt)?$/;
        res = reg.test(res) ? parseFloat(res) : res;
        return res;
    }
    function setCss(ele,attr,value) {
        var reg = /width|height|padding|margin|left|top|bottom|right|fontsize/i;
        if(reg.test(attr)){
            value = parseFloat(value) + 'px';
        }
        ele.style[attr]=value;
    }
    function setGroup(ele,obj){
        if(Object.prototype.toString.call(obj) == '[object Object]'){
            for(var k in obj){
                if(obj.hasOwnProperty(k)){
                    setCss(ele,k,obj[k])
                }
            }
        }
    }
    function css(...arg) {
        if(arg.length == 2){
            if(typeof arg[1] == 'string'){
                return getCss(arg[0],arg[1])
            }
            setGroup(arg[0],arg[1])
        }else {
            setCss(arg[0],arg[1],arg[2]);
        }
    }
    function scrollTop(){
        return document.documentElement.scrollTop || document.body.scrollTop
    }
    function scrollLeft(){
        return document.documentElement.scrollLeft || document.body.scrollLeft
    }
    function clientHeight(){
       return document.documentElement.clientHeight || document.body.clientHeight
    }
    function clientWidth(){
        return document.documentElement.clientWidth || document.body.clientWidth
    }
    function linear(time,duration,change,begin){begin
        return time/duration*change+begin
    }
    function animate(ele,targer,duration){
        clearInterval(ele.animateAttr)
        var time = 0;
        duration = duration||1000
        var begin = {}
        var change = {}
        var temp ={}
        for(let key in targer){
            if(targer.hasOwnProperty(key)){
                begin[key] = tools.css(ele,key)
                change[key] = targer[key] - begin[key]
            }
        }
            ele.animateAttr = setInterval(function(){
                if(time>duration){
                    tools.css(ele,targer)
                    clearInterval(ele.animateAttr)
                   
                }else{
                    time+=17
                    for(let key in targer  ){
                    temp[key] = tools.linear(time,duration,change[key],begin[key])
                    }
                    tools.css(ele,temp)
                }
            },17)

        
        
    }

    function fadeIn(ele){
        ele.style.opacity = 0
        var opa =0.1
        ele.fadeTime =setInterval(function(){
        opa+=0.1
        ele.style.opacity = opa
        if(opa>=1){
        ele.style.opacity =1
        clearInterval(ele.fadeTime)
        }
        },17)
    }

    function indexOf(){
        for(var i = 0;i<arguments[0].length;i++){
        if(arguments[1] == arguments[0][i]){
        return i}}
        return -1
    }
    function addClassName(){
        var eleName= arguments[0].className.replace(/^\s+|\s+$/,"").split(/\s+/)
        var addName = arguments[1].replace(/^\s+|\s+$/,"").split(/\s+/)
        eleName = eleName.concat(addName)
        for(var i  =0;i<eleName.length;i++){
            if(indexOf(eleName,eleName[i]) != i ){
                eleName.splice(i,1)
                i--
            }
        }
        arguments[0].className = eleName.join(" ")
    }
    
    function removeClassName(){
        var eleName= arguments[0].className.replace(/^\s+|\s+$/,"").split(/\s+/)
        var removeClass = arguments[1].replace(/^\s+|\s+$/,"").split(/\s+/)
        for(var  i =0;i<removeClass.length;i++){
            for(var k =0;k<eleName.length;k++){
                if(removeClass[i] ===eleName[k] ){
                    eleName.splice(k,1)
                    k--
                }
            }
        }
        arguments[0].className = eleName.join(" ")
    }
      const tools = {
          init:()=>{},
          toJSON:toJSON,
          toArray:toArray,
          css:css,
          scrollTop:scrollTop,
          scrollLeft:scrollLeft,
          clientHeight:clientHeight,
          clientWidth:clientWidth,
          linear:linear,
          animate:animate,
          fadeIn:fadeIn,
          addClassName:addClassName,
          removeClassName:removeClassName,
          indexOf:indexOf,
      }
       window.tools = tools
})()

