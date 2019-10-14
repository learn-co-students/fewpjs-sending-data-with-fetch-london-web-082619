// Add your code here
function submitData(username, useremail){
    let formData = {
        name: username,
        email: useremail
    };

    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObject)
        .then(function(response){
            return response.json()
        })
        .then(function(object){
            console.log(object)
            document.body.innerHTML = object["id"]
        })
        .catch(function(error){
            document.body.innerHTML = error.message
        })
    };

