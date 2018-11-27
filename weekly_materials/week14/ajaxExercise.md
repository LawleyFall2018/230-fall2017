# Week 14 In-Class Exercise: AJAX File Loading 

## Overview & Goals
In class today, we'll walk through the process of using AJAX to load content from an external file. 

## Downloading the Files
Download the zipped archive [ajax.zip](ajax.zip), and extract the folder; it should have an HTML file (ajax-query.html) and four text files (verse1-2.txt, verse3-4.txt, verse5-6.txt, and poem.txt). 

## Making the Page Interactive - Native JavaScript
Take a look at the ajax-start.html file. It has an empty box where we want verses from the poem to display, and a select menu that currently does nothing. 

In the script tag at the bottom of page, we're going to attach an onChange event to the menu that causes it to retrieve and display the selected verses without reloading page. 

1. Start by defining three variables: 
```javascript
let verseChoose = document.querySelector('select'); // the select menu
let poemDisplay = document.querySelector('#selectedverse');  // the space for the verse to display
let verse = "verse1-2.txt" ; // the chosen verse; initialize with first menu option
```

2. Create an updateDisplay function using XMLHttpRequest that retrieves the selected file and displays it in the poemDisplay element. 

```javascript
function updateVerse(verse) {
    let verseRequest = new XMLHttpRequest();  // defines a specific request
    verseRequest.open('GET', verse);  // specifies what to do when request is sent
    verseRequest.responseType = 'text'; // specifies that the files should be treated as text
    verseRequest.onload = function () {  // specifies what to do when file is loaded
        poemDisplay.innerHTML = verseRequest.response;  // place the response text in the selected element
    };
    verseRequest.send(); // actually sends the request
};
```

3. Attach an onChange event handler to the select menu that gets the value of the current element and sends it to the updateVerse function.

```javascript
verseChoose.onchange = function () {
    verse = verseChoose.value;
    updateVerse(verse);
};
```

4. At the end of the script, initialize the value of the select form and the page to display Verse 1-2.

```javascript
    verseChoose.value = verse; // shows initial menu option
    updateVerse(verse);  // shows intial content
```

Now test the page; selecting a verse from the menu should update the page, without the page reloading. 

## AJAX with jQuery
Unsurprisingly, jQuery makes retrieving and displaying a file with AJAX easier. 

1. Save a copy of your ajax-query.html file and call it ajax-jquery.html. In the new file, add a link to jQuery in the head of your document:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

2. Now delete ***everything*** in your current script tag. 

3. Using jQuery, we'll start with the default settings for the page. We can use the .load method to send an XML HTTP Request for a file and place it in a selected element. 

```javascript
let verse = ("verse1-2.txt")  // sets default verse element
$("#verse-choose").val(verse); // changes menu option to default
$("#selectedverse").load(verse);   // retrieves only default element
```

4. Then we'll use jQuery's .change method to get the new verse when the menu changes:  

```javascript
$("#verse-choose").change(function() {
    verse = $(this).val();
    $("#selectedverse").load(verse); 
});
```

That's it! Try testing it. 

## In-Class Exercise Deliverable
Your completed jQuery version should be uploaded to your repository and linked from your landing page by the start of class on Thursday (November 29). 

## Homework Option 2: Retrieving Part of a Document with AJAX and jQuery
***If you choose this homework option (instead of the PHP homework option), it must be completed by the start of class on next Tuesday (December 4). This is separate from the in-class exercise deliverable!***

You can also use jQuery to request only a specific element in the file you retrieve, by using `load("filename elementselector")`. 

Take a look at the poem.txt file; it has all six of the verses, with each paragraph having a unique verse ID. 

1. Create a copy of your ajax-jquery.html file, and change the select menu so that it has six options, one for each of the six verses in poem.txt. The values should  be in the form "verse1", "verse2", etc. rather than file names (e.g. `<option value="verse1">Verse 1</option>`).

2. Initialize a new variable of `poem` at the start of your script (this will make it easier to change which poem you're using later): `let poem = "poem.txt";`

3. Change the default value for `verse` from "verse1-2.txt" to "verse1". 

4. Below the `verse` variable, create another new variable of `verseString` that concatenates the poem and the verse into a single string that we can pass to the load function. We need to add a "#" in front of the verse so we can select the correct paragraph id in the poem file. (Alternatively, you could have the values of the select options include the #.)
```javascript 
let verseString = (poem + " #" + verse); 
// or use ES6 templating: 
// let verseString = `${poem} #${verse}`;
```

4. Change your initial .load(verse) to .load(verseString). 

5. Test it now to make sure that your default verse loads properly. If it doesn't, check the console to see what the error is, and if you're stuck ask for help before proceeding!

6. Add the verseString construction to the `.change() function`. (The variable is already defined, so leave out the `let` !). 

7. Modify the `.load()` method in the `.change()` function to load verseString instead of verse. 

8. Once you have it all working, create your ***own*** poem text file (e.g. mypoem.txt). Make sure each verse is contained in an elementwith  the appropriate numbered, and that you have the right number of selection options in your menu.

9. Change the poem variable to point to the new poem file. Test it to make sure it works!

## Homework Deliverable
This exercise should be linked from your landing page with the name "Week 14 AJAX Exercise" by the start of class on Tuesday of week 15 (December 5). 
