
let wordScroll =()=>{//顶部文字滚动
    let head_logo = document.getElementsByClassName("head_logo")[0]
    head_logo.index=  0;
    head_logo.onmouseenter = ()=>{
        clearInterval(head_logo.time)
    }
    head_logo.onmouseleave = time
    time()
    function time (){
        head_logo.time = setInterval(()=>{
            head_logo.index++
            if(head_logo.index == 4){
                head_logo.index = 0   
                tools.css(head_logo,"top",head_logo.index)   
            }
            tools.animate(head_logo,{
                top:head_logo.index*-39
            },1000)
        },3000)

    }


} 
wordScroll()

let smallLogoShow = ()=>{
    let head_right = document.getElementsByClassName("head_right")[0]
    let head_right_li = head_right.getElementsByTagName("li")[6]
    let head_right_dragdown =document.getElementsByClassName("head_right_dragdown")[0]
    head_right_li.onmouseenter = function(){
        tools.css(head_right_dragdown,"left",head_right_li.offsetleft()+9)
        head_right_dragdown.style.display = "block" 
        this.getElementsByTagName("i")[0].style.transform = "rotate(180deg)"  
    }
    head_right_li.onmouseleave =function(){
        head_right_dragdown.style.display = "none"
        this.getElementsByTagName("i")[0].style.transform = "rotate(0deg)" 
    }
    head_right_dragdown.onmouseenter = function(){
        this.style.display = "block"  
        head_right_li.getElementsByTagName("i")[0].style.transform = "rotate(180deg)" 
    }
    head_right_dragdown.onmouseleave = function(){
        this.style.display = "none"  
        head_right_li.getElementsByTagName("i")[0].style.transform = "rotate(0deg)" 
    }
}
smallLogoShow()

let smallAppShow = ()=>{
    let head_right = document.getElementsByClassName("head_right")[0]
    let head_right_li = head_right.getElementsByTagName("li")[7]
    let head_right_app =document.getElementsByClassName("head_right_app")[0]
    head_right_li.onmouseenter = function(){
        tools.css(head_right_app,"left",head_right_li.offsetleft()-36)
        head_right_app.style.display = "block" 
        this.getElementsByTagName("i")[0].style.transform = "rotate(180deg)"  
    }
    head_right_li.onmouseleave =function(){
        head_right_app.style.display = "none"
        this.getElementsByTagName("i")[0].style.transform = "rotate(0deg)" 
    }
    head_right_app.onmouseenter = function(){
        this.style.display = "block"  
        head_right_li.getElementsByTagName("i")[0].style.transform = "rotate(180deg)" 
    }
    head_right_app.onmouseleave = function(){
        this.style.display = "none"  
        head_right_li.getElementsByTagName("i")[0].style.transform = "rotate(0deg)" 
    }
}
smallAppShow()

let smallSearchShow = ()=>{
    let main_nav_all =document.getElementsByClassName("main_nav_all")[0];
    let main_nav_all_input = main_nav_all.getElementsByTagName("input")[0];
    let head_right_search = document.getElementsByClassName("head_right_search")[0];
    main_nav_all_input.onfocus = function(){
        tools.css(head_right_search,{
            top:this.offsettop()+ this.clientHeight,
            left:this.offsetleft(),
            display:"block"
        })
    }
    main_nav_all_input.onblur = function(){
        tools.css(head_right_search,{
            display:"none"
        })
    }
}
smallSearchShow()

let navShow=  ()=>{
    let footer_nav_all = document.getElementsByClassName("footer_nav_all")[0]
    let footer_nav_all_liS =footer_nav_all.getElementsByTagName("li")
    let stopPropagation=  ()=>{
        footer_nav_all.onmouseout =(e)=>{
            e= e||window.event
            e.stopPropagation()
        }
        footer_nav_all.onmouseenter =(e)=>{
            e= e||window.event
            e.stopPropagation()
        }
    }
    
    for(let i =0;i<footer_nav_all_liS.length;i++){
        let temp = footer_nav_all_liS[i].getElementsByTagName("a")[0];
        //let tempClass = 
        if(i == 0 || i == footer_nav_all_liS.length-1|| i ==footer_nav_all_liS.length-2){
            stopPropagation()
            footer_nav_all_liS[i].onmouseover= function(){
                tools.addClassName(temp,"choose")
            }
            temp.onmouseover= ()=>{
            }
            footer_nav_all_liS[i].onmouseout = function(){
                tools.removeClassName(temp,"choose")
            }
            temp.onmouseout = ()=>{
            }  
        }else{
            let tempTab = footer_nav_all_liS[i].getElementsByTagName("a")[0];
            let tempClass = footer_nav_all_liS[i].getElementsByClassName("main_groupLish_home")[0]
            stopPropagation()
            footer_nav_all_liS[i].onmouseover= function(){
                tempClass.style.display = "block"
                tools.addClassName(tempTab,"choose")
            }
            tempClass.onmouseover= ()=>{}
            footer_nav_all_liS[i].onmouseout = function(){
                tempClass.style.display = "none"
                tools.removeClassName(tempTab,"choose")
            }
            tempTab.onmouseout = ()=>{}
        }
    }
}
navShow()

