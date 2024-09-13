const { freebies } = require("../data/promotion");

const applyFreebie = (cart) => {
    const newFreebies = new Map();
    cart.items.forEach((qty, key) => {
        const free = freebies.find(({ productId }) => productId === key);
        if (free) {
            const { amount, freeProductId } = free;
            newFreebies.set(freeProductId, qty * amount);
        }
    });

    cart.freebies = newFreebies;
    return cart;
}

module.exports = {
    applyFreebie,
}