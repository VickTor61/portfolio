var postBtn =  document.querySelector(".jobBtn");



function changeBackgroundColor() {
    var links = document.querySelectorAll(".a-text");
    for(let arrays of links) {
    arrays.style.color = "green";
    }
}

postBtn.addEventListener("click", changeBackgroundColor);
