// Exercise 1.1
const bool = (value) => {
  const isBool = value ? "yes" : "no";
  return isBool;
};
console.log(bool(23));
console.log(bool(0));
console.log(bool("hi"));
console.log(bool(null));

// Exercise 2.1 ----------------------------------------------------------------------------------
const numArray = [32, 49000, -15, 32425242, 1, 92];
function sumOfTwo(array) {
  array = array.filter((num) => num >= 0 && Number.isInteger(num));
  const lowestNum = Math.min(...array);
  array.splice(array.indexOf(lowestNum), 1);
  const lowestNum2 = Math.min(...array);
  return lowestNum + lowestNum2;
}

// const sumOfTwo = (array) => {
//     const sortedArray = array.filter(num => num >= 0 && Number.isInteger(num)).sort((a, b) => a - b);
//     return sortedArray[0] + sortedArray[1];

console.log(sumOfTwo(numArray));

// Exercise 2.2 -------------------------------------------------------------------------------------------------------------------
const array = [0, 1, 1, 0, 1, 1];
// function equivToInt(array){
//     let sum = 0;
//     let powCounter = array.length-1;
//     for(let int of array){
//         const convertedEquiv = (Math.pow(2,(powCounter))) * int ;
//         sum = sum + convertedEquiv;
//         powCounter --;
//     }
//     return sum;
// }

const equivToInt = (array) => {
  return array.reduce(
    (sum, int, index) => sum + int * Math.pow(2, array.length - index - 1),
    0
  );
};
console.log(equivToInt(array));

// Exercise 2.3 -------------------------------------------------------------------------------------------------
// 1.make function that receive an integer
// 2.check if its a perfect square with sqrt method if not return -1
// 3.if do find the next integral perfect square by adding 1 to the integral integer.

// function findNextSquare(integer) {
//   const intSqr = Math.sqrt(integer);
//   if(Number.isInteger(intSqr) === false ){
//     return -1;
// } else {
//     const nextPerfectSquare = Math.pow((intSqr + 1), 2)
//     return nextPerfectSquare;
// }

const findNextSquare = (integer) =>
  Number.isInteger(Math.sqrt(integer))
    ? Math.pow(Math.sqrt(integer) + 1, 2)
    : -1;

console.log(findNextSquare(676));
console.log(findNextSquare(729));
console.log(findNextSquare(784));

// Exercise 2.4 ---------------------------------------------------------------------------------------------------

const uniqueArray = [1, 1, 1, 1.89, 1, 1, 1, 1, 1];
function unique(array) {
  array.sort();
  return array[0] === array[1] ? array[array.length - 1] : array[0];
}
console.log(unique(uniqueArray));

// Exercise 2.5 -------------------------------------------------------------------------------------------------

const summation = (int) => {
  let sum = 0;
  for (let i = 1; i <= int; i++) {
    sum += i;
  }
  return sum;
};
// const n = 10;
// sum = n * (n + 1) / 2;
// console.log(sum);

// const summation = (int) => {
//     return (int * (int + 1)) / 2;
//   };

console.log(summation(10));

// Exercise 2.6

function yearToCentry(year) {
  if (year % 100 === 0) {
    return year / 100;
  }
  return Math.floor(year / 100 + 1);
}
console.log(yearToCentry(2000));
console.log(yearToCentry(32));
console.log(yearToCentry(1567));

// Exercise 2.7 -----------------------------------------------------------------------------------------------------

function mathOperator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    case "%":
      return num1 % num2;
    case "**":
      return num1 ** num2;
    default:
      return "Invalid Input - Please insert valid numbers and operator";
  }
}

console.log(mathOperator("-", 7, 10));
console.log(mathOperator("%", 20, 10));
console.log(mathOperator("+", 10, 10));

// Exercise 3.1 --------------------------------------------------------------------------------------------

function nb_year(pO, percent, aug, p) {
  if (
    !Number.isInteger(aug) ||
    (percent !== null && percent < 0) ||
    pO < 0 ||
    p < 0
  ) {
    return "Invalid Input - Please insert valid numbers";
  }
  let years = 0;
  while (pO < p) {
    pO += pO * (percent / 100) + aug;
    years++;
  }
  return years;
}

console.log(nb_year(18900, 2.2, 111, 33300));
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1310, 2, 400, 123400));

// Exercise 3.2 --------------------------------------------------------------------------------------------
// 1.creating array that contains arrays with 2 integer values .
// 2.count all the people on the bus.
// 3.count all the people of the bus.
// 4.the people left will be the subtract of those two counts.

const busStops = [
  [6, 0],
  [5, 2],
  [4, 1],
  [9, 5],
  [10, 2],
  [6, 6],
];
const busStops2 = [
  [10, 0],
  [5, 10],
  [4, 8],
  [9, 9],
  [10, 2],
  [7, 6],
];

