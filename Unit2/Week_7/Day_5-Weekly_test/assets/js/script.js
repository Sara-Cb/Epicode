const myKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzY2IyY2M1NmIzNjAwMTMzZmU1N2QiLCJpYXQiOjE2NzkwNDkxOTksImV4cCI6MTY4MDI1ODc5OX0.rO07M97K2A2Flfk9JOsNIzw8pQa2wRIVQU0a356TdxI";
const myEndpoint = "https://striveschool-api.herokuapp.com/api/product/";

const getProducts = async (url) => {
  try {
    let response = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzY2IyY2M1NmIzNjAwMTMzZmU1N2QiLCJpYXQiOjE2NzkwNDkxOTksImV4cCI6MTY4MDI1ODc5OX0.rO07M97K2A2Flfk9JOsNIzw8pQa2wRIVQU0a356TdxI",
      },
    });
    console.log(response);
    if (response.ok) {
      let respJson = await response.json();
      let products = respJson.product;
      console.log(products);
      return products;
    } else {
      console.log("PROBLEM");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

getProducts(myEndpoint);
