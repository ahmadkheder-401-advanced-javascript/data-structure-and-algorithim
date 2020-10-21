# White Board

## Problem domain

write a function that determines the most common word in a book

## Algorithm

- Define a string.
- Convert the string into lowercase to make the comparison insensitive.
- Split the string into words.
- Two loops will be used to find duplicate words. Outer loop will select a word and Initialize variable count to 1. Inner
- loop will compare the word selected by outer loop with rest of the words.
- If a match found, then increment the count by 1 and set the duplicates of word to '0' to avoid counting it again.
- After the inner loop, if count of a word is greater than 1 which signifies that the word has duplicates in the string.

## code

```javascript

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
```

**input:** string 
**output:** string

## Big O

- time: O(n)
- space: O{(n)

## Visualization

![WhiteBoard Img](https://github.com/ahmadkheder-401-advanced-javascript/data-structure-and-algorithim/blob/mostFrequent/react-challenges/mostRepitiveWord/mostfrequent.jpg)
