
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

function decrement(qty){
  console.log(qty)
    let quantityInsider2 = parseInt(qty)
    if( quantityInsider2 > 0){
    quantityInsider2-= 1
    }
   return quantityInsider2
}



//increment button callback function
function increment(qty){

  // console.log(typeof qCounter)
    // console.log(numberOfDrinks)
    let quantityInsider2 = parseInt(qty)
    quantityInsider2+= 1
    return quantityInsider2
}


let orderNumber = () => {
  const qCounter = document.querySelector('.quantityCounter')
  let quantityInsider = parseInt(qCounter.innerHTML)
  let alertQuantityShown = quantityCounterinnerHTML = quantityInsider

  if(alertQuantityShown === quantityInsider){
    return Math.floor(Math.random() * 500)
  }
}


function orderConfirmation(orderButton, drinkName){
  orderButton.addEventListener('click', (e)=>{
    const quantityCounter = document.querySelector('.quantityCounter')
    // console.log(typeof quantityCounter)
    // console.log(quantityCounter)
    let quantityInsider = parseInt(quantityCounter.innerHTML)
    // console.log(typeof quantityInsider)
    // console.log(quantityInsider)
    let alertQuantityShown = quantityCounterinnerHTML = quantityInsider

    return alert(
   `You ordered ${alertQuantityShown} ${drinkName}s!
    Your order will be ready for pick-up upon arrival.
    Payment is due upon arrival. Your order number is ${orderNumber()}.`)
  })
}



function resetQuantityPostConfirmation(orderBtn, drinkQuantity){
  orderBtn.addEventListener('click', () => {
    console.log(drinkQuantity)
    return drinkQuantity.innerText = 1
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

  decrementButton.addEventListener('click',() => {
  decrement(drinkQuantity.innerText)
  drinkQuantity.innerText = quantityInsider2
})

// drink quantity count
  const drinkQuantity = document.createElement('span')
  drinkQuantity.className = 'quantityCounter'
  drinkQuantity.innerHTML = 1


  menuHolder.append(drinkQuantity)

  // increment button
  const incrementButton = document.createElement('button')
  incrementButton.className = 'plusBtn'
  incrementButton.innerText = '+ 🍹'
  menuHolder.append(incrementButton)

  incrementButton.addEventListener('click', () => {
    increment(drinkQuantity.innerText)
    drinkQuantity.innerText = quantityInsider2
  })

  // callback functions that make dec and incre buttons work
  decrement(decrementButton)
  increment(incrementButton)

  // where order button lives
      let orderSection = document.createElement('section')
      menuHolder.append(orderSection)

  // order button
      let orderButton = document.createElement('button')
      orderButton.className ='orderButton'
      orderButton.innerText = 'ORDER'
      orderSection.append(orderButton)

  // delete butoon
  let dbtn = document.createElement('button')
  dbtn.className = 'delete'
  dbtn.innerHTML = 'delete'
  orderSection.append(dbtn)







  // name of drinks in db json data
      let drinkName = menu.name

      orderConfirmation(orderButton, drinkName)

      resetQuantityPostConfirmation(orderButton, drinkQuantity)


}






const form = document.getElementById('comment')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e.target.children)

  let input1 = e.target.children[1].value
  let input2= e.target.children[3].value
  let input3= e.target.children[5].value
  let input4= e.target.children[7].value


  let p = document.createElement('p')
  p.append(input1)

 let commentSection = document.getElementById("comment")
 commentSection.appendChild(p)

let data = {
  name: input2,
  image: input3,
  description: input4
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















