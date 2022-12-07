
// const form = document.getElementById('comment-form')

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   console.log(e.target.children)

//   let input1 = e.target.children[1].value
//   let input2= e.target.children[3].value
//   let p = document.createElement('p')

//   p.append(input1)

//  let commentSection = document.getElementById("comment-form")

//  commentSection.appendChild(p)

// let data = {
//   image: input2
// }

// fetch('http://localhost:3000/menu', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data)
// })
// .then(res => res.json())
// .then(data => renderMargarita(data))

// })


document.addEventListener("DOMContentLoaded", () => {
  margaritaData()
});



  function mouseOver(drinkTitles){
    drinkTitles.addEventListener('mouseover', (e) => {
      e.target.style.color = "green"
    })
  }



  function mouseOut(drinkTitles){
    drinkTitles.addEventListener('mouseout', (e) => {
      e.target.style.color = "black"
    })
  }





  function decrement(decBtn, numberOfDrinks, drinkQuantity){
    numberOfDrinks = Number(numberOfDrinks)
    decBtn.addEventListener('click', () => {
      console.log(numberOfDrinks)
      if(numberOfDrinks > 0){
        numberOfDrinks--
      }
      drinkQuantity.innerHTML = numberOfDrinks
    })
  }


  function increment(incBtn, numberOfDrinks, drinkQuantity){
    incBtn.addEventListener('click', () => {
      console.log(numberOfDrinks)
      numberOfDrinks++
      drinkQuantity.innerHTML = numberOfDrinks
    })
  }




  function orderConfirmation(orderButton, numberOfDrinks, drinkName){
    orderButton.addEventListener('click', ()=>{
      return alert(`You ordered
      ${numberOfDrinks} ${drinkName}s! Your order will be ready
      for pick-up upon arrival. Payment is due upon arrival. Your
      order number is.`)
    })
  }




  setTimeout(resetQuantity, 0000)


function renderMargarita(menu) {
    const menuHolder = document.createElement('div')
    menuHolder.id = 'ritasMenu'
    document.querySelector('#menu').appendChild(menuHolder)

    // drink name headers
    const drinkTitles = document.createElement('h1')
    drinkTitles.className = 'margTitles'
    drinkTitles.innerText = menu.name
    menuHolder.append(drinkTitles)
    // callback functions to make titles turn green and black
    mouseOver(drinkTitles)
    mouseOut(drinkTitles)

    // drink images
    const drinkImg = document.createElement('img')
    drinkImg.className = 'drinkImgs'
    drinkImg.src = menu.image
    menuHolder.append(drinkImg)

    // drink descriptions
    const drinkDescription = document.createElement('p')
    drinkDescription.innerText = menu.description
    drinkDescription.className = 'drinkDescriptions'
    menuHolder.append(drinkDescription)

    // quantity set at zero in db json datab
    const numberOfDrinks = menu.quantity
    console.log('#', numberOfDrinks)


    // decrement button
    const decrementButton = document.createElement('button')
    decrementButton.className = 'minusBtn'
    decrementButton.innerText = '- 🍹'
    menuHolder.append(decrementButton)

    // drink quantity count
    const drinkQuantity = document.createElement('span')
    drinkQuantity.className = 'quantityCounter'
    drinkQuantity.innerHTML = numberOfDrinks
    menuHolder.append(drinkQuantity)

    // increment button
    const incrementButton = document.createElement('button')
    incrementButton.className = 'plusBtn'
    incrementButton.innerText = '+ 🍹'
    menuHolder.append(incrementButton)

      // callback functions that make dec and incre buttons work
      decrement(decrementButton, numberOfDrinks, drinkQuantity)
      increment(incrementButton, numberOfDrinks, drinkQuantity)



      // minusButton.addEventListener('click', () => {
      //   if(numberOfDrinks >= 1){
      //    numberOfDrinks--
      //  }
      //  drinkQuantity.innerHTML = numberOfDrinks
      //  })


        //  plusButton.addEventListener('click', () => {
      //    numberOfDrinks ++
      //    drinkQuantity.innerHTML = numberOfDrinks

      //    })








        // where order button lives
        let orderSection = document.createElement('section')
        menuHolder.append(orderSection)


        let orderButton = document.createElement('button')
        orderButton.className ='orderButton'
        orderButton.innerText = 'ORDER'
        orderSection.append(orderButton)

      //   function orderNumber(){
      //      if(numberOfDrinks < 5){
      //     return 33
      //   } else if (numberOfDrinks > 5){
      //     return 66
      //   } else {
      //       console.log(55)
      //     }
      // }

        // let displayOrderBtnConfirmation = () => alert(`You ordered
        // ${numberOfDrinks} ${menu.name}s! Your order will be ready
        // for pick-up upon arrival. Payment is due upon arrival. Your
        // order number is ${orderNumber()}`)

        orderConfirmation(orderButton, numberOfDrinks, menu.name)


        const resetQuantity = () => {
          drinkQuantity.innerText =
          numberOfDrinks = 0
        }


        // orderButton.addEventListener('click', displayOrderBtnConfirmation)
        orderButton.addEventListener('click', resetQuantity)


}



const form = document.getElementById('comment-form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e.target.children)

  let input1 = e.target.children[1].value
  let input2= e.target.children[3].value
  let p = document.createElement('p')

  p.append(input1)

 let commentSection = document.getElementById("comment-form")

 commentSection.appendChild(p)

let data = {
  image: input2
}

fetch('http://localhost:3000/menu', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(data => renderMargarita(data))

})


function margaritaData(){
    fetch('http://localhost:3000/menu')
    .then(res => res.json())
    .then (margData => {

      margData.forEach(menu => renderMargarita(menu))})
}
















