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
### 2. Background Image Removed
```javascript

// Body targeted
const body = document.querySelector("body")

// Background Image Removed
body.style.backgroundImage ="none"
```
### 3. Toggle Nav Menu

```javascript

let a = document.querySelector("button");

let count = 0;

a.addEventListener("click", (e) => {
  e.preventDefault();
  count += 1;

  if (count % 2 == 0) {
    document.querySelector("#navbarTogglerDemo01").setAttribute("class", "collapse navbar-collapse");

  } else if (count % 2 !== 0) {
    document.querySelector(".collapse").setAttribute("class", "collapse.show navbar-collapse");
  }
});

```