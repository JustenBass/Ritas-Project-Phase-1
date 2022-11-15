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

    let img = document.createElement('img')
    img.className = 'photo'
    img.id ='photo2'
    img.src = menu.image
    card.append(img)


        document.querySelector('#menu').appendChild(card)
}
margaritaData()



// function changedrinkImg(){
//   document.getElementById('photo2').src=
//   "https://www.promotionchoice.com/upload/product_images/2592/40oz_.jpg"
// }

// document.getElementById('photo2').addEventListener('mouseover',changedrinkImg)



