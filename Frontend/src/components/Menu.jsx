import React from 'react'
import {data} from '../restApi.json'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>At BurgirrHUB, our menu is packed with mouthwatering options, but there are a few dishes that have become absolute fan favorites. These are the creations that keep our guests coming back for more, time and time again. Crafted with the freshest ingredients and bursting with flavor, our popular dishes are a must-try for anyone looking to experience the best of what we offer.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <Link to={'/menu2'}><button>{element.category}</button></Link>
                        </div>
                    ))
                }
            </div>
        </div>
      </section>
    </>
  )
}
export default Menu