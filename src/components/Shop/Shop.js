import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
const Shop = () => {
    console.log(fakeData)
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    return (
        <div>
            <h1>This is Shop</h1>
            <ul>
                {
                    product.map( product => <li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;