import React, { useContext } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import {ShoppingCartContext} from '../../context'

const Card = (props) => {

    const {name, price, image, category} = props
    const shoppingCartContext = useContext(ShoppingCartContext)
    
    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category}</span>
                <img className='w-full h-full object-cover rounded-lg' 
                    src={image} alt='product'></img>
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={()=> shoppingCartContext.setCount(shoppingCartContext.count + 1)}>
                    <ShoppingBagIcon className="h-6 w-6 text-black"/>
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{name}</span>
                <span className='text-lg font-medium'>${price}</span>
            </p>
        </div>
    );
}

export default Card;