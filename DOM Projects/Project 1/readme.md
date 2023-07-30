## `-: DOM Project-1 Answers :-`
### Q-1. Ans:- Hire Me Li Added and Contact changed to Projects
``` JavaScript
let ul = document.querySelector("ul")
let newli = document.createElement("li")
newli.innerHTML = `<a>Hire Me</a>`
ul.appendChild(newli)

ul.children[2].innerText = "Projects"
```
### Q-2. Ans:- Placeholder edited
```JavaScript
let inputfield = document.querySelector("input")
inputfield.placeholder = "Search My Project"
```

### Q-3. Ans:- Paragraph text changed
```JavaScript
let para = document.querySelector("p")
para.children[2].innerText ="an Employee"
para.children[4].innerText ="ineuron Intelligence Pvt Ltd"
```
### Q-4. Ans:- Image Changed
```javaScript
let image = document.querySelector("img")
image.src = "./para.jpg"
```
### Q-5. Ans:- Support Me Button added
```JavaScript
let div = document.querySelector(".hero-right-section-btns")
let btn = document.createElement("button")
btn.textContent ="Support Me"
'Support Me'
btn.textContent ="Support Me"
'Support Me'
```