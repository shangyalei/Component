/**
 * Created by think on 2017/6/28.
 */

//这是一个小型的工具库

//jsonParse:JSON格式的字符串转JSON格式数据
function jsonParse(str) {
    return flag ? JSON.parse(str) : eval('(' + str + ')');
}


//给数组扩展一个去除数组中的重复项的方法
Array.prototype.distinct=function (){
    var a=this;
    for(var nIndex=0;nIndex<a.length-1;nIndex++){
        for(var i=nIndex+1;i<a.length;){
            if(a[nIndex]===a[i]){
                a.splice(i,1);
            }else{
                i++;
            }
        }
    }
    return a;

};

//字符串扩展方法：去除字符串首尾的空格
String.prototype.trim=function(){
    var reg=/^\s+|\s+$/g;
    return this.replace(reg,'');

};