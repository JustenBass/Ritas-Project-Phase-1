document.addEventListener("DOMContentLoaded", () => {
  return 'hello'
});



function renderMargarita(menu) {
    let card = document.createElement('div')
    card.className = 'card'
    card.id = 'cardId'

    let h1 = document.createElement('h1')
    h1.className = 'drinkTitles'
    h1.innerText = menu.name
    h1.addEventListener('mouseover', (e) => {
      e.target.style.color = "green"
    })

    h1.addEventListener('mouseout', (e) => {
      e.target.style.color = "black"
    })

    card.append(h1)



        document.querySelector('#menu').appendChild(card)
}
margaritaData()

