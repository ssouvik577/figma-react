import React from 'react'
import Btn from '../Button/Btn'

function UnderstandingMechanism() {
  return (
         <div className='flex flex-row justify-between w-[71.25rem]'>
                <div>
                    <p className='font-urbanist font-normal text-4xl leading-[3.4375rem]'>Understanding the Mechanics</p>
                    <p className='font-urbanist font-extrabold text-[3.125rem] leading-[3.4375rem]'>How It <span>Works</span></p>
                </div>
                <div className='ml-[29.5625rem]'>
                    <Btn btnText="Read More" btnWidth={146} />
                </div>
            </div>
  )
}

export default UnderstandingMechanism