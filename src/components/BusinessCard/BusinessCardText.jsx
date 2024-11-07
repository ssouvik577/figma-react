import React from 'react'
import Btn from '../Button/Btn'
import arrow from '../../assets/images/Vector (1).png'

function BusinessCard() {
  return (
    <div className='w-[589px] h-[446px]'>
      <p className='font-urbanist font-extrabold text-7xl leading-[86px]'>Digital Business Cards More Than <span className='text-outline'>Just Cards</span>.</p>
      <p className='font-inter font-normal text-lg leading-9 mt-[6px]' style={{color:"#73737A"}}>Imagine a digital toolset that transforms your business interactions—where each connection is a step towards greater visibility and success.</p>
      <div className='mt-[24px] flex flex-row space-x-[27px]'>
        <Btn btnText="Create Your Free Profile" btnWidth={219}/>
        <Btn btnText="For Teams" btnWidth={143} btnBgColor='#ffffff' btnTextColor="#000000" btnBorder="1px solid #000000" btnImg={arrow}/>
      </div>
    </div>
  )
}

export default BusinessCard