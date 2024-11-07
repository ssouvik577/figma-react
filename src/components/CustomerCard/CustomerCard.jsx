import React from 'react'
import arrow1 from "../../assets/images/Vector (2).png"
import arrow2 from "../../assets/images/Vector (3).png"
import cardImg from "../../assets/images/image 118.png"
import Btn from '../Button/Btn'

function CustomerCard() {
    return (
        <>
            <div className='flex flex-col'>
                <div className='flex flex-row justify-between items-center h-[19.75rem] w-[48.4375rem] gap-[4.125rem]'>
                    <img src={arrow1} alt="arrow1" className='w-[2.9375rem] h-[1.4375rem]' />
                    <img src={cardImg} alt="cardImg" className='w-[34.375rem] h-[19.75rem]' />
                    <img src={arrow2} alt="arrow2" className='w-[2.9375rem] h-[1.4375rem]' />
                </div>
                <div className='w-[19.9375rem] h-[3.125rem] mt-[1.875rem] ml-[14.4375rem] flex flex-row justify-between items-center'>
                    <Btn btnText="Front / Back" btnWidth={146} />
                    <Btn btnText="Design my own" btnWidth={146} btnBgColor='#ffffff' btnTextColor="#000000" btnBorder="0.0625rem solid #000000" />
                </div>
            </div>

        </>
    )
}

export default CustomerCard