import React from 'react'
import { MdSecurityUpdate } from 'react-icons/md';
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

const Services = () => {
    return (
        <section className='flex justify-center items-center space-x-8 my-16'>
            <div className='h-[200px] flex flex-col justify-center items-center'>
                <TbTruckDelivery  className='text-blue-600 text-3xl'/>
                <h3>Super Fast Free Delivery</h3>
            </div>
            <div className='h-[200px] flex flex-col justify-between'>

                <div className='items-center flex'>
                    <MdSecurityUpdate className='text-blue-600 text-3xl'/>
                    <h3>Non Contact Shipping</h3>
                </div>
                <div className='items-center flex'>

                    <GiReceiveMoney className='text-blue-600 text-3xl'/>
                    <h3>Money Back Guarenteed</h3>
                </div>
            </div>
            <div className='h-[200px] flex flex-col justify-center items-center'>
                <RiSecurePaymentLine className='text-blue-600 text-3xl'/>
                <h3>Super Secure Payment System</h3>
            </div>

        </section>
    )
}

export default Services