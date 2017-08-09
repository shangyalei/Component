/**
 * Created by think on 2017/6/26.
 */

/*
*
* 采用构造函数、原型模式封装
* dom库 Dom
* 动画库 Move
* 事件库 event
* 便利贴 tips
* */

//dom类库

function Dom(){}
//1.通过id获取元素
Dom.prototype.id=function(ele){
   return document.getElementById(ele);
};

//2.获取id元素下指定标签名的子元素
Dom.prototype.tagName=function(ele,str){
    return document.getElementById(ele).getElementsByTagName(str);
};

//3.和DOM方法insertBefore对应，把newEle追加在oldEle的后面
Dom.prototype.insertAfter=function (oldEle,newEle){

    if(oldEle&&oldEle.nodeType===1&&newEle&&newEle.nodeType===1){
        oldEle.nextSibling?oldEle.parentNode.insertBefore(newEle,oldEle.nextSibling):oldEle.parentNode.appendChild(newEle)
    }else{
        throw new Error('参数错误');
    }
};

//4.此方法和appendChild方法对应，
//把newNode这个节点，当成第一个子节点追加给parentEle元素。
Dom.prototype.prepend=function(newNode,parentEle){
    var child=parentEle.firstChild;
    child?parentEle.insertBefore(newNode,child):parentEle.appendChild(newNode);
};


//5.找出currentEle这个元素的所有的哥哥节点
Dom.prototype.preSiblings=function (currentEle){
    var pre=currentEle.previousSibling;
    var a=[];
    while(pre){
        if(pre.nodeType===1){
            a.unshift(pre);
        }
        pre=pre.previousSibling;
    }
    return a;
};


//6.找出currentEle这个元素节点的所有弟弟节点
Dom.prototype.nextSiblings=function (currentEle){
    var next=currentEle.nextSibling;
    var a=[];
    while(next){
        if(next.nodeType===1){
            a.push(next);
        }
        next=next.nextSibling;
    }
    return a;
};

//7.获得当前元素currentEle的所有兄弟节点
Dom.prototype.siblings=function (currentEle){
    //就是把以上两个方法合并一下
    return Dom.prototype.preSiblings(currentEle).concat(Dom.prototype.nextSiblings(currentEle));

};

//8.获得currentEle的上一个元素节点（相邻的哥哥节点）
Dom.prototype.preEle=function (currentEle){
    if(typeof currentEle.previousElementSibling ==="object")
    //这里的判断一定要用typeof，而不能用if(currentEle.previousElementSibling)
    //因为如果currentEle是第一个元素，则previousElementSibling为null,null和undefined都是false,
    //用typeof则可以，
        return currentEle.previousElementSibling;


    var pre=currentEle.previousSibling;
    while(pre){
        if(pre.nodeType===1){
            return pre;
        }
        pre=pre.previousSibling;
    }
    return null;//它没有哥哥元素则返回null。

};

//9.获得currentEle的下一个元素节点（相邻的弟弟节点）
Dom.prototype.nextEle=function (currentEle){
    if(typeof currentEle.nextElementSibling==="object"){
        return 	currentEle.nextElementSibling;
    }
    var next=currentEle.nextSibling;
    while(next){
        if(next.nodeType===1){
            return next;
        }
        next=next.nextSibling;
    }
    return null;
};

//10.获得currentEle的相邻的两个元素节点
Dom.prototype.closet=function (currentEle){
    var a=[];
    var n=Dom.prototype.nextEle(currentEle);
    var p=Dom.prototype.preEle(currentEle);
    if(p) a.push(p);
    if(n) a.push(n);

    return a;
};

//11.判断ele元素在兄弟节点中是不是第一个，既是不是长子
Dom.prototype.isFirstChild=function (ele){
    return Dom.prototype.preEle(ele)?false:true;
};

//12.判断ele元素在兄弟节点中是不是最后一个
Dom.prototype.isLastChild=function (ele){
    return Dom.prototype.nextEle(ele)?false:true;
};


//13.获取元素ele的索引号
Dom.prototype.getIndex=function (ele){
    var nIndex=0;
    var p=ele.previousSibling;
    while(p){
        if(p.nodeType===1){//如果这个哥哥是元素节点，则
            nIndex++;//让累加一次
        }
        p=p.previousSibling;//继续判断它的下一个哥哥
    }
    return nIndex;
};


