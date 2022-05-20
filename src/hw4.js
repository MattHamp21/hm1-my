const { user1 } = require("./data");

const characters = [
  {
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: 202,
      mass: 136,
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: 150,
      mass: 49,
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: 188,
      mass: 84,
      eye_color: 'blue',
      gender: 'male',
  },
];

//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names
let getNames = characters.map(chr=>{
  return chr.name
})

let getHeight = characters.map(chr=>{
  return chr.height
})

let getArray = characters.map(chr=>{
  return {
    name: chr.name, height: chr.height
  }
})

let firstNames = characters.map(chr=>{
  return {
    name:chr.name.split(' ')[0]
  }
})
//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

let bigMass = characters.filter(chr=>{
  return chr.mass >= 100
})

let smallHeight = characters.filter(chr=>{
  return chr.height <= 200
})

let maleChr = characters.filter(chr=>{
  return chr.gender == 'male'
})

let femaleChr = characters.filter(chr=>{
  return chr.gender == 'female'
})

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

let sortMass = characters.sort(function(a,b){
  return a.mass - b.mass;
})
console.log(sortMass)
let sortHeight = characters.sort(function(a,b){
  return a.height - b.height;
})
let sortName = characters.sort(function(a,b){
  return a.name - b.name;
})
let sortGender = characters.sort(function(a,b){
  return a.gender - b.gender;
})

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//let blueEyes = characters.every(eye_color,'blue')

let blueEyes = characters.every(chr=>{
 return chr.eye_color == 'blue'
})

let smallMass = characters.every(chr=>{
  return chr.mass > 40
 })

 let shorter = characters.every(chr=>{
  return chr.height < 200
 })

 let isMale = characters.every(chr=>{
   return chr.gender == 'male'
 })

 //***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

let maleChar = characters.some(chr=>{
  return chr.gender == 'male'
})

let oneBlueEyes = characters.some(chr=>{
  return chr.eye_color == 'blue'
})

let superTall = characters.some(chr=>{
  return chr.height > 210
})

let cuteMass = characters.some(chr=>{
  return chr.mass <= 40
})

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names
let myVar = characters.reduce((accum, currents)=>{
  accum += parseInt(currents.mass);
  return accum
}, 0)
console.log(myVar)
let totalHight = characters.reduce((accum,currents)=>{
  accum += parseInt(currents.height);
  return accum
}, 0)
let totalEyes = characters.reduce((accum,currents)=>{
  accum += parseInt(currents.eye_color);
  return accum
},{brown:0, blue:0, yellow:0,})
let chrsName = characters.reduce((accum,currents)=>{
  accum += parseInt(currents.names.split('').length -1);
  return accum
}, 0)
//***Bonus***/
// come up with your own


