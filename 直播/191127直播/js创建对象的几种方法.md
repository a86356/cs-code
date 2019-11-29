# js 创建对象的几种方式



1. 字面量

   ```javascript
   var person ={
           name: "zhangsan",
           age: 21,
           say: function(){
               alert(this.name);
           }
       };
   ```

   

2.  **new 操作符 + Object 创建对象** 

   ```javascript
   var person = new Object();
       person.name = "lisi";
       person.age = 21;
       person.family = ["lida","lier","wangwu"];
       person.say = function(){
           alert(this.name);
       }
   ```

   

3. 工厂模式 ; 为什么会有工厂模式，因为上面2种方式创建对象太麻烦了，比如我创建1000个对象，就要复制上面的代码1000次。

   工厂模式其实就是把创建对象的过程封装到一个函数里面

   为什么叫工厂模式?

   因为被创建的对象都是标准化对象，都有一样的属性和方法

   ```javascript
   function createPerson(name,age,family) {
       var o = new Object();
       o.name = name;
       o.age = age;
       o.family = family;
       o.say = function(){
           alert(this.name);
       }
       return o;
   }
   
   var person1 =  createPerson("lisi",21,["lida","lier","wangwu"]);  
   var person2 =  createPerson("wangwu",18,["lida","lier","lisi"]);
   
   ```

   存在的问题

   工厂模式解决了重复实例化多个对象的问题，但没有办法创建不同的对象类型,比如我想创建Array对象，就不行

      ```javascript
console.log(person1 instanceof Object); // true   ，instance 会在原型链上找这个对象，找到就返回true,找不到返回false
console.log(person1 instanceof Array); // false
      ```

4. 构造函数的方式

```javascript
function Person(name,age,family) {
    this.name = name;
    this.age = age;
    this.family = family;
    this.say = function(){
        alert(this.name);
    }
}
var person1 = new Person("lisi",21,["lida","lier","wangwu"]);
var person2 = new Person("lisi",21,["lida","lier","lisi"]);
console.log(person1 instanceof Object); //true
console.log(person1 instanceof Person); //true
console.log(person2 instanceof Object); //true
console.log(person2 instanceof Person); //true
console.log(person1.constructor);      //constructor 属性返回对创建此对象的数组、函数的引用
```

 上面就解决了person1的类型不再是但一次 Object类型，而且是Person 类型的





构造函数创建一个对象的过程 ，就执行new 函数名 这句代码的过程

若执行 `new Person()`，过程如下：

1. 创建新对象 `o`；

2. 给新对象的内部属性赋值，关键是给   __proto__   属性赋值，这个空对象的__proto__属性指向Person函数的原型对象

3. 执行函数 `Foo`，执行过程中内部 `this` 指向新创建的对象 `o`；

```javascript
//apply和call可以动态改变this的指向
var name='22'
var obj={
    name:"11",
    showname:function (a,b,c) {
        console.log(this.name,a,b,c)
    }
}

obj.showname();  // 张三

var fn = obj.showname;

fn.call(this,1,2,3);
fn.apply(this,[1,2,3]);


// call 和apply 的区别

var name='22'
var obj={
    name:"11",
    showname:function (a,b,c) {
        console.log(this.name,a,b,c)
    }
}

var fn = obj.showname;
fn.call(this,1,2,3);
fn.apply(this,[1,2,3]);

```

再讲第三步骤

```javascript
var obj={};
var f=function (age,name) {
    this.age=age;
    this.name=name;
}
f.call(obj,1,'zhangsan')
console.log(obj);
```

4. 如果 `Foo` 内部显式返回对象类型数据，则，返回该数据，执行结束；不然返回新创建的对象 `o`。

```javascript
function Test() {

    this.age=1
    return {"name":"1"}
}

var c=new Test();
console.log(c)
```





## 测试题目



```javascript
var age=12;
function PP() {
    this.age=18;
}

PP();
console.log(age);      //?
console.log(this.age); //?
console.log(window.age); //?
```





 注意：原本的构造函数是window对象的方法，如果不用new操作符而直接调用，那么构造函数的执行对象就 是window，即this指向了window。现在用new操作符后，this就指向了新生成的对象。理解这一步至关重要。 

5. 原型模式

   每创建一个新的对象，我们都会创建新的方法，sayhello,创建1000个对象，就有1000个sayhello的方法。

   ```javascript
   function Person() {
   }
   
   Person.prototype.name = "lisi";
   Person.prototype.age = 21;
   Person.prototype.family = ["lida","lier","wangwu"];
   Person.prototype.say = function(){
       alert(this.name);
   };
   console.log(Person.prototype);   //Object{name: 'lisi', age: 21, family: Array[3]}
   ```

6.  **混合模式（构造函数模式+原型模式）** 

   ```javascript
   function Person(name,age,family){
       this.name = name;
       this.age = age;
       this.family = family;
   }
   
   Person.prototype。say= function(){
           alert(this.name);
   }
   
   var person1 = new Person("lisi",21,["lida","lier","wangwu"]);
   console.log(person1);
   var person2 = new Person("wangwu",21,["lida","lier","lisi"]);
   console.log(person2);
   ```
   
    混合模式共享着对相同方法的引用，又保证了每个实例有自己的私有属性。最大限度的节省了内存 
   
7. es6的class创建对象

   ```javascript
    //class 类名
       class Person{
           name;
           age;
           constructor(name,age){
               this.name=name;
           }
   
           showName(){
               console.log(this.name)
           }
       }
   
       var person1 = new Person('ss');
       person1.showName();
   ```

   

​	  









