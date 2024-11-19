const pr = document.getElementById("paragraph");

document.getElementById("clickbtn").addEventListener("click",function(){
    pr.innerHTML="Button is clicked";
})


const mybtn = document.getElementById("mybtn")
mybtn.addEventListener("click",function(){
    alert("Mybtn working");
})

const btn3 = document.querySelector("#btn3")
btn3.addEventListener("click",function(){
    console.log("Btn3 click works");
})


const myp = document.querySelector(".myp")
function foBtn(){
    myp.textContent="Click good"
    myp.style.color="red";
}

