let count = 0;

const scrollCountElement = document.getElementById("count");
const resetButton = document.getElementById("resetButton");

window.addEventListener("scroll", () => {
    count++;
    scrollCountElement.textContent = count;
})

resetButton.addEventListener("click", () => {
    count = 0;
    scrollCountElement.textContent = count;
})