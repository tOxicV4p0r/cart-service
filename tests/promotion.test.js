const { addToCart, createCart } = require("../services/Cart");
const { applyFreebie } = require("../services/promotion");

describe('Promotion service', () => {
    let cart;

    beforeEach(() => {
        cart = createCart();
    });

    test('should add freebie', () => {
        cart = addToCart(cart, 1);
        cart = addToCart(cart, 3, 2);
        cart = applyFreebie(cart);
        expect(cart.freebies.size).toBe(2);
        expect(cart.freebies.has(6)).toBe(true);
        expect(cart.freebies.get(6)).toBe(1);

        expect(cart.freebies.has(4)).toBe(true);
        expect(cart.freebies.get(4)).toBe(4);
    });
});