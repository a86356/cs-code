# js的原型和原型链



- 构造函数

  -  js的创建对象的方法，有一种是通过new 一个函数创建的

    ```javascript
    function Person(name,age){
                this.name = name,
                this.age = age,
               sayHello = function(){
                    alert(this.name)
                }
            }
            
            var per = new Person('jack',18) //当我们直接在页面中打印一个对象时，事件上是输出的对象的toString()方法的返回值
            console.log(per)
    // 我们看到 这个对象的话 有name属性和age 属性，还有一个sayHell方法。
    
    ```

上面做法有什么问题呢？

每创建一个新的对象，我们都会创建新的方法，sayhello,创建1000个对象，就有1000个sayhello的方法。



如何判断实例的函数是不是一样的？

```javascript
console.log(person1.sayName == person2.sayName);    //false
```



属性是对的，因为每一个人的名字和年龄都是不一样的。但是方法都是一样的，我们其实只需要一个就行了。



js给我们提供原型对象解决这个问题



- 什么是原型对象
  - 每一个函数都会有的对象，通过函数名.prototype获得

​	 

那我们怎么解决上面函数过多的问题呢？

 把方法挂载到原型对象上面

正确的在原型上添加方法的方式

```javascript
 Person.prototype.showName=function(){
        console.log(this.name)
    }
```

错误的在原型上添加方法的方式

```javascript
  // Person.prototype ={
    //     showName:function () {
    //         console.log(this.name)
    //     }
    // }
```



那对象是如何调用到原型对象上的方法呢？

通过原型链



什么是原型链

- 在对象和原型对象之间的链条
- 对象可以使用原型链对象上的属性和方法
- 先在自己的对象里面找，再往上一层去找，找不到再往上面找，找不到就undefined





复杂的点

- 原型对象是其实也是一个对象，他是怎么创建的，通过new  Object创建的，类比person1的创建方法

- 函数的原型链

  - js中万物皆对象

    ```javascript
        var a={
    
        }
    
        a.name='zhangsam'
        console.log(a.name)
    
        Person.age=18;
        Person.__proto__.say=function () {
            console.log('我是say方法')
        }
    
        function ggg() {
    
        }
        ggg.say();
        
        // 强烈不推荐使用这样的方式去给js内置的对象，比如Function的原型对象，Object的原型对象写方法，
    ```

- 数组也是对象，数组也有原型链

  - 给数组的原型链加方法试试

    ```javascript
    // console.log(person1.hasOwnProperty('qq'))
       // console.log()
    
        var arr1=new Array();
        console.log(arr1.__proto__)
    
    
        arr1.push(1) // 数组我们可以把他想成一个栈，不过这个栈是2头都是通的，就是类似对栈的压栈操作
        arr1.pop(); //  出栈的操作
    ```







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

（1）创建一个新对象；

（2）将构造函数的作用域赋给新对象（因此this就指向了这个新对象）；

（3）执行构造函数中的代码（为这个新对象添加属性和方法）；

（4）返回新对象；



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
   
   Person.prototype = {
       constructor: Person,  //每个函数都有prototype属性，指向该函数原型对象，原型对象都有constructor属性，这是一个指向prototype属性所在函数的指针
       say: function(){
           alert(this.name);
       }
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









