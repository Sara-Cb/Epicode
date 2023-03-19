const myKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzY2IyY2M1NmIzNjAwMTMzZmU1N2QiLCJpYXQiOjE2NzkwNDkxOTksImV4cCI6MTY4MDI1ODc5OX0.rO07M97K2A2Flfk9JOsNIzw8pQa2wRIVQU0a356TdxI";
const myEndpoint = "https://striveschool-api.herokuapp.com/api/product/";
const rowReference = document.getElementById("bestSellers");
const loadingSpin = document.getElementById("loadingSpin");

const hideLoad = () => {
  loadingSpin.classList.add("d-none");
};

const createCards = (products) => {
  rowReference.innerHTML = ``;
  products.forEach((product, index) => {
    const newCol = document.createElement("div");
    newCol.setAttribute("class", "col-12 col-sm-6 col-md-4 col-xl-3 mb-2");
    newCol.setAttribute("id", index);

    const newCard = document.createElement("div");
    newCard.classList.add("card");

    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img-top");
    cardImg.innerHTML = `<img src=${product.imageUrl} alt='product image' class='prodImg'>`;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerHTML = `
    <div>
        <h3 class="card-title">${product.name}</h3>
        <h4 class="card-subtitle">${product.brand}</h4>
    </div>
    <div class="card-text">
        <p class='cardDescription'>${product.description}</p>
    </div>
    <div>
        <p class='cardPrice w-100 mb-2'>Price: ${product.price}€</p>
    <div class='d-flex justify-content-between '>
        <a href="./details.html?_id=${product._id}" id="detailsBtn" class="btn">Details</a>
        <a href="./backoffice.html?_id=${product._id}" id="editBtn" class="btn">Edit</a>
    </div>
    </div>`;

    newCard.appendChild(cardImg);
    newCard.appendChild(cardBody);

    newCol.appendChild(newCard);
    rowReference.appendChild(newCol);
  });
};

const getProducts = async function () {
  try {
    let response = await fetch(myEndpoint, {
      method: "GET",
      headers: {
        Authorization: myKey,
      },
    });
    console.log(response);
    if (response.ok) {
      let respJson = await response.json();
      let products = Array.from(respJson);
      hideLoad();
      createCards(products);
      return products;
    } else {
      console.log("PROBLEM");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

getProducts();
