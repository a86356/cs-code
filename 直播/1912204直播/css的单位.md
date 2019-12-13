# css 的单位

px 像素 

- pc 布局常用
- ps和电脑分辨率看像素
-  Px的缺点是其不能适应浏览器缩放时产生的变化，因此一般不用于响应式网站。 

em 

-  em表示相对尺寸，其相对于当前对象内文本的font-size（如果当前对象内文本的font-size计量单位也是em，则当前对象内文本的font-size的参考对象为父元素文本font-size） 

rem

-  rem也表示相对尺寸，其参考对象为根元素<html>的font-size，因此只需要确定这一个font-size。 



# css3 媒体查询

分辨率改变，设置不同的样式

```javascript
https://www.runoob.com/cssref/css3-pr-mediaquery.html
@media screen and (max-width: 300px) {
    body {
        background-color:lightblue;
    }
}
```



# css 用rem和媒体查询实现自适应



为什么需要做媒体查询

 一般来说，为了防止在高清屏幕下像素不够用导致模糊，我们拿到的设计稿是640px（iphone5 设备宽为320px）或750px的两倍稿（iphone6 设备宽为375px），按照设备宽度做了两倍的大小。 

```javascript
写入CSS的尺寸/屏幕宽度 = UI图标注的尺寸/UI图宽度

因此：

写入CSS的尺寸 = UI图标注的尺寸/UI图宽度*屏幕宽度
```

```javascript
当标注尺寸为64px、UI图宽度为750px时，针对不同屏幕宽度，写入CSS的属性分别为：


27.3px  = 64/750*320   // iphone5 320px 
...
64px  = 64/750*750
```



所以我们需要根据屏幕宽度，去动态设置尺寸大小

```javascript
@media screen and (min-width: 320px) {
    body{
        font-size: 42px;
    }
}
@media screen and (min-width: 375px) {
    body{
        font-size:50px;
    }
}
@media screen and (min-width: 414px) {
    body{
        font-size: 55px;
    }
}
@media screen and (min-width: 640px) {
    body{
        font-size: 85px;
    }
}
@media screen and (min-width: 750px) {
    body{
        font-size: 100px;
    }
}
@media screen and (min-width: 768px) {
    body{
        font-size: 102px;
    }
}
@media screen and (min-width: 1024px) {
    body{
        font-size: 136px;
    }
}

div{
    width: 0.16rem;
}
```





# css vm和vh

- vw : 1vw 等于视窗宽度的1%
- vh : 1vh 等于视窗高度的1%

比如设置一半的宽度 ,一半的高度









# css calc

```javascript
#div1 {
    position: absolute;
    left: 50px;
    width: calc(100% - 100px);
    border: 1px solid black;
    background-color: yellow;
    padding: 5px;
    text-align: center;
}
```





