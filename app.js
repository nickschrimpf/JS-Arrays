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

hobbies.push('cooking')
// The push() method adds one or more elements to the end of an array and returns the new length of the array.\
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

hobbies.unshift('reading')
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift