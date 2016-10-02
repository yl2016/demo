var currentNum = 0;
var totalNum = 5;
function showImg(num) {
	var imgs = document.getElementById("img").getElementsByTagName("img");
	var nums = document.getElementById("num").getElementsByTagName("span");
	imgs[currentNum].className = "";
	nums[currentNum].style.backgroundColor = "#ccc";
	currentNum = currentNum+1 == totalNum ? 0 : currentNum+1;
	if(num!=null||num!=undefined){
		currentNum=num;
	}
	imgs[currentNum].className = "curImg";
	nums[currentNum].style.backgroundColor = "#32afff";
}

function changeBooks() {
	var lis = document.getElementById("hot-recommend").getElementsByTagName("ul")[0].getElementsByTagName("li");
	
}

function showBook() {
	var titles = document.getElementById("recommend-books-title").getElementsByTagName("a");
	var content = document.getElementById("recommend-books-content").getElementsByTagName("ul");
	var spans = document.getElementById("recommend-books-title").getElementsByTagName("span");
	titles[0].style.borderBottom = "1px solid #ea5520";
	spans[0].style.display = "block";
	for(var i = 0, len = titles.length; i < len; i++) {
		(function(i) {
			titles[i].onmouseover = function() {
				for(var j = 0; j < len; j++) {
					titles[j].className = "";
					content[j].style.display = "none";
					titles[j].style.borderBottom = "0";
					spans[j].style.display = "none";
				}
				this.className = "orangeA";
				content[i].style.display = "block";
				this.style.borderBottom = "1px solid #ea5520";
				spans[i].style.display = "block";
			};
		})(i);
	}
}

window.onload = function() {
	var interval = setInterval("showImg();",3000);
	var imgs = document.getElementById("img").getElementsByTagName("img");
	var nums = document.getElementById("num").getElementsByTagName("span");
	for(var i = 0, len = nums.length; i < len; i++) {
		(function(i) {
			imgs[i].onmouseover = function() {
				clearInterval(interval);
			};
			imgs[i].onmouseout = function() {
				interval = setInterval("showImg();",3000);
			};
			nums[i].onmouseover = function() {
				clearInterval(interval);
				showImg(i);
			};
			nums[i].onmouseout = function() {
				interval = setInterval("showImg();",3000);
			};
		})(i);
	}
	changeBooks();
	showBook();
};

window.onscroll = function(){
	var hidden_header = document.getElementById("hidden-header");
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	if(t >= 100){
		hidden_header.style.top = "0px";
		hidden_header.style.boxShadow = "0 1px 3px 0px #ccc";
	}else{
		hidden_header.style.top = "-80px";
	}
}