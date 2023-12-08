const originalArray = [1, 2, 3];
const shallowCopy = originalArray;

shallowCopy[0] = 10;

console.log(originalArray); // Output: [10, 2, 3]
console.log(shallowCopy); // Output: [10, 2, 3]