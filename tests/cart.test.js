const { createCart, addToCart, updateCart, removeFromCart, destroyCart } = require("../services/Cart");
const { isCartEmpty, isProductExist, countItems } = require("../utils/utils");

describe('Cart service', () => {
    let cart;

    beforeEach(() => {
        cart = createCart();
    });

    test('should create an empty cart', () => {
        expect(cart.items.size).toBe(0);
        expect(isCartEmpty(cart)).toBe(true);
    });

    test('should add item to cart', () => {
        cart = addToCart(cart, 1);
        expect(countItems(cart)).toBe(1);
        expect(cart.items.get(1)).toBe(1);

        expect(isProductExist(cart, 1)).toBe(true);
    });

    test('should update qualtity in cart', () => {
        cart = addToCart(cart, 1);
        cart = updateCart(cart, 1, 3);
        expect(countItems(cart)).toBe(1);
        expect(cart.items.get(1)).toBe(3);
    });

    test('should remove an item in cart', () => {
        cart = addToCart(cart, 1);
        removeFromCart(cart, 1);
        expect(countItems(cart)).toBe(0);
    });

    test('should destroy cart', () => {
        cart = addToCart(cart, 1);
        cart = destroyCart();
        expect(cart.items.size).toBe(0);
        expect(cart.discounts.size).toBe(0);
        expect(cart.freebies.size).toBe(0);
    });

})
