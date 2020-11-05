function displaySVG() {
    const wrapper = document.getElementById("svg-container");
    const parent = document.getElementById("Layer_1");
    wrapper.style.opacity = "1";
    wrapper.style.animation = "shadowOpacity 7s"
    for (let i = 1; i < parent.childNodes.length; i+=2 ){
        parent.childNodes[i].classList.add("path");
    }
}
