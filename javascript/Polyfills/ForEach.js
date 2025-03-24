//forEach() is a JavaScript array method that executes a provided function once for each element in an array,
//  in order. It is used to iterate over the elements and perform an action on each one.

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
      const originalArr = this// Doubt 
      for(let i=0;i<originalArr.length;i++){
  
     userFn(originalArr[i],i)
  
      }
  
    }
  }
  
  
  const arr1 = [1,2,3,4,5];
  //Error .forEach function does not exist on arr variable
  
  // Real Signature ko samjo - No return, function input, value, index
  // calls my function for every value
  
  
  
  
  
  arr1.myforEach(function(value,index){
    console.log(`Value at index ${index} is ${value}`);
  })
  
  
  let arr2 = "hello".split(''); // ✅ ['h', 'e', 'l', 'l', 'o']
  arr2.forEach(console.log); // Works fine
  
  
  let obje= { a: 1, b: 2 };
  Object.values(obje).forEach(console.log); // ✅ Works with object values
  