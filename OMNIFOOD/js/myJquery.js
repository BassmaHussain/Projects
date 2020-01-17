
$(function(){

/* on click navbar links */

$("nav .collapse ul li ").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
});


/* scroll to section */

$("nav .collapse ul li a").click(function(e){
	e.preventDefault();
	$("html,body").animate({
		scrollTop: $("."+$(this).data("class")).offset().top+1
	}, 1000);	
});


/* make navbar fixed */
$(window).scroll(function(){

	if($(window).scrollTop() >= $("header").outerHeight()){

	    $(".navbar").addClass("navInScroll");
	    $(".navbar-default .navbar-nav   li   a").css("color","#000");
	    $(".navbar .navbar-header .logo").attr("src","./images/logo.png");	

    }else{

    	$(".navbar").removeClass("navInScroll");
    	$(".navbar-default .navbar-nav   li   a").css("color","#ada8a8");
    	$(".navbar .navbar-header .logo").attr("src","./images/logo-white.png");

    	/* $(".navbar .collapse ul li a").hover(function(){
    		$(this).css("color","#FFF");
    	    }); */
    }

    $(".part").each(function(){

    	if($(window).scrollTop() > $(this).offset().top){
    		var ID=$(this).attr("id");
    	$("nav .collapse ul li a[data-scroll='"+ID+"']").addClass("active").parent().siblings().find("a").removeClass("active");
          
    	}
    });



});



    /* header animations */


    $("header .header-content h1").slideDown(1100,function(){
    	$("header .header-content p").slideDown(1100);
    });

});