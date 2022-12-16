//Maps and Sets Exercise

//What does the following code return?

new Set([1, 1, 2, 2, 3, 4]);

//Set(4) {1, 2, 3, 4};

//What does the following code return?
[...new Set("referee")].join("");

//'ref'

//What does the Map m look like after running the following code?

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

//Map(2) {Array(3) => true, Array(3) => false}

//Write a function called hasDuplicate which accepts an array and returns true or false if that
//array contains a duplicate

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;
//hasDuplicate([4,4,5,6,3,3,7]) true
//hasDuplicate([4,5,6,3,7]) false

//Write a function called vowelCount which accepts a string and returns a map where
//the keys are numbered and the values are the count of the vowels in the string.

function isVowel(char) {
  return "aeiou".includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    let lowerCase = char.toLowerCase();
    if (isVowel(lowerCase)) {
      if (vowelMap.has(lowerCase)) {
        vowelMap.set(lowerCase, vowelMap.get(lowerCase) + 1);
      } else {
        vowelMap.set(lowerCase, 1);
      }
    }
  }
  return vowelMap;
}

//vowelCount('a,a,e,o,u,u')
//Map(4) {'a' => 2, 'e' => 1, 'o' => 1, 'u' => 2}
