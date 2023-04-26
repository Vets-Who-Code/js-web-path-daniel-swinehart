const randArray = [24, 37, 109, 54, 78];
let counter = 12;

for (x = 0; x < randArray.length; x++) {
    console.log("randArray[" + x +"] was- " + randArray[x]);
    console.log("Counter Value is " + counter);
    randArray[x] += counter;
    console.log("randArray[" + x +"] is now- " + randArray[x]);
    counter++;
};