const prodId = new URLSearchParams(window.location.search).get("product");
const wrapper = document.querySelector(".content-wrapper");
const form = document.querySelector("form");
const fullnameInput = document.querySelector("#fullname");
const descriptionInput = document.querySelector("#description");
const feedbacks = document.querySelector(".feedbacks");

document.addEventListener("DOMContentLoaded", () => {
  getProductDetails();
  getComemnts();
});

function getProductDetails() {
  fetch(`http://localhost:3000/products/${prodId}`)
    .then((res) => res.json())
    .then((data) => {
      wrapper.innerHTML = `
            <div class="image-box">
                <img
                src="${data.thumbnail}"
                alt="${data.title}"
                />
            </div>

            <div class="product-info">
                <h3>${data.title}</h3>

                <div class="review">
                <div class="review-icons">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>

                <span>14 Reviews</span>
                </div>

                <p>Brand: <span>${data.brand}</span></p>

                <p>Category: <span>${data.category}</span></p>

                <p>${data.description}</p>

                <p>Price: <span>$${data.price}</span></p>
            </div>
        `;
    })
    .catch((error) => console.log(error));
}

function getComemnts() {
  fetch(`http://localhost:3000/comments?productId=${prodId}`)
    .then((res) => res.json())
    .then((data) => {
      feedbacks.innerHTML = "";

      data.forEach((element) => {
        feedbacks.innerHTML += `
            <div class="feedback-box">
                <div class="feedback-header">
                <div class="feedback-avatar">
                    <img src="../assests/images/avatar-1.png" alt="" />

                    <p>${element.fullname}</p>
                </div>

                <div class="user-review">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                </div>

                <div class="feedback-body">
                <p>
                    ${element.comment}
                </p>
                </div>
            </div>
            `;
      });
    })
    .catch((err) => console.log(err));
}
