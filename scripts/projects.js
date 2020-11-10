/**
 * @type {Object[]} projects
 */
const projects = [
    dashboard = {
        title: 'Dashboard',
        text: 'A dashboard which consumes data from a document database and displays it through charts and tables. The dashboard also includes a date picker where the user can set a desired times pan for the data to be displayed in.',
        link: 'https://github.com/stanggren',
        imgSrc : './images/thumbnails/dashboard-tn.png',
        modalImgSrc: './images/modals/dashboard.jpg',
        alt: 'Dashboard'
    },
    recipeSearch = {
        title: 'Recipe Search',
        text: 'Using an API from Edamam the user can search recipes and tick off ingredients from each recipe.',
        link: 'https://github.com/stanggren/recipe-api',
        imgSrc : './images/thumbnails/recipe-search-tn.png',
        modalImgSrc: './images/modals/recipe-search.png',
        alt: 'Recipe Search'
    },
    diceGame = {
        title: 'Dice Game',
        text: 'DOM game. The game has two players. In each turn a player roll a dice as many times as they wish. Each result gets added to their round score. First player to reach winning score wins the game.',
        link: 'https://github.com/stanggren/Dice-Game',
        imgSrc : './images/modals/dice-game.png',
        modalImgSrc: './images/modals/dice-game.png',
        alt: 'Dice Game'
    },
    planetJumper = {
        title: 'Planet Jumper',
        text: 'A dashboard which consumes data from a document database and displays it through charts and tables. The dashboard also includes a date picker where the user can set a desired times pan for the data to be displayed in.',
        link: 'https://github.com/stanggren/planet-jumper',
        imgSrc : './images/modals/planet-jumper.png',
        modalImgSrc: './images/modals/planet-jumper.png',
        alt: 'Planet Jumper'
    },
]
/**
 * @type {string[]} elementTags
 */
const elementTags = ['article', 'img', 'div', 'h3', 'p', 'a'];

/**
 * @type {HTMLElement[]} elements
 */
let elements = [];

/**
 * @type {HTMLElement} article
 */
let article

/**
 * @type {HTMLElement} img
 */
let img

/**
 * @type {HTMLElement} textWrapper
 */
let textWrapper

/**
 * @type {HTMLElement} title
 */
let title

/**
 * @type {HTMLElement} text
 */
let text

/**
 * @type {HTMLElement} link
 */
let link

/**
 * @type {HTMLElement[]} elementList
 */
let elementList = [];



/**
 * Loops through project object list.
 * Calls functions to create HTML elements, set variables and set content of HTML elements
 */
function renderProject() {
    // loops through projects object list
    for (let obj = 0; obj < projects.length; obj++){

        // loops through element tags. Creates elements according to string values in array. Also sets class name and ID.
        for (let i = 0; i < elementTags.length; i++){
            elements.push(setElementClass(createElement(elementTags[i]), obj));
        }

        // Sets the created elements to global variables and pushes each variable to a list.
        for (let i = 0; i < elements.length; i++){
            setElementVariables(elements[i]);
        }

        // Sets content of HTML elements (global variables). Needs object iteration (projects[obj]) to set correct content.
        for (let i = 0; i < elementList.length; i++){
            setElementContent(projects[obj], elementList[i]);
        }

        // At this point the HTML elements have the correct classes, ID and content.
        // Sets the structure of the HTML elements and appends it accordingly to HTML parent.
        setElementStructure(obj);

        // Resets values for elements and global variables. 
        resetElements();

        // Iterates on next object in projects object list
    }
}

/**
 * 
 * @param {string} el name of element (to create).
 * @type {HTMLElement} element
 * @returns {HTMLElement} return a HTML element
 */
function createElement(el) {
    let element = document.createElement(el);
    return element;
}

/**
 * Sets classes for specific HTML elements.
 * @param {HTMLElement} el HTML element. 
 * @param {number} articleCount Sets unique ID depending on projects list iteration.
 */
function setElementClass(el, articleCount){
    if(el.nodeName === 'ARTICLE') {
        el.className = "article"
        el.id = `article${articleCount + 1}`
    } 
    else if (el.nodeName === 'DIV') {
        el.className = 'article-text'
        el.id = `article-text${articleCount + 1}`
    } 
    return el;
}

/**
 * Sets HTML value to global variable. Pushes variable to global list.
 * @param {HTMLElement} element HTML element. 
 */
function setElementVariables(element){
    switch(element.nodeName) {
        case 'ARTICLE':
            article = element;
            elementList.push(article);
            break;
        case 'IMG':
            img = element;
            elementList.push(img);
            break;
        case 'DIV':
            textWrapper = element
            elementList.push(textWrapper);
            break;
        case 'H3':
            title = element
            elementList.push(title);
            break;
        case 'P':
            text = element;
            tools = element;
            elementList.push(text);
            elementList.push(tools);
            break;
        case 'A':
            link = element;
            elementList.push(link);
        default:
    }
}

/**
 * Sets content of global variable (HTML element)
 * @param {Object} project object from projects list
 * @param {HTMLElement} element global variable
 */
function setElementContent(project, element){
    switch(element.nodeName) {
        case 'IMG':
            element.onclick = (function() {showModal(project.title)})
            element.alt = project.alt;
            element.src = project.imgSrc;
            break;
        case 'H3':
            element.textContent = project.title
            break;
        case 'P':
            element.textContent = project.text
            break;
        case 'A':
            element.href = project.link
            element.textContent = 'Repo'
        default:
    }
}

/**
 * Sets the structure of HTML elements and appends it to the projects HTML parent.
 * @param {number} articleCount Unique ID depending on projects list iteration. 
 */
function setElementStructure(articleCount){
    // parent for all projects
    const articles = document.getElementById('articles');
    articles.appendChild(article);

    //By using unique IDs the children will only append to one parent.
    article = document.getElementById(`article${articleCount + 1}`);
    article.appendChild(img);
    article.appendChild(textWrapper);

    const textParent = document.getElementById(`article-text${articleCount + 1}`);
    textParent.appendChild(title);
    textParent.appendChild(text);
    textParent.appendChild(tools);
    textParent.appendChild(link);
}

/**
 * Resets values for elements and global variables.
 */
function resetElements() {
    elements = [];
    elementList = [];
    article = ''
    img = ''
    textWrapper = ''
    title = ''
    text = ''
    tools = ''
    link = ''
}
