import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import Total from "../components/TotalComponent.jsx/Total";
import { Link } from "react-router-dom";
import { Toaster, toast } from 'sonner'

const Cart = () => {


    const CartState = useContext(GlobalContext)
    const {cart, setCart} = CartState


    const removeItem = (id) => {
        setCart(prev => prev.filter(items => items.id !== id))
    }

    
    const increaseAmount = (id) => {
        setCart(prev => prev.map(items => items.id === id ? {...items, amount: items.amount + 1} : items))
    }

    const decreaseAmount = (id) => {
        setCart(prev => prev.map(items => items.id === id ? items.amount <= 1 ? {...items, amount: 1} : {...items, amount: items.amount - 1} : items))
    }


    const cartElement = cart.map(product => {
        return (
            <div key={product.id} className="border-t py-6 mt-6 border-zinc-600">
                <div className="w-full flex p-2 bg-zinc-200 shadow-md rounded-md h-full">
                    <div>
                        <img src={`../${product.image}`} className="shrink-0 object-cover md:h-52 md:w-52 h-32 w-32" alt="cartImage" />
                    </div>
                    <div className="flex px-4 w-full py-2 gap-4 flex-col">
                        <div className="flex w-full justify-between">
                            <h3>{product.name}</h3>
                            <button onClick={() => {
                                removeItem(product.id)
                            }}><IoMdClose /></button>
                        </div>
                            <h3>${product.price}</h3>
                            <div className="flex items-center text-lg gap-4">
                                <button onClick={() => decreaseAmount(product.id)} className="bg-purple p-2 text-white rounded-full px-4">-</button>
                                <p className="font-medium">{product.amount}</p>
                                <button onClick={() => increaseAmount(product.id)} className="bg-purple p-2 text-white rounded-full px-4">+</button>
                            </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
         <div className="w-full min-h-screen mb-10 px-10 py-12">
              
            {cart.length !== 0 ? (
                <>
                <h1 className="text-xl font-semibold">Shopping Cart</h1>
                <div className="flex flex-col">
                    {cartElement}
                </div>
                <Total />
                </>
            ) : (
                    <Link to="/products" className="flex flex-col items-center gap-y-10">
                      <h1 className="md:text-6xl text-5xl text-center max-w-lg font-semibold">Cart Is Empty</h1>
                      <button className="px-6 w-1/2 text-xl rounded-md py-4 text-white bg-purple ">Shop Now</button>
                    </Link>
            )}
           

         </div>
    )
}

export default Cart;