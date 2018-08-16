jQuery(document).ready(function ($) {
    var size = "mobile";

    var setClass = function () {
        var ww = document.body.clientWidth;
        if (ww >= 801) {
            console.log("onload more than 800");
            $('svg').removeClass('fa-caret-left');
            $('svg').addClass('fa-caret-down');
            size = "desktop";
        };
    };


    var alterClass = function () {
        var ww = document.body.clientWidth;
        if ((ww >= 801) && (size = "mobile")) {
            console.log("resize above 800");
            $('svg').removeClass('fa-caret-left');
            $('svg').removeClass('fa-caret-down');
            $('svg').addClass('fa-caret-down');
            $('.panel').show();
            size = "desktop";
            console.log("Triggered mobile to desktop");
        }
        else if ((ww <= 800) && (size = "desktop")) {
            console.log("resize under 800");
            $('svg').removeClass('fa-caret-down');
            $('svg').removeClass('fa-caret-left');
            $('svg').addClass('fa-caret-left');
            $('.panel').hide();
            size = "mobile";
            console.log("Triggered desktop to mobile");
        };
    }

    // Run alterClass on window resize 
    $(window).resize(function () {
        alterClass();
        console.log("Resize function ran, new size is " + size);
    });

    // Run initial setClass when the page first loads so icons match media query:
    setClass();
    console.log("Initial size is " + size);
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
