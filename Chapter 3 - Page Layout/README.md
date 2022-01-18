# Reading List
* [Document and website structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
* [The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
* [Values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
* [Sizing items in CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
* [Normal flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)
* [Floats](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats)
* [Positioning](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning)

# Additional Resources
* [Screen Reader Demo](https://youtu.be/q_ATY9gimOM)
* [CSS Navigation Bar](https://www.w3schools.com/css/css_navbar.asp)
* [CSS Dropdowns](https://www.w3schools.com/css/css_dropdowns.asp)

# Exercises

## 1. Structuring a Page of Content (MDN)
Complete the [Structuring a page of content](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content) exercise from MDN.

The starter files can be downloaded from the webpage and are also included in the exercise folder.

## 2. Fundamental layout comprehension (MDN)
Complete the [Fundamental layout comprehension](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension) exercise from MDN. Ignore the requirement to use flexbox and grid layout. We have not covered these and they are beyond the scope of the module.

The starter files can be downloaded from the webpage and are also included in this chapter's exercise folder. The `Solutions` folder also includes a solution.

## 3. Menu Bar Aesthetic
The `index.html` provided is a fake online shopping website. However, the menu bar HTML is not styled correctly. Edit `styles.css` so that it looks like this (the browse button is what each button should look like when hovered over).

![Image not found. Try looking in the exercises folder.](<2 Menu Bar Aesthetic/menu-demo-screenshot.png>)

* The CSS rules you need to use are already included under the `/* Navigation */` section of `styles.css`. It is your task to populate these rules with the correct CSS properties.
* Each button should have a width of `23%`, and a left and right margin of `1%`.
* The curved corners of the button should have a radius of `10px`.
* The hexadecimal colour codes for the website's brand colours are included at the top of `styles.css`.

## 4. Fabulous Deals!
Take your solution from exercise 3. Edit `index.html` and `styles.css` so the page includes a promotional banner at the bottom of the page. The banner should:
* Tell the user what the offer is.
* Have a button that links to the page the offer is on (you do not need to link to a real page).
* Be fixed to the bottom of the user's screen even as they scroll through the webpage.
* Use semantically correct elements.
* Be styled to fit with the rest of the page.

*Bonus step: If you already know JavaScript, add a button to the banner that when pressed causes the banner to disappear. If you don't know JavaScript, don't worry! We'll learn JavaScript later in the module.*

## 5. The Meme Stash
This exercise has three levels of difficulty. You may choose which one you want to do.

### Tips:
* For each level, you will need to create a CSS stylesheet to style the `index.html` file.
* To style different sections in different ways, you will need to use CSS class selectors.
e.g.
```css
.meme-comments {
    ...
}
```
* You may need to add `div` elements to `index.html` with custom class attributes, which you can then style using CSS.
* For each level, you will need to edit `index.html` to use semantically correct elements. When you do, don't forget to edit the closing tag of each element!

### Level 1:
* First, look through `index.html` and replace all `<PLACEHOLDER>` elements with their correct semantic element. You should use the `<article>`, `<section>`, `<main>`, `<header>`, `<nav>` and `<aside>` elements.
* Then, create a CSS stylesheet and link it to `index.html` using a `link` element. Style it with different fonts, font sizes, text colours, and backgrounds. The solution for this level gives examples of CSS features you might use, and what they do.

### Level 2:
* First, look through `index.html` and replace all `<PLACEHOLDER>` elements with their correct semantic element. You should use the `<article>`, `<section>`, `<main>`, `<header>`, `<nav>` and `<aside>` elements.
* Then, Style `index.html` to recreate the page layout below. Text and background styling is up to you. (The blue button is being hovered over by the mouse.)

![Image not found. Try looking in the exercises folder.](<5 The Meme Stash/level-2-demo-screenshot.png>)

### Level 3:
* Complete level 2, then see if you can condense your CSS to 90 lines of code or less.
* You must stick to good formatting conventions. Comments do not count towards the line count, but blank lines do.
* The level 2 solution uses exactly 90 lines.

## 6. Thinking About Upgrades!
Imagine the owners of https://www.buckinghambooks.com have hired you to update the website. They would like to keep their branding roughly the same, but would like the website to look more modern and be more useful to their users.

Complete the following steps one at a time:

1. Write down 6-10 **specific** changes you might make to the website. These might relate to:
  * Font and colour choices
  * Page layout
  * How users navigate the website
  * What pages the site does and does not have
2. For each change, write down why you would make that change. Why is it important, or how would it make the website better?
3. Imagine the owners might not have enough budget to pay for the website to be completely updated. Order your list of changes from most to least worth spending money on.

*(5 pages from the website have been saved to the exercise folder, in case the website has been updated since this exercise was written)*

## 7. What To-do?
HTML and CSS are most commonly used to create traditional websites, but are also used in web applications such as email clients, Google Docs, Evernote, and more.

Imagine you are making a web application for managing to-do lists. Use HTML and CSS to mock-up what one page of this app might look like.

* Your page should contain **at least**:
  * one menu
  * one to-do list
  * one 'bar' (e.g. a menu bar, or an information bar)
* You should **focus on the structure and visual layout** of the webpage (e.g. how elements are positioned and sized).
* You do not need to focus on the visual aesthetic (e.g. colour and font choice).
* Your HTML should **use semantically correct elements**.
* If you are taking it, you may want to think about what you have learned in the User Experience Design module when creating your layout.
* You do not need to make the page interactive, e.g. you do not need any working buttons or features

## 8. Revise Your Work
* Now that you know how to structure page content and can create more interesting layouts, revise your solutions to exercises from previous weeks.
* In particular, work on the multipage website you built in week 2.
