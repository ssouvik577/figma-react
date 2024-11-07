import React from 'react'

function MechanismCard({ step, img, heading, description }) {
  return (
    <div className='flex flex-col w-[16.1875rem] h-[15.8125rem]  gradient-bg-card rounded-[1.25rem]'>
      <div className='h-[3.4375rem] w-[10.4375rem] mt-[1.25rem] ml-[1.1875rem]'>
        <p className='font-urbanist font-extrabold text-[3.125rem] text-nowrap' style={{ color: "#FFFFFF" }}>Step {step}</p>
      </div>
      <div className='ml-[1.75rem] mt-[0.625rem]'>
        <img src={img} alt="card-img" className='h-[2.375rem] w-[2.375rem]' />
      </div>
      <div className='ml-[1.75rem] mt-[1.0625rem]'>
        <p className='font-urbanist font-extrabold text-[1.375rem] leading-5'>{heading}</p>
        <p className='font-urbanist font-normal text-base leading-5 mt-[0.375rem] pr-[0.625rem]'>{description}</p>
      </div>
    </div>

  )
}

export default MechanismCard