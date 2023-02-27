let stringa = document.getElementById("display");


function display(value){stringa.value += value};

//all clear function
function AC() {stringa.value = " "};

//equal function
function equal(){stringa.value = eval(stringa.value)};
