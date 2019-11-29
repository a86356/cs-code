#  js 闭包



## 定义

一个持有（使用过）外部环境变量的函数就是闭包 .

闭包的访问完全依赖它被定义时的位置

闭包定义的时候是什么样子的，他访问的作用域链就是什么样子的



## 特征

- 函数

- 持有外部变量

  

什么是环境？

环境分为全局环境和局部环境



例子

```java
var a = 1
var b = function(){
    console.log(a)
}
//在这个例子里函数b因为捕获了外部作用域（环境）中的变量a，因此形成了闭包。
```

```javascript
function a(x, y){
    console.log(x, y) //
    function b(){
        console.log(x, y) //
    }
    //无论b最终是否会作为返回值被函数a返回，b本身都已经形成了闭包。
}
```

```javascript

function a() {
    var name='zhangsan';
    function b() {
        console.log(name)
    }
    return b;
}
let qq=a();
qq();
```

```javascript
function outer() {
    var local =2;
    function inner() {
        return local+=2;
    }
    return inner;
}

var fn =outer();
console.log(fn())//?;  //4
console.log(fn())//?;   //6
```

```javascript
 var inc = (function () { // 
        var count = 0; // 
        return function () { // 
            ++count
            
            console.log(count);
            return count; //
        };
    }) ();
    inc(); // count: 1
    inc(); // count: 2
```

```javascript
// 难点
function fun(n,o){
    debugger
    console.log(o);
    return {
        fun:function(m){
            return fun(m,n);
        }
    }
}


// var a = fun(0);  //undefined
// a.fun(1);     //0
// a.fun(2);     //0
// a.fun(3);      //0

var b = fun(0).fun(1).fun(2).fun(3); //undefined 0 1 2
```

```javascript

for(var i = 0; i < 10; i ++) {
    bt[i].onclick = function(){
        console.log(i);
    }
}
console.log(i)  // 


for(var i = 0; i < 10; i ++) {
    (function(num){
        bt[i].onclick = function(){
            console.log(num);
        }
    })(i)
}
```

```javascript
　　var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
　　　　　　return function(){
　　　　　　　　return this.name;
　　　　　　};
　　　　}
　　};
window.console.log(window.object.getNameFunc()());//The Window

var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name;
        };
    }
};
window.console.log(window.object.getNameFunc()()); //My Object
```



## 闭包的作用

- 保护变量

  ```javascript
   (function () {
       var money=1000;
       window.eat=function () {
           money-=20; //闭包
       }
       // 赚钱
       window.makemoney=function () {
           money+=100 // 闭包
       }
       window.getMoney=function () {
           return money;// 闭包
       }
  
   })()
  
  console.log(window.eat());
  console.log(money)
  ```

  

