import React from 'react'

function StrokeText({fontSize,fontWeight,displayText}) {
  return (
    <span className="stylized-text" style={{fontWeight:`${fontWeight}`, fontSize:`${fontSize}px`}}>{displayText}</span>
  )
}

export default StrokeText