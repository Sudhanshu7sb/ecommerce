import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext'
import FormatPrice from '../helpers/FormatPrice';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, clearCart,total_price,shipping_fee} = useCartContext();
  // console.log(cart, "cart")

  if (cart?.length === 0) {
    return <div className='h-[50vh]'>No Items in Cart</div>
  }

  return (
    <div>
      <div>
        <div className='grid grid-cols-5'>
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>SubTotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
        </div>
        <hr />
        <div className='my-5'>
          <NavLink to="/products">
            <button>continue Shopping</button>
          </NavLink>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
        <div>
          <div>
            <div>
              <p>SubTotal</p>
              <p><FormatPrice price={total_price} /></p>
            </div>
            <div>
              <p>SubTotal</p>
              <p><FormatPrice price={shipping_fee} /></p>
            </div>
            <hr />
            <div>
              <p>Order Total</p>
              <p><FormatPrice price={total_price  + shipping_fee} /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart