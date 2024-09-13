const { discounts } = require("../data/discount");
const { createCart, addToCart, getCartTotalPrice } = require("../services/Cart");
const { addDiscount, removeDiscount, applyDiscount } = require("../services/discount");

describe('Discount service', () => {
    let cart;

    beforeEach(() => {
        cart = createCart();
    });

    test('should add discount', () => {
        const discount = discounts[1];
        cart = addDiscount(cart, discount.name);
        expect(cart.discounts.size).toBe(1);
    });

    test('should not duplicated discount', () => {
        const discount = discounts[1];
        cart = addDiscount(cart, discount.name);
        cart = addDiscount(cart, discount.name);
        cart = addDiscount(cart, discount.name);
        expect(cart.discounts.size).toBe(1);
    });

    test('should remove discount', () => {
        const discount = discounts[1];
        cart = addDiscount(cart, discount.name);
        expect(cart.discounts.size).toBe(1);
        removeDiscount(cart, discount.name);
        expect(cart.discounts.size).toBe(0);
    });

    test('should apply percentage discount', () => {
        cart = addToCart(cart, 1);
        cart = addToCart(cart, 2, 3);
        expect(cart.items.size).toBe(2);
        cart = addDiscount(cart, discounts[0].name);
        cart = applyDiscount(cart, getCartTotalPrice(cart));
        expect(cart.totalDiscount).toBe(100);

        cart = createCart();
        cart = addToCart(cart, 7);
        cart = addDiscount(cart, discounts[0].name);
        cart = applyDiscount(cart, getCartTotalPrice(cart));
        expect(cart.totalDiscount).toBe(6);
    });

    test('should apply fixed discount', () => {
        cart = addToCart(cart, 1);
        cart = addToCart(cart, 2, 3);
        expect(cart.items.size).toBe(2);
        cart = addDiscount(cart, discounts[1].name);
        cart = applyDiscount(cart, getCartTotalPrice(cart));
        expect(cart.totalDiscount).toBe(50);

        cart = createCart();
        cart = addToCart(cart, 6);
        cart = addDiscount(cart, discounts[1].name);
        cart = applyDiscount(cart, getCartTotalPrice(cart));
        expect(cart.totalDiscount).toBe(25);
    });
});