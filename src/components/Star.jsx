import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, reviews }) => {

    const ratingStars = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return <span key={index}>{
            stars >= index + 1 ? <FaStar className='text-yellow-600' /> : stars >= number ? <FaStarHalfAlt className='text-yellow-600' /> : <AiOutlineStar />
        }</span>
    })


    return (
        <div className='flex justify-start space-x-1 items-center'>{ratingStars} <span className='ml-3'>({reviews}</span> customer reviews)</div>
    )
}

export default Star