1.给数组末尾增加一项
+push()
+ary[ary.length]=xxx;
+ary.splice(ary.length,0,xxx);
2.删除数组最后一项
+pop();
+ary.length--;
+ary.length=ary.length-1;
+ary.length-=1;
+ary.splice(ary.length-1,1);
3.如何实现克隆
+ary.slice();
+ary.slice(0);
+ary.concat();
+ary.splice(0);//注意：如果使用splice()进行克隆，0不能省
+for循环也可以实现；但for循环是循环，不是方法
4.数据类型的比较
+对象==对象  []==[]  永远不相等  比较的是地址
+字符串==对象    转字符串  "" == []   true    是相等的
+字符串==数字    转成数字  "" == 0    true
+字符串==布尔值  转成数字 "" == ![]  true
+数字==对象     转成数字   0==[]  true
+布尔值==对象    转成数字     false==[]   ![]==[]
+数字==布尔值   转成数字   false==![]
+nll==undefined   true
+nll===undefined  false
+NaN==NaN false  NaN跟任何值都不相等；包括它自己
5.字符串常用的方法
+通过下标找对应的字符
+chartAt();
+chatCodeAt();
+通过字符找下标
+indexOf();从前往后找，找到返回对应内容的索引；找不到返回-1
+lastOf();
+字符串截取
+slice(n,m);包前不包后，但是可以取负值
+substring(n,m)包前不包后；
+substr(n,m);从索引开始，删除m个
+字符串转数组
+split(切割形式);
+字符串转换大小写
+toUpperCase();转大写
+toLowerCase();转小写
+字符串根正则配合的方法
+split
+replace("","");
+match();找到的话，就把找到的内容抓出来，找不到返回null
+search();有的话可，返回内容的索引，没有-1
Math:
+Math.round();
+Math.floor();
+Math.ceil();
+Math.abs();
+Math.pow();
+Math.sqrt();
+Math.max();
+Math.min();
+Math.random();
+定时器
+隔一段时间爆发一次：setInterval(callback,毫秒数)
+关闭定时器clearInterval(定时器的名字);
+只爆发一次：setTimeout(callback,毫秒数);
+关闭定时器：clearTimeout(定时器的名字)
+用setTimeOut()实现setInterval();用递归的思想

++n和n++区别
+参与运算与不参与运算的区别
+单独一条语句的时候，自增


















