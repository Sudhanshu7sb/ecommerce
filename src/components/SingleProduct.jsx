import React, { useEffect } from 'react'
import {  useParams } from 'react-router-dom';
import { useProductContext } from '../context/productContext';
import FormatPrice from '../helpers/FormatPrice';
import PageNavigation from './PageNavigation';
import ProductImage from './ProductImage';
import { TbTruckDelivery,TbReplace } from "react-icons/tb";
import Star from './Star';
import AddtoCart from './AddtoCart';

const API = "https://api.pujakaitem.com/api/products";


const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams();

  const { name, company, reviews, price, description, stock, stars, image } = singleProduct;


  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
    // eslint-disable-next-line
  },[])

  if (isSingleLoading) {
    return <>Loading....</>
  }
  return (
        <section>

      <PageNavigation title={name} />
      <div className='w-full px-48'>
        <div className='grid grid-cols-2 space-x-3'>
          {/* product images */}
          <div>
            <ProductImage imgs={image} />
          </div>
          {/* product data */}
          <div className='pl-4'>
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p>{stars}</p>
            <p>{reviews} reviews</p>
            <p>
              MRP
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p>
              Deal of the Day :
              
                <FormatPrice price={price} />
              
            </p>
            <p>{description}</p>
            <div className='w-full flex justify-between items-center mb-4'>
              <div>
                <TbTruckDelivery />
                <p>Free delivery</p>
              </div>
              <div>
                <TbReplace />
                <p>Free delivery</p>
              </div>
              <div>
                <TbTruckDelivery />
                <p>Free delivery</p>
              </div>
              <div>
                <TbTruckDelivery />
                <p>Free delivery</p>
              </div>
            </div>
            <div>
              <p>Available : {stock > 0 ? "In Stock" : "Out of Stock"}</p>
            </div>
            <p>Brand : {company}</p>
            <hr />
            {stock > 0 && <AddtoCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct