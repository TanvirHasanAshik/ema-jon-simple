import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';
const Product = (props) => {
    const{img, name, price, stock, seller} = props.product;
    return (
        <div className="product">
            <div className="">
                <img src={img} alt=""/>
            </div>
            <div className="product-item">
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by {seller}</small></p>
                <p>$ {price}</p>
                <p>Stock {stock} left in stock- Order soon.</p>
                <button className="main-button" onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart}/>add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;