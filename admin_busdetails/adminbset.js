const submitDetails = () => {

    let busName = document.getElementById('busArray').value
    let busDepartureState = document.getElementById('busDepartureState').value
    let busDestinationState = document.getElementById('busDestinationState').value
    let busDestinationLGA = document.getElementById('busDestinationLGA').value
    let busAvailableSeats = document.getElementById('busAvailableSeats').value
    let adultPrice = document.getElementById('adultPrice').value
    let childPrice = document.getElementById('childPrice').value
    let departureTime = document.getElementById('departureTime').value
    
//--------------POST details----------------------------------------
    const boom = fetch('http://localhost:5000/api/main/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                busArray: `${busName}`,
                busDepartureState: `${busDepartureState}`,
                busDestinationState: `${busDestinationState}`,
                busDestinationLGA: `${busDestinationLGA}`,
                busAvailableSeats: busAvailableSeats,
                adultPrice: adultPrice,
                childPrice: childPrice,
                departureTime: `${departureTime}`
        }),
      })
      .then(response => response.text())
     .then(data => console.log(data))  
     
     
    console.log('Hello')
}
// submitDetails()

//---------------------update details----------------------

const updateDetails = () => {

let busName = document.getElementById('busArray').value
    let busDepartureState = document.getElementById('busDepartureState').value
    let busDestinationState = document.getElementById('busDestinationState').value
    let busDestinationLGA = document.getElementById('busDestinationLGA').value
    let busAvailableSeats = document.getElementById('busAvailableSeats').value
    let adultPrice = document.getElementById('adultPrice').value
    let childPrice = document.getElementById('childPrice').value
    let departureTime = document.getElementById('departureTime').value
    

    const boom = fetch('http://localhost:5000/api/main/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                busArray: `${busName}`,
                busDepartureState: `${busDepartureState}`,
                busDestinationState: `${busDestinationState}`,
                busDestinationLGA: `${busDestinationLGA}`,
                busAvailableSeats: busAvailableSeats,
                adultPrice: adultPrice,
                childPrice: childPrice,
                departureTime: `${departureTime}`
        }),
      })
      .then(response => response.text())
     .then(data => console.log(data))  
     
     
    console.log('Hello')
}


const getallDetails = () => {
  let resultBox = document.querySelector('.resultBox')
  const boom = fetch('http://localhost:5000/api/main/getAll')
      .then(response => response.json())
     .then(data =>{ for(dat in data) {resultBox.innerHTML+= `<p>${data[dat].busArray} departing from ${data[dat].busDepartureState} arriving at ${data[dat].busDestinationState}. LGA ${data[dat].busDestinationLGA} with available seats ${data[dat].busAvailableSeats}. The prices are: Adult Price ${data[dat].adultPrice} and child price ${data[dat].childPrice}. We depart at ${data[dat].departureTime}.</p></br></br>` }} )  
     
    console.log('Fetched All')
}

const deleteDetails = () => {
  let busName = document.getElementById('busArray').value

  fetch(`http://localhost:5000/api/main/delete/${busName}`, {
  method: 'DELETE',
}).then(response => response.text())
  .then(data => console.log(data))
}