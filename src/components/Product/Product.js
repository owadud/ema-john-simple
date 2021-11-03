import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props);
    const {img,name,price,seller,stock} = props.product;
    return (
        <div className='product'>
            <div className='product-name'><img src={img} alt="" /></div>
            
            <div className='product-info'>
            <h4>{name}</h4>
            <h3>{price}</h3>
            <p><small>
                by:{seller}</small></p>
                <p>only {stock} left in stock-order soon</p>
                <button onClick={()=>props.handleCart(props.product)} className='add-button'><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;