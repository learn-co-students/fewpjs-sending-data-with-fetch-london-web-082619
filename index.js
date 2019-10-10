const body = document.querySelector("body");

function submitData(name, email) {
  const URL = "http://localhost:3000/users"
  const user = {
    name: name,
    email: email,
  };
  const requestConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  };

  return fetch(URL, requestConfig)
    .then(response => response.json())
    .then(json => displayId(json))
    .catch(error => displayError(error));
}

function displayId(json) {
  const idSpan = document.createElement("span");
  idSpan.textContent = json.id;
  body.appendChild(idSpan);
}

function displayError(error) {
  const errorSpan = document.createElement("span");
  errorSpan.textContent = error.message;
  body.appendChild(errorSpan);
}