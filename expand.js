jQuery(document).ready(function ($) {

  var sw = document.body.clientWidth;
  var currentState;
  var navbar;
  var sticky;

  var setClass = function () {
    if (sw >= 801) {
      console.log("onload more than 800");
      $('svg').toggleClass('fa-caret-left fa-caret-down');
      $('i').toggleClass('fa-caret-left fa-caret-down');
      console.log("Toggled class");
      currentState = "desktop";
    }
    else {
      currentState = "mobile";
    };
  };

  var getMenuPos = function () {
    navbar = $("#menu");
    var offset = navbar.offset();
    sticky = offset.top;
  }



  var alterClass = function () {
    var ww = document.body.clientWidth;
    if ((ww >= 801) && (currentState == "mobile")) {
      console.log("resize from mobile to desktop");
      $('i').removeClass('fa-caret-left');
      $('i').removeClass('fa-caret-down');
      $('i').addClass('fa-caret-down');
      $('.panel').show();
      currentState = "desktop";
      console.log("Current state changed to " + currentState);
    }
    else if ((ww <= 800) && (currentState == "desktop")) {
      console.log("resize from desktop to mobile");
      $('i').removeClass('fa-caret-down');
      $('i').removeClass('fa-caret-left');
      $('i').addClass('fa-caret-left');
      $('.panel').hide();
      currentState = "mobile";
      console.log("Current state changed to " + currentState);
    };
  }

  $(window).resize(function () {
    alterClass();
    getMenuPos();
  });

  //Run initial setClass when the page first loads so icons match media query:
  setClass();

  //Run initial getMenuPos when page loads
  getMenuPos();

  $(window).scroll(function () {
      if (window.pageYOffset >= sticky) {
        $( navbar ).addClass( "sticky" );
      } else {
        $( navbar ).removeClass( "sticky" );
      }
  });


});

var headings = document.querySelectorAll(".subhead");
var i;

for (i = 0; i < headings.length; i++) {
  headings[i].addEventListener("click", function () {
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    $(panel).toggle();
    $(this).children('i').toggleClass("fa-caret-down fa-caret-left");
  });
} 

    // Check navbar location
    
