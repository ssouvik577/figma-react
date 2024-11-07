import React from 'react'
import Logo from '../Logo/Logo'
import Btn from '../Button/Btn'

function Header() {
  return (
    <>
    <div className='flex flex-row justify-between'>
        <div className='mt-[40px] ml-[30px]'>
            <Logo height={110} width={110} />
        </div>
        <div className='mt-[85px] ml-[39px] w-[851px] h-[25px]'>
            <ul className='flex flex-row justify-between  ml-[39px] space-x-0 text-base font-medium leading-5'>
                <li><a href="#" className="hover:text-blue-500">Home</a></li>
                <li><a href="#" className="hover:text-blue-500">For Team</a></li>
                <li><a href="#" className="hover:text-blue-500">Features</a></li>
                <li><a href="#" className="hover:text-blue-500">Why Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Share</a></li>
                <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-500">Testimonials</a></li>
            </ul>
        </div>
        <div className='flex flex-row justify-between space-x-2 mt-[70px] ml-[29px] mr-[28px]'>
            <div>
            <Btn btnText="Login" btnWidth={146}/>
        </div>
        <div className='ml-[17px]'>
            <Btn btnText="Onetaag For Teams" btnWidth={155}/>
        </div>
        </div>
    </div>
    </>
  )
}

export default Header