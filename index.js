const button = window.document.querySelector("#button")
const item1 = window.document.querySelector(".transform1")
const item2 = window.document.querySelector(".transform2")
const item3 = window.document.querySelector(".transform3")

initialStyle = "transition: transform .5s ease; transform: scale(1.1)"
finalStyle = "scale(1)"

button.addEventListener('mouseover', () => {
  button.style = initialStyle
})

item1.addEventListener('mouseover', () => {
  item1.style = initialStyle
})

item2.addEventListener('mouseover', () => {
  item2.style = initialStyle
})

item3.addEventListener('mouseover', () => {
  item3.style = initialStyle
})

button.addEventListener('mouseout', () => {
  button.style.transform = finalStyle
})

item1.addEventListener('mouseout', () => {
  item1.style.transform = finalStyle
})

item2.addEventListener('mouseout', () => {
  item2.style.transform = finalStyle
})

item3.addEventListener('mouseout', () => {
  item3.style.transform = finalStyle
})

