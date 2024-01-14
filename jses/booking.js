let busArray = ["Toyota 5th bus", "Bosco 1st bus", "Big Coach 1st Bus"];
let busDepartureState = ["Abraka", "Amodi", "Enugu"];
let busDestinationState = ["Lagos", "Atunpe", "Anambra"];
let busDestinationLGA = ["Oponkwu", "Sumaka", "Oba"];
let busAvailableSeats = [5, 3, 4];
let adultPrice = ["31,825", "37,825", "15,500"];
let childPrice = ["21,825", "17,825", "7,600"];
let departureTime = ["6:00","8:00","10:00"];

let busListDiv = document.querySelector(".busList");


let MainCount = 0;
for (let i=0; i<busArray.length;i++){

    if (MainCount < busArray.length){
        busListDiv.innerHTML += `
        <div class="busCard busId${MainCount}">

        <div class="bus-Image image1"></div>

        <div class="BusInfo">
        <p>${busArray[MainCount]}</p>
        <p><span class="Ac">A/C</span> ${busDepartureState[MainCount]} to ${busDestinationState[MainCount]}-${busDestinationLGA[MainCount]}  </p>
        <p class="availableSeats"> (${busAvailableSeats[MainCount]} seats available) </p>
        <p class="busPrice"> Adult: <span class="AdultPrice"> ${adultPrice[MainCount]} </span> Child: <span class="ChildPrice"> ${childPrice[MainCount]} </span></p>
        </div>

        <div class="busFareDiv">
        <p class="deparTime"> ${departureTime[MainCount]} </p>
        <p class="BusFare"> BusFare: 26,000</p>
        <button class="payFare" type="button"><a href="paymentPage/payment.html" class="payFareLink"> Pay Fare</a></button>
        </div>

    </div>`
        console.log("maincount is" + MainCount)
    MainCount++;
    }

}

// let b = document.querySelector('#destination');

//     b.addEventListener("change", function () {console.log("destination is " + b.value)} )

function ModifyChoices() {

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

        if(busDestinationState[DivCounter] != destinationValue || busDepartureState[DivCounter] != departureValue || seatSelected > busAvailableSeats[DivCounter]){
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
