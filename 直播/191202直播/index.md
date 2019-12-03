# let和const  





## let

声明变量的关键字，类似var

 - 块级作用域

   ```javascript
   {
       let a = 12;
   }
   console.log(a);   //报错，a不存在
   ```

- let声明的变量作用域不会被提升 

  ```javascript
  {
      console.log(a);  //报错
      let a = 12;
  }
  ```

- 在相同的作用域下不能声明相同的变量 

  ```javascript
   {
     let a = 10;
     let a = 11;  //报错    
   }
  ```

- for循环中的let的作用域 

  ```javascript
  // i虽然在全局作用域声明，但是在for循环体局部作用域中使用的时候，变量会被固定，不受外界干扰。
  for (let i = 0; i < 10; i++) { 
    setTimeout(function() {
      console.log(i);    //  i 是循环体内局部作用域，不受外界影响。
    }, 0);
  }
  // 输出结果：
  0  1  2  3  4  5  6  7  8  9
  ```

- 暂时性死区

  只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

  

## let 和var的区别

- 作用域

  es6 之前， JS只有函数作用域和全局作用域，没有块级作用域 。所以可以在块外面访问 var 声明的变量

  ```javascript
  { 
    var i = 9;
  } 
  console.log(i);  // 9
  ```

  es6在块里用let声明 的变量只能在块里面访问

  ```javascript
  {
      let a = 12;
  }
  console.log(a);   //报错，a不存在
  ```

- 在for循环里面的区别

  let非常适合用于 `for`循环内部的块级作用域。JS中的for循环体比较特殊，每次执行都是一个全新的独立的块作用域，用let声明的变量传入到 for循环体的作用域后，不会发生改变，不受外界的影响。

   ```javascript
  for (var i = 0; i <10; i++) {  
    setTimeout(function() {  // 
      console.log(i);        // 执行此代码时，同步代码for循环已经执行完成
    }, 0);
  }
  // 输出结果
  10   共10个
   ```

  使用let

  ```javascript
  // i虽然在全局作用域声明，但是在for循环体局部作用域中使用的时候，变量会被固定，不受外界干扰。
  for (let i = 0; i < 10; i++) { 
    setTimeout(function() {
      console.log(i);    //  i 是循环体内局部作用域，不受外界影响。
    }, 0);
  }
  // 输出结果：
  0  1  2  3  4  5  6  7  8 9
  ```

- let 没有变量提升，但是var 有

  ```javascript
  {
      console.log(a);  //报错
      let a = 12;
  }
  
  {
      var a;
      console.log(a); //undefined
      var a=1;
  }
  ```

- let 不可以重复声明，但是var 可以  

  ```javascript
   {
     let a = 10;
     let a = 11;  //报错    
   }
  var b=1;
  var b=2;
  ```

  推荐使用 let 替换 var

## const

es6的新语法 ，const 代表常量，常量就是不能被修改的量

- const作用域只限于当前代码块 

  ```javascript
  {
      const a=1;
  }
  console.log(a);  // error
  ```

- const声明的变量作用域不会被提升 

  ```javascript
  {
      console.log(a);  //报错
      const a = 12;
  }
  ```

- 在相同的作用域下不能重复声明 

  ```javascript
   {
     const a = 10;
     const a = 11;  //报错    
   }
  ```

- 声明的同时必须赋值，声明后值无法改变 

  ```javascript
  {
      const a; //报错
  }
  ```

- 不能重复赋值，对象除外

  ```javascript
  {
      const a=1;
      a=2;//报错
  }
  ```

  ```javascript
  {
      const a={bb:2};
      a.bb=2;  // 这里是可以的，因为a 指向的是对象的地址，对象的地址没有改变的话，就不会报错
  }
  ```

  

# 解构

 ES6允许按照一定的模式从数组和对象中提取值，对变量进行赋值，这被称为解构。 

## 数组解构

```javascript
//新的定义方法
let  [name,age,sex] = ["李四",20,"女"];

//以前的定义方法
let name = "李四";
let age = 20;
let sex = "女"

// 设置解构的默认值
let [foo = true] = [];
foo // true
let [x, y = 'b'] = ['a']; // x='a', y='b'

```





## 对象解构

```javascript
  let {name,age,friends} = {name:"zhangsan",age:12,friends:["lulu","女"]};
  console.log(name); //zhangsan
```

## 嵌套数组解构

```javascript
//只要一一对应就可以
let [a1,[a2,a3,[a4,a5]]] = [1,[2,3,[4,5]]];
console.log(a1,a2,a3,a4,a5);  //1，2，3，4，5
```

