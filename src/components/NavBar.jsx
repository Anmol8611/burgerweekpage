import React from 'react'
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='nav'>
        <div className="logo">
            <img src="/burgerAssets/logo.png" alt="logo" />
        </div>
        <div className="navContent">
            <div className="delivery">
                <div className="deliveryLogo">
                    <img src="/burgerAssets/VectorScootyLogo.png" alt="delivery logo" />
                </div>
                <div className="deliveryContact">
                    <p>Express Delivery +1 234 567 890</p>
                </div>
            </div>
            <div className="navOptions">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">MENU</a></li>
                    <li><a href="#">OUR STORY</a></li>
                    <li><a href="#">CONTACT US</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar