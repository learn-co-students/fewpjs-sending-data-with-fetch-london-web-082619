// Add your code here

const usersURL = 'http://localhost:3001/users';
const body = document.querySelector('body')

// write a valid POST request to  using fetch()
function submitData(name, email) {

    let formData = {
        name: name,
        email: email
    }

    let configObject = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    fetch(usersURL, configObject)
        .then(response => response.json())
        .then(user => appendUser(user)) 
        .catch(function(error){
            console.log(error.message);
        })
}

function appendUser(user){
    newUserContainer = document.createElement('div');
    newUserContainer.id = user.id;
    body.appendChild(newUserContainer);

    userID = document.createElement('p');
    userID.innerText = `ID: ${user.id}`;
    newUserContainer.appendChild(userID);

    userName = document.createElement('p');
    userName.innerText = `Name: ${user.name}`;
    newUserContainer.appendChild(userName);

    userEmail = document.createElement('p');
    userEmail.innerText = `Email: ${user.email}`;
    newUserContainer.appendChild(userEmail);
}