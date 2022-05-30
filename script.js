
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
          $('.navbar-expand-lg').addClass("sticky");
        }else{
         $('.navbar-expand-lg').removeClass("sticky");
        }
    });
 
    //toggle menu/navbar script
    $('.menu-btn').click(function (){
        $('.navbar .navbar-nav').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
 });

 //preloader section
    var loader = document.getElementById("preloader");

    window.addEventListener("load",function(){
        loader.style.display="none"
    })