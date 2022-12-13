
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

function decrement(){
  let qCounter = document.querySelector('.quantityCounter')
  console.log(qCounter)
    let quantityInsider2 = parseInt(qCounter.innerHTML)
    if( quantityInsider2 > 1){
    quantityInsider2--
    }
   qCounter.innerHTML = quantityInsider2
  }





//increment button callback function
function increment(){
  let qCounter = document.querySelector('.quantityCounter')
  // console.log(typeof qCounter)
  console.log(qCounter)// console.log(numberOfDrinks)
  let quantityInsider = parseInt(qCounter.innerHTML)
  quantityInsider++
  qCounter.innerHTML = quantityInsider
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
  let numberOfDrinks = menu.quantity


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
  // let numberOfDrinks = menu.quantity

  // decrement button
  const decrementButton = document.createElement('button')
  decrementButton.className = 'minusBtn'
  decrementButton.innerText = '- 🍹'
  menuHolder.append(decrementButton)



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



  // callback functions that make dec and incre buttons work

  decrementButton.addEventListener('click', () => {
        decrement()
  })


  incrementButton.addEventListener('click', () => {
    increment()
  })

  // where order button lives
      let orderSection = document.createElement('section')
      menuHolder.append(orderSection)

  // order button
      let orderButton = document.createElement('button')
      orderButton.className ='orderButton'
      orderButton.innerText = 'ORDER'
      orderSection.append(orderButton)

  let dbtn = document.createElement('button')
  dbtn.className = 'delete'
  dbtn.innerHTML = 'delete'
  orderSection.append(dbtn)

  // removeBtn(dbtn, drinkTitles, drinkImg, drinkDescription,
  //   decrementButton, drinkQuantity, incrementButton, orderButton, dbtn)




  // name of drinks in db json data
      let drinkName = menu.name

      orderConfirmation(orderButton, drinkName)

      resetQuantityPostConfirmation(orderButton, drinkQuantity)
}




function margaritaData(){
  fetch('http://localhost:3000/menu')
  .then(res => res.json())
  .then (margData => margData.forEach(menu => renderMargarita(menu)))
}



// let arrayOfDrinks = []
// console.log(arrayOfDrinks)


// function dropDownMenuSelection(){
//   let drinkSelect = document.getElementById('drink-dropdown')
//    drinkSelect.addEventListener('change', (e) => {
//        console.log(e.target.value)
//         document.getElementById("drink-breeds").innerHTML = ''
//        if(e.target.value === "t"){
//            let a = arrayOfDrinks.filter(drink => drink.name.charAt(0) == 'T')
//            a.forEach(drink => renderMargarita(drink))
//            console.log(a)
//        } else if (e.target.value === "m"){
//            let b = arrayOfDrinks.filter(drink => drink.name.charAt(0) =='M')
//            b.forEach(drink => renderMargarita(drink))
//            console.log(b)
//        } else if (e.target.value === "h"){
//            let c = arrayOfDrinks.filter(drink => drink.name.charAt(0) == 'H')
//            c.forEach(drink => renderMargarita(drink))
//        } else {
//            if (e.target.value === "s"){
//            let d = arrayOfDrinks.filter(drink => drink.name.charAt(0) == "S")
//            d.forEach(drink => renderMargarita(drink))
//            console.log(d)
//            }
//     }}
//     )}
//    dropDownMenuSelection()



















// function removeBtn(deletebtn, title, image, descript, minusBtn, drinkQuantity, plusBtn, orderBtn, deleteBtn){
//   deletebtn.addEventListener('click', () => {
//     title.remove()
//     image.remove()
//     descript.remove()
//     minusBtn.remove()
//     drinkQuantity.remove()
//     plusBtn.remove()
//     orderBtn.remove()
//     deleteBtn.remove()
//   })
//   }


