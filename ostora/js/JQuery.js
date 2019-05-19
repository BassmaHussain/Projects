$(function(){
    
    /* on click navbar links */


     $("nav .collapse ul li ").click(function(){
         
         if($(this).parent().hasClass("nav-side1")){
             
              $(this).addClass("active").siblings().removeClass("active");
              $("nav .collapse ul.nav-side2 li ").removeClass("active");
             
         }
         
         if($(this).parent().hasClass("nav-side2")){
             
              $(this).addClass("active").siblings().removeClass("active");
              $("nav .collapse ul.nav-side1 li ").removeClass("active");
             
         }
         
     });
    
    
});