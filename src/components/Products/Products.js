import React from 'react';
import './Products.css'

const Products = (props) => {
    const {name,img,price,id}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" ></img>
            <div className='product-info'>
            <p className='product-name'> {name}</p>
            <p className='product-name'>price:$ {price}</p>
            <p className='product-name'><small>ID : {id}</small></p>
            </div>
            <button className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Products;