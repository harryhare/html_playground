## JavaScript

* <script src=""></script> 不能写成 <script src=""/>
* preventdefault 除了有默认事件比如submit 之外的组件没啥用
  stopPropagation 停止向上传递事件
  stopImmediatePropagation 停止向上传递事件，并且停止处理这个事件的其他listener
 


### let 和 var 区别
let 有块作用域

### ==== 和 == 区别
=== 是严格比较，比较类型和值
== 会把值做类型转换后再比较

### onclick 等事件

* 在html 文件中 直接写在控件上的 onclick="f()" 中 f 内可以变量 this 和 event
  或者也可以 onclick="console.log('...');"这种，总之就是个js 片段

* 在js中要写成 element.onclick=f, 不要加括号，是个函数，this 会是windows对象，而event 正常

### 鼠标移动到空间上显示 
https://stackoverflow.com/questions/131653/inline-style-to-act-as-hover-in-css
```
b.onmouseover = (e) => {
	e.target.style.opacity = 1;
	//e.target.style.visibility = visible;
};
b.onmouseout = (e) => {
	e.target.style.opacity = 0;
	//e.target.style.visibility = hidden;
};
b.style = "float: right; opacity: 0;";
//b.style = "float: right; visibility: hidden;"; // 点不到
```

### js 数组插入，前插 prepend，后插 append, insertBefore,insertAfter

### 在直接用 element.attr 是只能用少量的属性
其他的要用 setAttribute("key","value"),getAttribute("key")

### js 字符串格式化
```js
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
```
### cloneNode 参数为true 是 也会复制子节点，false 是不复制子节点，默认false
https://www.w3schools.com/jsref/met_node_clonenode.asp

### nodelist 和array 区别还挺大的，nodelist 不能用array 的方式便利，不能用 map(x=>f(x))

### js 正则的test() 在 global 模式下行为会很怪异
```js
const reg=/test/g;
console.log(reg.test("test"));//true
console.log(reg.test("test"));//false
```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test#using_test_on_a_regex_with_the_global_flag

### 用async await 处理 xmlhttprequest
https://stackoverflow.com/questions/48969495/in-javascript-how-do-i-should-i-use-async-await-with-xmlhttprequest
```js
function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

async function doAjaxThings() {
    // await code here
    let result = await makeRequest("GET", url);
    // code below here will only execute when await makeRequest() finished loading
    console.log(result);
}

``` 
### sleep 的写法
https://www.sitepoint.com/delay-sleep-pause-wait/
```
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

await sleep(2000);
sleep(2000).then(() => { console.log("World!"); });
```


### 剪贴板操作
[剪贴板操作 Clipboard API 教程](http://www.ruanyifeng.com/blog/2021/01/clipboard-api.html)
* copy,cut,paste 事件
* navigator.clipboard
  -  await navigator.clipboard.readText()
  -  await navigator.clipboard.writeText()
  -  await navigator.clipboard.read()
  -  await navigator.clipboard.write()
* window.getSelection().toString()
* document.execCommand('copy')
  document.execCommand('cut')
  document.execCommand('paste')
  ```js
    const inputElement = document.querySelector('#input');
    inputElement.select();
    document.execCommand('copy');
  ```
  ```js
    const pasteText = document.querySelector('#output');
    pasteText.focus();
    document.execCommand('paste');
  ```
剪切板消毒的插件主要是前三种

## 创建文件并下载
http://caibaojian.com/js-download.html
例子见 donwload.html
```js
    let a = document.querySelector("a");
    let blob = new Blob(['test']);
    a.download = "leaderboard.csv";
    a.href = URL.createObjectURL(blob);
    //URL.revokeObjectURL(a.href)
```


## 时间相关
now=new Date()
t=new Date(timestamp)

setDay 一周的第几天
setDate 一个月的第几天


## 字符串

* 去掉两侧空格
没有strip(), 用trim()

* 没有printf 那种格式化输出的函数


##


