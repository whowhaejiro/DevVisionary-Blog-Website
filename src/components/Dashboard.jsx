import React from 'react'

export default function Dashboard() {
  return (
    <div className='dark:bg-gray-900 dark:text-white'>
    <div className='container mx-auto py-10'>
        <div>
            <h3 className='text-2xl font-semibold'>Dashboard</h3>
        </div>
        <div className='grid grid-cols-12'>
            <div className='col-span-2 mt-10'>
                <p>Create blog post</p>
            </div>
            <div className='col-span-2 mt-10'>
                <p>Blog post</p>
            </div>
        </div>
    </div>
    </div>
  )
}
