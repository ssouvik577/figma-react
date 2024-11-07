import React from 'react'
import teamCardImg from "../../assets/images/Group 47908.png"

function TeamCardImg() {
  return (
    <div className="h-[34.0625rem] w-[21.9375rem] gradient-bg relative rounded-[3.75rem]">
      <div className="absolute h-[26.5625rem] w-[29.5625rem] mt-[4.4375rem]">
        <img src={teamCardImg} alt="cardImg" />
      </div>
    </div>

  )
}

export default TeamCardImg