



名称:行者课堂 

网址:cs1024.com

qq/微信:100000356

# html_表单标签

## 文本框

```html
<label for="male">Male</label>
<input type="text" value="默认有的值" name="male" />
value表示“值”，value属性就是默认有的值，文本框中已经被填写好了
```

## 密码框

```html
<input type="password" />
```

## 单选按钮

```html
<input type="radio" name="xingbie" checked="checked" /> 男
<input type="radio" name="xingbie" /> 女
默认被选择，就应该书写checked=”checked”
```

## 复选框

```html
<p>
    请选择你的爱好：
    <input type="checkbox" name="aihao"/> 睡觉
    <input type="checkbox" name="aihao"/> 吃饭
    <input type="checkbox" name="aihao"/> 足球
    <input type="checkbox" name="aihao"/> 篮球
    <input type="checkbox" name="aihao"/> 乒乓球
    <input type="checkbox" name="aihao"/> 打豆豆
</p>
```

## 下拉列表

```html
<select>
      <option>北京</option>
      <option>河北</option>
      <option>河南</option>
      <option>山东</option>
      <option>山西</option>
      <option>湖北</option>
      <option>安徽</option>
</select>
```

## 多行文本框

```html
<textarea cols="30" rows="10"></textarea>
```

## 按钮

```html
1）普通按钮：<input type="button" value="我是一个普通按钮" />
2）提交按钮：<input type="submit" />
3）重置按钮：<input type="reset" />
```

## 整合表单标签

```html
<form action="http://localhost" method="GET">
    姓名: <input type="text">
    <input type="submit" value='提交'>
</form>
```

## 作业 写个人信息的表格demo

参考 https://www.php.cn/div-tutorial-411532.html 


