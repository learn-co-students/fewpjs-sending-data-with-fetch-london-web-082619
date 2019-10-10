// Add your code here
const CONFIG = {
    BASE_URL: 'http://localhost:3000'
}

function addIdToDom(data) {
    // const body = document.querySelector('body');
    // let p = document.createElement('p');
    // p.innerText = `${data.id}`;
    document.body.innerHTML = data["id"]
}

function submitData(name, email) {

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
        body: JSON.stringify({
            name: name, 
            email: email
        })
    }

    return fetch(`${CONFIG.BASE_URL}/users`, configObj)
        .then(response => response.json())
        .then(data => addIdToDom(data))
        .catch(error => document.body.innerHTML = error.message)
}