function startSlideShowAnimation(){
    setInterval(changeActiveImage, 4000)
    changeActiveImage();
}

function changeActiveImage() {
    const images = document.querySelectorAll('.slideshow-container > img');
    for (let i = 0; i < images.length; i++){
        if (images[i].classList.contains('show')) {
            images[i].classList.remove('show');

            let nextIndex = (i + 1) % images.length;

            images[nextIndex].classList.add('show');

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

function setLogoColor(color){
    const elementList = document.getElementById('logo-container').childNodes;

    for (let i = 1; i < elementList.length; i+=2 ){
        elementList[i].style.color = color;
    }
    
}