function findEvenOdd(inputArray) {
    let x = 0;
    while (x < inputArray.length) {
        if ((inputArray[x] % 2) > 0) {
            console.log("Array value at index [" + x + "] is odd. Value = " + inputArray[x]);
        } else {
            console.log("Array value at index [" + x + "] is even. Value = " + inputArray[x]);
        }
        x++;
    }
};

const randArray = [24, 37, 109, 54, 78];
let counter = 12;

for (x = 0; x < randArray.length; x++) {
    console.log("randArray[" + x +"] was- " + randArray[x]);
    console.log("Counter Value is " + counter);
    randArray[x] += counter;
    console.log("randArray[" + x +"] is now- " + randArray[x] + "\n\n");
    counter++;
};

findEvenOdd(randArray);