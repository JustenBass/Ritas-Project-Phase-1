
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


// decrement button callback function

function decrement(decBtn){
  const qCounter = document.querySelector('span.quantityCounter')
  console.log("qCounter", qCounter)
   decBtn.addEventListener('click', () => {
    let quantityInsider2 = parseInt(qCounter.innerHTML)
    if( quantityInsider2 > 0){
    quantityInsider2--
    }
   qCounter.innerHTML = quantityInsider2
  })
}



//increment button callback function
function increment(incBtn){
  debugger
  const qCounter = document.querySelector('span.quantityCounter')

  // console.log(typeof qCounter)
  // console.log(qCounter)
  incBtn.addEventListener('click', () => {
    // console.log(numberOfDrinks)
    let quantityInsider = parseInt(qCounter.innerHTML)
    quantityInsider++
    qCounter.innerHTML = quantityInsider
  })
}




function orderConfirmation(orderButton, numberOfDrinks, drinkName){
  orderButton.addEventListener('click', ()=>{
    return alert(
   `You ordered ${numberOfDrinks} ${drinkName}s!
    Your order will be ready for pick-up upon arrival.
    Payment is due upon arrival. Your order number is.`)
  })
}



function resetQuantityPostConfirmation(orderBtn, drinkQuantity){
  orderBtn.addEventListener('click', () => {
    console.log(drinkQuantity)
    return drinkQuantity.innerText = 0
  })
}






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
  let numberOfDrinks = menu.quantity

  // decrement button
  const decrementButton = document.createElement('button')
  decrementButton.className = 'minusBtn'
  decrementButton.innerText = '- 🍹'
  menuHolder.append(decrementButton)

// drink quantity count
  const drinkQuantity = document.createElement('span')
  drinkQuantity.className = 'quantityCounter'
  drinkQuantity.innerHTML = 0
  menuHolder.append(drinkQuantity)

  // increment button
  const incrementButton = document.createElement('button')
  incrementButton.className = 'plusBtn'
  incrementButton.innerText = '+ 🍹'
  menuHolder.append(incrementButton)

  // callback functions that make dec and incre buttons work
  decrement(decrementButton, drinkQuantity)
  increment(incrementButton)




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

      // order button
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
      let drinkName = menu.name

      orderConfirmation(orderButton, numberOfDrinks, drinkName)

      resetQuantityPostConfirmation(orderButton, drinkQuantity)


  // let resetQuantity = () => {
  //         drinkQuantity.innerText =
  //         numberOfDrinks = 0
  //       }



  // setTimeout(resetQuantity, 0000)

      // orderButton.addEventListener('click', displayOrderBtnConfirmation)
}





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


function margaritaData(){
    fetch('http://localhost:3000/menu')
    .then(res => res.json())
    .then (margData => {

      margData.forEach(menu => renderMargarita(menu))})
}
















