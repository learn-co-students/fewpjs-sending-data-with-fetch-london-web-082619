// Add your code here


let formData = {
    dogName: "Matt",
    dogBreed: "HoundDawg"
}

let configObject = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
}

function testSend() {
    fetch("http://localhost:3000/dogs", configObject)
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(function(error) {
            alert("Run! RUN FOR THE HILLS!!");
            console.log(error.message)
        })
}

function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    } )
    .then(response => response.json())
    .then(object => document.body.innerHTML = object[ "id" ])
    .catch(error => document.body.innerHTML = error.message )
}