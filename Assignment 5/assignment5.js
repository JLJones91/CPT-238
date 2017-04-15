$(document).ready(function()
{
	$("#webTitle").offset({left:500, top: 25})
	$("#credit").offset({left:500, top:100})
		
	$("#chicken").offset({left: 250, top: 200})
	$("#duck").offset({left: 525, top: 200})
	$("#goat").offset({left: 800, top: 200})
	$("#turkey").offset({left: 1075, top: 200})
	
	$("#chickenPic").offset({left:100, top:850})
	$("#duckPic").offset({left:700, top:150})
	$("#goatPic").offset({left:100, top:250})
	$("#turkeyPic").offset({left:700, top:150})	
	
	$("#goatPic").hide();
	$("#goat").click(function(event)
	{
		event.preventDefault();
		$("#goatPic").toggle();
	});
	
	$("#turkey").click(function(event)
	{
		event.preventDefault();
		$("#turkeyPic").slideToggle("slow");
	});
	
	$("#duck").click(function(event)
	{
		event.preventDefault();
		$("#duckPic").fadeToggle(1500);
	});
	
	$("#chicken").click(function(event)
	{
		event.preventDefault();
		$("#chickenPic").hide("fast", function(){
			$("#chickenPic").show("fast");
		});
	});
	
	$("#credit").animate({"fontSize":"50px", "fontFamily":"serif"}, 2500);
	
	
});