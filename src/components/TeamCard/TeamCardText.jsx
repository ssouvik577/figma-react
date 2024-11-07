import React from 'react'
import "../../style/style.css"
import Btn from '../Button/Btn'
import StrokeText from "../StrokeText/StrokeText"

function TeamCardText() {
    return (
        <div className='w-[34.9375rem] h-[29.25rem] leading-[3.4375rem]'>
            <div>
                <p className='font-urbanist font-normal text-4xl'>For Teams</p>
                <p className='font-urbanist font-extrabold text-[3.125rem] flex flex-row'>The #1 Platform for Teams,</p>
                <span><StrokeText fontWeight={800} fontSize={42} displayText="SMBs & Enterprises" /></span>
            </div>
            <div>
                <p className='mt-[0.1875rem] font-inter leading-9 text-[1.125rem] font-normal' style={{ color: "#696969" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
            <div className='mt-[1.5rem]'>
                <Btn btnText="Read More" btnWidth={146} />
            </div>
        </div>

    )
}

export default TeamCardText