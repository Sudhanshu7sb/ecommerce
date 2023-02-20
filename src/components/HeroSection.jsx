import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = ({myData}) => {
  const {name} = myData;
  return (
    <section className=' flex justify-evenly items-center my-8 w-full'>
      <div className='p-3 w-1/2 '>
        
        <p className='text-center'>Welcome to</p>
        <h3 className='text-3xl text-center font-medium my-2'>{name}</h3>
        <p className='text-sm ml-[35%] text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt. Incidunt alias fugiat ad minus amet! Assumenda totam sapiente saepe quam ipsam quas tenetur cumque. Modi aperiam doloremque cupiditate inventore?</p>
        <p className='text-center'>
          <NavLink to="/products">
            <button className="bg-blue-300 p-2 my-2">SHOP NOW</button>
          </NavLink>
        </p>
      </div>
      <div className='w-1/2'>
        <figure>
          <img src="/images/s.avif" alt="shopping" className='w-[50%] h-1/2' />
        </figure>
      </div>
    </section>
  )
}

export default HeroSection