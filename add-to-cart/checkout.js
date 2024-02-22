document.addEventListener('DOMContentLoaded', function(){
    // Fetch basket items from local storage
    let basket = JSON.parse(localStorage.getItem('basket')) || [];

    // Fetch details of selected movies from the API
    async function fetchBasketItems(basket) {
        try {
            const basketItemsContainer = document.getElementById('basket-items');
            let totalPrice = 0;

            // Clear previous content
            basketItemsContainer.innerHTML = '';

            // Loop through each item in the basket
            for (let i = 0; i < basket.length; i++) {
                const productId = basket[i];

                // Fetch details of the item from the API
                const response = await fetch(`https://api.noroff.dev/api/v1/square-eyes/${productId}`);
                const movie = await response.json();

                // Check if the response contains a valid movie
                if (movie && movie.title) {
                    // Calculate item price
                    const itemPrice = parseFloat(movie.price);
                    totalPrice += itemPrice;

                    // Create HTML for the basket item
                    const itemHTML = `
                        <div class="basket-item">
                            <h2>${movie.title}</h2>
                            <p><strong>Price:</strong> $${itemPrice.toFixed(2)}</p>
                        </div>
                    `;
                    basketItemsContainer.innerHTML += itemHTML;
                } else {
                    console.error('Invalid movie data received:', movie);
                }
            }

            // Display total price
            const totalPriceContainer = document.getElementById('total-price');
            totalPriceContainer.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        } catch (error) {
            console.error('Error fetching basket items:', error);
        }
    }

    // Call fetchBasketItems function to fetch and display selected movies on checkout page
    fetchBasketItems(basket);
});