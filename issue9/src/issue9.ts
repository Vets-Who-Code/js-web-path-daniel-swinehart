//Function to add a passed number objects to passed array
function addToArray(array: setArray, inputNumber: number) {
    for (let x = 0; x < inputNumber; x++) {
        array.push({
            "name": makeRandomString(8),
            "address": makeRandomString(8),
            "phone": makeRandomString(8)
        });
    }
    return array;
};

//Function to generate string of random characters of given length.
function makeRandomString(length: number) {
    let randomString = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    while (randomString.length < length) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
};

//Type for an array of objects with values of strings
type setArray = {name: string, address: string, phone: string} [];

//Declare new array with previous type
const objArray: setArray = [
    {"name": "John Doe", "address": "101 SomeStreet", "phone": "5555555555"}];

//Call of function to add objects to array
console.log(addToArray(objArray, 5));

//Created empty array with array type 'object'
const newObjArray: setArray = [];

//Created new variable calling function
const myFunctionVariable = addToArray;

//Using variable to pass array an console.log result 
console.log(myFunctionVariable(newObjArray, 10));