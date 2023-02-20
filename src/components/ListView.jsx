import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../helpers/FormatPrice';
// import Product from './Product'

const ListView = ({ products }) => {
    return (
        <div className='grid'>
            {products.map((currElem) => {
                const {id,name,image,price,description} = currElem;
                return (<div className='grid grid-cols-2' key={id}>
                    <figure>
                        <img src={image} alt={name} />
                    </figure>
                    <div>
                        <h3>{name}</h3>
                        <p><FormatPrice price={price} /></p>
                        <p>{description.slice(0,90)}</p>
                        <NavLink to={`/singleproduct/${id}`}>
                            <button>READ MORE</button>
                        </NavLink>
                    </div>
                </div>)
            })}

        </div>
    )
}

export default ListView