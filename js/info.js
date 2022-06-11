$(document).ready(function()
{
	$("#accordion h3").click(function()
    {
		$(this).next("p").slideToggle(500).siblings("p:visible").slideUp(500);
        $(this).toggleClass("minus");
        $(this).siblings("h3").removeClass("minus");
	});

	$("#dark").click(function()
	{
		$("body").toggleClass("body_dark");
		$("h1, h2, h3, h4, h5, h6, p, a").toggleClass("text_dark");
		$("nav").toggleClass("body_dark2");
		$("nav li a").toggleClass("text_dark2");
		var logo = $("#logo").attr("src");
		if(logo == "images/thumbs/logo.png")
		{
			$("#dark").text("Light Mode");
			$("#dark").css({backgroundColor:"#DDD",color:"black"});
			$("#go_top").css({backgroundColor:"#222",color:"white"});
			$("#logo").attr("src","images/thumbs/logo2.png");
		}
		else
		{
			$("#dark").text("Dark Mode");
			$("#dark").css({backgroundColor:"#555",color:"white"});
			$("#go_top").css({backgroundColor:"#E7D1C9",color:"black"});
			$("#logo").attr("src","images/thumbs/logo.png");
		}
	});
});