import React from 'react'
import { PiPhoneCallLight } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import logoImage from '../assets/images/logo2.png'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='bg-black text-slate-200 xl:px-10 2xl:px-32'>
      <div className='grid grid-cols-12 py-4'>
        <div className='col-span-12 xl:col-span-4 2xl:col-span-5 place-content-center py-10'>
          <div className='flex flex-col items-center gap-5'>
            <div className='flex flex-wrap items-center gap-3'>
              <img src={logoImage} alt="Logo Image" className='h-10 xl:h-15 2xl:h-20' />
              <h2 className='text-xl xl:text-4xl 2xl:text-5xl md:text-5xl font-semibold'>DevVisionary</h2>
            </div>
            <p className='text-sm xl:text-xl italic'>- Your tech vision, realized</p>
          </div>
        </div>
        <div className='flex flex-col mx-auto col-span-4 max-md:col-span-6 xl:col-span-2 xl:p-10'>
          <h3 className='text-white font-semibold text-lg mb-6'>Follow Us</h3>
          <div className='flex space-x-2 mb-4 max-xl:text-sm'><FaGithub size={24} /><Link className='hover:text-white'>Github</Link></div>
          <div className='flex space-x-2 mb-4 max-xl:text-sm'><FaDiscord size={24} /><Link className='hover:text-white'>Discord</Link></div>
          <div className='flex space-x-2 mb-4 max-xl:text-sm'><FaInstagram size={24} /><Link className='hover:text-white'>Instagram</Link></div>
          <div className='flex space-x-2 mb-4 max-xl:text-sm'><FaFacebookF size={24} /><Link className='hover:text-white'>Facebook</Link></div>
          <div className='flex space-x-2 max-xl:text-sm'><FaXTwitter size={24} /><Link className='hover:text-white'>Twitter</Link></div>
        </div>
        <div className='flex flex-col mx-auto col-span-4 max-md:col-span-6 xl:col-span-2 xl:p-10'>
          <h3 className='text-white font-semibold text-lg mb-6'>Legal</h3>
          <Link className='hover:text-white mb-4 max-xl:text-sm'>Privacy Policy</Link>
          <Link className='hover:text-white mb-4 max-xl:text-sm'>Terms & Conditions</Link>
          <Link className='hover:text-white mb-4 max-xl:text-sm'>Code of Conduct</Link>
          <Link className='hover:text-white mb-4 max-xl:text-sm'>DV Terms of Use</Link>
          <Link className='hover:text-white mb-4 max-xl:text-sm'>About Our Ads</Link>
        </div>
        <div className='flex flex-col mx-10 col-span-4 max-md:col-span-12 max-md:pt-6 xl:col-span-4 2xl:col-span-3 xl:py-10'>
          <h3 className='font-semibold text-lg mb-5 max-md:mb-3 max-md:text-center'>Subscribe</h3>
          <p>Subscribe to learn about new product features, the latest in technology, solutions and updates</p>
          <div>
            <Link to='/' className='mt-5 flex justify-between p-3 border rounded-xl hover:text-white cursor-pointer'>
              <div className='flex'><HiOutlineMail size={26} className='mr-2' /> <span>Your Email</span></div>
              <div className='flex'><IoIosArrowRoundForward size={24} /></div>
            </Link>
          </div>
        </div>
      </div>
      <hr className='border-t border-gray-700' />
      <div className='text-center py-4 max-xl:text-sm'>
        &copy; 2023 DevVisionary. All Rights Reserved.
      </div>
    </div>
  )
}