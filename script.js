let cart = [];
let cartCount = 0;
let cartTotal = 0;

// Add to cart function
function addToCart(name, price) {
    cart.push({name, price});
    cartCount++;
    cartTotal += price;
    
    // Update cart count
    document.querySelector('.cart-count').textContent = cartCount;
    
    // Update cart modal
    updateCartModal();
    
    // Show success message
    alert(`${name} has been added to your cart!`);
}

// Update cart modal
function updateCartModal() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        cartTotalElement.textContent = '0.00';
        return;
    }
    
    let itemsHTML = '';
    cart.forEach(item => {
        itemsHTML += `
            <div class="cart-item d-flex justify-content-between">
                <div>$${item.name}</div>
                <div>${item.price.toFixed(2)}</div>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = itemsHTML;
    cartTotalElement.textContent = cartTotal.toFixed(2);
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    modal.hide();
    
    // Show order confirmation
    setTimeout(() => {
        alert(`Order confirmed! Total: ${cartTotal.toFixed(2)}\nThank you for your purchase!`);
        
        // Reset cart
        cart = [];
        cartCount = 0;
        cartTotal = 0;
        document.querySelector('.cart-count').textContent = '0';
        updateCartModal();
    }, 500);
}

// Show alert when clicking menu items
function showAlert(item) {
    alert(`You clicked ${item}`);
}