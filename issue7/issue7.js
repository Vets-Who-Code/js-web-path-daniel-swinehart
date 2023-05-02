function addLi() {
    let newList = document.querySelector('.new-list');
    let liElement = document.createElement('li');
    liElement.innerHTML = "You added a new List Item element";
    //Event listener to toggle Hero Image on page
    liElement.addEventListener("click", changeNav);
    newList.appendChild(liElement);
};

function removeLi() {
    let liLast = document.querySelector('.new-list > li:last-child');
    if (liLast === null) {
        alert("There are no <li> elements to remove.");
    } else {
        liLast.remove();
    }    
};

function changeNav() {
    let nav = document.querySelector('.nav-bar-container');
    nav.classList.toggle('alt-bg-color');
};


//**Select <body> element
let bodyElement = document.querySelector('body');

//**Add a list element as a child of the body
//Create <ul> tag
let ulElement = document.createElement('ul');
ulElement.setAttribute('class', 'new-list');
//Add created <ul> to <body>
bodyElement.appendChild(ulElement);

//**Add 2 buttons as children to the <body> element
let button1 = document.createElement('button');
button1.addEventListener('click', addLi);
let button2 = document.createElement('button');
button2.addEventListener('click', removeLi);
bodyElement.append(button1, button2);