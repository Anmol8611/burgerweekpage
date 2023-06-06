import React from 'react'
import './Registration.css';
import Button from './Button';

const Registration = () => {
  return (
    <section className='registrationContainer'>
        <div className='initialImages'>
            <img src="/burgerAssets/FormBurgerUp.png" alt="Burger" className='burger'/>
            <img src="/burgerAssets/FormDrink.png" alt="Drink" className='drink' />
        </div>
        <div className="formContainer">
            <h4>RESERVATION</h4>
            <h2>BOOK YOUR TABLE</h2>
            <form action="#" className='registrationForm'>
                <input className='i1' type="text" placeholder='Name'/>
                <input className='i2' type="email" placeholder='Email'/>
                <input className='i3' type="date" placeholder='Date'/>
                <input className='i4' type="text" placeholder='Time'/>
                <input className='i5' type="number" placeholder='No. of People'/>
                <Button text={"FIND A TABLE"} color={"var(--red-color)"}/>
            </form>
        </div>
        <div className="lastImage">
            <img src="/burgerAssets/FormPlateBurger.png" alt="Plate Burger" />
        </div>
    </section>
  )
}

export default Registration