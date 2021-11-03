import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
   const first10 = fakeData.slice(0,10); 
   const [products,setProduct] =useState(first10);
   const [cart,setCart] = useState([]);
    const handleCart = (product)=>{
        const newCart =[...cart,product];
        setCart(newCart);
    }
    return (
        <div className='productContainer'>
            <div className='productItem'>
            {
                products.map(product=> <Product handleCart={handleCart} product={product}></Product>)
            }
            </div>
            <div className='cart'>
            {/* <h1>Cart</h1>
            <h3>Order:{cart.length}</h3> */}
            <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;