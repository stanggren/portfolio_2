/**
 * Highlights element according to pageYOffset (number of pixels the document is currently scrolled along the vertical axis)
 * @param {String} id parameter deciding what element in sidebar to highlight 
 */
function highlightText (id) {
    elementList = document.getElementById("sidebar-list").childNodes;

    for (let i = 1; i < elementList.length; i+=2 ){
        if (elementList[i].id === id){
            elementList[i].style.color = '#f17900';
        } else {
            elementList[i].style.color = '#313335';
        }
    }
}

