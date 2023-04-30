const value = document.querySelector("#value");
const addValueBtn = document.querySelector("[data-action='increment']");
const decreaseValueBtn = document.querySelector("[data-action='decrement']");

console.log(value)
console.log(addValueBtn)
console.log(decreaseValueBtn)

let counterValue = 0;

addValueBtn.addEventListener('click', () => {
    counterValue++
    value.textContent = counterValue;
})

decreaseValueBtn.addEventListener('click', () => {
    counterValue -= 1
    value.textContent = counterValue;
})

