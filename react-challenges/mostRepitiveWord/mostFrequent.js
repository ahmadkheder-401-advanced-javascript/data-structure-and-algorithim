'use strict';
const HashTable = require('../hashtable/hashtable').HashTable;

function repeatedWord(str) {
  let arrOfStrings = str.split(' ');

  let hash = new HashTable(arrOfStrings.length);
  let tempWord = null;
  let tempCounter = 0;
  for (let i = 0; i < arrOfStrings.length; i++) {
    hash.add(arrOfStrings[i].toLowerCase(), arrOfStrings[i]);
    for (let j = i + 1; j < arrOfStrings.length; j++) {

      if (hash.contains(arrOfStrings[j])) {
        tempWord = arrOfStrings[j];
        tempCounter++;
        // console.log(tempWord,tempCounter)
        if(tempCounter >= 1 ){
          return tempWord;
        }

      }
    }

  }
}
let str0 = 'In a galaxy far far away';
let str1 = 'Taco cat ate a taco ';
let str2 = 'No. Try not. Do or do not. There is no try. ';

let test0 = repeatedWord(str0);
let test1 = repeatedWord(str1);
let test2 = repeatedWord(str2);
console.log(test0);
console.log(test1);
console.log(test2);
