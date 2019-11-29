# 名称:行者课堂 

# 网址:cs1024.com

#  qq/微信:100000356





# js中的this

## 什么是对象

现实生活中任何事物都可以被抽象成对象，对象有属性和方法

比如人，有属性，年龄，身高，有方法，吃饭，上课



# js中的对象

对象有属性和方法

```javascript
// 对象有属性和方法，比如下面student 对象有2个属性，分别是age和name，还有一个方法showInfo 
// 属性和方法都是键值对形式的，就是 xx:xx
// 属性名age的属性值是18，属性名name的属性值是张三
// 方法名是showInfo,方法的值是函数

var student = {
     age:18,    
     name:'张三', 
     showInfo:function(){       
         console.log("我的名字是="+this.name+"我今年"+this.age+"岁")
     }
}  

// 我们可以获得对象的属性和方法,通过下面的方式
console.log(student.age);
console.log(student.name);
console.log(student.showInfo);
```

# this 指向调用他的那个对象

-  对象的方法。 在对象的方法里使用this 表示当前对象，可以在对象的方法里获得对象的属性

  ```javascript
  var student = {
       age:18,    
       name:'张三', 
       showInfo:function(){       
           console.log("我的名字是="+this.name+"我今年"+this.age+"岁")
       }
  }  
  student.showInfo();  //我的名字是=张三我今年18岁
  ```

- 普通函数调用。  js 运行环境中有个全局的对象，window

  ```javascript
      
  // 我们声明一个变量，其实就是给全局的window对象添加了一个属性age，我们可以通过
  // this.age 或者window.age获得这个属性的值  
  var age=18;
  
  console.log(this==window)
  console.log(window.age);    	
  console.log(this.age); 
  console.log(age)
  ```

  ```javascript
  // 我们声明一个函数，就相当于给全局的window对象添加了一个方法,我们可以通过
  // test() 或者window.test()或者 this.test() 调用这个函数
  // 调用的时候，没有明确指出什么对象调用该方法的，都视为window 调用
  
  function test(){
      console.log('我是测试函数'+this);
  }
  test();
  this.test();
  window.test();
  ```

  ```javascript
  //测试题目
  //1 
  
  function foo(){
      var a = 1 ;
      console.log(this.a);   
  }
  var a = 10;
  foo();
  
  //2
  function foo(){
      console.log(this.a);
  }
  var obj = {
      a : 10,
      foo : foo
  }
  foo();                
  obj.foo();            
  ```

- 动态改变this的指向

  - 使用apply和call

  ```javascript
  function foo(){
      console.log(this.a);
  }
  var obj = {
      a : 10            //去掉里面的foo
  }
  foo.call(obj);        // 10
  ```

- new 出来的对象

  ```javascript
  function foo(){
      this.a = 10;
  }
  var obj = new foo();      // foo{ a : 10 }                       
  console.log(obj.a);       // 10    new绑定
  ```

- 匿名函数的调用

  ```javascript
               
  var a=2;
  function test1(){
      this.a=1;
      return function () {
          console.log(this.a)
      }
  }
  test1()();  // 1
  
  var a=2;
  function test2(){
      return function () {
          console.log(this.a)
      }
  }
  
  test2()();  //2
  ```
  
- 小结

  - 普通的函数调用，函数被谁调用，this就是谁。
  - 构造函数调用。 用new操作符生成对象实例后，this就指向了新生成的对象。
  - 对象的调用方法，this指向当前的对象
  - 匿名函数或不处于任何对象中的函数当中的this指向window ，没有通过对象.方法名()这样调用的都是通过window. 方法名()调用的。
  - 如果是call，apply等，指定的this是谁，就是谁。
  - 谁调用这个函数，this就指向谁，this的指向是函数被调用的时候决定的
  









# 函数调用在内存中是怎么样的?

普通的函数调用

```javascript
function test(a) {
    console.log(a);
}
test(a);
```

## 从内存角度分析

### 硬件内存

买来的

### 软件内存 

数据在计算机中是如何存储的？ 

2进制     0和1



  10进制  0     1    2     3     45678910

  2进制    00  01  10    11  

8进制   

10进制

16进制



进制的转换

https://tool.oschina.net/hexconvert/ 



位      0或者1

字节    8个位

1KB（ 千字节 ）=1024B 

1M（ 兆字节，百万字节，简称“兆” ）=1024KB 

1G （ 吉字节，十亿字节，又称“千兆 ）= 1024 MB



1G内存有多大？

1G=1X1024Mb=1X1024X1024KB=1X1024X1024X1024B 



在excel画一个内存



## 数据结构 （栈和堆）

我们把内存当中一个堆栈

入栈 （push）

出栈    (pop)

后进先出





## 代码是如何使用内存的？

内存被我们人为的划分为 栈内存 和 堆内存



程序被执行的过程

