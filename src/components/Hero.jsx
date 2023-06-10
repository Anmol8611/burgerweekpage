import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="heading">
          <p>ITS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</p>
          <h1>BURGER</h1>
          <h3>WEEK</h3>
        </div>
        <div className="heroImages">
          <img src="/burgerAssets/HeroBurger.png" alt="HeroBurger" />
          <img src="/burgerAssets/HeroDrink.png" alt="HeroBurger" />
          <img src="/burgerAssets/HeroFrenchFries.png" alt="HeroBurger" />
        </div>
      </section>
  )
}

export default Hero