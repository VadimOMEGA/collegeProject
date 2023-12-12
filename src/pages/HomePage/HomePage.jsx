import React from 'react'

import { Header, OurStory, Banner, Features } from './containers'

const HomePage = () => {
  return (
    <div className='section__padding mb-[80px] flex items-center flex-col' >
      <Header />
      <div className='border-b h-[1px] w-[1100px] mb-[80px]'/>
      <OurStory />
      <div className='border-b h-[1px] w-[1100px] mb-[80px]'/>
      <Banner />
      <div className='border-b h-[1px] w-[1100px] mb-[80px]'/>
      <Features />
    </div>
  )
}

export default HomePage
