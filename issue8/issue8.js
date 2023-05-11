function getData() {
    let timeOut = new Promise((resolve) => setTimeout(resolve, 3000));
    console.log('waiting 3 sec');
    timeOut.then(() => fetch('https://swapi.dev/api/people/'))
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log('Error during fetch: ' + error.message);
        })
};

//**Select html element to add download button
let bodyElement = document.querySelector('.index-about-me');

//**Add button for downloading data
let button1 = document.createElement('button');
button1.setAttribute('class', 'btn-temp');
button1.addEventListener('click', getData);
button1.innerText = 'Download Data';
bodyElement.append(button1);
