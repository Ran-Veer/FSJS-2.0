## `-: DOM Project-8 Answers :-`
### 1. New Heading, Border Added and scroll enabled
```javascript
// Aside targeted

const div = document.querySelector(".new")

// Scrool enabled
div.style.overflow ="auto"

// Border Added
div.style.border ="2px solid red"

// h2 Element Created
const h2 = document.createElement("h2")

h2.className ="new-head"

h2.textContent ="This is My Custom Heading"

// h2 inserted to Aside div
div.appendChild(h2)

``` 