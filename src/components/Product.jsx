import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatPrice from '../helpers/FormatPrice'

const Product = ({ id, name, image, price, category }) => {
    return (
        <>
            <NavLink to={`/singleproduct/${id}`} className="cursor-pointer overflow-hidden">

                <div className="w-full px-4 md:w-1/2 xl:w-3/4">
                    <div className=" overflow-hidden rounded-lg bg-white hover:scale-105">
                        <img
                            src={image}
                            alt={name}
                            className="w-[100%]"
                        />

                    </div>
                    <h5 className='text-xl text-center'>{name}</h5>
                    <h6 className='text-xl text-center'>{<FormatPrice price={price} />}</h6>
                </div>
            </NavLink>
        </>
    )
}

export default Product