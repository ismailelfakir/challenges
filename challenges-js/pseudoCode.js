//------------------------ ex 2 --------------------

// function calculateAverage(num1, num2, num3) 
// {
//       const average = (num1 + num2 + num3) / 3;
//       return `The average of (${num1}, ${num2}, ${num3}) is: ${average}`;
//   }
  
// console.log(calculateAverage(4,4,4));

//------------------------ ex 4 --------------------

// function findMax(num1, num2, num3) 
// {
//     const maxNum = Math.max(num1, num2, num3);
//     return `The maximum number is: ${maxNum}`;
//   }

// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));
// const num3 = parseFloat(prompt("Enter the third number:"));

// console.log(findMax(num1, num2, num3)) ;

//---------------------- ex 6 --------------------

// const age = parseInt(prompt("Enter your age:"));

//   if (age >= 18) 
//   {
//     console.log("You are eligible to vote!");
//   } 
//   else if (age >0 && age < 18)
//   {
//     console.log("You are not eligible to vote yet.");
//   } 
//   else 
//   {
//   console.log("Please enter a valid age.");
//   }

//---------------------- ex 8 --------------------

// function sumPositiveNumbers(numbers) 
// {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) 
//   {
//     if (numbers[i] > 0) 
//     {
//       sum += numbers[i];
//     }
//   }

//   return sum;
// }

// const input = prompt("Enter a list of numbers separated by commas:");
// const numberArray = input.split(',').map(parseFloat);

// if (numberArray.some(isNaN)) 
// {
//   console.log("Please enter valid numbers separated by commas!");
// } 
// else 
// {
//   const positiveSum = sumPositiveNumbers(numberArray);
//   console.log(`The sum of positive numbers in the list is: ${positiveSum}`);
// }

// //------------------------- ex 10 --------------------------

// // function traitement
// function countOccurrences(arr, target) 
// {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) 
//   {
//     if (arr[i] === target) 
//     {
//       count++;
//     }
//   }
//   return count;
// }
//  // input the table of numbers
// const numbers = [2,4,6,8,3,7,9,10,12,15];

// // for (let i = 1; i <= 10; i++) 
// // {
// //   const n = parseInt(prompt(`Enter the ${i} number :`));
// //   numbers.push(n);
// // }

// do{
//   //input the target number
// const target = parseInt(prompt("Enter the element to search for:"));
// }while(isNaN(target));

// //check the target if not null
// if (!isNaN(target)) 
// {
//   const occurrences = countOccurrences(numbers, target);
//   alert(`The number of occurrences of ${target} in your array is: ${occurrences}`);

// } 
// else 
// {
//   alert("Please enter a valid number");
// }

//-------------------------  ex 12 ------------------------------ 

// for (let i = 1; i <= 10; i++) {
//   console.log(`8 x ${i} = ${8*i}\n`);
// }

//------------------------- ex 14 -----------------

// const m = parseFloat(prompt("Enter the first number (m):"));
// const n = parseFloat(prompt("Enter the second number (n):"));

// if (!isNaN(m) && !isNaN(n)) 
// {
//   const p = m * n;
//   if (p > 0) 
//   {
//     alert("The product is positive.");
//   } 
//   else if (p < 0) 
//   {
//     alert("The product is negative.");
//   } 
//   else 
//   {
//     alert("The product is zero.");
//   }
// } 
// else 
// {
//   alert("Please enter valid numbers for both m and n.");
// }
