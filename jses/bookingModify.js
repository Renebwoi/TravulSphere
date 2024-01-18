fetch('https://mocki.io/v1/288dfb02-b4aa-46bd-9506-970a138059f6')// code to fetch
.then(res => res.json())//code to parse it
.then (data => {
    console.log("olome " +data)
    document.querySelector('#ModifyButton').addEventListener("click", ModifyChoices(data.bookingData)) 
})



function ModifyChoices(data) {

    //for destination state
    let destinationValue =  document.querySelector('#destination').value;
    let AllChildren = document.querySelectorAll('.busCard');
    //for departure state
    let departureValue = document.querySelector('#departureState').value;
    //for date(not part of filter yet)
    let TheDate = document.querySelector('#dateOption').value;
    //adult price
    let deAdultPrice = document.querySelector('#AdultAmoun').value;
    //child price
    let dechildPrice = document.querySelector('#ChildAmount').value;
    let childAmountValue = +dechildPrice;
    childAmountValue = childAmountValue/2;
    let adultAmountValue = +deAdultPrice;
    let seatSelected = Math.round( adultAmountValue + childAmountValue);
    

    

    for(let DivCounter = 0; DivCounter < AllChildren.length; DivCounter++){

        if(data.busDestinationState[DivCounter] != destinationValue || data.busDepartureState[DivCounter] != departureValue || seatSelected > data.busAvailableSeats[DivCounter]){
            AllChildren[DivCounter].style.display = "none";
        }
        else{
            AllChildren[DivCounter].style.display = "grid";
        }
    }
    

    let departIndicator = document.querySelector('#departDestin span:nth-of-type(1)');
    departIndicator.textContent = departureValue;

    let destinIndicator = document.querySelector('#departDestin span:nth-of-type(2)');
    destinIndicator.textContent = destinationValue;

    let dateIndicator = document.querySelector('.otherpointers h3:nth-of-type(4)');
    dateIndicator.textContent = TheDate;

    let AdultPriceIndicator = document.querySelector('.otherpointers h3:nth-of-type(2)>span');
    AdultPriceIndicator.textContent = deAdultPrice;

    let ChildPriceIndicator = document.querySelector('.otherpointers h3:nth-of-type(3)>span');
    ChildPriceIndicator.textContent = dechildPrice;
}
// use the addition of the adult and child select boxes, 
//compare them to the number of seats avalable and display the ones
//with enough seats left to accomodate them.
