window.onload = main;

/**
 * Init program
 */
function main() {
    startSlideShowAnimation();
    renderProject();
}

/**
 * 
 * @param {String} id  
 */
function displaySection(id) {
    const element = document.getElementById(id);
    element.style.opacity = "1";
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
    if(getScrollTop() >= 1600){
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





