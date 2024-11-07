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

const cardData = [
    {"id":1,"img":cardImg1,"heading":"Order","description":"Select a card and add-ons. Complete the order process and payment."},
    {"id":2,"img":cardImg2,"heading":"Design","description":"Provide design input and upload your logo through the design portal."},
    {"id":3,"img":cardImg3,"heading":"Review","description":"Review the digital design proof and provide feedback."},
    {"id":4,"img":cardImg4,"heading":"Print & Ship","description":"After approval we will program, produce and ship your card."}
]

function Home() {
    return (
        <div style={{background:`url${bgImg}`}}>

            {/* Header */}
            <Header />
            {/* End Header */}
            
            <div className='flex felex-row'>
                <div className='mt-[133px] ml-[146px]'>
                    <BusinessCard />
                </div>
                <div className='mt-[133px] ml-[80px]'>
                    <BusinessCardImg />
                </div>
            </div>
            <div className='flex felex-row'>
                <div className='mt-[184px] ml-[143px]'>
                    <TeamCardImg/>
                </div>
                <div className='ml-[222px] mt-[222px] '>
                    <TeamCardText/>
                </div>
            </div>

            <div>
                <div className='flex flex-row justify-between mt-[148px] ml-[148px]'>
                    <div>
                        <p className='font-urbanist font-normal text-4xl leading-[55px]' >Understanding the Mechanics</p>
                        <p className='font-urbanist font-extrabold text-[50px] leading-[55px]'>How It <span>Works</span></p>
                    </div>
                    <div className='ml-[473px]'>
                        <Btn btnText="Read More" btnWidth={146}/>
                    </div>
                </div>
                <div className='flex flex-row justify-between mt-[20px] ml-[148px]'>
                {cardData.map((data,index) => {
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
                <div className='ml-[366px] mt-[149px] h-[75px] w-[701px]'>
                    <p className='font-urbanist font-extrabold text-[50px] leading-[75px]'>Check Out These <span>Customers</span></p>
                </div>
                <div className='mt-[12px] ml-[244px] h-[43px] w-[945px]'>
                    <p className='font-urbanist font-normal text-base text-center leading-[22px]' style={{color:"#696969"}}>Companies big and small love digital business cards. We have onboarded over 25,000 teams including international banks, construction companies, retail, roofing, plumbing, marketing agencies, hospitals and many more.</p>
                </div>
                <div className='ml-[327px] mt-[42px]'>
                    <CustomerCard/>
                </div>
            </div>
                <div className='ml-[143px] mt-[98px]'>
                    <ReachOut/>
                </div>
                <div className='ml-[156px] mt-[67px]'>
                <Footer/>
                </div>
        </div>
    )
}

export default Home