# Reading List
* [Introduction to HTML and CSS](https://docs.google.com/document/d/17JHG2MQQeKfSQCXto_gyRp6d0--kGQlgnVQtsapSAQ0/edit?usp=sharing)

# Exercises

## 1. Fix me
1. Copy and paste the starter code from the `1 Fix me` folder into your IDE.
  * The code is in two files, `index.html` and `styles.css`. You should create a copy of each and make sure they are both in the same folder.
2. This code has errors in it. Look through the code and...
  * Fix any missing tags, missing brackets, spelling mistakes, etc.
  * Make sure the code is indented and spaced properly.
  * Add comments explaining what each line does.
3. The end result should look like this.

![Image not found](<1 Fix Me/end-result.png>)

## 2. Conflicts
Consider the code below and answer the following questions:
1. What is the font size of paragraph 2?
2. What is the text colour of paragraph 3?
3. What is the background colour of paragraph 4?

**conflicts.html**
```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Conflicts</title>
        <link rel="stylesheet" href="conflicts.css">
    </head>
    <body>
        <h1>Conflicts</h1>
        <p>
            ...paragraph 1…
        </p>
        <p class="fancy">
            ...paragraph 2…
        </p>
        <p class="fancy dark">
            ...paragraph 3…
        </p>
        <p id="the-one-and-only" class="dark">
            ...paragraph 4…
        </p>
    </body>
</html>
```

**conflicts.css**
```css
body {
    font-family: Georgia, serif;
    color: #123456
}

p {
    font-size: 1.1rem;
}

.fancy {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 2;
    color: darkgoldenrod;
}

.dark {
    background-color: black;
    color: lightgoldenrodyellow;
}

#the-one-and-only {
    background-color: darkblue;
}
```

## 3. Poem
Find (or write) a poem and turn it into a web page.
* The poem must consist of multiple lines and stanzas.
* Add the poem’s title as a first-rank heading.
* Style the page using colour- and text-related CSS properties to express your interpretation of the poem.

## 4. Recipe
Find (or write) a recipe and turn it into a web page.
* The recipe must consist of at least two sections: _ingredients_ and _preparation_.
* Use an unordered list for the ingredients and an ordered list for the preparation.
* Style the page using colour and text-related CSS properties. Aim for an elegant-looking design.

## 5. Advanced Markup
Read [this guide](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting) on advanced text semantics on MDN.
* Complete the active learning sections.
* Complete the skill test linked at the end of the guide.

## 6. Marking Up a Letter
Complete [this assessment](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter) by MDN. The starter code can be found in the `6  Marking Up a Letter` folder.

As we haven’t covered hyperlinks yet, ignore the requirement to add links. Also ignore the requirement to specify the author of the letter 'in an appropriate meta tag', or find out how to do that by reading ['What’s in the head? Metadata in HTML'](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)

## 7. Your Website
Create a web page based on your interests. You might choose to make a blog post, a wiki page, a biography, a short story, your CV, etc.