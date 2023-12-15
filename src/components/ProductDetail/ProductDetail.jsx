import React, {useContext} from 'react';
import {ShoppingCartContext} from '../../context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './ProductDetail.css'

export const ProductDetail = (props) => {

    const shoppingCartContext = useContext(ShoppingCartContext)

    return (
        <aside className={`${shoppingCartContext.isProductDetailOpen ? 'flex' : 'hidden'} product-detailt flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between item-center p-6">
                <h2 className="font-medium text-xl">Detailt</h2>
                <div className="">
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer" 
                        onClick={() => shoppingCartContext.closeProductDetail() }
                    />
                </div>
            </div>

            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' 
                        src={shoppingCartContext.productToShow.images?.[0]} alt="" />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>{shoppingCartContext.productToShow.price}</span>
                <span className='font-medium text-md'>{shoppingCartContext.productToShow.title}</span>
                <span className='font-light text-sm'>{shoppingCartContext.productToShow.description}</span>
            </p>
        </aside>
    );
}

export default ProductDetail;