let tempNav =()=>{
    let footer_nav_all = document.getElementsByClassName("footer_nav_all1")[0]
    let footer_nav_all_liS =footer_nav_all.getElementsByTagName("li")
    let stopPropagation=  ()=>{
        footer_nav_all.onmouseout =(e)=>{
            e= e||window.event
            e.stopPropagation()
        }
        footer_nav_all.onmouseenter =(e)=>{
            e= e||window.event
            e.stopPropagation()
        }
    }
    
    for(let i =0;i<footer_nav_all_liS.length;i++){
        let temp = footer_nav_all_liS[i].getElementsByTagName("a")[0];
        //let tempClass = 
        if(i == 0 ){
            stopPropagation()
            footer_nav_all_liS[i].onmouseover= function(){
                tools.addClassName(temp,"choose")
            }
            temp.onmouseover= ()=>{
            }
            footer_nav_all_liS[i].onmouseout = function(){
                tools.removeClassName(temp,"choose")
            }
            temp.onmouseout = ()=>{
            }  
        }else{
            let tempTab = footer_nav_all_liS[i].getElementsByTagName("a")[0];
            let tempClass = footer_nav_all_liS[i].getElementsByClassName("main_groupLish_home1")[0]
            stopPropagation()
            footer_nav_all_liS[i].onmouseover= function(){
                tempClass.style.display = "block"
                tools.addClassName(tempTab,"choose")
            }
            tempClass.onmouseover= ()=>{}
            footer_nav_all_liS[i].onmouseout = function(){
                tempClass.style.display = "none"
                tools.removeClassName(tempTab,"choose")
            }
            tempTab.onmouseout = ()=>{}
        }
    }
}
tempNav()

let scrooTempNav =()=>{
    let footer_nav_all =document.getElementsByClassName("footer_nav_all")[0]
    let footerTop = footer_nav_all.offsettop()
    let htmlScroll = document.documentElement.scrollTop ||document.body.scrollTop
    let show_nav1 =document.getElementsByClassName("show_nav1")[0]
    if(htmlScroll>=footerTop){
        if(show_nav1.num ==1)return
        show_nav1.style.display = "block"
        show_nav1.style.position = "fixed"
        //show_nav1.style.display = "fixed"
        show_nav1.num = 1
        $(show_nav1).stop(true,true).animate({
            top:0
        },400)
    }else{
        show_nav1.style.display = "none"
        show_nav1.style.top = "-60px"
        show_nav1.num = 0
    }
}
let bannerAjax  = ()=>{
    let banner_banner = document.getElementsByClassName("banner_banner")[0]
    let _index = 0;
    banner_banner.onmouseenter = function(){
        clearInterval(banner_banner.time)
        mouseEvent("10px")
    }
    banner_banner.onmouseleave = function(){
        mouseEvent("-50px")
        aotuPlay()
    }
    // $(".banner_btn_left").on("click",function(){
    //     clearInterval(banner_banner.time)
    //     _index--
    //     play()
    //     aotuPlay()
    // });
    // $(".banner_btn_right").on("click",function(){
    //     clearInterval(banner_banner.time)
    //     _index++
    //     play()
    //     aotuPlay()
    // });
   
  
    function play() {
        if(_index <= -1){
            _index =1
        }
        if(_index >=2){
            _index = 0
        }
        $(".banner_border img").eq(_index).stop(true,true).fadeIn(800).siblings().stop(true,true).fadeOut(800);
        _index++
    }

    function aotuPlay(){
        banner_banner.time = setInterval(()=>{
            play()
        },3000)
    };
   
    function mouseEvent(x){
        $(".banner_btn_left").stop(true,true).animate({
            left:x
        },300)
        $(".banner_btn_right").stop(true,true).animate({
            right:x
        },300)
    }
    aotuPlay()

}
bannerAjax()

