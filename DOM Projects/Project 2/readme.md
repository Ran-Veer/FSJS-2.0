## `-: DOM Project-2 Answers :-`
### Q-1. Ans:- Background Colour Added to h3
```JavaScript
let allh3 = document.querySelectorAll("h3")

allh3[0].style.backgroundColor ="#a5c8fa"
allh3[1].style.backgroundColor ="#a5c8fa"
allh3[2].style.backgroundColor ="#a5c8fa"
allh3[3].style.backgroundColor ="#a5c8fa"

```
### Q-2. Ans:- Adding Skill Section
```Javascript

const mainDiv = document.querySelector(".accordian-wrapper")

const newDiv = document.createElement("div")

newDiv.className = "accordian"

const newH3 = document.createElement("h3")

newH3.textContent = "Skills"

newDiv.appendChild(newH3)
​
mainDiv.appendChild(newDiv)
​
const newP = document.createElement("p")

newP.textContent = "I posses a very good command over the Full Stack Devlopment technologies like MERN which can be seen in my work over the Github." 

newDiv.appendChild(newP)

newP.style.display = "block"

```