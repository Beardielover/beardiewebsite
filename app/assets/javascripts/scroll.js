/* global $ */
$(document).ready(function() {
    var main_nav = $(".main-nav");
    var padnav = $(".padnav");
  //  var logo = $(".logo");
   // var logo2 = $(".logo2");
  //  var alertC = $(".alert");
  //  var logopic = $(".logo-pic");
    
    $(window).scroll(function(){
       /* if($(this).scrollTop() > 300)
        {*/
           /* main_nav.addClass("main-nav-scrolled");
            padnav.addClass("padnavscrolled")
            padnav.css("padding-top", 0);*/
           // logo.addClass("logo-hidden");
           // alertC.addClass("alert-scrolled");
           // logopic.addClass("logo-hidden");
        /*}
        else
        {
            padnav.css("padding-top", $('div .logo-pic').css('height'));
            main_nav.removeClass("main-nav-scrolled");
            padnav.removeClass("padnavscrolled")
          //  logo.removeClass("logo-hidden");
          //  alertC.removeClass("alert-scrolled");            
          //  logopic.removeClass("logo-hidden");
        }
        
       /*if($(this).scrollTop() > 110)
        {
            logo2.addClass("logo-hidden");
        }
        else if(logo2.hasClass("logo-hidden"))
        {
            logo2.removeClass("logo-hidden");
        }*/
    });
});