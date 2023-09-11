//------------------------ challenge 1 --------------------

// function getArea(length, width)
// {
//     return length * width ;
// }
// console.log("your area is " + getArea(3,5));

// function getPerimeter(length, width)
// {
//     return (length + width)*2 ;
// }
// console.log("your perimeter is " + getArea(3,5));

//------------------------ challenge 2 --------------------

// function fibonacci(n)
// {
//     // l initialisation des premiers termes n0 et n1
//     let n0 =  0, 
//         n1 = 1; 

//     if (n >= 2)
//     {
//         let ns ; 
//         console.log("n0 = " + n0 + "\nn1 = " + n1 +"\n");
//         for (let i = 2; i <= n ; i++)
//         {
//             ns = n0 + n1;
//             console.log("n"+i+" = " + ns + "\n");
//             n0 = n1 ;
//             n1 = ns ;
//         }
//     }
//     else 
//     {
//         console.log("number inferieure a 2 !!!")
//     }
// }

// fibonacci(8);

//------------------------- challenge 3 --------------------

// function vowelsAndConsonants(s) 
// {
//     const vowels = "aeiou";
//     let vowelsChar = "";
//     let consonantsChar = "";
    
//     for (let char of s) 
//     {
//         if (vowels.includes(char)) 
//         {
//             vowelsChar += char + " ";
//         } else 
//         {
//             consonantsChar += char + " ";
//         }
//     }
    
//     console.log("vowels: "+vowelsChar +"\nconsonants: "+ consonantsChar);
// }

// vowelsAndConsonants("ismail");


// //--------------------------------- challenge 4 ----------------------

// let array1 = [6];
// for( let i = 0 ; i < 6 ; i++)
// {
//     array1[i] = parseFloat(prompt("donner la val de l indice "+i));
// }
// console.log("array1 before: "+array1);
// let max = Math.max.apply(null, array1);

// const i = array1.indexOf(max);
// if (i > -1) 
// { 
//   for (let j = 0; j < array1.length; j++){
//     array1.splice(i, 1); 
//   }
// }
// console.log("array1 after: "+array1);
// let greterMax = Math.max.apply(null, array1);
// console.log("Le greterMax est: "+ greterMax);


//---------------------------- challenge 5 -----------------------------

// class Polygon {
//     constructor(sides) 
//     {
//       this.sides = sides;
//     }
  
//     perimeter() {
//       if (Array.isArray(this.sides)) 
//       {
//         const perimeter = this.sides.reduce((sum, side) => sum + side, 0);
//         return perimeter;
//       } 
//       else 
//       {
//         return "Invalid side";
//       }
//     }
//   }

//---------------------------- challenge 6 -----------------------------
  
  // class Rectangle extends Polygon {
  //   constructor(width, height) 
  //   {
  //     super([width, height, width, height]);
  //     this.width = width;
  //     this.height = height;
  //   }
  
  //   area() {
  //     return this.width * this.height;
  //   }
  // }
  
  // class Square extends Polygon {
  //   constructor(sideLength) 
  //   {
  //     super([sideLength, sideLength, sideLength, sideLength]);
  //     this.sideLength = sideLength;
  //   }
  
  //   area() 
  //   {
  //     return this.sideLength * this.sideLength;
  //   }
  // }
  
  // const rectangle = new Rectangle(3, 5);
  // console.log("Rectangle Perimeter:", rectangle.perimeter()); 
  // console.log("Rectangle Area:", rectangle.area()); 
  
  // const square = new Square(5);
  // console.log("Square Perimeter:", square.perimeter()); 
  // console.log("Square Area:", square.area()); 

  
//---------------------------- challenge 8 -----------------------------

// function fizzBuzz() 
// {
//     for (let i = 0; i <= 100; i++) 
//     {
//       if (i % 3 === 0) 
//       {
//         console.log("Fizz");
//       } 
//       else 
//       {
//         console.log(i);
//       }
//     }
//   }

//   fizzBuzz();
  