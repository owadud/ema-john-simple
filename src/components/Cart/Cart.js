import React from 'react';
import Product from '../Product/Product';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd)=>total+prd.price,0);

    let shipping;
    if(total>100){
        shipping=0;
    }
    else if(total<100 && total>0){
        shipping =11.99;
    }
    else if(total === 0){
        shipping=0;
    }

    const tax = total/10;

    const priceFormat=(num)=>{
        const precision = num.toFixed(2);

        return Number(precision);
    }

    const grandTotal = total+shipping+tax;

    return (
        <div>
            <h1>Order Summary</h1>
            <p><small>Items:{cart.length}</small></p>
            <p>Product Price: {priceFormat(total)}</p>
            <p>Shipping: {shipping} </p>
            <p>Tax: {priceFormat(tax)} </p>
            <p>Total:{priceFormat(grandTotal)} </p>
        </div>
    );
};

export default Cart;