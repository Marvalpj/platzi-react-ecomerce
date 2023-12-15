import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    // shoping cart
    const [count,setCount] = useState(0)
    const [cartProducts, setCartProducts] = useState([])
    const totalPrice = cartProducts.reduce((total, item) => total + item.price, 0)

    // product detailt show hidden
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
   
    // product chekoutsidemenu show hidden
    const [isChekoutSideMenuOpen, setIsChekoutSideMenuOpen] = useState(false)
    const openChekoutSideMenu = () => setIsChekoutSideMenuOpen(true)
    const closeChekoutSideMenu = () => setIsChekoutSideMenuOpen(false)

    // product detail show
    const [productToShow, setProductToShow] = useState({})

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts, 
            setCartProducts,
            totalPrice,
            isChekoutSideMenuOpen,
            openChekoutSideMenu,
            closeChekoutSideMenu
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}