import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItems/ReviewItem';
import image from '../../images/giphy.gif';
import './Review.css';
const Review = () => {
    const [cart, setCart] = useState([]);
    const [thankYouMassage, setThankYouMassage] = useState(false);
    const removeReview = (key) =>{
        const remove = cart.filter(pdRemove => pdRemove.key !== key);
        setCart(remove);
        removeFromDatabaseCart(key)
    }
    useEffect(()=>{
        const reviewItem = getDatabaseCart();
        const productKey = Object.keys(reviewItem);
        // const totalProduct = Object.values(reviewItem);
        const cartProduct = productKey.map( key=> {
                const productItem = fakeData.find( product => product.key === key  );
                productItem.quantity = reviewItem[key];
                return productItem;
            })
        setCart(cartProduct);
    }, []);
    const placeOrder = () => {
        setCart([]);
        processOrder();
        setThankYouMassage(true)
    }

    let thankYouImage;
    if(thankYouMassage == true) {
        thankYouImage = <img src={image} alt="" />
    }
    return (
        <div className="productReview">
            <div className="product-container">
                {
                    cart.map( product => <ReviewItem key={product.key} removeReview={removeReview} product={product}></ReviewItem>)
                }
                {thankYouImage}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={placeOrder} className="main-button">place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;