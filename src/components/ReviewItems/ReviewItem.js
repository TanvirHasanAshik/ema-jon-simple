import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, price, img, key} = props.product;
    const removeReview = props.removeReview;
    
    return (
        <div className="product">
             <div className="product-Image">
                <img src={img} alt=""/>
            </div>
            <div className="product-item">
                <h4 className="product-name">{name}</h4>
                <br/>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <br />
                <button onClick={() => removeReview(key)} className="main-button">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;