import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex w-[1100px] justify-between mb-[80px]'>
      <div className='flex flex-col justify-between border-r pr-[1rem] pt-[40px] '>
          <Link to='products/apple'>
            <div className='p-[20px] bg-secondary rounded-[5px] w-[100px] h-[100px] border'>
              <img src={require('../../../assets/others/apple.png')} alt="apple" />
            </div>
          </Link>
          <Link to='products/xiaomi'>
            <div className='p-[20px] bg-secondary rounded-[5px] w-[100px] h-[100px] border'>
              <img className='w-[100px]' src={require('../../../assets/others/xiaomi.png')} alt="xiaomi" />
            </div>
          </Link>
          <Link to='products/samsung'>
            <div className='p-[20px] bg-secondary rounded-[5px] w-[100px] h-[100px] border'>
              <img className='w-[100px]' src={require('../../../assets/others/samsung.png')} alt="samsung" />
            </div>
          </Link>
      </div>

      <div className='pt-[40px]'>
          <div className='relative rounded-[5px] overflow-hidden'>
            <Link to='/products' className='text-[white] underline absolute z-10 left-[67px] bottom-[40px]'>Shop now</Link>
            <img src={require('../../../assets/others/header_banner.png')} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Header
