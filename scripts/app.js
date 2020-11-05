window.onload = main;

/**
 * Init program
 */
function main() {
    startSlideShowAnimation();
    renderProject();
}

function displaySection(id) {
    const element = document.getElementById(id);
    element.style.opacity = "1";
    // wrapper.style.animation = "shadowOpacity 7s"
    // for (let i = 1; i < parent.childNodes.length; i+=2 ){
    //     parent.childNodes[i].classList.add("path");
    // }
}

function getScrollTop(){
    return pageYOffset;
} 

$(window).on("scroll", function(){
    if(getScrollTop() >= 600){
    //   $(window).off("scroll");
        displaySVG();
        displaySection('svg-container');
        displaySection('skills-wrapper');
    } 
})

$(window).on("scroll", function(){
    if(getScrollTop() >= 1800){
        displaySection('articles-wrapper');
    } 
})

$(window).on("scroll", function(){
    if(getScrollTop() >= 2350){
        displaySection('contact-wrapper');
    } 
})



