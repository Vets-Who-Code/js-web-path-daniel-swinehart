//Function with WHILE loop to console.log array items odd/even
function findEvenOdd(inputArray) {
    let x = 0;
    while (x < inputArray.length) {
        if ((inputArray[x] % 2) == 0) {
            console.log("Array value at index [" + x + "] is even. Value = " + inputArray[x]);
        } else {
            console.log("Array value at index [" + x + "] is odd. Value = " + inputArray[x]);
        }
        x++;
    }
    console.log("\n");
};

//Assign array of 5 random numbers to variable
const randArray = [24, 37, 109, 54, 78];

//Assign a number to a variable called COUNTER
let counter = 12;

//Use a FOR loop to iterate through array and add COUNTER
for (x = 0; x < randArray.length; x++) {
    console.log("randArray[" + x +"] was- " + randArray[x]);
    console.log("Counter Value is " + counter); 
    randArray[x] += counter;
    console.log("randArray[" + x +"] is now- " + randArray[x] + "\n\n");
    //Each iteration add 1 to COUNTER
    counter++;
};

//Call function with 1st array variable
findEvenOdd(randArray);

//Call function with new array of 5 random numbers
const randArray2 = [99, 205, 65, -534, 119];
findEvenOdd(randArray2);

//Delete the 3rd item from array
randArray2.splice(2, 1);
console.log(randArray2);
console.log("\n");

//Add a string to the front of array
randArray2.unshift("String at Front");

//Add a string to end of array
randArray2.push("String at End");

//Console.log saved array
console.log(randArray2);

