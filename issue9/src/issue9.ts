function addToArray(array: {name: string, address: string, phone: string} [], inputNumber: number) {
    for (let x = 0; x < inputNumber; x++) {
        array.push({
            "name": makeRandomString(8),
            "address": makeRandomString(8),
            "phone": makeRandomString(8)
        });
    }
    return array;
}

function makeRandomString(length: number) {
    let randomString = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    while (randomString.length < length) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
}

const objArray: {name: string, address: string, phone: string} [] = [
    {"name": "John Doe", "address": "101 SomeStreet", "phone": "5555555555"}];

console.log(addToArray(objArray, 5));

let newObjArray: {name: string, address: string, phone: string} [] = [];

//const myFunctionVariable = addToArray(newObjArray, 10);

const myFunctionVariable = addToArray;
console.log(myFunctionVariable(newObjArray, 10));

//console.log(myFunctionVariable);