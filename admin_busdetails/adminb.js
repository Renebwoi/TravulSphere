


const validate = () => {
    let nam = document.getElementById("nam").value;
    let password = document.getElementById("password").value;
    console.log(nam,password)

    const boom = fetch('http://localhost:5000/api/validate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
            name: `${nam}`,
            password: `${password}`
    }),
  })
  .then(response => response.text())
//  .then(data => console.log(data) )
 .then( 
    data => {if(+data === 1) {
    window.location.href = "index2.html";
    console.log("yay")} 
    else  {
    alert("invalid parameters");
}
// console.log(typeof(+data))
})
}