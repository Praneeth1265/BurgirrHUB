import React from 'react';
import { Link } from 'react-router-dom';

const Menu2 = () => {
    return (
        <div className="menu-container">
            <a href="/" className="back-to-home-btn">Back to Home</a>
            <h1 className="menu-title">Menu</h1>
            <div className="menu-items">
                <div className="menu-item">
                    <img src="./dinner1.jpeg" alt="Potato" className="burger-image"/>
                    <Link to="/reservations" className="menu-link">Baked Pocoloco</Link>
                </div>  
                <div className="menu-item">
                    <img src="./dinner2.png" alt="Bacon Burger" className="burger-image"/>
                    <Link to="/reservations" className="menu-link">Chengunesia</Link>
                </div>
                <div className="menu-item">
                    <img src="./dinner3.png" alt="Veggie Burger" className="burger-image"/>
                    <Link to="/reservations"className="menu-link">Chechi's Cake</Link>
                </div>
                <div className="menu-item">
                    <img src="./dinner4.png" alt="Spicy Burger" className="burger-image"/>
                    <Link to="/reservations"className="menu-link">Smoky Soup</Link>
                </div>
                <div className="menu-item">
                    <img src="./dinner5.png" alt="Double Cheeseburger" className="burger-image"/>
                    <Link to="/reservations" className="menu-link">Naagin Noodles</Link>
                </div>
                <div className="menu-item">
                    <img src="./dinner6.png" alt="Chicken Burger" className="burger-image"/>
                    <Link to="/reservations" className="menu-link">Mirchi Bajji</Link>
                </div>
                <div className="menu-item">
                    <img src="./fish.jpg" alt="Fish Burger" className="burger-image"/>
                    <Link to="/reservations" className="menu-link">Fried Fish</Link>
                </div>
                <div className="menu-item">
                    <img src="./lunchchi.jpg" alt="Mushroom Burger" className="burger-image"/>
                    <Link to="/reservations" className="menu-link">Mangolia Mushroom</Link>
                </div>
                <div className="menu-item">
                    <img src="./dinner.jpg" alt="Mushroom Burger" className="burger-image"/>
                    <Link to="/reservations" className="menu-link">Indian THALA</Link>
                </div>
                <div className="menu-item">
                    <img src="./lunch1.png" alt="Mushroom Burger" className="burger-image"/>
                    <Link to="/reservations" className="menu-link">Burgirr's Burger</Link>
                </div>
                <div className="menu-item">
                    <img src="./sandwich.png" alt="Mushroom Burger" className="burger-image"/>
                    <Link to="/reservations" className="menu-link">Sandwich</Link>
                </div>
                <div className="menu-item">
                    <img src="./hyd_biry.jpg" alt="Mushroom Burger" className="burger-image"/>
                    <Link to="/reservations" className="menu-link">Cheeky Chicken Biryani</Link>
                </div>
            </div>
        </div>
    );
}

export default Menu2;
