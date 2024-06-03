import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart · Increment quantity
    const [count, setCount] = useState(0)

    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})


    const [cartProducts, setCartProducts] = useState([])

    //checkout side menu
    // Product Detail · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenuOpen = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenuOpen = () => setIsCheckoutSideMenuOpen(false)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenuOpen,
            closeCheckoutSideMenuOpen
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
