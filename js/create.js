const form = document.querySelector("form");
const inputs = Array.from(form.elements);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = {};

  inputs.forEach((input) => {
    const { name, value } = input;

    if (value !== "") {
      data = { ...data, [name]: value };
    }
  });

  fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        window.location.href = "../index.html";
      } else {
        alert(res);
      }
    })
    .catch((err) => console.log(err));
});
