# NYC Side Quest

**Phyllis Chen — Introduction to Coding for Learning Designers**

## My project and mockups

NYC Side Quest helps people find small adventures in New York when they have free time.

[My Assignment 4 Figma mockups](https://www.figma.com/design/MfJCpVKbzRV3SSYDU4AQB2/Phyllis-Chen-%E2%80%94-Assignment-4-%E2%80%94-NYC-Side-Quest)

My newer pages have a warm paper background, yellow accents, and a transparent bottom navigation bar. Some Figma frames still show the older design.

## Assignment 6: my data and JavaScript

I store six NYC activities in an array. Each activity has a title, duration, category, and description.

In `script.js`, I find `quest-container` in `explore.html` and use `forEach()` to go through the activities. For each one, `document.createElement()` creates the card and its content. I add the words with `textContent`, then use `appendChild()` to put everything together and add the card to the page.

Both `index.html` and `explore.html` use this script, but only Explore has the activity container. The script checks whether the container exists before creating cards.

## Previous update — Assignment 6

**Changes:** I added six activity cards using an array and a loop. I simplified the JavaScript so I could focus on the card-generation code. I also removed illustrations and links to unfinished pages. Calendar shows a static October example.

**Challenge:** I needed to understand which elements to create first and how to put them inside the card. The earlier version had more JavaScript than I could explain clearly.

**My question:** How can I add a simple time filter after I understand the loop?

**My plan at the time:** Practice explaining the loop, then try a basic filter and work on Collection and Map.

## Structure Audit — November 2, 2026

**Fixed today:**

- Added a list of page sections at the top of `index.html` and a comment for the plan-ahead choices.
- Updated this README to show what works and what is unfinished.

The Welcome button links to Explore, and Calendar has a static October layout. Each page has one main heading. The local links and CSS/JavaScript references point to files in the project.

**Audit checklist:**

- [ ] Build Collection and Map.
- [ ] Make the time choices and Surprise Me work, and connect activities to Calendar and Collection.
- [x] Compare the page sections with my Assignment 4 desktop mockup at 1440px.
- [x] Check the heading font in the browser. On Windows/Edge, it uses Segoe UI Black instead of Inter. I am keeping the current font for now.
- [x] Check colors, Grid layout, and the Console at 375px and 1440px. The paper background is #F1EEE7, the yellow is #FFC83D, and the navigation fill has 35% opacity. No Console or script errors appeared.
- [x] Complete the partner spot-check.

I still need to check the font and colors against my Figma style tile. Collection, Map, and the extra interactions will wait while I finish the Assignment 7 layout.

**Something I still need to learn:** How can I save a completed quest so it appears in both Calendar and Collection?

## This week's update — Assignment 7

**Changes:** I used a one-column Grid for the outer layout of Explore and Calendar. I replaced the header's bottom margin with a 24px Grid gap. I added a layout plan and comments explaining the card and calendar grids. The time choices, section heading row, and navigation still use Flexbox. Cards stay in two columns on small screens and change to three at 700px.

**Challenge:** I had to remove the old header margin so it would not add extra space on top of the Grid gap. I also found that listing Inter in the CSS does not mean the browser is actually using it.

**Next steps:** Check the responsive rule and spacing against my Assignment 4 notes. Prepare the 1440px comparison screenshot and a layout note of no more than 150 words. The page-section comparison and partner spot-check are done; the unfinished features are for later.

## What works now

- Open `index.html` and click **Let's explore** or **Skip** to go to Explore.
- Explore creates all six cards from JavaScript.
- Calendar and Explore navigation links work.
- Collection, Map, settings, and the plus icon are not active yet.
- Time choices and Surprise Me are only visual previews for now.
- Calendar shows static October dates and a sample plan marker. It cannot switch months or edit activities yet.

[Current repository](https://github.com/Phyllis111-cxy/f26-nyu-codealong-01-Chen-Phyllis)
