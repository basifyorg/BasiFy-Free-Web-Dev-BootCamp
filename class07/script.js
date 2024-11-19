// const Person={
//     age: 20,
//     height: 5.8,
//     firstname: "Ahsan",
//     lastname: "Hasan",
//     salary: 50000,
//     comm: 1000,
//     nameoutput: function(){
//         return this.firstname+" "+this.lastname;
//     },

//     salcom: function(){
//         return this.salary+this.comm;
//     }
// }

/*
console.log("The name is: "+Person.name);
console.log("The age is: "+Person.age);
//console.log("The height is:"+Person.height);
console.log("The height is "+Person.height);
*/
//console.log(Person.firstname+Person.lastname);

// console.log(Person.nameoutput());
// console.log(Person.salcom());

// Person["weight"]=60;
// console.log(Person["weight"]);

// Person.color="abc";
// console.log(Person.color);

// console.log(Person["age"]);



const Cat={
    color: "White",
}

console.log(Cat.color);
console.log(Cat["color"]);


Cat.legs=4;
console.log(Cat.legs);


Cat["sound"]="mew";
console.log(Cat["sound"]);


Cat.color="Black";
console.log(Cat.color);

