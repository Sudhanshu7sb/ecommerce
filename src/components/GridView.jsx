import React from 'react'
import Product from './Product'

const GridView = ({products}) => {
  return (
    <div className='grid grid-cols-3'>
        {products.map((currElem) => {
            return <Product key={currElem.id} {...currElem}/>
        })}

    </div>
  )
}

export default GridView