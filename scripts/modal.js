// Get the modal
const modal = document.getElementById("myModal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img")


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showModal(imgTitle){
  modal.style.display = "block";
  modalTitle.textContent = imgTitle;
  modalImg.src = imgTitle;
  modalImg.src = setImageSrc(imgTitle);
}

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