## 1. Cart Service

This module handles basic cart functionalities :

### Functions:

- **createCart()**  
  Creates and returns an empty cart object.
  
- **addToCart(cart, productId, quantity?)**  
  Adds a product to the cart by product ID.
  
- **updateCart(cart, productId, quantity)**  
  Updates the quantity by product ID.
  
- **removeFromCart(cart, productId)**  
  Removes the product by product ID.
  
- **getCartTotalPrice(cart)**  
  Returns the total price of the items in the cart.
  
- **destroyCart()**  
  Clearing all items.

## 2. Discount Service
This module manages the application of discounts and calculates the discount total for the cart.

### Functions:
- **addDiscount(cart, disCountName)**
Adds a discount to the cart by discount name.

- **removeDiscount(cart, discountName)**
Removes the discount from the cart by discount name.

- **applyDiscount(cart, totalPrice)**
Applies the discount to the cart total price.

## 3. Promotion Service
This module applies promotions such as adding free products to the cart.

### Functions:
- **applyFreebie(cart)**
Adds a freebie product to the cart if the promotion product is present in the cart.

# Install
Install dependencies:
```bash
npm install
```