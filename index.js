import { parse } from "url";

// Add your code here

function submitData (name, email) {
    // let newData = {name: name, email: email}
    // let configurationObject = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify(newData)
    // }

    return fetch ('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name, 
            email
        })
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
           document.body.innerHTML = object['id']
        })
        .catch(function(error) {
            document.body.innerHTML = error.message
        });
}

// submitData("will", "will@gmail.com").then( resp => console.log(resp))