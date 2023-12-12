import React from 'react'

import { Link } from 'react-router-dom'

import { LuPhone } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className='section__padding my-[80px]'>
      <div className='mb-[3rem]'>
        <p>
          <Link className='opacity-50' to='/'>Home /</Link> Contact
        </p>
      </div>

      <div className='flex gap-[30px] justify-center'>
        <div className='pt-[40px] px-[35px] w-[340px] shadow-md border rounded-[5px]'>
          <div className='flex gap-[1rem] mb-[1.5rem] items-center'>
            <div className='w-[40px] h-[40px] bg-redButton grid place-content-center rounded-full'>
              <LuPhone size={20} className='text-white'/>
            </div>
              <p className='font-medium'>Call to us</p>
          </div>

          <p className='mb-[1.5rem] text-[14px]'>We are available 24/7, 7 days a week.</p>
          <p className='mb-[2rem] text-[14px]'>Phone: +8801611112222</p>

          <div className='w-[100%] border-b mb-[2rem]'/>

          <div className='flex gap-[1rem] mb-[1.5rem] items-center'>
            <div className='w-[40px] h-[40px] bg-redButton grid place-content-center rounded-full'>
              <FaRegEnvelope size={20} className='text-white'/>
            </div>
              <p className='font-medium'>Write to us</p>
          </div>

          <p className='mb-[1.5rem] text-[14px]'>Fill out our form and we will contact you within 24 hours.</p>
          <p className='mb-[1.5rem] text-[14px]'>Emails: customer@exclusive.com</p>
          <p className='mb-[40px] text-[14px]'>Emails: support@exclusive.com</p>

        </div>

        <div className='shadow-md border rounded-[5px] pt-[40px] px-[30px] w-[800px]'>

          {/*Illustrative form*/}
          <form>
            <div className='flex justify-between mb-[2rem]'>
              <input className='outline-none px-[1rem] w-[235px] h-[50px] bg-secondary rounded-[5px]' placeholder='Name' type="text" required/>
              <input className='outline-none px-[1rem] w-[235px] h-[50px] bg-secondary rounded-[5px]' type="email" placeholder='Email' required/>
              <input className='outline-none px-[1rem] w-[235px] h-[50px] bg-secondary rounded-[5px]' type="tel" pattern='^[0-9]+$' title='Only digits' placeholder='Phone number' required/>
            </div>

            <textarea className='p-[1rem] w-[100%] h-[200px] bg-secondary rounded-[5px] resize-none outline-none mb-[2rem]' placeholder='Message'></textarea>

            <input type="submit" value="Send Message" className='w-[200px] h-[50px] bg-redButton hover:bg-redButtonHover duration-[0.5s] text-white rounded-[5px] float-right'  />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
