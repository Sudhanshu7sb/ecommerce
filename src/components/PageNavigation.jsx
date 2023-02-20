import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNavigation = ({ title }) => {
    return (
        <section className='h-20 flex justify-start items-center pl-5'>
            <NavLink to="/">Home</NavLink>/{title}
        </section>
    )
}

export default PageNavigation