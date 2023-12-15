import React, { useContext } from 'react';
import { ShoppingBagIcon, CheckIcon } from '@heroicons/react/24/solid'
import {ShoppingCartContext} from '../../context'

const Card = (props) => {

    const {product} = props
    const shoppingCartContext = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {

        shoppingCartContext.setProductToShow(productDetail)
        
        shoppingCartContext.closeChekoutSideMenu()
        shoppingCartContext.openProductDetail()
    }

    const addProducsToCart = (e,productData) => {
        e.stopPropagation()
        shoppingCartContext.setCount(shoppingCartContext.count + 1)
        shoppingCartContext.setCartProducts([...shoppingCartContext.cartProducts, productData])
        
        shoppingCartContext.closeProductDetail()
        shoppingCartContext.openChekoutSideMenu()
    }

    const renderIcon = (id) => {
        
        const isInCard = shoppingCartContext.cartProducts.some(p => p.id === id)
        
        if(!isInCard)
            return (
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                        onClick={(e) => addProducsToCart(e,product)}>
                    <ShoppingBagIcon className="h-6 w-6 text-black" />
                </div>
            )
        else 
            return (
                <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
                    <CheckIcon className="h-6 w-6 text-white" />
                </div>
            )   
    }

    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg cursor-pointer'
            onClick={() => showProduct(product) }
            >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{product.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' 
                    src={product.images[0]} alt='product'></img>
                
                {
                    renderIcon(product.id)
                }

            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{product.title}</span>
                <span className='text-lg font-medium'>${product.price}</span>
            </p>
        </div>
    );
}

export default Card;