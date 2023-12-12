import React from 'react'
import { BiSend } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { navLinks } from '../utils/constants';
import { RiFacebookLine, RiInstagramLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='bg-black pt-[80px] pb-[16px]'>
      <div className='section__padding flex gap-[87px] flex-wrap justify-center items-center'>
        <div className='w-[217px] h-[236px]'>
            <h1 className='text-white font-[24px] mb-[1.5rem]'>Exclusive</h1>
            <p className='text-white  font-[20px] mb-[1.5rem]'>Subscribe</p>
            <p className='font-extralight mb-[1rem] text-white'>Get 10% off your first order</p>
            <form className='relative w-[217px]'>
                <input required className='text-white pl-[16px] pr-[48px] w-[100%] h-[48px] bg-black border border-white rounded-[4px]' type="email" placeholder='Enter your email' />
                <button type="submit"><BiSend size={24} className='absolute text-white right-[10px] top-[12px]'/></button>
            </form>
        </div>

        <div className='w-[217px] h-[236px]'>
            <h1 className='text-white font-[24px] mb-[1.5rem]'>Support</h1>
            <p className='font-extralight text-white mb-[1.5rem]'>111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</p>
            <p className='font-extralight mb-[1.5rem] text-white'>exclusive@gmail.com</p>
            <p className='font-extralight mb-[1.5rem] text-white'>+88015-88888-9999</p>
        </div>

        <div className='w-[217px] h-[236px]'>
            <h1 className='text-white font-[24px] mb-[1.5rem]'>Quick Link</h1>
                {navLinks.map((link, index) => (
                  <Link key={index} to={link === 'Home' ? '/' : `/${link}`}>
                    <p className='text-white font-extralight mb-[1rem]'>{link}</p>
                  </Link>
                ))}
        </div>
        
        <div className='w-[217px] h-[236px]'>
            <h1 className='text-white font-[24px] mb-[1.5rem]'>Download App</h1>
            <p className='font-extralight text-[12px] text-white mb-[0.5rem]'>Save $3 with App New User Only</p>

            <div className='flex gap-[8px] mb-[1rem]'>
                <img className='w-[76px] h-[76px]' src={require("../assets/others/qrcode.png")} alt="qr" />
                <div className='flex flex-col gap-[8px]'>
                    <img className='h-[35px]' src={require("../assets/others/playstore.png")} alt="gstore" />
                    <img className='h-[35px]' src={require("../assets/others/appstore.png")} alt="istore" />
                </div>
            </div>

            <div className='flex gap-[1.5rem]'>
                <a target='_blank' rel="noreferrer" href="https://www.facebook.com/"><RiFacebookLine size={25} className='text-white'/></a>
                <a target='_blank' rel="noreferrer" href="https://twitter.com/home"><RiTwitterLine size={25} className='text-white'/></a>
                <a target='_blank' rel="noreferrer" href="https://www.instagram.com/"><RiInstagramLine size={25} className='text-white'/></a>
                <a target='_blank' rel="noreferrer" href="https://md.linkedin.com/"><RiLinkedinLine size={25} className='text-white'/></a>
            </div>
        </div>
      </div>

      <div className='flex justify-center items-center flex-col gap-[1rem]'>
        <div className='h-[1px] w-[100%] bg-white opacity-[0.3]'/>
        <p className='text-white font-thin opacity-[0.6] text-[14px]'>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  )
}

export default Footer
