# Sample Practical

[Jump to Screenshots](#finished-version) - [Jump to Grading](#grading)

Begin by downloading [fall2018sample.zip](fall2018sample.zip), which contains the .html, .css and .js files for this project. 

Do *not* edit the .html file -- all of your work should be in the .css and .js files. 

## Instructions

**Mobile Grid Layout (2 points)**
- Grid takes up 100% of viewport width
- One column that uses all horizontal space
- Rows automatically generated
- Row order of elements: 1-nav, 2-header, 3-article, 4-aside, 5-footer

**Desktop Grid Layout (2 points)**
- Grid width is 90% of the viewport width, with a max-width of 1200px
- Grid min-height is 100% of the viewport height
- Grid has three rows and three columns
- First row is 4rem high, spans all columns, and holds <header>
- Second row uses all available vertical space, and holds three elements:
    - First column takes up 1/3 of available width and holds <aside> element
    - Second column takes up 2/3 of available width and holds <article> element
    - Third column has a width of 200px and holds <nav> element
- Third row is 3rem high, spans all columns, and  holds <footer>

**CSS Formatting (2 points)**
- Header and footer use flexbox for horizontal and vertical centering of content
- Menu items have white bg, no margins, 1px solid top border the same color as <nav> background.
- Submenus have no bullets, margins, or padding, and are hidden on load
- Submenu list items have left padding of .25rem and a light gray background

**JavaScript Content Load Menu (2 points)**
- Submenus hidden on load. Clicking on a menu shows/hides associated submenu
- jQuery used to slide the menu up and down when showing/hiding

**JavaScript AJAX Content Loading (2 points)**
- Edit content1.txt to use your name and today’s date. It should be displayed in the #contents element by default when the page loads
- Selecting a menu item should display the appropriate content file
---
[Return to Top](#sample-practical) - [Jump to Grading](#grading)

## Finished Version
Here's what the finished site should look like:

![Desktop Layout](desktop.png)

![Mobile Layout](mobile.png)
 
---
[Return to Top](#sample-practical) 

## Grading

Each bulleted item is worth 1 point. You need 7/10 points to pass the exam. 

Desktop Grid
- Grid layout correct (rows & columns)
- Content elements properly placed
	
CSS formatting
- Header/footer flex formatting
- Menu formatting
	
Mobile Grid
- Grid Layout
- Content ordering
	
Nav Menus
- Shows/hides appropriate submenu on click
- Uses jQuery to slide submenus up and down
	
Aside (content) Menu
- content1.txt loads by default
- Menu options load content files properly
	
[Return to Top](#sample-practical) 

 

 

 
