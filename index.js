const usersUrl = 'http://localhost:3000/users';

function submitData(name,email){
    return fetch( usersUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {name, email} )
      } )
      .then( response => {return response.json()})
      .then( json => {
        document.body.innerHTML = json[ "id" ]
      })
      .catch( error => {
        document.body.innerHTML = error.message
      })
};