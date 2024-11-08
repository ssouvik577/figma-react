import React from 'react'
import "../../style/style.css"

function Btn({btnText,btnWidth,btnBgColor = "bg-custom-gradient", btnTextColor = "#FFFFFF" ,btnBorder = null, btnImg = null}) {
  return (
    <div>
        <button className='h-[3.125rem] bg-custom-gradient rounded-[1.625rem] font-medium text-sm font-inter' style={{width:`${btnWidth}px`, color:`${btnTextColor}`, background:`${btnBgColor}` , border:`${btnBorder}`}}>{btnText}{btnImg && <img src={btnImg} alt="button icon" className="inline ml-2" />}</button>
    </div>
  )
}

export default Btn