const { products } = require("../data/items");

function createCart() {
    return {
        items: new Map(),
        discounts: new Set(),
        totalDiscount: 0,
        freebies: new Map(),
    };
}

function addToCart(cart, productId, quantity = 1) {
    const item = products.find((e) => e.id === productId);
    if (!item) {
        return cart;
    }

    const qty = cart.items.get(productId) || 0;
    cart.items.set(productId, qty + quantity);
    return cart;
}

// console.log([...cart.items.entries()]);

function updateCart(cart, productId, quantity) {
    if (!cart.items.has(productId)) {
        return cart
    }

    cart.items.set(productId, quantity);
    return cart;
}

function removeFromCart(cart, productId) {
    if (!cart.items.has(productId)) {
        return cart
    }

    cart.items.delete(productId);
    return cart;
}

function getCartTotalPrice(cart) {
    let totalPrice = 0;
    cart.items.forEach((value, key) => {
        const item = products.find(({ id }) => id === key);
        if (item) {
            totalPrice += item.price * value;
        }
    });

    return totalPrice;
}

function destroyCart() {
    return createCart();
}

module.exports = {
    createCart,
    addToCart,
    updateCart,
    removeFromCart,
    getCartTotalPrice,
    destroyCart,
}