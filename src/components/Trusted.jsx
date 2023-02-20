import React from 'react';
import {GiNestedHexagons,GiCubes} from "react-icons/gi";
import {SiIheartradio} from  "react-icons/si";

const Trusted = () => {
    return (
        <section className='flex flex-col justify-center items-center my-5'>
            <h3>Trusted By 1000+ Companies</h3>
            <div className='w-full flex flex-col lg:flex-row  space-x-5 items-center space-y-5 lg:justify-evenly text-2xl my-2'>
                <div className=" flex items-center">
                    <GiNestedHexagons /><h6 className='text-gray-600 font-medium'>Zenic</h6>
                </div>
                <div className="flex items-center">
                    <SiIheartradio /><h6 className='text-gray-600'>I Heart Radio</h6>
                </div>
                <div className="flex items-center">
                    <GiCubes/> <h6 className='text-gray-600'>GI Cubes</h6>
                </div>
                

            </div>
        </section>
    )
}

export default Trusted
