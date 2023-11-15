// 1

// function filterByDivisibility(arr1, arr2) {
//     return arr1.filter(number => {
//       return arr2.some(divisor => number % divisor === 0);
//     });
//   }
  
//   let randomNumbersArray = [];
//   for (let i = 0; i < 20; i++) {
//     randomNumbersArray[i] = Math.floor(Math.random() * 100); 
//   }
  
//   let divisorArray = [2, 3, 5, 11];
  
//   let resultArray = filterByDivisibility(randomNumbersArray, divisorArray);
  
//   console.log(resultArray);
  

// 2

// function generateRandomNumbersInRange(count, start, end) {
//     let randomNumbersArray = [];
  
//     for (let i = 0; i < count; i++) {
//       let randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
//       randomNumbersArray.push(randomNumber);
//     }
  
//     return randomNumbersArray;
//   }
  
//   let numberOfNumbers = 10;
//   let startRange = 1;
//   let endRange = 100;
  
//   let myRandomArray = generateRandomNumbersInRange(numberOfNumbers, startRange, endRange);
  
//   console.log(myRandomArray);
  

// 3

// function sortArrayAscending(inputArray) {
//     return inputArray.slice().sort((a, b) => a - b);
//   }
  
//   let myRandomArray = [5, 2, 8, 1, 9, 3];
//   let sortedArray = sortArrayAscending(myRandomArray);
  
//   console.log(sortedArray);
  

// 4

// function generateRandomColors(numColors) {
//     const randomColorsArray = [];
  
//     for (let i = 0; i < numColors; i++) {
//       const red = Math.floor(Math.random() * 256);
//       const green = Math.floor(Math.random() * 256);
//       const blue = Math.floor(Math.random() * 256);
  
//       const randomColor = `rgb(${red}, ${green}, ${blue})`;
//       randomColorsArray.push(randomColor);
//     }
  
//     return randomColorsArray;
//   }
  
//   const numberOfColors = 5;
//   const randomColors = generateRandomColors(numberOfColors);
  
//   console.log(randomColors);
  

// 5

// function printAndColorizeColors(colorArray) {
//     colorArray.forEach(color => {
//       console.log(`%c ${color} `, `background-color: ${color}; color: white; padding: 5px;`);
//     });
//   }
  
//   const randomColors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)"];
  
//   printAndColorizeColors(randomColors);
  

