import React from 'react'
import './MenuCard.css';
import Button from './Button';

const MenuCard = (props) => {
  return (
    <div className='card'>
        <div>
            <img src={`/burgerAssets/${props.img}`} alt="card" />
        </div>
        <h4>Lorem, ipsum dolor.</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, voluptatem?</p>
        <div>
        <Button text={"Order Now"} color={`var(--red-color)`} />
        </div>
    </div>
  )
}

export default MenuCard