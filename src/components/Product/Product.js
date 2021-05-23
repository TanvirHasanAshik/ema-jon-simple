import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const{img, name, price, stock, seller, key} = props.product;
    const pd = props.product;
    const showAddToCart = props.showAddToCart;
    let quantity = 1;
    return (
        <div className="product">
            <div className="">
                <img src={img} alt=""/>
            </div>
            <div className="product-item">
                <h4 className="product-name"><Link to={"/product="+key}>{name}</Link></h4>
                <br/>
                <p><small>by {seller}</small></p>
                <p>$ {price}</p>
                <p>Stock {stock} left in stock- Order soon.</p>
                {
                   showAddToCart && <button className="main-button" onClick={() => props.handleAddProduct(pd, quantity)}>
                        <FontAwesomeIcon icon={faShoppingCart}/>add to cart
                    </button>
                }
            </div>
        </div>
    );
};

export default Product;