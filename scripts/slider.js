/**
 * Starts image slider and switch image every 4000 ms (by calling function changeActiveImage)
 */
function startSlideShowAnimation(){
    setInterval(setActiveImage, 4000)
    setActiveImage();
}

/**
 * Changes active image from slide show container.
 */
function setActiveImage() {
    const images = document.querySelectorAll('.slideshow-container > img');
    for (let i = 0; i < images.length; i++){
        if (images[i].classList.contains('show')) {
            images[i].classList.remove('show');

            let nextIndex = (i + 1) % images.length;

            images[nextIndex].classList.add('show');

            // If image contains class dark change color of Logo
            if(images[nextIndex].classList.contains('dark')){
                setLogoColor('#F4F3F2')
            }
            else {
                setLogoColor('#313335')
            }
            break;
        }
    }
}

/**
 * sets color of logo in slide show container
 * @param {String} color Hex color
 */
function setLogoColor(color){
    const elementList = document.getElementById('logo-container').childNodes;

    for (let i = 1; i < elementList.length; i+=2 ){
        elementList[i].style.color = color;
    }
    
}