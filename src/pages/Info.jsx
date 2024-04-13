import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data";
import { GlobalContext } from "../context/GlobalContext";

const Info = () => {


    const GlobalState = useContext(GlobalContext)
    const {allProducts} = GlobalState

    const {id} = useParams()
    const mainElement = allProducts.filter(product => product.id === id)
    
    return (
        <div className="h-screen p-12 w-full">

            <h2 className="text-3xl font-semibold my-4">Product Details</h2>
            
            <div className="flex flex-col shadow-xl p-3 pb-4 gap-3">

                     <img src={`../${mainElement[0].image}`} alt="productImages" className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                     <h3 className="text-xl font-semibold mt-4 text-gray-700">{mainElement[0].name}</h3>
                     <img alt='productRating' className='w-1/2 mt-1 text-sm' src={`../images/ratings/rating-${mainElement[0].rating.stars * 10}.png`}/>
                     <p className="text-2xl font-medium text-gray-900">${(mainElement[0].priceCents / 100).toFixed(2)}</p>
            </div>
          

        </div>
    )
}


export default Info;