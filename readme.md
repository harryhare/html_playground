# 备忘

## JavaScript

* <script src=""></script> 不能写成 <script src=""/>
* preventdefault 除了有默认事件比如submit 之外的组件没啥用
  stopPropagation 停止向上传递事件
  stopImmediatePropagation 停止向上传递事件，并且停止处理这个事件的其他listener
 

## CSS

* 引入css
  * <link href="./main.css" rel="stylesheet"/>
  *内嵌<style></style>

* margin 重合的部分，取最大的
 
## html 标签 和属性

* 组件是顺序渲染的,如果有脚本，也会按照顺序执行（index.html）
* href 
	* 默认是本页跳转
	* 如果想要在新tab打开 则要加 target="_blank" 
* <pre>标签中的内容会保持原状，空格和换行会保持，且不会wrap
