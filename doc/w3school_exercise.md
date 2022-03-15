
## html
* tooltip
	```html
	<p title="About W3Schools">W3Schools is a web developer's site.</p>
	```
* alt: 图片没有加载时，显示的文字：
	```html
	<img src="w3schools.png"  alt="w3schools Logo">
	```
* Add **a horizontal rule** between the heading and the paragraph.
```html
<h1>London</h1>
<hr>
<p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
```
* Add **a line break** in the middle of the paragraph:
```html
<p>My Bonnie lies<br>over the ocean.</p>
```
* <pre></pre>保留格式
* 在新的标签页打开` <a href="xxx" target="_blank">xxx</a>`
* 图片作为背景 
  - `<img src="smiley.gif" style="float:right;"> `
  - 设置 z-index + position：absolute 也有相同效果
* table，行 tr ,列 td, 头 th, 标题 caption
 ```html
	<table>
      <caption>Names</caption>
      <tr>
	    <th>Name</th>
	    <th>Age</th>
	  </tr>
	  <tr>
		<td>Jill Smith</td>
		<td>50</td>
	  </tr>
	</table>
  ```
  占用多列 colspan="2"
  占用多行 rowspan="2"
  
* 无序列表 ul 有序列表 ol 元素 li
  - 无序元素前用方块： list-style-type:square
  - 有序元素用字幕（html属性）：type="A" 罗马字母 type="I"
    css 属性一样用  list-style-type
  - 描述列表 dl 描述的东西 dt 描述dd

* 代码：pre（保留格式和换行） code var
* css
  背景色 background-color
  字体种类 font-family
  字体大小 font-size
  字体风格 font-style: italic;
  字体加粗 font-weight: bold;
  文字对齐    text-align: center;
  文字无装饰  text-decoration: none;
  文字大小写  text-transform: uppercase/lowercase/capitalize;
  首行缩进    text-indent: 20px;
  
* 文字tag
  加粗 strong
  倾斜 em
  高光 mark
  下标 sub
  划掉 del
  
* 标记tag
  引号    <q>xxx</q>
  块引用  <blockquote cite ="xxx">xxx</blockquote>
  反向    <bdo dir="rtl">What a beautiful day!</bdo>
  文字上提示   <abbr title="World Health Organization"> WHO</abbr>

* 输入
  ```html
	<form action="/action_page.php">
		Name: <input type="text" name="name">
		<input type="submit">
	</form>
	
	
	<input type="radio" name="gender" value="male"> Male
	<input type="radio" name="gender" value="female"> Female
	
	
	<select name="cars">
		<option value="Volvo">Volvo</option>
		<option value="Ford">Ford</option>
	</select>
	
	
	<textarea name="note"></textarea>
	<input type="text" name="username" placeholder="Your name here" maxlength="40" disabled readonly>
	<input type="number" min="1" max="5">

  ```

## css

```css

body {
    background-image: url("gradient_bg_vertical.png");
    background-repeat: repeat-y;
    background-position: top right;
}

body {
    background: url("img_tree.png") no-repeat top right;
}

p {
    border-style: dotted;
    border-width: 4px;
    border-color: red;
}


p {
    border-top-style: dotted;
    border-top-width: 4px;
    border-top-color: red;
}

p {
    border: 10px solid green;
}

div {
    border-radius: 25px;
    border-radius: 0 0 0 25px;
}

div {
    border: 10px solid;
    border-image: url("border.png") 30 round; /* round/stretch */
}

h1 {
    margin: auto; /* center*/
}

table, td, th {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: right;
    background-color: lightblue;
}

h1 {
    visibility: hidden; /* 占据位置只是不显示*/
    display: none; /* 不占位置，直接消失*/
    /* display 还可以修改 inline/block 的属性
     * 不过最熟悉的还是 flex 和 grid 了
     */
}

div {
    /* visible/hidden/scroll/auto*/
    overflow: scroll;
    text-overflow: ellipsis;
}

div {
    overflow-x: scroll;
}

/*
div p 直接+间接 祖先
div > p 直接祖先
div ~ p  兄弟
div + p 紧挨的兄弟

[title="red"] 字符串相等
[title~="red"] 包含单词，单词用空格间隔
[title*="red"] 字符串包含
[title^="red"] 字符串开始
[title$="red"] 字符串结尾

*/


/* 没访问 */
a:link {
    background-color: lightblue;
}

/* 访问过 */
a:visited {
    background-color: lightblue;
}

/* 鼠标在上面时 */
a:hover {
    background-color: yellow;
}

/* 按下去时 */
a:active {
    background-color: yellow;
}

a:first-child {
    background-color: lightblue;
}

a:nth-of-type(0) {
    background-color: lightblue;
}

input:focus {
    background-color: lightblue;
}

p:first-line {
    color: red;
}

p:first-letter {
    font-size: xx-large;
    color: red;
}

p::before, p::after {
    content: url("smiley.gif");
}

p {
    word-wrap: break-word; /* 单词太长，紧在必要的时候才截断*/
    word-break: keep-all; /* 不截断*/
    word-break: break-all; /* 总是截断*/

}

@font-face {
    font-family: sansation;
    src: url(sansation_light.woff);
}

@font-face {
    font-family: sansation;
    src: url(sansation_bold.woff);
    font-weight: bold;
}

body {
    font-family: sansation;
}

/*
   background： https://www.w3schools.com/css/css3_backgrounds.asp
   gradients：  https://www.w3schools.com/css/css3_gradients.asp
   shadow：     https://www.w3schools.com/css/css3_shadows.asp
 */

```


## js
```js
const d = new Date();
d.getFullYear();
d.getMonth();
d.setFullYear(2020);
```
  
  
## git

* 设置user.name
  git config user.name harryhare

* clone 是用新的文件夹命名
  git clone https://abc.com/x/y.git new_dir_name

* 重命名remote
  git remote rename origin upstream

* gitignore except
  *.log
  !main.log

## c++
```c++
getline(cin，xxx)
```

  
  
  