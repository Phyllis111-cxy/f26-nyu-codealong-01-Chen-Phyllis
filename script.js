// ASSIGNMENT 6: store project content in an array of objects.
const quests = [
  {
    "title": "Roosevelt Island Tram",
    "duration": 60,
    "category": "Scenic",
    "description": "See the city from above on the iconic red tram."
  },
  {
    "title": "Explore DUMBO",
    "duration": 120,
    "category": "Photography",
    "description": "Walk beneath the Manhattan Bridge and discover picture-perfect streets."
  },
  {
    "title": "Central Park Picnic",
    "duration": 120,
    "category": "Relaxing",
    "description": "Bring a snack and take a breather in the park."
  },
  {
    "title": "Chinatown Food Hunt",
    "duration": 120,
    "category": "Food",
    "description": "Find dumplings, bakeries, and bright streets in Chinatown."
  },
  {
    "title": "West Village Walk",
    "duration": 60,
    "category": "Exploration",
    "description": "Wander past brownstones, little shops, and leafy corners."
  },
  {
    "title": "Brooklyn Bridge Stroll",
    "duration": 180,
    "category": "Outdoor",
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
