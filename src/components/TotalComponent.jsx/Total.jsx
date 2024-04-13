import React from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";


const Total = () => {

    const tax = 6.54
    
    const CartState = useContext(GlobalContext)
    const {cart} = CartState

    const allPrices = cart.map(items => items.price * items.amount)
    const total = allPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0)


    return (

        <div className="w-full rounded-md mt-4 mx-auto bg-zinc-200 p-6">

            <h1 className="text-xl font-medium">Order Summary</h1>

            <div className="flex flex-col mt-4 gap-y-1">

                <div className="border-b py-3 border-zinc-500 flex justify-between border-opacity-45">
                    <p>Tax estimate</p>
                    <p className="font-medium">${tax}</p>
                </div>
                <div className="border-b py-3 border-zinc-500 flex justify-between border-opacity-45">
                    <p>Total Amount</p>
                    <p className="font-medium text-lg">${(total + tax).toFixed(2)}</p>
                </div>
                <button className="flex items-center justify-center bg-purple text-white mt-4 py-4 text-2xl font-semibold rounded-md">Checkout</button>
               

            </div>

        </div>
    )
}


export default Total;