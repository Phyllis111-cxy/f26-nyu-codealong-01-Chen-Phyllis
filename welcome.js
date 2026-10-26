// Pass the chosen time to Explore without replacing unrelated saved filters.
const choices = [...document.querySelectorAll('[data-choice]')];
choices.forEach(button => button.addEventListener('click', () => {
  choices.forEach(choice => {
    const active = choice === button;
    choice.classList.toggle('is-selected', active);
    choice.setAttribute('aria-pressed', String(active));
  });
  document.getElementById('welcome-continue').href = `explore.html?time=${encodeURIComponent(button.dataset.choice)}`;
}));
