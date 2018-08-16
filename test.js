jQuery(document).ready(function($) {
    var setClass = function() {
      var ww = document.body.clientWidth;
      if (ww >= 801) {
        console.log("onload more than 800");
        $('svg').removeClass('fa-caret-left');
        $('svg').addClass('fa-caret-down');
      };
    };

    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww >= 801) {
          console.log("resize above 800");
          $('svg').removeClass('fa-caret-left');
          $('svg').removeClass('fa-caret-down');
          $('svg').addClass('fa-caret-down');
          $('.panel').show();
        }
        else if (ww <= 800) {
            console.log("resize under 800");
            $('svg').removeClass('fa-caret-down');
            $('svg').removeClass('fa-caret-left');
           $('svg').addClass('fa-caret-left');  
           $('.panel').hide();  
        };
      }

    $(window).resize(function(){
      alterClass();
    }); 

    //Fire initial setClass when the page first loads so icons match media query:
    setClass();
  });
  
var headings = document.querySelectorAll(".subhead");
var i;

for (i = 0; i < headings.length; i++) {
    headings[i].addEventListener("click", function () {
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        $(panel).toggle();
        $(this).children('svg').toggleClass("fa-caret-down fa-caret-left");
    });
} 
