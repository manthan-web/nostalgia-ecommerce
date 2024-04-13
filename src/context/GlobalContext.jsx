import React, { Children, createContext, useState } from "react";
import products from "../data";

export const GlobalContext = createContext()


export const GlobalContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [allProducts, setAllProducts] = useState(products)

    return (
        <GlobalContext.Provider value={{cart, setCart, allProducts, setAllProducts}}>
            {children}
        </GlobalContext.Provider>
    )
}