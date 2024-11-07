import React from 'react'
import teamCardImg from "../../assets/images/Group 47908.png"

function TeamCardImg() {
  return (
    <div>
        <div className="h-[543px] w-[351px] gradient-bg relative  rounded-[60px]">
        <div className="absolute h-[425px] w-[473px] mt-[71px]">
            <img src={teamCardImg} alt="cardImg" />
        </div>
        </div>
    </div>
  )
}

export default TeamCardImg