##  字符串的解构赋值 

```javascript
let [a,b,c,d,e] = "我是中国人";
console.log(a);   //我
console.log(b);   //是
console.log(c);   //中
console.log(d);   //国
console.log(e);   //人
```



## 开发中的应用和特点

- 交换变量的值

  ```javascript
  let x = 1;
  let y = 22;
  [x, y] = [y, x];
  ```

- 从函数返回多个值

  ```javascript
  // 返回一个数组
  
  function example() {
    return [1, 2, 3];
  }
  let [a, b, c] = example();
  
  // 返回一个对象
  
  function example() {
    return {
      foo: 1,
      bar: 2
    };
  }
  let { foo, bar } = example();
  ```

- 解构赋值可以方便地将一组参数与变量名对应起来。 

  ```javascript
  // 参数是一组有次序的值
  function f([x, y, z]) { ... }
  f([1, 2, 3]);
  
  // 参数是一组无次序的值
  function f({x, y, z}) { ... }
  f({z: 3, y: 2, x: 1});
  ```

- 解构赋值对提取 JSON 对象中的数据，尤其有用 

  ```javascript
  let jsonData = {
    id: 42,
    status: "OK",
    data: [1, 2]
  };
  
  let { id, status, data: number } = jsonData;
  console.log(id, status, number);
  ```

- 设置函数的默认参数

  ```javascript
  function show(
  {
      a=1,
      b=2
  }
  ) {
      console.log(a,b)
  }
  
  show({b:2}) //1,2
  ```

- 遍历map 对象

  ```javascript
  const map = new Map();
  map.set('a', 'hello');
  map.set('b', 'world');
  
  for (let [key, value] of map) {
    console.log(key + " is " + value);
  }
  ```

- 快速声明变量

  ```javascript
  let [x,y,z]=[1,2,3]
  console.log(x,y,z);
  ```

- 如果解构不成功，变量的值就等于`undefined`。 

  ```javascript
  let [foo] = [];
  let [bar, foo] = [1];
  ```

- 解构的默认值

  ```javascript
  let [foo = true] = [];
  foo // true
  ```

- 解构一个常用方法

  ```javascript
  const { log } = console;
  log('hello') // hello 
  ```

- 多次解构

  ```javascript
  const node = {
    loc: {
      start: {
        line: 1,
        column: 5
      }
    }
  };
  
  let { loc, loc: { start }, loc: { start: { line }} } = node;
  line // 1
  loc  // Object {start: Object}
  start // Object {line: 1, column: 5}
  ```





# 字符串扩展

- 可以用unicode 表示字符

  ```javascript
  console.log("\u0062");  //b
  ```

- 遍历字符串

  ```javascript
  var str='abc';
  for (item of str){
      console.log(item);
  }
  ```

- 模板字符串

  - 对换行的处理

  ```javascript
  //我们通常这样拼接html字符串。 
  var html = '<ul>'+
          '<li>1</li>'+
          '<li>2</li>'+
          '</ul>'
  
  // es6
  
  var html = `<ul>
  <li>1</li>
  <li>2</li>
  </ul>`
  ```

  - 解析变量

  ```javascript
  // 之前
  var s1 = `hello vue`;
  console.log('aa'+s1+"bb")
  
  // es6
  var s1 = `hello vue`;
  console.log(`abc${s1}`)
  ```

# 新的字符串方法

- includes(),startsWith(),endsWith()

  ```javascript
  let s = 'Hello world!';
  
  s.startsWith('Hello') // true
  s.endsWith('!') // true
  s.includes('o') // true
  ```

- repeat

  ```javascript
  let a="qbc";
  console.log(a.repeat(2))
  ```

- trimstart,trimend

  ```javascript
  const s = '  abc  ';
  s.trim() // "abc"
  s.trimStart() // "abc  "
  s.trimEnd() // "  abc"
  ```





# 数值的扩展

- 二进制，八进制，16进制

  ```javascript
  // 二进制 ，用 ob开头
  const abc =0b1010101;
  console.log(abc);
  
  // 八进制，用0o 开头
  const q=0o767;
  console.log(q); //503
  
  // 16进制,用0x开头
  const m = 0x11;
  console.log(m)
  
  //https://tool.lu/hexconvert/
  ```

- Number.isFinite(),Number.isNaN(NaN)

  ```javascript
  Number.isFinite(15); // true
  Number.isFinite(0.8); // true
  Number.isFinite(NaN); // false
  Number.isFinite(Infinity); // false
  ```

  有限的数值返回true ，如果参数类型不是数值，`Number.isFinite`一律返回`false`。 

  ```javascript
  Number.isNaN(NaN) // true
  Number.isNaN(15) // false
  Number.isNaN('15') // false
  Number.isNaN(true) // false  
  ```

