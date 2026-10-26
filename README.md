# NYC Side Quest

**Phyllis Chen · Introduction to Coding for Learning Designers: Concepts & Coding**
**Assignment 5 — HTML/CSS foundation + Assignment 6 — Create Repeating HTML Elements with JavaScript**

NYC Side Quest helps people turn unexpected free time into a small NYC adventure. The longer-term idea is to turn completed adventures into collectible stamps and memories.

## Run the project

No build step, account, API key, or package installation is required.

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/index.html`, choose your available time, then select **Let’s explore**. **Skip** opens Explore with its remembered/default filters. To review Assignment 6 directly, open `http://localhost:8000/explore.html`. The HTML files can also be opened directly in a modern browser.

**Repository for Canvas:** https://github.com/Phyllis111-cxy/f26-nyu-codealong-01-Chen-Phyllis

## Design reference

[Figma — NYC Side Quest mockups](https://www.figma.com/design/MfJCpVKbzRV3SSYDU4AQB2/Phyllis-Chen-%E2%80%94-Assignment-4-%E2%80%94-NYC-Side-Quest)

This is the existing Assignment 4 Figma file. The later cream-paper and glass-navigation visual references informed this week's Explore implementation; this update does not claim that the Figma frames have been updated.

- Welcome, Calendar, and Explore: the same warm-paper background `#F1EEE7` and existing Inter/system sans-serif stack. Yellow `#FFC83D` is an accent for selections and actions.
- Content pages: warm paper `#F1EEE7`, with a separate repeating paper-grain SVG.
- Explore cards: warm cream `#FCFAF5`; text `#171717`.
- Explore bottom navigation: white at **35% opacity**, `backdrop-filter: blur(20px)`; the icons and text remain opaque. Order: Calendar → Explore → Collection → Map, plus a separate + button.
- Explore grid: two columns below 700px, three columns from 700px; extra bottom padding lets the final cards scroll above the fixed navigation.
- Explore illustrations remain the existing local SVG assets. Welcome and Calendar use a new transparent watercolor pigeon based on the supplied reference; the Calendar park/brownstone drawings remain prototype SVGs, and coffee/bagel stamps are lightweight local SVG illustrations.

## Assignment 5: HTML/CSS foundation

The five linked pages use semantic header, navigation, main, and section elements, a shared external stylesheet, responsive desktop/mobile rules, and the time-selection welcome screen. Assignment 6 builds on that foundation below. Collection and Map remain structural prototypes; Calendar now has a working month grid with explicit demo records; this is not the full app shown in the long-term design. The complete original assignment rubrics were not available during this migration, so this README documents implemented concepts rather than claiming a rubric score.

## Assignment 6: dynamic activity cards

`explore.html` contains an initially empty **`#quest-container`**. The cards are created by `script.js`, rather than copied into the HTML.

The `quests` array contains **six objects**: Roosevelt Island Tram, Explore DUMBO, Central Park Picnic, Chinatown Food Hunt, West Village Walk, and Brooklyn Bridge Stroll. Each object has an `id`, `title`, `duration` in minutes, `category`, `description`, `image`, `companions`, and `times`.

The rendering sequence is:

1. `document.getElementById()` selects the empty container.
2. `getMatchingQuests()` filters the array using the selected time and companion option.
3. `renderQuests()` clears the previous cards with `replaceChildren()`.
4. `forEach()` loops over the matching objects.
5. `document.createElement()` creates an `article`, image, category label, title, metadata, and buttons.
6. `textContent` inserts text; image and accessibility attributes are assigned separately.
7. `appendChild()` places the elements inside each card and the cards inside the container.

### Working interactions

- **1 hour / 2 hours / Half a day:** show activities lasting at most 60 / 120 / 240 minutes. The default two-hour view contains five cards; the three-hour bridge walk appears in Half a day or See all.
- **Tonight / This weekend:** match the activity's time tags, rather than treating these date ranges as durations. These tags are demo suggestions, not live availability.
- **Companions:** filters by `companions`. All six current examples support both solo and friends, so either selection currently returns the same matching set.
- **See all / Match my time:** toggles the duration/date-tag constraint while retaining the companion choice.
- **Reset filters:** restores two hours and any companion.
- **Surprise Me arrow:** opens one random activity from the current results.
- **Activity title:** opens a named, keyboard-accessible native dialog. Close or Escape dismisses it.
- **Heart:** toggles a favorite for the current page session and keeps its state during filtering. Favorites reset after a full reload and are separate from completed collectible stamps.
- **Navigation:** uses the original HTML page URLs. Explore filters and scroll position are retained in session storage when leaving and returning, where storage is available.
- Empty results and disabled JavaScript have explanatory messages.

## Weekly update

**Key changes:** Integrated the Assignment 6 activity data and dynamic rendering into the existing `explore.html`. Preserved the multipage structure; the later reference update replaces Welcome and Calendar as described below. Added the latest Explore styling in a separate stylesheet so its header, button, and navigation rules do not change the welcome page. Fixed a missing CSS media-query closing brace that had restricted secondary-page styles to mobile widths. Replaced the welcome page's broken Add Quest link with a working Find a Quest link to Explore.

**Implementation challenges:** The generated draft used one HTML page with hash navigation, while last week's repository used five HTML files. The integration needed to retain those original URLs and avoid CSS selector collisions. Rerendering also needed to clear old cards without losing favorite state or duplicating results.

**Questions:** Should future filtering include travel time and accessibility? What data structure should connect a planned activity, its actual completion date, and its collectible stamp?

**Goal for next week:** Build the planning and completion flow so completed activities can appear in both Calendar and Collection, and continue refining the illustrations against the design reference.

**AI assistance:** ChatGPT helped adapt the previously generated Assignment 6 draft to this repository, implement and review the JavaScript/CSS, run browser checks, and prepare this README. The code is organized around the course's array, loop, and DOM-creation concepts so it can be reviewed and explained.

## Scope

Collection and Map retain their placeholder content. Calendar now renders actual month dates with four sample completed memories across three neighborhoods and one sample plan in October 2026; other months show their own correct dates and counts. The greeting/date is a labeled demo profile matching the reference, not the live date. Planning, adding a quest, completion stamps, live map navigation, accounts, and durable favorites are future features. The corresponding Explore controls display explicit demo feedback. No action silently marks a quest complete. Activity suggestions do not include live opening hours, travel time, ticket prices, or current service information.

## Files

| File | Purpose |
| --- | --- |
| `index.html`, `welcome.js` | Reference-based time selection; passes the chosen time to Explore |
| `explore.html` | Explore structure, filters, empty dynamic container, dialog, bottom navigation |
| `script.js` | Activity data, filtering, card creation, favorites, dialog, session filter restoration |
| `explore.css` | Explore-specific responsive layout and latest visual tokens |
| `style.css` | Existing welcome and secondary-page styles, with media-query fix and paper background |
| `calendar.html`, `calendar.js` | Monthly grid, month switching, demo stamps/plans, date details, computed summaries |
| `pages.css` | Welcome/Calendar layouts; inherits Explore typography and design tokens |
| `collection.html`, `map.html` | Secondary-page placeholders |
| `assets/` | Local activity illustrations, pigeon icon, and paper grain |
| `docs/course-setup.md` | Preserved original course-template setup instructions |

## Validation

Verified on October 26, 2026 using headless Chromium and Playwright against a local HTTP server:

- Tested all five HTML pages at **320, 390, 768, and 1440px**; no horizontal overflow and no broken local navigation links.
- The original migration checked a yellow welcome page. The latest reference update now verifies warm paper on Welcome, Calendar, and Explore.
- Checked all time options (2 / 5 / 6 / 3 / 6 matching cards), both companion options, See all, reset, and repeated rerendering without duplicates.
- Checked save/unsave, favorite state during filtering, activity details, Escape to close, matching Surprise Me results, and explicit feedback for future features.
- Verified the empty-result message with an isolated synthetic unmatched filter, and the no-JavaScript notice with scripting disabled.
- Verified that Explore filters and scroll position survive navigation to Calendar and back.
- Confirmed the 2/3-column grid, decoded local illustrations, paper-grain background, **35% white nav fill**, and **20px blur** in computed browser styles.
- No uncaught JavaScript errors or failed page/asset HTTP responses during these checks. `node --check script.js` and `git diff --check` also pass.

This verification covers Chromium at the tested sizes; Safari and Firefox were not tested.

## Structure Audit — October 26, 2026

**Inventory (current implementation, top to bottom):**
- Welcome: Back/Skip navigation → time question → duration/date options → watercolor pigeon → Let’s explore CTA.
- Explore: header → introductory hero → free-time and companion filters → Surprise Me banner → dynamic activity cards → bottom navigation → quest-details dialog.
- Calendar: shared header → demo greeting → month controls and seven-column calendar → completed/planned legend → computed monthly summary → demo note → shared glass navigation → date dialog.
- Collection: header/navigation → introductory heading → sticker collection placeholder → quest cards placeholder.
- Map: header/navigation → introductory heading → map placeholder → visited locations placeholder.

**Fixed today:**
- Corrected the welcome page's “Let's explore” link to `explore.html` instead of `calendar.html`.
- Corrected the `index.html` inventory to reflect the implemented hero and illustration placeholder; the original inventory listed a footer that was not in the HTML.
**Verified in repository source:**
- All four navigation destinations have corresponding HTML files.
- `explore.html` references `script.js` with `defer`.
- The eight referenced local SVG assets exist in `assets/`.

**Still missing (building before the layout assignment):**
- [x] Replace the old welcome screen with the supplied time-selection reference and watercolor pigeon.
- [x] Pass the welcome time selection into Explore’s existing filters.
- [x] Build the Calendar monthly grid, month switching, sample stamps/plans, and date details.
- [ ] Build Collection cards/stamps and Map content beyond placeholders.
- [ ] Compare the actual 1440px rendered page against the Assignment 4 PDF in DevTools and resolve remaining visual/content discrepancies.

**One thing I couldn't figure out:**
- I’m still figuring out how to connect planned and completed activity records across Calendar and Collection. Calendar currently uses explicit sample records.

**Audit scope:** This pass inspected repository source files and assets. Browser-computed fonts, console errors, and a partner's spot-check were not independently re-tested during this audit. The separate October 26 Assignment 6 Chromium checks are documented under Validation above.

## Welcome and Calendar reference update — October 26, 2026

- Replaced the old yellow welcome/taxi placeholder with the supplied time-question design, selected chips, Back/Skip, watercolor pigeon, and yellow continue button.
- Inherited `explore.css` unchanged: identical font stack, paper/grain, ink, yellow, and Calendar glass navigation (35% white, 20px blur). No webfont substitution was added.
- Added a correctly aligned month grid, previous/next month controls including year rollover, clickable date details, demo completed stamps/planned rings, and counts computed from completed records.
- An explicit welcome selection overrides the remembered Explore time; the companion filter remains intact. The initial query is consumed so later visits use current saved filters.
- The Calendar plus button opens Explore; no demo action silently marks an activity completed. There is still no system-calendar sync, account system, or editing of calendar records.
- AI assistance: ChatGPT implemented these changes and generated the transparent pigeon illustration from the supplied visual reference.
- Browser verification: all five pages at 320/390/768/1440px; all five welcome options; Calendar weekday alignment, month lengths/year rollover, demo counts, date dialogs, navigation, computed shared fonts/background/texture and glass styles; reran Explore regression checks. No uncaught JavaScript or failed page/asset responses. Safari/Firefox remain untested.

## Submission

Commit and push this existing repository, then submit its **GitHub Repository URL** to Canvas. Use the repository URL above, rather than a Codespaces URL or a local preview address.
