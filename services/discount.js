const { discounts } = require("../data/discount");

const addDiscount = (cart, disCountName) => {

    const discount = discounts.find(({ name }) => name === disCountName);

    if (!discount) {
        return cart;
    }

    if (cart.discounts.has(disCountName)) {
        return cart
    }

    cart.discounts.add(disCountName);

    return cart;
}

const removeDiscount = (cart, disCountName) => {
    if (!cart.discounts.has(disCountName)) {
        return cart
    }

    cart.discounts.delete(disCountName);

    return cart;
}

const applyDiscount = (cart, totalPrice) => {

    let totalDiscount = 0;
    cart.discounts.forEach(value => {
        const discount = discounts.find(({ name }) => name === value);
        if (discount) {
            const { type, amount = 0, maxAmount = 0 } = discount;
            if (type === 'fixed') {
                totalDiscount += amount;
            } else if (type === 'percentage') {
                let dis = (amount / 100) * totalPrice;
                if (dis > maxAmount) {
                    dis = maxAmount;
                }

                totalDiscount += dis;
            }
        }
    });

    cart.totalDiscount = totalDiscount > totalPrice ? totalPrice : totalDiscount;
    return cart;
}

module.exports = {
    addDiscount,
    removeDiscount,
    applyDiscount,
}