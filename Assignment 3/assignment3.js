$(document).ready(function()
{
	$("#format").click(function() 
	{
		$(".courses tr:first").addClass("header");
		$(".courses tr:even:not(tr:first)") .addClass("altrow");	
	});
});

$(document).ready(function()
{
	$("#image").on("click", function()
	{
		$("#myImage").append("<img id = 'theImg' src='jquery_cover.jpg'/>");
	});
});

$(document).ready(function()
{
	$("#redBoarders").click(function()
	{
		$("div").addClass("enclose");
	});
});

$(document).ready(function()
{
	$("#myImage").on("mouseover", function()
	{
		$("#theImg").animate({width: "200%", height: "200%"});
	});
	
	$("#myImage").on("mouseleave", function()
	{
		$("#theImg").animate({width: "202px", height: "250px"});
	});
});