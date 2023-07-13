import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <ul className='flex m-3 space-x-4 font-bold'>
            <Link href='/'>
            <li className='hover:cursor-pointer hover:text-green-600'> Add </li>
            </Link>
            <Link href='/show'>
            <li className='hover:cursor-pointer hover:text-green-600'> Show </li>
            </Link>
            </ul>
        </div>
    )
}

export default Navbar;