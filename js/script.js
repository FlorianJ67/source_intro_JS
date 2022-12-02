const divBoxes = document.querySelector(".boxes");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        box.classList.toggle("active")
    })
})