// let info = "data.json";
console.log("hello")

fetch('https://mocki.io/v1/288dfb02-b4aa-46bd-9506-970a138059f6')// code to fetch
.then(res => res.json())//code to parse it
.then(data => {
    console.log(data.bookingData.busArray);
    firstDataSet(data.bookingData)//code to export the needed data
})

function firstDataSet(datr) {
    console.log("data set is " + datr.busArray[0])
    
    let busListDiv = document.querySelector(".busList");


let MainCount = 0;
for (let i=0; i<datr.busArray.length;i++){

    if (MainCount < datr.busArray.length){
        busListDiv.innerHTML += `
        <div class="busCard busId${MainCount}">

        <div class="bus-Image image1"></div>

        <div class="BusInfo">
        <p>${datr.busArray[MainCount]}</p>
        <p><span class="Ac">A/C</span> ${datr.busDepartureState[MainCount]} to ${datr.busDestinationState[MainCount]}-${datr.busDestinationLGA[MainCount]}  </p>
        <p class="availableSeats"> (${datr.busAvailableSeats[MainCount]} seats available) </p>
        <p class="busPrice"> Adult: <span class="AdultPrice"> ${datr.adultPrice[MainCount]} </span> Child: <span class="ChildPrice"> ${datr.childPrice[MainCount]} </span></p>
        </div>

        <div class="busFareDiv">
        <p class="deparTime"> ${datr.departureTime[MainCount]} </p>
        <p class="BusFare"> BusFare: 26,000</p>
        <button class="payFare" type="button"><a href="paymentPage/payment.html" class="payFareLink"> Pay Fare</a></button>
        </div>

    </div>`
        console.log("maincount is" + MainCount)
    MainCount++;
    }

}
}





console.log("all done")
