
// WHAT ARE ITERABLES?
// TECHNICALLY: OBJECTS THAT IMPLEMENT THE ITERABLE PROTOCOL AND HAVE AN @@ITERATOR MEHOD https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
// HUMAN TERMS: OBJECTS WHERE YOU CAN USE THE FOR-OF LOOP 

// ARRAY LIKE OBJECTS are objects that have a length property and use indexes to access items. ie strings, NodeLists
// array like objects are not arrays they are could be missing methods  


// ARRAYS https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// An ARRAY is an ordered collection of data (either primitive or object depending upon the language). 
// Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value.

// Each item in an array has a number attached to it, called a numeric index, that allows you to access it. 
// In JavaScript, arrays start at index zero and can be manipulated with various methods.


// createing an array
let numbers = [1,2,3,4,5,]

// Using the constructor from imput
let moreNumbers = new Array(1,2)//[1,2]
let emptyArray = new Array(5)//[ , , , , ] empy array with length of 5

// *** ARRAY METHODS ***

// *** Array.prototype.of() ***
let evenMoreNumbers = Array.of(1,2) //[1,2]
 //The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
// console.log(evenMoreNumbers)

// *** Array.prototype.from() **
let arrayFromArrayLike = Array.from('iterable') //['i','t','e','r','a','b','l','e']
//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// great for turning a nodelist into an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

let hobbies = ['programming','sports','video games']

// *** Array.prototype.push() ***
hobbies.push('cooking')  //['programming','sports','video games','cooking']
// The push() method adds one or more elements to the end of an array and returns the new length of the array.\
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
console.log(hobbies)
console.log('pushed cooking')

// *** Array.prototype.unshift() ***
hobbies.unshift('reading') //['reading','programming','sports','video games','cooking']
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
console.log(hobbies)
console.log('unshift reading')

// *** Array.prototype.pop() ***
let popped = hobbies.pop() //popped = 'cooking' or the last element in an array
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
console.log(hobbies)
console.log(`popped ${popped}`)

// *** Array.prototype.shift() ***
let shifted = hobbies.shift() //shifted = 'reading' or the first element in an array 
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
console.log(hobbies)
console.log(`shift ${shifted}`)

// *** Array.prototype.splice() ***
hobbies.splice(1,1)
 //['programming','video games'] can be given neg values to slice from the last element
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
console.log(hobbies)

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
const replacedMonth = months.splice(4, 1, 'May');// replacedMonth = "June"
console.log(replacedMonth)
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

// *** Array.prototype.slice() ***
let newHobbies = hobbies.slice() //['programming','video games']
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end
//  (end not included) where start and end represent the index of items in that array. The original array will not be
//  modified.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// *** Array.prototype.concat() ***
const intrests = ['soccer','food']
const finalHobbies = hobbies.concat(intrests)

// The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
console.log(finalHobbies)
//hobbies ['programming','video games','soccer,'food']

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// *** Array.prototype.indexOf ***
const indexOfFood = finalHobbies.indexOf('food') 
console.log(indexOfFood)//3
const indexOfFishing = finalHobbies.indexOf('fishing')
console.log(indexOfFishing)// -1 not present

// The indexOf() method returns the first index at which a given element can be found in the array,
//  or -1 if it is not present. finding primitive values [1,2,3,4] not reference values like an object 
const personalData = [{name:'nick'},{name:'audree'}]
console.log('personal data '+personalData.indexOf({name:'nick'}))//expected output -1 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// *** Array.prototype.lastIndexOf ***
const lastIndexOfFood = finalHobbies.lastIndexOf('food') //3 because it is the only index but if there were 2 values this would return the last one
// The lastIndexOf() method returns the last index at which a given element can be found in the array,
// or -1 if it is not present. The array is searched backwards, starting at fromIndex.
const animals2 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals2.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals2.lastIndexOf('Tiger'));
// expected output: 1

// *** Array.prototype.find() ***
// The find() method returns the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.
const nick = personalData.find((person,index, personalData) => {
    console.log(`person ${person}`)
    console.log(`the index ${index}`)
    console.log(`and the whole array ${personalData}`)
    return person.name === 'nick'
})
console.log(nick)


const findArray1 = [5, 12, 8, 130, 44];
const found = findArray1.find(element => element > 10);

console.log(found);
// expected output: 12 because find returns the first found value

// *** Array.prototype.findIndex() ***
// The findIndex() method returns the index of the first element in an array that satisfies 
// the provided testing function. If no elements satisfy the testing function, -1 is returned.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

const nickIndex = personalData.findIndex((person,index, personalData) => {
    return person.name === 'nick'
});
const audreeIndex = personalData.findIndex((person,index, personalData) => {
    return person.name === 'audree'
});
console.log(personalData);
console.log(`nick index ${nickIndex}`);
console.log(`audree index ${audreeIndex}`);

