import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'


export const Shop = () => {

  const GlobalState = useContext(GlobalContext)

  console.log("helo world")

  const {allProducts} = GlobalState
  const {setCart} = GlobalState


    const firstThree = [allProducts[0], allProducts[1], allProducts[2], allProducts[3]]

    const productsElement = firstThree.map((product) => {
        return (
                <div key={product.id} className="group relative shadow-md bg-zinc-200 p-4 rounded-sm">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
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
                            <button onClick={() => setCart(prev => [...prev, {
                              id: product.id,
                              name: product.name,
                              amount: product.amount,
                              image: product.image,
                              price: product.priceCents / 100
                            }])} className='w-full bg-purple text-white text-sm px-6 py-2 mt-3 mx-auto rounded-sm'>Add To Cart</button>
                </div>
              )
        
    })


    return (
        <div className='max-w-full md:px-12 p-6 px-8 min-h-[20rem]'>
            <h1 className="text-2xl font-semibold">Feautred Products</h1>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                
                {productsElement}

                
            </div>

            <div className='flex justify-center mt-10'>
                <Link to="/products"><button className='mx-auto p-3 px-6 bg-purple text-white rounded-lg shrink-0 grow-0'>Show More</button></Link>
            </div>

        </div>
  )
}
