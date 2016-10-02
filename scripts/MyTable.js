var MyTable={};
MyTable.defaultConfig={
	con:$('body'),
	hasCURD:false
};

MyTable.show=function(config){
	//让用户配置与自定义插件的配置合并
	config=$.extend(this.defaultConfig,config);
	//拼接表格
	var $table=$("<table class='MyTable'></table>").appendTo(container);
	//创建表头
	var $head=$('<thead><tr></tr></thead>').appendTo($table);
	if(typeof config.titles==='undefined')
		for(pro in config.data[0])
			$('<td></td>').text(pro)
				.appendTo($head.find('tr'));
	else
		for(var i=0;i<config.titles.length;i++){
			$('<td></td>').text(config.titles[i])
				.appendTo($head.find('tr'));
		}
	if(config.hasCURD)
		$('<td>订单操作</td>').appendTo($head.find('tr'));
	//拼接表体
	var $body=$('<tbody></tbody>').appendTo($table);
	for(var i=0;i<config.data.length;i++){
		$("<tr class='time'></tr>").appendTo($body).text("2016-09-06  订单号: 2184479967990953");
		var $tr=$("<tr class='tbody'></tr>").appendTo($body);
		for(pro in config.data[i]){
			var $tds=$('<td></td>').appendTo($tr);
			var $span=$('<span></span>').appendTo($tds);
			$span.text(config.data[i][pro]);
		}
		$("<a href='#' class='pic'><img src='images/xuanhuan-01.png' alt='' /></a>").appendTo($tr.find('td').eq(0));
		
		
		//拼接操作td内容
		if(config.hasCURD)
			this.getLinks().appendTo($tr);
	}
}
MyTable.getLinks=function(){
	var $td=$('<td></td>');
	//删除
	$("<a href='javascript:void(0)'>删除订单</a>")
	.click(function(){
		if(!confirm('您确定要删除该订单吗？')) return;
		//进行删除操作
		$(this).closest('tr').remove();
	}).appendTo($td);
	return $td;
}