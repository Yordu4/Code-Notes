// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
//   const {today,tomorrow} = HIGH_TEMPERATURES;
//   console.log(tomorrow);

// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a,b,c); // 1, 2, 5
// console.log(1,2); 
  
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeFirstTwo(list) {
//   "use strict";
//   // change code below this line
//   const [a, b, ...arr] = list;
//   // change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source); //this const arr is different from const arr inside the function
// console.log(arr);

// const person = {
//     name: "Zodiac Hasbro",
//     age: 56
//   };
//   // Template literal with multi-line and string interpolation
//   const greeting = `Hello, my name is ${person.name}!
//   I am ${person.age+3} years old.`;
//   console.log(greeting); // prints
//   // Hello, my name is Zodiac Hasbro!
//   // I am 56 years old.

// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer is set to true to represent a successful response from a server
//   let responseFromServer = true;
//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {  
//     reject("Data not received");
//   }
// });
// makeServerRequest.then(result=>{
// console.log(result);
// });
// makeServerRequest.catch(error=> {
//   console.log(error);
// });

// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);
// console.log(result);

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig;
// let result = quoteSample.match(alphabetRegex); 
// console.log(result);

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/ig; // gets 
// let result = difficultSpelling.match(myRegex);
// console.log(result);

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/g;
// let Regex = /.*/g;
// let result = text.match(myRegex);
// console.log(result);
// console.log("sfaasdsd".match(Regex));

// var exp = /t[a-z]*?i/;
// console.log(exp.test("titanic"));
// console.log(exp.test("ti"));

// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex).length;
// console.log(result);

// let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// let someRegexp = /\d+/g;
// console.log(dateTime.test("01-30-2003 15:20"));
// console.log(dateTime.test("30-jan-2003 15:20"));
// console.log(someRegexp.test("729347239472394878"));
// console.log(someRegexp.test("sdf"));
// console.log("234234234797 asdadas 1231293".match(someRegexp));

// let qu = "qu";
// let q = "q";
// let pqRegex= /q(?=u)/;
// let nqRegex = /q(?!u)/;
// console.log(q.match(nqRegex));
// console.log(noquit.match(quRegex));
// console.log(nqRegex.test(q));


// let repeatNum = "42 42 42 42";
// let reRegex = /^(\d+)(\s)\1\2\1$/; 
// let result = reRegex.test(repeatNum);
// let result1 = repeatNum.match(reRegex);
// console.log(result);

// console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'));

// myString="today was a good day from God";
// myRegexp= /\w+/g;
// console.log(myString.match(myRegexp));

// members = {
//     Alan: {
//       online: false
//     },
//     Jeff: {
//       online: true
//     },
//     Sarah: {
//       online: true
//     }
// }
// function countOnline(usersObj) {
//     let i=0;
//     for (let b in usersObj){
//         if (usersObj[b].online){
//         i++;
//         }
//     }
//     return i;
// }
// function getArrayOfUsers(obj) {
//     return Object.keys(obj); 
//     //returns an array of keys
// }
// console.log(countOnline(members));
// console.log(getArrayOfUsers(members));

// var t0 = performance.now()

// for(var i=0;i<2000;i++){
//     console.log("hello");
// }

// var t1 = performance.now()
// console.log(t1 - t0)

// var start = new Date().getTime();

// for(var i=0;i<2000;i++){
//     console.log("hello");``
// }

// var end = new Date().getTime();
// var time = end - start;
// console.log(time);

// console.log(/z{2,5}/.test('zzzzzzz'));`