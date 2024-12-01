const p = document.querySelector("#paragraph");

function test(){
   //p.append("abc"); //insert at right
   //p.prepend("Hamid "); //left
   //p.before("Test"); //top
   p.after("After"); //bottom
}




const heading = document.querySelectorAll("h1");


for(let i=0; i<2; i++){
     heading[i].style.color="red";
}



const mylist = document.querySelector("#myList");

function createnew(){
    const node = document.createElement("li");
    const text = document.createTextNode("Fourth");
    node.appendChild(text);

    mylist.appendChild(node);
}

function removeExisting(){
   mylist.removeChild(mylist.children[3]);
}


function remove(){
   const muli = document.querySelector("#muli");
   muli.removeChild(muli.children[2]); //firstChild, lastChild = working on double click
}


function rf(){
   const fruits = document.querySelector("#fruits");
   fruits.removeChild(fruits.children[1]);
}