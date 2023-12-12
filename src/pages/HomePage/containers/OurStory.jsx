import React from 'react'

const OurStory = () => {
  return (
    <div className='flex justify-between mb-[80px] w-[1100px] items-center' >
        <div className='h-[500px] rounded-[5px] overflow-hidden'>
          <img className='w-[100%] h-[100%]' src={require("../../../assets/others/story.jpg")} alt="story" />
        </div>

        <div className='w-[525px] text-center'>
            <h1 className='text-[54px] font-semibold mb-[40px]'>Our Story</h1>
            <p className='text-justify mb-[1.5rem]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p className='text-justify'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>

    </div>
  )
}

export default OurStory