// function busCapacity(array){
//     let totalOnBus = 0;
//     let totalOffBus = 0;
//     for (let i =0 ; i< array.length ; i++){
//         totalOnBus += array[i][0];
//         totalOffBus += array[i][1];
// }
// const totalLeft = totalOnBus -totalOffBus;
// return totalLeft
// }

function busCapacity(busStops) {
  let totalLeft = 0;
  for (const [peopleOn, peopleOff] of busStops) {
    totalLeft += peopleOn - peopleOff;
  }
  return totalLeft;
}
console.log(busCapacity(busStops));
console.log(busCapacity(busStops2));

//  Exercise 4.1 --------------------------------------------------------------------------------------------------

function fibonacciIterative(n) {
  if (n <= 0) return "nope";
  if (n === 1) return 0;
  if (n === 2) return 1;
  let prev = 0;
  let current = 1;
  for (let i = 3; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  return current;
}
console.log(fibonacciIterative(10));
console.log(fibonacciIterative(8));
console.log(fibonacciIterative(20));

// Exercise 4.2 ------------------------------------------------------------------------------------------------

function tribonacci(signature, n) {
  if (n === 0) {
    return [];
  } else if (n <= signature.length) {
    return signature.slice(0, n);
  } else {
    while (signature.length < n) {
      const nextElement = signature.slice(-3).reduce((sum, num) => sum + num, 0);
      signature.push(nextElement);
    }
    return signature;
  }
}

console.log(tribonacci([1,1,1], 5));
console.log(tribonacci([3,5,9], 8));
console.log(tribonacci([9,17,31], 12));


// Exercise 5.1 ------------------------------------------------------------------------------

const trimmingString = (string) => {
  return string.slice(1, string.length - 1);
};

console.log(trimmingString("hello"));
console.log(trimmingString("daniel"));
console.log(trimmingString("thisismadness"));

// Exercise 5.2 -----------------------------------------------------------------------------------

const repeat_str = (count, string) => {
  return `${string.repeat(count)}`;
};
console.log(repeat_str(6, "javascript"));
console.log(repeat_str(3, "java"));
console.log(repeat_str(5, "fibonacci"));

// Exercise 5.3 -------------------------------------------------------------------------------------

// function toCamelCase(string) {
//   string = string.replaceAll(/[-_]/g, " ");
//   const stringArr = string.split(" ");
//   for (let i = 0; i < stringArr.length; i++) {
//     const word = stringArr[i];
//     const firstChar = word[0].toUpperCase();
//     stringArr[i] = firstChar + word.slice(1);
//   }
//   return stringArr.join("");
// }

function toCamelCase(string) {
  return string.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}

console.log(toCamelCase("The_Stealth_Warrior_of-the_Dessert"));
console.log(toCamelCase("into-the_Void-of_The_unkown"));

// Exercise 5.4 --------------------------------------------------------------------------------------------
// make function that receive string arg.
// 2.make count variable
// 3.using map method ill update every char by comparing the count modulo and adding 1 every loop.
// 4.add condition that takes the space and ignore him.
function toWeirdCase(string) {
  const charArr = string.split("");
  let count = 2;
  const weirdCaseArr = charArr.map((char) => {
    if (count % 2 === 0) {
      char = char.toUpperCase();
    }
    if (char !== " ") {
      count++;
    }
    return char;
  });
  return weirdCaseArr.join("");
}

console.log(toWeirdCase("weird string case"));
console.log(toWeirdCase("I miss css and html"));
console.log(toWeirdCase("javascript"));

// Exercise 5.5 ----------------------------------------------------------------------------------

// function nameToInitials(string){
//   let initials = [];
//   const separate = string.split(' ');
//   for(const word of separate){
//     initials.push(word[0].toUpperCase());
//   } return initials.join('.');
// }

function nameToInitials(string) {
  return string
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
}

console.log(nameToInitials("daniel yehezkely"));

// Exercise 5.6 ---------------------------------------------------------------------------------------

function maskify(string) {
  let maskedString = string.split("");
  for (let i = 0; i < maskedString.length - 4; i++) {
    maskedString.splice(i, 1, "#");
  }
  return maskedString.join("");
}

console.log(maskify("asdasdjasjdhajshd211314"));
console.log(maskify("111jshdae4"));
console.log(maskify("somescertetpasswordoverhere"));

//  Exercise 5.7 -----------------------------------------------------------------------------------------

function shortest(string) {
  if (string === "" || string === undefined) {
    return "Invalid Input - Please insert valid input";
  }
  const strArr = string.split(" ");
  let shortestWord = strArr[0];
  for (let i = 1; i < strArr.length; i++) {
    const currentWord = strArr[i];
    if (currentWord.length < shortestWord.length) {
      shortestWord = currentWord;
    }
  }
  return shortestWord.length;
}



console.log(shortest("Th1s Task Is Pretty Fun"));
console.log(shortest("enjoying javascript full time"));
console.log(shortest("the best transformer optimus prime"));

// Exercise 5.8 ----------------------------------------------------------------------------

// function longestWord(string) {
//   if (string === "" || string === undefined) {
//     return "invalid";
//   }
//   const wordsArr = string.split(" ");
//   let longestWordLength = 0;
//   let longestWordArr = [];
//   for (let i = 0; i < wordsArr.length; i++) {
//     const currentWord = wordsArr[i];
//     const currentWordLength = currentWord.length;
//     if (longestWordLength < currentWordLength) {
//       longestWordArr.length = 0;
//       longestWordArr.push(currentWord);
//       longestWordLength = currentWordLength;
//     } else if (longestWordLength === currentWordLength) {
//       longestWordArr.push(currentWord);
//     }
//   }
//   return longestWordArr;
// }

function longestWord(string) {
  if (!string) {
    return "Invalid Input - Please insert valid input";
  }

  const wordsArr = string.split(" ");
  const longestWordLength = Math.max(...wordsArr.map((word) => word.length));
  const longestWordArr = wordsArr.filter(
    (word) => word.length === longestWordLength
  );

  return longestWordArr;
}

console.log(longestWord("I tried so hardy and got so far"));
console.log(longestWord("one of the most popular in history anime"));
console.log(longestWord("this ia an example sentence for testing"));

// Exercise 6.1 --------------------------------------------------------------------------------------

// 1.make a function that receive string arg
// 2.create condition for the arg that takes only capital and normal letters.
// 3.make a variable that return the char uppercased + the repeats lowercased.
// 4.every iteration round splice the the array and replace the char with uppercased and the repeats lowercased

// function accumulator(string) {
//   for (const char of string) {
//     if (!/[A-Za-z]/.test(char)) {
//       return "Invalid Input";
//     }
//   }
//   const charArr = string.split("");
//   for (let i = 0; i < charArr.length; i++) {
//     let char = charArr[i];
//     const newString = char.toUpperCase() + char.toLowerCase().repeat(i);
//     charArr.splice(i, 1, newString);
//     console.log(charArr);
//   }
//   return charArr.join("-");
// }

function accumulator(string) {
  for (const char of string) {
    if (!/[A-Za-z]/.test(char)) {
      return "Invalid Input - Please insert valid input";
    }
  }
  const charArr = string
    .split("")
    .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i));
  return charArr.join("-");
}
console.log(accumulator("Dyz"));
console.log(accumulator("cwAt"));
console.log(accumulator("RqaEzty"));

