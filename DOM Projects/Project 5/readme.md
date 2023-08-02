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
### 3. New Card Added

```javascript
const main = document.querySelector(".recipe-gallery")

const container = document.createElement("div")

container.className ="card"

const anchor = document.createElement("a")

anchor.className ="recipe-text"

const image = document.createElement("img")

image.className ="recipe-img"

image.src ="./Mushroom.jpg"

const h5 = document.createElement("h5")

h5.className ="recipe-name"

h5.textContent ="Mushroom Masala"

const para = document.createElement("p")

para.className ="recipe-disp"

para.textContent ="Prep : 20 min | Cook : 50 min"

anchor.appendChild(image)

anchor.appendChild(h5)

anchor.appendChild(para)

container.appendChild(anchor)

main.appendChild(container)
```

### 4. Name Added In Footer
```javascript

const footer = document.querySelector(".page-footer")

footer.querySelector("a").innerText = "Ranveer"

```