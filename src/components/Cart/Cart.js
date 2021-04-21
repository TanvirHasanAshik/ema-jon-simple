import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let element = 0;
    // let subTotal = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     element +=  cart[i].price;
    //     subTotal = element.toFixed(2);
    // }
    const price = cart.reduce((total, product) => total + product.price ,0)
    let shippingCost = 0;
    if (price > 30){
        shippingCost = 0;
    }
    else if(price > 15){
        shippingCost = 5.99;
    }
    else if(price < 15 && price > 0){
        shippingCost = 12.99;
    }
    let tax = price * .10;
    const formattedAmount = (amount) => {
        const formateAmount = amount.toFixed(2);
        return Number(formateAmount);
    }
    return (
        <div>
            <h1>Order summary</h1>
            <h3>Select item: {cart.length}</h3>
            <h3>Price: {formattedAmount(price)}</h3>
            <p><small>Shipping cost: {formattedAmount(shippingCost)}</small></p>
            <p>tax + vat: {formattedAmount(tax)}</p>
            <h3>Total Price: {formattedAmount(price + shippingCost + tax)}</h3>
        </div>
    );
};

export default Cart;