let dataShow =(data,bool)=>{
    let result =document.getElementsByClassName("shoppingGoods")[0].getElementsByTagName("ul")[0]
    if(bool){
        $(result).html("")
        result.itemData  = data
        let str = ""
        result.itemData.forEach((item)=>{
            str += `
            <li class="shoppingShow">
            <div class="data_img_bg">
                <img data-img ="${item.primaryPicUrl}" data-title="${item.name}"/>
            </div>
            <div class="data_reactied">
                    <div class="data_tig">                                                       
                    ${item.itemTagList.length == 0?null:
                    item.itemTagList.length == 1?`"<span class='${item.itemTagList[0].type ==1?'data_tig_all data_tig_new':'data_tig_all'}'>${item.itemTagList[0].name}</span>"`:
                    item.itemTagList.length == 2?`"<span class='${item.itemTagList[0].type ==1?'data_tig_all data_tig_new':'data_tig_all'}'>${item.itemTagList[0].name}</span><span class='${item.itemTagList[1].type ==1?'data_tig_all data_tig_new':'data_tig_all'}'>${item.itemTagList[1].name}</span>"`:null
                    }  
                        </div>
                        <div class="data_describe">
                            <a href="##" title="${item.name}">${item.name}</a>
                        </div>
                        <div class="data_price">
                            <p>￥${parseInt(item.retailPrice)}</p>
                        </div>
                        <div class="data_title">
                            <p>${item.simpleDesc}</p>
                        </div>
            </div>
            </li>   
            `
        })
        result.innerHTML = str 

    }else{
        $(result).html("")
        result.itemData  = data.data.itemList
        let str = ""
        result.itemData.forEach((item)=>{
            str += `
            <li class="shoppingShow">
            <div class="data_img_bg">
                <img  data-img="${item.primaryPicUrl}" data-title="${item.name}"/>
            </div>
            <div class="data_reactied">
                    <div class="data_tig">                                                       
                    ${item.itemTagList.length == 0?null:
                    item.itemTagList.length == 1?`"<span class='${item.itemTagList[0].type ==1?'data_tig_all data_tig_new':'data_tig_all'}'>${item.itemTagList[0].name}</span>"`:
                    item.itemTagList.length == 2?`"<span class='${item.itemTagList[0].type ==1?'data_tig_all data_tig_new':'data_tig_all'}'>${item.itemTagList[0].name}</span><span class='${item.itemTagList[1].type ==1?'data_tig_all data_tig_new':'data_tig_all'}'>${item.itemTagList[1].name}</span>"`:null
                    }  
                        </div>
                        <div class="data_describe">
                            <a href="##" title="${item.name}">${item.name}</a>
                        </div>
                        <div class="data_price">
                            <p>￥${parseInt(item.retailPrice)}</p>
                        </div>
                        <div class="data_title">
                            <p>${item.simpleDesc}</p>
                        </div>
            </div>
            </li>   
            `
        })
        result.innerHTML = str 

    }
 
 
}
//dataShow()
let lazyImg = (img)=>{
    img.eq = true;
    let newImg = new Image();
    newImg.src = img.getAttribute("data-img")
    newImg.onload = ()=>{
        img.src = newImg.src
        img.title = img.getAttribute("data-title")
        img.style.display = "block"
    }
}
let computed = ()=>{
    let data_img_bg =document.getElementsByClassName("data_img_bg")
    for(let i = 0;i<data_img_bg.length;i++){
        if(data_img_bg.eq){continue};
        let dataImg = data_img_bg[i].getElementsByTagName("img")[0]
        let scrollALL =document.documentElement.scrollTop || document.body.scrollTop;
        let htmlHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let dataImgH = data_img_bg[i].offsettop()
        if(scrollALL+htmlHeight>=dataImgH){
            lazyImg(dataImg)
        }

    }
}



let getData = (urlData)=>{
    $.ajax({
        type:"get",
        url:urlData,
        data:{name:urlData},
        success:(data)=>{
            window.data = data
            dataShow(data)
        },
        error:(err)=>{

        }
    })
}
let shopClick = ()=>{
    let shoppingClick = document.getElementsByClassName("shoppingClick")[0]
    shoppingClick.onclick = (e)=>{
          e= e||window.event
          let tar =e.target
          let json_data = tar.getAttribute("json-data"); 
          if(json_data){
            $(".softDefault").addClass("current").siblings().removeClass("current")
            $(tar).addClass("current").siblings().removeClass("current")
            setTimeout(function(){
            getData(json_data)
            },100)
            setTimeout(computed,200)
          }
          
    }

}

let  reShowClick = ()=>{
    let result =document.getElementsByClassName("shoppingGoods")[0].getElementsByTagName("ul")[0]
   //let themm =document.getElementsByClassName("sg-width")[0]
    let softDefault = document.getElementsByClassName("softDefault")[0]
    let softPrice = document.getElementsByClassName("softPrice")[0]
    let softDate = document.getElementsByClassName("softDate")[0]
    softDefault.onclick = ()=>{
        let current =document.getElementsByClassName("current")[0]
        current.getAttribute("json-data")
        getData(current.getAttribute("json-data"))
        $(softDefault).addClass("current").siblings().removeClass("current")
        computed()
    }
    softPrice.onclick = ()=>{
        result.itemData.sort((a,b)=>{
            return parseInt(a.counterPrice) - parseInt(b.counterPrice)
        })
        dataShow(result.itemData,true)
        $(softPrice).addClass("current").siblings().removeClass("current")
        computed()
    }
    softDate.onclick = ()=>{
        result.itemData.sort((a,b)=>{
            return a.onSaleTime - b.onSaleTime
        })
        dataShow(result.itemData,true)
        $(softDate).addClass("current").siblings().removeClass("current")
        computed()
    }
}
shopClick()
setTimeout(function(){
    getData("json/gaodian.json")
},100)
reShowClick();
setTimeout(computed(),500)
window.onload = function(){
    computed()
}
window.onscroll= ()=>{
    scrooTempNav()
    computed()
}
