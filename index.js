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


    let p = document.createElement('p')
    p.innerText = menu.description
    card.append(p)

    let numberOfDrinks = menu.quantity
    numberOfDrinks.id = 'test'

    let minusButton = document.createElement('button')
      minusButton.className = 'minusBtn'
      minusButton.id = 'minusBtn'
      minusButton.innerText = '- 🍹'
      card.append(minusButton)
      minusButton.addEventListener('click', () => {
        if(numberOfDrinks >= 1){
         numberOfDrinks--
       }
       span.innerHTML = numberOfDrinks
       })

       let span = document.createElement('span')
       span.className = 'quantityCounter'
       span.innerText = ''



       card.append(span)



      let plusButton = document.createElement('button')
      plusButton.innerText = '+ 🍹'
      plusButton.className = 'plusBtn'
      plusButton.id = 'plusBtn'
      plusButton.addEventListener('click', () => {
        numberOfDrinks ++
        span.innerHTML = numberOfDrinks

        })
        card.append(plusButton)

        let sectionOrderBTN = document.createElement('section')
        let orderButton = document.createElement('button')
        orderButton.id ='orderButton'
        orderButton.innerText = 'ORDER'
        let orderBtnParagraph = document.createElement('p')
        orderBtnParagraph.id = 'order-confirmation'
        orderButton.addEventListener('click', displayOrderBtnParagraph, resetQuantity)


        function resetQuantity() {
          getElementByIdById('test').reset()
        }

        function displayOrderBtnParagraph() {
          orderBtnParagraph.innerText = `You ordered ${numberOfDrinks} ${menu.name}s! Your order will be ready for pick-up upon arrival.`
        }
        // setTimeout(() => {
        //   orderBtnParagraph.style.display ='none'
        // }, 10000)


        card.append(sectionOrderBTN)
        sectionOrderBTN.append(orderButton)
        sectionOrderBTN.append(orderBtnParagraph)






        document.querySelector('#menu').appendChild(card)
}
margaritaData()



// function changedrinkImg(){
//   document.getElementById('photo2').src=
//   "https://www.promotionchoice.com/upload/product_images/2592/40oz_.jpg"
// }

// document.getElementById('photo2').addEventListener('mouseover',changedrinkImg)




function margaritaData(){
    fetch('http://localhost:3000/menu')
    .then(res => res.json())
    .then (margData => margData.forEach(menu => renderMargarita(menu)))
}



