import React from 'react'
import { Link } from 'react-router-dom'

const EnterAdmin = () => {
  return (
    <Link to='/admin' className='left-[30px] bottom-[30px] fixed p-[10px] bg-white border rounded-[5px] hover:bg-black hover:text-[white] duration-[0.5s] z-50'>
        <div>
                Enter admin pannel
        </div>
    </Link>
  )
}

export default EnterAdmin
