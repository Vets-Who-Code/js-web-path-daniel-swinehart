const randArray = [24, 37, 109, 54, 78];
let counter = 12;

for (x = 0; x < randArray.length; x++) {
    randArray[x] += counter;
    counter++;
    console.log("Counter Value at interation " + x + " = " + counter);
};