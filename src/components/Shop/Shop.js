import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);
    let quantity = 0;
    const handleAddProduct = (product, totalItem) => {
        product.quantity = quantity + totalItem;
        const newCart = [...cart, product];
        const sameProduct = newCart.filter( pd => pd.key === product.key);
        const count = sameProduct.length;
        setCart(newCart);
        addToDatabaseCart(product.key, count); 
    }
    useEffect(()=>{
        const cartItems = getDatabaseCart();
        const itemsKey = Object.keys(cartItems);
        const items = itemsKey.map( key => {
            const productItems = fakeData.find(pd => pd.key === key);
            productItems.quantity = cartItems[key];
            return productItems;
        })
        setCart(items);
    },[])
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    product.map( product => 
                        <Product 
                            key={product.key} 
                            showAddToCart={true} 
                            product={product} 
                            handleAddProduct={handleAddProduct}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/review'><button className="main-button">Review Order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;