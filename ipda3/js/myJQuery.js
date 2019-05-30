$(function(){
    
      $("html").niceScroll();
 
      $(".loading-screen").css("display","none");
      $("body").css("overflow","none");
    
      
    
    
    // include navbar and footer
         $("#includeNavbar").load("include.html #navCon");
         $("#includeFooter").load("include.html #footerCon");
    
    // header section h1 && image animation
    $("header .container .header-img,header .container h1 ").css({
        
        "-webkit-transform":"translateX(0)",
         "-moz-transform":"translateX(0)",
         "-o-transform":"translateX(0)",
        "transform":"translateX(0)",
        
        "-webkit-transition" :"1s",
        "-moz-transition" :"1s",
        "-o-transition" :"1s",
        "transition" :"1s"
    });
    
    
    $(window).scroll(function(){
        
        // about us section image && desc text animation on scroll animation
        
        if($(this).scrollTop() >= 500){
            
            $(".about-us .about-us-img, .about-us .about-us-desc").css({
                "-webkit-transform":"translateX(0)",
                "-moz-transform":"translateX(0)",
                "-o-transform":"translateX(0)",
                "transform":"translateX(0)",
                
                "transition" :".8s"
              });
        }
        
        
        // articles section content animation on scroll animation
        
        if($(this).scrollTop() >= $(".articles-section").offset().top-100){
            
            $(".articles-section .container").css({
                "-webkit-transform":"translateX(0)",
                "-moz-transform":"translateX(0)",
                "-o-transform":"translateX(0)",
                "transform":"translateX(0)",
                
                "transition" :".8s"
                
              })/*.promise().done(function(){
                $(".articles-section .container").delay(900).css({
                "-webkit-transform":"translateX(0)",
                "-moz-transform":"translateX(0)",
                "-o-transform":"translateX(0)",
                "transform":"translateX(0)",
                   
                "transition" :".8s"
              });
                 })*/;
        }
        
       
        // show scroll to top button 
        
        if($(this).scrollTop() > $(".about-us").offset().top){
            
            $(".scroll-to-top").fadeIn();
            
        }else{
            $(".scroll-to-top").fadeOut();
        }
      
       });
    
    
      // scroll to top button  event
         $(".scroll-to-top").click(function(){
             $("body,html").animate({
                 scrollTop :0    
             },1000);

         });
    
     //pagination
    $(".pagination .number a").click(function(){
        
        $($(this).attr('href')).css("display","block").siblings().css("display","none");
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    
       // next button
         
           var activeElementLi;
    $(".pagination .next a").click(function(){
        
         activeElementLi= $(this).parent().siblings(".active");
        var nextElementLi= activeElementLi.next(".number");
        var nextOfShownDivID= nextElementLi.find('a').attr('href');
     
        nextElementLi.addClass("active").siblings().removeClass("active");
        $(nextOfShownDivID).css("display","block").siblings().css("display","none");
        
    });
    
        // previous button
    $(".pagination .prev a").click(function(){
        
         activeElementLi= $(this).parent().siblings(".active");
        var previousElementLi= activeElementLi.prev(".number");
        var prevOfShownDivID= previousElementLi.find('a').attr('href');
       
        previousElementLi.addClass("active").siblings().removeClass("active");
        $(prevOfShownDivID).css("display","block").siblings().css("display","none");
        
    });
   
   // show full article
    
    var  parent, img, thisArticle, thisTitle; 
    $(".show-article-button").click(function(){
        
              parent = $(this).closest(".article");
              img=$(parent).find("img").attr("src");
              thisArticle=$(parent).find("p").text();
              thisTitle=$(parent).find("h3").text();
        
           localStorage.setItem("image",img);
           localStorage.setItem("article",thisArticle);
           localStorage.setItem("title",thisTitle);
        
           location.href="one-full-article.html";
        
         
        
     /*
       */
   
        
    });
    
    // on click work 

var desc, title;
$(".all-Works-show .work, .our-works .our-works-content .work").click(function(){

     desc=$(this).find(".workDesc").text();
     title=$(this).find("h3").text();

     localStorage.setItem("workDesc",desc);
     localStorage.setItem("workTitle",title);


      location.href="one-work.html";
});

      $(".app-show .breadcrumb li").text(localStorage.getItem("workTitle"));
      $(".work-details-section .details-content .container p").text(localStorage.getItem("workDesc"));

 
});
