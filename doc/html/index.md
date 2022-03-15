## html 标签 和属性

* 组件是顺序渲染的,如果有脚本，也会按照顺序执行（index.html）
* href 
	* 默认是本页跳转
	* 如果想要在新tab打开 则要加 target="_blank" 
* <pre>标签中的内容会保持原状，空格和换行会保持，且不会wrap

## block ,inline,inline-block 的区别
https://blog.csdn.net/weixin_42553433/article/details/87898364

总结就是 inline 没啥用，因为 element 会挤到前面
如果想要控制一行中 element的宽度，就只能用 inline-block
而block会单独占一行

* inline:
使元素变成行内元素，拥有行内元素的特性，即可以与其他行内元素共享一行，不会独占一行. 
不能更改元素的height，width的值，大小由内容撑开. 
可以使用padding，margin的left和right产生边距效果，但是top和bottom就不行.

* block:
使元素变成块级元素，独占一行，在不设置自己的宽度的情况下，块级元素会默认填满父级元素的宽度. 
能够改变元素的height，width的值. 
可以设置padding，margin的各个属性值，top，left，bottom，right都能够产生边距效果.

* inline-block:
结合了inline与block的一些特点，结合了上述inline的第1个特点和block的第2,3个特点.
用通俗的话讲，就是不独占一行的块级元素。

