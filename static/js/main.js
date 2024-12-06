const $hamburger = document.getElementById("hamburger");
const $dropdownContainer = document.getElementById("dropdown-container");

// function makeHamburgerHTML () {
//     return `

//     `;
// }

// $dropdownContainer.innerHTML = makeHamburgerHTML()

$hamburger.addEventListener("click", () => {
    if(!$dropdownContainer.classList.contains("toggle")){
        $dropdownContainer.classList.add("toggle")
    }
});

const $button = document.getElementById("hamburger-button");

$button.addEventListener("click", () => {
    $dropdownContainer.classList.remove("toggle")
});


