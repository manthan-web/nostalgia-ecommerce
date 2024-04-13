import React from 'react'

const Reason = () => {
  return (
    <div className="py-12 px-24 flex flex-col md:flex-row w-full border-t gap-5 border-b mt-6 border-zinc-600 border-opacity-45">

        <div className='md:w-1/2 w-full shrink-0 grow-0'>
            <img src="../images/reason.jpg" className="rounded-lg shadow-md" alt="img" />
        </div>

        <div className="items-center flex md:w-1/2 h-full md:flex flex-col gap-6">
            <h2 className='text-2xl font-semibold text-purple mt-4'>Why Nostalgia</h2>
            <p className='text-center px-12 leading-relaxed font-medium'>
            Step back in time to the carefree days of the 2000s, where toys weren't just toys; they were cherished companions on adventures of the imagination. At Nostalgia Toys, we curate a collection of cherished memories. From iconic action figures to beloved dolls, each toy tells a story of innocence and wonder. Rediscover the joy of simpler times and the bonds formed over shared play. Whether you're a parent sharing your childhood favorites or a nostalgic soul seeking to reconnect with the past, Nostalgia Toys is here to help you relive those precious moments. Welcome to Nostalgia Toys, where the magic of childhood never fades
            </p>
        </div>

    </div>
  )
}

export default Reason