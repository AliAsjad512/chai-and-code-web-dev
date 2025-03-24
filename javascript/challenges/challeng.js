
// Problem Create an array containing different type of teas


let differentTea = ['Bubble Tea','Kung fu Tea', 'Green tea'];

//console.log(differentTea);


//Problem :  Add "Chmomile Tea" to the existing list of teas

let AddTea = ['Bubble Tea','Kung fu Tea', 'Green tea'];

AddTea.push('Chmomile Tea')


//console.log(AddTea);


//Problem: Remove "Green Tea " from the list of teas

let eliminateTea =  ['Bubble Tea','Kung fu Tea', 'Green tea','White tea'];

const index = eliminateTea.indexOf('Green tea');
if(index > -1){
    eliminateTea.splice(index,2);
}

console.log(eliminateTea)


// Problem: Filter the list to only include teas that are caffeinated
let drinks =  ['Bubble Tea','Kung fu Tea', 'Green tea' , 'coffee'];

let filterDrinks = drinks.filter(item => item !== "coffee");


//Problem : Sort the List of teas in alphabetical order
let differentDrinks = ["Bubble tea", "Apple tea","Donuts", "Pie Donuts", "Coffee"];
differentDrinks.sort();
// console.log(differentDrinks);



//Problem: Use a for loop to print each type of tea in the array

let printDrinks = ["Bubble tea", "Apple tea","Donuts", "Pie Donuts", "Coffee"];

for(let i=0;i<printDrinks.length;i++){
    //console.log(printDrinks[i]);
}


//Problem Only print tea using loop
let printTeaDrinks = ["Bubble tea", "Apple tea","Donuts", "Pie Donuts", "Coffee"];

for(let i=0;i<printTeaDrinks.length;i++){
    if(printTeaDrinks[i] !== 'Coffee'){
   // console.log(printTeaDrinks[i]);
    }
}



//Problem: Use a for loop to create a new array with all tea names in uppercase

let CopyDrinks = printTeaDrinks.concat();


for(let i=0;i<CopyDrinks.length;i++){
    let singleDrink=CopyDrinks[i];
    console.log(singleDrink.toUpperCase());

}


//Problem Reverse the Array
console.log(CopyDrinks.reverse());


//Proble Use a for loop to find the tea name with the most character
let FindWordLength = ["Bubble tea", "Apple tea","Donuts", "Pie Donuts", "Coffee"];
let maxLength=FindWordLength[0].length;
let word =FindWordLength[0];

for(let i=0;i<FindWordLength.length;i++){
    
   if(maxLength<FindWordLength[i].length){
    maxLength = FindWordLength[i].length;
  word = FindWordLength[i];
   }

}
//console.log(word);