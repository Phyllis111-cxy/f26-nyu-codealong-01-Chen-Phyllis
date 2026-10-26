/* Assignment 6: one array of NYC quest objects drives every Explore card. */
const quests = [
  {id:1,title:"Roosevelt Island Tram",duration:60,category:"Scenic",description:"See the city from above on the iconic red tram.",image:"assets/tram.svg",companions:["solo","friends"],times:["tonight","weekend"]},
  {id:2,title:"Explore DUMBO",duration:120,category:"Photography",description:"Walk beneath the Manhattan Bridge and discover picture-perfect streets.",image:"assets/dumbo.svg",companions:["solo","friends"],times:["weekend"]},
  {id:3,title:"Central Park Picnic",duration:120,category:"Relaxing",description:"Bring a snack and take a breather in the park.",image:"assets/park.svg",companions:["solo","friends"],times:["weekend"]},
  {id:4,title:"Chinatown Food Hunt",duration:120,category:"Food",description:"Find dumplings, bakeries, and bright streets in Chinatown.",image:"assets/chinatown.svg",companions:["solo","friends"],times:["tonight","weekend"]},
  {id:5,title:"West Village Walk",duration:60,category:"Exploration",description:"Wander past brownstones, little shops, and leafy corners.",image:"assets/village.svg",companions:["solo","friends"],times:["tonight","weekend"]},
  {id:6,title:"Brooklyn Bridge Stroll",duration:180,category:"Outdoor",description:"Cross the bridge for skyline views and a mini adventure.",image:"assets/bridge.svg",companions:["solo","friends"],times:["weekend"]}
];

const questContainer = document.getElementById("quest-container");
const timeButtons = [...document.querySelectorAll("[data-time]")];
const companionSelect = document.getElementById("companion-select");
const emptyState = document.getElementById("empty-state");
const dialog = document.getElementById("quest-dialog");
const dialogContent = document.getElementById("dialog-content");
let selectedTime = "120";
let showAll = false;
const savedIds = new Set(); // Demo only: favorites reset on refresh; no account system yet.

// Preserve filters and reading position when navigating back from another HTML page.
// Storage can be blocked; browsing must still work in that case.
const filterStateKey = "nyc-side-quest-explore";
let restoredScroll = 0;
try {
  const previous = JSON.parse(sessionStorage.getItem(filterStateKey));
  if (previous && timeButtons.some(button => button.dataset.time === previous.time)) {
    selectedTime = previous.time;
    showAll = previous.showAll === true;
    if (["any", "solo", "friends"].includes(previous.companion)) {
      companionSelect.value = previous.companion;
    }
    restoredScroll = Number.isFinite(previous.scroll) ? Math.max(0, previous.scroll) : 0;
  }
} catch { /* Use the default filters if saved state is unavailable. */ }
window.addEventListener("pagehide", () => {
  try {
    sessionStorage.setItem(filterStateKey, JSON.stringify({
      time: selectedTime, showAll, companion: companionSelect.value, scroll: window.scrollY
    }));
  } catch { /* Storage is optional. */ }
});
window.addEventListener("pageshow", event => {
  if (!event.persisted) window.scrollTo({top: restoredScroll, behavior: "instant"});
});

function getMatchingQuests() {
  return quests.filter(quest => {
    const matchesTime = showAll || (selectedTime === "weekend" || selectedTime === "tonight"
      ? quest.times.includes(selectedTime)
      : quest.duration <= Number(selectedTime));
    const matchesCompanion = companionSelect.value === "any" || quest.companions.includes(companionSelect.value);
    return matchesTime && matchesCompanion;
  });
}

function openQuest(quest) {
  dialogContent.replaceChildren();
  const eyebrow = document.createElement("span");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = quest.category.toUpperCase();
  const title = document.createElement("h2");
  title.id = "quest-dialog-title";
  title.textContent = quest.title;
  const description = document.createElement("p");
  description.textContent = quest.description;
  const meta = document.createElement("p");
  meta.textContent = `${formatDuration(quest.duration)} · ${quest.category}`;
  const action = document.createElement("button");
  action.className = "dialog-action";
  action.type = "button";
  action.textContent = "Plan this side quest →";
  action.addEventListener("click", () => { dialog.close(); announce("Planning is a future feature. This activity is not marked complete."); });
  dialogContent.append(eyebrow,title,description,meta,action);
  dialog.showModal();
}

