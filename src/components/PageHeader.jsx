import React from 'react'

export default function PageHeader({title, phrase}) {
  return (
    <div>
        <div className='container mx-auto mb-5 xl:mb-10 px-5'>
            <div className='flex justify-center'>
                <h1 className='text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-serif'>{title}</h1>
            </div>
            <div className='flex justify-center'>
                <p className='text-sm lg:text-lg xl:text-xl italic'>{phrase}</p>
            </div>
        </div>
        <hr className='md:container md:mx-auto border-gray-300 mx-5' />
    </div>
  )
}
