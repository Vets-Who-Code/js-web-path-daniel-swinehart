function getData() {
    let timeOut = new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('waiting 1 sec');
    timeOut.then(() => fetch('https://swapi.dev/api/people/'))
        .then((response) => response.json())
        .then((response) => {
            console.log(response.results);
            return response.results;   
        })
        .then(data => {
            data.forEach((character) => {
                let dataList = document.createElement('ul');
                dataList.setAttribute('class', 'data-display');
                Object.keys(character).forEach((key) => {
                    let liElement = document.createElement('li');
                    liElement.innerHTML = key + ": " + character[key];
                    dataList.append(liElement);
                    bodyElement.append(dataList);
                    console.log(character[key]);
                })
                
            })
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