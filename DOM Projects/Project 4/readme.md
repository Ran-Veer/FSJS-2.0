## `-: DOM Project-4 Answers :-`
### Q-1. Ans:- Background colour added
```javascript
// The Barbarian--

const barBarian = document.querySelector(".clash-card__unit-stats--barbarian")

barBarian.style.backgroundColor ="#f5aa42"

// The Archer--

const archer = document.querySelector(".clash-card__unit-stats--archer")

archer.style.backgroundColor ="#fc2b94"

// The Giant--

const giant = document.querySelector(".clash-card__unit-stats--giant")

giant.style.backgroundColor ="#fc822b"

// The Goblin--

const goblin = document.querySelector(".clash-card__unit-stats--goblin")

goblin.style.backgroundColor ="#59c936"

// The Wizard--

const wizard = document.querySelector(".clash-card__unit-stats--wizard")

wizard.style.backgroundColor ="#13c7f0"

// Function for Colouring the text

const teXt = document.querySelectorAll(".one-third")

teXt.forEach(function (color) {
    color.style.color ="#fff"
})
```