// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "Light Souls",
    price: 10.5,
    type: "rpg",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Devs Adventures",
    price: 6.25,
    type: "rpg",
  },
  {
    id: 3,
    name: "Dragon Age",
    price: 5,
    type: "rpg",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "Larry Topper",
    price: 260,
    type: "fantasy",
  },
  {
    id: 5,
    name: "Super Luigi",
    price: 20.5,
    type: "fantasy",
  },
  {
    id: 6,
    name: "Older Ring",
    price: 12.75,
    type: "fantasy",
  },
  {
    id: 7,
    name: "Sun wars",
    price: 15,
    type: "multiplayer",
  },
  {
    id: 8,
    name: "Rock League",
    price: 19.99,
    type: "multiplayer",
  },
  {
    id: 9,
    name: "Doto 2",
    price: 9.99,
    type: "multiplayer",
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
  document.getElementById("total_price").innerHTML = "0.00";
  updateCartBadge();
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

  // applyPromotionsCart(cart);
}

// Exercise 5
function applyPromotionsCart(cart) {
  // Apply promotions to each item in the array "cart"

  // PROMOTION FOR ITEM "Light Souls"
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

  // PROMOTION FOR ITEM "Dragon Age"
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
    cartTableString += "$" + (cart[i].price * cart[i].quantity).toFixed(2);
    cartTableString += "</td>";
    cartTableString += "</tr>";
  }

  document.getElementById("cart_list").innerHTML = cartTableString;
  document.getElementById("total_price").innerHTML = total.toFixed(2);
}

// ** Nivell II **

// Exercise 8
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.

  // IF the array cart is empty, we push the first element with quantity = 1 to the array cart.
  // We loop through the array of products and once we find the corresponding product id we push it to cart.

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

  updateCartBadge();
  applyPromotionsCart(cart);
}

// Exercise 9
function removeFromCart(id) {
  if (cart.length === 0) {
    alert("The cart is already empty!");
    return;
  }

  // We need to loop through cart[] and find a matching id
  // We then need to find the index of the item inside cart[] so we can later use it with the slice method
  // If we find it, we reduce its quantity by 1
  // If the quantity is equal to 0 we remove the item from the array cart[] using splice and the index found earlier

  let isDuplicated = false;
  let i;

  for (i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      isDuplicated = true;
      break;
    } else {
      isDuplicated = false;
    }
  }

  let foundItem = cart.indexOf(cart[i]);

  if (isDuplicated) {
    cart[i].quantity--;

    if (cart[i].quantity === 0) {
      cart.splice(foundItem, 1);
    }
  }

  updateCartBadge();
  applyPromotionsCart(cart);
}

// This function is used to update the item quantity shown in the badge next to the cart icon
function updateCartBadge() {
  let cartProductCount = 0;

  for (let i = 0; i < cart.length; i++) {
    cartProductCount += cart[i].quantity;
  }

  document.getElementById("count_product").innerHTML = cartProductCount;
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
