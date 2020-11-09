/**
 * @type {HTMLElement} modal
 */
const modal = document.getElementById("myModal");
/**
 * @type {HTMLElement} modalTitle
 */
const modalTitle = document.getElementById("modal-title");
/**
 * @type {HTMLElement} modalImg
 */
const modalImg = document.getElementById("modal-img")


// When the user clicks anywhere outside of the modal, close it
/**
 * User clicks anywhere outside of the modal and closes the modal.
 * @param {MouseEvent} event 
 */
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/**
 * User clicks image to display modal, modal image and modal title.
 * @param {String} imgTitle 
 */
function showModal(imgTitle){
  modal.style.display = "block";
  modalTitle.textContent = imgTitle;
  modalImg.src = imgTitle;
  modalImg.src = setImageSrc(imgTitle);
}

/**
 * Conditional rendering of modal image depending on what image user clicked on.
 * @param {String} title sets parameter depending on what image clicked.
 */
function setImageSrc(title){
    console.log(projects[0].modalImgSrc);
    switch(title) {
        case 'Dashboard':
            return projects[0].modalImgSrc
        case 'Recipe Search':
            return projects[1].modalImgSrc
        case 'Dice Game':
            return projects[2].modalImgSrc
        case 'Planet Jumper':
            return projects[3].modalImgSrc
        default:
      }
}