$(function(){
    $(".one-article-section .content img").attr("src",localStorage.getItem("image"));
    $(".one-article-section .content p").text(localStorage.getItem("article"));
    $(".one-article-section .breadcrumb li").text(localStorage.getItem("title"));
    
    
    
    $(".one-article-section .content").css({
                "-webkit-transform":"translateY(0)",
                "-moz-transform":"translateY(0)",
                "-o-transform":"translateY(0)",
                "transform":"translateY(0)",
                
                "transition" :"1s"
                
              });
    
     $(".all-Works-show .container").css({
                "-webkit-transform":"translateX(50px)",
                "-moz-transform":"translateX(50px)",
                "-o-transform":"translateX(50px)",
                "transform":"translateX(50px)",
                
                "transition" :".8s"
                
              }).promise().done(function(){
         
                $(this).delay(1400).css({
                "-webkit-transform":"translateX(0)",
                "-moz-transform":"translateX(0)",
                "-o-transform":"translateX(0)",
                "transform":"translateX(0)",
                   
                "transition" :".8s"
              });
               });  
    
    
    $(".app-show .app-image").css({
        
                "-webkit-transform":"translateX(0) rotate(0)",
                "-moz-transform":"translateX(0) rotate(0)",
                "-o-transform":"translateX(0) rotate(0)",
                "transform":"translateX(0) rotate(0)",
                
                "transition" :"1.3s"
        
    });

///////////////////////////////////////////////////
      

      $(document).keydown(function(event) {
                switch (event.keyCode) {
                    case 37:{
                         $(".workSlider .default").removeClass("default").prev(".img").addClass("default").prevAll().
                        css({
                            "transform":"scale(1.5)",
                            
                        }).nextAll().
                        css({
                            "transform":"scale3D(0,0,1)"
                            
                        });

                         
                       
                      }
                    break;
                    
                    case 39: {
                        
    
                         $(".workSlider .default").removeClass("default").next(".img").addClass("default").nextAll().
                        css({
                            "transform":"scale(1.5)"
                            
                        }).nextAll().
                        css({
                            "transform":"scale3D(0,0,1)"
                            
                        });
                    }
                     break;
                    
                }
            });


});
