const first = document.querySelector(".first");
const usual = document.querySelector(".usual");
const unusual = document.querySelector(".unusual");
const result = document.querySelector(".result");
const cal = document.querySelector(".cal");

function math(event) {
    event.preventDefault();

    front_value = parseInt(usual.value);
    reverse_value = parseInt(unusual.value);
    first_value = parseInt(first.value);
    
    rational_point = first_value*(reverse_value/front_value)*(reverse_value/front_value);
    result.innerText = rational_point;
};

function init() {
    cal.addEventListener("click", math);
};

init();