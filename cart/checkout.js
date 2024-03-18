  // Function to remove a product from the basket
  function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartSummary();
  }

  // Function to display cart summary on checkout page
  function displayCartSummary() {
    const cartSummaryContainer = document.getElementById('cartSummary');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartSummaryContainer.innerHTML = '';
    if (cart.length === 0) {
      cartSummaryContainer.innerHTML = '<p>Your cart is empty</p>';
    } else {
      const totalPrice = cart.reduce((total, item) => total + item.price, 0);
      cart.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.innerHTML = `
          <p>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>
        `;
        cartSummaryContainer.appendChild(cartItemElement);
      });
      cartSummaryContainer.innerHTML += `<p>Total Price: $${totalPrice}</p>`;
    }
  }

  // Display cart summary when the page is loaded
  window.onload = function() {
    displayCartSummary();
  };