- Number.parseInt,Number.parseFloat

  ```javascript
  // ES5的写法
  parseInt('12.34') // 12
  parseFloat('123.45') // 123.45
  
  // ES6的写法
  console.log(Number.parseInt('12.34')) // 12
  console.log(Number.parseFloat('123.45')) // 123.45
  ```

- Number.isInteger

  ```javascript
  Number.isInteger(1) // true
  Number.isInteger(1.2) // false
  
  console.log(Number.isInteger(1));
  console.log(Number.isInteger(1.2));
  ```

- Math.trunc

  Math.trunc`方法用于去除一个数的小数部分，返回整数部分。 

  ```javascript
  Math.trunc(4.1) // 4
  Math.trunc(4.9) // 4
  Math.trunc(-4.1) // -4
  Math.trunc(-4.9) // -4
  Math.trunc(-0.1234) // -0
  ```

   对于非数值，`Math.trunc`内部使用`Number`方法将其先转为数值。 

  ```javascript
  Math.trunc('123.456') // 123
  Math.trunc(true) //1
  Math.trunc(false) // 0
  Math.trunc(null) // 0
  ```

   对于空值和无法截取整数的值，返回`NaN`。 

  ```javascript
  Math.trunc(NaN);      // NaN
  Math.trunc('foo');    // NaN
  Math.trunc();         // NaN
  Math.trunc(undefined) // NaN
  ```

- 指数运算符

  ```javascript
  console.log( 2**4);  //16
  ```

# 函数扩展

- 参数默认值

  ```javascript
  function log(x, y) {
      y = y || 'b';
      console.log(x, y);
  }
  
  log('a') // a b
  log('b', 'c') // b c
  log('a', '') // a b
  
  // es6
  function log(x, y='b') {
      console.log(x, y);
  }
  log('a') // a b
  log('b', 'c') // b c
  log('a', '') // a b
  
  // 默认的参数一般放到最后
  ```

## 作用域

 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。 

```javascript
var x = 1;

function f(let x, let y = x) {
  console.log(y);
}


{
   let x=2;
   let y=x;
}

f(2) // 2
```

上面代码中，参数`y`的默认值等于变量`x`。调用函数`f`时，参数形成一个单独的作用域。在这个作用域里面，默认值变量`x`指向第一个参数`x`，而不是全局变量`x`，所以输出是`2`。

再看下面的例子。

```javascript
let x = 1;

function f(let y = x) {
  let x = 2;
  console.log(y);
}
f() // 1
```

上面代码中，函数`f`调用时，参数`y = x`形成一个单独的作用域。这个作用域里面，变量`x`本身没有定义，所以指向外层的全局变量`x`。函数调用时，函数体内部的局部变量`x`影响不到默认值变量`x`。

如果此时，全局变量`x`不存在，就会报错。

```javascript
function f(let y = x) {
  let x = 2;
  console.log(y);
}

f() // ReferenceError: x is not defined
```

 下面这样写，也会报错。 

```javascript
var x = 1;

function foo(x = x) {
  // ...
}
foo() // ReferenceError: x is not defined
```

 上面代码中，参数`x = x`形成一个单独作用域。实际执行的是`let x = x`，由于暂时性死区的原因，这行代码会报错”x 未定义“。 

## rest 参数

rest 参数代替`arguments`变量的例子 

参数不确定的求和

 rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。 

```javascript
function add(...values) {
    let sum = 0
    for (let i=0;i<values.length;i++){
        sum+=values[i];
    }
    return sum
}

console.log(add(2, 3, 4)) // 9
```

 **rest 参数后面不能再有其他参数（即只能是最后一个参数），否则会报错。** 

## 箭头函数

```javascript
var sum =function (a,b) {
    return a+b;
}
//es6
var sum = (num1, num2) => { return num1 + num2; }  // 建议
var sum = (num1, num2) => num1 + num2;
```

### 特点

- 函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。（重点）
- 不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误。
- 不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

```javascript
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });
// id: 42
```

 上面代码中，`setTimeout`的参数是一个箭头函数，这个箭头函数的定义生效是在`foo`函数生成时，而它的真正执行要等到 100 毫秒后。如果是普通函数，执行时`this`应该指向全局对象`window`，这时应该输出`21`。但是，箭头函数导致`this`总是指向函数定义生效时所在的对象（本例是`{id: 42}`），所以输出的是`42`。 





