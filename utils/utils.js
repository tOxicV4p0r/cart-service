const isProductExist = (cart, productId) => cart.items.has(productId);

const isCartEmpty = (cart) => cart.items.size === 0;

const countItems = (cart) => cart.items.size;

const listCartItems = (cart) => [...cart.items.entries()];

const countTotalItems = (cart) => {
    let total = 0;
    cart.items.forEach(qty => total += qty);
    return total;
};

module.exports = {
    isProductExist,
    isCartEmpty,
    countItems,
    listCartItems,
    countTotalItems,
}