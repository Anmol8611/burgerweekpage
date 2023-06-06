import React from 'react'
import MenuCard from './MenuCard'
import './Menu.css';

const Menu = () => {
  return (
    <section className="menu">
        <MenuCard img={"MenuBurgers.png"}/>
        <MenuCard img={"HeroBurger.png"}/>
        <MenuCard img={"MenuBurgers.png"}/>
    </section>
  )
}

export default Menu