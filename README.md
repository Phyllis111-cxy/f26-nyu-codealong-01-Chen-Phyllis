# NYC Side Quest

**Phyllis Chen — Introduction to Coding for Learning Designers**
**Live site:** Not published yet.

## Project Log

### Week 10 — November 22, 2026

**Event Plan**

- **User story:** As a student in NYC, I want to search activities by keyword so that I can quickly find an adventure that interests me.
- **The event:** An `input` event on a labeled search box on the Explore page. It fits because the activity results can update as the user types.
- **State:** A new `searchText` variable remembers what the user typed. It starts as an empty string, so the existing filters can show all matching activities before anyone searches. The existing `selectedFilters` array continues to remember which filter buttons are selected.
- **My function:** `matchesSearch(quest)` asks whether one Quest's title or description contains the search text. It takes one Quest object as a parameter and returns `true` or `false`. `render()` will use that answer along with the existing filters to decide whether to draw each card.

**What changed:**

I added a labeled search box to the Explore page. An `input` event saves what the user types in `searchText` and calls `render()`. The `matchesSearch(quest)` function checks each Quest's title and description, and `render()` uses its answer along with the existing filters to draw the matching cards and activity count. I also updated the no-results message to suggest trying another word or removing a filter.

**Why redraw on every event:**

The search text changes each time the user types or deletes a character. Calling `render()` makes the cards, activity count, and no-results message agree with the current search text and selected filters. The event handler only changes the state and calls `render()`; it does not change the page directly.

**What was hard, and what I tried:**

At first, I could not see the search box because I had opened a different HTML page in Live Server. I opened `explore.html` and found it under Quick Filter. I also located the existing filter checks inside `render()` so I could add the search check without replacing the Week 9 filters.

**What happened when I tried to break it:**

With an empty search box and no filters, all 6 activities appeared. Searching `park` showed only Central Park Picnic and a count of 1; `PARK` gave the same result. Clearing the search box restored all 6 activities. Searching `zzzz` showed 0 activities and a message suggesting what to try next. Searching `park` and selecting Solo showed 0 activities; removing Solo restored Central Park Picnic. With Free selected, 3 activities appeared, and searching `bridge` narrowed them to 2. After typing quickly and deleting everything, all 6 activities returned and the count matched the cards.

**What I learned or changed my mind about:**

I learned that the same `render()` function can use both the existing button filters and the new search text. The `matchesSearch(quest)` function answers one question for each activity, while `render()` decides what to show.

**Question for Joey:**

Is searching both the title and description a good choice for this project, or would searching categories too make the results more useful?

**Next week's goal:**

I want to improve the search box's appearance and decide what the More filter button should do.

**AI use:**

I used ChatGPT to identify where to add the HTML and JavaScript and understand how the input event, state, function, and `render()` work together. I added the code in VS Code and tested the search and filter combinations in the browser.

### Week 9 — November 16, 2026

**Render Plan**

- **User story:** As a student in NYC, I want to filter activities based on my preferences so that I can quickly find something that fits my time, budget, and plans.

- **State:** My page uses a `selectedFilters` array to remember which filters the user has selected. It starts empty, which means all six Quest cards are shown.

- **What changes it:** When the user clicks a filter button, such as Solo, Free, 1h, or Under $20, that filter is added to or removed from `selectedFilters`. Clicking All clears the selected filters.

- **What render() draws:** The `render()` function will rebuild the Quest cards on my Explore page using the array I created in Assignment 6. It will display only the cards that match the current filters.

- **The if inside the loop:** For each Quest in the array, an `if` statement will check whether it matches the selected filters. If it matches all active filters, the card will be displayed. Otherwise, it will be skipped.

- **What else render() works out:** The function will also update the number of visible Quests, highlight the selected filter buttons, and display a message when no activities match the filters.

**What changed:**

I moved the Quest card creation from a one-time loop into `render()`. The function now uses `selectedFilters` to decide which cards to draw, counts the cards it drew, updates the selected buttons, and controls the no-results message. I also connected the 1h, Under $20, and All buttons.

**Patching vs. rendering:**

Before this week, my click handlers changed button classes and hid cards that were already on the page. Now a click changes `selectedFilters` and calls `render()`, which clears the old cards and draws the matching cards, count, and button styles from the current state. The same function also draws the starting page.

**What was hard, and what I tried:**

It was hard to tell which Assignment 8 code to keep when moving the page updates into `render()`. I kept the array of Quests and the `push()` and `filter()` state changes, then removed the repeated card checks from the Solo handler and the old `updateFilters()` function. I used `if/else` and `classList.add()` / `classList.remove()` for the button styles because those are the methods I have practiced. I also kept the Explore-only check because the home page loads the same script but does not have filter buttons.

**What happened when I tried to break it:**

I checked the saved JavaScript against a simulated page. With no filters, it drew 6 cards and showed “6 activities.” Solo showed 5, Free showed 3, Solo and Free together showed 3, 1h showed 2, and Under $20 showed 5. Clicking Solo ten times returned to 6 cards with All selected; the count matched the cards in each check. In a separate zero-item check, the count became 0 and the no-results message appeared. I also confirmed these results in the browser and checked the Console on every page; I found no errors.

**What I learned or changed my mind about:**

I learned that the array and selected filters can be the source for the whole activity section, rather than changing individual cards after each click. Clearing and rebuilding the cards inside `render()` also keeps the count and button styles in agreement with the current filters.

**Question for Joey:**

Is rebuilding all six cards on every filter click a good approach for this project, or should I use a different method when the Quest list gets much larger?

**Next week's goal:**

I want to decide what the More button should do and continue building Calendar and Collection.

**AI use:**

I used ChatGPT to help me plan where to move my existing card code, understand what the `render()` code does and how to combine it with my code, and review the changes one step at a time.

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