//14、获得ele指定标签名为tag的子元素。tag参数如果不传，则表示获取ele的所有子元素
//如果不考虑注释节点，直接用children属性效率更高
Dom.prototype.getChildren=function (ele,tag){
    var children=ele.childNodes;//先把ele所有子节点取到
    if(typeof tag==='string'){
        tag=tag.toUpperCase();
        var a=[];
        for(var i=0;i<children.length;i++){//做循环
            var node=children[i];
            if(node.nodeType===1&&node.nodeName===tag){
                //如果当前这个子元素的“节点类型"是1 并且 节点名是tag的值
                a.push(node);//则把此子节点放到数组里
            }
        }
        return a;

    }else if(typeof tag==='undefined'){
        var a=[];
        for(var i=0;i<children.length;i++){//做循环
            var node=children[i];
            if(node.nodeType===1){
                a.push(node);//则把此子节点放到数组里
            }
        }
        return a;
    }else{
        throw new Error('tag参数类型错误！');
    }
};


//15 给ele元素增加类样式
Dom.prototype.addClass=function (ele,strClass){
    var reg=new RegExp("\\b"+strClass+"\\b");
    if(reg.test(ele.className)){
        //如果此类样式已经存在，则什么也不需要做
    }else{//不存在
        ele.className=ele.className.trim()+" "+strClass;
    }
};

//16.判断某元素上是不是有某个类
Dom.prototype.hasClass=function(ele,strClass){
    if(!(ele&&ele.nodeType===1)){
        alert('第一参数ele需要是一个DOM元素对象');
        throw new Error('第一参数ele需要是一个DOM元素对象');
    }
    if(typeof strClass !== 'string'){
        alert('第二参数必须为string类型');
        throw new Error('第二参数必须为string类型');

    }

    var reg=new RegExp("\\b"+strClass+"\\b");
    if(reg.test(ele.className)){
        return true;
    }else{//不存在
        return false;
    }

};


//17 给ele元素移除类样式
Dom.prototype.removeClass=function (ele,strClass){
    if(!(ele&&ele.nodeType==1)){
        alert('第一参数ele需要是一个DOM元素对象');
        throw new Error('第一参数ele需要是一个DOM元素对象');
    }
    if(typeof strClass != 'string'){
        alert('第二参数必须为string类型');
        throw new Error('第二参数必须为string类型');

    }

    var reg=new RegExp("\\b"+strClass+"\\b",'g');
    ele.className=ele.className.replace(reg,'').trim();
};


//18 通过类名获取一组元素。类名可以是多个，
// 比如第一个参数是"a1 a2 a3",
// 则表示获取类名即是a1,还要是a2,a3的元素（交集）
Dom.prototype.getElesByClass=function (strClass,contextEle){
    if(typeof strClass!=='string'){
        alert('第一个参数错误！');
        throw new Error('第一个参数strClass错误!')
    }

    function getEle(strClass,eles){//获取只包括一个类的函数
        var a=[];
        var reg=new RegExp('\\b'+strClass+'\\b');
        for(var i=0;i<eles.length;i++){
            if(reg.test(eles[i].className)){
                a.push(eles[i]);
            }
        }
        return a;
    }
    //以上这些是个单独的模块

    contextEle=contextEle||document;
    if(contextEle.nodeType!==1&&contextEle.nodeType!=9){
        alert('第二个参数错误！');
        throw new Error('第二个参数contextEle错误!');
    }
    if(contextEle.getElementsByClassName){
        return contextEle.getElementsByClassName(strClass);
    }else{
        var aClass=[];
        aClass=strClass.split(' ');
        var eles=contextEle.getElementsByTagName('*');
        for(var i=0;i<aClass.length;i++){
            if(aClass[i].replace(/\s/g,'').length>0)
                eles=getEle(aClass[i],eles);
        }
        return eles;
    }
};

