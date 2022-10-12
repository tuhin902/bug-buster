import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between bg-cyan-800 text-white mx-5 my-5 p-5'>
                <h2 className='text-xl font-bold'>Bug Buster</h2>
                <div className='w-56'>
                    <ul className='flex justify-between text-lg font-medium'>
                        <Link to='/'>Topic</Link>
                        <Link to='/statistic'>Statistic</Link>
                        <Link to='/blogs'>Blogs</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;