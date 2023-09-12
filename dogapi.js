document.getElementById('search').addEventListener('input', function() {
    var search = document.getElementById('search').value;
    var searchResult = document.getElementById('searchResult');

    if (search.length >= 3) {
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(response => response.json())
            .then(data => {
                searchResult.innerHTML = 'Search result for: ' + search;
                data.message.forEach(function(image) {
                    var img = document.createElement('img');
                    img.src = image;
                    searchResult.appendChild(img);
                });
            });
    } else {
        searchResult.innerHTML = '';
    }
});
