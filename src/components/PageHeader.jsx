import React from 'react'

export default function PageHeader({title, phrase}) {
  return (
    <div>
        <div className='container mx-auto mb-10'>
            <div className='flex justify-center'>
                <h1 className='text-9xl font-serif'>{title}</h1>
            </div>
            <div className='flex justify-center'>
                <p className='text-xl italic'>{phrase}</p>
            </div>
        </div>
        <hr className='container mx-auto border-gray-300' />
    </div>
  )
}
