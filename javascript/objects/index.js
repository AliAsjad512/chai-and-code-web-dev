// const person={
//     x:10,
//     firstName :'Ali',
//     lastName : 'Abbas',
//     hobbies : ['Coding','Gym'],
//     isMarried :false,
//     hasGf: false,
//     getFullName : function(){
//         return 'Ali Abbas'
//     },
//     address : {
//   hno:1,
//   street:1,
//   countryCode: 'IN',
//   state : 'PB'

//     }

// }



// console.log(person.address.state)

// const remote = {
//     color: 'black',
//     brand : 'XYZ',
//     dimesions : {height:1, width:1},
//     turnOff : function(){

//     },
//     volumeUp : function(){
        
//     }
// }

const teas ={
    name : "Lemon tea",
    type : "Lemon",
    caffeine: "strong",
    size : "small",
    explain:"This tea made to lose weight"
    ,
    
    MoreTeas :{
        first : "Green Tea",
        second : "Black Tea",
        third : "White Tea"
    },
    descritpion:function(explain){
        return this.explain;
    },
    blackTea : {
        name : "Black tea"
    }
}

//shallow 
//const newTeas = teas;


// const CopyTeas = {...teas};



const CopyTeas = teas;
console.log(CopyTeas);
//Deep copy

// const p1KaString = JSON.stringify(teas);
// console.log(p1KaString)
// let p2 = JSON.parse(p1KaString);
// console.log(p2)


//when we do object to stringy it will be deserlize
//when we do string to object serlize 

//console.log(teas.descritpion())





//Problem : Create an object representing a type of tea with properties for
//name, type, and caffeine content.

// const teas ={
//     name : "Lemon tea",
//     type : "Lemon",
//     caffeine: "strong",
//     size : "small"
// }

//Problem: Acces and print the name and type properties of the tea object

//console.log(teas.name);
//if object contain item like this "type: "Lemone""
//then we will print console.log(teas["Lemon"])
//console.log(teas.type)


//Problem: Add a new property origin to the tea object
//teas.origin="China";


//Problem: Change the caffeine level of the tea object to the "Medium"

//teas.caffeine = "Medium";

//Problem: Remove the type property from the tea objects
//delete teas.type;

//Problem:Check if the tea object has a property origin
//console.log("origin" in teas);

//Problem: Use a for...in loop to print all properties of the tea object.

// for(let key in teas){
//     console.log(key);
// }

//Problem: Create a nested object representing different types 
//of teas and their properties


//Problem: Create  a copy of the tea object

const teaCopy = {...teas}//shallow copy it copy first level of value and cannot copy nested values
const anotherCopy = teas // reference


