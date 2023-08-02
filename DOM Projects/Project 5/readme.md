## `-: DOM Project-5 Answers :-`
### 1.Pro Subscription Button Added
```javascript

const nav = document.querySelector(".nav-center")

const btnDiv = document.createElement("div")

const btn = document.createElement("a")

btn.className ="btn"

btn.textContent ="Pro Subscription"

btnDiv.appendChild(btn)

nav.appendChild(btnDiv)
​
```
### 2.Chinese Menu Added
```javascript
const addMenu = document.querySelector(".tags-container").children[1]

const menu = document.createElement("a")

menu.textContent ="Chinese(7)"

addMenu.appendChild(menu)
```