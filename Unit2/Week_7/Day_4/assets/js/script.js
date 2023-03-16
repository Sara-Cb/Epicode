const myKey = "[3WxA53hU3FVfycS4IbCuYjIAvGxa84tk008mZBK7JbxkW0BboLyVvssj]";
const FRONT_PHOTOS = "https://api.pexels.com/v1/search?query=Sea";
const BACK_PHOTOS = "https://api.pexels.com/v1/search?query=Mountain";
const loadFrontBtn = document.getElementById("loadBtn");
const loadBackBtn = document.getElementById("loadBackBtn");

const showPics = function () {};

const getFrontPhotos = function () {
  fetch(FRONT_PHOTOS, {
    method: "GET",
    headers: {
      Authorization:
        "[3WxA53hU3FVfycS4IbCuYjIAvGxa84tk008mZBK7JbxkW0BboLyVvssj]",
    },
    mode: "no-cors",
  })
    .then((response) => response.json())
    .then((data) => {
      showPics(data.photos);
    })
    .catch((error) => {
      console.error("Something went wrong", error);
    });
};

const getBackPhotos = async function () {
  try {
    const response = await fetch(BACK_PHOTOS, {
      method: "GET",
      headers: {
        Authorization: myKey,
      },
    });
    const data = await response.json();
    showPics(data.photos);
  } catch (error) {
    console.error("Something went wrong", error);
  }
};

loadFrontBtn.addEventListener("click", function (event) {
  event.preventDefault();
  getFrontPhotos();
});

loadBackBtn.addEventListener("click", function (event) {
  event.preventDefault();
  getBackPhotos();
});