const findIndexArray = [5, 12, 8, 130, 44, 5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(findIndexArray.findIndex(isLargeNumber));
// expected output: 3

// *** Array.prototype.foreach() ***
// The forEach() method executes a provided function once for each array element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const pricesAfterTax = []
findIndexArray.forEach((value,index,array)=> {
    const priceObj = {id:index,priceAfterTax:value * 1.15}
    pricesAfterTax.push(priceObj)
});
console.log(pricesAfterTax);

// *** Array.prototype.map() ***
const pricesAfterTax1 = findIndexArray.map((value,index,array)=>{
    return priceObj = {id:index,pricesAfterTax:value * 1.15}
});
console.log(`priceAfterTax Map`);
console.log(pricesAfterTax1);
// The map() method creates a new array populated with the results of calling a provided
// function on every element in the calling array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const mapArray = [1, 4, 9, 16];
// pass a function to map
const map1 = mapArray.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// *** Array.prototype.sort() ***
const sorted = findArray1.sort()
console.log(sorted);
// The sort() method sorts the elements of an array in place and returns the reference to the same array,
// now sorted. The default sort order is ascending, built upon converting the elements into strings,
// then comparing their sequences of UTF-16 code units values.
// The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const reallySorted = findArray1.sort((a,b)=> {
    if (a > b){
        return 1;
    }else if (a === b) {
        return 0;
    }else {
        return -1;
    }
});
console.log(reallySorted)

// *** Array.prototype.reverse() ***
const reallyReversed = reallySorted.reverse()
console.log(reallyReversed)

// The reverse() method reverses an array in place and returns the reference to the same array,
// the first array element now becoming the last, and the last array element becoming the first. In other words,
// elements order in the array will be turned towards the direction opposite to that previously stated.

const reversedArray1 = ['one', 'two', 'three'];
console.log('reversedArray1:', reversedArray1);
// expected output: "reversedArray1:" Array ["one", "two", "three"]

const reversed = reversedArray1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('reversedArray1:', reversedArray1);
// expected output: "reversedArray1:" Array ["three", "two", "one"]

// *** Array.prototype.filter() ***
const filtered = findIndexArray.filter((value,index,array)=> {
    return value > 40
})
const filteredAgain = findIndexArray.filter(value => value > 40 && value < 100)
console.log(filtered)
console.log(filteredAgain)
// The filter() method creates a shallow copy of a portion of a given array, 
// filtered down to just the elements from the given array that pass the test implemented by the provided function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


// *** Array.prototype.reduce() ***
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element. The final result of running
// the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". 
// If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as 
// the initial value and iteration starts from the next element (index 1 instead of index 0).

// (method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number (+2 overloads)

// Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:
const reduceArray = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = reduceArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  initialValue//second argument handed to the reduce method where should the method start
);

console.log(sumWithInitial);
// expected output: 10


const reduced = reduceArray.reduce((previousVal,currentVal,currentIndex,array) => {
    return previousVal + currentVal
},initialValue)//second argument handed to the reduce method where should the method start

// METHOD CHAINING
const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];


const transformedArray = originalArray.map(obj => obj.price); // produces [10.99, 5.99, 29.99]

// const sum = transformedArray.reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97


// const sum = originalArray.reduce((sumVal, curVal) => sumVal + curVal.price, 0); // => 46.97

// CHAINED MAP AND REDUCE
const sum = originalArray.map(obj => obj.price)
    .reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97


// ***String.prototype.split()***
// The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern,
// puts these substrings into an array, and returns the array.

const splitter = ' '; //A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
const limit = 8; //A value used to limit the number of elements returned in the array.
const str = 'The quick brown fox jumps over the lazy dog.';
const stuff = str.split(splitter,limit)
const words1 = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);


// *** Array.prototype.join()***

// The join() method creates and returns a new string by concatenating all of the elements in an 
// array (or an array-like object), separated by commas or a specified separator string. If the array 
// has only one item, then that item will be returned without using the separator.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"


// Spread syntax (...)
// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments
// (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the 
// properties of an object and adds the key-value pairs to the object being created.

// Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. 
// Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them 
// into a single element. See rest parameters and rest property.
function sum1(x, y, z) {
    return x + y + z;
  }
  const numbers1 = [1, 2, 3];
  
  console.log(sum1(...numbers1));
  // expected output: 6
  
  console.log(sum1.apply(null, numbers1));
  // expected output: 6
  
//Destructuring assignment
let newProfile = ['nick','schrimpf','mr','patrick']
const [firstName,lastName,...otherInfo] = newProfile
console.log(otherInfo)
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]