```javascript
var a=1;

// 形参
function test(a) {
    var c=1+a
    console.log(c);
}

// 实参
test(1);

内存中可以存储数据 比如 a=1
console,log(11)

// 1.计算机先把js 代码转成 指令，再加载到内存中，内存混存储指令和数据，指令和数据是什么，存成什么样子的
// 2.一条一条地执行指令
// 3. 分配内存，基本类型和引用类型存储不同
// 4. 执行函数的时候，先分配内存给参数，再执行下面的代码

```





## 所谓是形参和实参

```javascript
var a=1;
function test(a) {
    var c=1+a
    console.log(c);
}
test();
```

### 站在内存看全局变量和局部变量

```javascript

// 数据类型 ：
var a;
var a=1;
function test(a) {
    var a=2
    console.log(a);
}
test(22);  
```



## 什么是污染全局变量，以及建议的写法

污染的例子

```javascript
var a=1;
function test(a) {
     a=2;

}
test(3);
console.log(a)
```



## 从内存看死循环

```javascript
while(true){
	var a=1;
}
```

死循环会导致内存溢出，内存溢出就是内存不够分配了，看一下自己计算机的内存图，

著名的网站  https://stackoverflow.com/ 

我们有时候说电脑卡死了，可能是内存占用过高了，我们要关闭一些程序，内存降下来了，电脑就不卡了。



## 对象的调用在内存中

对象是引用类型的，存储在堆内存中







# this的练习题目

```javascript
var x = 10;
var obj = {
    x: 20,
    f: function(){
        console.log(this.x);        // ?
    }
};

// 向上一级找this
obj.f();

var qc = obj.f;
qc();

```

```javascript
//匿名函数的调用在内存中是怎么样的？
  var num = 10;
    var obj = {
        num:8,
        inner: {
            num: 6,
            print: function () {
                alert(this.num);
            }
        }
    }
    num = 888;
    //1. 匿名函数的调用
	(obj.inner.print)(); //这个()()写法有点不太理解

```

```javascript
var x = 10;
var obj = {
    x: 20,
    f: function(){
        console.log(this.x);        // ?
        var foo = function(){ 
            console.log(this.x);    
            }
        foo();                      // ?
    }
};
obj.f();
```



```javascript
// 难 
function foo(arg){
    this.a = arg;
    return this
};

var a = foo(1);
var b = foo(10);

console.log(a.a);    // ?
console.log(b.a);    // ?

// 分析
// 1. 调用this.a=1;就相当于window.a=1,再返回window
// 2. 把window赋值给window.a,window.a = window
// 3. a.a 的时候，因为window.a.a 是undefined ,所以 undefined
// --------------------
// 1.window.a=10
// 2.window.b = window
// 3.window.b.a = window.a = 10

```

```javascript
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //12
        }
    }
}
o.b.fn();
```

```javascript
var obj = {
  foo: function () { console.log(this.bar) },
  bar: 1
};

var foo = obj.foo;
var bar = 2;

obj.foo() // 1
foo() // 2
```

```javascript
a=2;
function p1(){
    var a=1;
    alert(this.a);
}
p1();
// 1. a=2 相当于window.a=2;
// 2. p1()相当于 window.p1() 那么p1函数里面的this指向的就是 window.所以 this.a 就是  window.a


b=2;
function p2(){

    b=1;
    alert(this.b);
}
p2();
// 这个是布局变量和全局变量的问题，用var 声明的变量，作用域会在当前环境中，假如声明变量的时候没有加var 关键字
// 那么这个变量就是 全局的，b=2 b这个变量就是 全局变量，函数里面b=1 就是 给全局b赋值1 ，所以 window.b=1
// 那么 this.b就是1

```

```javascript
var point = {
    x : 0,
    y : 0,
    moveTo : function(x, y) {
        // 内部函数
        var moveX = function(x) {
            this.x = x;
        };
        // 内部函数
        var moveY = function(y) {
            this.y = y;
        };
        moveX(x); // 这里是全局调用
        moveY(y);
    }
};
// 思考题，假如不执行 point.moveTo(1, 1);
point.moveTo(1, 1);
console.log(point.x); // 0
console.log(point.y); // 0
console.log(x,y);
```



```javascript
<script>
    var num = 10;
    var obj = {
        num:8,
        inner: {
            num: 6,
            print: function () {
                alert(this.num);
            }
        }
    }
    num = 888;
 
   
	//1. 先看console.log(a=1)
    //2. console.log(a=b) 得出这样的写法返回的是右边的值
	//3. 再类比下面的函数
	(obj.inner.print = obj.inner.print)(); //888 这个点没有太理解
	
</script>
```



# 箭头函数

箭头函数的this定义：**箭头函数的this是在定义函数时绑定的，不是在执行过程中绑定的。简单的说，函数在定义时，this就继承了定义函数的对象。**

 ```javascript
var a=1;
var obj={
    a:2,
    show:function(){
        return ()=>{console.log(this.a)} // 定义的时候所在的对象是obj
    }
}   

obj.show()();   //2
 ```

