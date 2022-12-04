//14.4 Rest/Spread Operator exercises

//Refactor function using rest operator and an arrow function

function filteroutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

const filteroutOdds = (...args) => args.filter((num) => num % 2 === 0);

//Write a funciton called findMin that accepts a variable number
//of arguments and returns smallest argument

const findMin = (...args) => Math.min(...args);

//findMin(1,2,3,4,5,-1)
//-1

//Write a function called mergeObjects that accepts two objects and
//returns a new object which contains all the keys and values of the first
//object and second object

mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });

const mergeObjects = (object1, object2) => ({ ...object1, ...object2 });
//{a: 1, b: 2, c: 3, d: 4}

//Write a function called doubleAndReturnArgs which accepts an a rray and a variable number of arguments.
//The function should return a new array with the original array values and all of additional arguments
//doubled.

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((num) => num * 2),
];
//doubleAndReturnArgs([1,2,3,4,5], 5, 5)
//(7) [1, 2, 3, 4, 5, 10, 10]

//Slice and Dice!
//Write the following functions using rest, spread and refactor these functions to be arrow functions.
//Make sure that you are always returning a new array or object and not modifying the existing inputs.

//remove a random element in the items array and return a new array without that item
function removeRandom() {}

const removeRandom = (items) => {
  let index = Math.floor(Math.random() * items.length);
  return [...items.slice(0, index), ...items.slice(index + 1)];
};
//removeRandom([1,5,6,5,4,8,10,13])
//(7) [1, 5, 6, 5, 4, 8, 10]
//removeRandom([1,5,6,5,4,8,10,13])
//(7) [1, 5, 6, 5, 4, 8, 13]

//Return a new array with every item in array1 and array2

function extend(array1, array2) {}

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

//Return a new object with all the keys and values from obj and new key/value pair

function addKeyVal(obj, key, val) {}

const addKeyVal = (obj, key, val) => {
  let newObject = { ...obj };
  newObject[key] = val;
  return newObject;
};

//Return a new object with a key removed

function removeKey(obj, key) {}

const removeKey = (obj, key) => {
  let newObject = { ...obj };
  delete newObject[key];
  return newObject;
};

//Combine two objects and return a new object

function combine(obj1, obj2) {}

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

//Return a new object with a modified key and value

function update(obj, key, val) {}

const update = (obj, key, val) => {
  let newObject = { ...obj };
  newObject[key] = val;
  return newObject;
};
