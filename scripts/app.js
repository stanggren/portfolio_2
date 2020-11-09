/**
 * runs main() onload
 */
window.onload = main;

/**
 * functions that needs to be run on initial page load
 */
function main() {
    startSlideShowAnimation();
    renderProject();
}

/**
 * Displays HTML element by setting opacity 1.
 * @param {String} id HTML element
 */
function displaySection(id) {
    const element = document.getElementById(id);
    element.style.opacity = "1";
}

/**
 * returns window pageYOffset (number of pixels the document is currently scrolled along the vertical axis)
 */
function getScrollTop(){
    return pageYOffset;
}

/**
 * Displays header on 0 pageYOffset (when user scrolls)
 */
$(window).on("scroll", function(){
    if(getScrollTop() >= 0){
        highlightText('header');
    } 
})

/**
 * Displays skills wrapper  on 600 pageYOffset (when user scrolls)
 */
$(window).on("scroll", function(){
    if(getScrollTop() >= 600){
        displaySVG();
        displaySection('svg-container');
        displaySection('skills-wrapper');
        highlightText('skills');
    } 
})

/**
 * Displays articles wrapper  on 1600 pageYOffset (when user scrolls)
 */
$(window).on("scroll", function(){
    if(getScrollTop() >= 1600){
        displaySection('articles-wrapper');
        highlightText('projects');
    } 
})

/**
 * Displays contact wrapper on 2350 pageYOffset (when user scrolls)
 */
$(window).on("scroll", function(){
    if(getScrollTop() >= 2350){
        displaySection('contact-wrapper');
        highlightText('contact');
    } 
})

/**
 * On click event (sidebar). Scrolls down to skills wrapper
 */
$("#skills").click(function() {
    $('html,body').animate({
        scrollTop: $("#svg-container").offset().top},
        'slow');
});

/**
 * On click event (sidebar). Scrolls down to articles wrapper
 */
$("#projects").click(function() {
    $('html,body').animate({
        scrollTop: $("#articles-wrapper").offset().top},
        'slow');
});

/**
 * On click event (sidebar). Scrolls down to contact wrapper
 */
$("#contact").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact-wrapper").offset().top},
        'slow');
});





