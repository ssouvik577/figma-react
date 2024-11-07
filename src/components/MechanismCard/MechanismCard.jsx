import React from 'react'

function MechanismCard({step,img,heading,description}) {
  return (
    <div className='flex flex-col w-[259px] h-[253px] gradient-bg-card rounded-[20px]'>
        <div className='h-[55px] w-[167px] mt-[20px] ml-[19px]'>
            <p className='font-urbanist font-extrabold text-[50px] text-nowrap' style={{color:"#FFFFFF"}}>Step {step}</p>
        </div>
        <div className='ml-[28px] mt-[10px]'>
            <img src={img} alt="card-img" className='h-[38px] w-[38px]' />
        </div>
        <div className='ml-[28px] mt-[17px]'>
            <p className='font-urbanist font-extrabold text-[22px] leading-5'>{heading}</p>
            <p className='font-urbanist font-normal text-base leading-5 mt-[6px] pr-[10px]'>{description}</p>
        </div>
    </div>
  )
}   

export default MechanismCard