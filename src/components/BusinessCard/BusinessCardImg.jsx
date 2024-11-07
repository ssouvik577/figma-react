import React from 'react'
import "../../style/style.css"
import cardImg from "../../assets/images/Group 47906 copy 1.png"

function BusinessCardImg() {
  return (
    <div>
        <div className="h-[454px] w-[486px] gradient-bg relative  rounded-[60px]">
        <div className="relative h-[578px] w-[624px] bottom-[124px] right-[139px]">
            <img src={cardImg} alt="cardImg" />
        </div>
        </div>
    </div>
  )
}

export default BusinessCardImg