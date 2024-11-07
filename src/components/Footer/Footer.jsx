import React from 'react'
import Logo from '../Logo/Logo'
import fbIcon from "../../assets/images/social/Social Icons (1).png"
import instaIcon from "../../assets/images/social/Social Icons.png"
import ticon from "../../assets/images/social/Vector (4).png"
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <>
      <div className='flex flex-row justify-between w-[71.25rem] h-[15rem]'>
        <div className='flex flex-col w-4/12'>
          <Logo height={100} width={106}/>
          <p className='mt-[0.5rem] font-inter font-normal leading-9' style={{ color: "#696969" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          <div className='w-[10.9375rem] h-[1.5625rem] flex flex-row justify-between'>
            <img src={fbIcon} alt="fbIcon" />
            <img src={instaIcon} alt="instaIcon" />
            <img src={ticon} alt="ticon" />
          </div>
        </div>
        <div className='font-urbanist flex flex-col w-4/12 mt-[2.25rem]'>
          <p className='font-extrabold text-[1.75rem] leading-[2.0625rem]'>Quick Nav</p>
          <ul style={{ color: "#696969" }} className='leading-[3.0625rem] mt-[1.0625rem]'>
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Features</a></li>
            <li><a href="#" className="hover:text-blue-500">Why Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Testimonials</a></li>
          </ul>
        </div>
        <div className='font-urbanist flex flex-col w-4/12 mt-[2.25rem]'>
          <p className='font-extrabold text-[1.75rem] leading-[2.0625rem]'>Solution</p>
          <ul style={{ color: "#696969" }} className='leading-[3.0625rem] mt-[1.0625rem]'>
            <li><i className='fas fa-location-arrow' style={{ color: "#000000" }} /> 918 Abner Road, Hudson</li>
            <li><i className="fa fa-envelope" style={{ color: "#000000" }} /> example@mail.com</li>
            <li><i className="fa fa-phone" style={{ color: "#000000" }} /> +1 234 567 890</li>
            <li><i className="fas fa-clock" style={{ color: "#000000" }} /> 07.00 AM - 23.00 PM</li>
          </ul>
        </div>
      </div>
      <div className='w-[71.75rem] h-[0.0625rem] mt-[2.75rem]' style={{ backgroundColor: "#5B6A7E" }}></div>
      <div className='mt-[1.125rem] w-[41.25rem] h-[2.0625rem] ml-[15.25rem]'>
        <p className='font-normal leading-[1.625rem] text-[0.875rem]'>Copyright 2024 © Onetaag. All rights reserved. | terms and conditions | Privacy Policy</p>
      </div>

    </>
  )
}

export default Footer