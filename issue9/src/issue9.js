//Function to add a passed number objects to passed array
function $d7169a46c57eb558$var$addToArray(array, inputNumber) {
    for(let x = 0; x < inputNumber; x++)array.push({
        "name": $d7169a46c57eb558$var$makeRandomString(8),
        "address": $d7169a46c57eb558$var$makeRandomString(8),
        "phone": $d7169a46c57eb558$var$makeRandomString(8)
    });
    return array;
}
//Function to generate string of random characters of given length
function $d7169a46c57eb558$var$makeRandomString(length) {
    let randomString = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    while(randomString.length < length)randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    return randomString;
}
//Type for an array of objects with values of strings
const $d7169a46c57eb558$var$objArray = [
    {
        "name": "John Doe",
        "address": "101 SomeStreet",
        "phone": "5555555555"
    }
];
//Call of function to add objects to array
console.log($d7169a46c57eb558$var$addToArray($d7169a46c57eb558$var$objArray, 5));
//Created empty array with array type 'object'
const $d7169a46c57eb558$var$newObjArray = [];
//Created new variable calling function
const $d7169a46c57eb558$var$myFunctionVariable = $d7169a46c57eb558$var$addToArray;
//Using variable to pass array an console.log result 
console.log($d7169a46c57eb558$var$myFunctionVariable($d7169a46c57eb558$var$newObjArray, 10));


//# sourceMappingURL=issue9.js.map
