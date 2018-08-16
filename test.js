jQuery(document).ready(function($) {

    var sw = document.body.clientWidth;
    var currentState;

    var setClass = function() {
      if (sw >= 801) {
        console.log("onload more than 800");
        $('svg').removeClass('fa-caret-left');
        $('svg').addClass('fa-caret-down');
        currentState = "desktop";
      }
      else {
        currentState = "mobile";
      };
    };

    var alterClass = function() {
        var ww = document.body.clientWidth;
        if ( (ww >= 801) && (currentState == "mobile") ){
          console.log("resize from mobile to desktop");
          $('svg').removeClass('fa-caret-left');
          $('svg').removeClass('fa-caret-down');
          $('svg').addClass('fa-caret-down');
          $('.panel').show();
          currentState = "desktop";
          console.log("Current state changed to " + currentState);
        }
        else if ( (ww <= 800) && (currentState == "desktop") ){
            console.log("resize from desktop to mobile");
            $('svg').removeClass('fa-caret-down');
            $('svg').removeClass('fa-caret-left');
           $('svg').addClass('fa-caret-left');  
           $('.panel').hide();  
           currentState = "mobile";
           console.log("Current state changed to " + currentState);
        };
      }

    $(window).resize(function(){
      alterClass();
    }); 

    //Fire initial setClass when the page first loads so icons match media query:
    setClass();
    console.log("Starting state is " + currentState);
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
