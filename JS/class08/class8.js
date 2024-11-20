// let x = 5;
// let y=3;
// let result = x+y;
// console.log("The result is: "+result);
// console.log(`The result is ${result}`);



/*

let human = {
    hand: 2,
    leg: 2,
    eye: 2,
    name: "Fahim"
}

// console.log(human.name);

for(let key in human){
    console.log(`The key is ${key} and the value is ${human[key]}`);
}

*/

// let person = {
//     name: "Abul",
//     hair:{
//         color: "black",
//         height: 1.5
//     }
// }


// console.log(person.hair.color);
// console.log(person.hair.height);

/*
let obj = {
    name: "Habib",
    age: 25
}

// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// console.log(obj);

const s = JSON.stringify(obj);
console.log(s);
*/

/*
let str = '{"name":"Nasir","age":25,"height":5.8}';
// console.log(str);

const o = JSON.parse(str);
console.log(o);
console.log(Object.values(o));
*/

class Student{

    constructor(id,name,cgpa){
        this.id=id;
        this.name=name;
        this.cgpa=cgpa;
    }

    show() {
        console.log(`Id = ${this.id}`);
        console.log(`Name = ${this.name}`);
        console.log(`Cgpa = ${this.cgpa}`);
    }

}

// const s1 = new Student(1,"Jamal",3.7);
// console.log(Object.values(s1));


const st = new Student(1,"Galib",3.5);
st.show();

const st2 = new Student(2,"Tamim",3.8);
st2.show();

