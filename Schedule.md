# IGME-230 Web Design &amp; Implementation, Fall 2017: Schedule of Topics

## Contents
- [Week 0 (Before Class Begins)- Review Basic HTML/CSS](#week0)
- [Week 1 (Aug 28/30): Course Overview, Expectations, & Tools; Basic Web Server Operation](#week1)
- [Week 2 (Sep 5/7): HTML & CSS Beyond the Basics: Semantic HTML, CSS Box Model, Complex Selectors](#week2)
- [Week 3 (Sep 12/14): Web Server Basics & Version Control](#week3)
- [Week 4 (Sep 19/21): Designing for the Web](#week4)
- [Week 5 (Sep 26/28): Responsive Design & CSS Media Queries](#week5)
- [Week 6 (Oct 3/5): Advanced CSS Formatting: CSS Flexbox, Complex Selectors, and HTML Forms](#week6)
- [Week 7 (Oct 12): Web Frameworks](#week7)
- [Week 8 (Oct 17/19): CSS Transitions, Animations & Menus; SVG](#week8)
- [Week 9 (Oct 24/26): JavaScript for Web Interactivity](#week9)
- [Week 10 (Oct 31/Nov 2): Simple JavaScript Web Applications](#week10)
- [Week 11 (Nov 7/9): JQuery & JQueryUI](#week11)
- [Week 12 (Nov 14/16): Specialized JavaScript Libraries](#week12)
- [Week 13 (Nov 21): Web Accessibility](#week13)
- [Week 14 (Nov 28/30): Web Content Management & Hosting Environments](#week14)
- [Week 15 (Dec 5/7): .htacces Authentication, Basic PHP & Practical Exam](#week15)
- [Finals Week: Makeup Practical Exam](#finals)

## <a name="week0"> (Before class begins): Review HTML and CSS From Prior Classes</a>
All students in this class are expected to have familiarity with basic HTML and CSS. I will not be reviewing basic concepts in this class, so if it's been a while since you've taken a class that covers it (IGME-110 for NMID students, NMDE-103 for NMD students), you may need to get yourself up to speed before we begin. I recommend either of these tutorials:
- [Lynda.com HTML Essential Training](https://www.lynda.com/HTML-tutorials/HTML-Essential-Training/170427-2.html?org=rit.edu), sections 1-7 (requires RIT login)
-  [Mozilla Developers Network (MDN) Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn), HTML and CSS sections. 

On the Saturday after classes begin (September 1), I will offer an optional HTML/CSS/FTP "bootcamp" that you are welcome to attend if you'd like some extra help getting back up to speed on the concepts. Details will be provided in the class Slack. 


## <a name="week1">Week 1</a> (Aug 29/31): Overview: Syllabus, Expectations, Tools
On Tuesday, I will review the syllabus, goals, and requirements for class, and discuss the tools and technologies we'll be using for communication, collaboration, and content creation. On Thursday, we'll talk about how web servers process the requests they receive from browsers, and how you can use .htaccess files to modify that behavior. We'll also discuss hosting options, both at and outside of RIT. 

- **Tuesday Readings**
  - [Course Syllabus](README.md)
  - [Slack Guides: Getting Started for New Users](https://get.slack.help/hc/en-us/articles/218080037-Getting-started-for-new-users)
  - [Chrome DevTools Overview](https://developer.chrome.com/devtools)

- **[Tuesday Exercise](weekly_materials/week1/toolsExercise.md)**
  - In this exercise, you'll set up your GitHub account, set up an account on the class Slack, and configure either Visual Studio Code or Brackets for use in class. 

- **Thursday Readings**
  - [MDN: What is a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
  - [.htaccess-Guide](http://www.htaccess-guide.com/)
  - [Comprehensive guide to .htaccess](http://www.javascriptkit.com/howto/htaccess.shtml)

- **[Thursday Exercise](weekly_materials/week3/htaccessExercise.md)**
  - In today's exercise, you'll create an .htaccess file for your banjo.rit.edu account. 

## <a name="week2">Week 2</a> (Sept 4/6): Git, GitHub, and GitHub Pages 
This week we'll talk about version control using Git, the web service GitHub, and publishing websites on GitHub using the GitHub Pages functionality. You will need to have set up your GitHub account and sent us your username to be able to complete the in-class exercise.  

- **Tuesday Readings**
  - [Lynda.com: GitHub for Web Designers, Chapters 1-3](https://www.lynda.com/GitHub-tutorials/GitHub-Web-Designers/162276-2.html?org=rit.edu) - I highly recommend starting on this early. 
  
- **[Tuesday Exercise](weekly_materials/week3/github-exercise.pdf)**
  - In this exercise, you'll work with two different GitHub repositories to learn how to submit a pull request to a repository controlled by someone else, and how to collaboratively edit a file with other users. 

## <a name="week3">Week 3</a> (Sept 11/13): HTML & CSS: Beyond the Basics
This week we'll take a deeper dive into aspects of HTML and CSS that aren't covered in the prereq classes: semantic HTML,  complex CSS selectors, and CSS positioning.

- **Tuesday Readings**


- **[Tuesday Exercise](./weekly_materials/week2/advancedMarkupExercise.md)**
  - We will revisit the file we worked on last week, adding additional CSS formatting.
 
- **Thursday Readings**

  
- **[Thursday Exercise](./weekly_materials/week2/cssPositioningExercise.md)**
  - We will use CSS positioning to modify the layout of an HTML file 

[Project 1](projects/project1.md) (a landing page for your classwork) is due by midnight (11:59pm) on Friday, September 14th) 
  


## <a name="week4">Week 4</a> (Sep 19/21): Designing for the Web
When we talk about "web design," we're actually talking about a much wider range of concepts than graphic design--we're also talking about interaction design, usability, and accessibility. This week we'll talk about the range of design issues related to the web. On Tuesday we'll focus on the design process as a whole.

- **Tuesday Readings**
  - [Interaction Design Basics](https://www.usability.gov/what-and-why/interaction-design.html)
  - [The Elements of User Experience](http://www.jjg.net/elements/pdf/elements.pdf)
  - [Making Material Design (6 min video)](https://www.youtube.com/watch?v=rrT6v5sOwJg)
  - [How Google fixed its design process and started making beautiful apps (7 min video)](https://www.youtube.com/watch?v=VDNngQjN6o4)

- **Optional Thursday Readings**
  - [Design Aesthetics for the Web (from Lynda.com)](https://www.lynda.com/Design-Techniques-tutorials/Design-Aesthetics-Web/506078-2.html?org=rit.edu)
  - [Introduction to Graphic Design (Lynda.com)](https://www.lynda.com/Graphic-Design-tutorials/Introduction-Graphic-Design/419419-2.html?org=rit.edu)
  
- **[Tuesday/Thursday Exercise](weekly_materials/week4/designProcessExercise.md)**
  - In today's exercise, you'll create an initial design document for your personal portfolio site. 
  

- **Resource Links**
  - Flow Chart Tools
    - [Draw.io](http://draw.io/) - Free, web-based flowcharting tool
    - Google Drawings and Microsoft Word and PowerPoint have flowcharting symbols available
    - Microsoft Visio is available on lab computers
    - Many of the wireframing tools linked below also have flowcharting stencils & tools

  - Wireframing Tools
    - Downloadable paper templates: [Sneakpeekit](http://sneakpeekit.com/), [Smashing Magazine List](https://www.smashingmagazine.com/2010/03/free-printable-sketching-wireframing-and-note-taking-pdf-templates/)
    - [UI Stencils (Analog)](http://www.uistencils.com/collections/stencils) (Amazon has other options)
    - [Yahoo UI Stencil Kit](https://developer.yahoo.com/ypatterns/about/stencils/) - Available in multiple formats
    - [Cacoo](https://cacoo.com/lang/en/tour) - Web-based. Free for ≤6 diagrams, I've requested an edu license for the class
    - [Balsamiq](https://balsamiq.com/) - Desktop for Mac and Windows. Free for 30 days. [License good until 20 May 2017 has been posted in our myCourses shell.](https://mycourses.rit.edu/d2l/le/news/633310/449029/view)

  - Prototyping and Comp/Mockup Tools
    - [Style Tiles Approach](http://styletil.es/) - Alternative to graphics-heavy comps
    - [Axure](https://www.axure.com/edu) - Available on IGM lab computers, free license for students
    - [Invision](https://www.invisionapp.com/) - Free web-based tool
    - [Design the Web: Layer Comps](https://www.lynda.com/Photoshop-tutorials/Using-Layer-Comps-Show-Interactive-States/114904-2.html?org=rit.edu) - Lynda.com tutorial on using Photoshop for comps
    
  - Visual Design Tools
    - [A Simple Web Developer's Color Guide](https://www.smashingmagazine.com/2016/04/web-developer-guide-color/)
    - [Adobe Color CC](https://color.adobe.com/create/color-wheel/) - Tool for creating harmonious color palettes


- **Thursday Exercise** : In class you'll get critiques from your peers (and in some cases, from the professor). Those critiques should be used to update your design document as needed before turning it in on Sunday.

## <a name="week5">Week 5</a> (Sep 26/28): Responsive Design & CSS Media Queries
Mobile devices now make up more than half of the traffic to major websites. And it's still the case that people regularly print out web pages for a variety of reasons. That means web designers need to make sure their pages work on a variety of screens, and in print format--not just on high-resolution computer monitors. The process of creating HTML and CSS that will adapt to a variety of devices is called responsive design. CSS Media Queries allow responsive design to work more effectively by determining how/where the page will be displayed. 

- **Tuesday Readings**
On Tuesday we'll start looking at using CSS to create different versions of a page for different media types.  
  - [Lynda.com CSS Fundamentals: Media Types & Queries](https://www.lynda.com/CSS-tutorials/Media-types-media-queries/417645/484795-4.html?org=rit.edu) - This was included in the CSS Fundamentals tutorial from week 2, but for review, you should look at the portion of that tutorial dealing with the topic.
  - [A Comprehensive Introduction to Grids in Web Design](https://webdesign.tutsplus.com/articles/a-comprehensive-introduction-to-grids-in-web-design--cms-26521) - A good overview of the importance of grids in web design. 
 
 - **[Tuesday Exercise](./weekly_materials/week5/cssPrintExercise.md)** - In this exercise, you'll create a print media query for a web-optimized resume. 

- **Thursday Readings**
On Thursday we'll dive more deeply into responsive design concepts.
  - [Lynda.com: Responsive Design Fundamentals](https://www.lynda.com/Web-Responsive-Design-tutorials/Responsive-Design-Fundamentals/104969-2.html?org=rit.edu) - Like the "CSS Fundamentals" tutorial from week 2, this is not a hands-on tutorial--instead, it is an overview of what responsive design is, why it's important, and how it's typically implemented. In class, we'll have a hands-on exercise applying these concepts. 

- **[Thursday Exercise](./weekly_materials/week5/responsiveExercise.md)** - In this exercise, you'll create two sets of styles for a web page--one optimized for full-size browsers, and the other optimized for mobile. 

 
## <a name="week6">Week 6</a> (Oct 3/5): CSS Flexbox, Complex Selectors, and Styling HTML Forms
On Tuesday, we'll talk about complex CSS selectors, and will cover the basics of creating and styling HTML forms (which you'll need when we start coding with JavaScript). On Thursday, we'll look at CSS Flexbox, a better CSS-based approach to creating flexible, responsive page layouts.  

- **Tuesday Readings**
   - [MDN: The native form widgets](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/The_native_form_widgets)
  - [Google Developers: Build Amazing Forms](https://developers.google.com/web/fundamentals/design-and-ui/input/forms/)

- **[Tuesday Exercise](weekly_materials/week6/formsExercise.md)**: You'll be creating and styling a complex HTML form. In addition to the MDN "native form widgets" reading for today, these resources will be helpful:
  - [W3Schools HTML Forms](https://www.w3schools.com/html/html_forms.asp)
  - [W3Schools CSS Selectors Reference](https://www.w3schools.com/cssref/css_selectors.asp)
  - [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

- **Thursday Readings**
Start with the MDN and CSS Tricks readings (they're not very long) so that you get a good sense of what FlexBox is and how it works. Then take a look at the [Solved by Flexbox]() site to see some specific examples of Flexbox in action. 

Note: While <a href="http://caniuse.com/#feat=flexbox">browser support for Flexbox</a> is pretty well established at this point, it's still necessary to use <a href="http://shouldiprefix.com/">browser prefixes</a> if you need your page to work reliably in older browsers. 

  - [MDN: Using CSS Flexible Boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
  - [CSS Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  - [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/)

- **[Thursday Exercise](weekly_materials/week6/flexboxExercise.md)**: For today's exercise, you'll be using Flexbox to create a page using the 3-column "Holy Grail" layout model. I will be out of town, but the TA will be avilable in our classroom to help with the exercise if you need it. 

## <a name="week7">Week 7</a> (Oct 12): Web Frameworks
Many responsive websites are built using pre-existing frameworks of CSS and JavaScript that enable the developer to focus on content and design rather than the underlying code necessary for responsive functionality.  

Tuesday is a reading day, so we will not have class that day. I will be available for one-on-one meetings to provide feedback on your portfolio projects. 

Reminder: Your portfolio project is due on 10/15!

- **Thursday Readings**
  - [CSS Frameworks & Grids](https://www.lynda.com/CSS-tutorials/CSS-Frameworks-Grids-2016-Q3-REVISION/504266-2.html?org=rit.edu) - You don't need to do the exercises, just watch the videos. 
  - [About Materialize](http://materializecss.com/about.html) - This is the framework you'll be using for this week's exercise
 
- **[Thursday Exercise](weekly_materials/week7/frameworkExercise.md)**: In this exercise you'll create a complex, responsive web page layout using a CSS Framework.


## <a name="week8">Week 8</a> (Oct 17/19): CSS Transitions & Animations; Scalable Vector Graphics
On Tuesday, we'll look at how CSS can be used to create transitions and animations. On Thursday, we'll talk about Scalable Vector Graphics on the web. 

- **Tuesday Readings**
  - [Lynda.com CSS:Animation](https://www.lynda.com/CSS-tutorials/CSS-Animation/439683-2.html?org=rit.edu)

- **[Tuesday Exercise](weekly_materials/week8/cssAnimationExercise.md)**: You'll be applying what you learned in the CSS Animation tutorial to the framework-based page you created with Materialize. 

- **Thursday Readings**
  - [Lynda.com: Learning SVG](https://www.lynda.com/SVG-tutorials/Learning-SVG/622089-2.html?org=rit.edu) - Watch *only* Sections 1 and 2 (Core Principles, and Anatomy of an SVG). 

- **[Thursday Exercise](weekly_materials/week8/svgExercise.md)**: Some basic practice with SVG graphics.

## <a name="week9">Week 9</a> (Oct 24/26): JavaScript for Web Interactivity
This week we'll start using JavaScript to implement interactivity in websites.  

- **Tuesday Readings**
  - [MDN: Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
  - [Lynda.com Javascript Essential Training, sections 1-5](https://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/574716-2.html?org=rit.edu) - Budget ~2.5-3 hours for watching these. Those of you with stronger programming background may be able to skim through some of the more basic programming material.  

- **Tuesday and Thursday Exercises**
  - [Introduction to JavaScript 1: Working with the Console](weekly_materials/week9/js1-console.md)
  - [Introduction to JavaScript 2: Working with the Web DOM](weekly_materials/week9/js2-DOM.md)
  - [Introduction to JavaScript 3: More Web DOM Methods](weekly_materials/week9/js3-DOM2.md)
  - [JavaScript Functions](weekly_materials/week9/js4-functions.md)
  - [Javascript Events](weekly_materials/week9/js5-events.md)

## <a name="week10">Week 10</a> (Oct 31/Nov 2): JavaScript: Beyond the Basics

- **Tuesday Tutorials**
  - [JavaScript Object Literals](weekly_materials/week10/js6-objectliterals.md)
  - [JavaScript Arrays](weekly_materials/week10/js7-arrays.md)

- **Tuesday Homework**
  - [Pixel Artist Application](weekly_materials/week10/js7hw-pixel-artist.md)

- **Thursday Tutorials**
  - [JavaScript Web Storage](weekly_materials/week10/js8-webstorage.md)
  - [JavaScript Web Services](weekly_materials/week10/js9-webservices.md)

- **Thursday Homework**
  - [GIF Finder Application](weekly_materials/week10/js9hw-gif-finder.md)

## <a name="week11">Week 11</a> (Nov 7/9): JQuery & JQueryUI
A great deal of the Javascript on the web uses a freely-available library of code called JQuery (which, in fact, was originally written by an RIT student!). This week we'll look at JQuery (and its sister library, jQueryUI), and learn how to use it in your web pages. 

- **Tuesday Exercises**
  - [Magnetic Poetry Exercise 1](weekly_materials/week11/mag-poetry1.md): You'll learn how to write a magnetic poetry JavaScript app.
  - [Magnetic Poetry Exercise 2](weekly_materials/week11/mag-poetry2.md): You'll modify the app to use jQueryUI.

## <a name="week12">Week 12</a> (Nov 14/16): Specialized JavaScript Libraries
On the [Project 4 Resource Page](projects/project4-resources.md, I've provided links to a )number of JS libraries that give you the ability to create interactive graphics, and tutorials for many of them. You'll be choosing one of them (or another JS library that you think will be more useful for your proposed project), and completing a tutorial or a demo page using it.  

[Week 12 Exercise](weekly_materials/week12/p4prepExercise.md) - This week's instructions and deliverables. 

## <a name="week13">Week 13</a> (Nov 21): Web Accessibility
On Thursday we'll talk about accessibility for the web, and I'll have you do some accessibility assessments of web pages. 

- **Tuesday Readings**
  - [Web Accessibility Initiative: Diversity of Web Users](https://www.w3.org/WAI/intro/people-use-web/diversity)
  - [Web Content Accessiblity Guidelines (WCAG) At-A-Glance](https://www.w3.org/WAI/WCAG20/glance/Overview)

- **[Tuesday Exercise](weekly_materials/week13/accessibilityExercise.md)**: You'll assess several web pages for accessiblity problems. 

## <a name="week14">Week 14</a> (Nov 28/30): Web Content Management & Hosting Environments
While this course focuses primarily on front-end web development, almost all modern web development depends on server-side functionality as well. In some cases, that functionality is custom-designed and built--but in many other cases, it's provided by standard software packages that run on the server, like WordPress or Drupal. We'll also discuss the variety of hosting options available for web pages and applications. 

- **Tuesday Resources**
  - [MDN: Publishing Your Website](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Publishing_your_website)
  - [GitHub Pages](https://pages.github.com/)
  - [PC Magazine: Best Web Hosting Services of 2017](https://www.pcmag.com/article2/0,2817,2424725,00.asp)

- **[Thursday Exercise](weekly_materials/week14/githubPagesExercise.md)**: You'll be creating personal and project based GitHub Pages sites. 


## <a name="week15">Week 15</a> (Dec 5/7): .htaccess Authentication, Simple Server-Side Coding & Practical Exam
On Tuesday we'll talk about server-side authentication and simple server-side programming using PHP. On Thursday, you'll take the practical exam. 

- **[Tuesday Exercise](weekly_materials/week15/phpAndAuthExercise.md)**: .htaccess Authentication & Basic PHP functions

- **[Optional Exercise](weekly_materials/week15/phpEmailExercise.md): Creating a Contact Form with a PHP Script**: I've created an *optional* exercise that teaches you how to make a working contact form for your site that generates an email message. This will not be graded, nor will it be on the practical exam, but it's a useful thing to know how to do. 

## <a name="finals">Finals Week</a>: Practical Exam Makeup & Final Project Due
If you fail the final practical exam in week 15 (with a score lower than 7/10), you will need to take the makeup version during our final exam time slot. 

Your [final individual project](projects/project4.md) will be due this week. 
