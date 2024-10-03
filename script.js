const phInput = document.querySelector("#phone");
const btn = document.querySelector("#submitBtn");
const iframe = document.querySelector("#Frame");
function getPh() {
    let ph = phInput.value;
    return ph;
}
btn.addEventListener("click", () => {
    let url = `https://www.sxcce.edu.in/mobile/dashboard.php?ph=${getPh()}`;
    iframe.setAttribute("src", url);
});

let buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
    let value = btn.value;
    btn.addEventListener("click", () => {
        let url = `https://www.sxcce.edu.in/mobile/${value}.php?ph=${getPh()}`;
        iframe.setAttribute("src", url);
    });
});
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
menu.addEventListener("click", () => {
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
});