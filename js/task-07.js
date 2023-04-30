const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");


input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const fontSize = input.value + "px";
    text.style.fontSize = fontSize;
}
