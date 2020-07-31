var postBtn =  document.querySelector(".jobBtn");



function changeBackgroundColor() {
    var links = document.querySelectorAll(".a-text");
    for(let arrays of links) {
    arrays.style.backgroundColor = "green";
    }
}

postBtn.addEventListener("click", changeBackgroundColor);
