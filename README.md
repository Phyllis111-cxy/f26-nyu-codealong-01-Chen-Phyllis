# NYC Side Quest

**Phyllis Chen — Introduction to Coding for Learning Designers**

## My project and mockups

NYC Side Quest helps people find small adventures in New York when they have free time.

[My Assignment 4 Figma mockups](https://www.figma.com/design/MfJCpVKbzRV3SSYDU4AQB2/Phyllis-Chen-%E2%80%94-Assignment-4-%E2%80%94-NYC-Side-Quest)

Design update: my newer pages use a warm paper background, yellow accents, a transparent bottom navigation. Some Figma frames still show the older design.

## Assignment 6: my data and JavaScript

I have an array of six NYC activities. Each object contains a title, duration, category, and description.

In `script.js`, I select the empty `quest-container` in `explore.html`. A `forEach()` loop goes through the array. For each activity, `document.createElement()` makes the card, heading, category label, and paragraphs. I use `textContent` for the text. Finally, `appendChild()` puts the elements inside the card and adds the card to the page.

The script is linked in both `index.html` and `explore.html`. Because my project has several pages, the activity container is on Explore. The script checks for that container before creating cards. This differs from the checklist example that puts the dynamic container on the index page.

## This week's update

**Changes:** I added six activity cards with an array and loop. I kept the page links, paper colors, and illustrations. After trying extra interactions, I simplified the JavaScript to focus on this week's lesson. The Calendar is now a static October example. I removed illustrations, the welcome frame, and unfinished page links to keep the prototype focused.

**Challenge:** I needed to understand the order for creating elements and placing them inside each other. The earlier version also had more JavaScript than I could comfortably explain.

**My question:** How can I add a simple time filter after I understand the card-generation loop?

**Next week:** I want to practice explaining the loop, then add a basic filter and continue the Collection and Map pages.

## What works now

- Open `index.html`, then use **Let's explore** or **Skip** to reach Explore.
- Explore creates all six cards from JavaScript.
- Navigation links open Calendar and Explore. Collection, Map, settings, and the plus icon are inactive.
- Time choices and Surprise Me are visual previews. They do not filter or draw a card yet.
- Calendar shows static October dates and a sample plan marker. It does not switch months or edit activities.
- Collection and Map are not built yet, so their navigation labels cannot be clicked.


## Checking and submission

I checked all five pages at mobile, tablet, and desktop widths (320, 390, 768, and 1440px). All six text cards appeared, Calendar/Explore links worked, and inactive controls did not navigate or open messages. The static Calendar also displayed with JavaScript disabled. These Chromium checks found no page/script errors; Safari and Firefox were not checked.

[Current repository](https://github.com/Phyllis111-cxy/f26-nyu-codealong-01-Chen-Phyllis)
