import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product);
    const {img,name,price,seller,stock,key} = props.product;
    return (
        <div className='product'>
            <div className='product-name'><img src={img} alt="" /></div>
            
            <div className='product-info'>
            <h4><Link to={'/product/'+key}>{name}</Link></h4>
            <h3>{price}</h3>
            <p><small>
                by:{seller}</small></p>
                <p>only {stock} left in stock-order soon</p>
            {
            props.showAddToCart && 
            <button onClick={()=>props.handleCart(props.product)} className='add-button'><FontAwesomeIcon icon={faShoppingCart} />Add to Cart
            </button>
            }
            </div>
            
        </div>
    );
};

export default Product;