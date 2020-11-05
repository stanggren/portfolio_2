// if function does not have 
window.onload = main;

/**
 * Init program
 */
function main() {
    startSlideShowAnimation();
    renderProject();
}

function startSlideShowAnimation(){
    setInterval(changeActiveImage, 4000)
    changeActiveImage();
}

function changeActiveImage() {
    const images = document.querySelectorAll('.slideshow-container > img');
    // const currentImage = images.find(img => img ) 

    for (let i = 0; i < images.length; i++){
        if (images[i].classList.contains('show')) {
            images[i].classList.remove('show');


            // go to first image
            // modulus 4 (fyra bilder)
            // modulus 3 (tre bilder)
            let nextIndex = (i + 1) % images.length;
            // if (nextIndex >= images.length) {
                
            //     nextIndex = 0;
            // }

            images[nextIndex].classList.add('show');
            break;
        }
    }
}

