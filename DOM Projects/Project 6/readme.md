## `-: DOM Project-6 Answers :-`
### 1. Logo Changed
```javascript

const head = document.querySelector("header")

const image = document.createElement("img")

image.className ="logo"

image.src ="ineuron-logo.png"

head.appendChild(image)

head.children[0].remove()

```

### 2. Price Changed

```javascript

const span = document.querySelector(".app_price span")

span.innerText ="$10"

```

### 3. Linkedin Icon Added

```javascript
const social = document.querySelector(".footer_social")

const icon = document.createElement("div")

icon.className ="footer_social_ico"

const linkedin = document.createElement("i")

linkedin.className ="fa-brands fa-linkedin"

icon.appendChild(linkedin)

social.appendChild(icon)

```