const baseURL = 'https://cat-fact.herokuapp.com/facts/random'
let button = document.querySelector('button');
button.addEventListener('click', fetchresults);

function fetchresults() {
    console.log('fetch hit');
fetch(baseURL)
.then(function(response) {
  //  console.log(response);
    return response.json();
})
.then(data => display(data))
.catch(function(json) {
console.log(json)
})
}


function display(cats) {
    //console.log('display', cats);
    //console.log(cats[0].text);
    let fact = cats.text;
    console.log(fact);

    let footer = document.querySelector('footer')
    console.log(footer);
    footer.innerText = fact;
}