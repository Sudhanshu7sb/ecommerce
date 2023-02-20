import React from 'react'
import Filters from './Filters'
import ProductList from './ProductList'
import Sort from './Sort'

const Products = () => {
  return (
    <section className='w-full flex justify-center'>
      <div className='flex justify-center items-center w-4/5'>
        <div className='w-2/5'>
          <Filters />
        </div>

        <div className='w-3/5'>
          <div>
            <Sort />
          </div>
          <div>
            <ProductList />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Products