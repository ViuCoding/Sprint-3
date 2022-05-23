// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  for (let i = 1; i <= products.length; i++) {
    if (i === id) {
      cartList.push(products[i - 1]);
    }
  }
}

// Exercise 2
function cleanCart() {
  cart.length = 0;
  total = 0;
  document.getElementById("cart_list").innerHTML = "";
  document.getElementById("total_price").innerHTML = 0;
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  return total;
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  cart.length = 0;
  let isDuplicated = false;
  let i;
  let j;

  for (i = 0; i < cartList.length; i++) {
    if (cart.length === 0) {
      cartList[i].quantity = 1;
      cart.push(cartList[i]);
    }

    for (j = 0; j < cart.length; j++) {
      if (i !== j) {
        if (cartList[i].id === cart[j].id) {
          isDuplicated = true;
          break;
        } else {
          isDuplicated = false;
        }
      }
    }

    if (isDuplicated) {
      cart[j].quantity++;
    } else if (!isDuplicated && i != 0) {
      cartList[i].quantity = 1;
      cart.push(cartList[i]);
    }
  }

  // console.table(cart);
  // applyPromotionsCart(cart);
}

// Exercise 5
function applyPromotionsCart(cart) {
  // Apply promotions to each item in the array "cart"

  // PROMOTION FOR ITEM "COOKING OIL"
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === 1) {
      if (cart[i].quantity >= 3) {
        cart[i].price = 10;
        cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
      } else {
        cart[i].price = 10.5;
      }
    }
  }

  // PROMOTION FOR CAKE INGREDIENTS
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === 3) {
      if (cart[i].quantity >= 10) {
        cart[i].price = 3.33;
        cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
      } else {
        cart[i].price = 5;
      }
    }
  }

  calculateTotal();
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom

  let cartTableString = " ";

  for (let i = 0; i < cart.length; i++) {
    cartTableString += "<tr>";
    cartTableString += "<th scope='row'>";
    cartTableString += cart[i].name;
    cartTableString += "</th>";
    cartTableString += "<td>";
    cartTableString += "$" + cart[i].price;
    cartTableString += "</td>";
    cartTableString += "<td>";
    cartTableString += cart[i].quantity;
    cartTableString += "</td>";
    cartTableString += "<td>";
    cartTableString += "$" + cart[i].price * cart[i].quantity;
    cartTableString += "</td>";
    cartTableString += "</tr>";
  }

  document.getElementById("cart_list").innerHTML = cartTableString;
  document.getElementById("total_price").innerHTML = total.toFixed(2);
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.

  // IF the array cart is empty, we push the first element with quantity = 1 to the array cart.
  // We loop through the array of products and once we find the corresponding product id we send it to cart.

  let isDuplicated = false;
  let index;

  if (cart.length === 0) {
    for (let i = 1; i <= products.length; i++) {
      if (i === id) {
        products[i - 1].quantity = 1;
        cart.push(products[i - 1]);
        break;
      }
    }
  } else {
    // IF the array cart is not empty we start looking for duplicates
    // We loop through the cart array.
    // IF the item has a match with the same id in the cart array it means that it is a duplicate so we break the loop and we add 1 to its quantity.
    for (index = 0; index < cart.length; index++) {
      if (cart[index].id === id) {
        isDuplicated = true;
        break;
      } else {
        isDuplicated = false;
      }
    }

    if (isDuplicated) {
      cart[index].quantity++;
    } else {
      products[id - 1].quantity = 1;
      cart.push(products[id - 1]);
    }
  }

  applyPromotionsCart(cart);
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
