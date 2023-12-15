import React, { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import {ShoppingCartContext} from '../../context'
import OrderCard from '../OrderCard/OrderCard';
import './CheckoutSideMenu.css'

const CheckoutSideMenu = () => {

    const shoppingCartContext = useContext(ShoppingCartContext)

    const handleDeleteProductToCard = (id) => {
        const product = shoppingCartContext.cartProducts.filter(p => p.id !== id)
        shoppingCartContext.setCartProducts(product)
    }

    return (
        <aside className={`${shoppingCartContext.isChekoutSideMenuOpen ? 'flex' : 'hidden'} chekout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between item-center p-6">
                <h2 className="font-medium text-xl">Checkout</h2>
                <div className="">
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer" 
                        onClick={() => shoppingCartContext.closeChekoutSideMenu() }
                    />
                </div>
            </div>
            <div className="px-6 overflow-y-scroll">
                {
                    shoppingCartContext.cartProducts?.map((p,i)=> {
                        return <OrderCard 
                                    key={p.id}
                                    id={p.id} 
                                    title={p.title} 
                                    price={p.price} 
                                    image={p.images?.[0]} 
                                    handleDeleteProductToCard={handleDeleteProductToCard}
                                />
                    })
                }
            </div>
                
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                <span className='font-light'>Total:</span>
                <span className='font-medium text-2xl'>${shoppingCartContext.totalPrice}</span>
                </p>
            </div>

        </aside>
    );
}

export default CheckoutSideMenu;