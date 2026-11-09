# NYC Side Quest

**Phyllis Chen — Introduction to Coding for Learning Designers**
**Live site:** Not published yet.

## Project Log

### Week 8 — November 8, 2026

**State Plan**

- **User story:** As a student in NYC with limited free time and budget, I want to filter activities based on my preferences so that I can find something that works for me more easily.
- **What does the page remember?** Which filters the user has selected, such as Solo and Free.
- **What does it start at?** An empty array (`selectedFilters = []`). All six activities are displayed, and no filters are selected.
- **What changes it?** Clicking the Solo or Free buttons adds or removes a filter from the array.
- **What does the user see?** The selected buttons turn yellow, activities that do not match the filters disappear, and the activity count changes.
- **What does the `if/else` decide?** It checks whether a filter is already selected and whether each activity matches the selected conditions. Based on the result, the page shows or hides activity cards.

**What changed:**

I added interactive Solo and Free filters to the Explore page. I used a `let` variable called `selectedFilters` to remember the user's choices.

I used `addEventListener()` to respond to clicks and `if/else` to check the state. I also added CSS classes to change the button colors and hide activities that do not match the filters.

I connected the filtering logic to the activity cards from Assignment 6 and added an activity count that updates based on the results.

**What was hard, and what I tried:**

At first, the Solo button turned yellow, but the activity cards did not disappear. I realized I needed a CSS rule for `.is-hidden`.

I also had problems with missing brackets and using `quest` before defining it. I fixed these by checking the code and Console step by step.

Another challenge was making Solo and Free work together. At first, selecting Free replaced Solo in the array. I changed the code to use `push()` and `filter()` so the page could remember more than one filter.

I also moved the filtering logic into `updateFilters()` so both buttons could use it.

**What happened when I tried to break it:**

I tested clicking Solo repeatedly to check whether the button and activity cards returned to their original state. During development, I found that the button color could change without hiding the cards. After adding the CSS rule, the Solo filter correctly hid the activities that did not match.

I also found that changing from Solo to Free could replace the previous selection. I changed the array logic to keep the selected filters separately.

I still need to do a final test of repeated clicks and different filter combinations before submitting.

**What I learned or changed my mind about:**

I learned that changing a JavaScript variable does not automatically update the webpage. I need to change the state and then update the visible elements.

I also learned more about arrays, `push()`, `filter()`, `addEventListener()`, `if/else`, and `classList`.

At first, I thought each filter needed its own card-filtering code. Later, I realized it would be better to use the same filtering logic for multiple buttons.

**Question for Joey:**

Is there a simpler way to manage multiple filters as the project grows, without repeating too much JavaScript?

**Next week's goal:**

I want to connect the remaining filters, such as 1h and Under $20, and test different filter combinations. I also want to continue working on Calendar and Collection.

**AI use:**

I used ChatGPT to help me understand JavaScript concepts such as arrays, `push()`, `filter()`, `addEventListener()`, and `if/else`.

I also used it to help debug syntax errors, understand why my activity cards were not updating, and organize my filtering code. I reviewed and edited the code in Codespaces while testing it in the browser.

The activity-filtering idea came from my NYC Side Quest design. I used AI to support my coding and learning process, not to decide what the project should do.

---
## Previous Project Logs

Assignment 6 — My Data and JavaScript
I store six NYC activities in an array of objects. Each activity has a title, duration, category, and description. I later added Solo and cost information for filtering.

In script.js, I find quest-container in explore.html and use forEach() to go through the activities. For each one, document.createElement() creates the card and its content. I add the words with textContent, then use appendChild() to put everything together and add the card to the page.

Both index.html and explore.html use this script, but only Explore has the activity container. The card-generation code checks whether the container exists before creating cards.

Weekly Update — Assignment 6
Changes: I added six activity cards using an array and a loop. Calendar shows a static October example.

Challenge: I needed to understand which elements to create first and how to put them inside the card.

My question: How can I add a simple time filter after I understand the loop?

My plan at the time: Practice explaining the loop, then try a basic filter and work on Collection and Map.
Structure Audit — November 2, 2026
Fixed during the audit:
- Added a list of page sections at the top of index.html and a comment for the plan-ahead choices.
- Updated this README to show what works and what is unfinished.
The Welcome button links to Explore, and Calendar has a static October layout. Each page has one main heading. The local links and CSS/JavaScript references point to files in the project.

Audit checklist:
- Build Collection and Map.
- Make the time choices and Surprise Me work, and connect activities to Calendar and Collection.
- Compare the page sections with my Assignment 4 desktop mockup at 1440px.
- Check the heading font in the browser. On Windows/Edge, it uses Segoe UI Black instead of Inter. I am keeping the current font for now.
- Check colors, Grid layout, and the Console at 375px and 1440px. The paper background is #F1EEE7, the yellow is #FFC83D, and the navigation fill has 35% opacity. No Console or script errors appeared during this audit.
- Complete the partner spot-check.
I still need to check the font and colors against my Figma style tile. Collection, Map, and the extra interactions are planned for later.

Something I still need to learn: How can I save a completed quest so it appears in both Calendar and Collection?
Assignment 7 — Weekly Update
Changes: I used a one-column Grid for the outer layout of Explore and Calendar. I replaced the header's bottom margin with a 24px Grid gap. I added a layout plan and comments explaining the card and calendar grids. The time choices, section heading row, and navigation still use Flexbox. Cards stay in two columns on small screens and change to three at 700px.

Challenge: I had to remove the old header margin so it would not add extra space on top of the Grid gap. I also found that listing Inter in the CSS does not mean the browser is actually using it.

Next steps at the time: Check the responsive rule and spacing against my Assignment 4 notes. Prepare the 1440px comparison screenshot and a layout note of no more than 150 words. The page-section comparison and partner spot-check were completed.
