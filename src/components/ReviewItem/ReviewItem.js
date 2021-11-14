import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity} =props.product;
    const reviewItemStyle ={
        borderBottom: '1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft: '100px'
    }

    return (
        <div style={reviewItemStyle} className="review-tem">
            <h4 className="product-name">{name}</h4>
            <p>Quantity:{quantity}</p>
            <br />
            <button className="add-button">Remove</button>
        </div>
    );
};

export default ReviewItem;