import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Filters from "../components/TotalComponent.jsx/Filters/Filters";
import products from "../data";
import { Toaster, toast } from 'sonner'


const Products = () => {


    const GlobalState = useContext(GlobalContext)
    const {allProducts, setAllProducts} = GlobalState
    const {setCart} = GlobalState


    useEffect(() => {
      setAllProducts(products)
    }, [])


   


    return (
        <div className="w-full p-12">
            <Filters />
            <Toaster duration={2000} richColors expand={false} position="bottom-right" />
            <div className="mt-6 grid md:px-12 md:py-6 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {allProducts.length === 0 ? (<div className="text-2xl font-semibold">No Products Found</div>) : (
                allProducts.map((product) => (
                  <div key={product.id} className="group shadow-md bg-zinc-200 p-4 rounded-sm relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Link to={`/products/${product.id}`}><img
                            src={`../${product.image}`}
                            alt="productImages"
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          /></Link>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                            {product.name}
                        </h3>
                        <img alt='productRating' className='w-2/6 mt-1 text-sm' src={`../images/ratings/rating-${product.rating.stars * 10}.png`}/>
                      </div>
                      <p className="text-sm font-medium text-gray-900">${(product.priceCents / 100).toFixed(2)}</p>
                    </div>
                    
                    <button onClick={() => {
                      setCart(prev => [...prev, {
                        id: product.id,
                        name: product.name,
                        amount: product.amount,
                        image: product.image,
                        price: product.priceCents / 100
                      }])
                      toast.success(`${product.name} added succesfully`)
                    }} className='w-full bg-purple text-white text-sm px-6 py-2 mt-3 mx-auto rounded-sm'>Add To Cart</button>
                  </div>
                ))
              )}
            </div>
        </div>
    )
}


export default Products;