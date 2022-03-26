import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Product.css'

const Product = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([])
    useEffect (()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then (data =>setProducts(data)) 
    },[]);
    const handleAddToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div>
            <div className='shop-container'>
            <div className="products-container">
                {
                    
                    products.map(product=><Products 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Products>)
                }
            </div>
            <div className="cart-container">
                <h4>Selected Clothes</h4>
                {
                        cart.map((product)=>" ")      
                }
                {
                    cart.map((product)=>(<p key={product.id}>{product.name} <small>Price:</small>{product.price}</p>))
                }
                <button className='SC-btn-cart'>CHOOSE FOR ME</button>
                <button className='SC-btn-cart'>CHOOSE AGAIN</button>
            </div>
        </div>
        </div>
    );
};

export default Product;