// Exercise 6.2 ------------------------------------------------------------------------------------


function countDuplicates(string) {
  const countObjective = {};
  const lowerCaseInput = string.toLowerCase();
  for (let char of lowerCaseInput) {
    countObjective[char] = (countObjective[char] || 0) + 1;
  }
  let duplicatesCount = 0;
  for (let key in countObjective) {
    if (countObjective[key] > 1) {
      duplicatesCount++;
    }
  }
  return duplicatesCount;
}

console.log(countDuplicates("indivisibility"));

// exercise 6.3 ------------------------------------------------------------------------------------------------

function organizeStrings(stringA, stringB) {
  if (!/^[a-z]+$/.test(stringA) || !/^[a-z]+$/.test(stringB)) {
    return "Invalid Input - Please insert words from a-z";
  }
  const sortedStrArray = stringA.concat(stringB).split("").sort();
  const sortedString = {};
  for (let char of sortedStrArray) {
    sortedString[char] = sortedString[char];
  }
  return Object.keys(sortedString).join("");
}
console.log(organizeStrings("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(organizeStrings("qqweeryrtpasxxnbjk", "asssssdacemopq"));
console.log(organizeStrings("asdash3asjal", "ncmasbsudhha"));

// exercise 6.4 --------------------------------------------------------------------------------------------------

function isIsogram(string) {
  string = string.toLowerCase();
  const container = {};
  for (let char of string) {
    container[char] = (container[char] || 0) + 1;
    if (Math.max(...Object.values(container)) > 1) {
      return false;
    }
  }
  return true;
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

// exercise 7 ------------------------------------------------------------------------------------------------------

// filter method
const exampleArray = [1, 2, 3, 4, 5];

const filterFunction = (array) => {
  const filteredArray = [];
  let filteredIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 4) {
      filteredArray[filteredIndex] = array[i];
      filteredIndex++;
    }
  }
  return filteredArray;
};
console.log(filterFunction(exampleArray));

// foreach method
const forEachFunction = (array) => {
  for (let value of array) {
    console.log(value * value);
  }
};
forEachFunction(exampleArray);

// map method
const mapFunction = (array) => {
  const newArray = [];
  for (let value of array) {
    newArray.push(value * 2);
  }
  return newArray;
};
console.log(mapFunction(exampleArray));

// exercise 8 --------------------------------------------------------------------------------------------

const findPerimeter = (length, width) => 
Number.isInteger(length) && Number.isInteger(width) ? 
2 * (length + width) :
'Invalid Input - Please insert valid numbers';

console.log(findPerimeter(20,30));
