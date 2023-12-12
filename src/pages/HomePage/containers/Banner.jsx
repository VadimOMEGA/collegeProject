import React from 'react'

import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='w-[1100px] rounded-[5px] overflow-hidden relative mb-[80px]'>
      <img src={require("../../../assets/others/banner.png")} alt="banner" />
      <Link to='products'>
        <div className='w-[170px] h-[56px] bg-[#A74BDD] text-white font-[medium] rounded-[5px] grid place-content-center absolute left-[56px] bottom-[60px]'>
          <p>Buy now</p>
        </div>
      </Link>
    </div>
  )
}

export default Banner
