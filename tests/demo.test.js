
//function it(str, callback){
//  console.log(type str) //str
//  callbackFunction
//}


//it('here is the string', ()=>{})

it('test equality', ()=>{
  // do my test
  let num = 1
  expect(num).toBe(1) 

  let nums = [1,2,3,4]
  expect(nums).toBe([1,2,3,4])
})

it('test equality objects'),()=>{
  let person1 = {name:'bob dole', age:88}
  let person2 = {name:'bob dole', age:88}
  let person3 = {name:'jim dole', age:18}
  let person4 = {name:'jim dole', age:18}

  expect(person1).not.toBe(person2)
}