let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(div);
    });
}

function proceedToCheckout() {
    document.getElementById('products').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';
}

document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Order placed successfully!');
    cart = [];
    updateCart();
    document.getElementById('products').style.display = 'block';
    document.getElementById('cart').style.display = 'block';
    document.getElementById('checkout').style.display = 'none';
});
