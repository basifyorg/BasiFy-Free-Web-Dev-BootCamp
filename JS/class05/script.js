/*
let arr=["Apple","Mango","Orange"];

console.log("Before push");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

arr.push("Guava");
arr.push("Tomato");
arr.push("Potato");
arr.push(5);

console.log("After push");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}


arr.pop();

console.log("After pop: ");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
*/

/*
let names=["Hamim","Fahim","Rahul"];

const a = names.toString();

console.log(a);
*/

/*
let x=["Toyota","Ferrari"];
let y=[2023,2024];
let z=[2.5,1.4];

const r = x.concat(y).concat(z);

for(let i=0; i<r.length; i++){
    console.log(r[i]);
}
*/

/*
let s=[10,5,100,50];
const x = s.shift();
const y= s.shift();


for(let i=0; i<s.length; i++){
    console.log(s[i]);
}

*/


/*
let r=["Lemon","Banana","Orange","Mango"];
r.unshift("Jack-fruit","Guava","Dates");

for(let i=0; i<r.length; i++){
    console.log(r[i]);
}

*/

/*
let test=["Hand","Leg","Head","Nose","Hair"];

const s = test.slice(0,4); //index

console.log(s);
*/

/*
let test=["Hand","Leg","Head","Nose","Hair"];
test.splice(2,0,"Ear");

console.log(test);
*/


/*
let num = [5,2,1,8,3];
let sum = 0;


for(let i=0; i<num.length; i++){
   sum=sum+num[i];
}

console.log(sum);
*/


// function = 1. built-in / default 2. User defined

/*
function add(){
    let x=5;
    let y=3;
    let r=x+y;
    console.log(r);
}

function sub(){
    let a=4;
    let b=2;
    let s=a-b;
    console.log(s);
}

add();
sub();
*/

/*
const add = ()=>{
    let x=5;
    let y=3;
    let r=x+y;
    console.log(r);
}

add();
*/

/*
function print(s,m,n){ //function parameter / argument
    //console.log("Hello "+s+" "+m+" "+n);
    let r =s+m+n;
    console.log(r);
}

//print(10,"Hi",2.7);

print(5,2,5);
*/

function multi(x,y){
    let r = x*y;
    return r;
}

console.log(multi(4,3));

