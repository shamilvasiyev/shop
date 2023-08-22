const wrapper = document.querySelector(".products-wrapper");

document.addEventListener("DOMContentLoaded", getProducts);

function getProducts() {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((products) => {
      products.map((element) => {
        wrapper.innerHTML += `
            <div class="product">
                <a href="./pages/singleProduct.html?product=${element.id}" class="product-link"></a>
                    <div class="product-image">
                        <img
                            src="${element.thumbnail}"
                            alt=""
                        />
                    </div>
    
                <div class="product-body">
                    <p class="product-title">${element.title}</p>
    
                    <p class="product-rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </p>
    
                    <p class="product-desc">
                        ${element.description}
                    </p>
                    <p class="product-price">$${element.price}</p>
                </div>
            </div>
        `;
      });
    });
}
