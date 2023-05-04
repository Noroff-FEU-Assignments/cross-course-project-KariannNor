

let carts = document.querySelectorAll('.cta_add');

let products = [
 {
    name: "Yukon",
    tag: "Insulated Hoodie",
    img: "products_1",
    price: 186,
    inCart: 0
    
 },
 {
  name: "Chesapeak",
  tag: "Water Resistant Hoodie",
  img: "products_2",
  price: 132,
  inCart: 0
  
},
{
  name: "Mt. Whitney",
  tag: "Rain Parka",
  img: "products_3",
  price: 230,
  inCart: 0

},
];


for(let i=0; i< carts.length; i++) {
  carts[i].addEventListener('click', () => {
   cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');
  if(productNumbers){
    document.querySelector('.fa-cart-shopping span').textContent = productNumbers;
  } 

}

  function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);



  if(productNumbers){
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector('.fa-cart-shopping span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector('.fa-cart-shopping span').textContent = 1;
  }

  setItems(product);

} 

function setItems(product){
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null) {
      let currentProduct = product.tag;
  
      if( cartItems[currentProduct] == undefined ) {
          cartItems = {
              ...cartItems,
              [currentProduct]: product
          }
      } 
      cartItems[currentProduct].inCart += 1;

  } else {
      product.inCart = 1;
      cartItems = { 
          [product.tag]: product
      };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  }else {
    localStorage.setItem("totalCost", product.price);
  }

}

function displayCart(){
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products_cart");

  if(cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <h1 class="p2">Order summary</h1> 
      <p class="p1 price"><strong>Total: $${item.inCart * item.price}.00 </strong></p>
      <p class="divider_small"></p>
      <h2 class="p1"><strong>${item.name}</strong></h2>
      <h2 class="p1">${item.tag}</h2>
      <div class="thumbnail">
      <img src="./images/products/${item.img}.jpg"/>
      </div>

      <div class="quantity_summary"><h3 class="p1 quantity">Quantity</h3>
      <p class="inline decrease"><i class="fa-solid fa-minus"></i></p>
      <p class="size"><span>${item.inCart}</span></p>
      <p class="inline increase"><i class="fa-solid fa-plus"></i></p>
      </div>

      <p class="divider_small"></p>
      <div class="shipping">
        <h2 class="p2">Shipping</h2>
        <ol>
          <li class="p1">
            <input type="radio" name="free" value="free_shipping" checked />
            You have free shipping on this item.
            <strong> Estimated arrival Wed, Jan. 26</strong>
          </li>
          <li class="p1">
            <input type="radio" name="free" value="free_shipping" />
            <strong>Need it faster?</strong> <br />Express overnight
            delivery <strong>$25.00</strong>
          </li>
        </ol>
        <p class="divider_small hidden"></p>
      </div>

      `
    });

  }
}

onLoadCartNumbers();
displayCart();


