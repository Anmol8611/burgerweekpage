import React from 'react'
import './Footer.css'
import { IoLocationSharp, IoMail } from 'react-icons/io5'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footerContainer">
        <div className="footerLogo">
            <img src="/burgerAssets/footerlogo.png" alt="logo" />
        </div>
        <div className="footerContent">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium animi tempora odit ea a ullam aliquid ratione velit, quidem ab neque, similique reiciendis eum eaque repellat delectus alias, omnis quaerat.</p>
            <address className="contactInfo">
                <div>
                    <IoLocationSharp className='icon icon1 className="subIcons" '/>
                    <h4>MAIN ROAD, BUILDING NAME, COUNTRY</h4>
                </div>
                <div>
                    <IoMail className='icon'/>
                    <h4>INFO@COMPANYNAME.COM</h4>
                </div>
            </address>
        </div>
        <div className="subfooter">
            <p>WebPage code rights reserved &copy; AnmolKumar</p>
            <div className="socialIcons">
                <BsInstagram className="subIcons" />
                <BsFacebook className="subIcons" />
                <BsTwitter className="subIcons" />
                <BsWhatsapp className="subIcons" />
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer