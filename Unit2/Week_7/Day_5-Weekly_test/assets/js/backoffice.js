const myEndpoint = "https://striveschool-api.herokuapp.com/api/product/";
const myKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzY2IyY2M1NmIzNjAwMTMzZmU1N2QiLCJpYXQiOjE2NzkwNDkxOTksImV4cCI6MTY4MDI1ODc5OX0.rO07M97K2A2Flfk9JOsNIzw8pQa2wRIVQU0a356TdxI";
const formReference = document.getElementById("myForm");
const nameReference = document.getElementById("nameField");
const decriptionReference = document.getElementById("descriptionField");
const brandReference = document.getElementById("brandField");
const imgUrlReference = document.getElementById("imgField");
const priceReference = document.getElementById("priceField");
const submitBtn = document.getElementById("mySubmit");
const delBtn = document.getElementById("delBtn");
const _id = new URLSearchParams(window.location.search).get("_id");
const editTitle = document.getElementById("editTitle");

class Product {
  constructor(name, description, brand, imageUrl, price) {
    this.name = name;
    this.description = description;
    this.brand = brand;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}

const setPage = function () {
  if (_id) {
    fetch(myEndpoint + _id, {
      headers: {
        Authorization: myKey,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return new Error("Error!");
        }
      })
      .then((prodData) => {
        editTitle.innerHTML = "Edit product";
        nameReference.value = prodData.name;
        decriptionReference.value = prodData.description;
        brandReference.value = prodData.brand;
        imgUrlReference.value = prodData.imageUrl;
        priceReference.value = prodData.price;

        delBtn.classList.remove("d-none");
        delBtn.addEventListener("click", deleteProduct);
        submitBtn.innerHTML = "Edit";
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const saveProduct = async function (newProd) {
  try {
    let url = _id ? myEndpoint + _id : myEndpoint;

    let response = await fetch(url, {
      method: _id ? "PUT" : "POST",
      body: JSON.stringify(newProd),
      headers: {
        Authorization: myKey,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      nameReference.value = "";
      decriptionReference.value = "";
      brandReference.value = "";
      imgUrlReference.value = "";
      priceReference.value = "";
      alert("Prodotto salvato!");
    } else {
      alert("PROBLEMA salvataggio");
    }
  } catch (error) {
    console.log(error);
  }
};

formReference.addEventListener("submit", (e) => {
  e.preventDefault();
  let newProduct = new Product(
    nameReference.value,
    decriptionReference.value,
    brandReference.value,
    imgUrlReference.value,
    priceReference.value
  );
  console.log(newProduct);
  saveProduct(newProduct);
});

formReference.addEventListener("reset", (ev) => {
  if (!window.confirm("This action will empty the form, are you sure?")) {
    ev.preventDefault();
  }
});

let deleteProduct = async () => {
  if (window.confirm("Deleting a product is irreversible. Are you sure?")) {
    let response = await fetch(myEndpoint + _id, {
      method: "DELETE",
      headers: {
        Authorization: myKey,
      },
    });
    if (response.ok) {
      alert("Product deleted correctly");
      window.location = "./home.html";
    } else {
      alert("There was an error, product still here!");
    }
  } else {
    window.location = "./home.html";
  }
};

window.addEventListener("load", setPage);
