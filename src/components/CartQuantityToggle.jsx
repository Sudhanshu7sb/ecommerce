import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CartQuantityToggle = ({ quantity, setIncrease, setDecrease }) => {
    return (
        <div className='flex space-x-3 items-center'>
            <button onClick={() => setDecrease()}><FaMinus /></button>
            <div>{quantity}</div>
            <button onClick={()=>setIncrease()}><FaPlus /></button>

        </div>
    )
}

export default CartQuantityToggle