document.addEventListener("DOMContentLoaded", () => {
  return 'hello'
});


document.getElementById('title').innerText = "RITAS"
document.getElementById('venue').src= "https://images.squarespace-cdn.com/content/v1/5ded6e17e5b0744826c470fc/1575856661048-D3GR7XK0ZHVJ8CRV5GQE/_MG_2705.jpg?format=1500w"


function renderMargarita(menu) {
    let card = document.createElement('div')
    card.className = 'card'
    card.id = 'cardId'

    let h1 = document.createElement('h1')
    h1.className = 'drinkTitles'
    h1.innerText = menu.name


        document.querySelector('#menu').appendChild(card)
}
margaritaData()

