let view_more= document.getElementById("top")
let menu = document.getElementById("menu")
let open = false;
view_more.addEventListener("click", () => {
    console.log("jjj")
    if(open === false) {
        open = true
        menu.style.right ="15px";
    } else {
        open = false
        menu.style.right = "-100%"
    }
})