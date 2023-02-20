import React from 'react'
import { useProductContext } from '../context/productContext'
import Product from './Product';

const FeaturedProducts = () => {
    const { isLoading, featuredProducts } = useProductContext();

    if (isLoading) {
        return <h4>/....Loading</h4>
    }
    return (
        <section className="flex justify-center items-center w-full">
            <div className='w-[70%]'>
                <div className='text-sm'>CHECK NOW</div>
                <div className='text-2xl text-semibold my-2'>Our Featured Services</div>
                <div className='flex justify-center'>

                    {featuredProducts?.map(currProd => {
                        return <Product key={currProd.id}  {...currProd}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts