import React from 'react'
import Logo from '../Logo/Logo'
import Btn from '../Button/Btn'

function Header() {

    return (
            <div className='flex flex-row justify-between overflow-x-hidden'>
                <div className='mt-[2.5rem] ml-[1.875rem] h-[6.87rem] w-[6.87rem]'>
                    <Logo height={110} width={110} />
                </div>
                <div className='mt-[5.3125rem] ml-[2.4375rem] w-[53.1875rem] h-[1.5625rem]'>
                    <ul className='flex flex-row justify-between ml-[2.4375rem] text-base font-medium leading-5'>
                        <li><a href="#" className="hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="hover:text-blue-500">For Team</a></li>
                        <li><a href="#" className="hover:text-blue-500">Features</a></li>
                        <li><a href="#" className="hover:text-blue-500">Why Us</a></li>
                        <li><a href="#" className="hover:text-blue-500">Share</a></li>
                        <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
                        <li><a href="#" className="hover:text-blue-500">Testimonials</a></li>
                    </ul>
                </div>

                <div className='flex flex-row  mt-[4.375rem] ml-[1.8125rem] w-[21rem] h-[3.125rem]'>
                    <div>
                        <Btn btnText="Login" btnWidth={146} />
                    </div>
                    <div className='ml-[1.0625rem]'>
                        <Btn btnText="Onetaag For Teams" btnWidth={155} />
                    </div>
                </div>
            </div>
    )
}

export default Header