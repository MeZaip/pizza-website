const modal=document.getElementById('modal')
document.getElementById('cart').addEventListener('click',function(){
  modal.style.display="block";
})
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
document.getElementById('close').addEventListener('click',function(){
  modal.style.display="none";
})
const pizzameniu=document.getElementById('pizzameniu')
const pizzabutton=document.getElementById('pizza')
const antreurimeniu=document.getElementById('antreurimeniu')
const antreuributton=document.getElementById('antreuri')
const pastemeniu=document.getElementById('pastemeniu')
const pastebutton=document.getElementById('paste')
const bauturimeniu=document.getElementById('bauturimeniu')
const bautuributton=document.getElementById('bauturi')
let current=document.getElementById('pizzameniu')
let currentbtn=pizzabutton;
pizzabutton.onclick=function() {
  current.style.display="none";
  pizzameniu.style.display="block";  
  currentbtn.style.background="none";
  pizzabutton.style.backgroundColor="#ccc";
  currentbtn=pizzabutton;
  current=pizzameniu;
}
antreuributton.onclick=function() {
  current.style.display="none";
  antreurimeniu.style.display="block";
  currentbtn.style.background="none";
  antreuributton.style.backgroundColor="#ccc";
  currentbtn=antreuributton;
  current=antreurimeniu;
}
pastebutton.onclick=function(){
  current.style.display="none";
  pastemeniu.style.display="block";
  currentbtn.style.background="none";
  pastebutton.style.backgroundColor="#ccc";
  currentbtn=pastebutton;
  current=pastemeniu;
}
bautuributton.onclick=function(){
  current.style.display="none";
  bauturimeniu.style.display="block";
  currentbtn.style.background="none";
  bautuributton.style.backgroundColor="#ccc";
  currentbtn=bautuributton;
  current=bauturimeniu;
}


if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}
function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }

  var addToCartButtons = document.getElementsByClassName('shop-item-button')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
  alert('Thank you for your purchase')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
  modal.style.display="none";
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  var button = event.target
  var title = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('product-text')[0].innerText
  var price = button.parentElement.parentElement.getElementsByClassName('pretpizza')[0].innerText
  var imageSrc = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('img_pizza')[0].src
  var marime= button.parentElement.parentElement.getElementsByClassName('info-dimensiune')[0].innerText
  console.log( title, price, imageSrc ,marime)
  addItemToCart(title, price, imageSrc, marime)
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc, marime) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == `${title} - ${marime}`) {
          alert('This item is already added to the cart')
          return
      }
  }
  var cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
          <span class="cart-item-title">${title} - ${marime}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">X</button>
      </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      var quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText =total + ' lei'
}