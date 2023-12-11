import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import './ProductDetail.css'
export const ProductDetail = (props) => {
    return (
        <aside className="product-detailt flex flex-col fixed right-0 border border-black rounded-lg bg-white">
            <div className="flex justify-between item-center p-6">
                <h2 className="font-medium text-xl">Detailt</h2>
                <div className="">
                    <XMarkIcon className="h-6 w-6 text-black" />
                </div>
            </div>
        </aside>
    );
}

export default ProductDetail;