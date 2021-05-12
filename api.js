const baseURL = 'https://cat-fact.herokuapp.com/facts'


fetch('https://cat-fact.herokuapp.com/facts')
.then(function(response) {
    return response.json();
})
.catch(function(myJson) {
console.log(myJson)
})
