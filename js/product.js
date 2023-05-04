const productContainer = document.querySelector(".product_description");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const baseUrl = "https://knorheim.no/rainydays_api/wp-json/wc/store/products/" + id;

async function getProducts(url){
  const response = await fetch(url);
  const product = await response.json();

    productContainer.innerHTML = `
         
      <div class="product_one">
      <img src="${product.images[0].src}"/>
      <img src="${product.images[1].src}"/>
      <img src="${product.images[2].src}"/>
      </div>

        <div class="product_text">
            <div id="popup" class="summary">
              <div class="summary_title">
                  <a href="#"> <i class="fa-solid fa-x"></i></a>
                  <h1 class="h2">Added to your cart!</h1>
                  <h2 class="p1"><strong>${product.name}</strong></h2>
                  <p class="p1">${product.short_description}</p>
                  <p class="p1"><strong>Item price:</strong> ${product.price_html}</p>
                  <p class="divider_small"></p>

              </div>
              <div class="continue_shopping">
                <a href="../shoppingcart.html" class="cta_checkout cart">checkout</a>
              </div>
            </div>
        </div>


    <div class="product_text">
      <h1 class="h1 text_card">${product.name}</h1>
      <p class="p1">${product.short_description}</p>
      
      <p class="h4">${product.price_html}</p>

      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-half-stroke"></i>
      <i class="fa-regular fa-star"></i>
      <p class="rating">80 reviews</p>

      <div class="color_section">
      <p class="p1"><strong>Colors</strong></p>
      <p class="color two"></p>
      <p class="color three"></p>
      <p class="color four"></p>
      </div>

      <div class="size_section">
        <p class="size">XS</p>
        <p class="size">S</p>
        <p class="size">M</p>
        <p class="size">L</p>
        <p class="size">XL</p>
      </div>

      <div>
        <a class="cta_add cart2" href="#popup">add to cart</a>
        <input type="hidden" value="132" />
      </div>

      <div>
        <p class="p1">${product.description}</p>
      </div>
    </div>
      
  
    `;

}

getProducts(baseUrl);


//* loader
window.addEventListener('load', function() {
  document.querySelector('.loader').style.display = 'flex';
});

fetch('https://knorheim.no/rainydays_api/wp-json/wc/store/products/')
  .then(response => {
    
    document.querySelector('.loader').style.display = 'none';

    return response.json();
  });