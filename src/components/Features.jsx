import React from 'react'
import './Features.css'
import Button from './Button'

const Features = () => {
  return (
    <section>
        <div className="featureGallery">
            <div className="popularBurger">
                <p>TRY IT TODAY</p>
                <h4>MOST POPULAR BURGER</h4>
            </div>
            <div className="Offer">
                <div className="funTaste">
                    <p>TRY IT TODAY</p>
                    <h4>MORE FUN<br/>MORE TASTE</h4>
                </div>
                <div className="freshChill">
                    <p>TRY IT TODAY</p>
                    <h4>FRESH & CHILI</h4>
                </div>
            </div>
        </div>
        <div className="featureContent">
            <div>
            <Button text={"ALWAYS TASTY BURGER"} color={'var(--orange-color)'} />
            </div>
            <h2>CHOOSE & ENJOY</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam impedit commodi possimus earum aspernatur! Modi natus culpa nostrum adipisci assumenda dignissimos autem soluta similique consequuntur</p>
        </div>
    </section>
  )
}

export default Features