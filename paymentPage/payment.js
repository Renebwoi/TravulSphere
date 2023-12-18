let cardPay = document.querySelector(".card-details");
let transferPay = document.querySelector(".transferDetails");
let otherPay = document.querySelector(".OtherMethods");
let payConst = document.querySelector(".acknowledge");

function payMethod(num){
    if(num == 1){
        cardPay.style.display = "grid"
        transferPay.style.display = "none"
        otherPay.style.display = "none"

    }
    else if(num == 2){
        cardPay.style.display = "none"
        transferPay.style.display = "grid"
        otherPay.style.display = "none"
    }
    else{
        cardPay.style.display = "none"
        transferPay.style.display = "none"

        otherPay.style.display = "grid"
    }
}

function displayAcknowledge(r) {
    if(r==1){
        payConst.style.display = "flex";
    }
}