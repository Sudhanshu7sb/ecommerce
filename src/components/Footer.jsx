import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className='w-full font-thin mt-10'>
            <div className='w-full flex justify-evenly items-center -mb-5 '>

                <div className="flex justify-center items-center w-1/2 bg-slate-300 py-3 rounded-lg">
                    <div className='w-1/2'>
                        <h3>Ready to get started</h3>
                        <h3>Talk to us today</h3>
                    </div>
                    <button className='bg-blue-600 rounded-lg p-1'><NavLink to="/contact" />
                        Contact Us
                    </button>
                </div>
            </div>
            {/*  footer body */}
            <div className='flex justify-evenly items-center bg-blue-300 h-[30vh]'>
                <div>
                    <h3>Online Ecommerce </h3>
                    <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <h3>Subscribe to get more updates</h3>
                    <form action="" method="post" className='flex flex-col space-y-2'>
                        <input type="text" placeholder="enter your email" />
                        <button className="bg-blue-600 ">Subscribe</button>
                    </form>

                </div>
                <div className='flex flex-col items-center'>
                    <h3>Follow Us</h3>
                    <p className='flex space-x-4'><SiDiscord /><FiInstagram /><FaYoutube /></p>
                </div>
                <div className='flex flex-col'>
                    <h3>Call Us</h3>
                    <p>+91 1234567890</p>
                </div>
            </div>
            {/* footer bottom */}
            <hr />
            <div className='flex justify-around items-center bg-blue-300 '>

                <p>@{new Date().getFullYear()} Sudhanshu. All Rights Reserved.</p>
                <div className='my-4'>
                    <p className='my-2'>PRIVACY POLICY</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer