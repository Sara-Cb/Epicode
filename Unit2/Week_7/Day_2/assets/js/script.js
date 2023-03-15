const listReference = document.getElementById("userList");
const formReference = document.getElementById("userForm");
const delBtn = document.getElementById("delBtn");
const nameReference = document.getElementById("name");
const timer = document.getElementById("timer");
let nameIndex = 0;


if (!sessionStorage.getItem("time")) {
  sessionStorage.setItem("time", 0);
}

window.addEventListener("load", () => {
  for (i = 0; i < localStorage.length; i++) {
    let newLi = document.createElement("li");
    newLi.innerText = localStorage.getItem(`Name-${i}`);
    listReference.appendChild(newLi);
  }

  let d = sessionStorage.getItem("time");
  let time = parseInt(d);

  setInterval(() => {
    time += 1;
    sessionStorage.setItem("time", time);
    timer.innerText = sessionStorage.getItem("time");
  }, 1000);
});

formReference.addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.setItem(`Name-${nameIndex}`, nameReference.value);
  let newLi = document.createElement("li");
  newLi.innerText = localStorage.getItem(`Name-${nameIndex}`);
  listReference.appendChild(newLi);
  nameIndex += 1;
  nameReference.value = "";
});

formReference.addEventListener("reset", () => {
  listReference.innerText = "";
  localStorage.clear();
});

delBtn.addEventListener("click", function () {
  nameIndex -= 1;
  localStorage.removeItem(`Name-${nameIndex}`);
  listReference.removeChild(listReference.lastChild);
});
