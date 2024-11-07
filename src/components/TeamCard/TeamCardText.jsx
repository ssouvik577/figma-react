import React from 'react'
import "../../style/style.css"
import Btn from '../Button/Btn'

function TeamCardText() {
    return (
        <div className='w-[559px] h-[468px] leading-[55px] '>
            <div>
                <p className='font-urbanist font-normal text-4xl'>For Teams</p>
                <p className='font-urbanist font-extrabold text-[50px] flex flex-row'>The #1 Platform for Teams,</p>
                <p className='font-urbanist font-extrabold text-[42px]'>SMBs & Enterprises</p>
                </div>
                <div>
                    <p className='mt-[3px] font-inter leading-9 text-[18px] font-normal' style={{color:"#696969"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className='mt-[24px]'>
                    <Btn btnText="Read More" btnWidth={146}/>
                </div>
        </div>
    )
}

export default TeamCardText