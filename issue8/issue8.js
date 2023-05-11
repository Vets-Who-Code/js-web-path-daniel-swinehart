let firstFunction = () => {
    console.log('waiting 1 sec');
    return new Promise((resolve) => setTimeout(resolve, 1000))
};

firstFunction().then(() => fetch('https://swapi.dev/api/people/'))
.then((response) => response.json())
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log('Error during fetch: ' + error.message);
})


/*
------------------------------------not as old----------------------------------

let firstFunction = () => {
    return new Promise(
        function(resolve, reject) {
            resolve('first func output');
        }
    )
};

console.log(firstFunction());

let secondFunction = (dataFromFirst) => {
    return new Promise(
        function(resolve, reject) {
            resolve(dataFromFirst + 'data from second');
        }
    )
};

firstFunction().then((data) => {
    return secondFunction(data);
}).then((data) => {
    console.log(data);
});


fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log('Error during fetch: ' + error.message);
    })

 -------------------------------------old--------------------------------------   

function getData() {
    setTimeout(sendRequest, 1000); 
    
};

function sendRequest() {
    fetch('https://swapi.dev/api/people/')
        .then(response => console.log(response.json))
}

//**Select html element to add download button
let bodyElement = document.querySelector('.index-about-me');

//**Add button for downloading data
let button1 = document.createElement('button');
button1.setAttribute('class', 'btn-temp');
button1.addEventListener('click', getData);
button1.innerText = 'Download Data';
bodyElement.append(button1);

*/