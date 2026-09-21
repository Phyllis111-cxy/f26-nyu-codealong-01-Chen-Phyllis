# Pigeon of New York

A one-page project about a New York City pigeon that introduces HTML, CSS, and JavaScript together for the first time.

---

## The Three Layers of the Web

| Layer | Language | Role |
|---|---|---|
| **Structure** | HTML | The bones — headings, paragraphs, lists |
| **Style** | CSS | The clothes — fonts, colors, spacing |
| **Behavior** | JavaScript | The brains — responding to clicks |

---

## Key Concepts We'll Cover

### HTML — HyperText Markup Language

HTML uses **elements** to describe content. An element is an opening tag, some content, and a closing tag:

```html
<p>This is a paragraph.</p>
```

**Hierarchy:** elements nest inside each other. The browser reads this as a tree.

```html
<h1>Biggest Heading</h1>
<h2>Smaller Heading</h2>
<p>A paragraph of text.</p>
<ul>
  <li>List item</li>
  <li>Another list item</li>
</ul>
```

- `h1` through `h6` — six levels of heading, `h1` is the most important
- `p` — paragraph
- `ul` / `li` — unordered list and list items
- `<a>` — anchor (link)
- `<button>` — clickable button
- `<img>` — image (self-closing, no closing tag)
- `<strong>` — bold (inline)
- `<em>` — italic (inline)

### CSS — Cascading Style Sheets

CSS **selects** elements and **declares** styles for them.

```css
/* Select by element type */
h1 {
  color: yellow;
  font-size: 2.8rem;
}

/* Select by class — reuse on multiple elements */
.highlight-box {
  background-color: white;
  border-left: 5px solid yellow;
}

/* Select by id — one specific element */
#fact-button {
  background-color: yellow;
}
```

A selector + a block of declarations = a **rule**.

**Separation of concerns:** HTML in `.html`, CSS in `.css`, linked together with a `<link>` tag in the `<head>`.

```html
<link rel="stylesheet" href="style.css" />
```

### JavaScript — Simple Interactivity

JavaScript runs in the browser and can **find elements** and **respond to events**.

```js
// Find an element
const button = document.querySelector("#fact-button");
const display = document.querySelector("#fact-display");

// Listen for a click
button.addEventListener("click", function () {
  // Do something — like change text
  display.textContent = "Hello!";
});
```

Key terms:
- **`document.querySelector("...")`** — find the first element matching a CSS selector
- **`.addEventListener("click", function)`** — run code when the element is clicked
- **`.textContent`** — the text inside an element (read it or set it)
- **`const`** — a variable that won't be reassigned

---

## Starting Scaffold — JavaScript Only

Copy this into a new `script.js` file. It's your starting point — no HTML or CSS needed yet; we'll build those together in class.

```js
const facts = [
  "Pigeons can recognize themselves in mirrors — one of only a few species to pass the mirror test.",
  "A pigeon's sense of direction is so good that they were used as messengers in both World Wars.",
  "Pigeons see the city in ultraviolet light, which means Times Square looks completely different to them.",
  "The cooing sound pigeons make is called a 'croon' — and they do it to attract mates.",
  "Pigeons can fly at speeds up to 77 mph and cover 600 miles in a single day.",
  "In NYC, feeding pigeons was officially discouraged starting in the 1970s, but they adapted anyway.",
];
```

---

## Vocabulary

| Term | Meaning |
|---|---|
| **Element** | A building block of HTML (e.g., `h1`, `p`, `li`) |
| **Tag** | The markup that defines an element (`<h1>` is an opening tag, `</h1>` is a closing tag) |
| **Attribute** | Extra info inside an opening tag, like `id="fact-button"` or `href="style.css"` |
| **Selector** | A pattern that tells CSS (or JavaScript) which elements to target |
| **Class** | A reusable label you put on elements: `class="highlight-box"` |
| **ID** | A unique label for one specific element: `id="fact-button"` |
| **Property / Declaration** | A style you set, like `color: yellow;` — the property is `color`, the value is `yellow` |
| **Event** | Something the user does — click, scroll, type |
| **Event Listener** | Code that waits for an event and runs a function in response |
| **Function** | A reusable block of code (we'll use one inside our `addEventListener`) |
| **Array** | A list of items in JavaScript, written with square brackets `[ ]` |
| **Variable** | A named container for a value — declared with `const` or `let` |