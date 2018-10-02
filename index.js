var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * Math.floor(100)) +1
 }
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var contents = "In your cart, you have ";
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  for (let i = 0; i < cart.length; i++){
    let current = cart[i];
    contents += `${current.itemName} at $${current.itemPrice}`;
    if (i === cart.length -1){
      contents += ", and ";
    }
    else if (i === cart.length){
      content += ".";
    }
    else{
      contents += ", ";
    }
  }
  return contents;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
