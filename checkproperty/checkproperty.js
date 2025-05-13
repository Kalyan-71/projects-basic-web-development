const mycheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypal = document.getElementById("paypal");
const mysubmit = document.getElementById("mysubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mysubmit.onclick = function(){
    
    if(mycheckbox.checked){
        subResult.textContent = "You are subscribed";
    }else{
        subResult.textContent = "You are NOT subscribed";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You are paying with Visa";
    }else if(masterCardBtn.checked){
        paymentResult.textContent = " You are paying with masterCard";
    }else if(paypal.checked){
        paymentResult.textContent = " You are paying with paypal";
    }else{
        paymentResult.textContent = "paymenr=t method not selected";
    }
}