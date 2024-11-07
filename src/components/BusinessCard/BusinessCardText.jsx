import React from 'react'
import Btn from '../Button/Btn'
import arrow from '../../assets/images/Vector (1).png'
import StrokeText from '../StrokeText/StrokeText'

function BusinessCard() {
  return (
    <div className='w-[36.8125rem] h-[27.875rem]'>
      <p className='font-urbanist font-extrabold text-7xl leading-[5.375rem]'>
        Digital Business Cards More Than <span><StrokeText fontWeight={800} fontSize={72} displayText="Just Card" /></span>.
      </p>
      <p className='font-inter font-normal text-lg leading-9 mt-[0.375rem]' style={{ color: "#73737A" }}>
        Imagine a digital toolset that transforms your business interactions—where each connection is a step towards greater visibility and success.
      </p>
      <div className='mt-[1.5rem] flex flex-row space-x-[1.6875rem]'>
        <Btn btnText="Create Your Free Profile" btnWidth={219} />
        <Btn btnText="For Teams" btnWidth={143} btnBgColor='#ffffff' btnTextColor="#000000" btnBorder="1px solid #000000" btnImg={arrow} />
      </div>
    </div>

  )
}

export default BusinessCard