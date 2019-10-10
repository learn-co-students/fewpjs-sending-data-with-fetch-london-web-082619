
// //THIS CODE WORKS for all different dataForms
const usersUrl = 'http://localhost:3000/users';
// const dogsUrl = 'http://localhost:3000/dogs';
// const catsUrl = 'http://localhost:3000/cats';
// const robotsUrl = 'http://localhost:3000/robots'

// let dogData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };

// let catData = {
//     catName: "Garfield",
//     catBreed: "Tabby"
// };

// let userData = {
//     userName: "Danny",
//     userEmail: "danmi@gmail.com"
// };

// let robotData = {
//     robotName: "R2-D2",
//     robotType: "Astromech Droid"
// };

// function configurationObject(formData){
//     let configObj = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(formData)
//     };
//     return configObj;
// };
    
// //commented code below can refactored

// function postDog(dogData){
//     return fetch(dogsUrl, configurationObject(dogData))
//         .then(response => {return response.json()})
//         .then(json => {console.log(json)})
// };

// function postCat(catData){
//     return fetch(catsUrl, configurationObject(catData))
//         .then(response => {return response.json()})
//         .then(json => {console.log(json)})
// };

// function postUser(userData){
//     return fetch(usersUrl, configurationObject(userData))
//         .then(response => {return response.json()})
//         .then(json => {console.log(json)})
// };

// function postRobot(robotData){
//     return fetch(robotsUrl, configurationObject(robotData))
//         .then(response => {return response.json()})
//         .then(json => {console.log(json)})
// };


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
