import React from 'react'
import ProjectImg from '../assets/images/projectimg.png'

export default function OurProjects() {
  return (
    <div className='container mx-auto py-10 px-5'>
        <div className='mb-10'>
            <h3 className='text-2xl font-semibold'>Our Projects</h3>
        </div>

        <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-12 lg:col-span-6'>
                <div className='h-[540px] flex flex-col bg-white text-black overflow-hidden group hover:cursor-pointer'>
                    <img src={ProjectImg} alt="" className='w-full h-3/4 object-cover transition-transform duration-300 group-hover:scale-105' />
                    <div className='py-4 duration-300 group-hover:py-6 flex flex-col h-full dark:bg-gray-900 dark:text-white'>
                        <h3 className='text-xl font-semibold mt-1 group-hover:underline'>E-Commerce Website</h3>
                        <p className='text-gray-600 mt-3 dark:text-gray-500'>This is a modern and stylish e-commerce platform featuring an elegant design, social media integration, and seamless shopping experience, making it a perfect destination for fashion enthusiasts.</p>
                        <div className='flex gap-2 mt-auto'>
                            <span className='px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-600'>Shopping</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
