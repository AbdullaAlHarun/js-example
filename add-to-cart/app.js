document.addEventListener('DOMContentLoaded', function(){
    fetchProduct('https://api.noroff.dev/api/v1/square-eyes');
    let products = document.querySelector('.products');
    let basketCount = document.getElementById('basket-count');
    let basket = JSON.parse(localStorage.getItem('basket')) || [];

    async function fetchProduct(url) {
        let data = await fetch(url);
        let response = await data.json();

        displayProducts(response);
        
        // Add event listeners to genre links
        document.querySelectorAll('.catagory ul li a').forEach(link => {
            link.addEventListener('click', async function(e) {
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
                    <a href="movie.html?id=${productsArray[i].id}" class="movie-link">
                        <img src="${productsArray[i].image}" alt="" class="product-img">
                    </a>
                    <div class="product-content">
                        <h2 class="product-title">${productsArray[i].title}</h2>
                        <h4 class="product-catagory">${productsArray[i].genre}</h4>
                        <p class="product-description">${description.length > 80 ? description.substring(0,80).concat('...more') : description}</p>
                        <div class="product-price-container">
                            <h3 class="product-price">$${productsArray[i].price}</h3>
                            <button class="add-to-cart" onclick="addToCart('${productsArray[i].title}', ${productsArray[i].price})">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // Function to add a product to the basket
    function addToCart(name, price) {
        const item = { name, price };
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateSelectedItemCount();
      }
  
      // Function to update selected item count
      function updateSelectedItemCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const selectedItemCountSpan = document.getElementById('selectedItemCount');
        selectedItemCountSpan.textContent = ` (${cart.length})`;
      }
   
    // Fetch and display products when the page loads
    fetchAndDisplayProducts('https://api.noroff.dev/api/v1/square-eyes');
});