const button = document.querySelector("#bt1");
const p = document.querySelector("#para");

button.addEventListener("click",function(){
    p.textContent="Button is clicked";
    // p.style.color="red";
    // p.style.backgroundColor="black";

    //p.classList.add("p-color");
    p.setAttribute("id","pc");
})




const abc = document.querySelector("#abc");
abc.setAttribute("href","abc.com");
const r = abc.getAttribute("href");
console.log(r);