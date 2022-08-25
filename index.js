let view_more= document.getElementById("top")
let menu = document.getElementById("menu")
let open = false;
view_more.addEventListener("click", () => {
    if(open === false) {
        open = true
        menu.style.right ="1px";
    } else {
        open = false
        menu.style.right = "-100%"
    }
})
// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
