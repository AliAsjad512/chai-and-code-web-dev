//Signature
//.map
//Return - New Array , Iterate on each element
//Original array do not modify

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        const result =[]
        for(let i=0;i<this.length;i++){
            const value = userFn(this[i],i);
            result.push(value);
        }
        return result;
    }
}

const arr=[1,2,3,4,5];

const n2 = arr.myMap((e,index) => {
    console.log(`Index: ${index}, Value: ${e * 3}`);
});


