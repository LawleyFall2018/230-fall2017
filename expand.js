$(document).ready(function () {

  function expandAll() {
    $('i.fa-angle-left').toggleClass('fa-angle-left fa-angle-down');
    $('.panel').show();
  }

  function collapseAll() {
    $('i.fa-angle-down').toggleClass('fa-angle-left fa-angle-down');
    $('.panel').hide();
  }

  function checkWidth() {
    if (window.innerWidth >= 801) {
      expandAll();
    } else {
      collapseAll();
    }
  }

  checkWidth();   // set panels properly on load


  $('#expandAll').click(expandAll);

  $('#collapseAll').click(collapseAll);

  // toggle icon and panel when clicking on an individual subhead
  $('.subhead').click(function () {
    $(this).find("i").toggleClass('fa-angle-left fa-angle-down');
    $(this).next().toggle();
  });


  // sticky navbar 
  let menu = document.querySelector("#menu");
  let bodyRect = document.body.getBoundingClientRect();
  let menuRect = menu.getBoundingClientRect();
  let menuOffset = menuRect.top - bodyRect.top;

  let toc = document.querySelector("#toc");
  let tocRect = toc.getBoundingClientRect();
  let tocOffset = tocRect.top - bodyRect.top;

  $(window).scroll(function () {
    if (window.pageYOffset >= menuOffset) {
      $(menu).addClass("sticky");
    } else {
      $(menu).removeClass("sticky");
    }

    if ((window.pageYOffset >= (tocOffset - 50)) && (window.innerWidth >= 801)) {
      $(toc).addClass("stickytoc");
    } else {
      $(toc).removeClass("stickytoc");
    }
  });



  $('#toc-wrapper a').click(function () {
    // jQuery smooth scroll to target, -50px for menubar
    let target = $(this.hash);
    $('html, body').animate({ scrollTop: target.offset().top - 50 }, 1000);

    // Open panel for selected section 
    $(target).next("i").removeClass("fa-angle-left").addClass("fa-angle-down");
    $(target).parent().next(".panel").show();

    // Make this more accessible by setting target.focus(); 
    // See https://css-tricks.com/smooth-scrolling-accessibility/ for details

    if (target.is(":focus")) { // Checking if the target was focused
       return false;
     } else {
       target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
       target.focus(); // Setting focus
     };


  });

  $("textarea").each(function () {
    this.style.height = (this.scrollHeight) + 'px';
  });

});
