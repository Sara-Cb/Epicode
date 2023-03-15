///DA FIXARE E RENDERE PIU' MODULARE E MANUTENIBILE

const booksReference = document.getElementById("books");
const cartReference = document.getElementById("cart");
const cartDelBtn = document.getElementById("cartDel");
let cardDelBtn = (card) => card.remove();

cartDelBtn.addEventListener("click", () => {
  localStorage.clear();
  cartReference.innerText = "";
});

function createCard(fetchData) {
  let newCard = document.createElement("div");
  newCard.setAttribute("class", "col");

  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let cardImgDiv = document.createElement("div");
  cardImgDiv.setAttribute("class", "cardImgDiv");

  let cardImg = document.createElement("img");
  cardImg.setAttribute("class", "card-img-top");
  cardImg.setAttribute("src", fetchData.img);

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body d-flex flex-column justify-content-around");

  let cardTextDiv = document.createElement("div");

  let cardTitle = document.createElement("h4");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.innerText = fetchData.title;

  let cardText = document.createElement("p");
  cardText.setAttribute("class", "card-text");
  cardText.innerText = fetchData.price + " €";

  let cardBtnsDiv = document.createElement("div");

  let newcardDelBtn = document.createElement("button");
  newcardDelBtn.setAttribute("class", "btn");

  newcardDelBtn.innerText = "Discard";
  newcardDelBtn.addEventListener("click", () => {
    newCard.remove();
  });

  let addToCart = document.createElement("button");
  addToCart.setAttribute("class", "btn");
  addToCart.innerText = "Add to cart";
  addToCart.addEventListener("click", () => {
    let bookInCart = { 
      title: fetchData.title, 
      price: fetchData.price };

    let bookinCartText = document.createElement("p");
    bookinCartText.innerText = bookInCart.title + " - " + bookInCart.price + "€"; 
    localStorage.setItem(`book-${fetchData.asin}`, JSON.stringify(bookInCart));

    let bookInCartDel = document.createElement("button");
    bookInCartDel.setAttribute("class", "btn");
    bookInCartDel.innerText = "Remove";
    bookInCartDel.addEventListener("click", () => {
      localStorage.removeItem(`book-${fetchData.asin}`);
      bookinCartText.remove();
    });
    bookinCartText.appendChild(bookInCartDel);
    cartReference.appendChild(bookinCartText);
  });

  cardBody.appendChild(cardTextDiv);
  cardBody.appendChild(cardBtnsDiv);
  
  cardTextDiv.appendChild(cardTitle);
  cardTextDiv.appendChild(cardText);

  cardBtnsDiv.appendChild(newcardDelBtn);
  cardBtnsDiv.appendChild(addToCart);

  cardImgDiv.appendChild(cardImg);

  card.appendChild(cardImgDiv);
  card.appendChild(cardBody);

  newCard.appendChild(card);

  booksReference.appendChild(newCard);
}

fetch("https://striveschool-api.herokuapp.com/books")

  .then((response) => {
    return response.json();
  })

  .then((payload) => {
    payload.forEach((book) => {
      createCard(book);
    });
  })

  .catch((err) => {
    console.log(err);
  });
