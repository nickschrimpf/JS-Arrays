// // SETS
// The Set object lets you store unique values of any type, whether primitive values or object references.

// *Description
// Set objects are collections of values. A value in the Set may only occur once; it is unique in the Set's collection. You can iterate through the elements of a set in insertion order. The insertion order corresponds to the order in which each element was inserted into the set by the add() method successfully (that is, there wasn't an identical element already in the set when add() was called).

// The specification requires sets to be implemented "that, on average, provide access times that are sublinear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).

// *Value equality
// Value equality is based on the SameValueZero algorithm. (It used to use SameValue, which treated 0 and -0 as different. Check browser compatibility.) This means NaN is considered the same as NaN (even though NaN !== NaN) and all other values are considered equal according to the semantics of the === operator.

// *Performance
// The Set has method checks if a value is in a Set object, using an approach that is, on average, quicker than testing most of the elements that have previously been added to the Set object. In particular, it is, on average, faster than the Array.prototype.includes method when an Array object has a length equal to a Set object's size.

// *Constructor
// Set()
// Creates a new Set object.

// *Static properties
// get Set[@@species]
// The constructor function that is used to create derived objects.

// *Instance properties
// Set.prototype[@@toStringTag]
// The initial value of the @@toStringTag property is the string "Set". This property is used in Object.prototype.toString().

// *Set.prototype.size
// Returns the number of values in the Set object.

const ids = new Set([1,2,3,4,5])
console.log(ids)
console.log(ids.has(1))
console.log(ids.add(6))
console.log(ids.add(6))


// Set.prototype.entries()
// The entries() method returns a new Iterator object that contains an array of [value, value] for each element in the
// Set object, in insertion order. For Set objects there is no key like in Map objects. However, to keep the API similar to the Map object,
// each entry has the same value for its key and value here, so that an array [value, value] is returned.

const set1 = new Set();
set1.add(42);
set1.add('forty two');

const iterator1 = set1.entries();

for (const entry of iterator1) {
  console.log(entry);
  // expected output: [42, 42]
  // expected output: ["forty two", "forty two"]
}


// Map
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value
// (both objects and primitive values) may be used as either a key or a value.
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2

const person1 = {name:'Nick'}
const person2 = {name:'Audree'}

const latestPurchases = new Map([[person1,{'item':'that thing','price':5.99}]])
console.log(latestPurchases)
console.log(latestPurchases.get(person1))
latestPurchases.set(person2,{'item':'that other thing','price':2.99})
console.log(latestPurchases)
console.log(latestPurchases.get(person2))


for(entry of latestPurchases.entries()){
  console.log(entry)
}

// WeakSet
// WeakSet objects are collections of objects. Just as with Sets, each object in a WeakSet may occur only once;
//  all objects in a WeakSet's collection are unique.

// The main differences to the Set object are:

// WeakSets are collections of objects only. They cannot contain arbitrary values of any type, as Sets can.
// The WeakSet is weak, meaning references to objects in a WeakSet are held weakly. If no other references to an object stored in the WeakSet exist,
// those objects can be garbage collected.
// Note: This also means that there is no list of current objects stored in the collection. WeakSets are not enumerable.
// interface WeakSet<T extends object> {
    /**
     * Appends a new object to the end of the WeakSet.
     */
    //  add(value: T): this;
     /**
      * Removes the specified element from the WeakSet.
      * returns Returns true if the element existed and has been removed, or false if the element does not exist.
      */
    //  delete(value: T): boolean;
     /**
      //  returns a boolean indicating whether an object exists in the WeakSet or not.
      */
    //  has(value: T): boolean;
// }
//  interface WeakSetConstructor {
//      new <T extends object = object>(values?: readonly T[] | null): WeakSet<T>;
//      readonly prototype: WeakSet<object>;
//  }
//  declare var WeakSet: WeakSetConstructor;


// USECASE: Detecting circular references
// Functions that call themselves recursively need a way of guarding against circular data structures
//  by tracking which objects have already been processed.

// WeakSets are ideal for this purpose:
// Execute a callback on everything stored inside an object

function execRecursively(fn, subject, _refs = new WeakSet()) {
  // Avoid infinite recursion BREAK/BASE Case usually what your looking for in recursive functions
  if (_refs.has(subject)) {
    return;
  }
  console.log(_refs)
  fn(subject);
  if (typeof subject === "object") {
    _refs.add(subject);
    for (const key in subject) {
      // console.log(key)
      execRecursively(fn, subject[key], _refs);
    }
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar",
  },
};

foo.bar.baz = foo; // Circular reference!
execRecursively((obj) => console.log(obj), foo);


// WeakMap
// A WeakMap is a collection of key/value pairs whose keys must be objects, 
// with values of any arbitrary JavaScript type, and which does not create strong references to its keys. 
// That is, an object's presence as a key in a WeakMap does not prevent the object from being garbage collected.
//  Once an object used as a key has been collected, its corresponding values in any WeakMap become candidates for 
//  garbage collection as well — as long as they aren't strongly referred to elsewhere.

// WeakMap allows associating data to objects in a way that doesn't prevent the key objects from being collected, 
// even if the values reference the keys. However, a WeakMap doesn't allow observing the liveness of its keys, which 
// is why it doesn't allow enumeration; if a WeakMap exposed any method to obtain a list of its keys, the list would 
// depend on the state of garbage collection, introducing non-determinism. If you want to have a list of keys,
// you should use a Map rather than a WeakMap.

// You can learn more about WeakMap in the WeakMap object section of the Keyed collections guide.
