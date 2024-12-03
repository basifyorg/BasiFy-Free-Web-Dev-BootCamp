/*
function work(){
    //document.querySelectorAll("h1")[1].textContent="First one is clicked";
    const h = document.querySelectorAll("h1");
    for(let i=0; i<h.length; i++){
        h[i].textContent="Button is clicked";
        h[i].style.color="red";
    }
}
*/


/*
const icon = document.querySelector("#iconimg");
const mp = document.querySelector("#mp");

icon.addEventListener("mouseover",function(){
    mp.textContent="The add icon is clicked";
})

icon.addEventListener("mouseout",function(){
    mp.textContent="";
})


function dbclk(){
    alert("Ok");
}


const dbc = document.querySelector("#dbc");

dbc.addEventListener("dblclick",function(){
    alert("Working")
})
*/



// const user = document.querySelector("#user");
// const error = document.querySelector("#error");
// error.style.color="red";

// user.addEventListener("keyup",function(){
//     if(user.value.length<4){
//         error.textContent="Username must be 4 characters long";
//     }
//     else{
//         error.textContent="";
//     }
// })


const fullname = document.querySelector("#fn");
const email = document.querySelector("#em");
const password = document.querySelector("#pass");
const er = document.querySelector("#er");

er.style.color="red";

function valid(){

    /*
    if(fullname.value == ""){
        // er.textContent="Full name is required";
        fullname.placeholder="FullName is required";
        return false;
    }

    if(email.value == ""){
        // er.textContent="Email is required";
        email.placeholder="Email is required";
        return false;
    }

    if(password.value == ""){
        // er.textContent="Password is required";
        password.placeholder="Password is required";
        return false;
    }
    */

    if(fullname.value == "" || email.value == "" || password.value == ""){
        fullname.placeholder="Fullname is required";
        email.placeholder="Email is required";
        password.placeholder="Password is required";
        return false;
    }


    alert("Your message is sent. Thank you!");


}

