'use strict';
const HashTable = require('../hashtable/hashtable').HashTable;

function repeatedWord(str){

  let arrOfStrings = str.split(' ');

  let hash = new HashTable(arrOfStrings.length);

  for (let i = 0; i < arrOfStrings.length; i++) {
    hash.add(arrOfStrings[i].toLowerCase(),arrOfStrings[i]);
    for (let j = i + 1; j < arrOfStrings.length; j++) {

      if(hash.contains(arrOfStrings[j])){
        return arrOfStrings[i].toLowerCase();

      }
    }
  }

}
module.exports = repeatedWord;
let str0 = 'Once upon a time, there was a brave princess who...';
let str1 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

let test0= repeatedWord(str0);
let test1= repeatedWord(str1);
console.log(test0);
console.log(test1);
