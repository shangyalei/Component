/**
 * Created by think on 2017/7/10.
 */

var oTab=document.getElementById('tab');

var oLis=oTab.getElementsByTagName('li');

var oDiv=oTab.getElementsByTagName('div');


function tabChange(index){
    for(var i=0;i<oLis.length;i++){
        oLis[i].className='';
        oDiv[i].className='';
    }

    oLis[index].className='select';
    oDiv[index].className='select';

}



/*for(var i=0;i<oLis.length;i++){

    //第一种方案：用自定义属性解决

    /!*oLis[i].index=i;
    oLis[i].onmouseover=function(){
      tabChange(this.index);
    };*!/


    //第二种方案：用作用域解决
    (function(i){
        oLis[i].onmouseover=function(){
            tabChange(i);
        }
    })(i);

}*/



/*//第二种方法，不用tagChange方法  项目中常用
for(var i=0;i<oLis.length;i++){
    oLis[i].index=i;
    oLis[i].onmouseover=function(){
        for(var i=0;i<oLis.length;i++){
            oLis[i].className="";
            oDiv[i].className="";
        }
        this.className='select';
        oDiv[this.index].className='select';
    }
}*/


//第三种方法

for(var i=0;i<oLis.length;i++){
    (function(i){
        oLis[i].onmouseover=function(){
            for(var j=0;j<oLis.length;j++){
                oLis[j].className="";
                oDiv[j].className="";
            }
            this.className='select';
            oDiv[i].className='select';
        }
    })(i);
}









