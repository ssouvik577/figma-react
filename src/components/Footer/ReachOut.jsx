import React from 'react'
import Btn from "../Button/Btn"

function ReachOut() {
  return (
    <div className='w-[1140px] h-[224px] flex flex-row justify-between rounded-[20px] items-center' style={{background:"#FFE500"}}>
        <div className='font-urbanist flex flex-col ml-[33px]'>
            <p className='font-extrabold text-[50px] leading-[75px]'>Reach Out and Connect</p>
            <p className='font-normal text-lg leading-[22px]' style={{color:"#696969"}}>Have something on your mind? Drop us a message and we'll get back to you as soon as possible</p>
        </div>
        <div className='ml-[276px] mr-[43px]'>
           <Btn btnText="Get In Touch" btnWidth={165}/> 
        </div>
    </div>
  )
}

export default ReachOut