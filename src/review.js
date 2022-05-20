// // is scoped to the file
// //let age = 34;
// let bar = 'yoyo'

// const foo = ()=>{
//     // bar is scoped to the function
//     let bar = 21
//     console.log(age)
//     console.log(bar) // 21
// }


// foo() // 34
// console.log(bar) // 'yoyo'

// let age = 34;
// let name = 'James'
// // foo() // 34
// // console.log(bar) // 'yoyo'
// const sayHi = (name)=>{
//     // bar is scoped to the function
//     console.log(`Hello ${name}`) // undefined
// }

// // is scoped to the file


// sayHi()

// console.log(typeof 1); // number
// console.log(typeof typeof 1); // string
// console.log(typeof "yo"); // string
// console.log(typeof 1.2); // number
// console.log(typeof []); // object: huh?
// console.log([] instanceof Array); // true: see it is an array
// console.log(typeof { yo: "asdf" }); // object
// console.log({ yo: "asdf" } instanceof Object); // true
// console.log(typeof true); // boolean
// typeof null // object

// //conditiions 

// const season = "spring";

// if (season === "spring") {
//   console.log("yeah for spring");
// } else if (season === "summer") {
//   console.log("yeah for Summer");
// } else if (season === "fall") {
//   console.log("yeah for fall");
// } else {
//   console.log("yeah for winter");
// }

// // switch - another if else if (preffered if 3 or more)
// // switch (key) {
// //     case value:

// //         break;

// //     default:
// //         break;
// // }
// switch (season) {
//   case "spring":
//     console.log("yeah for spring");
//     break; // exit this switch statment
//   case "summer":
//     console.log("yeah for summer");
//     break;
//   case "fall":
//     console.log("yeah for summer");
//     break;
//   default:
//     console.log("yeah for winter");
//     break;
// }
// let num = 5
// let isOdd

// // if(num % 2 === 0){
// //     isOdd =false
// // } else {
// //     isOdd = true
// // }

// // // ternary
// // isOdd = num % 2 === 0 ? false : true 

// // console.log(isOdd)



// let x 

// // short circuit evaluation
// let y = x || 3

// console.log(y) //3

// const myFilter = (arr,func) => {
//   let itemsToKeep = []
//   arr.forEach((currentItem)=>{
//       // how do i know if I want to keep the thing
//       // when i don't even know what the thing is.
//       // ok if you(the person using myFilter) give me
//       // a function that return true when give the thing then
//       // i can make
//       if(func(currentItem)){
//           itemsToKeep.push(currentItem)
//       }
//   })
//   return itemsToKeep

// }

// let x = myFilter([1,2,3,4,5], (num)=> {
//   return num%2 ===0
// })
// let y = myFilter([{name:'tony', age:21},{name:'bob',age:12}], (person)=> person.age >= 21)
// console.log(x)
// console.log(y)
// const myForEachLoop = (arr, func) =>{
//   for(let i=0; i< arr.length; i++){
//       func(arr[i])
//   }
// }

// let yo = myForEachLoop([1,2,3,4,5], (thing)=> {console.log(thing)})
// console.log(yo)

// // goes in the array calls function and what that function is pushed into 
// // in a new array. and at the that array is returned
// const myMap = (arr, func) =>{
//   let itemsToReturn = []
//   for(let i=0; i< arr.length; i++){
//       // create a new thing with the function they give me
//       let newThing = func(arr[i])
//       itemsToReturn.push(newThing)
//   }
//   return itemsToReturn
// }

// let yo1 = myMap([1,2,3,4,5], (thing)=> thing *2)
// console.log(yo1) //

let nums = [1,2,3,4]

let total = nums.reduce((accum, currentItem)=>{

})