// import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { useCartContext } from '../context/cartContext';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  let { total_items } = useCartContext();
  console.log(total_items,"to");
  const { loginWithRedirect ,logout,isAuthenticated,user} = useAuth0();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className='w-full h-10 flex relative justify-between items-center p-4 bg-blue-100'>

      <h1 className={showMenu ? 'w-0' : 'w-[50%] cursor-pointer'}><span className='text-blue-600 text-2xl'>E</span><span className='text-xl'>'Store</span></h1>
      <nav className={showMenu ? 'w-[100%]' : 'w-[50%]'}>


        <h3 className='flex justify-end lg:hidden'>{showMenu ? <RxCross2 onClick={() => setShowMenu(false)} className="absolute z-10 text-red-600" /> : <GiHamburgerMenu onClick={() => setShowMenu(true)} />} </h3>


        <ul className={showMenu ? 'flex flex-col absolute w-screen h-screen justify-center space-y-3 items-center top-0 left-0 bg-blue-100/75' : 'justify-evenly items-center  hidden lg:flex'}>
          <li className='hover:text-blue-600'><NavLink to="/" onClick={() => setShowMenu(false)}>Home</NavLink></li>
          <li className='hover:text-blue-600'><NavLink to="/about" onClick={() => setShowMenu(false)}>About</NavLink></li>
          <li className='hover:text-blue-600'><NavLink to="/contact" onClick={() => setShowMenu(false)}>Contact</NavLink></li>
          <li className='hover:text-blue-600'><NavLink to="/products" onClick={() => setShowMenu(false)}>Products</NavLink></li>
          {
            isAuthenticated && <h4>Hi, {user.name}</h4>
          }
          {
            isAuthenticated ?
             <li className='hover:text-blue-600'><button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button></li>
             :
             <li className='hover:text-blue-600'><button onClick={() => loginWithRedirect()}>Log In</button></li> 
          }
          <li className='hover:text-blue-600 text-2xl relative'><NavLink to="/cart" onClick={() => setShowMenu(false)}><MdOutlineShoppingCart /><small className=' text-black bg-blue-600 absolute w-[15px]   -top-1 -right-2 rounded-full text-xs text-center'>{total_items}</small></NavLink></li>


        </ul>
      </nav>
    </header>
  )
}

export default Header