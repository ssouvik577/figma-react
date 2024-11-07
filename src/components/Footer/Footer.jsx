import React from 'react'
import Logo from '../Logo/Logo'
import fbIcon from "../../assets/images/social/Social Icons (1).png"
import instaIcon from "../../assets/images/social/Social Icons.png"
import ticon from "../../assets/images/social/Vector (4).png" 
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <>
    <div className='flex flex-row justify-between w-[1140px] h-[240px]'>
        <div className='flex flex-col w-4/12'>
            <Logo height={100} width={106}/>
            <p className='mt-[8px] font-inter font-normal leading-9' style={{color:"#696969"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            <div className='w-[175px] h-[25px] flex flex-row justify-between'>
                <img src={fbIcon} alt="fbIcon" />
                <img src={instaIcon} alt="instaIcon" />
                <img src={ticon} alt="ticon" />
            </div>
        </div>
        <div className='font-urbanist flex flex-col w-4/12 mt-[36px]'>
          <p className='font-extrabold text-[28px] leading-[33px]'>Quick Nav</p>
          <ul style={{color:"#696969"}} className='leading-[49px] mt-[17px]'>
            <li><a href="#"  className="hover:text-blue-500">About Us</a></li>
            <li><a href="#"  className="hover:text-blue-500">Features</a></li>
            <li><a href="#"  className="hover:text-blue-500">Why Us</a></li>
            <li><a href="#"  className="hover:text-blue-500">Testimonials</a></li>
          </ul>
        </div>
        <div className='font-urbanist flex flex-col w-4/12 mt-[36px]'>
          <p className='font-extrabold text-[28px] leading-[33px]'>Solution</p>
          <ul style={{color:"#696969"}} className='leading-[49px] mt-[17px]'>
            <li><i class='fas fa-location-arrow' style={{color:"#000000"}}/> 918 Abner Road, Hudson</li>
            <li><i class="fa fa-envelope"  style={{color:"#000000"}}/> example@mail.com</li>
            <li><i class="fa fa-phone"  style={{color:"#000000"}}/> +1 234 567 890</li>
            <li><i class="fas fa-clock"  style={{color:"#000000"}}/> 07.00 AM - 23.00 PM</li>
          </ul>
        </div>
    </div>
        <div className='w-[1148px] h-[1px] mt-[44px]' style={{ backgroundColor: "#5B6A7E" }}></div>
        <div className='mt-[18px] w-[660px] h-[33px] ml-[244px]'>
          <p className='font-normal leading-[26px] text-[14px]'>Copyright 2024 © Onetaag. All rights reserved. | terms and conditions | Privacy Policy</p>
        </div>
        </>
  )
}

export default Footer