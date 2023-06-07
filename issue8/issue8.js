function getData() {
    let timeOut = new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('waiting 1 sec');
    //**Create 'div' and add to section .index-about-me
    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'div--data');
    divElement.innerHTML = 'Data Loading...';
    bodyElement.insertBefore(divElement, bodyElement.lastChild);
    timeOut.then(() => fetch('https://swapi.dev/api/people/'))
        .then((response) => response.json()) //**Retrieve JSON data object
        .then((response) => {
            console.log(response.results);
            //**Retrieve .results from data object
            return response.results;
        })
        .then(data => {
            //**Create 'ul' for each Star Wars character
            let divElement = document.querySelector('.div--data');
            divElement.innerHTML = '';
            data.forEach((character) => {
                let dataList = document.createElement('ul');
                dataList.setAttribute('class', 'data-display');
                Object.keys(character).forEach((key) => {
                    //**Loop through and display character data
                    let liElement = document.createElement('li');
                    liElement.setAttribute('class', 'li--data');
                    liElement.innerHTML = key + ": " + character[key];
                    dataList.append(liElement);
                    console.log(character[key]);
                })
                divElement.append(dataList);
            })
        })
        .catch((error) => {
            divElement.innerHTML = 'Error during fetch: ' + error.message;
            console.log('Error during fetch: ' + error.message);
        })
};

function hideDiv() {
    let twitterFeed = document.querySelector('.twitter-feed');
    twitterFeed.classList.add('div--hide');
    document.querySelector('.btn-temp').disabled = true;

};

//**Select html element to add download button
let bodyElement = document.querySelector('.index-about-me');

//**Add button for downloading data
let button1 = document.createElement('button');
button1.setAttribute('class', 'btn-temp');
button1.addEventListener('click', hideDiv);
button1.addEventListener('click', getData);
button1.innerText = 'Download Data';
bodyElement.append(button1);