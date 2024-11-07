import React from 'react'
import "../../style/style.css"
import cardImg from "../../assets/images/Group 47906 copy 1.png"
import Logo from '../Logo/Logo'

function BusinessCardImg() {
  return (
    <div>
      <div className="h-[28.375rem] w-[30.375rem] gradient-bg relative rounded-[3.75rem]">
        <div className="relative h-[36.125rem] w-[39rem] bottom-[7.75rem] right-[8.6875rem]">
          <img src={cardImg} alt="cardImg" />
          <div className="absolute h-[1.828rem] w-[1.828rem] top-[17.2rem] left-[9.5rem] rotate-[54.84deg]">
            <Logo height={29.26} width={29.26}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BusinessCardImg