let cart = [];

function addToCart(productId) {
    const product = {
        id: productId,
        name: document.querySelector(.product[data-id="${productId}"] h3).textContent,
        price: parseFloat(document.querySelector(.product[data-id="${productId}"] p).textContent.replace('$', ''))
    };
    cart.push(product);
    alert(${product.name} has been added to your cart!);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;
    
    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        totalPrice += product.price;
    });
    
    document.getElementById('total-price').textContent = Total: $${totalPrice.toFixed(2)};
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Checkout functionality is not implemented in this demo.');
});