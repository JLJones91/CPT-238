
$(document).ready(function()
{
	$("#area1").offset({left:200, top: 200})
	$("#area2").offset({left:350, top: 225});
	$("#area3").offset({left:300, top: 295});
	$("#area4").offset({left:725, top: 340});
	$("#area5").offset({left:725, top: 365});
	$("#area6").offset({left:725, top: 480});
});

$(document).ready(function()
{	
	$("#moveUp").css({"background-color":"blue", "color":"white","font-size":"16px"});
	$("#moveDown").css({"background-color":"blue", "color":"white","font-size":"16px"});
	$("#changeText").css({"background-color":"blue", "color":"white","font-size":"16px"});
});

$(document).ready(function()
{
	$("#moveDown").click(function(event)
	{
		event.preventDefault();
		$("#area3").scrollTop(+50);
	});
	
	$("#moveUp").click(function(event)
	{
		event.preventDefault();
		$("#area3").scrollTop(-50);
	});

	$("#changeText").click(function(event)
	{
		event.preventDefault();
		$("#area3").toggleClass("newFont");
		$(this).text(function(i, text){
          return text === "Larger Text" ? "Smaller Text" : "Larger Text";
      })
	});
});

