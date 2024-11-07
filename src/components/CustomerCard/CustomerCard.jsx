import React from 'react'
import arrow1 from "../../assets/images/Vector (2).png"
import arrow2 from "../../assets/images/Vector (3).png"
import cardImg from "../../assets/images/image 118.png"
import Btn from '../Button/Btn'

function CustomerCard() {
    return (
        <>
        <div className='flex flex-col'>
        <div className='flex flex-row justify-between items-center h-[316px] w-[775px] gap-[66px]'>
            <img src={arrow1} alt="arrow1" className='w-[47px] h-[23px]' />
            <img src={cardImg} alt="cardImg"  className='w-[550px] h-[316px]'/>
            <img src={arrow2} alt="arrow2" className='w-[47px] h-[23px]' />
        </div>
        <div className='w-[319px] h-[50px] mt-[30px] ml-[231px] flex flex-row justify-between items-center'>
            <Btn btnText="Front / Back" btnWidth={146}/>
            <Btn btnText="Design my own" btnWidth={146} btnBgColor='#ffffff' btnTextColor="#000000" btnBorder="1px solid #000000"/>
        </div>
        </div>
        </>
    )
}

export default CustomerCard