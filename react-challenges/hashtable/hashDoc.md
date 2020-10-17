# hashTable

 hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found.

## Challenge

Implement a Hashtable with the following methods: add, get, contain, hash

## Approach & Efficiency

Big O  :
Space complexity : O(n).
Time complexity: O(1).

## whiteboard

**Problem Domain:**
add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
get: takes in the key and returns the value from the table.
contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
hash: takes in an arbitrary key and returns an index in the collection.

**Algorithm:**

- have a linked list class defined
- create a class that takes in the array size
- define hashing method that takes in the key and return an index in the range of the array size using summation and multibling with the prime number
- define add methodd which will add the new value to its index as a node
- define get method that will return the value of the passed hashed key/index
- define contain method which gives a boolean result.

**edge case:**

- index out of bound(get method)

**code:**

```javascript

class HashTable {
  constructor(size) {
    this.size = size;
    this.entries = new Array(size);  t
  }
  hash(key) {
    let charArr = key.split('');
    return charArr.reduce((accumilate, value) => {
      return accumilate + value.charCodeAt(0);

    }, 0) * 599 % this.size;
  }
  add(key, value) {
    let hashIndex = this.hash(key);

    if (!this.entries[hashIndex]) {
      this.entries[hashIndex] = new LinkedList();
    }
    let entry = { [key]: value };
    this.entries[hashIndex].append(entry);
  }
  get(key) {
    const index = this.hash(key);
    return this.entries[index] ? this.entries[index] : null;
  }
  contains(key) {
    const hashIndex = this.hash(key);
    return this.entries[hashIndex]  ? 1 : 0;
  }

}
```
