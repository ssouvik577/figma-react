import React from 'react'
import Btn from "../Button/Btn"
import bg from "../../assets/images/bg.png"

function ReachOut() {
  return (
    <div className='w-[71.25rem] h-[14rem] flex flex-row justify-between rounded-[1.25rem] items-center' style={{ background: "#FFE500",backgroundImage:`url(${bg})` }}>
      <div className='font-urbanist flex flex-col ml-[2.0625rem]'>
        <p className='font-extrabold text-[3.125rem] leading-[4.6875rem]'>Reach Out and Connect</p>
        <p className='font-normal text-lg leading-[1.375rem]' style={{ color: "#696969" }}>Have something on your mind? Drop us a message and we'll get back to you as soon as possible</p>
      </div>
      <div className='ml-[17.25rem] mr-[2.6875rem]'>
        <Btn btnText="Get In Touch" btnWidth={165} />
      </div>
    </div>

  )
}

export default ReachOut