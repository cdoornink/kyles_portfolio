// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function(e) {
	var xMove = e.pageX/$("body").css('width').replace("px","");
	var yMove = e.pageY/$("body").css('height').replace("px","");
	moveElements(xMove,yMove);
	
	$(document).mousemove(function(e){
		var xMove = e.pageX/$("body").css('width').replace("px","");
		var yMove = e.pageY/$("body").css('height').replace("px","");
		moveElements(xMove,yMove);
	});
	
	$("body").delegate("#enter-site", "click", function() {
		$("#move-container").fadeOut();
		setTimeout (window.location="main",2500); 
	});
	
});

function moveElement(element,xStart,xRange,xMove,yStart,yRange,yMove){
	$(element).css("left",((xMove*xRange+xStart)+"px"));
	$(element).css("top",((yMove*yRange+yStart)+"px"));
}

function moveElements(xMove,yMove){
	moveElement("#move-me-around",-40,40,xMove,-5,10,yMove);
	moveElement("#move-me-too",-50,60,xMove,-8,16,yMove);
	moveElement("#ground",-10,10,xMove,-5,5,yMove);
}