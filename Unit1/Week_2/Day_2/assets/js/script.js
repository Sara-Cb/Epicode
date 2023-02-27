const esercizio1 = document.getElementById('concatena');
const esercizio2 = document.getElementById('concatena2');

var nome = 'Aldo';
let ruolo = 'cliente';
const pgreco = 3.14;

esercizio1.innerHTML = nome + ', ' + ruolo + ', ' + pgreco; //concatenazione di variabili e 'stringhe/testo'

var completo = nome + ', ' + ruolo + ', ' + pgreco; //oppure = 'Aldo, cliente, 3.14'

esercizio2.innerHTML = completo;


//ESERCIZIO3 - PT.1
var nome1 = 'Mario';            //valore di partenza
document.getElementById('var').innerHTML = nome1;       //valore di partenza
{
    let nome1 = 'Carla';
    document.getElementById('let').innerHTML = nome1; //comando di stampa DA gruppo
}
document.getElementById('final').innerHTML = nome1;     //valore di partenza


//ESERCIZIO3 - PT.2
/*var nome2 = 'Carla';        //valore di partenza

{
    let nome2 = 'Mario';            //valore modificato solo in gruppo
    document.getElementById('let2').innerHTML = nome2;  //comando di stampa DA gruppo
}

document.getElementById('let3').innerHTML = nome2;      //valore di partenza
document.getElementById('final2').innerHTML = nome2;    //valore di partenza
*/
document.getElementById('let2').innerHTML = nome1;
{
    var nome1 = 'Carla';
}
document.getElementById('let3').innerHTML = nome1;
document.getElementById('final2').innerHTML = nome1;


//ESERCIZIO4

const iniziale = 15;

//riga 1
document.getElementById('iniziale').innerHTML += iniziale;

//riga2
var addizione = iniziale + 15;
document.getElementById('valore1').innerHTML += addizione + ', ' + (++addizione); //parentesi superflue, solo indicazione

//riga3
var sottrazione = iniziale - 10;
document.getElementById('valore2').innerHTML += sottrazione + ', ' + (--sottrazione);

//riga4
document.getElementById('valore3').innerHTML += iniziale*3;

//riga5
document.getElementById('valore4').innerHTML += iniziale/3;

//riga6
document.getElementById('valore5').innerHTML += iniziale + ' è un numero';  //oppure  const type = ' è un numero'; e poi sotto + type;