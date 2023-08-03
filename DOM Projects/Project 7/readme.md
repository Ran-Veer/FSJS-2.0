## `-: DOM Project-7 Answers :-`
### 1. languages removed that have 2.0 
```javascript
const words = document.querySelectorAll(".main__languages a")

const arrwords =[...words]

arrwords.forEach(function (val) {
    val.textContent.includes("2.0") ? val.style.display ="none" : ``;
})

```
### 1. Enable the Input and Submit Button
```javascript
let targetPlaceholder = document.querySelector("input.main__form-input");
console.log(targetPlaceholder);
targetPlaceholder.placeholder = "iNeuron";


//first target form tag
let form = document.querySelector("form");
// enable input take the value
let input = document.querySelector("input");
input.removeAttribute("disabled");
// enable button for submitting the form
let submitButton = document
  .querySelector("button.main__form-btn")
  .removeAttribute("disabled");
// add event listener for submit button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // add value into input tag
  let inputValue = input.value;
  console.log(inputValue);
  // for pushing input value we target the left language section
  let languageSection = document.querySelector(".main__languages");
  //create anchor tag inside language div
  let createAnchorTag = document.createElement("a");
  // create href attribute for anchor tag
  let createAttribute = document.createAttribute("href");
  // pass the value inside href attribute
  createAttribute.value = "https://www.ineuron.ai";
  // set the href attribute inside the anchor tag
  createAnchorTag.setAttributeNode(createAttribute);
  // we put value inside anchor tag which get from form input tag
  createAnchorTag.innerText = inputValue;
  // for showing the form value inside left section language we append the and anchor tag inside language div.
  languageSection.appendChild(createAnchorTag);
});
```
            