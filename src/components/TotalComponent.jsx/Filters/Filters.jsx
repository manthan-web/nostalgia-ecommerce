import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../context/GlobalContext'
import products from '../../../data'


const Filters = () => {

  const [priceRange, setPriceRange] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")

  const GlobalState = useContext(GlobalContext)
  const {allProducts, setAllProducts} = GlobalState

 
  const filterItems = () => {
    
    const filteredItems = products.filter(product => product.priceCents / 100 <= priceRange)
    setAllProducts(filteredItems)

  }

  const filterByName = (e) => {
    setSearchTerm(e.target.value)
    const newStr = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)
    const filteredItems = products.filter(product => product.name.includes(newStr))

    setAllProducts(filteredItems)

  }



  const resetFilters = () => {
    setAllProducts(products)
    setPriceRange(0)
    setSearchTerm("")
  }



  return (
    <div className="w-2/3 md:px-12 md:py-6 mx-auto h-auto flex flex-col gap-4">
                <input type="search" value={searchTerm} onChange={filterByName} placeholder="Search Products" className="w-full h-full rounded-sm shadow-md placeholder:text-zinc-400 outline-none p-4" />
                <label className='flex w-full justify-between' htmlFor="range">Select Your Price Range 
                <span className="text-lg font-medium">
                  ${priceRange}
                </span>
                </label>
                <input max={35} min={0} onChange={(e) => setPriceRange(Number(e.target.value))} value={priceRange} type="range" />
                <button className='bg-purple w-1/2 mx-auto rounded-md shadow-sm text-white p-3' onClick={filterItems}>Search</button>
                <button onClick={resetFilters} className='bg-purple w-1/2 rounded-md shadow-sm mx-auto text-white p-3'>Reset Filters</button>
            </div>
  )
}

export default Filters;