const $hamburger = document.getElementById("hamburger");
const $dropdown = document.getElementById("dropdown");
const $button = document.getElementById("hamburger-button");
const $main = document.getElementById("main")
const $filler = document.getElementById("filler")

$hamburger.addEventListener("click", () => {
    $dropdown.classList.toggle("toggle")
    $filler.classList.toggle("filler--toggle")
});

$button.addEventListener("click", () => {
    $dropdown.classList.remove("toggle");
    $filler.classList.remove("filler--toggle");
});

$main.addEventListener("click", (event) => {
    if(event.target !== $dropdown) {
        $dropdown.classList.remove("toggle")
        $filler.classList.remove("filler--toggle")
    }
})



