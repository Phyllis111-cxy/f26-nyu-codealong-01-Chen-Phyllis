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

**Changes:** I added six activity cards with an array and loop. I kept the page links and paper colors. After trying extra interactions, I simplified the JavaScript to focus on this week's lesson. The Calendar is now a static October example. I removed illustrations, the welcome frame, and unfinished page links to keep the prototype focused.

**Challenge:** I needed to understand the order for creating elements and placing them inside each other. The earlier version also had more JavaScript than I could comfortably explain.

**My question:** How can I add a simple time filter after I understand the card-generation loop?

**Next week:** I want to practice explaining the loop, then add a basic filter and continue the Collection and Map pages.

## Structure Audit — November 2, 2026

**Fixed today:**
- Added the missing section inventory at the top of `index.html` and a comment for the plan-ahead choices.
- Updated this README to separate what is already there from what I still need to build.

The Welcome button already links to Explore, and Calendar already has a static October layout. These were earlier fixes, not changes I made today. Each page has one main heading, and the local links and CSS/JavaScript file references point to existing files.

**Still missing (building before the layout assignment):**
- [ ] Build the Collection and Map pages.
- [ ] Make the time choices and Surprise Me work, and connect activities to Calendar and Collection.
- [ ] Compare the page sections with my Assignment 4 desktop mockup at 1440px.
- [ ] Check the font in DevTools: the CSS lists Inter, but there is no font import, so it may use a system font.
- [ ] Finish the DevTools color, style, and Console checks, and the partner spot-check.

**One thing I couldn't figure out:**
- How can I save a completed quest so it appears in both Calendar and Collection?

I checked the source code for this update. I haven't verified the browser checks or partner spot-check for this audit.

## What works now

- Open `index.html`, then use **Let's explore** or **Skip** to reach Explore.
- Explore creates all six cards from JavaScript.
- Navigation links open Calendar and Explore. Collection, Map, settings, and the plus icon are inactive.
- Time choices and Surprise Me are visual previews. They do not filter or draw a card yet.
- Calendar shows static October dates and a sample plan marker. It does not switch months or edit activities.
- Collection and Map are not built yet, so their navigation labels cannot be clicked.


## Checking and submission

Earlier Assignment 6 notes reported checks at mobile, tablet, and desktop widths (320, 390, 768, and 1440px). All six text cards appeared, Calendar/Explore links worked, and inactive controls did not navigate or open messages. The static Calendar also displayed with JavaScript disabled. Those notes reported no page/script errors in Chromium; Safari and Firefox were not checked. I have not repeated those checks for this audit.

[Current repository](https://github.com/Phyllis111-cxy/f26-nyu-codealong-01-Chen-Phyllis)
