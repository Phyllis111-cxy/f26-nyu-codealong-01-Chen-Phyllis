// ASSIGNMENT 6: store project content in an array of objects.


console.log("script.js is connected");
// Remember which filters the user selected
let selectedFilters = [];

const soloButton = document.getElementById("solo-filter");
const freeButton = document.getElementById("free-filter");
// Find the Quest card container. It exists on Explore, but not on the home page.
const container = document.getElementById("quest-container");
// Run filter interactions only on the Explore page.
if (container) {
// Find the count and the remaining filter buttons.
const activityCount = document.getElementById("activity-count");
const emptyMessage = document.getElementById("empty-message");
const hourButton = document.getElementById("hour-filter");
const budgetButton = document.getElementById("budget-filter");
const allButton = document.getElementById("all-filter");
// Week 10: Read what the user types in the activity search box.
const searchInput = document.getElementById("quest-search");

searchInput.addEventListener("input", function(event) {
  console.log(event.target.value);
});

soloButton.addEventListener("click", function() {
  // Check if Solo is already selected.
  if (selectedFilters.includes ("solo")){
    // Remove Solo but keep other filters.
  selectedFilters = selectedFilters.filter(function(item) {
  return item !== "solo";
  });
  } else {
    // Add Solo without removing other filters.
    selectedFilters.push("solo");
  }
  console.log(selectedFilters);
     // Redraw the cards, count, and selected buttons from the new state.
  render();
  }); //End click event.


  // Change the Free filter when clicked.
  freeButton.addEventListener("click", function() {
    // Check if Free is already selected.
  if (selectedFilters.includes("free")) {
    // Remove Free but keep other filters.
    selectedFilters = selectedFilters.filter(function(item) {
      return item !== "free";
    });
  } else {
    // Add Free without removing other filters.
    selectedFilters.push("free");
  }

  console.log(selectedFilters);
  // Redraw the cards, count, and selected buttons from the new state.
  render();
});

// Toggle the one-hour filter.
hourButton.addEventListener("click", function () {
  if (selectedFilters.includes("1h")) {
    selectedFilters = selectedFilters.filter(function (item) {
      return item !== "1h";
    });
  } else {
    selectedFilters.push("1h");
  }
  render();
});

// Toggle the under-$20 filter.
budgetButton.addEventListener("click", function () {
  if (selectedFilters.includes("budget")) {
    selectedFilters = selectedFilters.filter(function (item) {
      return item !== "budget";
    });
  } else {
    selectedFilters.push("budget");
  }
  render();
});

// Clear all filters.
allButton.addEventListener("click", function () {
  selectedFilters = [];
  render();
});

// render: draws Quest cards, the count, and selected buttons from selectedFilters.
function render() {
  // Clear the old cards so they are not added twice.
  container.innerHTML = "";
  let shown = 0;

  // Go through the Assignment 6 Quest array.
  quests.forEach(function (quest) {
    let matches = true;

    // Check each selected filter against this Quest.
    if (selectedFilters.includes("solo") && quest.solo === false) {
      matches = false;
    }
    if (selectedFilters.includes("free") && quest.cost !== 0) {
      matches = false;
    }
    if (selectedFilters.includes("1h") && quest.duration > 60) {
      matches = false;
    }
    if (selectedFilters.includes("budget") && quest.cost >= 20) {
      matches = false;
    }

    // Build a card only when this Quest matches all selected filters.
    if (matches === true) {
      const card = document.createElement("article");
      card.className = "quest-card";

      const category = document.createElement("span");
      category.className = "category-sticker";
      category.textContent = quest.category;

      const copy = document.createElement("div");
      copy.className = "quest-text";

      const title = document.createElement("h3");
      title.className = "quest-title";
      title.textContent = quest.title;

      const duration = document.createElement("p");
      duration.className = "quest-meta";
      duration.textContent = quest.duration + " minutes · " + quest.category;

      const description = document.createElement("p");
      description.className = "quest-description";
      description.textContent = quest.description;

      copy.appendChild(category);
      copy.appendChild(title);
      copy.appendChild(duration);
      copy.appendChild(description);
      card.appendChild(copy);
      container.appendChild(card);

      shown = shown + 1;
    }
  });

  // Update the count from the cards added above.
  activityCount.textContent = shown + " activities";

  // Show a message when no Quest matches the selected filters.
  if (shown === 0) {
    emptyMessage.classList.remove("is-hidden");
  } else {
    emptyMessage.classList.add("is-hidden");
  }

  // Update button styles from selectedFilters.
  if (selectedFilters.includes("solo")) {
    soloButton.classList.add("is-selected");
  } else {
    soloButton.classList.remove("is-selected");
  }

  if (selectedFilters.includes("free")) {
    freeButton.classList.add("is-selected");
  } else {
    freeButton.classList.remove("is-selected");
  }

  if (selectedFilters.includes("1h")) {
    hourButton.classList.add("is-selected");
  } else {
    hourButton.classList.remove("is-selected");
  }

  if (selectedFilters.includes("budget")) {
    budgetButton.classList.add("is-selected");
  } else {
    budgetButton.classList.remove("is-selected");
  }

  if (selectedFilters.length === 0) {
    allButton.classList.add("is-selected");
  } else {
    allButton.classList.remove("is-selected");
  }
}
  

const quests = [
  {
    "title": "Roosevelt Island Tram",
    "duration": 60,
    "category": "Scenic",
    "solo": true, 
    "cost": 3,
    "description": "See the city from above on the iconic red tram."
  },
  {
    "title": "Explore DUMBO",
    "duration": 120,
    "category": "Photography",
    "solo": true,
    "cost": 0,
    "description": "Walk beneath the Manhattan Bridge and discover picture-perfect streets."
  },
  {
    "title": "Central Park Picnic",
    "duration": 120,
    "category": "Relaxing",
    "solo": false,
    "cost": 15,
    "description": "Bring a snack and take a breather in the park."
  },
  {
    "title": "Chinatown Food Hunt",
    "duration": 120,
    "category": "Food",
    "solo": true,
    "cost": 25,
    "description": "Find dumplings, bakeries, and bright streets in Chinatown."
  },
  {
    "title": "West Village Walk",
    "duration": 60,
    "category": "Exploration",
    "solo": true,
    "cost": 0,
    "description": "Wander past brownstones, little shops, and leafy corners."
  },
  {
    "title": "Brooklyn Bridge Stroll",
    "duration": 180,
    "category": "Outdoor",
    "solo": true,
    "cost": 0,

    "description": "Cross the bridge for skyline views and a mini adventure."
  }
];
// Draw the starting page from selectedFilters.
render();
} // End Explore-only code.
