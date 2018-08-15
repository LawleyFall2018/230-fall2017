var headings = document.querySelectorAll("main h2");
var i;

for (i = 0; i < headings.length; i++) {
    headings[i].addEventListener("click", function () {
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        $(panel).toggle();
    });
} 
