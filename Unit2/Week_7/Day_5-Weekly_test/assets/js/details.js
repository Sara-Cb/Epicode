const myEndpoint = "https://striveschool-api.herokuapp.com/api/product/";
const myKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzY2IyY2M1NmIzNjAwMTMzZmU1N2QiLCJpYXQiOjE2NzkwNDkxOTksImV4cCI6MTY4MDI1ODc5OX0.rO07M97K2A2Flfk9JOsNIzw8pQa2wRIVQU0a356TdxI";
const _id = new URLSearchParams(window.location.search).get("_id");
const detailDiv = document.getElementById("productDetails");

let showDetail = async () => {
  try {
    let response = await fetch(myEndpoint + _id, {
      method: "GET",
      headers: {
        Authorization: myKey,
      },
    });
    if (response.ok) {
      let product = await response.json();
      let productImg = document.createElement("div");
      productImg.classList.add("col-6");
      productImg.innerHTML = `<img src="${product.imageUrl}" class="img-fluid" alt="product image">`;
      let productData = document.createElement("div");
      productData.setAttribute("class", "col-5 offset-1");
      productData.innerHTML = `
      <div>
          <h2 class="card-title">${product.name}</h2>
          <h2 class="detBrand">${product.brand}</h2>
      </div>
      <div class="card-text">
          <p class='detDescription'>${product.description}</p>
          <p class='detPrice'>Price: ${product.price}€</p>
      </div>
      <div>
          <a href="./backoffice.html?_id=${product._id}" id="editBtn" class="btn">Edit Product</a>
      </div>`;

      detailDiv.appendChild(productImg);
      detailDiv.appendChild(productData);
    }
  } catch (error) {
    console.log(error);
  }
};

showDetail();
