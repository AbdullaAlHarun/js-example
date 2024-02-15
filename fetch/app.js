const mainDocuments = document.addEventListener('DOMContentLoaded', function(){
    fetchProduct('https://api.noroff.dev/api/v1/square-eyes');
    let products = document.querySelector('.products');
    let genreLinks = document.querySelectorAll('.catagory ul li a');

    async function fetchProduct(url) {
        let data = await fetch(url);
        let response = await data.json();

        displayProducts(response);
        
        // Add event listeners to genre links
        genreLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                let genre = this.textContent.toLowerCase();
                let filteredMovies = response.filter(movie => movie.genre.toLowerCase() === genre);
                displayProducts(filteredMovies);
            });
        });

        // Add event listener to "Show All" link
        document.querySelector('.catagory ul li a').addEventListener('click', function(e) {
            e.preventDefault();
            displayProducts(response);
        });
    };

    // Display all movies from API in home page! 
    function displayProducts(productsArray) {
        products.innerHTML = '';
        for (let i = 0; i < productsArray.length; i++) {
            let description = productsArray[i].description;
            products.innerHTML += `
                <div class="product">
                    <img src="${productsArray[i].image}" alt="" class="product-img">
                    <div class="product-content">
                        <h2 class="product-title">${productsArray[i].title}</h2>
                        <h4 class="product-catagory">${productsArray[i].genre}</h4>
                        <p class="product-description">${description.length > 80 ? description.substring(0,80).concat('...more') : description}</p>
                        <div class="product-price-container">
                            <h3 class="product-price">$${productsArray[i].price}</h3>
                            <a href="#!"  data-productId="${productsArray[i].id}" class="add-to-cart">Add To Cart</a>
                        </div>
                    </div>
                </div>
            `;
        }
    }
});