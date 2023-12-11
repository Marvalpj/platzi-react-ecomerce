import React, {useContext} from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import {NavLink} from 'react-router-dom'
import {ShoppingCartContext} from '../../context'
const Navbar = (props) => {
    
    const shoppingCartContext = useContext(ShoppingCartContext)

    const activeStile = 'underline underline-offset-4'
    
    return (
        <nav className='flex justify-between item-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to={'/'} className={({isActive}) => isActive ? activeStile : undefined}
                    >Shopi</NavLink>
                </li>
                
                <li>
                    <NavLink to={'/'} className={({isActive}) => isActive ? activeStile : undefined}>All</NavLink>
                </li>
                
                <li>
                    <NavLink to={'/Clothes'} className={({isActive}) => isActive ? activeStile : undefined}>Clothes</NavLink>
                </li>
                
                <li>
                    <NavLink to={'/Electronics'} className={({isActive}) => isActive ? activeStile : undefined}>Electronics</NavLink>
                </li>

                <li>
                    <NavLink to={'/Furnitures'} className={({isActive}) => isActive ? activeStile : undefined}>Furnitures</NavLink>
                </li>
                
                <li>
                    <NavLink to={'/Toys'} className={({isActive}) => isActive ? activeStile : undefined}>Toys</NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li>
                    pedro@algo.com
                </li>
                
                <li>
                    <NavLink to={'/myorder'} className={({isActive}) => isActive ? activeStile : undefined}>my-orders</NavLink>
                </li>
                
                <li>
                    <NavLink to={'/myaccount'} className={({isActive}) => isActive ? activeStile : undefined}>my account</NavLink>
                </li>
                
                <li>
                    <NavLink to={'/signin'} className={({isActive}) => isActive ? activeStile : undefined}>sign in</NavLink>
                </li>

                <li className='flex items-center'>
                    <ShoppingCartIcon className='w-6 h-6 text-black'/>
                    <div className="">
                        {shoppingCartContext.count}
                    </div>
                </li>
                
            </ul>
        </nav>
    );
}

export default Navbar;