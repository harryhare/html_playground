<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="UTF-8">
<title>cechart</title>
<!-- 引入 ECharts 文件 -->
    <script src="./js/echarts.js"></script>
     <script src="./js/jquery.min.js"></script>
    <script type="text/javascript">
	    $(function (){
	    	//json方式
	    	initchartForJson();
	    });
    </script>
</head>
<body>
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div id="main" style="height:500px;border:1px solid #ccc;padding:10px;"></div>
</body>
<script type="text/javascript">
function initchartForJson() {
	var mapJsonPath = './map/json/province/beijing.json';
	var areaName = '北京市';
	var option = {
        series : [ {
        type : 'map',
        //map的值也是，省份汉语名称
        map : areaName
        } ]
    };
	
	$.get(mapJsonPath, function(mapJson) {
        echarts.registerMap(areaName, mapJson);
        var chart = echarts.init(document.getElementById('main'));
        chart.setOption(option);
    });
}
</script>
</html>