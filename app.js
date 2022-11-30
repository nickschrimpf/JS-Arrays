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
let evenMoreNumbers = Array.of(1,2) //[1,2]
 //The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
// console.log(evenMoreNumbers) 

let arrayFromArrayLike = Array.from('iterable') //['i','t','e','r','a','b','l','e']
//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// great for turning a nodelist into an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

let hobbies = ['programming','sports','video games']

// *** PUSH ***
hobbies.push('cooking')  //['programming','sports','video games','cooking']
// The push() method adds one or more elements to the end of an array and returns the new length of the array.\
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
console.log(hobbies)
console.log('pushed cooking')

// *** UNSHIFT ***
hobbies.unshift('reading') //['reading','programming','sports','video games','cooking']
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
console.log(hobbies)
console.log('unshift reading')

// *** POP ***
let popped = hobbies.pop() //popped = 'cooking' or the last element in an array
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
console.log(hobbies)
console.log(`popped ${popped}`)

// *** SHIFT ***
let shifted = hobbies.shift() //shifted = 'reading' or the first element in an array 
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
console.log(hobbies)
console.log(`shift ${shifted}`)

// *** SPLICE ***
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

// *** SLICE ***
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

// *** CONCAT ***
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

// *** INDEXOF ***
const indexOfFood = finalHobbies.indexOf('food') 
console.log(indexOfFood)//3
const indexOfFishing = finalHobbies.indexOf('fishing')
console.log(indexOfFishing)// -1 not present

// The indexOf() method returns the first index at which a given element can be found in the array,
//  or -1 if it is not present. finding primitive values [1,2,3,4] not reference values like an object 
const personalData = [{name:'nick'},{name:'audree'}]
console.log('personal data '+personalData.indexOf({name:'nick'}))//expected output -1 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// *** LASTINDEXOF ***
const lastIndexOfFood = finalHobbies.indexOf('food') //3 because it is the only index but if there were 2 values this would return the last one
// The lastIndexOf() method returns the last index at which a given element can be found in the array,
// or -1 if it is not present. The array is searched backwards, starting at fromIndex.
const animals2 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals2.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals2.lastIndexOf('Tiger'));
// expected output: 1

// *** FIND ***
const nick = personalData.find((person,index, personalData) => {
    console.log(`person ${person}`)
    console.log(`the index ${index}`)
    console.log(`and the whole array ${personalData}`)
    return person.name === 'nick'
})
console.log(nick)
// The find() method returns the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.

const findArray1 = [5, 12, 8, 130, 44];
const found = findArray1.find(element => element > 10);

console.log(found);
// expected output: 12 because find returns the first found value

// *** FindIndex ***
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

// *** FOREACH ***
// The forEach() method executes a provided function once for each array element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const pricesAfterTax = []
findIndexArray.forEach((value,index,array)=> {
    const priceObj = {id:index,priceAfterTax:value * 1.15}
    pricesAfterTax.push(priceObj)
});
console.log(pricesAfterTax);

// *** MAP ***
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

// ***SORT***
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

// *** REVERSE ***
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

// *** FILTER ***
const filtered = findIndexArray.filter((value,index,array)=> {
    return value > 40
})
console.log(filtered)
// The filter() method creates a shallow copy of a portion of a given array, 
// filtered down to just the elements from the given array that pass the test implemented by the provided function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

