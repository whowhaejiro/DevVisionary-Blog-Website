import React from 'react'
import JSLogo from '../assets/images/jslogo.png'

export default function PromoBanner() {
    const navigateToLink = () => {
        window.open("https://my-portfolio-website-iota-flame.vercel.app/", "_blank");
    }
  return (
    <div className='mt-14 bg-black text-white p-3 shadow-lg mb-10'>
        <div className='grid grid-cols-12 border border-gray-600'>
            <div className='col-span-7'>
                <div className='flex flex-col p-20'>
                    <h3 className='text-4xl mb-2'>Want to learn about JavaScript?</h3>
                    <p className='mb-6 text-white'>Checkout these resources with 100 JavaScript Projects</p>
                    <button onClick={navigateToLink} className='bg-white hover:bg-gray-500 hover:text-white py-2.5 rounded-lg text-black'>100 JavaScript Projects</button>
                </div>
            </div>
            <div className='col-span-5 flex items-center'>
                <img src={JSLogo} alt="" className='h-72 w-full object-contain' />
            </div>
        </div>
    </div>
  )
}
