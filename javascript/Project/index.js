

// if(!Array.prototype.myMap){
// Array.prototype.myMap = function(userfn){
//     let result = [];
//     for(let i=0;i<this.length;i++){
//       let val=userfn(this[i]);
//       result.push(val);
//     }
//     return result;
// }
// }

// const arr = [1,2,3,4,5];
// const n=arr.myMap(e=>e*3);
// console.log(n);


//Array reduce use userfunction on each element of the array in order passing in the 
//return value from the calculation on the preceding element
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userfn){
        let result = 0;
        for(let i=0;i<this.length;i++){
          userfn(this[i],i)
        }
        
    }
    }
    
    const arr = [1,2,3,4];
    arr.myForEach(function(e,i){
console.log(`Value ${e}, at index ${i}`)
    }
    )
    