//19 获取某元素距离浏览器的绝对位置,相当于jQuery中的offset
Dom.prototype.offset=function (ele){
    var x=ele.offsetLeft;
    var y=ele.offsetTop;
    p=ele.offsetParent;

    while(p){

        if(window.navigator.userAgent.indexOf('MSIE 8.0')>-1){//ie8有个bug
            x+=p.offsetLeft;
            y+=p.offsetTop;
        }else{
            x+=p.offsetLeft+p.clientLeft;
            y+=p.offsetTop+p.clientTop;
        }
        p=p.offsetParent;

    }
    var obj={};
    obj.x=x;
    obj.y=y;
    return obj;
};


//20 设置CSS样式
Dom.prototype.setCss = function (ele, attr, svalue) {
    with (ele) {//理解with的用法，这样就把ele当前当前的作用域了，不必在写每一个CSS属性之前再写ele.了
        switch (attr) {
            case 'float'://处理float的兼容性问题
                style['cssFloat'] = svalue;
                style['styleFloat'] = svalue;
                break;
            case 'opacity':	//处理不透明度的兼容性问题
                               //这儿还应该处理一下，因为opacity的值是介于0和1之间的
                svalue = Math.max(0, svalue);
                svalue = Math.min(1, svalue);
                style['opacity'] = svalue;
                style['filter'] = "alpha(opacity:" + svalue * 100 + ")";
                break;
            case 'width':
            case 'height':
            case 'borderLeftWidth':
            case 'paddingLeft':
            case 'paddingBottom':
            case 'paddingTop':
            case 'paddingRight':
                //这些css属性值的特点就是都不能为负数，所以会用max方法运算一下
                var reg = /^(-?\d+(?:\.\d+)?)(pt|px|em|in)?$/;
                //这个正则相对要完善一点，可以判断带小数的
                if (reg.test(svalue)) {
                    var num = RegExp.$1;//取出第一个分组
                    var danwei = RegExp.$2;//取出第二个分组：单位部分
                    num = Math.max(0, num);//如果传进来的值是负数，则用0
                    if (danwei)//如果有单位，则加上单位，如果没有单位，则以px为默认单位
                        svalue = num + danwei;
                    else
                        svalue = num + 'px';
                }
                style[attr] = svalue;
                break;
            case 'top':
            case 'marginLeft':
            case 'marginRight':
            case 'marginTop':
            case 'marginBottom':
            case 'right':
            case 'left':
                var reg = /^(-?\d+(?:\.\d+)?)(pt|px|em|in)?$/;
                //这个正则相对要完善一点，可以判断带小数的了.
                //这个正则可以处理象：2.5em,22px,22,3pt,-10.6in这样的css单位
                if (reg.test(svalue)) {
                    //如果符合此正则，则按以下方式处理
                    var num = RegExp.$1;
                    var danwei = RegExp.$2;
                    if (danwei)
                    //如果是带单位的，则加上单位
                        svalue = num + danwei;
                    else
                    //如果不带单位，则用默认的单位px
                        svalue = num + 'px';
                }
                style[attr] = svalue;
                break;
            default:
                style[attr] = svalue;
        }
    }
};

/* 21 setGrounpCss方法：批量设置css属性的方法
 （就是一次给一个或多个元素的多个CSS属性设置值）
 第一个参数ele可以是一个元素节点，也可以是多个可以。
 第二个参数类似这样：
 {height:100,float:'left',width:300,opacity:0.5,lineHeight:'1.5em'}
 其实原理就是循环调用上边的setCss方法  */
Dom.prototype.setGrounpCss=function(ele,oCss){
    if(typeof oCss==='object')
        if(ele&&ele.nodeType&&ele.nodeType===1){
            for(var attr in oCss){	//用for in循环来遍历JSON对象集合
                Dom.prototype.setCss(ele,attr,oCss[attr]);		}
        }else if(ele&&ele.length&&ele.length>0){
            //如果ele一个元素集合，则做两重循环
            for(var i=0;i<ele.length;i++){
                for(var attr in oCss){	Dom.prototype.setCss(ele[i],attr,oCss[attr]);	}
            }
        }
};

//22 原来漏掉了，现在补上
Dom.prototype.getCss=function(ele,attr){
    //此方法用来获取网页元素的CSS属性的值，是固定的知识点。
    //此方法不但可以获取行内样式，还可以获取内嵌和外链的样式
    //ele.currentStyle?ele.currentStyle[attr]属性是IE浏览器的
    //getComputedStyle(ele,false)[attr];是火狐浏览器的
    if(ele&&ele.nodeType&&ele.nodeType===1&&attr&&typeof attr==='string'){
        return ele.currentStyle?ele.currentStyle[attr]:getComputedStyle(ele,null)[attr];
    }else{
        throw new Error('参数错误！！');
    }
};


