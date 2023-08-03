## `-: DOM Project-9 Answers :-`
### 1. Heading Colour Changed To Red

```javascript
// h1 targeted
const heading = document.querySelector(".caption h1")

// text colour changed
heading.style.color ="red"

```
### 2. Mouse Event added 

```javascript
// button targeted
const btn = document.querySelector("button")

// eventlistener added

btn.addEventListener('mouseenter', () => {
    btn.style.backgroundColor ="red"
})

btn.addEventListener('mouseleave', () => {
    btn.style.backgroundColor ="green"
})
```