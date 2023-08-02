## `-: DOM Project-5 Answers :-`
### Q-1. Ans:- Pro Subscription Button Added
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