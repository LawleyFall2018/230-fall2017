jQuery(document).ready(function ($) {

  var sw = document.body.clientWidth;
  var currentState;
  var navbar;
  var sticky;

  var setClass = function () {
    if (sw >= 801) {
      console.log("onload more than 800");
      $('.fa-angle-left').toggleClass('fa-angle-left fa-angle-down');
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
      $('.fa-angle-left').toggleClass('fa-angle-left fa-angle-down');
      $('.panel').show();
      currentState = "desktop";
      console.log("Current state changed to " + currentState);
    }
    else if ((ww <= 800) && (currentState == "desktop")) {
      console.log("resize from desktop to mobile");
      $('.fa-angle-down').toggleClass('fa-angle-down fa-angle-left');
      $('.panel').hide();
      currentState = "mobile";
      console.log("Current state changed to " + currentState);
    };
  }

  $('#expandAll').click(function () {
    $('.fa-angle-left').toggleClass('fa-angle-left fa-angle-down');
    $('.panel').show();
  });

  $("#collapseAll").click(function () {
    $('.fa-angle-down').toggleClass('fa-angle-down fa-angle-left');
    $('.panel').hide();
  });


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
      $(navbar).addClass("sticky");
    } else {
      $(navbar).removeClass("sticky");
    }
  });

  $('#toc-wrapper a').click(function () {
    var target = $(this.hash);
    $('html, body').animate({ scrollTop: target.offset().top - 50 }, 1000);
    return false;
  });

});

var headings = document.querySelectorAll(".subhead");
var i;

for (i = 0; i < headings.length; i++) {
  headings[i].addEventListener("click", function () {
    /* Toggle between hiding and showing the active panel */
    var angle = $(this).children('i');
    console.log(angle);
    angle.toggleClass('fa-angle-left fa-angle-down');
    var panel = this.nextElementSibling;
    $(panel).toggle();

  });

  $(function () {
    $("textarea").each(function () {
      this.style.height = (this.scrollHeight) + 'px';
    });
  });
}


