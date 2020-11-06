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
    if(getScrollTop() >= 0){
        highlightText('header');
    } 
})

$(window).on("scroll", function(){
    if(getScrollTop() >= 600){
        displaySVG();
        displaySection('svg-container');
        displaySection('skills-wrapper');
        highlightText('skills');
    } 
})

$(window).on("scroll", function(){
    if(getScrollTop() >= 1800){
        displaySection('articles-wrapper');
        highlightText('projects');
    } 
})

$(window).on("scroll", function(){
    if(getScrollTop() >= 2350){
        displaySection('contact-wrapper');
        highlightText('contact');
    } 
})

// $('#skills').on('click', function() {
//     var body = $("html, body");
//     body.stop().animate({scrollTop:$('skills').offset().top}, '600');
// })


$("#skills").click(function() {
    $('html,body').animate({
        scrollTop: $("#svg-container").offset().top},
        'slow');
});

$("#projects").click(function() {
    $('html,body').animate({
        scrollTop: $("#articles-wrapper").offset().top},
        'slow');
});

$("#contact").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact-wrapper").offset().top},
        'slow');
});





