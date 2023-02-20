import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cartContext';
import FormatPrice from '../helpers/FormatPrice';
import CartQuantityToggle from './CartQuantityToggle';

const CartItem = ({ id, color, quantity, name, image, price }) => {
    // console.log(id, color, quantity, name, price);

    const { removeProductFromCart,setDecrease,setIncrease } = useCartContext();

    




    return (
        <div className='grid grid-cols-5'>
            <div className='flex justify-start items-center'>

                <div className='w-1/2 h-1/2'>
                    <figure >
                        <img src={image} alt={name} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className='flex justify-start items-center'>
                        <p>Color:</p>
                        <div style={{ backgroundColor: color, color: color }} className="w-3 h-3 rounded-full">
                        </div>
                    </div>
                </div>
            </div>

            <div><FormatPrice price={price} /></div>

            {/* quantity */}
            <CartQuantityToggle quantity={quantity} setIncrease={() => setIncrease(id)} setDecrease={() => setDecrease(id)} />
            {/* subtotal */}
            <div>
                <p><FormatPrice price={price * quantity} /></p>
            </div>
            {/* remove */}
            <div>
                <FaTrash className='text-red-600 cursor-pointer' onClick={() => removeProductFromCart(id)} />
            </div>
        </div>
    )
}

export default CartItem