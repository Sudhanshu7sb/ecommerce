import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';
import CartQuantityToggle from './CartQuantityToggle';

const AddtoCart = ({ product }) => {
    console.log(product,"prod")
    const {addToCart} = useCartContext();
    const { id, colors, stock } = product;
    const [color, setColor] = useState(colors[0]);
    const [quantity, setQuantity] = useState(1);


    const setIncrease = () => {
        quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);

    };
    const setDecrease = () => {
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
    };


    return (
        <div>

            <div>
                <p>Colors : {
                    colors?.map((currCol, index) => {
                        return (<button key={index} className=' w-5 h-5 border-2 rounded-full' style={{ backgroundColor: currCol }} onClick={() => setColor(currCol)}>{color === currCol ? <FaCheck className='text-green-600 rounded-full' /> : null}</button>)
                    })
                }</p>
            </div>
            {/* Add to cart quantity toggle */}
            <CartQuantityToggle quantity={quantity} setIncrease={setIncrease} setDecrease={setDecrease} />
            <NavLink to="/cart" onClick={()=>addToCart(id,color,quantity,product)}>
                <button className='bg-blue-600 py-1 px-2'>ADD TO CART</button>
            </NavLink>
        </div>
    )
}

export default AddtoCart