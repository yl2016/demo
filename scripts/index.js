var currentNum = 0;
var totalNum = 5;
function showImg(num) {
	$($('div.img img')[currentNum]).removeClass('curImg');
	$($('div.num span')[currentNum]).css('backgroundColor','#ccc');
	currentNum = currentNum+1 == totalNum ? 0 : currentNum+1;
	if(num!=null||num!=undefined){
		currentNum=num;
	}
	$($('div.img img')[currentNum]).addClass('curImg');
	$($('div.num span')[currentNum]).css('backgroundColor','#32afff');
}

function showRecommend(recommend) {
	var $titles = $('.'+recommend+' ul.recommend-title a');
	var $spans = $('.'+recommend+' ul.recommend-title span');
	var $content = $('.'+recommend+' div.recommend-content .hot-content');
	$titles.mouseover(function() {
		$(this).addClass('orangeA').parent().siblings().children().removeClass('orangeA');
		var index = $titles.index(this);
		$spans.eq(index).addClass('orangeIcon').closest('li').siblings().find('span').removeClass('orangeIcon');
		$content.eq(index).show().siblings().hide();
	});
}

function showList() {
	var $datas = [];
	$('span.sales-num').each(function(i, v) {
		$datas.push($(v).text());
	});
	$('div.sales-list li').each(function(i, v) {
		$(v).mouseover(function() {
			$(this).addClass('sales-list-cur').siblings().removeClass('sales-list-cur');
			$(this).parent().children().find('span.sales-num').each(function(i, v) {
				$(v).text($datas[i]);
			});
			$(this).find('span.sales-num').text($(this).find('span.sales-num').attr('data'));
		});
	});
}

$(function() {
	var interval = setInterval("showImg();",3000);
	$('div.img img').hover(function() {
		clearInterval(interval);
	},function() {
		interval = setInterval("showImg();",3000);
	});
	$('div.num span').each(function(i, v) {
		$(v).hover(function() {
			clearInterval(interval);
			showImg(i);
		},function() {
			interval = setInterval("showImg();",3000);
		});
	});
	showList();
	$('.hot-books-img').roundabout();
	showRecommend('recommend-books');
	showRecommend('author');
	$(document).scroll(function() {
		if($(window).scrollTop() >= 100){
			$('.top-nav').css({position:'fixed', top:'0', left:'0', zIndex:'1000'});
			$('.hidden-header').css({height:'80px', boxShadow:'0 1px 3px 0px #ccc'});
		}else{
			$('.top-nav').css({position:'relative', zIndex:'1'});
			$('.hidden-header').css({height:'0'});
		}
	});
});