function formatDuration(minutes) { return minutes < 60 ? `${minutes} min` : `${minutes / 60} ${minutes === 60 ? "hour" : "hours"}`; }

/* Required concepts: forEach(), createElement(), textContent(), appendChild(). */
function renderQuests() {
  const visibleQuests = getMatchingQuests();
  questContainer.replaceChildren(); // Clear old cards before rerendering.
  visibleQuests.forEach(quest => {
    const card = document.createElement("article");
    card.className = "quest-card";

    const imageArea = document.createElement("div");
    imageArea.className = "quest-image";
    const image = document.createElement("img");
    image.src = quest.image;
    image.alt = `Illustration of ${quest.title}`;
    image.loading = "lazy";
    image.width = 640;
    image.height = 480;
    imageArea.appendChild(image);

    const sticker = document.createElement("span");
    sticker.className = "category-sticker";
    sticker.textContent = quest.category;
    imageArea.appendChild(sticker);

    const heart = document.createElement("button");
    heart.className = "heart-button";
    heart.type = "button";
    heart.textContent = savedIds.has(quest.id) ? "♥" : "♡";
    heart.setAttribute("aria-label", `${savedIds.has(quest.id) ? "Unsave" : "Save"} ${quest.title}`);
    heart.setAttribute("aria-pressed", String(savedIds.has(quest.id)));
    heart.addEventListener("click", () => {
      if (savedIds.has(quest.id)) savedIds.delete(quest.id); else savedIds.add(quest.id);
      heart.textContent = savedIds.has(quest.id) ? "♥" : "♡";
      heart.setAttribute("aria-pressed", String(savedIds.has(quest.id)));
      heart.setAttribute("aria-label", `${savedIds.has(quest.id) ? "Unsave" : "Save"} ${quest.title}`);
      announce(savedIds.has(quest.id) ? "Saved to favorites (demo only)" : "Removed from favorites");
    });
    imageArea.appendChild(heart);

    const copy = document.createElement("div");
    copy.className = "quest-text";
    const open = document.createElement("button");
    open.type = "button";
    open.className = "quest-open";
    open.setAttribute("aria-label", `View ${quest.title} details`);
    const title = document.createElement("h3");
    title.className = "quest-title";
    title.textContent = quest.title;
    const meta = document.createElement("p");
    meta.className = "quest-meta";
    meta.textContent = `${formatDuration(quest.duration)} · ${quest.category}`;
    open.appendChild(title);
    open.appendChild(meta);
    open.addEventListener("click", () => openQuest(quest));
    copy.appendChild(open);
    card.appendChild(imageArea);
    card.appendChild(copy);
    questContainer.appendChild(card);
  });
  emptyState.hidden = visibleQuests.length !== 0;
  document.getElementById("show-all-button").textContent = showAll ? "Match my time →" : "See all →";
}

for (const button of timeButtons) {
  button.setAttribute("aria-pressed", String(button.dataset.time === selectedTime));
  button.classList.toggle("is-selected", button.dataset.time === selectedTime);
  button.addEventListener("click", () => {
    selectedTime = button.dataset.time;
    showAll = false;
    timeButtons.forEach(chip => {
      const active = chip === button;
      chip.classList.toggle("is-selected", active);
      chip.setAttribute("aria-pressed", String(active));
    });
    renderQuests();
  });
}
companionSelect.addEventListener("change", renderQuests);
document.getElementById("reset-filters").addEventListener("click", () => {
  companionSelect.value = "any";
  selectedTime = "120";
  showAll = false;
  timeButtons.forEach(chip => { const active = chip.dataset.time === selectedTime; chip.classList.toggle("is-selected",active); chip.setAttribute("aria-pressed",String(active)); });
  renderQuests();
});
document.getElementById("show-all-button").addEventListener("click", () => { showAll = !showAll; renderQuests(); });
document.getElementById("surprise-button").addEventListener("click", () => {
  const options = getMatchingQuests();
  if (!options.length) return announce("Try changing your filters first.");
  const pick = options[Math.floor(Math.random() * options.length)];
  openQuest(pick);
});

document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
document.getElementById("settings-button").addEventListener("click", () => announce("NYC Side Quest — Assignment 6 demo. No login is required."));
document.getElementById("add-button").addEventListener("click", () => announce("Add a quest is planned for a future version."));
let toastTimeout;
function announce(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("is-visible"), 3300);
}


renderQuests();
