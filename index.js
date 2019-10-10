// Add your code here

function addIdToDom(data){
    // let p = document.createElement('h2');
    // p.innerText= `${data.id}`;
    // body.appendChild(p);
    document.body.innerHTML = data["id"];
}
function submitData(name, email){
    let configObject = {
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


    return fetch('http://localhost:3000/users', configObject)
    .then(resp => resp.json())
    .then(data  => addIdToDom(data))
    .catch(error => 
        // const h1= document.createElement('h1')
        document.body.innerHTML = error.message    
    )
}