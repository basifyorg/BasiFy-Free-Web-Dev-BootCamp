const input1  = document.querySelector("#i1");
const input2  = document.querySelector("#i2");
const check  = document.querySelector("#check");

check.addEventListener("click",function(){
    
    const iv1 = parseFloat(input1.value);
    const iv2 = parseFloat(input2.value);

    const add = iv1+iv2;

    alert(add);
})