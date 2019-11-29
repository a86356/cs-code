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


