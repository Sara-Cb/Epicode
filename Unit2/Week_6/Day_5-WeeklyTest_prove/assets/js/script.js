const navSearch = document.querySelector('#navSearch');
const searchInput = document.querySelector('.form-search input');

navSearch.addEventListener('click', function() {
    searchInput.classList.toggle('active');
});