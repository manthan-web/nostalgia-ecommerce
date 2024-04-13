import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { GlobalContext } from '../../context/GlobalContext'
import { IoPersonOutline } from "react-icons/io5";



const Header = () => {


    const GlobalState = useContext(GlobalContext)
    const {setAllProducts} =GlobalState
    const {cart} = GlobalState


    const amount = cart.map(items => items.amount)
    const cartCount = amount.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    return (
        <header className="header shadow-lg">
            <div className="h-12 w-12">
            <Link to="/" className="flex items-center md:gap-3 gap-1">
                <img src="../images/logo.png" className="shrink-0 w-full h-full object-cover" alt="logo" /> 
                <h1 className="text-xl font-semibold mb-4">Nostalgia</h1>
            </Link>
            </div>
            <nav>
                <ul>
                <div className="flex items-center gap-[2rem]">
                    <Link to="/about" className="md:flex md:items-center hidden md:gap-2"><IoPersonOutline className="text-2xl text-light"/><li className="hidden md:block">About</li></Link>
                    <Link to="/cart" 
                        className="flex md:gap-2 items-center">
                        <CiShoppingCart className="text-3xl text-light"/>
                        <span className="absolute top-3 md:top-2 text-xs md:right-72 right-16 p-2 bg-purple text-white px-3 rounded-full">{cartCount}</span>
                        <li className="hidden md:block">Cart</li>
                    </Link>
                    <Link className="md:flex md:items-center gap-2" to="/products"><CiShop className="text-3xl"/><li className="hidden md:block">Products</li></Link>
                </div>
                </ul>
            </nav>
        </header>
    )
}


export default Header;