window.onload = function () {

    const countTravels = function () {
        const cards = document.querySelectorAll(".card")

        // alert("there are " + cards.length + " travels displayed in the page")
    }
    countTravels()

    const addBadge = function () {
        const cards = document.querySelectorAll(
            "#welcome-summer .card"
        );

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const span = `<span class="badge bg-danger position-absolute end-0 mt-2 me-2">HOT</span>`;
            card.innerHTML += span;
        }
    };

    addBadge(); //this adds hot badges on cards

};
const removeCards = function () {
    const cards = document.querySelectorAll(".card");

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.remove();
    }

};
