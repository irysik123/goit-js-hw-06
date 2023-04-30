const input = document.querySelector("#validation-input");

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const length = Number(input.dataset.length);
    const value = input.value;

    if (value.length === length) {
        input.classList.remove("invalid");
        input.classList.add("valid")
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid")
    }
}