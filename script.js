// ASSIGNMENT 6: store project content in an array of objects.


console.log("script.js is connected");
// Remember which filters the user selected
let selectedFilters = [];

const soloButton = document.getElementById("solo-filter");
const freeButton = document.getElementById("free-filter");


soloButton.addEventListener("click", function() {
  // Check if Free is already selected.
  if (selectedFilters.includes ("solo")){
    // Remove Solo but keep other filters.
  selectedFilters = selectedFilters.filter(function(item) {
  return item !== "solo";
  });
  soloButton.classList.remove("is-selected")
  } else {
    // Add Solo without removing other filters.
    selectedFilters.push("solo");
    soloButton.classList.add("is-selected")
  }
  console.log(selectedFilters);
   // Update the activity cards after clicking Solo.
  updateFilters();
  const cards = document.querySelectorAll(".quest-card");
  console.log(cards.length);
    // Check each card against the selected filters.
    cards.forEach(function(card) {
      // Get the activity data from this card.
      const quest = card.questData;

      if (
        (selectedFilters.includes("solo") && quest.solo === false) ||
    (selectedFilters.includes("free") && quest.cost !== 0) ||
    (selectedFilters.includes("1h") && quest.duration > 60) ||
    (selectedFilters.includes("budget") && quest.cost >= 20)
  ) {
        card.classList.add("is-hidden");
      } else {
        card.classList.remove("is-hidden");
      }
    }); //End forEach.
    // Count how many activity cards are visible.
    const visibleCards = document.querySelectorAll(".quest-card:not(.is-hidden)");
    // Update the number of activities on the page.
    const activityCount = document.getElementById("activity-count");
    activityCount.textContent = visibleCards.length + " activities";
  }); //End click event.


  // Change the Free filter when clicked.
  freeButton.addEventListener("click", function() {
    // Check if Free is already selected.
  if (selectedFilters.includes("free")) {
    // Remove Free but keep other filters.
    selectedFilters = selectedFilters.filter(function(item) {
      return item !== "free";
    });
    freeButton.classList.remove("is-selected");
  } else {
    // Add Free without removing other filters.
    selectedFilters.push("free");
    freeButton.classList.add("is-selected");
  }

  console.log(selectedFilters);
  // Update the activity cards after clicking Free.
  updateFilters();
});
// Check the activity cards and update the number of results.
function updateFilters() {
  const cards = document.querySelectorAll(".quest-card");
  console.log(cards.length);
    // Check each card against the selected filters.
    cards.forEach(function(card) {
      // Get the activity data from this card.
      const quest = card.questData;

      if (
        (selectedFilters.includes("solo") && quest.solo === false) ||
    (selectedFilters.includes("free") && quest.cost !== 0) ||
    (selectedFilters.includes("1h") && quest.duration > 60) ||
    (selectedFilters.includes("budget") && quest.cost >= 20)
  ) {
        card.classList.add("is-hidden");
      } else {
        card.classList.remove("is-hidden");
      }
    }); //End forEach.
    // Count how many activity cards are visible.
    const visibleCards = document.querySelectorAll(".quest-card:not(.is-hidden)");
    // Update the number of activities on the page.
    const activityCount = document.getElementById("activity-count");
    activityCount.textContent = visibleCards.length + " activities";
    } // End updateFilters.
  

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

// Find the empty container in Explore.
const container = document.getElementById("quest-container");

// The same script is linked in index.html; only Explore has this container.
if (container) {
  // Repeat these steps for each activity.
  quests.forEach(function (quest) {
    
    // 1. Create the card and its content.
    const card = document.createElement("article");
    card.className = "quest-card";
    card.questData = quest;
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

    // 2. Put the content into the card.
    copy.appendChild(category);
    copy.appendChild(title);
    copy.appendChild(duration);
    copy.appendChild(description);
    card.appendChild(copy);

    // 3. Put the finished card into the page.
    container.appendChild(card);
  });
}
