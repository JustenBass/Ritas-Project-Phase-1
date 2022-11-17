document.addEventListener("DOMContentLoaded", () => {
  margaritaData()
});


document.getElementById('title').innerText = "RITAS"

document.getElementById('venue').src= "https://images.squarespace-cdn.com/content/v1/5ded6e17e5b0744826c470fc/1575856661048-D3GR7XK0ZHVJ8CRV5GQE/_MG_2705.jpg?format=1500w"

document.getElementById('ritaAddress').innerText = '756 9th Ave, New York, NY 10019'


function renderMargarita(menu) {
    const menuHolder = document.createElement('div')
    menuHolder.id = 'ritasMenu'

    const drinkTitles = document.createElement('h1')
    drinkTitles.className = 'margTitles'
    drinkTitles.innerText = menu.name

    drinkTitles.addEventListener('mouseover', (e) => {
      e.target.style.color = "green"
    })

    drinkTitles.addEventListener('mouseout', (e) => {
      e.target.style.color = "black"
    })

    menuHolder.append(drinkTitles)


    const drinkImg = document.createElement('img')
    drinkImg.className = 'drinkImgs'
    drinkImg.src = menu.image

    menuHolder.append(drinkImg)


    const drinkDescription = document.createElement('p')
    drinkDescription.innerText = menu.description
    drinkDescription.className = 'drinkdDescription'

    menuHolder.append(drinkDescription)


    let numberOfDrinks = menu.quantity


    let minusButton = document.createElement('button')
      minusButton.className = 'minusBtn'
      minusButton.innerText = '- 🍹'

      minusButton.addEventListener('click', () => {
        if(numberOfDrinks >= 1){
         numberOfDrinks--
       }
       drinkQuantity.innerHTML = numberOfDrinks
       })
       menuHolder.append(minusButton)


       let drinkQuantity = document.createElement('span')
       drinkQuantity.className = 'quantityCounter'
      drinkQuantity.innerHTML = numberOfDrinks

      menuHolder.append(drinkQuantity)


      let plusButton = document.createElement('button')
      plusButton.className = 'plusBtn'
      plusButton.innerText = '+ 🍹'

      plusButton.addEventListener('click', () => {
        numberOfDrinks ++
        drinkQuantity.innerHTML = numberOfDrinks

        })

        menuHolder.append(plusButton)

        let orderSection = document.createElement('section')
        let orderButton = document.createElement('button')
        orderButton.className ='orderButton'
        orderButton.innerText = 'ORDER!'

        function displayOrderBtnParagraph() {
           alert(`You ordered ${numberOfDrinks} ${menu.name}s!
           Your order will be ready for pick-up upon arrival. Payment
           is due upon arrival.`)
        }

        function resetQuantity(){
          setTimeout(() => span.innerText = numberOfDrinks = 0, 0000)
        }

        orderButton.addEventListener('click', displayOrderBtnParagraph)
        orderButton.addEventListener('click', resetQuantity)




        menuHolder.append(orderSection)
        orderSection.append(orderButton)







        document.querySelector('#menu').appendChild(menuHolder)
}




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




function quantity(margObj, numberOfDrinks){
  fetch(` http://localhost:3000/menu${margObj.id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'quantity': numberOfDrinks
    })
  })
  .then(res => res.json())
  .then(updatedQuantity => (updatedQuantity))
}