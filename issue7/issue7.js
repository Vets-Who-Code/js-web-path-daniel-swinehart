 function addLi() {
    let newList = document.querySelector('.new-list');
    let liElement = document.createElement('li');
    liElement.innerHTML = "You added a new List Item element. Click me!";
    //Event listener to toggle Hero Image on page
    liElement.addEventListener("click", changeBg);
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

function changeBg() {
    let twitterFeed = document.querySelector('.twitter-feed');
    if (twitterFeed.classList.contains('alt-bg-color')) {
        twitterFeed.classList.remove('alt-bg-color');
    } else {
        twitterFeed.classList.add('alt-bg-color');
    }
};


//**Select <body> element
let bodyElement = document.querySelector('.index-about-me');

//**Add a list element as a child of the body
//Create <ul> tag
let ulElement = document.createElement('ul');
ulElement.setAttribute('class', 'new-list');
//Add created <ul> to <body>
bodyElement.appendChild(ulElement);

//**Add 2 buttons as children to the <body> element
let button1 = document.createElement('button');
button1.setAttribute('class', 'btn-temp');
button1.addEventListener('click', addLi);
button1.innerText = 'Add a list item';
let button2 = document.createElement('button');
button2.setAttribute('class', 'btn-temp');
button2.addEventListener('click', removeLi);
button2.innerText = 'Remove a list item';
bodyElement.append(button1, button2);