//23 原来漏掉的一个方法。用来把NodeList转换为数组类型的作用
Dom.prototype.domToArray=function (eles){
    try{
        var a=Array.prototype.slice.call(eles,0);
    }catch(e){
        var a=[];
        for(var i=0;i<eles.length;i++){
            a.push(eles[i]);
        }
    }
    return a;

};













//下面是关于BOM浏览器的

//win:获取和设置浏览器盒子模型；
function win(attr, value) {
    if (typeof value === 'undefined') {
        return document.documentElement[attr] || document.body[attr];
    }
    document.documentElement[attr] = document.body[attr] = value;
}

//获取关于浏览器的一些属性、
// 比如说浏览器的版本，浏览器的高宽、滚动条的位置等等


var BOM={
    getWBox:function (){
        var box={};
        box.h=document.documentElement.clientHeight||document.body.clientHeight;//浏览器窗口的高
        box.w=document.documentElement.clientWidth||document.body.clientWidth;//窗口的高
        box.scrollT=(document.documentElement.scrollTop||document.body.scrollTop);//滚动条的位置
        box.scrollL=(document.documentElement.scrollLeft||document.body.scrollLeft);//左边滚动条的位置
        box.centerL=box.w/2+box.scrollL;//窗口的中间
        box.centerT=box.h/2+box.scrollL;//窗口的中间
        return box;
    },
    //版本
    getBrowser:function() {
        var ua = navigator.userAgent;
        var b;
        if(b = ua.match(/msie ([\d.]+)/i )){
            return "Internet Explorer " + b[1];
        }else if(b = ua.match(/firefox\/([\d.]+)/i)){
            return "Firefox "+ b[1];
        }else if(b = ua.match(/version\/([\d.]+).*safari/i)){
            return "Safari "+ b[1];
        }else if(b = ua.match(/opera.([\d.]+)/i)){
            return "Opera " + b[1];
        }else if(b = ua.match(/chrome\/([\d.]+)/i)) {
            return "Chrome "  + b[1];
        }
    },
    isIE:false,isIE6:false,isIE7:false,isIE8:false,isIE9:false,isIE10:false,isChrome:false,isOpera:false,isFirefox:false,isSafari:false

}
;(function(){
    var ua = navigator.userAgent;
    var b;
    if(b = ua.match(/msie ([\d.]+)/i)){
        BOM.isIE=true;
        BOM['isIE'+Number(b[1])]=true;
    }else if(b = ua.match(/firefox\/([\d.]+)/i)){
        BOM.isFirefox=true;
    }else if(b = ua.match(/version\/([\d.]+).*safari/i)){
        BOM.isSafri=true;
    }else if(b = ua.match(/opera.([\d.]+)/i)) {
        BOM.isOpera=true;
    }else if(b = ua.match(/chrome\/([\d.]+)/i)) {
        BOM.isChrome=true;
    }
})();



/*
 请编写一个JavaScript函数 parseQueryStr，它的用途是把URL参数解析为一个对象：
 用法如：var obj = parseQueryString(url);
 例如： www.zhufengpeixun.cn?course1=js&course=css;
 则obj的值为{course1:"js",course:"css"}
 也就是说这个方法是解析URL字符串的
 */
BOM.parseQueryStr=function (str){
    var tempa=null;//存放临时匹配到的字符串的那个临时数组

    //定义一个取每一对值的正则，把满足要求的内容分别定义成两个分组。匹配到的内容不到包括=?&这三个字符既可
    var reg=/([^=?&]+)=([^=?&]+)/g;
    var obj={};
    while( tempa=reg.exec(str)){//把exec的返回值赋给这个tempa,如果tempa不是null，则exec会执行多次。
        //tempa是一个数组，这个数组的长度是reg中匹配到的子表达式（分组）的个数加1
        //tempa的第0项是整个正则匹配到的内容，所以从索引1开始
        obj[tempa[1]]=tempa[2];
    }
    return obj;
};


