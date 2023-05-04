const baseUrl = "https://knorheim.no/rainydays_api/wp-json/wc/store/products/";
const productContainer = document.querySelector(".products");


async function getProducts(url){
  const response = await fetch(url);
  const products = await response.json();

 

  products.forEach(function(product){
    productContainer.innerHTML += `
    <a href="product.html?id=${product.id}">
      <img src="${product.images[0].src}"/>
    
      <h3 class="p2 text_card">${product.name}</h3>
      <p class="p1">${product.short_description}</p>
      <p class="p1">${product.price_html}</p>
    </a>
  `
  })
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