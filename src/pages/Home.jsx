import React from 'react'
import Header from '../components/Header/Header'
import BusinessCard from '../components/BusinessCard/BusinessCardText'
import BusinessCardImg from '../components/BusinessCard/BusinessCardImg'
import TeamCardImg from '../components/TeamCard/TeamCardImg'
import TeamCardText from '../components/TeamCard/TeamCardText'
import Btn from '../components/Button/Btn'
import MechanismCard from '../components/MechanismCard/MechanismCard'
import cardImg1 from "../assets/images/Group 47917 (1).png"
import cardImg2 from "../assets/images/Group 47916.png"
import cardImg3 from "../assets/images/Group 47915.png"
import cardImg4 from "../assets/images/Group 47914.png"
import CustomerCard from '../components/CustomerCard/CustomerCard'
import ReachOut from '../components/Footer/ReachOut'
import Footer from '../components/Footer/Footer'
import bgImg from "../assets/images/Vector 62.png"
import UnderstandingMechanism from '../components/MechanismCard/UnderstandingMechanism'

const cardData = [
    { "id": 1, "img": cardImg1, "heading": "Order", "description": "Select a card and add-ons. Complete the order process and payment." },
    { "id": 2, "img": cardImg2, "heading": "Design", "description": "Provide design input and upload your logo through the design portal." },
    { "id": 3, "img": cardImg3, "heading": "Review", "description": "Review the digital design proof and provide feedback." },
    { "id": 4, "img": cardImg4, "heading": "Print & Ship", "description": "After approval we will program, produce and ship your card." }
]

function Home() {
    return (
        <>
        <div style={{ overflowX: 'hidden',backgroundImage: `url(${bgImg})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover',backgroundPosition: 'center', position:"absolute"}}>

            <div  className=' max-w-[90rem]' >
                <Header />
            </div>

            <div className='flex flex-row just '>
                <div className='mt-[8.3125rem] ml-[9.125rem]'>
                    <BusinessCard />
                </div>
                <div className='mt-[8.3125rem] ml-[4.5rem]'>
                    <BusinessCardImg />
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='mt-[11.5rem] ml-[8.9375rem]'>
                    <TeamCardImg />
                </div>
                <div className='ml-[13.875rem] mt-[13.875rem]'>
                    <TeamCardText />
                </div>
            </div>

            <div className='mt-[9.25rem] ml-[9.25rem] '>
                <UnderstandingMechanism/>
            </div>
            <div className='flex flex-row justify-between mt-[1.25rem] ml-[9.25rem] w-[71.25rem]'>
                {cardData.map((data, index) => {
                    return (
                        <MechanismCard
                            key={index}
                            step={`0${data.id}`}
                            img={data.img}
                            heading={data.heading}
                            description={data.description}
                        />
                    );
                })}
            </div>
            <div className='ml-[22.875rem] mt-[9.3125rem] max-h-[4.6875rem]'>
                <p className='font-urbanist font-extrabold text-[3.125rem] leading-[4.6875rem] text-nowrap'>Check Out These <span>Customers</span></p>
            </div>
            <div className='mt-[0.75rem] ml-[15.25rem] max-h-[2.6875rem] w-[59.0625rem]'>
                <p className='font-urbanist font-normal text-base text-center leading-[1.375rem] ' style={{ color: "#696969" }}>Companies big and small love digital business cards. We have onboarded over 25,000 teams including international banks, construction companies, retail, roofing, plumbing, marketing agencies, hospitals and many more.</p>
            </div>
            <div className='ml-[20.4375rem] mt-[2.625rem]'>
                <CustomerCard />
            </div>

            <div className='ml-[8.9375rem] mt-[6.125rem]'>
                <ReachOut />
            </div>
            <div className='ml-[9.75rem] mt-[4.1875rem]'>
                <Footer />
            </div>
        </div>
        </>

    )
}

export default Home