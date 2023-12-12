import React from 'react'
import { RxCrossCircled } from "react-icons/rx";

const ErrorModal = ({ text }) => {
  return (
    <div className='fixed w-[100%] top-[30px] flex justify-center animate-appear'>
        <div className='w-[400px] overflow-hidden rounded-[5px] border border-redButton'>
        <div className='h-[75px] bg-redButton grid place-content-center'>
            <RxCrossCircled size={40} className='text-white'/>
        </div>
        <div className='h-[75px] bg-white grid place-content-center text-center'>
            <p className='font-semibold'>Error!</p>
            <p className='text-[14px]'>{text}</p>
        </div>
    </div>
    </div>
  )
}

export default ErrorModal
